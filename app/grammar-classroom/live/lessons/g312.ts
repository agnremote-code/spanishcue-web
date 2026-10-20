import type { LiveLesson } from '../types';

/**
 * Lesson 312 · A1 · Estar para estados y lugares (course unit G012).
 * One phone call runs through the class: Lucía, an engineer on a work trip in
 * Monterrey, calls her brother Daniel, who is at home in Mexico City with
 * their mother. They ask where everyone is and how they feel. Content: the
 * full present of ESTAR, estar + state/emotion, estar en + place, aquí / ahí /
 * allí, cerca / lejos, and the limited contrast with SER (class 011):
 * «Es tranquilo» / «Está tranquilo hoy». «Hay» is left for class 013.
 * Lucía, Daniel and their mother speak with tú; vosotros is shown as Spain only.
 */
export const lesson: LiveLesson = {
  id: 312,
  level: 'A1',
  title: 'Estar para estados y lugares',
  subtitle: 'Decir cómo estás y dónde estás tú, tu familia y tus cosas con «estar», sin confundirlo con «ser».',
  legend: [
    { tone: 'teal', label: 'ESTAR + estado · cómo está (how)' },
    { tone: 'blue', label: 'ESTAR + lugar · dónde está (where)' },
    { tone: 'orange', label: 'aquí · ahí · allí · cerca · lejos (place words)' },
    { tone: 'violet', label: 'SER · quién es, cómo es, de dónde es (clase 011)' },
  ],
  optionNotes: {
    estoy: '«Estoy» es la forma de yo (I am).',
    Estoy: '«Estoy» es la forma de yo (I am).',
    estás: '«Estás» es la forma de tú (you are).',
    Estás: '«Estás» es la forma de tú (you are).',
    está: '«Está» es para él, ella, usted o una cosa (he / she / it is).',
    Está: '«Está» es para él, ella, usted o una cosa (he / she / it is).',
    estamos: '«Estamos» es para nosotros o nosotras (we are).',
    estáis: '«Estáis» es para vosotros o vosotras, en España (you all are).',
    están: '«Están» es para ellos, ellas, ustedes o varias cosas (they / you all are).',
    Están: '«Están» es para ellos, ellas, ustedes o varias cosas (they / you all are).',
    esta: '«Esta» sin tilde es un demostrativo (this): esta casa. El verbo lleva tilde: está.',
    soy: '«Soy» es el verbo ser: quién eres, de dónde eres, tu profesión. Un estado de hoy o un lugar van con estar.',
    Soy: '«Soy» es el verbo ser: quién eres, de dónde eres, tu profesión. Un estado de hoy o un lugar van con estar.',
    eres: '«Eres» es el verbo ser (tú): quién o cómo eres siempre. Un estado de hoy o un lugar van con estar.',
    es: '«Es» es el verbo ser: quién o cómo es alguien, de dónde es, su profesión. Un estado de hoy o un lugar van con estar.',
    Es: '«Es» es el verbo ser: quién o cómo es alguien, de dónde es, su profesión. Un estado de hoy o un lugar van con estar.',
    son: '«Son» es el verbo ser (ellos, ellas, ustedes). Un estado de hoy o un lugar van con estar.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Dónde estás? ¿Cómo estás?', coach: 'Dos preguntas, un verbo. Two questions, one verb.',
      steps: [
        { title: 'Una llamada · A phone call', blocks: [
          { kind: 'lead', text: 'Lucía es ingeniera. Esta semana está en Monterrey, por trabajo. Su hermano Daniel está en Ciudad de México, en casa, con su mamá. En la llamada, las dos preguntas importantes son **¿Dónde estás?** y **¿Cómo estás?** Las dos van con el verbo **estar**.', en: 'Lucía is an engineer. This week she is in Monterrey for work. Her brother Daniel is in Mexico City, at home with their mum. On the call, the two key questions are “Where are you?” and “How are you?”. Both use the verb estar.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después, tu alumno dice qué columna habla de un lugar y cuál de un estado.', self: 'Lee las tres frases en voz alta. Busca cuál dice dónde, cuál dice cómo y cuál dice quién.' } },
          { kind: 'compare', title: 'Tres frases de Lucía · Three sentences from Lucía', columns: [
            { tone: 'blue', label: 'ESTAR · dónde', sentence: '[[Estoy en Monterrey|blue]], en el hotel.', idea: 'Un lugar: dónde está ahora.', en: 'I am in Monterrey, at the hotel.' },
            { tone: 'teal', label: 'ESTAR · cómo', sentence: '[[Estoy cansada|teal]], pero contenta.', idea: 'Un estado, una emoción: cómo está hoy.', en: 'I am tired, but happy.' },
            { tone: 'violet', label: 'SER · quién', sentence: '[[Soy ingeniera|violet]].', idea: 'Su profesión: quién es (clase 011).', en: 'I am an engineer.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Estoy en Monterrey» dice…', options: ['cómo está Lucía.', 'quién es Lucía.', 'dónde está Lucía.'], answer: 2, why: 'Estar en + lugar = dónde está.', en: '“Estoy en Monterrey” tells you…' },
            { prompt: '«Estoy cansada» dice…', options: ['cómo está Lucía hoy.', 'la profesión de Lucía.', 'de dónde es Lucía.'], answer: 0, why: 'Cansada es un estado de hoy: estar.', en: '“Estoy cansada” tells you…' },
            { prompt: '«Soy ingeniera» usa…', options: ['ser, porque es su profesión.', 'estar, porque es un lugar.', 'estar, porque es un estado.'], answer: 0, why: 'La profesión es identidad: ser (clase 011).', en: '“Soy ingeniera” uses…' },
          ] },
        ] },
        { title: 'Las formas de estar · The forms', mascot: '/brand/mascot/studying.webp', coach: 'Seis formas, todas con -st-. Six forms.', blocks: [
          { kind: 'lead', text: 'Estar es irregular, pero fácil: **estoy** es especial y las otras formas llevan tilde en la **a** (menos estamos).', en: 'Estar is irregular but easy: “estoy” is special, and the other forms carry an accent on the a (except estamos).' },
          { kind: 'table', title: 'Estar · presente (to be: state / place)', head: ['Persona', 'estar', 'English', 'Ejemplo'], rows: [
            ['yo', '**estoy**', 'I am', '[[Estoy|blue]] en el hotel.'],
            ['tú', '**estás**', 'you are', '¿Cómo [[estás|teal]]?'],
            ['él · ella · usted', '**está**', 'he / she / it is · you are', 'Mamá [[está|teal]] nerviosa.'],
            ['nosotros · nosotras', '**estamos**', 'we are', '[[Estamos|blue]] en casa.'],
            ['vosotros · vosotras', '**estáis**', 'you all are (Spain)', '¿[[Estáis|teal]] bien?'],
            ['ellos · ellas · ustedes', '**están**', 'they are · you all are', 'Las llaves [[están|blue]] aquí.'],
          ], note: '**Vosotros** solo se usa en España. En América, para varias personas: **ustedes están**. Lucía y Daniel son de México: dicen «ustedes».' },
          { kind: 'tip', icon: '💡', title: 'Está o esta: la tilde importa', text: '**Está** (con tilde) es el verbo: «Mamá **está** en casa». **Esta** (sin tilde) es el demostrativo de la clase 008: «**esta** casa». Escucha también la diferencia: es-**TÁ** / **ES**-ta.', en: '“Está” with an accent is the verb: Mum is at home. “Esta” without an accent means “this” (class 008): this house. You can hear it too: es-TÁ / ES-ta.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel y mamá ___ en casa.', options: ['están', 'estamos', 'está'], answer: 0, why: 'Daniel y mamá = ellos: están.', en: 'Daniel and Mum are at home.' },
            { prompt: 'Yo ___ en Monterrey.', options: ['está', 'estás', 'estoy'], answer: 2, why: 'Yo: estoy.', en: 'I am in Monterrey.' },
            { prompt: 'Mamá ___ en la cocina.', options: ['esta', 'está', 'estás'], answer: 1, why: 'El verbo lleva tilde: está. «Esta» sin tilde significa «this».', en: 'Mum is in the kitchen.' },
          ] },
        ] },
        { title: 'Estar + estado · How you are', mascot: '/brand/mascot/seated.webp', coach: 'Hoy sí, mañana quizás no. Today yes, tomorrow maybe not.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ESTAR + ESTADO', question: '¿Cómo estás?', en: 'how you are: feelings, physical state', formula: ['estar + bien · mal', 'estar + cansado · contento · nervioso · tranquilo · enfermo · ocupado · triste'],
            meaning: 'Con **estar** dices cómo te sientes **ahora**: tu cuerpo (cansado, enfermo) y tus emociones (contento, nervioso, triste). Es un estado: puede cambiar mañana.',
            examples: [
              { es: '[[Estoy cansada|teal]], pero contenta.', en: 'I am tired, but happy.' },
              { es: 'Mamá [[está nerviosa|teal]] hoy.', en: 'Mum is nervous today.' },
              { es: '¿[[Estás ocupado|teal]], Daniel?', en: 'Are you busy, Daniel?' },
              { es: 'Mi compañera Ana [[está enferma|teal]].', en: 'My colleague Ana is sick.' },
              { es: 'Mamá y yo [[estamos tranquilos|teal]].', en: 'Mum and I are calm.' },
            ],
            note: 'El adjetivo concuerda (clase 006): cansad**o** (él), cansad**a** (ella), cansad**os** (ellos o un grupo mixto), cansad**as** (ellas). **Bien** y **mal** no cambian nunca: «Estamos bien».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía: «Hoy estoy muy ___».', options: ['cansada', 'cansadas', 'cansado'], answer: 0, why: 'Lucía es una mujer y habla de ella: cansada.', en: 'Lucía: “Today I am very tired”.' },
            { prompt: 'Daniel y mamá ___ contentos.', options: ['están', 'son', 'está'], answer: 0, why: 'Una emoción de ahora, ellos: están contentos.', en: 'Daniel and Mum are happy.' },
            { prompt: '¿Cómo estás? — Estoy ___, gracias.', options: ['bienes', 'buena', 'bien'], answer: 2, why: 'Bien no cambia: estoy bien.', en: 'How are you? — I am fine, thanks.' },
          ] },
        ] },
        { title: 'Estar + lugar · Where you are', mascot: '/brand/mascot/walking.webp', coach: '¿Dónde? Estar en… Where? Estar en…', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ESTAR + LUGAR', question: '¿Dónde estás?', en: 'where someone or something is', formula: ['estar + en + lugar', 'estar + aquí · ahí · allí · cerca (de) · lejos (de)'],
            meaning: 'Con **estar** dices dónde está una persona o una cosa. Con un lugar usas **en**: en casa, en el hotel. Con aquí, ahí, allí, cerca y lejos, **no** usas en.',
            examples: [
              { es: '[[Estoy en el hotel|blue]].', en: 'I am at the hotel.' },
              { es: 'Daniel [[está en casa|blue]], con mamá.', en: 'Daniel is at home, with Mum.' },
              { es: 'Las llaves [[están|blue]] [[aquí|orange]].', en: 'The keys are here.' },
              { es: 'El hotel [[está|blue]] [[cerca de|orange]] la estación.', en: 'The hotel is near the station.' },
              { es: 'Monterrey [[está|blue]] [[lejos de|orange]] Ciudad de México.', en: 'Monterrey is far from Mexico City.' },
            ],
            note: 'Cerca **de** y lejos **de** + un lugar: «cerca **de** la estación». Con «el» se juntan: de + el = **del** («cerca del hotel»).' },
          { kind: 'table', title: 'Palabras de lugar en una llamada · Place words on a call', head: ['Palabra', 'English', 'En la llamada'], rows: [
            ['[[aquí|orange]]', 'here', 'donde estoy yo: «Estoy aquí, en el hotel».'],
            ['[[ahí|orange]]', 'there (near you)', 'donde estás tú: «¿Las llaves están ahí?»'],
            ['[[allí|orange]]', 'over there (far from us)', 'lejos de los dos: «Mamá está allí, en el jardín».'],
            ['[[cerca (de)|orange]]', 'near', '«El hotel está cerca de la estación».'],
            ['[[lejos (de)|orange]]', 'far (from)', '«Monterrey está lejos».'],
          ], note: 'Por teléfono, **¿Estás ahí?** significa «Are you there? Can you hear me?».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía, en el hotel: «Estoy ___».', options: ['aquí', 'de aquí', 'en aquí'], answer: 0, why: 'Con aquí no usas «en»: estoy aquí.', en: 'Lucía, at the hotel: “I am here”.' },
            { prompt: 'Lucía pregunta por las llaves, que están en casa de Daniel: «¿Están ___?»', options: ['ahí', 'cerca', 'aquí'], answer: 0, why: 'Ahí = donde está la otra persona, Daniel.', en: 'Lucía asks about the keys, which are at Daniel’s place: “Are they there?”' },
            { prompt: 'El hotel está cerca ___ la estación.', options: ['de', 'a', 'en'], answer: 0, why: 'Cerca de + lugar.', en: 'The hotel is near the station.' },
          ] },
        ] },
        { title: '¿Ser o estar? · Which one?', mascot: '/brand/mascot/portrait.webp', coach: '¿Cómo es o cómo está? What is it like, or how is it now?', blocks: [
          { kind: 'lead', text: 'En la clase 011 aprendiste **ser**: quién eres, tu profesión, de dónde eres. Con ser también dices **cómo es** una persona normalmente. Con **estar** dices cómo está **hoy** y dónde está.', en: 'In class 011 you learnt ser: who you are, your job, where you are from. With ser you also say what someone is like in general. With estar you say how they are today and where they are.' },
          { kind: 'compare', title: 'La misma palabra, otra idea · Same word, different idea', columns: [
            { tone: 'violet', label: 'SER · cómo es', sentence: 'Mamá [[es tranquila|violet]].', idea: 'Su carácter: normalmente es así.', en: 'Mum is a calm person.' },
            { tone: 'teal', label: 'ESTAR · cómo está', sentence: 'Mamá [[está tranquila|teal]] hoy.', idea: 'Su estado hoy: ahora está así.', en: 'Mum is calm today.' },
          ] },
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['SER', 'ESTAR', 'English'], rows: [
            ['Daniel [[es tranquilo|violet]].', 'Daniel [[está tranquilo|teal]] hoy.', 'a calm person / calm today'],
            ['Lucía [[es de Monterrey|violet]].', 'Lucía [[está en Monterrey|blue]].', 'from / in Monterrey'],
            ['Ana [[es ingeniera|violet]].', 'Ana [[está en la oficina|blue]].', 'her job / where she is now'],
          ], note: 'Atención: **ser de** = origen; **estar en** = lugar. Una letra de diferencia, otra idea.' },
          { kind: 'decide', title: 'Antes de decir «is / are», piensa · Before you say “is / are”', steps: [
            { q: '¿Dices dónde está una persona o una cosa? (Where is it?)', yes: 'Usa **estar**: «Está en casa», «Están aquí».', no: 'next' },
            { q: '¿Dices cómo se siente alguien ahora, hoy? (How does someone feel now?)', yes: 'Usa **estar**: «Está nerviosa hoy».', no: 'next' },
            { q: '¿Dices quién es, su profesión, de dónde es o cómo es normalmente? (Who, job, origin, what they are like)', yes: 'Usa **ser**: «Es ingeniera», «Es tranquila».', no: 'Hoy solo necesitas ser y estar. Pregunta a tu profesor.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel normalmente ___ muy tranquilo.', options: ['estás', 'es', 'está'], answer: 1, why: 'Normalmente = su carácter: es tranquilo.', en: 'Daniel is usually a very calm person.' },
            { prompt: 'Hoy mamá no ___ tranquila.', options: ['está', 'son', 'es'], answer: 0, why: 'Hoy = un estado de ahora: está tranquila.', en: 'Today Mum is not calm.' },
            { prompt: 'Lucía ___ de Ciudad de México, pero ahora ___ en Monterrey.', options: ['es / está', 'es / es', 'está / es'], answer: 0, why: 'Origen: es de. Lugar ahora: está en.', en: 'Lucía is from Mexico City, but now she is in Monterrey.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Lugar, estado o identidad? Place, state or identity?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Lugar, estado o identidad?». Tu alumno responde y explica la corrección.', self: 'Lee cada frase, busca el error y piensa por qué antes de ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Soy en Monterrey.', right: 'Estoy en Monterrey.', why: 'Un lugar va con estar: estoy en. «Soy de Monterrey» es otra idea: el origen. (A place: estar.)' },
            { wrong: 'Mamá es nerviosa hoy.', right: 'Mamá está nerviosa hoy.', why: '«Hoy» dice que es un estado de ahora: estar. «Es nerviosa» habla de su carácter. (Today: estar.)' },
            { wrong: 'Las llaves está en la cocina.', right: 'Las llaves están en la cocina.', why: 'Las llaves = ellas, plural: están. (Plural: están.)' },
            { wrong: 'Estoy en aquí.', right: 'Estoy aquí.', why: 'Aquí, ahí y allí no llevan «en». (No “en” before aquí.)' },
            { wrong: 'Lucía está cansado.', right: 'Lucía está cansada.', why: 'El adjetivo concuerda con la persona: Lucía, cansada. (Agreement: -a for her.)' },
            { wrong: 'Estoy ingeniera.', right: 'Soy ingeniera.', why: 'La profesión es identidad: ser. (A job: ser.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Daniel es en casa.', 'Daniel está en casa.', 'Daniel está en aquí.'], answer: 1, why: 'Lugar: está en casa. Sin «en» antes de aquí.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['Ana es enferma hoy.', 'Ana está enfermo hoy.', 'Ana está enferma hoy.'], answer: 2, why: 'Estado de hoy: está. Ana es mujer: enferma.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales: dónde está ahora, cómo está hoy y dónde está una persona de su familia. Tú repites cada frase bien y tu alumno la repite.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La llamada de Lucía', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Lucía llama a Daniel · Lucía calls Daniel', blocks: [
          { kind: 'guide', text: { teacher: 'Leen la llamada con papeles: tú eres Daniel. Después, tu alumno toca cada expresión marcada y dice si es un lugar, un estado o ser.', self: 'Lee la llamada en voz alta. Después toca cada expresión marcada y mira por qué se usa ese verbo.' } },
          { kind: 'explore', title: '¿Dónde estás?', setting: 'Martes, nueve de la noche. Lucía, en un hotel de Monterrey, llama a su hermano Daniel, en Ciudad de México. (Tuesday, 9 p.m. Lucía calls her brother from a hotel in Monterrey.)', lines: [
            { who: 'Daniel', text: '¿Hola? ¡Hola, Lucía! ¿[[Dónde estás|blue]]?', en: 'Hello? Hi, Lucía! Where are you?' },
            { who: 'Lucía', text: 'Hola, Daniel. [[Estoy en Monterrey|blue]], en el hotel. [[Es un hotel tranquilo|violet]].', en: 'Hi, Daniel. I am in Monterrey, at the hotel. It is a quiet hotel.' },
            { who: 'Daniel', text: '¿Y [[cómo estás|teal]]?', en: 'And how are you?' },
            { who: 'Lucía', text: '[[Estoy cansada|teal]], pero contenta. ¿Y tú? ¿[[Estás en casa|blue]]?', en: 'I am tired, but happy. And you? Are you at home?' },
            { who: 'Daniel', text: 'Sí, estoy [[aquí|orange]], en casa, con mamá. Mamá [[está un poco nerviosa|teal]] hoy.', en: 'Yes, I am here, at home, with Mum. Mum is a bit nervous today.' },
            { who: 'Lucía', text: '¿Nerviosa? Pero mamá [[es muy tranquila|violet]].', en: 'Nervous? But Mum is a very calm person.' },
            { who: 'Daniel', text: 'Sí, pero hoy no [[está tranquila|teal]]. Sus llaves no están en la mesa.', en: 'Yes, but today she is not calm. Her keys are not on the table.' },
            { who: 'Lucía', text: 'Tranquilos. Las llaves [[están en la cocina|blue]], [[cerca de la ventana|orange]]. ¿[[Están ahí|blue]]?', en: 'Relax. The keys are in the kitchen, near the window. Are they there?' },
            { who: 'Daniel', text: '¡Sí, están aquí! Ahora mamá y yo [[estamos tranquilos|teal]].', en: 'Yes, they are here! Now Mum and I are calm.' },
            { who: 'Lucía', text: '¡Qué bien! Monterrey [[está lejos|orange]], pero el domingo [[estoy en casa|blue]]. Un beso a mamá.', en: 'Great! Monterrey is far away, but on Sunday I am home. A kiss for Mum.' },
          ], notes: {
            'Dónde estás': '**¿Dónde estás?** pregunta por un lugar. Daniel habla con su hermana (tú): estás.',
            'Estoy en Monterrey': '**Estar en** + lugar: dónde está Lucía ahora. No «soy en».',
            'Es un hotel tranquilo': '**Ser**: cómo es el hotel normalmente, su característica. Es un hotel tranquilo.',
            'cómo estás': '**¿Cómo estás?** pregunta por el estado de hoy: cansada, contenta, bien…',
            'Estoy cansada': 'Un estado de hoy: **estoy cansada**. Lucía es mujer: cansad**a**.',
            'Estás en casa': 'Pregunta de lugar con tú: **¿Estás en** casa?',
            'aquí': '**Aquí** = donde está la persona que habla (Daniel, en casa). Sin «en»: estoy aquí.',
            'está un poco nerviosa': 'Mamá (ella) + un estado de hoy: **está** nerviosa. «Un poco» = a bit.',
            'es muy tranquila': '**Ser**: el carácter de mamá. Normalmente **es** tranquila…',
            'está tranquila': '…pero **hoy no está** tranquila. El mismo adjetivo con estar habla del momento: es el par de la clase.',
            'están en la cocina': 'Las llaves (ellas, plural) + lugar: **están en** la cocina.',
            'cerca de la ventana': '**Cerca de** + lugar: near the window.',
            'Están ahí': '**Ahí** = donde está la otra persona (Daniel). Lucía está lejos, en Monterrey.',
            'estamos tranquilos': 'Mamá y yo = nosotros: **estamos**. Grupo de hombre y mujer: tranquil**os**.',
            'está lejos': 'Ubicación de una ciudad: Monterrey **está lejos** (de Ciudad de México).',
            'estoy en casa': 'Un lugar en el futuro cercano: el domingo **estoy en** casa.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde está Lucía?', options: ['En casa, con mamá.', 'En un hotel de Monterrey.', 'En la cocina.'], answer: 1, why: '«Estoy en Monterrey, en el hotel».', en: 'Where is Lucía?' },
            { prompt: '¿Cómo está mamá hoy y por qué?', options: ['Un poco nerviosa: sus llaves no están en la mesa.', 'Contenta: Lucía está en casa.', 'Cansada: mucho trabajo.'], answer: 0, why: '«Mamá está un poco nerviosa hoy… Sus llaves no están en la mesa».', en: 'How is Mum today, and why?' },
            { prompt: '¿Dónde están las llaves?', options: ['En la cocina, cerca de la ventana.', 'En el hotel.', 'En la mesa.'], answer: 0, why: '«Las llaves están en la cocina, cerca de la ventana».', en: 'Where are the keys?' },
          ] },
        ] },
        { title: 'Ordena la llamada · Sort the call', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: '¿Lugar, estado o ser? · Place, state or ser?', categories: [
            { id: 'lugar', label: 'ESTAR · lugar (where)', tone: 'blue' },
            { id: 'estado', label: 'ESTAR · estado (how)', tone: 'teal' },
            { id: 'ser', label: 'SER · quién / cómo es', tone: 'violet' },
          ], items: [
            { text: 'Lucía … en Monterrey.', answer: 'lugar', why: 'Un lugar: está en Monterrey.' },
            { text: 'Lucía … cansada, pero contenta.', answer: 'estado', why: 'Cómo está hoy: está cansada.' },
            { text: 'El hotel … tranquilo (normalmente).', answer: 'ser', why: 'Cómo es el hotel siempre: es tranquilo.' },
            { text: 'Mamá … un poco nerviosa hoy.', answer: 'estado', why: '«Hoy»: está nerviosa.' },
            { text: 'Las llaves … en la cocina.', answer: 'lugar', why: 'Dónde están: están en la cocina.' },
            { text: 'Mamá … una persona muy tranquila.', answer: 'ser', why: 'Su carácter: es una persona tranquila.' },
            { text: 'Lucía … ingeniera.', answer: 'ser', why: 'Profesión: es ingeniera.' },
            { text: 'Monterrey … lejos.', answer: 'lugar', why: 'Ubicación: está lejos.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué mamá es tranquila y está nerviosa?». Respuesta esperada: es su carácter / es su estado hoy.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Dónde? ¿Cómo? ¿Quién? Where, how, who?',
      steps: [
        { title: 'La forma correcta · The right form', blocks: [
          { kind: 'choice', items: [
            { context: 'Daniel habla de él y de mamá. (Daniel talks about himself and Mum.)', prompt: 'Mamá y yo ___ en casa.', options: ['estamos', 'estoy', 'están'], answer: 0, why: 'Mamá y yo = nosotros: estamos.', en: 'Mum and I are at home.' },
            { context: 'Lucía llama a Daniel. (Lucía calls Daniel.)', prompt: '¿___ ocupado ahora?', options: ['Eres', 'Estás', 'Está'], answer: 1, why: 'Lucía habla con su hermano con tú + un estado de ahora: estás.', en: 'Are you busy now?' },
            { context: 'Ana habla de ella. (Ana talks about herself.)', prompt: 'Hoy ___ enferma.', options: ['soy', 'está', 'estoy'], answer: 2, why: 'Ana dice «yo» + un estado de hoy: estoy.', en: 'Today I am sick.' },
            { context: 'Lucía habla de sus maletas. (Lucía talks about her suitcases.)', prompt: 'Mis maletas ___ en el hotel.', options: ['está', 'son', 'están'], answer: 2, why: 'Las maletas = ellas, plural, + lugar: están.', en: 'My suitcases are at the hotel.' },
            { context: 'En Madrid, Lucía habla con dos amigos españoles. (In Madrid, Lucía talks to two Spanish friends.)', prompt: '¿Vosotros ___ bien?', options: ['estáis', 'esta', 'estás'], answer: 0, why: 'Vosotros (España): estáis.', en: 'Are you all OK?' },
          ] },
        ] },
        { title: 'Ana, la compañera · Ana, the colleague', blocks: [
          { kind: 'classify', title: '¿Ser o estar? · Ser or estar?', categories: [
            { id: 'ser', label: 'SER · quién / cómo es / de dónde', tone: 'violet' },
            { id: 'estar', label: 'ESTAR · cómo está hoy / dónde está', tone: 'teal' },
          ], items: [
            { text: 'Ana … de Puebla.', answer: 'ser', why: 'Origen: es de Puebla.' },
            { text: 'Ana … en la oficina.', answer: 'estar', why: 'Lugar: está en la oficina.' },
            { text: 'Ana … ingeniera, como Lucía.', answer: 'ser', why: 'Profesión: es ingeniera.' },
            { text: 'Ana … triste hoy.', answer: 'estar', why: 'Un estado de hoy: está triste.' },
            { text: 'Ana … una persona muy alegre.', answer: 'ser', why: 'Su carácter: es una persona alegre.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Daniel es en casa con mamá.', ok: false, options: ['Daniel es de casa con mamá.', 'Daniel está en casa con mamá.', 'Daniel están en casa con mamá.'], answer: 1, why: 'Un lugar: estar en. Daniel = él: está.' },
            { sentence: 'Mamá y yo estamos contentos.', ok: true, why: 'Correcta: nosotros = estamos; grupo mixto = contentos.' },
            { sentence: 'Lucía está muy cansado hoy.', ok: false, options: ['Lucía estás muy cansada hoy.', 'Lucía es muy cansada hoy.', 'Lucía está muy cansada hoy.'], answer: 2, why: 'Estado de hoy con estar, y concordancia: Lucía, cansada.' },
            { sentence: 'Las llaves esta en la mesa.', ok: false, options: ['Las llaves está en la mesa.', 'Las llaves son en la mesa.', 'Las llaves están en la mesa.'], answer: 2, why: 'Plural + lugar: están. «Esta» sin tilde es un demostrativo.' },
            { sentence: 'Monterrey está lejos de Ciudad de México.', ok: true, why: 'Correcta: la ubicación de una ciudad va con estar.' },
            { sentence: 'Ana está ingeniera en Monterrey.', ok: false, options: ['Ana es ingeniera en Monterrey.', 'Ana son ingeniera en Monterrey.', 'Ana estás ingeniera en Monterrey.'], answer: 0, why: 'La profesión es identidad: ser.' },
          ] },
        ] },
        { title: 'Lucía llama a mamá · Lucía calls Mum', blocks: [
          { kind: 'chat-fill', title: 'Miércoles por la noche · Wednesday night', lines: [
            { who: 'Mamá', text: '¿Hola? ¡Lucía! ¿Cómo ___, hija?', options: ['estás', 'está', 'eres'], answer: 0, why: 'Mamá pregunta por el estado de hoy, con tú: estás. «¿Cómo eres?» pregunta por el carácter.' },
            { who: 'Lucía', text: '___ mejor, mamá. Hoy no estoy cansada.', options: ['Estoy', 'Soy', 'Están'], answer: 0, why: 'Lucía (yo) + estado: estoy mejor.' },
            { who: 'Mamá', text: '¿Y Ana? ¿Todavía ___ enferma?', options: ['estás', 'está', 'es'], answer: 1, why: 'Ana (ella) + estado de ahora: está enferma. (Todavía = still.)' },
            { who: 'Lucía', text: 'No, hoy ___ bien. Ahora Ana y yo ___ en la oficina.', options: ['es / somos', 'está / estamos', 'está / están'], answer: 1, why: 'Ana: está bien. Ana y yo = nosotras: estamos en la oficina.' },
            { who: 'Mamá', text: '¿Y la oficina ___ lejos de tu hotel?', options: ['están', 'está', 'estás'], answer: 1, why: 'La oficina (una cosa) + ubicación: está.' },
            { who: 'Lucía', text: 'No, está cerca. Mamá, el domingo estoy en casa. ¡Un beso!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['está', 'Mamá', 'nerviosa', 'hoy'], accept: ['Mamá está nerviosa hoy', 'Hoy mamá está nerviosa'], en: 'Mum is nervous today.' },
            { tiles: ['están', 'Las', 'llaves', 'aquí'], accept: ['Las llaves están aquí', 'Aquí están las llaves'], en: 'The keys are here.' },
            { tiles: ['lejos', 'El', 'hotel', 'está', 'no'], accept: ['El hotel no está lejos'], en: 'The hotel is not far.' },
            { tiles: ['estamos', 'cansados', 'Daniel', 'y', 'yo'], accept: ['Daniel y yo estamos cansados'], en: 'Daniel and I are tired.' },
          ] },
        ] },
        { title: 'Escríbelo · Write it', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escríbelo en español · Write it in Spanish', items: [
            { prompt: 'My brother is at home.', instruction: 'Escribe la frase en español. (brother = hermano)', accept: ['Mi hermano está en casa'] },
            { prompt: 'Where are the keys?', instruction: 'Escribe la pregunta en español. (keys = llaves)', accept: ['¿Dónde están las llaves?'] },
            { prompt: 'Estoy cansada.', instruction: 'Cambia la persona a «Lucía y Ana» (dos mujeres). (Change the subject to Lucía and Ana.)', accept: ['Lucía y Ana están cansadas', 'Están cansadas', 'Ellas están cansadas'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Daniel no contesta · Daniel does not answer', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una forma de estar. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las formas de estar que oyes. (Listen once for the gist, then for details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Lucía', channel: 'MENSAJE DE VOZ · DE LUCÍA, DESDE MONTERREY', src: '/audio/grammar-live/312.mp3',
            before: 'Jueves. Lucía llama a Daniel, pero Daniel no contesta. Lucía deja un mensaje de voz. ¿Qué crees que dice? (Daniel does not pick up, so Lucía leaves a voice message. What do you think she says?)',
            gist: { prompt: '¿Qué es este audio? · What is this audio?', options: ['Un mensaje de voz de Lucía para Daniel.', 'Un anuncio del hotel.', 'Una llamada de mamá a Lucía.'], answer: 0, why: '«Hola, Daniel. Soy Lucía…»: un mensaje de voz para su hermano.', en: 'What is this audio?' },
            details: [
              { prompt: '¿Cómo es el hotel?', options: ['Pequeño, pero no tranquilo.', 'Grande y lejos de la estación.', 'Pequeño y tranquilo, cerca de la estación.'], answer: 2, why: '«Es un hotel pequeño y tranquilo, cerca de la estación».', en: 'What is the hotel like?' },
              { prompt: '¿Cómo está Lucía?', options: ['Enferma.', 'Muy nerviosa.', 'Un poco cansada, pero contenta.'], answer: 2, why: '«Estoy un poco cansada, pero contenta».', en: 'How is Lucía?' },
              { prompt: '¿Quién está enferma hoy?', options: ['Ana, la compañera de Lucía.', 'Mamá.', 'Lucía.'], answer: 0, why: '«Mi compañera Ana está enferma hoy».', en: 'Who is sick today?' },
              { prompt: '¿Dónde está el pasaporte de Lucía?', options: ['En la cocina.', 'En su cuarto, en la mesa, cerca de la ventana.', 'En el hotel.'], answer: 1, why: '«Mi pasaporte está en mi cuarto, en la mesa, cerca de la ventana».', en: 'Where is Lucía’s passport?' },
            ],
            transcript: 'Hola, Daniel. [[Soy|violet]] Lucía. ¿Dónde [[estás|blue]]? Yo [[estoy en Monterrey|blue]], en el hotel. [[Es un hotel pequeño|violet]] y tranquilo, [[cerca de|orange]] la estación. [[Estoy un poco cansada|teal]], pero contenta: el trabajo aquí es interesante. Mi compañera Ana [[está enferma|teal]] hoy, pobre. ¿Y mamá? ¿[[Está bien|teal]]? Ah, una cosa: mi pasaporte [[está en mi cuarto|blue]], en la mesa, cerca de la ventana. ¿[[Está ahí|blue]]? El domingo [[estoy en casa|blue]] otra vez. Un beso grande, hermano.',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Daniel y responde al mensaje: dónde está, cómo está, cómo está mamá y si el pasaporte está ahí.', self: 'Eres Daniel. Responde a Lucía en voz alta: «Hola, Lucía. Estoy en… Estoy… Mamá está… Sí, tu pasaporte está aquí». (Answer as Daniel: where you are, how you and Mum are, and the passport.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Dónde estás? ¿Cómo estás?', coach: 'Tu llamada, tus respuestas. Your call, your answers.',
      steps: [
        { title: 'Una llamada contigo · A call with you', blocks: [
          { kind: 'guide', text: { teacher: 'Es una llamada: tú preguntas como Lucía o Daniel y tu alumno responde con frases reales sobre su vida. Tú repites su frase bien dicha y sigues con las repreguntas.', self: 'Imagina una llamada. Lee la pregunta, responde en voz alta con frases reales y después compara con el ejemplo. (Answer aloud, then compare.)' } },
          { kind: 'talk', cards: [
            { q: '¿Dónde estás ahora? · Where are you now?', followUps: ['¿Estás cerca o lejos de tu casa? (Near or far from home?)', '¿Y tu familia, dónde está? (And your family?)'], phrases: ['[[Estoy en|blue]] casa / en el trabajo / en la cafetería.', 'Mi casa [[está cerca|orange]] / [[está lejos|orange]].', 'Mi familia [[está en|blue]] …'], hint: '«Estoy en» + lugar. Con cerca y lejos, sin «en».', example: 'Estoy en el trabajo, en la oficina. Está lejos de mi casa. Mi familia está en Toronto.', next: 'Ahora, cómo estás.' },
            { q: '¿Cómo estás hoy? · How are you today?', followUps: ['¿Por qué? ¿Mucho trabajo? (Why? Lots of work?)', '¿Y ahora, en este momento? (And right now?)'], phrases: ['[[Estoy bien|teal]] / muy bien / mal.', '[[Estoy cansado|teal]] / [[cansada|teal]].', '[[Estoy un poco nervioso|teal]] / [[nerviosa|teal]].'], hint: '«Estoy» + estado. Cuidado con -o / -a.', example: 'Estoy un poco cansada, pero estoy contenta. Ahora estoy tranquila.', next: 'Ahora, una persona de tu familia.' },
            { q: '¿Cómo es una persona de tu familia y cómo está hoy? · What is someone in your family like, and how are they today?', followUps: ['¿Dónde está ahora? (Where is he / she now?)', '¿Y tus padres? (And your parents?)'], phrases: ['Mi hermano [[es tranquilo|violet]].', 'Hoy [[está nervioso|teal]].', 'Mis padres [[están en|blue]] …'], hint: 'Ser = cómo es normalmente. Estar = cómo está hoy y dónde está.', example: 'Mi hermana es muy tranquila, pero hoy está nerviosa. Está en el hospital: es médica.', next: 'Ahora, tus cosas.', teacher: 'Este es el par de la clase. Si tu alumno dice «es nerviosa hoy», tú repites con estar: «¿Ah, está nerviosa hoy?».' },
            { q: 'Por teléfono: ¿dónde están tus cosas? · On the phone: where are your things?', followUps: ['¿Y tus llaves? (And your keys?)', '¿Están aquí o en casa? (Here or at home?)', '¿Tu teléfono está cerca? (Is your phone near you?)'], phrases: ['Mis llaves [[están en|blue]] …', 'Mi bolso [[está aquí|orange]].', 'Mi pasaporte [[está en casa|blue]].'], hint: 'Una cosa: está. Varias cosas: están.', example: 'Mis llaves están aquí, en mi bolso. Mi pasaporte está en casa, en la mesa.', next: 'Ahora, tu ciudad.' },
            { q: '¿Tu casa está cerca o lejos? · Is your home near or far?', followUps: ['¿Y de la estación? (And from the station?)', '¿Tu ciudad es grande o pequeña? (Is your city big or small?)'], phrases: ['Mi casa [[está cerca de|orange]] …', '[[Está lejos de|orange]] …', 'Mi ciudad [[es|violet]] grande / pequeña.'], hint: 'Ubicación: estar. Cómo es la ciudad: ser.', example: 'Mi casa está cerca de la estación, pero lejos de mi trabajo. Mi ciudad es grande.', next: 'Para terminar, tu llamada.' },
            { q: 'Llama a Daniel: saluda, di dónde estás y cómo estás, y pregunta por él y por mamá. · Call Daniel: say hi, where and how you are, and ask about him and Mum.', followUps: ['¿Mamá está bien? (Is Mum OK?)', '¿Dónde están las llaves? (Where are the keys?)'], phrases: ['Hola, Daniel. [[Estoy en|blue]] …', '[[Estoy|teal]] … , pero …', '¿Y tú? ¿[[Dónde estás|blue]]? ¿[[Cómo está|teal]] mamá?'], hint: 'Cuatro partes: hola, dónde, cómo, una pregunta.', example: 'Hola, Daniel. Estoy en Lima, en un hotel cerca de la playa. Estoy cansado, pero contento. ¿Y tú? ¿Dónde estás? ¿Cómo está mamá?', teacher: 'Responde como Daniel con estar: «Estoy en casa. Mamá está tranquila hoy». Después, cambien los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas con «¿Dónde estás?» y «¿Cómo estás?» y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿Dónde estás?», «¿Cómo estás?», «¿Dónde están…?») y responde como Daniel. (Now ask the questions and answer as Daniel.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje desde el viaje', coach: 'Dónde, cómo, una pregunta. Where, how, a question.',
      steps: [
        { title: 'Tu mensaje · Your message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos estar / ser, la concordancia -o / -a y «en» solo antes de un lugar. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien estar / ser y la -o / -a. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje para tu familia · A message for your family', situation: 'Estás de viaje y escribes un mensaje de texto a una persona de tu familia o a un amigo. Quieres decir dónde estás y cómo estás. (You are on a trip and write a text message to a family member or a friend: where you are and how you are.)', task: [
            'Di dónde estás con «estar en» y una palabra de lugar: cerca, lejos, aquí. (Where you are.)',
            'Di cómo estás hoy con «estar» + estado. (How you are today.)',
            'Di cómo es el lugar con «ser»: «Es un hotel tranquilo». (What the place is like.)',
            'Habla de otra persona o de una cosa con «está» o «están». (Someone or something else.)',
            'Termina con una pregunta: «¿Cómo estás?», «¿Dónde estás?». (End with a question.)',
          ], starters: ['Hola, …', 'Estoy en …', 'Es un hotel / una ciudad …', 'Estoy un poco …, pero …', 'Mi amigo / Mi amiga … está …', '¿Y tú? ¿Cómo estás?', 'Un abrazo.'],
            words: ['estoy', 'está', 'están', 'en', 'aquí', 'cerca de', 'lejos de', 'cansado / cansada', 'contento / contenta', 'tranquilo / tranquila', 'nervioso / nerviosa', 'el hotel', 'la playa', 'la estación'],
            model: 'Hola, Emma. [[Estoy en Lima|blue]], en un hotel [[cerca de|orange]] la playa. [[Es un hotel pequeño|violet]] y muy bonito. Hoy [[estoy un poco cansado|teal]], pero estoy muy contento. Mi amigo Pablo [[está aquí|blue]] también: está en la habitación 12. ¿Y tú? ¿Cómo [[estás|teal]]? ¿Estás en casa? Un abrazo, Sam.',
            minWords: 30,
            checks: [
              { label: 'Estar + dónde estás (where)', pattern: '(?<!\\p{L})estoy\\s+(?:en|aqu[ií]|cerca|lejos)(?!\\p{L})', tip: 'Di dónde estás: «Estoy en Lima», «Estoy aquí».' },
              { label: 'Estar + cómo estás (how)', pattern: '(?<!\\p{L})estoy\\s+(?:muy\\s+|un\\s+poco\\s+)?(?:bien|mal|cansad[oa]|content[oa]|nervios[oa]|tranquil[oa]|enferm[oa]|ocupad[oa]|preocupad[oa]|triste|feliz)(?!\\p{L})', tip: 'Di cómo estás: «Estoy cansado», «Estoy muy contenta».' },
              { label: 'Ser para cómo es el lugar (what it is like)', pattern: '(?<!\\p{L})es(?!\\p{L})', tip: 'Di cómo es el lugar: «Es un hotel tranquilo», «Es una ciudad grande».' },
              { label: 'Otra persona o cosa: está / están', pattern: '(?<!\\p{L})(?:está|están|estan)(?!\\p{L})', tip: 'Habla de otra persona o cosa: «Mi amiga está aquí», «Las llaves están en casa». Ojo con la tilde: está.' },
              { label: 'Una pregunta: ¿cómo estás? / ¿dónde estás?', pattern: '(?:c[oó]mo|d[oó]nde)\\s+est[aá]s', tip: 'Termina con una pregunta: «¿Y tú? ¿Cómo estás?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:soy|eres|es|somos|son)\\s+(?:en|aqu[ií]|ah[ií]|all[ií])(?!\\p{L})', why: 'Un lugar va con estar: «estoy en Lima», «está aquí».' },
              { pattern: '(?<!\\p{L})(?:soy|eres|es|somos|son)\\s+(?:muy\\s+|un\\s+poco\\s+)?(?:cansad[oa]s?|enferm[oa]s?|ocupad[oa]s?|preocupad[oa]s?)(?!\\p{L})', why: 'Cansado, enfermo, ocupado y preocupado son estados: van con estar («estoy cansado»).' },
              { pattern: '(?<!\\p{L})en\\s+(?:aqu[ií]|ah[ií]|all[ií])(?!\\p{L})', why: 'Aquí, ahí y allí no llevan «en»: «estoy aquí».' },
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
            { tone: 'teal', label: 'ESTAR + ESTADO', formula: 'estoy · estás · está · estamos · estáis · están + cansado/a, contento/a, bien', example: 'Estoy cansada, pero contenta.', caption: 'cómo estás ahora', en: 'how you are now' },
            { tone: 'blue', label: 'ESTAR + LUGAR', formula: 'estar + en + lugar · aquí / ahí / allí · cerca de / lejos de', example: 'Las llaves están en la cocina.', caption: 'dónde está alguien o algo', en: 'where someone or something is' },
            { tone: 'violet', label: 'SER (clase 011)', formula: 'ser + profesión · de + origen · cómo es normalmente', example: 'Mamá es tranquila. Lucía es de Ciudad de México.', caption: 'quién es y cómo es', en: 'who someone is and what they are like' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '**Es tranquilo**: así es siempre. **Está tranquilo hoy**: así está ahora. Y un lugar va siempre con estar: **estoy en** Monterrey, nunca «soy en».', en: '“Es tranquilo”: that is how he always is. “Está tranquilo hoy”: that is how he is right now. And a location always takes estar: “estoy en Monterrey”, never “soy en”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '¿Dónde ___ tú ahora?', options: ['estás', 'eres', 'está'], answer: 0, why: 'Lugar, con tú: estás.', en: 'Where are you now?' },
            { prompt: 'Mis padres ___ en Monterrey.', options: ['está', 'están', 'son'], answer: 1, why: 'Ellos + lugar: están en.', en: 'My parents are in Monterrey.' },
            { prompt: 'Daniel ___ muy tranquilo, pero hoy ___ nervioso.', options: ['es / está', 'es / es', 'está / es'], answer: 0, why: 'Carácter: es. Estado de hoy: está.', en: 'Daniel is a very calm person, but today he is nervous.' },
            { prompt: 'Lucía y Ana ___ cansadas.', options: ['están', 'son', 'estamos'], answer: 0, why: 'Ellas + estado: están cansadas.', en: 'Lucía and Ana are tired.' },
            { prompt: 'Las llaves están ___.', options: ['en aquí', 'de aquí', 'aquí'], answer: 2, why: 'Aquí sin «en».', en: 'The keys are here.' },
          ] },
        ] },
        { title: 'Otra llamada · Another call', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'rewrite', title: 'Una situación nueva · A new situation', items: [
            { prompt: 'Your friend Leo is at the airport.', instruction: 'Escribe la frase en español. (airport = el aeropuerto)', accept: ['Tu amigo Leo está en el aeropuerto', 'Mi amigo Leo está en el aeropuerto', 'Leo está en el aeropuerto'] },
            { prompt: 'He is nervous, but he is a calm person.', instruction: 'Escribe la frase en español. (calm = tranquilo)', accept: ['Está nervioso, pero es tranquilo', 'Está nervioso, pero es una persona tranquila', 'Él está nervioso, pero es tranquilo', 'Él está nervioso, pero es una persona tranquila', 'Leo está nervioso, pero es tranquilo', 'Leo está nervioso, pero es una persona tranquila'] },
            { prompt: 'Where are you? Are you near the airport?', instruction: 'Escribe las dos preguntas en español, con tú. (cerca del = cerca de + el)', accept: ['¿Dónde estás? ¿Estás cerca del aeropuerto?'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 013 · Hay frente a estar: existencia y ubicación', text: 'Ya sabes decir dónde está una persona o una cosa: «Las llaves están en la cocina». En la clase 013 aprendes **hay**, para decir qué cosas existen en un lugar, y cuándo usar hay y cuándo estar.', en: 'You can now say where a person or a thing is: “The keys are in the kitchen”. In class 013 you learn “hay” (there is / there are) to say what exists in a place, and when to use hay or estar.', href: '/la-ciudad-de-los-motores', label: 'Ir a la clase 013' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Dónde estás y cómo estás hoy? ¿Cómo eres normalmente?». Respuesta esperada con estar en, estar + estado y ser. Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
