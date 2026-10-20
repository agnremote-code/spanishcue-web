import type { LiveLesson } from '../types';

/**
 * Lesson 393 · B1 · Opinión afirmativa frente a opinión negada (course unit G093).
 * Builds on G088 (present subjunctive forms), G089–G090 (que + subjunctive after
 * wishes and advice), G091 (valuations; «está claro que» + indicative,
 * «me parece que» vs «me parece bien que») and G092 (emotions). Content: creo /
 * pienso / me parece / opino / estoy seguro de que + indicative (you state your
 * opinion) vs no creo / no pienso / no me parece / no estoy seguro de que +
 * subjunctive (you do not assert it); «creo que no» + indicative vs «no creo
 * que» + subjunctive; questions «¿Crees que…?» (indicative as the normal
 * choice; «¿No crees que…?» + indicative to ask for agreement; subjunctive after
 * «¿Crees que…?» recognised as a sign of doubt, frequent in Mexico and other
 * areas of the Americas); «no es que» + subjunctive, «es que» + indicative to
 * correct an interpretation; debate formulas (estoy de acuerdo contigo / en que /
 * con que, yo no lo veo así, tienes razón); dequeísmo and «estoy seguro de que».
 * Ampliación: «no pienso + infinitivo» (= I don't intend to), «no creas que»
 * (negative imperative, recognition) and «¿crees que + subjuntivo?».
 * Possibility and doubt (quizás, es posible que, dudo que) are left for G094.
 * Scene: the residents' association of the Mercado neighbourhood debates
 * closing calle del Mercado to cars. Inés Molina chairs; Paula Ríos (teacher)
 * is in favour; Ramiro Lara (hardware shop owner) has doubts. In the voice
 * message Ramiro (Mexican voice, tú) explains his position to Inés.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 393,
  level: 'B1',
  title: 'Opinión afirmativa frente a opinión negada',
  subtitle: 'Opinar con «creo que» + indicativo, negar con «no creo que» + subjuntivo, corregir con «no es que» y debatir con respeto.',
  legend: [
    { tone: 'blue', label: 'OPINIÓN AFIRMADA · creo / pienso / me parece / estoy seguro de que + indicativo' },
    { tone: 'orange', label: 'OPINIÓN NEGADA · no creo / no me parece / no estoy seguro de que + subjuntivo' },
    { tone: 'violet', label: 'PREGUNTAR Y CORREGIR · ¿crees que…? · no es que + subjuntivo' },
    { tone: 'teal', label: 'DEBATIR · estoy de acuerdo, yo no lo veo así (agree / disagree)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Creo que… / No creo que…', coach: '¿Afirmas tu opinión o la niegas? Are you asserting or denying?',
      steps: [
        { title: 'Una reunión de vecinos · A residents’ meeting', blocks: [
          { kind: 'lead', text: 'En el barrio del Mercado hay una propuesta: cerrar la calle del Mercado a los coches. Inés Molina, la presidenta de la asociación de vecinos, organiza una reunión. Paula Ríos, profesora, dice: «**Creo que es** una idea estupenda». Ramiro Lara, que tiene una ferretería en esa calle, responde: «Pues yo **no creo que sea** una buena idea». Hoy aprendes por qué cambia el verbo.', en: 'In the Mercado neighbourhood there is a proposal: to close calle del Mercado to cars. Inés Molina, chair of the residents’ association, organises a meeting. Paula Ríos, a teacher, says: “I think it’s a great idea.” Ramiro Lara, who runs a hardware shop on that street, replies: “Well, I don’t think it’s a good idea.” Today you learn why the verb changes.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Paula y tu alumno lee la de Ramiro. Después tu alumno dice qué verbo cambia: «es» o «sea».', self: 'Lee las dos frases en voz alta. ¿Qué verbo cambia? ¿Por qué? (Which verb changes, and why?)' } },
          { kind: 'compare', title: 'Dos opiniones · Two opinions', columns: [
            { tone: 'blue', label: 'AFIRMAS · indicativo', sentence: '[[Creo que es|blue]] una idea estupenda.', idea: 'Paula presenta su opinión como verdadera para ella. Después de «creo que», indicativo: es.', en: 'I think it’s a great idea. (she asserts it)' },
            { tone: 'orange', label: 'NIEGAS · subjuntivo', sentence: '[[No creo que sea|orange]] una buena idea.', idea: 'Ramiro no afirma que sea buena idea. Con «no creo que», subjuntivo: sea.', en: 'I don’t think it’s a good idea. (he doesn’t assert it)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Creo que es una idea estupenda», el verbo «es» está en…', options: ['indicativo, porque Paula afirma su opinión.', 'infinitivo.', 'subjuntivo, porque hay «que».'], answer: 0, why: '«Creo que» afirma una opinión: indicativo. La palabra «que» sola no decide el modo.', en: 'In “Creo que es una idea estupenda”, the verb “es” is in…' },
            { prompt: '¿Qué cambia en la frase de Ramiro?', options: ['Ramiro habla del pasado.', 'El «no» delante de «creo»: por eso «sea».', 'Ramiro habla de otra persona.'], answer: 1, why: 'La negación de «creer» hace que el verbo siguiente vaya en subjuntivo: no creo que sea.', en: 'What changes in Ramiro’s sentence?' },
          ] },
        ] },
        { title: 'Afirmar tu opinión · Asserting your opinion', mascot: '/brand/mascot/studying.webp', coach: 'Creo que… + indicativo. I think… + indicative.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'OPINIÓN AFIRMADA + INDICATIVO', question: '¿Dices lo que piensas, sin «no» delante?', en: 'Are you saying what you think, with no “no” in front?', formula: ['creo / pienso / opino + que + indicativo', 'me parece + que + indicativo', 'estoy seguro / segura + de que + indicativo'],
            meaning: 'Con estos verbos **afirmas** algo: es tu opinión, pero la presentas como verdadera. Por eso el verbo que va después de «que» está en **indicativo**, en el tiempo que necesites: presente, pasado o futuro. Ojo: «me parece que» es una opinión (indicativo); «me parece **bien** que» es una valoración (subjuntivo, clase 091).',
            examples: [
              { es: '[[Pienso que la calle es|blue]] demasiado estrecha para tantos coches.', en: 'I think the street is too narrow for so many cars.' },
              { es: '[[Me parece que hay|blue]] pocos árboles en el barrio.', en: 'I think there are few trees in the neighbourhood.' },
              { es: 'Paula [[opina que los niños necesitan|blue]] más espacio.', en: 'Paula thinks children need more space.' },
              { es: '[[Estoy segura de que la gente va|blue]] a pasear más.', en: 'I’m sure people are going to walk around more.' },
            ],
            note: '**Estoy seguro de que**: con «estar seguro» va «de» (estoy seguro de algo). Con «creer», «pensar» y «opinar», no: creo que, pienso que.' },
          { kind: 'table', title: 'Afirmar y negar · Asserting and denying', head: ['AFIRMATIVO + indicativo', 'NEGATIVO + subjuntivo'], rows: [
            ['[[Creo que la idea es|blue]] buena.', '[[No creo que la idea sea|orange]] buena.'],
            ['[[Pienso que tienen|blue]] razón.', '[[No pienso que tengan|orange]] razón.'],
            ['[[Me parece que hay|blue]] mucho ruido.', '[[No me parece que haya|orange]] mucho ruido.'],
            ['[[Estoy seguro de que va|blue]] a funcionar.', '[[No estoy seguro de que vaya|orange]] a funcionar.'],
            ['[[Opino que es|blue]] pronto para votar.', '«No opino que» casi no se usa: mejor «[[no creo que sea|orange]] pronto».'],
          ], note: '«No pienso que…» existe, pero es menos frecuente que «no creo que…». (“No creo que” is the most common way to deny an opinion.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Creo que el mercado ___ más clientes los sábados.', options: ['tenga', 'tiene', 'tener'], answer: 1, why: '«Creo que» afirma una opinión: indicativo, tiene.', en: 'I think the market gets more customers on Saturdays.' },
            { prompt: 'Me parece que Ramiro ___ un poco preocupado.', options: ['está', 'esté', 'estar'], answer: 0, why: '«Me parece que» (sin bien / mal) es una opinión: indicativo, está.', en: 'I think Ramiro is a bit worried.' },
            { prompt: 'Estoy segura ___ los vecinos van a votar a favor.', options: ['en que', 'que', 'de que'], answer: 2, why: '«Estar seguro» lleva «de»: estoy segura de que.', en: 'I’m sure the residents are going to vote in favour.' },
          ] },
        ] },
        { title: 'Negar tu opinión · Denying an opinion', mascot: '/brand/mascot/standing.webp', coach: 'No creo que… + subjuntivo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'OPINIÓN NEGADA + SUBJUNTIVO', question: '¿Hay un «no» delante de creo, pienso, me parece o estoy seguro?', en: 'Is there a “no” in front of creo, pienso, me parece or estoy seguro?', formula: ['no creo / no pienso + que + subjuntivo', 'no me parece + que + subjuntivo', 'no estoy seguro / segura + de que + subjuntivo'],
            meaning: 'Cuando niegas el verbo de opinión, **no afirmas** lo que viene después: lo pones en duda o lo rechazas. Por eso el verbo después de «que» va en **presente de subjuntivo** (las formas de la clase 088). Funciona también con el mismo sujeto: «No creo que **pueda** ir a la reunión» (I don’t think I can go).',
            examples: [
              { es: '[[No creo que el ayuntamiento quiera|orange]] gastar dinero en esto.', en: 'I don’t think the city council wants to spend money on this.' },
              { es: '[[No me parece que la calle sea|orange]] peligrosa.', en: 'I don’t think the street is dangerous.' },
              { es: '[[No estoy seguro de que los vecinos estén|orange]] informados.', en: 'I’m not sure the residents are informed.' },
            ],
            note: 'Con «no creo que» lo normal es el subjuntivo. A veces oirás el indicativo en la lengua hablada, con matices que no necesitas ahora: tú usa el subjuntivo.' },
          { kind: 'compare', title: '¿Dónde está el «no»? · Where is the “no”?', columns: [
            { tone: 'blue', label: 'creo que NO + indicativo', sentence: '[[Creo que no es|blue]] el mejor momento.', idea: 'Afirmas una opinión negativa. El «no» va con el segundo verbo: indicativo.', en: 'I think it isn’t the best time.' },
            { tone: 'orange', label: 'NO creo que + subjuntivo', sentence: '[[No creo que sea|orange]] el mejor momento.', idea: 'Niegas el verbo de opinión: subjuntivo. Es la forma más frecuente y más suave.', en: 'I don’t think it’s the best time.' },
          ] },
          { kind: 'table', title: 'Recuerda las formas · Remember the forms (clase 088)', head: ['Infinitivo', 'yo', 'tú', 'él / ella', 'ellos / ellas'], rows: [
            ['ser', 'sea', 'seas', '**sea**', 'sean'],
            ['estar', 'esté', 'estés', 'esté', '**estén**'],
            ['haber', '—', '—', '**haya**', '—'],
            ['tener (tengo)', 'tenga', 'tengas', 'tenga', '**tengan**'],
            ['ir', 'vaya', 'vayas', '**vaya**', 'vayan'],
            ['poder', '**pueda**', 'puedas', 'pueda', 'puedan'],
          ], note: '«Haya» es la forma de «hay»: no me parece que haya mucho tráfico.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No creo que el proyecto ___ muy caro.', options: ['sea', 'es', 'ser'], answer: 0, why: '«No creo que»: niegas la opinión, subjuntivo, sea.', en: 'I don’t think the project is very expensive.' },
            { prompt: 'Creo que no ___ bastante aparcamiento.', options: ['haber', 'haya', 'hay'], answer: 2, why: 'Aquí «creo» es afirmativo; el «no» va con el segundo verbo: indicativo, hay.', en: 'I think there isn’t enough parking.' },
            { prompt: 'No estoy seguro de que Paula ___ razón.', options: ['tener', 'tenga', 'tiene'], answer: 1, why: '«No estoy seguro de que»: subjuntivo, tenga.', en: 'I’m not sure Paula is right.' },
          ] },
        ] },
        { title: 'Preguntar y corregir · Asking and correcting', mascot: '/brand/mascot/speaking.webp', coach: '¿Crees que…? No es que…, es que…', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PREGUNTAR Y CORREGIR', question: '¿Preguntas la opinión de otra persona o corriges lo que ha entendido?', en: 'Are you asking someone’s opinion or correcting what they understood?', formula: ['¿crees / piensas que + indicativo? (pregunta normal)', '¿no crees que + indicativo? (buscas acuerdo)', 'no es que + subjuntivo, es que + indicativo'],
            meaning: 'En una pregunta normal, después de «¿crees que…?» va el **indicativo**. Con «**¿no crees que…?**» no niegas nada: pides al otro que esté de acuerdo contigo, y también va el **indicativo** (es una excepción a la regla del «no»). Para **corregir** una interpretación usa «**no es que** + subjuntivo»: rechazas esa idea; después das la razón verdadera con «**es que** + indicativo».',
            examples: [
              { es: '[[¿Crees que los vecinos van|violet]] a votar a favor?', en: 'Do you think the residents are going to vote in favour?' },
              { es: '[[¿No crees que es|violet]] mejor probar unos meses?', en: 'Don’t you think it’s better to try it for a few months?' },
              { es: '[[No es que Ramiro esté|violet]] en contra, es que tiene miedo de perder clientes.', en: 'It’s not that Ramiro is against it; it’s that he’s afraid of losing customers.' },
            ] },
          { kind: 'tip', icon: '🌎', title: '«¿Crees que venga?»', text: 'En México y en otras zonas de América es frecuente oír el subjuntivo en preguntas: «¿Crees que **venga** Ramiro?». Así quien pregunta muestra que tiene dudas. Es correcto, pero no es obligatorio: el indicativo («¿Crees que **viene**?») se usa en todas partes.', en: 'In Mexico and other parts of Latin America you often hear the subjunctive in questions: “¿Crees que venga Ramiro?” It shows the speaker has doubts. It’s correct but not required: the indicative is used everywhere.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No es que no ___ los coches, es que hay demasiados.', options: ['gustar', 'me gustan', 'me gusten'], answer: 2, why: '«No es que» rechaza una idea: subjuntivo, me gusten. La razón real va con «es que» + indicativo: hay.', en: 'It’s not that I don’t like cars; it’s that there are too many.' },
            { prompt: '¿No crees que la plaza ___ más bonita con árboles?', options: ['está', 'esté', 'estar'], answer: 0, why: '«¿No crees que…?» pide acuerdo: no niega, indicativo, está.', en: 'Don’t you think the square looks nicer with trees?' },
            { prompt: 'No es que Inés ___ prisa, es que la votación es el jueves.', options: ['tener', 'tenga', 'tiene'], answer: 1, why: '«No es que» + subjuntivo: tenga. Después, «es que» + indicativo: es.', en: 'It’s not that Inés is in a hurry; it’s that the vote is on Thursday.' },
          ] },
        ] },
        { title: 'Estar de acuerdo o no · Agreeing or not', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Debatir con respeto. Disagree politely.', blocks: [
          { kind: 'table', title: 'Fórmulas para debatir · Phrases for a debate', head: ['ESTAR DE ACUERDO · agree', 'EN PARTE · partly', 'NO ESTAR DE ACUERDO · disagree'], rows: [
            ['[[Estoy de acuerdo contigo|teal]].', 'En parte tienes razón, pero…', '[[Yo no lo veo así|teal]].'],
            ['Tienes razón.', 'Depende.', 'No estoy de acuerdo contigo.'],
            ['Yo pienso lo mismo.', 'Sí, pero por otro lado…', 'Yo lo veo de otra manera.'],
            ['[[Estoy de acuerdo en que hay|teal]] mucho tráfico.', 'Estoy de acuerdo en eso, pero no en…', '[[No estoy de acuerdo con que cierren|teal]] la calle.'],
          ], note: '«Estoy de acuerdo **en / con** que»: con un hecho, indicativo («en que hay mucho tráfico»); con una propuesta, una acción que alguien quiere hacer, subjuntivo («con que cierren la calle los domingos»). En negativo, subjuntivo: «No estoy de acuerdo con que cierren…».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ramiro piensa diferente. ¿Qué dice con respeto?', options: ['Yo pienso lo mismo.', 'Yo no lo veo así.', 'Estoy de acuerdo contigo.'], answer: 1, why: '«Yo no lo veo así» = no estoy de acuerdo, de forma educada.', en: 'Ramiro thinks differently. What does he say politely?' },
            { prompt: 'No estoy de acuerdo con que el ayuntamiento ___ la plaza.', options: ['cierre', 'cierra', 'cerrar'], answer: 0, why: 'Una propuesta, y además negada: subjuntivo, cierre.', en: 'I don’t agree with the council closing the square.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Hay un «no» delante del verbo de opinión?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿opinión afirmada o negada? ¿Falta o sobra «de»? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿afirmada o negada? ¿Falta o sobra «de»? Toca para ver la corrección. (Asserted or denied? Is “de” missing or extra?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No creo que los bancos de la plaza son cómodos.', right: 'No creo que los bancos de la plaza sean cómodos.', why: 'Con «no creo que», subjuntivo: sean. (Denied opinion: subjunctive.)' },
            { wrong: 'Creo que sea una buena propuesta.', right: 'Creo que es una buena propuesta.', why: '«Creo que» afirma: indicativo, es. (Asserted opinion: indicative.)' },
            { wrong: 'Me parece que los vecinos estén cansados del ruido.', right: 'Me parece que los vecinos están cansados del ruido.', why: '«Me parece que» es una opinión afirmada: indicativo. Solo «me parece bien / mal que» lleva subjuntivo.' },
            { wrong: 'Estoy seguro que el plan va a funcionar.', right: 'Estoy seguro de que el plan va a funcionar.', why: 'Se dice «estar seguro de algo»: de que. En la lengua hablada se oye «seguro que», pero con «estoy» la norma pide «de».' },
            { wrong: 'Pienso de que la calle necesita árboles.', right: 'Pienso que la calle necesita árboles.', why: '«Pensar» no lleva «de» delante de «que»: pienso que. («Pienso de que» is a common error called dequeísmo.)' },
            { wrong: 'No es que no me gusta la idea, es que es cara.', right: 'No es que no me guste la idea, es que es cara.', why: '«No es que» + subjuntivo: guste. La razón real, con «es que» + indicativo: es.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La regla en una línea · The rule in one line', text: '**Afirmo** mi opinión → indicativo (creo que **es**). **Niego** el verbo de opinión → subjuntivo (no creo que **sea**). Lo que decide es el «no» delante de «creo», «pienso», «me parece» o «estoy seguro».', en: 'I assert my opinion → indicative. I deny the opinion verb → subjunctive. What decides it is the “no” in front of creo, pienso, me parece or estoy seguro.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No me parece que ___ tanto ruido por la noche.', options: ['hay', 'haya', 'haber'], answer: 1, why: '«No me parece que»: opinión negada, subjuntivo: haya.', en: 'I don’t think there’s that much noise at night.' },
            { prompt: 'Paula piensa ___ la calle va a ser más segura.', options: ['de que', 'que', 'en que'], answer: 1, why: '«Pensar que», sin «de».', en: 'Paula thinks the street is going to be safer.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos opiniones sobre su barrio, una afirmada («Creo que…») y otra negada («No creo que…»), y corrige una idea con «No es que…, es que…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión de vecinos', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: '¿Calle sin coches? · A car-free street?', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Inés y Paula, y tu alumno es Ramiro. Después tu alumno toca cada expresión marcada y dice si la opinión está afirmada o negada.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿opinión afirmada, negada, pregunta o fórmula de debate? (Asserted, denied, question or debate phrase?)' } },
          { kind: 'explore', title: 'La calle del Mercado', setting: 'Martes por la tarde, en el local de la asociación de vecinos. Inés modera; Paula y Ramiro opinan. Se tratan de tú. (Tuesday evening at the residents’ association. Inés chairs; Paula and Ramiro give their views.)', lines: [
            { who: 'Inés', text: 'Buenas tardes a todos. El tema de hoy: cerrar la calle del Mercado a los coches los fines de semana. ¿Qué opinan?', en: 'Good evening, everyone. Today’s topic: closing calle del Mercado to cars at weekends. What do you think?' },
            { who: 'Paula', text: 'Yo [[creo que es|blue]] una idea estupenda. Los niños van a poder jugar en la calle y la gente va a pasear más.', en: 'I think it’s a great idea. Children will be able to play in the street and people will walk around more.' },
            { who: 'Ramiro', text: 'Pues [[yo no lo veo así|teal]]. Tengo la ferretería en esa calle y [[no creo que mis clientes vengan|orange]] andando con una escalera o un saco de cemento.', en: 'Well, I don’t see it that way. My hardware shop is on that street, and I don’t think my customers will come on foot carrying a ladder or a bag of cement.' },
            { who: 'Paula', text: '[[No es que queramos|violet]] cerrar tu negocio, Ramiro. Es que hay demasiado ruido y demasiado humo.', en: 'It’s not that we want to shut your business, Ramiro. It’s that there’s too much noise and too many fumes.' },
            { who: 'Ramiro', text: 'Ya, [[estoy de acuerdo en que hay|teal]] mucho tráfico. Pero [[no me parece que cerrar la calle sea|orange]] la solución.', en: 'Sure, I agree there’s a lot of traffic. But I don’t think closing the street is the answer.' },
            { who: 'Inés', text: 'Ramiro, [[¿crees que los clientes van|violet]] a dejar de venir?', en: 'Ramiro, do you think customers are going to stop coming?' },
            { who: 'Ramiro', text: '[[Estoy seguro de que|blue]] algunos sí. Sobre todo las personas mayores, que vienen en coche.', en: 'I’m sure some of them will. Especially older people, who come by car.' },
            { who: 'Paula', text: '[[Me parece que exageras|blue]] un poco. Hay un aparcamiento a doscientos metros.', en: 'I think you’re exaggerating a bit. There’s a car park two hundred metres away.' },
            { who: 'Ramiro', text: '[[No estoy seguro de que tenga|orange]] plazas libres los sábados. Siempre está lleno.', en: 'I’m not sure it has free spaces on Saturdays. It’s always full.' },
            { who: 'Inés', text: '¿Y si la cerramos solo los domingos? La mayoría de las tiendas cierran ese día. [[¿No creen que es|violet]] un buen punto de partida?', en: 'And what if we close it only on Sundays? Most shops are closed that day. Don’t you think that’s a good starting point?' },
            { who: 'Ramiro', text: 'Hombre, eso es otra cosa. [[Estoy de acuerdo con que la cierren|teal]] los domingos.', en: 'Well, that’s a different matter. I’m fine with them closing it on Sundays.' },
            { who: 'Paula', text: 'Y yo. [[Estoy segura de que|blue]] a los vecinos les va a gustar.', en: 'Me too. I’m sure the residents are going to like it.' },
          ], notes: {
            'creo que es': 'Opinión afirmada: **creo que** + indicativo, es.',
            'yo no lo veo así': 'Fórmula de debate para **no estar de acuerdo** con respeto. Más suave que «no tienes razón».',
            'no creo que mis clientes vengan': 'Opinión negada: **no creo que** + subjuntivo. Venir → vengo → vengan.',
            'No es que queramos': '**No es que** + subjuntivo: Paula rechaza una interpretación (querer cerrar el negocio). La razón real va después con «es que» + indicativo: hay.',
            'estoy de acuerdo en que hay': 'Ramiro acepta un **hecho**: estoy de acuerdo en que + indicativo, hay.',
            'no me parece que cerrar la calle sea': 'Opinión negada: **no me parece que** + subjuntivo, sea. El sujeto de «sea» es «cerrar la calle».',
            '¿crees que los clientes van': 'Pregunta normal: **¿crees que** + indicativo, van.',
            'Estoy seguro de que': 'Opinión segura y afirmada: **estoy seguro de que** + indicativo (aquí el verbo no se repite: «algunos sí»). Ojo con el «de».',
            'Me parece que exageras': '**Me parece que** sin «bien» ni «mal»: opinión, indicativo, exageras.',
            'No estoy seguro de que tenga': 'Opinión negada: **no estoy seguro de que** + subjuntivo, tenga. El sujeto es el aparcamiento.',
            '¿No creen que es': '**¿No creen que…?** busca acuerdo, no niega: indicativo, es. Inés habla a todos (ustedes).',
            'Estoy de acuerdo con que la cierren': 'Ramiro acepta una **propuesta** (una acción que otros quieren hacer): estoy de acuerdo con que + subjuntivo, cierren.',
            'Estoy segura de que': 'Paula es mujer: **segura**. Afirmada: indicativo, «les va a gustar».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué tiene dudas Ramiro?', options: ['Vive lejos del barrio.', 'No le gustan los niños.', 'Cree que sus clientes necesitan venir en coche.'], answer: 2, why: '«No creo que mis clientes vengan andando con una escalera o un saco de cemento».', en: 'Why does Ramiro have doubts?' },
            { prompt: '¿En qué está de acuerdo Ramiro desde el principio?', options: ['En que el aparcamiento tiene plazas.', 'En que hay mucho tráfico.', 'En cerrar la calle todo el fin de semana.'], answer: 1, why: '«Estoy de acuerdo en que hay mucho tráfico».', en: 'What does Ramiro agree with from the start?' },
            { prompt: '¿Qué propone Inés al final?', options: ['Abrir un aparcamiento nuevo.', 'Cerrar la calle solo los domingos.', 'Hacer otra reunión.'], answer: 1, why: '«¿Y si la cerramos solo los domingos?».', en: 'What does Inés suggest at the end?' },
          ] },
        ] },
        { title: '¿Indicativo o subjuntivo? · Indicative or subjunctive?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases de la reunión · Sentences from the meeting', categories: [
            { id: 'ind', label: 'AFIRMA o PREGUNTA · indicativo', tone: 'blue' },
            { id: 'subj', label: 'NIEGA o CORRIGE · subjuntivo', tone: 'orange' },
          ], items: [
            { text: 'Creo que es una idea estupenda.', answer: 'ind', why: 'Opinión afirmada: es.' },
            { text: 'No creo que mis clientes vengan andando.', answer: 'subj', why: 'Opinión negada: vengan.' },
            { text: 'No es que queramos cerrar tu negocio.', answer: 'subj', why: '«No es que» corrige: queramos.' },
            { text: '¿Crees que los clientes van a dejar de venir?', answer: 'ind', why: 'Pregunta normal: van.' },
            { text: 'No estoy seguro de que tenga plazas libres.', answer: 'subj', why: 'Opinión negada: tenga.' },
            { text: '¿No creen que es un buen punto de partida?', answer: 'ind', why: '«¿No creen que…?» busca acuerdo: es.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué cree Paula? ¿Qué no cree Ramiro?». Tu alumno responde sin mirar el diálogo: «Paula cree que…», «Ramiro no cree que…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Afirmas: indicativo. Niegas: subjuntivo.',
      steps: [
        { title: 'Después de la reunión · After the meeting', blocks: [
          { kind: 'choice', items: [
            { context: 'Ramiro habla con su hermana. (Ramiro talks to his sister.)', prompt: 'No creo que los vecinos ___ cuánto vendo los sábados.', options: ['saber', 'saben', 'sepan'], answer: 2, why: '«No creo que»: subjuntivo. Saber → sepan (irregular).', en: 'I don’t think the residents know how much I sell on Saturdays.' },
            { context: 'Paula escribe a una compañera. (Paula writes to a colleague.)', prompt: 'Pienso que la plaza ___ a tener mucha más vida.', options: ['va', 'ir', 'vaya'], answer: 0, why: '«Pienso que» afirma: indicativo, va.', en: 'I think the square is going to be much livelier.' },
            { context: 'Inés habla con el ayuntamiento. (Inés talks to the city council.)', prompt: 'No estoy segura de que el presupuesto ___ para poner bancos nuevos.', options: ['llegue', 'llega', 'llegar'], answer: 0, why: '«No estoy segura de que»: subjuntivo, llegue.', en: 'I’m not sure the budget will stretch to new benches.' },
            { context: 'Un vecino a Paula. (A neighbour to Paula.)', prompt: 'Me parece que ___ razón: hay demasiado humo.', options: ['tienes', 'tener', 'tengas'], answer: 0, why: '«Me parece que» sin «bien» ni «mal»: opinión afirmada, indicativo, tienes.', en: 'I think you’re right: there are too many fumes.' },
            { context: 'Inés explica la actitud de Ramiro. (Inés explains Ramiro’s attitude.)', prompt: 'No es que Ramiro ___ en contra de todo; es que tiene miedo.', options: ['esté', 'estar', 'está'], answer: 0, why: '«No es que» corrige una idea: subjuntivo, esté.', en: 'It’s not that Ramiro is against everything; he’s scared.' },
          ] },
        ] },
        { title: '¿Qué modo va después? · Which mood comes next?', blocks: [
          { kind: 'classify', title: 'Decide el modo · Decide the mood', categories: [
            { id: 'ind', label: 'INDICATIVO', tone: 'blue' },
            { id: 'subj', label: 'SUBJUNTIVO', tone: 'orange' },
          ], items: [
            { text: 'Estoy segura de que los niños ___ la calle. (disfrutar)', answer: 'ind', why: 'Opinión afirmada: disfrutan / van a disfrutar.' },
            { text: 'No me parece que el ruido ___ un problema tan grande. (ser)', answer: 'subj', why: 'Opinión negada: sea.' },
            { text: 'Creo que no ___ suficientes papeleras. (haber)', answer: 'ind', why: '«Creo» es afirmativo; el «no» va con el segundo verbo: hay.' },
            { text: 'No pensamos que la propuesta ___ mala. (ser)', answer: 'subj', why: '«No pensamos que»: opinión negada, sea.' },
            { text: 'Ramiro opina que el cambio ___ demasiado rápido. (ir)', answer: 'ind', why: '«Opina que» afirma: va.' },
            { text: 'No es que yo ___ más coches; quiero más aparcamiento. (querer)', answer: 'subj', why: '«No es que» corrige: quiera.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No creo que los comerciantes están de acuerdo.', ok: false, options: ['No creo que los comerciantes estar de acuerdo.', 'No creo que los comerciantes estén de acuerdo.', 'No creo de que los comerciantes estén de acuerdo.'], answer: 1, why: 'Opinión negada: subjuntivo, estén. Y «creer» no lleva «de».' },
            { sentence: 'Creo que no es el mejor momento para votar.', ok: true, why: 'Correcta: «creo» es afirmativo; el «no» niega el segundo verbo, en indicativo.' },
            { sentence: 'Estoy segura que la gente va a venir andando.', ok: false, options: ['Estoy segura en que la gente va a venir andando.', 'Estoy segura de que la gente vaya a venir andando.', 'Estoy segura de que la gente va a venir andando.'], answer: 2, why: '«Estar seguro» lleva «de que». Es afirmativo: indicativo, va.' },
            { sentence: 'No estoy seguro de que la idea funcione.', ok: true, why: 'Correcta: opinión negada con subjuntivo, funcione.' },
            { sentence: 'Me parece que la propuesta sea un poco cara.', ok: false, options: ['Me parece que la propuesta es un poco cara.', 'Me parece de que la propuesta es un poco cara.', 'Me parece que la propuesta ser un poco cara.'], answer: 0, why: '«Me parece que» es una opinión afirmada: indicativo, es.' },
          ] },
        ] },
        { title: 'El chat de la asociación · The association’s group chat', blocks: [
          { kind: 'chat-fill', title: 'Miércoles, en el chat de los vecinos · Wednesday, in the residents’ chat', lines: [
            { who: 'Inés', text: 'Gracias a todos por venir ayer. ¿Qué tal la reunión?' },
            { who: 'Paula', text: 'Yo creo que ___ muy útil. Hablamos mucho y con respeto.', options: ['ser', 'fue', 'sea'], answer: 1, why: '«Creo que» afirma: indicativo (aquí en pasado), fue.' },
            { who: 'Ramiro', text: 'Sí, pero sigo pensando lo mismo: no creo que ___ buena idea cerrar también los sábados.', options: ['sea', 'es', 'ser'], answer: 0, why: '«No creo que»: subjuntivo, sea.' },
            { who: 'Paula', text: 'No es que ___ cerrarla siempre, Ramiro. Primero solo los domingos.', options: ['queramos', 'queremos', 'querer'], answer: 0, why: '«No es que» corrige una idea: subjuntivo, queramos.' },
            { who: 'Ramiro', text: 'Ya. En lo de los domingos estamos de acuerdo. En lo de los sábados, yo no lo ___ así.', options: ['vea', 'ver', 'veo'], answer: 2, why: 'Fórmula fija de debate: «yo no lo veo así», en indicativo.' },
            { who: 'Inés', text: 'Bueno, estoy segura de que entre todos ___ una solución.', options: ['encontrar', 'vamos a encontrar', 'vayamos a encontrar'], answer: 1, why: '«Estoy segura de que» afirma: indicativo, vamos a encontrar.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'creo', 'que', 'la', 'esquina', 'sea', 'peligrosa'], accept: ['No creo que la esquina sea peligrosa'], en: 'I don’t think the corner is dangerous.' },
            { tiles: ['Estoy', 'segura', 'de', 'que', 'la', 'idea', 'va', 'a', 'funcionar'], accept: ['Estoy segura de que la idea va a funcionar'], en: 'I’m sure the idea is going to work.' },
            { tiles: ['No', 'es', 'que', 'no', 'me', 'guste,', 'es', 'que', 'tengo', 'dudas'], accept: ['No es que no me guste, es que tengo dudas'], en: 'It’s not that I don’t like it; I just have doubts.' },
            { tiles: ['Creo', 'que', 'no', 'hay', 'bastantes', 'bancos', 'en', 'la', 'plaza'], accept: ['Creo que no hay bastantes bancos en la plaza', 'Creo que en la plaza no hay bastantes bancos'], en: 'I think there aren’t enough benches in the square.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Afirma, niega o corrige · Assert, deny or correct', items: [
            { prompt: 'Creo que la obra es cara. (→ No creo…)', instruction: 'Niega la opinión. Empieza con «No creo que».', accept: ['No creo que la obra sea cara'] },
            { prompt: 'Estoy seguro de que los vecinos quieren el cambio. (→ No estoy seguro…)', instruction: 'Niega la opinión. Empieza con «No estoy seguro de que».', accept: ['No estoy seguro de que los vecinos quieran el cambio'] },
            { prompt: 'No me parece que haya mucho tráfico. (→ Me parece…)', instruction: 'Ahora afirma la opinión. Empieza con «Me parece que».', accept: ['Me parece que hay mucho tráfico'] },
            { prompt: 'Ramiro no está en contra. Tiene miedo. (→ No es que…, es que…)', instruction: 'Corrige la idea en una frase: «No es que Ramiro…, es que…».', accept: ['No es que Ramiro esté en contra, es que tiene miedo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno da tres opiniones reales sobre su ciudad: una con «creo que», una con «no creo que» y una con «no estoy seguro/a de que».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Ramiro', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Ramiro explica su postura · Ramiro explains his position', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada opinión afirmada y da una palmada con cada opinión negada o corregida. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa lo que Ramiro afirma (creo que…) y lo que niega (no creo que…). Ramiro es mexicano y habla a Inés de tú. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Ramiro', channel: 'MENSAJE DE VOZ · DE RAMIRO PARA INÉS', src: '/audio/grammar-live/393.mp3',
            before: 'Es miércoles. Ramiro manda un audio a Inés después de la reunión. ¿Qué crees que dice: que cambia de opinión, que está enfadado, que tiene una propuesta…? (Ramiro sends Inés a voice message after the meeting. What do you think he says?)',
            gist: { prompt: '¿Para qué manda Ramiro el audio?', options: ['Para decir que deja la asociación.', 'Para pedir perdón a Paula.', 'Para explicar su postura y proponer una solución.'], answer: 2, why: 'Explica qué cree y qué no cree, y termina con una propuesta: «Mi propuesta es esta…».', en: 'Why does Ramiro send the voice message?' },
            details: [
              { prompt: '¿Qué piensa Ramiro de cerrar la calle los domingos?', options: ['Que no le importa.', 'Que es una mala idea.', 'Que es buena idea, porque ese día él cierra.'], answer: 2, why: '«Creo que la idea de los domingos es buena, porque ese día cierro».', en: 'What does Ramiro think about closing the street on Sundays?' },
              { prompt: '¿Por qué le preocupan los sábados?', options: ['Porque ese día no trabaja.', 'Porque hay un mercado en la plaza.', 'Porque muchos clientes vienen en coche.'], answer: 2, why: '«Los sábados vienen muchos clientes en coche».', en: 'Why is he worried about Saturdays?' },
              { prompt: '¿En qué le da la razón a Paula?', options: ['En que el aparcamiento es grande.', 'En que hay demasiado tráfico.', 'En que la gente va a venir andando.'], answer: 1, why: '«En parte tiene razón: estoy de acuerdo en que hay demasiado tráfico».', en: 'What does he agree with Paula about?' },
              { prompt: '¿Qué propone Ramiro?', options: ['Empezar con los domingos y hablarlo otra vez en dos meses.', 'Hacer una votación por internet.', 'Cerrar la calle todo el fin de semana.'], answer: 0, why: '«Empezamos con los domingos y, después de dos meses, lo hablamos otra vez».', en: 'What does Ramiro propose?' },
            ],
            transcript: 'Hola, Inés, soy Ramiro, el de la ferretería. Oye, quería decirte algo sobre la reunión de ayer. [[No es que esté|violet]] en contra de los vecinos, ¿eh? Es que me preocupa mi negocio. [[Creo que la idea de los domingos es|blue]] buena, porque ese día cierro. Pero, sinceramente, [[no creo que cerrar la calle también los sábados sea|orange]] buena idea. Los sábados vienen muchos clientes en coche, y [[no estoy seguro de que el aparcamiento tenga|orange]] espacio para todos. [[Paula piensa que la gente va|blue]] a venir andando, y en parte tiene razón: [[estoy de acuerdo en que hay|teal]] demasiado tráfico. Mira, mi propuesta es esta: empezamos con los domingos y, después de dos meses, lo hablamos otra vez. [[Estoy seguro de que así vamos|blue]] a encontrar una solución. ¿Me llamas esta tarde? Gracias, Inés. Un abrazo.',
            reply: { teacher: 'Tú eres Ramiro. Tu alumno es Inés y responde al audio con tres frases: una opinión afirmada («Creo que…»), una negada («No creo que…») y una fórmula de debate («Estoy de acuerdo contigo en que…»).', self: 'Responde a Ramiro en voz alta como Inés: una opinión afirmada, una negada y una fórmula de debate. (Answer as Inés: one asserted opinion, one denied, one debate phrase.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Tú qué opinas?', coach: 'Afirma, niega, corrige y debate. Assert, deny, correct, debate.',
      steps: [
        { title: 'Opiniones de verdad · Real opinions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con su opinión real. Cuando falla el modo, tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa las frases de apoyo. (Read, answer aloud, use the support phrases.)' } },
          { kind: 'talk', cards: [
            { q: '¿Crees que tu calle o tu barrio necesita menos coches? ¿Por qué? · Do you think your street or neighbourhood needs fewer cars? Why?', followUps: ['¿Crees que la gente va a usar más la bici? (Do you think people will cycle more?)', '¿Qué no crees que funcione en tu barrio? (What don’t you think would work in your area?)'], phrases: ['[[Creo que|blue]] mi barrio necesita / tiene…', '[[No creo que|orange]] la gente quiera / pueda…', '[[Estoy seguro / segura de que|blue]]…'], hint: 'Afirmas: indicativo (necesita, tiene). Niegas: subjuntivo (quiera, pueda).', example: 'Creo que mi barrio tiene demasiados coches, pero no creo que la gente quiera dejar el coche en casa. Estoy segura de que con más autobuses todo va a mejorar.', next: 'Ahora, ¿estás de acuerdo?' },
            { q: 'Escucha esta frase: «Las ciudades sin coches son más felices». ¿Estás de acuerdo? · Listen: “Car-free cities are happier.” Do you agree?', followUps: ['¿En qué parte tiene razón la frase? (Which part is right?)', '¿Qué problemas ves? (What problems do you see?)'], phrases: ['[[Estoy de acuerdo en que|teal]] hay / son…', '[[Yo no lo veo así|teal]]: …', 'En parte tienes razón, pero [[no me parece que|orange]]… sea…'], hint: 'Con un hecho, «estoy de acuerdo en que» + indicativo; si niegas, subjuntivo.', example: 'Estoy de acuerdo en que hay menos ruido y menos humo. Pero no me parece que sea tan fácil: muchas personas necesitan el coche para trabajar.', next: 'Ahora, corrige una idea.' },
            { q: 'Un amigo cree que no te gusta tu trabajo porque a veces te quejas. Corrígelo. · A friend thinks you don’t like your job because you sometimes complain. Correct him.', followUps: ['¿Qué es lo que realmente te molesta? (What really bothers you?)', '¿Qué te gusta de tu trabajo? (What do you like about it?)'], phrases: ['[[No es que|violet]] no me guste…, es que…', '[[No es que|violet]] esté cansado / cansada…, es que…', '[[Creo que|blue]] mi trabajo es…'], hint: '«No es que» + subjuntivo (guste, esté); «es que» + indicativo con la razón real.', example: 'No es que no me guste mi trabajo, es que tengo demasiadas reuniones. Creo que mi equipo es muy bueno; el problema es el horario.', next: 'Ahora, pregunta tú.' },
            { q: 'Haz tres preguntas sobre el futuro de tu ciudad con «¿Crees que…?» y responde a las de tu compañero. · Ask three questions about your city’s future with “¿Crees que…?” and answer your partner’s.', followUps: ['¿Crees que en diez años va a haber más parques? (In ten years, will there be more parks?)', '¿No crees que el transporte es demasiado caro? (Don’t you think transport is too expensive?)'], phrases: ['[[¿Crees que|violet]] … va a…?', '[[¿No crees que|violet]] … es…?', 'Sí, [[estoy seguro / segura de que|blue]]… / No, [[no creo que|orange]]…'], hint: 'Pregunta normal: indicativo. Respuesta negativa con «no creo que»: subjuntivo.', example: '¿Crees que el centro va a tener más zonas verdes? — No, no creo que haya dinero para eso. ¿No crees que el metro es demasiado caro? — Sí, estoy de acuerdo contigo.', teacher: 'Tú respondes a las preguntas de tu alumno con «No creo que…» al menos una vez, para que tu alumno oiga el subjuntivo.' },
            { q: 'Tú estás en la reunión de vecinos. Ramiro dice: «Sin coches, la calle se va a morir». ¿Qué le respondes? · You are at the meeting. Ramiro says: “Without cars, the street will die.” What do you answer?', followUps: ['¿Qué parte de su opinión entiendes? (Which part of his view do you understand?)', '¿Qué propones tú? (What do you propose?)'], phrases: ['[[Yo no lo veo así|teal]], Ramiro…', '[[No creo que|orange]] la calle se muera / pierda…', '[[Estoy de acuerdo contigo|teal]] en que…, pero…'], hint: 'Primero reconoce algo («estoy de acuerdo en que…»); después niega con subjuntivo.', example: 'Estoy de acuerdo contigo en que tus clientes necesitan aparcar. Pero yo no lo veo así: no creo que la calle se muera. Creo que va a venir más gente a pasear.', teacher: 'Tú eres Ramiro e insistes («Pero mis clientes…»). Tu alumno responde otra vez con «No es que…, es que…».' },
            { q: 'Ahora tú eres Inés. Resume las dos posturas y da tu opinión final. · Now you are Inés. Sum up both positions and give your final view.', followUps: ['¿Qué cree Paula? ¿Qué no cree Ramiro? (What does Paula think? What doesn’t Ramiro think?)', '¿Cuál es tu propuesta? (What is your proposal?)'], phrases: ['Paula [[cree que|blue]]…', 'Ramiro [[no cree que|orange]]…', 'Yo [[estoy de acuerdo con que|teal]] + subjuntivo (una propuesta)…'], hint: 'También con otras personas: «Paula cree que» + indicativo; «Ramiro no cree que» + subjuntivo.', example: 'Paula cree que la calle va a tener más vida. Ramiro no cree que sus clientes vengan andando. Yo estoy de acuerdo con que la cerremos los domingos y estoy segura de que así todos vamos a estar contentos.', teacher: 'Después, cambian los papeles: tú eres Inés y tu alumno es un vecino que no está de acuerdo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Crees que…?», «¿Estás de acuerdo con…?») y tú respondes. Tu alumno escucha si usas el modo correcto.', self: 'Ahora haz tú las preguntas en voz alta («¿Crees que…?») y responde como otra persona que piensa lo contrario. (Now ask the questions aloud and answer as someone with the opposite view.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu voto, por escrito', coach: 'Opina, niega y corrige. Give your view, deny and correct.',
      steps: [
        { title: 'Un mensaje antes de la votación · A message before the vote', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada opinión: ¿afirmada (indicativo) o negada (subjuntivo)? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada opinión: ¿afirmada o negada? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mi opinión sobre la calle del Mercado · My view on calle del Mercado', situation: 'Eres vecino o vecina del barrio del Mercado (o de tu propio barrio, con una propuesta real). El jueves votan la propuesta de cerrar la calle a los coches. Escribe un mensaje a Inés, la presidenta, con tu opinión. (You live in the area. On Thursday there is a vote on closing the street to cars. Write to Inés, the chair, with your opinion.)', task: [
            'Saluda y di por qué escribes. (Greet her and say why you are writing.)',
            'Da dos opiniones afirmadas con «creo que», «pienso que» o «estoy seguro/a de que» + indicativo. (Two asserted opinions + indicative.)',
            'Da dos opiniones negadas con «no creo que» o «no estoy seguro/a de que» + subjuntivo. (Two denied opinions + subjunctive.)',
            'Corrige una posible interpretación con «No es que…, es que…». (Correct a possible misunderstanding.)',
            'Di con quién estás de acuerdo o no, y despídete. (Say who you agree or disagree with, and sign off.)',
          ], starters: ['Hola, Inés:', 'Te escribo antes de la votación del jueves.', 'Yo creo que…', 'Estoy seguro / segura de que…', 'Pero no creo que…', 'No es que…, es que…', 'Estoy de acuerdo con Paula en que…', 'Un saludo,'],
            words: ['creo que', 'pienso que', 'me parece que', 'estoy seguro/a de que', 'no creo que', 'no me parece que', 'no estoy seguro/a de que', 'no es que… es que', 'estoy de acuerdo en / con que', 'yo no lo veo así', 'tienes razón'],
            model: 'Hola, Inés: Te escribo antes de la votación del jueves. Yo [[creo que cerrar|blue]] la calle del Mercado los domingos es una buena idea: [[estoy segura de que|blue]] las familias van a salir más y la plaza va a tener más vida. Pero [[no creo que sea|orange]] buena idea cerrarla también los sábados. [[No estoy segura de que el aparcamiento tenga|orange]] espacio para todos los clientes, y las tiendas necesitan ese día. [[No es que esté|violet]] en contra del cambio, es que prefiero ir paso a paso. [[Estoy de acuerdo con Paula en que hay|teal]] demasiado tráfico, pero en lo de los sábados [[yo no lo veo así|teal]]. Un saludo, Elena.',
            minWords: 80,
            checks: [
              { label: 'Una opinión afirmada (asserted opinion)', pattern: '(?<!(?<!\\p{L})no\\s+)(?<!\\p{L})(?:creo|pienso|opino|me\\s+parece|estoy\\s+segur[oa]\\s+de)\\s+que(?!\\p{L})', tip: 'Afirma tu opinión: «Creo que es una buena idea», «Estoy segura de que va a funcionar».' },
              { label: 'Una opinión negada (denied opinion)', pattern: '(?<!\\p{L})no\\s+(?:creo|pienso|me\\s+parece|estoy\\s+segur[oa]\\s+de)\\s+que(?!\\p{L})', tip: 'Niega una opinión: «No creo que sea buena idea», «No estoy seguro de que funcione».' },
              { label: 'Una corrección con «no es que» (correction)', pattern: '(?<!\\p{L})no\\s+es\\s+que(?!\\p{L})', tip: 'Corrige una idea: «No es que esté en contra, es que prefiero ir paso a paso».' },
              { label: 'Una fórmula de debate (debate phrase)', pattern: '(?<!\\p{L})(?:de\\s+acuerdo|no\\s+lo\\s+veo\\s+así|tienes\\s+razón|tiene\\s+razón|lo\\s+mismo)(?!\\p{L})', tip: 'Di si estás de acuerdo: «Estoy de acuerdo con Paula en que…», «Yo no lo veo así».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})estoy\\s+segur[oa]s?\\s+que(?!\\p{L})', why: 'Con «estar seguro» va «de»: **estoy seguro de que**.' },
              { pattern: '(?<!\\p{L})(?:creo|pienso|opino)\\s+de\\s+que(?!\\p{L})', why: '«Creer», «pensar» y «opinar» no llevan «de»: **creo que**, **pienso que**.' },
              { pattern: '(?<!\\p{L})no\\s+(?:creo|pienso|me\\s+parece)\\s+que\\s+(?:\\p{L}+\\s+){0,2}(?:es|está|hay|tiene|va|puede|son|están|tienen|van|pueden)(?!\\p{L})', why: 'Revisa el verbo después de «no creo que»: normalmente va en subjuntivo (**sea, esté, haya, tenga, vaya, pueda**).' },
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
            { tone: 'blue', label: 'OPINIÓN AFIRMADA · INDICATIVO', formula: 'creo / pienso / opino / me parece / estoy seguro de + que + indicativo', example: 'Creo que la idea es buena.', caption: 'afirmas lo que piensas', en: 'you assert what you think' },
            { tone: 'orange', label: 'OPINIÓN NEGADA · SUBJUNTIVO', formula: 'no creo / no me parece / no estoy seguro de + que + subjuntivo', example: 'No creo que la idea sea buena.', caption: 'no afirmas lo que viene después', en: 'you don’t assert what follows' },
            { tone: 'violet', label: 'PREGUNTAR Y CORREGIR', formula: '¿crees que + indicativo? · no es que + subjuntivo, es que + indicativo', example: 'No es que esté en contra, es que tengo dudas.', caption: 'preguntas la opinión o rechazas una idea', en: 'you ask for an opinion or reject an interpretation' },
            { tone: 'teal', label: 'DEBATIR', formula: 'estoy de acuerdo contigo / en que… · yo no lo veo así · tienes razón', example: 'Estoy de acuerdo en que hay mucho tráfico, pero yo no lo veo así.', caption: 'aceptas o rechazas con respeto', en: 'you agree or disagree politely' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira si hay un «**no**» delante del verbo de opinión. «Creo que **viene**»: afirmas (indicativo). «No creo que **venga**»: niegas (subjuntivo). Pero «Creo que no **viene**» y «¿No crees que **viene**?» llevan indicativo: el «no» no niega «creer».', en: 'Check for a “no” in front of the opinion verb. “Creo que viene”: you assert (indicative). “No creo que venga”: you deny (subjunctive). But “Creo que no viene” and “¿No crees que viene?” take the indicative: the “no” doesn’t deny “creer”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'No creo que mi jefa ___ hoy a la oficina.', options: ['vuelve', 'vuelva', 'volver'], answer: 1, why: '«No creo que»: subjuntivo, vuelva.', en: 'I don’t think my boss is coming back to the office today.' },
            { prompt: 'Pienso que este libro ___ mejor que la película.', options: ['sea', 'ser', 'es'], answer: 2, why: '«Pienso que» afirma: indicativo, es.', en: 'I think this book is better than the film.' },
            { prompt: 'No es que no ___ hambre, es que acabo de comer.', options: ['tengo', 'tener', 'tenga'], answer: 2, why: '«No es que» + subjuntivo: tenga.', en: 'It’s not that I’m not hungry; I’ve just eaten.' },
            { prompt: 'Estoy seguro ___ vas a aprobar el examen.', options: ['de que', 'que', 'de'], answer: 0, why: '«Estar seguro de algo»: estoy seguro de que.', en: 'I’m sure you’re going to pass the exam.' },
            { prompt: 'No me parece que el examen ___ tan difícil.', options: ['sea', 'es', 'ser'], answer: 0, why: '«No me parece que»: opinión negada, subjuntivo, sea.', en: 'I don’t think the exam is that hard.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una reunión de trabajo.', blocks: [
          { kind: 'lead', text: 'Paula también tiene reunión en su escuela: hablan de un viaje de fin de curso. Transforma las opiniones de sus compañeros.', en: 'Paula also has a meeting at her school: they are discussing an end-of-year trip. Transform her colleagues’ opinions.' },
          { kind: 'rewrite', title: 'En la sala de profesores · In the staff room', items: [
            { prompt: 'Creo que el viaje es necesario. (→ No creo…)', instruction: 'Niega la opinión. Empieza con «No creo que».', accept: ['No creo que el viaje sea necesario'] },
            { prompt: 'No pienso que los padres tengan razón. (→ Pienso…)', instruction: 'Afirma la opinión. Empieza con «Pienso que».', accept: ['Pienso que los padres tienen razón'] },
            { prompt: 'Estoy segura de que el autobús está reservado. (→ No estoy segura…)', instruction: 'Niega la opinión. Empieza con «No estoy segura de que».', accept: ['No estoy segura de que el autobús esté reservado'] },
          ] },
        ] },
        { title: 'Ampliación · No pienso, no creas (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'Tres usos que vas a oír mucho. **No pienso + infinitivo** no es una opinión: significa «no tengo intención de» (I’m not going to, I refuse to). **No creas que…** es un imperativo negativo (clase 059): avisas a alguien de que una idea es falsa; después, con frecuencia va el indicativo: «No creas que es fácil». Y en México y otras zonas de América, **¿crees que + subjuntivo?** muestra duda: «¿Crees que llueva?».', en: 'Three uses you will hear a lot. “No pienso + infinitive” is not an opinion: it means “I have no intention of”. “No creas que…” is a negative command: you warn someone that an idea is wrong; the indicative often follows. And in Mexico and other parts of Latin America, “¿crees que + subjunctive?” shows doubt.' },
          { kind: 'choice', title: '¿Qué significa? · What does it mean?', items: [
            { prompt: 'Ramiro, enfadado: «No pienso cerrar mi tienda los sábados».', options: ['No cree que la tienda cierre.', 'No se acuerda de cerrarla.', 'No tiene intención de cerrarla.'], answer: 2, why: '«No pienso + infinitivo» = no tengo intención de hacerlo. No es una opinión.', en: 'Ramiro, angry: “I’m not going to close my shop on Saturdays.”' },
            { prompt: 'Inés: «No creas que es fácil organizar una votación».', options: ['Organizar una votación es fácil.', 'Inés no sabe si es fácil.', 'En realidad, no es fácil.'], answer: 2, why: '«No creas que…» avisa: esa idea es falsa. Inés quiere decir que no es fácil.', en: 'Inés: “Don’t think it’s easy to organise a vote.”' },
            { prompt: 'Un vecino de Guadalajara: «¿Crees que llueva el domingo?».', options: ['Afirma que va a llover.', 'Se equivoca: solo se puede decir «llueve».', 'Pregunta con duda; es un uso frecuente en México.'], answer: 2, why: 'En preguntas, el subjuntivo muestra duda. Es correcto y frecuente en México; «¿Crees que va a llover?» también es correcto.', en: 'A neighbour from Guadalajara: “Do you think it’ll rain on Sunday?”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Extra: tu alumno dice una cosa que no piensa hacer este fin de semana («No pienso…») y avisa de una idea falsa sobre su ciudad («No creas que…»).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 094 · Duda, posibilidad y certeza en enunciados', text: 'Ya afirmas y niegas opiniones: «Creo que es buena idea», «No creo que sea buena idea». En la clase 094 das el paso siguiente: expresas grados de seguridad con «quizás», «es posible que», «dudo que» o «seguro que». Es el paso natural: de decir «sí» o «no» a una idea, a decir cuánto la crees.', en: 'You can now assert and deny opinions: “Creo que es buena idea”, “No creo que sea buena idea”. In class 094 you take the next step: you express degrees of certainty with “quizás”, “es posible que”, “dudo que” or “seguro que”. It’s the natural next step: from saying yes or no to an idea to saying how much you believe it.', href: '/gramatica/duda-posibilidad-y-certeza-en-enunciados', label: 'Ir a la clase 094' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué crees que vas a hacer bien en tu próxima clase de español? ¿Y qué no crees que sea fácil?». Respuesta esperada: una opinión afirmada con indicativo y una negada con subjuntivo. Tarea: escribir el mensaje de Escribir sobre una propuesta real de su barrio.' },
        ] },
      ],
    },
  ],
};
