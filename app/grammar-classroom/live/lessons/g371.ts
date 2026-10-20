import type { LiveLesson } from '../types';

/**
 * Lesson 371 · A2 · Alguno, ninguno, mucho, poco, demasiado (course unit G071).
 * One scene runs through the class: Lucía Herrera, who works at an architecture
 * office, organises a farewell dinner for sixteen colleagues: Pilar is leaving
 * to live in another city. Lucía phones the restaurant El Patio; the manager,
 * Ramiro, has no free table on the terrace but some big tables in the dining
 * room. Her colleagues Óscar and Nuria help with the card and the present. In
 * the voicemail Ramiro (Spanish voice, usted) offers a terrace table that has
 * just become free and asks for the number of vegetarian dishes.
 * Content: alguno / ninguno with agreement and apocope (algún, ningún), the
 * pronoun forms (alguno, ninguno) and ninguno usually singular; «no» + verb +
 * ninguno vs ninguno + verb (preview of G072); mucho / poco / demasiado as
 * determiners (agree: muchas mesas, poca gente, demasiado ruido) vs adverbs
 * (invariable: trabaja mucho, demasiado caros); muy vs mucho (mucho mejor,
 * mucho más). Coverage audit row 15: cada, otro (never «un otro»), todo el;
 * cualquier / cualquiera, poco vs un poco + adjective and ningunas ganas go in
 * the Ampliación. Builds on G034 (mucho, poco, bastante, todo el) and G070.
 * Anchor: No queda ninguna mesa libre. Mistakes: *ninguno problema, *mucho
 * caro, *trabaja muy, *muchos gente, *una otra mesa. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 371,
  level: 'A2',
  title: 'Alguno, ninguno, mucho, poco, demasiado',
  subtitle: 'Organizar una cena de grupo: decir si hay alguna mesa o ninguna, y si hay mucho, poco o demasiado de algo.',
  legend: [
    { tone: 'blue', label: 'ALGUNO · NINGUNO · existe o no (some / not any): algún, ninguna…' },
    { tone: 'orange', label: 'CANTIDAD + SUSTANTIVO · concuerda (agrees): muchas mesas, poca gente' },
    { tone: 'teal', label: 'NO CAMBIA · con verbo o adjetivo (invariable): trabaja mucho, muy caro' },
    { tone: 'violet', label: 'CADA · OTRO · TODO (each, another, all)' },
  ],
  optionNotes: {
    'una otra tarjeta': '«Otra» nunca lleva «una» delante: **otra** tarjeta.',
    'ningunas': '«Ninguno» va casi siempre en singular. El plural solo aparece con palabras que se usan en plural, como «ganas» o «gafas».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Hay alguna mesa?', coach: '¿Existe? ¿Cuánto hay? Does it exist? How much is there?',
      steps: [
        { title: 'La cena de despedida · The farewell dinner', blocks: [
          { kind: 'lead', text: 'Lucía Herrera trabaja en una oficina de arquitectura. Su compañera Pilar se va a vivir a otra ciudad, y Lucía organiza una cena de despedida para dieciséis personas. Llama al restaurante El Patio. El encargado, Ramiro, responde: «Lo siento, el sábado no queda **ninguna** mesa libre en la terraza. Pero en el salón tenemos **algunas** mesas grandes». Hoy aprendes a decir si algo existe o no (alguna, ninguna) y cuánto hay (mucho, poco, demasiado).', en: 'Lucía Herrera works at an architecture office. Her colleague Pilar is moving to another city, and Lucía is organising a farewell dinner for sixteen people. She calls the restaurant El Patio. The manager, Ramiro, answers: “Sorry, there isn’t a single free table left on the terrace on Saturday. But we have some big tables in the dining room.” Today you learn to say whether something exists or not (alguna, ninguna) and how much there is (mucho, poco, demasiado).' },
          { kind: 'guide', text: { teacher: 'Tú lees la respuesta de Ramiro y tu alumno repite. Después tu alumno dice cuántas mesas libres quedan en la terraza y dónde hay mesas.', self: 'Lee la respuesta de Ramiro en voz alta. ¿Cuántas mesas libres quedan en la terraza? ¿Dónde hay mesas? (How many free tables are left on the terrace?)' } },
          { kind: 'compare', title: 'Tres respuestas del restaurante · Three answers from the restaurant', columns: [
            { tone: 'blue', label: 'ALGUNA · ¿existe?', sentence: '¿Tienen [[alguna|blue]] mesa libre?', idea: 'Preguntas si existe una, sin decir cuál.', en: 'Do you have a free table? (any table at all)' },
            { tone: 'blue', label: 'NINGUNA · cero', sentence: 'No queda [[ninguna|blue]] mesa libre.', idea: 'Cero mesas: ni una.', en: 'There isn’t a single free table left.' },
            { tone: 'orange', label: 'MUCHAS · cantidad', sentence: 'En el salón hay [[muchas|orange]] mesas.', idea: 'Una cantidad grande. Concuerda con «mesas».', en: 'There are a lot of tables in the dining room.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No queda ninguna mesa libre» significa…', options: ['Hay una mesa libre, pero es pequeña.', 'No hay ni una mesa libre.', 'Quedan pocas mesas libres.'], answer: 1, why: '«Ninguna» es cero: no hay ni una.', en: '“No queda ninguna mesa libre” means…' },
            { prompt: 'Lucía: «¿Tienen ___ mesa para dieciséis personas?»', options: ['algún', 'ninguna', 'alguna'], answer: 2, why: '«Mesa» es femenino singular y Lucía pregunta si existe: alguna.', en: 'Do you have a table for sixteen people?' },
            { prompt: 'Ramiro: «En el salón hay ___ mesas grandes».', options: ['mucho', 'muy', 'muchas'], answer: 2, why: 'Con un sustantivo femenino plural (mesas): muchas.', en: 'There are a lot of big tables in the dining room.' },
          ] },
        ] },
        { title: 'Algún, alguna, ningún, ninguna · The forms', mascot: '/brand/mascot/studying.webp', coach: 'Algún día, ninguna mesa. Short form before a masculine noun.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ALGUNO · NINGUNO', question: '¿Existe? ¿Hay uno o unos cuantos?', en: 'Does it exist? Is there one, or a few?', formula: ['algún + masc. sing. · alguna + fem. sing.', 'algunos / algunas + plural (= unos cuantos)', 'ningún + masc. sing. · ninguna + fem. sing.'],
            meaning: '**Alguno** habla de una cosa o una persona sin decir cuál, o de una cantidad pequeña sin número exacto (some, any). **Ninguno** es cero (not any, no). Delante de un sustantivo masculino singular pierden la -o y llevan tilde: **algún** día, **ningún** problema.',
            examples: [
              { es: '¿Hay [[algún|blue]] restaurante bueno cerca de la oficina?', en: 'Is there a good restaurant near the office?' },
              { es: '[[Algunos|blue]] compañeros vienen en coche.', en: 'Some colleagues are coming by car.' },
              { es: 'No tengo [[ningún|blue]] problema con el sábado.', en: 'I have no problem with Saturday.' },
            ] },
          { kind: 'table', title: 'Las formas · The forms', head: ['', 'masculino', 'femenino'], rows: [
            ['delante del sustantivo (singular) · before a noun', '**algún** / **ningún** día', '**alguna** / **ninguna** mesa'],
            ['solo, sin sustantivo · on its own', '¿Queda **alguno**? No, **ninguno**.', '¿Queda **alguna**? No, **ninguna**.'],
            ['plural', '**algunos** días', '**algunas** mesas'],
          ], note: '**Ninguno** va casi siempre en singular: «No tengo **ninguna** pregunta», no «ningunas preguntas». Sin sustantivo, la -o vuelve: «¿Hay algún sitio? —No, no queda **ninguno**».' },
          { kind: 'tip', icon: '💡', title: 'Con «no» o sin «no» · With or without “no”', text: 'Si «ninguno» va **después** del verbo, pones «no» delante del verbo: «**No** queda **ninguna** mesa». Si va **antes** del verbo, no hay «no»: «**Ninguna** mesa está libre». En la clase 072 trabajas esta doble negación con nadie, nada y nunca.', en: 'If “ninguno” comes after the verb, you put “no” before the verb: “No queda ninguna mesa”. If it comes before the verb, there is no “no”: “Ninguna mesa está libre”. In class 072 you work on this double negative with nadie, nada and nunca.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ramiro: «No hay ___ problema, señora».', options: ['ningún', 'ninguno', 'ninguna'], answer: 0, why: 'Delante de un sustantivo masculino singular (problema): ningún, sin -o.', en: 'There’s no problem, madam.' },
            { prompt: '—¿Tienen sillas para niños? —Sí, tenemos ___.', options: ['algún', 'ninguna', 'algunas'], answer: 2, why: 'Sin sustantivo y en plural femenino (sillas): algunas.', en: 'Do you have high chairs? Yes, we have some.' },
            { prompt: '—¿Queda algún sitio en la terraza? —No, no queda ___.', options: ['ninguna', 'ninguno', 'ningún'], answer: 1, why: '«Sitio» es masculino y aquí no hay sustantivo detrás: ninguno, con -o.', en: 'Is there any space left on the terrace? No, there’s none left.' },
          ] },
        ] },
        { title: 'Mucho, poco, demasiado · Do they change?', mascot: '/brand/mascot/standing.webp', coach: '¿Sustantivo o verbo? Noun or verb?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CON SUSTANTIVO · CONCUERDA', question: '¿Cuánto hay? ¿Cuántos hay?', en: 'How much is there? How many are there?', formula: ['mucho · mucha · muchos · muchas + sustantivo', 'poco · poca · pocos · pocas + sustantivo', 'demasiado · demasiada · demasiados · demasiadas + sustantivo'],
            meaning: 'Delante de un sustantivo, estas palabras **concuerdan** con él, como un adjetivo. **Poco** = menos de lo normal o de lo necesario. **Demasiado** = más de lo necesario: es un problema (too much, too many).',
            examples: [
              { es: '[[Muchas|orange]] personas quieren venir a la cena.', en: 'A lot of people want to come to the dinner.' },
              { es: 'En el salón hay [[poca|orange]] luz.', en: 'There isn’t much light in the dining room.' },
              { es: 'En la terraza hay [[demasiado|orange]] ruido.', en: 'There’s too much noise on the terrace.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'CON VERBO · NO CAMBIA', question: '¿Cuánto trabaja, come o habla alguien?', en: 'How much does someone work, eat or talk?', formula: ['verbo + mucho / poco / demasiado'],
            meaning: 'Después de un verbo, **mucho**, **poco** y **demasiado** no cambian nunca: no miran al sujeto.',
            examples: [
              { es: 'Pilar trabaja [[mucho|teal]].', en: 'Pilar works a lot.' },
              { es: 'Mis compañeras duermen [[poco|teal]] antes de una entrega.', en: 'My colleagues don’t sleep much before a deadline.' },
              { es: 'En las reuniones, ellos hablan [[demasiado|teal]].', en: 'In meetings, they talk too much.' },
            ] },
          { kind: 'table', title: 'Las dos funciones · Two jobs', head: ['', '+ sustantivo (concuerda)', 'verbo + (no cambia)'], rows: [
            ['mucho', '**muchas** personas', 'Pilar viaja **mucho**.'],
            ['poco', '**poca** gente', 'Óscar come **poco**.'],
            ['demasiado', '**demasiadas** sillas', 'Ellas hablan **demasiado**.'],
          ], note: '«Gente» es femenino singular: **mucha** gente, **poca** gente. No «muchos gente».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía y Nuria trabajan ___.', options: ['mucho', 'muchas', 'muy'], answer: 0, why: 'Va con el verbo (trabajan): mucho, no cambia.', en: 'Lucía and Nuria work a lot.' },
            { prompt: 'En la terraza hay ___ mesas para un grupo grande.', options: ['poco', 'poca', 'pocas'], answer: 2, why: 'Va con «mesas», femenino plural: pocas.', en: 'There aren’t many tables for a big group on the terrace.' },
            { prompt: 'Hay ___ ruido en la calle: no podemos hablar.', options: ['demasiado', 'demasiada', 'muy'], answer: 0, why: '«Ruido» es masculino singular: demasiado. Es un problema.', en: 'There’s too much noise in the street: we can’t talk.' },
          ] },
        ] },
        { title: 'Muy o mucho · Very or a lot', mascot: '/brand/mascot/speaking.webp', coach: 'Muy bonito, me gusta mucho.', blocks: [
          { kind: 'compare', title: '¿Qué palabra acompaña? · Which word does it go with?', columns: [
            { tone: 'teal', label: 'MUY + adjetivo o adverbio', sentence: 'El salón es [[muy|teal]] bonito.', idea: 'Muy va delante de un adjetivo (bonito, caro) o de un adverbio (cerca, tarde). Nunca va solo.', en: 'The dining room is very nice.' },
            { tone: 'teal', label: 'verbo + MUCHO', sentence: 'Me gusta [[mucho|teal]].', idea: 'Mucho va con un verbo y no cambia.', en: 'I like it a lot.' },
            { tone: 'orange', label: 'MUCHO + sustantivo', sentence: 'Hay [[mucho|orange]] espacio.', idea: 'Mucho va con un sustantivo y concuerda.', en: 'There’s a lot of space.' },
          ] },
          { kind: 'decide', title: '¿Muy, mucho o demasiado?', steps: [
            { q: '¿Va delante de un adjetivo o de un adverbio? (caro, bonito, cerca, tarde)', yes: 'Usa **muy** (neutro) o **demasiado** (un problema). No cambian: «muy caros», «demasiado caros».', no: 'next' },
            { q: '¿Va con un sustantivo? (mesas, gente, ruido)', yes: '**Mucho, poco, demasiado** concuerdan: muchas mesas, poca gente, demasiado ruido.', no: 'next' },
            { q: '¿Va con un verbo? (trabaja, come, cuesta)', yes: '**Mucho, poco, demasiado** no cambian: «cuesta mucho».', no: 'Mira otra vez: ¿qué palabra acompaña?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Mucho mejor, mucho más · An exception', text: 'Delante de **mejor, peor, mayor, menor, más** y **menos** usas **mucho**, no «muy»: «El salón es **mucho mejor** para un grupo», «Es **mucho más** barato». Y recuerda: «muy caro» es solo una descripción; «**demasiado** caro» dice que es un problema.', en: 'Before mejor, peor, mayor, menor, más and menos you use mucho, not muy: “El salón es mucho mejor para un grupo”, “Es mucho más barato”. And remember: “muy caro” is just a description; “demasiado caro” says it is a problem.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Los platos del menú son ___ buenos.', options: ['mucho', 'muy', 'muchos'], answer: 1, why: 'Delante de un adjetivo (buenos): muy, no cambia.', en: 'The dishes on the menu are very good.' },
            { prompt: 'El menú de sesenta euros es ___ caro para nosotros: no podemos pagarlo.', options: ['demasiado', 'mucho', 'demasiados'], answer: 0, why: 'Delante de un adjetivo y con idea de problema: demasiado, sin cambio.', en: 'The sixty-euro menu is too expensive for us: we can’t pay for it.' },
            { prompt: 'La terraza es ___ más bonita que el salón.', options: ['mucho', 'muy', 'mucha'], answer: 0, why: 'Delante de «más»: mucho, no «muy». Y no cambia: mucho más bonita.', en: 'The terrace is much nicer than the dining room.' },
          ] },
        ] },
        { title: 'Cada, otro, todo · Each, another, all', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cada persona, otra mesa.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CADA · OTRO · TODO', question: '¿Uno por uno? ¿Uno más? ¿El grupo completo?', en: 'One by one? One more? The whole group?', formula: ['cada + sustantivo singular (no cambia)', 'otro · otra · otros · otras (sin «un»)', 'todo el · toda la · todos los · todas las + sustantivo'],
            meaning: '**Cada** mira las cosas una por una y no cambia nunca: cada persona, cada plato. **Otro** significa «uno más» o «uno diferente» y nunca lleva «un» delante. **Todo** habla del grupo completo y necesita el artículo (clase 034).',
            examples: [
              { es: '[[Cada|violet]] persona elige su plato.', en: 'Each person chooses their dish.' },
              { es: '¿Tienen [[otra|violet]] fecha libre?', en: 'Do you have another free date?' },
              { es: '[[Todos los|violet]] compañeros firman la tarjeta.', en: 'All the colleagues sign the card.' },
            ],
            note: '«Cada uno» y «cada una» funcionan solos: «Pagamos treinta y cinco euros **cada uno**».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ invitado trae un pequeño regalo para Pilar.', options: ['Todos', 'Cadas', 'Cada'], answer: 2, why: 'Cada + sustantivo singular (invitado). «Cada» no tiene plural.', en: 'Each guest brings a small present for Pilar.' },
            { prompt: 'El sábado no hay sitio. ¿Tienen ___ día libre?', options: ['otra', 'otro', 'un otro'], answer: 1, why: '«Día» es masculino: otro, sin «un».', en: 'There’s no room on Saturday. Do you have another free day?' },
            { prompt: 'Pilar conoce a ___ compañeros de la oficina.', options: ['todos', 'todo los', 'todos los'], answer: 2, why: 'Todo necesita el artículo y concuerda: todos los compañeros.', en: 'Pilar knows all the colleagues at the office.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Qué palabra acompaña? Which word does it go with?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla: ¿la forma corta, el singular, la concordancia o muy/mucho? Después aparece la corrección.', self: 'Lee cada frase y busca el error: ¿la forma corta, el singular, la concordancia o muy/mucho? Toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No hay ninguno problema.', right: 'No hay ningún problema.', why: 'Delante de un sustantivo masculino singular: forma corta, ningún. (Short form before a masculine noun.)' },
            { wrong: 'No tengo ningunas preguntas.', right: 'No tengo ninguna pregunta.', why: 'Ninguno va casi siempre en singular. (Ninguno is almost always singular.)' },
            { wrong: 'El restaurante es mucho caro.', right: 'El restaurante es muy caro.', why: 'Delante de un adjetivo: muy. (Muy before an adjective.)' },
            { wrong: 'Pilar trabaja muy.', right: 'Pilar trabaja mucho.', why: 'Con un verbo: mucho. «Muy» nunca va solo. (Mucho with a verb.)' },
            { wrong: 'Hay muchos gente en la terraza.', right: 'Hay mucha gente en la terraza.', why: '«Gente» es femenino singular: mucha gente. (Gente is feminine singular.)' },
            { wrong: 'Los postres son demasiados dulces.', right: 'Los postres son demasiado dulces.', why: 'Delante de un adjetivo, demasiado no cambia. (Invariable before an adjective.)' },
            { wrong: '¿Tienen una otra mesa?', right: '¿Tienen otra mesa?', why: '«Otro» y «otra» nunca llevan «un» o «una». (Never “una otra”.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Los vinos de la carta son ___ caros.', options: ['demasiado', 'demasiados', 'muchos'], answer: 0, why: 'Delante de un adjetivo (caros): demasiado, sin cambio.', en: 'The wines on the list are too expensive.' },
            { prompt: '¿Hay ___ restaurante vegetariano en el barrio?', options: ['algún', 'alguno', 'alguna'], answer: 0, why: 'Delante de «restaurante», masculino singular: algún.', en: 'Is there a vegetarian restaurant in the neighbourhood?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe un restaurante o un café que conoce con tres frases: una con algún o ningún, una con mucho/poco + sustantivo y una con muy. Tú repites cada frase con la forma correcta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reserva', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Una llamada al restaurante · A call to the restaurant', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Ramiro y tu alumno es Lucía. Después tu alumno toca cada expresión marcada y dice si cambia o no cambia.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿concuerda con un sustantivo o no cambia? (Does it agree or stay the same?)' } },
          { kind: 'explore', title: 'Una mesa para dieciséis', setting: 'Lunes por la mañana. Lucía llama al restaurante El Patio para reservar la cena del sábado. Ramiro y Lucía usan usted. (Monday morning. Lucía calls El Patio to book Saturday’s dinner.)', lines: [
            { who: 'Ramiro', text: 'Restaurante El Patio, buenos días. Le atiende Ramiro.', en: 'El Patio restaurant, good morning. Ramiro speaking.' },
            { who: 'Lucía', text: 'Buenos días. Quiero reservar para el sábado, para dieciséis personas. ¿Tienen [[alguna mesa|blue]] grande en la terraza?', en: 'Good morning. I’d like to book for Saturday, for sixteen people. Do you have a big table on the terrace?' },
            { who: 'Ramiro', text: 'Lo siento, el sábado no queda [[ninguna mesa|blue]] libre en la terraza. Pero en el salón tenemos [[algunas|blue]] mesas grandes.', en: 'I’m sorry, there isn’t a single free table left on the terrace on Saturday. But we have some big tables in the dining room.' },
            { who: 'Lucía', text: '¿Y el salón es tranquilo? En [[otros|violet]] restaurantes hay [[demasiado ruido|orange]] los sábados.', en: 'And is the dining room quiet? In other restaurants there’s too much noise on Saturdays.' },
            { who: 'Ramiro', text: 'Sí, es [[muy|teal]] tranquilo y hay [[mucho espacio|orange]]. Para un grupo grande es [[mucho mejor|teal]].', en: 'Yes, it’s very quiet and there’s a lot of space. For a big group it’s much better.' },
            { who: 'Lucía', text: 'Perfecto. ¿Y cuánto cuesta el menú de grupo?', en: 'Perfect. And how much is the group menu?' },
            { who: 'Ramiro', text: 'Treinta y cinco euros. Lleva entrante, plato principal y postre, y [[cada persona|violet]] elige su plato.', en: 'Thirty-five euros. It includes a starter, a main course and dessert, and each person chooses their dish.' },
            { who: 'Lucía', text: 'Muy bien. [[Algunos|blue]] compañeros no comen carne. ¿Hay [[algún plato|blue]] vegetariano?', en: 'Very good. Some colleagues don’t eat meat. Is there a vegetarian dish?' },
            { who: 'Ramiro', text: 'Sí, hay [[muchas opciones|orange]]: [[todos los|violet]] entrantes son vegetarianos.', en: 'Yes, there are lots of options: all the starters are vegetarian.' },
            { who: 'Lucía', text: 'Genial. Y una pregunta más: nosotros vamos a llevar una tarta. ¿Hay [[algún problema|blue]]?', en: 'Great. And one more question: we’re going to bring a cake. Is that a problem?' },
            { who: 'Ramiro', text: 'No, [[ningún problema|blue]]. Pero el sábado trabajamos [[mucho|teal]] y tenemos [[poco tiempo|orange]], así que lleguen a las nueve en punto, por favor.', en: 'No, no problem at all. But on Saturdays we’re very busy and we don’t have much time, so please arrive at nine o’clock sharp.' },
            { who: 'Lucía', text: 'De acuerdo. Entonces, una mesa para dieciséis en el salón, el sábado a las nueve. ¡Muchas gracias!', en: 'All right. So, a table for sixteen in the dining room, on Saturday at nine. Thank you very much!' },
          ], notes: {
            'alguna mesa': 'Alguna + sustantivo femenino singular. Lucía pregunta si existe una mesa, sin saber cuál.',
            'ninguna mesa': '**Ninguna** = cero, ni una. Va después del verbo, por eso hay «no» delante: no queda ninguna mesa.',
            'algunas': 'Algunas = unas cuantas, sin número exacto. Femenino plural, como «mesas».',
            'otros': '**Otros** restaurantes = restaurantes diferentes. Sin «unos» delante.',
            'demasiado ruido': 'Demasiado + «ruido» (masculino singular): concuerda. Más ruido de lo normal: un problema.',
            'muy': 'Muy + adjetivo (tranquilo). No cambia y nunca va solo.',
            'mucho espacio': 'Mucho + «espacio» (masculino singular): concuerda con el sustantivo.',
            'mucho mejor': 'Delante de «mejor» se usa **mucho**, no «muy»: mucho mejor, mucho más.',
            'cada persona': 'Cada + sustantivo singular. Mira a las personas una por una.',
            'Algunos': 'Algunos compañeros = unos cuantos, no todos. Masculino plural.',
            'algún plato': 'Forma corta **algún** delante de un sustantivo masculino singular (plato).',
            'muchas opciones': 'Muchas + «opciones» (femenino plural): concuerda.',
            'todos los': 'Todos + artículo + sustantivo: todos los entrantes. El artículo es obligatorio.',
            'algún problema': 'Algún + «problema». «Problema» termina en -a, pero es masculino: algún problema.',
            'ningún problema': 'Respuesta corta y muy frecuente: **ningún problema** (no problem at all).',
            'mucho': 'Mucho con un verbo (trabajamos): no cambia, aunque el sujeto es «nosotros».',
            'poco tiempo': 'Poco + «tiempo» (masculino singular): concuerda. Menos tiempo de lo necesario.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no reserva Lucía en la terraza?', options: ['Porque no queda ninguna mesa libre.', 'Porque hay demasiado ruido.', 'Porque es muy cara.'], answer: 0, why: '«El sábado no queda ninguna mesa libre en la terraza».', en: 'Why doesn’t Lucía book on the terrace?' },
            { prompt: '¿Cómo es el salón, según Ramiro?', options: ['Bonito, pero con demasiada gente.', 'Muy tranquilo y con mucho espacio.', 'Pequeño y con poca luz.'], answer: 1, why: '«Es muy tranquilo y hay mucho espacio».', en: 'What is the dining room like, according to Ramiro?' },
            { prompt: '¿Por qué tiene que llegar el grupo a las nueve en punto?', options: ['Porque el sábado el restaurante trabaja mucho y tiene poco tiempo.', 'Porque el salón cierra a las diez.', 'Porque cada persona elige su plato.'], answer: 0, why: '«El sábado trabajamos mucho y tenemos poco tiempo».', en: 'Why does the group have to arrive at nine sharp?' },
          ] },
        ] },
        { title: '¿Concuerda o no cambia? · Agree or stay the same?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Expresiones de la llamada · Expressions from the call', categories: [
            { id: 'concuerda', label: 'CONCUERDA · va con un sustantivo', tone: 'orange' },
            { id: 'invariable', label: 'NO CAMBIA · va con un verbo o un adjetivo', tone: 'teal' },
          ], items: [
            { text: 'hay demasiado ruido', answer: 'concuerda', why: 'Va con «ruido», masculino singular. Con «luz» sería «demasiada luz».' },
            { text: 'es muy tranquilo', answer: 'invariable', why: 'Muy + adjetivo: nunca cambia.' },
            { text: 'hay muchas opciones', answer: 'concuerda', why: 'Va con «opciones», femenino plural.' },
            { text: 'trabajamos mucho', answer: 'invariable', why: 'Va con el verbo: no cambia con el sujeto.' },
            { text: 'tenemos poco tiempo', answer: 'concuerda', why: 'Va con «tiempo», masculino singular.' },
            { text: 'es mucho mejor', answer: 'invariable', why: 'Mucho delante de «mejor»: no cambia.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tu restaurante favorito? ¿Hay mucho ruido? ¿Es muy caro?». Tu alumno responde con una frase que concuerda y una que no cambia.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Mira la palabra de al lado. Look at the next word.',
      steps: [
        { title: 'Preparativos · Getting ready', blocks: [
          { kind: 'choice', items: [
            { context: 'Lucía escribe a Pilar. (Lucía writes to Pilar.)', prompt: '¿Tienes ___ preferencia para el postre?', options: ['algún', 'ninguna', 'alguna'], answer: 2, why: '«Preferencia» es femenino singular: alguna. «Algún» solo va con masculino.', en: 'Do you have any preference for dessert?' },
            { context: 'Pilar responde. (Pilar answers.)', prompt: 'No, ___. Me gusta todo.', options: ['ninguna', 'ningún', 'ningunas'], answer: 0, why: 'Sin sustantivo y femenino (preferencia): ninguna. «Ningún» necesita un sustantivo masculino detrás.', en: 'No, none. I like everything.' },
            { context: 'Óscar conoce El Patio. (Óscar knows El Patio.)', prompt: 'Los camareros son ___ amables.', options: ['mucho', 'muy', 'muchos'], answer: 1, why: 'Delante de un adjetivo (amables): muy.', en: 'The waiters are very friendly.' },
            { context: 'Óscar conoce El Patio. (Óscar knows El Patio.)', prompt: 'Pero los sábados hay ___ clientes y la comida tarda.', options: ['demasiado', 'muy', 'demasiados'], answer: 2, why: 'Con «clientes», masculino plural: demasiados. Más de lo normal: un problema.', en: 'But on Saturdays there are too many customers and the food takes a long time.' },
            { context: 'Nuria no puede ir. (Nuria can’t go.)', prompt: 'Lo siento, el sábado tengo ___ trabajo. ¿Hacemos ___ cena el mes que viene?', options: ['mucha · otra', 'mucho · una otra', 'mucho · otra'], answer: 2, why: '«Trabajo» es masculino: mucho trabajo. Y «otra cena», sin «una».', en: 'Sorry, I have a lot of work on Saturday. Shall we have another dinner next month?' },
          ] },
        ] },
        { title: '¿Forma corta o completa? · Short or full form?', blocks: [
          { kind: 'classify', title: 'Mira qué viene después · Look at what comes next', categories: [
            { id: 'corta', label: 'FORMA CORTA · algún / ningún + masc. sing.', tone: 'blue' },
            { id: 'completa', label: 'FORMA COMPLETA · alguno, alguna(s), algunos, ninguno, ninguna', tone: 'teal' },
          ], items: [
            { text: '¿Hay algún aparcamiento cerca del restaurante?', answer: 'corta', why: 'Algún + «aparcamiento», masculino singular.' },
            { text: 'No queda ninguno, lo siento.', answer: 'completa', why: 'Sin sustantivo detrás: ninguno, con -o.' },
            { text: 'Algunos compañeros llegan tarde.', answer: 'completa', why: 'En plural no hay forma corta: algunos.' },
            { text: 'Pilar no tiene ningún plan para el domingo.', answer: 'corta', why: 'Ningún + «plan», masculino singular.' },
            { text: '—¿Alguna pregunta? —Ninguna.', answer: 'completa', why: 'Femenino: alguna, ninguna. La forma corta es solo masculina.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'En la terraza hay muchos gente.', ok: false, options: ['En la terraza hay muchas gentes.', 'En la terraza hay muy gente.', 'En la terraza hay mucha gente.'], answer: 2, why: '«Gente» es femenino singular: mucha gente.' },
            { sentence: 'Los postres de El Patio son demasiado dulces.', ok: true, why: 'Correcta: delante de un adjetivo (dulces), demasiado no cambia.' },
            { sentence: 'No tengo ningunas dudas sobre el menú.', ok: false, options: ['No tengo alguna duda sobre el menú.', 'No tengo ninguna duda sobre el menú.', 'No tengo ningún duda sobre el menú.'], answer: 1, why: 'Ninguno va en singular y concuerda: «duda» es femenino, ninguna duda.' },
            { sentence: 'Óscar come muy en las cenas de grupo.', ok: false, options: ['Óscar come muy mucho en las cenas de grupo.', 'Óscar come mucho en las cenas de grupo.', 'Óscar come muchos en las cenas de grupo.'], answer: 1, why: 'Con un verbo (come): mucho. «Muy» nunca va solo.' },
            { sentence: '¿Puede traer otra silla, por favor?', ok: true, why: 'Correcta: otra silla, sin «una».' },
            { sentence: 'Cada personas paga treinta y cinco euros.', ok: false, options: ['Cada persona paga treinta y cinco euros.', 'Cadas personas pagan treinta y cinco euros.', 'Todas persona paga treinta y cinco euros.'], answer: 0, why: '«Cada» no cambia y va con un sustantivo singular: cada persona.' },
          ] },
        ] },
        { title: 'La tarjeta para Pilar · The card for Pilar', blocks: [
          { kind: 'chat-fill', title: 'Óscar y Lucía, por chat · Óscar and Lucía, by chat', lines: [
            { who: 'Óscar', text: '¿Ya tienes ___ idea para el regalo de Pilar?', options: ['algún', 'ninguna', 'alguna'], answer: 2, why: '«Idea» es femenino singular y Óscar pregunta si existe: alguna.' },
            { who: 'Lucía', text: 'Sí: un libro de viajes. A Pilar le gusta ___ viajar.', options: ['mucho', 'muy', 'mucha'], answer: 0, why: '«Le gusta» es un verbo: mucho, sin cambio.' },
            { who: 'Óscar', text: 'Buena idea. ¿Y la tarjeta? ¿La firmamos todos?' },
            { who: 'Lucía', text: 'Sí, ___ compañero escribe una frase.', options: ['cadas', 'cada', 'todos'], answer: 1, why: 'Cada + sustantivo singular: cada compañero.' },
            { who: 'Óscar', text: 'Uf, pero en esa tarjeta hay ___ espacio para dieciséis frases.', options: ['pocos', 'poco', 'poca'], answer: 1, why: '«Espacio» es masculino singular: poco espacio.' },
            { who: 'Lucía', text: 'Tienes razón. Compro ___ más grande.', options: ['otro', 'otra', 'una otra tarjeta'], answer: 1, why: 'Hablamos de una tarjeta (femenino): otra, sin «una».' },
            { who: 'Óscar', text: '¡Perfecto! Así no hay ___ problema.', options: ['ningún', 'ninguno', 'ninguna'], answer: 0, why: 'Delante de «problema», masculino singular: ningún.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'queda', 'ninguna', 'mesa', 'libre'], accept: ['No queda ninguna mesa libre'], en: 'There isn’t a single free table left.' },
            { tiles: ['Pilar', 'trabaja', 'mucho', 'y', 'duerme', 'poco'], accept: ['Pilar trabaja mucho y duerme poco', 'Pilar duerme poco y trabaja mucho'], en: 'Pilar works a lot and doesn’t sleep much.' },
            { tiles: ['Cada', 'persona', 'elige', 'su', 'postre'], accept: ['Cada persona elige su postre'], en: 'Each person chooses their dessert.' },
            { tiles: ['El', 'salón', 'es', 'mucho', 'más', 'tranquilo'], accept: ['El salón es mucho más tranquilo'], en: 'The dining room is much quieter.' },
          ] },
        ] },
        { title: 'Cambia la frase · Change the sentence', blocks: [
          { kind: 'rewrite', title: 'Del sí al no, de mucho a poco · From yes to no, from a lot to a little', items: [
            { prompt: 'Hay algún restaurante abierto el lunes.', instruction: 'Escribe la frase en negativo con «no» y «ningún».', accept: ['No hay ningún restaurante abierto el lunes', 'El lunes no hay ningún restaurante abierto'] },
            { prompt: 'Tengo alguna pregunta sobre el menú.', instruction: 'Escribe la frase en negativo con «no» y «ninguna».', accept: ['No tengo ninguna pregunta sobre el menú'] },
            { prompt: 'Hay mucha gente en la terraza.', instruction: 'Di lo contrario: cambia «mucha» por la palabra de cantidad pequeña.', accept: ['Hay poca gente en la terraza'] },
            { prompt: 'Los vinos son caros. (más de lo normal: un problema)', instruction: 'Añade la palabra que significa «más de lo necesario».', accept: ['Los vinos son demasiado caros'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno describe su lugar de trabajo o de estudio con cuatro frases: algún/ningún, mucho/poco + sustantivo, un verbo + mucho y muy + adjetivo.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje del restaurante', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Ramiro deja un mensaje · Ramiro leaves a message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué llama Ramiro?). Segunda escucha: tu alumno levanta la mano con cada algún, ningún o ninguna y da una palmada con cada mucho, poco o muy. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en algún, ninguna, mucho y pocas. Vas a oír «raciones» (portions). (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje del restaurante El Patio', channel: 'BUZÓN DE VOZ · DE RAMIRO PARA LUCÍA', src: '/audio/grammar-live/371.mp3',
            before: 'Es miércoles. Lucía tiene un mensaje en el buzón de voz: es Ramiro, del restaurante. ¿Qué crees que pasa: un problema con la reserva, una mesa nueva, una pregunta…? (Lucía has a voicemail from Ramiro. What do you think it is about?)',
            gist: { prompt: '¿Para qué llama Ramiro? · Why is Ramiro calling?', options: ['Para ofrecer una mesa en la terraza y pedir información.', 'Para cancelar la reserva del sábado.', 'Para cambiar el precio del menú.'], answer: 0, why: 'Ofrece la mesa de la terraza («queda una mesa libre») y pide el número de platos vegetarianos.', en: 'Why is Ramiro calling?' },
            details: [
              { prompt: '¿Por qué hay ahora una mesa libre en la terraza?', options: ['Porque un grupo canceló su reserva.', 'Porque el restaurante tiene otra terraza.', 'Porque Lucía llamó otra vez.'], answer: 0, why: '«Un grupo canceló su reserva y ahora queda una mesa libre».', en: 'Why is there a free table on the terrace now?' },
              { prompt: '¿Qué problema puede tener la terraza el sábado por la noche?', options: ['Hay demasiado ruido.', 'Tiene pocas sillas.', 'Va a hacer un poco de frío.'], answer: 2, why: '«El sábado por la noche va a hacer un poco de frío».', en: 'What problem might the terrace have on Saturday night?' },
              { prompt: '¿Qué pasa con los platos vegetarianos?', options: ['Hay algunos nuevos, pero pocas raciones.', 'No hay ninguno.', 'Hay muchos y muy baratos.'], answer: 0, why: '«Tenemos algunos platos nuevos, pero hay pocas raciones».', en: 'What about the vegetarian dishes?' },
              { prompt: '¿Cuándo necesita Ramiro la respuesta sobre la terraza?', options: ['El sábado.', 'Hoy.', 'Antes del jueves.'], answer: 1, why: '«Si prefieren la terraza, necesito saberlo hoy». El número de platos, antes del jueves.', en: 'When does Ramiro need the answer about the terrace?' },
            ],
            transcript: 'Buenos días, señora Herrera. Soy Ramiro, del restaurante El Patio. Llamo por la cena del sábado. Tengo una buena noticia: un grupo canceló su reserva y ahora queda una mesa libre en la terraza. Es una mesa [[muy|teal]] larga y hay [[mucho espacio|orange]]. Pero el sábado por la noche va a hacer un poco de frío. En el salón, en cambio, no hay [[ningún problema|blue]]. Usted decide. Si prefieren la terraza, necesito saberlo hoy, porque no queda [[ninguna otra mesa|blue]] grande. [[Otra cosa|violet]]: para los compañeros vegetarianos tenemos [[algunos platos|blue]] nuevos, pero hay [[pocas raciones|orange]]. Por favor, dígame el número exacto antes del jueves, porque el fin de semana tenemos [[muchas reservas|orange]]. Muchas gracias y hasta pronto.',
            reply: { teacher: 'Tú eres Ramiro. Tu alumno es Lucía y devuelve la llamada: elige terraza o salón, explica por qué con muy, mucho o demasiado, y dice cuántos platos vegetarianos necesita («Algunos compañeros…»).', self: 'Devuelve la llamada en voz alta como Lucía: ¿terraza o salón? ¿Por qué? ¿Cuántos platos vegetarianos necesitas? Usa muy, mucho o demasiado. (Call Ramiro back as Lucía.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú organizas la cena', coach: 'Habla de lugares reales. Talk about real places.',
      steps: [
        { title: 'Una cena de grupo · A group dinner', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno habla de restaurantes, cafés y comidas de grupo reales. Tú repites su frase con la forma correcta (algún/ningún, muy/mucho) y sigues con la repregunta.', self: 'Piensa en lugares y personas reales. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of real places and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Hay algún restaurante bueno para grupos cerca de tu casa o de tu trabajo? · Is there a good restaurant for groups near your home or work?', followUps: ['¿Hay alguno con terraza? (Is there one with a terrace?)', '¿Hay algún plato especial? (Is there a special dish?)'], phrases: ['Sí, hay [[algún|blue]] / [[algunos|blue]]…', 'No, no hay [[ninguno|blue]] cerca.', 'Hay uno con [[mucho espacio|orange]].'], hint: 'Algún delante de un sustantivo masculino; ninguno solo, con -o.', example: 'Sí, hay algunos restaurantes cerca de mi trabajo. Hay uno con terraza y mucho espacio, pero no hay ninguno barato.', next: 'Ahora, cómo es.', teacher: 'Responde tú también con un restaurante real: «En mi barrio no hay ningún restaurante con terraza».' },
            { q: '¿Cómo es ese restaurante? ¿Hay mucha gente, mucho ruido, poca luz? · What is that restaurant like?', followUps: ['¿Es muy caro? (Is it very expensive?)', '¿Los camareros son amables? (Are the waiters friendly?)'], phrases: ['Hay [[mucha|orange]] / [[poca|orange]] gente.', 'Es [[muy|teal]] tranquilo / ruidoso.', 'Hay [[demasiado|orange]] ruido los sábados.'], hint: 'Con sustantivo, concuerda (mucha gente). Con adjetivo, muy o demasiado (muy tranquilo).', example: 'Es muy bonito, pero los viernes hay demasiada gente y mucho ruido. Los camareros son muy amables.', next: 'Ahora, un problema.' },
            { q: 'Tu restaurante favorito no tiene ninguna mesa libre el sábado. ¿Qué haces? · Your favourite restaurant has no free table on Saturday. What do you do?', followUps: ['¿Buscas otro restaurante u otro día? (Another restaurant or another day?)', '¿Conoces alguna alternativa? (Do you know an alternative?)'], phrases: ['No queda [[ninguna mesa|blue]]…', 'Busco [[otro|violet]] restaurante / [[otro|violet]] día.', '¿Tienen [[alguna mesa|blue]] el domingo?'], hint: 'Otro y otra, sin «un». Alguna mesa, ninguna mesa.', example: 'Si no queda ninguna mesa, llamo otra vez y pregunto: «¿Tienen alguna mesa el domingo?». Si no, busco otro restaurante.', next: 'Ahora, tu grupo.' },
            { q: 'Piensa en tu grupo de amigos o compañeros: ¿cada persona come de todo? · Think of your group of friends or colleagues: does everyone eat everything?', followUps: ['¿Algunos no comen carne? (Do some of them not eat meat?)', '¿Alguien come muy poco o demasiado? (Does anyone eat very little or too much?)'], phrases: ['[[Algunos|blue]] amigos no comen…', '[[Cada|violet]] persona…', 'Mi hermano come [[mucho|teal]] / [[poco|teal]].'], hint: 'Con un verbo (come), mucho y poco no cambian.', example: 'Algunos amigos no comen carne y una amiga no come pescado. Mi hermano come mucho, pero yo como poco por la noche.', next: 'Ahora, los precios.' },
            { q: '¿Qué cosas son demasiado caras en tu ciudad? ¿Y qué es mucho más barato en otra ciudad? · What is too expensive in your city?', followUps: ['¿Comer fuera es muy caro? (Is eating out very expensive?)', '¿Hay muchas ofertas? (Are there many deals?)'], phrases: ['Los alquileres son [[demasiado|teal]] caros.', 'En [[otra|violet]] ciudad es [[mucho más|teal]] barato.', 'Hay [[pocas|orange]] ofertas.'], hint: 'Demasiado y muy no cambian delante de un adjetivo; mucho delante de «más».', example: 'En mi ciudad, los alquileres son demasiado caros. En otras ciudades es mucho más barato, pero hay pocas ofertas de trabajo.', teacher: 'Pregunta también: «¿Y es muy caro o demasiado caro?». Tu alumno ve la diferencia entre descripción y problema.' },
            { q: 'Ahora tú eres Lucía. Llamas al restaurante y reservas para tu grupo. · Now you are Lucía. Call the restaurant and book for your group.', followUps: ['¿Hay algún plato vegetariano? (Is there a vegetarian dish?)', '¿Hay mucho ruido en el salón? (Is there a lot of noise?)'], phrases: ['¿Tienen [[alguna mesa|blue]] para…?', '[[Algunos|blue]] compañeros…', '¿[[Cada persona|violet]] elige su plato?'], hint: 'Pregunta con alguna/algún, explica con algunos, reacciona con muy y mucho.', example: 'Buenos días. ¿Tienen alguna mesa para diez personas el viernes? Algunos compañeros no comen carne: ¿hay algún plato vegetariano? ¿Y cada persona elige su postre?', teacher: 'Tú eres Ramiro y respondes con problemas: «No queda ninguna mesa en la terraza», «Hay pocas raciones». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Ramiro y responde a tus preguntas («¿Tienen alguna mesa?», «¿Hay mucho ruido?») con algún, ningún, mucho y poco.', self: 'Ahora tú eres Ramiro: responde en voz alta a las preguntas de Lucía con «no queda ninguna…», «hay mucho…», «tenemos algunas…». (Now you are Ramiro: answer Lucía’s questions.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El mensaje al grupo', coach: '¿Concuerda o no cambia? Agree or stay the same?',
      steps: [
        { title: 'Un mensaje para los compañeros · A message for the colleagues', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada palabra de cantidad: ¿va con un sustantivo (concuerda) o con un verbo o un adjetivo (no cambia)? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada palabra de cantidad: ¿concuerda o no cambia? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'La reserva, para el grupo · The booking, for the group', situation: 'Eres Lucía (o organizas una cena real con tu grupo). Escribe un mensaje al grupo de compañeros: dónde y cuándo es la cena, cómo es el lugar, el precio y qué tiene que hacer cada persona. (You are Lucía, or you organise a real dinner. Write a message to the group: where and when, what the place is like, the price and what each person has to do.)', task: [
            'Di dónde y cuándo es la cena, y si quedaba alguna mesa en la terraza. (Where and when; was there a table on the terrace?)',
            'Describe el lugar con muy y con mucho/poco + sustantivo. (Describe the place.)',
            'Explica el menú con cada persona y algún/algunos. (Explain the menu.)',
            'Escribe un problema con demasiado o con ningún/ninguna. (Mention one problem.)',
            'Pide una respuesta antes de una fecha y despídete. (Ask for an answer and say goodbye.)',
          ], starters: ['¡Hola a todos!', 'Ya tenemos reserva para…', 'En la terraza no quedaba ninguna mesa, pero…', 'El salón es muy… y hay mucho…', 'Cada persona…', 'Hay algunos platos…', 'Si…, escríbeme antes del…', 'Un abrazo,'],
            words: ['algún', 'alguna', 'algunos', 'ningún', 'ninguna', 'mucho', 'mucha', 'muchos', 'poco', 'pocas', 'demasiado', 'muy', 'cada', 'otro', 'otra'],
            model: '¡Hola a todos! Ya tenemos reserva para la cena de despedida de Pilar: el sábado a las nueve, en el restaurante El Patio. En la terraza no quedaba [[ninguna mesa|blue]], pero el salón es [[muy|teal]] tranquilo y hay [[mucho espacio|orange]]. El menú cuesta treinta y cinco euros y [[cada persona|violet]] elige su plato. Hay [[algunos platos|blue]] vegetarianos, pero [[pocas raciones|orange]]: si no comes carne, escríbeme antes del jueves. Otra cosa: el sábado el restaurante tiene [[muchas reservas|orange]], así que tenemos que llegar puntuales. ¿Alguien tiene [[algún problema|blue]] con la hora? Un abrazo, Lucía.',
            minWords: 55,
            checks: [
              { label: 'Alguno o ninguno: algún, alguna, ningún… (some / not any)', pattern: '(?<!\\p{L})(?:algún|alguna|algunos|algunas|alguno|ningún|ninguna|ninguno)(?!\\p{L})', tip: 'Di si algo existe o no: «No quedaba ninguna mesa», «Hay algunos platos vegetarianos».' },
              { label: 'Mucho, poco o demasiado (a quantity word)', pattern: '(?<!\\p{L})(?:mucho|mucha|muchos|muchas|poco|poca|pocos|pocas|demasiado|demasiada|demasiados|demasiadas)(?!\\p{L})', tip: 'Di cuánto hay: «Hay mucho espacio», «Hay pocas raciones».' },
              { label: 'Cada u otro (each / another)', pattern: '(?<!\\p{L})(?:cada|otro|otra|otros|otras)(?!\\p{L})', tip: 'Explica el menú: «Cada persona elige su plato».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})mucho\\s+(?:caro|caros|cara|caras|bonito|bonita|tranquilo|tranquila|grande|grandes|bueno|buena|buenos|buenas|amable|amables)(?!\\p{L})', why: 'Delante de un adjetivo se usa **muy**: muy caro, muy tranquilo.' },
              { pattern: '(?<!\\p{L})ninguno\\s+(?:problema|plato|restaurante|sitio|día|postre)(?!\\p{L})', why: 'Delante de un sustantivo masculino singular, la forma corta: **ningún** problema.' },
              { pattern: '(?<!\\p{L})(?:un|una)\\s+otr[oa]s?(?!\\p{L})', why: '«Otro» no lleva «un» delante: **otra** mesa, **otro** día.' },
              { pattern: '(?<!\\p{L})(?:muchos|muchas|pocos|pocas)\\s+gente(?!\\p{L})', why: '«Gente» es femenino singular: **mucha** gente, **poca** gente.' },
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
            { tone: 'blue', label: 'ALGUNO · NINGUNO', formula: 'algún / ningún + masc. sing. · alguna, algunos · ninguna', example: '—¿Hay algún problema? —No, ninguno.', caption: 'existe o no existe; ninguno, casi siempre en singular', en: 'exists or not; ninguno is almost always singular' },
            { tone: 'orange', label: 'CANTIDAD + SUSTANTIVO', formula: 'mucho/a/os/as · poco/a/os/as · demasiado/a/os/as', example: 'Hay muchas mesas, pero poca gente.', caption: 'concuerdan con el sustantivo', en: 'they agree with the noun' },
            { tone: 'teal', label: 'NO CAMBIA', formula: 'verbo + mucho · muy / demasiado + adjetivo · mucho mejor', example: 'Pilar trabaja mucho. El menú es muy bueno, pero demasiado caro.', caption: 'con verbo o adjetivo, una sola forma', en: 'with a verb or an adjective, only one form' },
            { tone: 'violet', label: 'CADA · OTRO · TODO', formula: 'cada + singular · otro (sin un) · todos los + plural', example: 'Cada persona elige su plato. ¿Tienen otra mesa?', caption: 'uno por uno, uno más, el grupo completo', en: 'one by one, one more, the whole group' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira la palabra de al lado. Con un **sustantivo**, las palabras de cantidad concuerdan: algún día, ninguna mesa, muchas personas, poca gente. Con un **verbo** o un **adjetivo**, no cambian: trabaja mucho, muy caro, demasiado caros. Y «muy» nunca va solo.', en: 'Look at the word next to it. With a noun, quantity words agree: algún día, ninguna mesa, muchas personas, poca gente. With a verb or an adjective, they don’t change: trabaja mucho, muy caro, demasiado caros. And “muy” never stands alone.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'En mi barrio no hay ___ cine.', options: ['ningún', 'ninguno', 'ninguna'], answer: 0, why: 'Delante de «cine», masculino singular: ningún.', en: 'There’s no cinema in my neighbourhood.' },
            { prompt: 'Esta semana tengo ___ reuniones: no tengo tiempo para comer.', options: ['demasiadas', 'demasiado', 'muy'], answer: 0, why: 'Con «reuniones», femenino plural, y es un problema: demasiadas.', en: 'This week I have too many meetings: I have no time to eat.' },
            { prompt: 'Mi hermana lee ___: dos libros cada semana.', options: ['mucha', 'muy', 'mucho'], answer: 2, why: 'Con un verbo (lee): mucho, no cambia.', en: 'My sister reads a lot: two books every week.' },
            { prompt: 'El tren es ___ rápido que el autobús.', options: ['mucho más', 'muy más', 'mucha más'], answer: 0, why: 'Delante de «más»: mucho, no «muy». Y no cambia.', en: 'The train is much faster than the bus.' },
            { prompt: '¿Tienes ___ bolígrafo? Este no funciona.', options: ['otra', 'otro', 'un otro'], answer: 1, why: '«Bolígrafo» es masculino: otro, sin «un».', en: 'Do you have another pen? This one doesn’t work.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el piso nuevo de Pilar.', blocks: [
          { kind: 'lead', text: 'Un mes después, Pilar ya vive en otra ciudad y busca piso. Después de una visita, escribe sus notas. Completa las frases con la palabra de cantidad correcta.', en: 'A month later, Pilar is living in another city and is looking for a flat. After a viewing, she writes her notes. Complete the sentences with the right quantity word.' },
          { kind: 'rewrite', title: 'Las notas de Pilar · Pilar’s notes', items: [
            { prompt: 'El piso tiene ventanas. (una cantidad grande)', instruction: 'Añade la forma correcta de «mucho».', accept: ['El piso tiene muchas ventanas'] },
            { prompt: 'La cocina tiene un armario. (cero)', instruction: 'Escribe la frase en negativo con «no» y «ningún».', accept: ['La cocina no tiene ningún armario'] },
            { prompt: 'El alquiler es caro. (más de lo que Pilar puede pagar)', instruction: 'Añade «demasiado».', accept: ['El alquiler es demasiado caro'] },
          ] },
        ] },
        { title: 'Ampliación: cualquier, poco y un poco · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para ir más lejos: **cualquier** (no importa cuál), la diferencia entre **poco** y **un poco** delante de un adjetivo, y un plural raro de ninguno.', en: 'To go further: cualquier (it doesn’t matter which), the difference between poco and un poco before an adjective, and a rare plural of ninguno.' },
          { kind: 'tip', icon: '💡', title: 'Algún día o cualquier día · Some day or any day', text: '«¿Tienen **alguna** mesa?» pregunta si existe una. «**Cualquier** mesa está bien» dice que no importa cuál. Delante del sustantivo, masculino o femenino: **cualquier** día, **cualquier** mesa. Sola o después del sustantivo: **cualquiera** («una mesa cualquiera», «—¿Cuál quieren? —Cualquiera»).', en: '“¿Tienen alguna mesa?” asks whether one exists. “Cualquier mesa está bien” says it doesn’t matter which one. Before a noun, masculine or feminine: cualquier. On its own or after the noun: cualquiera.' },
          { kind: 'choice', title: 'Casos más difíciles · Harder cases', items: [
            { prompt: 'Lucía: «¿Qué día prefieres para la próxima cena?». Pilar: «___ día está bien: estoy libre toda la semana».', options: ['Algún', 'Ningún', 'Cualquier'], answer: 2, why: 'No importa qué día: cualquier, delante del sustantivo.', en: 'Any day is fine: I’m free all week.' },
            { prompt: '—¿Qué mesa quieren? —___, gracias. No tenemos preferencia.', options: ['Cualquier', 'Alguna', 'Cualquiera'], answer: 2, why: 'Sin sustantivo: cualquiera, con -a. «Cualquier» necesita un sustantivo detrás.', en: 'Which table would you like? Any of them, thanks.' },
            { prompt: 'El salón es ___ luminoso: solo tiene una ventana pequeña.', options: ['poco', 'un poco', 'pocos'], answer: 0, why: 'Poco + adjetivo = no muy (not very): poco luminoso. «Un poco» suele ir con adjetivos negativos: un poco caro, un poco frío.', en: 'The room isn’t very bright: it only has one small window.' },
            { prompt: 'El menú es ___ caro, pero la comida es excelente.', options: ['pocos', 'un poco', 'poco'], answer: 1, why: 'Un poco + adjetivo = algo, no mucho (a bit): un poco caro. «Poco caro» significa «barato», y entonces «pero» no tiene sentido.', en: 'The menu is a bit expensive, but the food is excellent.' },
            { prompt: 'No tengo ___ ganas de cocinar hoy: ¡vamos al restaurante!', options: ['ninguna', 'ningunas', 'ningún'], answer: 1, why: '«Ganas» se usa en plural; por eso aquí ninguno va en plural: ningunas ganas. Es una excepción, como «ningunas gafas».', en: 'I don’t feel like cooking at all today: let’s go to the restaurant!' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Tu alumno da un ejemplo propio con «cualquier» («Puedes llamarme cualquier día») y otro con «un poco» + adjetivo negativo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 072 · Doble negación: nadie, nada, nunca', text: 'Ya dices «**No** queda **ninguna** mesa» y «**Ninguna** mesa está libre». En la clase 072 trabajas a fondo esta doble negación con nadie, nada y nunca: «No viene nadie», «Nunca voy allí» o «No voy nunca». Es el paso natural: ya sabes cuándo necesitas «no» con ninguno; ahora lo aplicas a todas las palabras negativas.', en: 'You can now say “No queda ninguna mesa” and “Ninguna mesa está libre”. In class 072 you work in depth on this double negative with nadie, nada and nunca: “No viene nadie”, “Nunca voy allí” or “No voy nunca”. It is the natural next step: you already know when you need “no” with ninguno; now you apply it to all negative words.', href: '/gramatica/doble-negacion-nadie-nada-nunca', label: 'Ir a la clase 072' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cómo es tu restaurante favorito? ¿Hay algún plato especial? ¿Es muy caro?». Respuesta esperada: algún/ningún, mucho/poco + sustantivo y muy + adjetivo. Tarea: escribir el mensaje de Escribir para una comida real.' },
        ] },
      ],
    },
  ],
};
