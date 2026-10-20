import type { LiveLesson } from '../types';

/**
 * Lesson 392 · B1 · Emociones y reacciones con que + subjuntivo (course unit G092).
 * Builds on G088 (present subjunctive forms), G089 (wishes), G090
 * (recommendations) and G091 (valuations: es una pena que…). Content: emotion
 * verbs that work like gustar (G062) + que + present subjunctive (me alegra,
 * me molesta, me sorprende, me preocupa, me encanta, me gusta, me da pena /
 * miedo / rabia que), with the verb in the singular because «que…» is its
 * subject; estar contento / harto / encantado / cansado de que, alegrarse de
 * que, tener miedo de que; sentir / lamentar que (I'm sorry) + subjunctive vs
 * sentir que (I feel, I sense) + indicative; reaction formulas ¡Qué bien /
 * qué pena / qué raro / qué suerte / qué rabia que + subjuntivo!; contrast with
 * porque + indicative (information) and, as a contrast only, same subject →
 * infinitive (me alegra verte, estoy harto de esperar), which G095 develops.
 * Ampliación: recognition of the perfect subjunctive (me alegra que hayas
 * venido, G097), formal «lamentamos que» and regional «me da coraje que».
 * Scene: a shared flat (departamento) in Mexico City. Sara Molina and Iván
 * Ríos, who moved in a month ago, hold a Sunday flat meeting; the third
 * flatmate, Bea Ortega, a nurse on night shifts, answers with a voice message
 * (Mexican voice, ustedes) and shares her own news: a job in Guadalajara.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 392,
  level: 'B1',
  title: 'Emociones y reacciones con que + subjuntivo',
  subtitle: 'Reaccionar ante lo que hacen otros y ante las noticias con «me alegra que…», «estoy harta de que…» y «¡qué pena que…!».',
  legend: [
    { tone: 'teal', label: 'EMOCIÓN + QUE · me alegra / me molesta / estoy harto de que + subjuntivo (you react to someone else)' },
    { tone: 'blue', label: '¡QUÉ + PALABRA + QUE…! · ¡qué bien / qué pena que + subjuntivo! (quick reaction)' },
    { tone: 'violet', label: 'MISMA PERSONA · me encanta / estoy harto de + infinitivo (you feel it about yourself)' },
    { tone: 'orange', label: 'INFORMACIÓN · porque + indicativo (you just give the reason)' },
  ],
  optionNotes: {
    'harta que': 'Con «estar harto» hace falta «de»: estoy harta de que… (fed up with).',
    'que yo desayune': 'Si la emoción y la acción son de la misma persona, no se usa «que»: me encanta desayunar.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Reaccionar con emoción', coach: '¿Informas o reaccionas? Are you informing or reacting?',
      steps: [
        { title: 'Un mes en el departamento · One month in the flat', blocks: [
          { kind: 'lead', text: 'Sara Molina comparte departamento en Ciudad de México con Bea, enfermera, y con Iván, que llegó hace un mes. Hoy es domingo y hacen una reunión en la cocina. Iván dice: «Estoy muy contento aquí». Sara reacciona: «**Me alegra que estés** contento». Hoy aprendes a reaccionar con emoción ante lo que hacen o viven otras personas.', en: 'Sara Molina shares a flat in Mexico City with Bea, a nurse, and Iván, who moved in a month ago. It is Sunday and they are having a meeting in the kitchen. Iván says: “I’m very happy here.” Sara reacts: “I’m glad you’re happy.” Today you learn to react with emotion to what other people do or go through.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno repite. Después tu alumno dice en cuál Sara solo informa y en cuál Sara reacciona con una emoción.', self: 'Lee las dos frases en voz alta. ¿En cuál Sara solo informa? ¿En cuál reacciona con una emoción? (Which one informs, which one reacts?)' } },
          { kind: 'compare', title: 'Informar o reaccionar · Informing or reacting', columns: [
            { tone: 'orange', label: 'INFORMACIÓN · indicativo', sentence: 'Iván [[está|orange]] contento en el departamento.', idea: 'Es un dato. Sara cuenta cómo está Iván.', en: 'Iván is happy in the flat. (a piece of information)' },
            { tone: 'teal', label: 'REACCIÓN · que + subjuntivo', sentence: '[[Me alegra que Iván esté|teal]] contento en el departamento.', idea: 'Sara reacciona: el hecho le produce alegría. Después de «me alegra que», subjuntivo.', en: 'I’m glad that Iván is happy in the flat. (her emotional reaction)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Me alegra que Iván esté contento», Sara…', options: ['pregunta cómo está Iván.', 'expresa lo que siente ante un hecho.', 'informa de cómo está Iván.'], answer: 1, why: '«Me alegra que» expresa una emoción ante un hecho. Por eso «esté» va en subjuntivo.', en: 'In “Me alegra que Iván esté contento”, Sara…' },
            { prompt: 'Iván está contento. ¿Es verdad?', options: ['No se sabe: el subjuntivo es para dudas.', 'Sí: el subjuntivo no niega el hecho, solo muestra la reacción.', 'No: el subjuntivo dice que es falso.'], answer: 1, why: 'Con las emociones, el hecho suele ser real. El subjuntivo marca que tú lo presentas como causa de lo que sientes, no como información nueva.', en: 'Iván is happy. Is it true?' },
          ] },
        ] },
        { title: 'Verbos de emoción + que · Emotion verbs + que', mascot: '/brand/mascot/studying.webp', coach: 'Como gustar: me alegra, me molesta. Like gustar.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EMOCIÓN + QUE + SUBJUNTIVO', question: '¿Qué sientes ante lo que hace o vive otra persona?', en: 'How do you feel about what someone else does or goes through?', formula: ['me / te / le / nos / les + alegra / molesta / sorprende / preocupa / encanta / gusta + que + subjuntivo', 'me / te / le / nos / les + da pena / da miedo / da rabia + que + subjuntivo'],
            meaning: 'Estos verbos funcionan como **gustar** (clase 062): la persona que siente va con **me, te, le, nos, les**, y lo que causa la emoción es la frase con «que». Esa frase va en **presente de subjuntivo**. Y el verbo de emoción va en **singular**, aunque después haya un plural: «Me molest**a** que los vecinos hag**an** ruido».',
            examples: [
              { es: '[[Me sorprende que Iván cocine|teal]] tan bien.', en: 'I’m surprised that Iván cooks so well.' },
              { es: '[[Nos preocupa que el dueño no conteste|teal]] los mensajes.', en: 'We’re worried that the landlord doesn’t answer messages.' },
              { es: 'A Bea [[le molesta que los vecinos hagan|teal]] ruido de día.', en: 'It bothers Bea that the neighbours make noise during the day.' },
              { es: '[[Me da pena que no coincidamos|teal]] casi nunca en casa.', en: 'It’s a shame for me that we’re almost never at home at the same time.' },
            ],
            note: 'En negativo es igual: «**No me gusta que** pongan la música tan alta» (I don’t like them playing music so loud).' },
          { kind: 'table', title: '¿Quién siente? · Who feels it?', head: ['Persona', 'Emoción', 'que + subjuntivo', 'English'], rows: [
            ['(a mí)', '**me** alegra', 'que **estés** aquí', 'I’m glad you’re here'],
            ['(a ti)', '¿**te** molesta', 'que **ponga** música?', 'do you mind if I put music on?'],
            ['(a él / ella / usted)', '**le** preocupa', 'que **suba** el alquiler', 'he / she is worried the rent will go up'],
            ['(a nosotros)', '**nos** sorprende', 'que no **haya** ascensor', 'we’re surprised there’s no lift'],
            ['(a ellos / ustedes)', '**les** da miedo', 'que **llueva** tanto', 'they’re afraid of so much rain'],
          ], note: 'El verbo de emoción no cambia: alegra, molesta, preocupa (singular). Cambia el pronombre. En España, con vosotros: «os alegra que…».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Me encanta que Bea ___ pan los domingos.', options: ['hace', 'haga', 'hacer'], answer: 1, why: '«Me encanta que» + otra persona (Bea): subjuntivo. Hacer → hago → haga.', en: 'I love it that Bea makes bread on Sundays.' },
            { prompt: 'A Iván le ___ que los vecinos hagan ruido.', options: ['molestan', 'molesto', 'molesta'], answer: 2, why: 'Lo que molesta es «que los vecinos hagan ruido»: una sola cosa. El verbo va en singular: molesta.', en: 'It bothers Iván that the neighbours make noise.' },
            { prompt: 'Nos preocupa que Sara ___ tan cansada.', options: ['estar', 'esté', 'está'], answer: 1, why: '«Nos preocupa que» expresa una emoción ante un hecho: subjuntivo, esté.', en: 'We’re worried that Sara is so tired.' },
          ] },
        ] },
        { title: 'Más formas de reaccionar · More ways to react', mascot: '/brand/mascot/standing.webp', coach: 'Estoy harta de que… ¡Qué pena que…!', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ESTAR + ADJETIVO + DE QUE · SENTIR QUE', question: '¿Cómo estás tú ante lo que pasa?', en: 'How do you feel about what is happening?', formula: ['estoy contento / encantado / harto / cansado + de que + subjuntivo', 'me alegro de que · tengo miedo de que + subjuntivo', 'siento / lamento que + subjuntivo (I’m sorry that)'],
            meaning: 'También puedes decir **cómo estás tú**: «estoy harta **de** que…». Con estar + adjetivo, con **alegrarse** y con **tener miedo** va **de que**. **Sentir que** y **lamentar que** sirven para decir que algo te da pena (I’m sorry that): «Siento que no puedas venir».',
            examples: [
              { es: '[[Estoy harta de que la lavadora no funcione|teal]].', en: 'I’m fed up with the washing machine not working.' },
              { es: '[[Estamos encantados de que te quedes|teal]] todo el año.', en: 'We’re delighted that you’re staying the whole year.' },
              { es: '[[Me alegro de que tengas|teal]] un trabajo nuevo.', en: 'I’m glad you have a new job.' },
              { es: '[[Siento que tengas|teal]] que lavar la ropa a mano.', en: 'I’m sorry you have to wash your clothes by hand.' },
            ] },
          { kind: 'concept', tone: 'blue', label: '¡QUÉ + PALABRA + QUE + SUBJUNTIVO!', question: '¿Quieres reaccionar rápido a una noticia?', en: 'Do you want to react quickly to some news?', formula: ['¡Qué bien / qué suerte / qué alegría + que + subjuntivo!', '¡Qué pena / qué lástima / qué rabia / qué raro + que + subjuntivo!'],
            meaning: 'En la conversación, la reacción más rápida es una exclamación con **qué** + una palabra + **que** + subjuntivo. Es muy frecuente al responder a una noticia.',
            examples: [
              { es: '¡[[Qué bien que vengas|blue]] a cenar!', en: 'How great that you’re coming to dinner!' },
              { es: '¡[[Qué raro que Bea no conteste|blue]]!', en: 'How strange that Bea isn’t answering!' },
              { es: '¡[[Qué pena que te vayas|blue]] en junio!', en: 'What a shame that you’re leaving in June!' },
            ],
            note: 'En la conversación oirás a veces el indicativo, sobre todo con hechos pasados (¡qué bien que viniste!). Aquí practicas la forma general: **subjuntivo**.' },
          { kind: 'tip', icon: '💡', title: 'Desde la clase 091 · From class 091', text: '«**Es una pena que** Bea se vaya» valora el hecho (clase 091). «**Me da pena que** Bea se vaya» dice lo que **tú** sientes. «**¡Qué pena que** Bea se vaya!» es la reacción rápida. Las tres llevan subjuntivo.', en: '“Es una pena que…” judges the fact (class 091). “Me da pena que…” says how you personally feel. “¡Qué pena que…!” is the quick reaction. All three take the subjunctive.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Estoy cansada de que Iván ___ los platos para mañana.', options: ['deja', 'deje', 'dejar'], answer: 1, why: '«Estoy cansada de que» + otra persona (Iván): subjuntivo, deje.', en: 'I’m tired of Iván leaving the dishes for the next day.' },
            { prompt: '¡Qué suerte que ___ un mercado al lado de casa!', options: ['hayan', 'haya', 'haber'], answer: 1, why: '«¡Qué suerte que…!» + subjuntivo. Hay → haya, siempre en singular.', en: 'How lucky that there’s a market next to the house!' },
            { prompt: 'Siento que no ___ venir a la reunión, Bea.', options: ['puedes', 'poder', 'puedas'], answer: 2, why: 'Aquí «siento» = lo lamento (I’m sorry): subjuntivo, puedas.', en: 'I’m sorry you can’t come to the meeting, Bea.' },
          ] },
        ] },
        { title: 'Emoción, información o tú mismo · Emotion, information or yourself', mascot: '/brand/mascot/speaking.webp', coach: '¿Otra persona? Que + subjuntivo.', blocks: [
          { kind: 'compare', title: 'Tres frases sobre la lavadora · Three sentences about the washing machine', columns: [
            { tone: 'teal', label: 'OTRA PERSONA · que + subjuntivo', sentence: '[[Me molesta que el dueño no la arregle|teal]].', idea: 'Yo siento la emoción; el dueño hace (o no hace) la acción.', en: 'It bothers me that the landlord doesn’t fix it.' },
            { tone: 'violet', label: 'MISMA PERSONA · infinitivo', sentence: '[[Estoy harto de lavar|violet]] la ropa a mano.', idea: 'Yo siento la emoción y yo lavo: infinitivo, sin «que». (Lo trabajas en la clase 095.)', en: 'I’m fed up with washing my clothes by hand.' },
            { tone: 'orange', label: 'INFORMACIÓN · porque + indicativo', sentence: 'Estoy enfadado [[porque la lavadora no funciona|orange]].', idea: 'Con «porque» das la causa como información: indicativo.', en: 'I’m annoyed because the washing machine isn’t working.' },
          ] },
          { kind: 'decide', title: '¿Subjuntivo, infinitivo o indicativo?', steps: [
            { q: '¿La persona que siente y la persona que hace la acción son la misma? (Me alegra… verte)', yes: 'Usa el **infinitivo**: «Me alegra verte», «Estoy harta de esperar».', no: 'next' },
            { q: '¿Expresas una emoción ante lo que hace otra persona o ante lo que pasa? (alegra, molesta, da pena, harto de, qué bien…)', yes: 'Usa **que + subjuntivo**: «Me alegra que me veas», «¡Qué bien que llueva!».', no: 'next' },
            { q: '¿Das la causa con «porque», o «siento que» significa «creo, noto» (I feel, I sense)?', yes: 'Usa el **indicativo**: «Estoy triste porque Bea se va», «Siento que no me escuchas».', no: 'Lee la frase otra vez: ¿quién siente y quién hace?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos «siento que» · Two kinds of «siento que»', text: '«**Siento que** no **puedas** venir» = lo lamento, me da pena (subjuntivo). «**Siento que** no me **escuchas**» = noto, tengo la impresión (indicativo). El contexto te dice cuál es.', en: '“Siento que no puedas venir” = I’m sorry you can’t come (subjunctive). “Siento que no me escuchas” = I feel you’re not listening to me (indicative). The context tells you which one it is.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Iván habla de su vida: «Me encanta ___ en Ciudad de México».', options: ['que viva', 'vivo', 'vivir'], answer: 2, why: 'Iván siente la emoción y él vive: misma persona, infinitivo.', en: 'Iván talks about his life: “I love living in Mexico City.”' },
            { prompt: 'Sara está triste porque Bea ___ en junio.', options: ['se va', 'se vaya', 'irse'], answer: 0, why: 'Con «porque» das la causa como información: indicativo, se va.', en: 'Sara is sad because Bea is leaving in June.' },
            { prompt: 'A Sara le da pena que Bea ___ en junio.', options: ['irse', 'se vaya', 'se va'], answer: 1, why: '«Le da pena que» + otra persona (Bea): subjuntivo, se vaya.', en: 'Sara is sad that Bea is leaving in June.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Quién siente? ¿Quién hace?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿el modo, el singular, el «de» o la persona? Después aparece la corrección.', self: 'Lee cada frase y busca el error: ¿el modo, el singular, el «de» o la persona? Toca para ver la corrección. (Find the mistake: mood, singular, «de» or person?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Me alegra que estás aquí.', right: 'Me alegra que estés aquí.', why: 'Una emoción ante lo que hace otra persona: subjuntivo, estés. (Emotion + que: subjunctive.)' },
            { wrong: 'Me molestan que los vecinos hagan ruido.', right: 'Me molesta que los vecinos hagan ruido.', why: 'Lo que molesta es «que los vecinos hagan ruido», una sola cosa: singular. (The que-clause is the subject.)' },
            { wrong: 'Estoy harta que el dueño no conteste.', right: 'Estoy harta de que el dueño no conteste.', why: 'Con estar + adjetivo, la frase va con «de que». (Fed up with = harta de.)' },
            { wrong: 'Me alegra que yo esté aquí.', right: 'Me alegra estar aquí.', why: 'Yo siento y yo estoy: misma persona, infinitivo sin «que». (Same person: infinitive.)' },
            { wrong: 'Siento que no puedes venir a la cena.', right: 'Siento que no puedas venir a la cena.', why: 'Aquí «siento» = lo lamento (I’m sorry): subjuntivo. Solo con «siento» = noto, va indicativo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nos ___ que haya tantos coches en la calle.', options: ['sorprenden', 'sorprende', 'sorprendemos'], answer: 1, why: 'Lo que sorprende es «que haya tantos coches»: singular, sorprende. «Nos» dice quién siente.', en: 'We’re surprised there are so many cars in the street.' },
            { prompt: 'Bea está encantada ___ Iván viva con ellas.', options: ['de', 'de que', 'que'], answer: 1, why: 'Estar + adjetivo + «de que» + subjuntivo: encantada de que.', en: 'Bea is delighted that Iván lives with them.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre su casa o su trabajo: algo que le alegra («Me alegra que…»), algo que le molesta («Me molesta que…») y una reacción rápida («¡Qué bien que…!»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del domingo', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la cocina · In the kitchen', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sara y tu alumno es Iván. Después tu alumno toca cada expresión marcada y dice: ¿emoción ante otra persona, la misma persona o información?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿emoción ante otra persona, la misma persona o información? (Emotion about someone else, same person or information?)' } },
          { kind: 'explore', title: 'Un mes juntos', setting: 'Domingo por la tarde, en la cocina del departamento. Sara e Iván hablan del primer mes de Iván en casa. Bea está trabajando. Se tratan de tú. (Sunday afternoon in the flat’s kitchen. Sara and Iván talk about Iván’s first month at home. Bea is at work.)', lines: [
            { who: 'Sara', text: 'Bueno, Iván, ya llevas un mes con nosotras. ¿Qué tal? ¿Estás a gusto?', en: 'So, Iván, you’ve been with us for a month now. How’s it going? Are you comfortable?' },
            { who: 'Iván', text: 'Sí, muy a gusto. La verdad, [[me encanta vivir|violet]] con ustedes.', en: 'Yes, very comfortable. Honestly, I love living with you two.' },
            { who: 'Sara', text: '¡[[Qué bien que te sientas|blue]] como en casa! A Bea y a mí [[nos alegra mucho que estés|teal]] contento.', en: 'How great that you feel at home! Bea and I are really glad that you’re happy.' },
            { who: 'Iván', text: 'Gracias. Oye, una cosa: [[me sorprende que Bea nunca esté|teal]] en casa. ¿Está todo bien?', en: 'Thanks. Hey, one thing: I’m surprised Bea is never at home. Is everything OK?' },
            { who: 'Sara', text: 'Sí, es enfermera y trabaja de noche. Pero a mí [[me da pena que no coincidamos|teal]] casi nunca.', en: 'Yes, she’s a nurse and works nights. But it makes me sad that we’re almost never home at the same time.' },
            { who: 'Iván', text: 'Ya. Y otra cosa… ¿qué pasa con la lavadora? [[Estoy harto de lavar|violet]] la ropa a mano.', en: 'Right. And another thing… what’s going on with the washing machine? I’m fed up with washing my clothes by hand.' },
            { who: 'Sara', text: '¡Y yo! [[Me molesta muchísimo que el dueño no conteste|teal]]. Le mandé un mensaje hace dos semanas.', en: 'Me too! It really bothers me that the landlord doesn’t answer. I sent him a message two weeks ago.' },
            { who: 'Iván', text: '¡[[Qué raro que no diga|blue]] nada! ¿No está de viaje?', en: 'How strange that he doesn’t say anything! Isn’t he away?' },
            { who: 'Sara', text: 'No creo. Y además, [[me preocupa que suba|teal]] el alquiler en septiembre: lo comentó en enero.', en: 'I don’t think so. And on top of that, I’m worried the rent will go up in September: he mentioned it in January.' },
            { who: 'Iván', text: 'Bueno, yo [[estoy contento porque aquí pago|orange]] menos que en mi otro departamento.', en: 'Well, I’m happy because I pay less here than in my old flat.' },
            { who: 'Sara', text: 'Eso es verdad. Mira, [[siento que tengas|teal]] que lavar a mano. Mañana llamo al dueño otra vez.', en: 'That’s true. Look, I’m sorry you have to wash by hand. Tomorrow I’ll call the landlord again.' },
            { who: 'Iván', text: 'Tranquila, no pasa nada. Y gracias por preguntar: [[me alegra que te importe|teal]].', en: 'Don’t worry, it’s fine. And thanks for asking: I’m glad you care.' },
          ], notes: {
            'me encanta vivir': 'Misma persona: Iván siente y Iván vive. **Me encanta + infinitivo**, sin «que».',
            'Qué bien que te sientas': 'Reacción rápida: **¡Qué bien que** + subjuntivo! Sentirse → te sientas.',
            'nos alegra mucho que estés': 'Emoción de dos personas (nos) ante el estado de otra (tú): **nos alegra que** + subjuntivo, estés. «Mucho» puede ir antes de «que».',
            'me sorprende que Bea nunca esté': 'Sorpresa ante lo que hace otra persona: **me sorprende que** + subjuntivo, esté.',
            'me da pena que no coincidamos': '**Dar pena** = to make sad. Me da pena que + subjuntivo: coincidamos (coincidir, to be in the same place at the same time).',
            'Estoy harto de lavar': 'Misma persona: Iván está harto e Iván lava. **Harto de + infinitivo**.',
            'Me molesta muchísimo que el dueño no conteste': '**Me molesta que** + subjuntivo, conteste. El verbo va en singular: lo que molesta es «que el dueño no conteste».',
            'Qué raro que no diga': 'Reacción de sorpresa: **¡Qué raro que** + subjuntivo! Decir → digo → diga.',
            'me preocupa que suba': 'Preocupación ante algo que puede pasar: **me preocupa que** + subjuntivo, suba (subir, to go up).',
            'estoy contento porque aquí pago': 'Con **porque** Iván da la causa como información: indicativo, pago.',
            'siento que tengas': '**Siento que** = lo lamento (I’m sorry): subjuntivo. Tener → tengo → tengas.',
            'me alegra que te importe': '**Me alegra que** + subjuntivo. Importar funciona como gustar: te importa → que te importe (that you care).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Bea casi nunca está en casa?', options: ['Porque es enfermera y trabaja de noche.', 'Porque está de viaje.', 'Porque vive con su novio.'], answer: 0, why: '«Es enfermera y trabaja de noche».', en: 'Why is Bea hardly ever at home?' },
            { prompt: '¿Qué problema tiene la casa?', options: ['La lavadora no funciona y el dueño no contesta.', 'Los vecinos hacen mucho ruido.', 'No hay agua caliente.'], answer: 0, why: '«Estoy harto de lavar la ropa a mano» y «me molesta que el dueño no conteste».', en: 'What problem does the flat have?' },
            { prompt: '¿Qué le preocupa a Sara?', options: ['Que Bea esté enferma.', 'Que Iván se vaya.', 'Que suba el alquiler en septiembre.'], answer: 2, why: '«Me preocupa que suba el alquiler en septiembre».', en: 'What is Sara worried about?' },
          ] },
        ] },
        { title: '¿Otra persona, misma persona o información? · Someone else, same person or information?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases de la reunión · Sentences from the meeting', categories: [
            { id: 'otra', label: 'OTRA PERSONA · que + subjuntivo', tone: 'teal' },
            { id: 'misma', label: 'MISMA PERSONA · infinitivo', tone: 'violet' },
            { id: 'info', label: 'INFORMACIÓN · porque + indicativo', tone: 'orange' },
          ], items: [
            { text: 'Me sorprende que Bea nunca esté en casa.', answer: 'otra', why: 'Iván se sorprende; Bea no está: esté.' },
            { text: 'Me encanta vivir con ustedes.', answer: 'misma', why: 'Iván siente y vive: infinitivo, vivir.' },
            { text: 'Estoy contento porque aquí pago menos.', answer: 'info', why: '«Porque» da la causa como información: pago.' },
            { text: 'Me molesta muchísimo que el dueño no conteste.', answer: 'otra', why: 'Sara siente; el dueño no contesta: conteste.' },
            { text: 'Estoy harto de lavar la ropa a mano.', answer: 'misma', why: 'Iván está harto e Iván lava: lavar.' },
            { text: 'Siento que tengas que lavar a mano.', answer: 'otra', why: 'Sara lo siente; Iván tiene que lavar: tengas.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra, sin mirar el diálogo: «¿Qué le sorprende a Iván? ¿Qué le molesta a Sara?». Tu alumno responde con «Le sorprende que…» y «Le molesta que…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Otra persona: que + subjuntivo. Tú mismo: infinitivo.',
      steps: [
        { title: 'La vida en el departamento · Life in the flat', blocks: [
          { kind: 'choice', items: [
            { context: 'Sara habla de los vecinos de arriba. (Sara talks about the upstairs neighbours.)', prompt: 'Me molesta que los vecinos ___ la música tan alta.', options: ['pongan', 'ponen', 'poner'], answer: 0, why: '«Me molesta que» + otras personas: subjuntivo. Poner → pongo → pongan.', en: 'It bothers me that the neighbours play their music so loud.' },
            { context: 'Iván es de Puebla y es su primer verano en la capital. (Iván’s first summer in the capital.)', prompt: 'A Iván le sorprende que ___ tanto por las tardes.', options: ['llover', 'llueva', 'llueve'], answer: 1, why: '«Le sorprende que» expresa una emoción: subjuntivo, llueva.', en: 'Iván is surprised that it rains so much in the afternoons.' },
            { context: 'Sara habla de su hermana. (Sara talks about her sister.)', prompt: 'Estoy encantada de que mi hermana ___ a vivir cerca.', options: ['venga', 'viene', 'venir'], answer: 0, why: 'Sara siente; su hermana viene: «encantada de que» + subjuntivo, venga.', en: 'I’m delighted that my sister is coming to live nearby.' },
            { context: 'Iván habla de su costumbre. (Iván talks about his habit.)', prompt: 'Me encanta ___ en la terraza los domingos.', options: ['desayunar', 'que yo desayune', 'desayuno'], answer: 0, why: 'Iván siente y él desayuna: misma persona, infinitivo.', en: 'I love having breakfast on the terrace on Sundays.' },
            { context: 'Bea encuentra una tienda de pan nueva. (Bea finds a new bakery.)', prompt: '¡Qué suerte que ___ una panadería tan buena en la esquina!', options: ['haber', 'hayan', 'haya'], answer: 2, why: '«¡Qué suerte que…!» + subjuntivo. Haya va siempre en singular.', en: 'How lucky that there’s such a good bakery on the corner!' },
          ] },
        ] },
        { title: '¿Qué forma va? · Which form goes here?', blocks: [
          { kind: 'classify', title: 'Decide la forma · Decide the form', categories: [
            { id: 'subj', label: 'que + SUBJUNTIVO', tone: 'teal' },
            { id: 'ind', label: 'porque + INDICATIVO', tone: 'orange' },
            { id: 'inf', label: 'INFINITIVO', tone: 'violet' },
          ], items: [
            { text: 'Nos preocupa que el edificio no ___ ascensor. (tener)', answer: 'subj', why: 'Emoción ante un hecho: tenga.' },
            { text: 'Iván está contento porque ___ cerca de su trabajo. (vivir)', answer: 'ind', why: '«Porque» da la causa como información: vive.' },
            { text: 'A Sara le da miedo ___ sola por el parque de noche. (caminar)', answer: 'inf', why: 'Sara siente y Sara camina: caminar.' },
            { text: '¡Qué rabia que la lavadora ___ otra vez rota! (estar)', answer: 'subj', why: 'Reacción con «¡qué rabia que!»: esté.' },
            { text: 'Siento ___ tarde: había mucho tráfico. (llegar)', answer: 'inf', why: 'Yo lo siento y yo llego tarde: llegar.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me alegra que Bea está contenta con su trabajo.', ok: false, options: ['Me alegra que Bea estar contenta con su trabajo.', 'Me alegra que Bea esté contenta con su trabajo.', 'Me alegra Bea está contenta con su trabajo.'], answer: 1, why: 'Emoción ante el estado de otra persona: subjuntivo, esté.' },
            { sentence: 'Nos molestan que el dueño no arregle la lavadora.', ok: false, options: ['Nos molestamos que el dueño no arregle la lavadora.', 'Nos molestan que el dueño no arregla la lavadora.', 'Nos molesta que el dueño no arregle la lavadora.'], answer: 2, why: 'Lo que molesta es «que el dueño no arregle…»: verbo en singular, molesta.' },
            { sentence: 'Estoy harto de que mis vecinos hagan fiestas todos los jueves.', ok: true, why: 'Correcta: «harto de que» + subjuntivo, hagan.' },
            { sentence: 'Siento que no puedes venir a la cena, Iván.', ok: false, options: ['Siento que no puedas venir a la cena, Iván.', 'Siento que no poder venir a la cena, Iván.', 'Siento de que no puedas venir a la cena, Iván.'], answer: 0, why: 'Aquí «siento» = lo lamento: subjuntivo, puedas. Y sin «de».' },
            { sentence: 'Me da pena que yo me vaya de la ciudad.', ok: false, options: ['Me da pena irme de la ciudad.', 'Me da pena que me voy de la ciudad.', 'Me da pena de irme de la ciudad.'], answer: 0, why: 'Yo siento y yo me voy: misma persona, infinitivo (irme).' },
            { sentence: 'Me sorprende que el edificio sea tan silencioso.', ok: true, why: 'Correcta: «me sorprende que» + subjuntivo, sea.' },
          ] },
        ] },
        { title: 'El chat del departamento · The flat group chat', blocks: [
          { kind: 'chat-fill', title: 'Lunes por la noche, en el chat «Depa 4B» · Monday night, in the flat chat', lines: [
            { who: 'Bea', text: '¡Chicos! El dueño por fin me contestó: mañana viene el técnico.' },
            { who: 'Sara', text: '¡Qué bien que el técnico ___ tan pronto!', options: ['vengan', 'venga', 'venir'], answer: 1, why: '«¡Qué bien que…!» + subjuntivo; el sujeto es «el técnico» (singular): venga.' },
            { who: 'Iván', text: 'Me alegra mucho. Pero me preocupa que la reparación ___ cara.', options: ['sea', 'es', 'ser'], answer: 0, why: '«Me preocupa que» + subjuntivo: sea.' },
            { who: 'Bea', text: 'Tranquilo, la paga él. Oigan, el sábado estoy libre. Me encanta ___ para ustedes. ¿Cena?', options: ['cocinar', 'que cocine', 'cocino'], answer: 0, why: 'Bea siente y Bea cocina: misma persona, infinitivo.' },
            { who: 'Sara', text: '¡Sí! Estoy encantada de que ___ un sábado libre.', options: ['tienes', 'tener', 'tengas'], answer: 2, why: '«Encantada de que» + otra persona (tú, Bea): subjuntivo, tengas.' },
            { who: 'Iván', text: 'Yo llevo el postre. ¡Qué pena que ___ tan pocos sábados juntos!', options: ['tener', 'tengamos', 'tenemos'], answer: 1, why: '«¡Qué pena que…!» + subjuntivo: tengamos.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Me', 'molesta', 'que', 'el', 'dueño', 'no', 'conteste'], accept: ['Me molesta que el dueño no conteste', 'Me molesta que no conteste el dueño'], en: 'It bothers me that the landlord doesn’t answer.' },
            { tiles: ['¡Qué', 'pena', 'que', 'te', 'vayas', 'en', 'junio!'], accept: ['¡Qué pena que te vayas en junio!'], en: 'What a shame that you’re leaving in June!' },
            { tiles: ['Nos', 'alegra', 'que', 'Iván', 'se', 'quede', 'todo', 'el', 'año'], accept: ['Nos alegra que Iván se quede todo el año', 'Nos alegra que se quede Iván todo el año'], en: 'We’re glad that Iván is staying the whole year.' },
            { tiles: ['Estoy', 'harta', 'de', 'que', 'la', 'lavadora', 'no', 'funcione'], accept: ['Estoy harta de que la lavadora no funcione'], en: 'I’m fed up with the washing machine not working.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Reacciona · React', items: [
            { prompt: 'Bea trabaja de noche. (→ Me da pena)', instruction: 'Reacciona con emoción. Empieza con «Me da pena que».', accept: ['Me da pena que Bea trabaje de noche'] },
            { prompt: 'Los vecinos hacen ruido los domingos. (→ Estoy harto)', instruction: 'Reacciona con «Estoy harto de que» (o «harta»).', accept: ['Estoy harto de que los vecinos hagan ruido los domingos', 'Estoy harta de que los vecinos hagan ruido los domingos'] },
            { prompt: 'Iván lava los platos todos los días. (→ Me encanta)', instruction: 'Reacciona. Empieza con «Me encanta que».', accept: ['Me encanta que Iván lave los platos todos los días'] },
            { prompt: 'La tienda de la esquina abre los domingos. (→ ¡Qué suerte!)', instruction: 'Reacciona rápido. Empieza con «¡Qué suerte que».', accept: ['Qué suerte que la tienda de la esquina abra los domingos', 'Qué suerte que los domingos abra la tienda de la esquina'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno reacciona a tres hechos reales de su casa o su barrio: uno con «me alegra que», uno con «estoy harto/a de que» y uno con «¡qué raro que…!».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Bea', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Bea responde al grupo · Bea answers the group', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada emoción + «que» (me alegra que, me molesta que…) y da una palmada con cada «¡qué… que!». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca las emociones con «que» y las reacciones con «¡qué… que!». Bea es mexicana y habla a Sara e Iván con «ustedes». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Bea', channel: 'MENSAJE DE VOZ · CHAT «DEPA 4B»', src: '/audio/grammar-live/392.mp3',
            before: 'Bea sale del hospital y escucha los audios de la reunión del domingo. Manda un audio al chat. ¿Sobre qué crees que reacciona? ¿Tiene ella alguna noticia? (Bea reacts to the news from the flat meeting. What do you think she says? Does she have news too?)',
            gist: { prompt: '¿Qué hace Bea en el audio?', options: ['Reacciona a las noticias de la casa y cuenta una noticia suya.', 'Se queja de Iván y de Sara.', 'Explica cómo arreglar la lavadora.'], answer: 0, why: 'Reacciona a lo de Iván, la lavadora y el alquiler, y después dice: «Ahora, mi noticia».', en: 'What does Bea do in the voice message?' },
            details: [
              { prompt: '¿Por qué le sorprende a Bea que el dueño no conteste?', options: ['Porque ella le habló ayer.', 'Porque siempre responde rápido.', 'Porque está de viaje.'], answer: 1, why: '«Me sorprende, porque siempre responde rápido».', en: 'Why is Bea surprised that the landlord isn’t answering?' },
              { prompt: '¿Cuál es la noticia de Bea?', options: ['Deja de trabajar de noche en julio.', 'Se va de vacaciones a Guadalajara.', 'Le ofrecieron trabajo en Guadalajara y empieza en junio.'], answer: 2, why: '«Me ofrecieron un trabajo en un hospital de Guadalajara, y empiezo en junio».', en: 'What is Bea’s news?' },
              { prompt: '¿Por qué se ven tan poco?', options: ['Porque Iván viaja mucho.', 'Porque Sara estudia por las noches.', 'Por los turnos de noche de Bea.'], answer: 2, why: '«Siento que nos veamos tan poco estos meses, con mis turnos de noche».', en: 'Why do they see each other so little?' },
              { prompt: '¿Qué propone Bea?', options: ['Llamar al dueño el sábado.', 'Buscar otro departamento.', 'Cocinar algo juntos el sábado.'], answer: 2, why: '«El sábado estoy libre: ¿cocinamos algo juntos?».', en: 'What does Bea suggest?' },
            ],
            transcript: 'Hola, chicos, soy Bea. Acabo de salir del hospital y ya escuché sus audios de la reunión. Primero, Iván: ¡[[qué bien que te quedes|blue]] con nosotras todo el año! [[Me alegra mucho que estés|teal]] a gusto en el departamento. Lo de la lavadora, en cambio, es increíble. [[Me molesta muchísimo que el dueño no conteste|teal]], y me sorprende, porque siempre responde rápido. ¡[[Qué raro que no diga|blue]] nada! Y sí, a mí también [[me preocupa que suba|teal]] el alquiler. Ahora, mi noticia: me ofrecieron un trabajo en un hospital de Guadalajara, y empiezo en junio. Estoy feliz, pero [[me da mucha pena dejarlos|violet]]. [[Siento que nos veamos|teal]] tan poco estos meses, con mis turnos de noche. El sábado estoy libre: ¿cocinamos algo juntos? Bueno, me voy a dormir. ¡Besos!',
            reply: { teacher: 'Tú eres Bea. Tu alumno es Sara o Iván y responde al audio con tres reacciones: una alegría («Me alegra que…»), una pena («Me da pena que…» o «¡Qué pena que…!») y una respuesta al plan del sábado.', self: 'Responde a Bea en voz alta como Sara o Iván: una alegría, una pena y una respuesta al plan del sábado. (Answer Bea: one joy, one sadness, and a reply about Saturday.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Cómo te sienta?', coach: 'Reacciona: alegría, sorpresa, pena, rabia. React!',
      steps: [
        { title: '¿Qué sientes? · How do you feel?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con su experiencia real. Cuando falla el modo o el singular, tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa las frases de apoyo. (Read, answer aloud, use the support phrases.)' } },
          { kind: 'talk', cards: [
            { q: '¿Vives con otras personas (familia, pareja, compañeros de piso)? ¿Qué te gusta y qué te molesta de la convivencia? · Do you live with other people? What do you like and what bothers you about living together?', followUps: ['¿Qué te molesta de tus vecinos? (What bothers you about your neighbours?)', '¿Y a ellos qué les molesta de ti? (And what bothers them about you?)'], phrases: ['[[Me gusta que|teal]] mi pareja / mi familia…', '[[Me molesta que|teal]] alguien deje…', '[[No me gusta que|teal]] los vecinos…'], hint: 'Otra persona: que + subjuntivo. El verbo de emoción, en singular: me molesta.', example: 'Vivo con mi hermano. Me gusta que cocine los fines de semana, pero me molesta que deje sus zapatos en el pasillo. Y a él le molesta que yo ponga la música alta.', next: 'Ahora, noticias.' },
            { q: 'Tu compañero te cuenta noticias: «Me caso en mayo», «No puedo ir a tu fiesta», «Mi jefa me sube el sueldo», «Me mudo a otro país». Reacciona rápido. · Your partner tells you some news. React quickly.', followUps: ['¿Qué más le dices después? (What else do you say next?)', '¿Cuál es la noticia más difícil de responder? (Which news is hardest to answer?)'], phrases: ['¡[[Qué bien que|blue]]…!', '¡[[Qué pena que|blue]]…!', '[[Siento que|teal]] no puedas…'], hint: 'Repite el verbo de la noticia en subjuntivo: me caso → te cases; puedo → puedas.', example: '¡Qué bien que te cases! ¡Felicidades! … ¡Qué pena que no puedas venir a mi fiesta! … ¡Qué bien que tu jefa te suba el sueldo! … Me da pena que te mudes, pero me alegra que tengas una oportunidad así.', teacher: 'Tú dices las noticias una a una, con cara de emoción, y tu alumno reacciona sin mirar el ejemplo.', next: 'Ahora, las preocupaciones.' },
            { q: '¿Qué te preocupa de tu ciudad o de tu país? ¿Y qué te da miedo? · What worries you about your city or country? And what scares you?', followUps: ['¿Qué te sorprende de tu ciudad? (What surprises you about your city?)', '¿Qué cambio te alegra? (Which change makes you happy?)'], phrases: ['[[Me preocupa que|teal]] los alquileres…', '[[Me da miedo que|teal]]…', '[[Me alegra que|teal]] haya / abran…'], hint: 'Preocupa, da miedo, alegra + que + subjuntivo: suban, haya, abran.', example: 'Me preocupa que los alquileres suban tanto cada año. Me da un poco de miedo que haya tanto tráfico cerca de los colegios. Pero me alegra que abran más carriles para bicicletas.', next: 'Ahora, las quejas.' },
            { q: '¿De qué estás harto o harta? Piensa en el transporte, el trabajo o las redes sociales. · What are you fed up with? Think of transport, work or social media.', followUps: ['¿Y de qué estás cansado tú de hacer? (And what are you tired of doing yourself?)', '¿Qué cambio te gustaría? (What change would you like?)'], phrases: ['[[Estoy harto/a de que|teal]] el metro…', '[[Estoy cansado/a de que|teal]] la gente…', '[[Estoy harto/a de|violet]] + infinitivo…'], hint: 'Otra persona o cosa: de que + subjuntivo. Tú mismo: de + infinitivo.', example: 'Estoy harta de que el autobús llegue tarde todas las mañanas. Y estoy cansada de que la gente hable por teléfono tan alto. También estoy harta de esperar veinte minutos en la parada.', next: 'Ahora, una situación.' },
            { q: 'Ahora tú eres Sara. Bea te cuenta: «Me voy a Guadalajara en junio». ¿Qué le dices? · Now you are Sara. Bea tells you she’s moving to Guadalajara in June. What do you say?', followUps: ['¿Qué te da pena? (What makes you sad?)', '¿Qué te alegra de su nuevo trabajo? (What makes you happy about her new job?)'], phrases: ['[[Me alegro de que|teal]] tengas…', '[[Me da mucha pena que|teal]] te vayas…', '¡[[Qué bien que|blue]] ya no trabajes de noche!'], hint: 'Mezcla alegría y pena, siempre hacia Bea (tú): tengas, te vayas, trabajes.', example: '¡Felicidades, Bea! Me alegro de que tengas un trabajo tan bueno. Me da mucha pena que te vayas, la verdad. ¡Qué bien que ya no trabajes de noche!', teacher: 'Tú eres Bea y respondes con tus dudas («Pero me da miedo cambiar de ciudad…»). Tu alumno reacciona otra vez.' },
            { q: '¿Qué te sorprende de una cultura que conoces (un país donde vives o que visitaste)? · What surprises you about a culture you know?', followUps: ['¿Qué te encanta de esa cultura? (What do you love about it?)', '¿Qué es raro para ti? (What seems strange to you?)'], phrases: ['[[Me sorprende que|teal]] la gente…', '[[Me encanta que|teal]]…', '¡[[Qué raro que|blue]]…!'], hint: 'Sorprende, encanta + que + subjuntivo: coma, haya, sea.', example: 'Me sorprende que en México la gente coma tan tarde, a las tres o a las cuatro. Me encanta que haya un mercado en cada barrio. ¡Y qué bien que la gente sea tan amable con los extranjeros!' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno cuenta noticias o hace las preguntas («¿Qué te molesta de…?») y tú reaccionas. Tu alumno escucha si usas el subjuntivo y el singular.', self: 'Ahora inventa tres noticias en voz alta y reacciona tú mismo con «¡Qué bien que…!», «¡Qué pena que…!» y «Me sorprende que…». (Make up three pieces of news and react to them.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Bea', coach: 'Alegría, pena y planes. Joy, sadness and plans.',
      steps: [
        { title: 'Responde a una noticia · Answer some news', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada reacción: ¿otra persona (que + subjuntivo), misma persona (infinitivo) o información (porque + indicativo)? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada reacción: ¿otra persona o misma persona? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje con emociones · A message with emotions', situation: 'Eres Sara o Iván. Bea acaba de contar que se va a Guadalajara en junio. Escríbele un mensaje largo por el chat. (También puedes escribir a un amigo real que tiene una noticia importante: un trabajo, una mudanza, una boda.) · You are Sara or Iván. Write Bea a long chat message about her news, or write to a real friend with big news.', task: [
            'Felicítala y reacciona con alegría: me alegra que, me alegro de que, estoy contento/a de que. (Congratulate her and react with joy.)',
            'Expresa una pena o una preocupación: me da pena que, me preocupa que, siento que. (Express sadness or worry.)',
            'Cuenta una noticia de la casa y reacciona con «¡Qué bien / qué rabia / qué raro que…!». (Share flat news and react to it.)',
            'Di algo que te encanta hacer con ella con «me encanta» + infinitivo. (Say something you love doing with her.)',
            'Propón un plan y despídete. (Suggest a plan and say goodbye.)',
          ], starters: ['¡Bea! Acabo de escuchar tu audio.', '¡Felicidades!', 'Me alegra muchísimo que…', 'Me da mucha pena que…', '¡Qué bien que…!', 'Me encanta…', 'Un abrazo,'],
            words: ['me alegra que', 'me alegro de que', 'estoy contento/a de que', 'me da pena que', 'me preocupa que', 'me sorprende que', 'siento que', 'estoy harto/a de que', '¡qué bien que…!', '¡qué pena que…!', '¡qué raro que…!', 'me encanta + infinitivo'],
            model: '¡Bea! Acabo de escuchar tu audio. ¡Felicidades por el trabajo en Guadalajara! [[Me alegra muchísimo que tengas|teal]] un puesto de día, sin turnos de noche. Iván y yo [[estamos muy contentos de que empieces|teal]] una etapa nueva, pero, la verdad, [[me da mucha pena que te vayas|teal]] en junio. Una noticia de la casa: el técnico vino hoy y la lavadora ya funciona. ¡[[Qué bien que el dueño pague|blue]] la reparación! Es la primera vez. [[Me encanta cocinar|violet]] contigo, así que el sábado preparamos tu pozole favorito, ¿va? Y en mayo, antes de tu mudanza, hacemos una fiesta de despedida. Un abrazo fuerte, Sara.',
            minWords: 70,
            checks: [
              { label: 'Una emoción + que (emotion + que)', pattern: '(?<!\\p{L})(?:me|te|le|nos|les)\\s+(?:alegra|molesta|sorprende|preocupa|encanta|gusta|da\\s+(?:mucha\\s+|un\\s+poco\\s+de\\s+)?(?:pena|miedo|rabia))\\s+(?:mucho\\s+|muchísimo\\s+)?que(?!\\p{L})', tip: 'Reacciona a lo que hace otra persona: «Me alegra que tengas un trabajo nuevo», «Me da pena que te vayas».' },
              { label: 'Una reacción rápida con ¡qué… que! (quick reaction)', pattern: '(?<!\\p{L})qué\\s+(?:bien|pena|raro|suerte|rabia|lástima|alegría|ilusión)\\s+que(?!\\p{L})', tip: 'Reacciona a una noticia: «¡Qué bien que…!», «¡Qué pena que…!», «¡Qué raro que…!».' },
              { label: 'Me encanta / me gusta + infinitivo (yourself)', pattern: '(?<!\\p{L})me\\s+(?:encanta|gusta)\\s+(?:mucho\\s+)?\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Habla de algo que te gusta hacer a ti: «Me encanta cocinar contigo».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?<!(?:más|menos|tan)\\s)(?:hart[oa]s?|content[oa]s?|encantad[oa]s?|cansad[oa]s?)\\s+que(?!\\p{L})', why: 'Con estar + adjetivo, falta «de»: **estoy harta de que…**, **estamos contentos de que…**.' },
              { pattern: '(?<!\\p{L})(?:alegra|molesta|preocupa|sorprende|encanta|pena)\\s+(?:mucho\\s+|muchísimo\\s+)?que\\s+(?:estás|tienes|vienes|puedes|eres|vas|te\\s+vas|hay|está|tiene|es)(?!\\p{L})', why: 'Después de una emoción + «que» va el subjuntivo: **me alegra que tengas**, **me da pena que te vayas**, **que haya**.' },
              { pattern: '(?<!\\p{L})me\\s+(?:alegran|molestan|preocupan|sorprenden)\\s+que(?!\\p{L})', why: 'El verbo de emoción va en singular: **me molesta que** los vecinos hagan ruido.' },
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
            { tone: 'teal', label: 'EMOCIÓN + QUE + SUBJUNTIVO', formula: 'me / te / le / nos / les + alegra / molesta / sorprende / preocupa / da pena + que + subjuntivo', example: 'Me molesta que los vecinos hagan ruido.', caption: 'como gustar: el verbo de emoción, en singular', en: 'like gustar: the emotion verb stays singular' },
            { tone: 'teal', label: 'ESTAR + ADJETIVO + DE QUE · SIENTO QUE', formula: 'estoy harto / contento / encantado de que · me alegro de que · siento que + subjuntivo', example: 'Estoy harta de que la lavadora no funcione.', caption: 'con estar + adjetivo, no olvides «de»', en: 'with estar + adjective, don’t forget “de”' },
            { tone: 'blue', label: '¡QUÉ + PALABRA + QUE!', formula: '¡qué bien / qué pena / qué raro / qué suerte + que + subjuntivo!', example: '¡Qué pena que te vayas en junio!', caption: 'la reacción rápida a una noticia', en: 'the quick reaction to some news' },
            { tone: 'violet', label: 'MISMA PERSONA · INFINITIVO', formula: 'me encanta / me da pena / estoy harto de + infinitivo', example: 'Me alegra verte. Estoy harto de esperar.', caption: 'yo siento y yo hago: sin «que» (clase 095)', en: 'I feel it and I do it: no “que” (class 095)' },
            { tone: 'orange', label: 'INFORMACIÓN · PORQUE + INDICATIVO', formula: 'estoy contento / triste + porque + indicativo', example: 'Estoy contento porque aquí pago menos.', caption: 'das la causa como dato', en: 'you give the cause as information' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿**quién siente** y **quién hace**? Si son personas distintas, o es algo que pasa: **que + subjuntivo** («Me alegra que **vengas**»). Si es la misma persona: **infinitivo** («Me alegra **venir**»). Y si solo informas de la causa: **porque + indicativo**.', en: 'Ask yourself: who feels it and who does it? If they are different people, or it is something that happens: que + subjunctive. If it is the same person: infinitive. And if you only report the cause: porque + indicative.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Me sorprende que Lucía no ___ nada de la fiesta.', options: ['sepa', 'sabe', 'saber'], answer: 0, why: '«Me sorprende que» + otra persona: subjuntivo. Saber → sepa (irregular).', en: 'I’m surprised Lucía doesn’t know anything about the party.' },
            { prompt: 'Mis padres están contentos de que yo ___ un trabajo nuevo.', options: ['tengo', 'tener', 'tenga'], answer: 2, why: 'Ellos sienten; yo tengo el trabajo: «contentos de que» + subjuntivo, tenga.', en: 'My parents are happy that I have a new job.' },
            { prompt: 'Me alegra ___ aquí con ustedes.', options: ['estar', 'que esté', 'que estoy'], answer: 0, why: 'Yo siento y yo estoy: misma persona, infinitivo.', en: 'I’m glad to be here with you.' },
            { prompt: 'Estoy cansado porque mi hijo ___ a las seis todos los días.', options: ['se despierta', 'se despierte', 'despertarse'], answer: 0, why: 'Con «porque» das la causa como información: indicativo, se despierta.', en: 'I’m tired because my son wakes up at six every day.' },
            { prompt: 'A mis vecinos les ___ que mi perro ladre por la noche.', options: ['molesta', 'molestan', 'molestamos'], answer: 0, why: 'Lo que molesta es «que mi perro ladre»: singular, molesta. «Les» dice quién siente.', en: 'It bothers my neighbours that my dog barks at night.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la oficina.', blocks: [
          { kind: 'lead', text: 'Sara trabaja en un estudio de diseño. Esta semana hay muchas noticias en la oficina. Transforma lo que pasa en reacciones.', en: 'Sara works at a design studio. There is a lot of news at the office this week. Turn what is happening into reactions.' },
          { kind: 'rewrite', title: 'En la oficina · At the office', items: [
            { prompt: 'Marta se jubila en diciembre. (→ Me da pena)', instruction: 'Reacciona. Empieza con «Me da pena que».', accept: ['Me da pena que Marta se jubile en diciembre'] },
            { prompt: 'El jefe no contesta los correos. (→ Nos molesta)', instruction: 'Reacciona en nombre del equipo. Empieza con «Nos molesta que».', accept: ['Nos molesta que el jefe no conteste los correos'] },
            { prompt: 'Los compañeros nuevos están contentos. (→ Me alegra)', instruction: 'Reacciona. Empieza con «Me alegra que».', accept: ['Me alegra que los compañeros nuevos estén contentos'] },
          ] },
        ] },
        { title: 'Ampliación · Pasado reciente, registro formal y variedades (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'Cuando la emoción es por algo que **ya pasó**, oirás el perfecto de subjuntivo: «Me alegra que **hayas venido**» (I’m glad you came), «Siento que **hayas tenido** un mal día». Hoy solo lo reconoces; lo estudias en la clase 097. En textos formales es frecuente **lamentar**: «Lamentamos que el servicio no **esté** disponible».', en: 'When the emotion is about something that has already happened, you will hear the perfect subjunctive: “Me alegra que hayas venido” (I’m glad you came). Today you only recognise it; you study it in class 097. In formal texts “lamentar” is common: “We regret that the service is not available.”' },
          { kind: 'tip', icon: '🌎', title: 'Rabia y coraje · Anger in different places', text: 'Para el enfado, en España es muy frecuente «**me da rabia que**…», y en México «**me da coraje que**…»: «Me da coraje que el dueño no conteste». La estructura es la misma: que + subjuntivo.', en: 'For anger, “me da rabia que…” is very common in Spain, and “me da coraje que…” in Mexico. The structure is the same: que + subjunctive.' },
          { kind: 'choice', title: 'Reconoce y elige · Recognise and choose', items: [
            { prompt: 'Bea a Iván: «Me alegra que hayas venido a mi despedida». ¿Cuándo vino Iván?', options: ['Va a venir mañana.', 'Ya vino: está en la fiesta.', 'No va a venir.'], answer: 1, why: '«Hayas venido» (perfecto de subjuntivo) presenta la llegada como algo que ya pasó.', en: 'Bea to Iván: “I’m glad you’ve come to my farewell party.” When did Iván come?' },
            { prompt: 'Correo de una empresa: «Lamentamos que el pedido ___ con retraso».', options: ['llega', 'llegue', 'llegar'], answer: 1, why: '«Lamentamos que» = sentimos que, en registro formal: subjuntivo, llegue.', en: 'Company email: “We regret that the order is arriving late.”' },
            { prompt: 'Iván, en Ciudad de México: «Me da coraje que el metro ___ tan lleno».', options: ['vaya', 'va', 'ir'], answer: 0, why: '«Me da coraje que» (México: me enfada) + subjuntivo: vaya.', en: 'Iván, in Mexico City: “It makes me angry that the metro is so packed.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Basta con reconocer «hayas venido»; la producción del perfecto de subjuntivo llega en la clase 097.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 093 · Opinión afirmativa frente a opinión negada', text: 'Ya reaccionas con emoción: «Me alegra que estés aquí», «¡Qué pena que te vayas!». En la clase 093 pasas de lo que sientes a lo que **piensas**: «Creo que el alquiler **va** a subir» frente a «No creo que **suba**». Es el paso natural: otra vez indicativo o subjuntivo después de «que», ahora según si afirmas o niegas una opinión.', en: 'You can now react with emotion: “I’m glad you’re here”, “What a shame you’re leaving!”. In class 093 you move from what you feel to what you think: “Creo que el alquiler va a subir” versus “No creo que suba”. It is the natural next step: again indicative or subjunctive after “que”, now depending on whether you affirm or deny an opinion.', href: '/gramatica/opinion-afirmativa-frente-a-opinion-negada', label: 'Ir a la clase 093' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te alegra de tu español ahora? ¿Y qué te molesta todavía?». Respuesta esperada: «Me alegra que…» / «Me molesta que…» + subjuntivo, o infinitivo si es la misma persona. Tarea: escribir el mensaje de Escribir a un amigo real.' },
        ] },
      ],
    },
  ],
};
