import type { LiveLesson } from '../types';

/**
 * Lesson 495 · C1 · Concordancia especial y sujetos pospuestos (course unit G195).
 * Builds on G123 (lesson 423: collectives, quantities, coordinated subjects, impersonal
 * haber at B1), G062 (gustar-type agreement), G119 / G149 (se pasivo) and G184 (lesson
 * 484: postverbal subjects, «Lo que necesito son…»). C1 step: deciding agreement in
 * formal texts where the verb hesitates, following NGLE / DPD. Content: collective nouns
 * alone (la gente dice); collective / quantity / percentage + de + plural (la mayoría de
 * los alumnos aprobó / aprobaron; un grupo de turistas llegó / llegaron; el 30 % de los
 * votantes votó / votaron), plural preferred with an attribute; coordinated subjects
 * (plural; singular attested with postposed coordinated subjects, normal with
 * infinitives and clauses, possible with one single idea); ni… ni, o, tanto… como;
 * junto con / además de / al igual que / así como between commas (singular); clausal
 * subject (anchor: Me preocupa que lleguen tan tarde); «ser» agreeing with a plural
 * attribute (Lo que necesito son vacaciones; Eso son tonterías; Todo eran risas; El
 * problema son los plazos — audit row 138); impersonal haber never plural (*hubieron,
 * *habían personas, *pueden haber, *habíamos veinte) described as frequent in America
 * and parts of Spain but not accepted in careful usage; existir / faltar / quedar do
 * agree; temporal hacer (Hace dos años, *Hacen); postposed subjects with gustar-type
 * verbs, se le olvidaron, se venden pisos vs se busca a los dueños; person agreement:
 * usted(es) + 3rd person, vos (recognition), los vecinos estamos, uno de los que + plural.
 * Ampliación: se debe / deben revisar los datos, le / les pospuesto, la mayoría de
 * nosotros piensa / pensamos, más de un vecino + singular.
 * Scene: the copy desk of El Mirador, a fictional digital newspaper in Puerto Claro.
 * Copy chief Inés Carrasco revises reporter Daniel Ponce's piece on a residents'
 * assembly in La Ribera and on the municipal transport survey; Carmen Vidal chairs the
 * residents' association. Escuchar: Felipe Arango's morning news summary
 * (es-CO-GonzaloNeural, ustedes). Escribir: a short news report on a meeting or survey.
 */
export const lesson: LiveLesson = {
  id: 495,
  level: 'C1',
  title: 'Concordancia especial y sujetos pospuestos',
  subtitle: 'Decidir la concordancia en textos cuidados: «la mayoría votó / votaron», «hubo quejas», «Lo que piden son autobuses».',
  legend: [
    { tone: 'blue', label: 'SINGULAR · colectivo solo, junto con, oración sujeto, haber y hacer invariables (la gente dice · hubo quejas)' },
    { tone: 'teal', label: 'DOS OPCIONES VÁLIDAS · cantidad + de + plural, ni… ni u o detrás del verbo (la mayoría votó / votaron)' },
    { tone: 'orange', label: 'PLURAL · coordinados, «ser» con atributo plural, sujeto plural detrás (Lo que piden son… · faltan dos tramos)' },
    { tone: 'violet', label: 'PERSONA · usted, voseo, «los vecinos estamos», uno de los que saben' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuando el verbo duda', coach: '¿Con qué concuerda el verbo? What does the verb agree with?',
      steps: [
        { title: 'Antes del cierre · Before the deadline', blocks: [
          { kind: 'lead', text: 'Inés Carrasco es la jefa de corrección de **El Mirador**, un periódico digital de Puerto Claro. Daniel Ponce, redactor de la sección local, ha escrito la crónica de una asamblea vecinal en el barrio de La Ribera y una noticia sobre la encuesta municipal de transporte. Los datos están bien; la concordancia, no siempre. Hoy trabajas los casos en que el verbo **duda**: ¿concuerda con el núcleo, con el sentido o con lo que va detrás?', en: 'Inés Carrasco is copy chief at El Mirador, a digital newspaper in Puerto Claro. Daniel Ponce, a local reporter, has written about a residents’ assembly and the city’s transport survey. The facts are fine; the agreement isn’t always. Today you look at the cases where the verb hesitates: does it agree with the grammatical head, with the meaning, or with what comes after it?' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de la crónica y tu alumno dice si el verbo podría ir también en otro número. Después responde a las preguntas.', self: 'Lee las tres frases en voz alta. ¿Podría ir el verbo en singular y en plural, o solo en uno? (Could the verb go in either number, or only one?)' } },
          { kind: 'compare', title: 'Tres frases de la crónica · Three lines from the report', columns: [
            { tone: 'blue', label: 'SOLO SINGULAR', sentence: '[[La gente dice|blue]] que el barrio está abandonado.', idea: '«Gente» es un colectivo singular: aunque piense en muchas personas, el verbo va en singular.', en: '“Gente” is a singular collective noun: it refers to many people, but the verb stays singular.' },
            { tone: 'teal', label: 'DOS OPCIONES', sentence: '[[La mayoría de los vecinos pidió|teal]] (o pidieron) más autobuses.', idea: 'El núcleo es «mayoría» (singular), pero el sentido es plural: la norma acepta las dos.', en: 'The head is “mayoría” (singular), but the meaning is plural, so the norm accepts both.' },
            { tone: 'orange', label: 'PLURAL', sentence: '[[Lo que piden son|orange]] autobuses hasta la una.', idea: 'Con un sujeto neutro y un atributo plural, «ser» concuerda con el atributo.', en: 'With a neuter subject (lo que…) and a plural complement, “ser” agrees with the plural.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['La gente del barrio está muy enfadada.', 'La gente del barrio estamos muy enfadada.', 'La gente del barrio están muy enfadados.'], answer: 0, why: '«La gente» es singular y femenino: está enfadada.', en: 'Which sentence is correct? (People in the neighbourhood are very angry.)' },
            { prompt: '«La mayoría de los vecinos votó a favor» / «La mayoría de los vecinos votaron a favor». ¿Qué dice la norma?', options: ['Solo vale «votaron».', 'Las dos son correctas.', 'Solo vale «votó».'], answer: 1, why: 'Colectivo de cantidad + de + plural: singular (con el núcleo) o plural (con el sentido).', en: 'Which does the norm accept?' },
          ] },
        ] },
        { title: 'Colectivos, cantidades y porcentajes · Collectives, quantities and percentages', mascot: '/brand/mascot/studying.webp', coach: 'Busca el núcleo y mira qué lo acompaña. Find the head, then look at what follows it.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'NÚCLEO SINGULAR, SENTIDO PLURAL', question: '¿El sujeto es un colectivo solo o un nombre de cantidad seguido de «de» + plural?', en: 'A collective noun on its own (gente, público, equipo, comunidad) takes a singular verb. When a noun of quantity or a group word is followed by de + a plural noun (la mayoría de, la mitad de, un grupo de, el resto de, el 30 % de), the verb can agree with the singular head or with the plural meaning: both are standard, and the plural is very common. With ser or estar plus an adjective or noun describing people, the plural sounds most natural.', formula: ['colectivo solo → singular: La gente dice', 'cantidad + de + plural → singular o plural: la mayoría votó / votaron', 'cantidad + de + singular → singular: el 30 % de la población vive…', 'con atributo → plural preferido: la mitad estaban satisfechos'],
            meaning: 'Un **colectivo solo** (gente, público, equipo, comunidad, familia) lleva el verbo en **singular**. Cuando un nombre de **cantidad o de grupo** va seguido de **de + plural** (la mayoría de, la mitad de, un grupo de, el resto de, el 30 % de), el verbo puede concordar con el núcleo singular o con el sentido plural: **las dos opciones son correctas** y el plural es muy frecuente. Si el verbo es «ser» o «estar» con un atributo referido a las personas, lo más natural es el **plural**.',
            examples: [
              { es: '[[El público aplaudió|blue]] de pie durante varios minutos.', en: 'The audience gave a standing ovation for several minutes (collective alone: singular).' },
              { es: '[[Un grupo de turistas llegó|teal]] (o llegaron) en plena asamblea.', en: 'A group of tourists turned up in the middle of the assembly: both singular and plural are correct.' },
              { es: '[[El 30 % de los votantes votó|teal]] (o votaron) en blanco.', en: 'Thirty per cent of voters cast a blank ballot: again, both are correct.' },
              { es: '[[El 30 % de la población vive|blue]] en el casco antiguo.', en: 'With de + a singular noun (la población), the verb is singular.' },
              { es: '[[La mitad de los asistentes estaban|orange]] satisfechos con las respuestas.', en: 'With estar + an adjective about the people, the plural is the natural choice.' },
            ] },
          { kind: 'table', title: 'Resumen · Summary', head: ['Sujeto · Subject', 'Ejemplo', 'Concordancia'], rows: [
            ['colectivo solo', 'La comunidad **decidió** no subir las cuotas.', 'singular'],
            ['cantidad / grupo + de + plural', 'La mayoría de los alumnos **aprobó / aprobaron**.', 'las dos; plural muy frecuente'],
            ['porcentaje + de + singular', 'El 40 % del presupuesto **se destina** a obras.', 'singular'],
            ['cantidad + de + plural + ser / estar', 'La mayoría de los encuestados **están** preocupados.', 'plural, lo más natural'],
            ['cada uno de + plural', 'Cada uno de los vecinos **recibirá** una copia.', 'singular'],
          ], note: 'En la lengua hablada es frecuente pasar al plural en una oración posterior («La gente llegó tarde y luego se quejaron»). En un texto cuidado, mantén el singular: «… y luego se quejó».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El 70 % del presupuesto ___ a mantenimiento.', options: ['se destinamos', 'se destina', 'se destinan'], answer: 1, why: 'Porcentaje + de + singular (el presupuesto): el verbo va en singular.', en: 'Seventy per cent of the budget goes on maintenance.' },
            { prompt: 'La mitad de los participantes ___ satisfechos con el taller.', options: ['estaban', 'estábamos', 'estaba'], answer: 0, why: 'Con «estar» + atributo referido a las personas, lo natural es el plural.', en: 'Half of the participants were satisfied with the workshop.' },
          ] },
        ] },
        { title: 'Sujetos coordinados · Coordinated subjects', mascot: '/brand/mascot/standing.webp', coach: 'Y, ni, o, tanto… como, junto con: cada uno funciona distinto. Each link behaves differently.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'DOS O MÁS NÚCLEOS', question: '¿El sujeto tiene dos núcleos unidos por «y», «ni», «o» o «tanto… como», o el segundo va en un inciso con «junto con»?', en: 'Two subjects joined by y take a plural verb. After the verb, singular agreement with the first noun is also attested (Me gusta el cine y el teatro), especially in speech; the plural is the norm in careful writing. Coordinated infinitives or clauses take the singular, and so can two nouns seen as one single idea. With ni… ni before the verb, use the plural; after the verb, both are possible. With o, both numbers occur: the singular stresses that only one of them will act. Tanto… como takes the plural. A phrase between commas with junto con, además de, al igual que or así como is not part of the subject, so the verb agrees with the first noun.', formula: ['A y B → plural: El alcalde y la concejala asistieron', 'ni A ni B delante → plural · detrás → singular o plural', 'A o B → plural o singular (singular: solo uno)', 'A, junto con B, → concuerda con A'],
            meaning: 'Dos sujetos unidos por **y** llevan el verbo en **plural**. Si van **detrás del verbo**, también se documenta el singular con el primero («Me gusta el cine y el teatro»), sobre todo al hablar; en un texto cuidado, lo normal es el plural. Los **infinitivos u oraciones** coordinados llevan **singular**, y dos nombres vistos como **una sola idea** también pueden llevarlo. Con **ni… ni** delante del verbo, plural; detrás, las dos opciones. Con **o**, las dos: el singular subraya que solo actuará uno. **Tanto… como** lleva plural. Un inciso entre comas con **junto con, además de, al igual que, así como** no forma parte del sujeto: el verbo concuerda con el primero.',
            examples: [
              { es: '[[Me gustan el cine y el teatro|orange]] (también se oye «Me gusta el cine y el teatro»).', en: 'I like cinema and theatre: plural is the norm; the singular is attested after the verb, especially in speech.' },
              { es: '[[Me preocupa que lleguen|blue]] tan tarde.', en: 'It worries me that they arrive so late: the subject is a whole clause, so the verb is singular even if the clause is plural inside.' },
              { es: '[[Ni el alcalde ni la concejala acudieron|orange]] a la asamblea.', en: 'Neither the mayor nor the councillor came: before the verb, ni… ni takes the plural.' },
              { es: '[[No acudió ni el alcalde ni la concejala|teal]] (o «no acudieron»).', en: 'After the verb, ni… ni accepts singular or plural.' },
              { es: '[[La concejala, junto con su equipo, presentará|blue]] el plan el viernes.', en: 'The councillor, together with her team, will present the plan: the phrase between commas doesn’t count, so the verb is singular.' },
            ] },
          { kind: 'table', title: 'Cómo concuerda cada tipo · How each type agrees', head: ['Tipo', 'Ejemplo', 'Verbo'], rows: [
            ['A y B delante', 'El alcalde y la concejala **firmaron** el acuerdo.', 'plural'],
            ['infinitivos u oraciones', 'Me **gusta** leer y escribir. **Importa** que vengan y que voten.', 'singular'],
            ['una sola idea', 'La carga y descarga **está** permitida de 8 a 11.', 'singular (también plural)'],
            ['A o B', 'El alcalde o la concejala **responderán**. / Lo **inaugurará** el alcalde o la concejala.', 'los dos; singular si solo uno'],
            ['tanto A como B', 'Tanto la oposición como el Gobierno **apoyan** la reforma.', 'plural'],
            ['A, además de / al igual que / así como B,', 'El director, al igual que sus redactores, **firmó** la carta.', 'singular (concuerda con A)'],
          ], note: 'Sin comas, con «con» se documenta también el plural, sobre todo al hablar: «El director con su equipo llegaron temprano». En un texto formal, lo más seguro es el inciso entre comas con el verbo en singular.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nos ___ que las obras se retrasen otra vez.', options: ['preocupa', 'preocupamos', 'preocupan'], answer: 0, why: 'El sujeto es una oración («que las obras se retrasen»): el verbo va en singular.', en: 'It worries us that the works might be delayed again.' },
            { prompt: 'El presidente, junto con dos asesores, ___ la reunión.', options: ['abandonamos', 'abandonó', 'abandonaron'], answer: 1, why: '«Junto con dos asesores» va entre comas y no es sujeto: concuerda con «el presidente».', en: 'The president, together with two advisers, left the meeting.' },
          ] },
        ] },
        { title: '«Ser», «haber» y «hacer» · Ser, haber and hacer', mascot: '/brand/mascot/speaking.webp', coach: 'Ser se va al plural; haber y hacer, nunca. Ser goes plural; haber and hacer never do.', blocks: [
          { kind: 'concept', tone: 'orange', label: '«SER» CON ATRIBUTO PLURAL', question: '¿El sujeto es neutro (eso, esto, todo, lo que…) o singular y el atributo es plural?', en: 'When ser links a neuter subject (eso, esto, todo, lo que…) or a singular noun such as problema or causa to a plural noun, the verb agrees with the plural: “Eso son tonterías”, “Todo eran risas”, “El problema son los plazos”. You met “Lo que necesito son vacaciones” in class 184; here it extends to demonstratives, todo and nouns.', formula: ['Lo que necesito son vacaciones', 'Eso son tonterías · Todo eran risas', 'El problema son los plazos = Los plazos son el problema'],
            meaning: 'Cuando «**ser**» une un sujeto **neutro** (eso, esto, todo, lo que…) o un nombre singular como «problema» o «causa» con un **atributo plural**, el verbo **concuerda con el plural**: «Eso **son** tonterías», «Todo **eran** risas», «El problema **son** los plazos». Ya viste «Lo que necesito son vacaciones» en la clase 184; aquí lo amplías a demostrativos, «todo» y nombres.',
            examples: [
              { es: '[[Eso son|orange]] rumores sin confirmar.', en: 'Those are unconfirmed rumours: “eso” is neuter, the verb agrees with “rumores”.' },
              { es: 'Al principio [[todo eran|orange]] aplausos; después llegaron las preguntas.', en: 'At first it was all applause; then the questions came.' },
              { es: '[[El problema son|orange]] los horarios, no las rutas.', en: 'The problem is the timetables, not the routes.' },
            ] },
          { kind: 'concept', tone: 'blue', label: '«HABER» Y «HACER» SIN SUJETO', question: '¿Expresas existencia con «haber» o tiempo transcurrido con «hacer»?', en: 'Impersonal haber (there is / there are) has no subject: the noun after it is its object, so the verb stays singular in every tense and in periphrases: hubo, había, habrá, ha habido, puede haber, va a haber. Plural forms such as “hubieron problemas” or “habían muchas personas” are very frequent in much of Latin America and in some areas of Spain, but they are not accepted in careful language. Existir, faltar or quedar do have a subject and do agree. Hacer for elapsed time is also invariable: “Hace dos años”.', formula: ['hubo / había / habrá / ha habido / puede haber + plural', '*hubieron problemas · *habían muchas personas · *pueden haber cambios', 'existen / faltan / quedan + plural (sí concuerdan)', 'hace / hacía / va a hacer + tiempo: Hace dos años'],
            meaning: '«**Haber**» impersonal no tiene sujeto: lo que va detrás es su complemento directo. Por eso va en **singular** en todos los tiempos y en las perífrasis: hubo, había, habrá, ha habido, puede haber, va a haber. «Hubieron problemas» o «Habían muchas personas» son muy frecuentes en buena parte de América y en algunas zonas de España, pero **no se aceptan en la lengua cuidada**. «Existir», «faltar» o «quedar» sí tienen sujeto y concuerdan. «**Hacer**» con tiempo transcurrido también es invariable: «**Hace** dos años».',
            examples: [
              { es: 'En la asamblea [[hubo|blue]] momentos de mucha tensión.', en: 'There were some very tense moments at the assembly: hubo, never “hubieron”.' },
              { es: 'Mañana [[puede haber|blue]] cortes de tráfico en el centro.', en: 'There may be traffic closures downtown tomorrow: the periphrasis stays singular too.' },
              { es: '[[Existen|orange]] varias alternativas al proyecto.', en: 'Several alternatives to the project exist: existir has a subject, so it agrees.' },
              { es: '[[Hace|blue]] dos años que se aprobó el carril bici.', en: 'The bike lane was approved two years ago: hace never goes plural.' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Habían, hubieron, habíamos · Regional usage', text: 'El plural de «haber» («habían fiestas», «hubieron quejas») y la primera persona («**habíamos** veinte en la sala» por «éramos veinte» o «estábamos veinte») se oyen mucho en América y en algunas zonas de España. No son errores de extranjero: son rasgos extendidos en hablantes nativos. Pero en un periódico, un informe o un examen se escribe siempre «había», «hubo» y «éramos / estábamos veinte».', en: 'Plural haber (“habían fiestas”, “hubieron quejas”) and first-person forms (“habíamos veinte” for “there were twenty of us”) are widespread among native speakers in Latin America and in parts of Spain. They are not learner errors, but newspapers, reports and exams always use “había”, “hubo” and “éramos / estábamos veinte”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Según la policía local, ___ más de tres mil personas en la manifestación.', options: ['había', 'habían', 'habíamos'], answer: 0, why: '«Haber» impersonal: singular. «Tres mil personas» es su complemento, no su sujeto.', en: 'According to the local police, there were more than three thousand people at the demonstration.' },
            { prompt: 'Al final de la sesión, todo ___ felicitaciones.', options: ['era', 'eran', 'fue'], answer: 1, why: 'Sujeto neutro («todo») y atributo plural: «ser» concuerda con el plural.', en: 'By the end of the session, it was all congratulations.' },
          ] },
        ] },
        { title: 'Sujetos detrás y concordancia de persona · Postposed subjects and person', mascot: '/autoestudio/mascot/noting.webp', coach: 'El sujeto también manda cuando va detrás. The subject rules even after the verb.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'EL SUJETO VA DETRÁS', question: '¿Usas «gustar», «encantar», «faltar», «quedar», «olvidarse» o una pasiva con «se»?', en: 'With gustar-type verbs, verbs of lack and presence, accidental se (se me olvidaron) and the passive se, the subject usually comes after the verb, and that is exactly where agreement slips: speakers start in the singular before they reach the plural noun. Check what comes after: “Me encantan tus fotos”, “Faltan dos firmas”, “Se venden pisos”. With people introduced by a, the se construction is impersonal and stays singular: “Se busca a los dueños”.', formula: ['me encantan + plural · me falta / me faltan', 'se me olvidaron las llaves', 'se venden pisos (pasiva con se)', 'se busca a los dueños (impersonal: a + personas → singular)'],
            meaning: 'Con verbos como «gustar» o «encantar», con verbos de falta y presencia (faltar, quedar, sobrar), con el «se» accidental (se me olvidaron) y con la pasiva con «se», el sujeto suele ir **detrás**, y ahí falla la concordancia: se empieza en singular antes de llegar al plural. Mira lo que va detrás: «Me **encantan** tus fotos», «**Faltan** dos firmas», «Se **venden** pisos». Con personas introducidas por **a**, el «se» es impersonal y va en singular: «Se **busca** a los dueños».',
            examples: [
              { es: '[[Me encantan|orange]] tus fotos del barrio.', en: 'I love your photos of the neighbourhood: the photos are the subject.' },
              { es: 'A Daniel [[se le olvidaron|orange]] las notas de la entrevista.', en: 'Daniel forgot his interview notes (literally, the notes “got forgotten” on him).' },
              { es: 'En la calle Mayor [[se venden|orange]] tres locales.', en: 'Three shop premises are for sale on Calle Mayor.' },
              { es: '[[Se busca|blue]] a los dueños de un perro perdido.', en: 'Wanted: the owners of a lost dog (a + people: impersonal, singular).' },
            ] },
          { kind: 'table', title: 'Concordancia de persona · Person agreement', head: ['Sujeto', 'Ejemplo', 'Comentario'], rows: [
            ['usted / ustedes', 'Usted **tiene** razón. Ustedes **deben** firmar aquí.', '3.ª persona; el adjetivo, según la persona real: usted está cansad**a**'],
            ['vosotros (España)', 'Vosotros **tenéis** razón.', 'en América, Canarias y parte de Andalucía: ustedes tienen'],
            ['[[vos|violet]] (Argentina, Uruguay, Paraguay, gran parte de Centroamérica…)', 'Vos **tenés** razón. Vos **sos** el responsable.', 'formas propias de voseo; para reconocerlas'],
            ['sujeto plural que incluye al hablante', 'Los vecinos **estamos** cansados.', '1.ª persona plural: quien habla se incluye'],
            ['uno de los que', 'Es uno de los que más **saben** del tema.', 'plural recomendado; el singular «sabe» se oye mucho'],
          ], note: '«Los periodistas **sabemos**…» incluye a quien habla; «Los periodistas **saben**…» lo deja fuera. Las dos son correctas: cambian el sentido.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En el cartel de la inmobiliaria: «Se ___ pisos de dos habitaciones».', options: ['alquilamos', 'alquila', 'alquilan'], answer: 2, why: 'Pasiva con «se»: el sujeto es «pisos» y el verbo concuerda en plural.', en: 'On the estate agent’s sign: “Two-bedroom flats for rent.”' },
            { prompt: 'Carmen vive en el barrio y habla incluyéndose: «Los vecinos ___ hartos de esperar».', options: ['están', 'estamos', 'está'], answer: 1, why: 'Carmen se incluye en el grupo: 1.ª persona plural. «Están» sería correcto si hablara de los vecinos desde fuera.', en: 'Carmen lives in the neighbourhood and includes herself: “We residents are tired of waiting.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Quién es el sujeto, y hay sujeto? Who is the subject, and is there one?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice cuál es el sujeto (o si no lo hay) antes de ver la corrección.', self: 'Lee cada frase y busca el sujeto. ¿Lo hay? ¿Va delante o detrás? Después mira la corrección. (Find the subject first.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Hubieron muchas quejas por el ruido.', right: 'Hubo muchas quejas por el ruido.', why: '«Haber» impersonal no tiene sujeto: siempre en singular.' },
            { wrong: 'Hacen ya tres años que cerraron la biblioteca.', right: 'Hace ya tres años que cerraron la biblioteca.', why: '«Hacer» con tiempo transcurrido es invariable.' },
            { wrong: 'Pueden haber retrasos en la línea 4.', right: 'Puede haber retrasos en la línea 4.', why: 'En la perífrasis, el auxiliar hereda la impersonalidad de «haber»: singular.' },
            { wrong: 'Me encanta tus fotos.', right: 'Me encantan tus fotos.', why: 'El sujeto, «tus fotos», va detrás pero manda: plural.' },
            { wrong: 'Se vende pisos en el centro.', right: 'Se venden pisos en el centro.', why: 'Pasiva con «se»: «pisos» es el sujeto. «Se vende pisos» aparece en carteles, pero no es la forma normativa.' },
            { wrong: 'Me preocupan que lleguen tan tarde.', right: 'Me preocupa que lleguen tan tarde.', why: 'El sujeto es toda la oración «que lleguen tan tarde»: singular.' },
            { wrong: 'La directora, junto con su equipo, presentaron el informe.', right: 'La directora, junto con su equipo, presentó el informe.', why: 'El inciso entre comas no es sujeto: el verbo concuerda con «la directora».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta en un texto cuidado?', options: ['Habían habido varios accidentes en ese cruce.', 'Ha habido varios accidentes en ese cruce.', 'Han habido varios accidentes en ese cruce.'], answer: 1, why: 'Tiempo compuesto de «haber» impersonal: «ha habido», en singular.', en: 'Which sentence is correct in careful writing? (There have been several accidents at that junction.)' },
            { prompt: '¿Qué frase es correcta?', options: ['Todavía faltamos dos firmas en el acta.', 'Todavía falta dos firmas en el acta.', 'Todavía faltan dos firmas en el acta.'], answer: 2, why: '«Faltar» sí tiene sujeto («dos firmas»), aunque vaya detrás: plural.', en: 'Which sentence is correct? (Two signatures are still missing from the minutes.)' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta, sin preparar, la última reunión o fiesta a la que fue: cuánta gente había, qué fue lo que más le gustó y cuánto hace que no va a otra.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la mesa de corrección', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Inés corrige la crónica de Daniel · Inés edits Daniel’s report', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Inés y tu alumno es Daniel. Después tu alumno toca cada expresión marcada y explica con qué concuerda el verbo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿singular obligatorio, dos opciones, plural o concordancia de persona? (Tap each marked expression and say what the verb agrees with.)' } },
          { kind: 'explore', title: 'La crónica de La Ribera', setting: 'Miércoles, ocho de la tarde, redacción de El Mirador. Inés, la jefa de corrección, repasa con Daniel su crónica de la asamblea vecinal antes del cierre. Se tratan de tú. (Wednesday, 8 p.m.: the copy chief goes through a reporter’s piece before the deadline.)', lines: [
            { who: 'Inés', text: 'Daniel, la crónica tiene mucha vida, pero antes de publicarla repasamos la concordancia. Primera línea: «Habían más de doscientas personas». Aquí va [[había|blue]], en singular.', en: 'Daniel, the piece is really lively, but before it goes out we’re checking agreement. First line: “Habían más de doscientas personas”. That needs to be “había”, singular.' },
            { who: 'Daniel', text: '¿Aunque sean doscientas? En mi casa siempre lo he oído en plural.', en: 'Even though there are two hundred of them? At home I’ve always heard it in the plural.' },
            { who: 'Inés', text: 'Es muy frecuente, y no solo en tu tierra, pero en el periódico «haber» no concuerda: las personas no son el sujeto. Si quieres el plural, cambia de verbo: [[asistieron más de doscientas personas|orange]].', en: 'It’s very common, and not just where you’re from, but in the paper “haber” doesn’t agree: the people aren’t the subject. If you want a plural, change the verb: “more than two hundred people attended”.' },
            { who: 'Daniel', text: 'Vale. ¿Y «La mayoría de los vecinos pidieron más autobuses nocturnos»? ¿También está mal?', en: 'OK. And “La mayoría de los vecinos pidieron más autobuses nocturnos”? Is that wrong too?' },
            { who: 'Inés', text: 'No, esa está bien: [[la mayoría de los vecinos pidieron|teal]] o «pidió», las dos valen. Lo que no vale es lo del tercer párrafo: «la gente estaban indignados». Es [[la gente estaba indignada|blue]].', en: 'No, that one’s fine: “pidieron” or “pidió”, both are correct. What doesn’t work is the bit in the third paragraph: “la gente estaban indignados”. It’s “la gente estaba indignada”.' },
            { who: 'Daniel', text: 'Cierto. Luego cito a Carmen Vidal: «[[Lo que pedimos son|orange]] autobuses hasta la una». ¿Lo dejo así?', en: 'Right. Then I quote Carmen Vidal: “What we’re asking for is buses until one in the morning.” Do I leave it like that?' },
            { who: 'Inés', text: 'Perfecto, «ser» concuerda con el plural. Y la frase del pleno: «La concejala, junto con su equipo, presentarán un plan». Debe ser [[La concejala, junto con su equipo, presentará|blue]]: lo que va entre comas no es sujeto.', en: 'Perfect: “ser” agrees with the plural. And the line about the council meeting: “La concejala, junto con su equipo, presentarán un plan”. It should be “presentará”: what’s between the commas isn’t the subject.' },
            { who: 'Daniel', text: '¿Y si quito las comas y escribo «la concejala y su equipo»?', en: 'And if I drop the commas and write “the councillor and her team”?' },
            { who: 'Inés', text: 'Entonces sí: [[la concejala y su equipo presentarán|orange]]. Otra cosa: «Ni el alcalde ni la concejala acudió». Delante del verbo, lo normal es [[Ni el alcalde ni la concejala acudieron|orange]].', en: 'Then yes, plural. One more thing: “Ni el alcalde ni la concejala acudió”. Before the verb, the normal form is the plural: “acudieron”.' },
            { who: 'Daniel', text: 'Hecho. La última frase creo que está bien: «[[Hace dos años|blue]] que se prometió el carril bici, y todavía [[faltan dos tramos|orange]]».', en: 'Done. I think the last line is fine: “The bike lane was promised two years ago, and two sections are still missing.”' },
            { who: 'Inés', text: 'Impecable. Y la cita final, «[[Los vecinos estamos|violet]] cansados de promesas», la dejas tal cual: Carmen se incluye.', en: 'Spotless. And the closing quote, “We residents are tired of promises”, stays as it is: Carmen includes herself.' },
            { who: 'Daniel', text: 'Gracias, Inés. [[Me preocupa que|blue]] los lectores se fijen más en estos errores que en la noticia.', en: 'Thanks, Inés. I worry that readers will notice these mistakes more than the story itself.' },
          ], notes: {
            'había': '**«Haber» impersonal**: no tiene sujeto, así que no concuerda con «doscientas personas». Singular en todos los tiempos: había, hubo, habrá.',
            'asistieron más de doscientas personas': 'Con un verbo personal («asistir»), «más de doscientas personas» sí es el **sujeto pospuesto**: el verbo va en plural.',
            'la mayoría de los vecinos pidieron': '**Cantidad + de + plural**: el verbo puede concordar con «mayoría» (pidió) o con «vecinos» (pidieron). Las dos son correctas.',
            'la gente estaba indignada': '**Colectivo solo**: «gente» es singular y femenino; el verbo y el adjetivo concuerdan con él.',
            'Lo que pedimos son': '**«Ser» con atributo plural**: el sujeto es neutro («lo que pedimos») y «ser» concuerda con «autobuses».',
            'La concejala, junto con su equipo, presentará': '**Inciso con «junto con»**: entre comas, no forma parte del sujeto. El verbo concuerda con «la concejala».',
            'la concejala y su equipo presentarán': '**Sujetos coordinados con «y»**: dos núcleos, verbo en plural.',
            'Ni el alcalde ni la concejala acudieron': '**«Ni… ni» delante del verbo**: lo normal es el plural. Detrás («No acudió ni el alcalde ni la concejala») valen las dos opciones.',
            'Hace dos años': '**«Hacer» de tiempo**: invariable. Nunca «hacen dos años».',
            'faltan dos tramos': '**Sujeto pospuesto**: «faltar» sí tiene sujeto («dos tramos»), aunque vaya detrás. Plural.',
            'Los vecinos estamos': '**Concordancia de persona**: un sujeto plural que incluye a quien habla lleva el verbo en 1.ª persona plural. Con «están», Carmen hablaría de los vecinos desde fuera.',
            'Me preocupa que': '**Oración sujeto**: lo que preocupa es «que los lectores se fijen…». Una oración funciona como un singular.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué corrige Inés «Habían más de doscientas personas»?', options: ['Porque en el periódico no se puede usar «haber».', 'Porque el número de personas es incorrecto.', 'Porque «haber» impersonal no concuerda en un texto cuidado.'], answer: 2, why: '«En el periódico “haber” no concuerda: las personas no son el sujeto».', en: 'Why does Inés correct “Habían más de doscientas personas”?' },
            { prompt: '¿Qué frase de Daniel no necesita ningún cambio?', options: ['«La gente estaban indignados».', '«La mayoría de los vecinos pidieron más autobuses nocturnos».', '«La concejala, junto con su equipo, presentarán un plan».'], answer: 1, why: 'Con «la mayoría de» + plural, el plural es correcto.', en: 'Which of Daniel’s sentences needs no change?' },
            { prompt: '¿Por qué mantiene Inés «Los vecinos estamos cansados»?', options: ['Porque Carmen se incluye entre los vecinos.', 'Porque es una cita y las citas no se corrigen nunca.', 'Porque «vecinos» es un colectivo.'], answer: 0, why: '«Carmen se incluye»: el verbo va en 1.ª persona plural.', en: 'Why does Inés keep “Los vecinos estamos cansados”?' },
          ] },
        ] },
        { title: 'Más frases del periódico · More lines from the paper', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué admite el verbo? · What can the verb take?', categories: [
            { id: 'sing', label: 'SOLO SINGULAR', tone: 'blue' },
            { id: 'dos', label: 'SINGULAR O PLURAL', tone: 'teal' },
            { id: 'plural', label: 'PLURAL · lo normal en un texto cuidado', tone: 'orange' },
          ], items: [
            { text: 'El resto de los concejales ___ en contra. (votar)', answer: 'dos', why: 'Cantidad + de + plural: votó o votaron.' },
            { text: 'Ayer ___ dos apagones en La Ribera. (haber)', answer: 'sing', why: '«Haber» impersonal: hubo.' },
            { text: 'Tanto la oposición como el Gobierno ___ la medida. (aplaudir)', answer: 'plural', why: '«Tanto… como» une dos sujetos: plural.' },
            { text: 'Esto ___ buenas noticias para el barrio. (ser)', answer: 'plural', why: 'Sujeto neutro y atributo plural: «Esto son buenas noticias».' },
            { text: 'No ___ ni el alcalde ni la concejala. (contestar)', answer: 'dos', why: '«Ni… ni» detrás del verbo: contestó o contestaron.' },
            { text: 'A los lectores les ___ que el periódico rectifique. (gustar)', answer: 'sing', why: 'El sujeto es una oración: gusta.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno resume la asamblea en tres frases, como Daniel, con «había / hubo», «la mayoría de…» y «Lo que piden los vecinos son…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero el sujeto, después el verbo. Subject first, then the verb.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Según el informe técnico, ___ graves deficiencias en la red de alcantarillado.', options: ['hubieron', 'habían', 'hubo'], answer: 2, why: '«Haber» impersonal en un informe: singular. «Hubieron» y «habían» no se aceptan en la lengua cuidada.', en: 'According to the technical report, there were serious faults in the sewer system.' },
            { prompt: 'Lo que reclaman los conductores ___ más plazas de aparcamiento.', options: ['son', 'está', 'es'], answer: 0, why: 'Sujeto neutro («lo que reclaman») y atributo plural: «ser» en plural.', en: 'What drivers are demanding is more parking spaces.' },
            { prompt: 'A la oposición le ___ que el pleno se celebre a puerta cerrada.', options: ['sorprendemos', 'sorprende', 'sorprenden'], answer: 1, why: 'El sujeto es la oración «que el pleno se celebre…»: singular.', en: 'The opposition is surprised that the council meeting is being held behind closed doors.' },
            { prompt: 'La alcaldesa, junto con dos concejales, ___ la obra el lunes.', options: ['inauguró', 'inauguramos', 'inauguraron'], answer: 0, why: 'El inciso entre comas no es sujeto: concuerda con «la alcaldesa».', en: 'The mayor, together with two councillors, opened the new works on Monday.' },
            { prompt: 'Es uno de los periodistas que mejor ___ el barrio. (texto cuidado)', options: ['conocen', 'conoce', 'conocemos'], answer: 0, why: 'El relativo se refiere a «los periodistas»: plural recomendado. El singular se oye mucho, pero en un texto cuidado se prefiere «conocen».', en: 'He is one of the journalists who know the neighbourhood best.' },
          ] },
        ] },
        { title: '¿Qué número admite? · Which number does it allow?', blocks: [
          { kind: 'classify', title: 'Titulares y entradillas · Headlines and leads', categories: [
            { id: 'sing', label: 'SOLO SINGULAR', tone: 'blue' },
            { id: 'dos', label: 'SINGULAR O PLURAL', tone: 'teal' },
            { id: 'plural', label: 'PLURAL · lo normal en un texto cuidado', tone: 'orange' },
          ], items: [
            { text: 'Un grupo de ciclistas ___ la avenida durante una hora. (cortar)', answer: 'dos', why: 'Grupo + de + plural: cortó o cortaron.' },
            { text: 'Ni la empresa ni el sindicato ___ el acuerdo. (aceptar)', answer: 'plural', why: '«Ni… ni» delante del verbo: plural.' },
            { text: '___ varias alternativas al proyecto. (existir)', answer: 'plural', why: '«Existir» tiene sujeto (varias alternativas): existen.' },
            { text: '___ tres meses que no se reúne la comisión. (hacer)', answer: 'sing', why: '«Hacer» de tiempo: invariable, hace.' },
            { text: 'La mitad de los socios ___ en contra. (votar)', answer: 'dos', why: 'Cantidad + de + plural: votó o votaron.' },
            { text: 'El público ___ en pie al final del concierto. (ponerse)', answer: 'sing', why: 'Colectivo solo: se puso.' },
          ] },
        ] },
        { title: 'Corrige el texto · Fix the text', blocks: [
          { kind: 'fix', items: [
            { sentence: 'En la reunión hubieron momentos de tensión.', ok: false, options: ['En la reunión hubieran momentos de tensión.', 'En la reunión hubo momentos de tensión.', 'En la reunión habían momentos de tensión.'], answer: 1, why: '«Haber» impersonal: hubo, en singular.' },
            { sentence: 'Se vende locales comerciales en el centro histórico.', ok: false, options: ['Se venden locales comerciales en el centro histórico.', 'Venden se locales comerciales en el centro histórico.', 'Se venden a locales comerciales en el centro histórico.'], answer: 0, why: 'Pasiva con «se»: «locales» es el sujeto y el verbo concuerda en plural.' },
            { sentence: 'Todo eran quejas sobre el ruido de las obras.', ok: true, why: 'Correcta: sujeto neutro («todo») y atributo plural; «ser» concuerda con «quejas».' },
            { sentence: 'Al nuevo director le encanta las propuestas de los vecinos.', ok: false, options: ['Al nuevo director les encanta las propuestas de los vecinos.', 'El nuevo director le encantan las propuestas de los vecinos.', 'Al nuevo director le encantan las propuestas de los vecinos.'], answer: 2, why: 'El sujeto pospuesto, «las propuestas», es plural: encantan.' },
            { sentence: 'Hacen ya diez años que se inauguró el puente.', ok: false, options: ['Hace ya diez años que se inauguró el puente.', 'Han hecho ya diez años que se inauguró el puente.', 'Hacían ya diez años que se inauguró el puente.'], answer: 0, why: '«Hacer» con tiempo transcurrido no concuerda: hace.' },
            { sentence: 'Pueden haber cambios en el horario de verano.', ok: false, options: ['Pueden haberse cambios en el horario de verano.', 'Pueden haber habido cambios en el horario de verano.', 'Puede haber cambios en el horario de verano.'], answer: 2, why: 'En la perífrasis con «haber» impersonal, el auxiliar va en singular: puede haber.' },
          ] },
        ] },
        { title: 'Mensajes antes del cierre · Messages before the deadline', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Inés y Daniel, por el chat de la redacción · Inés and Daniel on the newsroom chat', lines: [
            { who: 'Inés', text: 'Daniel, en la noticia de la encuesta pones «El 62 % de los jóvenes piden más frecuencias nocturnas». ¿Es correcto?' },
            { who: 'Daniel', text: '___', options: ['No, tiene que ser «pide».', 'No, tiene que ser «pedimos».', 'Sí, y «pide» también lo sería.'], answer: 2, why: 'Porcentaje + de + plural: «pide» y «piden» son correctas. «Pedimos» incluiría a quien escribe.' },
            { who: 'Inés', text: 'Exacto. ¿Y el titular? «___ los retrasos de la línea 4».', options: ['Lo que más se critican son', 'Lo que más se critica son', 'Lo que más se critica es'], answer: 1, why: 'Pseudoescindida con atributo plural: «ser» en plural. «Se critica» va en singular porque su sujeto es «lo que».' },
            { who: 'Daniel', text: 'Lo cambio. En el tercer párrafo pongo: «Desde el lunes ___ los nuevos abonos mensuales».', options: ['se venden', 'se vendemos', 'se vende'], answer: 0, why: 'Pasiva con «se»: el sujeto, «los nuevos abonos», va detrás y es plural.' },
            { who: 'Inés', text: 'Bien. Y en el pie de foto: «En la estación ___ colas de una hora».', options: ['hubieron', 'había', 'habían'], answer: 1, why: '«Haber» impersonal: había, en singular.' },
            { who: 'Daniel', text: 'Corregido. Por cierto, a Carmen ___ las cifras de participación. ¿Se las mandas tú?', options: ['le falta', 'les faltan', 'le faltan'], answer: 2, why: '«Faltar» concuerda con «las cifras» (plural); «le» se refiere a Carmen (singular).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Lo', 'que', 'piden', 'los', 'vecinos', 'son', 'más', 'autobuses.'], accept: ['Lo que piden los vecinos son más autobuses.', 'Lo que los vecinos piden son más autobuses.'], en: 'What the residents are asking for is more buses.' },
            { tiles: ['Me', 'preocupa', 'que', 'lleguen', 'tan', 'tarde.'], accept: ['Me preocupa que lleguen tan tarde.'], en: 'It worries me that they arrive so late.' },
            { tiles: ['Hace', 'dos', 'años', 'que', 'cerró', 'la', 'biblioteca.'], accept: ['Hace dos años que cerró la biblioteca.'], en: 'The library closed two years ago.' },
          ] },
        ] },
        { title: 'Reescribe para el periódico · Rewrite for the paper', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada frase y explica qué ha cambiado en la concordancia. Tú confirmas si es la forma de un texto cuidado.', self: 'Reescribe cada frase y di en voz alta con qué concuerda ahora el verbo. (Say what the verb agrees with now.)' } },
          { kind: 'rewrite', title: 'La versión final · The final version', items: [
            { prompt: 'Asistieron más de trescientas personas.', instruction: 'Cambia «asistir» por «haber» en pasado (un hecho puntual).', accept: ['Hubo más de trescientas personas', 'Había más de trescientas personas'] },
            { prompt: 'La directora y su equipo presentaron el informe.', instruction: 'Usa un inciso con «junto con» entre comas.', accept: ['La directora, junto con su equipo, presentó el informe', 'La directora junto con su equipo presentó el informe'] },
            { prompt: 'Necesitamos más voluntarios para la campaña.', instruction: 'Destácalo con «Lo que…».', accept: ['Lo que necesitamos son más voluntarios para la campaña'] },
            { prompt: 'Se alquila un local en la plaza.', instruction: 'Cambia «un local» por «dos locales».', accept: ['Se alquilan dos locales en la plaza'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno lee en voz alta un titular real de su país y comenta la concordancia: ¿singular, plural, o las dos valdrían?' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El Mirador en cinco minutos', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'El resumen informativo · The news summary', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada verbo con un sujeto especial (la mayoría de…, ni… ni, junto con…) y cada «haber» o «hacer». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota los verbos que concuerdan con un colectivo, un porcentaje o un sujeto detrás. (Note the verbs that agree with a collective, a percentage or a postposed subject.)' } },
          { kind: 'listen', title: 'El Mirador en cinco minutos', channel: 'RESUMEN INFORMATIVO · EL MIRADOR', src: '/audio/grammar-live/495.mp3',
            before: 'Felipe Arango presenta cada mañana un resumen de noticias de El Mirador. Hoy habla de la encuesta de transporte y de la asamblea de La Ribera. ¿Qué datos crees que va a dar? (What figures do you think he will mention?)',
            gist: { prompt: '¿De qué trata el resumen? · What is the summary about?', options: ['De unas elecciones municipales.', 'De los problemas del transporte y de las reivindicaciones de un barrio.', 'De la inauguración de una nueva línea de metro.'], answer: 1, why: 'Habla de la encuesta de transporte, de la asamblea de La Ribera y de los nuevos abonos.', en: 'He covers the transport survey, the residents’ assembly and the new monthly passes.' },
            details: [
              { prompt: '¿Qué hace la mayoría de los vecinos?', options: ['Usa el autobús al menos tres veces por semana.', 'No usa nunca el transporte público.', 'Va en bicicleta al trabajo.'], answer: 0, why: '«La mayoría de los vecinos usa el autobús al menos tres veces por semana».', en: 'What do most residents do?' },
              { prompt: '¿Qué es lo que más se critica?', options: ['Los retrasos de la línea 4.', 'El precio de los abonos.', 'La falta de taxis.'], answer: 0, why: '«Lo que más se critica son los retrasos de la línea 4».', en: 'What gets the most criticism?' },
              { prompt: '¿Quién no fue a la asamblea?', options: ['La presidenta de la asociación.', 'Los comerciantes del barrio.', 'El alcalde y la concejala de Movilidad.'], answer: 2, why: '«Ni el alcalde ni la concejala de Movilidad acudieron a la cita».', en: 'Who did not go to the assembly?' },
              { prompt: '¿Cuándo se presentará el plan de choque?', options: ['Dentro de dos años.', 'Mañana.', 'El viernes.'], answer: 2, why: '«La concejala, junto con su equipo técnico, presentará el viernes un plan de choque».', en: 'When will the emergency plan be presented?' },
            ],
            transcript: 'Buenos días, les habla Felipe Arango y esto es El Mirador en cinco minutos. Empezamos con la encuesta municipal de transporte. Según los datos publicados ayer, [[la mayoría de los vecinos usa|teal]] el autobús al menos tres veces por semana, y el sesenta y dos por ciento de los jóvenes pide más frecuencias por la noche. [[Lo que más se critica son|orange]] los retrasos de la línea 4. Seguimos en La Ribera, donde el martes [[hubo|blue]] una asamblea muy concurrida: asistieron más de doscientas personas. [[Ni el alcalde ni la concejala de Movilidad acudieron|orange]] a la cita, algo que los organizadores lamentaron. La concejala, [[junto con su equipo técnico, presentará|blue]] el viernes un plan de choque. [[Hace|blue]] dos años que se prometió un carril bici en el paseo del río, y todavía [[faltan|orange]] dos tramos por construir. Carmen Vidal, presidenta de la asociación vecinal, lo resumía así: «[[Los vecinos estamos|violet]] cansados de promesas: queremos obras, no anuncios». Y terminamos con una buena noticia: desde el lunes ya se venden los nuevos abonos mensuales en todas las estaciones. Esto ha sido todo por hoy. Gracias por escucharnos y hasta mañana.',
            reply: { teacher: 'Tú eres Inés y preguntas por los datos del resumen («¿Cuánta gente hubo en la asamblea?», «¿Qué piden los jóvenes?»). Tu alumno responde como Felipe, con la concordancia de un texto cuidado.', self: 'Resume en voz alta las tres noticias para un amigo que no ha oído el programa: usa «la mayoría de…», «hubo…» y «Lo que piden… son…». (Retell the three stories aloud.)' } },
          { kind: 'tip', icon: '🇨🇴', title: 'Un locutor colombiano · A Colombian newsreader', text: 'Felipe habla con el registro de un informativo: frases completas, cifras exactas y una concordancia cuidada («hubo una asamblea», «la concejala, junto con su equipo, presentará»). Saluda con «les habla», con **ustedes**, como se hace en toda América. Fíjate en que dice «la mayoría de los vecinos usa» y «el sesenta y dos por ciento de los jóvenes pide»: en singular, una opción muy habitual en la prensa, aunque el plural también sería correcto.', en: 'Felipe uses news register: full sentences, exact figures and careful agreement. He addresses listeners as “ustedes”, as everywhere in Latin America. Notice that he chooses the singular after “la mayoría de los vecinos” and “el 62 % de los jóvenes”, a very common choice in the press, although the plural would also be correct.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar de grupos, cifras y prioridades', coach: 'Habla con datos y con concordancia cuidada. Talk with figures and careful agreement.',
      steps: [
        { title: 'Tu ciudad, en cifras y opiniones · Your town in figures and opinions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases completas. Si se equivoca en una concordancia, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta usa al menos una estructura de la clase: un colectivo, un porcentaje, «haber», «ser» con plural o un sujeto detrás. (Use at least one structure from the class in each answer.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué opina la gente de tu ciudad sobre el transporte o la vivienda? · What do people in your town think about transport or housing?', followUps: ['¿Y la mayoría de tus amigos?', '¿Hay algún dato o porcentaje que te sorprenda?'], phrases: ['[[La gente piensa|blue]] que…', '[[La mayoría de mis amigos|teal]] usa / usan…', '[[Un buen porcentaje de los jóvenes|teal]]…'], hint: 'Colectivo solo → singular; cantidad + de + plural → las dos opciones.', example: 'La gente piensa que los alquileres están por las nubes, y tiene razón. La mayoría de mis amigos comparte piso hasta los treinta y tantos. Leí que casi la mitad de los jóvenes de mi ciudad viven con sus padres, y eso me parece preocupante.', next: 'Ahora, una reunión.' },
            { q: 'Cuenta la última reunión, asamblea o celebración multitudinaria a la que fuiste. · Describe the last big meeting or event you went to.', followUps: ['¿Hubo algún momento de tensión?', '¿Quién no fue y por qué?'], phrases: ['[[Había|blue]] unas … personas.', '[[Hubo|blue]] un momento en que…', '[[Ni … ni … vinieron|orange]].'], hint: '«Haber» siempre en singular; si quieres el plural, usa «asistir», «venir» o «acudir».', example: 'El año pasado fui a la junta de vecinos de mi edificio. Había unas cuarenta personas, mucho más de lo normal. Hubo un momento de tensión cuando se habló de las obras del ascensor. Ni el presidente ni el administrador supieron responder, y al final todo eran gritos.' },
            { q: '¿Qué te encanta y qué te molesta de tu barrio? · What do you love and what bothers you about your neighbourhood?', followUps: ['¿Qué te falta para estar a gusto?', '¿Te preocupa algún cambio reciente?'], phrases: ['[[Me encantan|orange]] los…', '[[Me molesta que|blue]]…', '[[Me faltan|orange]]…'], hint: 'Mira lo que va detrás: si es plural, el verbo también; si es una oración, singular.', example: 'Me encantan las panaderías de mi calle y los árboles de la plaza. Me molesta que cierren tantas tiendas pequeñas. Y me faltan zonas verdes de verdad: los parques que quedan son diminutos.', next: 'Ahora, prioridades.' },
            { q: '¿Qué es lo que más necesita tu ciudad? ¿Cuál es el mayor problema? · What does your town need most?', followUps: ['¿Qué solución propones?', '¿Hace cuánto que existe ese problema?'], phrases: ['[[Lo que necesita mi ciudad son|orange]]…', '[[El problema son|orange]]…', '[[Hace|blue]] … años que…'], hint: '«Ser» con un atributo plural va en plural; «hace» de tiempo, siempre en singular.', example: 'Lo que necesita mi ciudad son más líneas de autobús entre los barrios, no solo hacia el centro. El problema son las distancias: hace diez años que la ciudad crece hacia fuera y el transporte no la ha seguido.' },
            { q: 'Eres Inés. Explicas a una becaria nueva, a la que tratas de usted, tres errores frecuentes de concordancia. · You are Inés: explain three agreement mistakes to a new intern.', followUps: ['¿Y si un entrevistado dice «habían» en una cita?', '¿Qué caso le parece más difícil?'], phrases: ['[[Usted ha escrito|violet]]…', 'Aquí va [[hubo|blue]], no…', '[[Las dos son correctas|teal]]: …'], hint: 'Trata de usted: verbo en 3.ª persona. Da el error, la corrección y la razón.', example: 'Mire, usted ha escrito «hubieron quejas»: en el periódico va «hubo», porque «haber» no tiene sujeto. Tampoco ponemos «se vende pisos», sino «se venden». Y no se preocupe por «la mayoría de los vecinos votó» o «votaron»: las dos son correctas.', teacher: 'Tú eres la becaria y preguntas por cada caso. Tu alumno responde como Inés, tratándote de usted.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («Habían muchas personas», «Me encanta los conciertos»). Tu alumno lo detecta y lo corrige.', self: 'Ahora graba tus respuestas y escúchalas: ¿algún «habían», «hacen dos años» o «me encanta» + plural? Corrígelo y repite. (Record yourself and check for these slips.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota informativa', coach: 'Datos claros y concordancia de periódico. Clear facts, newspaper-grade agreement.',
      steps: [
        { title: 'La noticia para El Mirador · The news piece for El Mirador', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el texto en voz alta y juntos revisan cada verbo: ¿cuál es su sujeto?', self: 'Escribe tu texto y toca «Revisar mi texto». Después subraya cada verbo y busca su sujeto. (Underline each verb and find its subject.)' } },
          { kind: 'write', title: 'Nota informativa · Short news report', situation: 'Eres Daniel (o eres tú, en tu ciudad). Escribes para El Mirador una nota informativa de 120 a 180 palabras sobre una reunión, una asamblea o los resultados de una encuesta. La lee un público general y la revisa Inés antes de publicarla. (Write a short news report on a meeting or a survey for a general readership.)', task: [
            'Da al menos un dato con una cantidad o un porcentaje (la mayoría de…, el X % de…, un grupo de…).',
            'Usa «haber» impersonal o «hace + tiempo» correctamente.',
            'Incluye «ser» con un atributo plural (Lo que piden… son…, El problema son…).',
            'Usa sujetos coordinados, «ni… ni» o un inciso con «junto con».',
            'Incluye un verbo como «preocupar», «faltar» o «quedar» con el sujeto detrás.',
          ], starters: ['La asamblea convocada el… reunió a…', 'Hubo momentos de…', 'La mayoría de los asistentes…', 'Lo que piden los vecinos son…', 'Hace … que…', 'Según la última encuesta, el … % de…'],
            words: ['hubo', 'había', 'hace … años', 'la mayoría de', 'el … % de', 'lo que… son', 'ni… ni', 'junto con', 'faltan', 'les preocupa que'],
            model: 'Más de doscientos vecinos piden soluciones en La Ribera. La asamblea vecinal convocada el martes en el centro cívico de La Ribera reunió a más de doscientas personas. [[Hubo|blue]] momentos de tensión cuando se leyó la respuesta del Ayuntamiento, pero [[la mayoría de los asistentes valoró|teal]] positivamente el encuentro. [[Lo que piden los vecinos son|orange]], sobre todo, más autobuses nocturnos y el final de las obras del carril bici. [[Hace|blue]] dos años que se aprobó el proyecto y todavía [[faltan|orange]] dos tramos por construir. [[Ni el alcalde ni la concejala de Movilidad acudieron|orange]] a la cita. [[La concejala, junto con su equipo técnico, presentará|blue]] un plan de choque el próximo viernes. «[[Los vecinos estamos|violet]] cansados de promesas», declaró Carmen Vidal, presidenta de la asociación. Según la última encuesta municipal, [[el 62 % de los jóvenes del barrio usa|teal]] el transporte público a diario, y a muchos [[les preocupa que|blue]] el servicio nocturno siga sin mejorar.',
            minWords: 120,
            checks: [
              { label: 'Un dato con cantidad o porcentaje (la mayoría de, el X % de, la mitad de, un grupo de…)', pattern: '(?<!\\p{L})(?:la\\s+mayoría|la\\s+mitad|un\\s+grupo|el\\s+resto|un\\s+tercio|una\\s+parte|(?:el|un)\\s+\\d+\\s*(?:%|por\\s+ciento))\\s+de(?!\\p{L})', tip: 'Da un dato como «La mayoría de los asistentes…» o «El 40 % de los jóvenes…».' },
              { label: '«Haber» impersonal o «hace» + tiempo', pattern: '(?<!\\p{L})(?:hubo|había|habrá|ha\\s+habido|hay|hace|hacía)(?!\\p{L})', tip: 'Usa «hubo», «había» o «hace dos años que…».' },
              { label: '«Ser» en plural con un atributo plural', pattern: '(?<!\\p{L})(?:lo\\s+que\\s+[^.;:]{1,60}?|el\\s+problema|eso|esto|todo)\\s+(?:son|eran|fueron|serán)(?!\\p{L})', tip: 'Prueba con «Lo que piden los vecinos son…» o «El problema son…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})hubieron\\s+(?!\\p{L}+(?:ado|ido|to|cho|so)(?!\\p{L}))', why: '«Haber» impersonal va en singular: «**hubo** quejas», no «hubieron quejas».' },
              { pattern: '(?<!\\p{L})hacen\\s+(?:ya\\s+)?(?:\\d+|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|varios|varias|muchos|muchas|unos|unas)\\s+(?:años|meses|semanas|días|horas)(?!\\p{L})', why: '«Hacer» con tiempo transcurrido no concuerda: «**Hace** dos años».' },
              { pattern: '(?<!\\p{L})(?:pueden|deben|suelen|van\\s+a)\\s+haber(?!\\p{L})', why: 'Con «haber» impersonal, el auxiliar va en singular: «**puede** haber», «**va** a haber».' },
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
            { tone: 'blue', label: 'SINGULAR', formula: 'colectivo solo · oración sujeto · A, junto con B, · haber · hacer', example: 'La gente dice… Me preocupa que lleguen tarde. Hubo quejas. Hace dos años.', caption: 'nunca «hubieron», «hacen dos años»', en: 'Singular with a collective alone, a clause as subject, a phrase between commas with junto con, and with impersonal haber and hacer' },
            { tone: 'teal', label: 'DOS OPCIONES', formula: 'cantidad + de + plural · ni… ni / o detrás del verbo', example: 'La mayoría de los alumnos aprobó / aprobaron. No vino ni Ana ni Luis / no vinieron.', caption: 'con «ser / estar» + atributo, mejor plural', en: 'Both numbers are correct after a quantity noun + de + plural, and with ni… ni or o after the verb' },
            { tone: 'orange', label: 'PLURAL', formula: 'A y B · tanto… como · ser + atributo plural · sujeto plural detrás', example: 'Eso son tonterías. Me encantan tus fotos. Se venden pisos. Faltan dos firmas.', caption: 'el sujeto manda aunque vaya detrás', en: 'Plural with coordinated subjects, ser before a plural complement, and plural subjects placed after the verb' },
            { tone: 'violet', label: 'PERSONA', formula: 'usted(es) + 3.ª · voseo con formas propias · los vecinos estamos · uno de los que + plural', example: 'Usted tiene razón. Los vecinos estamos cansados. Es uno de los que más saben.', caption: 'quien habla puede incluirse en el sujeto', en: 'Usted takes the third person; a plural subject can include the speaker; uno de los que prefers the plural' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de conjugar, pregúntate **dos cosas**: ¿hay sujeto? (con «haber» y «hacer» de tiempo, **no**: singular siempre) y ¿dónde está? Si va **detrás** («me encantan tus fotos», «se venden pisos», «faltan dos firmas»), búscalo antes de elegir el número. Y cuando el núcleo es singular pero el sentido es plural («la mayoría de los vecinos»), recuerda que la norma acepta **las dos** opciones.', en: 'Before you conjugate, ask two things: is there a subject (with haber and time hacer, there isn’t, so always singular), and where is it? If it comes after the verb, find it before choosing singular or plural. And when the head is singular but the meaning is plural, remember that the norm accepts both.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Este fin de semana ___ varios cortes de luz en el barrio.', options: ['hubieron', 'hubo', 'habían'], answer: 1, why: '«Haber» impersonal: singular.', en: 'There were several power cuts in the neighbourhood this weekend.' },
            { prompt: 'Lo que más me cansa de mi trabajo ___ las reuniones.', options: ['son', 'es', 'están'], answer: 0, why: 'Sujeto neutro y atributo plural: «ser» en plural.', en: 'What tires me most about my job is the meetings.' },
            { prompt: 'Nos ___ mucho las fotos que nos mandaste.', options: ['gustaron', 'gustamos', 'gustó'], answer: 0, why: 'El sujeto pospuesto, «las fotos», es plural.', en: 'We really liked the photos you sent us.' },
            { prompt: 'El entrenador, al igual que sus jugadores, ___ satisfecho con el resultado.', options: ['estamos', 'estaba', 'estaban'], answer: 1, why: 'El inciso con «al igual que» no es sujeto: concuerda con «el entrenador».', en: 'The coach, like his players, was pleased with the result.' },
            { prompt: '___ cinco años que vivo en esta ciudad.', options: ['Hace', 'Hay', 'Hacen'], answer: 0, why: '«Hacer» con tiempo transcurrido: invariable, «hace».', en: 'I’ve been living in this city for five years.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un club de montaña. Now, a hiking club.', blocks: [
          { kind: 'lead', text: 'Lucía Robles corrige el boletín trimestral de un club de montaña antes de enviarlo a los socios. Encuentra tres errores de concordancia. Corrígelos.', en: 'Lucía Robles is proofreading a hiking club’s quarterly newsletter before it goes out to members. She finds three agreement mistakes. Correct them.' },
          { kind: 'rewrite', title: 'El boletín del club · The club newsletter', items: [
            { prompt: 'En la excursión de mayo habían cuarenta socios.', instruction: 'Corrige la concordancia de «haber» (mantén el imperfecto).', accept: ['En la excursión de mayo había cuarenta socios'] },
            { prompt: 'Se alquila tiendas de campaña en el refugio.', instruction: 'Corrige la concordancia de la pasiva con «se».', accept: ['Se alquilan tiendas de campaña en el refugio'] },
            { prompt: 'A los socios les gustó mucho las fotos de la cumbre.', instruction: 'Corrige la concordancia del verbo.', accept: ['A los socios les gustaron mucho las fotos de la cumbre'] },
          ] },
        ] },
        { title: 'Ampliación: casos límite · Extension: borderline cases', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** «Se **debe** revisar los datos» y «Se **deben** revisar los datos»: con un verbo auxiliar + infinitivo, la norma admite **las dos**. **2.** «**Les** dije a mis padres»: con un complemento indirecto plural detrás, lo recomendado es «les»; «le dije a mis padres» es muy frecuente en todas las zonas, pero se evita en un texto cuidado. **3.** «La mayoría de nosotros **piensa / pensamos**»: las dos son correctas; con «pensamos», quien habla se incluye. **4.** «Más de un vecino **se quejó**»: aunque el sentido es plural, «más de un» lleva singular.', en: 'For strong students or spare time. 1. With a modal + infinitive, both “Se debe revisar los datos” and “Se deben revisar los datos” are accepted. 2. With a plural indirect object after the verb, “les” is recommended; “le dije a mis padres” is very common everywhere but avoided in careful writing. 3. “La mayoría de nosotros piensa / pensamos”: both are correct, and “pensamos” includes the speaker. 4. “Más de un vecino se quejó”: the meaning is plural, but “más de un” takes the singular.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: '«Se pueden consultar los resultados en la web» / «Se puede consultar los resultados en la web». ¿Qué dice la norma?', options: ['Las dos son correctas.', 'Solo es correcta la segunda.', 'Solo es correcta la primera.'], answer: 0, why: 'Con auxiliar + infinitivo, la norma admite el singular y el plural.', en: 'Which does the norm accept? (The results can be checked online.)' },
            { prompt: 'En un informe oficial, ¿qué opción es la recomendada?', options: ['Les enviamos el acta a todos los socios.', 'Lo enviamos el acta a todos los socios.', 'Le enviamos el acta a todos los socios.'], answer: 0, why: 'El complemento indirecto («a todos los socios») es plural: «les». «Le» es muy frecuente al hablar.', en: 'In an official report, which option is recommended? (We sent the minutes to all members.)' },
            { prompt: '«Más de un socio ___ por el precio».', options: ['protestó', 'protestaron', 'protestamos'], answer: 0, why: '«Más de un» + nombre singular lleva el verbo en singular.', en: 'More than one member complained about the price.' },
            { prompt: 'Una vecina escribe: «La mayoría de nosotros pensamos que la obra es necesaria». ¿Es correcto?', options: ['No: debe ser «piensan».', 'Sí: con «pensamos» se incluye a sí misma; «piensa» también sería correcto.', 'No: debe ser «piensa».'], answer: 1, why: 'Con «la mayoría de nosotros», el verbo puede ir en 3.ª singular o en 1.ª plural.', en: 'Is this correct? (Most of us think the work is necessary.)' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca en una noticia real un «le» con complemento plural o un «se debe(n)» + infinitivo y comenta si la forma es la recomendada.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 196 · Interrogativas retóricas y exclamativas complejas', text: 'Ya decides la concordancia en textos cuidados: colectivos y porcentajes, sujetos coordinados, «ser» con atributo plural, «haber» y «hacer» invariables y sujetos detrás del verbo. En la clase 196 sigues trabajando el orden y la fuerza de la frase, pero desde otro ángulo: preguntas que no esperan respuesta («¿Quién no ha dicho eso alguna vez?») y exclamaciones complejas («¡Qué de gente había!», «¡Lo que nos costó!»), donde el sujeto también suele ir detrás del verbo.', en: 'You can now decide agreement in careful writing: collectives and percentages, coordinated subjects, ser with a plural complement, invariable haber and hacer, and subjects after the verb. In class 196 you keep working on word order and force from another angle: questions that expect no answer and complex exclamations, where the subject also tends to follow the verb.', href: '/gramatica/interrogativas-retoricas-y-exclamativas-complejas', label: 'Ir a la clase 196' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué decimos “hubo quejas” pero “existen quejas”?». Respuesta esperada: «haber» impersonal no tiene sujeto y no concuerda; «existir» sí tiene sujeto («quejas») y concuerda. Tarea: la nota informativa de Escribir sobre una reunión o encuesta real.' },
        ] },
      ],
    },
  ],
};
