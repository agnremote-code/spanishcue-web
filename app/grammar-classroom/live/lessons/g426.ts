import type { LiveLesson } from '../types';

/**
 * Lesson 426 · B1 · Comparar hipótesis y posibilidades (course unit G126).
 * B1 integration over G094 (lesson 394: a lo mejor + indicative, quizás with
 * both moods, puede que / es probable que + subjunctive), G102 (lesson 402:
 * si + presente → futuro / presente / imperativo) and G103 (lesson 146: the
 * conditional). Content: weighing options and their consequences. Real
 * condition (si + presente) vs imagined option (condicional: allí ganarías);
 * advice by putting yourself in someone's place (yo que tú, en tu lugar,
 * sería mejor + infinitivo; es mejor que + presente de subjuntivo, G091);
 * how likely each outcome is (a lo mejor, quizás, puede que, lo más probable
 * es que + subjuntivo); comparing and choosing (es mejor X que Y, por un
 * lado… por otro, lo bueno / lo malo es que, prefiero… porque, preferir algo
 * a algo). Never *si + condicional; «sería mejor que» needs the imperfect
 * subjunctive (B2), so only «sería mejor + infinitivo» is produced.
 * Ampliación (recognition only, G128 / G131): si + imperfecto de subjuntivo +
 * condicional (less likely hypothesis), si yo fuera tú, sería mejor que esperaras.
 * Scene: Natalia Ríos, a graphic designer in Guadalajara, has a job offer
 * from a studio in Monterrey; at her agency, her boss Luisa may make her
 * coordinator. Her friend Sergio Vidal helps her decide. In the voice message
 * Sergio (Mexican voice, tú) leaves her ideas before her meeting with Luisa.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 426,
  level: 'B1',
  title: 'Comparar hipótesis y posibilidades',
  subtitle: 'Comparar dos opciones antes de decidir: qué pasará si eliges una, qué harías tú, qué es probable y qué es mejor.',
  legend: [
    { tone: 'blue', label: 'CONDICIÓN REAL · si + presente → futuro / presente (if… will)' },
    { tone: 'orange', label: 'HIPÓTESIS Y CONSEJO · condicional, yo que tú, en tu lugar (would / if I were you)' },
    { tone: 'teal', label: 'POSIBILIDAD · a lo mejor, quizás, puede que, lo más probable es que (maybe / probably)' },
    { tone: 'violet', label: 'COMPARAR Y ELEGIR · es mejor… que, por un lado… por otro (better than / on the one hand)' },
  ],
  optionNotes: {
    aceptaría: 'Después de «si» de condición nunca va condicional. Para una condición real: si + presente (si acepto, si aceptas).',
    acepte: 'Después de «si» de condición no va subjuntivo, y «a lo mejor» tampoco lo acepta: aquí va el presente de indicativo (acepta).',
    pediré: '«Pediré» es tu propio plan. Con «yo que tú» o «en tu lugar» te imaginas en la situación de otra persona: condicional.',
    tenería: 'El condicional de «tener» es irregular: la raíz es «tendr-» → tendría.',
    podería: 'El condicional de «poder» es irregular: la raíz es «podr-» → podría.',
    ponería: 'El condicional de «poner» es irregular: la raíz es «pondr-» → pondría.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Me quedo o me voy?', coach: 'Antes de decidir, compara. Compare before you decide.',
      steps: [
        { title: 'Dos ofertas, una decisión · Two offers, one decision', blocks: [
          { kind: 'lead', text: 'Natalia Ríos es diseñadora gráfica en Guadalajara. Un estudio de Monterrey le ofrece un trabajo con un sueldo más alto, pero tendría que mudarse. En su agencia, en cambio, es posible que su jefa, Luisa, la nombre coordinadora en verano. Esta tarde Natalia toma un café con su amigo Sergio para comparar las opciones. Hoy aprendes a pensar en voz alta ante una decisión: qué **pasará** si eliges una opción, qué **harías** tú, qué es **probable** y qué opción es **mejor**.', en: 'Natalia Ríos is a graphic designer in Guadalajara. A studio in Monterrey is offering her a job with a higher salary, but she would have to move. At her agency, on the other hand, her boss, Luisa, may make her coordinator in the summer. This afternoon Natalia is having coffee with her friend Sergio to compare the options. Today you learn to think aloud about a decision: what will happen if you choose one option, what you would do, what is likely and which option is better.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después tu alumno dice qué hace cada frase: ¿una consecuencia, un consejo o una posibilidad?', self: 'Lee las tres frases en voz alta. ¿Cuál dice una consecuencia, cuál da un consejo y cuál ve una posibilidad? (A consequence, a piece of advice or a possibility?)' } },
          { kind: 'compare', title: 'Tres frases en el café · Three sentences in the café', columns: [
            { tone: 'blue', label: 'SI + PRESENTE → FUTURO', sentence: '[[Si acepto, ganaré|blue]] un treinta por ciento más.', idea: 'Natalia pone una condición real y dice su consecuencia.', en: 'If I accept, I’ll earn thirty percent more.' },
            { tone: 'orange', label: 'CONDICIONAL · CONSEJO', sentence: '[[Yo que tú, hablaría|orange]] con Luisa esta semana.', idea: 'Sergio se imagina en el lugar de Natalia y le aconseja.', en: 'If I were you, I’d talk to Luisa this week.' },
            { tone: 'teal', label: 'POSIBILIDAD + SUBJUNTIVO', sentence: '[[Puede que te nombren|teal]] coordinadora en verano.', idea: 'Es una posibilidad, no un hecho: subjuntivo.', en: 'They may make you coordinator in the summer.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Si acepto, ganaré más», Natalia…', options: ['habla de una condición real y de su consecuencia.', 'cuenta algo del pasado.', 'le da un consejo a Sergio.'], answer: 0, why: '«Si» + presente (acepto) pone la condición; el futuro (ganaré) dice la consecuencia.', en: 'In “Si acepto, ganaré más”, Natalia…' },
            { prompt: 'Con «Yo que tú, hablaría con Luisa», Sergio…', options: ['cuenta lo que hizo ayer.', 'se pone en el lugar de Natalia y le da un consejo.', 'está seguro de lo que va a pasar.'], answer: 1, why: '«Yo que tú» = if I were you. Sergio imagina la situación: por eso usa el condicional, hablaría.', en: 'With “Yo que tú, hablaría con Luisa”, Sergio…' },
          ] },
        ] },
        { title: 'Cada opción, sus consecuencias · Each option, its consequences', mascot: '/brand/mascot/studying.webp', coach: 'Real con «si»; imaginado con condicional.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SI + PRESENTE → FUTURO / PRESENTE / IMPERATIVO', question: '¿Ves la condición como real, como algo que puede pasar de verdad?', en: 'Do you see the condition as real, as something that may really happen?', formula: ['si + presente de indicativo → futuro / ir a + infinitivo', 'si + presente → presente (consecuencia segura)', 'si + presente → imperativo (instrucción o consejo directo)'],
            meaning: 'Es lo que viste en la clase 102. Para comparar opciones, sirve para decir qué **pasará** con cada una: la opción va después de «si» y la consecuencia, en la otra parte. Después de «si» de condición va siempre **presente de indicativo**: nunca futuro, condicional ni presente de subjuntivo.',
            examples: [
              { es: '[[Si aceptas, vas a tener|blue]] un sueldo mucho mejor.', en: 'If you accept, you’re going to have a much better salary.' },
              { es: '[[Si te quedas, puedes|blue]] seguir cerca de tu mamá.', en: 'If you stay, you can stay close to your mom.' },
              { es: '[[Si me mudo en marzo, tendré|blue]] que buscar departamento rápido.', en: 'If I move in March, I’ll have to find an apartment fast.' },
              { es: '[[Si no te convence el sueldo, pide|blue]] más.', en: 'If you’re not happy with the salary, ask for more.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'CONDICIONAL · IMAGINAR UNA OPCIÓN', question: '¿Imaginas cómo sería tu vida con una opción, sin decidir todavía?', en: 'Are you imagining what your life would be like with one option, without deciding yet?', formula: ['allí / con ese sueldo / en Monterrey… + condicional', 'infinitivo + -ía, -ías, -ía, -íamos, -íais, -ían'],
            meaning: 'Con el **condicional** (clase 103) imaginas una situación: no dices que va a pasar, la miras desde fuera. Por eso es perfecto para comparar opciones sin elegir todavía. Recuerda las raíces irregulares: tendr-, podr-, har-, dir-, saldr-, querr-, sabr-, vendr-, pondr-, habr-.',
            examples: [
              { es: 'En Monterrey [[ganarías|orange]] más, pero [[estarías|orange]] lejos de tu familia.', en: 'In Monterrey you’d earn more, but you’d be far from your family.' },
              { es: 'Con ese sueldo [[podría|orange]] ahorrar para un viaje.', en: 'With that salary I could save up for a trip.' },
              { es: 'Aquí [[tendrías|orange]] menos dinero, pero más tiempo libre.', en: 'Here you’d have less money but more free time.' },
            ],
            note: 'Las dos formas son correctas para hablar de una opción: con «Si acepto, **ganaré** más» la ves como un plan real; con «Allí **ganaría** más» la imaginas, todavía con distancia. Lo que no existe es «si» + condicional: ✗ «si aceptaría».' },
          { kind: 'table', title: 'La misma opción, dos miradas · The same option, two views', head: ['Opción', 'Condición real (si + presente)', 'Opción imaginada (condicional)'], rows: [
            ['Aceptar la oferta (accept)', '[[Si acepto, me mudaré|blue]] en marzo.', 'Allí [[viviría|orange]] sola por primera vez.'],
            ['Quedarse en la agencia (stay)', '[[Si me quedo, seguiré|blue]] con mi equipo.', 'Aquí [[estaría|orange]] más tranquila.'],
            ['Pedir trabajo híbrido (hybrid work)', '[[Si me dicen que sí, viajaré|blue]] una semana al mes.', 'Así [[tendría|orange]] lo mejor de las dos opciones.'],
          ], note: 'Las dos columnas son correctas. Con «si» + presente ves la consecuencia como real y cercana; con el condicional la imaginas, sin comprometerte todavía.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si Natalia ___ la oferta, tendrá que buscar departamento.', options: ['aceptaría', 'acepte', 'acepta'], answer: 2, why: 'Después de «si» de condición: presente de indicativo, acepta. Nunca condicional ni presente de subjuntivo.', en: 'If Natalia accepts the offer, she’ll have to look for an apartment.' },
            { prompt: 'En Monterrey, Natalia ___ un departamento más grande, pero más caro.', options: ['tenga', 'tendría', 'tenería'], answer: 1, why: 'Natalia imagina la opción: condicional. Tener → tendr- → tendría.', en: 'In Monterrey, Natalia would have a bigger but more expensive apartment.' },
          ] },
        ] },
        { title: 'Ponerte en su lugar · Putting yourself in their place', mascot: '/brand/mascot/speaking.webp', coach: 'Yo que tú… If I were you…', blocks: [
          { kind: 'concept', tone: 'orange', label: 'YO QUE TÚ · EN TU LUGAR · SERÍA MEJOR', question: '¿Te pones en el lugar de otra persona para aconsejarla?', en: 'Are you putting yourself in someone else’s shoes to give advice?', formula: ['yo que tú (yo que usted, yo que ustedes) + condicional', '(yo,) en tu lugar + condicional', 'sería mejor / sería buena idea + infinitivo'],
            meaning: 'Para aconsejar con suavidad, te imaginas en la situación de la otra persona y usas el **condicional**. «Yo que tú» y «en tu lugar» significan «if I were you» / «in your place». Con «sería mejor» o «sería buena idea» + infinitivo, el consejo suena menos directo que con el imperativo («habla con Luisa»).',
            examples: [
              { es: '[[Yo que tú, pediría|orange]] la oferta por escrito.', en: 'If I were you, I’d ask for the offer in writing.' },
              { es: '[[En tu lugar, no diría|orange]] nada todavía en la agencia.', en: 'In your place, I wouldn’t say anything at the agency yet.' },
              { es: '[[Sería mejor esperar|orange]] la respuesta de Monterrey.', en: 'It would be better to wait for the answer from Monterrey.' },
              { es: '[[Sería buena idea visitar|orange]] la ciudad un fin de semana.', en: 'It would be a good idea to visit the city for a weekend.' },
            ],
            note: '**Sería mejor** + infinitivo es fácil y siempre correcto. «Sería mejor que…» pide en la norma general el imperfecto de subjuntivo («sería mejor que esperaras»), que estudias en B2. Hoy, si quieres «que», usa el presente: «**Es** mejor que esperes» (clase 091).' },
          { kind: 'table', title: 'Tres formas de aconsejar · Three ways to give advice', head: ['Directo (imperativo)', 'Más suave (condicional)', 'Con valoración (+ subjuntivo)'], rows: [
            ['Habla con Luisa. (Talk to Luisa.)', '[[Yo que tú, hablaría|orange]] con Luisa. (If I were you, I’d talk to Luisa.)', 'Es mejor que hables con Luisa. (It’s better if you talk to Luisa.)'],
            ['Pide más dinero. (Ask for more money.)', '[[En tu lugar, pediría|orange]] más dinero. (In your place, I’d ask for more money.)', 'Es importante que pidas más dinero. (It’s important that you ask for more money.)'],
            ['No decidas hoy. (Don’t decide today.)', '[[Sería mejor no decidir|orange]] hoy. (It would be better not to decide today.)', 'Te aconsejo que no decidas hoy. (I advise you not to decide today.)'],
          ], note: 'Las tres columnas son correctas. El condicional suena más amable porque te imaginas en la situación de la otra persona y no le das una orden.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Yo que tú, ___ un día para pensarlo.', options: ['pediré', 'pediría', 'pida'], answer: 1, why: '«Yo que tú» introduce un consejo imaginado: condicional, pediría. «Pediré» sería tu propio plan.', en: 'If I were you, I’d ask for a day to think about it.' },
            { prompt: 'Sería mejor ___ con calma.', options: ['decidirías', 'que decides', 'decidir'], answer: 2, why: '«Sería mejor» + infinitivo: decidir. Es la forma que puedes usar siempre.', en: 'It would be better to decide calmly.' },
          ] },
        ] },
        { title: '¿Qué es probable? ¿Qué es mejor? · What is likely? What is better?', mascot: '/brand/mascot/standing.webp', coach: 'Calcula y compara. Weigh it up.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'POSIBILIDAD · CLASE 094 + LO MÁS PROBABLE ES QUE', question: '¿Cuánta posibilidad hay de que pase?', en: 'How likely is it to happen?', formula: ['a lo mejor + indicativo (siempre)', 'quizás / tal vez (delante del verbo) + indicativo o subjuntivo', 'es posible que, es probable que, puede que + subjuntivo', 'lo más probable es que + subjuntivo'],
            meaning: 'Cuando comparas opciones, también calculas qué va a pasar. Recuerda la clase 094: **a lo mejor** va siempre con indicativo; **quizás** y **tal vez**, delante del verbo, aceptan los dos modos; **puede que**, **es posible que** y **es probable que** piden subjuntivo. Nuevo hoy: **lo más probable es que** + subjuntivo, para señalar la posibilidad más fuerte.',
            examples: [
              { es: '[[A lo mejor me pagan|teal]] la mudanza.', en: 'Maybe they’ll pay for my move.' },
              { es: '[[Quizás Luisa me ofrezca|teal]] algo mejor.', en: 'Perhaps Luisa will offer me something better.' },
              { es: '[[Puede que el estudio acepte|teal]] el trabajo híbrido.', en: 'The studio may accept hybrid work.' },
              { es: '[[Lo más probable es que el estudio quiera|teal]] verte en persona.', en: 'Most likely the studio will want to see you in person.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'COMPARAR Y ELEGIR', question: '¿Pones dos opciones una al lado de la otra?', en: 'Are you putting two options side by side?', formula: ['es mejor / es peor + infinitivo + que + infinitivo', 'por un lado… ; por otro (lado)…', 'lo bueno / lo malo es que + indicativo', 'prefiero + infinitivo / nombre + porque…'],
            meaning: 'Para comparar, presenta las dos caras y después elige con una razón. **Es mejor X que Y** compara dos acciones. **Por un lado… por otro** ordena ventajas y problemas. **Lo bueno es que** / **lo malo es que** + indicativo resume un punto. **Prefiero… porque…** explica tu elección. También ayudan «en cambio» y «aunque» + indicativo (clases 101 y 117).',
            examples: [
              { es: '[[Es mejor preguntar ahora que|violet]] arrepentirse después.', en: 'It’s better to ask now than to regret it later.' },
              { es: '[[Por un lado|violet]], el sueldo es mucho mejor; [[por otro|violet]], allí no conozco a nadie.', en: 'On the one hand, the salary is much better; on the other, I don’t know anyone there.' },
              { es: '[[Lo malo es que|violet]] los departamentos allí son más caros.', en: 'The downside is that apartments there are more expensive.' },
              { es: '[[Prefiero quedarme|violet]] unos meses más porque el proyecto nuevo me encanta.', en: 'I’d rather stay a few more months because I love the new project.' },
            ],
            note: 'Con dos nombres, en un texto cuidado se dice «prefiero el tren **al** avión» (preferir algo **a** algo). «Prefiero el tren que el avión» es muy frecuente en la conversación, pero la norma culta recomienda «a».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A lo mejor el estudio ___ el trabajo híbrido.', options: ['acepte', 'acepta', 'aceptar'], answer: 1, why: '«A lo mejor» va siempre con indicativo: acepta.', en: 'Maybe the studio will accept hybrid work.' },
            { prompt: 'Lo más probable es que Natalia ___ en Guadalajara.', options: ['quedarse', 'se quede', 'se queda'], answer: 1, why: '«Lo más probable es que» presenta una probabilidad, no un hecho: subjuntivo, se quede.', en: 'Most likely Natalia will stay in Guadalajara.' },
          ] },
        ] },
        { title: 'Elegir la forma · Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Condición, hipótesis, posibilidad o comparación?', blocks: [
          { kind: 'decide', title: '¿Qué quieres hacer con tu frase? · What do you want your sentence to do?', steps: [
            { q: '¿Dices qué pasará si se cumple una condición real? (a real condition)', yes: 'Usa **si + presente** y, después, futuro, presente o imperativo: «Si aceptas, ganarás más».', no: 'next' },
            { q: '¿Imaginas una opción o te pones en el lugar de otra persona? (imagining, advising)', yes: 'Usa el **condicional**: «Allí ganarías más», «Yo que tú, lo pensaría», «Sería mejor esperar».', no: 'next' },
            { q: '¿Calculas si algo es posible o probable? (how likely)', yes: '**A lo mejor** + indicativo; **quizás** + los dos modos; **puede que**, **es probable que**, **lo más probable es que** + subjuntivo.', no: 'next' },
            { q: '¿Pones dos opciones una al lado de la otra? (comparing)', yes: '**Es mejor X que Y**, **por un lado… por otro**, **lo bueno / lo malo es que**, **prefiero… porque…**', no: 'Vuelve a leer tu frase: ¿condición, hipótesis, posibilidad o comparación?' },
          ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Si aceptaría la oferta, ganaría más.', right: 'Si acepto la oferta, ganaré más. / Con esa oferta, ganaría más.', why: 'Después de «si» de condición nunca va condicional. Condición real: si + presente. (Never «si» + conditional.)' },
            { wrong: 'Si te quedes, tendrás más tiempo.', right: 'Si te quedas, tendrás más tiempo.', why: '«Si» de condición + presente de indicativo, no de subjuntivo: te quedas.' },
            { wrong: 'Yo que tú, hablaré con Luisa.', right: 'Yo que tú, hablaría con Luisa.', why: '«Yo que tú» y «en tu lugar» piden condicional: es un consejo imaginado, no tu plan.' },
            { wrong: 'A lo mejor me paguen la mudanza.', right: 'A lo mejor me pagan la mudanza.', why: '«A lo mejor» va siempre con indicativo, aunque signifique «quizás».' },
            { wrong: 'Lo más probable es que el estudio dice que sí.', right: 'Lo más probable es que el estudio diga que sí.', why: '«Lo más probable es que» no afirma un hecho: subjuntivo, diga.' },
            { wrong: 'Sería mejor que esperes la respuesta.', right: 'Sería mejor esperar la respuesta. / Es mejor que esperes la respuesta.', why: 'En la norma general, «sería mejor que» pide imperfecto de subjuntivo (esperaras, B2). En algunas zonas de América se oye «sería mejor que esperes», pero no es la forma general. Hoy: «sería mejor» + infinitivo o «es mejor que» + presente de subjuntivo.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Cuatro herramientas · Four tools', text: 'Para comparar opciones, combina cuatro cosas: la **condición real** («Si aceptas, ganarás más»), la **hipótesis** con condicional («Allí estarías sola», «Yo que tú, esperaría»), la **posibilidad** («Puede que te paguen la mudanza») y la **comparación** («Es mejor esperar que decidir con prisa»).', en: 'To compare options, combine four things: the real condition (“If you accept, you’ll earn more”), the hypothesis with the conditional (“There you’d be alone”, “If I were you, I’d wait”), the possibility (“They may pay for your move”) and the comparison (“It’s better to wait than to decide in a hurry”).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En tu lugar, yo ___ las dos ofertas en una lista.', options: ['pondría', 'ponería', 'pongo'], answer: 0, why: '«En tu lugar» pide condicional. Poner → pondr- → pondría.', en: 'In your place, I’d put both offers in a list.' },
            { prompt: 'Si el estudio no ___ el trabajo híbrido, ¿qué vas a hacer?', options: ['acepta', 'acepte', 'aceptaría'], answer: 0, why: '«Si» de condición + presente de indicativo: acepta.', en: 'If the studio doesn’t accept hybrid work, what are you going to do?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno piensa en una decisión real (una casa, un curso, un viaje) y dice cuatro frases: una con «si» + presente, una con «yo que tú» o el condicional, una posibilidad y una comparación.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Un café para decidir', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la cafetería · At the café', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sergio y tu alumno es Natalia. Después tu alumno toca cada expresión marcada y dice qué hace: ¿condición, hipótesis o consejo, posibilidad o comparación?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué hace: ¿condición, hipótesis, posibilidad o comparación? (Condition, hypothesis, possibility or comparison?)' } },
          { kind: 'explore', title: '¿Monterrey o Guadalajara?', setting: 'Jueves por la tarde, en una cafetería del centro de Guadalajara. Natalia le cuenta a su amigo Sergio la oferta de Monterrey. Se tratan de tú. (Thursday afternoon, in a café in downtown Guadalajara. Natalia tells her friend Sergio about the offer from Monterrey.)', lines: [
            { who: 'Sergio', text: 'Bueno, cuéntame. ¿Ya sabes qué vas a hacer con la oferta?', en: 'So, tell me. Do you know what you’re going to do about the offer yet?' },
            { who: 'Natalia', text: 'No, para nada. [[Por un lado|violet]], el sueldo es un treinta por ciento más alto; [[por otro|violet]], [[tendría que dejar|orange]] a mi mamá, a ustedes, todo.', en: 'Not at all. On the one hand, the salary is thirty percent higher; on the other, I’d have to leave my mom, you guys, everything.' },
            { who: 'Sergio', text: '¿Y en la agencia? ¿Qué te dijo Luisa?', en: 'And at the agency? What did Luisa tell you?' },
            { who: 'Natalia', text: 'Que [[puede que me nombren|teal]] coordinadora en verano. Pero no es seguro.', en: 'That they may make me coordinator in the summer. But it isn’t certain.' },
            { who: 'Sergio', text: 'Mira, [[yo que tú, hablaría|orange]] con ella esta semana. [[Si sabe|blue]] que tienes otra oferta, [[a lo mejor te da|teal]] una respuesta más clara.', en: 'Look, if I were you, I’d talk to her this week. If she knows you have another offer, maybe she’ll give you a clearer answer.' },
            { who: 'Natalia', text: 'Ya, pero [[si se lo digo|blue]], ¿no va a pensar que solo quiero más dinero?', en: 'Yeah, but if I tell her, won’t she think I just want more money?' },
            { who: 'Sergio', text: 'No creo. Es normal comparar. Además, [[es mejor preguntar ahora que|violet]] arrepentirse dentro de un año.', en: 'I don’t think so. It’s normal to compare. Besides, it’s better to ask now than to regret it a year from now.' },
            { who: 'Natalia', text: 'Tienes razón. ¿Y si le pido al estudio que me deje trabajar desde aquí? [[Sería ideal|orange]]: una semana al mes allá y el resto en casa.', en: 'You’re right. What if I ask the studio to let me work from here? It would be ideal: one week a month there and the rest at home.' },
            { who: 'Sergio', text: '[[Lo más probable es que quieran|teal]] verte en la oficina al principio, pero no pierdes nada. [[Si dicen|blue]] que no, sigues con las dos opciones.', en: 'Most likely they’ll want to see you at the office at first, but you’ve got nothing to lose. If they say no, you still have both options.' },
            { who: 'Natalia', text: '[[Lo bueno es que|violet]] no tengo que contestar hasta el día quince.', en: 'The good thing is that I don’t have to answer until the fifteenth.' },
            { who: 'Sergio', text: 'Entonces, [[en tu lugar, haría|orange]] una lista con las ventajas y los problemas de cada opción. Y el fin de semana [[podrías|orange]] ir a Monterrey a conocer la ciudad.', en: 'Then, in your place, I’d make a list of the pros and cons of each option. And at the weekend you could go to Monterrey to get to know the city.' },
            { who: 'Natalia', text: 'Buena idea. [[Quizás vaya|teal]] el sábado. ¡Y tú vienes conmigo!', en: 'Good idea. Maybe I’ll go on Saturday. And you’re coming with me!' },
          ], notes: {
            'Por un lado': '«Por un lado» presenta la primera cara de la decisión (una ventaja). On the one hand.',
            'por otro': '«Por otro (lado)» presenta la otra cara (un problema). On the other (hand).',
            'tendría que dejar': 'Condicional de tener (tendr-): Natalia imagina la consecuencia de aceptar, todavía sin decidir.',
            'puede que me nombren': '«Puede que» = es posible que: subjuntivo, nombren. Es una posibilidad, no un hecho.',
            'yo que tú, hablaría': '«Yo que tú» = if I were you. Sergio se pone en el lugar de Natalia: condicional, hablaría.',
            'Si sabe': 'Condición real: «si» + presente de indicativo (sabe). Nunca «si sabría» ni «si sepa».',
            'a lo mejor te da': '«A lo mejor» + indicativo, siempre: te da.',
            'si se lo digo': '«Si» + presente (digo); la consecuencia va con «ir a»: «¿no va a pensar…?».',
            'es mejor preguntar ahora que': 'Es mejor + infinitivo + que + infinitivo: compara dos acciones y elige la primera.',
            'Sería ideal': 'Condicional de ser: Natalia imagina la opción del trabajo híbrido. (It would be ideal.)',
            'Lo más probable es que quieran': '«Lo más probable es que» + subjuntivo (quieran): la posibilidad más fuerte, pero no un hecho.',
            'Si dicen': '«Si» + presente (dicen) → presente (sigues): una consecuencia segura.',
            'Lo bueno es que': '«Lo bueno es que» + indicativo resume una ventaja. Lo contrario: «lo malo es que».',
            'en tu lugar, haría': '«En tu lugar» = in your place. Condicional de hacer (har-): haría.',
            'podrías': 'Condicional de poder (podr-): una sugerencia suave, más amable que «ve a Monterrey».',
            'Quizás vaya': '«Quizás» delante del verbo acepta los dos modos. Con «vaya» (subjuntivo), Natalia muestra que todavía no está segura.',
          } },
          { kind: 'choice', title: '¿Lo entendiste? · Did you understand?', items: [
            { prompt: '¿Qué ventaja tiene la oferta de Monterrey?', options: ['Natalia puede vivir con su mamá.', 'Allí la nombran coordinadora.', 'El sueldo es un treinta por ciento más alto.'], answer: 2, why: '«El sueldo es un treinta por ciento más alto».', en: 'What is the advantage of the Monterrey offer?' },
            { prompt: '¿Qué le aconseja Sergio primero?', options: ['Hablar con Luisa esta semana.', 'No decir nada a nadie.', 'Aceptar la oferta hoy mismo.'], answer: 0, why: '«Yo que tú, hablaría con ella esta semana».', en: 'What does Sergio advise her first?' },
            { prompt: '¿Hasta cuándo tiene Natalia para contestar?', options: ['Hasta el día quince.', 'Hasta el verano.', 'Hasta el sábado.'], answer: 0, why: '«No tengo que contestar hasta el día quince».', en: 'Until when does Natalia have to answer?' },
          ] },
        ] },
        { title: 'La lista de Natalia · Natalia’s list', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase de la lista de Natalia y decide qué hace. Tú preguntas: «¿Por qué?».', self: 'Lee cada frase de la lista de Natalia y decide qué hace. (Read each sentence of Natalia’s list and decide what it does.)' } },
          { kind: 'classify', title: 'Ventajas, problemas y dudas · Pros, cons and doubts', categories: [
            { id: 'si', label: 'Condición real (si + presente)', tone: 'blue' },
            { id: 'hipo', label: 'Hipótesis o consejo (condicional)', tone: 'orange' },
            { id: 'posi', label: 'Posibilidad', tone: 'teal' },
            { id: 'comp', label: 'Comparar y elegir', tone: 'violet' },
          ], items: [
            { text: 'Si me mudo, voy a conocer gente nueva.', answer: 'si', why: '«Si» + presente (me mudo) → «ir a» (voy a conocer): una condición real.' },
            { text: 'Allí tendría un departamento con vista a las montañas.', answer: 'hipo', why: 'Natalia imagina la opción: condicional, tendría.' },
            { text: 'Yo que tú, no lo pensaría tanto. (Paula, su hermana)', answer: 'hipo', why: '«Yo que tú» + condicional: un consejo.' },
            { text: 'Puede que Luisa me ofrezca un aumento.', answer: 'posi', why: '«Puede que» + subjuntivo: una posibilidad.' },
            { text: 'A lo mejor hace mucho calor en Monterrey en verano.', answer: 'posi', why: '«A lo mejor» + indicativo: una posibilidad.' },
            { text: 'Es mejor tener dos opciones que no tener ninguna.', answer: 'comp', why: '«Es mejor X que Y» compara dos situaciones.' },
            { text: 'Lo malo es que la mudanza es cara.', answer: 'comp', why: '«Lo malo es que» resume un problema de una opción.' },
            { text: 'Si Luisa no me contesta antes del quince, acepto la oferta.', answer: 'si', why: '«Si» + presente (contesta) → presente (acepto): una condición real.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/kneeling.webp',
      title: 'Pesar las opciones', coach: 'Una decisión, cuatro herramientas. One decision, four tools.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee la frase completa en voz alta y elige. Antes de ver la respuesta, dice la pista: «si», «yo que tú», «puede que»…', self: 'Lee la frase completa y busca la pista: ¿«si», «yo que tú», «puede que», «es mejor»? (Find the clue first.)' } },
          { kind: 'choice', title: 'Decisiones · Decisions', items: [
            { prompt: 'Si el estudio me ___ la mudanza, me voy en marzo.', options: ['pagaría', 'pague', 'paga'], answer: 2, why: '«Si» de condición + presente de indicativo: paga.', en: 'If the studio pays for my move, I’m going in March.' },
            { prompt: 'Con un sueldo más alto, Natalia ___ ayudar más a su mamá.', options: ['podería', 'pueda', 'podría'], answer: 2, why: 'Natalia imagina una situación: condicional. Poder → podr- → podría.', en: 'With a higher salary, Natalia could help her mom more.' },
            { prompt: 'Yo que tú, no ___ nada hasta tener la oferta por escrito.', options: ['firmaría', 'firmaré', 'firme'], answer: 0, why: '«Yo que tú» + condicional: firmaría. Es un consejo, no un plan propio.', en: 'If I were you, I wouldn’t sign anything until I had the offer in writing.' },
            { prompt: 'Puede que Luisa ___ mal la noticia.', options: ['se toma', 'tomarse', 'se tome'], answer: 2, why: '«Puede que» + subjuntivo: se tome.', en: 'Luisa may take the news badly.' },
            { prompt: 'Es mejor decidir con calma ___ decidir con prisa.', options: ['que', 'de', 'como'], answer: 0, why: 'Es mejor X **que** Y: el segundo término de la comparación va con «que».', en: 'It’s better to decide calmly than to decide in a hurry.' },
          ] },
        ] },
        { title: '¿Qué modo? · Which mood?', mascot: '/brand/mascot/studying.webp', blocks: [
          { kind: 'classify', title: 'Indicativo, subjuntivo o los dos · Indicative, subjunctive or both', categories: [
            { id: 'ind', label: 'Solo indicativo', tone: 'blue' },
            { id: 'subj', label: 'Solo subjuntivo', tone: 'teal' },
            { id: 'both', label: 'Los dos son correctos', tone: 'violet' },
          ], items: [
            { text: 'A lo mejor Natalia ___ (aceptar) la oferta.', answer: 'ind', why: '«A lo mejor» va siempre con indicativo: acepta.' },
            { text: 'Lo más probable es que Luisa ___ (entender) la situación.', answer: 'subj', why: '«Lo más probable es que» + subjuntivo: entienda.' },
            { text: 'Quizás el estudio ___ (aceptar) el trabajo híbrido.', answer: 'both', why: '«Quizás» delante del verbo: acepta o acepte (más duda).' },
            { text: 'Es mejor que Natalia ___ (hablar) pronto con Luisa.', answer: 'subj', why: '«Es mejor que» + subjuntivo (clase 091): hable.' },
            { text: 'Lo bueno es que Monterrey ___ (estar) a poco más de una hora en avión.', answer: 'ind', why: '«Lo bueno es que» presenta un hecho: indicativo, está.' },
            { text: 'Tal vez ___ (haber) otra oferta en verano.', answer: 'both', why: '«Tal vez» delante del verbo: hay o haya.' },
          ] },
        ] },
        { title: '¿Está bien? · Is it right?', blocks: [
          { kind: 'fix', title: 'Corrige si hace falta · Correct if needed', items: [
            { sentence: 'Si me ofrecerían más dinero, me quedo.', ok: false, options: ['Si me ofrecerán más dinero, me quedo.', 'Si me ofrecen más dinero, me quedo.', 'Si me ofrezcan más dinero, me quedo.'], answer: 1, why: 'Después de «si» de condición: presente de indicativo, ofrecen. Ni condicional, ni subjuntivo presente, ni futuro.' },
            { sentence: 'En tu lugar, yo pediría un día más para pensarlo.', ok: true, why: 'Correcta: «en tu lugar» + condicional, pediría.' },
            { sentence: 'A lo mejor Luisa me dé una respuesta mañana.', ok: false, options: ['A lo mejor que Luisa me dé una respuesta mañana.', 'A lo mejor Luisa me da una respuesta mañana.', 'A lo mejor de que Luisa me da una respuesta mañana.'], answer: 1, why: '«A lo mejor» va sin «que» y siempre con indicativo: me da.' },
            { sentence: 'Lo más probable es que Natalia se muda a Monterrey.', ok: false, options: ['Lo más probable es que Natalia se mude a Monterrey.', 'Lo más probable es Natalia se muda a Monterrey.', 'Lo más probable es que Natalia mudarse a Monterrey.'], answer: 0, why: '«Lo más probable es que» + subjuntivo: se mude.' },
            { sentence: 'Yo que tú, aceptaré la oferta.', ok: false, options: ['Yo que tú, aceptar la oferta.', 'Yo que tú, aceptaría la oferta.', 'Yo que tú, acepte la oferta.'], answer: 1, why: '«Yo que tú» + condicional: aceptaría.' },
          ] },
        ] },
        { title: 'El chat de la familia · The family chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Viernes por la noche: Natalia, su hermana Paula y Sergio · Friday night: Natalia, her sister Paula and Sergio', lines: [
            { who: 'Natalia', text: 'Ya hablé con Luisa. Dice que puede que me ___ coordinadora en julio.', options: ['nombran', 'nombren', 'nombrarían'], answer: 1, why: '«Puede que» + subjuntivo: nombren.' },
            { who: 'Paula', text: '¡Qué bien! Yo que tú, ___ esperar hasta julio.', options: ['preferiría', 'prefiera', 'preferiré'], answer: 0, why: '«Yo que tú» + condicional: preferiría.' },
            { who: 'Sergio', text: 'Pero si no te ___ en julio, pierdes la oferta de Monterrey.', options: ['nombren', 'nombrarán', 'nombran'], answer: 2, why: '«Si» de condición + presente de indicativo: nombran.' },
            { who: 'Natalia', text: 'Exacto. Por un lado, quiero quedarme; ___, no quiero perder esa oportunidad.', options: ['por otro', 'por fin', 'por eso'], answer: 0, why: '«Por un lado…; por otro…» presenta las dos caras. «Por eso» introduce una consecuencia.' },
            { who: 'Paula', text: 'A lo mejor el estudio te ___ más tiempo para contestar.', options: ['dé', 'da', 'dar'], answer: 1, why: '«A lo mejor» + indicativo: da.' },
            { who: 'Sergio', text: 'Sí, pregúntales. Es mejor preguntar ___ quedarte con la duda.', options: ['que', 'de', 'a'], answer: 0, why: 'Es mejor X **que** Y: preguntar que quedarte con la duda.' },
            { who: 'Natalia', text: 'Mañana les escribo. ¡Gracias, equipo!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Yo', 'que', 'tú,', 'hablaría', 'con', 'Luisa', 'mañana'], accept: ['Yo que tú, hablaría con Luisa mañana', 'Yo que tú, mañana hablaría con Luisa'], en: 'If I were you, I’d talk to Luisa tomorrow.' },
            { tiles: ['Si', 'aceptas,', 'tendrás', 'que', 'buscar', 'departamento'], accept: ['Si aceptas, tendrás que buscar departamento'], en: 'If you accept, you’ll have to look for an apartment.' },
            { tiles: ['Lo', 'más', 'probable', 'es', 'que', 'me', 'quede', 'aquí'], accept: ['Lo más probable es que me quede aquí'], en: 'Most likely I’ll stay here.' },
            { tiles: ['Es', 'mejor', 'esperar', 'que', 'decidir', 'hoy'], accept: ['Es mejor esperar que decidir hoy'], en: 'It’s better to wait than to decide today.' },
          ] },
        ] },
        { title: 'Transforma · Transform', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Otra forma de decirlo · Another way to say it', items: [
            { prompt: 'Habla con tu jefa. (→ Yo que tú)', instruction: 'Convierte la orden en un consejo más suave. Empieza con «Yo que tú,».', accept: ['Yo que tú, hablaría con tu jefa'] },
            { prompt: 'El estudio acepta el trabajo híbrido. (→ Puede que)', instruction: 'Presenta el hecho como posible. Empieza con «Puede que».', accept: ['Puede que el estudio acepte el trabajo híbrido'] },
            { prompt: 'Aceptas la oferta. Ganas más dinero. (→ si + futuro)', instruction: 'Une las dos ideas con una condición real: «si» + presente y el futuro.', accept: ['Si aceptas la oferta, ganarás más dinero', 'Ganarás más dinero si aceptas la oferta', 'Si aceptas la oferta, vas a ganar más dinero', 'Vas a ganar más dinero si aceptas la oferta'] },
            { prompt: 'Allí la vida es más cara. (→ Natalia lo imagina)', instruction: 'Natalia todavía no vive allí: imagina la situación con el condicional de «ser».', accept: ['Allí la vida sería más cara'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno compara dos opciones reales de su vida (dos barrios, dos cursos, dos trabajos) con cuatro frases: «si» + presente, condicional, una posibilidad y «es mejor… que…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Sergio', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Antes de la reunión · Before the meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada consejo o hipótesis (condicional) y da una palmada con cada posibilidad (a lo mejor, puede que…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa los consejos con condicional de las posibilidades. Sergio es mexicano y le habla de tú a Natalia. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Sergio', channel: 'MENSAJE DE VOZ · SERGIO PARA NATALIA', src: '/audio/grammar-live/426.mp3',
            before: 'Natalia tiene una reunión con Luisa esta tarde. Antes, Sergio le deja un mensaje de voz. ¿Qué crees que le dice: un consejo, una posibilidad, una comparación…? (Before her meeting, Sergio leaves Natalia a voice message. What do you think he says?)',
            gist: { prompt: '¿Para qué deja Sergio el mensaje?', options: ['Para cancelar el viaje del sábado.', 'Para darle a Natalia ideas y consejos antes de su reunión con Luisa.', 'Para decirle que él se va a Monterrey.'], answer: 1, why: '«Te dejo unas ideas antes de tu reunión con Luisa».', en: 'Why does Sergio leave the message?' },
            details: [
              { prompt: '¿Qué problema ve Sergio en la opción de Monterrey?', options: ['El sueldo es bajo.', 'Natalia estaría sola los primeros meses.', 'El estudio está lejos del centro.'], answer: 1, why: '«Allá estarías sola los primeros meses».', en: 'What problem does Sergio see in the Monterrey option?' },
              { prompt: '¿Qué le aconseja preguntarle a Luisa?', options: ['Si puede tener más vacaciones.', 'Si puede trabajar desde casa.', 'Cuándo sería coordinadora y con qué sueldo.'], answer: 2, why: '«Le preguntaría a Luisa algo muy concreto: cuándo sería el cambio a coordinadora y con qué sueldo».', en: 'What does he advise her to ask Luisa?' },
              { prompt: 'Según Sergio, ¿qué es lo más probable con el trabajo desde Guadalajara?', options: ['Que pueda trabajar siempre desde casa.', 'Que el estudio diga que no.', 'Que quieran verla en Monterrey una semana al mes.'], answer: 2, why: '«Lo más probable es que quieran verte allá una semana al mes».', en: 'According to Sergio, what is most likely with working from Guadalajara?' },
              { prompt: '¿Qué propone Sergio para el sábado?', options: ['Escribir al estudio.', 'Ir juntos a Monterrey.', 'Cenar con Luisa.'], answer: 1, why: '«¿Vamos juntos el sábado a Monterrey y lo vemos?».', en: 'What does Sergio suggest for Saturday?' },
            ],
            transcript: 'Naty, soy Sergio. Oye, anoche pensé mucho en lo de Monterrey y te dejo unas ideas antes de tu reunión con Luisa. [[Por un lado|violet]], [[si aceptas, vas a ganar|blue]] mucho más y vas a aprender un montón en ese estudio. [[Por otro|violet]], allá [[estarías|orange]] sola los primeros meses, y tú extrañas mucho a tu mamá. [[Yo que tú, le preguntaría|orange]] a Luisa algo muy concreto: cuándo sería el cambio a coordinadora y con qué sueldo. [[Puede que te dé|teal]] una fecha, y entonces todo es más fácil. Lo de trabajar desde aquí, pregúntalo también: [[a lo mejor dicen|teal]] que sí. [[Lo más probable es que quieran|teal]] verte allá una semana al mes, y eso no está mal. Ah, y una cosa más: [[es mejor decidir con calma que|violet]] con miedo. ¿Vamos juntos el sábado a Monterrey y lo vemos? Llámame cuando salgas, ¿sí? ¡Suerte!',
            reply: { teacher: 'Tú eres Sergio. Tu alumno es Natalia y responde al mensaje con tres frases: una condición real («Si Luisa…»), una posibilidad («A lo mejor…», «Puede que…») y una comparación o elección («Es mejor… que…», «Prefiero… porque…»).', self: 'Responde a Sergio en voz alta como Natalia: una condición real, una posibilidad y una comparación. (Answer as Natalia: a real condition, a possibility and a comparison.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Tú qué harías?', coach: 'Compara, imagina, elige. Compare, imagine, choose.',
      steps: [
        { title: 'Decisiones de verdad · Real decisions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con su experiencia real. Cuando falla una forma («si aceptaría», «a lo mejor sea»), tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa las frases de apoyo. (Read, answer aloud, use the support phrases.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en una decisión importante que tienes que tomar o que tomaste (trabajo, casa, estudios). ¿Qué opciones hay o había? · Think of an important decision you have to make or made. What are or were the options?', followUps: ['¿Qué pasa si eliges la primera opción? (What happens if you choose the first option?)', '¿Qué es lo bueno y lo malo de cada una? (What is good and bad about each one?)'], phrases: ['[[Por un lado|violet]]…; [[por otro|violet]]…', '[[Si elijo|blue]]… + futuro…', '[[Lo bueno / lo malo es que|violet]]…'], hint: '«Por un lado / por otro» para las dos caras; «si» + presente para las consecuencias.', example: 'Tengo que elegir entre seguir en mi trabajo o estudiar una maestría. Por un lado, la maestría me interesa mucho; por otro, es cara. Si estudio, voy a tener menos dinero, pero lo bueno es que después tendré más opciones.', next: 'Ahora, un consejo.' },
            { q: 'Una amiga quiere comprar un coche, pero vive en el centro y trabaja cerca de su casa. ¿Qué le aconsejas? · A friend wants to buy a car, but she lives downtown and works near home. What do you advise her?', followUps: ['¿Qué harías tú en su lugar? (What would you do in her place?)', '¿Qué sería mejor para ella? (What would be better for her?)'], phrases: ['[[Yo que tú|orange]], + condicional…', '[[En tu lugar|orange]], no compraría…', '[[Sería mejor|orange]] + infinitivo…', '[[Es mejor|violet]]… que…'], hint: '«Yo que tú» y «en tu lugar» + condicional; «sería mejor» + infinitivo.', example: 'Yo que tú, no compraría un coche. En el centro sería mejor usar la bici o el transporte público. Es mejor gastar ese dinero en un buen viaje que pagar estacionamiento todos los meses.', next: 'Ahora, imagina.' },
            { q: '¿Cómo sería tu vida en otro país? Elige uno. · What would your life be like in another country? Choose one.', followUps: ['¿Qué sería más fácil y qué sería más difícil? (What would be easier and what would be harder?)', '¿Qué extrañarías (o echarías de menos) de tu país? (What would you miss?)'], phrases: ['Allí [[viviría|orange]] / [[trabajaría|orange]]…', '[[Podría|orange]] + infinitivo…', '[[Lo malo es que|violet]]…'], hint: 'Imaginas: condicional. Cuidado con las raíces: tendría, podría, haría, sabría.', example: 'En Canadá viviría cerca de un lago y trabajaría en una universidad. Podría practicar el inglés y el francés. Lo malo es que extrañaría a mi familia, y el invierno sería muy duro para mí.', next: 'Ahora, tu fin de semana.' },
            { q: 'Este fin de semana: ¿qué es seguro, qué es probable y qué es solo posible? · This weekend: what is certain, what is likely and what is only possible?', followUps: ['¿Y el sábado por la noche? (And Saturday night?)', '¿Qué plan depende del tiempo? (Which plan depends on the weather?)'], phrases: ['[[Lo más probable es que|teal]] + subjuntivo…', '[[A lo mejor|teal]] + indicativo…', '[[Puede que|teal]] + subjuntivo…', '[[Si hace|blue]] buen tiempo…'], hint: '«A lo mejor» + indicativo; «lo más probable es que» y «puede que» + subjuntivo.', example: 'Lo más probable es que me quede en casa el sábado por la mañana, porque estoy cansado. A lo mejor voy al cine por la tarde. Si hace buen tiempo, el domingo salgo en bici, y puede que vea a mis primos.', next: 'Ahora, a elegir.' },
            { q: 'Dos opciones para las vacaciones: la playa o la montaña. ¿Cuál prefieres y por qué? · Two holiday options: the beach or the mountains. Which do you prefer and why?', followUps: ['¿Qué pasa si llueve? (What happens if it rains?)', '¿Qué opción sería más barata? (Which option would be cheaper?)'], phrases: ['[[Prefiero|violet]]… porque…', '[[Es mejor|violet]]… que…', '[[Si llueve|blue]]…', 'Allí los hoteles [[serían|orange]]…'], hint: 'Compara y elige con una razón. En un texto cuidado: «prefiero la montaña a la playa».', example: 'Prefiero la montaña porque no me gusta el calor. Es mejor caminar por un bosque que estar todo el día al sol. Si llueve, podemos leer en la cabaña. Y en la montaña los hoteles serían más baratos.' },
            { q: 'Ahora tú eres Sergio. Natalia te llama: Luisa le ofrece ser coordinadora en julio, pero con un aumento pequeño. ¿Qué le aconsejas? · Now you’re Sergio. Natalia calls you: Luisa is offering her the coordinator job in July, but with a small raise. What do you advise her?', followUps: ['¿Qué pasará si acepta la oferta de Monterrey? (What will happen if she accepts the Monterrey offer?)', '¿Qué harías tú? (What would you do?)'], phrases: ['[[Yo que tú|orange]]…', '[[Si te quedas|blue]]…', '[[Por un lado|violet]]…; [[por otro|violet]]…', '[[Puede que|teal]]…'], hint: 'Mezcla todo: condición, consejo, posibilidad y comparación.', example: 'Por un lado, ser coordinadora es un paso importante; por otro, el aumento es pequeño. Si te quedas, vas a estar cerca de tu mamá. Yo que tú, pediría un poco más: puede que Luisa diga que sí. Es mejor negociar ahora que estar incómoda después.', teacher: 'Después, cambian los papeles: tú eres Sergio y tu alumno es Natalia, que explica qué prefiere y por qué.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué harías tú?», «¿Qué pasa si…?», «¿Qué es lo más probable?») y tú respondes. Tu alumno escucha si usas bien el condicional y el subjuntivo.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué harías tú?», «¿Qué pasa si…?») y responde como otra persona. (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje con consejos', coach: 'Compara y aconseja. Compare and advise.',
      steps: [
        { title: 'Para una amiga que duda · For a friend who can’t decide', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada parte: ¿condición real (si + presente), hipótesis o consejo (condicional), posibilidad o comparación? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada frase: ¿condición, hipótesis, posibilidad o comparación? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Dos opciones, un consejo · Two options, one piece of advice', situation: 'Eres Sergio (o tú mismo). Escribe un mensaje a Natalia o a un amigo real que tiene que elegir entre dos opciones (dos trabajos, dos ciudades, dos casas…). Compara las opciones y aconséjale qué hacer. (You are Sergio, or yourself. Write a message to Natalia or to a real friend who has to choose between two options. Compare them and give your advice.)', task: [
            'Presenta las dos opciones con «por un lado… por otro». (Present both options.)',
            'Escribe una consecuencia real con «si» + presente y una situación imaginada con condicional. (One real consequence and one imagined situation.)',
            'Calcula una posibilidad con «a lo mejor», «puede que» o «lo más probable es que». (Say how likely something is.)',
            'Da un consejo con «yo que tú», «en tu lugar» o «sería mejor» + infinitivo. (Give advice.)',
            'Compara y termina con tu recomendación: «es mejor… que…», «prefiero… porque…». (Compare and end with your recommendation.)',
          ], starters: ['¡Hola, …!', 'Estuve pensando en tus opciones.', 'Por un lado,…; por otro,…', 'Si aceptas,…', 'Allí…', 'Lo más probable es que…', 'Yo que tú,…', 'Es mejor… que…', 'Un abrazo,'],
            words: ['si + presente', 'condicional', 'yo que tú', 'en tu lugar', 'sería mejor', 'a lo mejor', 'quizás', 'puede que', 'lo más probable es que', 'es mejor… que', 'por un lado', 'por otro', 'lo bueno es que', 'lo malo es que', 'prefiero… porque'],
            model: '¡Hola, Natalia! Estuve pensando en tus dos opciones. [[Por un lado|violet]], la oferta de Monterrey es muy buena: [[si aceptas, vas a ganar|blue]] más y vas a trabajar con gente muy creativa. [[Por otro|violet]], allá [[estarías|orange]] sola al principio y [[tendrías|orange]] que buscar departamento. En la agencia, [[lo más probable es que Luisa te nombre|teal]] coordinadora en julio, pero el aumento es pequeño. [[A lo mejor acepta|teal]] subirlo un poco si se lo pides. [[Yo que tú, hablaría|orange]] con ella el lunes y después le escribiría al estudio. Para mí, [[es mejor preguntar ahora que|violet]] quedarte con la duda. Y si al final te vas, ¡voy a visitarte! Un abrazo, Sergio.',
            minWords: 90,
            checks: [
              { label: 'Las dos caras (por un lado / por otro)', pattern: '(?<!\\p{L})por\\s+(?:un\\s+lado|otro(?:\\s+lado)?|otra\\s+parte)(?!\\p{L})', tip: 'Presenta las dos opciones: «Por un lado, el sueldo es mejor; por otro, estarías lejos».' },
              { label: 'Una condición real (si + presente)', pattern: '(?<!\\p{L})si(?!\\p{L})', tip: 'Añade una consecuencia real: «Si aceptas, vas a ganar más».' },
              { label: 'Un consejo (yo que tú, en tu lugar, sería mejor)', pattern: '(?<!\\p{L})(?:yo\\s+que\\s+t[úu]|en\\s+tu\\s+lugar|ser[íi]a\\s+(?:mejor|buena\\s+idea))(?!\\p{L})', tip: 'Da un consejo con condicional: «Yo que tú, hablaría con ella», «Sería mejor esperar».' },
              { label: 'Una posibilidad (possibility)', pattern: '(?<!\\p{L})(?:a\\s+lo\\s+mejor|quiz[áa]s?|tal\\s+vez|puede\\s+(?:ser\\s+)?que|es\\s+(?:muy\\s+)?(?:posible|probable)\\s+que|lo\\s+m[áa]s\\s+probable\\s+es\\s+que)(?!\\p{L})', tip: 'Calcula una posibilidad: «A lo mejor acepta», «Puede que te pague más».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})si\\s+(?:no\\s+)?(?:(?:me|te|se|le|nos|les|lo|la)\\s+)?(?:aceptar|tendr|podr|querr|har|dir|ir|ser|estar|ganar|quedar|vivir|mudar|pagar|ofrecer|dar|elegir)[íi]a(?:s|mos|n)?(?!\\p{L})', why: 'Después de «si» de condición no va condicional: **si aceptas**, **si te quedas**, **si te pagan**.' },
              { pattern: '(?<!\\p{L})a\\s+lo\\s+mejor\\s+(?:que\\s+)?(?:no\\s+)?(?:(?:me|te|se|le|nos|les|lo|la)\\s+)?(?:acepte|aceptes|sea|esté|estés|pueda|puedas|tenga|tengas|vaya|vayas|diga|digan|dé|den|quiera|quieran|nombre|nombren|pague|paguen)(?!\\p{L})', why: '«A lo mejor» va siempre con indicativo: **a lo mejor acepta**, **a lo mejor te pagan**.' },
              { pattern: '(?<!\\p{L})yo\\s+que\\s+t[úu],?\\s+(?:no\\s+)?(?:(?:me|te|se|le|lo|la|les)\\s+)?\\p{L}+(?:ré|rás|rá)(?!\\p{L})', why: '«Yo que tú» pide condicional, no futuro: **yo que tú, hablaría**.' },
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
            { tone: 'blue', label: 'CONDICIÓN REAL', formula: 'si + presente → futuro / presente / imperativo', example: 'Si aceptas, ganarás más.', caption: 'la consecuencia de una opción real', en: 'the consequence of a real option' },
            { tone: 'orange', label: 'HIPÓTESIS Y CONSEJO', formula: 'condicional · yo que tú / en tu lugar + condicional · sería mejor + infinitivo', example: 'Allí estarías sola. Yo que tú, lo pensaría.', caption: 'imaginas una opción o te pones en el lugar de otro', en: 'you imagine an option or put yourself in someone’s place' },
            { tone: 'teal', label: 'POSIBILIDAD', formula: 'a lo mejor + indicativo · quizás + los dos · puede que, lo más probable es que + subjuntivo', example: 'Lo más probable es que te paguen la mudanza.', caption: 'cuánta posibilidad hay', en: 'how likely it is' },
            { tone: 'violet', label: 'COMPARAR Y ELEGIR', formula: 'es mejor X que Y · por un lado… por otro · lo bueno / lo malo es que · prefiero… porque', example: 'Es mejor preguntar ahora que arrepentirse después.', caption: 'pones las opciones lado a lado y eliges', en: 'you set the options side by side and choose' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Nunca «si» + condicional: **si aceptas**, no «si aceptarías». El condicional va en la otra parte o solo: «Allí **ganarías** más», «Yo que tú, **esperaría**». Y para el consejo con «que», hoy: «**Es** mejor que esperes»; «sería mejor que esperaras» llega en B2.', en: 'Never “si” + conditional: “si aceptas”, not “si aceptarías”. The conditional goes in the other clause or on its own: “Allí ganarías más”, “Yo que tú, esperaría”. And for advice with “que”, for now: “Es mejor que esperes”; “sería mejor que esperaras” comes at B2.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Si mañana ___ tiempo, te llamo.', options: ['tengo', 'tenga', 'tendré'], answer: 0, why: '«Si» de condición + presente de indicativo: tengo.', en: 'If I have time tomorrow, I’ll call you.' },
            { prompt: 'Yo que tú, ___ un poco más.', options: ['esperaré', 'espere', 'esperaría'], answer: 2, why: '«Yo que tú» + condicional: esperaría.', en: 'If I were you, I’d wait a bit longer.' },
            { prompt: 'A lo mejor ___ a vivir a la costa el año que viene.', options: ['nos vamos', 'nos vayamos', 'irnos'], answer: 0, why: '«A lo mejor» + indicativo: nos vamos.', en: 'Maybe we’ll move to the coast next year.' },
            { prompt: 'Lo más probable es que el banco no te ___ el préstamo.', options: ['da', 'dé', 'daría'], answer: 1, why: '«Lo más probable es que» + subjuntivo: dé.', en: 'Most likely the bank won’t give you the loan.' },
            { prompt: 'Es mejor alquilar primero ___ comprar sin conocer el barrio.', options: ['como', 'de', 'que'], answer: 2, why: 'Es mejor X **que** Y.', en: 'It’s better to rent first than to buy without knowing the neighbourhood.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una casa.', blocks: [
          { kind: 'lead', text: 'Rocío y su pareja, Hugo, viven en un departamento en el centro de Querétaro. Piensan comprar una casa con jardín fuera de la ciudad. Ayúdalos a pensar.', en: 'Rocío and her partner, Hugo, live in an apartment in downtown Querétaro. They are thinking of buying a house with a garden outside the city. Help them think it through.' },
          { kind: 'rewrite', title: '¿Casa o departamento? · House or apartment?', items: [
            { prompt: 'Compran la casa. Tienen un jardín. (→ si + futuro)', instruction: 'Une las dos ideas con una condición real: «si» + presente y el futuro.', accept: ['Si compran la casa, tendrán un jardín', 'Tendrán un jardín si compran la casa', 'Si compran la casa, van a tener un jardín'] },
            { prompt: 'Fuera de la ciudad la vida es más tranquila. (→ Hugo lo imagina)', instruction: 'Hugo todavía no vive allí: usa el condicional de «ser».', accept: ['Fuera de la ciudad la vida sería más tranquila'] },
            { prompt: 'Esperen un año. (→ Yo que ustedes,)', instruction: 'Convierte la orden en un consejo suave. Empieza con «Yo que ustedes,» y usa el condicional de «esperar».', accept: ['Yo que ustedes, esperaría un año'] },
          ] },
        ] },
        { title: 'Ampliación · Si yo fuera tú: hipótesis menos probables (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para reconocer, no para producir. To recognise, not to produce.', blocks: [
          { kind: 'lead', text: 'En B2 (clases 128 y 131) aprendes el imperfecto de subjuntivo, pero ya puedes reconocerlo. **Si** + imperfecto de subjuntivo + condicional presenta una hipótesis **poco probable o imaginaria**: «Si me ofrecen más dinero, me quedo» (real: puede pasar) / «Si me **ofrecieran** más dinero, me **quedaría**» (lo veo poco probable). «**Si yo fuera tú**, lo aceptaría» = «Yo que tú, lo aceptaría». Y «Sería mejor que **esperaras**» es la forma general de «sería mejor que…». Hoy solo tienes que entenderlas.', en: 'At B2 (classes 128 and 131) you learn the imperfect subjunctive, but you can already recognise it. “Si” + imperfect subjunctive + conditional presents an unlikely or imaginary hypothesis: “If they offer me more money, I’ll stay” (real: it may happen) / “If they offered me more money, I’d stay” (I see it as unlikely). “Si yo fuera tú” = if I were you, like “yo que tú”. And “sería mejor que esperaras” is the general form after “sería mejor que”. For now you only need to understand them.' },
          { kind: 'choice', title: 'Reconoce · Recognise', items: [
            { prompt: '¿Qué frase presenta la condición como menos probable?', options: ['Si Luisa me ofreciera más dinero, me quedaría.', 'Si Luisa me ofrece más dinero, me quedaré.', 'Si Luisa me ofrece más dinero, me quedo.'], answer: 0, why: 'Si + imperfecto de subjuntivo (ofreciera) + condicional (quedaría): la persona ve la condición como poco probable.', en: 'Which sentence presents the condition as less likely?' },
            { prompt: '«Si yo fuera tú, hablaría con Luisa» significa…', options: ['Ayer hablé con Luisa.', 'Yo que tú, hablaría con Luisa.', 'Yo soy Natalia y hablo con Luisa.'], answer: 1, why: '«Si yo fuera tú» = «yo que tú» = if I were you. Las dos van con condicional.', en: '“Si yo fuera tú, hablaría con Luisa” means…' },
            { prompt: '«Si tuviera más tiempo, aprendería a tocar la guitarra.» ¿Tiene tiempo la persona ahora?', options: ['No se sabe nada.', 'No, o tiene muy poco: es una situación imaginaria.', 'Sí, tiene mucho tiempo.'], answer: 1, why: 'Si + imperfecto de subjuntivo (tuviera) habla de algo contrario a la realidad presente: ahora no tiene tiempo.', en: '“If I had more time, I’d learn to play the guitar.” Does the person have time now?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Solo se pide comprensión: tu alumno reformula cada frase de la Ampliación con «yo que tú» o con «si» + presente, y dice cuál ve más probable.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 127 · Argumentación y toma de decisiones B1', text: 'Ya sabes pensar en voz alta ante una decisión: qué pasará si eliges una opción, qué harías en el lugar de otra persona, qué es probable y qué opción es mejor. En la clase 127 das el paso siguiente: defender tu decisión con argumentos, concesiones («Aunque es caro, lo elegiría por su ubicación») y una conclusión clara. Es el paso natural: ya comparas las opciones; ahora aprendes a convencer.', en: 'You can now think aloud about a decision: what will happen if you choose an option, what you would do in someone else’s place, what is likely and which option is better. In class 127 you take the next step: defending your decision with arguments, concessions (“Although it’s expensive, I’d choose it for its location”) and a clear conclusion. It is the natural next step: you already compare options; now you learn to persuade.', href: '/gramatica/argumentacion-y-toma-de-decisiones-b1', label: 'Ir a la clase 127' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué decisión tienes que tomar este año? ¿Qué harías?». Respuesta esperada: dos opciones con «por un lado… por otro», una consecuencia con «si» + presente, un consejo o hipótesis con condicional y una posibilidad. Tarea: escribir el mensaje de Escribir para una decisión real.' },
        ] },
      ],
    },
  ],
};
