import type { LiveLesson } from '../types';

/**
 * Lesson 482 · C1 · Se medio, se reflexivo, se dativo ético (course unit G182).
 * A map of the values of «se» (and of me / te / nos as their partners) for C1.
 * Builds on G060 (reflexive pronouns), G061 (lesson 361: ponerse, quedarse),
 * G064 (se lo = le lo), G149 (lesson 449: se pasivo / impersonal) and G150
 * (lesson 450: se accidental). Pasivo, impersonal and accidental are only
 * placed on the map here, never drilled again.
 * Content: reflexive (se afeita; test «a sí mismo»), reciprocal (se escriben;
 * test «el uno al otro»), middle / anticausative (la puerta se abrió, el hielo
 * se derrite, se enojó: admits «solo / sola», rejects «por + agente» and «a
 * propósito»); se accidental = middle se + dative of interest; pronominal verbs
 * with a change of meaning (ir/irse, dormir/dormirse, llevar/llevarse,
 * quedar/quedarse, acordar/acordarse de, parecer/parecerse a, ocurrir/
 * ocurrírsele, negar/negarse a; audit gap 20 extension) and inherent ones
 * (quejarse, arrepentirse, atreverse); aspectual dative (se comió todos los
 * buñuelos / comió buñuelos: needs a delimited complement); ethical dative (no
 * te me pongas nervioso; does not admit «a mí») versus dative of interest (se
 * me enfermó la gata; admits «a mí»); clitic order te me; se = le (se lo di).
 * Scene: Doble Línea, a subtitling studio in Bogotá. Lorena Calderón (senior
 * reviewer) checks the English subtitles that Gabriel Ospina (new subtitler)
 * wrote for «Los Arango», a family comedy: doña Rosario, don Hernando and their
 * adult children Julián and Sara. Listening: Rosario's voicemail to Julián from
 * episode 7 (Colombian voice, tú). Regional notes (Ampliación): enfermarse
 * (America) / enfermar (Spain); devolverse, regresarse, tardarse in parts of
 * America; morir / morirse in news. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 482,
  level: 'C1',
  title: 'Se medio, se reflexivo, se dativo ético',
  subtitle: 'Identificar qué aporta cada «se» (reflexivo, recíproco, medio, pronominal, aspectual, ético) y usarlo con precisión.',
  legend: [
    { tone: 'blue', label: 'REFLEXIVO Y RECÍPROCO · se afeita, se escriben (a sí mismo · el uno al otro)' },
    { tone: 'teal', label: 'SE MEDIO · se abrió, se derrite, se enojó (cambia el sujeto, sin agente)' },
    { tone: 'orange', label: 'VERBO PRONOMINAL · irse, dormirse, acordarse de (otro significado o solo con se)' },
    { tone: 'violet', label: 'DATIVOS EXPRESIVOS · se comió todos, no te me pongas, se me enfermó (totalidad, implicación)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un «se», muchos significados', coach: '¿Qué hace este «se»? What is this se doing?',
      steps: [
        { title: 'El capítulo 7 de «Los Arango» · Episode 7 of «Los Arango»', blocks: [
          { kind: 'lead', text: 'En Doble Línea, un estudio de subtitulado de Bogotá, Lorena Calderón revisa los subtítulos en inglés de «Los Arango», una comedia familiar. Gabriel Ospina, recién llegado, ha traducido casi todos los «se» con «himself» o «herself». Lorena le muestra que el mismo pronombre puede hacer **trabajos muy distintos**, y que para traducirlo hay que saber cuál hace en cada frase.', en: 'Se is one of the busiest words in Spanish. It can mean the action falls on the subject, that two people do it to each other, that something happens with no agent, that the verb itself changes meaning, or simply that the speaker is emotionally involved. Translators cannot render it with one English word.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase de la serie y tu alumno propone un subtítulo en inglés antes de mirar la tercera columna.', self: 'Lee cada frase de la serie y piensa cómo la dirías en inglés antes de mirar la tercera columna.' } },
          { kind: 'table', title: 'Seis frases, seis «se» · Six sentences, six kinds of se', head: ['Frase de la serie', 'Qué hace el pronombre', 'Subtítulo'], rows: [
            ['Don Hernando [[se afeita|blue]] cada mañana.', 'la acción recae en el sujeto', 'shaves'],
            ['Julián y Sara [[se escriben|blue]] cada semana.', 'cada uno lo hace al otro', 'write to each other'],
            ['La puerta del garaje [[se abrió|teal]] sola.', 'algo cambia sin que nadie actúe', 'opened by itself'],
            ['Doña Rosario [[se fue|orange]] a las ocho.', 'el verbo cambia: ir → irse', 'left'],
            ['Julián [[se comió|violet]] todos los buñuelos.', 'subraya la totalidad', 'ate up all the buñuelos'],
            ['[[No te me pongas|violet]] nervioso, mijo.', '«me»: la madre se implica', 'don’t go getting nervous on me'],
          ], note: 'Ya conoces otros tres valores: el **se pasivo** y el **impersonal** (se venden casas, se vive bien; clase 149) y el **se accidental** (se me rompió el vaso; clase 150). Hoy completas el mapa.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel subtituló «La puerta del garaje se abrió sola» como «The garage door opened itself». ¿Qué falla?', options: ['Falta el agente: alguien abrió la puerta.', 'Nada: el «se» es reflexivo.', 'La puerta no se abre «a sí misma»: el «se» indica que el cambio ocurre sin agente.'], answer: 2, why: 'Es un se medio: la puerta cambia de estado sin que nadie actúe. No hay reflexividad, así que basta «opened (by itself)».', en: 'Gabriel subtitled «La puerta del garaje se abrió sola» as «The garage door opened itself». What is wrong?' },
            { prompt: 'En «No te me pongas nervioso», ¿quién se pone nervioso?', options: ['Los dos.', 'La madre (me).', 'El hijo (te).'], answer: 2, why: '«Ponerse nervioso» lo hace el hijo (te). El «me» no es quien se pone nervioso: es la madre, que se implica en lo que dice.', en: 'In «No te me pongas nervioso», who is getting nervous?' },
          ] },
        ] },
        { title: 'Reflexivo y recíproco · Reflexive and reciprocal', mascot: '/brand/mascot/studying.webp', coach: '¿A sí mismo o el uno al otro? Himself, or each other?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'LA ACCIÓN VUELVE AL SUJETO O VA DE UNO A OTRO', question: '¿Puedes añadir «a sí mismo» o «el uno al otro» sin cambiar el sentido?', en: 'In a reflexive sentence the subject does the action to itself; in a reciprocal one, a plural subject does it to each other. Both are real objects of the verb, so you can test them by adding a sí mismo or el uno al otro.', formula: ['reflexivo: sujeto = objeto → se afeita (a sí mismo) · se lava las manos', 'recíproco: sujeto plural, cada uno al otro → se escriben (el uno al otro, mutuamente, entre sí)'],
            meaning: 'En el **reflexivo**, el sujeto hace la acción sobre sí mismo: el pronombre es complemento directo (**se afeita**) o indirecto (**se lava las manos**: las manos son suyas, sin «sus»). En el **recíproco**, el sujeto es plural y cada uno actúa sobre el otro (**se escriben, se abrazan, nos ayudamos**). Como los dos se parecen, a veces hay ambigüedad: «**Se miran**» puede ser en el espejo o el uno al otro. Para aclararlo, se añade **a sí mismos** o **el uno al otro / mutuamente / entre sí**.',
            examples: [
              { es: 'Sara [[se maquilla|blue]] en el taxi camino al trabajo.', en: 'Reflexive: she does her own make-up. English usually drops «herself».' },
              { es: 'Don Hernando [[se lava|blue]] las manos antes de cocinar.', en: 'Indirect reflexive: the hands are his, so Spanish uses las, not sus.' },
              { es: 'Los hermanos [[se ayudan|blue]] con las mudanzas.', en: 'Reciprocal: each helps the other.' },
              { es: 'Julián y Sara [[se culpan|blue]] el uno al otro.', en: 'El uno al otro removes any doubt: they blame each other, not themselves.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Pistas para el subtitulador · Clues for the subtitler', text: 'En inglés, el reflexivo casi nunca necesita «himself» con acciones cotidianas (**shaves, gets dressed, washes**): úsalo solo si hay contraste o énfasis («se culpa a sí mismo» → blames himself). El recíproco sí pide casi siempre **each other**.', en: 'English rarely needs himself or herself for everyday grooming; keep it for emphasis or contrast. Reciprocals, on the other hand, nearly always need each other.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Lorena y su socia se felicitaron después del estreno.» ¿Qué prueba confirma que es recíproco?', options: ['Se puede quitar el «se» sin cambiar nada.', 'Se puede añadir «solas».', 'Se puede añadir «la una a la otra».'], answer: 2, why: 'Sujeto plural y cada una felicita a la otra: admite «la una a la otra» (o «mutuamente»).', en: 'Which test confirms that the sentence is reciprocal?' },
            { prompt: '¿Cuál es la forma natural?', options: ['Julián se cepilla los dientes.', 'Julián se cepilla sus dientes.', 'Julián cepilla a sí mismo los dientes.'], answer: 0, why: 'Reflexivo indirecto: «se» ya indica de quién son los dientes, así que va el artículo.', en: 'Which is the natural form? (Julián brushes his teeth.)' },
          ] },
        ] },
        { title: 'El se medio: pasa en el sujeto · The middle se: it happens to the subject', mascot: '/brand/mascot/standing.webp', coach: 'Nadie lo hace: simplemente pasa. Nobody does it: it just happens.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SE MEDIO (ANTICAUSATIVO)', question: '¿Hay alguien que provoque el cambio, o el sujeto simplemente cambia?', en: 'Many verbs have two versions: a causative one with an agent (someone opens the door) and a middle one where the thing just changes (the door opens). The middle se is not reflexive: the door does not open «itself». It also covers emotions: something angers you, or you get angry.', formula: ['causa + verbo + objeto → El viento abrió la puerta. · La noticia enojó a Sara.', 'objeto como sujeto + se + verbo → La puerta se abrió. · Sara se enojó.'],
            meaning: 'Con el **se medio**, lo que era objeto pasa a ser sujeto y el cambio se presenta **sin agente**: **la puerta se abrió, el hielo se derrite, la ropa se secó, el barco se hundió**. Funciona igual con las emociones: algo **enoja, preocupa, aburre** a alguien → esa persona **se enoja, se preocupa, se aburre**. Pruebas: admite **solo / sola** o una causa natural (con el viento, con el calor), pero **no** admite un agente con **por** ni **a propósito**. Si añades un dativo, obtienes el se accidental: se rompió el vaso → **se me** rompió el vaso.',
            examples: [
              { es: 'Con el sol de mediodía, el hielo [[se derrite|teal]] en minutos.', en: 'A change of state with a natural cause, no agent.' },
              { es: 'Sara [[se enojó|teal]] cuando vio el final del capítulo.', en: 'Emotional middle: the ending angered her. Enojarse is usual in Latin America; enfadarse in Spain.' },
              { es: 'Las ventanas [[se empañaron|teal]] con el vapor de la cocina.', en: 'The windows steamed up: nobody did it on purpose.' },
              { es: 'La puerta [[se abrió|teal]] sola. ✗ La puerta se abrió por el portero.', en: 'Sola fits; an agent with por does not. With an agent, use the active voice: el portero abrió la puerta.' },
            ] },
          { kind: 'compare', title: 'Medio, pasivo o activo · Middle, passive or active', columns: [
            { tone: 'neutral', label: 'ACTIVO', sentence: 'El portero abrió la puerta a las nueve.', idea: 'Agente expreso y relevante.', en: 'The agent is named because it matters.' },
            { tone: 'neutral', label: 'SE PASIVO (clase 149)', sentence: 'Se abrieron las puertas a las nueve para el público.', idea: 'Alguien las abrió a propósito, pero no se dice quién.', en: 'An implicit agent acted on purpose: hence para el público is possible.' },
            { tone: 'teal', label: 'SE MEDIO', sentence: 'La puerta [[se abrió|teal]] sola con el viento.', idea: 'Nadie actúa: el cambio ocurre en la puerta.', en: 'No agent at all: the change just happens to the door.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿En qué frase el «se» es medio?', options: ['Se reparten volantes en la entrada.', 'La leche se cortó con el calor.', 'Se busca traductor con experiencia.'], answer: 1, why: 'La leche cambia de estado sin agente (admite «sola», «con el calor»). Las otras tienen un agente implícito: son pasiva e impersonal.', en: 'In which sentence is se a middle se?' },
            { prompt: 'La noticia preocupó a doña Rosario. → Doña Rosario ___ con la noticia.', options: ['preocupó', 'se preocupó a sí misma', 'se preocupó'], answer: 2, why: 'Verbo de emoción en forma media: la persona afectada pasa a sujeto y aparece «se».', en: 'The news worried doña Rosario. → Doña Rosario got worried at the news.' },
          ] },
        ] },
        { title: 'Verbos que cambian con «se» · Verbs that change with se', mascot: '/autoestudio/mascot/noting.webp', coach: 'Ir no es irse. Going is not leaving.', blocks: [
          { kind: 'table', title: 'Con y sin «se» · With and without se', head: ['Sin se', 'Con se', 'Ejemplo con se'], rows: [
            ['ir: go (to a place)', '[[irse|orange]]: leave', 'Gabriel [[se fue|orange]] sin despedirse.'],
            ['dormir: sleep', '[[dormirse|orange]]: fall asleep', 'Don Hernando [[se durmió|orange]] en el segundo tiempo.'],
            ['llevar: carry, take (to)', '[[llevarse|orange]]: take away; get on (bien / mal)', 'Sara [[se llevó|orange]] el cargador. · [[Se llevan|orange]] muy bien.'],
            ['quedar: arrange, agree (en); be left', '[[quedarse|orange]]: stay; [[quedarse con|orange]]: keep', 'Me [[quedé con|orange]] el guion original.'],
            ['acordar: agree, decide', '[[acordarse de|orange]]: remember', '¿Te [[acuerdas de|orange]] la primera temporada?'],
            ['parecer: seem', '[[parecerse a|orange]]: look like, resemble', 'Julián [[se parece a|orange]] su abuelo.'],
            ['ocurrir: happen', '[[ocurrírsele|orange]] algo a alguien: occur to', 'A Lorena [[se le ocurrió|orange]] un subtítulo mejor.'],
            ['negar: deny', '[[negarse a|orange]]: refuse to', 'El actor [[se negó a|orange]] repetir la escena.'],
          ], note: 'Fíjate en las preposiciones: acordarse **de**, parecerse **a**, negarse **a**, quedarse **con**. Y en «quedar»: **quedamos en** vernos a las nueve (acordamos), no «nos quedamos en vernos».' },
          { kind: 'concept', tone: 'orange', label: 'PRONOMINALES INHERENTES', question: '¿Existe el verbo sin «se»?', en: 'Some verbs only exist with se: quejarse, arrepentirse, atreverse, jactarse. Here se is not an object and has no separate meaning: it is part of the verb, like the particle in English give up.', formula: ['quejarse de · arrepentirse de · atreverse a · darse cuenta de', '✗ quejar, ✗ arrepentir (no existen con este sentido)'],
            meaning: 'Algunos verbos **solo** existen con «se»: **quejarse, arrepentirse, atreverse, jactarse**. Aquí el pronombre no tiene función propia: forma parte del verbo. Por eso no admite «a sí mismo» ni se puede quitar.',
            examples: [
              { es: 'Don Hernando [[se queja|orange]] de todo, pero nunca cocina.', en: 'Quejarse has no non-pronominal version with this meaning.' },
              { es: 'Gabriel no [[se atrevió a|orange]] corregir a Lorena.', en: 'Atreverse a + infinitive: to dare to.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lorena y el cliente ___ cambiar la fecha de entrega.', options: ['se acordaron de', 'acordaron', 'se acordaron'], answer: 1, why: 'Acordar (sin se) = llegar a un acuerdo. «Se acordaron de» significaría que lo recordaron.', en: 'Lorena and the client agreed to change the delivery date.' },
            { prompt: 'Me pidieron firmar sin leer el contrato, pero ___.', options: ['me negué', 'lo negué', 'negué'], answer: 0, why: 'Negarse (a hacer algo) = rechazar. «Negar» es decir que algo no es verdad.', en: 'They asked me to sign without reading the contract, but I refused.' },
          ] },
        ] },
        { title: 'Dativos expresivos: aspectual, ético, de interés · Expressive datives', mascot: '/brand/mascot/speaking.webp', coach: 'Se puede quitar, pero algo se pierde. You can drop it, but something is lost.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DATIVO ASPECTUAL', question: '¿El objeto tiene una cantidad delimitada (la, todos, tres, una botella)?', en: 'With verbs of consuming or taking in (eat, drink, read, learn, watch), a pronoun that matches the subject stresses that the action was completed, often with a hint of enjoyment or excess, like English eat up, drink down, read through. It needs a delimited object: a specific amount, not just «buñuelos» or «water».', formula: ['me · te · se · nos · os (= el sujeto) + comer, beber, tomar, leer, aprender, saber, ver… + objeto delimitado', 'Se comió todos los buñuelos. · ✗ Se comió buñuelos → Comió buñuelos.'],
            meaning: 'Con verbos de consumo o de conocimiento, un pronombre que coincide con el sujeto presenta la acción **completa**, a menudo con un matiz de disfrute o exceso: **se comió la bandeja entera, me leí el libro en una noche, se sabe todos los diálogos**. Si lo quitas, el hecho es el mismo, pero pierde ese matiz. Exige un complemento **delimitado** (artículo, número, todo, una botella de…): con un nombre sin determinante no funciona: **comió buñuelos, bebió agua**, no «se comió buñuelos».',
            examples: [
              { es: 'Julián [[se tomó|violet]] tres tintos antes de la grabación.', en: 'Three coffees, all of them: delimited, so the aspectual se fits. Tinto is black coffee in Colombia.' },
              { es: 'Sara [[se sabe|violet]] de memoria todos los diálogos de su personaje.', en: 'Saberse: to know thoroughly, by heart.' },
              { es: 'Tomó café toda la mañana. (no «se tomó café»)', en: 'Café with no determiner is an open amount, so no se.' },
            ] },
          { kind: 'compare', title: 'Tres dativos con «me / te» · Three datives with me / te', columns: [
            { tone: 'violet', label: 'ASPECTUAL', sentence: '¡[[Cómetelo|violet]] todo!', idea: '«Te» = tú, el que come: totalidad.', en: 'Te refers to the subject (you): eat it all up.' },
            { tone: 'violet', label: 'ÉTICO', sentence: '¡[[Cómemelo|violet]] todo!', idea: '«Me» = la madre, que no come: se implica afectivamente. No admite «a mí».', en: 'Me is the speaker, who is not eating: she is emotionally invested. It cannot be doubled with a mí.' },
            { tone: 'violet', label: 'DE INTERÉS', sentence: '[[Se me enfermó|violet]] la gata.', idea: '«Me» = la persona afectada. Admite «a mí»: a mí se me enfermó.', en: 'Me is the person affected by what happened, and it can be doubled: a mí se me enfermó la gata.' },
          ] },
          { kind: 'concept', tone: 'violet', label: 'DATIVO ÉTICO', question: '¿Ese «me / te» no hace nada en la acción y solo añade implicación?', en: 'The ethical dative is a me or te that plays no part in the action: it shows that the speaker (or the listener) is emotionally involved, much like English on me in don’t go quiet on me. It is colloquial, it cannot be doubled with a mí, and it comes after te in the cluster: te me, never me te.', formula: ['no te me pongas nervioso · el niño no me come · no te me vayas', 'orden: te + me (no «me te»)'],
            meaning: 'El **dativo ético** es un «me» (a veces «te») que no participa en la acción: quien habla se muestra **implicado**: cariño, preocupación, impaciencia. Es coloquial, se puede quitar sin cambiar el hecho y **no admite** «a mí» (✗ no te me pongas nervioso a mí). Si va con otro pronombre, el orden es **te me**, **se me**. El **dativo de interés** es parecido, pero señala a alguien realmente afectado (se me enfermó el niño, me rayaron el carro) y sí admite «a mí».',
            examples: [
              { es: '[[No te me pongas|violet]] dramático, que solo es un subtítulo.', en: 'Don’t go all dramatic on me: Lorena is involved, not dramatic.' },
              { es: 'Mi hijo no [[me come|violet]] verduras.', en: 'A classic: the child does not eat «for me»; the parent shows concern.' },
              { es: 'A mí [[se me enfermó|violet]] la gata justo el día del estreno.', en: 'Dative of interest: the speaker is affected, so a mí is possible. Enfermarse is usual in Latin America; in Spain, enfermar or ponerse enfermo.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es incorrecta?', options: ['Bebió limonada.', 'Se bebió una jarra de limonada.', 'Se bebió limonada.'], answer: 2, why: 'El dativo aspectual necesita una cantidad delimitada (una jarra, la limonada, toda…). Con un nombre sin determinante, el verbo va sin se.', en: 'Which sentence is incorrect?' },
            { prompt: 'En «No te me vayas sin despedirte», ¿qué es «me»?', options: ['Complemento directo de «irse».', 'Reflexivo.', 'Dativo ético: quien habla se implica.'], answer: 2, why: '«Te» va con irse (pronominal); «me» no participa en la acción y no admite «a mí»: es ético.', en: 'In «No te me vayas sin despedirte», what is me?' },
          ] },
        ] },
        { title: 'Cómo identificar cada «se» · How to identify each se', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Prueba antes de traducir. Test before you translate.', blocks: [
          { kind: 'decide', title: '¿Qué «se» es?', steps: [
            { q: '¿Va justo antes de lo, la, los, las y sería «le / les» sin ese pronombre?', yes: 'Es la **variante de le** (clase 64): «**Se lo** expliqué a Gabriel» = le expliqué el error. No es reflexivo.', no: 'next' },
            { q: '¿Admite «a sí mismo / a sí misma»?', yes: '**Reflexivo**: «Se culpa (a sí mismo)».', no: 'next' },
            { q: '¿El sujeto es plural y admite «el uno al otro / mutuamente»?', yes: '**Recíproco**: «Se escriben (el uno al otro)».', no: 'next' },
            { q: '¿Hay alguien que actúa a propósito, aunque no se diga quién (se venden, se busca, se vive bien)?', yes: '**Pasivo o impersonal** (clase 149).', no: 'next' },
            { q: '¿El sujeto cambia sin agente y admite «solo / sola», pero no «por + alguien»?', yes: '**Medio**: «La puerta se abrió sola». Con me / te / le delante, es el se accidental (clase 150).', no: 'next' },
            { q: '¿El verbo sin «se» significa otra cosa o no existe (ir / irse, quejarse)?', yes: '**Pronominal**: aprende el verbo con su preposición (acordarse de, negarse a).', no: 'next' },
            { q: '¿Se puede quitar sin cambiar el hecho y el objeto es delimitado (todos, la, tres)?', yes: '**Aspectual**: «Se comió todos los buñuelos».', no: 'Mira el otro pronombre: si quien habla solo se implica (no te me pongas), es **ético**; si alguien resulta afectado (se me enfermó), **de interés**.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Fronteras borrosas · Blurred borders', text: 'Algunos verbos están en dos casillas: **enojarse** es medio (algo te enoja) y también pronominal; **irse** añade a «ir» la idea de abandonar un lugar. La gramática describe un continuo. Lo importante no es la etiqueta, sino saber **qué aporta** el pronombre y si puedes quitarlo.', en: 'Some verbs sit in two boxes: enojarse is both middle and pronominal, and irse adds the idea of leaving a place to ir. Grammars describe a continuum. What matters is knowing what the pronoun adds and whether it can be removed.' },
          { kind: 'mistakes', title: 'Errores frecuentes · Common mistakes', items: [
            { wrong: 'Se comió arepas y se fue.', right: 'Comió arepas y se fue. · Se comió dos arepas y se fue.', why: 'El dativo aspectual exige un objeto delimitado; «arepas» sin determinante no lo es.' },
            { wrong: 'La ventana se rompió por los niños.', right: 'Los niños rompieron la ventana.', why: 'El se medio no admite un agente con «por». Si hay agente, usa la activa.' },
            { wrong: 'No me acuerdo el nombre del actor.', right: 'No me acuerdo del nombre del actor.', why: 'Acordarse lleva «de» (o usa recordar: no recuerdo el nombre).' },
            { wrong: 'Sara se parece con su madre.', right: 'Sara se parece a su madre.', why: 'Parecerse rige «a».' },
            { wrong: 'Lorena ya fue; no está en la oficina.', right: 'Lorena ya se fue; no está en la oficina.', why: 'Sin destino y con el sentido de «marcharse», el verbo es irse.' },
            { wrong: 'No me te pongas nervioso.', right: 'No te me pongas nervioso.', why: 'El orden es te + me: la segunda persona va antes que la primera.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Doña Rosario: «Se lo dije a Sara mil veces». ¿Qué es «se»?', options: ['Aspectual.', 'Reflexivo: Rosario se lo dijo a sí misma.', 'Variante de «le»: le dije eso a Sara.'], answer: 2, why: 'Delante de «lo», «le» se convierte en «se»: le dije (eso) → se lo dije.', en: 'Rosario: «I told Sara a thousand times». What is se?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno inventa una frase para cada casilla del árbol y tú la pruebas en voz alta con «a sí mismo», «el uno al otro», «sola» o «a mí».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión de subtítulos', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Lorena revisa el trabajo de Gabriel · Lorena reviews Gabriel’s work', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lorena y tu alumno es Gabriel. Después tu alumno toca cada expresión marcada y dice qué «se» es y cómo lo subtitularía.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué «se» es y cómo lo dirías en inglés?' } },
          { kind: 'explore', title: 'Todos los «se» no son «himself»', setting: 'Martes por la tarde en Doble Línea, en Bogotá. Lorena y Gabriel miran juntos el capítulo 7 de «Los Arango» en la pantalla de la sala de revisión. (Lorena goes through Gabriel’s subtitles for episode 7.)', lines: [
            { who: 'Lorena', text: 'Gabriel, revisé tu capítulo. Vas muy bien, pero casi todos los «se» los tradujiste con «himself».', en: 'Gabriel, I went through your episode. You’re doing really well, but you translated nearly every se as himself.' },
            { who: 'Gabriel', text: '¿Y no es lo normal? Don Hernando [[se afeita|blue]] y puse «shaves himself».', en: 'Isn’t that the usual thing? Don Hernando se afeita, so I put shaves himself.' },
            { who: 'Lorena', text: 'Ese está bien, aunque basta con «shaves». El problema es el garaje: la puerta [[se abre sola|teal]] y escribiste «opens itself».', en: 'That one’s fine, though shaves is enough. The problem is the garage: the door opens by itself and you wrote opens itself.' },
            { who: 'Gabriel', text: 'Ya veo, ahí nadie abre nada. ¿Y Julián y Sara? [[Se escriben|blue]] desde que él [[se fue|orange]] a Medellín.', en: 'I see, nobody opens anything there. And Julián and Sara? They’ve been writing to each other since he left for Medellín.' },
            { who: 'Lorena', text: '«Each other», claro. Ahora, la madre: «¡Julián [[se comió|violet]] todos los buñuelos!». No es solo «ate».', en: 'Each other, of course. Now, the mother: Julián ate up all the buñuelos! It isn’t just ate.' },
            { who: 'Gabriel', text: '¿«Polished off»? O sea, que el «se» dice que no quedó ni uno.', en: 'Polished off? So the se tells you there wasn’t a single one left.' },
            { who: 'Lorena', text: 'Exacto. Y por eso ella no diría «se comió buñuelos» a secas. Luego viene mi frase favorita: «[[No te me pongas|violet]] dramático».', en: 'Exactly. And that’s why she wouldn’t just say se comió buñuelos. Then comes my favourite line: don’t go all dramatic on me.' },
            { who: 'Gabriel', text: 'Ese «me» me desconcertó. Rosario no es la que [[se pone|teal]] dramática…', en: 'That me threw me. Rosario isn’t the one getting dramatic…' },
            { who: 'Lorena', text: 'No: es la madre metiéndose en la frase. Si lo quitas, la orden es la misma, pero pierde el cariño y la impaciencia.', en: 'No, it’s the mother putting herself into the sentence. Take it out and the order is the same, but you lose the affection and the impatience.' },
            { who: 'Gabriel', text: '¿Y lo de don Hernando en el sofá? Puse «he slept».', en: 'And don Hernando on the sofa? I put he slept.' },
            { who: 'Lorena', text: 'Pero [[se durmió|orange]] en pleno partido: «fell asleep». Y cuando la abuela le dice «[[te pareces a|orange]] tu abuelo», no es «you seem».', en: 'But he fell asleep in the middle of the match. And when the grandmother says te pareces a tu abuelo, it isn’t you seem: it’s you look like.' },
            { who: 'Gabriel', text: 'Listo, mañana repaso los «se» uno por uno. Y si no [[me acuerdo de|orange]] alguna prueba, te pregunto.', en: 'Right, tomorrow I’ll go over every se one by one. And if I can’t remember one of the tests, I’ll ask you.' },
          ], notes: {
            'se afeita': '**Reflexivo**: admite «a sí mismo». En inglés no hace falta «himself» con las rutinas.',
            'se abre sola': '**Se medio**: la puerta cambia de estado sin agente. «Sola» es justamente la prueba. No es «itself».',
            'Se escriben': '**Recíproco**: sujeto plural (Julián y Sara) y cada uno escribe al otro: «el uno al otro».',
            'se fue': '**Irse** = marcharse, salir de un lugar. «Fue a Medellín» diría solo el destino; «se fue a Medellín» subraya que dejó Bogotá.',
            'se comió': '**Dativo aspectual**: el «se» coincide con el sujeto y subraya que se los comió todos. Exige un objeto delimitado: «todos los buñuelos».',
            'No te me pongas': '**Dativo ético**: «te» va con ponerse (el hijo); «me» es la madre, que se implica. No admite «a mí». Orden: te + me.',
            'se pone': '**Ponerse** + adjetivo (clase 61): cambio de estado, un valor medio. Aquí Gabriel lo usa para descartar que «me» sea quien se pone dramática.',
            'se durmió': '**Dormirse** = quedarse dormido, empezar a dormir. «Durmió» sería pasar un tiempo durmiendo.',
            'te pareces a': '**Parecerse a** = tener parecido físico o de carácter. «Parecer» sin se = dar la impresión.',
            'me acuerdo de': '**Acordarse de** = recordar. «Acordar» sin se significa llegar a un acuerdo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuál es el error general de Gabriel?', options: ['Tradujo casi todos los «se» con «himself».', 'No tradujo los «se».', 'Usó «each other» para todo.'], answer: 0, why: '«Casi todos los "se" los tradujiste con "himself"».', en: 'What is Gabriel’s general mistake?' },
            { prompt: '¿Por qué Rosario no diría «se comió buñuelos» a secas?', options: ['Porque es demasiado formal.', 'Porque «comerse» no existe.', 'Porque el «se» aspectual necesita una cantidad delimitada.'], answer: 2, why: 'El dativo aspectual exige un objeto delimitado: «todos los buñuelos».', en: 'Why wouldn’t Rosario just say «se comió buñuelos»?' },
            { prompt: 'Según Lorena, ¿qué se pierde si se quita el «me» de «No te me pongas dramático»?', options: ['La orden.', 'El cariño y la impaciencia de la madre.', 'El sujeto de la frase.'], answer: 1, why: '«La orden es la misma, pero pierde el cariño y la impaciencia».', en: 'According to Lorena, what is lost without the me?' },
          ] },
        ] },
        { title: 'Etiqueta los «se» del capítulo · Label the se in the episode', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases del capítulo 7 · Lines from episode 7', categories: [
            { id: 'refl', label: 'Reflexivo o recíproco', tone: 'blue' },
            { id: 'medio', label: 'Se medio', tone: 'teal' },
            { id: 'pron', label: 'Verbo pronominal', tone: 'orange' },
            { id: 'dat', label: 'Dativo aspectual o ético', tone: 'violet' },
          ], items: [
            { text: 'La puerta del garaje se abre sola.', answer: 'medio', why: 'Sin agente; admite «sola».' },
            { text: 'Julián y Sara se escriben.', answer: 'refl', why: 'Recíproco: el uno al otro.' },
            { text: 'Don Hernando se durmió en pleno partido.', answer: 'pron', why: 'Dormirse = quedarse dormido: otro significado.' },
            { text: 'Julián se comió todos los buñuelos.', answer: 'dat', why: 'Aspectual: coincide con el sujeto y marca totalidad.' },
            { text: 'No te me pongas dramático.', answer: 'dat', why: '«Me» es ético: la madre se implica.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo subtitularías "Se me enfermó la gata"?». Posible respuesta: «My cat got sick» o «The cat’s gone and got sick on me», según el tono.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero la prueba, luego la forma. Test first, then the form.',
      steps: [
        { title: 'Con o sin «se» · With or without se', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Estaba tan cansada que ___ en el bus sin darse cuenta.', options: ['se durmió', 'se fue a dormir', 'durmió'], answer: 0, why: 'Empezar a dormir sin querer es dormirse. «Durmió» sería pasar un tiempo durmiendo; «se fue a dormir» implica acostarse.', en: 'She was so tired she fell asleep on the bus without realizing.' },
            { prompt: 'Gabriel y Lorena ___ en revisar juntos el capítulo a las nueve.', options: ['quedaron', 'se acordaron', 'se quedaron'], answer: 0, why: 'Quedar en + infinitivo = acordar algo. «Se quedaron» = permanecieron; «se acordaron» = recordaron.', en: 'Gabriel and Lorena agreed to review the episode together at nine.' },
            { prompt: 'Si dejas la mantequilla al sol, ___ enseguida.', options: ['derrite', 'se derrite a sí misma', 'se derrite'], answer: 2, why: 'Cambio de estado sin agente: se medio. No es reflexivo, así que «a sí misma» sobra.', en: 'If you leave the butter in the sun, it melts straight away.' },
            { prompt: 'Le ofrecieron más dinero, pero ___ a trabajar los domingos.', options: ['se negó', 'negó', 'se negó de'], answer: 0, why: 'Negarse a = rechazar hacer algo. «Negar» es decir que algo no es cierto, y la preposición es «a».', en: 'They offered her more money, but she refused to work on Sundays.' },
            { prompt: 'En el vuelo a Lima, Sara ___ en tres horas.', options: ['se leyó novelas', 'se leyó la novela entera', 'leyó se la novela'], answer: 1, why: 'El dativo aspectual necesita un objeto delimitado: «la novela entera», no «novelas».', en: 'On the flight to Lima, Sara read the whole novel in three hours.' },
            { prompt: 'A Gabriel ___ una solución brillante para el subtítulo del final.', options: ['se ocurrió', 'se le ocurrió', 'le ocurrió'], answer: 1, why: 'Ocurrírsele algo a alguien = venirle una idea. «Le ocurrió algo» = le pasó algo.', en: 'Gabriel came up with a brilliant solution for the final subtitle.' },
          ] },
        ] },
        { title: '¿Qué «se» es? · Which se is it?', blocks: [
          { kind: 'classify', title: 'Aplica las pruebas · Apply the tests', categories: [
            { id: 'refl', label: 'Reflexivo o recíproco', tone: 'blue' },
            { id: 'medio', label: 'Se medio', tone: 'teal' },
            { id: 'pron', label: 'Verbo pronominal', tone: 'orange' },
            { id: 'dat', label: 'Dativo aspectual o ético', tone: 'violet' },
          ], items: [
            { text: 'Los dos guionistas se respetan mucho.', answer: 'refl', why: 'Recíproco: se respetan el uno al otro.' },
            { text: 'Con la humedad, las paredes se agrietaron.', answer: 'medio', why: 'Las paredes cambian sin agente; admite «solas».' },
            { text: 'Don Hernando se quejó del ruido toda la noche.', answer: 'pron', why: 'Quejarse solo existe con se: pronominal inherente.' },
            { text: 'La niña se bebió dos vasos de jugo seguidos.', answer: 'dat', why: 'Aspectual: coincide con el sujeto y el objeto es delimitado.' },
            { text: 'Cuídamelo mucho, que es mi único nieto.', answer: 'dat', why: '«Me» es la abuela, que no cuida al nieto: se implica (dativo ético o de interés).' },
            { text: 'Sara se peina frente al espejo del camerino.', answer: 'refl', why: 'Reflexivo: se peina a sí misma.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Se comió pan y salió corriendo.', ok: false, options: ['Comió pan y salió corriendo.', 'Se comió pan y se salió corriendo.', 'Se comía pan y salió corriendo.'], answer: 0, why: '«Pan» sin determinante no es delimitado: sin se. (O delimítalo: se comió un pan, se comió el pan).' },
            { sentence: 'La ventana se rompió por los niños jugando al fútbol.', ok: false, options: ['La ventana se rompió a sí misma por los niños.', 'La ventana se rompió a los niños jugando al fútbol.', 'Los niños rompieron la ventana jugando al fútbol.'], answer: 2, why: 'El se medio no admite un agente con «por»: si hay agente, activa.' },
            { sentence: 'No me acuerdo el título del episodio.', ok: false, options: ['No acuerdo del título del episodio.', 'No me acuerdo con el título del episodio.', 'No me acuerdo del título del episodio.'], answer: 2, why: 'Acordarse rige «de».' },
            { sentence: 'Julián y Sara se llaman el uno al otro cada domingo.', ok: true, why: 'Correcta: recíproco reforzado con «el uno al otro».' },
            { sentence: 'Lorena ya fue: salió hace diez minutos.', ok: false, options: ['Lorena ya se fue: salió hace diez minutos.', 'Lorena ya se salió: fue hace diez minutos.', 'Lorena ya se ha ido de: salió hace diez minutos.'], answer: 0, why: 'Con el sentido de marcharse, sin destino, el verbo es irse.' },
          ] },
        ] },
        { title: 'Una escena del capítulo 8 · A scene from episode 8', blocks: [
          { kind: 'chat-fill', title: 'Rosario y Julián en la cocina', lines: [
            { who: 'Rosario', text: 'Julián, ¿qué pasó con la bandeja de buñuelos de la abuela?' },
            { who: 'Julián', text: 'Ay, mamá, ___ casi todos. Estaban buenísimos.', options: ['me comí', 'se comí', 'me los comieron'], answer: 0, why: 'Aspectual: yo me comí (casi todos). «Me los comieron» diría que otros se los comieron.' },
            { who: 'Rosario', text: '¡Casi todos! Los de la fiesta del domingo…' },
            { who: 'Julián', text: 'Tranquila, mamá, ___ nerviosa, que mañana compro otros.', options: ['no te me pongas', 'no te pongas me', 'no me te pongas'], answer: 0, why: 'Orden te + me; el «me» es ético: Julián se implica.' },
            { who: 'Rosario', text: '¿Y la gata? ¿Por qué está debajo de la cama?' },
            { who: 'Julián', text: 'Porque ___ la puerta del patio con el viento y se asustó.', options: ['abrió', 'se abrió', 'se abrieron'], answer: 1, why: 'Se medio, sin agente; singular porque concuerda con «la puerta».' },
            { who: 'Rosario', text: 'Pobrecita. Oye, ¿___ de llamar a tu hermana?', options: ['te acordó', 'te acordaste', 'acordaste'], answer: 1, why: 'Recordar = acordarse de; el pronombre concuerda con el sujeto (tú).' },
            { who: 'Julián', text: 'Sí, y ___ en venir el sábado temprano.', options: ['quedamos', 'nos acordamos', 'nos quedamos'], answer: 0, why: 'Quedar en = acordar. «Nos quedamos» = permanecimos.' },
            { who: 'Rosario', text: 'Menos mal. Tu hermana siempre ___ con la abuela.', options: ['lleva bien', 'se lleva buena', 'se lleva bien'], answer: 2, why: 'Llevarse bien con alguien: pronominal + adverbio «bien».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'te', 'me', 'pongas', 'nervioso,', 'Julián'], accept: ['No te me pongas nervioso, Julián'], en: 'Don’t go getting nervous on me, Julián.' },
            { tiles: ['La', 'puerta', 'del', 'garaje', 'se', 'abrió', 'sola'], accept: ['La puerta del garaje se abrió sola', 'Se abrió sola la puerta del garaje'], en: 'The garage door opened by itself.' },
            { tiles: ['Sara', 'se', 'leyó', 'el', 'guion', 'en', 'una', 'noche'], accept: ['Sara se leyó el guion en una noche', 'En una noche Sara se leyó el guion'], en: 'Sara read the whole script in one night.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia el valor del «se» · Change the value of se', items: [
            { prompt: 'El viento cerró la puerta de golpe.', instruction: 'Cuéntalo sin agente, con se medio. Empieza con «La puerta…».', accept: ['La puerta se cerró de golpe', 'La puerta se cerró de golpe con el viento', 'La puerta se cerró con el viento de golpe'] },
            { prompt: 'Gabriel ayuda a Lorena y Lorena ayuda a Gabriel.', instruction: 'Una sola frase con se recíproco.', accept: ['Gabriel y Lorena se ayudan', 'Lorena y Gabriel se ayudan', 'Gabriel y Lorena se ayudan el uno al otro', 'Lorena y Gabriel se ayudan el uno al otro', 'Gabriel y Lorena se ayudan mutuamente', 'Lorena y Gabriel se ayudan mutuamente'] },
            { prompt: 'Comió tres buñuelos seguidos.', instruction: 'Subraya que se los comió enteros: añade el dativo aspectual.', accept: ['Se comió tres buñuelos seguidos'] },
            { prompt: 'No te pongas triste, mi amor.', instruction: 'Dilo como una madre implicada: añade el dativo ético.', accept: ['No te me pongas triste, mi amor', 'No te me pongas triste'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice una frase propia con cada valor y tú respondes solo con la prueba: «¿a sí mismo?», «¿sola?», «¿a mí?». Tu alumno decide si la prueba funciona.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de doña Rosario', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El audio del capítulo 7 · The audio from episode 7', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada «se», «me» o «te» y decide qué valor tiene, como si preparara los subtítulos. Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda, anota cada «se», «me» o «te» y decide qué valor tiene, como si prepararas los subtítulos.' } },
          { kind: 'listen', title: 'Un mensaje de voz de doña Rosario', channel: 'LOS ARANGO · CAPÍTULO 7 · MENSAJE DE VOZ DE ROSARIO PARA JULIÁN', src: '/audio/grammar-live/482.mp3',
            before: 'En el capítulo 7, doña Rosario le deja un mensaje de voz a su hijo Julián después de un día complicado. ¿Qué crees que salió mal en la casa? ¿Qué le pedirá a Julián? (What went wrong at home, and what will she ask Julián?)',
            gist: { prompt: '¿Para qué deja Rosario el mensaje?', options: ['Para contarle los problemas del día y recordarle cosas de la fiesta de la abuela.', 'Para quejarse de su primo Esteban.', 'Para pedirle a Julián que lleve la gata al veterinario.'], answer: 0, why: 'Cuenta lo de la gata, la puerta y las llaves, y le recuerda el regalo y los buñuelos de la fiesta.', en: 'Why does Rosario leave the message?' },
            details: [
              { prompt: '¿Qué le pasó a la gata?', options: ['Se enfermó y Rosario la llevó al veterinario.', 'Se escapó por el garaje.', 'Se comió los buñuelos.'], answer: 0, why: '«Se me enfermó la Mona y la tuve que llevar al veterinario».', en: 'What happened to the cat?' },
              { prompt: '¿Por qué no la acompañó don Hernando?', options: ['Porque se negó a ir.', 'Porque se durmió frente al televisor.', 'Porque se fue a trabajar.'], answer: 1, why: '«Se durmió otra vez frente al televisor».', en: 'Why didn’t don Hernando go with her?' },
              { prompt: '¿Por qué se quedó Rosario afuera media hora?', options: ['Porque Sara se llevó las llaves sin avisar.', 'Porque perdió las llaves en el veterinario.', 'Porque la puerta del garaje se cerró sola.'], answer: 0, why: '«Tu hermana se llevó las llaves sin avisar».', en: 'Why was Rosario stuck outside for half an hour?' },
              { prompt: '¿Qué le pide a Julián sobre los buñuelos?', options: ['Que se los lleve a su primo.', 'Que no se los coma todos antes de la fiesta.', 'Que compre una bandeja más.'], answer: 1, why: '«No te me comas todos los buñuelos antes de la fiesta, como el año pasado».', en: 'What does she ask Julián about the buñuelos?' },
            ],
            transcript: 'Julián, mijo, soy tu mamá. [[No te me asustes|violet]], que no es nada grave, pero qué día. Esta mañana [[se me enfermó|violet]] la Mona y la tuve que llevar al veterinario. Tu papá me iba a acompañar, pero [[se durmió|orange]] otra vez frente al televisor y ni [[se afeitó|blue]]. Cuando volvimos, la puerta del garaje [[se había abierto|teal]] sola, como siempre, y la Mona [[se puso|teal]] nerviosísima. Y para colmo, tu hermana [[se llevó|orange]] las llaves sin avisar, así que [[me quedé|orange]] afuera media hora, muerta de frío. Bueno, lo importante: ¿[[te acordaste de|orange]] comprar el regalo de la abuela? El domingo cumple ochenta. Otra cosa: tu primo Esteban y tú [[se escriben|blue]] todos los días, ¿no? Dile que ni [[se le ocurra|orange]] traer al perro, que la gata ya tuvo bastante. Ah, y por favor, [[no te me comas|violet]] todos los buñuelos antes de la fiesta, como el año pasado, que [[te comiste|violet]] la bandeja entera tú solito. Llámame cuando salgas del trabajo, ¿sí? Un beso grande.',
            reply: { teacher: 'Tú eres doña Rosario. Tu alumno es Julián y responde con otro mensaje de voz: la tranquiliza, contesta lo del regalo y de los buñuelos, y usa al menos un «se» medio, un pronominal y un «te me».', self: 'Responde como si fueras Julián: tranquiliza a tu madre, contesta lo del regalo y de los buñuelos, y usa al menos un «se» medio, un pronominal y un dativo ético.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu familia, tus «se»', coach: 'Habla y prueba cada «se». Speak, then test each se.',
      steps: [
        { title: 'Historias con «se» · Stories with se', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las tarjetas. Tu alumno habla y tú, de vez en cuando, preguntas «¿Qué "se" es ese?» para que lo identifique con una prueba.', self: 'Responde cada tarjeta en voz alta. Después elige dos «se» de tu respuesta y pásales una prueba: ¿a sí mismo?, ¿el uno al otro?, ¿solo?, ¿a mí?' } },
          { kind: 'talk', cards: [
            { q: '¿Qué cosas se estropean, se caen o se apagan siempre en tu casa o en tu trabajo? · What always breaks down or goes off at home or at work?', followUps: ['¿Se arregló solo o alguien lo arregló?', '¿Cómo reaccionaste?', '¿Quién tiene la culpa, si la tiene alguien?'], phrases: ['Siempre [[se va|orange]] la luz cuando…', 'El wifi [[se cae|teal]] justo…', 'Yo [[me desespero|teal]] y…'], hint: 'Se medio: la cosa es el sujeto y nadie actúa a propósito. Si alguien lo provocó, cuéntalo en activa.', example: 'En mi edificio siempre se va la luz cuando llueve fuerte, y el ascensor se queda parado entre dos pisos. La primera vez me desesperé; ahora ya sé que en diez minutos se arregla solo.', next: 'Ahora, la familia.' },
            { q: '¿A quién te pareces de tu familia? ¿Con quién te llevas mejor y con quién te escribes más? · Who do you look like, who do you get on with, who do you write to most?', followUps: ['¿En qué se parecen?', '¿Siempre se llevaron bien?', '¿Cómo se comunican?'], phrases: ['Me [[parezco a|orange]] mi…', 'Me [[llevo bien|orange]] con…', 'Mi prima y yo [[nos escribimos|blue]]…'], hint: 'Parecerse a, llevarse bien con: no olvides la preposición. Para el recíproco, sujeto plural.', example: 'Físicamente me parezco a mi padre, pero de carácter me parezco más a mi abuela. Me llevo muy bien con mi prima Daniela: vivimos lejos, pero nos escribimos casi todos los días y nos contamos todo.', next: 'Ahora, un papel.' },
            { q: 'Eres la madre o el padre de un hijo adulto que se va a vivir a otra ciudad. Despídete con cariño (y un poco de drama). · Say goodbye to an adult child who is moving away.', followUps: ['¿Qué le pides que no olvide?', '¿Qué le prohíbes con cariño?', '¿Cómo se despiden?'], phrases: ['[[No te me olvides|violet]] de llamar…', '[[No te me pongas|violet]] triste si…', '[[Cómete|violet]] toda la comida que…'], hint: 'El dativo ético va en órdenes cariñosas y es coloquial: te + me + verbo.', example: 'Bueno, mijo, no te me olvides de llamar los domingos. Y no te me pongas triste si al principio no conoces a nadie. Cómete toda la comida que te mandé, que no quiero que pases hambre. Y ahora vete, que se te hace tarde.', next: 'Ahora, libros y series.', teacher: 'Hazte el hijo que se va y responde con poca paciencia: tu alumno insiste con más «te me…».' },
            { q: '¿Qué libro o serie te leíste o te viste de una sentada? · A book or series you devoured in one go.', followUps: ['¿Cuántas horas te llevó?', '¿Te lo sabes casi de memoria?', '¿Lo recomendarías?'], phrases: ['[[Me leí|violet]] la saga entera en…', '[[Me vi|violet]] las tres temporadas…', 'Me sé de memoria…'], hint: 'Aspectual con objeto delimitado: me leí la saga, me vi las tres temporadas. Sin determinante, sin se: «leo novelas».', example: 'El verano pasado me leí la saga entera en una semana: cuatro libros de quinientas páginas. Normalmente leo novelas cortas, pero esa me atrapó. Todavía me sé de memoria algunos diálogos.', next: 'Ahora, como subtitulador.' },
            { q: 'Eres subtitulador. Explica a Gabriel cómo traducirías «Se me enfermó el niño», «La puerta se abrió sola» y «Se negó a firmar». · Explain how you would translate these lines.', followUps: ['¿Qué prueba usas en cada caso?', '¿Qué se pierde en la traducción?', '¿Cómo lo dirías en tu lengua?'], phrases: ['Aquí el «se» es…', 'La prueba es que admite…', 'En inglés yo diría…'], hint: 'Nombra el valor, aplica la prueba y propone una traducción.', example: 'En «Se me enfermó el niño», el «me» es de interés: la madre es la afectada, y admite «a mí». Yo diría «my boy got sick». En «La puerta se abrió sola», el «se» es medio: «the door opened by itself». Y «se negó a firmar» es un pronominal: «refused to sign», no «denied».', teacher: 'Es la tarjeta más analítica: deja que tu alumno use su lengua materna para comparar.' },
            { q: '¿Usarías «No te me pongas nervioso» con tu jefa, con un cliente o con un amigo? · Where does the ethical dative fit, and where not?', followUps: ['¿Qué efecto produce?', '¿Te suena cariñoso o paternalista?', '¿Qué dirías en un correo formal?'], phrases: ['Con un amigo sí, porque…', 'Con un cliente sonaría…', 'En un correo formal diría…'], hint: 'El dativo ético es coloquial y afectivo: piensa en la relación y en el tono.', example: 'Con un amigo o con mi hermano sí, porque muestra cariño. Con un cliente sonaría paternalista, casi como si le hablara a un niño. En un correo formal diría simplemente «no se preocupe, lo resolvemos hoy».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas un día caótico en casa y tu alumno, cada dos frases, para y pregunta qué «se» usaste y qué prueba lo confirma.', self: 'Esta semana, cuando oigas o leas un «se», detente un segundo: ¿es reflexivo, medio, pronominal o expresivo? Anota los tres más curiosos.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La escena inicial del capítulo 8', coach: 'Cada «se», con intención. Every se, on purpose.',
      steps: [
        { title: 'Un relato para los guionistas · A short narrative for the writers', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Después revisan juntos cada «se»: tu alumno dice qué valor tiene y qué prueba lo confirma.', self: 'Escribe tu relato y toca «Revisar mi texto». Después repasa cada «se»: ¿qué valor tiene y qué prueba lo confirma?' } },
          { kind: 'write', title: 'Un domingo en casa de los Arango', situation: 'Doble Línea organiza un concurso interno: escribir la escena inicial del capítulo 8 de «Los Arango» en forma de relato breve, para el equipo de guionistas. (O cuenta una anécdota real de tu familia para el blog del estudio.) · Write the opening of episode 8 as a short narrative for the scriptwriters, or a real family anecdote for the studio blog.', task: [
            'Usa al menos dos «se» medios: algo cambia o pasa sin agente (se fue la luz, se enfrió, se enojó). · Two middle se.',
            'Incluye un reflexivo y un recíproco (se lava, se peina; se miran, se abrazan). · One reflexive, one reciprocal.',
            'Usa tres verbos pronominales con cambio de significado, con su preposición cuando la lleven (acordarse de, parecerse a, negarse a, quedarse con). · Three pronominal verbs.',
            'Añade un dativo aspectual con objeto delimitado (se comió todos los…) y un dativo ético en un diálogo (no te me…). · One aspectual and one ethical dative.',
          ], starters: ['Domingo por la mañana. En casa de los Arango…', 'Doña Rosario se despertó…', 'Mientras tanto, Julián y Sara…', '—No te me…', 'Al final, …'],
            words: ['se fue la luz', 'se enfrió', 'se enojó', 'se miraban el uno al otro', 'se lavó las manos', 'se había dormido', 'se negó a', 'acordarse de', 'parecerse a', 'se había comido', 'no te me'],
            model: 'Domingo por la mañana. En casa de los Arango [[se fue|orange]] la luz justo cuando doña Rosario empezaba a freír los buñuelos para el cumpleaños de la abuela. El aceite [[se enfrió|teal]], la masa [[se puso|teal]] dura y Rosario [[se enojó|teal]] tanto que tiró el delantal sobre la mesa. Don Hernando, que [[se había dormido|orange]] otra vez en el sofá, abrió un ojo y no dijo nada. Mientras tanto, Julián y Sara [[se miraban|blue]] el uno al otro sin atreverse a hablar: los dos sabían quién [[se había comido|violet]] los últimos diez buñuelos de la víspera. Al final, Sara [[se negó a|orange]] seguir callada. —Fue él, mamá. Y ahora dice que no [[se acuerda de|orange]] nada. —Julián, [[no te me escondas|violet]] detrás del periódico —dijo Rosario—. Cada día [[te pareces|orange]] más a tu papá. Julián se levantó, [[se lavó|blue]] las manos y, sin protestar, se puso a preparar masa nueva. Cuando la abuela llegó, la luz había vuelto y nadie mencionó el apagón.',
            minWords: 150,
            checks: [
              { label: 'Un dativo ético o de interés: te me / se me (ethical dative)', pattern: '(?<!\\p{L})(?:te|se)\\s+me\\s+\\p{L}+', tip: 'Añade un «me» de implicación en un diálogo: «No te me escondas», «No te me pongas nervioso».' },
              { label: 'Dativo aspectual con objeto delimitado (aspectual dative)', pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:(?:había|habían|ha|han)\\s+)?(?:com|beb|tom|ley|le[ií]|fum)\\p{L}*\\s+(?:tod[oa]s?|el|la|los|las|un|una|dos|tres|medi[oa])(?!\\p{L})', tip: 'Usa comerse, beberse, tomarse o leerse con una cantidad delimitada: «se había comido los últimos diez buñuelos».' },
              { label: 'Un pronominal con su preposición (acordarse de, negarse a…)', pattern: '(?<!\\p{L})(?:acuerd|acord|parec|parezc|neg|nieg|qued)\\p{L}*\\s+(?:de|a|con)(?!\\p{L})', tip: 'Incluye acordarse de, parecerse a, negarse a o quedarse con.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:acuerd|acord)\\p{L}*\\s+que(?!\\p{L})', why: 'Acordarse lleva «de»: «me acordé de que…».' },
              { pattern: '(?<!\\p{L})parec\\p{L}*\\s+con(?!\\p{L})', why: 'Parecerse rige «a»: «se parece a su padre».' },
              { pattern: '(?<!\\p{L})(?:neg|nieg)\\p{L}*\\s+de\\s+\\p{L}+r(?!\\p{L})', why: 'Negarse rige «a»: «se negó a firmar».' },
              { pattern: '(?<!\\p{L})me\\s+te\\s+\\p{L}+', why: 'El orden es «te me», no «me te»: «no te me pongas».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'El mapa del «se»', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'REFLEXIVO Y RECÍPROCO', formula: 'se = objeto: a sí mismo · el uno al otro', example: 'Se afeita. · Se lava las manos. · Se escriben.', caption: 'El pronombre es un complemento real.', en: 'The pronoun is a real object: test with a sí mismo or el uno al otro.' },
            { tone: 'teal', label: 'SE MEDIO', formula: 'cosa o persona afectada + se + verbo, sin agente', example: 'La puerta se abrió sola. · Sara se enojó.', caption: 'Admite «solo / sola»; no admite «por + agente».', en: 'Something changes with no agent; add me / le and you get the accidental se.' },
            { tone: 'orange', label: 'PRONOMINAL', formula: 'ir / irse · acordar / acordarse de · quejarse', example: 'Se fue a las ocho. · No me acuerdo de su nombre.', caption: 'El se cambia el significado o forma parte del verbo.', en: 'Se changes the meaning or is part of the verb: learn it with its preposition.' },
            { tone: 'violet', label: 'ASPECTUAL', formula: 'me / te / se (= sujeto) + consumo + objeto delimitado', example: 'Se comió todos los buñuelos. · Comió buñuelos.', caption: 'Totalidad; sin cantidad delimitada, sin se.', en: 'Completeness, often with enjoyment; it needs a delimited object.' },
            { tone: 'violet', label: 'ÉTICO Y DE INTERÉS', formula: 'te me + verbo · se me + verbo', example: 'No te me pongas nervioso. · Se me enfermó la gata.', caption: 'Ético: implicación, sin «a mí». De interés: afectado, con «a mí».', en: 'Ethical: emotional involvement, never doubled with a mí. Interest: someone affected, a mí possible.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Ante un «se», no busques una traducción: **haz una prueba**. ¿A sí mismo? Reflexivo. ¿El uno al otro? Recíproco. ¿Sola, sin agente? Medio. ¿Otro significado sin se? Pronominal. ¿Se puede quitar y hay una cantidad delimitada? Aspectual. ¿Un «me» que solo implica a quien habla? Ético.', en: 'Faced with a se, do not look for a translation: run a test. Each value passes a different one, and knowing which tells you both what the sentence means and how to render it.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Durante la tormenta ___ la luz en todo el barrio.', options: ['se iba de', 'se fue', 'fue'], answer: 1, why: 'Irse la luz = cortarse la electricidad: pronominal.', en: 'During the storm the power went out in the whole neighbourhood.' },
            { prompt: 'Mis primos ___ cada semana desde que viven en países distintos.', options: ['se llaman a sí mismos', 'se llaman', 'llaman'], answer: 1, why: 'Recíproco: cada uno llama al otro. «A sí mismos» lo haría reflexivo y absurdo.', en: 'My cousins call each other every week since they live in different countries.' },
            { prompt: 'Después de correr, Sara ___ una botella entera de agua.', options: ['le bebió', 'se bebía de', 'se bebió'], answer: 2, why: 'Aspectual: «se» = Sara y el objeto está delimitado (una botella entera).', en: 'After running, Sara drank a whole bottle of water.' },
            { context: 'Una abuela llama a su nieto antes de un examen.', prompt: '¿Qué frase lleva un dativo ético?', options: ['No te pongas nervioso: tú sabes mucho.', 'No me pongo nerviosa por eso.', 'No te me pongas nervioso, que tú sabes mucho.'], answer: 2, why: '«Me» no participa en la acción: la abuela se implica afectivamente.', en: 'Which sentence contains an ethical dative?' },
            { prompt: 'En «La olla se quemó», ¿qué prueba confirma que el «se» es medio?', options: ['Admite «la una a la otra».', 'Admite «a sí misma».', 'Admite «sola» y no admite «por + agente».'], answer: 2, why: 'El cambio ocurre sin agente: «se quemó sola», no «se quemó por el cocinero».', en: 'In «La olla se quemó», which test shows the se is middle?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un documental. Now, a documentary.', blocks: [
          { kind: 'lead', text: 'Lorena le pasa a Gabriel un nuevo encargo: un documental de naturaleza. El guion original está en un español demasiado rígido y hay que reescribir algunas frases antes de subtitularlas.', en: 'Lorena gives Gabriel a new job: a nature documentary. The source script is stiff, so he rewrites some lines with the right se before subtitling them.' },
          { kind: 'rewrite', title: 'El guion del documental · The documentary script', items: [
            { prompt: 'El calor derrite el glaciar cada verano.', instruction: 'Sin causante, con se medio. Empieza con «El glaciar…».', accept: ['El glaciar se derrite cada verano', 'El glaciar se derrite cada verano con el calor', 'El glaciar se derrite con el calor cada verano'] },
            { prompt: 'Un oso comió el panal entero en minutos.', instruction: 'Subraya la totalidad con el dativo aspectual.', accept: ['Un oso se comió el panal entero en minutos', 'En minutos un oso se comió el panal entero'] },
            { prompt: 'El lobo joven lame al viejo y el viejo lame al joven.', instruction: 'Una frase con se recíproco. Empieza con «Los dos lobos…».', accept: ['Los dos lobos se lamen', 'Los dos lobos se lamen el uno al otro', 'Los dos lobos se lamen mutuamente'] },
          ] },
        ] },
        { title: 'Ampliación · Combinaciones, registro y variedades · Extension: clusters, register and varieties', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: más fino todavía. Optional: finer still.', blocks: [
          { kind: 'lead', text: 'Los valores se combinan: en «**No te me comas** toda la torta», «te» es aspectual y «me», ético. El dativo ético es **coloquial**: en un informe o una carta formal no aparece. En las noticias se prefiere «murió» o «falleció»; «se murió» es más coloquial y suele referirse a muertes naturales o esperables. Y hay variación: **enfermarse** es lo habitual en América, mientras que en España se dice más **enfermar** o **ponerse enfermo**; en Colombia y otras zonas de América, **devolverse** significa «volver» (me devolví a la casa), y en México es frecuente **tardarse** (no te tardes).', en: 'Values combine: in no te me comas toda la torta, te is aspectual and me ethical. The ethical dative is colloquial and stays out of formal writing. News prefers murió or falleció; se murió is more colloquial and usually refers to natural or expected deaths. There is also regional variation: enfermarse in Latin America versus enfermar in Spain, devolverse meaning «go back» in Colombia and other areas, tardarse in Mexico.' },
          { kind: 'choice', title: 'Afina · Fine-tune', items: [
            { prompt: 'En «No te me comas toda la torta», ¿qué valores tienen «te» y «me»?', options: ['«Te», recíproco; «me», de interés.', 'Los dos son reflexivos.', '«Te», aspectual; «me», ético.'], answer: 2, why: '«Te» coincide con el sujeto y la torta está delimitada; «me» es quien habla, que se implica.', en: 'In «No te me comas toda la torta», what do te and me do?' },
            { context: 'Titular de un periódico digital.', prompt: '¿Qué versión es más adecuada?', options: ['Se murieron dos excursionistas en el páramo.', 'Mueren dos excursionistas en el páramo.', 'Se nos murieron dos excursionistas en el páramo.'], answer: 1, why: 'En la prensa, y más aún con muertes accidentales, se usa «morir» sin se.', en: 'Newspaper headline: which version fits best?' },
            { context: 'Correo formal a un cliente que está preocupado por un retraso.', prompt: '¿Qué frase es adecuada?', options: ['No se preocupe: entregamos los subtítulos el viernes.', 'No se me preocupe: entregamos los subtítulos el viernes.', 'No te me preocupes, que el viernes los tienes.'], answer: 0, why: 'El dativo ético es coloquial y afectivo: en un correo formal sonaría fuera de lugar.', en: 'Formal email to a worried client: which sentence fits?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos que van rápido o si sobra tiempo. Si tu alumno conoce otra variedad, comparan qué verbos usa con o sin «se» (regresar / regresarse, tardar / tardarse).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 183 · Pasiva y estructuras impersonales con foco discursivo', text: 'Hoy completaste el mapa del «se» que cuenta lo que le pasa al sujeto o quién se implica. En la clase 183 das el paso siguiente: elegir entre pasiva perifrástica, se pasivo, impersonal y orden de palabras según qué información quieres poner en primer plano en un texto.', en: 'Today you completed the map of the se that tells what happens to the subject or who is involved. Class 183 takes the next step: choosing between the ser passive, the passive se, impersonal forms and word order depending on which information you want to foreground in a text.', href: '/gramatica/pasiva-y-estructuras-impersonales-con-foco', label: 'Ir a la clase 183' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre "La puerta se abrió" y "Se abrieron las puertas para el público"?». Respuesta esperada: la primera es medio (sin agente); la segunda, pasiva (alguien las abrió a propósito). Tarea: escribir el relato de Escribir.' },
        ] },
      ],
    },
  ],
};
