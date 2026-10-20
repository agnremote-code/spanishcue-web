import type { LiveLesson } from '../types';

/**
 * Lesson 410 · B1 · Acostumbrarse a, tratar de, pensar en (course unit G110).
 * Régimen verbal: verbs that always take the same preposition. Builds on G027
 * (basic prepositions), G033 (conmigo, contigo), G023 (interrogatives), G052
 * (soler / acostumbrar a + infinitive as a habit: here acostumbrarse a = get
 * used to), G088–G096 (present subjunctive after que). Scene: Valeria Ríos, an
 * architect from Guadalajara (Mexico), moved to Valparaíso (Chile) six months
 * ago to work in a studio that restores old houses on the hills. She talks to
 * her brother Emilio by video call and works with Catalina Soto; in the voice
 * message (Mexican voice, tú) she gives advice to her cousin Mariana, who is
 * moving to Lima.
 * Content, grouped by preposition, only the most frequent verbs:
 * a (acostumbrarse a, atreverse a, aprender a, ayudar a, negarse a);
 * de (tratar de, acordarse de, olvidarse de, quejarse de, enamorarse de, darse
 * cuenta de); en (pensar en, confiar en, fijarse en, tardar en, insistir en,
 * quedar en); con (soñar con, contar con, casarse con). Pensar en (think about)
 * vs ¿qué piensas de…? (opinion) vs pensar + infinitive (intend); acostumbrarse
 * a vs soler. Preposition + que (me di cuenta de que); dequeísmo and queísmo
 * with the RAE-ASALE norm and the «eso» / question test; recordar que vs
 * acordarse de que. The preposition stays in front in questions (¿En qué
 * piensas?, ¿Con quién…?); relatives with a preposition are receptive (G112).
 * Ampliación: depender de, consistir en, dedicarse a, arrepentirse de,
 * alegrarse de que + subjunctive. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 410,
  level: 'B1',
  title: 'Acostumbrarse a, tratar de, pensar en',
  subtitle: 'Hablar de cambios, intentos, recuerdos y planes con verbos que siempre llevan la misma preposición: a, de, en o con.',
  legend: [
    { tone: 'blue', label: 'A · acostumbrarse a, atreverse a, ayudar a…' },
    { tone: 'teal', label: 'DE · tratar de, acordarse de, darse cuenta de…' },
    { tone: 'orange', label: 'EN · pensar en, confiar en, tardar en…' },
    { tone: 'violet', label: 'CON · contar con, soñar con, casarse con' },
  ],
  optionNotes: {
    'sueño de': '«Soñar» lleva **con**: sueño con vivir junto al mar. (In English “dream of / about”, but in Spanish “con”.)',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Verbos con su preposición', coach: 'El verbo y su preposición van juntos. Learn them as a pair.',
      steps: [
        { title: 'Una nueva vida en Valparaíso · A new life in Valparaíso', blocks: [
          { kind: 'lead', text: 'Valeria Ríos es arquitecta. Es de Guadalajara (México) y hace seis meses se mudó a Valparaíso (Chile) para trabajar en un estudio que restaura casas antiguas en los cerros. Cuando habla de su nueva vida dice: «**Me acostumbré a** vivir lejos», «**Trato de** llamar a mi mamá cada semana», «**Pienso** mucho **en** mi familia». Hoy aprendes verbos que siempre van con la misma preposición.', en: 'Valeria Ríos is an architect from Guadalajara, Mexico. Six months ago she moved to Valparaíso, Chile, to work for a studio that restores old houses on the hills. When she talks about her new life she says: “I got used to living far away”, “I try to call my mum every week”, “I think about my family a lot”. Today you learn verbs that always go with the same preposition.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase de Valeria y tu alumno dice cómo es en su lengua. ¿Lleva la misma preposición, otra o ninguna?', self: 'Lee las cuatro frases en voz alta y compáralas con tu lengua: ¿la preposición es la misma, es otra o no hay? (Same preposition, a different one, or none?)' } },
          { kind: 'compare', title: 'Cuatro verbos, cuatro preposiciones · Four verbs, four prepositions', columns: [
            { tone: 'blue', label: 'A', sentence: 'Ya [[me acostumbré al|blue]] viento.', idea: 'Acostumbrarse **a**: a + el = al.', en: 'I’ve got used to the wind now.' },
            { tone: 'teal', label: 'DE', sentence: '[[Trato de|teal]] llamar a mi mamá.', idea: 'Tratar **de** + infinitivo = intentar.', en: 'I try to call my mum.' },
            { tone: 'orange', label: 'EN', sentence: '[[Pienso en|orange]] mi familia.', idea: 'Pensar **en**: no «pensar sobre» ni «pensar de».', en: 'I think about my family.' },
            { tone: 'violet', label: 'CON', sentence: 'Mi prima [[se casó con|violet]] un chileno.', idea: 'Casarse **con**: en inglés no hay preposición.', en: 'My cousin married a Chilean man.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Verbo + preposición = un bloque · Verb + preposition = one unit', text: 'Estas preposiciones no tienen un significado propio que puedas deducir: las pide el verbo. Por eso las aprendes juntas: **acostumbrarse a**, **tratar de**, **pensar en**, **contar con**. La preposición se queda delante de lo que viene después: un nombre, un pronombre, un infinitivo o una frase con **que**.', en: 'These prepositions don’t carry a meaning you can work out: the verb requires them. So learn them together as one unit. The preposition stays in front of whatever follows: a noun, a pronoun, an infinitive or a clause with “que”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Pienso mucho ___ mi familia.»', options: ['en', 'de', 'a'], answer: 0, why: 'Pensar en alguien o en algo: think about.', en: '“I think about my family a lot.”' },
            { prompt: 'En «Me acostumbré a vivir lejos», la «a»…', options: ['se puede quitar sin problema.', 'indica un lugar, como en «voy a Chile».', 'es parte del verbo: siempre «acostumbrarse a».'], answer: 2, why: 'La pide el verbo acostumbrarse; no es un destino.', en: 'In “I got used to living far away”, the “a”…' },
            { prompt: '¿Cómo se dice «She married a Chilean man»?', options: ['Se casó con un chileno.', 'Se casó un chileno.', 'Se casó a un chileno.'], answer: 0, why: 'Casarse con alguien. «Se casó un chileno» significa que el chileno se casó.', en: 'How do you say “She married a Chilean man”?' },
          ] },
        ] },
        { title: 'Con A y con DE · Verbs with A and DE', mascot: '/brand/mascot/studying.webp', coach: 'Primero a, después de. First “a”, then “de”.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'VERBOS CON A', question: '¿Te adaptas, te atreves, aprendes, ayudas o te niegas?', en: 'Adapting, daring, learning, helping or refusing: these verbs take “a”.', formula: ['acostumbrarse · atreverse · aprender · ayudar · negarse + a', '+ infinitivo · + nombre (a + el = al)'],
            meaning: '**Acostumbrarse a**: algo nuevo pasa a ser normal para ti (get used to). **Atreverse a**: tener valor para hacer algo (dare). **Aprender a** + infinitivo (learn to). **Ayudar a** alguien **a** + infinitivo (help someone to). **Negarse a**: decir que no vas a hacer algo (refuse).',
            examples: [
              { es: 'Valeria [[se acostumbró a|blue]] subir escaleras todos los días.', en: 'Valeria got used to climbing stairs every day.' },
              { es: 'Todavía no [[me atrevo a|blue]] manejar por los cerros.', en: 'I still don’t dare to drive on the hills.' },
              { es: 'Este año [[aprendí a|blue]] cocinar pescado.', en: 'This year I learned to cook fish.' },
              { es: 'Catalina me [[ayudó a|blue]] buscar departamento.', en: 'Catalina helped me look for a flat.' },
              { es: 'El dueño [[se negó a|blue]] bajar el alquiler.', en: 'The landlord refused to lower the rent.' },
            ], note: 'Con ayudar hay dos complementos: la persona y la acción. «Catalina **me** ayudó **a** buscar». La «a» va antes de la acción.' },
          { kind: 'concept', tone: 'teal', label: 'VERBOS CON DE', question: '¿Intentas, recuerdas, olvidas, te quejas, te enamoras o te das cuenta?', en: 'Trying, remembering, forgetting, complaining, falling in love or realising: these take “de”.', formula: ['tratar · acordarse · olvidarse · quejarse · enamorarse · darse cuenta + de', '+ infinitivo · + nombre (de + el = del)'],
            meaning: '**Tratar de** + infinitivo = intentar (try to). **Acordarse de** = recordar. **Olvidarse de** = olvidar. **Quejarse de**: decir que algo no te gusta (complain about). **Enamorarse de** (fall in love with). **Darse cuenta de**: entender algo de repente (realise, notice).',
            examples: [
              { es: '[[Trato de|teal]] hablar con los vecinos cada día.', en: 'I try to talk to the neighbours every day.' },
              { es: '¿[[Te acuerdas del|teal]] primer día en la oficina?', en: 'Do you remember the first day at the office?' },
              { es: 'Ayer [[me olvidé de|teal]] llamar a mi mamá.', en: 'Yesterday I forgot to call my mum.' },
              { es: 'Mi hermano [[se queja del|teal]] calor de Guadalajara.', en: 'My brother complains about the heat in Guadalajara.' },
              { es: 'Valeria [[se enamoró de|teal]] la ciudad el primer día.', en: 'Valeria fell in love with the city on the first day.' },
            ], note: 'Ojo con los pares: **recordar** algo / **acordarse de** algo; **olvidar** algo / **olvidarse de** algo. Con «se», preposición; sin «se», no: «Recuerdo el día» y «Me acuerdo del día».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Al principio no ___ hablar en las reuniones.', options: ['me atrevía de', 'me atrevía', 'me atrevía a'], answer: 2, why: 'Atreverse a + infinitivo.', en: 'At first I didn’t dare to speak in meetings.' },
            { prompt: '¿Te ___ la dirección del estudio?', options: ['acuerdas de', 'recuerdas de', 'acuerdas'], answer: 0, why: 'Acordarse lleva «de»: ¿te acuerdas de la dirección? Sin «se»: ¿recuerdas la dirección?', en: 'Do you remember the studio’s address?' },
            { prompt: 'Mi vecina me ___ buscar casa.', options: ['ayudó a', 'ayudó de', 'ayudó'], answer: 0, why: 'Ayudar a alguien a + infinitivo: me ayudó a buscar.', en: 'My neighbour helped me look for a home.' },
          ] },
        ] },
        { title: 'Con EN y con CON · Verbs with EN and CON', mascot: '/brand/mascot/speaking.webp', coach: 'Pensar en ti, contar contigo. Think of you, count on you.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'VERBOS CON EN', question: '¿Piensas, confías, te fijas, tardas, insistes o quedas en algo?', en: 'Thinking about, trusting, noticing, taking time, insisting or agreeing: these take “en”.', formula: ['pensar · confiar · fijarse · tardar · insistir · quedar + en', '+ nombre · + infinitivo'],
            meaning: '**Pensar en** (think about). **Confiar en** (trust). **Fijarse en**: mirar con atención, notar (notice). **Tardar** + tiempo + **en** + infinitivo (take time to do). **Insistir en** (insist on). **Quedar en** + infinitivo: decidir algo juntos, llegar a un acuerdo (agree to).',
            examples: [
              { es: 'Por la noche [[pienso en|orange]] mis amigos de Guadalajara.', en: 'At night I think about my friends in Guadalajara.' },
              { es: '[[Confío en|orange]] Catalina: nunca me falla.', en: 'I trust Catalina: she never lets me down.' },
              { es: '[[Fíjate en|orange]] los colores de las casas.', en: 'Look at the colours of the houses.' },
              { es: '[[Tardé|orange]] tres meses [[en|orange]] acostumbrarme.', en: 'It took me three months to get used to it.' },
              { es: 'Emilio y yo [[quedamos en|orange]] hablar el domingo.', en: 'Emilio and I agreed to talk on Sunday.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'VERBOS CON «CON»', question: '¿Sueñas, cuentas o te casas con alguien o algo?', en: 'Dreaming of, counting on or marrying: these take “con”.', formula: ['soñar · contar · casarse + con', 'con + mí = conmigo · con + ti = contigo'],
            meaning: '**Soñar con** (dream of / about). **Contar con** alguien: saber que te va a ayudar (count on, rely on). **Casarse con** alguien (marry someone). En inglés «marry» no lleva preposición; en español, sí.',
            examples: [
              { es: 'Valeria [[sueña con|violet]] restaurar una casa entera.', en: 'Valeria dreams of restoring a whole house.' },
              { es: 'Si necesitas algo, [[cuenta conmigo|violet]].', en: 'If you need anything, count on me.' },
              { es: 'Mi prima [[se casó con|violet]] un chico de Lima.', en: 'My cousin married a guy from Lima.' },
            ], note: 'Con los pronombres, recuerda la clase 033: pienso **en ti**, confío **en ella**, cuento **contigo**, sueña **conmigo**.' },
          { kind: 'table', title: 'Los verbos de hoy · Today’s verbs', head: ['Preposición', 'Verbos', 'English'], rows: [
            ['[[a|blue]]', 'acostumbrarse, atreverse, aprender, ayudar, negarse', 'get used to, dare, learn, help, refuse'],
            ['[[de|teal]]', 'tratar, acordarse, olvidarse, quejarse, enamorarse, darse cuenta', 'try, remember, forget, complain, fall in love, realise'],
            ['[[en|orange]]', 'pensar, confiar, fijarse, tardar, insistir, quedar', 'think about, trust, notice, take time, insist, agree'],
            ['[[con|violet]]', 'soñar, contar, casarse', 'dream of, count on, marry'],
          ], note: 'No es una lista cerrada: hay muchos más verbos así. Estos son los más frecuentes. Cuando aprendas un verbo nuevo, apréndelo con su preposición.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El bus ___ veinte minutos ___ llegar.', options: ['tardó / a', 'tardó / en', 'tardó / de'], answer: 1, why: 'Tardar + tiempo + en + infinitivo.', en: 'The bus took twenty minutes to arrive.' },
            { prompt: 'Anoche ___ el mar.', options: ['soñé con', 'soñé de', 'sueño de'], answer: 0, why: 'Soñar con: soñé con el mar.', en: 'Last night I dreamt about the sea.' },
            { prompt: 'Tranquila, puedes ___ para la mudanza.', options: ['contar con mí', 'contar en mí', 'contar conmigo'], answer: 2, why: 'Contar con + mí = conmigo.', en: 'Don’t worry, you can count on me for the move.' },
          ] },
        ] },
        { title: 'Pensar en, pensar de, pensar + infinitivo · Three uses of pensar', mascot: '/autoestudio/mascot/noting.webp', coach: 'Mismo verbo, tres ideas. One verb, three ideas.', blocks: [
          { kind: 'compare', title: 'Tres usos de pensar · Three uses of pensar', columns: [
            { tone: 'orange', label: 'PENSAR EN · tener en la mente', sentence: 'Siempre [[pienso en|orange]] mi abuela.', idea: 'Alguien o algo está en tu cabeza.', en: 'I always think about my grandmother.' },
            { tone: 'neutral', label: '¿QUÉ PIENSAS DE…? · la opinión', sentence: '¿Qué **piensas de** Valparaíso? — **Pienso que** es una ciudad preciosa.', idea: 'Pides o das una opinión. La respuesta lleva «que», sin «de».', en: 'What do you think of Valparaíso? — I think it’s beautiful.' },
            { tone: 'neutral', label: 'PENSAR + INFINITIVO · la intención', sentence: 'En julio **pienso ir** a Guadalajara.', idea: 'Un plan, sin preposición: = tengo la intención de.', en: 'In July I’m planning to go to Guadalajara.' },
          ] },
          { kind: 'compare', title: 'Acostumbrarse a no es soler · Getting used to is not a habit', columns: [
            { tone: 'neutral', label: 'SOLER · la costumbre (clase 052)', sentence: '**Suelo** cenar a las nueve.', idea: 'Una rutina: lo hago normalmente.', en: 'I usually have dinner at nine.' },
            { tone: 'blue', label: 'ACOSTUMBRARSE A · el cambio', sentence: '[[Me acostumbré a|blue]] cenar tarde.', idea: 'Al principio era raro; ahora es normal para mí.', en: 'I got used to eating late.' },
            { tone: 'blue', label: 'ESTAR ACOSTUMBRADO A · el resultado', sentence: 'Ya **estoy acostumbrada al** frío.', idea: 'El cambio ya pasó: ahora es mi estado.', en: 'I’m used to the cold now.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Qué piensas de mi departamento nuevo? —___ es muy luminoso.', options: ['Pienso que', 'Pienso en que', 'Pienso de que'], answer: 0, why: 'Para dar tu opinión: pensar que, sin preposición.', en: '“What do you think of my new flat?” “I think it’s very bright.”' },
            { prompt: 'El verano que viene ___ visitar el sur de Chile.', options: ['pienso', 'pienso de', 'pienso en'], answer: 0, why: 'Una intención: pensar + infinitivo, sin preposición.', en: 'Next summer I’m planning to visit the south of Chile.' },
            { prompt: 'Al principio el ruido del puerto me molestaba, pero ya ___.', options: ['me acostumbré', 'pienso en él', 'suelo'], answer: 0, why: 'Un cambio: lo raro pasó a ser normal. Soler habla de una rutina.', en: 'At first the noise from the port bothered me, but I’ve got used to it now.' },
          ] },
        ] },
        { title: 'Preposición + que, y en las preguntas · Preposition + que, and in questions', mascot: '/brand/mascot/seated.webp', coach: 'La preposición no desaparece. The preposition doesn’t disappear.', blocks: [
          { kind: 'table', title: 'Con una frase después · With a clause after it', head: ['Verbo', 'Ejemplo'], rows: [
            ['darse cuenta [[de|teal]] que', 'Me di cuenta **de que** aquí todos saludan al chofer del bus.'],
            ['acordarse [[de|teal]] que', '¿Te acuerdas **de que** mañana es feriado?'],
            ['quejarse [[de|teal]] que', 'Mi mamá se queja **de que** no la llamo.'],
            ['fijarse [[en|orange]] que', '¿Te fijaste **en que** las casas son de colores?'],
            ['insistir [[en|orange]] que', 'Mi jefa insiste **en que** revisemos todo dos veces.'],
            ['quedar [[en|orange]] que', 'Quedamos **en que** Emilio compraría los boletos.'],
          ], note: 'Con insistir en que, si otra persona tiene que hacer algo, va el subjuntivo (clases 095–096): «insiste en que **revisemos**».' },
          { kind: 'tip', icon: '💡', title: 'Dequeísmo y queísmo · Two errors with «de que»', text: 'La norma (RAE-ASALE) pide la preposición que exige el verbo, también delante de **que**. Quitarla cuando el verbo la pide («me di cuenta que») se llama **queísmo**: se oye mucho en la conversación de muchas zonas, pero en la lengua cuidada se evita. Añadir «de» cuando el verbo no la pide («pienso de que», «me dijo de que») se llama **dequeísmo** y también se evita. Truco: cambia la frase con que por **eso**. «Me di cuenta **de eso**» → de que. «Pienso **eso**» → que.', en: 'The standard norm keeps the preposition the verb requires, also before “que”. Dropping it (“queísmo”) is common in casual speech in many areas but avoided in careful language. Adding “de” where the verb doesn’t need it (“dequeísmo”) is also avoided. Trick: replace the “que” clause with “eso”: if you need “de eso”, write “de que”.' },
          { kind: 'compare', title: 'En las preguntas, la preposición va delante · In questions, the preposition comes first', columns: [
            { tone: 'orange', label: 'ESPAÑOL', sentence: '¿[[En qué|orange]] piensas? ¿[[Con quién|violet]] se casó?', idea: 'La preposición va al principio, antes de qué o quién.', en: 'What are you thinking about? Who did she marry?' },
            { tone: 'neutral', label: 'NO SE DICE', sentence: '«¿Qué piensas en?» «¿Quién se casó con?»', idea: 'En español la preposición nunca se queda sola al final, como en inglés.', en: 'Spanish never leaves the preposition at the end, as English does.' },
          ] },
          { kind: 'lead', text: 'Lo mismo pasa con los relativos, que verás en la clase 112: «Catalina es una amiga **con la que** puedo contar» (a friend I can count on). Por ahora solo tienes que reconocerlo: la preposición va delante, no al final.', en: 'The same happens with relative clauses, which you’ll study in class 112: “Catalina is a friend I can count on.” For now you only need to recognise it: the preposition goes first, never at the end.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'De repente me di cuenta ___ había perdido las llaves.', options: ['en que', 'que', 'de que'], answer: 2, why: 'Darse cuenta de algo → me di cuenta de eso → de que.', en: 'Suddenly I realised that I had lost my keys.' },
            { prompt: 'Creo ___ Valeria va a quedarse en Chile.', options: ['en que', 'que', 'de que'], answer: 1, why: 'Creer algo → creo eso → que. «Creo de que» es dequeísmo.', en: 'I think Valeria is going to stay in Chile.' },
            { prompt: '¿___ sueñas?', options: ['Con qué', 'Qué', 'De qué'], answer: 0, why: 'Soñar con algo → la pregunta empieza con la preposición: ¿Con qué sueñas?', en: 'What do you dream about?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Ojo con la lengua materna. Watch out for your first language.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué preposición falta, sobra o cambia. Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿falta, sobra o cambia la preposición? Toca para ver la corrección. (Missing, extra or wrong preposition?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Mi prima se casó un chileno.', right: 'Mi prima se casó con un chileno.', why: 'Casarse **con** alguien. Sin «con», el chileno es el sujeto: él se casó. (English “marry” has no preposition.)' },
            { wrong: 'Todavía no me acostumbro el frío.', right: 'Todavía no me acostumbro al frío.', why: 'Acostumbrarse **a**, y a + el = **al**.' },
            { wrong: 'Pienso mucho de ti.', right: 'Pienso mucho en ti.', why: 'Tener a alguien en la mente: pensar **en**. «Pensar de» es para la opinión: ¿qué piensas de…?' },
            { wrong: 'Me di cuenta que no tenía mi pasaporte.', right: 'Me di cuenta de que no tenía mi pasaporte.', why: 'Queísmo: darse cuenta **de** algo → de que.' },
            { wrong: 'Pienso de que es una buena idea.', right: 'Pienso que es una buena idea.', why: 'Dequeísmo: «pienso eso», sin «de» → pienso que.' },
            { wrong: '¿Qué estás pensando en?', right: '¿En qué estás pensando?', why: 'La preposición va al principio de la pregunta, nunca al final.' },
            { wrong: 'Sueño de vivir junto al mar.', right: 'Sueño con vivir junto al mar.', why: 'Soñar **con**, aunque en inglés sea «dream of».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Olvidé de que hoy cerraba el banco.', 'Me olvidé de que hoy cerraba el banco.', 'Me olvidé que hoy cerraba el banco.'], answer: 1, why: 'Olvidarse de algo → me olvidé de que. Sin «se»: olvidé que, sin «de».', en: 'Which sentence is correct? (I forgot the bank closed today.)' },
            { prompt: '¿Qué frase es correcta?', options: ['Confío en mi equipo.', 'Confío con mi equipo.', 'Confío de mi equipo.'], answer: 0, why: 'Confiar en alguien: trust.', en: 'Which sentence is correct? (I trust my team.)' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una cosa a la que se acostumbró fácilmente y otra a la que no se acostumbra. Tú preguntas: «¿Cuánto tardaste en acostumbrarte?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una videollamada con Guadalajara', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Valeria y su hermano · Valeria and her brother', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Emilio y tu alumno es Valeria. Después tu alumno toca cada expresión marcada y dice qué preposición lleva el verbo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué preposición lleva el verbo. (Read aloud, then tap each marked expression.)' } },
          { kind: 'explore', title: '¿Ya te acostumbraste?', setting: 'Domingo por la tarde. Valeria habla por videollamada con su hermano Emilio, que vive en Guadalajara. Desde su ventana se ve el puerto. (Sunday afternoon. Valeria is on a video call with her brother Emilio in Guadalajara.)', lines: [
            { who: 'Emilio', text: '¡Hola, Vale! Ya llevas seis meses ahí. ¿Ya [[te acostumbraste a|blue]] Valparaíso?', en: 'Hi, Vale! You’ve been there six months now. Have you got used to Valparaíso yet?' },
            { who: 'Valeria', text: 'Casi. Subo cerros todo el día y me encanta, pero [[no me acostumbro al|blue]] viento de la tarde. Y todavía [[no me atrevo a|blue]] manejar por esas calles.', en: 'Almost. I climb hills all day and I love it, but I can’t get used to the afternoon wind. And I still don’t dare to drive on those streets.' },
            { who: 'Emilio', text: 'Oye, mamá [[se queja de que|teal]] no la llamas.', en: 'Hey, Mum complains that you don’t call her.' },
            { who: 'Valeria', text: '¡Ya lo sé! [[Trato de|teal]] llamarla los miércoles, pero con la diferencia de horario siempre [[me olvido de|teal]] la hora.', en: 'I know! I try to call her on Wednesdays, but with the time difference I always forget what time it is there.' },
            { who: 'Emilio', text: '¿Y en el trabajo? ¿Ya tienes amigos?', en: 'And at work? Have you made friends yet?' },
            { who: 'Valeria', text: 'Sí, [[cuento con|violet]] Catalina para todo. Ella [[me ayudó a|blue]] encontrar el departamento. Y el otro día [[me di cuenta de que|teal]] ya digo «al tiro», como los chilenos.', en: 'Yes, I can count on Catalina for everything. She helped me find the flat. And the other day I realised I already say “al tiro”, like Chileans do.' },
            { who: 'Emilio', text: '¡Ja! Te veo muy seria de repente. ¿[[En qué piensas|orange]]?', en: 'Ha! You suddenly look very serious. What are you thinking about?' },
            { who: 'Valeria', text: 'En ustedes. [[Pienso en|orange]] la familia cada vez que veo los barcos que salen.', en: 'About you all. I think about the family every time I see the boats leaving.' },
            { who: 'Emilio', text: 'Ay, Vale… Bueno, ¿y **qué piensas de** venir en julio?', en: 'Oh, Vale… Well, what do you think about coming in July?' },
            { who: 'Valeria', text: '**Pienso** ir, pero no le digas nada a mamá. [[Sueño con|violet]] darle una sorpresa.', en: 'I’m planning to go, but don’t tell Mum anything. I dream of surprising her.' },
            { who: 'Emilio', text: 'Perfecto. Entonces [[quedamos en|orange]] hablar el domingo para ver las fechas.', en: 'Perfect. So we’ve agreed to talk on Sunday to look at dates.' },
            { who: 'Valeria', text: 'Sí. Y no te preocupes: [[tardo|orange]] poco [[en|orange]] encontrar boletos baratos.', en: 'Yes. And don’t worry: it doesn’t take me long to find cheap tickets.' },
          ], notes: {
            'te acostumbraste a': 'Acostumbrarse a + un lugar: adaptarse a algo nuevo. En México se usa mucho el indefinido con «ya»: ¿ya te acostumbraste? (Have you got used to it yet?)',
            'no me acostumbro al': 'Acostumbrarse a + el viento → al viento. En presente con «no»: algo que todavía no es normal para ella.',
            'no me atrevo a': 'Atreverse a + infinitivo: no tiene valor para manejar. «Manejar» = conducir (en América).',
            'se queja de que': 'Quejarse de + que: la preposición se queda delante de la frase. Aquí va indicativo: es un hecho (no la llamas).',
            'Trato de': 'Tratar de + infinitivo = intentar. Lo hace, pero no siempre lo consigue.',
            'me olvido de': 'Olvidarse de + nombre. Sin «me»: «olvido la hora», sin «de».',
            'cuento con': 'Contar con alguien: sabe que Catalina la va a ayudar. (She can rely on her.)',
            'me ayudó a': 'Ayudar a alguien a + infinitivo: «me» es la persona; «a encontrar», la acción.',
            'me di cuenta de que': 'Darse cuenta de + que: aquí la norma pide «de que». «Al tiro» es una expresión chilena: inmediatamente (right away).',
            'En qué piensas': 'En la pregunta, la preposición va delante de «qué»: ¿En qué piensas? (What are you thinking about?)',
            'Pienso en': 'Pensar en alguien: tenerlo en la mente. Valeria responde con la misma preposición: «En ustedes».',
            'Sueño con': 'Soñar con + infinitivo: un deseo fuerte. Fíjate: la frase anterior, «Pienso ir», es pensar + infinitivo (una intención), sin preposición.',
            'quedamos en': 'Quedar en + infinitivo: decidir algo entre dos personas. (So we’ve agreed to talk…)',
            'tardo': 'Tardar + tiempo (poco, una hora, tres días)…',
            'en': '…+ en + infinitivo: el tiempo que necesitas para hacer algo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿A qué no se acostumbra todavía Valeria?', options: ['A subir cerros.', 'Al viento de la tarde.', 'A la comida chilena.'], answer: 1, why: '«No me acostumbro al viento de la tarde». Los cerros le encantan.', en: 'What hasn’t Valeria got used to yet?' },
            { prompt: '¿Por qué no llama a su mamá como quiere?', options: ['Porque su mamá no contesta.', 'Porque se olvida de la hora por la diferencia de horario.', 'Porque no tiene tiempo.'], answer: 1, why: '«Con la diferencia de horario siempre me olvido de la hora».', en: 'Why doesn’t she call her mum as often as she wants?' },
            { prompt: '¿Qué quiere hacer Valeria en julio?', options: ['Aprender a manejar.', 'Cambiar de departamento.', 'Ir a Guadalajara y sorprender a su mamá.'], answer: 2, why: '«Pienso ir… Sueño con darle una sorpresa».', en: 'What does Valeria want to do in July?' },
          ] },
        ] },
        { title: '¿Qué preposición? · Which preposition?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases de Valeria · More of Valeria’s sentences', categories: [
            { id: 'a', label: 'A', tone: 'blue' },
            { id: 'de', label: 'DE', tone: 'teal' },
            { id: 'en', label: 'EN', tone: 'orange' },
            { id: 'con', label: 'CON', tone: 'violet' },
          ], items: [
            { text: 'Aprendí … reconocer los cerros por sus colores.', answer: 'a', why: 'Aprender a + infinitivo.' },
            { text: 'Me enamoré … las escaleras pintadas.', answer: 'de', why: 'Enamorarse de algo o de alguien.' },
            { text: 'Mi jefe confía … mi trabajo.', answer: 'en', why: 'Confiar en.' },
            { text: 'Catalina se casó … un músico de Santiago.', answer: 'con', why: 'Casarse con alguien.' },
            { text: '¿Te acuerdas … mi primera semana aquí?', answer: 'de', why: 'Acordarse de.' },
            { text: 'Me fijé … las ventanas de las casas antiguas.', answer: 'en', why: 'Fijarse en: mirar con atención.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Con quién cuenta Valeria? ¿En qué piensa cuando ve los barcos?». Tu alumno responde con la preposición al principio: «Con Catalina», «En su familia».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero el verbo, después su preposición. Verb first, then its preposition.',
      steps: [
        { title: 'En el estudio · At the studio', blocks: [
          { kind: 'choice', items: [
            { context: 'Lunes en el estudio. (Monday at the studio.)', prompt: 'El cliente ___ pagar la reparación del techo.', options: ['se negó de', 'se negó en', 'se negó a'], answer: 2, why: 'Negarse a + infinitivo: no quiere pagar.', en: 'The client refused to pay for the roof repair.' },
            { context: 'Una casa del siglo XIX. (A 19th-century house.)', prompt: 'La restauración de una casa así ___ meses.', options: ['tarda de', 'tarda en', 'tarda'], answer: 2, why: 'Tardar + tiempo, sin preposición; «en» va delante de un infinitivo: tarda meses en terminarse.', en: 'Restoring a house like that takes months.' },
            { context: 'Catalina habla de su pareja. (Catalina talks about her partner.)', prompt: 'Lo conocí en un concierto y ___ él esa misma noche.', options: ['me enamoré de', 'me enamoré en', 'me enamoré con'], answer: 0, why: 'Enamorarse de alguien.', en: 'I met him at a concert and fell in love with him that same night.' },
            { context: 'Un plano con muchos detalles. (A plan with lots of details.)', prompt: '___ esta ventana: es original, de 1890.', options: ['Fíjate a', 'Fíjate en', 'Fíjate de'], answer: 1, why: 'Fijarse en: mirar algo con atención.', en: 'Look at this window: it’s original, from 1890.' },
            { context: 'El equipo prepara una presentación. (The team prepares a presentation.)', prompt: 'Para la presentación, ¿puedo ___?', options: ['contar de ti', 'contar contigo', 'contar en ti'], answer: 1, why: 'Contar con + ti = contigo.', en: 'For the presentation, can I count on you?' },
          ] },
        ] },
        { title: '¿Que, de que o en que? · Que, de que or en que?', mascot: '/brand/mascot/seated.webp', coach: 'Prueba con «eso». Try the “eso” test.', blocks: [
          { kind: 'classify', title: '¿Qué va delante de la frase? · What goes before the clause?', categories: [
            { id: 'que', label: 'QUE · el verbo no pide preposición', tone: 'neutral' },
            { id: 'de', label: 'DE QUE', tone: 'teal' },
            { id: 'en', label: 'EN QUE', tone: 'orange' },
          ], items: [
            { text: 'Me di cuenta … el bus no pasaba los domingos.', answer: 'de', why: 'Me di cuenta de eso → de que.' },
            { text: 'Creo … Catalina tiene razón.', answer: 'que', why: 'Creo eso → que. «Creo de que» sería dequeísmo.' },
            { text: 'Quedamos … Emilio compraría los boletos.', answer: 'en', why: 'Quedamos en eso → en que.' },
            { text: 'Me acuerdo … aquel día llovía mucho.', answer: 'de', why: 'Me acuerdo de eso → de que.' },
            { text: 'Recuerdo … aquel día llovía mucho.', answer: 'que', why: 'Recordar va sin preposición: recuerdo eso → que.' },
            { text: 'Mi jefa insiste … revisemos los planos dos veces.', answer: 'en', why: 'Insiste en eso → en que (+ subjuntivo, porque pide algo a otros).' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Catalina y Valeria toman un café · A coffee break', lines: [
            { who: 'Catalina', text: 'Vale, ¿ya ___ la comida de aquí?', options: ['te acostumbraste a', 'te acostumbraste de', 'acostumbraste a'], answer: 0, why: 'Acostumbrarse a: con el pronombre «te» y con «a».' },
            { who: 'Valeria', text: 'Sí, pero todavía no ___ comer erizos.', options: ['me atrevo de', 'me atrevo a', 'me atrevo'], answer: 1, why: 'Atreverse a + infinitivo.' },
            { who: 'Catalina', text: '¡Tienes que probarlos! ¿Y ___ tu familia? ¿La extrañas?', options: ['piensas mucho en', 'qué piensas en', 'piensas de'], answer: 0, why: 'Tener a alguien en la mente: pensar en.' },
            { who: 'Valeria', text: 'Mucho. Ayer ___ era el cumpleaños de mi tía y no la llamé.', options: ['me di cuenta tarde de que', 'me di cuenta tarde en que', 'me di cuenta tarde que'], answer: 0, why: 'Darse cuenta de algo → de que. Sin «de» es queísmo.' },
            { who: 'Catalina', text: 'Bueno, llámala hoy. Y si quieres, el sábado te enseño a hacer empanadas. ¿___?', options: ['Quedamos en eso', 'Quedamos de eso', 'Quedamos con eso'], answer: 0, why: 'Quedar en algo: ponerse de acuerdo.' },
            { who: 'Valeria', text: '¡Sí! Gracias, siempre puedo contar contigo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tardé dos semanas a encontrar un buen médico.', ok: false, options: ['Tardé dos semanas encontrar un buen médico.', 'Tardé dos semanas en encontrar un buen médico.', 'Tardé dos semanas de encontrar un buen médico.'], answer: 1, why: 'Tardar + tiempo + **en** + infinitivo.' },
            { sentence: 'Siempre trato de hablar despacio con los clientes.', ok: true, why: 'Correcta: tratar de + infinitivo = intentar.' },
            { sentence: 'Me olvidé de que hoy era feriado.', ok: true, why: 'Correcta: olvidarse de algo → me olvidé de que.' },
            { sentence: 'Mi hermano sueña de abrir un restaurante.', ok: false, options: ['Mi hermano sueña en abrir un restaurante.', 'Mi hermano sueña abrir con un restaurante.', 'Mi hermano sueña con abrir un restaurante.'], answer: 2, why: 'Soñar **con**, también delante de un infinitivo.' },
            { sentence: '¿Quién confías en?', ok: false, options: ['¿Quién confías?', '¿De quién confías?', '¿En quién confías?'], answer: 2, why: 'Confiar en alguien → la preposición va al principio de la pregunta: ¿En quién confías?' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Me', 'acostumbré', 'a', 'vivir', 'lejos.'], accept: ['Me acostumbré a vivir lejos.'], en: 'I got used to living far away.' },
            { tiles: ['¿Con', 'quién', 'se', 'casó', 'tu', 'prima?'], accept: ['¿Con quién se casó tu prima?'], en: 'Who did your cousin marry?' },
            { tiles: ['Catalina', 'me', 'ayudó', 'a', 'pintar', 'la', 'cocina.'], accept: ['Catalina me ayudó a pintar la cocina.'], en: 'Catalina helped me paint the kitchen.' },
            { tiles: ['Nunca', 'me', 'acuerdo', 'de', 'su', 'cumpleaños.'], accept: ['Nunca me acuerdo de su cumpleaños.'], en: 'I never remember his birthday.' },
          ] },
        ] },
        { title: 'Transforma las frases · Transform the sentences', mascot: '/brand/mascot/kneeling.webp', coach: 'Mismo sentido, otro verbo. Same meaning, another verb.', blocks: [
          { kind: 'rewrite', title: 'Escribe la misma idea · Write the same idea', items: [
            { prompt: 'Intento dormir ocho horas.', instruction: 'Usa «tratar de». Empieza con «Trato».', accept: ['Trato de dormir ocho horas'] },
            { prompt: 'No recuerdo su nombre.', instruction: 'Usa «acordarse de». Empieza con «No me».', accept: ['No me acuerdo de su nombre'] },
            { prompt: 'Valeria piensa en algo. (Pregunta qué es.)', instruction: 'Haz la pregunta con «qué». Empieza con «¿En».', accept: ['¿En qué piensa Valeria?', '¿En qué piensa?', '¿En qué está pensando Valeria?'] },
            { prompt: 'Emilio y yo decidimos juntos vernos en julio.', instruction: 'Usa «quedar en». Empieza con «Emilio y yo quedamos».', accept: ['Emilio y yo quedamos en vernos en julio'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Consejos para Mariana', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un audio de Valeria · A voice message from Valeria', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un verbo con su preposición y dice cuál es. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada verbo con su preposición. (Listen once for the gist, once for details.)' } },
          { kind: 'listen', title: 'Antes de mudarte', channel: 'AUDIO · DE VALERIA PARA SU PRIMA MARIANA', src: '/audio/grammar-live/410.mp3',
            before: 'Mariana, la prima de Valeria, se va a vivir a Lima. Valeria le manda un audio con consejos. ¿Qué consejos crees que le da? (What advice do you think she gives?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Valeria le da consejos a Mariana para su primera etapa en Lima.', 'Valeria le pide a Mariana que no se vaya.', 'Valeria se queja de su vida en Valparaíso.'], answer: 0, why: 'Le da cuatro consejos y le ofrece su ayuda.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué no hay que tardar en buscar departamento?', options: ['Porque los buenos se van rápido.', 'Porque el trabajo empieza pronto.', 'Porque son muy caros.'], answer: 0, why: '«No tardes en buscar departamento: los buenos se van rápido».', en: 'Why shouldn’t Mariana take long to look for a flat?' },
              { prompt: '¿Quién ayudó a Valeria a entender las palabras nuevas?', options: ['Sus compañeros de trabajo.', 'Su hermano.', 'Sus vecinos.'], answer: 2, why: '«Aquí mis vecinos me ayudaron a entender todo, hasta las palabras raras».', en: 'Who helped Valeria understand the new words?' },
              { prompt: '¿De qué se dio cuenta Valeria después de un mes?', options: ['De que mucha gente toma «once» en lugar de cenar.', 'De que los bancos cierran temprano.', 'De que el bus es gratis.'], answer: 0, why: '«Tardé un mes en darme cuenta de que aquí mucha gente toma once en lugar de cenar».', en: 'What did Valeria realise after a month?' },
              { prompt: '¿Qué fue lo más difícil para Valeria?', options: ['Estar lejos de su familia.', 'El idioma del trabajo.', 'El frío.'], answer: 0, why: '«Lo más difícil para mí fue estar lejos de la familia».', en: 'What was the hardest thing for Valeria?' },
            ],
            transcript: 'Hola, Mariana, soy Valeria. Oí tu mensaje: ¡qué emoción lo de Lima! Te mando unos consejos, porque yo ya llevo seis meses aquí. Primero, [[no tardes en|orange]] buscar departamento: los buenos se van rápido. Segundo, [[trata de|teal]] hablar con tus vecinos desde el principio. Aquí mis vecinos [[me ayudaron a|blue]] entender todo, hasta las palabras raras. Tercero, [[fíjate en|orange]] los horarios. Yo [[tardé|orange]] un mes [[en|orange]] [[darme cuenta de que|teal]] aquí mucha gente toma «once» en lugar de cenar: un té con pan a las siete. Y no te preocupes si al principio no [[te atreves a|blue]] salir sola de noche: poco a poco [[te vas a acostumbrar a|blue]] la ciudad. Lo más difícil para mí fue estar lejos de la familia. Todavía [[pienso en|orange]] mi mamá cada día. Pero ya sabes: [[puedes contar conmigo|violet]] para lo que necesites. Ah, y [[no te olvides de|teal]] mandarme fotos. ¡Un abrazo enorme!',
            reply: { teacher: 'Tú eres Valeria. Tu alumno es Mariana y responde al audio con tres frases: algo a lo que cree que se va a acostumbrar rápido, algo que va a tratar de hacer y algo con lo que sueña en Lima.', self: 'Responde al audio en voz alta como Mariana: algo a lo que te vas a acostumbrar rápido, algo que vas a tratar de hacer y algo con lo que sueñas. (Answer as Mariana.)' } },
          { kind: 'tip', icon: '🌎', title: 'La «once» en Chile · “Once” in Chile', text: 'En Chile, **tomar once** es una comida de la tarde: té o café, pan, palta (aguacate), queso… Mucha gente la toma en lugar de una cena grande. Valeria «tardó un mes **en darse cuenta de que**» era así: un buen ejemplo de tres verbos con preposición en una sola frase.', en: 'In Chile, “tomar once” is an early-evening meal: tea or coffee, bread, avocado, cheese… Many people have it instead of a big dinner. Valeria “took a month to realise” this: a good example of verbs with prepositions chained in one sentence.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cambios, intentos y sueños', coach: 'Habla de ti. Talk about yourself.',
      steps: [
        { title: 'Tu experiencia · Your experience', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales o inventadas. Si falta o sobra una preposición, tú repites la frase correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con una experiencia real o inventada y, si quieres, escribe tu respuesta. (Answer aloud, real or invented.)' } },
          { kind: 'talk', cards: [
            { q: '¿Alguna vez cambiaste de casa, de ciudad o de trabajo? ¿A qué te acostumbraste rápido y a qué no? · Have you ever moved home, city or job? What did you get used to quickly, and what not?', followUps: ['¿Cuánto tardaste en acostumbrarte? (How long did it take you?)', '¿Quién te ayudó? (Who helped you?)'], phrases: ['[[Me acostumbré|blue]] rápido [[a|blue]]…', 'No [[me acostumbro a|blue]]…', '[[Tardé|orange]] … meses [[en|orange]]…'], hint: 'Acostumbrarse a + nombre o infinitivo; a + el = al.', example: 'Hace dos años cambié de trabajo. Me acostumbré rápido al horario, pero tardé meses en acostumbrarme a hablar en público. Una compañera me ayudó a preparar mis primeras presentaciones.', next: 'Ahora, tus intentos.' },
            { q: '¿Qué tratas de hacer cada semana para mejorar tu español? ¿Y qué te cuesta? · What do you try to do every week to improve your Spanish?', followUps: ['¿Te atreves a hablar con desconocidos? (Do you dare to talk to strangers?)', '¿Qué aprendiste a hacer este año? (What did you learn to do this year?)'], phrases: ['[[Trato de|teal]]…', 'Todavía no [[me atrevo a|blue]]…', 'Este año [[aprendí a|blue]]…'], hint: 'Tratar de + infinitivo = intentar. Atreverse a, aprender a.', example: 'Trato de escuchar un pódcast en español cada mañana. Todavía no me atrevo a llamar por teléfono en español, pero este año aprendí a escribir correos formales.', next: 'Hablemos de las personas importantes.' },
            { q: '¿Con quién cuentas cuando tienes un problema? ¿En quién confías más? · Who do you count on when you have a problem? Who do you trust most?', followUps: ['¿Por qué confías en esa persona? (Why?)', '¿Alguien cuenta contigo? (Does anyone count on you?)'], phrases: ['[[Cuento con|violet]] mi…', '[[Confío en|orange]]…', 'Mi hermana [[cuenta conmigo|violet]] para…'], hint: 'Contar con, confiar en. Con pronombres: conmigo, contigo, en ti, en él.', example: 'Cuento con mi mejor amigo para todo. Confío en él porque nunca me juzga. Y él cuenta conmigo cuando tiene que mudarse: ¡ya lo ayudé tres veces!', next: 'Ahora, tus recuerdos.' },
            { q: '¿Te acuerdas de tu primer día en un trabajo o en una escuela nueva? ¿De qué te diste cuenta ese día? · Do you remember your first day at a new job or school? What did you realise that day?', followUps: ['¿Te olvidaste de algo importante? (Did you forget something important?)', '¿Te fijaste en algo curioso? (Did you notice something odd?)'], phrases: ['[[Me acuerdo de que|teal]]…', '[[Me di cuenta de que|teal]]…', '[[Me olvidé de|teal]]…'], hint: 'Delante de una frase: de que. Prueba con «eso»: me di cuenta de eso.', example: 'Me acuerdo de que llegué media hora antes. Me di cuenta de que todos se tuteaban, hasta con el director. Y me olvidé de llevar comida, así que una compañera compartió su almuerzo conmigo.', next: 'Hablemos de opiniones y planes.', teacher: 'Si tu alumno dice «me di cuenta que», tú preguntas: «¿Te diste cuenta de qué?». La pregunta muestra la preposición.' },
            { q: '¿Qué piensas de vivir en otro país? ¿Piensas hacerlo algún día? · What do you think of living abroad? Are you planning to do it some day?', followUps: ['¿En qué piensas cuando imaginas esa vida? (What do you think about?)', '¿De qué te quejarías? (What would you complain about?)'], phrases: ['**Pienso que**…', '**Pienso** + infinitivo…', 'Cuando lo imagino, [[pienso en|orange]]…'], hint: 'Opinión: pienso que (sin «de»). Plan: pienso + infinitivo. Mente: pienso en.', example: 'Pienso que es una experiencia muy buena, pero difícil. Pienso vivir un año en Uruguay cuando me jubile. Cuando lo imagino, pienso en la playa y en el mate con los vecinos.', next: 'Para terminar, tus sueños.' },
            { q: '¿Con qué sueñas para los próximos cinco años? ¿Con quién quieres compartirlo? · What do you dream of for the next five years?', followUps: ['¿Qué te falta para conseguirlo? (What do you still need?)', '¿Con quién cuentas para eso? (Who are you counting on?)'], phrases: ['[[Sueño con|violet]]…', 'Quiero [[aprender a|blue]]…', '[[Cuento con|violet]]…'], hint: 'Soñar con + nombre o infinitivo; nunca «soñar de».', example: 'Sueño con abrir una pequeña librería con café. Quiero aprender a llevar las cuentas de un negocio, y cuento con mi pareja, que sabe mucho de diseño.', teacher: 'Tú también respondes con un sueño propio. Después, tu alumno te hace una pregunta con la preposición delante: «¿Con qué sueñas tú?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿A qué te acostumbraste…?», «¿En quién confías?», «¿Con qué sueñas?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta, con la preposición al principio («¿En quién confías?», «¿Con qué sueñas?»), y respóndelas con otra historia. (Ask the questions yourself.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo después del cambio', coach: 'Cada verbo con su preposición. Each verb with its preposition.',
      steps: [
        { title: 'Seis meses después · Six months later', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada verbo: ¿lleva preposición? ¿Es la correcta? ¿Hay «de que» donde hace falta?', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada verbo: ¿lleva su preposición? ¿Usaste «de que» solo donde hace falta? (Check every verb.)' } },
          { kind: 'write', title: 'Cómo me va · How things are going', situation: 'Hace unos meses empezaste algo nuevo: una ciudad, un trabajo, una casa o unos estudios (o eres Valeria en Valparaíso). Escribe un correo a un amigo o una amiga que no ves hace tiempo y cuéntale cómo te va. (Write an email to a friend about a recent change in your life.)', task: [
            'Cuenta a qué te acostumbraste y a qué todavía no. (What you have and haven’t got used to.)',
            'Explica algo que tratas de hacer y algo de lo que te diste cuenta. (Something you try to do, something you realised.)',
            'Habla de una persona con la que cuentas o en la que confías. (Someone you count on or trust.)',
            'Termina con un plan o un sueño y una pregunta para tu amigo. (A plan or dream, and a question.)',
          ], starters: ['¡Hola, Sofía! Perdona por tardar tanto en escribirte.', 'Ya me acostumbré a…', 'Todavía no me acostumbro a…', 'Trato de…', 'El otro día me di cuenta de que…', 'Por suerte, cuento con…', 'Sueño con…', '¿Y tú? ¿Qué piensas de…?', 'Un abrazo,'],
            words: ['acostumbrarse a', 'atreverse a', 'ayudar a', 'tratar de', 'acordarse de', 'darse cuenta de que', 'pensar en', 'confiar en', 'tardar en', 'quedar en', 'contar con', 'soñar con'],
            model: '¡Hola, Sofía! Perdona por [[tardar|orange]] tanto [[en|orange]] escribirte. Ya llevo seis meses en Valparaíso y estoy muy contenta. [[Me acostumbré a|blue]] subir escaleras todo el día y ahora estoy en forma. Todavía [[no me acostumbro al|blue]] viento de la tarde, pero ya no me quejo tanto. [[Trato de|teal]] salir a caminar por los cerros cada domingo, y el otro día [[me di cuenta de que|teal]] ya conozco a todos los vecinos de mi calle. En el trabajo [[cuento con|violet]] Catalina, una compañera que [[me ayudó a|blue]] encontrar departamento. [[Confío en|orange]] ella como en una hermana. [[Pienso en|orange]] ustedes muy seguido, sobre todo los domingos. En julio pienso ir a Guadalajara y [[sueño con|violet]] hacer una comida con todas. ¿Y tú? ¿Qué piensas de venir a verme en primavera? Un abrazo, Valeria.',
            minWords: 90,
            checks: [
              { label: 'Acostumbrarse a (getting used to something)', pattern: '(?<!\\p{L})acostumbr\\p{L}*\\s+(?:a|al)(?!\\p{L})', tip: 'Cuenta un cambio: «Ya me acostumbré al horario», «No me acostumbro a cenar tarde».' },
              { label: 'Un verbo con de (tratar de, acordarse de, darse cuenta de…)', pattern: '(?<!\\p{L})(?:trat\\p{L}*|acuerd\\p{L}*|acord\\p{L}*|olvid\\p{L}*|quej\\p{L}*|enamor\\p{L}*|cuenta)\\s+de(?:l)?(?!\\p{L})', tip: 'Añade un intento o un descubrimiento: «Trato de…», «Me di cuenta de que…».' },
              { label: 'Contar con o confiar en (someone you rely on)', pattern: '(?<!\\p{L})(?:(?:cuent\\p{L}*|cont\\p{L}*)\\s+con(?:migo|tigo)?|conf[ií]\\p{L}*\\s+en)(?!\\p{L})', tip: 'Habla de una persona: «Cuento con mi hermana», «Confío en mi jefe».' },
              { label: 'Pensar en o soñar con (your mind, your dreams)', pattern: '(?<!\\p{L})(?:(?:pens|piens)\\p{L}*\\s+en|(?:soñ|sueñ)\\p{L}*\\s+con)(?!\\p{L})', tip: 'Termina con lo que tienes en la mente o un sueño: «Pienso mucho en ti», «Sueño con…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:pienso|piensas|piensa|pensamos|piensan|creo|crees|cree|creemos|creen)\\s+de\\s+que(?!\\p{L})', why: 'Dequeísmo: para dar una opinión, **pienso que** / **creo que**, sin «de».' },
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:di|diste|dio|dimos|dieron|doy|das|da|damos|dan)\\s+cuenta\\s+que(?!\\p{L})', why: 'Queísmo: **darse cuenta de que**. Prueba: me di cuenta de eso.' },
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+acuerd\\p{L}*\\s+que(?!\\p{L})', why: 'En la lengua cuidada: **me acuerdo de que**. O sin «me»: **recuerdo que**.' },
              { pattern: '(?<!\\p{L})(?:sueño|sueñas|sueña|soñamos|sueñan|soñé)\\s+de(?!\\p{L})', why: 'Soñar lleva **con**: sueño con…, no «sueño de».' },
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
            { tone: 'blue', label: 'A', formula: 'acostumbrarse · atreverse · aprender · ayudar · negarse + a', example: 'Me acostumbré al viento. Catalina me ayudó a buscar casa.', caption: 'adaptarse, atreverse, aprender, ayudar, decir que no', en: 'getting used to, daring, learning, helping, refusing' },
            { tone: 'teal', label: 'DE', formula: 'tratar · acordarse · olvidarse · quejarse · enamorarse · darse cuenta + de', example: 'Trato de llamarla. Me di cuenta de que era tarde.', caption: 'intentar, recordar, olvidar, quejarse, enamorarse, descubrir', en: 'trying, remembering, forgetting, complaining, falling in love, realising' },
            { tone: 'orange', label: 'EN', formula: 'pensar · confiar · fijarse · tardar · insistir · quedar + en', example: '¿En qué piensas? Tardé un mes en acostumbrarme.', caption: 'la mente, la confianza, la atención, el tiempo, un acuerdo', en: 'the mind, trust, attention, time taken, an agreement' },
            { tone: 'violet', label: 'CON', formula: 'soñar · contar · casarse + con', example: 'Sueño con viajar. Cuenta conmigo.', caption: 'deseos, apoyo y pareja; con + mí = conmigo', en: 'wishes, support and partners; con + mí = conmigo' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Aprende cada verbo con su preposición. La preposición se queda delante de un nombre, un infinitivo o **que** (me di cuenta **de que**), y va al principio de la pregunta (**¿En qué** piensas?). No pongas «de» donde el verbo no la pide: **pienso que**, **creo que**. Y recuerda: pensar **en** (la mente), ¿qué piensas **de**…? (la opinión), **pienso ir** (el plan).', en: 'Learn each verb with its preposition. The preposition stays in front of a noun, an infinitive or “que”, and goes at the start of a question. Don’t add “de” where the verb doesn’t take it: “pienso que”, “creo que”. And remember: “pensar en” (in your mind), “¿qué piensas de…?” (opinion), “pienso ir” (a plan).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi abuelo ___ usar el celular: dice que no lo necesita.', options: ['se niega a', 'se niega en', 'se niega de'], answer: 0, why: 'Negarse a + infinitivo.', en: 'My grandfather refuses to use a mobile phone: he says he doesn’t need one.' },
            { prompt: 'Cuando vi la foto, ___ era mi antigua profesora.', options: ['me di cuenta que', 'me di cuenta en que', 'me di cuenta de que'], answer: 2, why: 'Darse cuenta de algo → de que.', en: 'When I saw the photo, I realised it was my old teacher.' },
            { prompt: '___ te quejas ahora?', options: ['¿De qué', '¿En qué', '¿Qué'], answer: 0, why: 'Quejarse de algo → ¿De qué te quejas?', en: 'What are you complaining about now?' },
            { prompt: 'Mi hermana ___ un compañero de la universidad.', options: ['se casó a', 'se casó de', 'se casó con'], answer: 2, why: 'Casarse con alguien.', en: 'My sister married a classmate from university.' },
            { prompt: 'Opino como tú: ___ el proyecto es demasiado caro.', options: ['pienso que', 'pienso de que', 'pienso en que'], answer: 0, why: 'Para dar una opinión: pienso que, sin preposición.', en: 'I agree with you: I think the project is too expensive.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una entrevista de trabajo. Now, a job interview.', blocks: [
          { kind: 'lead', text: 'Un año después, Valeria entrevista a un arquitecto joven para el estudio. Antes de la entrevista, escribe sus preguntas. Transforma sus notas en preguntas directas, con la preposición en su sitio.', en: 'A year later, Valeria is interviewing a young architect for the studio. Before the interview, she writes down her questions. Turn her notes into direct questions, with the preposition in the right place.' },
          { kind: 'rewrite', title: 'Las preguntas de Valeria · Valeria’s questions', items: [
            { prompt: 'Nota: preguntarle por los proyectos de sus sueños. (Usa «soñar con» + trabajar.)', instruction: 'Escribe la pregunta con usted. Empieza con «¿Con qué proyectos».', accept: ['¿Con qué proyectos sueña trabajar?', '¿Con qué proyectos sueña?'] },
            { prompt: 'Nota: preguntarle cuánto tiempo necesita para preparar un presupuesto. (Usa «tardar en».)', instruction: 'Escribe la pregunta con usted. Empieza con «¿Cuánto».', accept: ['¿Cuánto tarda en preparar un presupuesto?', '¿Cuánto tiempo tarda en preparar un presupuesto?'] },
            { prompt: 'Nota: preguntarle qué descubrió en su último trabajo. (Usa «darse cuenta de».)', instruction: 'Escribe la pregunta con usted. Empieza con «¿De qué».', accept: ['¿De qué se dio cuenta en su último trabajo?'] },
          ] },
        ] },
        { title: 'Ampliación: más verbos y registro · Extension: more verbs and register', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Más verbos frecuentes con preposición fija: **depender de** (depend on), **consistir en** (consist of), **dedicarse a** (work as, devote yourself to), **arrepentirse de** (regret). Y con emociones: **alegrarse de que** + subjuntivo (clase 092): «Me alegro de que **hayas venido**». Fíjate: el inglés usa otra preposición o ninguna, y el español mantiene la suya.', en: 'More frequent verbs with a fixed preposition: depend on (de), consist of (en), work as / devote yourself to (a), regret (de). And with emotions: “alegrarse de que” + subjunctive (class 092): “I’m glad you came.” Notice: English uses a different preposition or none, while Spanish keeps its own.' },
          { kind: 'choice', title: 'Más verbos con preposición · More verbs with prepositions', items: [
            { prompt: 'El precio final ___ los materiales que elija el cliente.', options: ['depende a', 'depende en', 'depende de'], answer: 2, why: 'Depender de: en inglés «depend on», en español «de».', en: 'The final price depends on the materials the client chooses.' },
            { prompt: 'El trabajo ___ revisar planos y visitar casas antiguas.', options: ['consiste a', 'consiste en', 'consiste de'], answer: 1, why: 'Consistir en: en inglés «consist of», en español «en».', en: 'The job consists of checking plans and visiting old houses.' },
            { prompt: '—¿A qué ___ tu hermano? —Es profesor de música.', options: ['dedica', 'se dedica de', 'se dedica'], answer: 2, why: 'Dedicarse a: ¿A qué te dedicas? = What do you do for a living?', en: '“What does your brother do?” “He’s a music teacher.”' },
            { prompt: 'No ___ haberme mudado: fue la mejor decisión.', options: ['me arrepiento de', 'me arrepiento', 'me arrepiento a'], answer: 0, why: 'Arrepentirse de algo, también de + infinitivo.', en: 'I don’t regret moving: it was the best decision.' },
            { prompt: '¡Qué bien, Mariana! Me alegro ___ te guste Lima.', options: ['que', 'en que', 'de que'], answer: 2, why: 'Alegrarse de algo → me alegro de que + subjuntivo. En la conversación también se oye «me alegro que», pero la forma cuidada es «de que». También es correcto «Me alegra que te guste» (alegrar, sin «se» y sin preposición).', en: 'That’s great, Mariana! I’m glad you like Lima.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno se presenta con «Me dedico a…», «Mi trabajo consiste en…» y «Depende de…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Extensión: Clase 238 · Verbos de cambio: hacerse, volverse, convertirse en, llegar a ser', text: 'Antes de seguir, una clase de extensión sobre los cambios en las personas y las cosas: «**Se hizo** médica», «**Se volvió** muy serio», «El pueblo **se convirtió en** una ciudad», «**Llegó a ser** directora».', en: 'Before moving on, an extension class on how people and things change: “She became a doctor”, “He became very serious”, “The village turned into a city”, “She went on to become director”.', href: '/gramatica/verbos-de-cambio-hacerse-volverse-convertirse-en', label: 'Ir a la clase 238' },
          { kind: 'link', title: 'Siguiente: Clase 111 · Pronombres personales y doble mención temática', text: 'Hoy usaste muchos pronombres detrás de una preposición: «pienso **en ti**», «cuenta **conmigo**», «confío **en ella**». En la clase 111 trabajas con los pronombres personales en la frase: cuándo dices «**A mí** me encanta», «**A Valeria** la conocí en Chile» y por qué el pronombre aparece dos veces. Es el paso natural: de la preposición que pide el verbo a los pronombres que la acompañan.', en: 'Today you used many pronouns after a preposition: “I think about you”, “count on me”, “I trust her”. In class 111 you work with personal pronouns in the sentence: when to say “A mí me encanta”, “A Valeria la conocí en Chile”, and why the pronoun appears twice. It’s the natural next step: from the preposition a verb requires to the pronouns that go with it.', href: '/gramatica/pronombres-personales-y-doble-mencion-tematica', label: 'Ir a la clase 111' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿A qué te acostumbraste este año, qué tratas de cambiar y con quién cuentas?». Respuesta esperada: tres verbos con a, de y con. Tarea: escribir el correo de Escribir con una historia real.' },
        ] },
      ],
    },
  ],
};
