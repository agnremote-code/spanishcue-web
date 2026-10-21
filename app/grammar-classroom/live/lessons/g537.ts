import type { LiveLesson } from '../types';

/**
 * Lesson 537 · B1 · Ser y estar con adjetivos que cambian de significado (course unit G237,
 * extension added by the coverage audit, row 28; studied after G121, before G122).
 * Builds on G011/G012 (ser for identity, estar for states), G075 (es alto / está
 * cansado; its Ampliación previewed es listo / está listo, aburrido, rico) and
 * G120–G121 (estar + participio). Here the learner works systematically with the
 * adjectives whose MEANING changes with the verb (NGLE §37.8; DRAE):
 * listo (clever / ready), rico (wealthy / tasty), aburrido (boring / bored),
 * malo (bad, of poor quality / gone off, ill), bueno (good, kind / tasty),
 * verde (green / unripe, inexperienced), despierto (sharp / awake),
 * atento (considerate / paying attention), orgulloso (proud, arrogant / proud of),
 * seguro (safe, self-confident / certain), interesado (self-interested /
 * interested in), and contrasts them with adjectives that keep their meaning and
 * only shift between quality and current state (tranquilo, nervioso, serio).
 * Prepositions that go with estar: orgulloso de, seguro de, interesado en, listo para.
 * Scene: La Alacena, a small neighbourhood cooking school with evening classes for
 * adults. Irene Molina is the chef and teacher; Daniel Ortiz, 24, is her new
 * assistant in his first week; Carmen (retired) and Rubén (bank clerk) are students.
 * Listening: Irene's voice message to Daniel on Friday night (Spanish voice).
 * «Estar bueno» said of a person (colloquial comment on looks) is handled only in a
 * neutral teacher note; «estar malo» = ill is presented as colloquial with variable
 * spread. Ampliación: grave, delicado, vivo. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 537,
  level: 'B1',
  title: 'Ser y estar con adjetivos que cambian de significado',
  subtitle: 'Distinguir «es listo» de «está listo» o «es aburrido» de «está aburrido» y elegir el verbo que dice lo que quieres decir.',
  legend: [
    { tone: 'orange', label: 'SER + adjetivo · cómo es: una cualidad (es listo = clever)' },
    { tone: 'blue', label: 'ESTAR + adjetivo · cómo está: un estado, otro sentido (está listo = ready)' },
    { tone: 'teal', label: 'MISMO SENTIDO · solo cambia cualidad / estado (es tranquilo · está tranquilo)' },
    { tone: 'neutral', label: 'PISTAS · de, en, para, la comida que pruebas (clues)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Mismo adjetivo, otra idea', coach: 'Ser o estar cambia el sentido. Ser or estar changes the meaning.',
      steps: [
        { title: 'Una escuela de cocina · A cooking school', blocks: [
          { kind: 'lead', text: 'La Alacena es una pequeña escuela de cocina de barrio. Irene Molina, la chef, tiene un ayudante nuevo, Daniel. El primer día, Irene le dice a una alumna: «Daniel **es muy listo**, aprende todo rápido». Diez minutos antes de la clase, le pregunta a Daniel: «¿**Estás listo**?». Es el mismo adjetivo, pero no significa lo mismo.', en: 'La Alacena is a small neighbourhood cooking school. Irene Molina, the chef, has a new assistant, Daniel. On the first day Irene tells a student: “Daniel is very clever, he learns everything fast.” Ten minutes before the class she asks Daniel: “Are you ready?” Same adjective, but it does not mean the same thing.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Irene a la alumna y tu alumno lee la pregunta a Daniel. Después tu alumno explica con otras palabras qué significa «listo» en cada frase.', self: 'Lee las dos frases en voz alta. ¿Qué significa «listo» en cada una? Dilo con otras palabras. (What does “listo” mean in each one?)' } },
          { kind: 'compare', title: 'Listo: dos significados · Listo: two meanings', columns: [
            { tone: 'orange', label: 'SER LISTO · una cualidad', sentence: 'Daniel [[es muy listo|orange]]: aprende todo rápido.', idea: 'Cómo es Daniel: inteligente, rápido para entender.', en: 'Daniel is very clever: he learns everything fast.' },
            { tone: 'blue', label: 'ESTAR LISTO · un estado', sentence: '¿[[Estás listo|blue]]? Los alumnos llegan a las siete.', idea: 'Cómo está ahora: preparado para empezar.', en: 'Are you ready? The students arrive at seven.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La crema ya está lista» significa que…', options: ['la crema es muy inteligente.', 'la crema está preparada: se puede servir.', 'la crema tiene buen sabor.'], answer: 1, why: '«Estar listo» = preparado, terminado. «Ser listo» = inteligente: con una crema no tiene sentido.', en: '“La crema ya está lista” means that…' },
            { prompt: '«Carmen es muy lista» significa que Carmen…', options: ['es inteligente y entiende rápido.', 'ya está preparada para cocinar.', 'ha terminado su plato.'], answer: 0, why: '«Ser listo» habla de una cualidad de la persona: inteligente, espabilada.', en: '“Carmen es muy lista” means that Carmen…' },
          ] },
        ] },
        { title: 'La regla · The rule', mascot: '/brand/mascot/studying.webp', coach: 'Cualidad con ser, estado con estar. Quality with ser, state with estar.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SER + ADJETIVO · LA CUALIDAD', question: '¿Cómo es? ¿Qué tipo de persona o cosa es?', en: 'What is it like? What kind of person or thing is it?', formula: ['ser + adjetivo', 'es listo · es rico · es aburrido · es malo'],
            meaning: 'Con **ser** describes una **cualidad**: cómo es una persona o una cosa, en general. Con estos adjetivos, la cualidad tiene un sentido propio: **ser listo** = inteligente; **ser rico** = tener mucho dinero; **ser aburrido** = no ser interesante, aburrir a los demás; **ser malo** = mala persona o de mala calidad.',
            examples: [
              { es: 'Rubén [[es muy listo|orange]]: hace las cuentas de cabeza.', en: 'Rubén is very clever: he does the sums in his head.' },
              { es: 'La familia de Carmen [[es rica|orange]]: tiene tres restaurantes.', en: 'Carmen’s family is wealthy: they own three restaurants.' },
              { es: 'Esa película [[es aburrida|orange]]: me quedé dormida a la mitad.', en: 'That film is boring: I fell asleep halfway through.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'ESTAR + ADJETIVO · EL ESTADO', question: '¿Cómo está ahora? ¿Qué le pasa?', en: 'How is it now? What is going on with it?', formula: ['estar + adjetivo', 'está listo · está rico · está aburrido · está malo'],
            meaning: 'Con **estar** describes un **estado** o una situación, y el adjetivo cambia de sentido: **estar listo** = preparado; **estar rico** = tener buen sabor (la comida que pruebas); **estar aburrido** = sentir aburrimiento; **estar malo** = en mal estado (la comida) o, en el habla coloquial, enfermo.',
            examples: [
              { es: 'El arroz ya [[está listo|blue]]: a la mesa.', en: 'The rice is ready: come and eat.' },
              { es: '¡Mmm! Esta crema [[está riquísima|blue]].', en: 'Mmm! This soup tastes delicious.' },
              { es: 'La leche [[está mala|blue]]: huele raro.', en: 'The milk has gone off: it smells funny.' },
            ],
            note: '**Estar malo** = estar enfermo es coloquial y su uso varía según la zona; **estar enfermo** se entiende en todas partes.' },
          { kind: 'table', title: 'Seis adjetivos frecuentes · Six common adjectives', head: ['Adjetivo', 'SER · cualidad (what it is like)', 'ESTAR · estado (how it is now)'], rows: [
            ['listo', 'Rubén **es listo**. (clever)', 'La cena **está lista**. (ready)'],
            ['rico', 'Su familia **es rica**. (wealthy)', 'La tarta **está rica**. (tastes good)'],
            ['aburrido', 'La clase **es aburrida**. (boring)', 'Rubén **está aburrido**. (bored)'],
            ['malo', 'Este cuchillo **es malo**: no corta. (poor quality)', 'El pescado **está malo**. (gone off)'],
            ['bueno', 'Irene **es muy buena**: ayuda a todos. (kind, good)', 'El guiso **está muy bueno**. (tastes good)'],
            ['verde', 'El delantal **es verde**. (green)', 'Los plátanos **están verdes**. (unripe)'],
          ], note: '**Rico en** = que tiene mucho de algo: «La espinaca **es rica en** hierro». Y **ser bueno en / para** algo = tener habilidad: «Daniel **es bueno en** repostería».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rubén ___ aburrido: lleva media hora sin hacer nada.', options: ['está', 'tiene', 'es'], answer: 0, why: 'Media hora sin hacer nada: siente aburrimiento ahora. Estar aburrido = bored.', en: 'Rubén is bored: he has been doing nothing for half an hour.' },
            { prompt: 'No compres esos plátanos: ___ verdes.', options: ['hay', 'están', 'son'], answer: 1, why: 'Los plátanos no están maduros todavía: estar verde = unripe.', en: 'Don’t buy those bananas: they’re not ripe.' },
          ] },
        ] },
        { title: 'Personas y actitudes · People and attitudes', mascot: '/brand/mascot/standing.webp', coach: 'Fíjate en la preposición. Watch the preposition.', blocks: [
          { kind: 'table', title: 'Adjetivos para hablar de personas · Adjectives about people', head: ['Adjetivo', 'SER · cómo es la persona', 'ESTAR · cómo está (+ preposición)'], rows: [
            ['despierto', 'Daniel **es muy despierto**: lo entiende todo enseguida. (sharp)', 'A las seis ya **estoy despierta**. (awake)'],
            ['atento', 'Irene **es muy atenta** con los alumnos. (considerate, kind)', '**Están atentos** a la explicación. (paying attention)'],
            ['orgulloso', '**Es muy orgulloso**: nunca pide perdón. (too proud, arrogant)', '**Estoy orgullosa de** mi equipo. (proud of)'],
            ['seguro', 'El barrio **es seguro**. Ella **es muy segura**. (safe · self-confident)', '**Estoy seguro de que** viene. (certain)'],
            ['interesado', '**Es muy interesado**: solo llama cuando necesita algo. (self-interested)', '**Está interesada en** la cocina. (interested in)'],
          ], note: 'Con estar suelen aparecer preposiciones: orgulloso **de**, seguro **de**, interesado **en**, listo **para**, atento **a**. Estas pistas te ayudan a elegir estar.' },
          { kind: 'tip', icon: '💡', title: '«Estar seguro» tiene dos usos · Two uses of “estar seguro”', text: '«**Estoy seguro de que** viene» = no tengo dudas (certain). «Aquí **estás seguro**» = no corres peligro (safe). Y con ser: «Esta calle **es segura**» = no es peligrosa; «Carmen **es muy segura**» = tiene confianza en sí misma.', en: '“Estoy seguro de que viene” = I have no doubts (certain). “Aquí estás seguro” = you are not in danger (safe). And with ser: “Esta calle es segura” = it is not dangerous; “Carmen es muy segura” = she is self-confident.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mi jefe es muy interesado» significa que…', options: ['piensa sobre todo en su propio beneficio.', 'presta atención a todo.', 'quiere aprender muchas cosas.'], answer: 0, why: '«Ser interesado» es una crítica: actúa por interés propio. Para «tener interés» se dice «estar interesado en».', en: '“Mi jefe es muy interesado” means that…' },
            { prompt: 'Carmen ___ muy orgullosa de su primera tarta.', options: ['está', 'es', 'tiene'], answer: 0, why: '«Orgullosa de» + algo que hizo: satisfacción, estar orgulloso de.', en: 'Carmen is very proud of her first cake.' },
            { prompt: '«Daniel es muy atento» significa que Daniel…', options: ['no se distrae ahora en clase.', 'está despierto.', 'es amable y piensa en los demás.'], answer: 2, why: '«Ser atento» = amable, cortés. «Estar atento» = prestar atención en un momento.', en: '“Daniel es muy atento” means that Daniel…' },
          ] },
        ] },
        { title: '¿Cambia el sentido o no? · Does the meaning change?', mascot: '/brand/mascot/speaking.webp', coach: 'No todos los adjetivos cambian. Not every adjective changes.', blocks: [
          { kind: 'compare', title: 'Dos tipos de adjetivos · Two kinds of adjectives', columns: [
            { tone: 'teal', label: 'MISMO SENTIDO · cualidad o estado', sentence: 'Rubén [[es tranquilo|teal]], pero hoy [[está nervioso|teal]].', idea: 'Tranquilo y nervioso significan lo mismo con los dos verbos. Ser: su carácter. Estar: cómo está hoy.', en: 'Rubén is a calm person, but today he is nervous. (same meaning: personality vs today)' },
            { tone: 'orange', label: 'OTRO SENTIDO · ser', sentence: 'Rubén [[es aburrido|orange]].', idea: 'Una crítica: Rubén no es una persona divertida.', en: 'Rubén is boring. (he bores other people)' },
            { tone: 'blue', label: 'OTRO SENTIDO · estar', sentence: 'Rubén [[está aburrido|blue]].', idea: 'Rubén siente aburrimiento ahora.', en: 'Rubén is bored. (how he feels now)' },
          ] },
          { kind: 'decide', title: '¿Ser o estar con este adjetivo?', steps: [
            { q: '¿El adjetivo tiene dos significados (listo, rico, aburrido, malo, bueno, verde, despierto, atento, orgulloso, seguro, interesado)?', yes: 'Piensa qué quieres decir: la **cualidad** (es listo = clever) o el **estado** (está listo = ready). El verbo cambia el mensaje.', no: 'next' },
            { q: '¿Hablas del carácter o de algo que define a la persona o la cosa?', yes: '**Ser**: «Rubén **es tranquilo**», «Irene **es seria**».', no: 'next' },
            { q: '¿Hablas de cómo está ahora, de un cambio o de algo que notas hoy?', yes: '**Estar**: «Hoy Rubén **está nervioso**», «Irene **está muy seria**».', no: 'Revisa el contexto: ¿cualidad o estado?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿En qué par cambia el significado del adjetivo?', options: ['es despierto / está despierto', 'es tranquilo / está tranquilo', 'es nervioso / está nervioso'], answer: 0, why: '«Es despierto» = listo, rápido; «está despierto» = no duerme. Tranquilo y nervioso mantienen su sentido.', en: 'In which pair does the meaning of the adjective change?' },
            { prompt: 'Irene normalmente es muy alegre, pero hoy ___ muy seria. ¿Le pasa algo?', options: ['es', 'era', 'está'], answer: 2, why: '«Hoy» y «¿le pasa algo?»: un estado que notas, distinto de su carácter. Está seria.', en: 'Irene is usually very cheerful, but today she is very serious. Is something wrong?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Qué quieres decir? What do you mean?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué dice realmente la frase. Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿qué dice de verdad? Toca para ver la corrección. (What does it really say?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Esta clase es muy larga y yo soy aburrido.', right: 'Esta clase es muy larga y yo estoy aburrido.', why: '«Soy aburrido» es una crítica a ti mismo (I’m boring). Para lo que sientes: estoy aburrido (I’m bored).' },
            { wrong: 'Espera dos minutos: todavía no soy lista.', right: 'Espera dos minutos: todavía no estoy lista.', why: 'Preparada para salir o empezar: estar lista. «Ser lista» = inteligente.' },
            { wrong: 'Soy muy orgullosa de mis alumnos.', right: 'Estoy muy orgullosa de mis alumnos.', why: 'La satisfacción por algo o alguien: estar orgulloso de. «Ser orgulloso» es un defecto (arrogant).' },
            { wrong: 'Soy seguro de que el horno está apagado.', right: 'Estoy seguro de que el horno está apagado.', why: 'No tener dudas: estar seguro de (que). «Ser seguro» = sin peligro, o seguro de sí mismo.' },
            { wrong: 'Daniel es muy interesado en la repostería.', right: 'Daniel está muy interesado en la repostería.', why: 'Tener interés por algo: estar interesado en. «Ser interesado» = egoísta, que busca su beneficio.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lo siento, ¿puedes repetir? No ___ atento.', options: ['fui', 'estaba', 'era'], answer: 1, why: 'Prestar atención en un momento: estar atento.', en: 'Sorry, can you repeat that? I wasn’t paying attention.' },
            { prompt: '«Esta zona es muy segura» significa que…', options: ['la zona está preparada.', 'la gente de la zona no tiene dudas.', 'no es una zona peligrosa.'], answer: 2, why: '«Ser seguro» con un lugar = sin peligro (safe).', en: '“Esta zona es muy segura” means that…' },
          ] },
          { kind: 'teacher', text: 'Nota de uso: con personas, «estar bueno» se usa en el habla coloquial para comentar el físico de alguien; no es un registro de clase. Para la comida, «está bueno» = tiene buen sabor; para personas, en clase usamos «es buena persona», «es bueno en…» o «está muy guapo».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Antes de la clase', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la cocina de La Alacena · In the La Alacena kitchen', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Daniel. Después tu alumno toca cada expresión marcada y dice qué significa el adjetivo en esa frase.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué significa el adjetivo ahí. (Say what the adjective means there.)' } },
          { kind: 'explore', title: 'Quince minutos antes', setting: 'Jueves, 18:45. Irene y Daniel preparan la cocina antes de la clase de las siete. Se tratan de tú. (Thursday, 6:45 pm. Irene and her new assistant get the kitchen ready before the seven o’clock class.)', lines: [
            { who: 'Irene', text: 'Daniel, los alumnos llegan a las siete. ¿[[Está todo listo|blue]]?', en: 'Daniel, the students arrive at seven. Is everything ready?' },
            { who: 'Daniel', text: 'Casi. Las verduras están cortadas, pero mira los aguacates: [[están verdes|blue]]. Así no se pueden usar.', en: 'Almost. The vegetables are chopped, but look at the avocados: they’re not ripe. We can’t use them like this.' },
            { who: 'Irene', text: 'Pues hacemos la ensalada sin aguacate. ¿Has probado la crema de calabaza?', en: 'Then we’ll make the salad without avocado. Have you tasted the pumpkin soup?' },
            { who: 'Daniel', text: 'Sí, [[está muy rica|blue]]. Le falta un poco de sal, nada más.', en: 'Yes, it’s really tasty. It just needs a bit of salt.' },
            { who: 'Irene', text: 'Perfecto. Por cierto, Carmen me habló de ti el martes. Dice que [[eres muy atento|orange]]: siempre le explicas todo dos veces.', en: 'Great. By the way, Carmen talked to me about you on Tuesday. She says you’re very considerate: you always explain everything to her twice.' },
            { who: 'Daniel', text: '¡Qué bien! Es que ella [[está muy interesada|blue]] en la cocina de mercado y pregunta mucho.', en: 'That’s nice! She’s very interested in market cooking and asks a lot of questions.' },
            { who: 'Irene', text: '¿Y Rubén? El martes [[estaba muy serio|teal]].', en: 'And Rubén? On Tuesday he was very quiet and serious.' },
            { who: 'Daniel', text: '[[Estaba aburrido|blue]], creo: esperó media hora sin hacer nada mientras el pan estaba en el horno. Pero no [[es aburrido|orange]], ¿eh? Es muy gracioso.', en: 'He was bored, I think: he waited half an hour doing nothing while the bread was in the oven. But he isn’t boring, you know. He’s very funny.' },
            { who: 'Irene', text: 'Hoy le damos más trabajo. ¿Y tú? ¿Qué tal con los cuchillos?', en: 'Today we’ll give him more to do. And you? How are you getting on with the knives?' },
            { who: 'Daniel', text: 'Todavía [[estoy un poco verde|blue]]. Corto muy despacio.', en: 'I’m still a bit inexperienced. I cut very slowly.' },
            { who: 'Irene', text: 'Es normal. Tú [[eres muy despierto|orange]] y en unas semanas vas a cortar como un profesional, [[estoy segura|blue]]. Y la tarta de manzana de ayer… [[estoy muy orgullosa|blue]] de ti.', en: 'That’s normal. You’re very quick on the uptake and in a few weeks you’ll cut like a pro, I’m sure. And yesterday’s apple cake… I’m very proud of you.' },
            { who: 'Daniel', text: '¡Gracias, jefa! Ah, el timbre. ¡Ya están aquí!', en: 'Thanks, boss! Oh, the doorbell. They’re here!' },
          ], notes: {
            'Está todo listo': '**Estar listo** = preparado. Irene pregunta por el estado de la cocina antes de empezar.',
            'están verdes': 'Con la fruta, **estar verde** = no está madura. No habla del color: un aguacate maduro también puede tener la piel verde.',
            'está muy rica': 'La comida que pruebas: **estar rico** = tener buen sabor. «Ser rico» = tener mucho dinero.',
            'eres muy atento': '**Ser atento** = amable, pendiente de los demás: una cualidad de Daniel.',
            'está muy interesada': '**Estar interesado en** algo = tener interés. Va con la preposición **en**.',
            'estaba muy serio': 'Contraste: **serio** significa lo mismo con ser y estar. Aquí, estar: cómo estaba Rubén ese día, no su carácter.',
            'Estaba aburrido': '**Estar aburrido** = sentir aburrimiento en ese momento (bored).',
            'es aburrido': '**Ser aburrido** = no ser divertido, aburrir a los demás (boring). Daniel dice que Rubén no es así.',
            'estoy un poco verde': 'Con personas, **estar verde (en algo)** = tener poca experiencia o preparación. Es frecuente en la lengua coloquial.',
            'eres muy despierto': '**Ser despierto** = listo, rápido para entender. «Estar despierto» = no estar dormido.',
            'estoy segura': '**Estar seguro** = no tener dudas. Irene concuerda en femenino: segur**a**.',
            'estoy muy orgullosa': '**Estar orgulloso de** alguien o algo = sentir satisfacción. «Ser orgulloso» es un defecto (arrogant, too proud).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no usan los aguacates?', options: ['Porque no tienen buen sabor.', 'Porque no están maduros.', 'Porque son de color verde.'], answer: 1, why: '«Están verdes. Así no se pueden usar»: todavía no están maduros.', en: 'Why don’t they use the avocados?' },
            { prompt: '¿Qué piensa Daniel de Rubén?', options: ['Que es una persona aburrida.', 'Que siempre está muy serio.', 'Que es gracioso, pero el martes se aburrió.'], answer: 2, why: '«Estaba aburrido… Pero no es aburrido: es muy gracioso».', en: 'What does Daniel think of Rubén?' },
            { prompt: '¿Qué dice Daniel de sí mismo?', options: ['Que todavía tiene poca experiencia con los cuchillos.', 'Que es el más rápido cortando.', 'Que está aburrido en la escuela.'], answer: 0, why: '«Todavía estoy un poco verde. Corto muy despacio».', en: 'What does Daniel say about himself?' },
          ] },
        ] },
        { title: '¿Cualidad o estado? · Quality or state?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de La Alacena · Sentences from La Alacena', categories: [
            { id: 'ser', label: 'SER · una cualidad: cómo es (what it is like)', tone: 'orange' },
            { id: 'estar', label: 'ESTAR · un estado: cómo está (how it is now)', tone: 'blue' },
          ], items: [
            { text: 'Carmen dice que Daniel es muy atento.', answer: 'ser', why: 'Ser atento: una cualidad, amable con los demás.' },
            { text: 'Los aguacates están verdes.', answer: 'estar', why: 'Estar verde: no están maduros todavía.' },
            { text: 'La crema de calabaza está muy rica.', answer: 'estar', why: 'Estar rica: buen sabor de la comida que pruebas.' },
            { text: 'Rubén no es aburrido: es muy gracioso.', answer: 'ser', why: 'Cómo es Rubén: no es una persona aburrida.' },
            { text: 'Irene está orgullosa de Daniel.', answer: 'estar', why: 'Estar orgulloso de: satisfacción por alguien.' },
            { text: 'Daniel es muy despierto.', answer: 'ser', why: 'Ser despierto: una cualidad, listo y rápido para entender.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo es Daniel? ¿Y cómo está con los cuchillos?». Tu alumno responde con una frase con ser («Es atento y despierto») y otra con estar («Todavía está un poco verde»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué quieres decir? Elige el verbo. What do you mean? Choose the verb.',
      steps: [
        { title: 'Una tarde en la escuela · An afternoon at the school', blocks: [
          { kind: 'choice', items: [
            { context: 'Irene prueba el guiso de Carmen. (Irene tastes Carmen’s stew.)', prompt: '¡Carmen, el guiso ___ buenísimo! ¿Qué le has puesto?', options: ['es', 'está', 'hay'], answer: 1, why: 'Irene acaba de probarlo y comenta su sabor: está buenísimo.', en: 'Carmen, the stew tastes amazing! What did you put in it?' },
            { context: 'Daniel huele un yogur de la nevera. (Daniel smells a yoghurt from the fridge.)', prompt: 'No lo uses: ___ malo, mira la fecha.', options: ['es', 'era', 'está'], answer: 2, why: 'La comida en mal estado: estar malo.', en: 'Don’t use it: it’s gone off, look at the date.' },
            { context: 'Rubén habla de su nuevo cuchillo. (Rubén talks about his new knife.)', prompt: 'Lo compré barato, pero ___ malo: no corta nada.', options: ['tiene', 'es', 'está'], answer: 1, why: 'La calidad del cuchillo, una característica: es malo.', en: 'I bought it cheap, but it’s poor quality: it doesn’t cut anything.' },
            { context: 'Un alumno pregunta por el horno. (A student asks about the oven.)', prompt: '¿___ seguro de que el horno está a 180 grados?', options: ['Tienes', 'Estás', 'Eres'], answer: 1, why: 'No tener dudas: estar seguro de que.', en: 'Are you sure the oven is at 180 degrees?' },
            { context: 'Irene habla de una alumna nueva. (Irene talks about a new student.)', prompt: 'Lucía ___ muy despierta: en dos clases ya hace la masa sola.', options: ['era', 'está', 'es'], answer: 2, why: 'Una cualidad de Lucía: lista, rápida para aprender. Es despierta.', en: 'Lucía is very sharp: after two classes she already makes the dough on her own.' },
          ] },
        ] },
        { title: '¿Cambia el significado? · Does the meaning change?', blocks: [
          { kind: 'classify', title: 'Dos tipos de adjetivos · Two kinds of adjectives', categories: [
            { id: 'cambia', label: 'CAMBIA EL SIGNIFICADO · otro sentido con ser y con estar', tone: 'orange' },
            { id: 'mismo', label: 'MISMO SIGNIFICADO · solo cualidad / estado', tone: 'teal' },
          ], items: [
            { text: 'Es listo. / Está listo.', answer: 'cambia', why: 'Inteligente / preparado: dos ideas distintas.' },
            { text: 'Es nervioso. / Está nervioso.', answer: 'mismo', why: 'Nervioso significa lo mismo: carácter / estado de hoy.' },
            { text: 'Es rico. / Está rico.', answer: 'cambia', why: 'Tiene mucho dinero / tiene buen sabor.' },
            { text: 'Es tranquila. / Está tranquila.', answer: 'mismo', why: 'Tranquila: su carácter / cómo está ahora. Mismo sentido.' },
            { text: 'Es atento. / Está atento.', answer: 'cambia', why: 'Amable / presta atención en ese momento.' },
            { text: 'Es serio. / Está serio.', answer: 'mismo', why: 'Serio: su forma de ser / cómo está hoy. Mismo sentido.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Hoy no hay nada que hacer en la cocina y Rubén es aburrido.', ok: false, options: ['Hoy no hay nada que hacer en la cocina y Rubén era aburrido.', 'Hoy no hay nada que hacer en la cocina y Rubén está aburrida.', 'Hoy no hay nada que hacer en la cocina y Rubén está aburrido.'], answer: 2, why: 'Lo que siente Rubén hoy: estar aburrido (bored), con concordancia en masculino.' },
            { sentence: 'Carmen está muy orgullosa de su nieta, que es cocinera.', ok: true, why: 'Correcta: satisfacción por alguien, estar orgulloso de.' },
            { sentence: '¡Venga, Daniel! ¿Eres listo para salir?', ok: false, options: ['¡Venga, Daniel! ¿Estás lista para salir?', '¡Venga, Daniel! ¿Estás listo para salir?', '¡Venga, Daniel! ¿Eres listo de salir?'], answer: 1, why: 'Preparado para algo: estar listo para + infinitivo. Daniel → listo.' },
            { sentence: 'Mi vecino es muy interesado en la cocina japonesa.', ok: false, options: ['Mi vecino está muy interesado de la cocina japonesa.', 'Mi vecino está muy interesado en la cocina japonesa.', 'Mi vecino es muy interesante en la cocina japonesa.'], answer: 1, why: 'Tener interés por algo: estar interesado en.' },
            { sentence: 'Estos tomates todavía están verdes: mejor esperamos dos días.', ok: true, why: 'Correcta: los tomates no están maduros, estar verde.' },
          ] },
        ] },
        { title: 'La primera clase de Lucía · Lucía’s first class', blocks: [
          { kind: 'chat-fill', title: 'Daniel habla con Lucía, una alumna nueva · Daniel talks to Lucía, a new student', lines: [
            { who: 'Daniel', text: 'Bienvenida, Lucía. ¿Es tu primera clase de cocina?' },
            { who: 'Lucía', text: 'Sí, y ___ un poco nerviosa. En la cocina soy un desastre.', options: ['soy', 'estoy', 'tengo'], answer: 1, why: 'Cómo se siente hoy, en su primera clase: estoy nerviosa.' },
            { who: 'Daniel', text: 'Tranquila, el grupo es muy simpático. Mira, prueba la sopa de Carmen.' },
            { who: 'Lucía', text: '(La prueba). ¡Uf, ___ riquísima!', options: ['es', 'está', 'hay'], answer: 1, why: 'Acaba de probar la sopa: estar rico = buen sabor.' },
            { who: 'Daniel', text: 'Tú vas a hacer una igual. Pero primero tienes que ___ atenta: Irene explica cómo cortar la cebolla.', options: ['tener', 'ser', 'estar'], answer: 2, why: 'Prestar atención en ese momento: estar atento/a.' },
            { who: 'Lucía', text: 'Gracias. Oye, ¿y tú cuánto tiempo llevas aquí? Pareces muy seguro.' },
            { who: 'Daniel', text: '¡Una semana! Todavía ___ verde, pero aprendo rápido.', options: ['soy', 'estoy', 'tengo'], answer: 1, why: 'Poca experiencia: estar verde (en algo). Es un estado que va a cambiar.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Los', 'mangos', 'todavía', 'están', 'verdes'], accept: ['Los mangos todavía están verdes', 'Los mangos están verdes todavía', 'Todavía están verdes los mangos'], en: 'The mangoes still aren’t ripe.' },
            { tiles: ['Irene', 'es', 'muy', 'atenta', 'con', 'todos'], accept: ['Irene es muy atenta con todos', 'Con todos Irene es muy atenta'], en: 'Irene is very considerate towards everyone.' },
            { tiles: ['¿Estás', 'seguro', 'de', 'que', 'la', 'puerta', 'está', 'cerrada?'], accept: ['¿Estás seguro de que la puerta está cerrada?'], en: 'Are you sure the door is closed?' },
            { tiles: ['Lucía', 'está', 'lista', 'para', 'cocinar', 'sola'], accept: ['Lucía está lista para cocinar sola'], en: 'Lucía is ready to cook on her own.' },
          ] },
        ] },
        { title: 'Dilo con ser o estar · Say it with ser or estar', blocks: [
          { kind: 'rewrite', title: 'El mismo mensaje, otro adjetivo · Same message, another adjective', items: [
            { prompt: 'Carmen siente mucha satisfacción por su tarta.', instruction: 'Usa orgulloso/a en presente. Empieza con «Carmen».', accept: ['Carmen está muy orgullosa de su tarta', 'Carmen está orgullosa de su tarta'] },
            { prompt: 'Mi sobrina es muy inteligente: con diez años ya habla tres idiomas.', instruction: 'Cambia «inteligente» por listo/a. Empieza con «Mi sobrina».', accept: ['Mi sobrina es muy lista: con diez años ya habla tres idiomas', 'Mi sobrina es muy lista'] },
            { prompt: 'Lucía tiene mucho interés en la repostería.', instruction: 'Usa interesado/a en presente. Empieza con «Lucía».', accept: ['Lucía está muy interesada en la repostería', 'Lucía está interesada en la repostería'] },
            { prompt: 'Las fresas todavía no están maduras.', instruction: 'Usa verde en presente. Empieza con «Las fresas».', accept: ['Las fresas todavía están verdes', 'Las fresas están verdes todavía', 'Las fresas están todavía verdes', 'Las fresas están verdes'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige dos adjetivos de la clase y dice dos frases con cada uno, una con ser y otra con estar: «Mi hermana es muy lista» / «¿Estás lista?».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Irene', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El viernes por la noche · Friday night', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada cualidad con ser (eres atento…) y da una palmada con cada estado con estar (estás verde…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa las cualidades (ser) y los estados (estar). (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Mensaje de voz para Daniel', channel: 'MENSAJE DE VOZ · IRENE MOLINA', src: '/audio/grammar-live/537.mp3',
            before: 'Es viernes por la noche. Termina la primera semana de Daniel y Irene le deja un mensaje de voz. ¿Qué crees que le dice: algo sobre su trabajo, un problema, un plan para el lunes…? (Irene leaves Daniel a voice message at the end of his first week. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Irene está enfadada porque Daniel corta muy despacio.', 'Irene valora la semana de Daniel y le pide empezar sola la clase del lunes.', 'Irene le cuenta a Daniel que el lunes la escuela está cerrada.'], answer: 1, why: 'Le dice qué hace bien, qué le falta y le pregunta si puede empezar él la clase del lunes.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué cualidades de Daniel menciona Irene?', options: ['Que es rico y seguro.', 'Que es tranquilo y serio.', 'Que es atento y despierto.'], answer: 2, why: '«Eres muy atento con los alumnos y eres muy despierto».', en: 'Which of Daniel’s qualities does Irene mention?' },
              { prompt: '¿Qué le falta todavía a Daniel?', options: ['Saber hacer tartas.', 'Experiencia con los cuchillos.', 'Hablar con los alumnos.'], answer: 1, why: '«Con los cuchillos todavía estás un poco verde».', en: 'What does Daniel still lack?' },
              { prompt: '¿Por qué puede estar orgulloso Daniel?', options: ['Porque a Carmen, que es exigente, le encantó su tarta.', 'Porque Irene le va a pagar más.', 'Porque el grupo nuevo es muy grande.'], answer: 0, why: '«Carmen me dijo que tu tarta estaba riquísima, y Carmen es muy exigente».', en: 'Why can Daniel be proud?' },
              { prompt: '¿Qué tiene que hacer Daniel si un alumno está aburrido?', options: ['Darle una tarea.', 'Llamar a Irene.', 'Abrir el horno.'], answer: 0, why: '«Si alguien está aburrido mientras espera el horno, le das una tarea».', en: 'What should Daniel do if a student is bored?' },
            ],
            transcript: 'Hola, Daniel, soy Irene. Te dejo un mensaje rápido sobre esta semana. Para ser la primera, ha ido muy bien. [[Eres muy atento|orange]] con los alumnos y [[eres muy despierto|orange]]: entiendes las cosas a la primera. Con los cuchillos todavía [[estás un poco verde|blue]], es normal, pero en un mes vas a [[estar listo|blue]] para preparar el pescado tú solo. Por cierto, Carmen me dijo que tu tarta de manzana [[estaba riquísima|blue]], y Carmen es muy exigente, así que puedes [[estar orgulloso|blue]]. Una cosa más: el lunes empieza un grupo nuevo y yo voy a llegar un poco tarde porque tengo médico, nada grave. ¿[[Estás seguro|blue]] de que puedes empezar tú la clase? Es fácil: el primer día los alumnos [[están nerviosos|teal]], pero el grupo es muy simpático. Y si alguien [[está aburrido|blue]] mientras espera el horno, le das una tarea. Llámame mañana si quieres. ¡Buen fin de semana!',
            reply: { teacher: 'Tú eres Daniel y llamas a Irene el sábado. Tu alumno es Irene: responde a tus dudas sobre el lunes («¿Y si el grupo está aburrido?», «¿Estás segura de que puedo?») con ser y estar.', self: 'Imagina que eres Daniel. Responde en voz alta al mensaje de Irene: agradece sus palabras, di cómo estás tú y si estás listo para el lunes. (Answer Irene aloud: thank her, say how you feel and whether you are ready for Monday.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Personas, platos y planes', coach: 'Elige el verbo según lo que quieres decir. Choose the verb for what you mean.',
      steps: [
        { title: 'Hablamos en La Alacena · Talking at La Alacena', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con ejemplos reales de su vida. Tú repites su frase con el verbo correcto cuando hace falta y sigues con la repregunta.', self: 'Lee la pregunta y responde en voz alta con ejemplos de tu vida. Si quieres, escribe tu respuesta. (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: 'Pruebas un plato en la clase de Irene. ¿Cómo está? Comenta el sabor con detalle. · You taste a dish in Irene’s class. How does it taste?', followUps: ['¿Le falta algo? (Is anything missing?)', '¿Cuál es el plato más rico que has comido este mes? (The tastiest dish you’ve had this month?)'], phrases: ['¡[[Está riquísimo|blue]]!', '[[Está muy bueno|blue]], pero le falta sal.', 'Este queso [[está malo|blue]]: huele raro.'], hint: 'Con la comida que pruebas: estar rico / bueno / malo. Concuerda con el plato: la sopa está rica.', example: '¡Mmm, la crema está riquísima! Está muy suave, pero le falta un poco de sal. El plato más rico de este mes fue un arroz con verduras de mi madre.', next: 'Ahora, las personas.' },
            { q: 'Describe a un compañero de trabajo o de clase que te cae muy bien. ¿Cómo es? · Describe a colleague or classmate you really like.', followUps: ['¿Es atento con los demás? (Is he/she considerate?)', '¿Y hay alguien que te parece un poco aburrido o interesado? (Anyone a bit boring or self-interested?)'], phrases: ['[[Es muy atento|orange]] / [[muy despierta|orange]].', '[[Es muy lista|orange]]: lo entiende todo enseguida.', 'No [[es nada aburrido|orange]].'], hint: 'Cualidades con ser. Recuerda: ser atento = amable; ser despierto = rápido para entender.', example: 'Mi compañera Ana es muy lista y muy atenta: siempre te pregunta si necesitas ayuda. No es nada aburrida; en las reuniones siempre nos hace reír.', next: 'Ahora, tú.', teacher: 'Si tu alumno dice «es aburrido» y quiere decir «se aburre», tú preguntas: «¿Aburre a los demás o se aburre?».' },
            { q: '¿En qué cosas todavía estás un poco verde? ¿Y para qué estás listo/a ya? · What are you still inexperienced at? What are you ready for?', followUps: ['¿Qué haces para aprender? (What do you do to learn?)', '¿Cuándo crees que vas a estar listo/a? (When will you be ready?)'], phrases: ['Todavía [[estoy verde|blue]] en…', 'Ya [[estoy lista|blue]] [[para|neutral]] + infinitivo.', 'En unos meses voy a [[estar listo|blue]].'], hint: 'Estar verde (en algo) = poca experiencia. Estar listo para + infinitivo = preparado.', example: 'Todavía estoy un poco verde en la cocina: solo sé hacer pasta y tortilla. Pero en inglés ya estoy lista para trabajar con clientes.', next: 'Ahora, algo que te hace sentir bien.' },
            { q: '¿De qué estás orgulloso/a? Puede ser algo tuyo o de una persona cercana. · What are you proud of?', followUps: ['¿Por qué? (Why?)', '¿Conoces a alguien muy orgulloso, que nunca pide perdón? (Do you know someone too proud to apologise?)'], phrases: ['[[Estoy muy orgulloso|blue]] [[de|neutral]]…', 'Mi madre [[está orgullosa|blue]] de que…', '[[Es tan orgulloso|orange]] que nunca pide perdón.'], hint: 'Satisfacción: estar orgulloso de. Un defecto: ser orgulloso. Con «de que» + otro sujeto usas el subjuntivo (clase 092).', example: 'Estoy muy orgullosa de mi hermano: este año ha terminado la carrera mientras trabajaba. Y mi abuelo, en cambio, es muy orgulloso: nunca dice «lo siento».', next: 'Ahora, intereses.' },
            { q: '¿En qué tema estás muy interesado/a ahora? ¿Conoces a alguien interesado, que solo llama cuando necesita algo? · What are you interested in now? Do you know a self-interested person?', followUps: ['¿Desde cuándo te interesa? (Since when?)', '¿Cómo reaccionas con una persona interesada? (How do you react to a self-interested person?)'], phrases: ['[[Estoy muy interesada|blue]] [[en|neutral]]…', 'Tengo un amigo que [[es un poco interesado|orange]].'], hint: 'Interés por algo: estar interesado en. Egoísmo: ser interesado.', example: 'Ahora estoy muy interesado en la cocina coreana: veo vídeos todas las noches. Y sí, tengo un excompañero que es muy interesado: solo me escribe cuando necesita un favor.', next: 'Ahora, un poco de seguridad.' },
            { q: 'Un amigo quiere volver a casa a pie a medianoche. ¿Es seguro tu barrio? ¿Estás seguro/a de que es buena idea? · Is your neighbourhood safe? Are you sure it’s a good idea?', followUps: ['¿Qué zona no es segura de noche? (Which area is not safe at night?)', '¿Estás seguro/a de que no hay autobuses? (Are you sure there are no buses?)'], phrases: ['Mi barrio [[es bastante seguro|orange]].', 'No [[estoy segura|blue]] [[de|neutral]] que sea buena idea.', '¿[[Estás seguro|blue]] de que no quieres un taxi?'], hint: 'Un lugar sin peligro: ser seguro. Sin dudas: estar seguro de (que). «No estoy seguro de que» + subjuntivo (clase 094).', example: 'Mi barrio es bastante seguro, pero el parque no es seguro de noche. No estoy segura de que sea buena idea ir a pie: ¿estás seguro de que no quieres un taxi?', teacher: 'Tú haces de amigo que insiste («Estoy seguro: no pasa nada») y tu alumno da razones.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno te hace dos preguntas de las tarjetas y tú respondes con un error a propósito («Soy aburrido en las reuniones largas»). Tu alumno lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona (un amigo, un familiar). (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una recomendación', coach: 'Cómo es la persona y cómo está ahora. What the person is like and where they are now.',
      steps: [
        { title: 'Un correo de Irene · An email from Irene', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada adjetivo: ¿cualidad (ser) o estado (estar)? ¿Lleva preposición (de, en, para)? Después tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después mira cada adjetivo: ¿cualidad o estado? ¿Lleva preposición? (Check every adjective: quality or state? Does it need a preposition?)' } },
          { kind: 'write', title: 'Te recomiendo a Daniel · I recommend Daniel', situation: 'Eres Irene. Marisa, una amiga que tiene un restaurante, busca un ayudante de cocina para el verano y te pregunta por Daniel. Escríbele un correo de recomendación: cómo es Daniel, qué le falta todavía y por qué crees que está preparado. Si prefieres, recomienda a una persona real que conoces. (You are Irene. A friend with a restaurant is looking for a summer kitchen assistant. Write an email recommending Daniel, or someone you really know.)', task: [
            'Saluda y presenta a la persona. (Say hello and introduce the person.)',
            'Describe dos o tres cualidades con ser: atento, despierto, listo… (Two or three qualities with ser.)',
            'Di en qué está todavía un poco verde y para qué está listo ya. (What they still lack and what they are ready for.)',
            'Expresa tu opinión con estar orgulloso/a de o estar seguro/a de que. (Your opinion with estar orgulloso de / estar seguro de que.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['Hola, Marisa:', 'Te escribo para recomendarte a…', 'Es muy…', 'Con… todavía está un poco verde, pero…', 'Ya está listo para…', 'Estoy segura de que…', 'Un abrazo,'],
            words: ['es atento/a', 'es despierto/a', 'es listo/a', 'no es nada aburrido/a', 'está verde en', 'está listo/a para', 'está interesado/a en', 'estoy orgulloso/a de', 'estoy seguro/a de que', 'todavía', 'ya'],
            model: 'Hola, Marisa: Te escribo para recomendarte a Daniel, mi ayudante. Lleva poco tiempo en La Alacena, pero [[es muy despierto|orange]]: entiende las cosas a la primera. Además, [[es muy atento|orange]] con los alumnos y [[no es nada aburrido|orange]]: los mayores lo adoran. Con los cuchillos todavía [[está un poco verde|blue]], pero practica todos los días y ya [[está listo|blue]] para preparar los entrantes él solo. También [[está muy interesado|blue]] en la repostería: su tarta de manzana [[estaba riquísima|blue]]. [[Estoy muy orgullosa|blue]] de su trabajo y [[estoy segura|blue]] de que en tu restaurante va a aprender mucho. Si quieres, te lo presento el sábado. Un abrazo, Irene.',
            minWords: 80,
            checks: [
              { label: 'Una cualidad con ser (a quality with ser)', pattern: '(?<!\\p{L})(?:es|eres|soy|era)\\s+(?:muy\\s+|bastante\\s+|nada\\s+)?(?:atent|despiert|list|aburrid|orgullos|interesad|segur)[oa]s?(?!\\p{L})', tip: 'Describe cómo es la persona: «Es muy despierto», «Es muy atenta con los clientes».' },
              { label: 'Un estado con estar: verde, listo… (a state with estar)', pattern: '(?<!\\p{L})(?:está|están|estoy|estaba)\\s+(?:muy\\s+|un\\s+poco\\s+|todavía\\s+)?(?:verdes?|list[oa]s?|interesad[oa]s?)(?!\\p{L})', tip: 'Di cómo está ahora: «Todavía está un poco verde», «Ya está lista para…».' },
              { label: 'Tu opinión: orgulloso/a de o seguro/a de que (your opinion)', pattern: '(?<!\\p{L})estoy\\s+(?:muy\\s+)?(?:orgullos[oa]\\s+de|segur[oa]\\s+de\\s+que)(?!\\p{L})', tip: 'Por ejemplo: «Estoy muy orgullosa de su trabajo», «Estoy segura de que…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:soy|eres|es|somos|son)\\s+(?:muy\\s+)?(?:orgullos[oa]s?\\s+de|segur[oa]s?\\s+de\\s+que|interesad[oa]s?\\s+en)(?!\\p{L})', why: 'Con «de» o «en» va estar: **estoy orgulloso de**, **estoy seguro de que**, **está interesado en**.' },
              { pattern: '(?<!\\p{L})(?:es|soy|eres|son)\\s+(?:muy\\s+)?list[oa]s?\\s+para(?!\\p{L})', why: 'Preparado para algo: **está listo para**. «Es listo» = inteligente.' },
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
            { tone: 'orange', label: 'SER · CUALIDAD', formula: 'es listo · es rico · es aburrido · es atento · es orgulloso · es interesado', example: 'Daniel es muy despierto y muy atento.', caption: 'cómo es: inteligente, con dinero, que aburre, amable, arrogante, egoísta', en: 'what it is like: clever, wealthy, boring, considerate, arrogant, self-interested' },
            { tone: 'blue', label: 'ESTAR · ESTADO', formula: 'está listo · está rico · está aburrido · está verde · está malo', example: 'La crema está lista y está riquísima.', caption: 'cómo está: preparado, sabroso, que se aburre, sin madurar, en mal estado', en: 'how it is: ready, tasty, bored, unripe or inexperienced, gone off' },
            { tone: 'neutral', label: 'ESTAR + PREPOSICIÓN', formula: 'orgulloso de · seguro de (que) · interesado en · listo para', example: 'Estoy orgullosa de ti. Estoy segura de que puedes.', caption: 'la preposición es una buena pista para estar', en: 'the preposition is a good clue for estar' },
            { tone: 'teal', label: 'MISMO SENTIDO', formula: 'es tranquilo / está tranquilo · es serio / está serio', example: 'Rubén es tranquilo, pero hoy está nervioso.', caption: 'el adjetivo no cambia: carácter frente a estado de hoy', en: 'the adjective keeps its meaning: personality vs today’s state' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Con estos adjetivos, el verbo no es un detalle: **cambia el mensaje**. Antes de hablar, pregúntate qué quieres decir: ¿una **cualidad** de la persona o la cosa (**ser**: es listo, es aburrido) o un **estado**, una situación (**estar**: está listo, está aburrido)? Si el adjetivo lleva **de**, **en** o **para**, casi siempre va con estar.', en: 'With these adjectives the verb is not a detail: it changes the message. Before you speak, ask yourself what you mean: a quality of the person or thing (ser: es listo, es aburrido) or a state, a situation (estar: está listo, está aburrido)? If the adjective takes de, en or para, it almost always goes with estar.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Apaga la tele, por favor: no ___ atento a la explicación.', options: ['eres', 'tienes', 'estás'], answer: 2, why: 'Prestar atención en este momento: estar atento.', en: 'Turn off the TV, please: you’re not paying attention to the explanation.' },
            { prompt: 'Mi primo ___ muy rico: tiene una empresa y dos casas.', options: ['es', 'está', 'tiene'], answer: 0, why: 'Tener mucho dinero: ser rico.', en: 'My cousin is very wealthy: he has a company and two houses.' },
            { prompt: 'No te comas esas naranjas: ___ verdes.', options: ['hay', 'son', 'están'], answer: 2, why: 'No están maduras: estar verde.', en: 'Don’t eat those oranges: they’re not ripe.' },
            { prompt: 'Mi jefa ___ muy orgullosa: nunca reconoce un error.', options: ['tiene', 'es', 'está'], answer: 1, why: 'Un defecto de carácter, sin «de»: ser orgulloso.', en: 'My boss is very proud: she never admits a mistake.' },
            { prompt: 'Señores, ¿ya ___ listos? El taxi está en la puerta.', options: ['están', 'son', 'tienen'], answer: 0, why: 'Preparados para salir: estar listo.', en: 'Are you ready yet? The taxi is at the door.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una oficina.', blocks: [
          { kind: 'lead', text: 'Nueva situación: en una oficina, Sonia, la jefa de equipo, habla de su compañero Marcos, que lleva un mes en la empresa. Elige lo que quiere decir Sonia en cada caso.', en: 'New situation: in an office, Sonia, the team leader, talks about her colleague Marcos, who has been with the company for a month. Choose what Sonia means each time.' },
          { kind: 'choice', title: 'Marcos, el nuevo · Marcos, the new guy', items: [
            { prompt: 'Sonia quiere decir que Marcos es inteligente. Dice: «Marcos ___».', options: ['está muy listo', 'es muy listo', 'está despierto'], answer: 1, why: 'Inteligente = ser listo, una cualidad.', en: 'Sonia means that Marcos is clever.' },
            { prompt: 'Sonia quiere decir que a Marcos le falta experiencia con los clientes. Dice: «Con los clientes, Marcos todavía ___».', options: ['está aburrido', 'está un poco verde', 'es verde'], answer: 1, why: 'Poca experiencia: estar verde (en algo).', en: 'Sonia means that Marcos still lacks experience with clients.' },
            { prompt: 'Sonia quiere decir que Marcos solo ayuda si gana algo. Dice: «Marcos ___».', options: ['es un poco interesado', 'está un poco interesado', 'está interesado en ayudar'], answer: 0, why: 'Actuar por interés propio: ser interesado (una crítica).', en: 'Sonia means that Marcos only helps if there is something in it for him.' },
          ] },
        ] },
        { title: 'Ampliación: grave, delicado, vivo · Extension: grave, delicado, vivo', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: tres adjetivos más. Optional: three more adjectives.', blocks: [
          { kind: 'lead', text: 'Opcional. Otros adjetivos también cambian de sentido: **ser grave** = serio, importante (un problema grave) / **estar grave** = muy enfermo; **ser delicado** = frágil o difícil de tratar (un tema delicado) / **estar delicado** = débil de salud; **ser vivo** = rápido, ingenioso (el matiz varía según la zona: a veces también «que se aprovecha de los demás») o intenso (colores vivos) / **estar vivo** = no estar muerto.', en: 'Optional. Other adjectives also change meaning: ser grave = serious, important / estar grave = seriously ill; ser delicado = fragile or tricky / estar delicado = in poor health; ser vivo = quick-witted (the nuance varies by region: sometimes also “someone who takes advantage of others”) or bright (colours) / estar vivo = alive.' },
          { kind: 'choice', title: 'Lee y elige · Read and choose', items: [
            { prompt: '«Mi abuelo está delicado desde el invierno». ¿Qué significa?', options: ['Su salud es débil desde el invierno.', 'Es una persona muy sensible.', 'Es un tema difícil de hablar.'], answer: 0, why: '«Estar delicado» (de salud) = débil, con problemas de salud.', en: '“Mi abuelo está delicado desde el invierno.” What does it mean?' },
            { prompt: 'En el hospital: «El conductor ___ grave, pero no corre peligro su vida». ¿Qué verbo?', options: ['está', 'tiene', 'es'], answer: 0, why: 'El estado de salud de una persona: estar grave.', en: 'At the hospital: “The driver is in a serious condition, but his life is not in danger.”' },
            { prompt: '«Esta planta todavía está viva, solo necesita agua». ¿Qué significa «está viva»?', options: ['Tiene colores intensos.', 'Es muy lista.', 'No ha muerto.'], answer: 2, why: '«Estar vivo» = no estar muerto. «Ser vivo» habla de una cualidad (ingenioso, intenso).', en: '“Esta planta todavía está viva, solo necesita agua.” What does “está viva” mean?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno escribe dos frases sobre una noticia o una situación de salud con «es grave» y «está grave», y explica la diferencia.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 122 · Orden de pronombres y clíticos más complejo', text: 'Hoy has hablado de personas y de cosas que están listas, ricas o verdes. En la cocina y en el trabajo, esas frases van muchas veces con pronombres: «La tarta ya **te la** dejo lista», «¿**Se lo** has dicho a Irene?», «Estoy segura de que **te lo** explica». En la clase 122 aprendes a combinar y colocar bien estos pronombres. Es el paso natural para hablar con frases ágiles y sin repetir.', en: 'Today you talked about people and about things that are ready, tasty or unripe. In the kitchen and at work, those sentences often come with pronouns: “I’ll leave the cake ready for you”, “Have you told Irene?”, “I’m sure she’ll explain it to you.” In class 122 you learn to combine and place these pronouns correctly. It is the natural next step to speak in smooth sentences without repeating yourself.', href: '/gramatica/orden-de-pronombres-y-cliticos-mas', label: 'Ir a la clase 122' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué persona de tu vida es muy lista? ¿Y cuándo fue la última vez que estuviste aburrido/a?». Respuesta esperada: una frase con ser y otra con estar, con el sentido correcto. Tarea: escribir el correo de Escribir sobre una persona real.' },
        ] },
      ],
    },
  ],
};
