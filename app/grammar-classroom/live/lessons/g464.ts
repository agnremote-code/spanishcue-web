import type { LiveLesson } from '../types';

/**
 * Lesson 464 · B2 · Registro: cortesía, distancia y mandato (course unit G164).
 * Pragmatics more than grammar inventory (PCIC: tácticas pragmáticas, funciones),
 * so the class teaches the grammar that serves it. Builds on G021 (tú / vos /
 * usted / ustedes / vosotros), G058-G059 and G096 (imperative, ¡que pasen!),
 * G103 (lesson 146: ¿podrías…?, me gustaría, ¿te importaría + inf.?), G128
 * (imperfect subjunctive) and G129 (influence verbs in the past).
 * New here: a scale from direct order to distant request and the three
 * grammatical ways to create distance (ask instead of order; move the verb away
 * from the present: conditional, imperfecto de cortesía, quisiera; remove the
 * person: se ruega, se agradece, infinitive in signs); softeners (por favor,
 * anda, ¿eh?, ¿quieres?); ¿te importaría + inf. (the other person acts) vs
 * ¿le importaría que + imperf. subj. (permission / someone else acts); me
 * gustaría / quisiera / le agradecería que + imperf. subj. (anchor: «Le
 * agradecería que me informara»); orders without the imperative: present
 * (Tú te vas a tu cuarto), infinitive (No fumar; ¡A dormir!), ¡que + subj.!
 * (¡Que te calles!), haz el favor de + inf.; choosing tú / usted / vos /
 * ustedes / vosotros, with careful regional notes (ustedes as the only plural
 * in Latin America, Canarias and part of Andalusia; widespread usted in Costa
 * Rica and in many Colombian families; voseo cerrá / vení / pasame for
 * recognition). Ampliación: formal written formulas (les rogamos que,
 * ¿sería tan amable de…?, sírvase + inf., se agradecerá).
 * Scene: the residents' meeting of the Las Acacias building. Lucía Medina
 * chairs it; Ernesto Salas is the building manager (usted); Mariela Quesada,
 * a new neighbour from Costa Rica, uses usted with everyone; Facundo Ríos,
 * an Argentine neighbour, uses vos; Bruno is Lucía's teenage son. Escuchar:
 * Ernesto's voicemail to Lucía (es-CO-GonzaloNeural). Escribir: Lucía's formal
 * email to the manager. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 464,
  level: 'B2',
  title: 'Registro: cortesía, distancia y mandato',
  subtitle: 'Pedir y mandar con el grado justo de cortesía: de «Cierra la puerta» a «Le agradecería que la cerrara» y «Se ruega cerrar».',
  legend: [
    { tone: 'orange', label: 'MANDATO DIRECTO · imperativo, presente, ¡que + subjuntivo!, ¡a + infinitivo!' },
    { tone: 'blue', label: 'PREGUNTA · ¿puedes…?, ¿podrías…?, ¿te importaría…?' },
    { tone: 'violet', label: 'DISTANCIA · quería, quisiera, me gustaría que, le agradecería que' },
    { tone: 'teal', label: 'IMPERSONAL · se ruega, se agradece, no + infinitivo' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Pedir, rogar, mandar', coach: 'La misma petición, distinta distancia. Same request, different distance.',
      steps: [
        { title: 'Una puerta, cuatro maneras · One door, four ways', blocks: [
          { kind: 'lead', text: 'En el edificio Las Acacias, la puerta del portal se queda abierta casi todas las noches. Lucía Medina, presidenta de la junta de vecinos, necesita que la cierren. Pero no habla igual con su hijo, con una vecina, con el administrador o en un cartel. Ya conoces el imperativo, el condicional de cortesía y el imperfecto de subjuntivo: hoy los ordenas en una **escala**, de la orden directa a la petición más distante, y aprendes a elegir según la relación y la situación.', en: 'In the Las Acacias building the front door is left open almost every night. Lucía Medina, who chairs the residents’ association, needs people to close it. But she doesn’t talk the same way to her son, to a neighbour, to the building manager or on a sign. You already know the imperative, the polite conditional and the imperfect subjunctive: today you arrange them on a scale, from a direct order to the most distant request, and learn to choose according to the relationship and the situation.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro frases. Tu alumno dice a quién habla Lucía en cada una y qué palabra marca la distancia.', self: 'Lee las cuatro frases en voz alta. ¿A quién habla Lucía en cada una? ¿Qué palabra crea la distancia? (Who is Lucía talking to each time?)' } },
          { kind: 'compare', title: 'Cuatro destinatarios · Four addressees', columns: [
            { tone: 'orange', label: 'A SU HIJO', sentence: '[[Cierra la puerta|orange]], Bruno.', idea: 'Imperativo: confianza y autoridad. En familia no es grosero.', en: 'A plain imperative: closeness and authority. Within the family it is not rude in Spanish.' },
            { tone: 'blue', label: 'A UNA VECINA', sentence: '[[¿Te importaría cerrar|blue]] la puerta al entrar?', idea: 'Una pregunta en condicional: deja a la otra persona la opción de decir que no.', en: 'A question in the conditional leaves the other person room to say no: it sounds like a favour, not an order.' },
            { tone: 'violet', label: 'AL ADMINISTRADOR', sentence: '[[Le agradecería que revisara|violet]] el cierre de la puerta.', idea: 'Usted, condicional e imperfecto de subjuntivo: máxima distancia.', en: 'Usted, the conditional and the imperfect subjunctive together: the most distant, formal option, typical of emails and letters.' },
            { tone: 'teal', label: 'EN UN CARTEL', sentence: '[[Se ruega cerrar|teal]] la puerta.', idea: 'Impersonal: no se dirige a nadie en concreto.', en: 'Impersonal: the request is addressed to nobody in particular, so nobody feels singled out.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase deja más claro que Lucía tiene autoridad sobre la persona?', options: ['Cierra la puerta, Bruno.', '¿Te importaría cerrar la puerta al entrar?', 'Se ruega cerrar la puerta.'], answer: 0, why: 'El imperativo sin suavizar se usa con quien tenemos confianza o autoridad, como una madre con su hijo.', en: 'Which sentence shows most clearly that Lucía has authority over the person?' },
            { prompt: '¿Por qué el cartel dice «Se ruega cerrar» y no «Cierren la puerta»?', options: ['Porque «cierren» es incorrecto en un cartel.', 'Porque la forma impersonal no se dirige a nadie en concreto y suena menos brusca.', 'Porque los carteles siempre usan tú.'], answer: 1, why: '«Cierren la puerta» es correcto y también aparece en carteles; «se ruega» quita la persona y suena más cortés.', en: 'Why does the sign avoid a direct plural command?' },
          ] },
        ] },
        { title: 'La escala de la cortesía · The politeness scale', mascot: '/brand/mascot/studying.webp', coach: 'Preguntar, alejar, quitar la persona. Ask, distance, depersonalise.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TRES MANERAS DE TOMAR DISTANCIA', question: '¿Cómo se suaviza una orden en español?', en: 'Spanish grammar has three main tools for softening a request: ask instead of ordering; move the verb away from the present (conditional, polite imperfect, quisiera), which creates distance much as English does with “could” or “I was wondering”; and remove the person (se, infinitive). The more tools you combine, the more distance you create.', formula: ['preguntar en vez de ordenar: ¿Cierras la puerta? · ¿Puedes cerrarla?', 'alejar el verbo del presente: ¿Podrías…? · Quería… · Quisiera…', 'quitar la persona: Se ruega… · No + infinitivo'],
            meaning: 'Hay tres recursos gramaticales: **preguntar** en lugar de ordenar, **alejar el verbo** del presente (condicional, imperfecto, imperfecto de subjuntivo) y **quitar la persona** (se, infinitivo). Cuantos más recursos combinas, más distancia creas.',
            examples: [
              { es: '[[¿Me pasas|blue]] el acta de la última reunión?', en: 'Can you pass me the minutes of the last meeting? (A present-tense question: the everyday request between equals.)' },
              { es: '[[Quería pedirle|violet]] un favor, señor Salas.', en: 'I wanted to ask you a favour, Mr Salas. (The imperfect here refers to now: it only adds politeness.)' },
              { es: '[[Se agradece|teal]] la puntualidad.', en: 'Punctuality is appreciated. (Impersonal: typical of notices.)' },
            ] },
          { kind: 'table', title: 'De lo más directo a lo más distante · From most direct to most distant', head: ['Grado', 'Ejemplo', 'Suele usarse…'], rows: [
            ['1 · orden', '[[Cierra|orange]] la puerta.', 'en familia, entre amigos, con prisa'],
            ['2 · orden suavizada', 'Cierra la puerta, **por favor** / **anda** / ¿**eh**?', 'con confianza y amabilidad'],
            ['3 · pregunta en presente', '[[¿Cierras|blue]] la puerta? · [[¿Puedes cerrar|blue]] la puerta?', 'lo más habitual entre iguales'],
            ['4 · pregunta en condicional', '[[¿Podrías cerrar|blue]]…? · [[¿Te importaría cerrar|blue]]…?', 'para pedir un favor o con poca confianza'],
            ['5 · deseo a distancia', '[[Quería pedirle|violet]]… · [[Me gustaría que cerrara|violet]]…', 'con usted, en servicios, en el trabajo'],
            ['6 · fórmula formal', '[[Le agradecería que cerrara|violet]]…', 'correos, cartas, reclamaciones'],
          ], note: 'Más distancia no siempre es mejor: a un amigo, en la cena, «Le agradecería que me pasara la sal» suena frío o irónico. Ser cortés es **ajustar** el grado a la relación y a lo que pides (no es lo mismo la sal que prestar el coche).' },
          { kind: 'tip', icon: '💡', title: 'Los suavizadores · Softeners', text: '**Por favor** funciona siempre. **Anda** anima con cariño: «Anda, ayúdame con las sillas». **¿Eh?** insiste de forma amistosa: «No llegues tarde, ¿eh?». **¿Quieres?** tras un imperativo puede sonar impaciente, según la entonación: «Baja la música, ¿quieres?».', en: '“Por favor” always works. “Anda” coaxes warmly (“come on, help me”). “¿Eh?” insists in a friendly way. “¿Quieres?” after an imperative can sound impatient, depending on intonation, much like English “will you?”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¿Podrías cerrar la puerta?» es más cortés que «¿Puedes cerrar la puerta?». ¿Qué recurso lo consigue?', options: ['El infinitivo hace la frase impersonal.', 'El condicional aleja el verbo del presente.', 'La pregunta quita la persona.'], answer: 1, why: 'Las dos son preguntas; la diferencia es el condicional «podrías», que crea distancia.', en: 'Both are questions: what makes the first one more polite?' },
            { context: 'Lucía y su mejor amiga cenan juntas.', prompt: '¿Qué petición encaja mejor?', options: ['¿Me pasas el pan?', 'Se ruega pasar el pan.', 'Le agradecería que me pasara el pan.'], answer: 0, why: 'Entre amigas, la pregunta en presente es lo natural. La fórmula formal y la impersonal sonarían frías o en broma.', en: 'Which request fits a dinner between close friends?' },
          ] },
        ] },
        { title: 'Peticiones con subjuntivo · Requests with the subjunctive', mascot: '/brand/mascot/speaking.webp', coach: 'Condicional → imperfecto de subjuntivo. Conditional calls for imperfect subjunctive.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONDICIONAL + QUE + IMPERFECTO DE SUBJUNTIVO', question: '¿Quién hace la acción: la persona a quien hablas u otra?', en: 'With “importar”, an infinitive means the person you are talking to does the action (“¿Te importaría cerrar?” = would you mind closing?). “Que + subjunctive” means someone else does it, often you yourself: you are asking for permission (“¿Te importaría que cerrara?” = would you mind if I closed?). After a conditional (importaría, gustaría, agradecería, quisiera), the subjunctive goes into the imperfect.', formula: ['¿Te importaría + infinitivo? → la otra persona hace la acción', '¿Te importaría que + imperfecto de subjuntivo? → pides permiso o hablas de otro sujeto', 'me gustaría / quisiera / le agradecería + que + imperfecto de subjuntivo'],
            meaning: 'Con **importar**, el infinitivo significa que actúa la persona a quien hablas; **que + subjuntivo**, que actúa otra persona, muchas veces tú mismo. Después de un **condicional** (importaría, gustaría, agradecería) o de **quisiera**, el subjuntivo va en **imperfecto**: «Le agradecería que me **informara**».',
            examples: [
              { es: '[[¿Le importaría firmar|blue]] aquí, señor Salas?', en: 'Would you mind signing here, Mr Salas? (He signs.)' },
              { es: '[[¿Le importaría que abriera|blue]] la ventana? Hace mucho calor.', en: 'Would you mind if I opened the window? It’s very hot. (I open it: asking permission.)' },
              { es: '[[Quisiera que|violet]] los vecinos [[votaran|violet]] hoy mismo.', en: 'I would like the residents to vote today.' },
            ] },
          { kind: 'table', title: 'Qué tiempo de subjuntivo · Which subjunctive tense', head: ['Introducción', 'Subjuntivo', 'Ejemplo'], rows: [
            ['¿Te importa que…?', 'presente', '¿Te importa que **abra** la ventana?'],
            ['¿Te importaría que…?', 'imperfecto', '¿Te importaría que **abriera** la ventana?'],
            ['Te pido que… · Quiero que…', 'presente', 'Te pido que **cierres** al salir.'],
            ['Me gustaría que… · Quisiera que…', 'imperfecto', 'Me gustaría que **cerraras** al salir.'],
            ['Le agradecería que…', 'imperfecto', 'Le agradecería que me **enviara** el presupuesto.'],
            ['Se ruega que…', 'presente', 'Se ruega que **cierren** la puerta.'],
          ], note: 'En el habla de muchas zonas de América también se oye «me gustaría que **vengas**», con presente; en textos formales y en la norma más general se prefiere el imperfecto: «me gustaría que **vinieras**». Las formas en **-se** (enviase, informase) son equivalentes; son más frecuentes en España y en la escritura.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¿Te importaría que pusiera música?». ¿Quién pone la música?', options: ['La persona a quien se habla.', 'La persona que habla: pide permiso.', 'Los vecinos.'], answer: 1, why: '«Que pusiera» tiene otro sujeto, aquí «yo»: es una petición de permiso.', en: 'Who puts the music on?' },
            { prompt: 'Le agradecería que me ___ la fecha de la reparación.', options: ['confirma', 'confirmara', 'confirmar'], answer: 1, why: '«Agradecería que» pide subjuntivo, y tras condicional, imperfecto: confirmara.', en: 'I would be grateful if you could confirm the date of the repair.' },
          ] },
        ] },
        { title: 'Mandar sin imperativo · Orders without the imperative', mascot: '/autoestudio/mascot/noting.webp', coach: 'Presente, infinitivo, ¡que…! Present, infinitive, ¡que…!', blocks: [
          { kind: 'concept', tone: 'orange', label: 'OTRAS FORMAS DE MANDAR', question: '¿Qué formas, además del imperativo, sirven para dar una orden o una instrucción?', en: 'The present with an explicit subject sounds authoritarian (“Tú te vas ahora mismo” = you are going right now); without one it gives neutral directions or recipe steps. The infinitive is the form of signs and written instructions; “¡A + infinitive!” is a colloquial order to a child or a group, or a call (“¡A comer!” = food’s ready). “¡Que + subjunctive!” repeats an order that has been ignored, with impatience. “Haz el favor de…” usually sounds impatient too.', formula: ['presente: Tú te vas a tu cuarto. · Sigue recto y gira a la derecha.', 'infinitivo: No fumar. · Rellenar en mayúsculas. · ¡A dormir!', '¡que + subjuntivo!: ¡Que te calles! · ¡Que pase el siguiente!', 'haz el favor de + infinitivo: Haz el favor de bajar la voz.'],
            meaning: 'El **presente** con sujeto expreso suena autoritario («**Tú te vas** ahora mismo»); sin sujeto, da instrucciones neutras (indicaciones, recetas). El **infinitivo** es la forma de los carteles y las instrucciones escritas; **¡a + infinitivo!** es una orden coloquial a un niño o a un grupo. **¡Que + subjuntivo!** repite una orden que no se ha cumplido, con impaciencia. **Haz el favor de**… suele sonar impaciente.',
            examples: [
              { es: '[[Tú te sientas|orange]] ahí y no te mueves hasta que termine.', en: 'You sit down there and don’t move until I’ve finished. (Present with “tú”: an authoritarian order.)' },
              { es: '[[No dejar|teal]] bicicletas en el portal.', en: 'Do not leave bicycles in the entrance hall. (Infinitive on a sign.)' },
              { es: '¡Te he dicho que bajes! ¡[[Que bajes|orange]]!', en: 'I told you to come down! Come down! (Repeating an ignored order.)' },
            ] },
          { kind: 'compare', title: 'Dos instrucciones en presente · Two present-tense instructions', columns: [
            { tone: 'orange', label: 'AUTORIDAD', sentence: '[[Tú te vas|orange]] ahora mismo a tu cuarto.', idea: 'Con sujeto y en un conflicto: no admite discusión.', en: 'With an explicit subject, in a conflict: no discussion allowed.' },
            { tone: 'neutral', label: 'INDICACIÓN', sentence: 'Sales del ascensor y giras a la izquierda.', idea: 'Sin sujeto y sin conflicto: una explicación neutra del camino.', en: 'No subject, no conflict: neutral directions, like “you come out of the lift and turn left”.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En un formulario: «___ todos los campos en mayúsculas».', options: ['Rellenando', 'Rellenar', 'Rellenarías'], answer: 1, why: 'Las instrucciones escritas usan el infinitivo.', en: 'Fill in all fields in capital letters.' },
            { prompt: 'Lucía ha pedido dos veces a Bruno que apague la tele. La tercera dice: «¡Bruno, ___ la tele!».', options: ['que apagas', '¿te importaría apagar', 'que apagues'], answer: 2, why: 'Una orden repetida con impaciencia: que + subjuntivo. La pregunta cortés aquí sonaría irónica.', en: 'Third time: “Bruno, turn the TV off!”' },
          ] },
        ] },
        { title: 'Tú, usted, vos, ustedes · Who you are talking to', mascot: '/brand/mascot/seated.webp', coach: 'Elige la persona antes que el verbo. Choose the person before the verb.', blocks: [
          { kind: 'table', title: 'El mismo mandato, según la persona · One order, different persons', head: ['', 'Una persona', 'Varias personas'], rows: [
            ['Confianza', 'tú: **cierra** · vos: **cerrá**', 'ustedes: **cierren** (América, Canarias, parte de Andalucía) · vosotros: **cerrad** (resto de España)'],
            ['Distancia', 'usted: **cierre**', 'ustedes: **cierren** (en todas partes)'],
          ], note: 'En América, **ustedes** es el único plural: sirve igual para los hijos que para los clientes. El voseo (**cerrá**, **vení**, **decime**) es la forma de confianza en Argentina, Uruguay, Paraguay y gran parte de Centroamérica; aquí solo necesitas reconocerlo.' },
          { kind: 'tip', icon: '🌎', title: 'El usted no mide lo mismo en todas partes · Usted varies', text: 'En Costa Rica el **usted** se usa mucho, también entre amigos y en familia. En muchas familias de Colombia, padres e hijos o las parejas se tratan de usted con cariño. En España el tuteo está muy extendido, incluso en tiendas o con desconocidos jóvenes. Ante la duda con un adulto desconocido, empieza con usted y deja que te propongan el tú: «Puedes tutearme».', en: 'Usted does not signal the same distance everywhere. In Costa Rica it is very common, also among friends and in the family; in many Colombian families parents and children, or partners, use it affectionately. In Spain tú is very widespread, even in shops or with young strangers. When unsure with an adult stranger, start with usted and let them offer tú.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Lucía, pasame la lista», dice Facundo, que es argentino. ¿Qué es «pasame»?', options: ['El imperativo de vos, normal en Argentina y Uruguay.', 'El imperativo de usted.', 'Un error: debería ser «pásame».'], answer: 0, why: 'Imperativo de vos (pasá + me), con el acento en la última sílaba de «pasá»; con pronombre pierde la tilde.', en: 'What is “pasame”?' },
            { context: 'En una reunión en Lima, Lucía habla a unos vecinos jóvenes con confianza.', prompt: '«___ la puerta al salir, por favor».', options: ['Cerrad', 'Cierren', 'Cerrá'], answer: 1, why: 'En América el único plural es ustedes, tanto con confianza como con distancia.', en: 'In Lima, to a group of young neighbours: “Close the door when you leave, please.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Forma o registro? Form or register?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla antes de ver la corrección: ¿la forma del verbo o el registro?', self: 'Lee cada frase y decide qué falla: ¿la forma del verbo o el registro? Después mira la corrección. (Is the problem the verb form or the register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '¿Te importaría a cerrar la puerta?', right: '¿Te importaría cerrar la puerta?', why: '«Importar» no lleva preposición: el infinitivo es el sujeto del verbo.' },
            { wrong: '¿Le importaría que abro la ventana?', right: '¿Le importaría que abriera la ventana?', why: '«Importar que» pide subjuntivo; tras el condicional, imperfecto de subjuntivo.' },
            { wrong: 'Le agradecería que me envía el informe.', right: 'Le agradecería que me enviara el informe.', why: '«Agradecería que» pide imperfecto de subjuntivo, nunca indicativo.' },
            { wrong: 'Se ruega que los vecinos no aparcan aquí.', right: 'Se ruega que los vecinos no aparquen aquí.', why: '«Rogar que» es un verbo de petición: subjuntivo.' },
            { wrong: '¡Que te callas ya!', right: '¡Que te calles ya!', why: 'Para repetir una orden se usa que + subjuntivo.' },
            { wrong: '(En un correo al administrador) Arregle la puerta esta semana.', right: 'Le agradecería que arreglara la puerta esta semana.', why: 'La forma es correcta, pero es un imperativo seco para alguien a quien no mandas: en un correo formal se espera una petición a distancia.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Me gustaría que el administrador ___ a la próxima junta.', options: ['venir', 'viene', 'viniera'], answer: 2, why: 'Otro sujeto tras «me gustaría que»: imperfecto de subjuntivo.', en: 'I would like the manager to come to the next meeting.' },
            { prompt: '¿Qué frase es correcta pero demasiado seca para pedir algo a un desconocido?', options: ['¿Sabe qué hora es?', '¿Me podría decir la hora?', 'Dígame la hora.'], answer: 2, why: 'El imperativo de usted es correcto, pero sin pregunta ni «por favor» suena a orden.', en: 'Which sentence is correct but too blunt for a stranger?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno pide lo mismo (que le presten un paraguas) a un hermano, a una compañera nueva y a su jefa, con tres grados distintos.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La junta de vecinos', coach: 'Toca cada forma marcada. Tap each marked form.',
      steps: [
        { title: 'En el portal de Las Acacias · In the entrance hall', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno hace las demás voces. Después tu alumno toca cada forma marcada y dice si es mandato directo, pregunta, distancia o impersonal.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada: ¿mandato directo, pregunta, distancia o impersonal? (Tap each marked form and decide which resource it uses.)' } },
          { kind: 'explore', title: 'Primer punto: la puerta', setting: 'Jueves, siete de la tarde. Junta de vecinos en el portal del edificio Las Acacias. Lucía Medina preside; asisten el administrador, Ernesto Salas, Facundo Ríos (argentino) y Mariela Quesada, una vecina nueva de Costa Rica. (A residents’ meeting in the entrance hall of the building.)', lines: [
            { who: 'Lucía', text: 'Buenas tardes a todos. Si les parece, empezamos. Señor Salas, [[¿le importaría leer|blue]] el primer punto?', en: 'Good evening, everyone. If you’re all happy, let’s begin. Mr Salas, would you mind reading the first item?' },
            { who: 'Ernesto', text: 'Con mucho gusto. La puerta del portal: varios vecinos se quejan de que se queda abierta por la noche. [[Quería proponerles|violet]] un cartel: «[[Se ruega cerrar|teal]] la puerta al entrar y al salir».', en: 'With pleasure. The front door: several residents complain that it’s left open at night. I wanted to suggest a sign: “Please close the door when entering and leaving.”' },
            { who: 'Facundo', text: 'Bien, pero falta lo de las bicis, que ya no se puede pasar. Lucía, [[pasame|orange]] la lista y lo anoto.', en: 'Fine, but we’re missing the bikes issue: you can hardly get through any more. Lucía, pass me the list and I’ll write it down.' },
            { who: 'Lucía', text: 'Toma. Y sobre las bicis, señor Salas, [[me gustaría que nos buscara|violet]] un presupuesto para poner soportes en el patio.', en: 'Here you go. And about the bikes, Mr Salas, I’d like you to get us a quote for putting racks in the courtyard.' },
            { who: 'Ernesto', text: 'Cómo no. Para eso [[le agradecería que me enviara|violet]] las medidas del patio esta semana.', en: 'Of course. For that I’d be grateful if you could send me the courtyard measurements this week.' },
            { who: 'Mariela', text: 'Perdone, Lucía, [[¿podría|blue]] repetir lo del ruido? Es que llegué tarde.', en: 'Excuse me, Lucía, could you repeat the part about the noise? I got here late.' },
            { who: 'Lucía', text: 'Claro, Mariela. Es el punto dos. La propuesta para el tablón dice: «De once de la noche a siete de la mañana, [[respetar el descanso|teal]] de los vecinos».', en: 'Of course, Mariela. It’s item two. The proposal for the noticeboard says: “From 11 p.m. to 7 a.m., respect your neighbours’ rest.”' },
            { who: 'Bruno', text: '(Bajando la escalera con un balón.) Mamá, ¿puedo jugar un rato en el patio?', en: '(Coming down the stairs with a ball.) Mum, can I play in the courtyard for a bit?' },
            { who: 'Lucía', text: 'Ahora no. [[Tú te vas|orange]] arriba y estudias, que mañana tienes examen.', en: 'Not now. You’re going upstairs to study: you’ve got an exam tomorrow.' },
            { who: 'Bruno', text: 'Pero, mamá, solo diez minutos…', en: 'But Mum, just ten minutes…' },
            { who: 'Lucía', text: 'Bruno, [[que subas|orange]]. Y el balón, en casa. [[¡A estudiar!|orange]]', en: 'Bruno, I said upstairs. And the ball stays at home. Off you go and study!' },
            { who: 'Mariela', text: '(Riendo.) Me recuerda a mi mamá en San José: «[[Usted se va ya para su cuarto|orange]]». Allá el usted se usa mucho, también en familia.', en: '(Laughing.) That reminds me of my mum in San José: “You go to your room right now.” Back home usted is used a lot, in the family too.' },
          ], notes: {
            '¿le importaría leer': 'Pregunta en condicional + **infinitivo**: Lucía pide que **él** lea. Con usted, porque es el administrador y la situación es formal.',
            'Quería proponerles': '**Imperfecto de cortesía**: Ernesto propone algo ahora, pero el imperfecto lo presenta con más distancia y modestia.',
            'Se ruega cerrar': '**Se ruega + infinitivo**: fórmula impersonal de los carteles. No se dirige a nadie en concreto.',
            'pasame': 'Imperativo de **vos**: Facundo es argentino y tiene confianza con Lucía. En tú sería «pásame». En voseo el imperativo lleva el acento al final (pasá, cerrá, vení); con pronombre pierde la tilde: pasame.',
            'me gustaría que nos buscara': '**Me gustaría que + imperfecto de subjuntivo**: Lucía expresa lo que quiere como un deseo, no como una orden. Tras el condicional, imperfecto: buscara.',
            'le agradecería que me enviara': 'La fórmula más formal: **le agradecería que + imperfecto de subjuntivo**. Ernesto, como profesional, mantiene la distancia.',
            '¿podría': 'Pregunta en condicional con **usted**: Mariela trata de usted a Lucía aunque Lucía la tutea. En Costa Rica el usted es muy habitual, también entre vecinos de la misma edad.',
            'respetar el descanso': '**Infinitivo** en una norma escrita para el tablón de anuncios: instrucción general, sin persona.',
            'Tú te vas': '**Presente con sujeto expreso** como orden: suena autoritario y no admite discusión.',
            'que subas': '**Que + subjuntivo**: Lucía repite una orden que Bruno no ha cumplido. Hay impaciencia.',
            '¡A estudiar!': '**¡A + infinitivo!**: orden coloquial y enérgica, típica con niños o grupos.',
            'Usted se va ya para su cuarto': 'Presente como orden, pero con **usted**: en muchas familias de Costa Rica los padres tratan de usted a los hijos. Aquí no indica distancia, sino autoridad y costumbre.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Mariela trata de usted a Lucía?', options: ['Porque en Costa Rica el usted es muy habitual, incluso con personas cercanas.', 'Porque Lucía es mucho mayor que ella.', 'Porque está enfadada con ella.'], answer: 0, why: 'Ella misma lo explica al final: «Allá el usted se usa mucho, también en familia».', en: 'Why does Mariela use usted with Lucía?' },
            { prompt: '¿Qué necesita Ernesto para buscar el presupuesto?', options: ['Un cartel nuevo.', 'Las medidas del patio.', 'La lista de Facundo.'], answer: 1, why: '«Le agradecería que me enviara las medidas del patio esta semana».', en: 'What does Ernesto need in order to get the quote?' },
            { prompt: '¿Cómo cambia el tono de Lucía con Bruno?', options: ['Pasa de una orden en presente a repetirla con «que subas» y «¡a estudiar!»: cada vez más firme.', 'Le habla siempre con por favor.', 'Empieza con una orden y termina con una pregunta cortés.'], answer: 0, why: 'Presente con sujeto («Tú te vas») y después que + subjuntivo y a + infinitivo: sube la firmeza.', en: 'How does Lucía’s tone with Bruno change?' },
          ] },
        ] },
        { title: 'Después de la junta · After the meeting', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Grupo «Vecinos Las Acacias» · The residents’ group chat', lines: [
            { who: 'Lucía', text: 'Gracias por venir a la junta. El señor Salas pondrá esta semana el cartel: «___ la puerta al entrar y al salir».', options: ['Cerrarías', 'Que cierres', 'Se ruega cerrar'], answer: 2, why: 'Un cartel para todos: forma impersonal con «se ruega» + infinitivo.' },
            { who: 'Mariela', text: 'Lucía, ¿___ que le dejara a usted la llave del trastero? Me voy de viaje el lunes.', options: ['te importaría', 'le importaría', 'le importa'], answer: 1, why: '«Dejara» (imperfecto de subjuntivo) va con el condicional; y Mariela habla de usted: «le».' },
            { who: 'Lucía', text: 'Claro, Mariela, sin problema. Facundo, ___ que me enviaras la lista que hiciste.', options: ['me gustó', 'me gusta', 'me gustaría'], answer: 2, why: 'Petición a distancia: «me gustaría que» + imperfecto de subjuntivo (enviaras).' },
            { who: 'Facundo', text: 'Ya te la mandé por correo.' },
            { who: 'Lucía', text: 'Gracias. Y Bruno, si lees esto: ___ ahora mismo a ordenar tu cuarto.', options: ['tú te irías', 'tú te vas', 'tú te vayas'], answer: 1, why: 'Presente de indicativo con sujeto como orden firme de una madre.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno reescribe el mensaje de Lucía a Bruno con un tono más amable («Bruno, ¿puedes…?», «anda»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿A quién hablas y qué pides? Who are you asking, and for what?',
      steps: [
        { title: 'La frase justa · The right sentence', blocks: [
          { kind: 'choice', items: [
            { context: 'Lucía, en el ascensor con una señora mayor a la que apenas conoce, necesita que sujete la puerta.', prompt: '¿Qué dice Lucía?', options: ['¿Le importaría sujetarme la puerta un momento?', 'Sujeta la puerta.', '¡Que sujete la puerta!'], answer: 0, why: 'Con una persona mayor y desconocida: usted y una pregunta en condicional.', en: 'In the lift with an elderly stranger: which request fits?' },
            { context: 'Lucía y Facundo cargan sillas para la junta; son amigos.', prompt: '¿Qué frase encaja mejor?', options: ['Le agradecería que me ayudara con esta silla.', 'Ayúdame con esta silla, anda.', 'Se ruega ayudar con las sillas.'], answer: 1, why: 'Entre amigos, imperativo con un suavizador cariñoso. La fórmula formal crearía una distancia extraña.', en: 'Two friends carrying chairs: which sentence fits best?' },
            { context: 'Un cartel en el cuarto de las bicicletas.', prompt: '¿Qué texto es propio de un cartel?', options: ['No dejar bicicletas en el pasillo.', 'No dejarías bicicletas en el pasillo.', 'No dejas bicicletas en el pasillo.'], answer: 0, why: 'Los carteles usan el infinitivo para dar instrucciones generales.', en: 'Which text belongs on a sign?' },
            { context: 'Mariela pide permiso al administrador para poner una planta en el portal.', prompt: '¿Le importaría que ___ una planta junto a la puerta?', options: ['poner', 'pongo', 'pusiera'], answer: 2, why: 'Pide permiso para algo que hace ella: «que» + imperfecto de subjuntivo tras el condicional.', en: 'Would you mind if I put a plant by the door?' },
            { context: 'Facundo escribe a la empresa de mantenimiento del ascensor.', prompt: '___ saber cuándo pueden venir a revisar el ascensor.', options: ['Quería', 'Quiera', 'Querré'], answer: 0, why: 'Imperfecto de cortesía para presentar una petición formal: «Quería saber…».', en: 'I wanted to know when you can come and check the lift.' },
          ] },
        ] },
        { title: '¿Qué recurso usa? · Which tool does it use?', blocks: [
          { kind: 'classify', title: 'Clasifica cada petición · Classify each request', categories: [
            { id: 'directo', label: 'MANDATO DIRECTO', tone: 'orange' },
            { id: 'pregunta', label: 'PREGUNTA', tone: 'blue' },
            { id: 'distancia', label: 'DISTANCIA', tone: 'violet' },
            { id: 'impersonal', label: 'IMPERSONAL', tone: 'teal' },
          ], items: [
            { text: 'Usted firma aquí y aquí, y ya está.', answer: 'directo', why: 'Presente como instrucción directa, sin pregunta ni distancia.' },
            { text: '¿Me prestas la escalera un rato?', answer: 'pregunta', why: 'Pregunta en presente: la petición más habitual entre iguales.' },
            { text: 'Quería pedirle un pequeño favor.', answer: 'distancia', why: 'Imperfecto de cortesía: aleja la petición del presente.' },
            { text: 'Se agradece la puntualidad.', answer: 'impersonal', why: '«Se agradece» no se dirige a nadie en concreto.' },
            { text: 'Me gustaría que revisaran el ascensor.', answer: 'distancia', why: 'Condicional + imperfecto de subjuntivo: deseo a distancia.' },
            { text: '¡A la cama, que es tardísimo!', answer: 'directo', why: '«¡A + …!» es una orden coloquial y enérgica.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: '¿Te importaría a regar mis plantas el fin de semana?', ok: false, options: ['¿Te importaría que regar mis plantas el fin de semana?', '¿Te importaría regar mis plantas el fin de semana?', '¿Te importaría de regar mis plantas el fin de semana?'], answer: 1, why: '«Importar» va directamente con el infinitivo, sin preposición.' },
            { sentence: 'Le agradecería que me enviara el presupuesto antes del viernes.', ok: true, why: 'Correcta: condicional + que + imperfecto de subjuntivo.' },
            { sentence: 'Se ruega que los vecinos no dejan basura en la escalera.', ok: false, options: ['Se ruega que los vecinos no dejaran basura en la escalera.', 'Se ruegan que los vecinos no dejen basura en la escalera.', 'Se ruega que los vecinos no dejen basura en la escalera.'], answer: 2, why: '«Se ruega» está en presente y pide presente de subjuntivo: dejen. El verbo «ruega» va en singular.' },
            { sentence: 'Me gustaría que usted revisa la luz del garaje.', ok: false, options: ['Me gustaría que usted revisara la luz del garaje.', 'Me gustaría que usted revisaría la luz del garaje.', 'Me gustaría que usted revisó la luz del garaje.'], answer: 0, why: 'Tras «me gustaría que», subjuntivo, y en la norma general, imperfecto: revisara. Ni indicativo ni condicional después de «que».' },
            { sentence: '¿Le importaría que cierro la ventana? Entra mucho ruido.', ok: false, options: ['¿Le importaría que cerrar la ventana?', '¿Le importaría que cerraría la ventana?', '¿Le importaría que cerrara la ventana?'], answer: 2, why: 'Pide permiso para algo que hace él mismo: que + imperfecto de subjuntivo.' },
            { sentence: 'Quería preguntarle si el ascensor ya funciona.', ok: true, why: 'Correcta: imperfecto de cortesía que se refiere al presente.' },
          ] },
        ] },
        { title: 'El chat del edificio · The building chat', blocks: [
          { kind: 'chat-fill', title: 'Corte de agua · Water cut', lines: [
            { who: 'Lucía', text: 'Buenos días a todos. ___ que esta noche, a partir de las diez, no habrá agua por una reparación.', options: ['Avísenme', 'Se ruegan avisar', 'Quería avisarles'], answer: 2, why: 'Imperfecto de cortesía para introducir un aviso a los vecinos.' },
            { who: 'Lucía', text: 'Les ___ que guardaran un poco de agua antes de esa hora.', options: ['agradecerían', 'agradezco', 'agradecería'], answer: 2, why: '«Guardaran» (imperfecto de subjuntivo) pide el condicional; y la que agradece es Lucía: agradecería.' },
            { who: 'Ernesto', text: 'Buenos días. ¿___ si mañana a primera hora ya habrá agua? Tengo que avisar a la empresa de limpieza.', options: ['Supiera decirme', 'Sabría a decirme', 'Sabría decirme'], answer: 2, why: 'Pregunta cortés con condicional + infinitivo, sin preposición.' },
            { who: 'Facundo', text: 'Lucía, ¿te ___ que dejara la bici en tu trastero esta noche? El patio estará en obras.', options: ['importa', 'importaría', 'importará'], answer: 1, why: '«Dejara» va con el condicional: ¿te importaría que…?' },
            { who: 'Lucía', text: 'Claro, Facundo. Y Bruno, si lees esto: ___ la bici del pasillo. Ya.', options: ['quita', 'quitarías', 'quitar'], answer: 0, why: 'Con su hijo y con «Ya», una orden directa en imperativo de tú.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['¿Le', 'importaría', 'que', 'abriera', 'la', 'ventana?'], accept: ['¿Le importaría que abriera la ventana?'], en: 'Would you mind if I opened the window?' },
            { tiles: ['Le', 'agradecería', 'que', 'me', 'informara', 'del', 'resultado.'], accept: ['Le agradecería que me informara del resultado.'], en: 'I would be grateful if you could let me know the result.' },
            { tiles: ['Se', 'ruega', 'no', 'dejar', 'bicicletas', 'en', 'el', 'portal.'], accept: ['Se ruega no dejar bicicletas en el portal.'], en: 'Please do not leave bicycles in the entrance hall.' },
          ] },
        ] },
        { title: 'Cambia el registro · Change the register', blocks: [
          { kind: 'rewrite', title: 'Más o menos distancia · More or less distance', items: [
            { prompt: 'Cierra la ventana.', instruction: 'A un compañero de trabajo, con «¿Te importaría…?».', accept: ['¿Te importaría cerrar la ventana?'] },
            { prompt: 'Envíeme las facturas.', instruction: 'En un correo formal, con «Le agradecería que…».', accept: ['Le agradecería que me enviara las facturas', 'Le agradecería que me enviase las facturas'] },
            { prompt: 'Quiero hablar con usted un momento.', instruction: 'Con el imperfecto de cortesía.', accept: ['Quería hablar con usted un momento', 'Quería hablar un momento con usted'] },
            { prompt: 'No fumen en el portal.', instruction: 'Escríbelo como cartel: impersonal, con infinitivo.', accept: ['No fumar en el portal', 'Se ruega no fumar en el portal', 'Prohibido fumar en el portal'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno pide algo pequeño a tres personas de su vida (un familiar, un vecino, su jefe) y explica por qué elige cada forma.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje del administrador', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'El buzón de voz de Lucía · Lucía’s voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada petición de Ernesto y la forma que usa (pregunta, distancia, impersonal). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada petición de Ernesto y cómo la formula. Vas a oír «presupuesto» (quote) y «un metro» (a tape measure). (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje del administrador', channel: 'BUZÓN DE VOZ · ERNESTO SALAS PARA LUCÍA MEDINA', src: '/audio/grammar-live/464.mp3',
            before: 'Al día siguiente de la junta, Ernesto Salas, el administrador, deja un mensaje de voz a Lucía. ¿Qué crees que le va a pedir? ¿La tratará de tú o de usted? (What do you think he will ask her? Will he use tú or usted?)',
            gist: { prompt: '¿Para qué llama Ernesto? · Why does Ernesto call?', options: ['Para cancelar la próxima junta.', 'Para repartir tareas después de la junta y pedirle ayuda a Lucía.', 'Para quejarse del hijo de Lucía.'], answer: 1, why: 'Habla del cartel, del presupuesto y del vecino de la música, y le pide varias cosas.', en: 'He follows up on the meeting and asks Lucía for several things.' },
            details: [
              { prompt: '¿Qué le pide a Lucía sobre el cartel?', options: ['Que lo quite.', 'Que lo escriba ella.', 'Que lo cuelgue ella misma.'], answer: 2, why: '«¿Le importaría colgarlo usted misma? Yo no podré pasar hasta el lunes».', en: 'What does he ask her to do with the sign?' },
              { prompt: '¿Qué necesita antes del viernes?', options: ['La lista de vecinos.', 'Las llaves del trastero.', 'Las medidas del patio.'], answer: 2, why: '«Le agradecería que me las enviara antes del viernes»: las medidas del patio.', en: 'What does he need before Friday?' },
              { prompt: '¿Cómo quiere tratar el problema de la música?', options: ['Con una multa.', 'Hablando con calma con el vecino, los dos juntos.', 'Con una carta formal.'], answer: 1, why: '«Me gustaría que habláramos con él con calma… lo llamamos juntos».', en: 'How does he want to deal with the noise problem?' },
              { prompt: '¿Hasta qué hora está Ernesto en la oficina?', options: ['Hasta el lunes.', 'Hasta las siete.', 'Hasta las seis.'], answer: 2, why: '«Estoy en la oficina hasta las seis».', en: 'Until what time is Ernesto at the office?' },
            ],
            transcript: 'Buenas tardes, Lucía, habla Ernesto Salas, el administrador. [[Quería comentarle|violet]] dos cosas sobre la junta de ayer. Primero, el cartel del portal: ya lo tengo listo. Pondrá «[[Se ruega cerrar|teal]] la puerta al entrar y al salir» y, debajo, «[[No dejar|teal]] bicicletas en la entrada». [[¿Le importaría colgarlo|blue]] usted misma? Yo no podré pasar por allí hasta el lunes. Segundo, el presupuesto para los soportes de las bicicletas. El técnico necesita las medidas del patio, así que [[le agradecería que me las enviara|violet]] antes del viernes, aunque sea una foto con un metro al lado. Ah, y una cosa delicada: el vecino del segundo, el de la música, me ha escrito bastante molesto. [[Me gustaría que habláramos|violet]] con él con calma, sin cartas ni amenazas. Si a usted le parece bien, lo llamamos juntos. Bueno, no le quito más tiempo. Cuando pueda, [[¿podría devolverme|blue]] la llamada? Estoy en la oficina hasta las seis. Muchas gracias y que tenga buena tarde.',
            reply: { teacher: 'Tú eres Ernesto y contestas el teléfono. Tu alumno es Lucía, le devuelve la llamada y responde a cada petición; al final le pide algo a Ernesto con «¿Le importaría…?».', self: 'Devuelve la llamada en voz alta como Lucía: responde a las tres peticiones y pídele algo a Ernesto con «¿Le importaría…?». (Return the call aloud as Lucía.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Pedir sin pisar a nadie', coach: 'Ajusta el grado. Adjust the degree.',
      steps: [
        { title: 'Peticiones de la vida real · Real-life requests', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de la otra persona en cada situación y tu alumno pide o manda. Si el grado no encaja con la relación, tú reaccionas como lo haría esa persona (sorpresa, risa, molestia) y tu alumno lo ajusta.', self: 'Lee cada situación y responde en voz alta. Antes de hablar, decide: ¿confianza o distancia?, ¿orden, pregunta o deseo? (Decide the degree before you speak.)' } },
          { kind: 'talk', cards: [
            { q: 'Tu vecino pone música muy alta a la una de la madrugada. Pídele que la baje tres veces, cada vez con más firmeza. · Ask a neighbour three times, more firmly each time, to turn the music down.', followUps: ['¿Y si no te abre la puerta?', '¿Le dejarías una nota? ¿Qué pondría?'], phrases: ['Perdona, [[¿te importaría bajar|blue]]…?', 'Oye, [[¿puedes bajarla|blue]] ya, por favor?', '[[Haz el favor de|orange]]…'], hint: 'Empieza con pregunta y condicional; sube el grado solo si no te hace caso.', example: 'Perdona, ¿te importaría bajar un poco la música? Mañana me levanto a las seis. (Media hora después.) Oye, ¿puedes bajarla ya, por favor? (A la una y media.) Haz el favor de bajar la música, que son casi las dos.', next: 'Ahora, una llamada formal.' },
            { q: 'Llamas a la oficina del administrador de tu edificio: hay una gotera en el techo de tu baño. · You call the building manager about a leak.', followUps: ['¿Qué dices si te contestan que no pueden ir hasta la semana que viene?', '¿Cómo terminas la llamada?'], phrases: ['[[Quería comentarle|violet]]…', '[[Le agradecería que|violet]] + imperfecto de subjuntivo', '[[¿Podría|blue]] mandar a alguien…?'], hint: 'Usted de principio a fin; presenta el problema con «quería» y pide con distancia, pero con claridad.', example: 'Buenos días, soy la vecina del tercero B. Quería comentarle que tengo una gotera en el techo del baño desde el domingo. ¿Podría mandar a alguien esta semana? Le agradecería que me avisara antes, porque trabajo por las mañanas.' },
            { q: 'Eres madre o padre: tu hijo no apaga la consola. Repite la orden tres veces, cada vez con más fuerza. · As a parent, give the same order three times, more forcefully each time.', followUps: ['¿Qué dices si te contesta «cinco minutos más»?', '¿Cómo lo dirías con más humor?'], phrases: ['[[Apaga|orange]] la consola, anda.', '[[Tú la apagas|orange]] ahora mismo.', '[[¡Que la apagues!|orange]]', '[[¡A la cama!|orange]]'], hint: 'Imperativo suavizado → presente con sujeto → que + subjuntivo.', example: 'Apaga la consola, anda, que es tarde. (Nada.) Tú la apagas ahora mismo y te vas a la ducha. (Nada.) ¡Que la apagues! ¡A la cama!', next: 'Ahora, por escrito.' },
            { q: 'Dicta tres carteles para la cocina compartida de tu oficina o de tu residencia. · Dictate three signs for a shared kitchen.', followUps: ['¿Cuál es el problema más frecuente en una cocina compartida?', '¿Qué cartel sería demasiado brusco?'], phrases: ['[[No dejar|teal]]…', '[[Se ruega|teal]]…', '[[Se agradece|teal]]…'], hint: 'Infinitivo o «se ruega / se agradece»: nada de tú ni de usted.', example: 'No dejar platos sucios en el fregadero. Se ruega limpiar el microondas después de usarlo. Se agradece sacar la basura cuando el cubo esté lleno.' },
            { q: '¿Tú o usted? En tu país o en tu idioma, ¿cómo se marca la distancia? ¿Has vivido algún malentendido por eso? · How is distance marked in your language? Any misunderstandings?', followUps: ['¿Con quién usarías usted en español?', '¿Te molesta que un desconocido te tutee?', '¿Qué haces cuando no sabes qué forma usar?'], phrases: ['En mi idioma no hay…, pero…', 'Yo trataría de usted a…', 'Una vez me pasó que…'], hint: 'Compara con tu lengua: muchos idiomas marcan la cortesía con el verbo, con títulos o con la entonación.', example: 'En inglés no hay usted, pero usamos «could you» y el apellido. En español trataría de usted a una persona mayor o a un médico. Una vez tuteé a la madre de una amiga en Bogotá y ella me siguió hablando de usted; entonces cambié.', teacher: 'Tú cuentas también cómo tratas a tus alumnos, a tus vecinos y a tu familia, y tu alumno compara.' },
            { q: 'Eres Mariela: es tu primera semana en el edificio y pides a Lucía dos favores: recoger un paquete y dejar unas cajas en su trastero un mes. · As Mariela, ask Lucía two favours.', followUps: ['¿Y si Lucía duda?', '¿Cómo le das las gracias?'], phrases: ['[[Quería pedirle|violet]]…', '[[¿Le importaría que|blue]] + imperfecto de subjuntivo?', '[[¿Le importaría|blue]] + infinitivo?'], hint: 'Mariela habla de usted. Combina «¿le importaría + infinitivo?» (lo hace Lucía) y «¿le importaría que…?» (lo hace Mariela).', example: 'Lucía, perdone que la moleste. Quería pedirle dos favores. ¿Le importaría recoger un paquete mío el jueves? Y otra cosa: ¿le importaría que dejara unas cajas en su trastero un mes? Mientras termino la mudanza.', teacher: 'Tú haces de Lucía, que tutea a Mariela, y pones una pequeña condición. Tu alumno negocia sin perder la cortesía.' },
          ], swap: { teacher: 'Al final cambian los papeles: tú pides cosas con un grado equivocado a propósito («Le agradecería que me pasara la sal», «Envíeme eso ya») y tu alumno te dice cómo sonaría más natural.', self: 'Ahora haz tú una petición con un grado equivocado (demasiado seco o demasiado formal) y corrígela en voz alta. (Make a request in the wrong register and then fix it.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo al administrador', coach: 'Distancia, claridad y amabilidad. Distance, clarity and warmth.',
      steps: [
        { title: 'Un correo formal · A formal email', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada petición: ¿qué recurso usa?, ¿el grado encaja con la relación? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada petición: ¿mantienes el usted?, ¿el verbo va en imperfecto de subjuntivo después del condicional? (Check every request.)' } },
          { kind: 'write', title: 'Respuesta a Ernesto Salas · Reply to Ernesto Salas', situation: 'Eres Lucía (o tú, con un problema real de tu edificio o de tu trabajo). Respondes por correo al administrador: le mandas lo que te pidió, haces dos peticiones y propones el texto de un cartel. (Write a formal email to the building manager: send what he asked for, make two requests and propose the text for a notice.)', task: [
            'Saluda con una fórmula formal y presenta tu motivo con el imperfecto de cortesía (Quería…, Le escribía para…).',
            'Haz dos peticiones con formas distintas: ¿Podría…?, ¿Le importaría (que)…?, Me gustaría que / Le agradecería que + imperfecto de subjuntivo.',
            'Propón el texto de un cartel con «se ruega», «se agradece» o un infinitivo.',
            'Mantén el usted de principio a fin y despídete con cortesía.',
          ], starters: ['Estimado señor Salas:', 'Gracias por su mensaje.', 'Quería comentarle…', '¿Le importaría que…?', 'Me gustaría que…', 'Para el tablón propongo: «Se ruega…»', 'Le agradecería que…', 'Un cordial saludo,'],
            words: ['quería', 'le agradecería que', 'me gustaría que', '¿podría…?', '¿le importaría…?', 'se ruega', 'se agradece', 'presupuesto', 'medidas', 'tablón de anuncios'],
            model: 'Estimado señor Salas: Gracias por su mensaje. Le envío las medidas del patio: tiene seis metros de largo por cuatro de ancho, y le adjunto dos fotos con el metro al lado. Mañana mismo cuelgo el cartel. Quería comentarle también algo sobre el ruido. Me parece muy buena idea hablar con el vecino del segundo, pero ¿le importaría que lo invitáramos a un café en lugar de llamarlo? Creo que así se sentirá más escuchado. Además, me gustaría que revisara el contrato del ascensor antes de la próxima junta, porque algunos vecinos tienen dudas. Para el tablón propongo este texto: «Se ruega respetar el descanso de los vecinos de 23:00 a 7:00. No mover muebles por la noche». ¿Podría decirme si le parece adecuado? Le agradecería que me contestara antes del jueves. Un cordial saludo, Lucía Medina',
            minWords: 110,
            checks: [
              { label: 'Una petición con condicional + que + imperfecto de subjuntivo', pattern: '(?<!\\p{L})(?:agradecería|agradeceríamos|gustaría|importaría)\\s+que\\s+(?:\\p{L}+\\s+){0,2}?\\p{L}+(?:ra|ras|ran|ramos|se|ses|sen|semos)(?!\\p{L})', tip: 'Pide con distancia: «Le agradecería que me **contestara**», «Me gustaría que **revisara**…».' },
              { label: 'El imperfecto de cortesía (quería, quisiera, le escribía…)', pattern: '(?<!\\p{L})(?:quería|queríamos|quisiera|quisiéramos|escribía|llamaba|venía)(?!\\p{L})', tip: 'Presenta tu motivo con el imperfecto: «**Quería** comentarle…».' },
              { label: 'Una pregunta cortés (¿Podría…?, ¿Le importaría…?)', pattern: '¿[^?]*(?<!\\p{L})(?:podría|podrían|importaría|sabría|importa)(?!\\p{L})[^?]*\\?', tip: 'Haz al menos una petición en forma de pregunta: «¿**Podría** decirme…?».' },
              { label: 'El texto de un cartel (se ruega, se agradece…)', pattern: '(?<!\\p{L})(?:se\\s+ruega|se\\s+agradece|se\\s+agradecerá|prohibido)(?!\\p{L})', tip: 'Propón un cartel impersonal: «**Se ruega** cerrar la puerta».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})importar(?:ía|ia|a)\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: '**Importar** va sin preposición: «¿Le importaría **revisar**…?».' },
              { pattern: '(?<!\\p{L})(?:podrías|puedes|te\\s+importaría|tu\\s+mensaje|te\\s+agradecería)(?!\\p{L})', why: 'Estás tuteando al administrador: en este correo mantén el **usted** (podría, le importaría, su mensaje).' },
              { pattern: '(?<!\\p{L})(?:agradecería|gustaría|importaría)\\s+que\\s+(?:\\p{L}+\\s+)?(?:\\p{L}+ría|\\p{L}+rían)(?!\\p{L})', why: 'Después de «que» no va el condicional: «le agradecería que me **contestara**», no «contestaría».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'orange', label: 'MANDATO DIRECTO', formula: 'imperativo · tú + presente · ¡que + subjuntivo! · ¡a + infinitivo!', example: 'Cierra la puerta. Tú te vas a tu cuarto. ¡Que subas!', caption: 'confianza, autoridad o impaciencia', en: 'closeness, authority or impatience; softened with por favor, anda, ¿eh?' },
            { tone: 'blue', label: 'PREGUNTA', formula: '¿puedes…? → ¿podrías…? → ¿te importaría + infinitivo?', example: '¿Me pasas la lista? ¿Te importaría cerrar al salir?', caption: 'deja a la otra persona decir que no', en: 'a question leaves the other person room to refuse; the conditional adds distance' },
            { tone: 'violet', label: 'DISTANCIA', formula: 'quería · quisiera · me gustaría / le agradecería que + imperfecto de subjuntivo', example: 'Quería pedirle un favor. Le agradecería que me informara.', caption: 'servicios, trabajo, correos formales', en: 'the verb moves away from the present; after a conditional, imperfect subjunctive' },
            { tone: 'teal', label: 'IMPERSONAL', formula: 'se ruega / se agradece · no + infinitivo', example: 'Se ruega cerrar la puerta. No fumar.', caption: 'carteles, normas, instrucciones', en: 'signs and written rules: addressed to nobody in particular' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de pedir, decide **a quién** hablas (tú, usted, vos, ustedes) y **cuánto** pides. Después elige el recurso: preguntar, alejar el verbo o quitar la persona. Y recuerda la gramática: **¿te importaría + infinitivo?** (lo hace el otro), **¿te importaría que + imperfecto de subjuntivo?** (permiso) y **le agradecería que + imperfecto de subjuntivo**.', en: 'Before asking, decide who you are talking to and how big the request is. Then choose a tool: ask, move the verb away from the present, or remove the person. And keep the grammar straight: infinitive when the other person acts, “que” + imperfect subjunctive after a conditional.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { context: 'En una tienda, a la dependienta.', prompt: '___ ver esa chaqueta en la talla M.', options: ['Quería', 'Quiera', 'Querré'], answer: 0, why: 'Imperfecto de cortesía: «Quería ver…» = quiero ver, con amabilidad.', en: 'I’d like to see that jacket in a medium.' },
            { prompt: '¿Le importaría que ___ aquí mi maleta un momento?', options: ['dejara', 'dejaré', 'dejo'], answer: 0, why: 'Permiso para algo que hago yo: que + imperfecto de subjuntivo tras el condicional.', en: 'Would you mind if I left my suitcase here for a moment?' },
            { context: 'Cartel en una piscina.', prompt: '«___ antes de entrar en el agua».', options: ['Duchándose', 'Ducharse', 'Te duchas'], answer: 1, why: 'Instrucción general escrita: infinitivo.', en: 'Shower before entering the water.' },
            { context: 'Por tercera vez, un padre a su hija.', prompt: '«¡Laura, ___ la tele!».', options: ['que apagues', 'que apagas', 'apagarías'], answer: 0, why: 'Orden repetida con impaciencia: que + subjuntivo.', en: 'Third time: “Laura, turn the TV off!”' },
            { context: 'Correo de una empresa a un cliente.', prompt: 'Le agradeceríamos que nos ___ la factura firmada.', options: ['devolverá', 'devolviera', 'devuelve'], answer: 1, why: '«Agradeceríamos que» + imperfecto de subjuntivo.', en: 'We would be grateful if you could return the signed invoice.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en la oficina. Now, at the office.', blocks: [
          { kind: 'lead', text: 'Primera semana de Sara en una oficina nueva. Escribe frases demasiado directas y las ajusta a cada persona. Transforma sus frases.', en: 'Sara’s first week at a new office. Her first drafts are too direct, so she adjusts them to each person. Transform her sentences.' },
          { kind: 'rewrite', title: 'Sara ajusta el tono · Sara adjusts her tone', items: [
            { prompt: 'Préstame tu cargador.', instruction: 'A una compañera con la que ya tiene confianza: conviértelo en pregunta.', accept: ['¿Me prestas tu cargador?', '¿Puedes prestarme tu cargador?', '¿Me puedes prestar tu cargador?', '¿Podrías prestarme tu cargador?', '¿Me podrías prestar tu cargador?', '¿Te importaría prestarme tu cargador?'] },
            { prompt: 'Quiero que me explique el nuevo programa.', instruction: 'A su jefa, de usted, con «Me gustaría que…».', accept: ['Me gustaría que me explicara el nuevo programa', 'Me gustaría que me explicase el nuevo programa'] },
            { prompt: 'Por favor, no coman en la sala de reuniones.', instruction: 'Escríbelo como cartel impersonal.', accept: ['No comer en la sala de reuniones', 'Se ruega no comer en la sala de reuniones', 'Prohibido comer en la sala de reuniones'] },
          ] },
        ] },
        { title: 'Ampliación · La cortesía de los textos formales · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. En cartas comerciales, avisos oficiales y anuncios públicos aparecen fórmulas que casi no se usan al hablar: **Les rogamos que** + subjuntivo («Les rogamos que disculpen las molestias»), **¿Sería tan amable de** + infinitivo?, **Sírvase** + infinitivo («Sírvase firmar al pie»: muy formal, casi solo administrativo) y el futuro impersonal «**Se agradecerá** la máxima puntualidad». También el plural de las empresas: «Le **informamos** de que…».', en: 'For strong students or spare time. Business letters, official notices and public announcements use formulas you rarely hear in conversation: “Les rogamos que…” (we kindly ask you to…), “¿Sería tan amable de…?” (would you be so kind as to…?), “Sírvase + infinitive” (please…, very formal, almost only in administrative texts) and the impersonal future “Se agradecerá…” (… will be appreciated). Companies also speak in the plural: “Le informamos de que…”.' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: 'En un tren: «Les rogamos que disculpen las molestias». ¿Qué hace la empresa?', options: ['Da una orden a los viajeros.', 'Pregunta si hay molestias.', 'Pide perdón de forma muy formal.'], answer: 2, why: '«Les rogamos que disculpen» es una fórmula fija de disculpa en avisos públicos.', en: 'What is the company doing?' },
            { prompt: '¿En qué texto esperas encontrar «Sírvase adjuntar una fotocopia del documento de identidad»?', options: ['En una conversación en un bar.', 'En un mensaje a un amigo.', 'En un formulario administrativo.'], answer: 2, why: '«Sírvase + infinitivo» es propio del lenguaje administrativo; en la conversación sonaría rarísimo.', en: 'Where would you expect to read this?' },
            { prompt: '¿Qué petición es la más formal?', options: ['¿Podrías firmar aquí?', '¿Sería tan amable de firmar aquí?', '¿Me firmas aquí?'], answer: 1, why: '«¿Sería tan amable de…?» suma usted, condicional y una fórmula de elogio: máxima distancia.', en: 'Which request is the most formal?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un aviso real (de un tren, un banco o un ayuntamiento) y señala sus fórmulas de cortesía.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 165 · Conectores para exposición y refutación', text: 'Ya sabes ajustar la distancia al pedir y al mandar, del «¡Que subas!» al «Le agradecería que me informara». En la clase 165 das el paso al texto largo: aprendes los conectores que ordenan una exposición («en primer lugar», «por otra parte») y los que sirven para refutar con cortesía («si bien es cierto que…, no lo es menos que…»). Es la otra mitad del registro formal: después de pedir bien, argumentar bien.', en: 'You can now adjust the distance when you ask or tell someone to do something, from “¡Que subas!” to “Le agradecería que me informara”. In class 165 you move on to longer texts: you learn the connectors that organise an explanation and those that let you refute an argument politely. It is the other half of formal register: after asking well, arguing well.', href: '/gramatica/conectores-para-exposicion-y-refutacion', label: 'Ir a la clase 165' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “¿Te importaría cerrar?” y “¿Te importaría que cerrara?”». Respuesta esperada: en la primera cierra la otra persona; en la segunda cierra quien habla, que pide permiso. Tarea: el correo de Escribir con un problema real de su edificio o de su trabajo.' },
        ] },
      ],
    },
  ],
};
