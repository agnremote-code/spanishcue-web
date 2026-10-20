import type { LiveLesson } from '../types';

/**
 * Lesson 413 · B1 · Lo que y lo de: referencias a ideas (course unit G113).
 * One scene runs through the class: the residents of a building on calle
 * Olmo hold their Thursday meeting. Lucía Ferrer, the chair, has three
 * topics: the lift that broke down again, the roof terrace (a leak flooded
 * the kitchen of Pilar Soto, a retired neighbour on the fourth floor, the day
 * before) and Hugo Ramírez's proposal for a bike room in the courtyard.
 * Óscar Molina missed the meeting and asks on WhatsApp. In the voice message
 * Lucía (Mexican voice) sums up the meeting for the building group.
 * Builds on class 067 (lo que at A2). Content: neuter «lo»: lo que + verb
 * (what / the thing that), todo lo que, focus sentences «Lo que me preocupa
 * es… / son… / es que + subjuntivo»; lo de + noun, infinitive, adverb or
 * person (lo del ascensor, lo de mudarte, lo de ayer = the matter of);
 * lo + adjective (lo bueno, lo malo, lo importante, lo mejor / lo peor es
 * que + indicative fact; lo mismo) — audit fold; contrast lo que / que / qué
 * and el (la) que / lo que; lo nuevo / el nuevo. Recognition only:
 * lo + adjective + que (lo difícil que es, class 192), preposition + lo que
 * and «…, lo que molestó a todos» (Ampliación). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 413,
  level: 'B1',
  title: 'Lo que y lo de: referencias a ideas',
  subtitle: 'Presentar temas, problemas y opiniones sin repetir nombres: lo que me preocupa es…, lo de ayer, lo bueno es que…',
  legend: [
    { tone: 'violet', label: 'LO QUE · una idea sin nombre (what, the thing that)' },
    { tone: 'teal', label: 'LO DE · un tema que ya conocemos (the thing about…)' },
    { tone: 'orange', label: 'LO + ADJETIVO · una parte o un aspecto (the good thing…)' },
    { tone: 'blue', label: 'QUE · EL QUE · QUÉ · contraste (with a noun, or a question)' },
  ],
  optionNotes: {
    'Qué': '«Qué» con tilde es para preguntas y exclamaciones. Aquí no preguntas: presentas una idea con **lo que**.',
    'qué': '«Qué» con tilde pregunta por algo nuevo. Aquí no: mira si hay un nombre antes (**que**), un tema conocido (**lo de**) o una idea (**lo que**).',
    'La buena': 'Con **lo** + adjetivo, el adjetivo va siempre en masculino singular: **lo bueno**.',
    'El bueno': '«El bueno» habla de una persona o una cosa masculina concreta. Para «la parte buena», **lo bueno**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo: ideas, temas y aspectos', coach: 'Sin nombre, con «lo». No noun? Use “lo”.',
      steps: [
        { title: 'La reunión de vecinos · The residents’ meeting', blocks: [
          { kind: 'lead', text: 'El jueves hay reunión de vecinos en el edificio de la calle Olmo. Lucía Ferrer es la presidenta y prepara los temas. En su cuaderno escribe: «**Lo que** me preocupa es la azotea», «¿Y **lo del** ascensor?», «**Lo bueno** es que el seguro paga la mitad». En la clase 067 viste «lo que más me gusta…». Hoy vas más lejos: con **lo** hablas de ideas, de temas conocidos y de aspectos de un problema sin repetir nombres.', en: 'On Thursday there is a residents’ meeting in the building on calle Olmo. Lucía Ferrer chairs it and is preparing the topics. In her notebook she writes: “What worries me is the roof terrace”, “And the lift business?”, “The good thing is that the insurance pays half”. In class 067 you saw “lo que más me gusta…”. Today you go further: with lo you talk about ideas, known topics and aspects of a problem without repeating nouns.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno repite. Después tu alumno dice qué presenta cada forma marcada: una idea, un tema que ya conocen o un aspecto (lo bueno, lo malo).', self: 'Lee cada frase en voz alta. ¿La forma marcada presenta una idea, un tema conocido o un aspecto? (An idea, a known topic or an aspect?)' } },
          { kind: 'compare', title: 'Tres usos de «lo» · Three uses of “lo”', columns: [
            { tone: 'violet', label: 'IDEA · lo que + verbo', sentence: '[[Lo que|violet]] me preocupa es la azotea.', idea: 'Una cosa sin nombre: lo que = la cosa que.', en: 'What worries me is the roof terrace.' },
            { tone: 'teal', label: 'TEMA · lo de + nombre', sentence: '¿Y [[lo del|teal]] ascensor?', idea: 'Un asunto que todos conocen: no hace falta explicarlo.', en: 'And what about the lift (business)?' },
            { tone: 'orange', label: 'ASPECTO · lo + adjetivo', sentence: '[[Lo bueno|orange]] es que el seguro paga la mitad.', idea: 'Una parte del tema: la parte buena.', en: 'The good thing is that the insurance pays half.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¿Y lo del ascensor?» Lucía quiere decir…', options: ['¿De quién es el ascensor?', '¿Y el problema del ascensor que ya conocemos?', '¿Dónde está el ascensor?'], answer: 1, why: '«Lo de» señala un asunto conocido: el problema del ascensor, sin explicarlo otra vez.', en: '“¿Y lo del ascensor?” Lucía means…' },
            { prompt: 'En «Lo bueno es que el seguro paga la mitad», «lo bueno» significa…', options: ['the goods', 'the good one (a person)', 'the good thing, the good part'], answer: 2, why: 'Lo + adjetivo convierte la cualidad en un tema: la parte buena.', en: 'In this sentence, “lo bueno” means…' },
          ] },
        ] },
        { title: 'Lo que: poner el foco · Lo que: putting the focus', mascot: '/brand/mascot/studying.webp', coach: 'Lo nuevo, al final. The new part goes last.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'IDEA · LO QUE', question: '¿Qué cosa? (sin nombrarla)', en: 'Which thing? (without naming it)', formula: ['lo que + verbo conjugado', 'Lo que + verbo + es / son + la información importante', 'todo lo que + verbo'],
            meaning: '**Lo que** no se refiere a un nombre masculino ni femenino, sino a una idea: la cosa que, las cosas que (en inglés, **what**). Es muy útil para poner el foco: empiezas con «lo que…» y el verbo **ser** presenta al final lo importante. Con un nombre plural después, lo normal es **son**. Para decir «everything (that)»: **todo lo que**, nunca «todo que».',
            examples: [
              { es: '[[Lo que|violet]] necesitamos es un técnico serio.', en: 'What we need is a reliable technician.' },
              { es: '[[Lo que|violet]] más me molesta son las obras tan temprano.', en: 'What bothers me most is the building work so early.' },
              { es: 'Pilar contó [[todo lo que|violet]] pasó en su cocina.', en: 'Pilar told us everything that happened in her kitchen.' },
              { es: 'No entiendo [[lo que|violet]] dice el administrador.', en: 'I don’t understand what the property manager is saying.' },
            ] },
          { kind: 'table', title: 'Frase normal y frase con foco · Plain sentence and focus sentence', head: ['Frase normal', 'Con foco: lo que… es / son', 'Fíjate (note)'], rows: [
            ['Me preocupa el horario.', '[[Lo que|violet]] me preocupa **es** el horario.', 'ser + nombre singular'],
            ['Necesitamos dos presupuestos.', '[[Lo que|violet]] necesitamos **son** dos presupuestos.', 'nombre plural → normalmente **son**'],
            ['Quiero hablar con el técnico.', '[[Lo que|violet]] quiero **es** hablar con el técnico.', 'ser + infinitivo'],
            ['Me molesta que nadie avise.', '[[Lo que|violet]] me molesta **es que** nadie avise.', 'es que + subjuntivo, como en la clase 092'],
          ], note: 'La frase con foco no cambia la información: cambia el orden. Lo importante va al final, donde más se oye (What worries me is…).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ propone Hugo es usar el cuarto del patio.', options: ['Qué', 'Lo que', 'Que'], answer: 1, why: 'No hay nombre antes y no es una pregunta: una idea con **lo que**.', en: 'What Hugo proposes is to use the room in the courtyard.' },
            { prompt: 'Lucía apuntó todo ___ dijeron los vecinos.', options: ['el que', 'que', 'lo que'], answer: 2, why: '«Everything (that)» es **todo lo que**: el «lo» no desaparece.', en: 'Lucía wrote down everything the neighbours said.' },
          ] },
        ] },
        { title: 'Lo de: un tema conocido · Lo de: a known topic', mascot: '/brand/mascot/standing.webp', coach: 'Lo de… = the thing about…', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TEMA · LO DE', question: '¿De qué asunto hablamos? (los dos ya lo saben)', en: 'Which matter are we talking about? (both people already know)', formula: ['lo de + nombre: lo de la azotea, lo del ascensor', 'lo de + infinitivo: lo de cambiar la puerta, lo de mudarte', 'lo de + adverbio o persona: lo de ayer, lo de Pilar'],
            meaning: '**Lo de** señala un asunto que las dos personas ya conocen, sin explicarlo otra vez. En inglés: «the thing about…», «the business with…», «what happened with…». Es muy frecuente en la conversación. Fíjate: después de «lo de» no va un verbo conjugado. Con verbo conjugado usas **lo que**: «lo de ayer», pero «lo que pasó ayer».',
            examples: [
              { es: '¿Qué pasó al final con [[lo del|teal]] ascensor?', en: 'What happened in the end with the lift business?' },
              { es: '[[Lo de|teal]] ayer fue un susto: entró agua en la cocina de Pilar.', en: 'What happened yesterday was a scare: water got into Pilar’s kitchen.' },
              { es: '¿Sigues pensando en [[lo de|teal]] mudarte?', en: 'Are you still thinking about moving?' },
              { es: '[[Lo de|teal]] Pilar ya está resuelto: el seguro paga.', en: 'Pilar’s problem is sorted now: the insurance is paying.' },
            ] },
          { kind: 'compare', title: 'Lo mismo, dos estructuras · Same idea, two structures', columns: [
            { tone: 'teal', label: 'LO DE + adverbio / nombre', sentence: '[[Lo de|teal]] ayer fue un susto.', idea: 'Sin verbo: el asunto de ayer. Más breve, más coloquial.', en: 'Yesterday’s thing was a scare.' },
            { tone: 'violet', label: 'LO QUE + verbo', sentence: '[[Lo que|violet]] pasó ayer fue un susto.', idea: 'Con verbo conjugado (pasó): lo que.', en: 'What happened yesterday was a scare.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Ya sabes ___ la azotea? Hay agua otra vez.', options: ['lo de', 'la de', 'lo que'], answer: 0, why: 'Un asunto conocido + nombre: **lo de** la azotea.', en: 'Have you heard about the roof terrace? There’s water again.' },
            { prompt: '___ dijo el técnico no está muy claro.', options: ['Lo que', 'El de', 'Lo de'], answer: 0, why: 'Hay un verbo conjugado (dijo): **lo que**, no «lo de».', en: 'What the technician said isn’t very clear.' },
          ] },
        ] },
        { title: 'Lo + adjetivo: lo bueno, lo peor, lo mismo · Lo + adjective', mascot: '/brand/mascot/speaking.webp', coach: 'Lo bueno, lo malo, lo importante.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ASPECTO · LO + ADJETIVO', question: '¿Qué parte del tema? (la buena, la mala, la importante)', en: 'Which part of the topic? (the good, the bad, the important one)', formula: ['lo + adjetivo (masculino singular) + es / son…', 'lo bueno / lo malo / lo mejor / lo peor es que + un hecho (indicativo)', 'lo importante es + infinitivo', 'lo mismo'],
            meaning: '**Lo + adjetivo** convierte una cualidad en un tema: lo bueno = la parte buena; lo importante = la cosa importante. El adjetivo va siempre en **masculino singular**, aunque hables de algo femenino o plural: «lo bueno de las obras», nunca «la buena». Si después cuentas un hecho con **es que**, usas indicativo: «Lo malo es que el ascensor **es** muy viejo». **Lo mismo** = the same (thing).',
            examples: [
              { es: '[[Lo bueno|orange]] es que el técnico viene esta semana.', en: 'The good thing is that the technician is coming this week.' },
              { es: '[[Lo peor|orange]] fue el ruido de la mañana.', en: 'The worst part was the noise in the morning.' },
              { es: '[[Lo importante|orange]] es tener dos presupuestos.', en: 'The important thing is to have two quotes.' },
              { es: '—A mí me molesta el ruido. —A mí me pasa [[lo mismo|orange]].', en: '“The noise bothers me.” “Same here.”' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Un hecho o un consejo · A fact or a piece of advice', text: 'Si cuentas un hecho, indicativo: «Lo malo es que el ascensor **no funciona**». Si das un consejo o valoras algo que todavía no pasa, es como «es importante que» (clase 091): subjuntivo. «Lo importante es que **vengan** todos». Y para un consejo general, lo más fácil es el infinitivo: «Lo mejor es **esperar**».', en: 'If you report a fact, use the indicative: “Lo malo es que el ascensor no funciona”. If you give advice or judge something that hasn’t happened yet, it works like “es importante que” (class 091): subjunctive. “Lo importante es que vengan todos.” For general advice, the infinitive is easiest: “Lo mejor es esperar”.' },
          { kind: 'compare', title: '¿El nuevo o lo nuevo? · The new one or what’s new?', columns: [
            { tone: 'blue', label: 'EL / LA + adjetivo · una persona o cosa', sentence: '¿Qué vecino? [[El nuevo|blue]], el del quinto piso.', idea: 'Hay un nombre detrás: el vecino nuevo.', en: 'Which neighbour? The new one, the one on the fifth floor.' },
            { tone: 'orange', label: 'LO + adjetivo · una idea', sentence: '[[Lo nuevo|orange]] es que ya tenemos presupuesto.', idea: 'No hay nombre: la novedad, lo que es nuevo.', en: 'What’s new is that we have a quote now.' },
          ] },
          { kind: 'tip', icon: '👀', title: 'Solo para reconocer · Just recognise it', text: 'A veces oirás **lo + adjetivo + que**: «¡No sabes **lo difícil que** es encontrar un técnico!». Significa «qué difícil es», con emoción (how difficult it is). Hoy solo tienes que entenderlo; lo practicas en la clase 192.', en: 'Sometimes you will hear lo + adjective + que: “¡No sabes lo difícil que es encontrar un técnico!”. It means “how difficult it is”, with emotion. Today you only need to understand it; you practise it in class 192.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ de este edificio es la luz: todas las casas tienen mucho sol.', options: ['El mejor', 'La mejor', 'Lo mejor'], answer: 2, why: 'La parte mejor, sin nombre: **lo mejor** (masculino singular).', en: 'The best thing about this building is the light: every flat gets lots of sun.' },
            { prompt: 'Hugo piensa ___ que Pilar: hay que arreglar la azotea ya.', options: ['la misma', 'el mismo', 'lo mismo'], answer: 2, why: 'La misma idea, no una persona ni una cosa: **lo mismo**.', en: 'Hugo thinks the same as Pilar: the roof terrace needs fixing now.' },
          ] },
        ] },
        { title: '¿Lo que, que, qué o el que? · Which one?', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Hay un nombre? Is there a noun?', blocks: [
          { kind: 'compare', title: 'Cuatro palabras parecidas · Four similar words', columns: [
            { tone: 'blue', label: 'QUE · después de un nombre', sentence: 'El técnico [[que|blue]] vino ayer no arregló nada.', idea: 'El nombre está justo antes (clase 066).', en: 'The technician who came yesterday didn’t fix anything.' },
            { tone: 'blue', label: 'EL QUE / LA QUE · un nombre conocido', sentence: '¿Qué ascensor? [[El que|blue]] está al fondo.', idea: 'No repites «ascensor», pero existe: el que (clase 112).', en: 'Which lift? The one at the back.' },
            { tone: 'violet', label: 'LO QUE · una idea', sentence: '[[Lo que|violet]] dijo el técnico no está claro.', idea: 'No hay ningún nombre: unas palabras, una idea.', en: 'What the technician said isn’t clear.' },
            { tone: 'blue', label: 'QUÉ · una pregunta', sentence: '¿[[Qué|blue]] dijo el técnico?', idea: 'Pregunta o exclamación: con tilde.', en: 'What did the technician say?' },
          ] },
          { kind: 'decide', title: '¿Qué palabra uso? · Which word do I use?', steps: [
            { q: '¿Es una pregunta o una exclamación? (¿…?, ¡…!)', yes: 'Usa **qué** con tilde: «¿Qué dijo el técnico?».', no: 'next' },
            { q: '¿Hay un nombre justo antes? (el técnico, la vecina)', yes: 'Usa **que**: «el técnico que vino ayer».', no: 'next' },
            { q: '¿Hablas de un nombre conocido sin repetirlo? (el ascensor, la propuesta)', yes: 'Usa **el que / la que / los que / las que**: «la propuesta de Hugo → la que hizo Hugo».', no: 'Usa **lo que**: una idea o una cosa sin nombre. «Lo que dijo no está claro».' },
          ] },
          { kind: 'tip', icon: '💡', title: 'No sé qué / No sé lo que · Both are fine', text: 'Después de **saber, entender, preguntar** o **explicar**, las dos son correctas: «No sé **qué** quiere» y «No sé **lo que** quiere». En las demás frases, la regla de arriba funciona.', en: 'After saber, entender, preguntar or explicar, both are correct: “No sé qué quiere” and “No sé lo que quiere”. In other sentences, the rule above works.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Qué propuesta prefieres? —___ hizo Hugo.', options: ['Que', 'Lo que', 'La que'], answer: 2, why: 'Hablas de **la propuesta** (femenino) sin repetirla: la que.', en: '“Which proposal do you prefer?” “The one Hugo made.”' },
            { prompt: '___ hizo Hugo el sábado fue limpiar el cuarto.', options: ['Lo que', 'El que', 'Qué'], answer: 0, why: 'No hay nombre: una acción, una idea. **Lo que**.', en: 'What Hugo did on Saturday was clean the room.' },
            { prompt: 'La vecina ___ vive en el cuarto piso se llama Pilar.', options: ['que', 'qué', 'lo que'], answer: 0, why: 'El nombre está justo antes (la vecina): **que**.', en: 'The neighbour who lives on the fourth floor is called Pilar.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Mira bien el «lo». Watch the “lo”.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla: ¿falta «lo»?, ¿hay un verbo después de «lo de»?, ¿hay un nombre conocido? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla. Toca para ver la corrección. (What is wrong? Tap to see the correction.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Que me preocupa es el horario.', right: 'Lo que me preocupa es el horario.', why: 'Sin nombre antes, «what» es **lo que**. (No noun before: lo que.)' },
            { wrong: 'Te cuento todo que dijo el técnico.', right: 'Te cuento todo lo que dijo el técnico.', why: '«Everything (that)» es **todo lo que**. El «lo» no desaparece.' },
            { wrong: 'Lo de pasó ayer fue un susto.', right: 'Lo que pasó ayer fue un susto. / Lo de ayer fue un susto.', why: 'Después de «lo de» no va un verbo conjugado: con verbo, **lo que**.' },
            { wrong: 'La buena es que el seguro paga la mitad.', right: 'Lo bueno es que el seguro paga la mitad.', why: 'La parte buena: **lo** + adjetivo en masculino singular.' },
            { wrong: '—¿Qué presupuesto prefieres? —Lo que es más barato.', right: '—¿Qué presupuesto prefieres? —El que es más barato.', why: 'Hablas de un presupuesto (un nombre conocido): **el que**, no lo que.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ no me gusta es la reunión tan tarde.', options: ['Lo que', 'El que', 'Qué'], answer: 0, why: 'No hay nombre ni pregunta: una idea con **lo que**.', en: 'What I don’t like is having the meeting so late.' },
            { prompt: '¿Cómo va ___ cambiar la puerta de la entrada?', options: ['el de', 'lo que', 'lo de'], answer: 2, why: 'Un asunto conocido + infinitivo: **lo de** cambiar la puerta.', en: 'How’s the plan to change the front door going?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno presenta un problema de su casa o de su barrio en tres frases: «Lo que me preocupa es…», «Lo de… » y «Lo bueno es que…». Tú preguntas: «¿Por qué lo de y no lo que?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del jueves', coach: 'Toca las formas marcadas. Tap the marked forms.',
      steps: [
        { title: 'Tres temas · Three topics', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Pilar y Hugo. Después tu alumno toca cada forma marcada y dice si presenta una idea, un tema conocido o un aspecto.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada: ¿idea, tema conocido o aspecto? (Idea, known topic or aspect?)' } },
          { kind: 'explore', title: 'La reunión de vecinos', setting: 'Jueves, ocho de la tarde, en la entrada del edificio de la calle Olmo. Lucía, la presidenta, abre la reunión. Están Pilar, del cuarto piso, y Hugo, del segundo. (Thursday, 8 p.m., in the entrance hall of the building on calle Olmo. Lucía, the chair, opens the meeting. Pilar, from the fourth floor, and Hugo, from the second, are there.)', lines: [
            { who: 'Lucía', text: 'Buenas tardes a todos. Primer tema: [[lo del|teal]] ascensor. Se rompió otra vez el lunes.', en: 'Good evening, everyone. First topic: the lift. It broke down again on Monday.' },
            { who: 'Pilar', text: 'Pues a mí [[lo que|violet]] me preocupa es la azotea. Y [[lo de|teal]] ayer fue un susto: entró agua en mi cocina.', en: 'Well, what worries me is the roof terrace. And yesterday was a real scare: water got into my kitchen.' },
            { who: 'Hugo', text: 'Pasó [[lo mismo|orange]] hace dos años, ¿no?', en: 'The same thing happened two years ago, didn’t it?' },
            { who: 'Lucía', text: 'Exacto. Tengo dos presupuestos para arreglar la azotea. [[Lo bueno|orange]] es que el seguro paga la mitad.', en: 'Exactly. I have two quotes for fixing the roof terrace. The good thing is that the insurance pays half.' },
            { who: 'Pilar', text: '¿Y [[lo malo|orange]]?', en: 'And the bad part?' },
            { who: 'Lucía', text: 'Pues [[lo malo|orange]] es que las obras empiezan a las siete y media de la mañana.', en: 'Well, the bad part is that the work starts at half past seven in the morning.' },
            { who: 'Hugo', text: 'Uf. Yo trabajo de noche, así que [[lo que|violet]] pido es empezar un poco más tarde, a las nueve.', en: 'Ugh. I work nights, so what I’m asking is to start a bit later, at nine.' },
            { who: 'Lucía', text: 'Lo apunto. Último tema: [[lo de|teal]] las bicis. Hugo, explícalo tú.', en: 'I’ll write that down. Last topic: the bikes. Hugo, you explain it.' },
            { who: 'Hugo', text: 'Muchos vecinos tenemos bici y no hay sitio. Por eso, [[lo que|violet]] propongo es usar el cuarto vacío del patio.', en: 'Lots of us have bikes and there’s no space. So what I’m proposing is to use the empty room in the courtyard.' },
            { who: 'Pilar', text: '¿Qué cuarto? ¿[[El que|blue]] tiene la puerta verde? Está lleno de cajas viejas.', en: 'Which room? The one with the green door? It’s full of old boxes.' },
            { who: 'Hugo', text: 'Ese. Y [[lo importante|orange]] es vaciarlo. Si quieren, el sábado lo limpiamos entre todos.', en: 'That one. And the important thing is to empty it. If you like, we can all clean it together on Saturday.' },
            { who: 'Lucía', text: 'Me parece muy bien. [[Todo lo que|violet]] decidimos hoy lo mando al grupo esta noche.', en: 'Sounds great. I’ll send everything we decided today to the group tonight.' },
          ], notes: {
            'lo del': '**Lo de** + el ascensor = **lo del** ascensor: el problema que todos conocen. Lucía no necesita explicarlo (the lift business).',
            'lo que': '**Lo que** + verbo + **es**: Pilar, Hugo… ponen el foco. Lo importante va al final: «la azotea», «empezar más tarde», «usar el cuarto».',
            'lo de': '**Lo de** + adverbio o nombre: «lo de ayer» (lo que pasó ayer), «lo de las bicis» (la propuesta de las bicis). Un asunto conocido, sin verbo después.',
            'lo mismo': '**Lo mismo** = the same thing. No es una persona ni un objeto: es la misma situación.',
            'Lo bueno': '**Lo** + adjetivo: la parte buena del tema. Después, **es que** + un hecho en indicativo (paga).',
            'lo malo': 'La parte mala. Siempre **lo**, aunque se refiera a «las obras» (femenino plural): «lo malo», no «las malas».',
            'El que': '**El que** = el cuarto que. Pilar no repite «cuarto», pero hay un nombre conocido: por eso «el que», no «lo que».',
            'lo importante': '**Lo importante es** + infinitivo (vaciarlo): para decir qué es lo esencial, sin sujeto concreto.',
            'Todo lo que': '**Todo lo que** = everything (that). Fíjate: «Todo lo que decidimos… **lo** mando»: el objeto va primero y «lo» lo repite (clase 111).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pasó ayer en casa de Pilar?', options: ['Se rompió el ascensor.', 'Entró agua en la cocina.', 'Hubo mucho ruido de obras.'], answer: 1, why: '«Lo de ayer fue un susto: entró agua en mi cocina». El ascensor se rompió el lunes.', en: 'What happened at Pilar’s place yesterday?' },
            { prompt: '¿Qué pide Hugo para las obras?', options: ['Un presupuesto más barato.', 'Empezar a las nueve.', 'Hacerlas el sábado.'], answer: 1, why: '«Lo que pido es empezar un poco más tarde, a las nueve». Hugo trabaja de noche.', en: 'What does Hugo ask for regarding the building work?' },
            { prompt: '¿Qué es lo bueno de arreglar la azotea?', options: ['Que Hugo lo hace gratis.', 'Que el seguro paga la mitad.', 'Que las obras son cortas.'], answer: 1, why: '«Lo bueno es que el seguro paga la mitad».', en: 'What is the good thing about fixing the roof terrace?' },
          ] },
        ] },
        { title: '¿Lo que, lo de o el que? · Which one fits?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'Las notas de Lucía · Lucía’s notes', categories: [
            { id: 'loque', label: 'LO QUE · + verbo, una idea', tone: 'violet' },
            { id: 'lode', label: 'LO DE · + nombre / infinitivo / ayer', tone: 'teal' },
            { id: 'elque', label: 'EL QUE / LA QUE · un nombre conocido', tone: 'blue' },
          ], items: [
            { text: '___ la fuga del año pasado', answer: 'lode', why: 'Un asunto conocido + nombre, sin verbo: lo de.' },
            { text: '___ me contó Pilar', answer: 'loque', why: 'Hay un verbo conjugado (contó) y no hay nombre: lo que.' },
            { text: 'el cuarto del patio: ___ tiene la puerta verde', answer: 'elque', why: 'Hablamos del cuarto sin repetirlo: el que.' },
            { text: '___ cambiar la puerta de la entrada', answer: 'lode', why: 'Asunto conocido + infinitivo: lo de.' },
            { text: '___ quiere el administrador', answer: 'loque', why: 'Una idea con verbo (quiere), sin nombre: lo que.' },
            { text: 'la propuesta de Hugo: ___ votamos el jueves', answer: 'elque', why: 'Un nombre conocido femenino (la propuesta): la que.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Hay en tu casa o en tu trabajo un tema pendiente, como lo del ascensor?». Tu alumno responde con «lo de…» y una frase con «lo que me preocupa es…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Idea, tema o aspecto. Idea, topic or aspect.',
      steps: [
        { title: 'El acta de la reunión · The minutes', blocks: [
          { kind: 'choice', items: [
            { context: 'Lucía escribe el acta. (Lucía writes the minutes.)', prompt: '___ más preocupa a los vecinos es la azotea.', options: ['Qué', 'Lo que', 'Que'], answer: 1, why: 'No hay nombre antes ni pregunta: lo que + verbo + es.', en: 'What worries the residents most is the roof terrace.' },
            { context: 'Lucía escribe el acta. (Lucía writes the minutes.)', prompt: 'Hugo explicó ___ las bicis.', options: ['lo de', 'las de', 'lo que'], answer: 0, why: 'Un asunto conocido + nombre: lo de las bicis.', en: 'Hugo explained the bike plan.' },
            { context: 'Sobre la azotea. (About the roof terrace.)', prompt: '___ es que el seguro paga la mitad.', options: ['El bueno', 'Lo bueno', 'La buena'], answer: 1, why: 'La parte buena del tema: lo + adjetivo en masculino singular.', en: 'The good thing is that the insurance pays half.' },
            { context: 'Al final del acta. (At the end of the minutes.)', prompt: 'Lucía mandó al grupo todo ___ decidieron.', options: ['el que', 'que', 'lo que'], answer: 2, why: 'Everything (that): todo lo que.', en: 'Lucía sent the group everything they decided.' },
            { context: 'Los dos presupuestos. (The two quotes.)', prompt: 'Hay dos presupuestos. Los vecinos prefieren ___ es más barato.', options: ['lo que', 'que', 'el que'], answer: 2, why: 'Hablas de un presupuesto sin repetirlo: el que.', en: 'There are two quotes. The residents prefer the one that is cheaper.' },
          ] },
        ] },
        { title: '¿Qué forma falta? · Which form is missing?', blocks: [
          { kind: 'classify', title: '¿Qué quieres decir? · What do you want to say?', categories: [
            { id: 'loque', label: 'LO QUE · una idea con verbo', tone: 'violet' },
            { id: 'lode', label: 'LO DE · un tema conocido', tone: 'teal' },
            { id: 'loadj', label: 'LO + ADJETIVO · un aspecto', tone: 'orange' },
          ], items: [
            { text: 'Quieres sacar el tema del ascensor, que todos conocen. (Raise the lift issue everyone knows about.)', answer: 'lode', why: '«¿Cómo va lo del ascensor?»: un asunto conocido + nombre.' },
            { text: 'Quieres decir cuál es la parte negativa de las obras. (Say what the downside of the work is.)', answer: 'loadj', why: '«Lo malo es el ruido»: la parte mala, lo + adjetivo.' },
            { text: 'Quieres decir qué necesitan los vecinos, con el foco al final: voluntarios. (Say what the residents need, with the focus at the end.)', answer: 'loque', why: '«Lo que necesitamos son voluntarios»: lo que + verbo + son.' },
            { text: 'Quieres decir que tienes la misma opinión que Pilar. (Say you agree with Pilar.)', answer: 'loadj', why: '«Pienso lo mismo que Pilar»: lo + mismo.' },
            { text: 'Quieres preguntar por la fuga de ayer, sin explicarla otra vez. (Ask about yesterday’s leak without explaining it again.)', answer: 'lode', why: '«¿Qué tal lo de ayer?»: un asunto conocido + adverbio.' },
            { text: 'Quieres contar todo el mensaje del técnico. (Pass on everything the technician said.)', answer: 'loque', why: '«Te cuento todo lo que dijo»: hay un verbo conjugado (dijo).' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Lo de cambiar la puerta lo votamos en junio.', ok: true, why: 'Correcta: lo de + infinitivo (un asunto conocido). El objeto va primero y «lo» lo repite.' },
            { sentence: 'Que más me molesta es el ruido de la mañana.', ok: false, options: ['Qué más me molesta es el ruido de la mañana.', 'El que más me molesta es el ruido de la mañana.', 'Lo que más me molesta es el ruido de la mañana.'], answer: 2, why: 'Sin nombre antes, «what» es lo que. «Qué» es para preguntas; «el que» necesita un nombre conocido.' },
            { sentence: 'Hugo hizo todo que pudo para vaciar el cuarto.', ok: false, options: ['Hugo hizo todo el que pudo para vaciar el cuarto.', 'Hugo hizo todo lo que pudo para vaciar el cuarto.', 'Hugo hizo todo qué pudo para vaciar el cuarto.'], answer: 1, why: 'Everything he could: todo lo que. No hay ningún nombre masculino: no «el que».' },
            { sentence: 'Lo malo es que el técnico no puede venir hasta el viernes.', ok: true, why: 'Correcta: lo + adjetivo y, después de «es que», un hecho en indicativo (puede).' },
            { sentence: 'Lo de pasó el lunes con el ascensor fue un desastre.', ok: false, options: ['El que pasó el lunes con el ascensor fue un desastre.', 'Lo que pasó el lunes con el ascensor fue un desastre.', 'Lo del pasó el lunes con el ascensor fue un desastre.'], answer: 1, why: 'Hay un verbo conjugado (pasó): lo que. «Lo de» va con nombre, infinitivo o adverbio.' },
          ] },
        ] },
        { title: 'Óscar no fue a la reunión · Óscar missed the meeting', blocks: [
          { kind: 'chat-fill', title: 'Óscar, del primer piso, escribe a Lucía · Óscar, from the first floor, texts Lucía', lines: [
            { who: 'Óscar', text: 'Hola, Lucía. No pude ir a la reunión. ¿Qué pasó con ___ ascensor?', options: ['el que', 'lo del', 'lo que'], answer: 1, why: 'Un asunto conocido + nombre: lo de + el = lo del ascensor.' },
            { who: 'Lucía', text: 'El técnico viene el viernes. ___ es que la reparación es pequeña.', options: ['La buena', 'Lo que bueno', 'Lo bueno'], answer: 2, why: 'La parte buena: lo bueno + es que + un hecho.' },
            { who: 'Óscar', text: '¡Menos mal! ¿Y ___ la azotea?', options: ['qué', 'lo que', 'lo de'], answer: 2, why: 'Otro asunto conocido + nombre: lo de la azotea.' },
            { who: 'Lucía', text: 'La arreglamos en junio. Ahora ___ necesitamos es elegir uno de los dos presupuestos.', options: ['que', 'lo que', 'la que'], answer: 1, why: 'Lo que + verbo + es: pones el foco en lo importante, al final.' },
            { who: 'Óscar', text: 'Pues yo pienso ___ que Hugo: las obras, mejor a las nueve.', options: ['la misma', 'lo mismo', 'el mismo'], answer: 1, why: 'La misma idea, no una persona: lo mismo.' },
            { who: 'Lucía', text: 'Ya está decidido: a las nueve. ¡Gracias, Óscar!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['me', 'Lo', 'es', 'que', 'preocupa', 'el', 'horario'], accept: ['Lo que me preocupa es el horario', 'El horario es lo que me preocupa'], en: 'What worries me is the timetable.' },
            { tiles: ['fue', 'Lo', 'ayer', 'de', 'un', 'susto'], accept: ['Lo de ayer fue un susto'], en: 'What happened yesterday was a scare.' },
            { tiles: ['es', 'Lo', 'vaciar', 'importante', 'el', 'cuarto'], accept: ['Lo importante es vaciar el cuarto', 'Vaciar el cuarto es lo importante'], en: 'The important thing is to empty the room.' },
            { tiles: ['todo', 'Hicimos', 'que', 'lo', 'pudimos'], accept: ['Hicimos todo lo que pudimos'], en: 'We did everything we could.' },
          ] },
        ] },
        { title: 'Pon el foco · Put the focus', blocks: [
          { kind: 'rewrite', title: 'De frase normal a «lo» · From a plain sentence to “lo”', items: [
            { prompt: 'Me preocupa la fuga de agua.', instruction: 'Pon el foco con «Lo que… es».', accept: ['Lo que me preocupa es la fuga de agua'] },
            { prompt: 'Propongo vaciar el cuarto del patio.', instruction: 'Pon el foco con «Lo que… es».', accept: ['Lo que propongo es vaciar el cuarto del patio'] },
            { prompt: 'La parte mala es que el ascensor es muy viejo.', instruction: 'Cambia «la parte mala» por lo + adjetivo.', accept: ['Lo malo es que el ascensor es muy viejo'] },
            { prompt: 'El asunto de las bicis: ¿cómo va?', instruction: 'Haz una pregunta corta con «lo de». Empieza con «¿Cómo va…?».', accept: ['Cómo va lo de las bicis', 'Como va lo de las bicis'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige un tema pendiente real (en casa, en el trabajo, en su barrio) y lo presenta en tres frases: «Lo de… », «Lo que me preocupa es…», «Lo bueno / lo malo es que…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El resumen para el grupo · The summary for the group', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué manda Lucía el audio?). Segunda escucha: tu alumno levanta la mano con cada «lo de» y da una palmada con cada «lo que» o «lo bueno / lo malo». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en cómo Lucía presenta cada tema: «lo de…», «lo bueno…», «lo que…». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'El audio de Lucía', channel: 'AUDIO · GRUPO «VECINOS CALLE OLMO»', src: '/audio/grammar-live/413.mp3',
            before: 'Esa noche, Lucía manda un audio al grupo del edificio para los vecinos que no fueron a la reunión. ¿Qué temas crees que va a resumir? (That night, Lucía sends a voice note to the building group. Which topics do you think she will sum up?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Lucía pide dinero para el ascensor.', 'Lucía cancela la reunión del jueves.', 'Lucía resume los tres temas y lo que decidieron.'], answer: 2, why: 'Habla del ascensor, de la azotea y de las bicis, y de lo que van a hacer.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cuándo viene el técnico del ascensor?', options: ['El viernes por la mañana.', 'El sábado a las diez.', 'En junio.'], answer: 0, why: '«El técnico viene el viernes por la mañana».', en: 'When is the lift technician coming?' },
              { prompt: '¿Por qué arreglan la azotea?', options: ['Porque el seguro lo pide.', 'Por el agua que entró en la cocina de Pilar.', 'Porque Hugo quiere un cuarto para bicis.'], answer: 1, why: '«Lo de ayer en la cocina de Pilar no puede pasar otra vez».', en: 'Why are they fixing the roof terrace?' },
              { prompt: '¿A qué hora empiezan las obras?', options: ['A las nueve.', 'A las siete y media.', 'A las diez.'], answer: 0, why: '«Las obras van a empezar a las nueve, no a las siete y media».', en: 'What time does the building work start?' },
              { prompt: '¿Qué tienen que llevar los vecinos el sábado?', options: ['Dinero.', 'Guantes.', 'Cajas.'], answer: 1, why: '«Lo que necesitamos son manos, no dinero: traigan guantes».', en: 'What do the residents have to bring on Saturday?' },
            ],
            transcript: 'Hola, vecinos, soy Lucía. Les resumo la reunión de hoy para los que no pudieron venir. Primero, [[lo del|teal]] ascensor: el técnico viene el viernes por la mañana y, por suerte, la reparación es pequeña. Después hablamos de la azotea. [[Lo de|teal]] ayer en la cocina de Pilar no puede pasar otra vez, así que vamos a arreglarla en junio. [[Lo bueno|orange]] es que el seguro paga la mitad. [[Lo malo|orange]] es el ruido, pero las obras van a empezar a las nueve, no a las siete y media. Y [[lo de|teal]] las bicis: el sábado a las diez vaciamos el cuarto del patio, [[el que|blue]] tiene la puerta verde. [[Lo que|violet]] necesitamos son manos, no dinero: traigan guantes, por favor. Mañana les mando el acta con [[todo lo que|violet]] decidimos. Si tienen dudas, me escriben. ¡Gracias y buenas noches!',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Óscar y responde al audio con tres frases: una con «lo de», una con «lo que» y una con «lo bueno» o «lo malo».', self: 'Responde a Lucía en voz alta como vecino o vecina: di qué te parece cada tema con «lo de…», «lo que…» y «lo bueno / lo malo es que…». (Answer Lucía aloud with lo de, lo que and lo bueno / lo malo.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu edificio, tu barrio', coach: 'Presenta el tema, después opina. Name the topic, then give your view.',
      steps: [
        { title: 'Temas de casa y de barrio · Home and neighbourhood topics', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de su casa, su edificio o su barrio, reales o inventados. Cuando falta «lo», tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta y responde en voz alta sobre tu casa o tu barrio. Si quieres, escribe tu respuesta. (Answer aloud about your home or neighbourhood.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué es lo que más te gusta de tu casa o de tu barrio? · What do you like most about your home or neighbourhood?', followUps: ['¿Y lo que menos te gusta? (And what do you like least?)', '¿Siempre fue así? (Was it always like that?)'], phrases: ['[[Lo que|violet]] más me gusta es…', '[[Lo que|violet]] más me gusta son…', '[[Lo que|violet]] menos me gusta es que…'], hint: 'Lo que + verbo + es (singular) o son (plural). Lo importante, al final.', example: 'Lo que más me gusta de mi barrio son los parques. Lo que menos me gusta es que hay pocas tiendas abiertas por la noche.', next: 'Ahora, lo que te molesta.', teacher: 'Responde tú también con una frase con foco: «Lo que más me gusta de mi calle es…». Así tu alumno oye otra vez la estructura.' },
            { q: '¿Qué te molesta de vivir con vecinos (o con compañeros de piso)? · What bothers you about living with neighbours (or flatmates)?', followUps: ['¿Hablaste con ellos? (Did you talk to them?)', '¿Y a ellos qué les molesta de ti? (And what bothers them about you?)'], phrases: ['[[Lo que|violet]] me molesta es que + subjuntivo…', '[[Lo que|violet]] me molesta son los ruidos / las fiestas…', 'A mí me pasa [[lo mismo|orange]].'], hint: '«Lo que me molesta es que…» va con subjuntivo, como «me molesta que» (clase 092).', example: 'Lo que me molesta es que mis vecinos pongan la lavadora a medianoche. Lo que no me molesta son los niños: me gusta oírlos jugar.', next: 'Ahora, un tema pendiente.' },
            { q: '¿Hay un tema pendiente en tu casa, tu trabajo o tu barrio? Preséntalo con «lo de…». · Is there a pending issue at home, at work or in your area?', followUps: ['¿Qué pasó exactamente? (What exactly happened?)', '¿Cómo va ahora? (How is it going now?)'], phrases: ['¿Te conté [[lo de|teal]]…?', '[[Lo del|teal]] ascensor / [[lo de|teal]] la calefacción…', 'Al final, [[lo de|teal]]… se resolvió / sigue igual.'], hint: 'Primero el tema con «lo de» + nombre o infinitivo. Después explicas con un verbo: «lo que pasó es que…».', example: '¿Te conté lo de la calefacción? Se rompió en enero. Lo que pasó es que el técnico tardó tres semanas en venir. Ahora funciona.', next: 'Ahora, lo bueno y lo malo.', teacher: 'Pregunta tú con «lo de» sobre algo que tu alumno contó antes en otra clase: «¿Y qué pasó con lo de…?».' },
            { q: '¿Qué es lo bueno y lo malo de vivir en tu ciudad? · What are the good and bad things about living in your city?', followUps: ['¿Y lo mejor de todo? (And the best thing of all?)', '¿Lo peor tiene solución? (Can the worst part be solved?)'], phrases: ['[[Lo bueno|orange]] es que…', '[[Lo malo|orange]] es que…', '[[Lo mejor|orange]] / [[Lo peor|orange]] es…'], hint: 'Lo + adjetivo en masculino singular. Con «es que» + un hecho, indicativo.', example: 'Lo bueno es que hay mucha vida cultural. Lo malo es que los alquileres son carísimos. Lo peor, para mí, es el tráfico.', next: 'Ahora, la votación del edificio.' },
            { q: 'Eres vecino o vecina de la calle Olmo. ¿Qué opinas de los tres temas: el ascensor, la azotea y las bicis? · You live on calle Olmo. What do you think of the three topics?', followUps: ['¿Con quién estás de acuerdo: con Pilar o con Hugo? (Who do you agree with?)', '¿Qué presupuesto prefieres? (Which quote do you prefer?)'], phrases: ['Sobre [[lo de|teal]] la azotea, …', 'Pienso [[lo mismo|orange]] que…', 'Prefiero [[el que|blue]]…', '[[Lo importante|orange]] es…'], hint: 'Presenta cada tema con «lo de», compara con «el que / la que» y termina con «lo importante es…».', example: 'Sobre lo de la azotea, pienso lo mismo que Pilar: hay que arreglarla ya. Prefiero el presupuesto que empieza a las nueve. Lo importante es arreglarla antes del otoño.', next: 'Ahora, la reunión.' },
            { q: 'Ahora tú presides la reunión. Abre la reunión y presenta tres temas. · Now you chair the meeting. Open it and present three topics.', followUps: ['¿Qué es lo más urgente? (What is most urgent?)', '¿Qué propones tú? (What do you propose?)'], phrases: ['Primer tema: [[lo de|teal]]…', '[[Lo que|violet]] propongo es…', '[[Lo bueno|orange]] es que… / [[Lo malo|orange]] es que…', '[[Todo lo que|violet]] decidamos hoy…'], hint: 'Un tema con «lo de», una propuesta con «lo que… es» y un aspecto con «lo bueno / lo malo».', example: 'Buenas tardes. Primer tema: lo de la entrada. Está muy sucia. Lo que propongo es contratar una limpieza cada semana. Lo bueno es que no es caro; lo malo es que sube la cuota un poco.', teacher: 'Tú eres un vecino difícil y reaccionas: «¿Y lo del ruido qué?», «Pues yo no pienso lo mismo». Tu alumno responde con las mismas formas. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué es lo que más te gusta de…?», «¿Cómo va lo de…?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta, como si hablaras con un vecino: «¿Cómo va lo de…?», «¿Qué es lo que más te molesta?». (Now ask the questions aloud.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Mi opinión por escrito', coach: 'Tema, problema, propuesta. Topic, problem, proposal.',
      steps: [
        { title: 'Un correo para la presidenta · An email to the chair', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «lo»: ¿presenta una idea (lo que), un tema (lo de) o un aspecto (lo bueno)? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada «lo»: ¿idea, tema o aspecto? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'No puedo ir a la reunión · I can’t make the meeting', situation: 'No puedes ir a la próxima reunión de vecinos (o de tu trabajo, de tu club). Escribe un correo a Lucía, la presidenta, con tu opinión sobre los temas pendientes antes de la votación. (You can’t go to the next residents’ meeting, or a meeting at your work or club. Write an email to Lucía, the chair, with your opinion on the pending topics before the vote.)', task: [
            'Saluda y explica por qué escribes. (Say hello and why you are writing.)',
            'Presenta al menos dos temas con «lo de». (Introduce at least two topics with lo de.)',
            'Di qué te preocupa o qué propones con «Lo que… es / son». (Say what worries you or what you propose.)',
            'Valora con «lo bueno», «lo malo» o «lo importante». (Weigh things up with lo bueno, lo malo or lo importante.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['Hola, Lucía:', 'El jueves no puedo ir a la reunión, así que te escribo mi opinión.', 'Sobre lo de…', 'Lo que me preocupa es…', 'Lo que propongo es…', 'Lo bueno es que… / Lo malo es que…', 'En cuanto a lo de…, pienso lo mismo que…', 'Un saludo,'],
            words: ['lo que', 'lo de', 'lo del', 'todo lo que', 'lo bueno', 'lo malo', 'lo mejor', 'lo peor', 'lo importante', 'lo mismo', 'el que', 'la que'],
            model: 'Hola, Lucía: El jueves no puedo ir a la reunión porque tengo turno en el hospital, así que te escribo mi opinión. Sobre [[lo de|teal]] la azotea, estoy de acuerdo con el presupuesto más barato. [[Lo bueno|orange]] es que el seguro paga la mitad; [[lo malo|orange]] es el ruido, pero empezar a las nueve me parece bien. [[Lo que|violet]] me preocupa es el ascensor: es muy viejo y se rompe cada mes. [[Lo que|violet]] propongo es pedir un informe completo al técnico. En cuanto a [[lo de|teal]] las bicis, pienso [[lo mismo|orange]] que Hugo: el cuarto del patio es perfecto. [[Lo importante|orange]] es que todos ayudemos el sábado. Un saludo, Marina (tercer piso).',
            minWords: 80,
            checks: [
              { label: 'Una idea con lo que (an idea with lo que)', pattern: '(?<!\\p{L})lo\\s+que(?!\\p{L})', tip: 'Pon el foco: «Lo que me preocupa es el ascensor», «Lo que propongo es…».' },
              { label: 'Un tema con lo de / lo del (a topic with lo de)', pattern: '(?<!\\p{L})lo\\s+del?(?!\\p{L})', tip: 'Presenta un tema conocido: «Sobre lo de la azotea…», «En cuanto a lo del ascensor…».' },
              { label: 'Un aspecto con lo + adjetivo (lo bueno, lo malo…)', pattern: '(?<!\\p{L})lo\\s+(?:bueno|malo|mejor|peor|importante|mismo|único|curioso|raro|difícil|fácil|normal)(?!\\p{L})', tip: 'Valora: «Lo bueno es que…», «Lo malo es…», «Lo importante es…».' },
            ],
            warnings: [
              { pattern: '(?:^|[.!?:;]\\s*)que\\s+(?:más\\s+)?(?:me|te|le|nos|les)\\s+(?:preocupa|preocupan|molesta|molestan|gusta|gustan|interesa|interesan)(?!\\p{L})', why: 'Sin nombre antes, «what» es **lo que**: «**Lo que** me preocupa es…».' },
              { pattern: '(?<!sobre\\s)(?<!\\p{L})todo\\s+que(?!\\p{L})', why: '«Everything (that)» es **todo lo que**: «todo lo que decidimos».' },
              { pattern: '(?<!\\p{L})la\\s+(?:buena|mala|importante)\\s+es\\s+que(?!\\p{L})', why: 'Para «la parte buena / mala», usa **lo** + adjetivo en masculino: «**Lo bueno** es que…».' },
              { pattern: '(?<!\\p{L})lo\\s+de\\s+(?:pasó|ocurrió|dijo|dijiste|hablamos|decidimos)(?!\\p{L})', why: 'Con un verbo conjugado, usa **lo que**: «lo que pasó», «lo que dijo».' },
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
            { tone: 'violet', label: 'IDEA · LO QUE', formula: 'lo que + verbo · todo lo que · Lo que… es / son', example: 'Lo que me preocupa es la azotea. Lo que necesitamos son manos.', caption: 'una cosa o una idea sin nombre; foco al final', en: 'a thing or idea with no noun; the focus goes last' },
            { tone: 'teal', label: 'TEMA · LO DE', formula: 'lo de + nombre / infinitivo / ayer / persona', example: '¿Cómo va lo del ascensor? Lo de ayer fue un susto.', caption: 'un asunto que ya conocemos; sin verbo conjugado después', en: 'a matter we already know about; no conjugated verb after it' },
            { tone: 'orange', label: 'ASPECTO · LO + ADJETIVO', formula: 'lo bueno · lo malo · lo mejor · lo peor · lo importante · lo mismo', example: 'Lo bueno es que el seguro paga la mitad.', caption: 'una parte del tema; adjetivo en masculino singular', en: 'one side of the topic; adjective in masculine singular' },
            { tone: 'blue', label: 'CON NOMBRE · QUE / EL QUE', formula: 'nombre + que · el que / la que (nombre conocido)', example: 'El técnico que vino… ¿Qué cuarto? El que tiene la puerta verde.', caption: 'si hay un nombre, no uses «lo»', en: 'if there is a noun, don’t use lo' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿hay un nombre? Si lo hay, **que** o **el que / la que**. Si no lo hay: con verbo conjugado, **lo que** («lo que pasó»); con nombre, infinitivo o «ayer», **lo de** («lo de ayer»); con un adjetivo, **lo** + adjetivo («lo bueno»). Y para poner el foco: «**Lo que** necesito **es**…».', en: 'Ask yourself: is there a noun? If there is, que or el que / la que. If not: with a conjugated verb, lo que (“lo que pasó”); with a noun, an infinitive or “ayer”, lo de (“lo de ayer”); with an adjective, lo + adjective (“lo bueno”). And to put the focus: “Lo que necesito es…”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ más me cuesta de mi trabajo es madrugar.', options: ['Qué', 'El que', 'Lo que'], answer: 2, why: 'Una idea sin nombre y sin pregunta: lo que + verbo + es.', en: 'What I find hardest about my job is getting up early.' },
            { prompt: '¿Al final qué pasó con ___ tu hermana? ¿Encontró trabajo?', options: ['lo que', 'la que', 'lo de'], answer: 2, why: 'Un asunto conocido relacionado con una persona: lo de tu hermana.', en: 'So what happened in the end with your sister’s situation? Did she find a job?' },
            { prompt: 'De todos los cafés del barrio, ___ más me gusta es el de la esquina.', options: ['que', 'lo que', 'el que'], answer: 2, why: 'Hablas de un café (nombre conocido) sin repetirlo: el que.', en: 'Of all the cafés in the area, the one I like best is the one on the corner.' },
            { prompt: '___ de este curso es que las clases son cortas.', options: ['El mejor', 'La mejor', 'Lo mejor'], answer: 2, why: 'La parte mejor del curso: lo mejor, en masculino singular.', en: 'The best thing about this course is that the classes are short.' },
            { prompt: 'No es justo: ella siempre hace todo ___ le piden.', options: ['que', 'el que', 'lo que'], answer: 2, why: 'Everything they ask: todo lo que.', en: 'It isn’t fair: she always does everything they ask her to.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la oficina.', blocks: [
          { kind: 'lead', text: 'Otra reunión, ahora en una oficina. Sara presenta los problemas de su equipo. Ayúdala a decirlo con «lo»: pon el foco o presenta el tema.', en: 'Another meeting, this time in an office. Sara presents her team’s problems. Help her say them with lo: put the focus or introduce the topic.' },
          { kind: 'rewrite', title: 'La reunión de Sara · Sara’s meeting', items: [
            { prompt: 'Me preocupa el plazo del proyecto.', instruction: 'Pon el foco con «Lo que… es».', accept: ['Lo que me preocupa es el plazo del proyecto'] },
            { prompt: 'Necesitamos dos personas más.', instruction: 'Pon el foco con «Lo que…». Ojo: el nombre es plural.', accept: ['Lo que necesitamos son dos personas más'] },
            { prompt: 'El asunto del nuevo horario: ¿ya lo sabes?', instruction: 'Haz una pregunta corta con «lo de». Empieza con «¿Ya sabes…?».', accept: ['Ya sabes lo del nuevo horario'] },
          ] },
        ] },
        { title: 'Ampliación: preposición + lo que · Extension', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Un paso extra, si tienes tiempo. Si el verbo lleva preposición (hablar **de**, pensar **en**, estar de acuerdo **con**), la preposición va delante: «Eso es **de lo que** hablamos». Y en textos más formales, «lo que» puede retomar una frase entera: «El técnico llegó tarde, **lo que** molestó a todos» (y eso molestó). Lo verás más en B2.', en: 'An extra step, if you have time. If the verb takes a preposition (hablar de, pensar en, estar de acuerdo con), the preposition goes in front: “Eso es de lo que hablamos”. And in more formal texts, lo que can refer back to a whole sentence: “El técnico llegó tarde, lo que molestó a todos” (and that annoyed everyone). You will see more of this at B2.' },
          { kind: 'choice', title: 'Otras formas · Other forms', items: [
            { prompt: 'Estoy de acuerdo ___ dijo Hugo.', options: ['lo que con', 'con lo que', 'con que'], answer: 1, why: 'Estar de acuerdo **con** algo: la preposición va delante de «lo que».', en: 'I agree with what Hugo said.' },
            { prompt: 'Eso no es ___ hablamos en la reunión.', options: ['de lo que', 'lo que de', 'de que'], answer: 0, why: 'Hablar **de** algo: de lo que.', en: 'That isn’t what we talked about at the meeting.' },
            { prompt: 'El técnico llegó dos horas tarde, ___ molestó a todos.', options: ['lo de', 'lo que', 'que'], answer: 1, why: '«Lo que» retoma toda la frase anterior (que llegó tarde). «Que» solo no puede hacerlo.', en: 'The technician arrived two hours late, which annoyed everyone.' },
            { prompt: '«¡No sabes lo cansada que estoy!» significa…', options: ['I’m not tired at all.', 'You don’t know who is tired.', 'You have no idea how tired I am!'], answer: 2, why: 'Lo + adjetivo + que expresa intensidad con emoción (clase 192).', en: 'What does this sentence mean?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para alumnos rápidos o si sobra tiempo. Aquí basta con reconocer las formas; preposición + lo que y «…, lo que…» se trabajan más en B2, y «lo + adjetivo + que» en la clase 192.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 114 · Conectores de contraste: ni… ni, aunque, sin embargo', text: 'Ya presentas temas, problemas y propuestas sin repetir nombres: «lo del ascensor», «lo que me preocupa es…», «lo bueno es que…». En la clase 114 das el siguiente paso en la opinión: matizas y contrastas con **ni… ni**, **aunque** y **sin embargo**. Es el paso natural: «Lo bueno es que el seguro paga la mitad; **sin embargo**, lo malo es el ruido».', en: 'You can now present topics, problems and proposals without repeating nouns: “lo del ascensor”, “lo que me preocupa es…”, “lo bueno es que…”. In class 114 you take the next step in giving opinions: you add nuance and contrast with ni… ni, aunque and sin embargo. It is the natural next step: “Lo bueno es que el seguro paga la mitad; sin embargo, lo malo es el ruido”.', href: '/pero-hay-un-matiz', label: 'Ir a la clase 114' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué es lo que más te ha servido de esta clase?». Respuesta esperada: una frase con foco («Lo que más me ha servido es…»). Tarea: escribir el correo de Escribir sobre un tema real de su casa, su trabajo o su barrio.' },
        ] },
      ],
    },
  ],
};
