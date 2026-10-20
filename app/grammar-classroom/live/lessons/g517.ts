import type { LiveLesson } from '../types';

/**
 * Lesson 517 · C2 · Leísmo y régimen pronominal en variedades cultas (course unit G217).
 * Builds on G181 (lesson 481: etymological system, the kinds of leísmo, laísmo, loísmo,
 * llamar / avisar / molestar, narrator vs character) and G180 (lesson 480: queísmo and
 * dequeísmo). Those inventories are not repeated; this C2 class applies them to formal,
 * pan-Hispanic institutional writing, following the DPD entries «leísmo», «laísmo», «loísmo»,
 * «le», «se», «informar», «ayudar», «llamar» and NGLE §16. Content: acceptance scale in the
 * cultivated norm (A Juan le vi: admitted; les vi a ellos: advised against; el libro le tengo,
 * laísmo, loísmo: not accepted); where leísmo is heard (central and northern Spain; rare in
 * most of America); courtesy «le» with usted (Le saludamos atentamente), accepted also in
 * America; number: «les» with a plural referent (Diles a tus padres; «le» for «les» very
 * frequent, avoided in careful writing) and «se lo» vs «se los» (frequent in American speech,
 * avoided in careful written norm); verbs whose government varies: informar (lo / la informamos
 * de que… · le informamos que…; *la informamos que), ayudar (lo / la ayudamos; le ayudamos also
 * widespread), llamar (by phone: la llamé; llamar la atención a alguien: le). Ampliación: the
 * passive test to decide the construction. Scene: the style committee of a fictional online
 * university (Universidad Abierta del Atlántico) writes its pan-Hispanic correspondence guide:
 * Beatriz Olmedo (copy editor, Burgos) and Mauricio Quintero (communications, Bogotá).
 * Escuchar: Mauricio's podcast «Dudas de norma» (es-CO-GonzaloNeural). Escribir: a guide entry.
 */
export const lesson: LiveLesson = {
  id: 517,
  level: 'C2',
  title: 'Leísmo y régimen pronominal en variedades cultas',
  subtitle: 'Juzgar qué usos de le, la y lo acepta la norma culta, reconocer su variación regional y aplicarlos en textos formales.',
  legend: [
    { tone: 'blue', label: 'NORMA GENERAL · válido en todas partes (lo / la directo, le / les indirecto, se lo)' },
    { tone: 'teal', label: 'ADMITIDO CON VARIACIÓN · leísmo de persona masculino singular, le de cortesía' },
    { tone: 'orange', label: 'EVITADO EN LA NORMA CULTA · laísmo, loísmo, les vi, le por les, se los' },
    { tone: 'violet', label: 'RÉGIMEN VARIABLE · informar, ayudar, llamar (cambia la construcción)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Qué admite la norma culta?', coach: 'Correcto no siempre significa preferible. Correct is not always preferable.',
      steps: [
        { title: 'Una universidad, veinte países · One university, twenty countries', blocks: [
          { kind: 'lead', text: 'La Universidad Abierta del Atlántico tiene estudiantes en España y en casi toda América. Su comité de estilo prepara una guía para los correos oficiales. Beatriz Olmedo, correctora de Burgos, escribe con naturalidad «Al tutor **le** vimos en la ceremonia»; Mauricio Quintero, coordinador de comunicación en Bogotá, escribiría «**lo** vimos». Los dos escriben bien. En la clase 181 aprendiste a reconocer cada fenómeno. Hoy das el paso de C2: **juzgar** cada forma según la norma culta, saber **dónde** se usa y **decidir** cuál conviene en un texto que leen hablantes de veinte países.', en: 'An online university with students in Spain and across Latin America is writing a style guide for its official emails. The copy editor from Burgos naturally writes “le vimos”; the coordinator in Bogotá would write “lo vimos”, and both are correct. In class 181 you learned to identify each phenomenon. The C2 step is to judge each form against the educated norm, know where it is used, and decide which one suits a text read in twenty countries.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases. Tu alumno dice cuál pondría en un correo para toda la universidad y por qué, antes de leer la explicación.', self: 'Lee las tres frases en voz alta. ¿Cuál pondrías en un correo para toda la universidad? Decide antes de leer la explicación. (Which would you use in a university-wide email?)' } },
          { kind: 'compare', title: 'Tres frases de las plantillas · Three template sentences', columns: [
            { tone: 'blue', label: 'NORMA GENERAL', sentence: '[[Al tutor lo vimos|blue]] en la ceremonia.', idea: '«Lo» directo masculino: válido y natural en todo el mundo hispánico.', en: 'The etymological system: correct everywhere and the safest choice for a pan-Hispanic readership.' },
            { tone: 'teal', label: 'ADMITIDO CON VARIACIÓN', sentence: '[[Al tutor le vimos|teal]] en la ceremonia.', idea: 'Leísmo de persona masculino singular: admitido, típico del centro y el norte de España.', en: 'Accepted by the educated norm, but regionally marked: a Latin American reader recognises it as Peninsular.' },
            { tone: 'orange', label: 'EVITADO EN LA NORMA CULTA', sentence: '[[Le recordamos a los estudiantes|orange]] que el plazo vence hoy.', idea: '«Le» con un referente plural: muy frecuente al hablar, pero se evita al escribir con cuidado: les recordamos.', en: 'Singular “le” doubling a plural noun is extremely common in speech on both sides of the Atlantic, but careful writing uses “les”.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Al tutor le vimos en la ceremonia». En la norma culta, esta frase…', options: ['solo es aceptable en la lengua oral.', 'es correcta: el leísmo de persona masculino singular está admitido.', 'es incorrecta fuera de España.'], answer: 1, why: 'La norma admite este leísmo en cualquier registro. Otra cosa es que, en un texto para toda América, «lo» resulte más general.', en: 'In the educated norm, this sentence is…' },
            { prompt: '¿Qué falla en «Le recordamos a los estudiantes que el plazo vence hoy»?', options: ['El pronombre debe concordar con el plural: les recordamos.', 'Nada: «le» vale para singular y plural.', 'Es laísmo.'], answer: 0, why: 'El indirecto duplicado es plural («a los estudiantes»), así que el pronombre también: les.', en: 'What is wrong with this sentence?' },
          ] },
        ] },
        { title: 'La escala de la norma · The scale of the norm', mascot: '/brand/mascot/studying.webp', coach: 'Admitido, desaconsejado, no aceptado. Accepted, advised against, rejected.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'GRADOS DE ACEPTACIÓN', question: '¿Qué dice la norma culta de cada uso de «le», «la» y «lo»?', en: 'The Academies’ norm is a scale, not a yes or no. Masculine singular person leísmo (“A Juan le vi”) is accepted. Plural person leísmo (“les vi a ellos”) is less widespread and is advised against in educated use. Leísmo with things (“el libro le tengo”) and with women is not accepted, and neither are laísmo (“la dije”) or loísmo (“lo di un golpe”). Courtesy “le” with usted (“Le saludo atentamente”) is accepted for men and women alike, and is also common in Latin America.', formula: ['admitido: A Juan le vi · Le saludo atentamente (usted)', 'desaconsejado: A ellos les vi → los vi', 'no aceptado: El libro le tengo → lo tengo · La dije → le dije · Lo di un golpe → le di'],
            meaning: 'La norma no es un sí o un no, sino una **escala**. Se **admite** el leísmo de persona masculino singular y el **le de cortesía** con usted. Se **desaconseja** el leísmo plural. **No se aceptan** el leísmo de cosa ni el femenino, el **laísmo** ni el **loísmo**.',
            examples: [
              { es: '[[Al nuevo decano le eligieron|teal]] por unanimidad.', en: 'Accepted: a man, singular, as direct object. “Lo eligieron” is equally correct and more general.' },
              { es: 'Señora Ríos: [[le saludamos atentamente|teal]] y quedamos a su disposición.', en: 'The courtesy “le” in a letter closing, addressed to a woman: accepted, and normal in Latin American correspondence too.' },
              { es: '[[A los ponentes les esperamos|orange]] en la sala B → mejor: [[los esperamos|blue]].', en: 'Plural leísmo: the norm advises against it; “los” is the recommended form.' },
            ] },
          { kind: 'table', title: 'Uso, juicio y zona · Use, verdict and area', head: ['Uso', 'Ejemplo', 'Norma culta', 'Dónde se oye'], rows: [
            ['Leísmo de persona masc. sing.', 'A Juan **le** vi.', '[[Admitido|teal]]', 'Centro y norte de España; poco frecuente en la mayor parte de América'],
            ['Leísmo de cortesía', '**Le** saludo atentamente.', '[[Admitido|teal]]', 'Muy extendido, también en América'],
            ['Leísmo plural', 'A ellos **les** vi.', '[[Desaconsejado|orange]]: **los** vi', 'Menos extendido que el singular'],
            ['Leísmo de cosa o femenino', 'El libro **le** tengo.', '[[No aceptado|orange]]: **lo** tengo', '—'],
            ['Laísmo · loísmo', '**La** dije que viniera.', '[[No aceptado|orange]]: **le** dije', 'Habla de algunas zonas de España'],
          ], note: 'Que la norma admita un uso no obliga a usarlo: el sistema etimológico (lo, la, le) es correcto en todas las variedades y por eso es la opción más general en un texto panhispánico.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál de estas frases NO acepta la norma culta?', options: ['Le saludamos atentamente, señora Ríos.', 'Al conferenciante le recibimos en el aeropuerto.', 'El programa ya le tengo impreso.'], answer: 2, why: 'Leísmo de cosa (el programa): no se acepta. Las otras dos son leísmo de persona masculino singular y le de cortesía, ambos admitidos.', en: 'Which sentence does the educated norm NOT accept?' },
            { prompt: 'Según el DPD, ¿dónde es característico el leísmo de persona?', options: ['En el centro y el norte de España.', 'En todo el mundo hispánico por igual.', 'En la mayor parte de América.'], answer: 0, why: 'Es característico del centro y el norte de España y poco frecuente en la mayor parte de América.', en: 'According to the DPD, where is person leísmo characteristic?' },
          ] },
        ] },
        { title: 'El número: les y se lo · Number: les and se lo', mascot: '/brand/mascot/standing.webp', coach: 'Uno o varios: el pronombre lo dice. One or many: the pronoun shows it.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONCORDANCIA DE NÚMERO', question: '¿El destinatario es uno o son varios?', en: 'Two number mismatches are very common in educated speech yet avoided in careful writing. First, singular “le” doubling a plural indirect object (“Dile a tus padres”): write “Diles a tus padres”. Second, in much of Latin America the plural of the recipients is moved onto the direct object pronoun (“se los dije”, meaning “se lo dije a ellos”), because “se” cannot show plural. It is very frequent, also among educated speakers, but the DPD recommends avoiding it in careful writing.', formula: ['indirecto plural → les: Diles a tus padres · Les recordamos a los estudiantes', 'se no marca número: se lo dije (a él, a ella, a ellos, a ustedes)', 'lo / los concuerda con lo dicho o enviado, no con quien lo recibe'],
            meaning: '**Le por les**: muy frecuente en España y en América, incluso en hablantes cultos, pero se evita en la escritura cuidada. **Se los** por **se lo** con destinatario plural: muy frecuente en la conversación de buena parte de América; el DPD recomienda evitarlo en la lengua escrita cuidada.',
            examples: [
              { es: '[[Diles a tus padres|blue]] que la ceremonia empieza a las diez.', en: 'Plural recipient, plural pronoun. “Dile a tus padres” is very common in speech but avoided in careful writing.' },
              { es: 'El enlace del aula virtual [[ya se lo enviamos|blue]] a ustedes el lunes.', en: 'One link, several recipients: “se lo”. The recipients’ plural is already in “a ustedes”.' },
              { es: '[[Ya se los enviamos|orange]] (el enlace, a ustedes): frecuente al hablar en América; en un correo formal, se lo enviamos.', en: 'Moving the plural onto “lo” is widespread in Latin American conversation; the written norm keeps “se lo”.' },
            ] },
          { kind: 'table', title: 'Qué concuerda con qué · What agrees with what', head: ['Lo enviado', 'Destinatario', 'Escritura cuidada', 'Frecuente al hablar'], rows: [
            ['el enlace', 'a usted', 'se **lo** enviamos', '—'],
            ['el enlace', 'a ustedes', 'se **lo** enviamos', '[[se los enviamos|orange]] (América)'],
            ['los enlaces', 'a ustedes', 'se **los** enviamos', '—'],
            ['la guía', 'a los tutores', 'se **la** enviamos', '[[se las enviamos|orange]] (América)'],
          ], note: 'Con «se las» y «se los» hay que preguntarse siempre qué es plural: ¿lo enviado o los destinatarios? Solo lo primero justifica la -s en la escritura cuidada.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Correo formal: «La guía de estilo ya ___ mandamos a todos los coordinadores».', options: ['se las', 'se la', 'se les'], answer: 1, why: 'Lo mandado es «la guía» (femenino singular): se la. La -s de «se las» marcaría el plural de los destinatarios, algo que se evita en la escritura cuidada.', en: 'Formal email: “We have already sent the style guide to all the coordinators.”' },
            { prompt: '«___ a tus compañeros que el aula cambia el jueves». En un texto cuidado:', options: ['Dile', 'Díselos', 'Diles'], answer: 2, why: 'El indirecto es plural (a tus compañeros): diles. «Dile» es muy frecuente al hablar, pero se evita al escribir.', en: '“Tell your classmates the classroom changes on Thursday.” In careful writing:' },
          ] },
        ] },
        { title: 'Verbos de régimen variable · Verbs with variable government', mascot: '/autoestudio/mascot/noting.webp', coach: 'Primero la construcción, luego el pronombre. Construction first, then the pronoun.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'INFORMAR · AYUDAR · LLAMAR', question: '¿Qué construcción elige el verbo en esta frase?', en: 'Some verbs allow two constructions, and the pronoun follows the construction. Informar: the person can be the direct object with “de” (lo / la informamos de que…) or the indirect object with the information as direct object and no “de” (le informamos que…), a construction especially frequent in Latin America. Mixing them (*la informamos que) drops a required “de”. Ayudar is transitive in general use (lo / la ayudamos); “le ayudamos” is also very widespread. Llamar on the phone takes a direct object (la llamé), but in “llamar la atención a alguien” the direct object is “la atención”, so the person is indirect: le llamaron la atención.', formula: ['informar a alguien DE algo → lo / la informamos de que…', 'informar algo A alguien → le informamos que…', 'ayudar a alguien → lo / la ayudamos (le ayudamos: también muy extendido)', 'llamar por teléfono → la llamé · llamar la atención a alguien → le llamaron la atención'],
            meaning: 'En estos verbos el pronombre **no** depende de la zona, sino de la **construcción**. Con **informar**, la persona es directo si lleva **de** (la informamos de que) e indirecto si lo informado es el directo (le informamos que). Lo que no vale es mezclar: *la informamos que.',
            examples: [
              { es: '[[La informamos de que|violet]] su beca ha sido aprobada.', en: 'Person as direct object, with “de”: “la” for a woman, “lo” for a man.' },
              { es: '[[Le informamos que|violet]] su beca ha sido aprobada.', en: 'Information as direct object, person as indirect: “le” for anyone. Especially frequent in Latin American correspondence.' },
              { es: 'Al portero [[le llamaron la atención|violet]] por el retraso; a la directora [[la llamaron|blue]] por teléfono.', en: '“Llamar la atención a alguien”: the person is indirect. Phoning someone: the person is direct.' },
            ] },
          { kind: 'decide', title: '¿Lo / la o le con «informar»? · Lo / la or le with “informar”?', steps: [
            { q: '¿Lo informado va introducido por «de» (de que…, de la decisión)?', yes: 'La persona es el directo: lo, la, los, las. (Le, con usted o con un hombre, es leísmo admitido.)', no: 'Sigue con la pregunta 2.' },
            { q: '¿Lo informado es el directo, sin preposición (que…, la decisión)?', yes: 'La persona es el indirecto: le, les, para hombres y mujeres.', no: 'Revisa la frase: quizá falta el «de» que exige la persona como directo (*la informamos que).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A una estudiante: «___ informamos de que el examen se ha aplazado».', options: ['La', 'Les', 'Las'], answer: 0, why: 'Construcción con «de»: la estudiante es el directo, femenino singular: la. («Le», con usted, sería leísmo de cortesía admitido.)', en: 'To a female student: “We inform you that the exam has been postponed.”' },
            { prompt: '«A la nueva becaria ___ ayudó su tutora con el proyecto». ¿Qué forma es la más general?', options: ['lo', 'les', 'la'], answer: 2, why: 'Ayudar es transitivo en el uso general: la persona es el directo, femenino: la.', en: 'Which form is the most general here?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Fenómeno, construcción o número? Phenomenon, construction or number?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla (leísmo no aceptado, laísmo, número o construcción) antes de ver la corrección.', self: 'Lee cada frase y decide qué falla: ¿leísmo no aceptado, laísmo, número o construcción? Después mira la corrección. (Name the problem before looking.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La informamos que su matrícula está confirmada.', right: 'La informamos de que su matrícula está confirmada. (O: Le informamos que…)', why: 'Con la persona como directo, «informar» pide «de». Sin «de», la construcción correcta es la del indirecto: le informamos que.' },
            { wrong: 'El acta le firmó ayer el secretario.', right: 'El acta la firmó ayer el secretario.', why: 'Leísmo de cosa, no aceptado. Y ojo: «acta» es femenino aunque lleve «el», así que el pronombre es «la».' },
            { wrong: 'Le comunicamos a los aspirantes que las notas ya están publicadas.', right: 'Les comunicamos a los aspirantes que las notas ya están publicadas.', why: 'El indirecto es plural: les. «Le» por «les» se evita en la escritura cuidada.' },
            { wrong: 'El certificado ya se los mandamos a ustedes.', right: 'El certificado ya se lo mandamos a ustedes.', why: 'Lo mandado es singular: se lo. El plural ya está en «a ustedes».' },
            { wrong: 'A las candidatas les convocamos para el lunes.', right: 'A las candidatas las convocamos para el lunes.', why: 'Leísmo femenino y plural: no aceptado. Directo femenino plural: las.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es adecuada en un correo institucional?', options: ['Los informamos a los estudiantes que el campus cierra el viernes.', 'Les informamos a los estudiantes que el campus cierra el viernes.', 'Le informamos a los estudiantes que el campus cierra el viernes.'], answer: 1, why: 'Sin «de», la persona es indirecto y plural: les informamos que. «Le» no concuerda; «los… que» mezcla las dos construcciones.', en: 'Which sentence suits an institutional email?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice qué forma usaría en su propia variedad para «Ayer vi a mi director» y «Informé a mi directora de que…», y qué forma pondría en un correo para lectores de otros países.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Revisando las plantillas', coach: 'Toca cada marca y juzga. Tap each mark and judge it.',
      steps: [
        { title: 'Burgos y Bogotá en la misma llamada · Burgos and Bogotá on one call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Beatriz y tu alumno es Mauricio. Después tu alumno toca cada expresión marcada y dice si es norma general, uso admitido con variación, uso evitado o un caso de régimen variable.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y clasifícala: general, admitida con variación, evitada o de régimen variable. (Tap each mark and classify it.)' } },
          { kind: 'explore', title: 'Las plantillas de la universidad', setting: 'Miércoles, cuatro de la tarde en Burgos, nueve de la mañana en Bogotá. Beatriz y Mauricio revisan por videollamada las plantillas de correo de la universidad. Se tratan de tú. (Two committee members review the university’s email templates.)', lines: [
            { who: 'Beatriz', text: 'Mauricio, empiezo por la de admisión: «Estimado estudiante: [[Le informamos de que|teal]] ha sido admitido». En Burgos lo escribimos así de toda la vida.', en: 'I’ll start with the admissions template: “Dear student, we inform you that you have been admitted.” In Burgos we have always written it this way.' },
            { who: 'Mauricio', text: 'Y en Bogotá escribimos «[[Le informamos que|violet]]», sin «de». ¿Cuál dejamos?', en: 'And in Bogotá we write “Le informamos que”, without “de”. Which one do we keep?' },
            { who: 'Beatriz', text: 'Las dos son correctas, pero no son la misma construcción. En la tuya, lo informado es el directo y el estudiante, el indirecto. En la mía, el estudiante es el directo, y ese «le» es leísmo admitido o de cortesía.', en: 'Both are correct, but they are different constructions. In yours, the information is the direct object and the student the indirect one. In mine, the student is the direct object, and that “le” is accepted leísmo or courtesy “le”.' },
            { who: 'Mauricio', text: 'Entonces, si quiero el directo sin leísmo, «[[Lo informamos de que|blue]]», o «[[la informamos de que|blue]]» si es una estudiante.', en: 'So if I want a direct object without leísmo, it’s “Lo informamos de que”, or “la informamos de que” for a female student.' },
            { who: 'Beatriz', text: 'Exacto. Lo único que no vale es mezclarlas. Otra cosa: el recordatorio de matrícula dice «[[Le recordamos a todos los estudiantes|orange]] que…».', en: 'Exactly. The only thing that doesn’t work is mixing them. Another thing: the enrolment reminder says “Le recordamos a todos los estudiantes que…”.' },
            { who: 'Mauricio', text: 'Ahí falta la ese: «[[les recordamos|blue]]». Hablando se nos escapa a todos, pero en un correo oficial, no.', en: 'There’s an “s” missing: “les recordamos”. We all let it slip when we speak, but not in an official email.' },
            { who: 'Beatriz', text: 'Y en el informe de tutorías, un tutor escribió «[[a las alumnas nuevas les recibimos|orange]] el lunes».', en: 'And in the tutoring report, a tutor wrote “a las alumnas nuevas les recibimos el lunes”.' },
            { who: 'Mauricio', text: 'Eso sí se corrige: «[[las recibimos|blue]]». ¿Y la despedida? ¿Dejamos «[[Le saludamos atentamente|teal]]»?', en: 'That one definitely gets corrected: “las recibimos”. And the sign-off? Do we keep “Le saludamos atentamente”?' },
            { who: 'Beatriz', text: 'Claro, es el le de cortesía, y en tu país también se usa. Me preocupa más la de becas: «Si lo necesita, [[le ayudamos|violet]] con el formulario».', en: 'Of course, it’s the courtesy “le”, and it’s used in your country too. I’m more concerned about the scholarship one: “If you need it, we’ll help you with the form.”' },
            { who: 'Mauricio', text: 'Aquí diríamos «[[la ayudamos|violet]]» o «lo ayudamos». ¿Lo tuyo es leísmo?', en: 'Here we’d say “la ayudamos” or “lo ayudamos”. Is yours leísmo?' },
            { who: 'Beatriz', text: 'Con usted coincide con el de cortesía, y está muy extendido. Pero para la guía, mejor «lo» o «la»: valen en todas partes. Ah, y el chat de soporte contesta «el certificado [[ya se los enviamos|orange]]».', en: 'With usted it overlaps with courtesy “le”, and it’s very widespread. But for the guide, “lo” or “la” is better: they work everywhere. Oh, and the support chat replies “el certificado ya se los enviamos”.' },
            { who: 'Mauricio', text: 'En un chat lo entiendo, porque así hablamos muchos. En el correo formal pondremos «[[ya se lo enviamos|blue]] a ustedes». Lo apunto todo.', en: 'In a chat I get it, because that’s how many of us talk. In the formal email we’ll put “ya se lo enviamos a ustedes”. I’m noting it all down.' },
          ], notes: {
            'Le informamos de que': 'Construcción con **de**: el estudiante es el directo. El «le» es **leísmo admitido** (hombre, singular) o **de cortesía** (usted). Muy habitual en la correspondencia oficial de España.',
            'Le informamos que': 'La otra construcción de **informar**: lo informado («que ha sido admitido») es el directo y la persona, el **indirecto**. Sin «de» y con «le» para hombres y mujeres. Especialmente frecuente en América.',
            'Lo informamos de que': '**Norma general**: persona como directo masculino, con «de». Válido en todas partes.',
            'la informamos de que': 'Igual, con una destinataria: **la**. Sin «de» sería un error de construcción (*la informamos que).',
            'Le recordamos a todos los estudiantes': '**Le por les**: el indirecto duplicado es plural. Muy frecuente al hablar, incluso entre hablantes cultos; en la escritura cuidada se evita.',
            'les recordamos': 'La forma recomendada: el pronombre concuerda con «a todos los estudiantes».',
            'a las alumnas nuevas les recibimos': '**Leísmo femenino y plural**: la norma no lo acepta. Recibir a alguien: la persona es el directo.',
            'las recibimos': 'Directo femenino plural: **las**. Norma general.',
            'Le saludamos atentamente': '**Le de cortesía** con usted: admitido y muy extendido en la correspondencia formal de España y de América, para hombres y mujeres.',
            'le ayudamos': '**Ayudar** es transitivo en el uso general, pero «le ayudamos» está muy extendido; con usted coincide además con el le de cortesía.',
            'la ayudamos': 'La construcción más general: **lo / la ayudamos**, válida en todas las variedades.',
            'ya se los enviamos': '**Se los** con un solo certificado: la -s marca que los destinatarios son varios. Muy frecuente en la conversación de buena parte de América; se evita en la escritura cuidada.',
            'ya se lo enviamos': '**Se lo**: «lo» concuerda con «el certificado»; el plural de los destinatarios va en «a ustedes».',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Qué deciden con «Le informamos de que» y «Le informamos que»?', options: ['Que solo es correcta la versión con «de».', 'Que las dos son correctas, pero corresponden a construcciones distintas.', 'Que las dos son leísmo.'], answer: 1, why: 'Beatriz explica que en una la persona es el directo (con «de») y en la otra el indirecto (sin «de»).', en: 'What do they conclude about the two versions?' },
            { prompt: '¿Por qué corrige Mauricio «Le recordamos a todos los estudiantes»?', options: ['Porque el pronombre debe concordar con el plural.', 'Porque es leísmo de cosa.', 'Porque en Colombia no se usa «recordar».'], answer: 0, why: '«Ahí falta la ese: les recordamos».', en: 'Why does Mauricio correct this sentence?' },
            { prompt: '¿Qué hacen con «ya se los enviamos»?', options: ['Lo dejan igual en el correo formal.', 'Lo aceptan en el chat, pero en el correo formal escriben «se lo».', 'Lo prohíben también en el chat.'], answer: 1, why: '«En un chat lo entiendo… En el correo formal pondremos “ya se lo enviamos a ustedes”».', en: 'What do they do with “ya se los enviamos”?' },
          ] },
        ] },
        { title: 'La guía: ¿se queda o se cambia? · The guide: keep or change?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno decide, para cada frase de las plantillas, si entra tal cual en la guía panhispánica o si se cambia, y explica por qué.', self: 'Decide si cada frase entra tal cual en la guía panhispánica o si se cambia. (Does each sentence go into the guide as it is?)' } },
          { kind: 'classify', title: 'Frases de las plantillas · Template sentences', categories: [
            { id: 'queda', label: 'ENTRA TAL CUAL', tone: 'blue' },
            { id: 'cambia', label: 'SE CAMBIA', tone: 'orange' },
          ], items: [
            { text: 'Les comunicamos que el plazo de matrícula termina el día 15.', answer: 'queda', why: 'Indirecto plural (a ustedes): les. Norma general.' },
            { text: 'A los becarios les citamos el martes a las diez.', answer: 'cambia', why: 'Leísmo plural, desaconsejado: los citamos.' },
            { text: 'Atentamente le saluda la Secretaría Académica.', answer: 'queda', why: 'Le de cortesía en la despedida: admitido y muy extendido, también en América.' },
            { text: 'Las calificaciones se las enviamos a ustedes por correo.', answer: 'queda', why: 'Lo enviado es plural (las calificaciones): se las. Correcto.' },
            { text: 'Lo informamos que su solicitud está incompleta.', answer: 'cambia', why: 'Mezcla de construcciones: «lo informamos de que» o «le informamos que».' },
            { text: 'Si tiene problemas con la plataforma, la llamamos por teléfono.', answer: 'queda', why: 'Llamar por teléfono: la persona es el directo, femenino: la.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica a Mauricio por qué «Le informamos de que» puede quedarse en la edición española de una carta y por qué la guía prefiere otra forma.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Juzgar, corregir, decidir', coach: 'Función, número, norma. Function, number, norm.',
      steps: [
        { title: '¿Qué dice la norma? · What does the norm say?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno da el veredicto de la norma culta y lo justifica antes de elegir.', self: 'Lee cada frase, da tu veredicto y justifícalo antes de elegir. (Give your verdict before choosing.)' } },
          { kind: 'choice', items: [
            { prompt: '«Al nuevo rector le recibieron con aplausos». Según la norma culta:', options: ['Admitida solo en la lengua oral.', 'Admitida: leísmo de persona masculino singular.', 'No aceptada: hay que decir «lo».'], answer: 1, why: 'Persona, masculino, singular: leísmo admitido en cualquier registro, aunque «lo recibieron» es más general.', en: 'What does the educated norm say about this sentence?' },
            { prompt: '«Los formularios no les encuentro en la plataforma». Según la norma culta:', options: ['No aceptada: leísmo de cosa; los encuentro.', 'Admitida en el centro de España.', 'Admitida: leísmo plural.'], answer: 0, why: 'Con cosas, el leísmo no se acepta en ninguna variedad culta: no los encuentro.', en: 'What does the norm say here?' },
            { prompt: '«A la decana ___ entregaron el informe el viernes».', options: ['le', 'la', 'lo'], answer: 0, why: 'Lo entregado es el informe; la decana lo recibe: indirecto, le. «La» sería laísmo.', en: 'They handed the dean (a woman) the report on Friday.' },
            { prompt: '«A los nuevos profesores ___ presentamos en la junta de facultad».', options: ['le', 'los', 'les'], answer: 1, why: 'Presentar a alguien (en la junta): directo plural, los. «Les» sería leísmo plural, desaconsejado.', en: 'We introduced the new lecturers at the faculty board.' },
            { prompt: 'En la carta a un profesor: «Señor Ortega: ___ informamos de que su plaza está reservada».', options: ['Solo la.', 'Solo les.', 'Lo o le: las dos se admiten.'], answer: 2, why: 'Construcción con «de»: él es el directo. «Lo» es la norma general; «le» es leísmo admitido o de cortesía.', en: 'In a letter to a male lecturer: which forms are acceptable?' },
          ] },
        ] },
        { title: 'Clasifica · Sort them', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases oídas en el campus · Heard on campus', categories: [
            { id: 'general', label: 'NORMA GENERAL', tone: 'blue' },
            { id: 'admitido', label: 'ADMITIDO CON VARIACIÓN', tone: 'teal' },
            { id: 'evitado', label: 'EVITADO EN LA NORMA CULTA', tone: 'orange' },
          ], items: [
            { text: 'Le saludo atentamente, señora Ríos.', answer: 'admitido', why: 'Le de cortesía con usted: admitido y muy extendido.' },
            { text: 'A mi director de tesis le conocí en un congreso.', answer: 'admitido', why: 'Leísmo de persona masculino singular: admitido.' },
            { text: 'La pidió a la secretaria una copia del expediente.', answer: 'evitado', why: 'Laísmo: lo pedido es la copia; la secretaria es indirecto: le pidió.' },
            { text: 'Les envié a los tutores el calendario de exámenes.', answer: 'general', why: 'Indirecto plural: les. Norma general.' },
            { text: 'El calendario ya se los mandé a ustedes.', answer: 'evitado', why: 'Se los con un solo calendario: frecuente al hablar en América, evitado en la escritura cuidada: se lo mandé.' },
            { text: 'A la coordinadora la llamaron por teléfono a las ocho.', answer: 'general', why: 'Llamar por teléfono: directo femenino, la.' },
            { text: 'Lo informaron de que su plaza estaba confirmada.', answer: 'general', why: 'Informar a alguien de algo: directo masculino, lo, con «de».' },
          ] },
        ] },
        { title: 'Corrige el texto formal · Correct the formal text', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de correos que la universidad va a enviar. Tu alumno decide si cada una puede salir así y, si no, elige la corrección.', self: 'Son frases de correos que la universidad va a enviar. ¿Pueden salir así? Si no, elige la corrección. (Can each sentence go out as it is?)' } },
          { kind: 'fix', title: '¿Puede salir así? · Can it go out?', items: [
            { sentence: 'Le recordamos a los participantes que el plazo vence el viernes.', ok: false, options: ['Les recordamos a los participantes que el plazo vence el viernes.', 'Los recordamos a los participantes que el plazo vence el viernes.', 'Se los recordamos a los participantes que el plazo vence el viernes.'], answer: 0, why: 'Indirecto plural: les. «Los» sería loísmo, y «se los» no tiene sentido aquí.' },
            { sentence: 'A la tutora le llamaron la atención por el retraso en las notas.', ok: true, why: 'Correcta: en «llamar la atención a alguien», el directo es «la atención»; la persona es indirecto: le.' },
            { sentence: 'La informamos que su solicitud ha sido aceptada.', ok: false, options: ['La informamos sobre que su solicitud ha sido aceptada.', 'La informamos de que su solicitud ha sido aceptada.', 'Los informamos que su solicitud ha sido aceptada.'], answer: 1, why: 'Con la persona como directo, «informar» pide «de»: la informamos de que. También sería correcto «Le informamos que…».' },
            { sentence: 'El acta le firmé ayer, después de la reunión.', ok: false, options: ['El acta lo firmé ayer, después de la reunión.', 'El acta les firmé ayer, después de la reunión.', 'El acta la firmé ayer, después de la reunión.'], answer: 2, why: 'Leísmo de cosa, no aceptado. «Acta» es femenino (el acta, las actas): la firmé.' },
            { sentence: 'A los becarios los ayudamos con el formulario de la beca.', ok: true, why: 'Correcta: ayudar con directo plural, los. Es la forma más general.' },
            { sentence: 'Lo dieron a Mario el certificado equivocado.', ok: false, options: ['Les dieron a Mario el certificado equivocado.', 'Le dieron a Mario el certificado equivocado.', 'Se lo dieron a Mario el certificado equivocado.'], answer: 1, why: 'Loísmo: lo dado es el certificado; Mario es indirecto: le.' },
          ] },
        ] },
        { title: 'El chat de soporte · The support chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Raúl escribe al soporte · Raúl writes to support', lines: [
            { who: 'Raúl', text: 'Buenos días. Me matriculé ayer y no me ha llegado la confirmación.' },
            { who: 'Soporte', text: 'Buenos días, Raúl. ___ informamos de que su matrícula está en revisión.', options: ['Lo', 'La', 'Los'], answer: 0, why: 'Construcción con «de»: Raúl es el directo, masculino singular: lo. (Le, de cortesía, también se admitiría.)' },
            { who: 'Raúl', text: '¿Y mis compañeros de grupo? Tampoco han recibido nada.' },
            { who: 'Soporte', text: 'A sus compañeros ya ___ escribimos esta mañana.', options: ['les', 'le', 'los'], answer: 0, why: 'Escribir algo a alguien: indirecto plural, les. «Le» no concuerda; «los» sería loísmo.' },
            { who: 'Raúl', text: '¿Nos pueden mandar el enlace del aula virtual a mi compañera y a mí?' },
            { who: 'Soporte', text: 'Claro, ahora mismo ___ enviamos a los dos.', options: ['se les', 'se lo', 'se los'], answer: 1, why: 'Un solo enlace: se lo. «Se los» es frecuente al hablar en América, pero se evita por escrito.' },
            { who: 'Raúl', text: '¿Y si aun así no puedo entrar?' },
            { who: 'Soporte', text: 'Entonces ___ ayudamos por videollamada. Atentamente, el equipo de soporte.', options: ['les', 'lo', 'la'], answer: 1, why: 'Ayudar es transitivo en el uso general: Raúl, directo masculino, lo.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Les', 'recordamos', 'a', 'los', 'estudiantes', 'que', 'el', 'plazo', 'vence', 'hoy.'], accept: ['Les recordamos a los estudiantes que el plazo vence hoy.', 'A los estudiantes les recordamos que el plazo vence hoy.'], en: 'We remind students that the deadline is today (plural recipient: les).' },
            { tiles: ['La', 'informamos', 'de', 'que', 'su', 'beca', 'ha', 'sido', 'aprobada.'], accept: ['La informamos de que su beca ha sido aprobada.'], en: 'We inform you that your scholarship has been approved (person as direct object, with “de”).' },
            { tiles: ['Ya', 'se', 'lo', 'enviamos', 'a', 'ustedes.'], accept: ['Ya se lo enviamos a ustedes.'], en: 'We have already sent it to you all (one thing sent, several recipients: se lo).' },
          ] },
        ] },
        { title: 'Pásalo a la norma escrita · Bring it into the written norm', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Para el correo oficial · For the official email', items: [
            { prompt: 'Le dije a los profesores que la sesión empieza a las nueve.', instruction: 'Corrige la concordancia de número.', accept: ['Les dije a los profesores que la sesión empieza a las nueve', 'A los profesores les dije que la sesión empieza a las nueve'] },
            { prompt: 'El diploma ya se los enviamos a ustedes por correo.', instruction: 'Pásalo a la escritura cuidada.', accept: ['El diploma ya se lo enviamos a ustedes por correo', 'El diploma ya se lo enviamos por correo a ustedes', 'Ya se lo enviamos a ustedes por correo'] },
            { prompt: 'A las candidatas les convocamos para la entrevista del lunes.', instruction: 'Corrige el leísmo.', accept: ['A las candidatas las convocamos para la entrevista del lunes', 'Las convocamos para la entrevista del lunes'] },
            { prompt: 'Informamos a la estudiante de que su plaza está confirmada.', instruction: 'Sustituye «a la estudiante» por un pronombre y mantén la construcción con «de que».', accept: ['La informamos de que su plaza está confirmada'] },
            { prompt: 'Informamos al estudiante de que su solicitud fue rechazada.', instruction: 'Cambia de construcción: lo informado como directo, sin «de», y la persona como indirecto, con pronombre.', accept: ['Le informamos que su solicitud fue rechazada'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno redacta en voz alta dos versiones de la misma frase con «informar», una con cada construcción, y explica qué pronombre pide cada una.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Dudas de norma', coach: 'Escucha cada consulta y su respuesta. Each question, each answer.',
      steps: [
        { title: 'El pódcast de la universidad · The university podcast', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada pronombre citado y qué recomienda Mauricio. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles: anota cada pronombre citado y qué recomienda Mauricio. (Note each pronoun and his recommendation.)' } },
          { kind: 'listen', title: 'Dudas de norma', channel: 'PÓDCAST · UNIVERSIDAD ABIERTA DEL ATLÁNTICO', src: '/audio/grammar-live/517.mp3',
            before: 'Mauricio responde en el pódcast de la universidad a las consultas de estudiantes y tutores sobre pronombres. ¿Qué dudas crees que le llegan? (What questions do you think he gets?)',
            gist: { prompt: '¿Qué hace Mauricio en este episodio? · What does Mauricio do in this episode?', options: ['Explica que el leísmo es un error que hay que evitar siempre.', 'Responde a dos consultas y da dos recomendaciones para los correos formales.', 'Presenta la nueva plataforma de la universidad.'], answer: 1, why: 'Contesta a Gloria y a un tutor de Salamanca, y añade dos avisos: «les» con plural y «se lo» en los correos.', en: 'He answers two listeners and gives two recommendations for formal emails.' },
            details: [
              { prompt: '¿Qué le responde a Gloria sobre sus dos correos?', options: ['Que los dos tienen un error.', 'Que solo está bien el primero.', 'Que los dos están bien, porque son construcciones distintas.'], answer: 2, why: '«¿Cuál está bien? Los dos, Gloria».', en: 'What does he tell Gloria about her two emails?' },
              { prompt: '¿Qué forma dice que no vale?', options: ['«Le informamos que».', '«La informamos de que».', '«La informamos que», sin la preposición.'], answer: 2, why: '«Lo que no vale es mezclar: “la informamos que”, sin la preposición».', en: 'Which form does he say is not acceptable?' },
              { prompt: '¿Qué le contesta al tutor de Salamanca?', options: ['Que «le evalué» es un error.', 'Que «le evalué» está admitido, pero la guía prefiere «lo evalué».', 'Que en Salamanca hay que decir «lo».'], answer: 1, why: 'Es leísmo admitido, pero la guía, que se lee en veinte países, prefiere «lo».', en: 'What does he tell the tutor from Salamanca?' },
              { prompt: '¿Qué recomienda cuando se envía un solo enlace a varias personas?', options: ['«Se lo enviamos».', '«Se los enviamos».', '«Se les enviamos».'], answer: 0, why: '«Escriban “ya se lo enviamos”, aunque en la conversación muchos digamos “se los enviamos”».', en: 'What does he recommend for one link sent to several people?' },
            ],
            transcript: 'Bienvenidos a «Dudas de norma», el pódcast de la Universidad Abierta del Atlántico. Soy Mauricio Quintero. Esta semana nos escribe Gloria, estudiante en Valparaíso. Le llegaron dos correos nuestros: uno decía «[[Le informamos que|violet]] su matrícula está confirmada» y el otro, «[[La informamos de que|violet]] su beca fue aprobada». ¿Cuál está bien? Los dos, Gloria. Con «de que», la persona es el complemento directo: lo o la. Sin «de», lo informado es el directo y la persona, el indirecto: le. Lo que no vale es mezclar: «la informamos que», sin la preposición. Segunda consulta, de un tutor de Salamanca: ¿puede escribir «[[a este alumno le evalué|teal]] en junio»? Puede: es el leísmo de persona masculino singular, que la norma culta admite y que es muy común en el centro y el norte de España. Pero en nuestra guía, que se lee en veinte países, preferimos «[[lo evalué|blue]]». Y dos avisos para todos. Primero: «[[les recordamos a los estudiantes|blue]]», con ese, porque son varios. Segundo: si mandan un solo enlace a varias personas, escriban «[[ya se lo enviamos|blue]]», aunque en la conversación muchos digamos «[[se los enviamos|orange]]». Hasta la próxima semana, y gracias por escucharnos.',
            reply: { teacher: 'Tú eres Gloria y llamas al pódcast con otra duda (por ejemplo, «¿Le ayudo o la ayudo?»). Tu alumno es Mauricio y te responde con la norma y con la recomendación de la guía.', self: 'Graba una consulta propia para el pódcast y respóndela como Mauricio: la norma, la variación y la recomendación. (Record your own question and answer it.)' } },
          { kind: 'tip', icon: '🌎', title: 'Variedad culta no es variedad única · Educated usage is not one usage', text: 'Mauricio no corrige al tutor de Salamanca: le explica que su leísmo está **admitido** y que la guía elige otra forma por ser **más general**. Esa es la actitud de la norma panhispánica: describir con precisión qué usos son cultos en cada zona y cuáles se evitan en todas, sin presentar una variedad como la única correcta.', en: 'Mauricio does not correct the tutor; he explains that his leísmo is accepted and that the guide prefers another form because it is more widely shared. That is the pan-Hispanic approach: describe precisely which uses are educated in each area and which are avoided everywhere, without treating one variety as the only correct one.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Norma, variedad y registro', coach: 'Argumenta con precisión. Argue precisely.',
      steps: [
        { title: 'Hablar de la norma · Talking about the norm', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con argumentos y ejemplos. Si usa un pronombre que la norma culta evita, tú repites la frase con la forma recomendada y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta durante uno o dos minutos. Revisa cada «le, la, lo» que digas. (Check every pronoun you say.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo dices tú «Ayer vi a mi director»: lo vi o le vi? ¿Y qué escribirías en un informe para lectores de varios países? · Your usage vs an international report.', followUps: ['¿Te suena rara la otra forma?', '¿Cambiarías de forma según el lector?'], phrases: ['En mi variedad digo [[lo vi|blue]]…', '[[Le vi|teal]] está admitido, pero…', 'Para lectores de varios países, prefiero…'], hint: 'Separa tu uso personal de la decisión de estilo; las dos formas son correctas.', example: 'En mi variedad digo «lo vi», aunque tengo compañeros de Valladolid que dicen «le vi», y es igual de correcto. En un informe internacional escribiría «lo», no porque «le» sea un error, sino porque se entiende igual en todas partes y no marca la procedencia del texto.' },
            { q: 'Eres Beatriz: explícale a un tutor nuevo por qué «Le informamos que…» y «La informamos de que…» son correctas, y cuál no lo es. · Explain the two constructions.', followUps: ['¿Qué pregunta le enseñarías a hacerse?', '¿Cuál le recomiendas para las plantillas generales?'], phrases: ['Con «de», la persona es [[el directo|blue]]…', 'Sin «de», [[le|violet]] para hombres y mujeres…', 'Lo que no vale es…'], hint: 'Explica la construcción, no la zona: la preposición decide el pronombre.', example: 'Mira, «informar» admite dos construcciones. Si pones «de que», la persona es el directo: lo informamos, la informamos. Si no pones «de», lo informado es el directo y la persona va con «le», sea hombre o mujer. Lo que no vale es mezclarlas: «la informamos que». Para las plantillas generales te recomiendo «le informamos que», porque no necesitas saber quién lo recibe.' },
            { q: 'Un colega dice en una reunión formal «la pedimos el expediente a la secretaria». ¿Se lo comentas? ¿Cómo y cuándo? · A colleague’s laísmo.', followUps: ['¿Y si lo escribe en un acta?', '¿Cómo lo dices sin que suene a lección?'], phrases: ['En el acta pondría [[le pedimos|blue]]…', 'Es [[laísmo|orange]], y la norma culta…', 'Al hablar, no lo corregiría…'], hint: 'Distingue la conversación del texto oficial y nombra el fenómeno con precisión.', example: 'En la reunión no lo corregiría: se entiende perfectamente y no es el momento. Pero si lo escribe en el acta, se lo comentaría en privado: «Oye, en el acta pondría “le pedimos”, porque es laísmo y la norma culta no lo acepta». Lo diría como una sugerencia de redacción, no como una lección.' },
            { q: '¿Debe una guía panhispánica preferir «lo» aunque el leísmo de persona esté admitido? Toma partido. · Should a pan-Hispanic guide prefer lo?', followUps: ['¿No es borrar una variedad?', '¿Qué haría la guía con el le de cortesía?', '¿Y con «le ayudamos»?'], phrases: ['Es cierto que [[le|teal]] está admitido, pero…', 'Una guía no corrige, elige…', 'El le de cortesía es distinto porque…'], hint: 'Concede algo al otro lado y distingue entre corregir y elegir.', example: 'Es cierto que el leísmo de persona está admitido y que preferir «lo» puede parecer favorecer una variedad. Pero una guía no corrige: elige una forma común para textos que leen hablantes de muchos países. El le de cortesía es distinto: está muy extendido también en América, así que lo mantendría en las despedidas.', next: 'Ahora, por escrito y con número.' },
            { q: 'Atiendes el chat de soporte: un grupo de estudiantes te pide el horario y las guías del curso. Contéstales en voz alta, como si escribieras. · Reply to a group of students.', followUps: ['¿Qué cambia si es una sola guía?', '¿Y si escribes a una sola estudiante?'], phrases: ['[[Les|blue]] enviamos…', 'El horario [[ya se lo|blue]] mandamos a ustedes…', 'Las guías [[se las|blue]]…'], hint: 'Mira qué es plural: lo enviado o los destinatarios.', example: 'Buenos días a todos. Les enviamos ahora el horario del curso. Las guías ya se las mandamos ayer a ustedes por correo; si no las encuentran, se las reenviamos. Y el enlace de la sesión se lo enviamos el lunes por la mañana.', teacher: 'Tú eres una estudiante del grupo y preguntas por documentos sueltos o por varios a la vez. Tu alumno responde ajustando «se lo / se la / se los / se las».' },
            { q: 'Compara cómo hablas con tus amigos y cómo escribes un correo formal: ¿«dile a tus padres» o «diles»? ¿«se los dije»? · Speech vs writing.', followUps: ['¿Notas la diferencia cuando hablas?', '¿Por qué la norma escrita es más estricta aquí?'], phrases: ['Hablando, se me escapa…', 'Por escrito, siempre [[diles|blue]]…', 'En mi zona se oye mucho [[se los|orange]]…'], hint: 'Describe tu uso con honestidad y explica qué cambiarías al escribir.', example: 'Hablando, se me escapa a menudo «dile a tus padres», y casi nadie lo nota. Por escrito, en cambio, escribo siempre «diles», porque el plural está ahí. En mi zona se oye mucho «se los dije», incluso a gente muy culta; en un correo formal escribiría «se lo dije a ellos».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú lees un correo con dos o tres usos evitados en la norma culta y tu alumno los detecta, dice qué fenómeno es cada uno y propone la versión para la guía.', self: 'Escribe tú una pregunta nueva sobre un caso dudoso y respóndela en voz alta con la norma y una recomendación. (Ask and answer a new question.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una ficha para la guía', coach: 'Norma, variación y recomendación. Norm, variation, recommendation.',
      steps: [
        { title: 'La guía de estilo · The style guide', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada pronombre que no esté entre comillas: ¿función, número y construcción correctos?', self: 'Escribe la ficha y toca «Revisar mi texto». Después repasa cada pronombre que no esté entre comillas. (Check every pronoun outside the quotes.)' } },
          { kind: 'write', title: 'Pronombres en la correspondencia institucional · A guide entry', situation: 'Eres Beatriz o Mauricio (o redactas la guía de una institución que conozcas). Escribes la ficha «Pronombres en la correspondencia institucional» para el personal que escribe a estudiantes de España y de América. (Write a style-guide entry for staff writing to students across the Spanish-speaking world.)', task: [
            'Explica las dos construcciones de «informar» y cuál recomiendas para las plantillas, con ejemplos entre comillas.',
            'Explica qué dice la norma del leísmo de persona y qué forma prefiere la guía, y por qué.',
            'Indica qué pasa con el le de cortesía en las despedidas.',
            'Da una regla de número: «les» con varios destinatarios y «se lo» cuando lo enviado es singular.',
          ], starters: ['Esta ficha se aplica a…', '«Informar» admite dos construcciones:…', 'El leísmo de persona masculino singular…', 'En la guía preferimos…', 'El le de cortesía…', 'Con varios destinatarios,…'],
            words: ['norma culta', 'leísmo de persona', 'le de cortesía', 'complemento directo', 'complemento indirecto', 'admitido', 'se evita', 'panhispánico', 'destinatario', 'concordancia'],
            model: 'Pronombres en la correspondencia institucional. Esta ficha se aplica a todos los correos que la universidad envía a estudiantes de España y de América. 1. «Informar» admite dos construcciones correctas: «Lo informamos de que…» o «La informamos de que…», con la persona como complemento directo y la preposición «de», y «Le informamos que…», con la persona como indirecto y sin «de». En las plantillas generales usamos la segunda, porque no obliga a saber quién recibe el correo. La construcción con «lo» o «la» nunca se escribe sin «de». 2. El leísmo de persona masculino singular («al doctorando le evaluó el tribunal») está admitido en la norma culta y es habitual en el centro y el norte de España, pero en esta guía preferimos «lo» y «la», que son generales en todos los países. 3. El le de cortesía de las despedidas («Le saludamos atentamente») se mantiene: está admitido y muy extendido también en América. 4. Número: con varios destinatarios, «les»: «Les recordamos a los estudiantes que…». Y cuando lo enviado es una sola cosa, escribimos «se lo enviamos a ustedes», aunque al hablar muchos digamos «se los enviamos».',
            minWords: 150,
            checks: [
              { label: 'Nombras el leísmo', pattern: '(?<!\\p{L})leísmo(?!\\p{L})', tip: 'Llama al fenómeno por su nombre: «el leísmo de persona masculino singular está admitido».' },
              { label: 'Un ejemplo con «informar» y pronombre', pattern: '(?<!\\p{L})(?:lo|la|le|les|los|las)\\s+informamos(?!\\p{L})', tip: 'Cita las construcciones: «La informamos de que…», «Le informamos que…».' },
              { label: '«Les» con un destinatario plural', pattern: '(?<!\\p{L})les\\s+(?:recordamos|informamos|enviamos|escribimos|comunicamos|mandamos)(?!\\p{L})', tip: 'Da un ejemplo con plural: «Les recordamos a los estudiantes que…».' },
              { label: '«Se lo» en la escritura formal', pattern: '(?<!\\p{L})se\\s+lo\\s+\\p{L}+', tip: 'Recomienda «se lo enviamos a ustedes» cuando lo enviado es una sola cosa.' },
            ],
            warnings: [
              { pattern: '(?<![«\\p{L}])(?:lo|la|los|las)\\s+informamos\\s+que(?!\\p{L})', why: 'Fuera de una cita, «la informamos que» mezcla las dos construcciones: escribe «**la informamos de que**» o «**le informamos que**».' },
              { pattern: '(?<![«\\p{L}])le\\s+(?:recordamos|informamos|enviamos|escribimos|comunicamos)\\s+a\\s+(?:los|las|todos|todas)(?!\\p{L})', why: 'Con un destinatario plural, en tu propia prosa escribe «**les**».' },
              { pattern: '(?<![«\\p{L}])se\\s+los\\s+(?:enviamos|mandamos)\\s+a\\s+ustedes(?!\\p{L})', why: 'Si lo enviado es una sola cosa, en un texto formal escribe «**se lo** enviamos a ustedes».' },
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
            { tone: 'blue', label: 'NORMA GENERAL', formula: 'lo / la directo · le / les indirecto · se lo + destinatario plural', example: 'Al tutor lo vimos. Les recordamos a los estudiantes… Ya se lo enviamos a ustedes.', caption: 'válido en todas las variedades; la opción más segura en un texto panhispánico', en: 'correct in every variety, which makes it the safest choice for readers from many countries' },
            { tone: 'teal', label: 'ADMITIDO CON VARIACIÓN', formula: 'le de persona masculino singular · le de cortesía con usted', example: 'Al tutor le vimos. Le saludamos atentamente.', caption: 'leísmo: centro y norte de España; cortesía: también en América', en: 'accepted by the norm; person leísmo is regionally marked, courtesy “le” is widespread on both sides of the Atlantic' },
            { tone: 'orange', label: 'EVITADO EN LA NORMA CULTA', formula: 'les vi (desaconsejado) · le de cosa o femenino · laísmo · loísmo · le por les · se los', example: '*El libro le tengo · *La dije · *Le recordamos a los estudiantes', caption: 'algunos, muy frecuentes al hablar; todos se evitan al escribir con cuidado', en: 'some are extremely common in educated speech, but careful writing avoids all of them' },
            { tone: 'violet', label: 'RÉGIMEN VARIABLE', formula: 'informar (lo / la… de que · le… que) · ayudar · llamar la atención', example: 'La informamos de que… / Le informamos que… · Le llamaron la atención.', caption: 'la construcción decide el pronombre, no la zona', en: 'the construction, not the region, decides the pronoun' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres preguntas · Three questions', text: 'Ante cada pronombre, pregúntate: **¿qué función tiene en esta construcción?** (directo o indirecto), **¿qué es plural?** (lo enviado o quien lo recibe) y **¿quién va a leerlo?** (tu variedad, otra variedad o todas). La norma te dice qué es correcto; el lector te dice qué conviene.', en: 'For every pronoun ask: what is its function in this construction, what exactly is plural, and who will read it? The norm tells you what is correct; the reader tells you what is advisable.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'Texto formal: «A los ponentes ___ esperamos en la sala B a las diez».', options: ['le', 'les', 'los'], answer: 2, why: 'Directo plural de persona: los. «Les» es leísmo plural, desaconsejado; «le» no concuerda.', en: 'Formal text: “We will expect the speakers in room B at ten.”' },
            { prompt: '«___ a tus alumnos que traigan el carné el día del examen».', options: ['Diles', 'Dile', 'Díselo'], answer: 0, why: 'Indirecto plural: diles. «Dile» es muy frecuente al hablar, pero se evita en la escritura cuidada.', en: '“Tell your students to bring their ID card on the exam day.”' },
            { prompt: '«La guía, ¿ya se la mandaste a los coordinadores?». En un texto cuidado, esta frase…', options: ['debe decir «se las», porque los coordinadores son varios.', 'es correcta: «la» concuerda con «la guía».', 'debe decir «se les».'], answer: 1, why: 'Lo mandado es «la guía»: se la. La -s por el plural de los destinatarios se evita en la escritura cuidada.', en: 'In careful writing, this sentence…' },
            { prompt: '«A la directora ___ llamaron la atención en la junta».', options: ['le', 'la', 'lo'], answer: 0, why: 'En «llamar la atención a alguien», el directo es «la atención»; la persona es indirecto: le.', en: '“The director (a woman) was reprimanded at the board meeting.”' },
            { prompt: '«Al doctorando le evaluó un tribunal internacional». Según la norma culta:', options: ['Es incorrecta en un texto escrito.', 'Es laísmo.', 'Es correcta: leísmo de persona masculino singular, admitido.'], answer: 2, why: 'Persona, masculino, singular: admitido. Un texto panhispánico puede preferir «lo evaluó», pero «le» no es un error.', en: 'According to the educated norm:' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro sector, la misma norma. New sector, same norm.', blocks: [
          { kind: 'lead', text: 'Una clínica dental de Guadalajara revisa los mensajes automáticos que envía a sus pacientes. Pásalos a la norma escrita cuidada.', en: 'A dental clinic in Guadalajara is reviewing the automatic messages it sends to patients. Bring them into line with careful written usage.' },
          { kind: 'rewrite', title: 'Mensajes a pacientes · Messages to patients', items: [
            { prompt: 'Le recordamos a nuestros pacientes que deben llegar diez minutos antes.', instruction: 'Corrige la concordancia de número.', accept: ['Les recordamos a nuestros pacientes que deben llegar diez minutos antes', 'A nuestros pacientes les recordamos que deben llegar diez minutos antes'] },
            { prompt: 'La informamos que su cita ha cambiado de hora.', instruction: 'Corrige la construcción de «informar» (vale cualquiera de las dos correctas).', accept: ['La informamos de que su cita ha cambiado de hora', 'Le informamos que su cita ha cambiado de hora'] },
            { prompt: 'El presupuesto ya se los enviamos a ustedes por correo.', instruction: 'Pásalo a la escritura cuidada.', accept: ['El presupuesto ya se lo enviamos a ustedes por correo', 'El presupuesto ya se lo enviamos por correo a ustedes', 'Ya se lo enviamos a ustedes por correo'] },
          ] },
        ] },
        { title: 'Ampliación · La prueba de la pasiva', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Cuando dudas de la construcción, la **pasiva** ayuda: solo el complemento directo puede ser sujeto de una pasiva con «ser». «**La estudiante fue informada de que** su plaza estaba confirmada» funciona, así que en esa construcción la persona es el directo: **la** informamos de que. «**La becaria fue ayudada** por su tutora» funciona: **la** ayudó. En cambio, con «llamar la atención» no se puede decir *«La directora fue llamada la atención»: la persona no es el directo, sino el indirecto: **le** llamaron la atención.', en: 'For strong students or spare time. When in doubt about the construction, try the passive: only a direct object can become the subject of a passive with “ser”. “La estudiante fue informada de que…” works, so in that construction the person is the direct object (la informamos de que). With “llamar la atención” the passive with the person as subject is impossible, so the person is the indirect object: le llamaron la atención.' },
          { kind: 'choice', title: 'Aplica la prueba · Apply the test', items: [
            { prompt: '«Los aspirantes fueron informados de que el examen se aplaza». Con pronombre y la misma construcción:', options: ['Les informamos de que el examen se aplaza.', 'Los informamos que el examen se aplaza.', 'Los informamos de que el examen se aplaza.'], answer: 2, why: 'La pasiva funciona: la persona es el directo, masculino plural: los, con «de». La segunda sería leísmo plural; la tercera pierde el «de».', en: 'With a pronoun, keeping the same construction:' },
            { prompt: '¿Qué demuestra que en «A la becaria la ayudó su tutora» el pronombre «la» es correcto?', options: ['Que existe la pasiva «La becaria fue ayudada por su tutora».', 'Que «ayudar» siempre lleva indirecto.', 'Que «becaria» termina en -a.'], answer: 0, why: 'Si la persona puede ser sujeto de la pasiva, es el directo: la.', en: 'What shows that “la” is correct here?' },
            { prompt: '¿Por qué en «Al conserje le llamaron la atención» el «le» no es leísmo?', options: ['Porque el conserje es un hombre.', 'Porque con «llamar» siempre se usa «le».', 'Porque «la atención» es el directo y el conserje, el indirecto.'], answer: 2, why: 'No existe *«El conserje fue llamado la atención»: el directo es «la atención» y la persona es indirecto. Por teléfono, en cambio, «lo llamaron».', en: 'Why is this “le” not leísmo?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno aplica la prueba de la pasiva a «avisar», «convocar» y «felicitar» con frases propias y explica qué pronombre pide cada una.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 218 · Perífrasis discursivas de ironía y distanciamiento', text: 'Hoy has decidido entre formas correctas según la norma, la variedad y el lector. En la clase 218 sigues afinando la posición de quien habla, ahora con perífrasis verbales que no informan solo de un hecho, sino de la actitud ante él: la ironía y la distancia con que alguien cuenta lo que otros hacen o dicen.', en: 'Today you chose between correct forms according to the norm, the variety and the reader. Class 218 continues with the speaker’s stance, now through verbal periphrases that convey not just an event but an attitude to it: the irony and distance with which someone reports what others do or say.', href: '/gramatica/perifrasis-discursivas-de-ironia-y-distanciamiento', label: 'Ir a la clase 218' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué “Le informamos que…” y “La informamos de que…” son correctas, y “Le recordamos a los estudiantes” no lo es en un correo formal?». Respuesta esperada: «informar» tiene dos construcciones; «le» por «les» rompe la concordancia de número. Tarea: la ficha de Escribir para una institución real.' },
        ] },
      ],
    },
  ],
};
