import type { LiveLesson } from '../types';

/**
 * Lesson 380 · A2 · Formas de obligación: hay que, deber, tener que (course unit G080).
 * One scene runs through the class: Rosa Medina starts work as a guide in the
 * (fictional) Parque Natural Sierra Verde. Her coordinator, Ignacio Pardo, explains
 * her first day (tú): her own duties, the rules for visitors and some advice. Later
 * Rosa answers a visitor, señor Navarro (usted), and in the listening she records
 * the welcome announcement for visitors (one speaker, Mexican voice, ustedes).
 * Builds on class 040 (tener que + infinitivo): hay que + infinitivo (impersonal,
 * general, never with a person), tener que (a specific person, conjugated), deber +
 * infinitivo (what is right, advice, formal written rules; close to tener que in
 * the affirmative), and the key negative contrast: no hay que / no tienes que = not
 * necessary vs no debes = you shouldn't, it is not right (no se puede, class 076, =
 * not allowed). Note on «no hay que» in general advice (No hay que tener miedo).
 * Mistakes: *Tengo llegar, *Yo hay que trabajar, *Debo que hablar, *No tienes que
 * tocar (meaning prohibition). Ampliación: deber de + infinitivo = supposition
 * (DPD: keep «deber de» for supposition; «deber» alone is also accepted for it, but
 * «deber de» for obligation is not recommended) and the past: tuve que, había que.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 380,
  level: 'A2',
  title: 'Formas de obligación: hay que, deber, tener que',
  subtitle: 'Explicar normas, obligaciones y consejos con hay que, tener que y deber, y distinguir «no tienes que» de «no debes».',
  legend: [
    { tone: 'blue', label: 'HAY QUE · para todos, sin persona (in general, for everyone)' },
    { tone: 'orange', label: 'TENER QUE · una persona concreta (a specific person has to)' },
    { tone: 'teal', label: 'DEBER · lo correcto, un consejo, una norma (should, must)' },
    { tone: 'violet', label: 'NO ES NECESARIO · no hay que, no tienes que (don’t have to)' },
  ],
  optionNotes: {
    'debo que': '«Deber» va directamente con el infinitivo, sin «que»: **debo hablar**. Solo «tener» y «hay» llevan «que».',
    'debe que': '«Deber» va directamente con el infinitivo, sin «que»: **debe hablar**. Solo «tener» y «hay» llevan «que».',
    'debemos que': '«Deber» va directamente con el infinitivo, sin «que»: **debemos terminar**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Primer día en el parque', coach: 'Hay que, tienes que, debes. Three ways to say “must”.',
      steps: [
        { title: 'Rosa empieza a trabajar · Rosa starts work', blocks: [
          { kind: 'lead', text: 'Rosa Medina es guía nueva en el Parque Natural Sierra Verde. Hoy es su primer día. Su coordinador, Ignacio Pardo, le explica tres cosas: las normas para todos los visitantes, las obligaciones de Rosa y algunos consejos. Para eso usa tres formas: **hay que**, **tener que** y **deber**. En la clase 040 ya aprendiste «tengo que + infinitivo»; hoy amplías.', en: 'Rosa Medina is a new guide at the Sierra Verde Nature Park. Today is her first day. Her coordinator, Ignacio Pardo, explains three things to her: the rules for all visitors, Rosa’s duties and some advice. For that he uses three forms: hay que, tener que and deber. In class 040 you already learned “tengo que + infinitive”; today you go further.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Ignacio y tu alumno repite. Después tu alumno dice cuál es para todos, cuál es solo para Rosa y cuál es un consejo.', self: 'Lee las tres frases de Ignacio en voz alta. ¿Cuál es para todos? ¿Cuál es solo para Rosa? ¿Cuál es un consejo? (Which is for everyone, which is only for Rosa, which is advice?)' } },
          { kind: 'compare', title: 'Tres frases de Ignacio · Three of Ignacio’s sentences', columns: [
            { tone: 'blue', label: 'HAY QUE · para todos', sentence: '[[Hay que pagar|blue]] antes de entrar.', idea: 'Una norma general. No dice quién: es para todos.', en: 'You have to pay before going in. (a general rule, for everyone)' },
            { tone: 'orange', label: 'TENER QUE · una persona', sentence: 'Rosa, [[tienes que llegar|orange]] a las ocho.', idea: 'Una obligación de una persona concreta: Rosa.', en: 'Rosa, you have to arrive at eight. (Rosa’s duty)' },
            { tone: 'teal', label: 'DEBER · lo correcto', sentence: 'Con los grupos, [[debes hablar|teal]] despacio.', idea: 'Lo que está bien hacer: un consejo, una norma de buen guía.', en: 'With groups, you should speak slowly. (advice, the right thing to do)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Hay que pagar antes de entrar» es para…', options: ['todos los visitantes.', 'solo Rosa.', 'solo Ignacio.'], answer: 0, why: '«Hay que» no tiene persona: es una norma general, para todos.', en: '“Hay que pagar antes de entrar” is for…' },
            { prompt: '«Tienes que llegar a las ocho» es para…', options: ['Rosa, una persona concreta.', 'nadie: es un consejo.', 'todos los visitantes.'], answer: 0, why: '«Tienes» es tú: Ignacio habla con Rosa. Tener que se conjuga con la persona.', en: '“Tienes que llegar a las ocho” is for…' },
          ] },
        ] },
        { title: 'Hay que y tener que · General or personal', mascot: '/brand/mascot/studying.webp', coach: '¿Dices quién? Do you say who?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'HAY QUE + INFINITIVO', question: '¿Qué es necesario hacer aquí, en general?', en: 'What is it necessary to do here, in general?', formula: ['hay que + infinitivo', 'siempre igual: no cambia con la persona'],
            meaning: '**Hay que** presenta una obligación o una necesidad **general**: para todos, sin decir quién. Por eso no lleva sujeto y no cambia nunca: «hay que pagar», no «hayan que». Es muy frecuente en normas, instrucciones y consejos generales.',
            examples: [
              { es: 'En el parque [[hay que caminar|blue]] por los caminos marcados.', en: 'In the park you have to walk on the marked paths.' },
              { es: 'Para la ruta larga [[hay que llevar|blue]] botas.', en: 'For the long trail you need to wear boots.' },
              { es: 'Los sábados [[hay que reservar|blue]] la visita guiada.', en: 'On Saturdays you have to book the guided tour.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'TENER QUE + INFINITIVO', question: '¿Qué tiene que hacer una persona concreta?', en: 'What does a specific person have to do?', formula: ['tengo · tienes · tiene… + que + infinitivo', 'la persona está en el verbo tener'],
            meaning: 'Con **tener que** dices **quién** tiene la obligación: yo, tú, Rosa, los visitantes. Ya lo conoces de la clase 040. Al hablar, es la forma más frecuente para las obligaciones personales.',
            examples: [
              { es: 'Mañana [[tengo que abrir|orange]] el centro de visitantes.', en: 'Tomorrow I have to open the visitor centre.' },
              { es: 'Los visitantes con perro [[tienen que llevarlo|orange]] con correa.', en: 'Visitors with a dog have to keep it on a lead.' },
            ] },
          { kind: 'decide', title: '¿Hay que o tener que?', steps: [
            { q: '¿Dices quién tiene la obligación? (yo, tú, Rosa, los niños…)', yes: 'Usa **tener que**, conjugado: «Rosa tiene que llegar a las ocho».', no: 'next' },
            { q: '¿Es una norma o una necesidad para todos, en general?', yes: 'Usa **hay que**: «Hay que pagar antes de entrar».', no: 'Piensa otra vez: ¿quién tiene que hacerlo? (Who has to do it?)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Para ver los lagos ___ subir dos horas.', options: ['tienes', 'hay que', 'hay'], answer: 1, why: 'Una necesidad general, sin persona: hay que + infinitivo. «Tienes» necesita «que».', en: 'To see the lakes you have to climb for two hours.' },
            { prompt: 'Ignacio ___ hablar con el grupo del colegio.', options: ['tiene', 'hay que', 'tiene que'], answer: 2, why: 'Hay una persona concreta, Ignacio: tiene que. «Hay que» no puede llevar sujeto.', en: 'Ignacio has to talk to the school group.' },
          ] },
        ] },
        { title: 'Deber · What is right', mascot: '/brand/mascot/standing.webp', coach: 'Deber, sin «que». Deber, no “que”.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DEBER + INFINITIVO', question: '¿Qué está bien hacer? ¿Qué es lo correcto?', en: 'What is the right thing to do?', formula: ['debo · debes · debe… + infinitivo', 'sin «que»: debes hablar'],
            meaning: 'Con **deber** dices lo que es **correcto** o **recomendable**: consejos, normas de buen comportamiento y normas escritas formales («Los visitantes deben…»). En frases afirmativas, deber y tener que se parecen mucho: «Debes / Tienes que llegar a las ocho» son correctas las dos. Al hablar, «tener que» es más frecuente; «deber» suena a consejo o a norma.',
            examples: [
              { es: 'Si el grupo es grande, [[debes hablar|teal]] alto y claro.', en: 'If the group is big, you should speak loudly and clearly.' },
              { es: 'Los visitantes [[deben respetar|teal]] las plantas y los animales.', en: 'Visitors must respect the plants and the animals.' },
            ],
            note: 'Ojo: **deber de** + infinitivo es otra cosa, una suposición («Debe de estar en casa» = probablemente está en casa). Lo ves en la Ampliación del final.' },
          { kind: 'table', title: 'Las formas · The forms', head: ['Persona', 'tener que', 'deber', '+ infinitivo'], rows: [
            ['yo', '**tengo que**', '**debo**', 'llegar'],
            ['tú', '**tienes que**', '**debes**', 'llegar'],
            ['vos', '**tenés que**', '**debés**', 'llegar'],
            ['usted, él, ella', '**tiene que**', '**debe**', 'llegar'],
            ['nosotros, nosotras', '**tenemos que**', '**debemos**', 'llegar'],
            ['vosotros, vosotras', '**tenéis que**', '**debéis**', 'llegar'],
            ['ustedes, ellos, ellas', '**tienen que**', '**deben**', 'llegar'],
            ['(nadie: para todos)', '**hay que**', '—', 'llegar'],
          ], note: '«Vos» es la forma de Argentina, Uruguay y otras zonas de América; «vosotros» es la forma de España (clase 021). **Hay que** no cambia nunca: no tiene persona. (Hay que never changes.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ignacio dice: «Rosa, ___ contar a los visitantes al final de la ruta».', options: ['deber', 'debes', 'debes que'], answer: 1, why: 'Deber + infinitivo, sin «que», conjugado con tú: debes contar.', en: 'Ignacio says: “Rosa, you should count the visitors at the end of the trail.”' },
            { prompt: 'Nosotros ___ cerrar la puerta del centro a las seis.', options: ['hay que', 'debemos que', 'debemos'], answer: 2, why: 'Una persona concreta (nosotros) y una obligación: debemos cerrar. «Hay que» no lleva sujeto; deber no lleva «que».', en: 'We must close the door of the centre at six.' },
          ] },
        ] },
        { title: 'Con «no» cambia todo · With “no” everything changes', mascot: '/brand/mascot/speaking.webp', coach: 'No es necesario ≠ no está bien.', blocks: [
          { kind: 'compare', title: 'Tres negativas · Three negatives', columns: [
            { tone: 'violet', label: 'NO HAY QUE · no es necesario', sentence: 'Entre semana [[no hay que reservar|violet]].', idea: 'Para nadie es necesario: siempre hay sitio.', en: 'On weekdays you don’t have to book. (it isn’t necessary)' },
            { tone: 'violet', label: 'NO TIENES QUE · no es necesario', sentence: 'Hoy [[no tienes que llevar|violet]] uniforme.', idea: 'Para ti no es necesario. Puedes, pero no es obligatorio.', en: 'Today you don’t have to wear a uniform. (it isn’t necessary for you)' },
            { tone: 'teal', label: 'NO DEBES · no está bien', sentence: '[[No debes dar|teal]] comida a los animales.', idea: 'No es correcto, es malo: es mejor no hacerlo.', en: 'You mustn’t feed the animals. (it is wrong)' },
          ] },
          { kind: 'tip', icon: '🔑', title: '«No tienes que» no es «mustn’t»', text: '**No tienes que** pagar = no es necesario (don’t have to). **No debes** tocar las plantas = no está bien (mustn’t, shouldn’t). Para una prohibición clara también tienes **no se puede** (clase 076): «Aquí no se puede fumar». Ojo: en consejos generales, «no hay que» a veces significa «no es buena idea»: «No hay que tener miedo» (there is no need to be afraid / you shouldn’t be afraid).', en: '“No tienes que pagar” = it is not necessary. “No debes tocar las plantas” = it is not right. For a clear prohibition you also have “no se puede” (class 076). Careful: in general advice, “no hay que” sometimes means “it is not a good idea”: “No hay que tener miedo”.' },
          { kind: 'decide', title: '¿Qué negativa uso? · Which negative?', steps: [
            { q: '¿Quieres decir que algo no es necesario? (It is optional, there is no need.)', yes: 'Usa **no hay que** (en general) o **no tener que** (una persona): «No tienes que reservar».', no: 'next' },
            { q: '¿Quieres decir que algo no está bien o está prohibido?', yes: 'Usa **no deber** («No debes tocar las plantas») o **no se puede** («Aquí no se puede fumar»).', no: 'Piensa en el sentido: ¿opcional o malo? (Optional or wrong?)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosa vive cerca del parque, así que ___ tomar el autobús: va a pie.', options: ['no hay', 'no tiene que', 'no debe'], answer: 1, why: 'No es necesario para Rosa: no tiene que. «No debe» significa que no está bien.', en: 'Rosa lives near the park, so she doesn’t have to take the bus: she walks.' },
            { prompt: 'Las flores del parque son para todos: ___ cortarlas.', options: ['no tienes que', 'no debes', 'no hay'], answer: 1, why: 'Cortar flores no está bien: no debes. «No tienes que» = no es necesario.', en: 'The park flowers are for everyone: you mustn’t pick them.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde falla? Where does it go wrong?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿falta «que», sobra «que», hay una persona o cambia el sentido? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿falta «que», sobra «que» o cambia el sentido? Toca para ver la corrección. (What is wrong?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Tengo llegar a las ocho.', right: 'Tengo que llegar a las ocho.', why: 'Tener necesita «que» antes del infinitivo: tengo **que** llegar. (Tener needs que.)' },
            { wrong: 'Debo que hablar con Ignacio.', right: 'Debo hablar con Ignacio.', why: 'Deber va directamente con el infinitivo, sin «que». (Deber takes no que.)' },
            { wrong: 'Yo hay que trabajar el sábado.', right: 'Yo tengo que trabajar el sábado.', why: '«Hay que» no tiene persona. Si dices quién, usa tener que. (Hay que has no subject.)' },
            { wrong: 'Hay que pagamos antes de entrar.', right: 'Hay que pagar antes de entrar.', why: 'Después de «hay que» va el infinitivo: pagar. (Infinitive after hay que.)' },
            { wrong: 'No tienes que tocar a los animales: es peligroso.', right: 'No debes tocar a los animales: es peligroso.', why: '«No tienes que» = no es necesario. Para «no está bien, es peligroso», usa no debes. (Not necessary ≠ mustn’t.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mañana nosotros ___ salir temprano.', options: ['hay que', 'tenemos', 'tenemos que'], answer: 2, why: 'Una persona concreta (nosotros) + obligación: tenemos que salir. «Tenemos» solo, sin «que», no funciona.', en: 'Tomorrow we have to leave early.' },
            { prompt: 'El agua del río no está limpia: no ___ beberla.', options: ['hay', 'debes', 'tienes que'], answer: 1, why: 'Beberla es malo: no debes. «No tienes que» significa «no es necesario».', en: 'The river water isn’t clean: you mustn’t drink it.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales sobre su trabajo o sus estudios: una con «hay que», una con «tengo que» y una con «no tengo que».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Ignacio explica el primer día', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En el centro de visitantes · At the visitor centre', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Ignacio y tu alumno es Rosa. Después tu alumno toca cada forma marcada y dice si es para todos, para una persona, un consejo o algo no necesario.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada: ¿para todos, para una persona, un consejo o no es necesario? (For everyone, one person, advice or not necessary?)' } },
          { kind: 'explore', title: 'Bienvenida al parque', setting: 'Lunes, ocho de la mañana, en el centro de visitantes del Parque Natural Sierra Verde. Ignacio, el coordinador, habla con Rosa, la guía nueva. Se tratan de tú. (Monday, 8 a.m., at the visitor centre. Ignacio, the coordinator, talks to Rosa, the new guide.)', lines: [
            { who: 'Ignacio', text: 'Bienvenida, Rosa. Primero, el horario: [[tienes que llegar|orange]] a las ocho, porque el parque abre a las nueve.', en: 'Welcome, Rosa. First, the timetable: you have to arrive at eight, because the park opens at nine.' },
            { who: 'Rosa', text: 'Perfecto. ¿Y qué [[tengo que hacer|orange]] antes de abrir?', en: 'Perfect. And what do I have to do before opening?' },
            { who: 'Ignacio', text: 'Revisar los caminos y abrir la taquilla. Los visitantes pagan allí: [[hay que pagar|blue]] antes de entrar.', en: 'Check the paths and open the ticket office. Visitors pay there: you have to pay before going in.' },
            { who: 'Rosa', text: '¿Todos? ¿También los niños?', en: 'Everyone? Children too?' },
            { who: 'Ignacio', text: 'No, los menores de doce años [[no tienen que pagar|violet]].', en: 'No, children under twelve don’t have to pay.' },
            { who: 'Rosa', text: '¿Y [[hay que reservar|blue]] la visita guiada?', en: 'And do you have to book the guided tour?' },
            { who: 'Ignacio', text: 'Los fines de semana, sí. Entre semana [[no hay que reservar|violet]]: siempre hay sitio.', en: 'At weekends, yes. On weekdays you don’t have to book: there is always room.' },
            { who: 'Rosa', text: 'Muy bien. ¿Algún consejo para los grupos?', en: 'Very good. Any advice for the groups?' },
            { who: 'Ignacio', text: 'Sí: [[debes hablar|teal]] despacio y [[debes contar|teal]] a las personas al principio y al final de la ruta.', en: 'Yes: you should speak slowly and you should count the people at the start and at the end of the trail.' },
            { who: 'Rosa', text: '¿Y si un niño quiere dar comida a los ciervos?', en: 'And what if a child wants to feed the deer?' },
            { who: 'Ignacio', text: 'Le explicas la norma: los visitantes [[no deben dar|teal]] comida a los animales. Ah, y hoy [[no tienes que llevar|violet]] uniforme: llega el miércoles.', en: 'You explain the rule: visitors mustn’t feed the animals. Oh, and today you don’t have to wear a uniform: it arrives on Wednesday.' },
          ], notes: {
            'tienes que llegar': 'Tener que con tú: una obligación de Rosa, una persona concreta. Es su horario de trabajo.',
            'tengo que hacer': 'Rosa pregunta por sus obligaciones: ¿qué **tengo que** hacer? Tener que con yo.',
            'hay que pagar': 'Norma general, para todos los visitantes: **hay que** + infinitivo. No dice quién.',
            'no tienen que pagar': 'No es necesario para los niños: **no tienen que**. Pueden entrar gratis. No significa «está prohibido».',
            'hay que reservar': 'Pregunta general: ¿es necesario reservar, para todos? **Hay que** + infinitivo.',
            'no hay que reservar': 'No es necesario, para nadie: **no hay que**. Entre semana es opcional.',
            'debes hablar': 'Un consejo de buen guía: **deber** + infinitivo, sin «que». Lo correcto con un grupo.',
            'debes contar': 'Otro consejo, una buena costumbre: debes contar (you should count). Deber, sin «que».',
            'no deben dar': 'No está bien: es malo para los animales. **No deben** = mustn’t, una norma del parque.',
            'no tienes que llevar': 'No es necesario hoy: **no tienes que**. Rosa puede ir con su ropa.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Rosa tiene que llegar a las ocho?', options: ['Porque tiene que reservar la visita.', 'Porque el parque abre a las nueve.', 'Porque hay un grupo a las ocho.'], answer: 1, why: '«Tienes que llegar a las ocho, porque el parque abre a las nueve».', en: 'Why does Rosa have to arrive at eight?' },
            { prompt: '¿Cuándo es necesario reservar la visita guiada?', options: ['Los fines de semana.', 'Nunca.', 'Todos los días.'], answer: 0, why: '«Los fines de semana, sí. Entre semana no hay que reservar».', en: 'When is it necessary to book the guided tour?' },
            { prompt: '¿Por qué Rosa no lleva uniforme hoy?', options: ['Porque no le gusta.', 'Porque está prohibido.', 'Porque el uniforme llega el miércoles.'], answer: 2, why: '«Hoy no tienes que llevar uniforme: llega el miércoles». No es necesario hoy.', en: 'Why isn’t Rosa wearing a uniform today?' },
          ] },
        ] },
        { title: '¿Para quién y con qué sentido? · For whom, and what meaning?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases de Ignacio · Ignacio’s sentences', categories: [
            { id: 'todos', label: 'PARA TODOS · hay que', tone: 'blue' },
            { id: 'persona', label: 'UNA PERSONA · tener que', tone: 'orange' },
            { id: 'correcto', label: 'LO CORRECTO · deber', tone: 'teal' },
            { id: 'opcional', label: 'NO ES NECESARIO', tone: 'violet' },
          ], items: [
            { text: 'Hay que pagar antes de entrar.', answer: 'todos', why: 'Norma general sin persona: hay que.' },
            { text: 'Tienes que llegar a las ocho.', answer: 'persona', why: 'Obligación de Rosa (tú): tienes que.' },
            { text: 'Debes hablar despacio.', answer: 'correcto', why: 'Un consejo, lo que está bien: debes.' },
            { text: 'Entre semana no hay que reservar.', answer: 'opcional', why: 'Para nadie es necesario: no hay que.' },
            { text: 'Los menores de doce años no tienen que pagar.', answer: 'opcional', why: 'Para los niños no es necesario: no tienen que.' },
            { text: 'Los visitantes no deben dar comida a los animales.', answer: 'correcto', why: 'No está bien: no deben. Es una norma de buen comportamiento.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué tiene que hacer Rosa antes de abrir? ¿Qué no tiene que hacer hoy?». Tu alumno responde con dos frases completas.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Para todos, para una persona, lo correcto.',
      steps: [
        { title: 'La libreta de Rosa · Rosa’s notebook', blocks: [
          { kind: 'choice', items: [
            { context: 'Rosa escribe las normas en su libreta. (Rosa writes the rules in her notebook.)', prompt: 'En el parque ___ caminar por los caminos marcados.', options: ['hay', 'tiene', 'hay que'], answer: 2, why: 'Norma general, sin persona: hay que + infinitivo. «Hay» y «tiene» solos no llevan infinitivo.', en: 'In the park you have to walk on the marked paths.' },
            { context: 'Sus tareas de mañana. (Her tasks for tomorrow.)', prompt: 'Mañana yo ___ abrir la taquilla a las ocho y media.', options: ['tengo que', 'hay que', 'debo que'], answer: 0, why: 'Una persona concreta (yo): tengo que. «Hay que» no lleva sujeto; deber no lleva «que».', en: 'Tomorrow I have to open the ticket office at half past eight.' },
            { context: 'Un consejo de Ignacio. (Advice from Ignacio.)', prompt: 'Con los grupos grandes, ___ hablar alto y claro.', options: ['debes que', 'hay', 'debes'], answer: 2, why: 'Un consejo para Rosa: debes + infinitivo, sin «que».', en: 'With big groups, you should speak loudly and clearly.' },
            { context: 'Las reservas. (Bookings.)', prompt: 'Los sábados ___ reservar la visita guiada, porque viene mucha gente.', options: ['tienen', 'hay que', 'no hay que'], answer: 1, why: 'El sábado es necesario para todos: hay que reservar. «No hay que» diría lo contrario.', en: 'On Saturdays you have to book the guided tour, because a lot of people come.' },
            { context: 'Para las familias. (For families.)', prompt: 'Las familias con perro ___ llevarlo con correa.', options: ['hay que', 'tienen de', 'tienen que'], answer: 2, why: 'Hay un sujeto (las familias): tienen que. «Tener de» no se usa así.', en: 'Families with a dog have to keep it on a lead.' },
          ] },
        ] },
        { title: '¿Opcional o malo? · Optional or wrong?', blocks: [
          { kind: 'classify', title: 'Frases negativas · Negative sentences', categories: [
            { id: 'opcional', label: 'NO ES NECESARIO · no hay que, no tener que', tone: 'violet' },
            { id: 'malo', label: 'NO ESTÁ BIEN · no deber', tone: 'teal' },
          ], items: [
            { text: 'Hoy no tienes que madrugar: el parque abre a las once.', answer: 'opcional', why: 'Puedes dormir más: no es necesario madrugar.' },
            { text: 'No debes tirar papeles en el camino.', answer: 'malo', why: 'Tirar papeles está mal: no debes.' },
            { text: 'Con la entrada de adulto no hay que pagar el aparcamiento.', answer: 'opcional', why: 'El aparcamiento está incluido: no es necesario pagarlo.' },
            { text: 'Los visitantes no deben salir del camino marcado.', answer: 'malo', why: 'Es peligroso y daña las plantas: no deben.' },
            { text: 'No tenemos que llevar comida: hay cafetería.', answer: 'opcional', why: 'Hay cafetería, así que no es necesario llevar comida.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Yo tengo trabajar el sábado.', ok: false, options: ['Yo tengo de trabajar el sábado.', 'Yo tengo que trabajar el sábado.', 'Yo hay que trabajar el sábado.'], answer: 1, why: 'Tener + **que** + infinitivo. «Hay que» no lleva sujeto (yo).' },
            { sentence: 'Hay que llevar botas para la ruta larga.', ok: true, why: 'Correcta: necesidad general, sin persona: hay que + infinitivo.' },
            { sentence: 'Rosa debe que hablar con el grupo.', ok: false, options: ['Rosa debe hablar con el grupo.', 'Rosa hay que hablar con el grupo.', 'Rosa deber hablar con el grupo.'], answer: 0, why: 'Deber + infinitivo, sin «que», conjugado: Rosa debe hablar.' },
            { sentence: 'Aquí no tienes que fumar: está prohibido.', ok: false, options: ['Aquí tienes no fumar: está prohibido.', 'Aquí no debes fumar: está prohibido.', 'Aquí no tienes fumar: está prohibido.'], answer: 1, why: 'Está prohibido, no es opcional: no debes. «No tienes que» = no es necesario.' },
            { sentence: 'Los niños menores de doce años no tienen que pagar.', ok: true, why: 'Correcta: para los niños no es necesario pagar. No tienen que = don’t have to.' },
          ] },
        ] },
        { title: 'Rosa en la taquilla · Rosa at the ticket office', blocks: [
          { kind: 'chat-fill', title: 'Un visitante pregunta · A visitor asks', lines: [
            { who: 'Señor Navarro', text: 'Buenos días. ¿___ pagar aquí?', options: ['Tengo', 'Debo que', 'Hay que'], answer: 2, why: 'Pregunta general por la norma: ¿hay que pagar? «Tengo» necesita «que»; deber no lleva «que».' },
            { who: 'Rosa', text: 'Sí, aquí mismo, antes de entrar.' },
            { who: 'Señor Navarro', text: 'Mis hijos tienen ocho y diez años. ¿Ellos también ___ pagar?', options: ['tienen que', 'hay que', 'deben de'], answer: 0, why: 'Hay sujeto (ellos): tienen que. «Hay que» no lleva sujeto; «deben de» es para suposiciones.' },
            { who: 'Rosa', text: 'No, los niños menores de doce años ___ pagar.', options: ['no deben', 'no hay que', 'no tienen que'], answer: 2, why: 'Para los niños no es necesario: no tienen que. «No deben» diría que pagar está mal.' },
            { who: 'Señor Navarro', text: '¡Qué bien! ¿Y ___ reservar la visita guiada?', options: ['hay que', 'debemos que', 'tenemos'], answer: 0, why: 'Pregunta general: ¿es necesario reservar? Hay que reservar.' },
            { who: 'Rosa', text: 'Hoy no: es martes y hay sitio. Pero un consejo: con niños, ustedes ___ llevar agua y gorra.', options: ['no tienen que', 'deben', 'deben de'], answer: 1, why: 'Un consejo, lo correcto: deben llevar. «Deben de» expresa una suposición.' },
            { who: 'Señor Navarro', text: '¿Y el perro? ¿Puede venir con nosotros?' },
            { who: 'Rosa', text: 'Sí, pero usted ___ llevarlo con correa todo el tiempo.', options: ['hay', 'debe que', 'tiene que'], answer: 2, why: 'Obligación del señor Navarro (usted): tiene que. «Hay» necesita «que».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['que', 'Hay', 'antes', 'pagar', 'de', 'entrar.'], accept: ['Hay que pagar antes de entrar.'], en: 'You have to pay before going in.' },
            { tiles: ['tiene', 'Rosa', 'que', 'llegar', 'a', 'las', 'ocho.'], accept: ['Rosa tiene que llegar a las ocho.'], en: 'Rosa has to arrive at eight.' },
            { tiles: ['debes', 'No', 'dar', 'comida', 'a', 'los', 'animales.'], accept: ['No debes dar comida a los animales.'], en: 'You mustn’t feed the animals.' },
            { tiles: ['no', 'Hoy', 'hay', 'que', 'reservar', 'la', 'visita.'], accept: ['Hoy no hay que reservar la visita.', 'No hay que reservar hoy la visita.'], en: 'Today you don’t have to book the tour.' },
          ] },
        ] },
        { title: 'Escribe la norma · Write the rule', blocks: [
          { kind: 'rewrite', title: 'Hay que, tener que, deber · Rewrite', items: [
            { prompt: 'Es necesario para todos los visitantes: llevar agua.', instruction: 'Escribe una norma general con «hay que». (A general rule with hay que.)', accept: ['Hay que llevar agua'] },
            { prompt: 'Rosa: es necesario abrir el centro a las ocho y media.', instruction: 'Escribe la obligación de Rosa con tener que. Empieza con «Rosa».', accept: ['Rosa tiene que abrir el centro a las ocho y media'] },
            { prompt: 'Para ti no es necesario traer comida: hay cafetería.', instruction: 'Usa «no tener que» con tú. Empieza con «No». (Not necessary for you.)', accept: ['No tienes que traer comida: hay cafetería', 'No tienes que traer comida porque hay cafetería', 'No tienes que traer comida, hay cafetería'] },
            { prompt: 'Para los visitantes no está bien salir del camino.', instruction: 'Usa «no deber». Empieza con «Los visitantes». (It is not right.)', accept: ['Los visitantes no deben salir del camino'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica tres normas de un lugar que conoce bien (su trabajo, su edificio, su gimnasio): una con «hay que», una con «no hay que» y una con «no debes».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El aviso de bienvenida', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Rosa graba el aviso · Rosa records the announcement', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué tipo de mensaje es?). Segunda escucha: tu alumno levanta la mano con cada «hay que» o «tienen que», y dice «no» en voz alta con cada negativa. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las normas: ¿cuáles son obligatorias y cuáles no son necesarias? (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Aviso para los visitantes', channel: 'AVISO GRABADO · ENTRADA DEL PARQUE', src: '/audio/grammar-live/380.mp3',
            before: 'Rosa graba un aviso para los visitantes que llegan al parque. ¿Qué normas crees que explica: pagar, reservar, los animales, el agua…? (Rosa records a message for visitors. Which rules do you think she explains?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Rosa cuenta su primer día de trabajo.', 'Rosa dice que el parque está cerrado hoy.', 'Rosa explica las normas del parque antes de la ruta.'], answer: 2, why: '«Antes de empezar, unas normas importantes»: pagar, llevar agua, los caminos, los animales, los perros, la visita.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Dónde hay que pagar la entrada?', options: ['En la cafetería.', 'En la taquilla, antes de entrar.', 'En el centro de visitantes, al final.'], answer: 1, why: '«Hay que pagar la entrada en la taquilla antes de entrar al parque».', en: 'Where do you have to pay for the ticket?' },
              { prompt: '¿Por qué hay que llevar agua?', options: ['Porque la cafetería está cerrada.', 'Porque hace mucho calor.', 'Porque en la ruta no hay fuentes.'], answer: 2, why: '«Hay que llevar agua, porque en la ruta no hay fuentes».', en: 'Why do you have to bring water?' },
              { prompt: '¿Qué tienen que hacer las personas con perro?', options: ['Pagar una entrada para el perro.', 'Llevarlo con correa.', 'Dejarlo en el coche.'], answer: 1, why: '«Si vienen con perro, tienen que llevarlo con correa».', en: 'What do people with a dog have to do?' },
              { prompt: '¿Por qué hoy no hay que reservar la visita guiada?', options: ['Porque es gratis.', 'Porque hoy no hay visitas.', 'Porque es martes y hay sitio.'], answer: 2, why: '«Hoy es martes, así que no hay que reservar la visita guiada».', en: 'Why don’t you have to book the guided tour today?' },
            ],
            transcript: 'Buenos días y bienvenidos al Parque Natural Sierra Verde. Soy Rosa, una de las guías del parque. Antes de empezar, unas normas importantes. Primero, [[hay que pagar|blue]] la entrada en la taquilla antes de entrar al parque. Los niños menores de doce años [[no tienen que pagar|violet]]. También [[hay que llevar|blue]] agua, porque en la ruta no hay fuentes. Todos los visitantes [[deben caminar|teal]] solo por los caminos marcados con flechas verdes. Y algo muy importante: [[no deben dar|teal]] comida a los animales, porque es malo para ellos. Si vienen con perro, [[tienen que llevarlo|orange]] con correa. Y una buena noticia: hoy es martes, así que [[no hay que reservar|violet]] la visita guiada. Sale cada hora desde el centro de visitantes. Muchas gracias y buena ruta.',
            reply: { teacher: 'Tú eres un visitante con dudas. Tu alumno es Rosa y responde a tres preguntas: «¿Mi hija de diez años tiene que pagar?», «¿Hay que reservar la visita?», «¿Puedo dar pan a los patos?».', self: 'Responde en voz alta como Rosa a tres visitantes: «¿Mi hija de diez años tiene que pagar?», «¿Hay que reservar la visita?», «¿Puedo dar pan a los patos?». (Answer three visitors as Rosa.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Normas, obligaciones y consejos', coach: 'Hay que, tengo que, debes. Speak!',
      steps: [
        { title: 'Tus normas · Your rules', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases completas. Si dice «no tienes que» para algo prohibido, tú preguntas: «¿No es necesario o no está bien?», y tu alumno corrige.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Antes de una negativa, piensa: ¿no es necesario o no está bien? (Not necessary, or not right?)' } },
          { kind: 'talk', cards: [
            { q: 'Eres guía en el parque. Un visitante pregunta: «¿Qué hay que hacer antes de entrar?». · You are a guide. A visitor asks what you have to do before going in.', followUps: ['¿Y los niños también tienen que pagar? (Do children have to pay too?)', '¿Hay que reservar algo? (Do you have to book anything?)'], phrases: ['Primero, [[hay que|blue]]…', 'Los niños [[no tienen que|violet]]…', 'Entre semana [[no hay que|violet]]…'], hint: 'Normas para todos: hay que. Lo que no es necesario: no hay que, no tienen que.', example: 'Primero hay que pagar la entrada en la taquilla. Los niños menores de doce años no tienen que pagar. Entre semana no hay que reservar la visita.', next: 'Ahora, un lugar que tú conoces.' },
            { q: 'Piensa en tu trabajo, tu escuela o tu edificio. ¿Qué hay que hacer allí? ¿Qué no se puede hacer? · Think of your work, school or building: what are the rules?', followUps: ['¿Hay que llegar a una hora fija? (Do you have to arrive at a fixed time?)', '¿Hay alguna norma rara? (Is there a strange rule?)'], phrases: ['En mi trabajo [[hay que|blue]]…', 'Allí no se puede…', '[[No hay que|violet]]…, es opcional.'], hint: 'Normas generales con hay que. Prohibiciones con no se puede.', example: 'En mi oficina hay que llegar a las nueve y hay que llevar la tarjeta. No se puede comer en las salas de reuniones. No hay que llevar traje: es opcional.', next: 'Ahora, tu semana.' },
            { q: '¿Qué tienes que hacer esta semana? ¿Y qué no tienes que hacer? · What do you have to do this week, and what don’t you have to do?', followUps: ['¿Qué tienes que hacer mañana temprano? (What do you have to do early tomorrow?)', '¿Qué es la mejor noticia: qué no tienes que hacer? (What is the good news?)'], phrases: ['Esta semana [[tengo que|orange]]…', 'El viernes [[no tengo que|violet]]…', 'Mi familia y yo [[tenemos que|orange]]…'], hint: 'Tus obligaciones: tengo que. Lo que no es necesario: no tengo que.', example: 'Esta semana tengo que terminar un informe y tengo que ir al médico. El viernes no tengo que trabajar, porque es fiesta.', next: 'Ahora, consejos.' },
            { q: 'Un amigo empieza un trabajo nuevo el lunes. ¿Qué consejos le das? · A friend starts a new job on Monday. What advice do you give?', followUps: ['¿Qué no debe hacer el primer día? (What shouldn’t he do on day one?)', '¿Qué tiene que llevar? (What does he have to bring?)'], phrases: ['[[Debes|teal]] llegar un poco antes.', '[[No debes|teal]]…', '[[Tienes que|orange]] llevar…'], hint: 'Consejos y lo correcto: debes, no debes. Obligaciones concretas: tienes que.', example: 'Debes llegar un poco antes y debes preguntar mucho. No debes usar el móvil en las reuniones. Tienes que llevar tu documento de identidad.', next: 'Ahora, tu país.' },
            { q: 'En tu país o tu ciudad, ¿qué hay que hacer y qué no hay que hacer? (propinas, documentos, transporte) · In your country, what do you have to do, and what don’t you have to do?', followUps: ['¿Hay que dejar propina en los restaurantes? (Do you have to tip?)', '¿Hay que llevar siempre un documento? (Do you always have to carry ID?)'], phrases: ['En mi país [[hay que|blue]]…', '[[No hay que|violet]]…', 'Los turistas [[deben|teal]]…'], hint: 'Lo general con hay que. Un consejo para turistas con deben.', example: 'En mi país hay que dejar propina en los restaurantes, más o menos un diez por ciento. No hay que llevar siempre el pasaporte. Los turistas deben tener cuidado en el metro.', teacher: 'Compara con tu país: «En mi país no hay que…». Así tu alumno oye otra vez el contraste.' },
            { q: 'Ahora tú eres Ignacio. Explica a un guía nuevo su primer día: horario, tareas, normas y consejos. · Now you are Ignacio: explain the first day to a new guide.', followUps: ['¿Tengo que llevar uniforme? (Do I have to wear a uniform?)', '¿Qué hago si un visitante sale del camino? (What if a visitor leaves the path?)'], phrases: ['[[Tienes que|orange]] llegar a…', 'Los visitantes [[deben|teal]]… / [[no deben|teal]]…', 'Hoy [[no tienes que|violet]]…'], hint: 'Mezcla las cuatro formas: tienes que, hay que, debes, no tienes que.', example: 'Tienes que llegar a las ocho y tienes que abrir la taquilla. Hay que revisar los caminos antes de abrir. Debes hablar despacio con los grupos. Hoy no tienes que llevar uniforme.', teacher: 'Tú eres el guía nuevo y haces preguntas: «¿Y si llueve? ¿Tengo que hacer la ruta?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué tienes que hacer esta semana?», «¿Qué hay que hacer en tu trabajo?») y tú respondes. Tu alumno revisa tus negativas.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué hay que hacer en tu trabajo?») y responde como Ignacio. (Now ask the questions and answer as Ignacio.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo con las normas', coach: 'Normas, obligaciones, consejos. Rules, duties, advice.',
      steps: [
        { title: 'Un correo para una profesora · An email to a teacher', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada forma: ¿para todos (hay que), para una persona (tener que), un consejo (deber) o algo no necesario? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada negativa: ¿no es necesario o no está bien? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Información para una visita · Information for a visit', situation: 'Eres Rosa. La profesora Elena Ruiz va a visitar el parque el jueves con veinticinco alumnos de diez años y pregunta qué tienen que saber. Escríbele un correo con las normas, las obligaciones y algún consejo. Usa usted con ella. (You are Rosa. A teacher, Elena Ruiz, is visiting the park on Thursday with 25 ten-year-old pupils. Write her an email with the rules, the duties and some advice.)', task: [
            'Saluda y di para qué escribes. (Greet her and say why you are writing.)',
            'Explica dos normas generales con «hay que». (Two general rules with hay que.)',
            'Di qué tienen que hacer o llevar los alumnos o la profesora, con «tener que». (What they have to do or bring.)',
            'Di una cosa que no es necesaria (no hay que / no tienen que) y una cosa que no deben hacer. (Something not necessary and something they mustn’t do.)',
            'Da un consejo con «deben» y despídete. (Give advice with deben and say goodbye.)',
          ], starters: ['Estimada profesora Ruiz:', 'Gracias por su correo. Le explico…', 'Hay que…', 'Los alumnos tienen que…', 'No hay que… / No tienen que…', 'Los alumnos no deben…', 'Un consejo: …', 'Un saludo cordial,'],
            words: ['hay que', 'no hay que', 'tiene que', 'tienen que', 'no tienen que', 'deben', 'no deben', 'llegar', 'pagar', 'llevar', 'reservar', 'la entrada', 'la ruta', 'la taquilla'],
            model: 'Estimada profesora Ruiz: Gracias por su correo. Le explico lo más importante para la visita del jueves. [[Hay que llegar|blue]] a las nueve y media, porque la ruta empieza a las diez. Los alumnos [[no tienen que pagar|violet]] la entrada, porque son menores de doce años, pero usted y los otros profesores [[tienen que pagar|orange]] en la taquilla. Cada alumno [[tiene que llevar|orange]] agua y una gorra. [[No hay que reservar|violet]] la visita guiada: el jueves hay sitio. Una norma importante: los alumnos [[no deben dar|teal]] comida a los animales. Y un consejo: [[deben llevar|teal]] zapatos cómodos, porque la ruta es larga. Un saludo cordial, Rosa Medina, guía del Parque Natural Sierra Verde.',
            minWords: 60,
            checks: [
              { label: 'Una norma general con «hay que» (a general rule)', pattern: '(?<!\\p{L})hay\\s+que\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Escribe una norma para todos: «Hay que llegar a las nueve y media».' },
              { label: 'Una obligación personal con «tener que» (a personal duty)', pattern: '(?<!\\p{L})(?:tengo|tienes|tiene|tenemos|tienen)\\s+que(?!\\p{L})', tip: 'Di quién tiene que hacer algo: «Cada alumno tiene que llevar agua».' },
              { label: '«Deber» + infinitivo (advice or a rule)', pattern: '(?<!\\p{L})(?:debo|debes|debe|debemos|deben)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Da un consejo o una norma: «Los alumnos deben llevar zapatos cómodos».' },
              { label: 'Algo no necesario: no hay que / no tienen que (something not necessary)', pattern: '(?<!\\p{L})no\\s+(?:hay|tengo|tienes|tiene|tenemos|tienen)\\s+que(?!\\p{L})', tip: 'Di algo que no es necesario: «No hay que reservar la visita».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:debo|debes|debe|debemos|deben)\\s+que(?!\\p{L})', why: '«Deber» va sin «que»: **deben llevar**, no «deben que llevar».' },
              { pattern: '(?<!\\p{L})(?:tengo|tienes|tiene|tenemos|tienen)\\s+(?:llegar|pagar|llevar|reservar|traer|hacer|ir)(?!\\p{L})', why: 'Tener necesita «que»: **tienen que llevar**.' },
              { pattern: '(?<!\\p{L})hayan\\s+que(?!\\p{L})', why: '«Hay que» no cambia nunca: **hay que**, no «hayan que».' },
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
            { tone: 'blue', label: 'HAY QUE', formula: 'hay que + infinitivo (no cambia)', example: 'Hay que pagar antes de entrar.', caption: 'norma o necesidad general, sin persona', en: 'a general rule or need, with no person' },
            { tone: 'orange', label: 'TENER QUE', formula: 'tengo / tienes / tiene… que + infinitivo', example: 'Rosa tiene que llegar a las ocho.', caption: 'obligación de una persona concreta', en: 'a specific person’s obligation' },
            { tone: 'teal', label: 'DEBER', formula: 'debo / debes / debe… + infinitivo (sin «que»)', example: 'Debes hablar despacio con los grupos.', caption: 'lo correcto: consejos y normas', en: 'the right thing: advice and rules' },
            { tone: 'violet', label: 'NO HAY QUE / NO TENER QUE ≠ NO DEBER', formula: 'no es necesario ≠ no está bien', example: 'No tienes que pagar. / No debes dar comida a los animales.', caption: 'opcional frente a malo o prohibido', en: 'optional versus wrong or forbidden' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '¿Dices quién? **Tener que** («Rosa tiene que…»). ¿Es para todos? **Hay que**. ¿Es un consejo o lo correcto? **Deber**, sin «que». Y con «no», mira el sentido: **no tienes que** = no es necesario; **no debes** = no está bien.', en: 'Do you say who? Tener que. Is it for everyone? Hay que. Is it advice or the right thing to do? Deber, without “que”. And with “no”, check the meaning: “no tienes que” = it is not necessary; “no debes” = it is not right.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Para entrar al concierto ___ mostrar la entrada en la puerta.', options: ['hay', 'tiene', 'hay que'], answer: 2, why: 'Norma general, sin persona: hay que mostrar.', en: 'To get into the concert you have to show your ticket at the door.' },
            { prompt: 'Mañana es fiesta: no ___ trabajar.', options: ['hay', 'tengo que', 'debo'], answer: 1, why: 'No es necesario trabajar: no tengo que. «No debo trabajar» diría que trabajar está mal.', en: 'Tomorrow is a holiday: I don’t have to work.' },
            { prompt: 'Estás muy cansado: ___ dormir más.', options: ['debes que', 'debes', 'debes de'], answer: 1, why: 'Un consejo: debes + infinitivo, sin «de» y sin «que».', en: 'You are very tired: you should sleep more.' },
            { prompt: 'Nosotros ___ terminar el informe hoy.', options: ['debemos que', 'tenemos que', 'hay que'], answer: 1, why: 'Hay sujeto (nosotros): tenemos que. «Hay que» no lleva sujeto; deber no lleva «que».', en: 'We have to finish the report today.' },
            { prompt: 'Está prohibido: ___ usar el móvil en el examen.', options: ['no debes', 'no tienes que', 'no hay'], answer: 0, why: 'Una prohibición, no algo opcional: no debes. «No tienes que» = no es necesario.', en: 'It is forbidden: you mustn’t use your phone in the exam.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un gimnasio.', blocks: [
          { kind: 'lead', text: 'Lucía, la hermana de Rosa, empieza en un gimnasio nuevo. La recepcionista le explica las normas. Escribe cada norma con la forma correcta.', en: 'Lucía, Rosa’s sister, is starting at a new gym. The receptionist explains the rules to her. Write each rule with the right form.' },
          { kind: 'rewrite', title: 'Las normas del gimnasio · The gym rules', items: [
            { prompt: 'Para todos es necesario: traer una toalla.', instruction: 'Escribe la norma con «hay que». (Use hay que.)', accept: ['Hay que traer una toalla'] },
            { prompt: 'Para ti (Lucía) no es necesario reservar la clase de yoga.', instruction: 'Usa «no tener que» con tú. Empieza con «No».', accept: ['No tienes que reservar la clase de yoga'] },
            { prompt: 'Para los socios no está bien dejar la mochila en el suelo.', instruction: 'Usa «no deber». Empieza con «Los socios».', accept: ['Los socios no deben dejar la mochila en el suelo'] },
          ] },
        ] },
        { title: 'Ampliación: deber de y el pasado · Extension: deber de and the past', mascot: '/brand/mascot/portrait.webp', coach: 'Para estudiantes rápidos. For fast learners.', blocks: [
          { kind: 'tip', icon: '💡', title: 'Deber de = suposición · Deber de = guessing', text: 'Con **de**, deber no expresa obligación: expresa una **suposición** (probablemente). «Ignacio no contesta. **Debe de estar** en la montaña» (he must be on the mountain, I suppose). La norma recomienda separar las dos cosas: **deber + infinitivo** para la obligación («Debes llegar a las ocho») y **deber de + infinitivo** para la suposición. Para la suposición también se acepta deber sin «de» («Debe estar en la montaña»), pero «deber de» para la obligación («Debes de llegar a las ocho») no se recomienda.', en: 'With “de”, deber does not express obligation: it expresses a guess (probably). The norm recommends keeping them apart: deber + infinitive for obligation and deber de + infinitive for a guess. For a guess, deber without “de” is also accepted, but “deber de” for obligation is not recommended.' },
          { kind: 'choice', title: '¿Obligación o suposición? · Obligation or guess?', items: [
            { prompt: 'Ignacio no contesta el teléfono. ___ estar en la montaña.', options: ['Hay que', 'Debe que', 'Debe de'], answer: 2, why: 'Es una suposición (probablemente está en la montaña): debe de estar.', en: 'Ignacio isn’t answering the phone. He must be on the mountain.' },
            { prompt: 'Es una norma: los visitantes ___ llevar la entrada durante la ruta.', options: ['deben que', 'deben', 'deben de'], answer: 1, why: 'Obligación, una norma: deben + infinitivo, sin «de».', en: 'It is a rule: visitors must carry their ticket during the trail.' },
            { prompt: 'Esa señora conoce todos los caminos. ___ trabajar aquí desde hace años.', options: ['Debe de', 'Hay que', 'No tiene que'], answer: 0, why: 'Una suposición sobre la señora: debe de trabajar aquí (probably).', en: 'That woman knows all the paths. She must have worked here for years.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'En pasado · In the past', text: 'Con lo que ya sabes del pasado (clases 047–050): «Ayer **tuve que** trabajar hasta las seis» (un hecho, indefinido). «En la excursión del colegio **había que** caminar tres horas» (la situación, imperfecto). «Hay que» en pasado es **había que** o **hubo que**, siempre sin persona.', en: 'With what you know about the past: “Ayer tuve que trabajar hasta las seis” (an event, preterite). “En la excursión había que caminar tres horas” (the situation, imperfect). “Hay que” in the past is “había que” or “hubo que”, always with no person.' },
          { kind: 'rewrite', title: 'Al pasado · Into the past', items: [
            { prompt: 'Hoy tengo que abrir el centro. (→ ayer)', instruction: 'Escribe la frase en pasado (un hecho). Empieza con «Ayer».', accept: ['Ayer tuve que abrir el centro'] },
            { prompt: 'Rosa tiene que hablar con el grupo. (→ el lunes pasado)', instruction: 'Escribe la frase en pasado (un hecho). Empieza con «El lunes pasado».', accept: ['El lunes pasado Rosa tuvo que hablar con el grupo'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Basta con reconocer «debe de» como suposición; no hace falta producirlo. Las perífrasis de probabilidad se trabajan más adelante.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 081 · Orden de la frase y focalización sencilla', text: 'Ya explicas normas, obligaciones y consejos: «Hay que pagar antes de entrar», «Los niños no tienen que pagar». En las normas, el orden de la frase cambia lo que destacas: «Entre semana no hay que reservar» no pone el foco en lo mismo que «No hay que reservar entre semana». En la clase 081 aprendes a mover las partes de la frase para destacar la información importante. Es el paso natural: ya tienes las frases, ahora decides qué va primero.', en: 'You can now explain rules, duties and advice. In rules, word order changes what you highlight: “Entre semana no hay que reservar” does not focus on the same thing as “No hay que reservar entre semana”. In class 081 you learn to move the parts of a sentence to highlight the important information. It is the natural next step: you have the sentences, now you decide what goes first.', href: '/una-oracion-puede-moverse', label: 'Ir a la clase 081' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué tienes que hacer mañana y qué no tienes que hacer? ¿Qué consejo das a un estudiante nuevo de español?». Tarea: escribir el correo de Escribir con las normas de un lugar real (tu trabajo, tu edificio, tu club).' },
        ] },
      ],
    },
  ],
};
