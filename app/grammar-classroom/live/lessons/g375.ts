import type { LiveLesson } from '../types';

/**
 * Lesson 375 · A2 · Ser, estar y llevar para descripciones cambiantes (course unit G075).
 * One scene runs through the class: Friday in Valencia. Raúl, Marta's friend
 * from university, arrives by train from Sevilla. Marta has a meeting until
 * late, so her partner Hugo, who has never met Raúl, picks him up at the
 * station. Marta and Hugo look at an old photo and a recent one; Raúl sends a
 * voice message from the train (Spanish voice) describing himself; later the
 * three meet for dinner. Content: describing people with SER (es alto, es
 * rubio, es simpático: characteristics), ESTAR (está cansado, está más delgado,
 * está muy cambiado, estás muy guapa: a state now or a change you notice) and
 * LLEVAR (lleva gafas, lleva barba, lleva el pelo corto, lleva una chaqueta
 * verde: clothes, accessories and hairstyle), with TENER for body features
 * (tiene los ojos verdes) and ponerse (class 035) as the action vs llevar as
 * the state. Builds on classes 011, 012, 014 and 035; llevaba (class 049) for
 * «antes». Llevar + time (lleva cuatro horas de viaje, class 055) appears only
 * receptively. Ampliación: adjectives that change meaning (es listo / está
 * listo, es aburrido / está aburrido, está rico) and llevar + time.
 * Mistake: *Raúl es cansado → está cansado; *Es con gafas → Lleva gafas;
 * *Lleva los ojos verdes → Tiene los ojos verdes. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 375,
  level: 'A2',
  title: 'Ser, estar y llevar para descripciones cambiantes',
  subtitle: 'Describir a una persona como es, como está hoy y qué lleva: es alto, está cansado, lleva gafas y el pelo corto.',
  legend: [
    { tone: 'blue', label: 'SER · cómo es: características (what someone is like)' },
    { tone: 'teal', label: 'ESTAR · cómo está ahora: estado o cambio (how someone is or looks now)' },
    { tone: 'orange', label: 'LLEVAR · ropa, gafas, barba, pelo (what someone is wearing)' },
    { tone: 'violet', label: 'LLEVAR + tiempo · solo para entender (lleva cuatro horas: has been… for)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cómo es, cómo está, qué lleva', coach: 'Tres verbos para describir. Three verbs to describe someone.',
      steps: [
        { title: 'Alguien llega en tren · Someone arrives by train', blocks: [
          { kind: 'lead', text: 'Marta vive en Valencia. Hoy llega su amigo Raúl, de Sevilla, en tren. Marta tiene una reunión y su pareja, Hugo, va a buscarlo a la estación. Pero Hugo no conoce a Raúl. ¿Cómo lo va a reconocer? Marta lo describe con tres verbos: **ser**, **estar** y **llevar**.', en: 'Marta lives in Valencia. Today her friend Raúl arrives from Seville by train. Marta has a meeting, so her partner Hugo is going to pick him up at the station. But Hugo has never met Raúl. How will he recognise him? Marta describes him with three verbs: ser, estar and llevar.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Marta y tu alumno repite. Después tu alumno dice qué frase puede cambiar mañana.', self: 'Lee las tres frases en voz alta. ¿Qué frase puede cambiar mañana? (Which sentence can change tomorrow?)' } },
          { kind: 'compare', title: 'Tres frases de Marta · Three sentences from Marta', columns: [
            { tone: 'blue', label: 'SER · cómo es', sentence: 'Raúl [[es alto|blue]] y [[rubio|blue]].', idea: 'Sus características: así es Raúl.', en: 'Raúl is tall and blond.' },
            { tone: 'teal', label: 'ESTAR · cómo está hoy', sentence: 'Hoy [[está un poco cansado|teal]].', idea: 'Un estado de ahora: mañana, quizás no.', en: 'Today he is a bit tired.' },
            { tone: 'orange', label: 'LLEVAR · qué lleva', sentence: '[[Lleva gafas|orange]] y [[barba|orange]].', idea: 'Cosas que se pone o se quita: gafas, ropa, barba, peinado.', en: 'He wears glasses and has a beard.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Raúl es alto» habla de…', options: ['una característica de Raúl.', 'la ropa de Raúl.', 'cómo está Raúl hoy.'], answer: 0, why: 'La altura es una característica de la persona: ser.', en: '“Raúl es alto” is about…' },
            { prompt: '«Hoy está un poco cansado» habla de…', options: ['su carácter.', 'lo que lleva puesto.', 'un estado de ahora.'], answer: 2, why: 'Cansado es un estado: hoy sí, mañana quizás no. Estar.', en: '“Hoy está un poco cansado” is about…' },
            { prompt: 'Raúl ___ gafas.', options: ['lleva', 'es', 'está'], answer: 0, why: 'Las gafas se ponen y se quitan: llevar.', en: 'Raúl wears glasses.' },
          ] },
        ] },
        { title: 'Ser o estar con el mismo adjetivo · Same adjective, two verbs', mascot: '/brand/mascot/studying.webp', coach: 'Así es o así está ahora. What he is like or how he looks now.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SER + ADJETIVO', question: '¿Cómo es?', en: 'What is he / she like? (characteristics)', formula: ['ser + alto · bajo · rubio · joven · delgado', 'ser + simpático · tranquilo · serio'],
            meaning: 'Con **ser** describes cómo es una persona: el cuerpo, la edad, el carácter. Es la descripción «normal», la que sirve para presentarla o reconocerla. Ya lo conoces de la clase 011.',
            examples: [
              { es: 'Raúl [[es alto|blue]], [[rubio|blue]] y [[muy simpático|blue]].', en: 'Raúl is tall, blond and very nice.' },
              { es: 'Hugo [[es bajo|blue]] y [[bastante serio|blue]].', en: 'Hugo is short and quite serious.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'ESTAR + ADJETIVO', question: '¿Cómo está ahora?', en: 'How is he / she now? How does he / she look today?', formula: ['estar + cansado · contento · nervioso', 'estar + más delgado · muy cambiado · muy guapa (hoy)'],
            meaning: 'Con **estar** hablas de un estado de ahora (cansado, nervioso) o de un **cambio que ves**: comparas con antes o con lo normal. «Raúl **está** más delgado» = antes no estaba tan delgado.',
            examples: [
              { es: 'Después del viaje, Raúl [[está cansado|teal]].', en: 'After the trip, Raúl is tired.' },
              { es: '¡Qué [[delgado estás|teal]]! ¿Corres mucho?', en: 'You look so slim! Do you run a lot?' },
              { es: 'Marta, hoy [[estás muy guapa|teal]].', en: 'Marta, you look really nice today.' },
            ],
            note: 'Algunos adjetivos van con los dos verbos y el sentido cambia un poco: «Hugo **es** delgado» (así es su cuerpo) / «Hugo **está** delgado» (ahora, comparado con antes).' },
          { kind: 'table', title: 'Pares mínimos · Minimal pairs', head: ['SER · así es (characteristic)', 'ESTAR · así está ahora (state, change)'], rows: [
            ['Raúl [[es delgado|blue]]. (He is slim: his build.)', 'Raúl [[está más delgado|teal]]. (He has got slimmer.)'],
            ['Marta [[es guapa|blue]]. (She is good-looking.)', 'Marta [[está muy guapa|teal]] hoy. (She looks great today.)'],
            ['Hugo [[es joven|blue]]: tiene 30 años. (He is young.)', 'Tu abuela [[está muy joven|teal]]. (She looks young for her age.)'],
            ['El niño [[es alto|blue]] para su edad. (He is tall for his age.)', '¡Qué [[alto está|teal]] tu hijo! (Your son has grown so much!)'],
          ], note: 'Para describir a alguien que la otra persona **no conoce**, usa ser: «Es alto». Con estar, comparas con antes: «¡Qué alto está!» lo dice alguien que conoce al niño desde pequeño.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hugo no conoce a Raúl. Marta explica: «Raúl ___ alto y rubio».', options: ['está', 'es', 'lleva'], answer: 1, why: 'Una descripción para reconocer a alguien: características, ser.', en: 'Hugo doesn’t know Raúl. Marta explains: “Raúl is tall and blond”.' },
            { prompt: 'Marta ve una foto nueva de Raúl: «¡Qué delgado ___!».', options: ['está', 'lleva', 'es'], answer: 0, why: 'Marta compara con antes: es un cambio que ve. Está.', en: 'Marta sees a new photo of Raúl: “He looks so slim!”' },
          ] },
        ] },
        { title: 'Llevar: ropa, gafas y pelo · What someone wears', mascot: '/brand/mascot/standing.webp', coach: 'Lo que te pones y te quitas. What you put on and take off.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LLEVAR', question: '¿Qué lleva?', en: 'What is he / she wearing? (clothes, accessories, hair)', formula: ['llevar + gafas · barba · bigote', 'llevar + el pelo corto · largo · suelto', 'llevar + un vestido · una chaqueta verde'],
            meaning: '**Llevar** es un verbo regular en -ar (llevo, llevas, lleva…). Para describir, dice qué tiene alguien **encima**: ropa, gafas, un sombrero, y también cómo lleva el pelo o la barba. Son cosas que puedes cambiar.',
            examples: [
              { es: 'Raúl [[lleva gafas|orange]] y [[lleva barba|orange]].', en: 'Raúl wears glasses and has a beard.' },
              { es: 'Ahora [[lleva el pelo muy corto|orange]].', en: 'Now he wears his hair very short.' },
              { es: 'Hoy [[lleva una chaqueta verde|orange]].', en: 'Today he is wearing a green jacket.' },
            ] },
          { kind: 'table', title: 'Llevar · presente', head: ['Persona', 'llevar', 'Ejemplo'], rows: [
            ['yo', '**llevo**', 'Hoy [[llevo|orange]] un vestido azul.'],
            ['tú', '**llevas**', '¿[[Llevas|orange]] gafas para leer?'],
            ['él · ella · usted', '**lleva**', 'Raúl [[lleva|orange]] barba.'],
            ['nosotros · nosotras', '**llevamos**', '[[Llevamos|orange]] abrigo: hace frío.'],
            ['vosotros · vosotras (España)', '**lleváis**', '¿[[Lleváis|orange]] paraguas?'],
            ['ellos · ellas · ustedes', '**llevan**', 'Los niños [[llevan|orange]] gorra.'],
          ], note: 'Fíjate en el artículo. **Gafas, barba, bigote**: muchas veces sin artículo (lleva gafas). **El pelo**: con el, como las partes del cuerpo (clase 035). **Ropa concreta**: un, una + adjetivo (lleva una chaqueta verde).' },
          { kind: 'tip', icon: '💡', title: 'Llevar o tener · Llevar or tener', text: 'El cuerpo que no cambias va con **tener** o **ser**: «Tiene los ojos verdes», «Es alto». La ropa y las gafas van con **llevar**: «Lleva una chaqueta». Con el pelo y la barba, los dos son correctos: «Tiene barba» / «Lleva barba». Con «lleva», piensas más en su estilo de ahora.', en: 'Body features you can’t change go with tener or ser: “Tiene los ojos verdes”, “Es alto”. Clothes and glasses go with llevar: “Lleva una chaqueta”. With hair and beards both are correct: “Tiene barba” / “Lleva barba”. With “lleva” you think more about how he looks now.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Raúl ___ los ojos verdes.', options: ['está', 'lleva', 'tiene'], answer: 2, why: 'Los ojos son parte del cuerpo: no te los pones. Tener.', en: 'Raúl has green eyes.' },
            { prompt: 'Hoy Marta ___ un vestido azul.', options: ['está', 'lleva', 'es'], answer: 1, why: 'Ropa que tiene puesta hoy: llevar.', en: 'Today Marta is wearing a blue dress.' },
            { prompt: '¿Tú ___ gafas para leer?', options: ['lleva', 'llevas', 'llevo'], answer: 1, why: 'Tú: llevas.', en: 'Do you wear glasses for reading?' },
          ] },
        ] },
        { title: '¿Cuál de los tres? · Which of the three?', mascot: '/brand/mascot/speaking.webp', coach: 'Piensa antes de describir. Think before you describe.', blocks: [
          { kind: 'decide', title: '¿Ser, estar o llevar?', steps: [
            { q: '¿Hablas de ropa, gafas, sombrero o cómo lleva el pelo? (clothes, glasses, hairstyle)', yes: 'Usa **llevar**: «Lleva una chaqueta verde», «Lleva el pelo corto».', no: 'next' },
            { q: '¿Es un estado de ahora o un cambio que ves? (tired, nervous, slimmer, looks great today)', yes: 'Usa **estar**: «Está cansado», «Está más delgado».', no: 'next' },
            { q: '¿Es una característica de la persona? (cuerpo, edad, carácter)', yes: 'Usa **ser**: «Es alto», «Es muy simpático».', no: 'Para los ojos y otras partes del cuerpo, usa **tener**: «Tiene los ojos verdes».' },
          ] },
          { kind: 'compare', title: 'Ponerse y llevar · Put on and wear', columns: [
            { tone: 'neutral', label: 'PONERSE · la acción (clase 035)', sentence: 'Raúl se pone la chaqueta.', idea: 'Un momento: la chaqueta pasa a estar encima.', en: 'Raúl puts on his jacket.' },
            { tone: 'orange', label: 'LLEVAR · el resultado', sentence: 'Raúl [[lleva la chaqueta|orange]] en el tren.', idea: 'La chaqueta ya está encima: describes.', en: 'Raúl is wearing his jacket on the train.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Gafas, lentes, anteojos', text: 'En España se dice **gafas**. En muchos países de América se dice **lentes** o **anteojos**. Y en muchas zonas de América es muy frecuente **usar** para algo habitual: «Usa lentes», «Usa barba». Para la ropa de hoy, **llevar** se entiende en todas partes.', en: 'In Spain people say “gafas”. In many Latin American countries they say “lentes” or “anteojos”. And in many parts of Latin America “usar” is very common for something habitual: “Usa lentes” (he wears glasses), “Usa barba”. For today’s clothes, “llevar” is understood everywhere.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hace frío. Hugo ___ el abrigo y sale de casa.', options: ['es', 'se pone', 'lleva'], answer: 1, why: 'Es la acción, en un momento: se pone el abrigo. Después, en la calle, lleva el abrigo.', en: 'It’s cold. Hugo puts on his coat and leaves the house.' },
            { prompt: 'En la estación, Hugo ___ un abrigo gris.', options: ['lleva', 'está', 'se pone'], answer: 0, why: 'Ya lo tiene encima: describes. Lleva.', en: 'At the station, Hugo is wearing a grey coat.' },
            { prompt: 'Hugo ___ un poco nervioso: no conoce a Raúl.', options: ['es', 'lleva', 'está'], answer: 2, why: 'Un estado de ahora: está nervioso.', en: 'Hugo is a bit nervous: he doesn’t know Raúl.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Cómo es, cómo está o qué lleva?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿característica, estado o ropa? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿característica, estado o ropa? Toca para ver la corrección. (Characteristic, state or clothes?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Raúl es muy cansado hoy.', right: 'Raúl está muy cansado hoy.', why: 'Cansado es un estado: estar. «Es cansado» se dice de una actividad que cansa: «Este trabajo es cansado» (tiring).' },
            { wrong: 'Raúl es con gafas y barba.', right: 'Raúl lleva gafas y barba.', why: 'Para las gafas, la barba o la ropa no usamos «ser con»: usamos llevar. (He wears glasses: lleva gafas.)' },
            { wrong: 'Raúl lleva los ojos verdes.', right: 'Raúl tiene los ojos verdes.', why: 'Los ojos no se ponen ni se quitan: tener. (Eyes: tener, not llevar.)' },
            { wrong: 'Para reconocerlo: Raúl tiene una chaqueta verde.', right: 'Para reconocerlo: Raúl lleva una chaqueta verde.', why: '«Tiene una chaqueta» dice que la chaqueta es suya. Para lo que tiene puesto hoy: lleva. (Tiene = owns; lleva = is wearing.)' },
            { wrong: 'Raúl lleva una gafa negra.', right: 'Raúl lleva gafas negras.', why: '«Gafas» va en plural, como «glasses» en inglés: lleva gafas, unas gafas negras. (Always plural.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Raúl ___ nervioso antes de llegar.', options: ['lleva', 'está', 'es'], answer: 1, why: 'Un estado de ese momento: está nervioso.', en: 'Raúl is nervous before arriving.' },
            { prompt: 'Para reconocerlo, Raúl ___ una mochila negra.', options: ['lleva', 'es', 'tiene'], answer: 0, why: 'Lo que tiene encima hoy: lleva. «Tiene» dice solo que es suya.', en: 'To recognise him: Raúl is carrying a black backpack.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe a una persona de la clase o de una foto con tres frases: una con es, una con está y una con lleva.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Dos fotos de Raúl', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Antes y ahora · Then and now', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Hugo y tu alumno es Marta. Después tu alumno toca cada expresión marcada y dice si es ser, estar o llevar, y por qué.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿ser, estar o llevar? ¿Por qué? (Tap each mark: ser, estar or llevar?)' } },
          { kind: 'explore', title: 'Para reconocer a Raúl', setting: 'Viernes por la tarde, en casa de Marta y Hugo, en Valencia. Marta enseña a Hugo dos fotos de Raúl en su móvil: una de la universidad y una de la semana pasada. (Friday afternoon at Marta and Hugo’s home in Valencia. Marta shows Hugo two photos of Raúl on her phone: one from university and one from last week.)', lines: [
            { who: 'Hugo', text: 'Oye, ¿[[cómo es|blue]] tu amigo Raúl? No sé cómo reconocerlo.', en: 'Hey, what does your friend Raúl look like? I don’t know how to recognise him.' },
            { who: 'Marta', text: 'Pues [[es alto|blue]] y [[rubio|blue]], y [[es muy simpático|blue]]. Mira, esta es una foto de la universidad.', en: 'Well, he’s tall and blond, and he’s really nice. Look, this is a photo from university.' },
            { who: 'Hugo', text: '¡Qué jóvenes! Aquí [[lleva el pelo largo|orange]] y una camiseta enorme.', en: 'You look so young! Here he has long hair and a huge T-shirt.' },
            { who: 'Marta', text: 'Sí, pero eso fue hace diez años. Ahora [[lleva el pelo muy corto|orange]] y [[lleva barba|orange]]. Mira, esta es de la semana pasada.', en: 'Yes, but that was ten years ago. Now he has very short hair and a beard. Look, this one is from last week.' },
            { who: 'Hugo', text: 'A ver… Es verdad, [[está muy cambiado|teal]]. Y [[está más delgado|teal]], ¿no?', en: 'Let’s see… That’s true, he has changed a lot. And he’s slimmer, isn’t he?' },
            { who: 'Marta', text: 'Sí, ahora corre todos los días. Ah, y [[lleva gafas|orange]]: antes no [[llevaba|orange]].', en: 'Yes, he runs every day now. Oh, and he wears glasses: he didn’t before.' },
            { who: 'Hugo', text: 'Vale: alto, rubio, barba y gafas. ¿Y [[qué lleva|orange]] hoy? En la estación hay mucha gente.', en: 'OK: tall, blond, beard and glasses. And what is he wearing today? There are lots of people at the station.' },
            { who: 'Marta', text: 'No lo sé. Ahora le mando un mensaje y se lo pregunto.', en: 'I don’t know. I’ll send him a message now and ask him.' },
            { who: 'Hugo', text: '¿Y [[cómo está|teal]]? Viene de lejos.', en: 'And how is he? He’s coming from far away.' },
            { who: 'Marta', text: '[[Está un poco cansado|teal]]: [[lleva cuatro horas|violet]] de viaje. Pero [[está muy contento|teal]] de venir.', en: 'He’s a bit tired: he has been travelling for four hours. But he’s really happy to come.' },
            { who: 'Hugo', text: 'Tranquila, lo encuentro. Por cierto, hoy [[estás muy guapa|teal]]. ¿Es por la reunión?', en: 'Don’t worry, I’ll find him. By the way, you look really nice today. Is it for the meeting?' },
            { who: 'Marta', text: '¡Gracias! Sí, hoy [[llevo mi vestido azul|orange]]: es una reunión importante.', en: 'Thanks! Yes, today I’m wearing my blue dress: it’s an important meeting.' },
          ], notes: {
            'cómo es': '**¿Cómo es?** pregunta por las características de una persona: cuerpo y carácter. Se responde con ser.',
            'es alto': 'Ser + alto: una característica, la primera pista para reconocerlo.',
            'rubio': 'También con ser: «es alto y rubio». Un solo verbo para dos adjetivos.',
            'es muy simpático': 'El carácter va con ser: **es** simpático (he is a nice person).',
            'lleva el pelo largo': 'En la foto antigua: llevar + el pelo + adjetivo. El pelo es un estilo que puede cambiar.',
            'lleva el pelo muy corto': 'Ahora: otro estilo. Mismo verbo, llevar: el peinado cambia.',
            'lleva barba': 'Barba sin artículo: **lleva barba** (he has a beard). «Tiene barba» también es correcto.',
            'está muy cambiado': '**Estar** + cambiado: Hugo compara las dos fotos (he has changed a lot).',
            'está más delgado': 'Estar: un cambio que Hugo ve al comparar con antes. No dice cómo es su cuerpo siempre.',
            'lleva gafas': 'Las gafas se ponen y se quitan: **llevar**. En América, muchas veces: «usa lentes».',
            'llevaba': 'Llevar en imperfecto (clase 049): cómo era antes. «Antes no llevaba gafas».',
            'qué lleva': '**¿Qué lleva?** pregunta por la ropa de hoy (what is he wearing?).',
            'cómo está': '**¿Cómo está?** pregunta por su estado de ahora: cansado, contento…',
            'Está un poco cansado': 'Un estado de ahora, después del viaje: **está** cansado. Nunca «es cansado».',
            'lleva cuatro horas': 'Otro uso de llevar, solo para entender: **lleva cuatro horas de viaje** = he has been travelling for four hours (clase 055).',
            'está muy contento': 'Una emoción de ahora: estar contento.',
            'estás muy guapa': '**Estar** guapa: hoy, con este vestido (you look nice today). «Eres guapa» habla de cómo es siempre.',
            'llevo mi vestido azul': 'Llevar, yo: **llevo**. Con mi: Marta habla de su vestido, uno concreto (clase 035).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué es diferente en Raúl ahora?', options: ['Es más alto y lleva el pelo largo.', 'Lleva el pelo corto, barba y gafas, y está más delgado.', 'Es moreno y lleva una camiseta enorme.'], answer: 1, why: '«Ahora lleva el pelo muy corto y lleva barba», «está más delgado», «lleva gafas: antes no llevaba».', en: 'What is different about Raúl now?' },
            { prompt: '¿Por qué Marta no sabe qué ropa lleva Raúl hoy?', options: ['Porque la foto es de la universidad.', 'Porque Raúl está en el tren y no lo ve.', 'Porque Raúl no tiene ropa.'], answer: 1, why: 'Raúl viaja en tren: Marta le manda un mensaje para preguntárselo.', en: 'Why doesn’t Marta know what Raúl is wearing today?' },
            { prompt: '¿Cómo está Raúl hoy, según Marta?', options: ['Muy nervioso.', 'Enfermo.', 'Un poco cansado, pero contento.'], answer: 2, why: '«Está un poco cansado… Pero está muy contento de venir».', en: 'How is Raúl today, according to Marta?' },
          ] },
        ] },
        { title: '¿Ser, estar o llevar? · Ser, estar or llevar?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las pistas de Marta · Marta’s clues', categories: [
            { id: 'ser', label: 'SER · cómo es', tone: 'blue' },
            { id: 'estar', label: 'ESTAR · cómo está ahora', tone: 'teal' },
            { id: 'llevar', label: 'LLEVAR · qué lleva', tone: 'orange' },
          ], items: [
            { text: 'Raúl … muy simpático.', answer: 'ser', why: 'El carácter: es simpático.' },
            { text: 'Ahora … el pelo muy corto.', answer: 'llevar', why: 'Un peinado: lleva el pelo corto.' },
            { text: 'Raúl … muy cambiado.', answer: 'estar', why: 'Un cambio que Hugo ve: está cambiado.' },
            { text: 'Raúl … alto y rubio.', answer: 'ser', why: 'Características para reconocerlo: es alto y rubio.' },
            { text: 'Hoy Marta … un vestido azul.', answer: 'llevar', why: 'La ropa de hoy: lleva un vestido.' },
            { text: 'Después del viaje, Raúl … cansado.', answer: 'estar', why: 'Un estado de ahora: está cansado.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y Hugo? ¿Cómo es? ¿Cómo está hoy? ¿Qué lleva?». Tu alumno lo imagina y responde con tres frases.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Es · está · lleva.',
      steps: [
        { title: 'En la estación · At the station', blocks: [
          { kind: 'choice', items: [
            { context: 'Hugo escribe a Marta desde el andén. (Hugo texts Marta from the platform.)', prompt: 'Aquí hay un chico que ___ alto y rubio, pero no lleva gafas.', options: ['está', 'es', 'lleva'], answer: 1, why: 'Alto y rubio: características. Ser.', en: 'There’s a guy here who is tall and blond, but he isn’t wearing glasses.' },
            { context: 'Hugo sigue mirando. (Hugo keeps looking.)', prompt: 'Otro chico ___ una gorra roja y una maleta.', options: ['lleva', 'es', 'tiene'], answer: 0, why: 'Lo que tiene encima ahora: lleva. «Tiene» diría solo que son suyas.', en: 'Another guy is wearing a red cap and has a suitcase.' },
            { context: 'En la cafetería de la estación. (At the station café.)', prompt: 'Una señora ___ muy nerviosa: su tren sale en dos minutos.', options: ['lleva', 'está', 'es'], answer: 1, why: 'Un estado de ese momento: está nerviosa.', en: 'A woman is very nervous: her train leaves in two minutes.' },
            { context: 'Marta responde por mensaje. (Marta answers by text.)', prompt: 'Una pista más: Raúl ___ los ojos verdes, como su madre.', options: ['está', 'lleva', 'tiene'], answer: 2, why: 'Los ojos son parte del cuerpo: tener. No se ponen ni se quitan.', en: 'One more clue: Raúl has green eyes, like his mother.' },
            { context: 'Por fin, Hugo ve a Raúl. (Finally Hugo sees Raúl.)', prompt: '¿Eres Raúl? ¡Hola! ___ Hugo, la pareja de Marta.', options: ['Llevo', 'Soy', 'Estoy'], answer: 1, why: 'Para decir quién eres: ser (clase 011). Soy Hugo.', en: 'Are you Raúl? Hi! I’m Hugo, Marta’s partner.' },
          ] },
        ] },
        { title: 'Cuatro verbos · Four verbs', blocks: [
          { kind: 'classify', title: '¿Qué verbo falta? · Which verb is missing?', categories: [
            { id: 'ser', label: 'SER · cómo es', tone: 'blue' },
            { id: 'estar', label: 'ESTAR · cómo está', tone: 'teal' },
            { id: 'llevar', label: 'LLEVAR · qué lleva', tone: 'orange' },
            { id: 'tener', label: 'TENER · el cuerpo (ojos…)', tone: 'neutral' },
          ], items: [
            { text: 'Hugo … bajo y muy tranquilo.', answer: 'ser', why: 'Cuerpo y carácter: es bajo y tranquilo.' },
            { text: 'Raúl … una mochila negra a la espalda.', answer: 'llevar', why: 'Lo que tiene encima: lleva una mochila.' },
            { text: 'Hugo … los ojos marrones.', answer: 'tener', why: 'Los ojos: tiene los ojos marrones.' },
            { text: 'Con ese vestido, Marta … muy guapa hoy.', answer: 'estar', why: 'Cómo está hoy, con ese vestido: está guapa.' },
            { text: 'Después de cuatro horas de tren, Raúl … cansado.', answer: 'estar', why: 'Un estado de ahora: está cansado.' },
            { text: 'Raúl … gafas negras.', answer: 'llevar', why: 'Las gafas se ponen y se quitan: lleva gafas.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Raúl es muy cansado después del viaje.', ok: false, options: ['Raúl lleva muy cansado después del viaje.', 'Raúl tiene muy cansado después del viaje.', 'Raúl está muy cansado después del viaje.'], answer: 2, why: 'Cansado es un estado: estar. Está cansado.' },
            { sentence: 'Hugo es bajo y lleva una camisa blanca.', ok: true, why: 'Correcta: bajo es una característica (es) y la camisa es ropa (lleva).' },
            { sentence: 'Marta es con un vestido azul.', ok: false, options: ['Marta lleva un vestido azul.', 'Marta es un vestido azul.', 'Marta está un vestido azul.'], answer: 0, why: 'La ropa va con llevar: lleva un vestido azul. No usamos «es con» ni «está».' },
            { sentence: 'Raúl lleva los ojos verdes.', ok: false, options: ['Raúl tiene los ojos verdes.', 'Raúl lleva ojos verdes.', 'Raúl es los ojos verdes.'], answer: 0, why: 'Los ojos son parte del cuerpo: tener, con el artículo los.' },
            { sentence: '¡Raúl, qué delgado estás!', ok: true, why: 'Correcta: Marta compara con antes y ve un cambio. Estar.' },
          ] },
        ] },
        { title: 'La cena · Dinner', blocks: [
          { kind: 'chat-fill', title: 'Marta ve a Raúl en el restaurante · Marta sees Raúl at the restaurant', lines: [
            { who: 'Marta', text: '¡Raúl! ¡Qué cambiado ___!', options: ['llevas', 'eres', 'estás'], answer: 2, why: 'Marta compara con antes: un cambio que ve. Estás cambiado.' },
            { who: 'Raúl', text: '¿Sí? Bueno, ahora ___ barba y el pelo corto.', options: ['estoy', 'llevo', 'soy'], answer: 1, why: 'Barba y peinado: llevar. Llevo barba y el pelo corto.' },
            { who: 'Marta', text: 'Y ___ más delgado. ¡Estás muy bien!', options: ['eres', 'tienes', 'estás'], answer: 2, why: '«Más delgado» compara con antes: estás.' },
            { who: 'Raúl', text: 'Gracias. Tú ___ igual: ___ la misma sonrisa de siempre.', options: ['eres · llevas', 'llevas · estás', 'estás · tienes'], answer: 2, why: '«Estás igual» = no ves cambios. La sonrisa es tuya, como los ojos: tienes.' },
            { who: 'Hugo', text: 'Pero hoy Raúl ___ muy cansado. Mejor cenamos pronto.', options: ['es', 'lleva', 'está'], answer: 2, why: 'Un estado de hoy: está cansado.' },
            { who: 'Raúl', text: 'Sí, un poco… pero estoy muy contento de estar aquí.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Raúl', 'es', 'alto', 'pero', 'hoy', 'está', 'cansado'], accept: ['Raúl es alto pero hoy está cansado', 'Raúl es alto pero está cansado hoy'], en: 'Raúl is tall, but today he is tired.' },
            { tiles: ['Marta', 'lleva', 'un', 'vestido', 'azul'], accept: ['Marta lleva un vestido azul'], en: 'Marta is wearing a blue dress.' },
            { tiles: ['Ahora', 'lleva', 'barba', 'y', 'gafas'], accept: ['Ahora lleva barba y gafas', 'Ahora lleva gafas y barba', 'Lleva barba y gafas ahora', 'Lleva gafas y barba ahora'], en: 'Now he has a beard and wears glasses.' },
            { tiles: ['¡Qué', 'cambiado', 'estás!'], accept: ['¡Qué cambiado estás!'], en: 'You’ve changed so much!' },
          ] },
        ] },
        { title: 'Antes y ahora · Then and now', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'rewrite', title: 'Transforma la frase · Transform the sentence', items: [
            { prompt: 'Raúl, en el tren: «Me pongo la chaqueta verde».', instruction: 'Ahora ya la tiene encima. Describe a Raúl con llevar. Empieza con «Raúl». (He already has it on: use llevar.)', accept: ['Raúl lleva la chaqueta verde', 'Raúl lleva puesta la chaqueta verde', 'Raúl lleva una chaqueta verde'] },
            { prompt: 'Hugo es simpático. (hoy: nervioso)', instruction: 'Añade cómo está hoy con «pero hoy». (Add how he is today.)', accept: ['Hugo es simpático pero hoy está nervioso', 'Hugo es simpático pero hoy está muy nervioso'] },
            { prompt: 'Antes Raúl llevaba el pelo largo. (ahora: corto)', instruction: 'Cuenta cómo lo lleva ahora. Empieza con «Ahora». (Say how he wears it now.)', accept: ['Ahora Raúl lleva el pelo corto', 'Ahora lleva el pelo corto'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige a una persona famosa de su país o de su familia y la describe en cuatro frases: cómo es, qué lleva normalmente, qué lleva en una foto concreta y cómo está en esa foto.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Raúl', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Raúl se describe · Raúl describes himself', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué manda Raúl el mensaje?). Segunda escucha: tu alumno anota tres pistas para reconocer a Raúl (una con soy, una con llevo, una con estoy). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota tres pistas para reconocer a Raúl. Vas a oír «llevo cuatro horas de viaje» (I’ve been travelling for four hours): solo tienes que entenderlo.' } },
          { kind: 'listen', title: 'Un mensaje de voz de Raúl', channel: 'MENSAJE DE VOZ · DE RAÚL PARA MARTA', src: '/audio/grammar-live/375.mp3',
            before: 'Marta le pregunta a Raúl qué ropa lleva hoy. Raúl contesta con un mensaje de voz desde el tren. ¿Qué crees que dice: cómo es, qué lleva, cómo está…? (Raúl answers with a voice message from the train. What do you think he says?)',
            gist: { prompt: '¿Para qué manda Raúl el mensaje? · Why does Raúl send the message?', options: ['Para pedir a Marta una foto de Hugo.', 'Para decir que su tren llega tarde.', 'Para describirse: así Hugo puede reconocerlo en la estación.'], answer: 2, why: '«Aquí va una descripción para él»: Raúl dice cómo es, qué lleva y cómo está.', en: 'Why does Raúl send the message?' },
            details: [
              { prompt: '¿A qué hora llega el tren?', options: ['A las seis y media.', 'A las ocho menos cuarto.', 'A las siete y cuarto.'], answer: 2, why: '«Llego a las siete y cuarto».', en: 'What time does the train arrive?' },
              { prompt: '¿Qué lleva Raúl hoy?', options: ['Una camiseta enorme y una gorra.', 'Una chaqueta verde y una mochila negra.', 'Un abrigo azul y una maleta.'], answer: 1, why: '«Hoy llevo una chaqueta verde y una mochila negra muy grande».', en: 'What is Raúl wearing today?' },
              { prompt: '¿Qué no cambia en Raúl?', options: ['El pelo.', 'Es alto.', 'Las gafas.'], answer: 1, why: '«Soy alto, eso no cambia». El pelo, la barba y las gafas son nuevos.', en: 'What hasn’t changed about Raúl?' },
              { prompt: '¿Por qué está un poco cansado?', options: ['Porque corre todos los días.', 'Porque trabajó mucho ayer.', 'Porque lleva cuatro horas de viaje.'], answer: 2, why: '«Estoy un poco cansado, porque llevo cuatro horas de viaje».', en: 'Why is he a bit tired?' },
            ],
            transcript: 'Hola, Marta, soy Raúl. Ya estoy en el tren y llego a las siete y cuarto. Me dijiste que Hugo viene a buscarme, ¿verdad? Pues aquí va una descripción para él. [[Soy alto|blue]], eso no cambia, pero ahora [[llevo el pelo muy corto|orange]] y [[llevo barba|orange]]. Y [[llevo gafas|orange]], unas gafas negras. Hoy [[llevo una chaqueta verde|orange]] y una mochila negra muy grande. Ah, y [[estoy más delgado|teal]] que en la universidad, ¿eh? Ahora corro todos los días. Eso sí, [[estoy un poco cansado|teal]], porque [[llevo cuatro horas|violet]] de viaje. ¿Y Hugo? ¿[[Cómo es|blue]]? ¿[[Qué lleva|orange]] hoy? Mándame un mensaje, por favor. ¡Nos vemos esta noche!',
            reply: { teacher: 'Tú eres Raúl. Tu alumno es Hugo y responde al mensaje con tres frases: cómo es Hugo, qué lleva hoy y cómo está.', self: 'Responde a Raúl en voz alta como Hugo: cómo eres, qué llevas hoy y cómo estás. (Answer as Hugo: what you are like, what you are wearing, how you are.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Personas que cambian', coach: 'Cómo es, cómo está, qué lleva. What they are like, how they are, what they wear.',
      steps: [
        { title: 'Describe a personas reales · Describe real people', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno habla de personas reales: su familia, sus amigos, él o ella. Tú repites su frase con el verbo correcto y sigues con la repregunta.', self: 'Piensa en personas reales: tu familia, tus amigos, tú. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Answer aloud about real people.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo es una persona importante para ti? · What is an important person in your life like?', followUps: ['¿Es alta o baja? ¿Y de carácter? (Tall or short? And their personality?)', '¿De qué color tiene los ojos? (What colour are their eyes?)'], phrases: ['Mi hermana [[es|blue]] alta / baja / joven…', '[[Es|blue]] muy simpático / tranquila / divertido…', 'Tiene los ojos…'], hint: 'Características con ser; los ojos con tener.', example: 'Mi hermana Laura es baja y morena. Tiene los ojos negros y es muy divertida.', next: 'Ahora, los cambios.', teacher: 'Describe tú también a una persona en dos frases. Así tu alumno oye otra vez ser y tener.' },
            { q: '¿Cómo era esa persona antes? ¿Qué es diferente ahora? · How has that person changed?', followUps: ['¿Lleva el pelo igual? (Does she wear her hair the same way?)', '¿Está igual o muy cambiada? (Does she look the same or very different?)'], phrases: ['Antes [[llevaba|orange]]… y ahora [[lleva|orange]]…', 'Ahora [[está|teal]] más…', '[[Está muy cambiada|teal]] / [[Está igual|teal]].'], hint: 'El estilo con llevar (llevaba / lleva); el cambio que ves con estar.', example: 'Antes llevaba el pelo largo y ahora lleva el pelo muy corto. Está muy cambiada, pero está muy bien.', next: 'Ahora, tú.' },
            { q: '¿Qué llevas hoy? Descríbete para una persona que no te conoce. · What are you wearing today? Describe yourself for someone who doesn’t know you.', followUps: ['¿Llevas gafas? (Do you wear glasses?)', '¿Cómo llevas el pelo? (How do you wear your hair?)'], phrases: ['[[Soy|blue]] alto / alta…', 'Hoy [[llevo|orange]] un jersey / una camisa…', '[[Llevo|orange]] el pelo…'], hint: 'Primero cómo eres (ser), después qué llevas hoy (llevar).', example: 'Soy bastante alta y delgada. Llevo gafas y el pelo suelto. Hoy llevo una camisa blanca y unos pantalones negros.', next: 'Ahora, cómo estás.' },
            { q: '¿Cómo estás hoy? ¿Y cómo eres normalmente? · How are you today? And what are you usually like?', followUps: ['¿Por qué estás así hoy? (Why are you like that today?)', '¿Eres una persona tranquila o nerviosa? (Are you a calm or a nervous person?)'], phrases: ['Hoy [[estoy|teal]] cansado / contenta / nervioso…', 'Normalmente [[soy|blue]] tranquila, pero hoy [[estoy|teal]]…'], hint: 'Ser para cómo eres siempre; estar para hoy.', example: 'Normalmente soy muy tranquilo, pero hoy estoy un poco nervioso: tengo un examen.', next: 'Ahora, una foto.' },
            { q: 'Busca una foto en tu móvil (o piensa en una). ¿Quién es? ¿Cómo es? ¿Qué lleva en la foto? ¿Cómo está? · Describe a person in a photo.', followUps: ['¿Dónde están? (Where are they?)', '¿Está contento o serio en la foto? (Is he happy or serious in the photo?)'], phrases: ['Este [[es|blue]] mi amigo…', 'En la foto [[lleva|orange]]…', '[[Está|teal]] muy contento / serio / cansado…'], hint: 'Una foto: describe con los tres verbos. En la foto se usa el presente: «aquí lleva…».', example: 'Este es mi amigo Iván. Es alto y muy simpático. En la foto lleva una camiseta roja y gafas de sol. Está muy contento: es su cumpleaños.', teacher: 'Pregunta también: «¿Y ahora está igual o está cambiado?». Tu alumno compara la foto con hoy.' },
            { q: 'Vas a buscar a alguien al aeropuerto, pero no ves a esa persona. Llamas por teléfono. Di dónde estás, cómo eres y qué llevas. · You are picking someone up at the airport but can’t see them. Describe yourself on the phone.', followUps: ['¿Llevas algo en la mano? (Are you holding anything?)', '¿Estás cerca de la puerta? (Are you near the gate?)'], phrases: ['[[Estoy|teal]] al lado de…', '[[Soy|blue]] bajo / alta…', '[[Llevo|orange]] un abrigo… y gafas.'], hint: 'Estar para el lugar (clase 012), ser para cómo eres y llevar para la ropa.', example: 'Hola, estoy al lado de la cafetería. Soy baja y llevo el pelo largo. Hoy llevo un abrigo amarillo y una maleta roja.', teacher: 'Tú eres la otra persona y preguntas: «¿Llevas gafas?», «¿Qué color es tu abrigo?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Cómo es?», «¿Qué lleva?», «¿Cómo está?») y tú describes a una persona de tu vida.', self: 'Ahora haz tú las preguntas en voz alta («¿Cómo es?», «¿Qué lleva?», «¿Cómo está?») y responde sobre otra persona. (Ask and answer about another person.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Para reconocerte', coach: 'Cómo eres, qué llevas, cómo estás.',
      steps: [
        { title: 'Un mensaje antes del viaje · A message before the trip', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo: ¿característica (ser), estado (estar) o ropa (llevar)? Después tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada verbo: ¿ser, estar o llevar? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mi descripción · My description', situation: 'Este fin de semana viajas a otra ciudad para conocer en persona a Julia, tu compañera de intercambio de idiomas. Ella va a buscarte a la estación, pero nunca te vio. Escríbele un mensaje para que te reconozca. (This weekend you travel to another city to meet Julia, your language-exchange partner, in person. She will pick you up at the station, but she has never seen you. Write her a message so she can recognise you.)', task: [
            'Saluda y di a qué hora llegas. (Say hello and when you arrive.)',
            'Di cómo eres con ser: cuerpo y carácter. (What you are like, with ser.)',
            'Di qué llevas: gafas, pelo y la ropa del viaje. (What you wear, with llevar.)',
            'Di cómo vas a estar o cómo estás, con estar. (How you are or will be, with estar.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['¡Hola, Julia!', 'Llego mañana a las…', 'Para reconocerme: soy…', 'Llevo el pelo… / Llevo gafas…', 'Mañana llevo…', 'Estoy un poco…', '¡Hasta mañana!'],
            words: ['soy', 'alto / alta', 'delgado / delgada', 'simpático / simpática', 'llevo', 'gafas', 'barba', 'el pelo corto / largo', 'una chaqueta', 'un abrigo', 'estoy', 'cansado / cansada', 'nervioso / nerviosa', 'contento / contenta'],
            model: '¡Hola, Julia! Llego mañana a las seis en el tren de Sevilla. Para reconocerme: [[soy|blue]] bastante [[alta|blue]] y delgada, y tengo los ojos marrones. Ahora [[llevo el pelo corto|orange]] y [[llevo gafas|orange]] rojas. Mañana [[llevo un abrigo amarillo|orange]] y una maleta grande. Ah, y [[soy|blue]] muy habladora, ¡ya vas a ver! Seguro que [[estoy|teal]] un poco cansada después del viaje, pero [[estoy muy contenta|teal]] de conocerte. ¡Hasta mañana! Clara',
            minWords: 50,
            checks: [
              { label: 'Ser para cómo eres: soy alto, soy simpática… (ser for what you are like)', pattern: '(?<!\\p{L})(?:soy|es|eres)(?!\\p{L})', tip: 'Di cómo eres: «Soy alta y delgada», «Soy muy tranquilo».' },
              { label: 'Llevar para gafas, pelo o ropa (llevar for what you wear)', pattern: '(?<!\\p{L})(?:llevo|lleva|llevas|llevamos|llevan)(?!\\p{L})', tip: 'Di qué llevas: «Llevo gafas», «Mañana llevo una chaqueta verde».' },
              { label: 'Estar para cómo estás (estar for how you are)', pattern: '(?<!\\p{L})(?:estoy|está|estás|estamos|están|estar)(?!\\p{L})', tip: 'Di cómo estás o cómo vas a estar: «Estoy un poco nervioso».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:soy|es|eres|somos|son)\\s+(?:muy\\s+|un\\s+poco\\s+|bastante\\s+)?cansad[oa]s?(?!\\p{L})', why: 'Cansado es un estado: **estoy cansado**, no «soy cansado».' },
              { pattern: '(?<!\\p{L})(?:soy|es|eres)\\s+con\\s+(?:gafas|barba|lentes)(?!\\p{L})', why: 'Para las gafas y la barba usa llevar: **llevo gafas**, no «soy con gafas».' },
              { pattern: '(?<!\\p{L})llev(?:o|as|a)\\s+los\\s+ojos(?!\\p{L})', why: 'Los ojos van con tener: **tengo los ojos verdes**.' },
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
            { tone: 'blue', label: 'SER · CÓMO ES', formula: 'ser + alto · rubio · joven · simpático', example: 'Raúl es alto, rubio y muy simpático.', caption: 'características: cuerpo, edad, carácter', en: 'characteristics: body, age, personality' },
            { tone: 'teal', label: 'ESTAR · CÓMO ESTÁ AHORA', formula: 'estar + cansado · más delgado · muy cambiado · guapa hoy', example: 'Hoy está cansado. ¡Y está más delgado!', caption: 'un estado de ahora o un cambio que ves', en: 'a state now or a change you notice' },
            { tone: 'orange', label: 'LLEVAR · QUÉ LLEVA', formula: 'llevar + gafas · barba · el pelo corto · una chaqueta', example: 'Lleva gafas, barba y una chaqueta verde.', caption: 'ropa, accesorios y peinado', en: 'clothes, accessories and hairstyle' },
            { tone: 'neutral', label: 'TENER · EL CUERPO', formula: 'tener + los ojos verdes · el pelo rizado', example: 'Tiene los ojos verdes, como su madre.', caption: 'partes del cuerpo que no te pones', en: 'body features you don’t put on' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Para describir a una persona, haz tres preguntas. **¿Cómo es?** → ser: «Es alto». **¿Cómo está ahora?** → estar: «Está cansado», «Está más delgado». **¿Qué lleva?** → llevar: «Lleva gafas y una chaqueta verde». Nunca «es con gafas» ni «lleva los ojos verdes».', en: 'To describe a person, ask three questions. What is he like? → ser: “Es alto”. How is he now? → estar: “Está cansado”, “Está más delgado”. What is he wearing? → llevar: “Lleva gafas y una chaqueta verde”. Never “es con gafas” or “lleva los ojos verdes”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi abuela ___ muy baja y muy alegre.', options: ['está', 'es', 'lleva'], answer: 1, why: 'Cuerpo y carácter: es baja y alegre.', en: 'My grandmother is very short and very cheerful.' },
            { prompt: 'Hoy no voy a clase: ___ enfermo.', options: ['llevo', 'estoy', 'soy'], answer: 1, why: 'Un estado de hoy: estoy enfermo.', en: 'I’m not going to class today: I’m ill.' },
            { prompt: 'En la foto de la boda, mi hermano ___ un traje gris.', options: ['es', 'lleva', 'tiene'], answer: 1, why: 'La ropa en la foto: lleva un traje.', en: 'In the wedding photo, my brother is wearing a grey suit.' },
            { prompt: 'Paula ___ el pelo rizado y los ojos negros.', options: ['es', 'tiene', 'lleva'], answer: 1, why: 'Los ojos solo van con tener; con el pelo rizado, tener también: tiene el pelo rizado y los ojos negros.', en: 'Paula has curly hair and dark eyes.' },
            { prompt: '¡Qué guapo ___ con esa camisa!', options: ['estás', 'eres', 'llevas'], answer: 0, why: 'Hoy, con esa camisa: estás guapo.', en: 'You look so good in that shirt!' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en un hotel.', blocks: [
          { kind: 'lead', text: 'El lunes, Marta deja un sobre en la recepción de un hotel para su compañera Ana. Describe a Ana a la recepcionista. Escribe las frases de Marta.', en: 'On Monday Marta leaves an envelope at a hotel reception desk for her colleague Ana. She describes Ana to the receptionist. Write Marta’s sentences.' },
          { kind: 'rewrite', title: 'Ana en el hotel · Ana at the hotel', items: [
            { prompt: 'Ana: baja · simpática', instruction: 'Di cómo es Ana. Empieza con «Ana». (What Ana is like.)', accept: ['Ana es baja y simpática', 'Ana es simpática y baja'] },
            { prompt: 'Ana: hoy · un abrigo rojo', instruction: 'Di qué ropa tiene puesta hoy. Empieza con «Hoy Ana». (What she is wearing today.)', accept: ['Hoy Ana lleva un abrigo rojo'] },
            { prompt: 'Ana: hoy · muy cansada', instruction: 'Di cómo está hoy. Empieza con «Hoy Ana». (How she is today.)', accept: ['Hoy Ana está muy cansada'] },
          ] },
        ] },
        { title: 'Ampliación · Es listo, está listo', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Opcional. Con algunos adjetivos, ser y estar cambian mucho el sentido: «Raúl **es listo**» (clever) / «La cena **está lista**» (ready). «Hugo **es aburrido**» (boring) / «Hugo **está aburrido**» (bored). «La paella **está rica**» (tastes good) / «Su familia **es rica**» (rich). Y llevar tiene otro uso con el tiempo: «Raúl **lleva** tres años en Sevilla» (he has been in Seville for three years).', en: 'Optional. With some adjectives, ser and estar change the meaning a lot: clever / ready, boring / bored, rich / tasty. And llevar has another use with time: “Raúl lleva tres años en Sevilla” (he has been in Seville for three years).' },
          { kind: 'choice', title: 'El sentido cambia · The meaning changes', items: [
            { prompt: 'La cena ya ___ lista: ¡todos a la mesa!', options: ['está', 'lleva', 'es'], answer: 0, why: '«Estar listo» = preparado, ready. «Ser listo» = inteligente.', en: 'Dinner is ready: everyone to the table!' },
            { prompt: 'Raúl ___ muy listo: habla cuatro idiomas.', options: ['es', 'está', 'lleva'], answer: 0, why: '«Ser listo» = inteligente, clever: una característica.', en: 'Raúl is very clever: he speaks four languages.' },
            { prompt: 'Hugo ___ aburrido: no hay nada interesante en la tele.', options: ['es', 'lleva', 'está'], answer: 2, why: '«Estar aburrido» = sentir aburrimiento ahora (bored). «Ser aburrido» = una persona que aburre (boring).', en: 'Hugo is bored: there’s nothing interesting on TV.' },
            { prompt: '¡Mmm! Esta tortilla ___ muy rica.', options: ['lleva', 'está', 'es'], answer: 1, why: 'Con la comida que pruebas, «está rica» = tiene buen sabor (tastes good).', en: 'Mmm! This omelette tastes really good.' },
            { prompt: 'Raúl ___ tres años en Sevilla: le encanta la ciudad.', options: ['lleva', 'es', 'está'], answer: 0, why: 'Llevar + tiempo: lleva tres años en Sevilla (he has been there for three years).', en: 'Raúl has been in Seville for three years: he loves the city.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Tu alumno crea dos frases con el mismo adjetivo y los dos verbos: «Mi hermano es listo» / «La comida está lista».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 076 · Se impersonal introductorio: instrucciones', text: 'Ya describes a las personas con tres verbos: «Es alto», «Está cansado», «Lleva gafas». En la clase 076 pasas de las personas a las normas y las instrucciones: «Aquí **se habla** español», «¿Cómo **se dice**…?», «**Se compra** el billete en la máquina». Es el paso natural: ya sabes describir a quién ves en la estación; ahora aprendes a explicar cómo se hacen las cosas, sin decir quién las hace.', en: 'You can now describe people with three verbs: “Es alto”, “Está cansado”, “Lleva gafas”. In class 076 you move from people to rules and instructions: “Aquí se habla español”, “¿Cómo se dice…?”, “Se compra el billete en la máquina”. It is the natural next step: you can describe the people you see at the station; now you learn to explain how things are done, without saying who does them.', href: '/gramatica/se-impersonal-introductorio-instrucciones', label: 'Ir a la clase 076' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Describe a tu mejor amigo o amiga: ¿cómo es, cómo está últimamente y qué lleva casi siempre?». Respuesta esperada: una frase con es, una con está y una con lleva. Tarea: escribir el mensaje de Escribir para un viaje real.' },
        ] },
      ],
    },
  ],
};
