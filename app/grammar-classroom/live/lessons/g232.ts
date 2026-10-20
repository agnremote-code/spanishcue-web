import type { LiveLesson } from '../types';

/**
 * Lesson 232 · B2 · Pasiva e impersonal.
 * A municipal library is being refurbished; the team drafts notices for
 * users and a technical report. The class is about choosing the focus:
 * active, passive with «ser», passive «se» (agreement) or impersonal «se».
 */
export const lesson: LiveLesson = {
  id: 232,
  level: 'B2',
  title: 'Pasiva e impersonal',
  subtitle: 'Elegir entre una frase activa, una pasiva con «ser» y una construcción con «se» para escribir avisos claros y útiles.',
  legend: [
    { tone: 'blue', label: 'Activa · quien actúa en primer plano' },
    { tone: 'teal', label: 'Pasiva con ser · ser + participio (+ por + agente)' },
    { tone: 'orange', label: 'Pasiva refleja · se + verbo que concuerda con la cosa' },
    { tone: 'violet', label: 'Impersonal con se · verbo en singular (a + personas)' },
  ],
  optionNotes: {
    'Se alquila dos salas.': '«Dos salas» es el sujeto: el verbo concuerda en plural, «se alquilan».',
    'Se entrevistaron a las candidatas.': 'Con «a» + personas no hay sujeto plural: el verbo va en singular, «se entrevistó».',
    'serán revisado': 'El participio concuerda con el sujeto: «las instalaciones serán revisadas».',
    'será revisadas': '«Ser» concuerda con el sujeto plural: «serán revisadas».',
    'Se publicará': 'Si lo que se publica es plural («las fechas»), el verbo va en plural: «se publicarán».',
    'se publicará': 'Si lo que se publica es plural («las fechas»), el verbo va en plural: «se publicarán».',
    'Se atenderán': 'Con «a» + personas, la construcción es impersonal y el verbo va en singular: «se atenderá a…».',
    'se atenderán': 'Con «a» + personas, la construcción es impersonal y el verbo va en singular: «se atenderá a…».',
    'se necesitan a': 'Con «a» + personas concretas, el verbo va en singular: «se necesita a…».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién o qué va primero?', coach: 'El mismo hecho, cuatro focos distintos.',
      steps: [
        { title: 'Tres borradores para un aviso · Three drafts of a notice', blocks: [
          { kind: 'lead', text: 'La biblioteca municipal prepara una reforma. El equipo revisa tres borradores del aviso para los usuarios. Los tres dicen lo mismo, pero cada uno pone en primer plano una información distinta.', en: 'The public library is about to be refurbished. The team is reviewing three drafts of the notice for users. All three say the same thing, but each one puts a different piece of information in the foreground.' },
          { kind: 'guide', text: { teacher: 'Lean los tres borradores. Pregunta: «Si eres usuario de la biblioteca, ¿qué necesitas saber? ¿Te importa quién cierra la sala?».', self: 'Lee los tres borradores. Imagina que eres usuario: ¿qué información necesitas? ¿Cuál es el mejor aviso para ti?' } },
          { kind: 'compare', title: 'Un hecho, tres frases', columns: [
            { tone: 'blue', label: 'ACTIVA', sentence: '[[La empresa contratada cerrará|blue]] la sala de estudio el lunes.', idea: 'Empieza por quien actúa: la empresa.', en: 'Active: it starts with whoever acts, the company.' },
            { tone: 'teal', label: 'PASIVA CON SER', sentence: 'La sala de estudio [[será cerrada|teal]] el lunes [[por la empresa contratada|teal]].', idea: 'Empieza por la sala y menciona al agente al final. Suena formal.', en: 'Passive with ser: it starts with the room and names the agent at the end. It sounds formal, like English “will be closed by…”.' },
            { tone: 'orange', label: 'SE', sentence: '[[Se cerrará|orange]] la sala de estudio el lunes.', idea: 'Lo importante es el cierre. No dice quién lo hace.', en: 'Se: what matters is the closure. It does not say who does it, much like a notice saying “Study room closing on Monday”.' },
          ] },
          { kind: 'tip', icon: '🎯', title: 'Ninguna es «la mejor» siempre', text: 'La coordinadora elige «Se cerrará la sala» porque a los usuarios les importa **qué** cambia, no **quién** pone la valla. Pero en el informe sobre el contrato, la empresa sí es importante. La forma depende de **qué información sirve al lector**.', en: 'None is always “the best”. The coordinator chooses «Se cerrará la sala» because users care about what changes, not who puts up the barrier. In the report on the contract, though, the company does matter. The form depends on what information helps the reader.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un usuario quiere saber si puede estudiar el lunes. ¿Qué frase le da la información de forma más directa?', options: ['Se cerrará la sala de estudio el lunes.', 'La empresa Obras Norte cerrará la sala el lunes.'], answer: 0, why: 'Para el usuario, lo relevante es el cierre; quién lo hace no le ayuda a actuar.', en: 'A user wants to know if they can study on Monday. Which sentence gives them the information most directly?' },
            { prompt: 'El ayuntamiento informa de qué empresa ganó el concurso. ¿Qué frase sirve mejor?', options: ['Las ventanas serán instaladas por Obras Norte.', 'Se instalarán las ventanas.'], answer: 0, why: 'Aquí el agente es la información importante: la pasiva con «por» lo incluye.', en: 'The council is announcing which company won the tender. Which sentence works best?' },
          ] },
        ] },
        { title: 'Activa y pasiva con ser · Active and passive with ser', mascot: '/brand/mascot/studying.webp', coach: 'Ser + participio, y el participio concuerda.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PASIVA CON SER', question: '¿Quieres empezar por lo que recibe la acción y quizá nombrar al agente?', en: 'The passive with ser puts what receives the action in the foreground. The participle agrees with that subject in gender and number, and the agent is added with «por» (by) when it is useful. It is typical of formal texts: reports, news, official documents. In conversation Spanish uses it much less than English does.', formula: ['sujeto paciente + ser + participio (+ por + agente)'],
            meaning: 'La pasiva con **ser** pone en primer plano **lo que recibe la acción**. El participio **concuerda** con ese sujeto (género y número). El agente aparece con **por** si es útil. Es frecuente en textos formales: informes, noticias, documentos oficiales.',
            examples: [
              { es: 'Las instalaciones [[serán revisadas por una empresa externa|teal]].', en: 'The facilities will be inspected by an outside company.' },
              { es: 'Las ventanas [[serán instaladas por el equipo que ganó el concurso|teal]].', en: 'The windows will be fitted by the team that won the tender.' },
              { es: 'El nuevo reglamento [[fue aprobado|teal]] ayer.', en: 'The new regulations were approved yesterday.' },
              { es: 'La biblioteca [[fue inaugurada por la alcaldesa|teal]] en 1998.', en: 'The library was opened by the mayor in 1998.' },
            ],
            note: 'Compara con la activa: «[[Una empresa externa revisará|blue]] las instalaciones». La activa es más directa y es la opción normal en la conversación.' },
          { kind: 'table', title: 'La concordancia del participio', head: ['Sujeto', 'Ser', 'Participio'], rows: [
            ['La sala', 'será', 'cerrad**a**'],
            ['El edificio', 'será', 'cerrad**o**'],
            ['Las ventanas', 'serán', 'instalad**as**'],
            ['Los horarios', 'serán', 'publicad**os**'],
          ], note: '**Ser** cambia de tiempo (fue, es, será, ha sido) y concuerda en número; el **participio** concuerda en género y número.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las instalaciones ___ por una empresa externa.', options: ['serán revisadas', 'serán revisado', 'será revisadas'], answer: 0, why: '«Ser» y el participio concuerdan con «las instalaciones».', en: 'The facilities will be inspected by an outside company. Watch agreement with «las instalaciones».' },
            { prompt: 'Los resultados del concurso ___ ayer por el ayuntamiento.', options: ['fueron publicados', 'fue publicado', 'fueron publicadas'], answer: 0, why: '«Los resultados»: masculino plural.', en: 'The council published the results of the tender yesterday. Watch agreement with «los resultados».' },
          ] },
        ] },
        { title: 'Pasiva refleja: se + verbo que concuerda · Passive se: the verb agrees', mascot: '/brand/mascot/speaking.webp', coach: 'Con cosas, el verbo mira a la cosa.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PASIVA REFLEJA', question: '¿Lo importante es lo que se hace con algo, sin decir quién?', en: 'This highlights an action done to something and leaves out the agent. The thing is the grammatical subject: singular thing, singular verb; plural thing, plural verb. It is the most common form in notices, signs and adverts (“Rooms for rent”, “Timetables will be published tomorrow”).', formula: ['se + verbo (3.ª persona) + cosa', 'el verbo concuerda con la cosa'],
            meaning: 'Destaca una acción **sobre algo** y omite al agente. La cosa es el **sujeto**: si es singular, el verbo va en singular; si es plural, en plural. Es la forma más frecuente en avisos, carteles y anuncios.',
            examples: [
              { es: '[[Se habilita|orange]] una sala provisional.', en: 'A temporary room is being set up.' },
              { es: '[[Se habilitan|orange]] veinte puestos en el edificio de al lado.', en: 'Twenty study places are being set up in the building next door.' },
              { es: '[[Se publicarán|orange]] los horarios mañana.', en: 'The timetables will be published tomorrow.' },
              { es: '[[Se alquilan|orange]] dos salas para reuniones.', en: 'Two meeting rooms for rent.' },
            ],
            note: 'En la lengua cuidada, «se publicarán los horarios» y no «se publicará los horarios». Es una forma que se oye, pero no se recomienda en la escritura formal.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elige el aviso correcto.', options: ['Se alquilan dos salas.', 'Se alquila dos salas.'], answer: 0, why: '«Dos salas» es el sujeto plural: el verbo va en plural.', en: 'Choose the correct notice: two rooms for rent.' },
            { prompt: 'Mañana ___ las fechas definitivas.', options: ['se publicarán', 'se publicará', 'publicarán se'], answer: 0, why: '«Las fechas» es plural: se publicarán.', en: 'The final dates will be published tomorrow. What is the subject?' },
          ] },
        ] },
        { title: 'Impersonal con se: singular siempre · Impersonal se: always singular', mascot: '/autoestudio/mascot/noting.webp', coach: 'Con «a» + personas, singular.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'IMPERSONAL CON SE', question: '¿Hablas de una actividad en general o de personas concretas con «a»?', en: 'Here there is no grammatical subject. It is used for rules and general activities («se trabaja en silencio»: people work quietly here) and for actions done to specific people, who take «a». Since there is no subject, the verb is always singular, however many people are involved.', formula: ['se + verbo en 3.ª persona singular', 'se + verbo singular + a + personas'],
            meaning: '**No hay sujeto gramatical**. Sirve para normas y actividades generales («se trabaja en silencio») y para acciones sobre **personas concretas**, que llevan **a**. Como no hay sujeto, el verbo va **siempre en singular**.',
            examples: [
              { es: 'Aquí [[se trabaja|violet]] en silencio.', en: 'People work in silence here.' },
              { es: '[[Se atenderá a los usuarios|violet]] con cita en la entrada principal.', en: 'Users with an appointment will be seen at the main entrance.' },
              { es: '[[Se entrevistó a las candidatas|violet]] el martes.', en: 'The candidates were interviewed on Tuesday.' },
              { es: 'En esta sala [[se está|violet]] muy bien en invierno.', en: 'This room is a really nice place to be in winter.' },
            ] },
          { kind: 'compare', title: 'Con «a» o sin «a»', columns: [
            { tone: 'orange', label: 'PASIVA REFLEJA', sentence: '[[Se buscan profesionales|orange]] con experiencia.', idea: 'Profesionales en general, sin «a»: es el sujeto y el verbo concuerda en plural.', en: 'Passive se: professionals in general, without «a». They are the subject, so the verb is plural (“professionals wanted”).' },
            { tone: 'violet', label: 'IMPERSONAL', sentence: '[[Se busca a los profesionales|violet]] inscritos en la lista.', idea: 'Personas concretas, con «a»: no son sujeto. Verbo en singular.', en: 'Impersonal se: specific people, with «a». They are not the subject, so the verb is singular (“we are looking for the professionals on the list”).' },
          ] },
          { kind: 'table', title: 'Resumen: ¿singular o plural?', head: ['Construcción', 'Ejemplo', 'Verbo'], rows: [
            ['se + cosa singular', '[[Se abre|orange]] una sala.', 'singular'],
            ['se + cosas plurales', '[[Se abren|orange]] tres salas.', '**plural**'],
            ['se + a + personas', '[[Se atiende a|violet]] los usuarios.', '**singular**'],
            ['se + verbo sin objeto', '[[Se trabaja|violet]] en silencio.', 'singular'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elige la frase correcta.', options: ['Se entrevistó a las candidatas.', 'Se entrevistaron a las candidatas.'], answer: 0, why: 'Con «a las candidatas» no hay sujeto plural: singular.', en: 'Choose the correct sentence: the candidates were interviewed.' },
            { prompt: '___ a las personas inscritas en recepción.', options: ['Se atenderá', 'Se atenderán', 'Serán atendido'], answer: 0, why: 'Personas concretas con «a»: impersonal en singular.', en: 'The registered people will be seen at reception. Notice the «a».' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Piensa en el lector.', blocks: [
          { kind: 'decide', title: 'Piensa en tu aviso y responde', steps: [
            { q: '¿Es importante para el lector saber quién actúa?', yes: 'Nómbralo. Con la **activa** («[[La empresa revisará|blue]] las instalaciones») o, en un texto formal, con la **pasiva con ser** («Las instalaciones [[serán revisadas por la empresa|teal]]»).', no: 'next' },
            { q: '¿La acción recae sobre cosas?', yes: '**Pasiva refleja**, con el verbo concordando: «[[Se habilitarán|orange]] veinte puestos».', no: 'Si son personas concretas (con «a») o una actividad general, **impersonal en singular**: «[[Se atenderá a|violet]] los usuarios», «[[Se trabaja|violet]] en silencio».' },
          ] },
          { kind: 'tip', icon: '⚠', title: 'Sin agente, pero con información', text: 'Omitir al agente no debe ocultar información útil. «Se suspende toda la actividad» es más corto que «Se cierran dos salas; los préstamos continúan», pero es **falso**. Un buen aviso dice qué cambia, qué sigue y dónde ir.', en: 'No agent, but still informative. Leaving out the agent must not hide useful information. «Se suspende toda la actividad» (all activity suspended) is shorter than «Se cierran dos salas; los préstamos continúan», but it is false. A good notice says what changes, what carries on and where to go.' },
          { kind: 'tip', icon: '📝', title: 'No conviertas todo en pasiva', text: 'La pasiva con **ser** es correcta, pero en un aviso breve puede sonar pesada. Para un cartel suele funcionar mejor **se**. Y si el agente importa, la **activa** es más directa.', en: 'Don’t turn everything into a passive. The passive with ser is correct, but in a short notice it can sound heavy. On a sign, se usually works better. And if the agent matters, the active is more direct.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Fíjate en la concordancia.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno encuentra el error y dice cuál es el sujeto de la frase (o si no lo hay) antes de que muestres la corrección.', self: 'Lee cada frase y pregúntate: ¿cuál es el sujeto? Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Se alquila dos salas.', right: 'Se alquilan dos salas.', why: '«Dos salas» es el sujeto: el verbo va en plural.' },
            { wrong: 'Se entrevistaron a las candidatas.', right: 'Se entrevistó a las candidatas.', why: 'Con «a» + personas, la frase es impersonal: singular.' },
            { wrong: 'Las ventanas serán instalado por la empresa.', right: 'Las ventanas serán instaladas por la empresa.', why: 'El participio concuerda con «las ventanas».' },
            { wrong: 'Se publicará los horarios mañana.', right: 'Se publicarán los horarios mañana.', why: 'En la lengua cuidada, el verbo concuerda con «los horarios».' },
            { wrong: 'La sala se cerrará por la empresa.', right: 'La sala será cerrada por la empresa. / La empresa cerrará la sala.', why: 'La pasiva con «se» no suele llevar agente con «por». Si quieres nombrarlo, usa «ser» o la activa.' },
            { wrong: 'Se necesitan a dos técnicos del turno de noche.', right: 'Se necesita a los dos técnicos del turno de noche.', why: 'Con «a» + personas concretas, el verbo va en singular.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que piense en un aviso real de su trabajo o edificio y lo diga de tres formas. Pregunta: «¿Cuál pondrías en la puerta? ¿Cuál en un informe?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Avisos que ayudan a actuar', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Revisar el aviso · Reviewing the notice', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después el alumno toca cada expresión y explica por qué el equipo eligió esa forma.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'La reunión del equipo', setting: 'En la biblioteca municipal, la coordinadora, Irene, revisa con Nicolás y Paula el aviso sobre la reforma.', lines: [
            { who: 'Nicolás', text: 'He escrito el aviso así: «[[La empresa contratada cerrará|blue]] la sala de estudio el lunes».', en: 'I’ve written the notice like this: “The contracted company will close the study room on Monday.”' },
            { who: 'Irene', text: 'A los usuarios no les importa quién cierra la sala. Mejor: «[[Se cerrará|orange]] la sala de estudio el lunes».', en: 'Users don’t care who closes the room. Better: “The study room will close on Monday.”' },
            { who: 'Paula', text: '¿Y qué hacemos con la gente que viene a estudiar?', en: 'And what do we do about the people who come to study?' },
            { who: 'Irene', text: 'Hay que decirlo: «[[Se habilitarán veinte puestos|orange]] en el edificio de al lado».', en: 'We need to say so: “Twenty study places will be set up in the building next door.”' },
            { who: 'Nicolás', text: '¿Y las personas que tienen cita con el servicio de orientación?', en: 'And the people who have an appointment with the advice service?' },
            { who: 'Irene', text: 'Añade: «[[Se atenderá a los usuarios|violet]] con cita en la entrada principal».', en: 'Add: “Users with an appointment will be seen at the main entrance.”' },
            { who: 'Paula', text: '¿No es «se atenderán», en plural? Son muchos usuarios.', en: 'Isn’t it «se atenderán», in the plural? There are lots of users.' },
            { who: 'Irene', text: 'No, porque lleva «a»: los usuarios no son el sujeto.', en: 'No, because it has «a»: the users are not the subject.' },
            { who: 'Nicolás', text: 'Entendido. Y en el informe para el ayuntamiento, ¿también usamos «se»?', en: 'Got it. And in the report for the council, do we use «se» too?' },
            { who: 'Irene', text: 'No. Ahí la empresa es importante: «Las ventanas [[serán instaladas por el equipo que ganó el concurso|teal]]».', en: 'No. There the company matters: “The windows will be fitted by the team that won the tender.”' },
            { who: 'Paula', text: 'Una cosa más: en la sala provisional hay que pedir silencio.', en: 'One more thing: in the temporary room we need to ask for silence.' },
            { who: 'Irene', text: 'Pon un cartel pequeño: «Aquí [[se trabaja|violet]] en silencio».', en: 'Put up a small sign: “Silence, please: this is a study area.”' },
          ], notes: {
            'La empresa contratada cerrará': 'Una **activa**: pone a la empresa en primer plano. Correcta, pero no es lo que el usuario necesita saber.',
            'Se cerrará': '**Pasiva refleja**: lo importante es el cierre. «La sala» es el sujeto singular.',
            'Se habilitarán veinte puestos': '«Veinte puestos» es el sujeto plural: el verbo **concuerda** en plural.',
            'Se atenderá a los usuarios': '**Impersonal**: «a los usuarios» no es el sujeto. El verbo va en singular aunque sean muchos.',
            'serán instaladas por el equipo que ganó el concurso': '**Pasiva con ser** y agente: en un informe, quién hace el trabajo es información relevante.',
            'se trabaja': '**Impersonal** sin objeto: una norma general para todos.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Irene cambia el primer borrador?', options: ['Porque a los usuarios les importa el cierre, no quién lo hace.', 'Porque la frase tenía un error.', 'Porque la empresa no quiere aparecer.'], answer: 0, why: '«A los usuarios no les importa quién cierra la sala».', en: 'Why does Irene change the first draft?' },
            { prompt: '¿En qué texto sí quieren nombrar a la empresa?', options: ['En el informe para el ayuntamiento.', 'En el cartel de la sala.', 'En el aviso para usuarios.'], answer: 0, why: '«Ahí la empresa es importante».', en: 'In which text do they want to name the company?' },
          ] },
        ] },
        { title: 'Un anuncio de trabajo · A job advert', mascot: '/brand/mascot/speaking.webp', coach: 'Con «a» o sin «a» cambia el verbo.', blocks: [
          { kind: 'explore', title: 'Buscar personal para la reforma', setting: 'Irene llama a Recursos Humanos para pedir personal temporal durante la reforma.', lines: [
            { who: 'Irene', text: 'Necesitamos ayuda durante la reforma. ¿Pueden publicar un anuncio?', en: 'We need help during the refurbishment. Can you post an advert?' },
            { who: 'Elías (RR. HH.)', text: 'Claro. ¿Pongo «[[Se buscan auxiliares|orange]] de biblioteca»?', en: 'Sure. Shall I put “Library assistants wanted”?' },
            { who: 'Irene', text: 'Sí. Y que diga «[[Se valorará|orange]] la experiencia con público».', en: 'Yes. And have it say “Experience with the public will be valued.”' },
            { who: 'Elías (RR. HH.)', text: 'Perfecto. Por cierto, ¿qué hacemos con las personas que ya se inscribieron el año pasado?', en: 'Perfect. By the way, what do we do with the people who registered last year?' },
            { who: 'Irene', text: 'Que tengan prioridad. Escribe: «[[Se contactará a las personas inscritas|violet]] antes de abrir el proceso».', en: 'Give them priority. Write: “The registered candidates will be contacted before the process opens.”' },
            { who: 'Elías (RR. HH.)', text: 'Bien. ¿Y las entrevistas?', en: 'Fine. And the interviews?' },
            { who: 'Irene', text: '[[Se realizarán|orange]] el jueves. Ah, y añade que el contrato [[será firmado|teal]] antes del lunes.', en: 'They’ll be held on Thursday. Oh, and add that the contract will be signed before Monday.' },
            { who: 'Elías (RR. HH.)', text: 'Hecho. [[Se publica|orange]] mañana por la mañana.', en: 'Done. It goes out tomorrow morning.' },
          ], notes: {
            'Se buscan auxiliares': 'Auxiliares en general, sin «a»: es el **sujeto** y el verbo concuerda en plural.',
            'Se valorará': '**Pasiva refleja** con sujeto singular: «la experiencia».',
            'Se contactará a las personas inscritas': 'Personas **concretas** con «a»: impersonal en singular.',
            'Se realizarán': 'El sujeto es «las entrevistas» (plural), aunque no se repite.',
            'será firmado': '**Pasiva con ser**: el contrato en primer plano, en un registro formal.',
            'Se publica': 'El sujeto es «el anuncio»: singular.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Por qué "se buscan auxiliares" pero "se contactará a las personas inscritas"?». La clave es la «a» y si las personas son concretas o no.' },
        ] },
        { title: '¿Qué construcción es? · Which construction is it?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'ser', label: 'Pasiva con ser', tone: 'teal' },
            { id: 'refleja', label: 'Pasiva refleja (concuerda)', tone: 'orange' },
            { id: 'impersonal', label: 'Impersonal (singular)', tone: 'violet' },
          ], items: [
            { text: 'Se habilitarán veinte puestos.', answer: 'refleja', why: 'El verbo concuerda con «veinte puestos».' },
            { text: 'Se atenderá a los usuarios con cita.', answer: 'impersonal', why: '«A los usuarios»: singular.' },
            { text: 'Las ventanas serán instaladas por el equipo.', answer: 'ser', why: 'Ser + participio + por + agente.' },
            { text: 'Aquí se trabaja en silencio.', answer: 'impersonal', why: 'Una norma general sin sujeto.' },
            { text: 'Se buscan auxiliares de biblioteca.', answer: 'refleja', why: 'Sin «a»: el verbo concuerda en plural.' },
            { text: 'Se contactará a las personas inscritas.', answer: 'impersonal', why: 'Personas concretas con «a».' },
            { text: 'El contrato será firmado antes del lunes.', answer: 'ser', why: 'Ser + participio.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca el sujeto: él decide el verbo.',
      steps: [
        { title: 'Elige según el contexto · Choose from the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Un cartel en la puerta de un edificio.', prompt: '___ dos apartamentos amueblados.', options: ['Se alquilan', 'Se alquila', 'Son alquilado'], answer: 0, why: '«Dos apartamentos» es el sujeto plural.', en: 'A sign on the door of a building: two furnished flats are available to rent.' },
            { context: 'Un aviso del hospital sobre los pacientes de la mañana.', prompt: '___ a los pacientes en la planta baja.', options: ['Se atenderá', 'Se atenderán', 'Serán atendido'], answer: 0, why: 'Personas con «a»: impersonal en singular.', en: 'A hospital notice about the morning patients. Notice the «a».' },
            { context: 'Una noticia: interesa saber quién inauguró el museo.', prompt: 'El museo ___ por la ministra de Cultura.', options: ['fue inaugurado', 'se inauguró', 'fue inaugurada'], answer: 0, why: 'Para nombrar al agente con «por», pasiva con ser. «El museo»: masculino.', en: 'A news item: readers want to know who opened the museum.' },
            { context: 'Una norma en la entrada de un templo.', prompt: 'Aquí no ___ con gorra.', options: ['se entra', 'se entran', 'son entrados'], answer: 0, why: 'Una norma general sin sujeto: impersonal en singular.', en: 'A rule at the entrance to a place of worship: no caps inside.' },
            { context: 'Un aviso del ayuntamiento sobre las calles del centro.', prompt: 'El sábado ___ las calles del centro al tráfico.', options: ['se cerrarán', 'se cerrará', 'serán cerrado'], answer: 0, why: '«Las calles» es el sujeto plural.', en: 'A council notice about the streets in the centre on Saturday.' },
            { context: 'Una empresa busca a dos personas concretas de su lista.', prompt: '___ a los dos candidatos finalistas para una segunda entrevista.', options: ['Se convoca', 'Se convocan', 'Es convocado'], answer: 0, why: 'Personas concretas con «a»: singular.', en: 'A company is calling two specific people from its shortlist.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice **quién** revisará las instalaciones?', options: ['Las instalaciones serán revisadas por una empresa externa.', 'Se revisarán las instalaciones.'], answer: 0, why: 'La pasiva con «por» nombra al agente; con «se» no aparece.', en: 'Which sentence says who will inspect the facilities?' },
            { prompt: '«Se buscan profesionales» / «Se busca a los profesionales inscritos». ¿Qué diferencia hay?', options: ['La primera habla de profesionales en general; la segunda, de personas concretas.', 'No hay diferencia de significado.', 'La primera es incorrecta.'], answer: 0, why: 'Sin «a»: en general (pasiva refleja). Con «a»: personas concretas (impersonal).', en: 'What is the difference between «Se buscan profesionales» and «Se busca a los profesionales inscritos»?' },
            { prompt: '¿Qué aviso es **engañoso** si los préstamos continúan?', options: ['Se suspende toda la actividad.', 'Se cierran dos salas; el préstamo continúa.'], answer: 0, why: 'Omitir información puede hacer un aviso falso: no se suspende todo.', en: 'Which notice is misleading if book loans carry on?' },
            { prompt: '¿Qué frase es más adecuada para un **cartel** en la puerta?', options: ['Se cierra por obras.', 'El local es cerrado por obras por la empresa propietaria.'], answer: 0, why: 'En un cartel, «se» es breve y suficiente; la pasiva con ser suena pesada.', en: 'Which sentence suits a sign on the door better?' },
          ] },
        ] },
        { title: 'Completa el aviso · Complete the notice', blocks: [
          { kind: 'chat-fill', title: 'Correos del equipo antes de publicar', lines: [
            { who: 'Irene', text: 'Para el cartel de la entrada: «Durante la reforma ___ la sala de estudio».', options: ['se cerrará', 'se cerrarán', 'será cerrado'], answer: 0, why: '«La sala de estudio»: sujeto singular.' },
            { who: 'Nicolás', text: '¿Y las alternativas? «___ veinte puestos en el edificio de al lado».', options: ['Se habilitarán', 'Se habilitará', 'Serán habilitado'], answer: 0, why: '«Veinte puestos»: plural.' },
            { who: 'Paula', text: '«En la sala provisional ___ a las personas con cita».', options: ['se atenderá', 'se atenderán', 'serán atendido'], answer: 0, why: 'Con «a» + personas: singular.' },
            { who: 'Irene', text: 'Para el informe técnico: «Los trabajos ___ por la empresa Obras Norte».', options: ['serán realizados', 'serán realizadas', 'se realizarán por'], answer: 0, why: '«Los trabajos»: masculino plural. Con agente, pasiva con ser.' },
            { who: 'Nicolás', text: '¿Y las fechas? «___ las fechas definitivas el jueves».', options: ['Se publicarán', 'Se publicará', 'Es publicado'], answer: 0, why: '«Las fechas»: plural.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Se vende bicicletas usadas.', ok: false, options: ['Se venden bicicletas usadas.', 'Se vende a bicicletas usadas.', 'Son vendido bicicletas usadas.'], answer: 0, why: '«Bicicletas» es el sujeto plural.' },
            { sentence: 'Se informó a los vecinos del corte de agua.', ok: true, why: 'Correcta: impersonal con «a» + personas, en singular.' },
            { sentence: 'Los resultados serán publicadas el lunes.', ok: false, options: ['Los resultados serán publicados el lunes.', 'Los resultados será publicado el lunes.', 'Los resultados se serán publicados el lunes.'], answer: 0, why: 'El participio concuerda con «los resultados»: masculino plural.' },
            { sentence: 'Se felicitaron a los ganadores.', ok: false, options: ['Se felicitó a los ganadores.', 'Se felicitaron los ganadores a.', 'Fue felicitado a los ganadores.'], answer: 0, why: 'Con «a» + personas: singular.' },
            { sentence: 'Se necesita ayuda para la mudanza.', ok: true, why: 'Correcta: «ayuda» es el sujeto singular.' },
            { sentence: 'Se ofrece clases de yoga los martes.', ok: false, options: ['Se ofrecen clases de yoga los martes.', 'Se ofrece a clases de yoga los martes.', 'Son ofrecido clases de yoga los martes.'], answer: 0, why: '«Clases de yoga»: sujeto plural.' },
          ] },
        ] },
        { title: 'Construye y transforma · Build and transform', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Se', 'habilitarán', 'veinte', 'puestos', 'nuevos'], accept: ['Se habilitarán veinte puestos nuevos'], en: 'Twenty new study places will be set up.' },
            { tiles: ['Se', 'atenderá', 'a', 'los', 'usuarios', 'con', 'cita'], accept: ['Se atenderá a los usuarios con cita'], en: 'Users with an appointment will be seen.' },
            { tiles: ['Las', 'ventanas', 'serán', 'instaladas', 'por', 'la', 'empresa'], accept: ['Las ventanas serán instaladas por la empresa'], en: 'The windows will be fitted by the company.' },
            { tiles: ['Aquí', 'se', 'trabaja', 'en', 'silencio'], accept: ['Aquí se trabaja en silencio', 'Se trabaja en silencio aquí'], en: 'People work in silence here.' },
          ] },
          { kind: 'rewrite', title: 'Cambia el foco', items: [
            { prompt: 'El personal publicará las fechas mañana.', instruction: 'Pon las fechas en primer plano y no nombres al personal. Usa «se».', accept: ['Se publicarán las fechas mañana', 'Mañana se publicarán las fechas', 'Las fechas se publicarán mañana'] },
            { prompt: 'Una empresa externa revisará las instalaciones.', instruction: 'Usa la pasiva con «ser» y mantén al agente.', accept: ['Las instalaciones serán revisadas por una empresa externa'] },
            { prompt: 'El equipo atenderá a las personas inscritas en recepción.', instruction: 'No nombres al equipo. Usa «se».', accept: ['Se atenderá a las personas inscritas en recepción', 'En recepción se atenderá a las personas inscritas'] },
            { prompt: 'Abriremos tres salas nuevas en enero.', instruction: 'Escríbelo como aviso con «se».', accept: ['Se abrirán tres salas nuevas en enero', 'En enero se abrirán tres salas nuevas'] },
          ] },
        ] },
        { title: 'Redacta el cartel · Write the sign', mascot: '/brand/mascot/kneeling.webp', coach: 'Breve, claro y correcto.', blocks: [
          { kind: 'choice', items: [
            { context: 'Un cartel en la puerta del gimnasio. Lo importante es la información para los socios.', prompt: '¿Qué cartel es mejor?', options: ['Se cambian los horarios de la piscina a partir del lunes.', 'Los horarios de la piscina serán cambiados por la dirección del gimnasio a partir del lunes.', 'Se cambia los horarios de la piscina a partir del lunes.'], answer: 0, why: 'Breve y con concordancia correcta. La segunda es correcta, pero pesada para un cartel; la tercera no concuerda.', en: 'A sign on the gym door: what matters is the information for members.' },
            { context: 'Un correo para los padres de un colegio.', prompt: '¿Qué frase es correcta?', options: ['Se recibirá a las familias en el salón de actos.', 'Se recibirán a las familias en el salón de actos.', 'Se recibirá las familias en el salón de actos.'], answer: 0, why: 'Personas con «a»: impersonal en singular.', en: 'An email to parents at a school: families will be welcomed in the hall.' },
            { context: 'Un informe interno: quieres que conste quién aprobó el presupuesto.', prompt: '¿Qué frase eliges?', options: ['El presupuesto fue aprobado por la junta directiva.', 'Se aprobó el presupuesto.', 'Se aprobaron el presupuesto.'], answer: 0, why: 'El agente es importante: pasiva con ser + por.', en: 'An internal report: you want it on record who approved the budget.' },
            { context: 'Una norma en la sala de lectura.', prompt: '¿Qué cartel es correcto?', options: ['No se come en la sala.', 'No se comen en la sala.', 'No es comido en la sala.'], answer: 0, why: 'Una norma general sin objeto: impersonal en singular.', en: 'A rule in the reading room: no eating.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Aclaraciones antes de publicar', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La coordinadora revisa el aviso', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada construcción con «se» y decide si el verbo concuerda o va en singular.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota las frases con «se» que oigas.' } },
          { kind: 'listen', title: 'Irene revisa el aviso', channel: 'MENSAJE DE VOZ · AL EQUIPO', src: '/audio/grammar-classroom/232.mp3',
            before: 'Antes de publicar el aviso, la coordinadora deja un mensaje al equipo con algunas correcciones. ¿Qué crees que quiere cambiar?',
            gist: { prompt: '¿Cuál es la idea principal del mensaje?', options: ['El aviso debe explicar con precisión qué cambia y qué continúa.', 'La biblioteca va a cerrar completamente.', 'La empresa no quiere aparecer en ningún texto.'], answer: 0, why: 'Corrige el aviso para que no diga que se suspende todo y explique qué servicios cambian.', en: 'What is the main idea of the message?' },
            details: [
              { prompt: '¿Qué se reformará primero?', options: ['La planta baja.', 'Las ventanas del piso superior.', 'La entrada principal.'], answer: 0, why: '«Primero se reformará la planta baja».', en: 'What will be refurbished first?' },
              { prompt: 'Durante la primera semana, ¿a quién se atenderá en la sala provisional?', options: ['A las personas que necesiten ayuda con los ordenadores.', 'A los estudiantes con cita.', 'A los trabajadores de la empresa.'], answer: 0, why: '«Se atenderá a las personas que necesiten ayuda con los ordenadores en la sala provisional».', en: 'During the first week, who will be helped in the temporary room?' },
              { prompt: '¿Por qué no deben escribir que se suspende toda la actividad?', options: ['Porque los préstamos continuarán.', 'Porque la reforma se cancela.', 'Porque todavía no hay fechas.'], answer: 0, why: '«No escriban que se suspende toda la actividad, porque los préstamos continuarán».', en: 'Why shouldn’t they write that all activity is suspended?' },
              { prompt: '¿Qué texto debe mencionar a la empresa?', options: ['El informe técnico.', 'El cartel para los usuarios.', 'El aviso en la web.'], answer: 0, why: '«Quiero que el informe técnico mencione a la empresa».', en: 'Which text should mention the company?' },
              { prompt: '¿Cuándo se publicarán las fechas definitivas?', options: ['Mañana por la tarde.', 'Hoy por la mañana.', 'La semana que viene.'], answer: 0, why: '«Se publicarán las fechas definitivas mañana por la tarde».', en: 'When will the final dates be published?' },
            ],
            transcript: 'Buenos días. Antes de publicar el aviso, revisemos dos puntos. Las salas no [[se cerrarán|orange]] todas al mismo tiempo: primero [[se reformará|orange]] la planta baja y después [[se cambiarán|orange]] las ventanas del piso superior. Durante la primera semana [[se atenderá a las personas|violet]] que necesiten ayuda con los ordenadores en la sala provisional. No escriban que se suspende toda la actividad, porque los préstamos continuarán. También quiero que el informe técnico mencione a la empresa: las ventanas [[serán instaladas por el equipo|teal]] que ganó el concurso. En el cartel para los usuarios basta con explicar qué servicios cambian. [[Se publicarán|orange]] las fechas definitivas mañana por la tarde, cuando el equipo de obras confirme el calendario. Hasta entonces, el texto debe indicar que las fechas son provisionales.',
            reply: { teacher: 'El alumno responde a Irene como si fuera Nicolás: propone el texto final del cartel con dos frases con «se» y una con «ser».', self: 'Responde a Irene como si fueras del equipo. Propón el texto del cartel con al menos dos frases con «se».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Avisos, normas y noticias', coach: '¿Importa quién lo hace?',
      steps: [
        { title: 'Avisos, normas y noticias', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta. Cuando use «se», pregunta si el verbo concuerda.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta después.' } },
          { kind: 'talk', cards: [
            { q: '¿Recuerdas un aviso poco claro que viste en tu trabajo, en tu edificio o en la calle? ¿Qué faltaba?', followUps: ['¿Qué problema te causó?', '¿Cómo lo escribirías tú?', '¿Era importante saber quién lo había escrito?'], phrases: ['El aviso decía que [[se cerraba|orange]]…', 'No decía dónde [[se podía|violet]]…', 'Yo escribiría: «[[Se habilitarán|orange]]…».'], hint: 'Piensa qué necesita saber el lector para actuar: qué cambia, qué sigue y dónde ir.', example: 'En mi edificio pusieron un aviso: «Se corta el agua el martes». No decía a qué hora ni cuánto tiempo. Yo escribiría: «El martes se cortará el agua de 9 a 12. Se recomienda guardar agua».', next: 'Ahora, las normas de tu lugar de trabajo o estudio.' },
            { q: '¿Qué normas hay en tu lugar de trabajo o de estudio?', followUps: ['¿Hay alguna norma que te parezca absurda?', '¿Qué norma añadirías?', '¿Se cumplen las normas?'], phrases: ['Allí no [[se puede|violet]]…', '[[Se trabaja|violet]] / [[Se habla|violet]]…', '[[Se prohíbe|violet]]…'], hint: 'Para normas generales, el impersonal con «se» en singular: «No se come en la oficina».', example: 'En mi oficina no se puede comer en la mesa, solo en la cocina. Se trabaja con auriculares para no molestar. Yo añadiría una norma: no se envían correos después de las siete.', next: 'Hablemos de un servicio que usas.' },
            { q: 'Piensa en un servicio de tu ciudad (transporte, biblioteca, hospital). ¿Qué se podría mejorar?', followUps: ['¿Qué se hace bien?', '¿A quién se atiende peor?', '¿Quién tendría que hacer los cambios?'], phrases: ['[[Se deberían|orange]] ampliar los horarios.', '[[Se atiende muy bien a|violet]]…', '[[Se necesitan|orange]] más…'], hint: 'Con cosas, el verbo concuerda: «se necesitan más autobuses». Con personas y «a», singular: «se atiende a los mayores».', example: 'En el hospital de mi barrio se atiende muy bien a los niños, pero se necesitan más médicos por la noche. También se deberían mejorar los horarios de las consultas.', next: 'Ahora, las noticias.', teacher: 'Si tu alumno dice «se atienden a…», no corrijas enseguida: pregunta si hay «a» y tu alumno se corrige solo.' },
            { q: '¿Qué noticia de tu ciudad o de tu país te llamó la atención últimamente?', followUps: ['¿Quién lo hizo? ¿Era importante decirlo?', '¿Cómo lo contaron los periódicos?', '¿Qué opinas?'], phrases: ['[[Fue inaugurado|teal]] / [[Fue aprobada|teal]]…', '[[Se construyó|orange]] / [[Se aprobaron|orange]]…', '…[[por|teal]] el ayuntamiento.'], hint: 'En las noticias se usa mucho la pasiva con «ser», sobre todo cuando se nombra al agente.', example: 'Hace poco fue inaugurado un parque nuevo en mi ciudad. Fue diseñado por un grupo de arquitectas jóvenes. Se plantaron más de quinientos árboles.', next: 'Hablemos de tu trabajo o tus estudios.' },
            { q: 'Si tuvieras que explicar a un nuevo compañero cómo funciona tu trabajo o tu clase, ¿qué le dirías?', followUps: ['¿Qué se hace primero cada día?', '¿Qué no se debe hacer nunca?', '¿Cómo se trata a los clientes o a los compañeros?'], phrases: ['Primero [[se revisan|orange]] los…', 'Nunca [[se envía|orange]]…', '[[Se trata a|violet]] los clientes con…'], hint: 'Para explicar un proceso sin decir quién lo hace, usa «se».', example: 'Primero se revisan los correos y se contesta a los clientes urgentes. Después se prepara el informe del día. Nunca se envía un presupuesto sin revisarlo dos veces.', next: 'Para terminar, un anuncio.' },
            { q: 'Imagina que tu empresa o tu grupo busca a una persona nueva. ¿Cómo sería el anuncio?', followUps: ['¿Qué se valora más?', '¿Qué se ofrece?', '¿Cómo se seleccionará a los candidatos?'], phrases: ['[[Se busca|orange]] / [[Se buscan|orange]]…', '[[Se valorará|orange]]…', '[[Se entrevistará a|violet]]…'], hint: 'Combina las formas: «Se buscan…» (plural, sin «a»), «Se entrevistará a las personas seleccionadas» (singular, con «a»).', example: 'Se busca una persona para atención al cliente. Se valorará la experiencia y se ofrece un horario flexible. Se entrevistará a los candidatos seleccionados la semana que viene.', teacher: 'Tu alumno lee su anuncio y tú, como candidato, haces preguntas sobre él.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor dicta un aviso con errores de concordancia y el alumno lo corrige en voz alta.', self: 'Esta semana, busca tres carteles o avisos con «se» en la calle o en internet. Comprueba si el verbo concuerda.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un aviso de reforma', coach: 'Qué cambia, qué sigue y dónde ir.',
      steps: [
        { title: 'Un aviso de reforma', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos la concordancia de cada «se» y si el agente aparece solo cuando es útil.', self: 'Escribe tu aviso y toca «Revisar mi texto». Después comprueba la concordancia de cada frase con «se».' } },
          { kind: 'write', title: 'Informa a los usuarios', situation: 'Un lugar que conoces (una biblioteca, un gimnasio, una escuela, tu oficina) va a tener una reforma. Escribe el aviso para las personas que lo usan.', task: [
            'Indica **dos cambios** con «se» (pasiva refleja).',
            'Di qué **servicio continúa** y **dónde se atenderá a las personas** (impersonal con «a»).',
            'Nombra al **agente** solo cuando aporte información útil (pasiva con «ser» o activa).',
            'Explica **cuándo** se confirmarán las fechas.',
          ], starters: ['Durante la próxima semana se…', 'Se habilitarán…', 'Se mantendrá…', 'Se atenderá a…', '… serán … por…', 'El calendario definitivo se publicará…'],
            words: ['reformar', 'habilitar', 'mantener', 'atender', 'publicar', 'provisional', 'el horario habitual', 'la entrada principal', 'gracias por su comprensión'],
            model: 'Durante la próxima semana [[se reformará|orange]] la sala de estudio de la planta baja. [[Se habilitarán|orange]] veinte puestos en el edificio de al lado y [[se mantendrá|orange]] el servicio de préstamo en su horario habitual. [[Se atenderá a las personas|violet]] con cita en la entrada principal. Las ventanas [[serán instaladas por una empresa especializada|teal]], pero los trabajos no afectarán al acceso. El calendario definitivo [[se publicará|orange]] el jueves, después de la reunión técnica. Si necesitas un puesto adaptado, puedes llamar a recepción para reservarlo. Gracias por tu comprensión.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial · The essentials', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'PASIVA CON SER', formula: 'sujeto + ser + participio (+ por + agente)', example: 'Las ventanas serán instaladas por la empresa.', caption: 'Formal. Útil si quieres nombrar al agente.', en: 'Formal; useful when you want to name the agent.' },
            { tone: 'orange', label: 'PASIVA REFLEJA', formula: 'se + verbo que concuerda con la cosa', example: 'Se habilitarán veinte puestos.', caption: 'Cosas: singular o plural según el sujeto.', en: 'Things: singular or plural to match the subject.' },
            { tone: 'violet', label: 'IMPERSONAL CON SE', formula: 'se + verbo en singular (+ a + personas)', example: 'Se atenderá a los usuarios con cita.', caption: 'Sin sujeto: siempre singular.', en: 'No subject: always singular, even with «a» + many people.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos preguntas', text: '¿Importa **quién** lo hace? Nómbralo (activa o pasiva con ser). Si no importa, usa **se**: con cosas, el verbo **concuerda**; con **a + personas**, va en **singular**.', en: 'Two questions. Does it matter who does it? Then name them (active or passive with ser). If not, use se: with things, the verb agrees; with «a» + people, it is singular.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '___ dos técnicos para el turno de noche.', options: ['Se necesitan', 'Se necesita', 'Son necesitado'], answer: 0, why: 'Técnicos en general, sin «a»: sujeto plural.', en: 'Two technicians needed for the night shift (any two, no «a»).' },
            { prompt: '___ a los dos técnicos del turno de noche.', options: ['Se necesita', 'Se necesitan', 'Es necesitado'], answer: 0, why: 'Personas concretas con «a»: singular.', en: 'The two night-shift technicians are needed (specific people, with «a»).' },
            { prompt: 'Las obras ___ por una empresa local.', options: ['fueron realizadas', 'fueron realizados', 'fue realizadas'], answer: 0, why: '«Las obras»: femenino plural.', en: 'The building work was done by a local firm. Watch agreement with «las obras».' },
            { prompt: 'En esta oficina no ___ después de las seis.', options: ['se trabaja', 'se trabajan', 'son trabajado'], answer: 0, why: 'Norma general sin sujeto: singular.', en: 'A general rule: in this office nobody works after six.' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: ¿por qué decimos «se necesitan dos técnicos» y «se necesita a los dos técnicos del turno»? En la primera, «dos técnicos» es el sujeto y concuerda; en la segunda, «a los dos técnicos» no es sujeto y el verbo va en singular.' },
        ] },
      ],
    },
  ],
};
