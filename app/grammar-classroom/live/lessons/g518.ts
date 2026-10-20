import type { LiveLesson } from '../types';

/**
 * Lesson 518 · C2 · Perífrasis discursivas de ironía y distanciamiento (course unit G218).
 * Builds on G158 (lesson 458: venir a + inf. as approximation), G159 (lesson 459: andar,
 * venir + gerundio, acabar + gerundio), G175 (lesson 119: tener + participio), G120
 * (lesson 420: tengo dicho, dar por + participio as result), G140 (lesson 440: no vaya a ser
 * que), G161 (lesson 461: concessive future «Será muy listo, pero…») and G208 (lesson 508:
 * conditional of rumour). Those forms are not retaught: here they work as evaluation, irony
 * and distance in discourse (NGLE §28). Content: sorpresa y desenlace (ir y / coger y + verbo,
 * same tense and person, «coger y» frequent above all in Spain, usage varies; llegar a + inf.
 * as the extreme of a scale; acabar + gerundio); insistencia y crítica (no hacer más que,
 * no dejar de, «no deja de ser curioso», andar + gerundio, te tengo dicho que); distancia y
 * reformulación (venir a decir / reconocer, dar por + participio, hacer como que + indicative,
 * resulta que, a decir verdad); ironía con tiempo y modo (iba a + inf. «según él», future and
 * conditional of concession, ironic no vaya a ser que). Practice: interpret attitude, add or
 * remove evaluation, spot irony in a column. Ampliación: the three readings of «no hacer más
 * que», «no dejes de», register shift. Scene: the city magazine «El Mirador». Columnist Leonor
 * Ibarra writes «Crónica de ventanilla» about the new municipal appointment app that «iba a ser
 * facilísima», according to councillor Ramiro Llorente; editor Gonzalo Riera needs a neutral news
 * brief; Paula Sotelo translates the magazine into English. Escuchar: Leonor reads her column
 * aloud (es-ES-ElviraNeural). Escribir: next week's column, on the new parking meters.
 */
export const lesson: LiveLesson = {
  id: 518,
  level: 'C2',
  title: 'Perífrasis discursivas de ironía y distanciamiento',
  subtitle: 'Interpretar y usar perífrasis y fórmulas que evalúan, ironizan o toman distancia, y pasar de un registro neutro a uno valorativo.',
  legend: [
    { tone: 'orange', label: 'SORPRESA Y DESENLACE · va y dice, llegó a, acabó + gerundio (the unexpected, the extreme)' },
    { tone: 'violet', label: 'INSISTENCIA Y CRÍTICA · no hace más que, no deja de, anda diciendo, te tengo dicho (annoyance)' },
    { tone: 'teal', label: 'DISTANCIA Y REFORMULACIÓN · viene a decir, da por + participio, hace como que, resulta que (keeping distance)' },
    { tone: 'blue', label: 'IRONÍA CON TIEMPO Y MODO · iba a ser, será muy…, pero, no vaya a ser que (irony)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Contar un hecho y decir lo que piensas de él', coach: 'El mismo hecho, otra mirada. Same fact, a different stance.',
      steps: [
        { title: 'La aplicación que iba a ser facilísima · The app that was going to be so easy', blocks: [
          { kind: 'lead', text: 'Revista «El Mirador», lunes por la mañana. Leonor Ibarra escribe cada semana una columna de opinión, «Crónica de ventanilla». Esta vez cuenta su pelea con la nueva aplicación municipal de cita previa, que [[iba a ser facilísima|blue]], según el concejal Ramiro Llorente. Gonzalo Riera, el editor, necesita además una nota **neutra** para la sección de noticias, y Paula Sotelo, que traduce la revista al inglés, tiene que captar el tono. Casi todas las formas de hoy ya las conoces. Lo nuevo es su **valor discursivo**: cómo sirven para **evaluar, ironizar y tomar distancia**.', en: 'A city magazine. A columnist writes about the new municipal appointment app, which, according to the councillor, “was going to be so easy”. The editor also needs a neutral news brief, and the translator has to catch the tone. You already know most of today’s forms; what is new is what they do in discourse: evaluate, ironise and keep a distance.' },
          { kind: 'guide', text: { teacher: 'Tú lees la nota informativa y tu alumno lee la columna. Después tu alumno señala cada palabra que añade una opinión que la nota no tiene.', self: 'Lee las dos versiones en voz alta y subraya mentalmente lo que añade la columna. (What does the column add that the news brief doesn’t?)' } },
          { kind: 'compare', title: 'Un hecho, dos textos · One fact, two texts', columns: [
            { tone: 'neutral', label: 'NOTA INFORMATIVA', sentence: 'El concejal ha declarado que la aplicación es sencilla. Varios usuarios han pedido la cita por teléfono.', idea: 'Verbos neutros y hechos comprobables: el texto no opina.', en: 'Neutral reporting verbs and checkable facts: the text takes no stance.' },
            { tone: 'violet', label: 'COLUMNA DE OPINIÓN', sentence: 'El concejal [[anda diciendo|violet]] que la aplicación es sencilla. [[Será muy sencilla|blue]], pero media ciudad [[acabó pidiendo|orange]] la cita por teléfono.', idea: 'Los mismos hechos, con crítica (anda diciendo), ironía (será…, pero) y desenlace (acabó pidiendo).', en: 'The same facts, now with disapproval (“goes around saying”), irony (“it may well be simple, but”) and a resigned outcome (“ended up booking by phone”).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La aplicación iba a ser facilísima, según el concejal». ¿Qué da a entender Leonor?', options: ['Que no sabe si es fácil o no.', 'Que la aplicación será fácil en el futuro.', 'Que el concejal lo prometió y no se ha cumplido.'], answer: 2, why: 'El imperfecto de «ir a» presenta una expectativa del pasado; con «según el concejal», Leonor la atribuye a otro y sugiere que no se cumplió.', en: 'The imperfect of “ir a” plus “según él” reports someone else’s prediction and implies it failed.' },
            { prompt: '¿Qué versión puede ir en la sección de noticias?', options: ['El concejal ha declarado que la aplicación es sencilla.', 'Será muy sencilla, pero nadie consigue cita.', 'El concejal anda diciendo que la aplicación es sencilla.'], answer: 0, why: 'Una nota informativa usa verbos de lengua neutros. «Anda diciendo» y el futuro concesivo opinan.', en: 'A news brief needs a neutral reporting verb.' },
          ] },
        ] },
        { title: 'Sorpresa y desenlace · Surprise and outcome', mascot: '/brand/mascot/speaking.webp', coach: '¿Qué no esperabas? What didn’t you see coming?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'IR Y · LLEGAR A · ACABAR + GERUNDIO', question: '¿Quieres presentar una acción como inesperada, extrema o como el final de un proceso?', en: '“Ir y + verb” (both verbs in the same tense and person) presents an action as sudden or unexpected; “ir” loses its sense of motion: “va y me pide…” = and then, out of the blue, it asks me… “Coger y” works the same way and is frequent above all in Spain; other formulas, such as “agarrar y”, are heard elsewhere, and usage varies. “Llegar a + infinitive” marks the top of a scale, often with surprise: “llegó a insultarlo” = he even insulted him. “Acabar + gerund” presents the outcome of a process, often resigned: “acabé llamando” = I ended up calling.', formula: ['ir y + verbo, en el mismo tiempo y persona: va y me pide · fue y se marchó', 'coger y + verbo: cogió y se fue (frecuente sobre todo en España; el uso varía)', 'llegar a + infinitivo: el punto más alto de una escala, «incluso»', 'acabar + gerundio (= acabar por + infinitivo): el desenlace de un proceso'],
            meaning: 'Estas construcciones no cuentan solo **qué** pasó: dicen cómo lo vive quien habla. **Ir y** marca la **sorpresa** o la decisión brusca; **llegar a**, que se alcanzó un **extremo**; **acabar + gerundio**, que ese fue el **resultado final**, a menudo no deseado.',
            examples: [
              { es: 'Relleno todo el formulario y la aplicación [[va y me pide|orange]] un certificado que nadie había mencionado.', en: 'I fill in the whole form and then, out of nowhere, the app asks me for a certificate nobody had mentioned.' },
              { es: 'Le explicamos el problema y el técnico [[fue y colgó|orange]].', en: 'We explained the problem and the technician just hung up: abrupt and unexpected.' },
              { es: 'En la reunión vecinal [[llegaron a pedir|orange]] la dimisión del concejal.', en: 'At the residents’ meeting they went as far as calling for the councillor’s resignation.' },
              { es: 'Después de tres intentos, [[acabé llamando|orange]] por teléfono.', en: 'After three attempts, I ended up phoning: the outcome after failing with everything else.' },
            ],
            note: 'En «ir y» el verbo **ir** no indica movimiento: «Fue y se lo dijo» = de repente, se lo dijo. Compara con «**Fue a** decírselo» (se desplazó para decírselo). En negativo, **llegar a** indica que algo no llegó a producirse: «No llegó a abrir el correo» = no lo abrió, aunque se esperaba que lo hiciera.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Discutieron tanto que el vecino ___ amenazar con una denuncia.', options: ['fue y', 'llegó a', 'acabó de'], answer: 1, why: '«Llegar a» marca el punto extremo de la discusión. «Acabó de amenazar» significaría ‘terminó de amenazar’; con «fue y», los dos verbos van en el mismo tiempo (fue y amenazó).', en: 'They argued so much that the neighbour even threatened to file a complaint.' },
            { prompt: '«Después de tres intentos, acabé llamando por teléfono». ¿Qué expresa «acabé llamando»?', options: ['Que dejé de llamar.', 'Que llamé justo antes de otra cosa.', 'Que llamar fue el desenlace, tras fracasar con lo demás.'], answer: 2, why: '«Acabar + gerundio» presenta el resultado final de un proceso. No es «acabar de + infinitivo» (‘hace un momento’).', en: 'What does “acabé llamando” express?' },
          ] },
        ] },
        { title: 'Insistencia y crítica · Insistence and criticism', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Repetir también es opinar. Repetition can be a complaint.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NO HACER MÁS QUE · NO DEJAR DE · ANDAR + GERUNDIO · TENER DICHO', question: '¿Presentas una acción como repetida, insistente o molesta?', en: '“No hacer más que + infinitive” stresses that someone does nothing but that, usually with annoyance. “No dejar de + infinitive” stresses insistence; “no deja de ser + adjective” is an understatement that often sounds ironic (“it is, shall we say, rather curious”). “Andar + gerund” presents an action as vague and repeated here and there; with verbs of saying and “por ahí” it usually signals disapproval. “Te tengo dicho que…” is a reproach: I have told you many times.', formula: ['no hacer más que + infinitivo: insistencia, casi siempre crítica (= no parar de)', 'no dejar de + infinitivo: insistencia · no deja de ser + adjetivo: valoración atenuada, a menudo irónica', 'andar + gerundio: acción vaga y repetida; crítica con verbos de lengua y «por ahí»', 'tener + participio: te tengo dicho que… = te lo he dicho muchas veces (reproche)'],
            meaning: 'Con estas formas, quien habla no informa solo de la repetición: muestra **fastidio, reproche o desaprobación**. Por eso encajan en una columna o en una conversación, y casi nunca en una nota oficial.',
            examples: [
              { es: 'La aplicación [[no hace más que|violet]] devolverme a la pantalla de inicio.', en: 'The app keeps sending me back to the home screen, and I’m fed up with it.' },
              { es: '[[No deja de ser curioso|violet]] que una aplicación de citas no dé citas.', en: 'It is, shall we say, rather curious that an appointment app doesn’t give appointments: understatement as irony.' },
              { es: 'El concejal [[anda diciendo|violet]] por ahí que las quejas son exageradas.', en: 'The councillor goes around saying the complaints are exaggerated: vague, repeated and disapproved of.' },
              { es: '[[Te tengo dicho|violet]] que guardes el número de la ventanilla.', en: 'I’ve told you time and again to keep the office’s phone number: a reproach.' },
            ] },
          { kind: 'table', title: 'De neutro a valorativo · From neutral to evaluative', head: ['Neutro', 'Con valoración', 'Qué añade'], rows: [
            ['Se queja a menudo.', 'No **hace más que** quejarse.', 'molestia por la repetición'],
            ['Llama con frecuencia.', 'No **deja de** llamar.', 'insistencia'],
            ['Es curioso que…', 'No **deja de ser** curioso que…', 'ironía atenuada'],
            ['Dice que…', '**Anda diciendo** por ahí que…', 'rumor y desaprobación'],
            ['Te lo he dicho varias veces.', 'Te **tengo dicho** que…', 'reproche'],
          ], note: '**Andar + gerundio** varía: en México y otras zonas de América, «ando buscando trabajo» es muy frecuente y neutro. El matiz crítico aparece sobre todo con verbos de lengua (decir, contar) y con «por ahí». **Tengo dicho** es invariable cuando sigue una oración: «Te tengo dicho que…».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mi compañero no deja de ser un buen profesional, aunque llegue tarde». ¿Qué hace «no deja de ser»?', options: ['Dice que siempre llega tarde.', 'Dice que ha dejado de ser buen profesional.', 'Reconoce una cualidad con cierta reserva.'], answer: 2, why: '«No deja de ser + adjetivo» afirma de forma atenuada: lo es, aunque con reservas. No significa ‘ha dejado de ser’.', en: 'An understatement: he is a good professional, with reservations.' },
            { prompt: '¿Qué frase expresa desaprobación hacia quien habla de otro?', options: ['Mi cuñado ha contado que me han despedido.', 'Mi cuñado contó ayer que me han despedido.', 'Mi cuñado anda contando por ahí que me han despedido.'], answer: 2, why: '«Anda contando por ahí» presenta el rumor como algo vago y repetido, y lo critica. Las otras dos solo informan.', en: 'Which sentence disapproves of the person spreading the news?' },
          ] },
        ] },
        { title: 'Distancia y reformulación · Distance and rephrasing', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lo dicen ellos, no yo. They say it, not me.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VENIR A · DAR POR · HACER COMO QUE · RESULTA QUE', question: '¿Quieres reformular lo que otro dice, atribuirle una valoración o contar que finge?', en: '“Venir a + infinitive” already gave you approximate figures (“viene a costar…”); with decir, reconocer or ser it sums up what someone’s words really amount to, often with a critical reading: “viene a decir que…” = in essence, it says that… “Dar por + participle” (agreeing with the object) attributes an assessment to the subject: “da por resuelta la incidencia” = it considers the issue solved (the writer doesn’t). “Hacer como que + indicative” means to pretend; compare “como si + imperfect subjunctive”. “Resulta que” introduces a fact in a story, often unexpected or irritating. “A decir verdad” introduces a frank admission.', formula: ['venir a + decir / reconocer / ser: lo que algo significa en el fondo', 'dar por + participio (concuerda): da por resuelta la incidencia', 'hacer como que + indicativo: fingimiento (= actuar como si + imperfecto de subjuntivo)', 'resulta que + indicativo: un hecho que cambia la historia · a decir verdad: confesión que matiza'],
            meaning: 'Con estas fórmulas, quien habla **reformula** o **atribuye** la valoración a otro y se queda fuera: «el ayuntamiento **da por** resuelta la incidencia» no dice que esté resuelta, sino que **el ayuntamiento** lo considera así. **Resulta que** y **a decir verdad** no son perífrasis, pero cumplen la misma función en el discurso.',
            examples: [
              { es: 'El comunicado [[viene a reconocer|teal]] que el sistema no funciona, aunque no lo diga con esas palabras.', en: 'The statement essentially admits the system doesn’t work, even if it doesn’t say so in those words.' },
              { es: 'El ayuntamiento [[da por resuelta|teal]] la incidencia.', en: 'The city council considers the issue solved: their view, not necessarily the writer’s.' },
              { es: 'La concejalía [[hace como que|teal]] no ha recibido quejas.', en: 'The department pretends it hasn’t received any complaints.' },
              { es: 'Solicité cita para el martes y [[resulta que|teal]] la aplicación solo funciona en horario de oficina.', en: 'I booked for Tuesday and it turns out the app only works during office hours.' },
              { es: '[[A decir verdad|teal]], yo tampoco leí las instrucciones.', en: 'To be honest, I didn’t read the instructions either: a frank admission that qualifies the criticism.' },
            ],
            note: '**Hace como que no lo sabe** (indicativo) = **actúa como si no lo supiera** (subjuntivo). Y «Ahora **resulta que** la culpa es nuestra» expresa sorpresa indignada.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El informe da por hecho que todos los vecinos tienen móvil». ¿Qué opina quien escribe?', options: ['Que todos los vecinos tienen móvil.', 'No lo dice: atribuye esa suposición al informe y se distancia.', 'Que el informe lo ha demostrado.'], answer: 1, why: '«Dar por hecho» atribuye la suposición al sujeto (el informe). Quien escribe no la hace suya, y a menudo insinúa que es discutible.', en: 'Who is assuming that everyone has a mobile phone?' },
            { prompt: 'El director ve a su empleado, pero ___ no lo ve.', options: ['hace que', 'hace como que', 'hace como si'], answer: 1, why: '«Hacer como que» + indicativo expresa fingimiento. «Como si» pide imperfecto de subjuntivo (como si no lo viera); «hace que no lo ve» no es la fórmula.', en: 'He pretends not to see him.' },
          ] },
        ] },
        { title: 'Ironía con tiempo y modo · Irony through tense and mood', mascot: '/brand/mascot/studying.webp', coach: 'Lo que se dice choca con lo que se sabe. Words clash with facts.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'IBA A · SERÁ…, PERO · NO VAYA A SER QUE', question: '¿Quieres que tu lector entienda lo contrario de lo que parece, o una crítica bajo una concesión?', en: 'The imperfect “iba a + infinitive”, especially with “según él / según ellos”, recalls someone else’s prediction and implies it did not come true. The future (or the conditional, for the past) of concession grants something only to knock it down: “Será muy moderna, pero…” = it may well be modern, but… “No vaya a ser que + present subjunctive” expresses precaution; used ironically, the “risk” it guards against is something that should be normal. You already know these forms; here they carry irony.', formula: ['iba a + infinitivo (+ según X): una predicción ajena que no se cumplió', 'futuro concesivo: Será muy moderna, pero… · pasado: Sería muy moderna, pero…', 'no vaya a ser que / no sea que + presente de subjuntivo (pasado: no fuera a ser que)', 'uso irónico: la «precaución» evita algo que debería ser normal'],
            meaning: 'La ironía no está en la forma, sino en el **choque** entre lo que se dice y lo que el contexto muestra. Estas formas ayudan a construirla: **iba a ser** facilísimo (y no lo fue); **será** muy moderna, **pero** no funciona; no preguntes, **no vaya a ser que** te contesten.',
            examples: [
              { es: 'La nueva aplicación [[iba a ser facilísima|blue]], según el concejal.', en: 'The new app was supposed to be dead easy, according to the councillor (it wasn’t).' },
              { es: '[[Será muy moderna|blue]], pero mi vecina pidió la cita por teléfono en diez minutos.', en: 'It may well be very modern, but my neighbour booked by phone in ten minutes.' },
              { es: 'No escribas a la concejalía, [[no vaya a ser que|blue]] te respondan.', en: 'Don’t write to the department, heaven forbid they should answer: ironic precaution.' },
              { es: 'Llévate el paraguas, [[no vaya a ser que|blue]] llueva.', en: 'Take your umbrella in case it rains: the same form as a genuine precaution.' },
            ],
            note: 'Recuerda: el futuro concesivo va en **indicativo** (será), y tras «no vaya a ser que» va el **subjuntivo** (llueva, respondan).' },
          { kind: 'decide', title: '¿Hay ironía? · Is it ironic?', steps: [
            { q: '¿Lo que se dice choca con lo que el contexto deja claro?', yes: 'Es probable que haya **ironía**: busca qué piensa de verdad quien habla.', no: 'Sigue con la siguiente pregunta.' },
            { q: '¿Se concede algo con futuro o condicional y sigue un «pero»?', yes: '**Concesión irónica o crítica**: lo importante va detrás de «pero».', no: 'Sigue.' },
            { q: '¿La supuesta precaución evita algo deseable (que te contesten, que funcione)?', yes: '**Precaución irónica**: critica que eso no sea lo normal.', no: 'Probablemente es un **uso literal**: una predicción, una concesión o una precaución real.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No le pidas opinión al técnico, no vaya a ser que te la dé». ¿Qué critica quien habla?', options: ['Que el técnico casi nunca ayuda.', 'Nada: es un consejo literal.', 'Que el técnico da demasiadas opiniones.'], answer: 0, why: 'Presenta como «riesgo» que el técnico te dé su opinión, algo que debería ser normal: la ironía critica que casi nunca ayude.', en: 'What is the speaker really complaining about?' },
            { prompt: 'Hablas del pasado: «___ muy moderno aquel sistema, pero nadie sabía usarlo».', options: ['Sería', 'Fuera', 'Sea'], answer: 0, why: 'La concesión sobre el pasado se expresa con el condicional (= quizá era muy moderno, pero…). El subjuntivo no tiene este valor aquí.', en: 'A concession about the past: it may have been modern, but…' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Forma, sentido o registro? Form, meaning or register?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: la forma, el sentido o el registro.', self: 'Lee cada frase y decide qué falla: ¿la forma, el sentido o el registro? Después mira la corrección. (Form, meaning or register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El concejal hace como que no lea las quejas.', right: 'El concejal hace como que no lee las quejas (o: actúa como si no las leyera).', why: '«Hacer como que» va con indicativo. El subjuntivo corresponde a «como si», en imperfecto.' },
            { wrong: 'Sea muy moderna, pero no funciona.', right: 'Será muy moderna, pero no funciona.', why: 'La concesión irónica usa el futuro de indicativo. «Sea» no tiene aquí ese valor.' },
            { wrong: 'Pregunté en la ventanilla si podían ayudarme y la funcionaria fue a decirme que no era su departamento.', right: 'Pregunté en la ventanilla si podían ayudarme y la funcionaria fue y me dijo que no era su departamento.', why: '«Ir a» conserva el movimiento o el futuro. La sorpresa se expresa con «ir y» + el mismo tiempo.' },
            { wrong: 'Te tengo dicha que no abras esos enlaces.', right: 'Te tengo dicho que no abras esos enlaces.', why: 'Con una oración como complemento, el participio queda invariable: «tengo dicho».' },
            { wrong: 'El comunicado da por resuelto la incidencia.', right: 'El comunicado da por resuelta la incidencia.', why: 'En «dar por + participio», el participio concuerda con el complemento: la incidencia → resuelta.' },
            { wrong: 'Nota oficial del ayuntamiento: «El concejal anda diciendo que el sistema funciona».', right: 'Nota oficial del ayuntamiento: «El concejal ha declarado que el sistema funciona».', why: 'Error de registro: «anda diciendo» descalifica. En un texto institucional o informativo se usa un verbo neutro.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Paula traduce «No deja de ser curioso que…» como «It never stops being curious that…». ¿Qué falla?', options: ['Debería traducir «It stopped being curious».', 'Nada: es una traducción literal correcta.', 'No es una idea de continuidad, sino una afirmación atenuada: «It is rather curious that…».'], answer: 2, why: '«No deja de ser» es una lítote: afirma con suavidad y a menudo con ironía. Traducirlo palabra por palabra pierde el tono.', en: 'The phrase is an understatement, not a statement about time.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en tres frases una gestión que le salió mal, primero de forma neutra y después con dos formas de hoy. Comparan qué cambia.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La columna de Leonor', coach: 'Toca cada marca: ¿qué actitud hay? Tap each mark: what stance?',
      steps: [
        { title: 'Reunión de redacción · Editorial meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Leonor y tu alumno es Gonzalo y Paula. Después tu alumno toca cada expresión marcada y explica qué actitud transmite.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿sorpresa, crítica, distancia o ironía? (What attitude does each one carry?)' } },
          { kind: 'explore', title: '«Un laberinto con logotipo»', setting: 'Redacción de «El Mirador», lunes a las diez. Gonzalo Riera tiene impreso el borrador de la columna de Leonor Ibarra. Paula Sotelo, la traductora, toma notas para la edición en inglés.', lines: [
            { who: 'Gonzalo', text: 'Leonor, empiezas fuerte: «La nueva aplicación municipal [[iba a ser facilísima|blue]], según el concejal».', en: 'Leonor, you open with a punch: “The new council app was going to be dead easy, according to the councillor.”' },
            { who: 'Leonor', text: 'Es que lo dijo así, en rueda de prensa. Yo solo lo cito; el imperfecto hace el resto.', en: 'That’s exactly what he said at the press conference. I just quote him; the imperfect does the rest.' },
            { who: 'Paula', text: 'Para el inglés necesito el tono. Aquí escribes: «Relleno mis datos y la aplicación [[va y me pide|orange]] una contraseña que nunca creé». ¿Es solo narración?', en: 'For the English version I need the tone. Here you write: “I fill in my details and the app goes and asks me for a password I never created.” Is that just narration?' },
            { who: 'Leonor', text: 'No del todo: «va y» es la sorpresa, el «no te lo vas a creer». Y luego la aplicación [[no hacía más que devolverme|violet]] a la pantalla de inicio.', en: 'Not quite: “va y” is the surprise, the “you won’t believe this”. And then the app kept throwing me back to the home screen.' },
            { who: 'Gonzalo', text: 'Cuidado con el concejal. Escribes que [[anda diciendo|violet]] por ahí que el sistema funciona. ¿No es un poco duro?', en: 'Careful with the councillor. You write that he goes around saying the system works. Isn’t that a bit harsh?' },
            { who: 'Leonor', text: 'Esa es la idea: si pusiera «ha declarado», sería una nota de prensa. Y ojo, que es el comunicado el que [[da por resuelta|teal]] la incidencia, no yo.', en: 'That’s the point: if I put “has stated”, it would be a press release. And note that it’s the statement that considers the issue solved, not me.' },
            { who: 'Paula', text: '¿Y esto de que la concejalía [[hace como que|teal]] no ha recibido quejas?', en: 'And this bit about the department pretending it hasn’t received any complaints?' },
            { who: 'Leonor', text: 'Que lo sabe y finge no saberlo. Y el remate: «[[Será muy moderna|blue]], pero mi vecina [[acabó pidiendo|orange]] la cita por teléfono».', en: 'That it knows and pretends not to. And the punchline: “It may well be very modern, but my neighbour ended up booking by phone.”' },
            { who: 'Gonzalo', text: 'Y aquí [[llegas a decir|orange]] que la aplicación es «un laberinto con logotipo». ¿No te pasas?', en: 'And here you go as far as calling the app “a maze with a logo”. Isn’t that going too far?' },
            { who: 'Leonor', text: '[[A decir verdad|teal]], es lo más suave que se me ocurrió. El comunicado [[viene a reconocer|teal]] que no funciona; yo solo lo traduzco al español de la calle.', en: 'To be honest, it’s the mildest thing I could think of. The statement more or less admits it doesn’t work; I’m just translating it into everyday Spanish.' },
            { who: 'Paula', text: 'Entonces en inglés tendré que traducir la ironía, no las palabras. [[No vaya a ser que|blue]] el concejal crea que lo felicitamos.', en: 'So in English I’ll have to translate the irony, not the words. Heaven forbid the councillor should think we’re congratulating him.' },
          ], notes: {
            'iba a ser facilísima': '**Iba a + infinitivo** con «según el concejal»: recuerda una predicción ajena e insinúa que **no se cumplió**. Es la base de la ironía de toda la columna.',
            'va y me pide': '**Ir y + verbo** (mismo tiempo y persona): acción inesperada. «Ir» no indica movimiento. En presente, da viveza a la narración.',
            'no hacía más que devolverme': '**No hacer más que + infinitivo**: repetición insistente presentada con fastidio (= no paraba de devolverme).',
            'anda diciendo': '**Andar + gerundio** con verbo de lengua: presenta las declaraciones como vagas y repetidas, y las desaprueba. Por eso Gonzalo lo encuentra duro.',
            'da por resuelta': '**Dar por + participio** (concuerda con «la incidencia»): la valoración es del comunicado. Leonor se distancia de ella.',
            'hace como que': '**Hacer como que + indicativo** (no ha recibido): fingimiento. Equivale a «actúa como si no hubiera recibido».',
            'Será muy moderna': '**Futuro concesivo**: concede algo para quitarle valor enseguida con «pero». Es una concesión irónica.',
            'acabó pidiendo': '**Acabar + gerundio**: el desenlace de un proceso fallido. La vecina lo consiguió por la vía de siempre.',
            'llegas a decir': '**Llegar a + infinitivo**: Gonzalo presenta la frase como el punto más extremo de la columna.',
            'A decir verdad': 'Marcador de **sinceridad**: introduce una confesión que matiza lo anterior, aquí con humor.',
            'viene a reconocer': '**Venir a + infinitivo**: reformula lo que el comunicado significa **en el fondo**, aunque no lo diga literalmente.',
            'No vaya a ser que': '**No vaya a ser que + subjuntivo**: precaución, aquí irónica. Paula finge temer que el concejal entienda la columna como un elogio.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué no quiere Leonor escribir «ha declarado»?', options: ['Porque un verbo neutro convertiría la columna en una nota de prensa.', 'Porque el concejal no declaró nada.', 'Porque no es correcto gramaticalmente.'], answer: 0, why: 'Leonor lo dice: con «ha declarado», «sería una nota de prensa». «Anda diciendo» añade su crítica.', en: 'Why does Leonor reject the neutral verb?' },
            { prompt: '¿Quién considera resuelta la incidencia?', options: ['Gonzalo.', 'Leonor.', 'El comunicado municipal.'], answer: 2, why: '«Es el comunicado el que da por resuelta la incidencia, no yo»: «dar por» atribuye la valoración.', en: 'Whose assessment is “da por resuelta”?' },
            { prompt: '¿Qué quiere decir Paula con «tendré que traducir la ironía, no las palabras»?', options: ['Que eliminará las partes irónicas.', 'Que traducirá palabra por palabra.', 'Que buscará en inglés recursos que transmitan la misma actitud.'], answer: 2, why: 'Las perífrasis valorativas no tienen equivalentes literales: hay que reproducir la actitud con recursos del inglés.', en: 'What will Paula do in the English version?' },
          ] },
        ] },
        { title: 'La nota neutra · The neutral news brief', mascot: '/brand/mascot/seated.webp', coach: 'Quita la opinión, deja el hecho. Remove the opinion, keep the fact.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Gonzalo y tu alumno es Paula. En cada hueco, tu alumno elige y explica si la forma informa u opina.', self: 'Completa la conversación. En cada hueco, decide si el texto informa u opina. (Does the form just report, or does it give an opinion?)' } },
          { kind: 'chat-fill', title: 'Dos textos sobre el mismo hecho · Two texts, one fact', lines: [
            { who: 'Gonzalo', text: 'Paula, mientras Leonor termina, prepárame la nota para la sección de noticias.' },
            { who: 'Paula', text: 'Empiezo así: «El concejal Ramiro Llorente ___ que el sistema funciona con normalidad».', options: ['no hace más que decir', 'anda diciendo', 'ha declarado'], answer: 2, why: 'Una nota informativa usa un verbo de lengua neutro. Las otras dos formas critican al concejal.' },
            { who: 'Gonzalo', text: 'Bien. ¿Y lo del comunicado?' },
            { who: 'Paula', text: '«Según el comunicado municipal, la incidencia ___ resuelta».', options: ['estaría', 'iba a estar', 'está'], answer: 2, why: 'Con la fuente explícita, el indicativo basta. «Iba a estar» sugiere que no lo está (ironía de columna) y el condicional de rumor, con la fuente ya citada, añade una duda que la nota no necesita.' },
            { who: 'Paula', text: '«Algunos usuarios ___ la cita por teléfono».', options: ['llegaron a pedir', 'acabaron pidiendo', 'han pedido'], answer: 2, why: 'La nota da el hecho. «Acabaron pidiendo» lo presenta como desenlace de un fracaso y «llegaron a pedir», como algo extremo: eso es valoración.' },
            { who: 'Gonzalo', text: 'Perfecto. En la columna, en cambio, Leonor puede escribir: «Y la aplicación ___ un certificado que nadie te había mencionado».', options: ['te pide', 'te ha pedido', 'va y te pide'], answer: 2, why: 'La columna narra con sorpresa: «ir y + verbo» transmite lo inesperado. Las otras dos opciones solo informan.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Interpretar, elegir y reescribir', coach: 'Lee la actitud, no solo el hecho. Read the stance, not just the fact.',
      steps: [
        { title: '¿Qué hace cada forma? · What does each form do?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase y la clasifica. Tú preguntas: «¿Qué piensa quien habla?».', self: 'Lee cada frase y clasifícala según la actitud que transmite. (What does the speaker think?)' } },
          { kind: 'classify', title: 'Cuatro actitudes · Four stances', categories: [
            { id: 'sorpresa', label: 'SORPRESA Y DESENLACE', tone: 'orange' },
            { id: 'insistencia', label: 'INSISTENCIA Y CRÍTICA', tone: 'violet' },
            { id: 'distancia', label: 'DISTANCIA Y REFORMULACIÓN', tone: 'teal' },
            { id: 'ironia', label: 'IRONÍA CON TIEMPO Y MODO', tone: 'blue' },
          ], items: [
            { text: 'Estábamos tan tranquilos y va y se pone a llover.', answer: 'sorpresa', why: '«Ir y + verbo»: algo inesperado interrumpe la situación.' },
            { text: 'La reunión acabó convirtiéndose en una lista de quejas.', answer: 'sorpresa', why: '«Acabar + gerundio»: el desenlace, no previsto, de un proceso.' },
            { text: 'Mi jefe no deja de recordarme el plazo.', answer: 'insistencia', why: '«No dejar de»: insistencia que molesta.' },
            { text: 'Te tengo dicho que no contestes esos mensajes.', answer: 'insistencia', why: '«Tener dicho»: reproche por algo ya repetido.' },
            { text: 'El ministerio da por cerrado el asunto.', answer: 'distancia', why: '«Dar por + participio»: la valoración es del ministerio, no de quien escribe.' },
            { text: 'Hace como que no ha leído mi correo.', answer: 'distancia', why: '«Hacer como que»: quien habla denuncia un fingimiento.' },
            { text: 'Iban a ser dos semanas de obras, según la empresa.', answer: 'ironia', why: '«Iba a» + «según la empresa»: una predicción ajena que no se cumplió.' },
          ] },
        ] },
        { title: '¿Qué actitud transmite? · What stance does it convey?', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Interpreta · Interpret', items: [
            { prompt: '«Mi hermano no hace más que hablar de su coche nuevo».', options: ['Le hace gracia que hable de su coche.', 'Le molesta que hable de él constantemente.', 'Su hermano solo habló del coche una vez.'], answer: 1, why: '«No hacer más que» insiste en la repetición y suele expresar fastidio.', en: 'How does the speaker feel about it?' },
            { prompt: '«No deja de ser curioso que la oficina de atención al público no atienda al público».', options: ['Dice que ha dejado de ser curioso.', 'Elogia la oficina.', 'Lo encuentra absurdo y lo dice con ironía contenida.'], answer: 2, why: 'Lítote irónica: «no deja de ser curioso» = es bastante absurdo, dicho con suavidad.', en: 'An understated, ironic criticism.' },
            { prompt: '«Llegaron a pedirme la partida de nacimiento de mi abuela».', options: ['Al final no se la pidieron.', 'Fue un trámite normal.', 'Lo presenta como el colmo de una serie de exigencias.'], answer: 2, why: '«Llegar a» sitúa la petición en el punto más alto de la escala: el colmo.', en: 'They even asked for her grandmother’s birth certificate.' },
            { prompt: '«La empresa viene a decir que la culpa es de los clientes».', options: ['Resume lo que la empresa da a entender, con una lectura crítica.', 'Da una cifra aproximada.', 'Cita literalmente a la empresa.'], answer: 0, why: '«Venir a decir» reformula el sentido de fondo, no las palabras exactas.', en: 'What the company is essentially saying.' },
            { prompt: '«No llames al servicio técnico, no vaya a ser que te lo arreglen».', options: ['Recomienda no molestar por cortesía.', 'Advierte de un peligro real.', 'Ironiza: presenta como riesgo algo que debería ser normal.'], answer: 2, why: 'La precaución protege de algo deseable: es ironía sobre un servicio que casi nunca arregla nada.', en: 'Ironic precaution: what is the real criticism?' },
          ] },
        ] },
        { title: 'Revisa el borrador · Check the draft', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de borradores de la revista. Tu alumno decide si cada una está bien y, si no, elige la corrección y explica por qué.', self: 'Son frases de borradores de la revista. ¿Están bien? Si no, elige la corrección. (Is each sentence right? If not, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'La concejala hace como que no sepa nada de las quejas.', ok: false, options: ['La concejala hace como que no supiera nada de las quejas.', 'La concejala hace como si no sabe nada de las quejas.', 'La concejala hace como que no sabe nada de las quejas.'], answer: 2, why: '«Hacer como que» + indicativo. El subjuntivo va con «como si» (como si no supiera).' },
            { sentence: 'Le pregunté a la funcionaria si podía ayudarme y fue a decirme que no era su departamento.', ok: false, options: ['…y fue diciéndome que no era su departamento.', '…y iba a decirme que no era su departamento.', '…y fue y me dijo que no era su departamento.'], answer: 2, why: 'La funcionaria no se desplaza: la respuesta inesperada se expresa con «ir y» + el mismo tiempo (fue y me dijo).' },
            { sentence: 'Sea muy moderna, pero tardé tres horas en pedir la cita.', ok: false, options: ['Será muy moderna, pero tardé tres horas en pedir la cita.', 'Fuera muy moderna, pero tardé tres horas en pedir la cita.', 'Es muy moderna, aunque tarde tres horas en pedir la cita.'], answer: 0, why: 'La concesión irónica sobre una cualidad actual va en futuro de indicativo: «será muy moderna, pero…».' },
            { sentence: 'Te tengo dicho mil veces que no firmes nada sin leerlo.', ok: true, why: 'Correcta: «tener dicho» invariable + que + subjuntivo (orden negativa en estilo indirecto).' },
            { sentence: 'Nota informativa: «El concejal anda diciendo que el sistema funciona con normalidad».', ok: false, options: ['El concejal va y declara que el sistema funciona con normalidad.', 'El concejal ha declarado que el sistema funciona con normalidad.', 'El concejal no hace más que declarar que el sistema funciona con normalidad.'], answer: 1, why: 'En una nota informativa no cabe la valoración: verbo de lengua neutro. Las otras opciones siguen opinando.' },
          ] },
        ] },
        { title: 'La vecina de Leonor · Leonor’s neighbour', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Aurora llama a su hijo · Aurora calls her son', lines: [
            { who: 'Aurora', text: 'Bruno, hijo, hice todo lo que me dijiste y la aplicación ___ que mi contraseña había caducado.', options: ['fue y me dijo', 'fue a decirme', 'iba diciéndome'], answer: 0, why: 'Sorpresa en la narración: «ir y» + mismo tiempo. «Fue a decirme» implica desplazamiento.' },
            { who: 'Bruno', text: 'Mamá, ¿y no podías crear otra?' },
            { who: 'Aurora', text: 'Lo intenté, pero la pantalla ___ la misma pregunta una y otra vez.', options: ['no hacía más que repetir', 'no hacía más que repitiendo', 'acababa de repetir'], answer: 0, why: '«No hacer más que» + infinitivo: insistencia que desespera. «Acababa de repetir» = la había repetido hacía un momento.' },
            { who: 'Bruno', text: 'Te ___ que me llames antes de pelearte con el móvil.', options: ['tengo dicha', 'he tenido dicho', 'tengo dicho'], answer: 2, why: '«Tengo dicho», invariable: reproche por algo ya repetido muchas veces.' },
            { who: 'Aurora', text: 'Ya, ya. Total, que ___ por teléfono, como toda la vida. Diez minutos.', options: ['llegué pidiéndola', 'acabé pidiéndola', 'acabé de pedirla'], answer: 1, why: '«Acabar + gerundio»: el desenlace tras el fracaso. «Acabé de pedirla» significaría ‘terminé de pedirla’.' },
            { who: 'Bruno', text: '¿Y el concejal no decía que ___ facilísimo?', options: ['será', 'iba a ser', 'fuera'], answer: 1, why: '«Iba a ser»: la promesa del pasado, ahora citada con ironía porque no se cumplió.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['El', 'concejal', 'anda', 'diciendo', 'por', 'ahí', 'que', 'todo', 'funciona.'], accept: ['El concejal anda diciendo por ahí que todo funciona.'], en: 'The councillor goes around saying that everything works.' },
            { tiles: ['Será', 'muy', 'moderna,', 'pero', 'nadie', 'consigue', 'una', 'cita.'], accept: ['Será muy moderna, pero nadie consigue una cita.'], en: 'It may well be very modern, but nobody manages to get an appointment.' },
            { tiles: ['La', 'concejalía', 'hace', 'como', 'que', 'no', 'ha', 'recibido', 'quejas.'], accept: ['La concejalía hace como que no ha recibido quejas.'], en: 'The department pretends it hasn’t received any complaints.' },
          ] },
        ] },
        { title: 'Añade o quita la valoración · Add or remove the stance', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada frase según la instrucción y lee las dos versiones en voz alta: ¿qué actitud se ha añadido o se ha quitado?', self: 'Reescribe cada frase según la instrucción y compara las dos versiones: ¿qué actitud has añadido o quitado? (What stance did you add or remove?)' } },
          { kind: 'rewrite', title: 'De la nota a la columna, y al revés · From brief to column, and back', items: [
            { prompt: 'El concejal dice en todas partes que el sistema funciona.', instruction: 'Hazlo crítico y vago con «andar» + gerundio.', accept: ['El concejal anda diciendo que el sistema funciona', 'El concejal anda diciendo en todas partes que el sistema funciona', 'El concejal anda diciendo por ahí que el sistema funciona', 'El concejal anda diciendo por todas partes que el sistema funciona'] },
            { prompt: 'La aplicación no hace más que pedir contraseñas.', instruction: 'Versión neutra para la nota: empieza por «La aplicación pide» y usa «con frecuencia».', accept: ['La aplicación pide contraseñas con frecuencia', 'La aplicación pide con frecuencia contraseñas'] },
            { prompt: 'En la reunión, un vecino insultó al técnico.', instruction: 'Preséntalo como el punto más extremo de la discusión, con «llegar a».', accept: ['En la reunión, un vecino llegó a insultar al técnico', 'Un vecino llegó a insultar al técnico en la reunión', 'En la reunión un vecino llegó a insultar al técnico'] },
            { prompt: 'Te lo he dicho muchas veces: guarda el número de la ventanilla.', instruction: 'Reproche con «tener» + participio: empieza por «Te tengo dicho que».', accept: ['Te tengo dicho que guardes el número de la ventanilla'] },
            { prompt: 'El ayuntamiento considera que el problema está resuelto.', instruction: 'Atribuye la valoración con «dar por» + participio; cuida la concordancia.', accept: ['El ayuntamiento da por resuelto el problema', 'El ayuntamiento da el problema por resuelto'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige una noticia breve de esta semana y escribe dos frases de columna sobre ella con formas de dos colores distintos.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La columna en voz alta', coach: 'Escucha la actitud detrás de cada frase. Hear the stance behind each line.',
      steps: [
        { title: '«Crónica de ventanilla», versión audio · The column, read aloud', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general y el tono. Segunda escucha: tu alumno anota cada forma que evalúa o ironiza y dice qué piensa de verdad Leonor.', self: 'Escucha una vez para la idea general y el tono. En la segunda, anota cada forma que evalúa o ironiza. Vas a oír «certificado digital» (digital ID certificate) y «horario de oficina» (office hours).' } },
          { kind: 'listen', title: 'Crónica de ventanilla', channel: 'EL MIRADOR · LA COLUMNA EN VOZ ALTA', src: '/audio/grammar-live/518.mp3',
            before: 'Leonor lee su columna sobre la aplicación municipal. ¿Qué crees que critica, y cómo lo hará sin decirlo de forma directa? (What will she criticise, and how, without saying it outright?)',
            gist: { prompt: '¿Qué hace Leonor? · What does Leonor do?', options: ['Critica con ironía la aplicación y el discurso oficial sobre ella.', 'Defiende al concejal frente a las quejas.', 'Explica paso a paso cómo usar la aplicación.'], answer: 0, why: 'Concede («será muy moderna») para criticar, atribuye el optimismo al concejal y termina con un consejo irónico.', en: 'An ironic criticism of the app and of the official spin.' },
            details: [
              { prompt: '¿Qué prometió el concejal?', options: ['Que sería facilísima: tres pasos.', 'Que habría más ventanillas.', 'Que la aplicación funcionaría por la noche.'], answer: 0, why: '«Iba a ser facilísima, según el concejal Llorente. Tres pasos, dijo».', en: 'What did the councillor promise?' },
              { prompt: '¿Qué le pidió la aplicación de forma inesperada?', options: ['Un número de teléfono.', 'Un certificado digital.', 'Una foto.'], answer: 1, why: '«La aplicación va y me pide un certificado digital que nadie había mencionado».', en: 'What did the app unexpectedly ask for?' },
              { prompt: '¿Qué critica Leonor al hablar de «miles de visitas»?', options: ['Que la aplicación tiene pocos usuarios.', 'Que el concejal presenta como éxito un dato que no prueba nada: visitas no son citas.', 'Que las visitas son falsas.'], answer: 1, why: '«…miles de visitas, que no es lo mismo que miles de citas».', en: 'Why does she mention “thousands of visits”?' },
              { prompt: '¿Qué resume Leonor con «viene a decir»?', options: ['Su lectura del comunicado: que la culpa es de los usuarios.', 'Una cifra aproximada.', 'Una cita literal del comunicado.'], answer: 0, why: '«Viene a decir que el problema somos los usuarios»: reformula el sentido de fondo.', en: 'What does “viene a decir” introduce?' },
              { prompt: '¿Cómo consiguió cita su vecina?', options: ['Por teléfono, en diez minutos.', 'Con la aplicación, a la segunda.', 'No la consiguió.'], answer: 0, why: '«Acabó pidiendo la cita por teléfono en diez minutos».', en: 'How did her neighbour get the appointment?' },
            ],
            transcript: 'Hola, soy Leonor Ibarra y esto es «Crónica de ventanilla», la versión en voz alta de mi columna. Esta semana, la cita previa. La nueva aplicación municipal [[iba a ser facilísima|blue]], según el concejal Llorente. Tres pasos, dijo. Pues bien: el lunes la descargo, relleno mis datos y la aplicación [[va y me pide|orange]] un certificado digital que nadie había mencionado. Lo consigo, vuelvo a entrar, y el sistema [[no hace más que|violet]] mandarme a la pantalla de inicio. El martes descubro que solo funciona en horario de oficina, como las ventanillas de toda la vida. Mientras tanto, el concejal [[anda diciendo|violet]] en las redes que la aplicación ha recibido miles de visitas, que no es lo mismo que miles de citas. El comunicado oficial habla de una incidencia puntual y [[viene a decir|teal]] que el problema somos los usuarios, que no sabemos leer. [[Será muy moderna|blue]], no lo discuto. Pero mi vecina Aurora, que tiene ochenta años, [[acabó pidiendo|orange]] la cita por teléfono en diez minutos. Así que mi consejo es sencillo: guarden el número de la ventanilla, [[no vaya a ser que|blue]] la modernidad nos deje sin cita. Hasta la semana que viene.',
            reply: { teacher: 'Tú eres el concejal Llorente y llamas a la revista para quejarte de la columna. Tu alumno es Gonzalo y te explica, sin perder la calma, qué critica Leonor y con qué recursos.', self: 'Resume la columna en voz alta en tres frases neutras, sin ninguna valoración. Después dila otra vez con dos formas de hoy. (Neutral first, then with stance.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Contar con actitud', coach: 'Opina sin decir «opino». Take a stance without saying “I think”.',
      steps: [
        { title: 'Anécdotas, críticas e ironía · Stories, criticism and irony', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde durante uno o dos minutos. Si cuenta algo de forma plana, tú preguntas «¿Y qué te pareció?» y tu alumno lo reformula con una forma de hoy.', self: 'Responde a cada tarjeta en voz alta durante uno o dos minutos. Usa al menos dos formas de colores distintos en cada respuesta. (Use at least two forms of different colours.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta una gestión o un aparato que «iba a ser facilísimo» y no lo fue. · Tell the story of something that was supposed to be easy.', followUps: ['¿Qué fue lo más absurdo?', '¿Cómo acabó?', '¿Lo volverías a intentar?'], phrases: ['[[Iba a ser|blue]]…, según…', 'Y entonces [[va y|orange]]…', '[[No hacía más que|violet]]…', 'Al final [[acabé|orange]] + gerundio…'], hint: 'Narra con presente o pasado, marca la sorpresa con «ir y» y cierra con el desenlace.', example: 'El nuevo router iba a instalarse en cinco minutos, según la compañía. Lo conecto, sigo las instrucciones y va y me pide un código que no venía en la caja. Llamo al servicio técnico y la grabación no hacía más que mandarme a la página web. Al final acabé llamando a mi sobrino, que lo arregló en diez minutos.' },
            { q: 'Describe con crítica, pero con justicia, a alguien que repite siempre lo mismo. · Describe someone who keeps repeating the same thing.', followUps: ['¿Cómo lo dirías en un correo formal?', '¿Hay algo que le concedas?'], phrases: ['[[No deja de|violet]]…', '[[Anda diciendo|violet]] por ahí que…', '[[No deja de ser|violet]] + adjetivo…', '[[A decir verdad|teal]]…'], hint: 'Usa una forma crítica y después una concesión que muestre que eres justo.', example: 'Tengo un compañero que no deja de hablar de su proyecto y anda diciendo por ahí que el equipo no lo apoya. A decir verdad, algo de razón tiene: no deja de ser cierto que le dimos poco tiempo. Pero en un correo formal diría solo que «ha expresado su preocupación por los plazos».' },
            { q: 'Eres Paula: explícale a Gonzalo cómo traducirías al inglés «Será muy moderna, pero…» y «No vaya a ser que…». · Explain how you would translate the irony.', followUps: ['¿Qué se pierde en la traducción literal?', '¿Qué recursos tiene el inglés para la ironía?'], phrases: ['Literalmente diría…, pero…', 'Lo que transmite es…', '[[Viene a decir|teal]] que…'], hint: 'Explica primero la actitud en español y después propón un equivalente que transmita lo mismo.', example: '«Será muy moderna, pero…» no es una predicción: viene a decir «concedo que es moderna, pero eso no sirve de nada». En inglés pondría «It may well be modern, but…». Y «no vaya a ser que el concejal crea que lo felicitamos» lo traduciría con algo como «heaven forbid he should think…», porque la ironía está en fingir una precaución.' },
            { q: '¿Tiene límites la ironía en una columna sobre un servicio público? ¿Puede ser injusta? · Can irony be unfair?', followUps: ['¿Qué diferencia hay entre criticar una gestión y burlarse de una persona?', '¿Debería la columna dar la versión del concejal?'], phrases: ['Es cierto que…, pero…', '[[No deja de ser|violet]]…', '[[A decir verdad|teal]]…', 'Una cosa es… y otra…'], hint: 'Toma partido, concede algo a la postura contraria y distingue entre criticar hechos y ridiculizar personas.', example: 'Creo que la ironía es legítima cuando se dirige a una gestión pública y se apoya en hechos. Una cosa es decir que la aplicación no funciona, y otra muy distinta burlarse de quien la diseñó. A decir verdad, no deja de ser un riesgo: si el lector no capta la ironía, puede entender lo contrario.' },
            { q: 'Eres el concejal Llorente: responde a la columna tomando distancia de lo que dice Leonor. · Reply to the column as the councillor.', followUps: ['¿Qué reconoces y qué niegas?', '¿Cómo evitas sonar ofendido?'], phrases: ['La columnista [[da por|teal]] + participio…', 'Su texto [[viene a decir|teal]] que…', '[[Resulta que|teal]]…', 'Es cierto que…'], hint: 'Atribuye las valoraciones a la columnista con «dar por» y «venir a decir», y reconoce algún problema.', example: 'La columnista da por fracasada una aplicación que lleva dos semanas en marcha. Su texto viene a decir que no escuchamos a los vecinos, y resulta que hemos recibido sus quejas y ya estamos corrigiendo los errores. Es cierto que el certificado digital no se anunció bien, y por eso pedimos disculpas.', teacher: 'Tú eres Leonor y respondes al concejal con ironía. Tu alumno defiende la gestión sin perder la cortesía.' },
            { q: 'Da tres consejos irónicos a alguien que tiene que hacer un trámite en tu ciudad. · Give three ironic tips.', followUps: ['¿Cuál de los consejos es más injusto?', '¿Cómo lo dirías en serio?'], phrases: ['[[No vaya a ser que|blue]]…', '[[Será muy|blue]]…, pero…', 'Y si [[va y|orange]]…'], hint: 'La ironía está en presentar como riesgo lo que debería ser normal.', example: 'Primero: no pidas cita por internet, no vaya a ser que te la den. Segundo: lleva un libro; la sala de espera será muy moderna, pero las sillas son de 1980. Y tercero: si el funcionario va y te atiende a la primera, haz una foto, porque nadie te va a creer.', next: 'Ahora, el cambio de papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas una anécdota de forma completamente neutra y tu alumno la vuelve a contar con sorpresa, crítica e ironía.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿se nota tu actitud sin que digas «creo» ni «opino»? (Can your stance be heard without “I think”?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La columna de la semana que viene', coach: 'Cuenta, critica y deja que el lector concluya. Tell, criticise, let the reader conclude.',
      steps: [
        { title: 'Tu columna para «El Mirador» · Your column for the magazine', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee la columna en voz alta y tú dices qué actitud percibes en cada párrafo.', self: 'Escribe la columna y toca «Revisar mi texto». Después léela en voz alta: ¿se entiende la ironía sin explicarla? (Does the irony work without being explained?)' } },
          { kind: 'write', title: 'Columna de opinión · Opinion column', situation: 'Leonor está de vacaciones y Gonzalo te pide la columna de la semana que viene para «El Mirador». El tema: los nuevos parquímetros «inteligentes» del ayuntamiento, que iban a acabar con las colas. La leerán vecinos y, probablemente, la concejala de Movilidad. (Write next week’s column on the council’s new “smart” parking meters.)', task: [
            'Abre con la promesa oficial, atribuida y con distancia («iba a…, según…»).',
            'Narra una experiencia propia con sorpresa y desenlace (ir y + verbo, acabar + gerundio).',
            'Critica el discurso oficial con insistencia o distancia (andar + gerundio, dar por, venir a decir, hacer como que).',
            'Incluye una concesión irónica («será muy…, pero…») y cierra con un consejo irónico (no vaya a ser que).',
            'Mantén la crítica en los hechos y la gestión, no en las personas.',
          ], starters: ['El ayuntamiento nos lo anunció con orgullo:…', 'Serán muy inteligentes, no lo dudo. Pero…', 'Mientras tanto, la concejala anda diciendo…', 'El último comunicado viene a decir que…', 'Mi consejo:…'],
            words: ['iba a', 'según', 'va y', 'no hace más que', 'anda diciendo', 'da por', 'viene a decir', 'hace como que', 'a decir verdad', 'acabó', 'no vaya a ser que'],
            model: 'El ayuntamiento nos lo anunció con orgullo: los nuevos parquímetros iban a acabar con las monedas y con las colas, según la concejala de Movilidad. Serán muy inteligentes, no lo dudo. Pero el primer día me acerco al de mi calle, pago con el móvil y el aparato va y me imprime un tique de otra ciudad. Vuelvo a intentarlo y la pantalla no hace más que pedirme una matrícula que ya he escrito tres veces. Mientras tanto, la concejala anda diciendo en la radio que el sistema «aprende de los usuarios». A decir verdad, yo también estoy aprendiendo: he aprendido a aparcar lejos. Lo más curioso es que el ayuntamiento hace como que no ha recibido quejas, aunque los vecinos llegaron a reunir doscientas firmas en una semana. El último comunicado da por superada la fase de pruebas y viene a decir que el problema somos los conductores, que no actualizamos la aplicación. Mi vecino Julián, que no tiene móvil, acabó dejando el coche en el garaje de su cuñado. Mi consejo: lleven monedas en el bolsillo, no vaya a ser que el futuro llegue antes que el tique.',
            minWords: 170,
            checks: [
              { label: 'Una acción inesperada con «ir y» o «coger y» + verbo', pattern: '(?<!\\p{L})(?:va|fue|voy|fui|van|fueron|coge|cogió|cojo|cogí|agarra|agarró)\\s+y\\s+(?:me\\s+|te\\s+|le\\s+|se\\s+|nos\\s+|les\\s+|lo\\s+|la\\s+)?\\p{L}+', tip: 'Narra la sorpresa: «el aparato va y me imprime…».' },
              { label: 'Insistencia o crítica (no hace más que, no deja de, anda + gerundio)', pattern: '(?<!\\p{L})(?:no\\s+(?:hace|hacen|hacía|hacían|hago)\\s+más\\s+que|no\\s+(?:deja|dejan|dejaba|dejaban)\\s+de|(?:anda|andan|andaba|andaban|ando)\\s+\\p{L}+(?:ando|iendo|yendo))(?!\\p{L})', tip: 'Muestra fastidio: «la pantalla no hace más que pedirme…».' },
              { label: 'Distancia (da por + participio, viene a decir, hace como que)', pattern: '(?<!\\p{L})(?:(?:da|dan|daba|daban|dio|dieron)\\s+por\\s+\\p{L}+(?:ado|ada|ados|adas|ido|ida|idos|idas)|vienen?\\s+a\\s+(?:decir|reconocer|ser)|(?:hace|hacen|hacía|hacían|hizo|hicieron)\\s+como\\s+que)(?!\\p{L})', tip: 'Atribuye la valoración a otro: «el comunicado da por superada…».' },
              { label: 'Ironía con tiempo o modo (iba a…, será muy…, no vaya a ser que)', pattern: '(?<!\\p{L})(?:(?:iba|iban)\\s+a\\s+\\p{L}+(?:ar|er|ir)|no\\s+vaya\\s+a\\s+ser\\s+que|(?:será|serán|sería|serían)\\s+muy)(?!\\p{L})', tip: 'Abre con «iban a acabar con las colas, según…» o cierra con «no vaya a ser que…».' },
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
            { tone: 'orange', label: 'SORPRESA Y DESENLACE', formula: 'ir y / coger y + verbo (mismo tiempo) · llegar a + inf. · acabar + gerundio', example: 'La aplicación va y me pide un certificado; al final acabé llamando.', caption: 'Lo inesperado, lo extremo y el resultado final.', en: 'The unexpected (“goes and asks”), the extreme (“even”) and the outcome (“ended up”).' },
            { tone: 'violet', label: 'INSISTENCIA Y CRÍTICA', formula: 'no hacer más que · no dejar de · andar + gerundio · te tengo dicho que', example: 'El concejal anda diciendo por ahí que todo funciona.', caption: 'Repetición con fastidio, reproche o desaprobación; fuera de los textos neutros.', en: 'Repetition with annoyance, reproach or disapproval; keep them out of neutral texts.' },
            { tone: 'teal', label: 'DISTANCIA Y REFORMULACIÓN', formula: 'venir a decir · dar por + participio (concuerda) · hacer como que + indicativo · resulta que', example: 'El comunicado da por resuelta la incidencia.', caption: 'La valoración es del otro; tú la reformulas o la atribuyes.', en: 'The assessment belongs to someone else: you rephrase it or attribute it.' },
            { tone: 'blue', label: 'IRONÍA CON TIEMPO Y MODO', formula: 'iba a + inf. (según X) · será / sería muy…, pero · no vaya a ser que + subj.', example: 'Iba a ser facilísima, según el concejal.', caption: 'Lo dicho choca con lo que el contexto muestra.', en: 'Irony lives in the clash between what is said and what the context shows.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Ante cada frase, pregunta: **¿qué piensa quien habla de lo que cuenta?** Si se sorprende, **ir y**; si se harta, **no hacer más que**; si se distancia, **dar por** o **venir a decir**; si ironiza, busca el **choque** con el contexto. Y en un texto neutro, quita todas.', en: 'For every sentence, ask what the speakers think about what they are telling. Surprise, annoyance, distance and irony each have their forms, and a neutral text removes them all.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'Llevábamos una hora esperando y el técnico ___ que el sistema estaba caído.', options: ['fue a decirnos', 'anduvo diciéndonos', 'fue y nos dijo'], answer: 2, why: 'Sorpresa en la narración: «ir y» + mismo tiempo. «Fue a decirnos» implica desplazamiento.', en: 'And then the technician just told us the system was down.' },
            { prompt: 'Hace como que no me ___ cuando pasa por mi mesa.', options: ['ve', 'vea', 'viera'], answer: 0, why: '«Hacer como que» + indicativo.', en: 'He pretends not to see me.' },
            { prompt: 'El director ___ la reunión, aunque nadie había votado.', options: ['dio por terminado', 'llegó a terminada', 'dio por terminada'], answer: 2, why: '«Dar por + participio», concordando con «la reunión».', en: 'He declared the meeting over.' },
            { prompt: '«Será muy listo, pero…»: ¿qué hace quien habla?', options: ['Concede algo, quizá sin creerlo, para criticar después.', 'Pregunta si es listo.', 'Predice que llegará a ser listo.'], answer: 0, why: 'Futuro concesivo: lo importante va detrás de «pero».', en: 'A concession that prepares a criticism.' },
            { prompt: '«Te tengo dicho que…» se usa para…', options: ['hacer una promesa.', 'hacer un reproche: ya lo has dicho otras veces.', 'dar una información nueva.'], answer: 1, why: '«Tener dicho» presenta lo dicho como repetido y reprocha que no se haya hecho caso.', en: 'What is “te tengo dicho” for?' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro escenario, la misma mirada. New setting, same lens.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: la comunidad de vecinos de tu alumno. Tu alumno reescribe cada frase y explica qué actitud ha quitado o añadido.', self: 'Ahora, en tu comunidad de vecinos: reescribe cada frase según la instrucción. (Your residents’ association.)' } },
          { kind: 'rewrite', title: 'Acta y queja · Minutes and complaint', items: [
            { prompt: 'La administradora anda diciendo que la obra terminará en marzo.', instruction: 'Acta de la reunión, tono neutro: usa «ha comunicado que».', accept: ['La administradora ha comunicado que la obra terminará en marzo'] },
            { prompt: 'El presidente comunicó que la obra estaba terminada.', instruction: 'Carta de queja: distánciate con «dar por» + participio (empieza por «El presidente dio por»).', accept: ['El presidente dio por terminada la obra'] },
            { prompt: 'El vecino del cuarto pone música alta todo el tiempo.', instruction: 'Queja informal: usa «no hacer más que» en presente.', accept: ['El vecino del cuarto no hace más que poner música alta', 'El vecino del cuarto no hace más que poner la música alta'] },
          ] },
        ] },
        { title: 'Ampliación · Los tres sentidos de «no hacer más que» y el registro', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** «No hacer más que» tiene tres lecturas según el contexto: **insistencia** («No hace más que quejarse» = no para de), **limitación** («No hago más que cumplir instrucciones» = solo cumplo) e **inmediatez**, con pretérito y una segunda acción («No hice más que sentarme y sonó el teléfono» = apenas me senté). **2.** «No dejes de» en imperativo no expresa insistencia, sino recomendación: «No dejes de leer la columna» = léela sin falta. **3.** Al pasar a un texto técnico o institucional, estas formas se sustituyen por adverbios y verbos neutros: «no hace más que fallar» → «falla con frecuencia».', en: 'For strong students or spare time. “No hacer más que” has three readings: insistence (“does nothing but”), limitation (“I’m only following instructions”) and immediacy with the preterite (“no sooner had I sat down than the phone rang”). “No dejes de…” as an imperative is a recommendation: “be sure to read it”. In technical or institutional writing, these forms give way to neutral adverbs and verbs.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«No hago más que cumplir instrucciones», dice el funcionario. ¿Qué significa?', options: ['Que acaba de cumplirlas.', 'Que solo cumple instrucciones; no decide él.', 'Que cumple instrucciones sin parar, harto.'], answer: 1, why: 'Lectura limitativa: «no hacer más que» = solo, únicamente. El contexto (una justificación) lo decide.', en: 'He is only following instructions.' },
            { prompt: '«No hice más que sentarme y sonó el teléfono». ¿Qué significa?', options: ['Me senté muchas veces.', 'Apenas me había sentado cuando sonó.', 'Solo me senté; no hice nada más.'], answer: 1, why: 'Con pretérito y una segunda acción coordinada, indica inmediatez: en cuanto me senté.', en: 'No sooner had I sat down than the phone rang.' },
            { prompt: 'Pasa a un informe técnico: «El sistema no hace más que fallar».', options: ['El sistema anda fallando.', 'El sistema va y falla.', 'El sistema falla con frecuencia.'], answer: 2, why: 'El registro técnico pide una formulación neutra; las otras dos opciones mantienen la valoración coloquial.', en: 'Neutral wording for a technical report.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca una columna de opinión real, subraya tres formas de hoy y la reescribe en tres frases neutras para una nota informativa.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 219 · Foco, presuposición y estructura informativa', text: 'Hoy has visto cómo la gramática deja ver la actitud de quien habla: sorpresa, crítica, distancia, ironía. En la clase 219 das el paso siguiente: cómo el orden y la construcción de la frase ponen el **foco** en una información y dan otras por **presupuestas** («Fue Marta quien hizo la propuesta»). Es otra forma de decir más de lo que se dice.', en: 'Today you saw how grammar reveals the speaker’s stance: surprise, criticism, distance, irony. Class 219 takes the next step: how word order and sentence structure put the focus on one piece of information and take others for granted (“It was Marta who made the proposal”). Another way of saying more than the words say.', href: '/gramatica/foco-presuposicion-y-estructura-informativa', label: 'Ir a la clase 219' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “El concejal ha dicho que funciona”, “El concejal anda diciendo que funciona” y “El concejal da por hecho que funciona”?». Respuesta esperada: información neutra; crítica a quien lo repite; valoración atribuida al concejal, de la que quien habla se distancia. Tarea: la columna de Escribir.' },
        ] },
      ],
    },
  ],
};
