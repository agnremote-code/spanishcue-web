import type { LiveLesson } from '../types';

/**
 * Lesson 331 · A1 · Verbos reflexivos cotidianos (course unit G031).
 * One scene runs through the class: Lucía, a nurse, works the 7 a.m. shift at a
 * hospital and explains to her new colleague Óscar how she gets ready for it
 * (he starts on that shift on Monday). Lucía lives with her partner Raúl and
 * their daughter Alba; Óscar lives with his brother Hugo.
 * Content: me / te / se / nos (+ os, Spain) + conjugated verb: me levanto,
 * te duchas, se viste, nos acostamos; the pronoun goes before the conjugated
 * verb and after «no» (no me levanto). Stem changes reuse class 020:
 * acostarse o → ue, despertarse e → ie, vestirse e → i; ponerse (me pongo).
 * Contrast: me lavo / lavo el coche, se despierta / despierta a Alba.
 * The pronoun attached to an infinitive (quiero acostarme) is receptive only.
 * Everyone speaks with tú; the voice message is a Colombian nurse (Lucía).
 */
export const lesson: LiveLesson = {
  id: 331,
  level: 'A1',
  title: 'Verbos reflexivos cotidianos',
  subtitle: 'Contar tu rutina antes de un turno temprano con me levanto, te duchas, se viste y nos acostamos, y el pronombre en su sitio.',
  legend: [
    { tone: 'blue', label: 'ME · TE · SE · NOS + verbo: la acción vuelve a la misma persona (on yourself)' },
    { tone: 'violet', label: 'Reflexivo con cambio de raíz: me acuesto, me despierto, me visto' },
    { tone: 'orange', label: 'Sin pronombre reflexivo: la acción va a otra cosa o persona (on someone else)' },
  ],
  optionNotes: {
    'nos acuestamos': '«Acuestamos» no existe. Con nosotros, la raíz no cambia, como en «podemos»: **nos acostamos**.',
    'se acuestas': '«Se» es para él, ella, usted, ellos o ustedes. Con tú, el pronombre es **te**: te acuestas.',
    'se levanto': '«Levanto» es la forma de yo, y con yo el pronombre es **me**: me levanto. «Se» no va con levanto.',
    'se veste': '«Veste» no existe. Con ella, la e de vestir cambia a i, como en «pide»: **se viste**.',
    'me desperto': '«Desperto» no existe. Con yo, la e cambia a ie, como en «quiero»: **me despierto**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El turno de las siete', coach: 'Me levanto, me ducho. I get up, I shower.',
      steps: [
        { title: 'Lucía, enfermera · Lucía, a nurse', blocks: [
          { kind: 'lead', text: 'Lucía es enfermera en un hospital. Trabaja en el **turno de mañana**: empieza a las siete. Óscar es un enfermero nuevo y el lunes empieza en el mismo turno. Hoy Lucía le explica cómo se prepara.', en: 'Lucía is a nurse in a hospital. She works the morning shift: it starts at seven. Óscar is a new nurse and on Monday he starts on the same shift. Today Lucía explains how she gets ready.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Lucía y tu alumno repite. Después, tu alumno dice qué frase pasa por la noche.', self: 'Lee en voz alta las tres frases de Lucía. ¿Cuál pasa por la noche? (Which one happens at night?)' } },
          { kind: 'compare', title: 'La mañana de Lucía · Lucía’s morning', columns: [
            { tone: 'blue', label: '5:00 · get up', sentence: '«[[Me levanto|blue]] a las cinco».', idea: 'Lucía sale de la cama.', en: '“I get up at five.”' },
            { tone: 'blue', label: '5:10 · shower', sentence: '«Después [[me ducho|blue]]».', idea: 'Lucía se lava en la ducha.', en: '“Then I have a shower.”' },
            { tone: 'violet', label: '22:00 · go to bed', sentence: '«Por la noche [[me acuesto|violet]] a las diez».', idea: 'Lucía va a la cama.', en: '“At night I go to bed at ten.”' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Me levanto a las cinco» significa…', options: ['I get up at five.', 'I go to bed at five.', 'I have a shower at five.'], answer: 0, why: 'Levantarse = to get up: salir de la cama.', en: '“Me levanto a las cinco” means…' },
            { prompt: '¿Qué hace Lucía por la noche?', options: ['Se acuesta.', 'Se levanta.', 'Se ducha.'], answer: 0, why: '«Por la noche me acuesto a las diez»: acostarse = to go to bed.', en: 'What does Lucía do at night?' },
            { prompt: 'En las tres frases, ¿qué palabra va antes del verbo?', options: ['mi', 'yo', 'me'], answer: 2, why: 'Me levanto, me ducho, me acuesto: «me» va antes del verbo.', en: 'In the three sentences, which word comes before the verb?' },
          ] },
        ] },
        { title: 'Verbos con «se» · Verbs with “se”', mascot: '/brand/mascot/studying.webp', coach: 'Levantarse: el «se» cambia con la persona.', blocks: [
          { kind: 'lead', text: 'En el diccionario, estos verbos terminan en **-se**: levantar**se**, duchar**se**, acostar**se**. El «se» dice que la acción **vuelve a la misma persona**: Lucía se levanta a ella misma de la cama. Cuando conjugas, el «se» cambia con la persona: **me, te, se, nos, os, se**.', en: 'In the dictionary these verbs end in -se: levantarse, ducharse, acostarse. The “se” says the action goes back to the same person: Lucía gets herself out of bed. When you conjugate, the “se” changes with the person: me, te, se, nos, os, se.' },
          { kind: 'table', title: 'Presente · levantarse, ducharse', head: ['Persona', 'Pronombre', 'levantarse (get up)', 'ducharse (shower)'], rows: [
            ['yo', 'me', '[[me levanto|blue]]', '[[me ducho|blue]]'],
            ['tú', 'te', '[[te levantas|blue]]', '[[te duchas|blue]]'],
            ['él · ella · usted', 'se', '[[se levanta|blue]]', '[[se ducha|blue]]'],
            ['nosotros · nosotras', 'nos', '[[nos levantamos|blue]]', '[[nos duchamos|blue]]'],
            ['vosotros · vosotras (España)', 'os', '[[os levantáis|blue]]', '[[os ducháis|blue]]'],
            ['ellos · ellas · ustedes', 'se', '[[se levantan|blue]]', '[[se duchan|blue]]'],
          ], note: 'El verbo tiene las terminaciones regulares de la clase 017. Lo nuevo es el pronombre: **me** con yo, **te** con tú, **nos** con nosotros. (Regular endings; the new part is the pronoun.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Tú ___ a las seis.', options: ['se levanto', 'te levantas', 'te levanto'], answer: 1, why: 'Tú: te + levantas.', en: 'You get up at six.' },
            { prompt: 'Óscar ___ por la noche.', options: ['se duchan', 'nos duchamos', 'se ducha'], answer: 2, why: 'Óscar = él: se + ducha.', en: 'Óscar has a shower at night.' },
            { prompt: 'Lucía y yo ___ temprano.', options: ['me levantamos', 'se levantan', 'nos levantamos'], answer: 2, why: 'Lucía y yo = nosotros: nos + levantamos.', en: 'Lucía and I get up early.' },
          ] },
        ] },
        { title: 'Más verbos y el orden · More verbs and the order', mascot: '/brand/mascot/standing.webp', coach: 'Me + verbo. No + me + verbo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ORDEN · pronombre + verbo', question: '¿Dónde va «me»?', en: 'Where does “me” go?', formula: ['me + verbo conjugado: Me levanto.', 'no + me + verbo: No me levanto.'],
            meaning: 'El pronombre va **antes del verbo conjugado**, separado: me ducho, te vistes. En una frase negativa, **no** va primero: no me ducho.',
            examples: [
              { es: '[[Me ducho|blue]] y desayuno.', en: 'I have a shower and have breakfast.' },
              { es: 'Raúl [[no se levanta|blue]] a las cinco.', en: 'Raúl doesn’t get up at five.' },
              { es: '¿A qué hora [[te levantas|blue]]?', en: 'What time do you get up?' },
            ] },
          { kind: 'table', title: 'Con cambio de raíz, como en la clase 020 · With a stem change', head: ['Verbo', 'yo', 'él · ella', 'nosotros'], rows: [
            ['acostarse (o → ue) · go to bed', '[[me acuesto|violet]]', '[[se acuesta|violet]]', 'nos acostamos'],
            ['despertarse (e → ie) · wake up', '[[me despierto|violet]]', '[[se despierta|violet]]', 'nos despertamos'],
            ['vestirse (e → i) · get dressed', '[[me visto|violet]]', '[[se viste|violet]]', 'nos vestimos'],
            ['ponerse (yo: pongo) · put on', '[[me pongo|blue]] el uniforme', '[[se pone|blue]] el uniforme', 'nos ponemos el uniforme'],
          ], note: 'Es la «bota» de querer, poder y pedir: con nosotros, la raíz **no cambia** (nos acostamos, como podemos).' },
          { kind: 'tip', icon: '💡', title: 'Despertarse no es levantarse', text: '**Me despierto** = abro los ojos (I wake up). **Me levanto** = salgo de la cama (I get up). Lucía se despierta a las cinco menos cinco y se levanta a las cinco.', en: 'Me despierto = I open my eyes (I wake up). Me levanto = I get out of bed (I get up). Lucía wakes up at five to five and gets up at five.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál tiene el orden correcto?', options: ['Me levanto temprano.', 'Me temprano levanto.', 'Levanto me temprano.'], answer: 0, why: 'El pronombre va justo antes del verbo conjugado: me levanto.', en: 'Which one has the right order?' },
            { prompt: '¿Cuál es la frase negativa correcta?', options: ['Me no acuesto tarde.', 'No acuesto me tarde.', 'No me acuesto tarde.'], answer: 2, why: 'No + pronombre + verbo: no me acuesto.', en: 'Which negative sentence is correct?' },
            { prompt: 'Nosotros ___ en el hospital.', options: ['nos vestimos', 'nos vistimos', 'se visten'], answer: 0, why: 'Nosotros, fuera de la bota: vestimos, sin cambio.', en: 'We get dressed at the hospital.' },
          ] },
        ] },
        { title: '¿Me lavo o lavo? · Myself or something else?', mascot: '/brand/mascot/portrait.webp', coach: '¿Quién recibe la acción? Who gets the action?', blocks: [
          { kind: 'compare', title: 'El mismo verbo, otra persona u otra cosa · Same verb, different target', columns: [
            { tone: 'blue', label: 'REFLEXIVO · on myself', sentence: 'Por la mañana [[me lavo|blue]] la cara.', idea: 'La acción vuelve a Lucía: lava su cara.', en: 'In the morning I wash my face.' },
            { tone: 'orange', label: 'SIN PRONOMBRE · on something else', sentence: 'El sábado [[lavo el coche|orange]].', idea: 'La acción va a otra cosa: el coche.', en: 'On Saturday I wash the car.' },
          ] },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['La misma persona', 'Otra persona u otra cosa', 'English'], rows: [
            ['Raúl [[se despierta|violet]] a las siete.', 'Raúl [[despierta a Alba|orange]].', 'Raúl wakes up / Raúl wakes Alba up.'],
            ['Lucía [[se acuesta|violet]] a las diez.', 'Raúl [[acuesta a Alba|orange]] a las nueve.', 'Lucía goes to bed / Raúl puts Alba to bed.'],
            ['Alba [[se viste|violet]] sola.', 'Raúl [[viste a Alba|orange]].', 'Alba gets dressed by herself / Raúl dresses Alba.'],
          ], note: 'Con otra persona, el verbo va sin «se» y con **a**: despierta **a** Alba.' },
          { kind: 'decide', title: 'Antes de escribir, piensa · Before you write', steps: [
            { q: '¿La acción vuelve a la misma persona que la hace? (Is the action done to yourself?)', yes: 'Usa **me, te, se, nos** + verbo: me lavo, se despierta.', no: 'next' },
            { q: '¿La acción va a otra cosa o a otra persona? (Is it done to something or someone else?)', yes: 'Sin pronombre reflexivo: **lavo el coche**, **despierta a Alba**.', no: 'Mira otra vez: ¿quién recibe la acción?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Raúl ___ a Alba a las siete y media.', options: ['me despierto', 'se despierta', 'despierta'], answer: 2, why: 'La acción va a otra persona (Alba): despierta, sin «se».', en: 'Raúl wakes Alba up at half past seven.' },
            { prompt: 'Después de la ducha, Lucía ___ rápido.', options: ['nos vestimos', 'viste', 'se viste'], answer: 2, why: 'Lucía se pone la ropa ella misma: se viste.', en: 'After her shower, Lucía gets dressed quickly.' },
            { prompt: '«Lavo el coche» no lleva «me» porque…', options: ['es una frase negativa.', 'la acción va al coche, no a mí.', 'lavar es irregular.'], answer: 1, why: 'El coche recibe la acción: sin pronombre reflexivo.', en: '“Lavo el coche” has no “me” because…' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el pronombre? Where is the pronoun?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Falta el pronombre, está en otro sitio o no es de esta persona?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Yo levanto a las ocho.', right: 'Me levanto a las ocho.', why: 'Levantarse necesita el pronombre: con yo, **me**. «Yo levanto» pide otra cosa: levanto la caja. (You need “me”.)' },
            { wrong: 'Levanto me a las cinco.', right: 'Me levanto a las cinco.', why: 'El pronombre va antes del verbo conjugado. (Pronoun before the verb.)' },
            { wrong: 'Me no ducho por la noche.', right: 'No me ducho por la noche.', why: '«No» va primero, después el pronombre y el verbo. (No + me + verb.)' },
            { wrong: 'Óscar me acuesta tarde.', right: 'Óscar se acuesta tarde.', why: 'Óscar = él: el pronombre es **se**. «Me acuesta» significa que Óscar pone a otra persona (a mí) en la cama. (He → se.)' },
            { wrong: 'Nosotros nos acuestamos a las diez.', right: 'Nosotros nos acostamos a las diez.', why: 'Con nosotros, la raíz no cambia: acostamos, como podemos. (No stem change with nosotros.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Me ducho antes del trabajo.', 'Ducho me antes del trabajo.', 'Yo ducho antes del trabajo.'], answer: 0, why: 'Yo + ducharse: me ducho, con el pronombre antes del verbo.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Raúl me acuesta a las once.', 'Raúl se acosta a las once.', 'Raúl se acuesta a las once.'], answer: 2, why: 'Él: se acuesta (o → ue).', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales de su mañana con me levanto, me ducho y me visto, y una de su noche con me acuesto. Tú repites cada frase bien y tu alumno la repite.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la sala de descanso', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Óscar pregunta · Óscar asks', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Óscar y tu alumno es Lucía. Después, tu alumno toca cada palabra marcada y dice quién recibe la acción.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué se usa. (Read aloud, then tap the marks.)' } },
          { kind: 'explore', title: '¿A qué hora te levantas?', setting: 'Viernes, tres de la tarde. Termina el turno. Lucía y Óscar están en la sala de descanso del hospital. El lunes, Óscar empieza en el turno de mañana. (Friday, 3 p.m. The shift is over. Lucía and Óscar are in the hospital break room. On Monday Óscar starts on the morning shift.)', lines: [
            { who: 'Óscar', text: 'Lucía, el lunes empiezo en el turno de las siete. ¿A qué hora [[te levantas|blue]] tú?', en: 'Lucía, on Monday I start on the seven o’clock shift. What time do you get up?' },
            { who: 'Lucía', text: '[[Me levanto|blue]] a las cinco. Es temprano, pero no es difícil.', en: 'I get up at five. It’s early, but it isn’t hard.' },
            { who: 'Óscar', text: '¿Y qué haces primero?', en: 'And what do you do first?' },
            { who: 'Lucía', text: 'Primero [[me ducho|blue]] con agua caliente. Después desayuno un café con pan.', en: 'First I have a hot shower. Then I have coffee and bread for breakfast.' },
            { who: 'Óscar', text: '¿[[Te vistes|violet]] en casa con el uniforme?', en: 'Do you get dressed in your uniform at home?' },
            { who: 'Lucía', text: 'No. En casa [[me visto|violet]] con ropa normal. Aquí, en el vestuario, [[me pongo|blue]] el uniforme.', en: 'No. At home I get dressed in normal clothes. Here, in the locker room, I put on my uniform.' },
            { who: 'Óscar', text: '¿Y tu pareja? ¿También [[se levanta|blue]] a las cinco?', en: 'And your partner? Does he get up at five too?' },
            { who: 'Lucía', text: 'No, Raúl [[se levanta|blue]] a las siete. Él [[despierta a Alba|orange]], nuestra hija, y prepara el desayuno.', en: 'No, Raúl gets up at seven. He wakes up Alba, our daughter, and makes breakfast.' },
            { who: 'Óscar', text: 'Yo vivo con mi hermano Hugo. Nosotros [[nos acostamos|violet]] muy tarde, a las doce o a la una.', en: 'I live with my brother Hugo. We go to bed very late, at twelve or one.' },
            { who: 'Lucía', text: '¡Uf! Con el turno de mañana, eso es un problema. Yo [[me acuesto|violet]] a las diez.', en: 'Phew! With the morning shift, that’s a problem. I go to bed at ten.' },
            { who: 'Óscar', text: '¿Y el fin de semana? ¿[[No te despiertas|violet]] temprano?', en: 'And at the weekend? Don’t you wake up early?' },
            { who: 'Lucía', text: 'Sí, [[me despierto|violet]] a las seis, pero [[no me levanto|blue]]: leo en la cama. Y el sábado [[lavo el coche|orange]] con Raúl.', en: 'Yes, I wake up at six, but I don’t get up: I read in bed. And on Saturday I wash the car with Raúl.' },
          ], notes: {
            'te levantas': 'Óscar habla con Lucía (tú): **te** + levantas. El pronombre va antes del verbo.',
            'Me levanto': 'Lucía responde con yo: **me levanto**. Pregunta con te, respuesta con me.',
            'me ducho': 'Ducharse: Lucía se lava ella misma. Yo: **me ducho**.',
            'Te vistes': 'Vestirse con tú: **te vistes**. La e cambia a i, como en «pides».',
            'me visto': 'Yo: **me visto** (e → i). Lucía se pone la ropa ella misma.',
            'me pongo': 'Ponerse + ropa = to put on. Yo: **me pongo**, con la forma irregular de la clase 019.',
            'se levanta': 'Raúl = él: **se levanta**. Con él, ella y usted, el pronombre es se.',
            'despierta a Alba': 'La acción va a otra persona (Alba): **despierta a**, sin «se». Compara: Raúl se despierta.',
            'nos acostamos': 'Óscar y su hermano = nosotros: **nos acostamos**. Fuera de la bota: la raíz no cambia.',
            'me acuesto': 'Yo: **me acuesto**. Dentro de la bota: la o cambia a ue.',
            'No te despiertas': 'Pregunta negativa: **no + te + verbo**. Despertarse, e → ie: despiertas.',
            'me despierto': 'Me despierto = abro los ojos (wake up). Yo: e → ie.',
            'no me levanto': '**No** va primero, después me y el verbo: Lucía está despierta, pero no sale de la cama.',
            'lavo el coche': 'La acción va al coche, no a Lucía: **lavo**, sin pronombre reflexivo. Compara: me lavo la cara.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿A qué hora se levanta Lucía?', options: ['A las seis.', 'A las siete.', 'A las cinco.'], answer: 2, why: '«Me levanto a las cinco».', en: 'What time does Lucía get up?' },
            { prompt: '¿Dónde se pone Lucía el uniforme?', options: ['En el vestuario del hospital.', 'En casa.', 'En el coche.'], answer: 0, why: '«Aquí, en el vestuario, me pongo el uniforme».', en: 'Where does Lucía put on her uniform?' },
            { prompt: '¿Quién despierta a Alba?', options: ['Óscar.', 'Raúl.', 'Lucía.'], answer: 1, why: '«Raúl se levanta a las siete. Él despierta a Alba».', en: 'Who wakes Alba up?' },
          ] },
        ] },
        { title: '¿Para quién es la acción? · Who gets the action?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'Frases del diálogo · Sentences from the dialogue', categories: [
            { id: 'self', label: 'Reflexivo: vuelve a la misma persona', tone: 'blue' },
            { id: 'other', label: 'Va a otra cosa o persona', tone: 'orange' },
          ], items: [
            { text: 'Lucía se ducha.', answer: 'self', why: 'Lucía se lava ella misma: se ducha.' },
            { text: 'Raúl despierta a Alba.', answer: 'other', why: 'Alba recibe la acción: sin «se».' },
            { text: 'Óscar y Hugo se acuestan tarde.', answer: 'self', why: 'Ellos van a la cama: se acuestan.' },
            { text: 'Lucía lava el coche.', answer: 'other', why: 'El coche recibe la acción.' },
            { text: 'Lucía se pone el uniforme.', answer: 'self', why: 'Lucía se pone la ropa ella misma: se pone.' },
            { text: 'Raúl prepara el desayuno.', answer: 'other', why: 'El desayuno recibe la acción: prepara, sin «se».' },
            { text: 'Lucía se despierta a las seis.', answer: 'self', why: 'Lucía abre los ojos: se despierta.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué Lucía dice "me lavo la cara" pero "lavo el coche"?». Respuesta esperada: la cara es de ella (la acción vuelve a ella); el coche es otra cosa.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Quién? ¿Me, te, se o nos? Who? Which pronoun?',
      steps: [
        { title: 'La forma correcta · The right form', blocks: [
          { kind: 'choice', items: [
            { context: 'Óscar habla de él. (Óscar talks about himself.)', prompt: 'El lunes ___ a las cinco.', options: ['levanto', 'me levanto', 'se levanto'], answer: 1, why: 'Yo + levantarse: **me levanto**. Sin «me», falta la persona que se levanta.', en: 'On Monday I get up at five.' },
            { context: 'Óscar habla con su hermano Hugo (tú).', prompt: 'Hugo, ¿a qué hora ___ tú?', options: ['acuestas', 'te acuestas', 'se acuestas'], answer: 1, why: 'Tú + acostarse: **te acuestas** (o → ue). «Acuestas» sin te es acostar a otra persona.', en: 'Hugo, what time do you go to bed?' },
            { context: 'En el vestuario. (In the locker room.)', prompt: 'Las enfermeras ___ el uniforme antes del turno.', options: ['me pongo', 'se ponen', 'ponen'], answer: 1, why: 'Ellas: **se ponen**. Sin «se», falta quién se pone la ropa.', en: 'The nurses put on their uniform before the shift.' },
            { context: 'Lucía habla de ella y de Raúl.', prompt: 'Raúl y yo ___ a las diez y media.', options: ['nos acostamos', 'se acuestan', 'nos acuestamos'], answer: 0, why: 'Raúl y yo = nosotros: **nos acostamos**, sin cambio de raíz.', en: 'Raúl and I go to bed at half past ten.' },
            { context: 'Alba tiene seis años. (Alba is six.)', prompt: 'Alba ya ___ sola.', options: ['se viste', 'se veste', 'me visto'], answer: 0, why: 'Ella + vestirse: **se viste** (e → i, como pide).', en: 'Alba already gets dressed by herself.' },
            { context: 'Raúl, a las siete y media. (Raúl at half past seven.)', prompt: 'Raúl ___ a Alba con un beso.', options: ['despierta', 'despiertan', 'se despierta'], answer: 0, why: 'La acción va a otra persona (a Alba): **despierta**, sin «se».', en: 'Raúl wakes Alba up with a kiss.' },
          ] },
        ] },
        { title: '¿Qué pronombre falta? · Which pronoun is missing?', blocks: [
          { kind: 'classify', title: 'Me, te, se o nos', categories: [
            { id: 'me', label: 'me (yo)', tone: 'blue' },
            { id: 'te', label: 'te (tú)', tone: 'blue' },
            { id: 'se', label: 'se (él, ella, ellos…)', tone: 'blue' },
            { id: 'nos', label: 'nos (nosotros)', tone: 'blue' },
          ], items: [
            { text: '___ levantamos a las cinco y media.', answer: 'nos', why: 'La terminación -amos es de nosotros: nos levantamos.' },
            { text: '¿A qué hora ___ duchas?', answer: 'te', why: 'La terminación -as es de tú: te duchas.' },
            { text: 'Óscar ___ acuesta tarde.', answer: 'se', why: 'Óscar = él: se acuesta.' },
            { text: 'Yo ___ pongo el uniforme aquí.', answer: 'me', why: 'Yo: me pongo.' },
            { text: 'Los niños ___ visten solos.', answer: 'se', why: 'Ellos: se visten.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Yo levanto a las cinco de la mañana.', ok: false, options: ['Yo levanto me a las cinco de la mañana.', 'Yo me levanto a las cinco de la mañana.', 'Yo se levanto a las cinco de la mañana.'], answer: 1, why: 'Levantarse con yo necesita **me**, antes del verbo.' },
            { sentence: 'Óscar y su hermano se acuestan tarde.', ok: true, why: 'Correcta: ellos + acostarse, se acuestan (o → ue).' },
            { sentence: 'Lucía me ducha antes del desayuno.', ok: false, options: ['Lucía nos duchamos antes del desayuno.', 'Lucía ducha antes del desayuno.', 'Lucía se ducha antes del desayuno.'], answer: 2, why: 'Lucía = ella: **se** ducha. «Me ducha» significa que Lucía me ducha a mí.' },
            { sentence: 'Nosotros nos vistimos en el vestuario.', ok: false, options: ['Nosotros nos visto en el vestuario.', 'Nosotros nos vestimos en el vestuario.', 'Nosotros se visten en el vestuario.'], answer: 1, why: 'Nosotros, fuera de la bota: **vestimos**, sin cambio.' },
            { sentence: 'Raúl lava el coche los sábados.', ok: true, why: 'Correcta: el coche recibe la acción, así que va sin «se».' },
          ] },
        ] },
        { title: 'La noche antes · The night before', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del domingo · Sunday messages', lines: [
            { who: 'Óscar', text: 'Lucía, una pregunta para mañana: ¿dónde ___ el uniforme?', options: ['me pongo', 'pongo me', 'se pongo'], answer: 0, why: 'Yo + ponerse: **me pongo**, con el pronombre antes del verbo.' },
            { who: 'Lucía', text: 'En el vestuario del segundo piso. Los médicos también ___ la bata allí.', options: ['se pone', 'se ponen', 'nos ponemos'], answer: 1, why: 'Los médicos = ellos: **se ponen**. Lucía no es médica: «nos» no va.' },
            { who: 'Óscar', text: 'Gracias. Mañana ___ a las cuatro y media. ¡Qué miedo!', options: ['me despierto', 'despierto', 'me desperto'], answer: 0, why: 'Yo + despertarse: **me despierto** (e → ie).' },
            { who: 'Lucía', text: '¡Muy bien! Entonces esta noche ___ temprano, ¿no?', options: ['acuestas', 'se acuestas', 'te acuestas'], answer: 2, why: 'Tú: **te acuestas**. Sin «te», falta quién va a la cama.' },
            { who: 'Óscar', text: 'Sí. Hugo también trabaja mañana, así que los dos ___ a las diez.', options: ['nos acostamos', 'se acostamos', 'nos acuestamos'], answer: 0, why: 'Los dos (Hugo y yo) = nosotros: **nos acostamos**, sin cambio.' },
            { who: 'Lucía', text: 'Perfecto. ¡Hasta mañana!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['me', 'No', 'levanto', 'temprano'], accept: ['No me levanto temprano'], en: 'I don’t get up early.' },
            { tiles: ['se', 'Lucía', 'el uniforme', 'pone'], accept: ['Lucía se pone el uniforme'], en: 'Lucía puts on her uniform.' },
            { tiles: ['nos', 'a las diez', 'acostamos', 'Raúl y yo'], accept: ['Raúl y yo nos acostamos a las diez', 'A las diez Raúl y yo nos acostamos'], en: 'Raúl and I go to bed at ten.' },
          ] },
        ] },
        { title: 'Cambia la persona · Change the person', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con otra persona · Write it with another person', items: [
            { prompt: 'Me levanto a las cinco.', instruction: 'Escribe la frase con nosotros. (we)', accept: ['Nos levantamos a las cinco', 'Nosotros nos levantamos a las cinco', 'Nosotras nos levantamos a las cinco'] },
            { prompt: 'Nos acostamos a las once.', instruction: 'Escribe la frase con Óscar. (he)', accept: ['Óscar se acuesta a las once', 'Se acuesta a las once', 'Él se acuesta a las once'] },
            { prompt: 'Te vistes en casa.', instruction: 'Escribe la frase con yo. (I)', accept: ['Me visto en casa', 'Yo me visto en casa'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Consejos para el primer día · Tips for day one', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye me, te, se o nos antes de un verbo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los verbos con me, te, se o nos. (Listen once for the gist, then for details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Lucía', channel: 'MENSAJE DE VOZ · DE LUCÍA, DOMINGO POR LA NOCHE', src: '/audio/grammar-live/331.mp3',
            before: 'Domingo por la noche. Mañana es el primer día de Óscar en el turno de las siete. Lucía le deja un mensaje de voz. ¿Qué crees que le dice? (Lucía leaves Óscar a voice message the night before his first early shift. What do you think she tells him?)',
            gist: { prompt: '¿Para qué manda Lucía este mensaje?', options: ['Para cambiar su turno con Óscar.', 'Para dar consejos a Óscar para su primer día.', 'Para invitar a Óscar a cenar.'], answer: 1, why: '«Mañana es tu primer día en el turno de las siete. Aquí tienes unos consejos».', en: 'Why does Lucía send this message?' },
            details: [
              { prompt: '¿A qué hora se acuesta Lucía?', options: ['A las cinco.', 'A las doce.', 'A las diez.'], answer: 2, why: '«Yo me acuesto a las diez, porque me levanto a las cinco».', en: 'What time does Lucía go to bed?' },
              { prompt: '¿Dónde se ponen el uniforme?', options: ['En casa.', 'En la sala de enfermería.', 'En el vestuario del segundo piso.'], answer: 2, why: '«Aquí nos ponemos el uniforme en el vestuario del segundo piso».', en: 'Where do they put on their uniform?' },
              { prompt: '¿Por qué Hugo no despierta a Óscar?', options: ['Porque Hugo se levanta tarde.', 'Porque Hugo trabaja de noche.', 'Porque Hugo no vive con Óscar.'], answer: 0, why: '«Tu hermano se levanta tarde, ¿no? Entonces él no te despierta».', en: 'Why doesn’t Hugo wake Óscar up?' },
              { prompt: '¿Qué hace Lucía para no despertarse tarde?', options: ['Se ducha por la noche.', 'Pone dos alarmas en el celular.', 'Se acuesta a las doce.'], answer: 1, why: '«Yo siempre pongo dos alarmas en el celular».', en: 'What does Lucía do so she doesn’t wake up late?' },
              { prompt: '¿A qué hora espera Lucía a Óscar mañana? (menos cuarto = quarter to)', options: ['A las siete menos cuarto.', 'A las siete y cuarto.', 'A las seis y media.'], answer: 0, why: '«Hasta mañana a las siete menos cuarto, en la sala de enfermería».', en: 'What time is Lucía meeting Óscar tomorrow?' },
            ],
            transcript: 'Hola, Óscar, soy Lucía. Mañana es tu primer día en el turno de las siete, ¿verdad? Aquí tienes unos consejos. Yo [[me acuesto|violet]] a las diez, porque [[me levanto|blue]] a las cinco. [[Me ducho|blue]], desayuno y salgo de casa a las seis. Tú vives cerca del hospital, entonces puedes salir a las seis y media. Aquí [[nos ponemos|blue]] el uniforme en el vestuario del segundo piso. Otra cosa: tu hermano [[se levanta|blue]] tarde, ¿no? Entonces él no [[te despierta|orange]]. Yo siempre pongo dos alarmas en el celular. Y esta noche, ¿a qué hora [[te acuestas|violet]]? Bueno, hasta mañana a las siete menos cuarto, en la sala de enfermería.',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Óscar y responde al mensaje: a qué hora se acuesta esta noche, a qué hora se levanta mañana y si se ducha por la noche o por la mañana.', self: 'Eres Óscar. Responde a Lucía en voz alta: «Gracias, Lucía. Esta noche me acuesto a las… Mañana me levanto a las… Me ducho…». (Answer as Óscar: when you go to bed, when you get up, when you shower.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu rutina antes de un día temprano', coach: 'Me levanto, me ducho… ¿y tú? Your routine.',
      steps: [
        { title: 'Tu mañana · Your morning', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres un compañero o una compañera de trabajo y preguntas con tú. Tu alumno responde con frases reales con me levanto, me ducho, me visto y me acuesto. Tú repites su frase bien dicha y sigues con las repreguntas.', self: 'Imagina que un compañero nuevo te pregunta por tu rutina. Lee la pregunta, responde en voz alta y después compara con el ejemplo. (Answer aloud, then compare.)' } },
          { kind: 'talk', cards: [
            { q: 'Un día normal, ¿a qué hora te levantas? · On a normal day, what time do you get up?', followUps: ['¿Te despiertas con alarma? (Do you wake up with an alarm?)', '¿Te levantas rápido o despacio? (Do you get up quickly or slowly?)'], phrases: ['[[Me despierto|violet]] a las…', '[[Me levanto|blue]] a las…', '[[No me levanto|blue]] rápido.'], hint: 'Me despierto = abro los ojos. Me levanto = salgo de la cama.', example: 'Me despierto a las seis y media con alarma, pero me levanto a las siete. No me levanto rápido.', next: 'Ahora, la ducha y la ropa.' },
            { q: '¿Te duchas por la mañana o por la noche? · Do you shower in the morning or at night?', followUps: ['¿Te vistes antes o después del desayuno? (Before or after breakfast?)', '¿Qué te pones para trabajar o estudiar? (What do you put on for work or study?)'], phrases: ['[[Me ducho|blue]] por…', '[[Me visto|violet]] antes de / después de…', '[[Me pongo|blue]] …'], hint: 'Yo: me ducho, me visto (e → i), me pongo.', example: 'Me ducho por la mañana, con agua caliente. Me visto después del desayuno. Para trabajar me pongo una camisa y unos pantalones negros.', next: 'Ahora, la noche.' },
            { q: '¿A qué hora te acuestas? ¿Y los fines de semana? · What time do you go to bed? And at weekends?', followUps: ['¿Te acuestas tarde los sábados? (Late on Saturdays?)', '¿Lees en la cama? (Do you read in bed?)'], phrases: ['Normalmente [[me acuesto|violet]] a las…', 'Los sábados [[me acuesto|violet]] más tarde.', '[[No me acuesto|violet]] tarde.'], hint: 'Acostarse: me acuesto (o → ue).', example: 'Normalmente me acuesto a las once. Los sábados me acuesto a la una. Leo un poco en la cama.', next: 'Ahora, las personas de tu casa.' },
            { q: '¿Con quién vives? ¿A qué hora se levantan ellos? · Who do you live with? What time do they get up?', followUps: ['¿Quién se levanta primero? (Who gets up first?)', '¿Se acuestan a la misma hora? (Do you go to bed at the same time?)'], phrases: ['Mi pareja / mi hermano [[se levanta|blue]] a las…', 'Mis hijos [[se levantan|blue]] a las…', 'Los dos [[nos acostamos|violet]] a las…'], hint: 'Él / ella: se levanta. Ellos: se levantan. Nosotros: nos acostamos.', example: 'Vivo con mi hermana. Ella se levanta a las seis porque trabaja lejos. Yo me levanto a las siete. Los dos nos acostamos a las once.', next: 'Ahora, otra persona y tú.', teacher: 'Este es el punto de la clase: si tu alumno dice «ella me levanta», tú repites la frase bien: «Ah, ¿ella se levanta a las seis?».' },
            { q: '¿Tú despiertas a alguien por la mañana? ¿Y a ti, quién te despierta? · Do you wake someone up? And who wakes you up?', followUps: ['¿Despiertas a tus hijos o a tu pareja? (Your kids or your partner?)', '¿Te despierta un animal? (Does a pet wake you up?)'], phrases: ['[[Despierto a|orange]] …', '[[Me despierto|violet]] solo / sola.', 'Mi gato [[me despierta|orange]].'], hint: 'Despierto a mi hijo (otra persona). Me despierto (yo mismo).', example: 'Despierto a mi hijo a las siete y media. Nadie me despierta: me despierto sola a las seis y media.', next: 'Para terminar, tu plan de mañana.' },
            { q: 'Mañana empiezas un trabajo a las siete, como Óscar. ¿Cuál es tu plan desde esta noche? · Tomorrow you start a job at seven, like Óscar. What’s your plan from tonight?', followUps: ['¿A qué hora te acuestas hoy? (Tonight?)', '¿A qué hora te levantas mañana? (Tomorrow?)', '¿Dónde te pones el uniforme? (Where do you put on your uniform?)'], phrases: ['Hoy [[me acuesto|violet]] a las…', 'Mañana [[me levanto|blue]] a las… y [[me ducho|blue]].', '[[Me pongo|blue]] el uniforme en…'], hint: 'Noche, mañana y trabajo: me acuesto, me levanto, me ducho, me pongo.', example: 'Hoy me acuesto a las nueve y media. Mañana me levanto a las cinco y me ducho rápido. Me visto en casa y me pongo el uniforme en el trabajo.', teacher: 'Pregunta una vez «¿Y no te despiertas tarde?», para que tu alumno use una frase negativa: «No, no me despierto tarde». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas con «¿A qué hora te levantas?», «¿Te duchas…?» y «¿A qué hora te acuestas?», y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿A qué hora te levantas?», «¿Te duchas…?») y responde como un compañero nuevo. (Now ask the questions and answer as a new colleague.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje antes del turno', coach: 'Tu noche, tu mañana y una pregunta.',
      steps: [
        { title: 'Tu mensaje · Your message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pronombre: ¿está antes del verbo y es de la persona correcta? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira cada verbo: ¿tiene me, te, se o nos antes? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mañana empiezo temprano · I start early tomorrow', situation: 'Vives con un compañero o una compañera de piso. Mañana empiezas un trabajo nuevo muy temprano. Le escribes un mensaje para explicar tu rutina de esta noche y de mañana. (You share a flat. Tomorrow you start a new job very early. You text your flatmate to explain your routine tonight and tomorrow.)', task: [
            'Di a qué hora te acuestas hoy y a qué hora te levantas mañana. (Bedtime and getting-up time.)',
            'Cuenta dos acciones más de tu mañana: me ducho, me visto, me pongo… (Two more morning actions.)',
            'Escribe una frase negativa: «No me…». (One negative sentence.)',
            'Haz una pregunta a tu compañero con «te» o una propuesta con «nos». (A question with te or a plan with nos.)',
          ], starters: ['Hola, …:', 'Mañana empiezo un trabajo nuevo a las…', 'Hoy me acuesto temprano, a las…', 'Mañana me levanto a las…', 'Me ducho y…', 'No me visto…', 'Tú te levantas a las…, ¿verdad?', '¿Nos levantamos tarde el sábado?', 'Un beso.'],
            words: ['me levanto', 'me despierto', 'me ducho', 'me visto', 'me pongo el uniforme', 'me acuesto', 'te levantas', 'nos levantamos', 'temprano / tarde', 'a las…', 'el turno', 'sin ruido'],
            model: 'Hola, Marina: mañana empiezo un trabajo nuevo en la panadería, a las seis. Hoy [[me acuesto|violet]] temprano, a las nueve y media. Mañana [[me levanto|blue]] a las cuatro y media y [[me ducho|blue]] rápido. [[No me visto|violet]] con ropa elegante: en la panadería [[me pongo|blue]] el uniforme. Salgo de casa a las cinco y media, sin ruido. Tú [[te levantas|blue]] a las ocho, ¿verdad? El sábado no trabajo. ¿[[Nos levantamos|blue]] tarde y desayunamos juntas? Un beso, Elena.',
            minWords: 40,
            checks: [
              { label: 'Me + verbo: tu rutina (me levanto, me ducho…)', pattern: '(?<!\\p{L})me\\s+(?:levanto|ducho|visto|acuesto|despierto|pongo|lavo|peino|preparo)(?!\\p{L})', tip: 'Cuenta tu rutina con yo: «Me levanto a las cinco», «Me ducho rápido».' },
              { label: 'Acostarse: a qué hora te acuestas (go to bed)', pattern: '(?<!\\p{L})me\\s+acuesto(?!\\p{L})', tip: 'Di a qué hora te acuestas: «Hoy me acuesto a las diez».' },
              { label: 'Una frase negativa: no + me + verbo', pattern: '(?<!\\p{L})no\\s+me\\s+\\p{L}+', tip: 'Escribe una frase con «no me…»: «No me ducho por la noche».' },
              { label: 'Una frase con te o nos (your flatmate, or both of you)', pattern: '(?<!\\p{L})(?:te|nos)\\s+(?:levant|duch|vist|vest|acuest|acost|despiert|despert|pon|lav|pein)\\p{L}*', tip: 'Pregunta o propón: «¿A qué hora te levantas?», «¿Nos levantamos tarde el sábado?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})yo\\s+(?:levanto|ducho|acuesto|visto|despierto|peino)(?!\\p{L})', why: 'Falta el pronombre: «yo **me** levanto», «yo **me** ducho».' },
              { pattern: '(?<!(?:me|te|se|nos)\\s)(?<!\\p{L})(?:levanto|ducho|acuesto|despierto|visto|pongo)\\s+me(?!\\p{L})', why: 'El pronombre va antes del verbo: «me levanto», no «levanto me».' },
              { pattern: '(?<!\\p{L})me\\s+no(?!\\p{L})', why: '«No» va primero: «no me levanto», no «me no levanto».' },
              { pattern: '(?<!\\p{L})nos\\s+(?:acuestamos|vistimos|despiertamos)(?!\\p{L})', why: 'Con nosotros, la raíz no cambia: «nos acostamos», «nos vestimos», «nos despertamos».' },
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
            { tone: 'blue', label: 'REFLEXIVO · me, te, se, nos', formula: 'me levanto · te duchas · se levanta · nos levantamos · se levantan', example: 'Me levanto a las cinco; me ducho.', caption: 'la acción vuelve a la misma persona', en: 'the action goes back to the same person' },
            { tone: 'violet', label: 'RAÍZ · como en la clase 020', formula: 'me acuesto (o → ue) · me despierto (e → ie) · me visto (e → i) · nos acostamos', example: 'Lucía se acuesta a las diez.', caption: 'nosotros no cambia', en: 'nosotros keeps the stem' },
            { tone: 'blue', label: 'ORDEN · no + pronombre + verbo', formula: 'me levanto · no me levanto (nunca «levanto me», «me no levanto»)', example: 'Los sábados no me levanto temprano.', caption: 'el pronombre va pegado delante del verbo', en: 'the pronoun goes right before the verb' },
            { tone: 'orange', label: 'SIN PRONOMBRE · otra cosa u otra persona', formula: 'lavo el coche · despierta a Alba', example: 'Raúl despierta a Alba.', caption: 'la acción va a otro', en: 'the action goes to someone or something else' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta: **¿quién recibe la acción?** Si es la misma persona, pon el pronombre de esa persona **antes del verbo**: me levanto, te duchas, se viste, nos acostamos. Si es otra cosa u otra persona, sin pronombre: lavo el coche, despierta a Alba. Más adelante ves «quiero acostarme»: con el infinitivo, el pronombre va al final.', en: 'Ask: who gets the action? If it is the same person, put that person’s pronoun before the verb: me levanto, te duchas, se viste, nos acostamos. If it is something or someone else, no pronoun: lavo el coche, despierta a Alba. Later you will see “quiero acostarme”: with an infinitive, the pronoun goes at the end.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Los lunes ___ muy temprano.', options: ['me desperto', 'me despierto', 'despierto'], answer: 1, why: 'Yo + despertarse: me despierto (e → ie).', en: 'On Mondays I wake up very early.' },
            { prompt: '¿Tú ___ en casa o en el trabajo?', options: ['te vistes', 'se viste', 'te vestes'], answer: 0, why: 'Tú + vestirse: te vistes (e → i).', en: 'Do you get dressed at home or at work?' },
            { prompt: 'Mi hermano y yo ___ tarde los sábados.', options: ['se acuestan', 'nos acostamos', 'nos acuestamos'], answer: 1, why: 'Nosotros: nos acostamos, sin cambio de raíz.', en: 'My brother and I go to bed late on Saturdays.' },
            { prompt: 'Raúl ___ a Alba a las nueve de la noche.', options: ['acuestan', 'se acuesta', 'acuesta'], answer: 2, why: 'Alba recibe la acción: acuesta a Alba, sin «se».', en: 'Raúl puts Alba to bed at nine p.m.' },
            { prompt: '¿Cuál es correcta?', options: ['Me no ducho por la mañana.', 'No ducho me por la mañana.', 'No me ducho por la mañana.'], answer: 2, why: 'No + pronombre + verbo: no me ducho.', en: 'Which one is correct?' },
          ] },
        ] },
        { title: 'Otra persona, otro turno · Another person, another shift', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'rewrite', title: 'Una situación nueva · A new situation', items: [
            { prompt: 'Mateo is a baker. He gets up at three.', instruction: 'Escribe la segunda frase en español. (He gets up at three · a las tres)', accept: ['Se levanta a las tres', 'Él se levanta a las tres', 'Mateo se levanta a las tres'] },
            { prompt: 'We don’t go to bed late.', instruction: 'Escribe la frase en español. (late = tarde)', accept: ['No nos acostamos tarde', 'Nosotros no nos acostamos tarde', 'Nosotras no nos acostamos tarde'] },
            { prompt: 'Do you shower in the morning? (tú)', instruction: 'Escribe la pregunta en español, con tú. (in the morning = por la mañana)', accept: ['¿Te duchas por la mañana?', '¿Tú te duchas por la mañana?', '¿Te duchas en la mañana?', '¿Tú te duchas en la mañana?'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 032 · Gustar y encantar + nombre / infinitivo', text: 'Ya usas me, te, se y nos antes del verbo para hablar de tu rutina. En la clase 032 los pronombres me, te y nos vuelven con gustar y encantar: «me gusta el café», «nos encanta viajar». El orden es el mismo, pero la idea cambia: la cosa te gusta a ti.', en: 'You now put me, te, se and nos before the verb to talk about your routine. In class 032 the pronouns me, te and nos come back with gustar and encantar: “me gusta el café”, “nos encanta viajar”. The order is the same, but the idea changes: the thing pleases you.', href: '/gramatica/gustar-y-encantar', label: 'Ir a la clase 032' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué haces mañana desde que te despiertas hasta que sales de casa?». Respuesta esperada con me despierto, me levanto, me ducho y me visto, y una frase negativa con «no me…». Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
