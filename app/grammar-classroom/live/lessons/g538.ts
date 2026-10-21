import type { LiveLesson } from '../types';

/**
 * Lesson 538 · B1 · Verbos de cambio: hacerse, volverse, convertirse en, llegar a ser (course unit G238,
 * extension added by the PCIC/CEFR coverage audit, row 29; studied after G110, before G111).
 * Builds on G061 (ponerse / quedarse + adjective: quick reaction and resulting state, recapped briefly
 * here), G060 (reflexive pronouns), G045–G051 (perfecto, indefinido, imperfecto), G107 (seguir +
 * gerundio), G109 (volver a + infinitivo, contrasted with volverse). Scene: twenty years after leaving
 * school, Clara Montes (a nurse, the organiser) and Diego Ferrer (an engineer who has lived in Toronto for
 * fifteen years) meet at their class reunion in their old school in Colombia. Classmates: Lucía (became a
 * vet), Raúl (the class clown, now very calm), Mateo (becomes a partner in his father’s workshop),
 * Gabriel; their old teacher Irene became head of the school; the cafeteria became a library.
 * In the voice message (Colombian voice, ustedes) Clara sums up the reunion for the class group.
 * Content, presented as tendencies (the NGLE describes preferences, not strict rules): hacerse + adjective
 * or noun without article (profession, beliefs, decisions, gradual processes: se hizo veterinaria,
 * vegetariano, rico, mayor); volverse + adjective (change of character or quality that the subject does not
 * control: se volvió desconfiado; with a noun it takes un/una, never «en»); convertirse en + noun
 * (transformation of people, things and places); llegar a ser (the goal at the end of a long process,
 * often with effort); pasar a ser (neutral change of category, post or status; frequent in news).
 * Adjective vs noun; voluntary vs involuntary; sudden vs gradual; effort. Errors: *se convirtió famosa,
 * *se convirtió un museo, *se puso abogada, *se hizo nervioso (reaction), *volvió serio (= came back),
 * *se volvió en. Ampliación: fixed expressions (hacerse tarde / de noche, hacerse realidad, volverse loco,
 * quedarse ciego / sin trabajo as lasting results). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 538,
  level: 'B1',
  title: 'Verbos de cambio: hacerse, volverse, convertirse en, llegar a ser',
  subtitle: 'Contar cómo han cambiado las personas y los lugares con hacerse, volverse, convertirse en, llegar a ser y pasar a ser.',
  legend: [
    { tone: 'orange', label: 'Ponerse / quedarse (repaso) · reacción rápida o resultado de un momento' },
    { tone: 'blue', label: 'Hacerse · profesión, ideas, decisiones, procesos (se hizo veterinaria)' },
    { tone: 'violet', label: 'Volverse · carácter o cualidad que cambia sin control (se volvió serio)' },
    { tone: 'teal', label: 'Convertirse en · llegar a ser · pasar a ser · transformación, meta o nuevo puesto' },
  ],
  optionNotes: {
    'se volvió en': '«Volverse en» no existe: volverse va sin «en» (se volvió serio). Para una transformación + nombre: «se convirtió **en** un…».',
    'se ha vuelto en': '«Volverse en» no existe. Con un nombre se dice «se ha convertido **en** un…»; «volverse» va sin «en».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Veinte años después', coach: 'En inglés, un verbo: “become”. En español, varios. One English verb, several Spanish ones.',
      steps: [
        { title: 'El reencuentro · The reunion', blocks: [
          { kind: 'lead', text: 'Clara Montes es enfermera y ha organizado el reencuentro de su clase del colegio, veinte años después. Diego Ferrer vive en Toronto desde hace quince años y ha vuelto solo para la fiesta. Todos hablan de lo mismo: ¡cuánto ha cambiado la gente! «Lucía **se hizo** veterinaria», «Raúl **se ha vuelto** muy serio», «La cafetería **se convirtió en** una biblioteca», «La profesora Irene **llegó a ser** directora». Hoy aprendes a elegir el verbo de cambio adecuado.', en: 'Clara Montes is a nurse and has organised her school class reunion, twenty years later. Diego Ferrer has lived in Toronto for fifteen years and has come back just for the party. Everyone talks about the same thing: how much people have changed! “Lucía became a vet”, “Raúl has become very serious”, “The cafeteria was turned into a library”, “Irene, their old teacher, became head of the school”. Today you learn to choose the right verb of change.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno dice cómo la traduce a su lengua. ¿Usa siempre el mismo verbo («become», «get», «turn into»)?', self: 'Lee las cuatro frases en voz alta y tradúcelas a tu lengua. ¿Usas siempre el mismo verbo? (Do you always use the same verb?)' } },
          { kind: 'compare', title: 'Cuatro cambios en la clase · Four changes in the class', columns: [
            { tone: 'blue', label: 'HACERSE', sentence: 'Lucía [[se hizo|blue]] veterinaria.', idea: 'Estudió y eligió una profesión: un proceso con su participación.', en: 'Lucía became a vet.' },
            { tone: 'violet', label: 'VOLVERSE', sentence: 'Raúl [[se ha vuelto|violet]] muy serio.', idea: 'Su carácter cambió; no fue una decisión.', en: 'Raúl has become very serious.' },
            { tone: 'teal', label: 'CONVERTIRSE EN', sentence: 'La cafetería [[se convirtió en|teal]] una biblioteca.', idea: 'Una cosa pasó a ser otra cosa: transformación + nombre.', en: 'The cafeteria was turned into a library.' },
            { tone: 'teal', label: 'LLEGAR A SER', sentence: 'Irene [[llegó a ser|teal]] directora.', idea: 'La meta al final de un camino largo.', en: 'Irene went on to become head of the school.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tendencias, no reglas fijas · Tendencies, not fixed rules', text: 'Estos verbos se llaman **verbos de cambio**. La gramática académica (RAE-ASALE) explica que cada uno tiene **preferencias**: con qué palabras va (adjetivo o nombre) y qué tipo de cambio cuenta (rápido o lento, querido o no, con esfuerzo o sin él). A veces dos verbos son posibles y cambian un poco el matiz. Hoy aprendes los usos más claros y frecuentes.', en: 'These are called verbs of change. The academic grammar of Spanish describes preferences for each one: what follows it (an adjective or a noun) and what kind of change it tells (quick or slow, wanted or not, with effort or without). Sometimes two verbs are possible with a slight change of nuance. Today you learn the clearest, most frequent uses.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué verbo cuenta un cambio de carácter que la persona no decidió?', options: ['hacerse', 'volverse', 'llegar a ser'], answer: 1, why: 'Volverse: «Raúl se ha vuelto muy serio». No lo eligió; le pasó.', en: 'Which verb tells a change of character the person didn’t decide?' },
            { prompt: '«La cafetería se convirtió ___ una biblioteca.»', options: ['a', 'en', '—'], answer: 1, why: 'Convertirse siempre lleva «en» + un nombre.', en: '“The cafeteria was turned into a library.”' },
            { prompt: '«Irene llegó a ser directora» significa que…', options: ['fue directora un solo día.', 'después de muchos años, consiguió ser directora.', 'se puso nerviosa al ser directora.'], answer: 1, why: 'Llegar a ser: la meta al final de un camino largo.', en: '“Irene went on to become head” means that…' },
          ] },
        ] },
        { title: 'Repaso y hacerse · Review, and hacerse', mascot: '/brand/mascot/studying.webp', coach: 'Primero lo que ya sabes. First, what you already know.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'REPASO · PONERSE Y QUEDARSE (CLASE 061)', question: '¿Es una reacción del momento o el estado en que te deja algo?', en: 'Is it a reaction in the moment, or the state something leaves you in?', formula: ['ponerse + adjetivo → reacción rápida, normalmente pasajera', 'quedarse + adjetivo / participio / sin + nombre → resultado de un hecho'],
            meaning: '**Ponerse** cuenta cambios rápidos del cuerpo o del ánimo: nervioso, rojo, triste, serio. **Quedarse** cuenta cómo te deja algo que pasa: sin palabras, sorprendido, dormido. A veces el resultado dura mucho: se quedó sordo, se quedó sin trabajo. Ninguno de los dos se usa para una profesión.',
            examples: [
              { es: 'Diego [[se puso|orange]] nervioso al entrar al colegio.', en: 'Diego got nervous when he walked into the school.' },
              { es: 'Clara [[se quedó|orange]] sin palabras al verlo.', en: 'Clara was left speechless when she saw him.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'HACERSE', question: '¿Eligió algo, trabajó para conseguirlo o es un proceso natural?', en: 'Did the person choose it, work for it, or is it a natural process?', formula: ['hacerse + nombre sin artículo (profesión, ideas, grupo)', 'hacerse + adjetivo (rico, famoso, mayor…)'],
            meaning: '**Hacerse** presenta el cambio como el resultado de un proceso, muchas veces con la **participación** o la **decisión** de la persona: una profesión (se hizo enfermera), unas ideas o una religión (se hizo budista), una decisión (se hizo vegetariano), un grupo (se hizo socio del club). También va con procesos naturales: hacerse mayor (grow older).',
            examples: [
              { es: 'Clara estudió Enfermería y [[se hizo|blue]] enfermera.', en: 'Clara studied Nursing and became a nurse.' },
              { es: 'Gabriel [[se hizo|blue]] vegetariano hace diez años.', en: 'Gabriel went vegetarian ten years ago.' },
              { es: 'Con su empresa de software, Sergio [[se hizo|blue]] rico muy joven.', en: 'With his software company, Sergio got rich very young.' },
              { es: '¡Qué rápido [[nos hemos hecho|blue]] mayores!', en: 'How quickly we’ve grown older!' },
            ], note: 'Con una profesión, el nombre va **sin artículo**: se hizo médico (no «se hizo un médico»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía estudió cinco años en la universidad y ___ veterinaria.', options: ['se puso', 'se hizo', 'se quedó'], answer: 1, why: 'Una profesión que eligió y estudió: hacerse. Ponerse y quedarse no van con profesiones.', en: 'Lucía studied for five years at university and became a vet.' },
            { prompt: 'Cuando la profesora lo llamó por su apellido, Diego ___ rojo.', options: ['se hizo', 'se puso', 'llegó a ser'], answer: 1, why: 'Una reacción rápida y pasajera: ponerse.', en: 'When the teacher called him by his surname, Diego went red.' },
            { prompt: 'Mi hermana ___ budista cuando vivía en Tailandia.', options: ['se puso', 'se hizo', 'se volvió en'], answer: 1, why: 'Unas ideas o una religión que eliges: hacerse + nombre sin artículo.', en: 'My sister became a Buddhist when she lived in Thailand.' },
          ] },
        ] },
        { title: 'Volverse frente a hacerse · Volverse vs hacerse', mascot: '/brand/mascot/speaking.webp', coach: '¿Lo decidió o le pasó? Did they decide it, or did it happen to them?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'VOLVERSE', question: '¿Cambió su forma de ser sin decidirlo?', en: 'Did their personality or a quality change without them deciding it?', formula: ['volverse + adjetivo (carácter, cualidades)', 'volverse + un / una + nombre (sin «en»; menos frecuente)'],
            meaning: '**Volverse** suele contar un cambio de **carácter** o de una **cualidad** que la persona no controla: le pasa por la edad, por una experiencia, por las circunstancias. Muchas veces es un cambio notable y duradero, a veces repentino. También se usa con cosas: «la situación se volvió difícil».',
            examples: [
              { es: 'Con los años, Raúl [[se ha vuelto|violet]] muy tranquilo.', en: 'Over the years Raúl has become very calm.' },
              { es: 'Después de perder dos trabajos, mi tío [[se volvió|violet]] desconfiado.', en: 'After losing two jobs, my uncle became distrustful.' },
              { es: 'El tráfico de la ciudad [[se ha vuelto|violet]] imposible.', en: 'The traffic in the city has become impossible.' },
            ], note: '¡Ojo! Sin «se», **volver** significa regresar: «Raúl volvió muy serio» = Raúl came back very serious.' },
          { kind: 'compare', title: 'Dos cambios con adjetivo · Two changes with an adjective', columns: [
            { tone: 'blue', label: 'HACERSE · participa o lo decide', sentence: 'Gabriel [[se hizo|blue]] vegetariano.', idea: 'Una decisión suya, después de pensarlo.', en: 'Gabriel went vegetarian.' },
            { tone: 'violet', label: 'VOLVERSE · le pasa', sentence: 'Gabriel [[se volvió|violet]] muy impaciente.', idea: 'Un rasgo de carácter que cambió sin querer.', en: 'Gabriel became very impatient.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Cuando los dos son posibles · When both are possible', text: 'Con algunos adjetivos se oyen los dos verbos: **hacerse famoso** y **volverse famoso**, **hacerse rico** y **volverse rico**. El uso varía según la zona y la persona. Con hacerse, el cambio se ve más como resultado de un proceso o de un esfuerzo; con volverse, más como algo que le pasa a la persona. Para profesiones, ideas y decisiones, lo más frecuente es **hacerse**.', en: 'With some adjectives you hear both verbs: “hacerse / volverse famoso”, “hacerse / volverse rico”. Usage varies by area and speaker. With hacerse the change is seen more as the result of a process or effort; with volverse, more as something that happens to the person. For professions, beliefs and decisions, hacerse is the usual choice.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Desde que trabaja de noche, mi vecina ___ muy irritable.', options: ['ha llegado a ser', 'se ha vuelto', 'se ha puesto en'], answer: 1, why: 'Un cambio de carácter que ella no eligió: volverse. Llegar a ser es una meta, no un rasgo que aparece sin querer.', en: 'Since she started working nights, my neighbour has become very irritable.' },
            { prompt: '«Raúl volvió muy cansado» significa…', options: ['Raúl se hizo cansado.', 'Raúl regresó muy cansado.', 'Raúl cambió su carácter.'], answer: 1, why: 'Sin «se», volver = regresar (come back).', en: '“Raúl volvió muy cansado” means…' },
            { prompt: 'Lo pensó mucho y, a los cuarenta años, ___ socio de un club de montaña.', options: ['se volvió', 'se hizo', 'se quedó'], answer: 1, why: 'Entrar en un grupo por decisión propia: hacerse socio.', en: 'He thought about it a lot and, at forty, became a member of a mountaineering club.' },
          ] },
        ] },
        { title: 'Convertirse en, llegar a ser, pasar a ser · Turning into, going on to be, becoming', mascot: '/autoestudio/mascot/noting.webp', coach: 'Con un nombre, tres matices. With a noun, three nuances.', blocks: [
          { kind: 'compare', title: 'Tres verbos que van muy bien con nombres · Three verbs that suit nouns', columns: [
            { tone: 'teal', label: 'CONVERTIRSE EN · transformación', sentence: 'La cancha vieja [[se convirtió en|teal]] un huerto.', idea: 'Algo o alguien pasa a ser algo distinto. Siempre «en» + nombre.', en: 'The old sports court was turned into a vegetable garden.' },
            { tone: 'teal', label: 'LLEGAR A SER · la meta', sentence: 'Empezó de ayudante y [[llegó a ser|teal]] jefa de cocina.', idea: 'Un camino largo, muchas veces con esfuerzo o mérito.', en: 'She started as an assistant and went on to become head chef.' },
            { tone: 'teal', label: 'PASAR A SER · nuevo puesto o categoría', sentence: 'Desde enero, Mateo [[pasa a ser|teal]] socio del taller.', idea: 'Un cambio de situación, contado de forma neutra, sin hablar de esfuerzo.', en: 'From January, Mateo becomes a partner in the workshop.' },
          ] },
          { kind: 'table', title: '¿Adjetivo o nombre? · Adjective or noun?', head: ['Verbo', '+ adjetivo', '+ nombre', 'Idea más frecuente'], rows: [
            ['[[ponerse|orange]]', 'se puso nervioso', '—', 'reacción rápida, pasajera'],
            ['[[quedarse|orange]]', 'se quedó sorda', 'sin + nombre: se quedó sin trabajo', 'resultado de un hecho'],
            ['[[hacerse|blue]]', 'se hizo rico, mayor', 'se hizo médica (sin artículo)', 'proceso, decisión, esfuerzo'],
            ['[[volverse|violet]]', 'se volvió desconfiado', 'se volvió un problema (con un / una)', 'carácter o cualidad, sin control'],
            ['[[convertirse en|teal]]', '—', 'se convirtió en un museo', 'transformación'],
            ['[[llegar a ser|teal]]', 'llegó a ser muy conocida', 'llegó a ser directora', 'meta de un camino largo'],
            ['[[pasar a ser|teal]]', 'pasó a ser obligatorio', 'pasó a ser jefe de turno', 'nuevo puesto o categoría, neutro'],
          ], note: 'Convertirse en no va con un adjetivo solo: «se convirtió en famosa» no se dice. Se dice «se hizo famosa» o «se convirtió en una actriz famosa».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La vieja estación de tren ___ un centro cultural.', options: ['se convirtió en', 'se hizo', 'se puso'], answer: 0, why: 'Un lugar se transforma en otro + nombre con artículo: convertirse en.', en: 'The old train station was turned into a cultural centre.' },
            { prompt: 'Con la nueva ley, el reciclaje ___ obligatorio para todas las empresas.', options: ['pasó a ser', 'se volvió en', 'se puso'], answer: 0, why: 'Un cambio de categoría por una decisión oficial, contado de forma neutra: pasar a ser.', en: 'With the new law, recycling became compulsory for all companies.' },
            { prompt: 'Empezó vendiendo periódicos y, treinta años después, ___ dueño de la editorial.', options: ['se puso', 'se quedó', 'llegó a ser'], answer: 2, why: 'La meta al final de un camino largo y con esfuerzo: llegar a ser.', en: 'He started out selling newspapers and, thirty years later, went on to own the publishing house.' },
          ] },
        ] },
        { title: '¿Qué verbo elijo? · Which verb do I choose?', mascot: '/brand/mascot/seated.webp', coach: 'Hazte estas preguntas. Ask yourself these questions.', blocks: [
          { kind: 'decide', title: 'Cuatro preguntas para elegir · Four questions to choose', steps: [
            { q: '¿Es una reacción rápida (cuerpo, ánimo) o el estado en que te deja un hecho? (A quick reaction or the result of an event?)', yes: 'ponerse (se puso rojo) o quedarse (se quedó sin palabras).', no: 'Sigue con la pregunta 2.' },
            { q: '¿Después viene un nombre y algo se transforma en otra cosa? (A noun, and a transformation?)', yes: 'convertirse en (se convirtió en una biblioteca).', no: 'Sigue con la pregunta 3.' },
            { q: '¿Es la meta de un camino largo, o un nuevo puesto o categoría? (A long-term goal, or a new post or category?)', yes: 'llegar a ser (meta, esfuerzo) o pasar a ser (cambio neutro).', no: 'Sigue con la pregunta 4.' },
            { q: '¿Es una profesión, unas ideas, una decisión o un proceso en el que la persona participa? (A profession, beliefs, a decision?)', yes: 'hacerse (se hizo enfermera, vegetariano).', no: 'Si es un rasgo de carácter que cambia sin querer: volverse (se volvió desconfiado).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El pequeño grupo de amigos ___ una asociación con cien miembros.', options: ['se hizo en', 'se convirtió en', 'se puso'], answer: 1, why: 'Nombre con artículo y transformación: convertirse en.', en: 'The small group of friends turned into an association with a hundred members.' },
            { prompt: 'Al oír la noticia, Clara ___ muy preocupada.', options: ['se hizo', 'se puso', 'llegó a ser'], answer: 1, why: 'Una reacción del momento: ponerse.', en: 'When she heard the news, Clara got very worried.' },
            { prompt: 'Desde la mudanza, el carácter de mi abuela ___ más difícil.', options: ['se ha vuelto', 'se ha convertido', 'ha llegado a ser'], answer: 0, why: 'Un cambio de carácter que no depende de ella: volverse. «Se ha convertido» pediría «en» + nombre.', en: 'Since the move, my grandmother’s character has become more difficult.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '“Become” no siempre es el mismo verbo. “Become” isn’t always the same verb.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué verbo cambia o qué falta. Después aparece la corrección.', self: 'Lee cada frase, piensa qué falla y toca para ver la corrección. (What’s wrong? Tap to check.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Se convirtió famosa con su primera novela.', right: 'Se hizo famosa con su primera novela.', why: 'Convertirse necesita **en + nombre**. Con un adjetivo, hacerse (también se oye volverse famosa). Otra opción: «se convirtió en una autora famosa».' },
            { wrong: 'La vieja fábrica se convirtió un museo.', right: 'La vieja fábrica se convirtió en un museo.', why: 'Convertirse siempre lleva **en**.' },
            { wrong: 'Mi hermana se puso abogada.', right: 'Mi hermana se hizo abogada.', why: 'Ponerse va con adjetivos de estados pasajeros, no con profesiones.' },
            { wrong: 'Cuando vio a su exnovio, se hizo nervioso.', right: 'Cuando vio a su exnovio, se puso nervioso.', why: 'Una reacción rápida y pasajera: **ponerse**.' },
            { wrong: 'Con los años, Raúl volvió muy serio.', right: 'Con los años, Raúl se volvió muy serio.', why: 'Sin «se», volver = regresar. Para el cambio de carácter: **volverse**.' },
            { wrong: 'El pueblo se volvió en una ciudad turística.', right: 'El pueblo se convirtió en una ciudad turística.', why: '«Volverse en» no existe. Con un nombre: **convertirse en** (o «se volvió una ciudad turística», sin «en»).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Su blog se hizo en muy popular.', 'Su blog se hizo muy popular.', 'Su blog se convirtió muy popular.'], answer: 1, why: 'Con un adjetivo, hacerse. Convertirse pediría en + nombre: «se convirtió en un blog muy popular».', en: 'Which sentence is correct? (Her blog became very popular.)' },
            { prompt: '¿Qué frase es correcta?', options: ['Mi primo se puso médico.', 'Mi primo se hizo un médico.', 'Mi primo se hizo médico.'], answer: 2, why: 'Hacerse + profesión, sin artículo.', en: 'Which sentence is correct? (My cousin became a doctor.)' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno piensa en una persona de su colegio o de su familia y cuenta un cambio con hacerse y otro con volverse. Tú preguntas: «¿Lo decidió o le pasó?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En el patio del colegio', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Clara y Diego · Clara and Diego', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Clara y tu alumno es Diego. Después tu alumno toca cada expresión marcada y explica qué tipo de cambio cuenta.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di qué tipo de cambio cuenta. (Read aloud, then tap each marked expression.)' } },
          { kind: 'explore', title: '¡Cuánto has cambiado!', setting: 'Sábado por la noche, en el patio del colegio. Hay música, fotos antiguas en las paredes y unos cuarenta exalumnos. Diego acaba de llegar de Toronto. (Saturday night in the school courtyard. Diego has just arrived from Toronto.)', lines: [
            { who: 'Diego', text: '¡Clara! Cuando entré y vi el patio, [[me quedé|orange]] sin palabras. Está igual.', en: 'Clara! When I came in and saw the courtyard, I was left speechless. It’s just the same.' },
            { who: 'Clara', text: '¡Y yo [[me puse|orange]] nerviosísima al verte en la puerta! ¿Sigues trabajando con puentes?', en: 'And I got so nervous when I saw you at the door! Are you still working on bridges?' },
            { who: 'Diego', text: 'Sí, sigo. Oye, ¿esa es Lucía? ¿No quería ser actriz?', en: 'Yes, still. Hey, is that Lucía? Didn’t she want to be an actress?' },
            { who: 'Clara', text: 'Cambió de idea: estudió en Bogotá y [[se hizo veterinaria|blue]]. Ahora tiene una clínica con su hermano.', en: 'She changed her mind: she studied in Bogotá and became a vet. Now she runs a clinic with her brother.' },
            { who: 'Diego', text: '¿Y Raúl? Está ahí en una esquina, muy callado. ¡Con lo bromista que era!', en: 'And Raúl? He’s over there in a corner, very quiet. And he used to be such a joker!' },
            { who: 'Clara', text: 'Pues sí, [[se ha vuelto|violet]] muy tranquilo. Dice que con los gemelos ya no le queda energía para bromas.', en: 'Yes, he’s become very calm. He says that with the twins he has no energy left for jokes.' },
            { who: 'Diego', text: 'Ja, ja. ¿Y la cafetería? La busqué y no la encontré.', en: 'Ha! And the cafeteria? I looked for it and couldn’t find it.' },
            { who: 'Clara', text: 'Ya no existe: [[se convirtió en|teal]] una biblioteca. Y la cancha vieja ahora es un huerto.', en: 'It’s gone: it was turned into a library. And the old sports court is a vegetable garden now.' },
            { who: 'Diego', text: '¡Qué cambio! ¿Y la profesora Irene? Era la más exigente de todas.', en: 'What a change! And Irene, our teacher? She was the strictest of them all.' },
            { who: 'Clara', text: '[[Llegó a ser|teal]] directora. Trabajó aquí treinta años y este año se jubila.', en: 'She went on to become head of the school. She worked here for thirty years and she’s retiring this year.' },
            { who: 'Diego', text: '¡Increíble! ¿Y Mateo? Me dijeron que trabaja con su papá.', en: 'Amazing! And Mateo? I heard he works with his dad.' },
            { who: 'Clara', text: 'Sí, y desde enero [[pasa a ser|teal]] socio del taller. Mira, ahí viene… y Gabriel detrás, que [[se puso|orange]] rojo con tantas fotos.', en: 'Yes, and from January he becomes a partner in the workshop. Look, here he comes… with Gabriel behind him, who went red with all the photos.' },
          ], notes: {
            'me quedé': 'Quedarse sin palabras (clase 061): el estado en que lo dejó la sorpresa. (I was left speechless.)',
            'me puse': 'Ponerse + adjetivo: una reacción rápida y pasajera. «Nerviosísima» = muy nerviosa.',
            'se hizo veterinaria': 'Hacerse + profesión sin artículo: estudió y eligió ese camino. Un cambio con su participación.',
            'se ha vuelto': 'Volverse + adjetivo: su carácter cambió por las circunstancias (los gemelos), no por una decisión. «Con lo bromista que era» = and he was such a joker.',
            'se convirtió en': 'Convertirse en + nombre: un lugar se transformó en otro. Siempre con «en».',
            'Llegó a ser': 'Llegar a ser: la meta al final de un camino largo (treinta años de trabajo).',
            'pasa a ser': 'Pasar a ser: un nuevo puesto, contado de forma neutra. Presente con valor de futuro próximo: desde enero.',
            'se puso': 'Otra vez ponerse: una reacción del momento (went red). Mañana ya no estará rojo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué quería ser Lucía cuando estaba en el colegio?', options: ['Actriz.', 'Profesora.', 'Veterinaria.'], answer: 0, why: '«¿No quería ser actriz?» Después cambió de idea y se hizo veterinaria.', en: 'What did Lucía want to be when she was at school?' },
            { prompt: '¿Por qué Raúl ya no hace bromas?', options: ['Porque está enfermo.', 'Porque tiene gemelos y no le queda energía.', 'Porque no conoce a nadie.'], answer: 1, why: '«Con los gemelos ya no le queda energía para bromas».', en: 'Why doesn’t Raúl make jokes any more?' },
            { prompt: '¿Qué pasa con Mateo en enero?', options: ['Empieza a ser socio del taller de su papá.', 'Se jubila.', 'Se va a Toronto.'], answer: 0, why: '«Desde enero pasa a ser socio del taller».', en: 'What happens to Mateo in January?' },
          ] },
        ] },
        { title: '¿Qué tipo de cambio? · What kind of change?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más noticias del reencuentro · More news from the reunion', categories: [
            { id: 'momento', label: 'PONERSE / QUEDARSE · un momento', tone: 'orange' },
            { id: 'decision', label: 'HACERSE · profesión o decisión', tone: 'blue' },
            { id: 'caracter', label: 'VOLVERSE · carácter', tone: 'violet' },
            { id: 'nombre', label: 'CONVERTIRSE EN / LLEGAR A SER · transformación o meta', tone: 'teal' },
          ], items: [
            { text: 'Gabriel se hizo cocinero y abrió un restaurante.', answer: 'decision', why: 'Una profesión que eligió: hacerse.' },
            { text: 'Su restaurante se convirtió en el más famoso del barrio.', answer: 'nombre', why: 'Convertirse en + nombre: transformación.' },
            { text: 'Clara se quedó dormida en el sofá después de la fiesta.', answer: 'momento', why: 'Quedarse dormido/a: el resultado de un momento.' },
            { text: 'Con la edad, la profesora Irene se ha vuelto más paciente.', answer: 'caracter', why: 'Un rasgo de carácter que cambió sin decidirlo.' },
            { text: 'Lucía llegó a ser presidenta de la asociación de veterinarios de la región.', answer: 'nombre', why: 'La meta de una carrera larga: llegar a ser.' },
            { text: 'Cuando pusieron la música de los 2000, todos se pusieron contentísimos.', answer: 'momento', why: 'Una reacción rápida: ponerse.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué cambio te sorprendió más del diálogo?». Tu alumno responde con el verbo del cambio: «Me sorprendió lo de Raúl: se ha vuelto muy tranquilo».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Reacción, decisión, carácter o transformación? Reaction, decision, character or transformation?',
      steps: [
        { title: 'Noticias de la clase · News about the class', blocks: [
          { kind: 'choice', items: [
            { context: 'Clara mira el álbum de fotos. (Clara looks at the photo album.)', prompt: 'Hace cinco años, Susana ___ socia de un club de montaña.', options: ['se puso', 'se hizo', 'se volvió en'], answer: 1, why: 'Entrar en un grupo por decisión propia: hacerse socia.', en: 'Five years ago, Susana became a member of a mountaineering club.' },
            { context: 'Alguien pregunta por una exnovia. (Someone asks about an ex.)', prompt: 'Cuando le preguntaron por ella, Gabriel ___ muy serio.', options: ['se hizo', 'se puso', 'llegó a ser'], answer: 1, why: 'Una reacción del momento: ponerse.', en: 'When they asked him about her, Gabriel went very serious.' },
            { context: 'Diego pasea por el barrio. (Diego walks around the neighbourhood.)', prompt: 'La papelería de enfrente ___ una cafetería moderna.', options: ['se puso', 'se convirtió en', 'se volvió en'], answer: 1, why: 'Un lugar que se transforma + nombre: convertirse en.', en: 'The stationery shop across the road has been turned into a modern café.' },
            { context: 'Hablan de Paula, la delegada de la clase. (They talk about Paula, the class rep.)', prompt: 'Desde que dirige un equipo, Paula ___ muy exigente con todos.', options: ['se ha vuelto', 'se ha convertido', 'se ha quedado'], answer: 0, why: 'Un cambio de carácter que no eligió: volverse. «Convertirse» pediría «en» + nombre.', en: 'Since she started running a team, Paula has become very demanding with everyone.' },
            { context: 'Mateo habla de su contrato nuevo. (Mateo talks about his new contract.)', prompt: 'Con el contrato nuevo, el trabajo de los sábados ___ voluntario.', options: ['se pone', 'pasa a ser', 'llega a ser'], answer: 1, why: 'Un cambio de categoría por una decisión administrativa, sin esfuerzo: pasar a ser.', en: 'With the new contract, Saturday work becomes voluntary.' },
          ] },
        ] },
        { title: '¿Hacerse, volverse o convertirse en? · Which verb?', mascot: '/brand/mascot/seated.webp', coach: 'Mira qué viene después. Look at what comes next.', blocks: [
          { kind: 'classify', title: '¿Qué verbo es más natural? · Which verb is most natural?', categories: [
            { id: 'hacerse', label: 'HACERSE', tone: 'blue' },
            { id: 'volverse', label: 'VOLVERSE', tone: 'violet' },
            { id: 'convertirse', label: 'CONVERTIRSE EN', tone: 'teal' },
          ], items: [
            { text: 'Andrea terminó Derecho y … abogada.', answer: 'hacerse', why: 'Profesión tras estudiar, sin artículo: se hizo abogada.' },
            { text: 'Pablo dejó la carne en 2019: … vegetariano.', answer: 'hacerse', why: 'Una decisión personal: se hizo vegetariano.' },
            { text: 'Después de perder su trabajo dos veces, mi tío … muy desconfiado.', answer: 'volverse', why: 'Un rasgo de carácter que cambió por las circunstancias: se volvió desconfiado.' },
            { text: 'Con la fama, el cantante … arrogante.', answer: 'volverse', why: 'Un cambio de carácter que nadie elige: se volvió arrogante.' },
            { text: 'El cine del barrio … un supermercado.', answer: 'convertirse', why: 'Un lugar + nombre con artículo: se convirtió en un supermercado.' },
            { text: 'Su pequeño blog … una revista con miles de lectores.', answer: 'convertirse', why: 'Una transformación + nombre: se convirtió en una revista.' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Diego saluda a la profesora Irene · Diego greets his old teacher', lines: [
            { who: 'Diego', text: '¡Profesora Irene, qué gusto! Me dijeron que, después de tantos años, ___ directora.', options: ['se volvió', 'se puso', 'llegó a ser'], answer: 2, why: 'La meta de un camino largo: llegar a ser.' },
            { who: 'Irene', text: 'Así es. ¿Y tú, Diego? Eras tan tímido… ___ ingeniero, ¿verdad?', options: ['Te quedaste', 'Te hiciste', 'Te pusiste'], answer: 1, why: 'Una profesión que eligió y estudió: hacerse.' },
            { who: 'Diego', text: 'Sí. Y en Canadá ___ mucho más abierto: allí tenía que hablar con todo el mundo.', options: ['me quedé', 'me volví', 'me puse'], answer: 1, why: 'Un cambio de carácter duradero, por las circunstancias: volverse. Ponerse sería solo un momento; quedarse, el resultado de un hecho concreto.' },
            { who: 'Irene', text: '¡Qué bien! ¿Viste la cafetería? ___ una biblioteca.', options: ['Se volvió en', 'Se hizo en', 'Se convirtió en'], answer: 2, why: 'Transformación + nombre: convertirse en.' },
            { who: 'Diego', text: 'Sí. ¡Y cuando la vi, ___ sin palabras!', options: ['me volví', 'me quedé', 'me hice'], answer: 1, why: 'Quedarse sin palabras: el resultado de la sorpresa.' },
            { who: 'Irene', text: 'Ja, ja. Ven, que te enseño el huerto.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mi vecino se puso médico el año pasado.', ok: false, options: ['Mi vecino se volvió médico el año pasado.', 'Mi vecino se quedó médico el año pasado.', 'Mi vecino se hizo médico el año pasado.'], answer: 2, why: 'Profesión tras estudiar: **hacerse**. Ponerse solo va con estados pasajeros.' },
            { sentence: 'La casa de mis abuelos se convirtió en un hotel pequeño.', ok: true, why: 'Correcta: convertirse **en** + nombre.' },
            { sentence: 'Con la edad, mi padre se ha vuelto más cariñoso.', ok: true, why: 'Correcta: un cambio de carácter con los años, con volverse.' },
            { sentence: 'Cuando vio el precio, Lucía se convirtió pálida.', ok: false, options: ['Cuando vio el precio, Lucía llegó a ser pálida.', 'Cuando vio el precio, Lucía se hizo pálida.', 'Cuando vio el precio, Lucía se puso pálida.'], answer: 2, why: 'Una reacción rápida del cuerpo: **ponerse** pálida.' },
            { sentence: 'Su pequeño negocio se volvió en una empresa enorme.', ok: false, options: ['Su pequeño negocio se convirtió en una empresa enorme.', 'Su pequeño negocio se hizo en una empresa enorme.', 'Su pequeño negocio se puso en una empresa enorme.'], answer: 0, why: '«Volverse en» no existe: **convertirse en** + nombre.' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Mi', 'prima', 'se', 'hizo', 'enfermera', 'en', 'Canadá.'], accept: ['Mi prima se hizo enfermera en Canadá.'], en: 'My cousin became a nurse in Canada.' },
            { tiles: ['Con', 'los', 'años,', 'Raúl', 'se', 'ha', 'vuelto', 'más', 'paciente.'], accept: ['Con los años, Raúl se ha vuelto más paciente.'], en: 'Over the years Raúl has become more patient.' },
            { tiles: ['El', 'patio', 'se', 'convirtió', 'en', 'un', 'huerto.'], accept: ['El patio se convirtió en un huerto.'], en: 'The courtyard was turned into a vegetable garden.' },
            { tiles: ['¿Cuándo', 'te', 'hiciste', 'socio', 'del', 'club?'], accept: ['¿Cuándo te hiciste socio del club?'], en: 'When did you join the club?' },
          ] },
        ] },
        { title: 'Transforma las frases · Transform the sentences', mascot: '/brand/mascot/kneeling.webp', coach: 'Mismo cambio, otro verbo. Same change, another verb.', blocks: [
          { kind: 'rewrite', title: 'Cuenta el cambio · Tell the change', items: [
            { prompt: 'Sofía antes era tímida. Vivió sola en otro país y ahora es muy segura de sí misma.', instruction: 'Usa volverse en pretérito perfecto. Empieza con «Sofía se ha».', accept: ['Sofía se ha vuelto muy segura de sí misma', 'Sofía se ha vuelto muy segura'] },
            { prompt: 'En 2018, Alberto empezó a ser budista.', instruction: 'Usa hacerse en indefinido. Empieza con «En 2018».', accept: ['En 2018, Alberto se hizo budista', 'En 2018 se hizo budista'] },
            { prompt: 'Antes era el garaje de mis padres. Ahora es un estudio de música.', instruction: 'Usa convertirse en. Empieza con «El garaje de mis padres».', accept: ['El garaje de mis padres se convirtió en un estudio de música', 'El garaje de mis padres se ha convertido en un estudio de música'] },
            { prompt: 'Cuando le dieron el premio, Laura no pudo decir nada.', instruction: 'Usa quedarse sin palabras. Empieza con «Cuando le dieron el premio».', accept: ['Cuando le dieron el premio, Laura se quedó sin palabras', 'Cuando le dieron el premio, se quedó sin palabras'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El resumen de Clara', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un audio para el grupo · A voice message to the group', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un verbo de cambio y dice qué tipo de cambio es. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada verbo de cambio. (Listen once for the gist, once for details.)' } },
          { kind: 'listen', title: 'Gracias por venir', channel: 'AUDIO · DE CLARA AL GRUPO «PROMOCIÓN 2006»', src: '/audio/grammar-live/538.mp3',
            before: 'El domingo, Clara manda un audio al grupo de la clase. ¿Qué crees que cuenta? ¿Quién crees que ha cambiado más? (What do you think she says? Who has changed the most?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Clara organiza un viaje a Toronto.', 'Clara se queja de que nadie vino a la fiesta.', 'Clara da las gracias y resume las noticias del reencuentro.'], answer: 2, why: 'Agradece la visita, cuenta cómo han cambiado varias personas y el colegio, y pide un favor.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué se puso rojo Diego?', options: ['Porque olvidó el nombre de Clara.', 'Porque llegó tarde.', 'Porque la profesora Irene lo llamó por su apellido, como en clase.'], answer: 2, why: '«Se puso rojo cuando la profesora Irene lo llamó por su apellido, como en clase».', en: 'Why did Diego go red?' },
              { prompt: '¿Qué les ofrece Lucía?', options: ['Una consulta gratis para sus mascotas.', 'Una cena en su casa.', 'Trabajo en su clínica.'], answer: 0, why: '«Nos ofrece una consulta gratis para nuestras mascotas».', en: 'What does Lucía offer them?' },
              { prompt: '¿Qué hizo Raúl anoche?', options: ['Se fue muy temprano.', 'No habló con nadie.', 'Volvió a contar chistes, aunque ahora es serio.'], answer: 2, why: '«Se ha vuelto serio y tranquilo, pero anoche volvió a contar chistes».', en: 'What did Raúl do last night?' },
              { prompt: '¿Qué tienen que hacer todos antes del viernes?', options: ['Pagar la fiesta.', 'Mandar su texto para el cuadernillo.', 'Llamar a Mateo.'], answer: 1, why: '«Manden sus textos para el cuadernillo antes del viernes».', en: 'What does everyone have to do before Friday?' },
            ],
            transcript: '¡Hola a todos! Les habla Clara. Todavía estoy emocionada por lo de anoche; gracias por venir, de verdad. Cuando vi a Diego en la puerta, [[me quedé|orange]] sin palabras, y él [[se puso|orange]] rojo cuando la profesora Irene lo llamó por su apellido, como en clase. Para los que llegaron tarde, un resumen rápido. Lucía [[se hizo|blue]] veterinaria y nos ofrece una consulta gratis para nuestras mascotas. Raúl, el payaso de la clase, [[se ha vuelto|violet]] serio y tranquilo, pero anoche volvió a contar chistes y nos hizo llorar de risa. La vieja cafetería [[se convirtió en|teal]] una biblioteca preciosa, y la profesora Irene, que [[llegó a ser|teal]] directora, nos la mostró con mucho orgullo. Y una noticia de última hora: desde enero Mateo [[pasa a ser|teal]] socio del taller de su papá, y nos invita a celebrarlo. Ah, y un favor: manden sus textos para el cuadernillo antes del viernes. ¡Un abrazo enorme!',
            reply: { teacher: 'Tú eres Clara. Tu alumno responde al audio como un exalumno que no pudo ir: pregunta por dos personas y cuenta un cambio de su propia vida con hacerse, volverse o llegar a ser.', self: 'Responde al audio en voz alta como un exalumno que no pudo ir: pregunta por dos personas y cuenta un cambio de tu vida. (Answer as a classmate who couldn’t come.)' } },
          { kind: 'tip', icon: '💡', title: 'Volverse no es volver a · Volverse is not volver a', text: 'En el audio aparecen los dos: Raúl **se ha vuelto** serio (cambio de carácter) y anoche **volvió a contar** chistes (lo hizo otra vez, clase 109). Fíjate en el «se» y en lo que viene después: volverse + adjetivo; volver a + infinitivo.', en: 'Both appear in the message: Raúl has become serious (a change of character), and last night he told jokes again (class 109). Look at the “se” and at what follows: volverse + adjective; volver a + infinitive.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Cuánto has cambiado tú?', coach: 'Habla de personas y lugares reales. Talk about real people and places.',
      steps: [
        { title: 'Tus cambios · Your changes', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales o inventadas. Si elige un verbo de cambio poco natural, tú repites la frase con el verbo adecuado y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con una experiencia real o inventada y, si quieres, escribe tu respuesta. (Answer aloud, real or invented.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué querías ser de niño o de niña? ¿Qué profesión elegiste al final? · What did you want to be as a child? What did you end up doing?', followUps: ['¿Por qué cambiaste de idea? (Why did you change your mind?)', '¿Alguien de tu familia se hizo lo que tú querías ser? (Did anyone in your family become it?)'], phrases: ['De niño/a quería ser…', 'Al final [[me hice|blue]]…', 'Mi hermano [[se hizo|blue]]…'], hint: 'Hacerse + profesión, sin artículo: me hice profesora.', example: 'De niña quería ser astronauta, pero al final me hice profesora de química. Mi hermano, en cambio, se hizo piloto: ¡él sí vuela!', next: 'Ahora, el carácter.' },
            { q: 'Piensa en alguien que ha cambiado mucho de carácter. ¿Cómo era y cómo se ha vuelto? · Think of someone whose personality has changed a lot.', followUps: ['¿Qué pasó para que cambiara? (What made them change?)', '¿Te gusta más ahora? (Do you like them more now?)'], phrases: ['Antes era…', 'Con los años [[se ha vuelto|violet]]…', 'Desde que…, [[se volvió|violet]]…'], hint: 'Volverse + adjetivo: un cambio de carácter que no eligió.', example: 'Mi abuelo era muy serio y estricto. Desde que nacieron sus nietos se ha vuelto cariñoso y bromista. Ahora es otra persona.', next: 'Hablemos de lugares.' },
            { q: '¿Qué lugar de tu ciudad se ha convertido en otra cosa? ¿Te gusta el cambio? · Which place in your town has turned into something else?', followUps: ['¿Qué era antes? (What was it before?)', '¿Qué te gustaría que fuera? (What would you like it to be?)'], phrases: ['Antes era…', '[[Se convirtió en|teal]]…', 'Ahora [[se ha convertido en|teal]] un sitio…'], hint: 'Convertirse en + nombre: siempre con «en».', example: 'En mi barrio había una fábrica de galletas. Hace cinco años se convirtió en un centro cultural con biblioteca y cine. Me encanta, aunque echo de menos el olor a galletas.', next: 'Ahora, metas importantes.' },
            { q: '¿Conoces a alguien que llegó a ser algo importante después de mucho esfuerzo? · Do you know someone who achieved something big after a lot of effort?', followUps: ['¿Cómo empezó? (How did they start?)', '¿Cuánto tardó? (How long did it take?)'], phrases: ['Empezó como…', 'Después de … años, [[llegó a ser|teal]]…', 'Desde el año pasado [[pasó a ser|teal]]…'], hint: 'Llegar a ser: la meta tras un camino largo. Pasar a ser: un nuevo puesto, sin hablar de esfuerzo.', example: 'Mi tía empezó como cajera en un banco. Estudió por las noches y, después de veinte años, llegó a ser directora de una sucursal. Desde el año pasado pasó a ser responsable de toda la región.', next: 'Ahora, reacciones.', teacher: 'Si tu alumno dice «se convirtió directora», tú preguntas: «¿Se convirtió en qué?». La pregunta muestra el «en».' },
            { q: '¿Cuándo fue la última vez que te pusiste muy nervioso/a o te quedaste sin palabras? · When did you last get very nervous or were left speechless?', followUps: ['¿Qué pasó? (What happened?)', '¿Cómo reaccionaron los demás? (How did others react?)'], phrases: ['[[Me puse|orange]] muy…', '[[Me quedé|orange]] sin palabras cuando…', 'Todos [[se pusieron|orange]]…'], hint: 'Reacción del momento: ponerse. Resultado de un hecho: quedarse.', example: 'En la boda de mi mejor amiga tuve que dar un discurso. Me puse tan nervioso que me quedé en blanco, pero todos aplaudieron y al final salió bien.', next: 'Para terminar, el futuro.' },
            { q: '¿En qué te gustaría convertirte dentro de diez años? ¿Qué te gustaría llegar a ser? · What would you like to become in ten years?', followUps: ['¿Qué tienes que hacer para conseguirlo? (What do you need to do?)', '¿En qué tipo de persona no te gustaría convertirte nunca? (What kind of person would you never want to become?)'], phrases: ['Me gustaría [[llegar a ser|teal]]…', 'Quiero [[convertirme en|teal]] una persona…', 'No quiero [[volverme|violet]]…'], hint: 'Con el infinitivo, el pronombre va al final: convertirme, volverme, hacerme.', example: 'Me gustaría llegar a ser jefa de mi departamento y convertirme en una persona más organizada. No quiero volverme una de esas jefas que nunca escuchan.', teacher: 'Tú también respondes. Después, tu alumno te hace una pregunta: «¿Qué te gustaría llegar a ser?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Cuándo te hiciste…?», «¿Quién se ha vuelto más…?», «¿Qué lugar se convirtió en…?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra persona o con otro lugar. (Ask the questions yourself.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: '¿Qué ha sido de ti?', coach: 'Elige el verbo según el cambio. Choose the verb for the change.',
      steps: [
        { title: 'El cuadernillo del reencuentro · The reunion booklet', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada verbo de cambio: ¿va con adjetivo o con nombre? ¿Es una decisión, un cambio de carácter, una transformación o una meta?', self: 'Escribe tu texto y toca «Revisar mi texto». Después repasa cada verbo de cambio: ¿adjetivo o nombre? ¿Decisión, carácter, transformación o meta? (Check every verb of change.)' } },
          { kind: 'write', title: 'Veinte años después · Twenty years later', situation: 'Clara prepara un cuadernillo para el reencuentro. Cada exalumno escribe un texto corto: «¿Qué ha sido de ti?». Escribe el tuyo (o el de Diego) para tus antiguos compañeros. (Write a short text for your old classmates about how your life has changed.)', task: [
            'Cuenta tu profesión o una decisión importante con hacerse. (A profession or decision with hacerse.)',
            'Explica un cambio de tu carácter con volverse. (A change in your personality with volverse.)',
            'Cuenta una transformación con convertirse en, o una meta con llegar a ser / pasar a ser. (A transformation or a goal.)',
            'Añade una reacción con ponerse o quedarse y termina con un saludo. (A reaction, and a goodbye.)',
          ], starters: ['Hola a todos. Muchos se acuerdan de mí como…', 'Estudié… y me hice…', 'Con los años me he vuelto…', 'Después de mucho esfuerzo, llegué a ser…', '… se convirtió en…', 'Cuando volví al colegio, me quedé…', '¡Un abrazo a todos!'],
            words: ['hacerse', 'volverse', 'convertirse en', 'llegar a ser', 'pasar a ser', 'ponerse', 'quedarse', 'con los años', 'después de mucho esfuerzo', 'desde entonces'],
            model: 'Hola a todos. Muchos se acuerdan de mí como el chico tímido de la última fila. Pues bien: estudié Ingeniería Civil, [[me hice|blue]] ingeniero y hace quince años me fui a Toronto. Allí [[me volví|violet]] mucho más abierto, porque tenía que hablar con gente de todo el mundo. Empecé como ayudante en una empresa de puentes y, después de mucho esfuerzo, [[llegué a ser|teal]] jefe de proyectos. Mi pequeño apartamento [[se convirtió en|teal]] un hogar cuando nació mi hija Emma, que ahora tiene seis años y quiere ser astronauta. Cuando entré al colegio el sábado, [[me quedé|orange]] sin palabras: la cafetería es una biblioteca. Y cuando la profesora Irene me reconoció, [[me puse|orange]] rojo como hace veinte años. ¡Gracias por organizarlo, Clara, y un abrazo a todos!',
            minWords: 90,
            checks: [
              { label: 'Hacerse (a profession or decision)', pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:(?:he|has|ha|hemos|han)\\s+hecho|hice|hiciste|hizo|hicimos|hicieron|hago|haces|hace|hacemos|hacen)(?!\\p{L})', tip: 'Cuenta tu profesión o una decisión: «Me hice enfermera», «Me hice vegetariano».' },
              { label: 'Volverse (a change of character)', pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:(?:he|has|ha|hemos|han)\\s+vuelto|volv\\p{L}*|vuelv\\p{L}*)(?!\\p{L})', tip: 'Cuenta cómo cambió tu carácter: «Con los años me he vuelto más paciente».' },
              { label: 'Convertirse en, llegar a ser o pasar a ser', pattern: '(?<!\\p{L})(?:(?:convert|convirt|conviert)\\p{L}*\\s+en|(?:lleg|pas)\\p{L}*\\s+a\\s+ser)(?!\\p{L})', tip: 'Añade una transformación o una meta: «… se convirtió en…», «Llegué a ser…».' },
              { label: 'Ponerse o quedarse (a reaction)', pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:pus\\p{L}*|pon\\p{L}*|qued\\p{L}*)(?!\\p{L})', tip: 'Cuenta una reacción: «Me puse nervioso», «Me quedé sin palabras».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:(?:he|has|ha|hemos|han)\\s+convertido|convert\\p{L}*|convirt\\p{L}*|conviert\\p{L}*)\\s+(?!en(?!\\p{L}))\\p{L}+', why: 'Revisa: ¿falta «en»? Se dice **convertirse en** + nombre: se convirtió en un museo.' },
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:(?:he|has|ha|hemos|han)\\s+vuelto|volv\\p{L}*|vuelv\\p{L}*)\\s+en\\s+(?:un|una)(?!\\p{L})', why: '«Volverse en» no existe. Con un nombre: **convertirse en** un / una…' },
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:puse|pusiste|puso|pusimos|pusieron)\\s+(?:médic|abogad|ingenier|profesor|enfermer|veterinari)\\p{L}*', why: 'Ponerse no va con profesiones. Para una profesión: **hacerse** (me hice médico).' },
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
            { tone: 'orange', label: 'PONERSE / QUEDARSE', formula: 'ponerse + adjetivo · quedarse + adjetivo / sin + nombre', example: 'Se puso rojo. Se quedó sin palabras.', caption: 'reacción del momento; resultado de un hecho', en: 'a reaction in the moment; the result of an event' },
            { tone: 'blue', label: 'HACERSE', formula: 'hacerse + nombre sin artículo / adjetivo', example: 'Se hizo veterinaria. Se hizo vegetariano.', caption: 'profesión, ideas, decisión, proceso', en: 'profession, beliefs, decision, process' },
            { tone: 'violet', label: 'VOLVERSE', formula: 'volverse + adjetivo (o un / una + nombre)', example: 'Se ha vuelto muy tranquilo.', caption: 'carácter o cualidad que cambia sin control', en: 'character or quality changing beyond your control' },
            { tone: 'teal', label: 'CONVERTIRSE EN · LLEGAR A SER · PASAR A SER', formula: 'convertirse en + nombre · llegar a ser / pasar a ser + nombre o adjetivo', example: 'Se convirtió en una biblioteca. Llegó a ser directora. Pasa a ser socio.', caption: 'transformación; meta tras un camino largo; nuevo puesto', en: 'transformation; a goal after a long road; a new post' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira **qué viene después** (adjetivo o nombre) y **qué tipo de cambio** cuentas: ¿un momento, una decisión, el carácter, una transformación o una meta? Convertirse siempre lleva **en** + nombre; las profesiones van con **hacerse**; y sin «se», **volver** es regresar. Son tendencias: a veces dos verbos son posibles, con un matiz distinto.', en: 'Look at what comes next (an adjective or a noun) and at the kind of change: a moment, a decision, character, a transformation or a goal? Convertirse always takes “en” + noun; professions go with hacerse; and without “se”, volver means to come back. These are tendencies: sometimes two verbs are possible, with a different nuance.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Cuando el jefe la felicitó delante de todos, Marta ___ colorada.', options: ['se hizo', 'se puso', 'se volvió'], answer: 1, why: 'Una reacción rápida del cuerpo: ponerse.', en: 'When her boss congratulated her in front of everyone, Marta went red.' },
            { prompt: 'Tras años de entrenamiento, Daniel ___ campeón nacional de natación.', options: ['se puso', 'se quedó', 'llegó a ser'], answer: 2, why: 'La meta de un camino largo y con esfuerzo: llegar a ser.', en: 'After years of training, Daniel went on to become national swimming champion.' },
            { prompt: 'Este pueblo pequeño ___ un destino turístico muy conocido.', options: ['se ha convertido en', 'se ha vuelto en', 'se ha puesto'], answer: 0, why: 'Transformación + nombre: convertirse en.', en: 'This small village has turned into a well-known tourist destination.' },
            { prompt: 'Desde que perdió aquel juicio, el abogado ___ muy amargado.', options: ['se ha vuelto', 'se ha convertido', 'ha pasado a ser'], answer: 0, why: 'Un cambio de carácter que no eligió: volverse.', en: 'Since he lost that court case, the lawyer has become very bitter.' },
            { prompt: 'A partir del próximo año escolar, el inglés ___ obligatorio desde primer grado.', options: ['se convertirá', 'pasará a ser', 'se pondrá'], answer: 1, why: 'Un cambio de categoría por una decisión oficial: pasar a ser.', en: 'From next school year, English will become compulsory from first grade.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el periódico del barrio. Now, the local newspaper.', blocks: [
          { kind: 'lead', text: 'Gabriel escribe las noticias del periódico del barrio. Tiene sus notas, pero necesita contar cada cambio con un solo verbo. Escribe sus frases.', en: 'Gabriel writes the news for the local newspaper. He has his notes, but he needs to tell each change with a single verb. Write his sentences.' },
          { kind: 'rewrite', title: 'Las noticias de Gabriel · Gabriel’s news', items: [
            { prompt: 'Nota: la estación de tren → ahora, un centro cultural. (Usa convertirse en.)', instruction: 'Escribe la noticia en indefinido. Empieza con «La estación de tren».', accept: ['La estación de tren se convirtió en un centro cultural'] },
            { prompt: 'Nota: desde el lunes, la calle Mayor → peatonal (cambio oficial). (Usa pasar a ser.)', instruction: 'Escribe la noticia en presente. Empieza con «Desde el lunes».', accept: ['Desde el lunes, la calle Mayor pasa a ser peatonal', 'Desde el lunes la calle Mayor pasa a ser peatonal'] },
            { prompt: 'Nota: Elena Ruiz empezó como enfermera en el hospital; veinticinco años después → directora. (Usa llegar a ser.)', instruction: 'Escribe la noticia en indefinido. Empieza con «Elena Ruiz».', accept: ['Elena Ruiz llegó a ser directora del hospital', 'Elena Ruiz llegó a ser la directora del hospital', 'Elena Ruiz llegó a ser directora', 'Elena Ruiz empezó como enfermera y llegó a ser directora del hospital', 'Elena Ruiz empezó como enfermera en el hospital y llegó a ser directora'] },
            { prompt: 'Nota: el hijo de la panadera estudió Medicina → médico. (Usa hacerse.)', instruction: 'Escribe la noticia en indefinido. Empieza con «El hijo de la panadera».', accept: ['El hijo de la panadera se hizo médico', 'El hijo de la panadera estudió Medicina y se hizo médico'] },
          ] },
        ] },
        { title: 'Ampliación: expresiones fijas · Extension: fixed expressions', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Algunos verbos de cambio forman **expresiones fijas** muy frecuentes: **hacerse tarde** y **hacerse de noche** (se me hizo tarde = I lost track of time), **hacerse realidad** (también **convertirse en realidad**: come true), **volverse loco** (go mad; también figurado: «me vuelve loca el chocolate» = I’m crazy about it), **quedarse ciego / sordo / sin trabajo** (un resultado que dura). Y para contar el final de una historia larga, en B2 verás **acabar / terminar + gerundio**: «acabó viviendo en Toronto» (he ended up living in Toronto); hoy solo lo reconoces.', en: 'Some verbs of change form very frequent fixed expressions: it gets late / it gets dark, come true, go mad (also figurative: to be crazy about something), go blind / deaf / lose your job (a lasting result). And to tell how a long story ends, at B2 you will see “acabar / terminar” + gerund: “he ended up living in Toronto”; today you only need to recognise it.' },
          { kind: 'choice', title: 'Expresiones con verbos de cambio · Expressions with verbs of change', items: [
            { prompt: 'Hablamos tanto en el reencuentro que ___ de noche sin darnos cuenta.', options: ['se hizo', 'se volvió', 'se puso'], answer: 0, why: 'Expresión fija: hacerse de noche (it got dark).', en: 'We talked so much at the reunion that it got dark without us noticing.' },
            { prompt: '¡Por fin el sueño de Lucía ___ realidad: tiene su propia clínica!', options: ['llegó a ser', 'se hizo', 'se puso'], answer: 1, why: 'Hacerse realidad (o convertirse en realidad): come true.', en: 'Lucía’s dream has finally come true: she has her own clinic!' },
            { prompt: 'Con tantos ruidos en la obra, el vecino dice que ___ loco.', options: ['se va a hacer', 'se va a volver', 'va a llegar a ser'], answer: 1, why: 'Expresión fija: volverse loco (go mad).', en: 'With so much noise from the building work, the neighbour says he’s going to go mad.' },
            { prompt: 'Cuando cerró la fábrica, trescientas personas ___ sin trabajo.', options: ['se quedaron', 'se hicieron', 'se pusieron'], answer: 0, why: 'Quedarse sin + nombre: el resultado de un hecho, aquí duradero.', en: 'When the factory closed, three hundred people lost their jobs.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Tu alumno cuenta un sueño que se hizo realidad y algo que lo vuelve loco. «Acabar / terminar + gerundio» es solo de reconocimiento: no hace falta producirlo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 111 · Pronombres personales y doble mención temática', text: 'Hoy hablaste mucho de otras personas: «Raúl se ha vuelto serio», «Irene llegó a ser directora». En la clase 111 aprendes a ponerlas al principio de la frase con un pronombre: «**A Raúl lo** vi muy cambiado», «**A Irene le** dimos un regalo». Es el paso natural: de contar cómo cambió alguien a destacar de quién hablas.', en: 'Today you talked a lot about other people: “Raúl has become serious”, “Irene went on to become head”. In class 111 you learn to put them at the start of the sentence with a pronoun: “A Raúl lo vi muy cambiado”, “A Irene le dimos un regalo”. It’s the natural next step: from telling how someone changed to highlighting who you’re talking about.', href: '/gramatica/pronombres-personales-y-doble-mencion-tematica', label: 'Ir a la clase 111' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿En qué te has convertido en los últimos diez años?». Respuesta esperada: al menos tres verbos de cambio distintos (hacerse, volverse, llegar a ser…). Tarea: escribir el texto de Escribir con la historia real del alumno.' },
        ] },
      ],
    },
  ],
};
