import type { LiveLesson } from '../types';

/**
 * Lesson 544 · B2 · Hablar en general: uno, tú genérico y «dicen que» (course unit
 * G244, extension from the PCIC coverage review of 2026-11-11; studied after G149).
 * One scene: «Maletas», a podcast about moving abroad. Andrés interviews Lucía, who
 * has lived in three countries. In the audio a listener, Marta (Chilean voice), sends
 * a voice note to the programme. Content: four ways to speak without a specific
 * subject: se + 3rd singular (se vive bien; review of G149); uno / una + 3rd singular
 * (personal experience made general; obligatory with pronominal verbs: uno se
 * acostumbra); generic tú (colloquial, involves the listener); 3rd person plural
 * without subject (unknown or irrelevant agent, excludes the speaker: dicen que, me
 * robaron la bici, llaman a la puerta). Register and choice. Mistakes: *se se
 * acostumbra, *ellos dicen que (generic), *uno se acostumbran, generic tú in a formal
 * report, *se dicen que. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 544,
  level: 'B2',
  title: 'Hablar en general: uno, tú genérico y «dicen que»',
  subtitle: 'Contar experiencias y hablar de lo que hace la gente sin nombrar a nadie: uno se acostumbra, llegas y no conoces a nadie, dicen que…',
  legend: [
    { tone: 'teal', label: 'SE + 3.ª SINGULAR · se vive bien (neutral, general)' },
    { tone: 'orange', label: 'UNO / UNA · uno se acostumbra (experience, includes the speaker)' },
    { tone: 'violet', label: 'TÚ GENÉRICO · llegas y no conoces a nadie (colloquial “you”)' },
    { tone: 'blue', label: '3.ª PLURAL · dicen que, me robaron (someone, “they”)' },
  ],
  optionNotes: {
    'se se acostumbra': 'No puede haber dos «se»: con verbos pronominales se usa **uno**: uno se acostumbra.',
    'Ellos dicen que': 'Con «ellos» hablas de personas concretas. Para «la gente en general»: **Dicen que**, sin sujeto.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién lo hace? Nadie en concreto', coach: 'Cuatro formas de no decir quién.',
      steps: [
        { title: 'Un pódcast sobre vivir fuera · A podcast about living abroad', blocks: [
          { kind: 'lead', text: 'En el pódcast «Maletas», Andrés entrevista a Lucía, que ha vivido en tres países. Lucía dice: «Al principio **uno se siente** perdido. **Llegas** y no **conoces** a nadie. **Dicen que** el primer año es el más duro, y es verdad. Pero allí **se vive** muy bien». En cuatro frases no nombra a nadie y, sin embargo, cada una suena distinta. Hoy aprendes a elegir entre esas cuatro formas de hablar en general.', en: 'On the podcast “Maletas”, Andrés interviews Lucía, who has lived in three countries. Lucía says: “At first you feel lost. You arrive and you don’t know anyone. They say the first year is the hardest, and it’s true. But life is very good there”. In four sentences she names nobody, and yet each one sounds different. Today you learn to choose between these four ways of speaking in general.' },
          { kind: 'guide', text: { teacher: 'Tu alumno lee las cuatro frases y dice en cuáles Lucía habla también de sí misma.', self: 'Lee las cuatro frases en voz alta. ¿En cuáles Lucía habla también de sí misma?' } },
          { kind: 'compare', title: 'Cuatro formas · Four ways', columns: [
            { tone: 'teal', label: 'SE', sentence: 'Allí [[se vive|teal]] muy bien.', idea: 'Neutral: una afirmación general, sin implicar a nadie.', en: 'Life is very good there. / One lives well there.' },
            { tone: 'orange', label: 'UNO', sentence: 'Al principio [[uno se siente|orange]] perdido.', idea: 'Experiencia propia presentada como general.', en: 'At first you feel lost (I did, and so does anyone).' },
            { tone: 'violet', label: 'TÚ GENÉRICO', sentence: '[[Llegas|violet]] y no [[conoces|violet]] a nadie.', idea: 'Coloquial: mete al oyente en la situación.', en: 'You arrive and you don’t know anyone.' },
            { tone: 'blue', label: '3.ª PLURAL', sentence: '[[Dicen que|blue]] el primer año es el más duro.', idea: 'Otros, la gente: quien habla queda fuera.', en: 'They say the first year is the hardest.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Dicen que el primer año es el más duro». ¿Quién lo dice?', options: ['Lucía y Andrés.', 'La gente en general; no importa quién.', 'Unos amigos concretos de Lucía.'], answer: 1, why: 'Tercera persona del plural sin sujeto: el agente no se conoce o no importa.', en: 'Who says so?' },
            { prompt: '«Llegas y no conoces a nadie». ¿Habla Lucía solo de Andrés?', options: ['Sí, de su viaje.', 'No: es un «tú» general, cualquier persona.', 'No: habla de ella y de Andrés juntos.'], answer: 1, why: 'Tú genérico: cualquiera en esa situación.', en: 'Is Lucía talking only about Andrés?' },
          ] },
        ] },
        { title: 'Se y uno · Se and uno', mascot: '/brand/mascot/studying.webp', coach: 'Uno se acostumbra.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SE + 3.ª SINGULAR', question: '¿Cuándo uso «se»?', en: 'When do I use “se”?', formula: ['se + verbo en 3.ª singular: se vive, se come, se trabaja', 'neutral, válido en cualquier registro'],
            meaning: 'Es la forma más **neutral**: una generalización sin punto de vista personal. Funciona en la conversación y en textos formales. Ya la conoces de la clase sobre el *se* impersonal.',
            examples: [
              { es: 'En ese país [[se cena|teal]] muy temprano.', en: 'In that country people have dinner very early.' },
              { es: 'Aquí [[se trabaja|teal]] mucho, pero [[se gana|teal]] bien.', en: 'People work hard here, but they earn well.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'UNO / UNA', question: '¿Qué añade «uno»?', en: 'What does “uno” add?', formula: ['uno / una + verbo en 3.ª singular', 'obligatorio con verbos pronominales: uno se acostumbra, uno se levanta', 'también como complemento: a uno le dicen…'],
            meaning: '**Uno** generaliza a partir de la **experiencia de quien habla**: «me pasa a mí y le pasa a cualquiera». Es imprescindible con verbos que ya llevan *se* (acostumbrarse, sentirse, levantarse), porque no puede haber dos *se*. Una mujer puede decir **una** cuando habla sobre todo de su propia experiencia.',
            examples: [
              { es: 'Con el tiempo [[uno se acostumbra|orange]] a todo.', en: 'With time you get used to everything.' },
              { es: 'Cuando [[una|orange]] está sola en otro país, valora más a los amigos.', en: 'When you (a woman) are alone in another country, you value friends more.' },
              { es: 'A veces [[a uno|orange]] le hacen preguntas raras.', en: 'Sometimes people ask you odd questions.' },
            ],
            note: 'El verbo va siempre en **singular**: uno se acostumbra, no «uno se acostumbran».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En una ciudad nueva, ___ muy solo al principio.', options: ['se se siente', 'uno se siente', 'se sienten'], answer: 1, why: 'Sentirse ya lleva «se»: hace falta «uno».', en: 'In a new city, you feel very lonely at first.' },
            { prompt: 'En este barrio ___ muy tranquilo.', options: ['se vive', 'se viven', 'uno viven'], answer: 0, why: 'Se + 3.ª singular.', en: 'Life is very quiet in this neighbourhood.' },
          ] },
        ] },
        { title: 'Tú genérico · Generic “you”', mascot: '/brand/mascot/speaking.webp', coach: 'Coloquial y cercano.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'TÚ GENÉRICO', question: '¿Puedo decir «tú» sin hablar de ti?', en: 'Can I say “tú” without meaning you?', formula: ['verbo en 2.ª singular, normalmente sin «tú»', 'vas, llegas, te dicen, tienes que…'],
            meaning: 'En la conversación es muy frecuente usar la **segunda persona** para hablar en general. Acerca la experiencia al oyente: lo pone dentro de la escena. Suele aparecer en secuencias («Llegas, buscas piso, no entiendes nada…»). Es **coloquial**: en un informe, un artículo o un correo formal se prefiere *se*.',
            examples: [
              { es: '[[Vas|violet]] al banco y [[te piden|violet]] diez documentos.', en: 'You go to the bank and they ask you for ten documents.' },
              { es: 'Si no [[hablas|violet]] el idioma, [[te sientes|violet]] como un niño.', en: 'If you don’t speak the language, you feel like a child.' },
            ],
            note: 'Si hablas de usted a alguien, el genérico puede ir en usted («Llega usted y no conoce a nadie»), pero es menos frecuente: se suele preferir *uno* o *se*.' },
          { kind: 'tip', icon: '💡', title: '¿De verdad me hablas a mí? · Do you really mean me?', text: 'A veces el tú genérico es ambiguo. «Aquí trabajas demasiado» puede ser general o un reproche a tu interlocutor. El contexto lo aclara; si hay duda, usa **uno** o **se**: «Aquí se trabaja demasiado».', en: 'Sometimes generic tú is ambiguous. “Aquí trabajas demasiado” may be general or a reproach to the person you are talking to. If in doubt, use uno or se.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es más adecuada para un informe de empresa?', options: ['Llegas al aeropuerto y no encuentras información.', 'Al llegar al aeropuerto no se encuentra información.', 'Llegas tú y nada, ni un cartel.'], answer: 1, why: 'En un texto formal se evita el tú genérico: se + verbo.', en: 'Which sentence suits a company report best?' },
            { prompt: 'Lucía, a un amigo: «Los primeros meses ___ todo el tiempo y no ___ a nadie».', options: ['trabajas / ves', 'trabajan / ven', 'trabajo / veo'], answer: 0, why: 'Secuencia en tú genérico: experiencia general contada de forma cercana.', en: 'Lucía, to a friend: “The first months you work all the time and you don’t see anyone”.' },
          ] },
        ] },
        { title: 'Dicen que… · They say…', mascot: '/brand/mascot/portrait.webp', coach: 'Sin «ellos».', blocks: [
          { kind: 'concept', tone: 'blue', label: '3.ª PERSONA DEL PLURAL', question: '¿Cuándo uso «dicen», «llaman», «me robaron»?', en: 'When do I use “dicen”, “llaman”, “me robaron”?', formula: ['verbo en 3.ª plural, sin sujeto', 'dicen que… · cuentan que… · llaman a la puerta · me robaron el bolso'],
            meaning: 'Usas la tercera persona del plural **sin sujeto** cuando **no sabes** quién hizo algo, o **no importa**. Quien habla y quien escucha quedan **fuera**. Puede ser una sola persona: «**Llaman** a la puerta» (quizá es solo el cartero). No añadas «ellos»: con «ellos» hablas de personas concretas ya mencionadas.',
            examples: [
              { es: '[[Dicen que|blue]] el invierno allí es durísimo.', en: 'They say the winter there is really harsh.' },
              { es: 'En mi segundo mes [[me robaron|blue]] la bicicleta.', en: 'In my second month my bike was stolen.' },
              { es: 'En esa oficina [[te atienden|blue]] muy bien.', en: 'They look after you very well in that office.' },
            ],
            note: 'En español esta forma es mucho más frecuente que la pasiva: «Me robaron la bicicleta» suena más natural que «Mi bicicleta fue robada».' },
          { kind: 'decide', title: '¿Qué forma elijo? · Which form do I choose?', steps: [
            { q: '¿Alguien (no sabes quién, o no importa) hizo algo, y tú quedas fuera?', yes: '**3.ª plural** sin sujeto: Dicen que…, Me llamaron del banco.', no: 'next' },
            { q: '¿Es un texto formal o quieres sonar neutral?', yes: '**Se** + 3.ª singular: Se vive bien. (Con verbo pronominal: **uno**.)', no: 'next' },
            { q: '¿Generalizas desde tu propia experiencia?', yes: '**Uno / una**: Uno se acostumbra.', no: 'En la conversación, para meter al oyente en la escena: **tú genérico**: Llegas y no conoces a nadie.' },
          ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Al final se se acostumbra al frío.', right: 'Al final uno se acostumbra al frío.', why: 'Dos «se» juntos son imposibles: uno + verbo pronominal.' },
            { wrong: 'Ellos dicen que va a subir el alquiler. (= la gente)', right: 'Dicen que va a subir el alquiler.', why: 'Sin sujeto. «Ellos» señala a personas concretas.' },
            { wrong: 'Uno se acostumbran rápido.', right: 'Uno se acostumbra rápido.', why: '«Uno» lleva el verbo en singular.' },
            { wrong: 'Se dicen que es una ciudad cara.', right: 'Se dice que es una ciudad cara. / Dicen que es una ciudad cara.', why: '«Se dice que» en singular, o «dicen que» sin se.' },
            { wrong: '(Informe) Llegas a la oficina y nadie te explica nada.', right: '(Informe) Al llegar a la oficina no se recibe ninguna explicación.', why: 'En un texto formal se evita el tú genérico.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Suena el timbre. Lucía dice: «___ a la puerta».', options: ['Ellos llaman', 'Llaman', 'Se llama'], answer: 1, why: 'No sabemos quién es: 3.ª plural sin sujeto.', en: 'The doorbell rings. Lucía says: “There’s someone at the door”.' },
            { prompt: 'Ayer ___ del consulado para darme una cita.', options: ['me llamaron', 'se me llamó', 'uno me llamó'], answer: 0, why: 'Alguien del consulado; no importa quién.', en: 'Yesterday the consulate called me to give me an appointment.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una misma idea («aprender un idioma es difícil al principio») de las cuatro formas y explica cuál usaría con un amigo y cuál en un texto.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La entrevista', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: '«Maletas», episodio 12', blocks: [
          { kind: 'guide', text: { teacher: 'Leen la entrevista con papeles. Después tu alumno toca cada expresión marcada y explica por qué Lucía eligió esa forma.', self: 'Lee la entrevista en voz alta. Toca cada expresión marcada: ¿por qué se eligió esa forma?' } },
          { kind: 'explore', title: 'Empezar de cero', setting: 'Estudio de grabación. Andrés presenta el pódcast; Lucía es ingeniera y ha vivido en tres países en diez años.', lines: [
            { who: 'Andrés', text: 'Lucía, tres países en diez años. ¿Qué es lo más difícil de empezar de cero?', en: 'Lucía, three countries in ten years. What is the hardest thing about starting from scratch?' },
            { who: 'Lucía', text: 'Los papeles. [[Vas|violet]] a una oficina, [[haces|violet]] dos horas de cola y [[te dicen|blue]] que falta un sello.', en: 'The paperwork. You go to an office, you queue for two hours and they tell you a stamp is missing.' },
            { who: 'Andrés', text: '[[Dicen que|blue]] ahora todo se puede hacer por internet.', en: 'They say you can do everything online now.' },
            { who: 'Lucía', text: 'Eso [[cuentan|blue]]. Pero [[uno aprende|orange]] a tener paciencia.', en: 'So they say. But you learn to be patient.' },
            { who: 'Andrés', text: '¿Y la soledad?', en: 'And loneliness?' },
            { who: 'Lucía', text: 'Es real. Los domingos [[una se pregunta|orange]] qué hace tan lejos de casa.', en: 'It’s real. On Sundays you ask yourself what you are doing so far from home.' },
            { who: 'Andrés', text: '¿Algún momento malo?', en: 'Any bad moments?' },
            { who: 'Lucía', text: 'En mi primera semana [[me robaron|blue]] el teléfono en el metro. Lloré una hora.', en: 'In my first week my phone was stolen on the metro. I cried for an hour.' },
            { who: 'Andrés', text: 'Pero te quedaste.', en: 'But you stayed.' },
            { who: 'Lucía', text: 'Sí, porque allí [[se vive|teal]] bien, [[se respeta|teal]] el tiempo libre. Y [[cuando te invitan|blue]] a una casa por primera vez, [[sientes|violet]] que ya eres de allí.', en: 'Yes, because life is good there and free time is respected. And when you are invited to someone’s home for the first time, you feel you belong.' },
          ], notes: {
            'Vas': 'Tú genérico: Lucía no habla del viaje de Andrés, sino de cualquiera. Mete al oyente en la escena.',
            'haces': 'Sigue la secuencia en tú genérico.',
            'te dicen': '3.ª plural: los empleados de la oficina; no importa quiénes. El «te» es genérico.',
            'Dicen que': '3.ª plural sin sujeto: la gente, las noticias. Andrés no dice si él lo cree.',
            'cuentan': '3.ª plural: «eso cuentan» = eso dice la gente (y Lucía duda).',
            'uno aprende': 'Uno: Lucía generaliza desde su propia experiencia.',
            'una se pregunta': 'Una + verbo pronominal: experiencia muy personal de Lucía, presentada como general.',
            'me robaron': '3.ª plural: no sabe quién fue. Más natural que «mi teléfono fue robado».',
            'se vive': 'Se + 3.ª singular: afirmación neutral sobre el país.',
            'se respeta': 'Se: generalización neutral.',
            'cuando te invitan': '3.ª plural (la gente de allí) + «te» genérico.',
            'sientes': 'Tú genérico: cualquiera sentiría lo mismo.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: 'Para Lucía, ¿qué es lo más difícil?', options: ['El idioma.', 'Los papeles.', 'El clima.'], answer: 1, why: '«Los papeles».', en: 'What is the hardest thing for Lucía?' },
            { prompt: '¿Cree Lucía que todo se puede hacer por internet?', options: ['Sí, totalmente.', 'Tiene dudas: «Eso cuentan».', 'No habla del tema.'], answer: 1, why: '«Eso cuentan» marca distancia.', en: 'Does Lucía believe everything can be done online?' },
            { prompt: '¿Por qué se quedó?', options: ['Por el sueldo.', 'Porque allí se vive bien y se respeta el tiempo libre.', 'Porque no podía volver.'], answer: 1, why: '«Allí se vive bien, se respeta el tiempo libre».', en: 'Why did she stay?' },
          ] },
        ] },
        { title: '¿Qué forma es? · Which form is it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Cuatro formas de generalizar', categories: [
            { id: 'se', label: 'SE', tone: 'teal' },
            { id: 'uno', label: 'UNO / UNA', tone: 'orange' },
            { id: 'tu', label: 'TÚ GENÉRICO', tone: 'violet' },
            { id: 'plural', label: '3.ª PLURAL', tone: 'blue' },
          ], items: [
            { text: 'En verano se sale mucho.', answer: 'se', why: 'Se + 3.ª singular.' },
            { text: 'Nunca sabes qué va a pasar.', answer: 'tu', why: '2.ª singular con valor general.' },
            { text: 'Me han subido el alquiler.', answer: 'plural', why: 'Alguien (el dueño): no importa quién.' },
            { text: 'Uno nunca deja de aprender.', answer: 'uno', why: 'Uno + singular.' },
            { text: 'Cuentan que aquí vivió un poeta.', answer: 'plural', why: 'La gente lo cuenta.' },
            { text: 'Te acostumbras a todo.', answer: 'tu', why: 'Tú genérico con verbo pronominal.' },
            { text: 'Aquí no se puede aparcar.', answer: 'se', why: 'Se + poder.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué dicen de tu ciudad los que no son de allí? ¿Es verdad?».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Elige la forma y el registro.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'No sabes quién lo hizo.', prompt: 'Anoche ___ el coche a mi vecina.', options: ['le rayaron', 'se le rayaron', 'uno le rayó'], answer: 0, why: 'Agente desconocido: 3.ª plural.', en: 'Last night someone scratched my neighbour’s car.' },
            { context: 'Verbo pronominal, experiencia general.', prompt: 'Después de un año, ___ de casi todo.', options: ['se se entera', 'uno se entera', 'se enteran'], answer: 1, why: 'Enterarse ya lleva «se»: uno.', en: 'After a year, you find out about almost everything.' },
            { context: 'Guía turística, registro neutral.', prompt: 'En esta región ___ muy bien.', options: ['comes tú', 'se come', 'comen'], answer: 1, why: 'Texto neutral: se + 3.ª singular.', en: 'The food is very good in this region.' },
            { context: 'Rumor.', prompt: '___ van a cerrar la fábrica.', options: ['Dicen que', 'Ellos dicen', 'Se dicen que'], answer: 0, why: 'Dicen que: fuente indeterminada.', en: 'They say they are going to close the factory.' },
            { context: 'Conversación entre amigos.', prompt: 'Es increíble: ___ una pregunta sencilla y nadie ___.', options: ['haces / te contesta', 'se hacen / contestan', 'hacen / se contesta'], answer: 0, why: 'Tú genérico: cercano y coloquial.', en: 'It’s incredible: you ask a simple question and nobody answers you.' },
            { context: 'Una mujer habla de su experiencia.', prompt: 'A veces ___ cansada de explicar siempre lo mismo.', options: ['una está', 'se está una', 'están'], answer: 0, why: 'Una + adjetivo en femenino: experiencia propia generalizada.', en: 'Sometimes you (a woman) are tired of always explaining the same thing.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'En invierno se se levanta de noche.', ok: false, options: ['En invierno uno se levanta de noche.', 'En invierno se levantan uno de noche.', 'En invierno se uno levanta de noche.'], answer: 0, why: 'Levantarse + impersonal: uno se levanta.' },
            { sentence: 'Me han dicho que mañana hay huelga de trenes.', ok: true, why: 'Correcta: 3.ª plural, fuente indeterminada.' },
            { sentence: 'Uno nunca saben lo que puede pasar.', ok: false, options: ['Uno nunca sabe lo que puede pasar.', 'Unos nunca sabe lo que puede pasar.', 'Uno nunca se saben lo que puede pasar.'], answer: 0, why: 'Uno + verbo en singular.' },
            { sentence: 'Llaman al teléfono; ¿puedes contestar?', ok: true, why: 'Correcta: no sabemos quién llama.' },
            { sentence: 'Se dicen que el museo es gratis los domingos.', ok: false, options: ['Se dice que el museo es gratis los domingos.', 'Se dicen que el museo fue gratis los domingos.', 'Uno dicen que el museo es gratis los domingos.'], answer: 0, why: 'Se dice que (singular) o Dicen que.' },
          ] },
        ] },
        { title: 'Mensajes de oyentes · Listeners’ messages', blocks: [
          { kind: 'chat-fill', title: 'El chat del programa', lines: [
            { who: 'Pablo', text: 'Yo llevo dos años fuera. Al principio ___ muy raro.', options: ['uno se siente', 'se se siente', 'se sienten'], answer: 0, why: 'Sentirse: uno se siente.' },
            { who: 'Irene', text: 'Total. ___ al supermercado y no ___ ninguna marca.', options: ['Vas / reconoces', 'Van / reconoce', 'Se va / reconocen'], answer: 0, why: 'Tú genérico en secuencia.' },
            { who: 'Pablo', text: 'Y luego ___ que los de fuera no nos integramos.', options: ['dicen', 'se dicen', 'se dicen'], answer: 0, why: 'La gente lo dice: 3.ª plural sin sujeto.' },
            { who: 'Irene', text: 'A mí ___ un curso de idioma gratis en el ayuntamiento.', options: ['me ofrecieron', 'se me ofrecí', 'uno me ofrecieron'], answer: 0, why: 'Alguien del ayuntamiento: 3.ª plural.' },
            { who: 'Andrés', text: 'Gracias a los dos. Está claro que con ayuda ___ mejor.', options: ['se vive', 'se viven', 'viven'], answer: 0, why: 'Cierre neutral: se vive.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['se', 'Uno', 'todo', 'a', 'acostumbra'], accept: ['Uno se acostumbra a todo'], en: 'You get used to everything.' },
            { tiles: ['que', 'Dicen', 'llover', 'a', 'va'], accept: ['Dicen que va a llover'], en: 'They say it is going to rain.' },
            { tiles: ['robaron', 'Me', 'cartera', 'la'], accept: ['Me robaron la cartera'], en: 'My wallet was stolen.' },
            { tiles: ['bien', 'Aquí', 'muy', 'se', 'come'], accept: ['Aquí se come muy bien'], en: 'The food is very good here.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia la forma', items: [
            { prompt: 'La gente dice que es un país seguro.', instruction: 'Quita «la gente» y usa la 3.ª persona del plural.', accept: ['Dicen que es un país seguro'] },
            { prompt: 'Te acostumbras al ruido.', instruction: 'Cambia el tú genérico por «uno».', accept: ['Uno se acostumbra al ruido'] },
            { prompt: 'Alguien me llamó del banco.', instruction: 'Quita «alguien» y usa la 3.ª persona del plural.', accept: ['Me llamaron del banco'] },
            { prompt: 'Aquí trabajas mucho. (texto formal)', instruction: 'Cambia el tú genérico por «se».', accept: ['Aquí se trabaja mucho'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta en un minuto cómo es empezar en un trabajo nuevo, con al menos tres formas distintas de generalizar.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de una oyente', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Marta, desde lejos', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota qué dice Marta con «uno», con «tú» y con la 3.ª plural.', self: 'Escucha una vez para la idea general y otra para los detalles. Fíjate en cómo generaliza Marta.' } },
          { kind: 'listen', title: 'Nota de voz para «Maletas»', channel: 'NOTA DE VOZ · MARTA, OYENTE DEL PROGRAMA', src: '/audio/grammar-live/544.mp3',
            before: 'Marta escuchó la entrevista de Lucía y manda una nota de voz al programa. Lleva seis meses en otro país. ¿Estará de acuerdo con Lucía?',
            gist: { prompt: '¿Cuál es la idea general?', options: ['Marta cuenta que empezar fuera es duro, pero que vale la pena.', 'Marta quiere volver a su país cuanto antes.', 'Marta critica el programa.'], answer: 0, why: '«Es duro, pero no me arrepiento».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué le dijeron antes de irse?', options: ['Que iba a ser fácil.', 'Que iba a pasar frío.', 'Que no encontraría trabajo.'], answer: 0, why: '«Me dijeron que iba a ser fácil».', en: 'What was she told before leaving?' },
              { prompt: '¿Qué pasa cuando hablas mal el idioma, según Marta?', options: ['Te tratan como a un niño.', 'Te ayudan siempre.', 'No pasa nada.'], answer: 0, why: '«Te hablan despacio y alto, como a un niño».', en: 'What happens when you speak the language badly?' },
              { prompt: '¿Qué le ofrecieron en el trabajo?', options: ['Un aumento.', 'Un curso de idioma.', 'Un piso.'], answer: 1, why: '«En el trabajo me ofrecieron un curso».', en: 'What was she offered at work?' },
              { prompt: '¿A qué no se acostumbra uno nunca?', options: ['A la comida.', 'A estar lejos en los cumpleaños.', 'Al horario.'], answer: 1, why: '«A lo que uno no se acostumbra es a perderse los cumpleaños».', en: 'What do you never get used to?' },
            ],
            transcript: 'Hola, Andrés; hola, Lucía. Soy Marta y llevo seis meses fuera. Me sentí muy identificada con el programa. Antes de venir, [[me dijeron|blue]] que iba a ser fácil. No lo es. [[Llegas|violet]] con mucha ilusión y, a las dos semanas, [[te das cuenta|violet]] de que no [[entiendes|violet]] ni el recibo de la luz. Cuando hablas mal el idioma, [[te hablan|blue]] despacio y alto, como a un niño. Pero también hay cosas buenas: en el trabajo [[me ofrecieron|blue]] un curso, y aquí [[se respeta|teal]] mucho el horario. [[Dicen que|blue]] el segundo año es mejor. A lo que [[uno no se acostumbra|orange]] nunca es a perderse los cumpleaños de la familia. Es duro, pero no me arrepiento. Un abrazo.',
            reply: { teacher: 'Tu alumno responde a Marta en el programa: le da ánimo con dos generalizaciones («uno…», «dicen que…») y un consejo.', self: 'Responde a Marta en voz alta: dale ánimo con dos generalizaciones («uno…», «dicen que…») y un consejo.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que le pasa a cualquiera', coach: 'Generaliza con intención.',
      steps: [
        { title: 'Experiencias compartidas', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas; tu alumno responde generalizando. Señala qué forma usó y pídele la misma idea en otro registro.', self: 'Lee cada pregunta y responde en voz alta. Después di la misma idea con otra forma.' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo es empezar en un lugar nuevo: una ciudad, un trabajo, una escuela?', followUps: ['¿Qué es lo primero que se aprende?', '¿A qué se acostumbra uno más rápido?'], phrases: ['Al principio [[uno se siente|orange]]…', '[[Llegas|violet]] y…', 'Con el tiempo [[te acostumbras|violet]] a…'], hint: 'Uno o tú genérico para la experiencia.', example: 'Al principio uno se siente observado. Llegas, no sabes dónde está nada y te da vergüenza preguntar. Con el tiempo te acostumbras y hasta ayudas a los nuevos.', next: 'Ahora, rumores.' },
            { q: '¿Qué se dice de tu país o tu ciudad? ¿Es verdad?', followUps: ['¿Qué tópico te molesta?', '¿Cuál es cierto?'], phrases: ['[[Dicen que|blue]]…', '[[Se dice que|teal]]…, pero…', 'En realidad, allí [[se|teal]]…'], hint: 'Dicen que / se dice que + lo que opina la gente.', example: 'Dicen que en mi ciudad siempre llueve. Es verdad, pero también se vive muy bien: se come genial y se camina a todas partes.', next: 'Ahora, algo que te pasó.' },
            { q: 'Cuenta algo que te hicieron sin que sepas quién: un robo, una multa, una sorpresa.', followUps: ['¿Cómo reaccionaste?', '¿Lo solucionaron?'], phrases: ['Una vez [[me robaron|blue]]…', '[[Me pusieron|blue]] una multa…', '[[Me dejaron|blue]] una nota…'], hint: '3.ª plural sin sujeto: no sabes quién.', example: 'Una vez me dejaron una nota en el coche: «Aparcas fatal». Nunca supe quién fue. Desde entonces aparco con más cuidado.', next: 'Ahora, cambio de registro.' },
            { q: 'Explica cómo se hace un trámite en tu país, primero a un amigo y luego en tono formal.', followUps: ['¿Qué documentos piden?', '¿Cuánto se tarda?'], phrases: ['[[Vas|violet]] a… y [[te piden|blue]]…', 'Primero [[se solicita|teal]]…', '[[Se tarda|teal]] unos…'], hint: 'Amigo: tú genérico. Formal: se.', example: 'A un amigo: «Vas a la oficina, te piden el pasaporte y esperas una hora». Formal: «Se presenta el pasaporte en la oficina y se espera aproximadamente una hora».', teacher: 'Pide las dos versiones y comenta la diferencia de registro.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace de presentador del pódcast y te entrevista.', self: 'Ahora haz tú de presentador: formula las preguntas en voz alta y responde como otra persona.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un comentario para el pódcast', coach: 'Tu experiencia, en general.',
      steps: [
        { title: 'Escribe al programa', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos qué forma de generalizar aparece en cada frase y si encaja con el tono.', self: 'Escribe tu comentario y toca «Revisar mi texto». Después revisa qué forma de generalizar usaste en cada frase.' } },
          { kind: 'write', title: 'Empezar de cero', situation: '«Maletas» pide a sus oyentes que cuenten cómo es empezar de cero: en otro país, otra ciudad, un trabajo o unos estudios nuevos. Escribe tu comentario para la web del programa.', task: [
            'Presenta la situación: dónde y cuándo empezaste de cero.',
            'Describe la experiencia con «uno» o «una».',
            'Cuenta una secuencia típica con tú genérico.',
            'Incluye algo que dice la gente (dicen que…) y si es verdad.',
            'Cuenta algo que te hicieron o te ofrecieron, sin decir quién.',
          ], starters: ['Hace… empecé de cero en…', 'Al principio uno…', 'Llegas y…', 'Dicen que…, pero…', 'Un día me…', 'Hoy puedo decir que…'],
            words: ['uno se siente', 'uno aprende', 'te das cuenta', 'te acostumbras', 'dicen que', 'cuentan que', 'me ofrecieron', 'me dijeron', 'se vive', 'se aprende'],
            model: 'Hace tres años empecé de cero en una ciudad donde no conocía a nadie. Al principio [[uno se siente|orange]] invisible: nadie te espera en ningún sitio. [[Llegas|violet]] a casa, [[cenas|violet]] solo y [[te preguntas|violet]] si fue buena idea. [[Dicen que|blue]] las ciudades grandes son frías, pero no es del todo cierto. Un día [[me invitaron|blue]] a un grupo de senderismo y todo cambió. Poco a poco [[uno aprende|orange]] que la soledad del principio es normal. Hoy puedo decir que aquí [[se vive|teal]] bien y que volvería a hacerlo.',
            minWords: 80,
            checks: [
              { label: 'Una generalización con «uno» o «una»', pattern: '(?:^|[^\\p{L}])unos?\\s+(?:no\\s+|nunca\\s+|siempre\\s+)?(?:se\\s+)?\\p{L}+[ae](?![\\p{L}])|(?:^|[^\\p{L}])una\\s+(?:no\\s+|nunca\\s+)?se\\s+\\p{L}+', tip: 'Por ejemplo: «Al principio uno se siente perdido».' },
              { label: 'Tercera persona del plural sin sujeto: dicen que, me ofrecieron…', pattern: '(?:^|[^\\p{L}])(?:dicen|cuentan|comentan)\\s+que|(?:^|[^\\p{L}])(?:me|te|nos|le)\\s+\\p{L}+(?:aron|ieron|an|en)(?![\\p{L}])', tip: 'Por ejemplo: «Dicen que…», «Me ofrecieron un curso».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])se\\s+se(?![\\p{L}])', why: 'Dos «se» juntos no son posibles: usa **uno** + verbo pronominal.' },
              { pattern: '(?:^|[^\\p{L}])se\\s+dicen\\s+que', why: '**Se dice que** (singular) o **Dicen que**.' },
              { pattern: '(?:^|[^\\p{L}])uno\\s+se\\s+\\p{L}+an(?![\\p{L}])', why: 'Con **uno**, el verbo va en singular: uno se acostumbra.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'SE', formula: 'se + 3.ª singular', example: 'Allí se vive muy bien.', caption: 'neutral; sirve en textos formales', en: 'neutral; fine in formal texts' },
            { tone: 'orange', label: 'UNO / UNA', formula: 'uno + 3.ª singular (+ se)', example: 'Uno se acostumbra a todo.', caption: 'experiencia propia; obligatorio con verbos pronominales', en: 'own experience; required with pronominal verbs' },
            { tone: 'violet', label: 'TÚ GENÉRICO', formula: '2.ª singular', example: 'Llegas y no conoces a nadie.', caption: 'coloquial; mete al oyente en la escena', en: 'colloquial; puts the listener in the scene' },
            { tone: 'blue', label: '3.ª PLURAL', formula: 'verbo en plural, sin sujeto', example: 'Dicen que… · Me robaron el teléfono.', caption: 'agente desconocido o sin importancia; sin «ellos»', en: 'unknown or irrelevant agent; no “ellos”' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Las cuatro formas ocultan quién hace la acción, pero no son iguales: **se** es neutral; **uno** habla desde la experiencia; **tú** acerca la escena al oyente y es coloquial; la **3.ª plural** deja fuera a quien habla. Elige según quién está «dentro» y según el registro.', en: 'All four hide who does the action, but they are not the same: se is neutral; uno speaks from experience; tú brings the scene closer and is colloquial; the 3rd person plural leaves the speaker out. Choose according to who is “inside” and the register.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda', items: [
            { prompt: 'Con los años, ___ menos por las cosas pequeñas.', options: ['se se preocupa', 'uno se preocupa', 'se preocupan'], answer: 1, why: 'Preocuparse: uno se preocupa.', en: 'Over the years, you worry less about small things.' },
            { prompt: '___ que van a abrir una estación de metro aquí.', options: ['Dicen', 'Se dicen', 'Uno dicen'], answer: 0, why: 'Rumor: Dicen que.', en: 'They say a metro station is going to open here.' },
            { prompt: '(Artículo de prensa) En las grandes ciudades ___ cada vez más solo.', options: ['vives', 'se vive', 'viven'], answer: 1, why: 'Texto formal y neutral: se vive.', en: '(Press article) In big cities people increasingly live alone.' },
            { prompt: '¿Sabes? Ayer ___ el sueldo.', options: ['me subieron', 'uno me subió', 'se me subieron'], answer: 0, why: 'Alguien de la empresa: 3.ª plural.', en: 'Guess what? I got a pay rise yesterday.' },
            { prompt: 'Es que ___ a casa agotado y encima ___ que cocinar.', options: ['llegas / tienes', 'llegan / tiene', 'se llega / tienen'], answer: 0, why: 'Queja coloquial: tú genérico.', en: 'It’s just that you get home exhausted and on top of that you have to cook.' },
          ] },
        ] },
        { title: 'Ampliación · Nosotros de modestia y otros recursos', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más.', blocks: [
          { kind: 'lead', text: 'Hay más recursos para no personalizar. En textos académicos se usa el **plural de modestia**: «En este trabajo **analizamos**…», aunque el autor sea uno solo. **La gente** y **todo el mundo** generalizan con el verbo en singular: «Todo el mundo lo sabe». Y con **hay que** se expresa una obligación sin sujeto: «Hay que tener paciencia».', en: 'There are more ways to avoid personalizing. Academic texts use the plural of modesty: “En este trabajo analizamos…”, even with a single author. La gente and todo el mundo generalize with a singular verb. And hay que expresses an obligation with no subject.' },
          { kind: 'choice', title: 'Para estudiantes rápidos', items: [
            { prompt: 'En una tesis escrita por una sola persona, ¿qué frase es habitual?', options: ['En este capítulo describimos el método.', 'En este capítulo describes el método.', 'En este capítulo te describen el método.'], answer: 0, why: 'Plural de modestia.', en: 'In a thesis by a single author, which sentence is usual?' },
            { prompt: 'Todo el mundo ___ que mudarse cuesta.', options: ['saben', 'sabe', 'sabemos'], answer: 1, why: 'Todo el mundo + singular.', en: 'Everybody knows that moving is hard.' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Pregunta final: «¿Qué hay que hacer para integrarse en un lugar nuevo?». Tres frases con «hay que».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 150 · Se accidental y responsabilidad atenuada', text: 'Ya eliges entre «se», «uno», el tú genérico y la tercera persona del plural según el registro y quién queda dentro. La clase 150 retoma la ruta del curso: «Se accidental y responsabilidad atenuada».', en: 'You can now choose between “se”, “uno”, generic tú and the third person plural according to register and who is included. Class 150 returns to the main route of the course: “Se accidental y responsabilidad atenuada”.', href: '/gramatica/se-accidental-y-responsabilidad-atenuada', label: 'Ir a la clase 150' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: tu alumno resume en tres frases lo que se lleva de la clase y da un ejemplo propio de cada punto. Tarea: terminar o reescribir el texto de Escribir.' },
        ] },
      ],
    },
  ],
};
