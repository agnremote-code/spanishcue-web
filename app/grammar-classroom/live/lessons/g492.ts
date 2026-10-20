import type { LiveLesson } from '../types';

/**
 * Lesson 492 · C1 · Intensificación y énfasis: ni siquiera, incluso, vaya si (course unit G192).
 * Builds on G113 (lesson 413: lo que, lo de, lo + adjective «lo bueno es que»), G154
 * (lesson 235: tan / tanto… que), G184 (lesson 484: focus adverbs incluso / hasta placed
 * before what they highlight) and G191 (attenuation, the opposite move). C1 step: turning
 * the volume up with control. Scalar particles: incluso / hasta / aun (inclusive, the least
 * expected item is included; hasta yo, not *hasta mí; aun without accent = incluso) and
 * ni siquiera / ni + un(a) + noun (negative scale: Ni siquiera me saludó; No dijo ni una
 * palabra), with position (before the verb without «no»; after it, no… ni siquiera) and
 * meaning change by position (Incluso Mateo lloró / Mateo incluso lloró). Audit gap 11:
 * ponderative «lo + adj./adv. + que» (No sabes lo cansada que estoy; Me sorprendió lo bien
 * que habla): the adjective agrees, the verb is indicative; contrast with G113 «lo bueno es
 * que». Emphatic «lo que + verb» (¡Lo que se ríe!; Lo que hay que oír) and quantity «la de +
 * noun + que» (colloquial, very frequent in Spain), kept apart from G113 «lo de» (a topic).
 * Emphatic affirmation: sí que, vaya si (colloquial). Degree: bien + adj. (very frequent in
 * much of Latin America), de lo más + adj. (agreeing), la mar de (Spain, colloquial), súper /
 * super-, requete-, re- (Río de la Plata, variety note), -ísimo without «muy», repetition
 * (una película película), formal sumamente / extraordinariamente. Exclamatives: ¡Qué + noun
 * + tan / más + adj.!, ¡Cuánto…!, ¡Si (es que)…! / ¡Pero si…!; tan / tanto… que recalled.
 * Ampliación: suspended consecutives (Hacía un frío que…), «¡Ni que + imperf. subj.!», «con
 * lo + adj. + que».
 * Scene: the film podcast «Butaca doble», recorded online between Madrid and Mexico City.
 * Hosts Irene Salvat (Spain) and Mateo Ibarra (Mexico) review the fictional drama «La
 * última marea»; producer Nuria Paz runs the session. Escuchar: Mateo's solo minute
 * (es-MX-JorgeNeural, ustedes). Escribir: a review for the podcast's website.
 */
export const lesson: LiveLesson = {
  id: 492,
  level: 'C1',
  title: 'Intensificación y énfasis: ni siquiera, incluso, vaya si',
  subtitle: 'Subir el tono con precisión: ni siquiera, incluso, lo bien que…, vaya si, de lo más, y elegir el registro de cada recurso.',
  legend: [
    { tone: 'blue', label: 'ESCALA · incluso, hasta, aun, ni siquiera, ni un(a)… (even / not even)' },
    { tone: 'teal', label: 'LO… QUE PONDERATIVO · lo larga que es, lo bien que habla, lo que lloré (how long, how well, how much)' },
    { tone: 'orange', label: 'AFIRMAR Y EXCLAMAR · sí que, vaya si, ¡qué… tan!, ¡cuánto…!, ¡si es que…! (emphatic yes, exclamations)' },
    { tone: 'violet', label: 'GRADO · bien, de lo más, la mar de, súper-, -ísimo, repetición, tan… que (turning up the degree)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Subir el volumen sin gritar', coach: 'El énfasis también es gramática. Emphasis is grammar too.',
      steps: [
        { title: 'Una reseña sin pulso · A review with no pulse', blocks: [
          { kind: 'lead', text: 'Madrid y Ciudad de México, por videollamada. **Irene Salvat** y **Mateo Ibarra** presentan «Butaca doble», un pódcast de cine; **Nuria Paz** lo produce. Hoy reseñan «La última marea», un drama de casi tres horas sobre una familia de fareros. Irene ha escrito un guion correcto… y plano. Nuria le pide «más pulso». Ya sabes decir **muy**, **-ísimo** y **tan… que**; hoy aprendes los recursos que usa un hablante nativo para **subir el tono** y para decir qué es lo más (o lo menos) esperable.', en: 'A film podcast recorded over a video call between Madrid and Mexico City. The hosts are reviewing a three-hour drama, and the producer finds Irene’s script correct but flat. You already know muy, -ísimo and tan… que; today you learn the resources native speakers use to raise the emotional temperature and to signal what is most, or least, expected.' },
          { kind: 'guide', text: { teacher: 'Tú lees el guion plano de Irene; tu alumno lee la versión con pulso. Después tu alumno dice qué palabras cambian el efecto.', self: 'Lee las dos versiones en voz alta. ¿Qué palabras hacen que la segunda suene viva? (Which words make the second version come alive?)' } },
          { kind: 'compare', title: 'El mismo comentario, dos versiones · The same comment, two versions', columns: [
            { tone: 'neutral', label: 'GUION PLANO', sentence: 'La película es muy larga. La protagonista habla poco al principio. Al público le gustó, también a los que entraron con palomitas. A mí también me gustó.', idea: 'Todo es verdad, pero nada destaca: no sabemos qué sorprende ni cuánto.', en: 'Everything is true, but nothing stands out: the listener cannot tell what was surprising or how strongly Irene feels.' },
            { tone: 'teal', label: 'VERSIÓN CON PULSO', sentence: 'No te imaginas [[lo larga que es|teal]]. La protagonista [[no dice ni una palabra|blue]] en veinte minutos y, sin embargo, [[hasta|blue]] los que entraron con palomitas se quedaron callados. ¿Que si me gustó? [[¡Vaya si me gustó!|orange]]', idea: 'El grado se presenta como sorpresa, la escala marca lo inesperado y la respuesta afirma con fuerza.', en: 'The degree is presented as something surprising, the scalar words mark what nobody expected, and the final answer is an emphatic yes.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué aporta «hasta» en «hasta los que entraron con palomitas se quedaron callados»?', options: ['Que se quedaron callados hasta el final de la película.', 'Que solo ellos se quedaron callados.', 'Que eran los menos probables: si ellos se callaron, todos se callaron.'], answer: 2, why: '«Hasta» delante de un elemento = incluso: lo coloca en el extremo de la escala, como lo menos esperable.', en: 'Here hasta means “even”: it places the people with popcorn at the far end of the scale, as the least likely to fall silent.' },
            { prompt: '«¡Vaya si me gustó!» significa…', options: ['Que le gustó, y mucho: no hay ninguna duda.', 'Que le gustó solo un poco.', 'Que no está segura de si le gustó.'], answer: 0, why: '«Vaya si + indicativo» afirma con fuerza, como «claro que sí, y mucho».', en: 'Vaya si + indicative is an emphatic yes, roughly “and how!” or “it certainly did!”.' },
          ] },
        ] },
        { title: 'La escala: incluso, hasta, aun, ni siquiera · Even and not even', mascot: '/brand/mascot/studying.webp', coach: '¿Lo más inesperado o lo mínimo? The least expected, or the bare minimum?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PARTÍCULAS DE ESCALA', question: '¿Quieres decir que entra hasta lo menos esperable, o que no se cumple ni lo mínimo?', en: 'Incluso, hasta and aun (no accent) mean “even”: they add the least expected item at the top of an implicit scale. Ni siquiera, or ni + un/una + noun, means “not even”: not even the minimum happened. Like other focus words, they go right before what they highlight. Before the verb, ni siquiera needs no “no”; after the verb, the sentence needs no in front of the verb.', formula: ['incluso / hasta / aun + elemento → lo menos esperable también entra (even)', 'ni siquiera / ni + un(a) + nombre → no se cumple ni lo mínimo (not even)', 'Ni siquiera me saludó = No me saludó ni siquiera (nunca *Ni siquiera no…)'],
            meaning: 'Estas partículas ordenan los hechos en una **escala** implícita. **Incluso**, **hasta** y **aun** (sin tilde) suben al extremo: «si hasta él lloró, lloró todo el mundo». **Ni siquiera** baja al mínimo: «no hizo ni lo más básico». Van **justo delante** de lo que destacan, así que su posición cambia el sentido. Detrás de «hasta» o «incluso» va un sujeto, no una preposición: **hasta yo**, **incluso tú** (no *hasta mí).',
            examples: [
              { es: '[[Incluso|blue]] Mateo lloró. · Mateo [[incluso|blue]] lloró.', en: 'First: even Mateo, of all people, cried. Second: Mateo did several things, and crying was the most surprising one.' },
              { es: '[[Hasta|blue]] yo entendí el final, y eso que no presto atención a nada.', en: 'Even I understood the ending: hasta is not a preposition here, so it takes yo, not mí.' },
              { es: 'El director [[ni siquiera|blue]] saludó al público. · No dijo [[ni una palabra|blue]] en toda la rueda de prensa.', en: 'Not even the minimum: he did not even greet the audience; he did not say a single word.' },
              { es: '[[Aun|blue]] los críticos más duros la aplaudieron.', en: 'Aun without an accent means “even”; aún with an accent means “still” or “yet”.' },
            ],
            note: 'Ya viste incluso y hasta como adverbios de foco en la clase 184; hoy los ves como escala, junto a su pareja negativa, ni siquiera.' },
          { kind: 'table', title: 'Posición de «ni siquiera» · Where ni siquiera goes', head: ['Posición', 'Ejemplo', '¿Lleva «no»?'], rows: [
            ['delante del verbo', '[[Ni siquiera|blue]] me miró.', 'no: «ni siquiera» ya niega'],
            ['detrás del verbo', '[[No|blue]] me miró [[ni siquiera|blue]] una vez.', 'sí: no + verbo'],
            ['ni + un(a) + nombre', '[[No|blue]] queda [[ni una|blue]] entrada. · [[Ni una|blue]] palabra dijo en toda la noche.', 'detrás del verbo, sí; delante, no'],
            ['ni solo (coloquial)', '[[Ni|blue]] me miró. · [[Ni|blue]] idea.', 'no'],
          ], note: 'Para «not even» no se usa *incluso no: «Ni siquiera llamó», no «*Incluso no llamó».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La actriz no contestó a ningún periodista, tampoco al más amable. «___ le contestó al periodista más amable».', options: ['Ni siquiera', 'Ni siquiera no', 'Incluso no'], answer: 0, why: 'Escala negativa: ni siquiera, delante del verbo y sin «no».', en: 'Not even: ni siquiera before the verb, with no extra no.' },
            { prompt: '¿Qué frase dice que Irene, que nunca llora, también lloró?', options: ['Incluso Irene lloró en la escena del faro.', 'Irene ni siquiera lloró en la escena del faro.', 'Irene lloró incluso en la escena del faro.'], answer: 0, why: '«Incluso» va delante de lo que destaca: «Incluso Irene» = Irene, la menos probable, también lloró. Delante de «en la escena del faro» destacaría la escena.', en: 'The particle goes before the highlighted element: incluso Irene means Irene herself, of all people.' },
          ] },
        ] },
        { title: 'Lo… que: el grado como sorpresa · How much: lo + adjective + que', mascot: '/brand/mascot/speaking.webp', coach: 'Lo neutro, el adjetivo concuerda. Neuter lo, agreeing adjective.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LO + ADJETIVO / ADVERBIO + QUE', question: '¿Quieres destacar cuánto: cuán larga, cuán bien, cuánto?', en: 'Lo + adjective or adverb + que expresses a high degree, presented as something surprising: “how tired I am”, “how well she speaks”. It follows verbs such as saber, imaginar, sorprender or ver, or stands alone as an exclamation. Although lo is neuter, the adjective agrees with its noun (lo cansada, lo largas). The verb stays in the indicative because it states a fact. Lo que + verb works the same way with actions: ¡lo que se ríe! means “how much he laughs”.', formula: ['(no sabes / me sorprendió / ya verás) + lo + adjetivo concordado + que + indicativo', 'lo + adverbio + que + indicativo: lo bien que, lo lejos que, lo mucho que', '¡Lo que + verbo! = ¡cuánto…!'],
            meaning: 'Esta estructura no habla de «la cosa buena», sino del **grado**: «No sabes **lo cansada que estoy**» = no sabes cuánto. Aunque **lo** es neutro, el adjetivo **concuerda** con su sustantivo: Irene dice «lo cansad**a**», y de unas escenas, «lo larg**as** que son». El verbo va en **indicativo**: es un hecho. Con verbos, **lo que** + verbo pondera la cantidad: «¡**Lo que se ríe** con ella!» = cuánto se ríe. «**Lo que hay que oír**» es una fórmula de indignación ante algo que alguien dice.',
            examples: [
              { es: 'No sabes [[lo cansada que estoy|teal]] después de tres horas de película.', en: 'Irene, a woman, says cansada: the adjective agrees with her, not with lo.' },
              { es: 'Me sorprendió [[lo bien que habla|teal]] el niño protagonista.', en: 'With an adverb nothing agrees; the verb stays in the indicative.' },
              { es: 'Ya verás [[lo largas que|teal]] son las escenas del faro.', en: 'Plural feminine: the adjective agrees with las escenas.' },
              { es: '¡[[Lo que|teal]] lloré con esa escena! · ¿Que es aburrida? ¡[[Lo que hay que oír|teal]]!', en: 'How much I cried! / Boring, it says? The things you hear! (a fixed phrase of mock indignation)' },
            ] },
          { kind: 'compare', title: 'Lo bueno es que… / Lo buena que es · An aspect or a degree?', columns: [
            { tone: 'neutral', label: 'LO + ADJETIVO (clase 113)', sentence: 'Lo bueno es que dura casi tres horas: da tiempo a todo.', idea: '«Lo bueno» = la parte buena. El adjetivo no concuerda con nada: es un aspecto.', en: 'Lo bueno names an aspect, “the good thing”. The adjective stays masculine singular because it refers to no noun.' },
            { tone: 'teal', label: 'LO + ADJETIVO + QUE', sentence: 'No sabes [[lo buena que es|teal]] la película.', idea: '«Lo buena que» = cuán buena. Concuerda con «la película» y pondera el grado.', en: 'Lo buena que means “how good”: it agrees with la película and stresses the degree.' },
          ] },
          { kind: 'tip', icon: '💡', title: '¡La de veces que…! · Quantity with la de', text: 'Para ponderar una cantidad, el español coloquial usa **la de + sustantivo + que**: «¡**La de veces que** te lo he dicho!», «¡**La de gente que** había!»; es muy frecuente en España. En cualquier registro y en todas partes, **la cantidad de… que**: «¡La cantidad de gente que había!». No lo confundas con **lo de** (clase 113), que retoma un tema: «**lo del** final» = el asunto del final.', en: 'Colloquial Spanish, very frequent in Spain, stresses a quantity with la de + noun + que: “the number of times I’ve told you!”. La cantidad de… que works everywhere. Do not confuse it with lo de, which refers back to a topic.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nuria, de las críticas: «No te imaginas lo ___ que son».', options: ['duras', 'duramente', 'duro'], answer: 0, why: 'El adjetivo concuerda con «las críticas» (femenino plural), aunque «lo» sea neutro.', en: 'The adjective agrees with las críticas, even though lo is neuter.' },
            { prompt: '«Me sorprendió lo poco que ___ la protagonista».', options: ['hable', 'hablar', 'habla'], answer: 2, why: 'Lo + adverbio + que presenta un hecho: indicativo.', en: 'The structure presents a fact, so the verb is indicative.' },
          ] },
        ] },
        { title: 'Afirmar con fuerza y exclamar · Emphatic yes and exclamations', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Afirmas, exclamas o protestas? Affirming, exclaiming or protesting?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SÍ QUE · VAYA SI · EXCLAMATIVAS', question: '¿Quieres reforzar una afirmación o expresar asombro o protesta?', en: 'Sí que before the verb reinforces an affirmation (“that really is cinema”). Vaya si + indicative, often repeating the verb of the question, is a colloquial emphatic yes. Exclamatives add degree: ¡Qué + noun + tan / más + adjective! (both are used; más is especially common in Spain), ¡Cuánto…! for quantity or intensity, and ¡Si (es que)…! or ¡Pero si…! to protest that something is obvious.', formula: ['sí que + verbo · ¡vaya si + verbo en indicativo!', '¡Qué + nombre + tan / más + adjetivo!', '¡Cuánto + verbo! · ¡Cuánta gente! · ¡Si (es que) + indicativo! · ¡Pero si…!'],
            meaning: '**Sí que** delante del verbo refuerza: «Eso **sí que** es cine» (de verdad). **Vaya si** + indicativo responde con un sí rotundo y suele repetir el verbo de la pregunta: «—¿Te emocionó? —¡**Vaya si** me emocionó!»; es coloquial. En las exclamativas, **¡Qué + nombre + tan / más + adjetivo!** («¡Qué final tan raro!», «¡Qué final más raro!»); **¡Cuánto…!** pondera cantidad o intensidad; **¡Si (es que)…!** y **¡Pero si…!** protestan o presentan algo como evidente.',
            examples: [
              { es: '—¿Mereció la pena? —[[¡Vaya si|orange]] la mereció! Eso [[sí que|orange]] es cine.', en: 'An emphatic yes, then sí que to underline that this really is cinema.' },
              { es: '¡[[Qué fotografía tan|orange]] impresionante! · ¡[[Qué final más|orange]] raro!', en: 'Qué + noun + tan / más + adjective; there is no “a”: never *¡Qué una película!' },
              { es: '¡[[Cuánto|orange]] me alegro de que te gustara! · ¡[[Cuánta|orange]] gente había en el estreno!', en: 'Cuánto with a verb; cuánta agreeing with the noun.' },
              { es: '¿Aburrida? [[¡Pero si|orange]] no miraste el reloj ni una vez! · [[¡Si es que|orange]] no se acaba nunca!', en: 'Protest: “But you didn’t look at your watch once!” / “It just never ends!”' },
            ] },
          { kind: 'tip', icon: '🔑', title: 'Recuerda: tan / tanto… que (clase 154) · Intensity with a result', text: 'La intensidad también se mide por su **consecuencia**: «El final es **tan** lento **que** miré el reloj tres veces», «Lloré **tanto que** me dolía la cabeza». Y la **repetición** destaca el prototipo: «No es un documental: es una **película película**» (una película de verdad), «un **café café**», no un descafeinado.', en: 'Intensity can also be measured by its result: so slow that…, cried so much that… Repeating a noun highlights the “real” or typical thing: a proper film, real coffee.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Le costó a la actriz rodar en el mar? —«¡___ le costó! Estuvo enferma una semana».', options: ['Lo que hay que oír', 'Vaya si', 'Ni siquiera'], answer: 1, why: 'Respuesta afirmativa enfática que repite el verbo de la pregunta: vaya si + indicativo.', en: 'An emphatic yes that repeats the verb of the question.' },
            { prompt: '¿Qué exclamación es correcta?', options: ['¡Qué tan bonita escena!', '¡Qué una escena tan bonita!', '¡Qué escena tan bonita!'], answer: 2, why: 'Qué + nombre + tan / más + adjetivo, sin artículo (el inglés «what a» no se traduce con «una»).', en: 'Qué + noun + tan + adjective, with no article: the English “a” is not translated.' },
          ] },
        ] },
        { title: 'Subir el grado y elegir el registro · Turning up the degree, choosing the register', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Con quién hablas y dónde? Who are you talking to, and where?', blocks: [
          { kind: 'table', title: 'Intensificadores de grado · Degree intensifiers', head: ['Recurso', 'Ejemplo', 'Registro y zona'], rows: [
            ['**bien** + adjetivo / adverbio', 'La fotografía está [[bien bonita|violet]]. · Llegó [[bien temprano|violet]].', 'coloquial; muy frecuente en gran parte de América; en España, sobre todo en combinaciones como bien temprano, bien caliente'],
            ['**de lo más** + adjetivo', 'una película [[de lo más aburrida|violet]]', 'general; el adjetivo suele concordar con el sustantivo'],
            ['**la mar de** + adj. / adv.', 'La serie es [[la mar de entretenida|violet]]. · Lo pasamos la mar de bien.', 'coloquial, propio de España'],
            ['**súper** / **super-** · **requete-**', '[[superinteresante|violet]] · Lo pasamos súper. · [[requetebién|violet]]', 'coloquial, general; super- se escribe unido al adjetivo'],
            ['**-ísimo**', 'Es [[buenísima|violet]].', 'general; nunca con «muy» (*muy buenísima)'],
            ['**repetición**', 'una [[película película|violet]] · un café café', 'coloquial: «de verdad, de las auténticas»'],
            ['**sumamente**, **extraordinariamente**, **en extremo**', 'una puesta en escena [[sumamente|violet]] original', 'formal: reseñas, informes, ensayos'],
          ], note: 'Muchos intensificadores coloquiales no encajan en una reseña escrita para un periódico; allí funcionan mejor sumamente, especialmente, de lo más o una consecutiva.' },
          { kind: 'tip', icon: '🌎', title: 'Variedades · Regional intensifiers', text: 'En el **Río de la Plata** (Argentina y Uruguay), el intensificador coloquial por excelencia es **re-**: «**rebueno**», «**relindo**», y también suelto: «está **re** cansado», «la pasamos **re** bien». En **México** y buena parte de Centroamérica es muy natural **bien** + adjetivo: «está **bien** rico». En **España**, «**la mar de**» y «¡qué + nombre + **más** + adjetivo!». Reconócelos todos; usa los de tu variedad con naturalidad y no los mezcles en el mismo texto.', en: 'Each region has favourite intensifiers: re- in Argentina and Uruguay, bien + adjective in Mexico and much of Central America, la mar de and qué… más in Spain. Recognise them all, use your own variety naturally, and avoid mixing them in one text.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Reseña para un diario cultural: «La banda sonora es ___ sugerente».', options: ['súper', 'sumamente', 'la mar de'], answer: 1, why: 'Registro escrito y cuidado: sumamente. Súper y la mar de son coloquiales.', en: 'A written review in a cultural paper needs a formal intensifier.' },
            { prompt: '«Fue una noche de lo más ___».', options: ['muy divertida', 'divertida', 'divertidísimo'], answer: 1, why: '«De lo más» ya intensifica: no se acumula con -ísimo ni con muy, y el adjetivo concuerda con «noche».', en: 'De lo más already intensifies; the adjective agrees with noche and takes no other intensifier.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Frequent mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Énfasis sí, errores no. Emphasis yes, mistakes no.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error; tu alumno dice qué falla antes de ver la corrección.', self: 'Lee cada frase y di qué falla antes de mirar la corrección. (Say what is wrong before you look.)' } },
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Incluso no me saludó.', right: 'Ni siquiera me saludó.', why: 'Calco de «he didn’t even greet me». La escala negativa en español es «ni siquiera».' },
            { wrong: 'Ni siquiera no me saludó.', right: 'Ni siquiera me saludó. / No me saludó ni siquiera.', why: 'Delante del verbo, «ni siquiera» ya niega: no se añade «no».' },
            { wrong: 'Hasta mí lo entendí.', right: 'Hasta yo lo entendí.', why: 'Aquí «hasta» significa «incluso», no es preposición: va con el sujeto «yo». (Con gustar: «Hasta a mí me gustó».)' },
            { wrong: 'No sabes lo cansado que estoy. (lo dice Irene)', right: 'No sabes lo cansada que estoy.', why: 'Aunque «lo» es neutro, el adjetivo concuerda con la persona o cosa de la que se habla.' },
            { wrong: 'Me sorprende lo bien que hable.', right: 'Me sorprende lo bien que habla.', why: 'Lo + adverbio + que presenta un hecho: indicativo.' },
            { wrong: '¡Qué una película tan larga!', right: '¡Qué película tan larga!', why: 'Calco de «what a…». En la exclamativa no hay artículo.' },
            { wrong: 'Es una serie muy buenísima.', right: 'Es una serie buenísima.', why: '-ísimo ya es grado máximo: no se combina con «muy».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien?', options: ['Ni siquiera miró el guion.', 'Incluso no miró el guion.', 'Ni siquiera no miró el guion.'], answer: 0, why: 'Ni siquiera delante del verbo, sin «no».', en: 'Ni siquiera before the verb, with no extra no.' },
            { prompt: '¿Qué frase está bien?', options: ['Hasta a mí me gustó el final.', 'Hasta mí me gustó el final.', 'Hasta yo me gustó el final.'], answer: 0, why: 'Con gustar, la persona va con «a»: «a mí me gustó»; «hasta» se coloca delante: hasta a mí.', en: 'With gustar the person takes a (a mí); hasta simply goes in front of it.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta la última película o serie que vio con tres recursos de hoy: una partícula de escala, un lo… que y una exclamativa.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Grabando «Butaca doble»', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'La grabación · The recording', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Mateo y Nuria; tu alumno es Irene. Después tu alumno toca cada expresión marcada y explica qué intensifica y en qué registro.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica qué intensifica y en qué registro.' } },
          { kind: 'explore', title: 'Episodio 48: «La última marea»', setting: 'Jueves por la tarde en Madrid, mañana en Ciudad de México. Irene y Mateo graban por videollamada; Nuria controla el sonido.', lines: [
            { who: 'Nuria', text: 'Grabamos en tres, dos… Irene, empiezas tú.', en: 'Recording in three, two… Irene, you start.' },
            { who: 'Irene', text: 'Bienvenidos a «Butaca doble». Hoy, «La última marea»: casi tres horas de faro, viento y familia. Y te digo una cosa, Mateo: no sabes [[lo larga que se me hizo|teal]].', en: 'Welcome to Butaca doble. Today: almost three hours of lighthouse, wind and family. And I’ll tell you something, Mateo: you have no idea how long it felt to me.' },
            { who: 'Mateo', text: 'Pues a mí me pasó al revés. La vi [[bien temprano|violet]], en la función de las diez, y [[ni siquiera|blue]] miré el reloj.', en: 'Well, for me it was the other way round. I saw it really early, at the ten o’clock showing, and I didn’t even look at my watch.' },
            { who: 'Irene', text: '¿En serio? Es una película [[de lo más|violet]] lenta. La protagonista se pasa veinte minutos sin decir [[ni una palabra|blue]].', en: 'Seriously? It is an extremely slow film. The lead goes twenty minutes without saying a single word.' },
            { who: 'Mateo', text: 'Pero esos silencios dicen muchísimo. [[Incluso|blue]] la pareja que tenía al lado, que había entrado comiendo palomitas, se quedó callada.', en: 'But those silences say a lot. Even the couple next to me, who had come in eating popcorn, went quiet.' },
            { who: 'Irene', text: 'Eso te lo compro. Y la fotografía es [[la mar de|violet]] bonita, eso sí.', en: 'I’ll give you that. And the cinematography is really lovely, I admit.' },
            { who: 'Mateo', text: '¿Bonita? ¡[[Qué fotografía tan|orange]] impresionante! [[Hasta|blue]] las olas parecen tener personalidad.', en: 'Lovely? What stunning cinematography! Even the waves seem to have a personality.' },
            { who: 'Irene', text: 'Ya, ya… pero el final. [[¡Si es que|orange]] no se acaba nunca! Tres finales, uno detrás de otro.', en: 'Sure, sure… but the ending. It just never ends! Three endings, one after another.' },
            { who: 'Mateo', text: '¿Y la escena de la abuela en el faro? No me digas que no lloraste.', en: 'And the scene with the grandmother in the lighthouse? Don’t tell me you didn’t cry.' },
            { who: 'Irene', text: '¡[[Vaya si|orange]] lloré! Eso [[sí que|orange]] es cine. [[Lo que lloré|teal]] con esa escena…', en: 'Did I cry! That really is cinema. How I cried in that scene…' },
            { who: 'Nuria', text: 'Me encanta [[lo bien que|teal]] discuten. Pero Irene, falta tu nota.', en: 'I love how well you two argue. But Irene, we still need your score.' },
            { who: 'Irene', text: 'Un siete. No es perfecta, pero es [[una película película|violet]], de las que ya no se hacen.', en: 'A seven. It isn’t perfect, but it is a proper film, the kind they don’t make any more.' },
          ], notes: {
            'lo larga que se me hizo': '**Lo + adjetivo + que** ponderativo: «larga» concuerda con «la película»; indicativo porque es un hecho.',
            'bien temprano': '**Bien + adverbio**: intensificador coloquial, muy natural en el español de México (y de gran parte de América).',
            'ni siquiera': '**Escala negativa** delante del verbo, sin «no»: mirar el reloj es lo mínimo que hace quien se aburre, y Mateo ni eso hizo.',
            'de lo más': '**De lo más + adjetivo**: grado muy alto, registro general; el adjetivo concuerda con «película».',
            'ni una palabra': '**No + verbo + ni un(a) + nombre**: ni la cantidad mínima. Aquí el «no» lo aporta «sin».',
            'Incluso': '**Escala hacia arriba**: de la pareja de las palomitas era de quien menos se esperaba silencio.',
            'la mar de': '**La mar de + adjetivo**: «muy», coloquial y propio de España. Lo usa Irene, que es de Madrid.',
            'Qué fotografía tan': '**¡Qué + nombre + tan + adjetivo!** Exclamativa de grado, sin artículo. Irene diría también «qué fotografía más…».',
            'Hasta': '**Hasta = incluso**: las olas, que no son personajes, también «actúan».',
            '¡Si es que': '**¡Si es que + indicativo!** Exclamativa de protesta: presenta la queja como evidente.',
            'Vaya si': '**¡Vaya si + indicativo!** Sí rotundo y coloquial; repite el verbo de la pregunta (lloraste → lloré).',
            'sí que': '**Sí que + verbo**: refuerza la afirmación (de verdad, sin duda).',
            'Lo que lloré': '**Lo que + verbo** ponderativo: «cuánto lloré». No es «lo que» de la clase 113 («la cosa que»).',
            'lo bien que': '**Lo + adverbio + que**: el grado de «bien» como algo que sorprende; el adverbio no concuerda.',
            'una película película': '**Repetición** del nombre: una película de verdad, el prototipo; coloquial.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué prueba aporta Mateo de que la película no aburre?', options: ['Que la sala estaba llena a las diez.', 'Que la pareja de las palomitas se quedó callada.', 'Que la vio dos veces seguidas.'], answer: 1, why: '«Incluso la pareja… se quedó callada»: los menos probables también se callaron.', en: 'What evidence does Mateo give that the film is not boring?' },
            { prompt: '¿Qué le molesta a Irene del final?', options: ['Que hay tres finales seguidos.', 'Que la música está muy alta.', 'Que es demasiado triste.'], answer: 0, why: '«¡Si es que no se acaba nunca! Tres finales, uno detrás de otro».', en: 'What bothers Irene about the ending?' },
            { prompt: '¿Cuál es la valoración final de Irene?', options: ['Le pone un siete: no es perfecta, pero es cine de verdad.', 'No le pone nota.', 'Le pone un diez porque lloró.'], answer: 0, why: '«Un siete. No es perfecta, pero es una película película».', en: 'What is Irene’s final verdict?' },
          ] },
        ] },
        { title: 'Después de grabar · After the recording', mascot: '/brand/mascot/seated.webp', coach: 'Mismo tema, chat entre colegas. Same topic, a chat between colleagues.', blocks: [
          { kind: 'chat-fill', title: 'Mateo y Nuria, por mensajes · Mateo and Nuria, texting', lines: [
            { who: 'Mateo', text: 'Nuria, ¿se notó mucho que Irene y yo no estábamos de acuerdo?' },
            { who: 'Nuria', text: 'Se notó, y es lo mejor del episodio. No sabes lo ___ que me lo pasé editándolo.', options: ['buen', 'bien', 'buena'], answer: 1, why: 'Con un adverbio (pasarlo bien) la estructura es «lo bien que», invariable.' },
            { who: 'Mateo', text: 'Ja. Por cierto, la actriz ___ ha contestado a nuestra invitación.', options: ['incluso no', 'ni siquiera', 'siquiera'], answer: 1, why: 'Escala negativa (not even): «ni siquiera» delante del verbo. «Siquiera» solo, sin negación, no niega.' },
            { who: 'Nuria', text: '¡Pero ___ le escribí dos veces!', options: ['si', 'ni siquiera', 'lo que'], answer: 0, why: '¡Pero si…! exclamativo: protesta y presenta el hecho como evidente: le escribí, y dos veces.' },
            { who: 'Mateo', text: 'Paciencia. ___ el director nos respondió, y eso que no da entrevistas.', options: ['Lo que', 'Hasta', 'Ni siquiera'], answer: 1, why: 'Hasta = incluso: del director, que no da entrevistas, era de quien menos se esperaba una respuesta.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica qué diría Irene en lugar de «bien temprano» y Mateo en lugar de «la mar de bonita» (por ejemplo, «tempranísimo» o «muy temprano»; «bien bonita» o «muy bonita»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Escala, grado, énfasis, registro. Scale, degree, emphasis, register.',
      steps: [
        { title: '¿Qué tipo de énfasis? · What kind of emphasis?', blocks: [
          { kind: 'classify', title: 'Comentarios de los oyentes · Listeners’ comments', categories: [
            { id: 'sube', label: 'Escala hacia arriba: entra hasta lo menos esperable (even)', tone: 'blue' },
            { id: 'baja', label: 'Escala hacia abajo: no se cumple ni lo mínimo (not even)', tone: 'orange' },
            { id: 'grado', label: 'Grado de una cualidad o una acción (how much)', tone: 'teal' },
          ], items: [
            { text: 'Hasta mi padre, que odia el cine lento, la vio entera.', answer: 'sube', why: 'Hasta = incluso: el padre era el menos probable en aguantar.' },
            { text: 'No hubo ni un diálogo que me sobrara.', answer: 'baja', why: 'Ni un + nombre: ni siquiera uno.' },
            { text: 'No te imaginas lo bonita que es la banda sonora.', answer: 'grado', why: 'Lo + adjetivo + que: cuán bonita.' },
            { text: 'Ni siquiera los críticos más duros encontraron un fallo en la fotografía.', answer: 'baja', why: 'Escala negativa: si ni ellos encontraron fallos, nadie los encontró.' },
            { text: 'Aun los más escépticos salieron emocionados.', answer: 'sube', why: 'Aun (sin tilde) = incluso.' },
            { text: '¡Lo que nos reímos con la escena del perro!', answer: 'grado', why: 'Lo que + verbo: cuánto nos reímos.' },
          ] },
        ] },
        { title: 'Elige la forma · Choose the form', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', items: [
            { context: 'El director no fue al estreno y tampoco mandó un mensaje. (The director skipped the premiere and didn’t send a message either.)', prompt: '«___ mandó un mensaje para el equipo».', options: ['Ni siquiera', 'Hasta no', 'Incluso no'], answer: 0, why: 'Lo mínimo esperable no se cumplió: escala negativa con ni siquiera, sin «no».', en: 'Not even the minimum: ni siquiera, with no extra no.' },
            { context: 'Irene, al terminar de grabar. (Irene, at the end of the recording.)', prompt: '«No sabes lo ___ que estoy».', options: ['agotadamente', 'agotado', 'agotada'], answer: 2, why: 'El adjetivo concuerda con Irene (femenino), aunque «lo» sea neutro.', en: 'The adjective agrees with Irene.' },
            { prompt: '«Me sorprendió lo bien que ___ el niño protagonista».', options: ['actuar', 'actúa', 'actúe'], answer: 1, why: 'Lo + adverbio + que presenta un hecho: indicativo.', en: 'A fact, so the indicative.' },
            { prompt: '«Todo el mundo lloró: ___ lloré, y eso que nunca lloro en el cine».', options: ['hasta me', 'hasta mí', 'hasta yo'], answer: 2, why: 'Hasta = incluso, no preposición: va con el sujeto «yo».', en: 'Hasta is not a preposition here, so it takes the subject pronoun yo.' },
            { prompt: '«¡___ final tan inesperado!»', options: ['Cuánto', 'Qué', 'Qué un'], answer: 1, why: 'Qué + nombre + tan + adjetivo, sin artículo; «cuánto» pondera cantidad, no cualidad.', en: 'Qué + noun + tan + adjective, without an article.' },
            { prompt: '—¿Te gustó la escena del faro? —«¡___ me gustó! La vi tres veces».', options: ['Ni siquiera', 'Lo bien que', 'Vaya si'], answer: 2, why: 'Sí enfático que repite el verbo: vaya si + indicativo.', en: 'An emphatic yes that repeats the verb.' },
          ] },
        ] },
        { title: 'Antes de publicar · Before posting', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ni siquiera no me miró cuando le pedí el autógrafo.', ok: false, options: ['Incluso no me miró cuando le pedí el autógrafo.', 'Ni siquiera me miró cuando le pedí el autógrafo.', 'No ni siquiera me miró cuando le pedí el autógrafo.'], answer: 1, why: 'Delante del verbo, «ni siquiera» ya es negativo: sobra «no».' },
            { sentence: 'Es una serie muy buenísima.', ok: false, options: ['Es una serie de lo más buenísima.', 'Es una serie buenísima.', 'Es una serie muy más buena.'], answer: 1, why: '-ísimo ya expresa el grado máximo: no se combina con «muy» ni con «de lo más».' },
            { sentence: 'No te imaginas lo bien que canta la actriz.', ok: true, why: 'Correcta: lo + adverbio (invariable) + que + indicativo.' },
            { sentence: 'Las críticas fueron de lo más duras con el guion.', ok: true, why: 'Correcta: «de lo más» + adjetivo concordado con «las críticas».' },
            { sentence: '¡Qué una película tan larga!', ok: false, options: ['¡Qué tan larga película!', '¡Cuánto una película larga!', '¡Qué película tan larga!'], answer: 2, why: 'Exclamativa de grado: qué + nombre + tan + adjetivo, sin artículo.' },
          ] },
        ] },
        { title: 'El chat de Irene y Nuria · Irene and Nuria’s chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'El día que sale el episodio · The day the episode goes live', lines: [
            { who: 'Nuria', text: 'Irene, el episodio ya está publicado. ¡___ comentarios que han llegado en una hora!', options: ['La de', 'Lo que', 'Lo de'], answer: 0, why: 'La de + nombre + que pondera la cantidad (coloquial). «Lo de» retoma un tema; «lo que» va con verbo.' },
            { who: 'Irene', text: '¿En serio? ¿Y qué dicen?' },
            { who: 'Nuria', text: 'Que discutan así más a menudo. ___ los oyentes de Mateo te dan la razón con el final.', options: ['Aún no', 'Ni siquiera', 'Hasta'], answer: 2, why: 'Hasta = incluso: los oyentes de Mateo eran los menos probables en darle la razón a Irene.' },
            { who: 'Irene', text: '¡Lo sabía! ¿Y Mateo qué dice?' },
            { who: 'Nuria', text: 'Nada. ___ ha contestado en el grupo.', options: ['Siquiera', 'Incluso no', 'Ni siquiera'], answer: 2, why: 'Not even: ni siquiera delante del verbo. «Siquiera» solo, sin negación delante, no niega.' },
            { who: 'Irene', text: 'Típico. Mañana le digo ___ que me gustó su minuto, a ver si se anima.', options: ['qué tanto', 'lo mucho', 'lo cuanto'], answer: 1, why: 'Lo + adverbio + que: «lo mucho que» = cuánto.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'sabes', 'lo', 'nerviosa', 'que', 'estaba', 'antes', 'del', 'estreno.'], accept: ['No sabes lo nerviosa que estaba antes del estreno.'], en: 'You have no idea how nervous I was before the premiere: a woman speaking, so nerviosa.' },
            { tiles: ['La', 'protagonista', 'no', 'dijo', 'ni', 'una', 'palabra', 'en', 'veinte', 'minutos.'], accept: ['La protagonista no dijo ni una palabra en veinte minutos.'], en: 'The lead did not say a single word for twenty minutes: no + verb + ni una.' },
            { tiles: ['¡Vaya', 'si', 'me', 'gustó', 'la', 'escena', 'del', 'faro!'], accept: ['¡Vaya si me gustó la escena del faro!'], en: 'Did I like the lighthouse scene? I certainly did!' },
          ] },
        ] },
        { title: 'Intensifica · Turn it up', blocks: [
          { kind: 'rewrite', title: 'De neutro a enfático · From neutral to emphatic', items: [
            { prompt: 'Estoy muy cansada.', instruction: 'Intensifica con «No sabes lo… que…». (Use No sabes lo… que.)', accept: ['No sabes lo cansada que estoy.', 'No te imaginas lo cansada que estoy.'] },
            { prompt: 'El director no saludó al público.', instruction: 'Di que no hizo ni lo mínimo: «ni siquiera» delante del verbo. (Not even.)', accept: ['El director ni siquiera saludó al público.', 'Ni siquiera saludó el director al público.', 'Ni siquiera saludó al público el director.'] },
            { prompt: 'Los críticos más exigentes la aplaudieron.', instruction: 'Muestra que eran los menos esperables: incluso, hasta o aun. (Even.)', accept: ['Incluso los críticos más exigentes la aplaudieron.', 'Hasta los críticos más exigentes la aplaudieron.', 'Aun los críticos más exigentes la aplaudieron.'] },
            { prompt: 'La película es muy aburrida.', instruction: 'Intensifica con «de lo más». (Use de lo más.)', accept: ['La película es de lo más aburrida.'] },
            { prompt: 'Me sorprende que hable tan bien.', instruction: 'Usa «lo + adverbio + que». (Use lo bien que.)', accept: ['Me sorprende lo bien que habla.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno elige cinco frases neutras de un mensaje suyo reciente y las intensifica con recursos distintos; tú dices en qué registro encajaría cada versión.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El minuto de Mateo', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'Su reseña en solitario · His solo review', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada recurso de énfasis (escala, lo… que, grado, exclamativa) y qué destaca con él. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada recurso de énfasis y qué destaca Mateo con él.' } },
          { kind: 'listen', title: 'Mi minuto de «Butaca doble»', channel: 'PÓDCAST BUTACA DOBLE · SECCIÓN «MI MINUTO» · MATEO IBARRA', src: '/audio/grammar-live/492.mp3',
            before: 'Mateo graba su minuto después de discutir con Irene. ¿Crees que va a defender la película o a darle la razón a Irene? (Mateo records his solo minute after the argument. Will he defend the film or agree with Irene?)',
            gist: { prompt: '¿Qué hace Mateo en su minuto?', options: ['Reconoce que la película es aburrida y pide perdón.', 'Defiende la película aunque admite que tiene defectos.', 'Habla de otra película que se estrena la semana próxima.'], answer: 1, why: 'Responde a Irene, admite que el final se alarga, pero recomienda verla.', en: 'What does Mateo do in his minute?' },
            details: [
              { prompt: '¿Qué destaca de la actriz protagonista?', options: ['Lo joven que es.', 'Lo bien que actúa con la mirada.', 'Lo bien que canta.'], answer: 1, why: '«No se imaginan lo bien que actúa con la mirada: ni siquiera necesita hablar».', en: 'What does he highlight about the lead actress?' },
              { prompt: '¿Qué elemento «parece un personaje más»?', options: ['El faro.', 'La abuela.', 'El viento.'], answer: 2, why: '«Hasta el viento parece un personaje más».', en: 'What seems like one more character?' },
              { prompt: '¿Qué critica de la música?', options: ['Que está demasiado alta.', 'Que subraya lo triste que es todo.', 'Que no hay música en toda la película.'], answer: 1, why: '«La música a veces subraya lo triste que es todo, como si no nos diéramos cuenta solos».', en: 'What does he criticise about the music?' },
              { prompt: '¿Cómo salió del cine?', options: ['Con dolor de cabeza.', 'Sin ganas de hablar con nadie.', 'Con ganas de llamar a su abuela.'], answer: 2, why: '«Salí del cine con ganas de llamar a mi abuela».', en: 'How did he feel when he left the cinema?' },
            ],
            transcript: 'Hola, soy Mateo Ibarra y este es mi minuto de «Butaca doble». Irene ya les contó que «La última marea» se le hizo eterna. Yo no lo veo así. Es cierto que dura casi tres horas y que la protagonista pasa media película sin decir [[ni una palabra|blue]]. Pero no se imaginan [[lo bien que actúa|teal]] con la mirada: [[ni siquiera|blue]] necesita hablar. La fotografía es [[de lo más cuidada|violet]] y el sonido del mar está [[bien logrado|violet]]; [[hasta|blue]] el viento parece un personaje más. ¿Tiene defectos? Claro que los tiene. El final se alarga [[tanto que|violet]] uno empieza a buscar la salida, y la música a veces subraya [[lo triste que es|teal]] todo, como si no nos diéramos cuenta solos. Aun así, salí del cine con ganas de llamar a mi abuela, y eso [[sí que|orange]] no me pasa seguido. [[¡Qué manera tan|orange]] sencilla de contar algo tan grande! Así que véanla en pantalla grande, si pueden, y después me cuentan si la escena del faro no los dejó sin aire. Irene, te espero la próxima semana con revancha.',
            reply: { teacher: 'Tú eres Irene. Tu alumno contesta a Mateo con un audio breve: le da la razón en algo («Hasta yo reconozco que…») y se mantiene en algo («Ni siquiera la fotografía salva…»), con un lo… que y una exclamativa.', self: 'Contesta a Mateo con un audio de 40 segundos: dale la razón en algo («Hasta yo reconozco que…») y mantén tu postura en otra cosa («Ni siquiera…»), con un lo… que y una exclamativa.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar con pulso', coach: 'Énfasis donde importa, no en todas partes. Emphasis where it matters.',
      steps: [
        { title: 'Tu propio episodio · Your own episode', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento. Si tu alumno responde con «muy» en todas las frases, tú le das una alternativa (lo… que, de lo más, ni siquiera) y siguen.', self: 'Lee la situación y responde en voz alta. Usa al menos dos recursos distintos por respuesta, no solo «muy».' } },
          { kind: 'talk', cards: [
            { q: 'Recomienda con entusiasmo una película, serie o libro que te encantó, como si fuera tu minuto en «Butaca doble». · Recommend something you loved, as if it were your podcast minute.', followUps: ['¿Qué te sorprendió más? (What surprised you most?)', '¿A quién le gustó, aunque no se esperaba? (Who liked it unexpectedly?)', '¿Tiene algún defecto? (Any flaw?)'], phrases: ['No te imaginas [[lo bien que|teal]]…', '[[Incluso|blue]] / [[Hasta|blue]] mi…', 'Es [[de lo más|violet]]…', 'Eso [[sí que|orange]] es…'], hint: 'Un lo… que para el grado, un incluso / hasta para lo inesperado.', example: 'Tienes que ver «Los años del puerto». No te imaginas lo bien que está escrita: cada personaje tiene su voz. Hasta mi hermano, que solo ve fútbol, se tragó la temporada en dos días. Es de lo más adictiva. ¿Defectos? El último capítulo es flojo, pero eso sí que se lo perdono.' },
            { q: 'Cuenta una experiencia decepcionante: un restaurante, un hotel, un servicio de atención al cliente. · Tell about a disappointing experience.', followUps: ['¿Qué fue lo mínimo que no hicieron? (What was the bare minimum they didn’t do?)', '¿Cuánto tardaron? (How long did they take?)', '¿Te compensaron? (Did they make up for it?)'], phrases: ['[[Ni siquiera|blue]]…', 'No [[ni una|blue]]… / [[ni un|blue]]…', '[[¡Si es que|orange]]…!', 'Tardaron [[tanto que|violet]]…'], hint: 'Ni siquiera delante del verbo sin «no»; ¡si es que…! para la protesta.', example: 'Pedí una habitación tranquila y me dieron la que daba a la discoteca. Llamé a recepción y ni siquiera se disculparon. No había ni una toalla limpia. ¡Si es que hasta el cartel de la puerta estaba roto! Esperé tanto que al final me fui a otro hotel.' },
            { q: 'Responde con un sí rotundo y añade un detalle: «¿Te costó aprender a conducir?», «¿Has pasado miedo alguna vez en un avión?», «¿Echas de menos algo de tu infancia?». · Answer with an emphatic yes, plus a detail.', followUps: ['¿Por qué? (Why?)', '¿Cuánto? (How much?)', '¿Te pasó algo concreto? (Anything specific?)'], phrases: ['[[¡Vaya si|orange]]…!', '[[¡Lo que|teal]]… !', '[[¡Cuánto|orange]]…!', '[[sí que|orange]]…'], hint: 'Vaya si + el verbo de la pregunta en indicativo; después, el detalle.', example: '¿Que si me costó aprender a conducir? ¡Vaya si me costó! Suspendí tres veces. ¡Lo que sufrí con las cuestas! Ahora, eso sí, conduzco tranquila.' },
            { q: 'Di lo mismo en dos registros: a un amigo por audio y en una reseña para un periódico. Tema: un concierto o una obra de teatro que viste. · Say the same thing to a friend and in a newspaper review.', followUps: ['¿Qué intensificadores cambian? (Which intensifiers change?)', '¿Qué pierdes y qué ganas en la versión formal? (What changes?)'], phrases: ['Al amigo: [[superbonito|violet]], [[la mar de|violet]] / [[bien|violet]]…', 'En la reseña: [[sumamente|violet]], [[de lo más|violet]]…', '[[Incluso|blue]] el público más…'], hint: 'Coloquial: súper, bien, la mar de, ¡qué…!; formal: sumamente, de lo más, incluso.', example: 'A mi amiga: «¡Qué concierto tan bonito! El sonido estaba superbién y hasta la gente de atrás bailaba». En la reseña: «El concierto resultó sumamente emotivo. El sonido, de una limpieza notable, permitió que incluso las últimas filas disfrutaran de cada matiz».', teacher: 'Si tu alumno es de España, puede usar «la mar de»; si es de México, «bien»; si es de Argentina o Uruguay, «re». Lo importante es no mezclar variedades en la misma versión.' },
            { q: '¿Qué intensificadores se usan en tu país o en el español que más oyes? ¿Cuáles te suenan raros? · Which intensifiers do people use where you live or in the Spanish you hear most?', followUps: ['¿Has oído «re lindo», «bien rico» o «la mar de»? (Have you heard these?)', '¿Qué equivalentes tiene tu lengua? (Equivalents in your language?)', '¿Cuál usarías en un correo de trabajo? (Which in a work email?)'], phrases: ['En … se dice mucho [[bien|violet]] + adjetivo…', '[[Ni siquiera|blue]] sabía que existía…', 'Me sorprende [[lo frecuente que|teal]] es…'], hint: 'Habla de variedades sin juzgar: «en…, es frecuente…».', example: 'En la serie argentina que veo dicen todo el tiempo «re bien» y «re lindo»; al principio ni siquiera lo entendía. Me sorprende lo frecuente que es. En mi trabajo, en cambio, escribiría «sumamente útil» o «especialmente interesante».', next: 'En la clase 193 aprenderás a hacer lo contrario: atribuir lo que dices a otros (según, supuestamente, se dice).' },
          ], swap: { teacher: 'Al final cambian los papeles: tú cuentas algo de forma plana («La película fue larga. Me gustó») y tu alumno, como productor, te propone una versión con pulso para cada frase.', self: 'Ahora eres productor: escribe tres frases planas sobre tu semana y conviértelas en voz alta en frases con pulso, cada una con un recurso distinto.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una reseña con pulso', coach: 'Elogio y crítica, con énfasis medido. Praise and criticism, measured emphasis.',
      steps: [
        { title: 'Tu reseña · Your review', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada recurso de énfasis: ¿qué destaca?, ¿encaja en el registro?, ¿hay alguno de más? Después tu alumno la lee como si la grabara para el pódcast.', self: 'Escribe tu reseña y toca «Revisar mi texto». Después revisa cada recurso de énfasis: ¿qué destaca?, ¿encaja en el registro?, ¿sobra alguno?' } },
          { kind: 'write', title: 'Reseña para la web de «Butaca doble» · A review for the podcast website', situation: 'Nuria te pide una reseña para la web del pódcast sobre una película, una serie o un libro que te haya marcado (para bien o para mal). La leen los oyentes: registro cuidado pero cercano. (Nuria asks you for a review for the podcast website of a film, series or book that left a mark on you; listeners will read it, so the register is careful but warm.)', task: [
            'Valora la obra con al menos un «lo + adjetivo / adverbio + que» (lo bien que…, lo larga que…). (One ponderative lo… que.)',
            'Usa una partícula de escala hacia arriba (incluso, hasta, aun) y una hacia abajo (ni siquiera, ni un / ni una). (One “even” and one “not even”.)',
            'Sube el grado con un recurso propio de lo escrito (de lo más, sumamente…) y con una consecutiva «tan / tanto… que». (A written-register intensifier and a tan / tanto… que.)',
            'Señala al menos un defecto sin perder el tono de la reseña. (Mention at least one flaw.)',
            'Evita los intensificadores muy coloquiales (súper, re-, la mar de) y no acumules «muy» con -ísimo. (Avoid very colloquial intensifiers.)',
          ], starters: ['Hay películas que se ven y películas que se viven…', 'No es fácil explicar lo… que…', 'Ni siquiera…', 'Incluso…', '¿Tiene defectos? Sí, y…'], words: ['incluso', 'hasta', 'aun así', 'ni siquiera', 'ni una', 'lo bien que', 'lo + adjetivo + que', 'de lo más', 'sumamente', 'tan… que', 'tanto que'],
            model: 'Hay películas que se ven y películas que se viven, y «La última marea» pertenece sin duda al segundo grupo. Dura casi tres horas y su protagonista pasa los primeros veinte minutos sin pronunciar ni una palabra; aun así, cuesta apartar la vista de la pantalla. No es fácil explicar lo bien que actúa con la mirada: ni siquiera necesita un primer plano para transmitir lo que siente. La fotografía es de lo más cuidada, e incluso el viento parece tener voz propia. ¿Tiene defectos? Sí, y no son pequeños: el final se alarga tanto que el espectador acaba mirando el reloj, y la música insiste demasiado en lo triste que es todo. Pero cuando se encienden las luces, hasta los más escépticos tardan en levantarse de la butaca. Una película sumamente recomendable para quien no tenga prisa.',
            minWords: 140,
            checks: [
              { label: 'Un lo + adjetivo / adverbio + que (lo bien que, lo triste que…)', pattern: '(?<!\\p{L})lo\\s+(?!que(?!\\p{L}))\\p{L}+\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «No es fácil explicar lo bien que actúa».' },
              { label: 'Una partícula hacia arriba (incluso, hasta, aun)', pattern: '(?<!\\p{L})(?:incluso|hasta|aun)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Incluso los más escépticos se emocionan».' },
              { label: 'Una partícula hacia abajo (ni siquiera, ni un / ni una)', pattern: '(?<!\\p{L})ni\\s+(?:siquiera|un|una)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Ni siquiera necesita hablar».' },
              { label: 'Un intensificador de registro escrito (de lo más, sumamente…)', pattern: '(?<!\\p{L})(?:de\\s+lo\\s+más|sumamente|extraordinariamente|especialmente|enormemente|en\\s+extremo)(?!\\p{L})', tip: 'Escribe, por ejemplo: «La fotografía es de lo más cuidada».' },
              { label: 'Una consecutiva tan / tanto… que', pattern: '(?<!\\p{L})(?:tan|tanto|tanta|tantos|tantas)\\s+(?:\\p{L}+\\s+){0,3}que(?!\\p{L})', tip: 'Escribe, por ejemplo: «El final se alarga tanto que…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})muy\\s+\\p{L}+ísim(?:o|a|os|as)(?!\\p{L})', why: '-ísimo ya es grado máximo: no lo combines con «muy».' },
              { pattern: '(?<!\\p{L})incluso\\s+no(?!\\p{L})', why: 'Si quieres decir «not even», en español es «ni siquiera».' },
              { pattern: '(?<!\\p{L})ni\\s+siquiera\\s+no(?!\\p{L})', why: 'Delante del verbo, «ni siquiera» ya niega: sobra «no».' },
              { pattern: '(?<!\\p{L})qué\\s+una?(?!\\p{L})', why: 'En la exclamativa no hay artículo: «¡Qué película tan…!».' },
              { pattern: '(?<!\\p{L})(?:súper|la\\s+mar\\s+de)(?!\\p{L})', why: 'Es coloquial: en una reseña escrita, mejor «sumamente», «de lo más» o «especialmente».' },
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
            { tone: 'blue', label: 'ESCALA', formula: 'incluso / hasta / aun + elemento · ni siquiera / ni un(a) (sin «no» delante del verbo)', example: 'Hasta yo lloré. · Ni siquiera me saludó. · No dijo ni una palabra.', caption: 'lo menos esperable entra / ni lo mínimo', en: 'Incluso, hasta and aun add the least expected item; ni siquiera and ni un(a) deny even the minimum. They go right before what they highlight.' },
            { tone: 'teal', label: 'LO… QUE PONDERATIVO', formula: 'lo + adjetivo concordado / adverbio + que + indicativo · ¡lo que + verbo!', example: 'No sabes lo cansada que estoy. · ¡Lo que lloré!', caption: 'el grado como sorpresa', en: 'Lo + agreeing adjective or adverb + que + indicative presents a degree as surprising; lo que + verb does the same with actions.' },
            { tone: 'orange', label: 'AFIRMAR Y EXCLAMAR', formula: 'sí que · ¡vaya si…! · ¡qué + nombre + tan / más + adj.! · ¡cuánto…! · ¡si es que…!', example: '¡Vaya si me gustó! Eso sí que es cine.', caption: 'sí rotundo, asombro, protesta', en: 'Sí que and vaya si give an emphatic yes; exclamatives express surprise or protest, with no article after qué.' },
            { tone: 'violet', label: 'GRADO Y REGISTRO', formula: 'bien · la mar de · súper · re- (coloquial, con zona) · de lo más · sumamente (escrito) · tan… que', example: 'una película de lo más lenta · sumamente recomendable', caption: 'cada recurso, su registro y su zona', en: 'Choose intensifiers by register and region: colloquial bien, la mar de, súper or re-; general or written de lo más and sumamente; and the result clause tan… que.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de intensificar, dos preguntas: **¿qué quiero destacar?** (lo inesperado → incluso / hasta; lo que ni siquiera pasó → ni siquiera; el grado → lo… que, de lo más) y **¿dónde lo digo?** (audio a un amigo: vaya si, la mar de, súper; reseña escrita: sumamente, de lo más). Y una regla de oro: si todo es enfático, nada destaca.', en: 'Two questions before turning up the volume: what do I want to highlight (the unexpected, the bare minimum, or the degree)? And where am I saying it (a voice message or a written review)? Golden rule: if everything is emphatic, nothing stands out.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«No vino casi nadie a la presentación del libro; ___ los amigos del autor».', options: ['ni siquiera', 'incluso', 'hasta'], answer: 0, why: 'Escala negativa: no vinieron ni los más probables.', en: 'Hardly anyone came to the book launch, not even the author’s friends.' },
            { prompt: '«Te vas a sorprender de lo ___ que son sus fotos».', options: ['bonito', 'bonitamente', 'bonitas'], answer: 2, why: 'El adjetivo concuerda con «sus fotos».', en: 'You’ll be surprised how beautiful her photos are.' },
            { prompt: '—¿Lo sabía tu jefa? —«¡___ lo sabía! Ella misma me lo contó».', options: ['Lo que', 'Vaya si', 'Ni siquiera'], answer: 1, why: 'Sí rotundo que repite el verbo: vaya si + indicativo.', en: 'Did your boss know? She certainly did!' },
            { prompt: 'Reseña para un diario: «La puesta en escena resulta ___ original».', options: ['súper', 'sumamente', 'la mar de'], answer: 1, why: 'Registro escrito y formal: sumamente.', en: 'A newspaper review needs a formal intensifier.' },
            { prompt: '«¡___ he esperado este momento!»', options: ['Lo cual', 'Cuánto', 'Qué tan'], answer: 1, why: '¡Cuánto + verbo! pondera la intensidad de la acción.', en: 'How long I have waited for this moment!' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Bogotá, Colombia. **Daniela Ruiz** prepara el brindis para la boda de su hermano Felipe. Su primer borrador es demasiado plano; ayúdala a darle pulso.', en: 'Bogotá, Colombia. Daniela is preparing a toast for her brother Felipe’s wedding. Her first draft is too flat; help her bring it to life.' },
          { kind: 'rewrite', title: 'El brindis de Daniela · Daniela’s toast', items: [
            { prompt: 'Felipe es muy paciente.', instruction: 'Habla a los invitados (ustedes) con «No saben lo… que…». (Address the guests.)', accept: ['No saben lo paciente que es Felipe.', 'No se imaginan lo paciente que es Felipe.'] },
            { prompt: 'Felipe no se enojó cuando le rompí la guitarra.', instruction: 'Usa «ni siquiera» delante del verbo. (Not even.)', accept: ['Felipe ni siquiera se enojó cuando le rompí la guitarra.', 'Ni siquiera se enojó Felipe cuando le rompí la guitarra.'] },
            { prompt: 'Mi abuela vino desde Cali.', instruction: 'Muestra que era la menos esperable: incluso, hasta o aun. (Even.)', accept: ['Incluso mi abuela vino desde Cali.', 'Hasta mi abuela vino desde Cali.', 'Aun mi abuela vino desde Cali.'] },
          ] },
        ] },
        { title: 'Ampliación: intensidad suspendida y «ni que» · Extension: unfinished intensity', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: lo que no hace falta terminar. Optional: what needs no ending.', blocks: [
          { kind: 'lead', text: 'En la conversación, la intensidad a veces se **deja en suspenso**: «¡Hacía un frío…!», «¡Tengo un sueño…!»; la entonación hace el trabajo de «tan… que». También puede completarse con una consecuencia: «Hacía un frío **que** no se podía estar en la calle». Para rechazar una exageración ajena, **¡Ni que + imperfecto de subjuntivo!**: «¡**Ni que fuera** la mejor película de la historia!» (= ni que fuera así, no lo es). Y **con lo + adjetivo / adverbio + que** presenta un grado como causa o como contraste: «**Con lo bien que** actúa, ¿cómo no tiene un premio?».', en: 'In conversation intensity can be left unfinished, with intonation doing the work of tan… que, or completed with a bare que + result. ¡Ni que + imperfect subjunctive! rejects someone else’s exaggeration (“as if it were…!”). Con lo + adjective or adverb + que presents a degree as a reason or a contrast (“given how well she acts…”).' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: 'Mateo habla de la película como si fuera una obra maestra. Irene: «¡___ fuera la mejor película de la historia!»', options: ['Ni siquiera', 'Incluso si', 'Ni que'], answer: 2, why: '¡Ni que + imperfecto de subjuntivo! rechaza la exageración: no es para tanto.', en: 'Irene rejects Mateo’s exaggeration: “As if it were the best film ever!”' },
            { prompt: '«En el rodaje hacía un frío ___ no se podía estar en la playa».', options: ['que', 'lo que', 'tan'], answer: 0, why: 'Un + nombre + que + consecuencia: «hacía un frío que…» (= tanto frío que).', en: 'It was so cold on set that nobody could stay on the beach.' },
            { prompt: '«___ lo bien que actúa, ¿cómo es posible que no tenga ni un premio?»', options: ['Sin', 'De', 'Con'], answer: 2, why: 'Con lo + adverbio + que: el grado se presenta como razón que hace extraño lo que sigue.', en: 'Given how well she acts, how can she not have a single award?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno reacciona a tres exageraciones tuyas («Este es el mejor café del mundo») con «¡Ni que…!» y cuenta algo intenso dejando la frase en suspenso.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 193 · Polifonía y atribución: según, supuestamente, se dice', text: 'Hoy has aprendido a **subir el tono** de lo que tú afirmas. El paso natural es decir **de quién es** una información y cuánto te comprometes con ella: «**según** la crítica…», «**supuestamente**…», «**se dice que**…». Así controlas no solo la fuerza de tu voz, sino también la de las voces ajenas.', en: 'Today you learned to turn up the volume on your own statements. The natural next step is saying whose information it is and how far you commit to it, with según, supuestamente or se dice que: controlling other people’s voices as well as your own.', href: '/gramatica/polifonia-y-atribucion-segun-supuestamente-se', label: 'Ir a la clase 193' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué Mateo dice “ni siquiera miré el reloj” y no “incluso no miré el reloj”, y por qué Irene dice “lo larga que se me hizo” y no “lo largo”?». Respuesta esperada: la escala negativa es ni siquiera; el adjetivo concuerda con la película aunque «lo» sea neutro.' },
        ] },
      ],
    },
  ],
};
