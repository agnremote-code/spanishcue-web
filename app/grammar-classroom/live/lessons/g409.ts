import type { LiveLesson } from '../types';

/**
 * Lesson 409 · B1 · Volver a + infinitivo y repetición (course unit G109).
 * Builds on G082 (volver a previewed at A2), G107 (lesson 115: volver a as
 * «retomar» after a pause, against seguir), G108 (dejar de), G065 (pronoun
 * position with the infinitive), G059/G088/G089 (negative imperative, present
 * subjunctive, esperar que / ojalá) and G087 (pluscuamperfecto).
 * Scene: Lucía Reyes, a translator who works from home, rents an apartment
 * through an agency. The washing machine leaks: three weeks ago, again last
 * week (Ramiro, the technician, came again on Friday) and again on Monday night,
 * when the kitchen floor filled with water. On Tuesday Óscar Fuentes, from the
 * agency, calls her back (usted): «Óscar volvió a llamarme ayer», she tells her
 * sister Marta on Wednesday. On Wednesday Óscar leaves a voicemail (Mexican
 * voice, usted); on Thursday Ramiro comes with a new part.
 * Content: volver a + infinitive (= again) in every tense (vuelvo a, volví a,
 * volvía a, he vuelto a, había vuelto a, volveré a / voy a volver a, que vuelva
 * a, vuelve a / no vuelvas a); only volver is conjugated. Pronouns: lo volví a
 * leer = volví a leerlo, se volvió a romper = volvió a romperse, never both.
 * Contrast: volver (return) + a + place; otra vez / de nuevo (adverbs);
 * repetir + noun (never *repetir a + inf.); re- (releer, rehacer, reenviar,
 * reiniciar: productive but not universal; *revenir; revolver / revisar /
 * retirar are other verbs). No volver a / nunca volví a = never again: promises
 * (no volverá a pasar), warnings (no vuelvas a…), wishes (espero que no vuelva
 * a…); against dejar de (a habit ends). Volverse (to become) is only recognised.
 * Ampliación: register (nuevamente, una vez más, reiterar), the motion-purpose
 * reading (volví a buscar el paraguas), rioplatense «de vuelta» = otra vez.
 * Anchor: Volvió a llamarme ayer. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 409,
  level: 'B1',
  title: 'Volver a + infinitivo y repetición',
  subtitle: 'Contar lo que se repite, prometer que algo no volverá a pasar y advertir con «no vuelvas a», en cualquier tiempo verbal.',
  legend: [
    { tone: 'blue', label: 'VOLVER A + INFINITIVO · otra vez (to do again)' },
    { tone: 'orange', label: 'NO VOLVER A · nunca más (never again: promises, warnings)' },
    { tone: 'teal', label: 'OTRA VEZ · DE NUEVO · REPETIR · RE- (other ways to say “again”)' },
    { tone: 'violet', label: 'VOLVER · regresar a un lugar (to return)' },
  ],
  optionNotes: {
    'repitió a': '«Repetir» va con un nombre (repetir la reparación, repetir la pregunta), nunca con **a** + infinitivo. Para una acción: **volver a** + infinitivo.',
    'revolvió': '«Revolver» no es «volver otra vez»: significa mezclar (to stir) o desordenar buscando algo (to rummage).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Otra vez, y nunca más', coach: 'Volver a + infinitivo = otra vez. Volver a + infinitive = again.',
      steps: [
        { title: 'Otra vez la lavadora · The washing machine again', blocks: [
          { kind: 'lead', text: 'Lucía Reyes es traductora y trabaja desde casa. Vive de alquiler en un apartamento, y la lavadora pierde agua: la primera vez fue hace tres semanas, y desde entonces el problema **ha vuelto a pasar** dos veces. Hoy, miércoles, Lucía le cuenta a su hermana Marta: «Óscar, el de la agencia, **volvió a llamarme** ayer». Hoy aprendes a contar lo que se repite y a prometer que algo **no va a volver a pasar**.', en: 'Lucía Reyes is a translator who works from home. She rents an apartment, and the washing machine leaks: the first time was three weeks ago, and since then it has happened again twice. Today, Wednesday, Lucía tells her sister Marta: “Óscar, the guy from the agency, called me again yesterday.” Today you learn to talk about things that happen again and to promise that something will not happen again.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice qué significa «volver» en cada una: ¿regresar a un lugar, hacer algo otra vez o nunca más?', self: 'Lee las tres frases en voz alta. ¿Qué significa «volver» en cada una: regresar, otra vez o nunca más? (Return, again, or never again?)' } },
          { kind: 'compare', title: 'Un verbo, tres ideas · One verb, three ideas', columns: [
            { tone: 'violet', label: 'VOLVER · regresar', sentence: 'El lunes Lucía [[volvió|violet]] a casa a las ocho.', idea: 'Después de «a» viene un lugar: Lucía regresó.', en: 'On Monday Lucía came back home at eight.' },
            { tone: 'blue', label: 'VOLVER A + INFINITIVO · otra vez', sentence: 'Óscar [[volvió a llamarla|blue]] ayer.', idea: 'Después de «a» viene un infinitivo: llamó otra vez.', en: 'Óscar called her again yesterday.' },
            { tone: 'orange', label: 'NO VOLVER A · nunca más', sentence: 'Esto [[no va a volver a pasar|orange]].', idea: 'Una promesa: no pasará nunca más.', en: 'This is not going to happen again.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Óscar volvió a llamarla» significa…', options: ['Óscar la llamó otra vez.', 'Óscar no la llamó más.', 'Óscar regresó a la agencia.'], answer: 0, why: 'Volver **a** + infinitivo (llamar) = hacer la acción otra vez.', en: '“Óscar volvió a llamarla” means…' },
            { prompt: 'En «Lucía volvió a casa», «volver» significa…', options: ['regresar a un lugar', 'hacer algo otra vez', 'cambiar de carácter'], answer: 0, why: 'Después de «a» viene un lugar (casa), no un infinitivo: volver = regresar.', en: 'In “Lucía volvió a casa”, “volver” means…' },
            { prompt: '«Esto no va a volver a pasar» es…', options: ['una queja', 'una promesa', 'una pregunta'], answer: 1, why: '«No volver a» + infinitivo = nunca más. Con «ir a» o con el futuro, es una promesa.', en: '“Esto no va a volver a pasar” is…' },
          ] },
        ] },
        { title: 'La forma, en todos los tiempos · The form in every tense', mascot: '/brand/mascot/studying.webp', coach: 'Solo cambia «volver». Only “volver” changes.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'VOLVER A + INFINITIVO', question: '¿Se repite una acción?', en: 'Is an action happening again? Conjugate volver, add a, then the infinitive.', formula: ['volver (conjugado) + a + infinitivo', 'vuelvo · vuelves · vuelve · volvemos · volvéis · vuelven + a…'],
            meaning: 'Con **volver a** + infinitivo dices que una acción pasa **otra vez**: después de una pausa o como repetición. Solo conjugas **volver** (o → ue en el presente: vuelvo, vuelve); el infinitivo no cambia nunca. Funciona en todos los tiempos que ya conoces.',
            examples: [
              { es: 'La lavadora [[vuelve a hacer|blue]] un ruido raro.', en: 'The washing machine is making a strange noise again.' },
              { es: 'El viernes Ramiro [[volvió a venir|blue]] al apartamento.', en: 'On Friday Ramiro came to the apartment again.' },
              { es: 'Mañana [[voy a volver a llamar|blue]] a la agencia.', en: 'Tomorrow I am going to call the agency again.' },
            ] },
          { kind: 'table', title: 'Volver a en cada tiempo · Volver a in each tense', head: ['Tiempo · Tense', 'Forma · Form', 'Ejemplo · Example'], rows: [
            ['Presente', '**vuelvo a** + inf.', 'La lavadora [[vuelve a perder|blue]] agua. (is leaking again)'],
            ['Indefinido', '**volví a** + inf.', 'El lunes el suelo [[se volvió a llenar|blue]] de agua. (filled up again)'],
            ['Imperfecto', '**volvía a** + inf.', 'En su antiguo apartamento, la ducha [[volvía a gotear|blue]] cada invierno. (would drip again)'],
            ['Perfecto', '**he vuelto a** + inf.', 'Este mes el problema [[ha vuelto a pasar|blue]] dos veces. (has happened again)'],
            ['Pluscuamperfecto', '**había vuelto a** + inf.', 'Lucía llamó porque la lavadora [[había vuelto a fallar|blue]]. (had failed again)'],
            ['Futuro · ir a', '**volveré a** · **voy a volver a**', 'Ramiro [[volverá a venir|blue]] el jueves. (will come again)'],
            ['Subjuntivo', '**(que) vuelva a** + inf.', 'Espero que no [[vuelva a pasar|orange]]. (I hope it doesn’t happen again)'],
            ['Imperativo', '**vuelve a** · **no vuelvas a** (tú) · **vuelva a** · **no vuelva a** (usted)', '[[Vuelva a llamarme|blue]] mañana. · [[No vuelva a usar|orange]] la lavadora. (Call me again / Don’t use it again)'],
          ], note: 'El imperfecto (volvía a) cuenta una repetición **habitual** en el pasado; el indefinido (volví a), una repetición concreta. Es la misma diferencia de siempre entre los dos pasados.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El jueves Ramiro ___ revisar la lavadora.', options: ['volverá a', 'volverá de', 'volverá'], answer: 0, why: 'Volver necesita **a** delante del infinitivo: volverá a revisar.', en: 'On Thursday Ramiro will check the washing machine again.' },
            { prompt: 'Lucía estaba harta: la lavadora ya ___ a fallar dos veces.', options: ['vuelva', 'ha vuelto', 'había vuelto'], answer: 2, why: 'El marco es pasado (estaba harta) y los fallos son anteriores: pluscuamperfecto, había vuelto a.', en: 'Lucía was fed up: the washing machine had already failed again twice.' },
            { prompt: 'La lavadora volvió a ___ agua.', options: ['perder', 'perdió', 'perdiendo'], answer: 0, why: 'Después de «volver a» va siempre el **infinitivo**: perder. Solo se conjuga volver.', en: 'The washing machine leaked again.' },
          ] },
        ] },
        { title: '¿Dónde va el pronombre? · Where does the pronoun go?', mascot: '/brand/mascot/standing.webp', coach: 'Delante o pegado, nunca los dos. Before or attached, never both.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PRONOMBRES CON VOLVER A', question: '¿Dónde pongo lo, la, me, se…?', en: 'Where do I put lo, la, me, se…? Two positions are correct, but you use only one.', formula: ['lo + volví a leer', 'volví a leer + lo → volví a leerlo'],
            meaning: 'Como con otras perífrasis (clase 065), el pronombre va **delante de volver** o **pegado al infinitivo**. Las dos posiciones son correctas y significan lo mismo. Lo que no puedes hacer es ponerlo dos veces.',
            examples: [
              { es: 'Lucía leyó el contrato y después [[lo volvió a leer|blue]] = [[volvió a leerlo|blue]].', en: 'Lucía read the contract and then read it again.' },
              { es: 'Óscar [[me volvió a llamar|blue]] ayer = [[volvió a llamarme|blue]] ayer.', en: 'Óscar called me again yesterday.' },
              { es: 'La pieza [[se volvió a romper|blue]] = [[volvió a romperse|blue]].', en: 'The part broke again.' },
            ], note: 'En el imperativo negativo también hay dos posiciones: «No **lo** vuelvas a hacer» = «No vuelvas a hacer**lo**». En el afirmativo, lo normal es pegarlo al infinitivo: «Vuelve a intentar**lo**».' },
          { kind: 'tip', icon: '💡', title: 'Una vez, y solo una · Once, and only once', text: '«Lo volví a leer» ✔ · «Volví a leerlo» ✔ · «Lo volví a leerlo» ✘. Elige un sitio para el pronombre. Si lo pegas al infinitivo, a veces necesitas tilde: «volver a explicár**selo**».', en: '“Lo volví a leer” ✔ · “Volví a leerlo” ✔ · “Lo volví a leerlo” ✘. Pick one place for the pronoun. If you attach it to the infinitive, you sometimes need an accent: “volver a explicárselo”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Ramiro la volvió a revisarla.', 'Ramiro volvió a la revisar.', 'Ramiro la volvió a revisar.'], answer: 2, why: 'El pronombre va delante de volver (la volvió a revisar) o pegado al infinitivo (volvió a revisarla), una sola vez.', en: 'Which sentence is correct?' },
            { prompt: '«Me volvió a escribir» = …', options: ['Volvió me a escribir.', 'Volvió a me escribir.', 'Volvió a escribirme.'], answer: 2, why: 'La otra posición correcta: pegado al infinitivo, escribirme.', en: '“Me volvió a escribir” = …' },
          ] },
        ] },
        { title: 'Otras formas de decir «otra vez» · Other ways to say “again”', mascot: '/brand/mascot/speaking.webp', coach: 'Adverbio, verbo o prefijo. Adverb, verb or prefix.', blocks: [
          { kind: 'compare', title: 'La misma idea, otras herramientas · Same idea, other tools', columns: [
            { tone: 'teal', label: 'OTRA VEZ · DE NUEVO', sentence: 'Ramiro vino [[otra vez|teal]]. · Ramiro vino [[de nuevo|teal]].', idea: 'Adverbios: = volvió a venir. Van con cualquier verbo y se mueven en la frase.', en: 'Ramiro came again. (adverbs: they work with any verb)' },
            { tone: 'teal', label: 'REPETIR + NOMBRE', sentence: 'Ramiro [[repitió|teal]] la misma reparación.', idea: 'Repetir va con un nombre (la reparación, la pregunta, el examen), no con «a» + infinitivo.', en: 'Ramiro repeated the same repair.' },
            { tone: 'teal', label: 'RE- + VERBO', sentence: 'Lucía [[releyó|teal]] el contrato.', idea: 'Algunos verbos aceptan re- (= otra vez). No todos.', en: 'Lucía reread the contract.' },
          ] },
          { kind: 'table', title: 'El prefijo re-: útil, pero no universal · The prefix re-: useful, not universal', head: ['Verbo', 'Significa · Meaning', 'Ojo · Watch out'], rows: [
            ['**releer** el contrato', 'leer otra vez (to reread)', '= volver a leer'],
            ['**rehacer** un informe', 'hacer otra vez, mejor (to redo)', 'se conjuga como hacer: rehago, rehace'],
            ['**reenviar** un correo', 'enviar otra vez, o a otra persona (to resend, to forward)', 'reenvío, como envío'],
            ['**reiniciar** el ordenador / la computadora', 'iniciar otra vez (to restart)', 'muy frecuente con aparatos'],
            ['*revenir · *rellegar', 'no existen', 'di **volver a venir**, **volver a llegar**'],
            ['**revolver** · **revisar** · **retirar**', 'son otros verbos: to stir, to check, to withdraw', 'no significan «volver, visar, tirar otra vez»'],
          ], note: 'Si no estás seguro de que un verbo con re- existe, usa **volver a** + infinitivo: funciona con todos los verbos.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase NO es correcta?', options: ['Ramiro repitió a venir.', 'Ramiro volvió a venir.', 'Ramiro vino otra vez.'], answer: 0, why: '«Repetir» no va con «a» + infinitivo. Para una acción: volvió a venir o vino otra vez.', en: 'Which sentence is NOT correct?' },
            { prompt: 'Lucía leyó el contrato otra vez = Lucía ___ el contrato.', options: ['repitió a leer', 'revolvió', 'releyó'], answer: 2, why: 'Releer = leer otra vez. «Revolver» es otro verbo (to stir, to rummage).', en: 'Lucía read the contract again = Lucía reread the contract.' },
            { prompt: 'El viernes Ramiro ___ la reparación del primer día.', options: ['repitió', 'volvió a', 'de nuevo'], answer: 0, why: 'Después viene un nombre (la reparación): repetir + nombre.', en: 'On Friday Ramiro repeated the first day’s repair.' },
          ] },
        ] },
        { title: 'No volver a: nunca más · No volver a: never again', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Promesas, advertencias, deseos. Promises, warnings, wishes.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NO VOLVER A · NUNCA VOLVER A', question: '¿Algo no va a pasar (o no pasó) nunca más?', en: 'Is something never going to happen again, or did it never happen again?', formula: ['no + volver a + infinitivo', 'nunca + volver a + infinitivo'],
            meaning: 'Con la negación, «volver a» significa **nunca más**. En pasado cuenta que algo pasó una vez y después no se repitió: «**Nunca volví a** ver a ese técnico». Es muy útil para **prometer** (no volverá a pasar, no voy a volver a llegar tarde), para **advertir** (no vuelvas a…, no vuelva a…) y para **desear** (espero que no vuelva a…, ojalá no vuelva a…).',
            examples: [
              { es: 'Óscar promete: «Esto [[no volverá a pasar|orange]]».', en: 'Óscar promises: “This won’t happen again.”' },
              { es: 'Marta, a su hijo: «[[No vuelvas a dejar|orange]] la puerta abierta».', en: 'Marta, to her son: “Don’t leave the door open again.”' },
              { es: 'Después de aquel invierno, la calefacción [[no volvió a fallar|orange]].', en: 'After that winter, the heating never failed again.' },
            ], note: 'Con «nunca» delante del verbo no hace falta «no»: «Nunca volví a llamar». Si «nunca» va detrás, sí: «No volví a llamar nunca» (doble negación, clase 072).' },
          { kind: 'compare', title: 'Dejar de o no volver a · Stop doing or never again', columns: [
            { tone: 'neutral', label: 'DEJAR DE · fin de un hábito (clase 108)', sentence: 'Óscar dejó de llamar a sus clientes los lunes.', idea: 'Era una costumbre, y la costumbre terminó.', en: 'Óscar stopped calling his clients on Mondays. (a habit ended)' },
            { tone: 'orange', label: 'NO VOLVER A · no se repitió', sentence: 'La vecina llamó una vez y [[no volvió a llamar|orange]].', idea: 'Pasó una vez y después nunca más.', en: 'The neighbour called once and never called again.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Volverse: otro verbo · Volverse: a different verb', text: 'Con «se» y un adjetivo, **volverse** significa cambiar de carácter (to become): «Con tantas averías, Lucía **se volvió** muy desconfiada». También significa darse la vuelta (to turn around): «Se volvió y me miró». Lo estudiarás con los verbos de cambio; hoy solo lo reconoces. Cuidado: «la pieza **se volvió a romper**» no es volverse: es «romperse» + volver a.', en: 'With “se” and an adjective, volverse means to become (a change of character): “With so many breakdowns, Lucía became very distrustful.” It also means to turn around: “Se volvió y me miró.” You will study it with the verbs of change; today you only recognise it. Careful: “la pieza se volvió a romper” is not volverse: it is “romperse” + volver a.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ramiro, a Lucía: «Lo siento. Esto no ___ a pasar».', options: ['volvía', 'volvió', 'volverá'], answer: 2, why: 'Es una promesa sobre el futuro: no volverá a pasar.', en: 'Ramiro, to Lucía: “I’m sorry. This won’t happen again.”' },
            { prompt: 'Lucía a Marta, que dejó el grifo abierto: «¡No ___ a dejarlo abierto!»', options: ['vuelves', 'vuelvas', 'volver'], answer: 1, why: 'Advertencia a «tú»: imperativo negativo, no vuelvas a (clase 059).', en: 'Lucía to Marta, who left the tap running: “Don’t leave it running again!”' },
            { prompt: 'El técnico anterior vino una vez y nunca ___ a aparecer.', options: ['vuelva', 'volvió', 'dejó'], answer: 1, why: 'Pasó una vez y después nunca más: nunca volvió a aparecer.', en: 'The previous technician came once and never showed up again.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Falta la «a»? Is the “a” missing?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla antes de ver la corrección.', self: 'Lee cada frase, busca el error y explica qué falla. Después toca para ver la corrección. (Find the mistake, then check.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El técnico volvió venir el viernes.', right: 'El técnico volvió a venir el viernes.', why: 'Falta la **a**: volver **a** + infinitivo. Sin «a» la frase se rompe. (The “a” is part of the structure.)' },
            { wrong: 'La lavadora volvió a perdió agua.', right: 'La lavadora volvió a perder agua.', why: 'Solo se conjuga volver; después de «a» va el infinitivo. (Only volver is conjugated.)' },
            { wrong: 'Ramiro repitió a cambiar la pieza.', right: 'Ramiro volvió a cambiar la pieza.', why: '«Repetir» va con un nombre: repitió la reparación. Para una acción, volver a + infinitivo. (Repetir takes a noun.)' },
            { wrong: 'Lucía lo volvió a leerlo.', right: 'Lucía lo volvió a leer. / Lucía volvió a leerlo.', why: 'El pronombre va una sola vez: delante de volver o pegado al infinitivo. (The pronoun goes in once.)' },
            { wrong: 'El técnico revino el jueves.', right: 'El técnico volvió a venir el jueves.', why: 're- no funciona con todos los verbos: «revenir» no existe. (re- is not universal.)' },
            { wrong: 'Óscar volvió a llamar otra vez.', right: 'Óscar volvió a llamar. / Óscar llamó otra vez.', why: 'Se oye en la conversación, pero repite la misma idea dos veces. Al escribir, elige una de las dos. (Redundant: pick one.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Mañana vuelvo a llamar a la agencia.', 'Mañana vuelvo a llamo a la agencia.', 'Mañana vuelvo llamar a la agencia.'], answer: 0, why: 'Volver + **a** + infinitivo: vuelvo a llamar.', en: 'Which sentence is correct?' },
            { prompt: 'Lucía tuvo que ___ toda la ropa.', options: ['relavar a', 'repetir a lavar', 'volver a lavar'], answer: 2, why: 'Para repetir una acción, la forma segura es volver a + infinitivo: volver a lavar.', en: 'Lucía had to wash all the clothes again.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta algo de su semana que pasó dos veces («Volví a…») y algo que promete no repetir («No voy a volver a…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La llamada de la agencia', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Óscar llama a Lucía · Óscar calls Lucía', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Óscar y tu alumno es Lucía. Después tu alumno toca cada expresión marcada y dice si significa otra vez, nunca más o regresar.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿otra vez, nunca más o regresar? (Again, never again, or return?)' } },
          { kind: 'explore', title: 'Es la tercera vez', setting: 'Martes por la tarde. Óscar Fuentes, de la agencia de alquiler, llama a Lucía por teléfono. Se tratan de usted. (Tuesday afternoon. Óscar Fuentes, from the rental agency, phones Lucía. They use usted.)', lines: [
            { who: 'Óscar', text: 'Buenas tardes, señora Reyes. Escuché su mensaje. ¿La lavadora [[ha vuelto a perder|blue]] agua?', en: 'Good afternoon, Ms Reyes. I listened to your message. Has the washing machine leaked again?' },
            { who: 'Lucía', text: 'Sí, [[otra vez|teal]]. Anoche [[volví|violet]] a casa a las ocho y la cocina estaba llena de agua. Es la tercera vez este mes.', en: 'Yes, again. Last night I got back home at eight and the kitchen was full of water. It’s the third time this month.' },
            { who: 'Óscar', text: 'Lo siento mucho. Pero Ramiro la arregló el viernes, ¿no?', en: 'I’m very sorry. But Ramiro fixed it on Friday, didn’t he?' },
            { who: 'Lucía', text: 'Sí, [[volvió a venir|blue]] el viernes y cambió una pieza. Pero ayer usé la lavadora y el suelo [[se volvió a llenar|blue]] de agua.', en: 'Yes, he came again on Friday and changed a part. But yesterday I ran the washing machine and the floor filled with water again.' },
            { who: 'Óscar', text: 'Entiendo. Mañana a primera hora [[vuelvo a llamar|blue]] a la empresa de reparaciones. Y le [[reenvío|teal]] el correo de Ramiro, por si quiere hablar con él.', en: 'I see. First thing tomorrow I’ll call the repair company again. And I’ll forward you Ramiro’s email, in case you want to talk to him.' },
            { who: 'Lucía', text: 'Gracias. Además, tuve que [[volver a lavar|blue]] toda la ropa a mano. No quiero [[repetir|teal]] esta experiencia.', en: 'Thanks. Also, I had to wash all the clothes again by hand. I don’t want to go through this again.' },
            { who: 'Óscar', text: 'Le pido disculpas [[de nuevo|teal]]. Le prometo que esto [[no va a volver a pasar|orange]].', en: 'I apologise again. I promise you this is not going to happen again.' },
            { who: 'Lucía', text: 'Eso me dijo la última vez… Si [[vuelve a pasar|blue]], busco otro apartamento.', en: 'That’s what you told me last time… If it happens again, I’ll look for another apartment.' },
            { who: 'Óscar', text: 'Tiene razón. Mientras tanto, por favor, [[no vuelva a usar|orange]] la lavadora hasta la reparación.', en: 'You’re right. In the meantime, please don’t use the washing machine again until the repair.' },
            { who: 'Lucía', text: 'De acuerdo. Y si mañana no tengo noticias, [[lo vuelvo a llamar|blue]].', en: 'All right. And if I don’t hear anything tomorrow, I’ll call you again.' },
            { who: 'Óscar', text: 'Perfecto. Hasta mañana, señora Reyes.', en: 'Perfect. Until tomorrow, Ms Reyes.' },
          ], notes: {
            'ha vuelto a perder': 'Perfecto + volver a: la lavadora perdió agua **otra vez**, y Óscar pregunta por algo reciente.',
            'otra vez': 'Adverbio: la misma idea que «ha vuelto a perder agua», pero sin perífrasis. Muy frecuente en la conversación.',
            'volví': 'Aquí «volver» es **regresar**: después de «a» viene un lugar (casa), no un infinitivo.',
            'volvió a venir': 'Indefinido + volver a: Ramiro vino una segunda vez, el viernes. Solo se conjuga volver.',
            'se volvió a llenar': 'Llenarse + volver a, con el pronombre delante: = «volvió a llenarse». No es «volverse».',
            'vuelvo a llamar': 'Presente con valor de futuro próximo: mañana llamo otra vez. Óscar ya llamó antes a la empresa.',
            'reenvío': 'Reenviar = enviar otra vez o a otra persona (to forward). El prefijo re- funciona con este verbo, no con todos.',
            'volver a lavar': 'Tener que + volver a + infinitivo: dos perífrasis juntas. Lucía lavó la ropa dos veces.',
            'repetir': 'Repetir + nombre (esta experiencia). Con un nombre, «repetir» es natural; con una acción, volver a.',
            'de nuevo': 'Adverbio = otra vez. Óscar ya pidió disculpas antes.',
            'no va a volver a pasar': 'La promesa típica: no + ir a + volver a + infinitivo = nunca más. También: «no volverá a pasar».',
            'vuelve a pasar': 'Si + presente (condición real): si pasa otra vez. Volver a funciona en cualquier tiempo.',
            'no vuelva a usar': 'Advertencia con usted: imperativo negativo, no vuelva a + infinitivo.',
            'lo vuelvo a llamar': 'Pronombre delante de volver: = «vuelvo a llamarlo». Las dos posiciones son correctas.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuántas veces perdió agua la lavadora este mes?', options: ['Dos veces.', 'Tres veces.', 'Una vez, anoche.'], answer: 1, why: '«Es la tercera vez este mes».', en: 'How many times did the washing machine leak this month?' },
            { prompt: '¿Qué va a hacer Óscar mañana?', options: ['Llamar otra vez a la empresa de reparaciones.', 'Ir al apartamento con Ramiro.', 'Comprar una lavadora nueva.'], answer: 0, why: '«Mañana a primera hora vuelvo a llamar a la empresa de reparaciones».', en: 'What is Óscar going to do tomorrow?' },
            { prompt: '¿Qué le pide Óscar a Lucía?', options: ['Que busque otro apartamento.', 'Que no use la lavadora hasta la reparación.', 'Que lave la ropa a mano.'], answer: 1, why: '«No vuelva a usar la lavadora hasta la reparación».', en: 'What does Óscar ask Lucía to do?' },
          ] },
        ] },
        { title: '¿Qué significa «volver» aquí? · What does “volver” mean here?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'Frases de la llamada · Sentences from the call', categories: [
            { id: 'otra', label: 'OTRA VEZ · volver a + infinitivo', tone: 'blue' },
            { id: 'nunca', label: 'NUNCA MÁS · no volver a', tone: 'orange' },
            { id: 'regreso', label: 'REGRESAR · volver + lugar', tone: 'violet' },
          ], items: [
            { text: 'Ramiro volvió a venir el viernes.', answer: 'otra', why: 'Volvió a + infinitivo: vino una segunda vez.' },
            { text: 'Anoche Lucía volvió a casa a las ocho.', answer: 'regreso', why: 'Después de «a» hay un lugar: regresó.' },
            { text: 'Esto no va a volver a pasar.', answer: 'nunca', why: 'Negación + volver a: una promesa, nunca más.' },
            { text: 'El suelo se volvió a llenar de agua.', answer: 'otra', why: 'Se llenó otra vez: volver a + llenarse.' },
            { text: 'No vuelva a usar la lavadora.', answer: 'nunca', why: 'Advertencia: no la use más (hasta la reparación).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué le promete Óscar? ¿Te parece una promesa creíble?». Tu alumno responde con «no va a volver a» o «no volverá a».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Conjuga volver, pon «a», deja el infinitivo.',
      steps: [
        { title: 'Lucía se lo cuenta a Marta · Lucía tells Marta', blocks: [
          { kind: 'choice', items: [
            { context: 'Lucía le cuenta la historia a su hermana. (Lucía tells her sister the story.)', prompt: 'Hace tres semanas la lavadora perdió agua. La semana pasada ___ a perder agua.', options: ['volvía', 'volvió', 'vuelve'], answer: 1, why: 'Un hecho concreto en un momento cerrado (la semana pasada): indefinido, volvió a.', en: 'Three weeks ago the washing machine leaked. Last week it leaked again.' },
            { context: 'Marta recuerda su antiguo apartamento. (Marta remembers her old apartment.)', prompt: 'En mi antiguo apartamento, la calefacción ___ a fallar cada enero.', options: ['volvió', 'volvía', 'vuelva'], answer: 1, why: '«Cada enero»: una repetición habitual en el pasado. Imperfecto: volvía a.', en: 'In my old apartment, the heating would break down again every January.' },
            { context: 'Lucía explica por qué llamó a la agencia. (Lucía explains why she called the agency.)', prompt: 'Llamé el lunes por la noche porque el agua ya ___ a llegar al pasillo.', options: ['ha vuelto', 'vuelve', 'había vuelto'], answer: 2, why: 'Algo anterior a otro pasado (llamé): pluscuamperfecto, había vuelto a.', en: 'I called on Monday night because the water had reached the hallway again.' },
            { context: 'Lo que dijo Óscar. (What Óscar said.)', prompt: 'Óscar me prometió: «Esto no ___ a pasar».', options: ['volvió', 'volvía', 'volverá'], answer: 2, why: 'Una promesa mira al futuro: no volverá a pasar.', en: 'Óscar promised me: “This won’t happen again.”' },
            { context: 'Marta responde. (Marta answers.)', prompt: 'Ojalá la lavadora no ___ a fallar.', options: ['vuelve', 'vuelva', 'volver'], answer: 1, why: '«Ojalá» pide subjuntivo (clase 089): no vuelva a fallar.', en: 'Let’s hope the washing machine doesn’t fail again.' },
          ] },
        ] },
        { title: '¿Otra vez, nunca más o regresar? · Again, never again or return?', blocks: [
          { kind: 'classify', title: 'Más frases de la semana · More sentences from the week', categories: [
            { id: 'otra', label: 'OTRA VEZ · volver a + infinitivo', tone: 'blue' },
            { id: 'nunca', label: 'NUNCA MÁS · no volver a', tone: 'orange' },
            { id: 'regreso', label: 'REGRESAR · volver + lugar', tone: 'violet' },
          ], items: [
            { text: 'Ramiro volvió al taller a las seis.', answer: 'regreso', why: 'Al taller = a un lugar: regresó.' },
            { text: 'La lavadora volvió a hacer un ruido raro.', answer: 'otra', why: 'Volver a + infinitivo (hacer): otra vez.' },
            { text: 'Después de aquel invierno, la calefacción no volvió a fallar.', answer: 'nunca', why: 'Negación + volver a: nunca más falló.' },
            { text: 'Lucía vuelve del supermercado con detergente.', answer: 'regreso', why: 'Volver de un lugar: regresar.' },
            { text: 'Óscar volvió a pedir disculpas.', answer: 'otra', why: 'Pidió disculpas una segunda vez.' },
            { text: 'Nunca volví a comprar una lavadora barata.', answer: 'nunca', why: 'Nunca + volver a: no lo hice más.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ramiro volvió venir el viernes por la tarde.', ok: false, options: ['Ramiro volvió a vino el viernes por la tarde.', 'Ramiro volvió de venir el viernes por la tarde.', 'Ramiro volvió a venir el viernes por la tarde.'], answer: 2, why: 'Falta la preposición: volver **a** + infinitivo (venir).' },
            { sentence: 'Óscar me volvió a llamar ayer.', ok: true, why: 'Correcta: el pronombre va delante de volver. También: «volvió a llamarme».' },
            { sentence: 'Lucía lo volvió a leerlo antes de firmar.', ok: false, options: ['Lucía volvió lo a leer antes de firmar.', 'Lucía lo volvió leerlo antes de firmar.', 'Lucía lo volvió a leer antes de firmar.'], answer: 2, why: 'El pronombre va una sola vez: «lo volvió a leer» o «volvió a leerlo».' },
            { sentence: 'Ramiro repitió a revisar la lavadora.', ok: false, options: ['Ramiro volvió a revisar la lavadora.', 'Ramiro revolvió la lavadora.', 'Ramiro repitió revisar la lavadora.'], answer: 0, why: '«Repetir» va con un nombre, no con a + infinitivo; y «revolver» es otro verbo (to stir). Para una acción: volvió a revisar.' },
            { sentence: 'Después de la reparación, la lavadora no volvió a fallar.', ok: true, why: 'Correcta: no volver a = nunca más. La lavadora ya funciona bien.' },
            { sentence: 'Si la lavadora vuelva a fallar, llámeme.', ok: false, options: ['Si la lavadora vuelve fallar, llámeme.', 'Si la lavadora vuelve a fallar, llámeme.', 'Si la lavadora volverá a fallar, llámeme.'], answer: 1, why: 'Si + presente de indicativo (condición real): si vuelve a fallar. Ni subjuntivo ni futuro después de «si».' },
          ] },
        ] },
        { title: 'Ramiro vuelve · Ramiro comes back', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'chat-fill', title: 'Jueves por la mañana, en el apartamento · Thursday morning, at the apartment', lines: [
            { who: 'Ramiro', text: 'Buenos días, señora Reyes. Siento ___ molestarla.', options: ['volviendo', 'volver a', 'volver'], answer: 1, why: 'Molestar otra vez: volver a + infinitivo. «Siento» va con infinitivo: siento volver a molestarla.' },
            { who: 'Lucía', text: 'No se preocupe. El lunes la lavadora ___ perder agua y la cocina se llenó.', options: ['volvió', 'volvió a', 'volvía a'], answer: 1, why: 'Un hecho concreto el lunes: indefinido, con la preposición: volvió a perder.' },
            { who: 'Ramiro', text: 'Esta vez no voy a ___ la pieza vieja: traigo una nueva.', options: ['rearreglar', 'arreglar a', 'volver a arreglar'], answer: 2, why: '«Rearreglar» no se usa. Con cualquier verbo, la forma segura es volver a + infinitivo.' },
            { who: 'Lucía', text: 'Perfecto. ¿Y si ___ a pasar?', options: ['volverá', 'vuelve', 'vuelva'], answer: 1, why: 'Después de «si» (condición real) va presente de indicativo: si vuelve a pasar.' },
            { who: 'Ramiro', text: 'Si pasa, me llama y ___ el mismo día.', options: ['vuelvo', 'repito', 'vuelvo a'], answer: 0, why: 'Aquí «volver» es regresar al apartamento: no hay infinitivo después.' },
            { who: 'Lucía', text: 'Gracias. Es que el lunes tuve que lavar toda la ropa de nuevo.' },
            { who: 'Ramiro', text: 'Lo entiendo. Y un consejo: no ___ a llenar tanto la lavadora.', options: ['vuelve', 'volver', 'vuelva'], answer: 2, why: 'Consejo negativo con usted: imperativo negativo, no vuelva a llenar.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['lavadora', 'La', 'perder', 'volvió', 'a', 'agua'], accept: ['La lavadora volvió a perder agua'], en: 'The washing machine leaked again.' },
            { tiles: ['volvió', 'Óscar', 'llamar', 'me', 'a', 'ayer'], accept: ['Óscar me volvió a llamar ayer', 'Ayer Óscar me volvió a llamar', 'Ayer me volvió a llamar Óscar'], en: 'Óscar called me again yesterday.' },
            { tiles: ['va', 'Esto', 'volver', 'no', 'a', 'a', 'pasar'], accept: ['Esto no va a volver a pasar'], en: 'This is not going to happen again.' },
            { tiles: ['usar', 'No', 'a', 'vuelva', 'la', 'lavadora'], accept: ['No vuelva a usar la lavadora'], en: 'Don’t use the washing machine again.' },
          ] },
        ] },
        { title: 'Dilo con volver a · Say it with volver a', blocks: [
          { kind: 'rewrite', title: 'Otra vez → volver a · Again → volver a', items: [
            { prompt: 'Ramiro revisó la lavadora otra vez.', instruction: 'Usa volver a + infinitivo, en el mismo tiempo. Empieza con «Ramiro».', accept: ['Ramiro volvió a revisar la lavadora'] },
            { prompt: 'Lucía leyó el contrato otra vez.', instruction: 'Usa volver a + infinitivo y cambia «el contrato» por el pronombre «lo». Empieza con «Lucía».', accept: ['Lucía lo volvió a leer', 'Lucía volvió a leerlo'] },
            { prompt: 'Ramiro promete: «Nunca más voy a traer la pieza equivocada».', instruction: 'Escribe la promesa con no + volver a, en futuro (volveré). Empieza con «No».', accept: ['No volveré a traer la pieza equivocada', 'No volveré a traer la pieza equivocada nunca más'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice tres frases reales: algo que volvió a hacer esta semana, algo que hacía otra vez cada verano de niño (volvía a…) y una promesa con «no voy a volver a…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Óscar', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El buzón de voz de Lucía · Lucía’s voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué solución propone Óscar?). Segunda escucha: tu alumno levanta la mano cada vez que oye «volver a» y dice si significa otra vez o nunca más. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes «volver a». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Óscar Fuentes', channel: 'BUZÓN DE VOZ · DE ÓSCAR FUENTES PARA LUCÍA REYES', src: '/audio/grammar-live/409.mp3',
            before: 'Es miércoles por la mañana. Lucía no contesta el teléfono y Óscar le deja un mensaje. ¿Qué crees que dice: una disculpa, una solución, una fecha…? (Óscar leaves Lucía a message. What do you think he says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Óscar pide disculpas y propone una solución definitiva para el jueves.', 'Óscar pide a Lucía que arregle ella la lavadora.', 'Óscar dice que la agencia no puede hacer nada más.'], answer: 0, why: 'Pide disculpas, explica que Ramiro viene el jueves con una pieza nueva y promete una lavadora nueva si falla otra vez.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Con quién habló Óscar esta mañana?', options: ['Con la encargada de la empresa de reparaciones.', 'Con la vecina de abajo.', 'Con Ramiro.'], answer: 0, why: '«Esta mañana volví a llamar a la empresa de reparaciones y hablé con la encargada».', en: 'Who did Óscar talk to this morning?' },
              { prompt: '¿Qué va a hacer Ramiro el jueves?', options: ['Arreglar otra vez la pieza vieja.', 'Llevarse la lavadora al taller.', 'Cambiar la pieza vieja por una nueva.'], answer: 2, why: '«No va a volver a arreglar la pieza vieja: la va a cambiar por una nueva».', en: 'What is Ramiro going to do on Thursday?' },
              { prompt: '¿Qué pasa si la lavadora vuelve a perder agua después del jueves?', options: ['La agencia le compra una lavadora nueva.', 'Lucía tiene que pagar la reparación.', 'Ramiro vuelve el mismo día.'], answer: 0, why: '«Si después de la reparación vuelve a perder agua, la agencia le compra una nueva».', en: 'What happens if the washing machine leaks again after Thursday?' },
              { prompt: '¿Qué dice Óscar de la vecina de abajo?', options: ['Que quiere hablar con Lucía.', 'Que no tiene ninguna mancha en el techo.', 'Que está muy enfadada.'], answer: 1, why: '«La vecina de abajo no tiene ninguna mancha en el techo, así que tranquila».', en: 'What does Óscar say about the downstairs neighbour?' },
            ],
            transcript: 'Buenos días, señora Reyes, le habla Óscar Fuentes, de la agencia. Siento mucho lo de la lavadora. Ya sé que es la tercera vez y que el técnico [[volvió a venir|blue]] el viernes para nada. Esta mañana [[volví a llamar|blue]] a la empresa de reparaciones y hablé con la encargada. Ramiro pasa [[otra vez|teal]] por su apartamento el jueves a las diez, pero esta vez no va a [[volver a arreglar|blue]] la pieza vieja: la va a cambiar por una nueva. Y si después de la reparación la lavadora [[vuelve a perder|blue]] agua, la agencia le compra una nueva, se lo prometo. Por cierto, hablé con la vecina de abajo: no tiene ninguna mancha en el techo, así que tranquila. Le pido disculpas [[de nuevo|teal]]. Esto [[no va a volver a pasar|orange]]. Si tiene cualquier problema, [[vuelva a llamarme|blue]] a este número. Que tenga un buen día.',
            reply: { teacher: 'Tú eres Óscar. Tu alumno es Lucía y le devuelve la llamada: confirma la cita del jueves, dice qué no quiere que vuelva a pasar y pide algo más con «vuelva a…» o «no vuelva a…».', self: 'Responde a Óscar en voz alta como Lucía: confirma la cita del jueves, di qué no quieres que vuelva a pasar y pide algo más. (Answer as Lucía: confirm Thursday and say what must not happen again.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que se repite', coach: 'Otra vez, de nuevo, nunca más. Again, once more, never again.',
      steps: [
        { title: 'Tus repeticiones · Your repetitions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales. Si dice «volví llamar» o «repetí a…», tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa volver a, otra vez, de nuevo y no volver a. (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: '¿Hay algo en tu casa o en tu trabajo que vuelve a fallar una y otra vez? · Is there something at home or at work that keeps breaking down?', followUps: ['¿Cuántas veces ha vuelto a pasar este mes? (How many times has it happened again this month?)', '¿Qué hiciste la última vez? (What did you do last time?)'], phrases: ['Mi… [[vuelve a fallar|blue]] cada…', 'Este mes [[ha vuelto a pasar|blue]]…', 'Lo arreglé, pero [[se volvió a romper|blue]].'], hint: 'Presente para lo que se repite ahora; indefinido o perfecto para la última vez.', example: 'Mi impresora vuelve a fallar cada semana. Este mes ha vuelto a pasar tres veces. La reinicié, pero se volvió a bloquear.', next: 'Ahora, algo que repites con gusto.', teacher: 'Cuenta tú también una avería real: así tu alumno oye otra vez «volvió a…» en contexto.' },
            { q: '¿Qué libro, película o serie has vuelto a ver o a leer? ¿Por qué? · What book, film or series have you watched or read again? Why?', followUps: ['¿Lo entendiste mejor la segunda vez? (Did you understand it better the second time?)', '¿Lo volverías a leer? (Would you read it again?)'], phrases: ['[[He vuelto a ver|blue]]… / [[Volví a leer|blue]]…', 'Lo [[releí|teal]] porque…', '[[Lo volví a ver|blue]] con…'], hint: 'Practica el pronombre en las dos posiciones: «lo volví a ver» y «volví a verlo».', example: 'Volví a leer una novela de mi adolescencia. La releí porque quería saber si me gustaba igual. La segunda vez la entendí mucho mejor.', next: 'Ahora, algo que no repetiste.' },
            { q: '¿Hay algo que hiciste una vez y nunca volviste a hacer? · Is there something you did once and never did again?', followUps: ['¿Qué pasó esa vez? (What happened that time?)', '¿Lo volverías a intentar? (Would you try it again?)'], phrases: ['Una vez… y [[nunca volví a|orange]]…', '[[No volví a|orange]]… nunca más.', 'Después de eso, [[no volví a|orange]]…'], hint: 'Primero cuenta la experiencia (indefinido); después, lo que no se repitió: nunca volví a…', example: 'Una vez hice un curso de surf y me caí veinte veces. Nunca volví a subirme a una tabla.', next: 'Ahora, una advertencia.' },
            { q: 'Tu compañero de casa dejó el grifo abierto y la cocina se llenó de agua. ¿Qué le dices? · Your flatmate left the tap running and flooded the kitchen. What do you say?', followUps: ['¿Qué te promete él? (What does he promise you?)', '¿Le crees? (Do you believe him?)'], phrases: ['¡[[No vuelvas a|orange]] dejar…!', 'Por favor, [[no lo vuelvas a hacer|orange]].', 'Él: «[[No volverá a pasar|orange]], te lo prometo».'], hint: 'Advertencia con tú: no vuelvas a + infinitivo. Promesa: no volverá a pasar / no va a volver a pasar.', example: '¡No vuelvas a dejar el grifo abierto! Tuve que secar el suelo dos veces. —Lo siento, no volverá a pasar, te lo prometo.', next: 'Ahora, tú eres Lucía.', teacher: 'Tú haces de compañero de casa y prometes algo poco creíble. Tu alumno reacciona: «Eso me dijiste la última vez».' },
            { q: 'Tú eres Lucía y el jueves por la tarde la lavadora vuelve a perder agua. Llamas a Óscar. · You are Lucía and the machine leaks again on Thursday. You call Óscar.', followUps: ['¿Qué solución pides? (What solution do you ask for?)', '¿Qué le recuerdas de su promesa? (What do you remind him of his promise?)'], phrases: ['Señor Fuentes, la lavadora [[ha vuelto a perder|blue]] agua.', 'Usted me dijo que [[no iba a volver a pasar|orange]].', 'Ramiro [[repitió|teal]] la misma reparación…'], hint: 'Cuenta el problema con volver a, recuerda la promesa y pide una solución. Usa usted.', example: 'Señor Fuentes, la lavadora ha vuelto a perder agua. Usted me dijo que no iba a volver a pasar. Ramiro cambió la pieza, pero el problema se repite. Necesito una lavadora nueva esta semana.', next: 'La última pregunta.', teacher: 'Tú eres Óscar y pones excusas. Tu alumno insiste con «otra vez», «de nuevo» y «volver a».' },
            { q: '¿Qué experiencia te gustaría repetir? ¿Y qué te gustaría volver a hacer este año? · What experience would you like to repeat? What would you like to do again this year?', followUps: ['¿Cuándo lo hiciste la primera vez? (When did you do it the first time?)', '¿Con quién te gustaría repetirlo? (Who would you like to do it again with?)'], phrases: ['Me gustaría [[repetir|teal]] el viaje a…', 'Este año quiero [[volver a|blue]] + infinitivo…', 'Ojalá pueda [[volver a|blue]]…'], hint: 'Repetir + nombre (el viaje, la experiencia); volver a + infinitivo para una acción.', example: 'Me gustaría repetir el viaje a Oaxaca con mis amigas. Este año quiero volver a nadar dos veces por semana. Ojalá pueda volver a ver el mar en verano.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes. Tu alumno corrige si oyes «repetir a» o «volver» sin «a».', self: 'Ahora haz tú las preguntas en voz alta, como si entrevistaras a otra persona, y respóndelas otra vez con ejemplos nuevos. (Ask the questions aloud and answer them again with new examples.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una reclamación por escrito', coach: 'Lo que se repite y lo que no debe repetirse. What keeps happening, and what must not.',
      steps: [
        { title: 'Un correo a la agencia · An email to the agency', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «volver»: ¿lleva «a»?, ¿va seguido de infinitivo?, ¿dónde está el pronombre? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada «volver»: ¿lleva «a» y un infinitivo? (Check every “volver”.)' } },
          { kind: 'write', title: 'Una reclamación formal · A formal complaint', situation: 'Eres Lucía (o eres tú, con un problema que se repite en tu casa o en tu trabajo). Escribe un correo formal a Óscar Fuentes, de la agencia: explica qué ha vuelto a pasar, recuerda lo que ya se hizo y pide una solución definitiva. (You are Lucía, or yourself with a problem that keeps happening. Write a formal email to Óscar Fuentes: explain what has happened again, recall what was already done and ask for a final solution.)', task: [
            'Saluda con usted y explica qué problema ha vuelto a pasar y cuántas veces. (Greet formally; say what has happened again and how many times.)',
            'Usa volver a + infinitivo en dos tiempos distintos (por ejemplo, indefinido y presente). (Use volver a in two different tenses.)',
            'Usa una vez otra vez, de nuevo o repetir + nombre. (Use otra vez, de nuevo or repetir + noun once.)',
            'Escribe qué no quieres que se repita: «no quiero volver a…» o «espero que no vuelva a…». (Say what must not happen again.)',
            'Pide una solución con fecha y despídete. (Ask for a solution with a date and sign off.)',
          ], starters: ['Estimado señor Fuentes:', 'Le escribo de nuevo por…', 'El lunes… volvió a…', 'Es la tercera vez que…', 'No quiero volver a…', 'Si… vuelve a…', 'Espero que no vuelva a…', 'Atentamente,'],
            words: ['volver a', 'volvió a', 'ha vuelto a', 'vuelve a', 'otra vez', 'de nuevo', 'repetir', 'no volver a', 'nunca más', 'releer', 'reenviar', 'una solución definitiva'],
            model: 'Estimado señor Fuentes: Le escribo [[de nuevo|teal]] por la lavadora de mi apartamento. El lunes por la noche [[volvió a perder|blue]] agua y el suelo de la cocina [[se volvió a llenar|blue]] de agua. Es la tercera vez este mes: el técnico ya vino dos veces y el viernes [[repitió|teal]] la misma reparación. Además, tuve que [[volver a lavar|blue]] toda la ropa a mano. Entiendo que estas cosas pasan, pero [[no quiero volver a perder|orange]] un día de trabajo por esta avería. Le pido una solución definitiva antes del viernes: una pieza nueva o una lavadora nueva. Si el jueves la lavadora [[vuelve a fallar|blue]], [[lo vuelvo a llamar|blue]] el mismo día. Espero que esto [[no vuelva a pasar|orange]]. Atentamente, Lucía Reyes.',
            minWords: 90,
            checks: [
              { label: 'Volver a + infinitivo (to do again)', pattern: '(?<!\\p{L})(?:vuelv|volv)\\p{L}*\\s+a\\s+\\p{L}+(?:ar|er|ir)(?:l[oa]s?|me|te|se|nos|les?)?(?!\\p{L})', tip: 'Cuenta lo que se repite: «La lavadora volvió a perder agua», «Vuelve a fallar».' },
              { label: 'Otra vez, de nuevo o repetir (another way to say again)', pattern: '(?<!\\p{L})(?:otra\\s+vez|de\\s+nuevo|nuevamente|una\\s+vez\\s+más|repet\\p{L}*|repit\\p{L}*)(?!\\p{L})', tip: 'Varía: «Le escribo de nuevo», «Ramiro repitió la reparación».' },
              { label: 'No volver a (what must not happen again)', pattern: '(?<!\\p{L})(?:no|nunca)\\s+(?:(?:me|te|se|lo|la|le|nos|les|los|las)\\s+)?(?:(?:quiero|va|vaya|voy|vamos)\\s+(?:a\\s+)?)?(?:vuelv|volv)\\p{L}*\\s+a(?!\\p{L})', tip: 'Di qué no debe repetirse: «No quiero volver a…», «Espero que no vuelva a pasar».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:vuelv|volv)\\p{L}*\\s+(?:llamar|venir|pasar|perder|fallar|salir|usar|romper|revisar|arreglar|lavar|escribir)(?!\\p{L})', why: 'Falta la **a**: volver **a** + infinitivo («volvió a fallar»).' },
              { pattern: '(?<!\\p{L})(?:vuelv|volv)\\p{L}*\\s+a\\s+(?:llamó|llamé|vino|pasó|perdió|falló|salió|rompió|escribí|escribió)(?!\\p{L})', why: 'Después de «volver a» va el **infinitivo**: «volvió a fallar», no «volvió a falló».' },
              { pattern: '(?<!\\p{L})(?:repet|repit)\\p{L}*\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: '«Repetir» va con un nombre. Para una acción, usa **volver a** + infinitivo.' },
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
            { tone: 'blue', label: 'VOLVER A + INFINITIVO', formula: 'vuelvo a · volví a · volvía a · he vuelto a · volveré a + inf.', example: 'Óscar volvió a llamarme ayer. = Óscar me volvió a llamar ayer.', caption: 'otra vez, en cualquier tiempo; el pronombre, delante o detrás', en: 'again, in any tense; the pronoun before volver or attached to the infinitive' },
            { tone: 'orange', label: 'NO VOLVER A', formula: 'no volverá a · no vuelvas a · nunca volví a · que no vuelva a', example: 'Esto no va a volver a pasar. / No vuelva a usar la lavadora.', caption: 'nunca más: promesas, advertencias y deseos', en: 'never again: promises, warnings and wishes' },
            { tone: 'teal', label: 'OTRAS FORMAS', formula: 'otra vez · de nuevo · repetir + nombre · re- (releer)', example: 'Ramiro vino otra vez y repitió la reparación.', caption: 'repetir va con un nombre; re- no sirve con todos los verbos', en: 'repetir takes a noun; re- does not work with every verb' },
            { tone: 'violet', label: 'VOLVER · regresar', formula: 'volver a + lugar · volver de + lugar', example: 'Lucía volvió a casa a las ocho.', caption: 'después de «a», un lugar, no un infinitivo', en: 'after “a” comes a place, not an infinitive' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira lo que va detrás de «a»: si es un **infinitivo**, volver a = otra vez («volvió a llamar»); si es un **lugar**, volver = regresar («volvió a casa»). Con «no» o «nunca», volver a = nunca más («no volverá a pasar»). Solo se conjuga volver, y la **a** no desaparece nunca.', en: 'Look at what comes after “a”: if it is an infinitive, volver a = again (“volvió a llamar”); if it is a place, volver = return (“volvió a casa”). With “no” or “nunca”, volver a = never again (“no volverá a pasar”). Only volver is conjugated, and the “a” never disappears.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Olvidé la contraseña y tuve que ___ a crearla.', options: ['volver', 'repetir', 'rehacer'], answer: 0, why: 'Volver a + infinitivo: volver a crearla. «Repetir» y «rehacer» no van con «a» + infinitivo.', en: 'I forgot the password and had to create it again.' },
            { prompt: 'Mi hermano rompió mi taza favorita. Le dije: «¡No ___ a tocar mis cosas!»', options: ['vuelves', 'volver', 'vuelvas'], answer: 2, why: 'Advertencia a tú: imperativo negativo, no vuelvas a.', en: 'My brother broke my favourite mug. I told him: “Don’t touch my things again!”' },
            { prompt: 'Fui a ese restaurante en 2019, comí muy mal y nunca ___ a ir.', options: ['volví', 'vuelvo', 'volvía'], answer: 0, why: 'Una experiencia cerrada y lo que no se repitió: nunca volví a ir.', en: 'I went to that restaurant in 2019, the food was very bad and I never went again.' },
            { prompt: 'Me gustó tanto la novela que la ___ en verano.', options: ['repetí a leer', 'revolví', 'releí'], answer: 2, why: 'Releer = leer otra vez. «Revolver» es otro verbo y «repetir» no va con a + infinitivo.', en: 'I liked the novel so much that I reread it in the summer.' },
            { prompt: '¿Qué significa «Con los años, mi jefe se volvió muy exigente»?', options: ['Mi jefe cambió: ahora es muy exigente.', 'Mi jefe regresó a la oficina.', 'Mi jefe fue exigente otra vez.'], answer: 0, why: 'Volverse + adjetivo = cambiar de carácter (to become). No es volver a.', en: 'What does “Con los años, mi jefe se volvió muy exigente” mean?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la oficina.', blocks: [
          { kind: 'lead', text: 'Marta, la hermana de Lucía, trabaja en una oficina. La impresora también le da problemas. Transforma sus frases con volver a.', en: 'Marta, Lucía’s sister, works in an office. The printer is giving her trouble too. Transform her sentences with volver a.' },
          { kind: 'rewrite', title: 'La impresora de Marta · Marta’s printer', items: [
            { prompt: 'La impresora falla otra vez.', instruction: 'Usa volver a + infinitivo, en presente. Empieza con «La impresora».', accept: ['La impresora vuelve a fallar'] },
            { prompt: 'Imprimí el informe de nuevo.', instruction: 'Usa volver a + infinitivo, en indefinido. Empieza con «Volví».', accept: ['Volví a imprimir el informe'] },
            { prompt: 'Nunca más voy a usar esa impresora.', instruction: 'Usa no + ir a + volver a. Empieza con «No».', accept: ['No voy a volver a usar esa impresora', 'No voy a volver a usar esa impresora nunca más'] },
          ] },
        ] },
        { title: 'Ampliación · Registros y dobles sentidos · Registers and double meanings', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'table', title: 'Decir «otra vez» en cada registro · Saying “again” in each register', head: ['Registro · Register', 'Forma', 'Ejemplo'], rows: [
            ['Conversación', '**otra vez** · **volver a**', '¡Otra vez la lavadora! · Ha vuelto a pasar.'],
            ['Neutro', '**de nuevo**', 'Le escribo de nuevo por el mismo problema.'],
            ['Formal, escrito', '**nuevamente** · **una vez más**', 'El tren llegó nuevamente con retraso. · Una vez más, gracias.'],
            ['Formal, escrito', '**reiterar** (decir otra vez)', 'Le reiteramos nuestras disculpas.'],
            ['Rioplatense (Argentina, Uruguay)', '**de vuelta** = otra vez', '«Lo hice de vuelta» = lo hice otra vez.'],
          ], note: '«Nuevamente» es muy frecuente en América, también en la conversación; en España se usa sobre todo en textos formales.' },
          { kind: 'tip', icon: '💡', title: 'Volver + a + infinitivo… ¿o regresar para?', text: 'Con un verbo de movimiento, «a» + infinitivo también puede expresar **finalidad**: «Salí de casa, pero **volví a buscar** el paraguas» = regresé para buscarlo. El contexto decide. Si quieres evitar la duda, di el lugar: «volví **a casa** a buscar el paraguas».', en: 'With a verb of movement, “a” + infinitive can also express purpose: “I left home, but I went back to get the umbrella.” Context decides. To avoid doubt, name the place: “volví a casa a buscar el paraguas”.' },
          { kind: 'choice', title: 'Para alumnos fuertes · For strong students', items: [
            { prompt: 'Correo formal de la agencia: «Le ___ nuestras disculpas por las molestias».', options: ['volvemos', 'reiteramos', 'repetimos a'], answer: 1, why: 'Reiterar = decir otra vez, en registro formal. «Volvemos» necesitaría a + infinitivo (volvemos a pedirle disculpas).', en: 'Formal email from the agency: “We once again apologise for the inconvenience.”' },
            { prompt: '«Salí del apartamento, pero volví a buscar las llaves». ¿Qué es lo más probable?', options: ['Busqué las llaves por segunda vez.', 'Nunca encontré las llaves.', 'Regresé al apartamento para buscar las llaves.'], answer: 2, why: '«Salí» crea un movimiento: aquí «volver a buscar» es regresar para buscar. Sin ese contexto, podría significar «buscar otra vez».', en: '“I left the apartment, but I went back for the keys.” What is most likely?' },
            { prompt: 'Noticia: «El tren de las ocho llegó ___ con retraso».', options: ['repetido', 'nuevamente', 'volvió'], answer: 1, why: '«Nuevamente» = otra vez, típico de las noticias y de los textos formales.', en: 'News: “The eight o’clock train arrived late again.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Tu alumno escribe dos frases sobre la avería de Lucía: una para un mensaje a una amiga («¡Otra vez la lavadora!») y otra para un correo formal («Nuevamente…»).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 110 · Acostumbrarse a, tratar de, pensar en', text: 'Ya cuentas lo que se repite y lo que no debe repetirse: «volvió a llamarme», «no volverá a pasar». En la clase 110 sigues con verbos que llevan una preposición fija delante del infinitivo: «me **acostumbré a** vivir lejos», «**trato de** llegar a tiempo», «**pienso en** cambiar de casa». Es el paso natural: igual que en «volver **a**», la preposición forma parte del verbo y no puede desaparecer.', en: 'You can now talk about what happens again and what must not happen again: “volvió a llamarme”, “no volverá a pasar”. In class 110 you continue with verbs that take a fixed preposition before the infinitive: “I got used to living far away”, “I try to arrive on time”, “I’m thinking of moving house”. It is the natural next step: just like in “volver a”, the preposition is part of the verb and cannot disappear.', href: '/gramatica/acostumbrarse-a-tratar-de-pensar-en', label: 'Ir a la clase 110' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te gustaría volver a hacer este año? ¿Y qué no quieres volver a hacer nunca?». Respuesta esperada: una frase con volver a y otra con no volver a. Tarea: escribir la reclamación de Escribir sobre un problema real que se repite.' },
        ] },
      ],
    },
  ],
};
