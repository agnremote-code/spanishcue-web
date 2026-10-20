import type { LiveLesson } from '../types';

/**
 * Lesson 499 · C1 · Estilo coloquial: estructuras expresivas y suspensión (course unit G199).
 * Builds on G125 (g425: anecdotes, «total, que»), G156 / G170 (g456, g470: «y eso que»),
 * G192 (g492: intensification; its Ampliación previewed suspended «¡Hacía un frío…!» and
 * «con lo bien que…») and G198 (formal style, the opposite register). Grammar of colloquial
 * spoken Spanish (Briz; NGLE): pseudo-coordinated «ir y + verb» (va y se pone / fue y se puso,
 * both verbs in the same tense and person; «coge y» in Spain, «agarra y» in many parts of
 * Latin America); «con lo + agreeing adjective / adverb + que» + indicative, concessive
 * (Con lo tarde que era, va y…) or causal (Con lo cansada que estoy, no salgo); receptive
 * «de + adjective + que» (De despistado que es…); suspended sentences and what they imply
 * (Es que…, ¡Si yo te contara!, Como no te des prisa…, Tiene un genio…, Con lo que yo he
 * hecho por ti…); «es que» as justification; «encima», «total, que», «y eso que» recalled;
 * «o sea», «pues nada», «es más»; initial «que» (¡Que te calles!, Que si vienes mañana,
 * ¿Que no lo sabías?) and repetition (Que sí, que sí); diminutives that soften (un momentito,
 * un poquito); «¡Anda que…!» / «¡Anda que no…!» marked as typical of Spain. Register
 * judgement throughout: none of this belongs in a formal email. Ampliación: formal
 * equivalents for an email to the property manager.
 * Scene: the writers' room of «Escalera B», a comedy web series set in a Madrid building.
 * Lucía Ferrer (head writer, Madrid) rewrites the stiff dialogue of Gabriel Ortega
 * (co-writer, Guadalajara). Explorar: a scene of the series (Encarna, an older neighbour, and
 * Dani, a young one, on the landing). Escuchar: Lucía's voice message to Gabriel about a real
 * night in her own building (es-ES-ElviraNeural, one voice). Escribir: a long message telling
 * a friend an anecdote.
 */
export const lesson: LiveLesson = {
  id: 499,
  level: 'C1',
  title: 'Estilo coloquial: estructuras expresivas y suspensión',
  subtitle: 'Contar y reaccionar como en la conversación real (va y…, con lo… que, frases suspendidas) y saber cuándo no usarlo.',
  legend: [
    { tone: 'blue', label: 'RELATO VIVO · va y + verbo, encima, y eso que, total que (telling a story with life)' },
    { tone: 'teal', label: 'GRADO EXPRESIVO · con lo tarde que era, de despistado que es (degree as reason or contrast)' },
    { tone: 'violet', label: 'SUSPENDER Y SUAVIZAR · ¡Si yo te contara…!, Como no…, un momentito (unfinished sentences, softeners)' },
    { tone: 'orange', label: 'MARCADORES Y «QUE» · es que, o sea, pues nada, es más, ¡anda que…!, ¡que te calles! (conversation markers)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Así no habla nadie en un portal', coach: 'Lo coloquial también tiene gramática. Colloquial speech has grammar too.',
      steps: [
        { title: 'Un guion demasiado correcto · A script that is too correct', blocks: [
          { kind: 'lead', text: 'Madrid. **Lucía Ferrer** dirige el equipo de guion de «Escalera B», una serie de humor que pasa en un edificio de vecinos. **Gabriel Ortega**, guionista de Guadalajara (México), ha escrito la primera escena de **Encarna**, la vecina del tercero. Todo es correcto… y nadie habla así en un rellano. Hoy aprendes la gramática de la conversación espontánea: cómo se cuenta con viveza, cómo se deja una frase **en suspenso** para que el otro la complete y, sobre todo, **dónde no** usar nada de esto.', en: 'The writers’ room of a comedy web series set in a Madrid apartment building. Gabriel’s first scene is grammatically flawless but sounds like a police report. Today you learn the grammar of spontaneous conversation: how people tell stories vividly, how they leave sentences hanging for the listener to finish, and, just as important, where none of this belongs.' },
          { kind: 'compare', title: 'La misma anécdota, dos versiones · The same story, two versions', columns: [
            { tone: 'neutral', label: 'GUION DE GABRIEL', sentence: 'Aunque era muy tarde, el vecino nuevo empezó a llamar a todos los timbres. Además, venía cantando. En resumen, no pude dormir.', idea: 'Correcto, pero suena a informe: los conectores son de texto escrito.', en: 'Correct, but it reads like a report: aunque, además and en resumen are the connectors of careful written prose.' },
            { tone: 'blue', label: 'VERSIÓN DE LUCÍA', sentence: '[[Con lo tarde que era|teal]], el nuevo [[va y se pone|blue]] a llamar a todos los timbres. Y [[encima|blue]] venía cantando, con una voz… [[Total, que|blue]] no pegué ojo.', idea: 'El grado se vuelve sorpresa, la acción parece inesperada, la frase queda abierta y el cierre resume.', en: 'The degree becomes a surprise, the action sounds sudden and outrageous, one sentence is left hanging for the listener, and total, que wraps the story up.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué añade «va y se pone a llamar» frente a «empezó a llamar»?', options: ['Que el vecino se fue a otro sitio a llamar.', 'Que la acción todavía no ha ocurrido.', 'Que la acción es inesperada o sorprendente para quien lo cuenta.'], answer: 2, why: '«Ir y + verbo» no expresa movimiento: presenta la acción como repentina o inesperada.', en: 'Va y + verb does not mean anyone went anywhere: it frames the action as sudden or outrageous.' },
            { prompt: '«Con una voz…» se entiende como…', options: ['Con una voz normal.', 'Con una voz tan mala (o tan fuerte) que no hay palabras.', 'Con la voz de otra persona.'], answer: 1, why: 'Es una frase suspendida: la entonación pide al oyente que imagine el grado.', en: 'A suspended phrase: the intonation asks the listener to imagine just how bad it was.' },
          ] },
        ] },
        { title: '«Va y…» y el relato vivo · Telling a story with life', mascot: '/brand/mascot/studying.webp', coach: '¿Qué pasó de repente? What happened out of the blue?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'IR Y + VERBO · ENCIMA · Y ESO QUE · TOTAL, QUE', question: '¿Quieres que lo que cuentas suene repentino, injusto o sorprendente?', en: 'In pseudo-coordination, ir y + verb (va y se pone, fue y se puso) does not describe any movement: it presents the second action as sudden, unexpected or outrageous. Both verbs share tense and person. Encima adds one more grievance (“on top of that”), y eso que + indicative adds an afterthought that makes the fact more surprising (“even though”), and total, que wraps the story up and jumps to the result. All of them are colloquial and very frequent in spoken narrative.', formula: ['ir y + verbo en el mismo tiempo y persona: va y se pone · fue y se puso · voy y le digo', 'hecho + y encima + otro hecho (algo más, normalmente negativo)', 'hecho + y eso que + indicativo · Total, que + resultado'],
            meaning: '**Ir y + verbo** no significa desplazarse: convierte la acción en algo **repentino o inesperado**. Los dos verbos comparten **tiempo y persona**: «va y se pone» (presente narrativo), «fue y se puso» (pasado). **Encima** suma un agravio más. Ya conoces **y eso que** (clases 156 y 170): añade, como de pasada, un dato que hace más sorprendente lo anterior, siempre con **indicativo**. Y **total, que** (clase 125) cierra el relato y salta al resultado.',
            examples: [
              { es: 'Le dijimos que bajara la música y [[fue y|blue]] la subió.', en: 'We told him to turn it down and he went and turned it up: both verbs in the past.' },
              { es: 'Estamos cenando tranquilos y Paco [[va y|blue]] se pone a hablar de política.', en: 'The narrative present makes the story vivid; ir stays in the present too.' },
              { es: 'Llegó a la una y [[encima|blue]] sin llaves. · Se quejó del ruido, [[y eso que|blue]] él pone la tele altísima.', en: 'Encima adds insult to injury; y eso que adds an ironic fact (“and he’s the one who…”).' },
              { es: 'Esperamos al fontanero toda la mañana. [[Total, que|blue]] no vino.', en: 'Total, que skips the details and lands on the outcome.' },
            ] },
          { kind: 'table', title: '«Ir y + verbo» en el relato · The ir y pattern', head: ['Relato', 'Ejemplo', 'Ojo · Note'], rows: [
            ['presente narrativo', 'Y entonces [[va y|blue]] me cuelga.', 'muy frecuente: el pasado contado en presente (lo verás en la clase 200)'],
            ['pretérito', 'Y entonces [[fue y|blue]] me colgó.', 'los dos verbos en pretérito: nunca *va y me colgó'],
            ['primera persona', '[[Voy y|blue]] le digo que no. · [[Fui y|blue]] le dije que no.', 'también para uno mismo: «and I just went and told him no»'],
            ['variantes', 'Y [[coge y|blue]] se va. · Y [[agarra y|blue]] se va.', 'coger y… es frecuente en España; agarrar y…, en muchas zonas de América'],
          ], note: 'Sin pausa entre «va» y «y»: si alguien de verdad se desplaza («Va al portal y llama»), no es esta estructura.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lo cuenta en pasado: «Le dije que no pasaba nada y ___ se echó a llorar».', options: ['iba y', 'va y', 'fue y'], answer: 2, why: 'Relato en pretérito: ir también en pretérito, «fue y se echó».', en: 'In a past-tense story, ir also goes in the preterite: fue y se echó a llorar.' },
            { prompt: '«Encarna se queja del perro del quinto, y eso que ella ___ tres gatos».', options: ['tiene', 'tuviera', 'tenga'], answer: 0, why: '«Y eso que» presenta un hecho: indicativo.', en: 'Y eso que introduces a fact, so the verb is indicative: she has three cats herself.' },
          ] },
        ] },
        { title: 'Con lo tarde que era · Degree as a reason or a contrast', mascot: '/brand/mascot/speaking.webp', coach: '¿Por eso, o a pesar de eso? Because of it, or in spite of it?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CON LO + ADJETIVO / ADVERBIO + QUE · DE + ADJETIVO + QUE', question: '¿Quieres presentar un grado alto como razón de algo, o como algo que lo hace más extraño?', en: 'Con lo + adjective or adverb + que + indicative takes the degree you saw in class 192 (lo tarde que era) and turns it into a reason (“seeing how tired I am…”) or a contrast (“late as it was, he still…”); context decides which. The adjective agrees with its noun. Con lo que + verb and con la de + noun + que work the same way with actions and quantities. De + adjective + que (de despistado que es) gives a cause: he is so absent-minded that…; it is mainly for recognition at this level.', formula: ['con lo + adjetivo concordado / adverbio + que + indicativo', 'valor concesivo: Con lo tarde que era, va y llama (= aunque era tan tarde)', 'valor causal: Con lo cansada que estoy, no salgo (= como estoy tan cansada)', 'de + adjetivo + que + verbo: De despistado que es, se dejó las llaves (= es tan despistado que…)'],
            meaning: 'En la clase 192 viste el grado ponderado: «No sabes **lo tarde que era**». Con **con** delante, ese grado se convierte en el **marco** de otra frase. Si lo que sigue es lo **contrario** de lo esperable, el valor es **concesivo**: «**Con lo tarde que era**, va y se pone a llamar» (aunque era tan tarde). Si lo que sigue es la **consecuencia** lógica, es **causal**: «**Con lo cansada que estoy**, hoy no salgo». El adjetivo **concuerda** y el verbo va en **indicativo**. Con verbos: «**Con lo que** has estudiado, aprobarás». En **de + adjetivo + que**, el grado es la causa: «**De despistado que es**, llamó a su propia puerta».',
            examples: [
              { es: '[[Con lo tímida que es|teal]] Merche, va y le canta las cuarenta al presidente de la comunidad.', en: 'Concessive: shy as she is, she gave the residents’ president a piece of her mind (cantar las cuarenta = to tell someone off).' },
              { es: '[[Con lo bien que|teal]] se está en casa, ¿para qué vamos a salir con este frío?', en: 'Causal: seeing how nice it is at home, why go out? With an adverb nothing agrees.' },
              { es: '[[Con lo que|teal]] pagamos de comunidad, el ascensor debería funcionar.', en: 'Con lo que + verb: given how much we pay in building fees…' },
              { es: '[[De cansada que estaba|teal]], se quedó dormida en la reunión de vecinos.', en: 'De + agreeing adjective + que: she was so tired that she fell asleep. A variant is de lo cansada que estaba.' },
            ] },
          { kind: 'compare', title: '¿Concesivo o causal? · Despite or because?', columns: [
            { tone: 'teal', label: 'CONCESIVO (a pesar de)', sentence: '[[Con lo caro que es|teal]] el piso, tiene unas goteras…', idea: 'Lo esperable sería un piso perfecto: lo que sigue sorprende.', en: 'Expensive as the flat is, it leaks: the second part goes against what the degree leads you to expect.' },
            { tone: 'teal', label: 'CAUSAL (como)', sentence: '[[Con lo caro que es|teal]] el piso, no sé si podré quedarme.', idea: 'El precio explica la consecuencia: es la razón.', en: 'Seeing how expensive the flat is, I may not be able to stay: the degree is the reason.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Merche, de sí misma: «Con lo ___ que soy, no me atreví a quejarme».', options: ['tímido', 'tímida', 'tímidamente'], answer: 1, why: 'El adjetivo concuerda con Merche (femenino), aunque «lo» sea neutro.', en: 'The adjective agrees with Merche, even though lo is neuter.' },
            { prompt: '«Con lo puntual que es Paco, hoy ha llegado tarde». El valor es…', options: ['causal: llegó tarde porque es puntual.', 'concesivo: a pesar de ser tan puntual, llegó tarde.', 'temporal: cuando es puntual.'], answer: 1, why: 'Lo que sigue va contra lo esperable: concesivo.', en: 'Punctual as he is, Paco was late: the fact goes against expectations, so it is concessive.' },
          ] },
        ] },
        { title: 'Frases suspendidas · Sentences left hanging', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lo que no se dice también se entiende. What goes unsaid is still understood.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'SUSPENSIÓN · ES QUE…', question: '¿Qué quiere que entienda el oyente con la parte que no dice?', en: 'Spoken Spanish often leaves a sentence unfinished on purpose. The listener completes it from context and intonation: an excuse (Es que mañana madrugo… = so I can’t), a story too big to tell (¡Si yo te contara…!), a warning (Como no te des prisa… = or else), an intensity beyond words (Tiene un genio…), or a reproach (Con lo que yo he hecho por ti…). Es que on its own is the standard way to justify or excuse yourself without saying no directly.', formula: ['Es que + razón (…) → justificación o excusa', '¡Si yo te contara…! (si + imperfecto de subjuntivo) → hay demasiado que contar', 'Como no + presente de subjuntivo… → aviso o amenaza', 'un(a) + nombre… · Con lo que yo… → intensidad · reproche'],
            meaning: 'La conversación deja muchas frases **sin terminar a propósito**: la entonación y el contexto bastan. **Es que…** justifica o excusa sin decir «no»: «—¿Vienes a la junta? —**Es que** tengo turno de noche…». **¡Si yo te contara!** (imperfecto de subjuntivo) anuncia que hay mucho y muy fuerte que contar. **Como no** + presente de subjuntivo es una condición negativa («si no…») cuya consecuencia se calla: «**Como no te des prisa**…». **Un(a) + nombre** con entonación suspendida intensifica: «Tiene **un genio**…», «Había **una cola**…». Y **Con lo que yo** + verbo… reprocha.',
            examples: [
              { es: '—¿Me ayudas con la mudanza el sábado? —[[Es que|orange]] tengo la boda de mi prima…', en: 'An excuse: the no is never said, but it is understood.' },
              { es: '¿Que qué tal la junta de vecinos? [[¡Si yo te contara…!|violet]]', en: 'How did the residents’ meeting go? If only you knew! There is a lot, and none of it good.' },
              { es: '[[Como no bajes|violet]] la música, llamo al administrador. · [[Como no bajes|violet]] la música…', en: 'Como no + present subjunctive = if you don’t; the threat can be said or left in the air.' },
              { es: 'El del primero tiene [[un genio…|violet]] · [[¡Con lo que yo|violet]] he hecho por ti…!', en: 'He has such a temper (you can imagine). / After everything I’ve done for you… (and this is how you repay me).' },
            ] },
          { kind: 'table', title: 'Lo que se sobrentiende · What is understood', head: ['Frase suspendida', 'Se sobrentiende…', 'Sirve para…'], rows: [
            ['Es que mañana madrugo…', '…así que no puedo, no voy', 'excusarse sin decir «no» · to make an excuse'],
            ['¡Si yo te contara…!', '…no te lo creerías', 'anunciar algo fuerte, crear intriga · to tease a story'],
            ['Como no te des prisa…', '…vas a perder el tren / te vas a enterar', 'avisar o amenazar, en broma o en serio · to warn'],
            ['Tiene un genio… · Hacía un frío…', '…tan grande que no hay palabras', 'intensificar (ya lo viste en la clase 192) · to intensify'],
            ['Con lo que yo he hecho por ti…', '…y tú me pagas así', 'reprochar · to reproach'],
          ], note: 'Por escrito se marca con puntos suspensivos (…). En España es muy frecuente también «Tiene una cara…» (tener cara = no tener vergüenza).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Vienes a cenar con nosotros? —«Es que he quedado con mi hermana…». ¿Qué quiere decir?', options: ['Que no va, y se justifica sin decirlo directamente.', 'Que todavía no sabe si va.', 'Que va a cenar con ellos y con su hermana.'], answer: 0, why: '«Es que» introduce la razón; el «no» queda sobrentendido.', en: 'Es que gives the reason and leaves the refusal unsaid.' },
            { prompt: 'Encarna, a Dani: «Como no me devuelvas la escalera…». Se entiende…', options: ['una pregunta: ¿cómo se la va a devolver?', 'una comparación: igual que la escalera.', 'una amenaza en broma: si no se la devuelve, habrá consecuencias.'], answer: 2, why: 'Como no + presente de subjuntivo = «si no…»; la consecuencia se calla.', en: 'Como no + present subjunctive means “if you don’t”; the consequence is left unsaid.' },
          ] },
        ] },
        { title: 'Marcadores, «que» y diminutivos · Markers, que and diminutives', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Reformulas, cierras, insistes o suavizas? Rephrasing, closing, insisting or softening?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'O SEA · PUES NADA · ES MÁS · QUE INICIAL · DIMINUTIVOS', question: '¿Qué haces con la frase: sacar una conclusión, cerrar, subir el argumento, insistir o suavizar?', en: 'O sea (que) rephrases or draws a conclusion (“so what you’re saying is…”). Pues nada closes a topic or accepts something with resignation (“oh well”). Es más raises the stakes with a stronger point (“in fact”). A sentence starting with que repeats an order (¡Que te calles! = I said be quiet), relays or repeats a question (Que si vienes mañana = she’s asking whether…), or echoes something with surprise (¿Que no lo sabías?). Repetition insists (Que sí, que sí). A diminutive often softens a request or a criticism rather than meaning “small”.', formula: ['o sea (que) + conclusión · pues nada + cierre · es más + argumento más fuerte', '¡Que + subjuntivo! (orden repetida) · Que si… (pregunta transmitida) · ¿Que…? (eco de sorpresa)', 'diminutivo atenuador: un momentito, un poquito, una ayudita'],
            meaning: '**O sea (que)** reformula o saca la conclusión: «**O sea, que** no vienes». **Pues nada** cierra un tema o acepta con resignación: «**Pues nada**, me voy». **Es más** sube el argumento: «No me apetece. **Es más**, no pienso ir». **Que** al principio repite una orden («¡**Que te calles**!»), transmite una pregunta («**Que si** vienes mañana», dice tu madre) o devuelve con sorpresa lo que se ha oído («¿**Que** no lo sabías?»). La **repetición** insiste: «**Que sí, que sí**, que ya voy». El **diminutivo** muchas veces no indica tamaño: **suaviza** una petición o una crítica: «¿Me esperas **un momentito**?», «La sopa está **un poquito** sosa».',
            examples: [
              { es: '[[O sea, que|orange]] el ascensor sigue roto. [[Pues nada|orange]], subimos andando.', en: 'So the lift is still broken. Oh well, we’ll take the stairs.' },
              { es: 'No me gusta la idea. [[Es más|orange]], me parece peligrosa.', en: 'Es más adds a stronger point; it also works in careful speech and writing.' },
              { es: '[[¡Que te calles!|orange]] · [[Que si|orange]] vienes a comer el domingo. · [[¿Que|orange]] te han subido el alquiler?', en: 'I said be quiet! / She’s asking if you’re coming for lunch on Sunday. / They’ve put your rent up? (surprise)' },
              { es: '¿Me echas [[una manita|violet]] con la mesa? Es [[un poquito|violet]] pesada.', en: 'The diminutives soften the request; in fact the table is heavy.' },
            ] },
          { kind: 'tip', icon: '🇪🇸', title: '¡Anda que…! (sobre todo en España) · Mainly in Spain', text: 'En el español de **España** es muy frecuente **¡Anda que + verbo!** para **reprochar** con ironía lo que el otro **no** hizo: «¡**Anda que me avisas**!» (= no me avisaste). Con **no**, al revés, afirma con fuerza: «¡**Anda que no** ha llovido desde entonces!» (= ha pasado muchísimo tiempo). Fuera de España su uso es mucho menor y varía según la zona: reconócelo, pero no lo uses como fórmula general. Los diminutivos también varían: **-ito** es general; **-illo** es frecuente en Andalucía, y **-ico** en zonas como Aragón, Murcia, Colombia o Costa Rica (un momentico).', en: 'In Spain, ¡Anda que + verb! ironically reproaches what someone failed to do (“thanks for telling me!”), while ¡Anda que no…! is an emphatic yes. Outside Spain it is much less common and usage varies, so recognise it rather than use it as a general formula. Diminutive suffixes also vary by region.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En Madrid, Encarna a su hijo: «¡Anda que me llamas!». Quiere decir…', options: ['que la llama mucho.', 'que nunca la llama: es un reproche irónico.', 'que la llame ahora mismo.'], answer: 1, why: '¡Anda que + verbo! reprocha con ironía lo que el otro no hace.', en: 'An ironic complaint: you never call me.' },
            { prompt: 'Tu madre le pregunta a tu pareja desde la cocina: «¿Vienes el domingo?». Tu pareja no la oye y tú se lo repites:', options: ['«Es más, vienes el domingo».', '«Que si vienes el domingo».', '«Si vienes el domingo, que».'], answer: 1, why: '«Que si…» transmite o repite una pregunta de sí o no.', en: 'Que si… relays or repeats a yes-no question.' },
          ] },
        ] },
        { title: 'Errores y registro · Mistakes and register', mascot: '/brand/mascot/kneeling.webp', coach: 'Natural sí, fuera de lugar no. Natural, yes; out of place, no.', blocks: [
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Le pedimos silencio y va y se puso a gritar.', right: 'Le pedimos silencio y fue y se puso a gritar. / …y va y se pone a gritar.', why: 'En «ir y + verbo» los dos verbos comparten tiempo y persona.' },
            { wrong: 'Con lo tarde que fuera, se puso a llamar.', right: 'Con lo tarde que era, se puso a llamar.', why: '«Con lo… que» presenta un hecho: indicativo.' },
            { wrong: 'Con lo cansado que estaba, Merche no bajó. (Merche es una mujer)', right: 'Con lo cansada que estaba, Merche no bajó.', why: 'El adjetivo concuerda con la persona de la que se habla.' },
            { wrong: 'Se quejó del ruido, y eso que él sea el más ruidoso.', right: 'Se quejó del ruido, y eso que él es el más ruidoso.', why: '«Y eso que» añade un hecho: indicativo.' },
            { wrong: '¡Si yo te contaría lo de la junta!', right: '¡Si yo te contara lo de la junta!', why: 'Detrás de este «si» va imperfecto de subjuntivo, nunca condicional.' },
            { wrong: 'Estimada señora: Total, que el ascensor sigue roto y encima nadie nos dice nada.', right: 'Estimada señora: En definitiva, el ascensor sigue averiado y, además, no hemos recibido ninguna información.', why: 'Registro: en un correo formal no se usan total que, encima ni frases suspendidas.' },
          ] },
          { kind: 'decide', title: '¿Encaja aquí? · Does it fit here?', steps: [
            { q: '¿Hablas o escribes un mensaje a alguien de confianza? (Talking or texting someone close?)', yes: 'Adelante: va y, con lo… que, es que, total que, frases suspendidas.', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Es un texto formal: correo a una administración, informe, reclamación? (A formal text?)', yes: 'Evítalos: en definitiva, además, a pesar de que, ya que (clase 198).', no: 'Registro intermedio: o sea y es más pueden funcionar; va y, encima y la suspensión, con cuidado.' },
            { q: '¿Es un rasgo de una zona (¡anda que…!, coge y…)? (Is it regional?)', yes: 'Úsalo si es tu variedad o la de tu interlocutor; si no, elige una forma general.', no: 'Es general: sirve en todo el mundo hispanohablante.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien?', options: ['Con lo simpática que sea, va y no me saluda.', 'Con lo simpática que es, fue y no me saluda.', 'Con lo simpática que es, va y no me saluda.'], answer: 2, why: 'Indicativo tras «con lo… que» y los dos verbos de «ir y» en el mismo tiempo.', en: 'Indicative after con lo… que, and both verbs of the ir y pattern in the same tense.' },
            { prompt: 'Correo a la empresa de mantenimiento: ¿qué frase encaja?', options: ['Les informo de que el portero automático no funciona desde el lunes.', 'O sea, que el portero automático está fatal.', 'Es que el portero automático no va…'], answer: 0, why: 'Registro formal: sin es que, o sea ni suspensión.', en: 'A formal email to a company needs neutral, complete sentences.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en un minuto algo molesto que le pasó con un vecino o un compañero, con un «va y», un «con lo… que» y una frase suspendida.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Escena 1: el rellano', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'La escena de Lucía · Lucía’s scene', blocks: [
          { kind: 'guide', text: { teacher: 'Leen la escena con papeles: tú eres Dani; tu alumno es Encarna, con la entonación de las frases suspendidas. Después tu alumno toca cada expresión marcada y explica qué aporta.', self: 'Lee la escena en voz alta, con la entonación de las frases suspendidas. Después toca cada expresión marcada y explica qué aporta.' } },
          { kind: 'explore', title: '«Escalera B» · Capítulo 1, escena 1', setting: 'Un rellano de un edificio antiguo de Madrid, a las nueve de la mañana. Encarna, del tercero, sube cargada con la compra; Dani, el vecino joven del segundo, baja con prisa.', lines: [
            { who: 'Dani', text: 'Buenos días, Encarna. ¿Qué tal ha dormido?', en: 'Morning, Encarna. Did you sleep well?' },
            { who: 'Encarna', text: '¿Dormir? [[¡Si yo te contara…!|violet]] ¿Tú no oíste nada anoche?', en: 'Sleep? If only you knew! Didn’t you hear anything last night?' },
            { who: 'Dani', text: 'Nada, yo duermo con tapones. ¿Qué pasó?', en: 'Nothing, I sleep with earplugs. What happened?' },
            { who: 'Encarna', text: 'El nuevo del cuarto B. A la una de la mañana, [[con lo tarde que era|teal]], [[va y se pone|blue]] a llamar a todos los timbres.', en: 'The new guy in 4B. At one in the morning, late as it was, he goes and starts ringing every doorbell.' },
            { who: 'Dani', text: '¿A todos? ¿Y eso?', en: 'Every one? How come?' },
            { who: 'Encarna', text: '[[Es que|orange]] se había dejado las llaves dentro. Y [[encima|blue]] venía cantando, [[con una voz…|violet]]', en: 'Well, he’d left his keys inside. And on top of that he was singing, with a voice like… you can imagine.' },
            { who: 'Dani', text: 'Bueno, mujer, eso le puede pasar a cualquiera.', en: 'Come on, that could happen to anyone.' },
            { who: 'Encarna', text: 'A cualquiera, no. [[De despistado que es|teal]], llamó hasta a su propia puerta. [[Es más|orange]]: insistió un buen rato.', en: 'Not to anyone. He’s so absent-minded he even rang his own doorbell. In fact, he kept at it for quite a while.' },
            { who: 'Dani', text: '[[O sea, que|orange]] no había nadie para abrirle.', en: 'So there was nobody to let him in.' },
            { who: 'Encarna', text: 'Nadie. Paco, el del primero, lo dejó dormir en su sofá, [[y eso que|blue]] no lo conoce de nada. [[Total, que|blue]] a las tres seguía yo despierta.', en: 'Nobody. Paco from the first floor let him sleep on his sofa, even though he doesn’t know him from Adam. Anyway, at three I was still awake.' },
            { who: 'Dani', text: '[[Pues nada|orange]], yo me voy, que llego tarde.', en: 'Right, well, I’m off, I’m running late.' },
            { who: 'Encarna', text: '¿Y me vas a dejar aquí con las bolsas? [[¡Anda que|orange]] te ofreces…! Venga, súbeme esta, que pesa [[un poquito|violet]].', en: 'And you’re leaving me here with the bags? Thanks for offering! Go on, carry this one up for me, it’s a little heavy.' },
          ], notes: {
            '¡Si yo te contara…!': '**Si + imperfecto de subjuntivo** suspendido: hay tanto que contar que no cabe en una respuesta. Crea intriga.',
            'con lo tarde que era': '**Con lo + adjetivo + que + indicativo**, valor **concesivo**: a pesar de lo tarde que era. Lo esperable era no molestar.',
            'va y se pone': '**Ir y + verbo** en presente narrativo: la acción es repentina e indignante. Los dos verbos en presente.',
            'Es que': '**Es que** + razón: explica (y casi disculpa) lo que pasó.',
            'encima': '**Encima**: suma otro agravio, «y para colmo».',
            'con una voz…': '**Suspensión** con un + nombre: el oyente imagina lo mala que era la voz. La entonación hace el trabajo.',
            'De despistado que es': '**De + adjetivo + que**: el grado como causa, «es tan despistado que…». El adjetivo concuerda con el vecino.',
            'Es más': '**Es más**: añade un argumento más fuerte que el anterior.',
            'O sea, que': '**O sea, que** saca la conclusión de lo que ha contado Encarna.',
            'y eso que': '**Y eso que** + indicativo: el dato que hace más sorprendente la generosidad de Paco.',
            'Total, que': '**Total, que** cierra el relato y salta al resultado: no durmió.',
            'Pues nada': '**Pues nada**: cierra la conversación para despedirse.',
            '¡Anda que': '**¡Anda que + verbo!** (sobre todo en España): reproche irónico, «no te ofreces a ayudarme». Encarna habla como una madrileña de toda la vida.',
            'un poquito': '**Diminutivo atenuador**: suaviza la petición. En realidad, la bolsa pesa bastante.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué llamó el vecino nuevo a todos los timbres?', options: ['Porque se había dejado las llaves dentro.', 'Porque se había perdido en el edificio.', 'Porque había una fiesta en su piso.'], answer: 0, why: '«Es que se había dejado las llaves dentro».', en: 'Why did the new neighbour ring all the doorbells?' },
            { prompt: '¿Dónde durmió al final?', options: ['En la escalera.', 'En el sofá de Paco, el del primero.', 'En casa de Encarna.'], answer: 1, why: '«Paco, el del primero, lo dejó dormir en su sofá».', en: 'Where did he end up sleeping?' },
            { prompt: '¿Qué le reprocha Encarna a Dani al final?', options: ['Que no se ofrece a ayudarla con la compra.', 'Que llega tarde a todas partes.', 'Que no oyó nada por la noche.'], answer: 0, why: '«¡Anda que te ofreces…!»: reproche irónico por no ofrecerse.', en: 'What does Encarna complain about at the end?' },
          ] },
        ] },
        { title: 'Después de la lectura · After the read-through', mascot: '/brand/mascot/seated.webp', coach: 'Los guionistas, por mensajes. The writers, texting.', blocks: [
          { kind: 'chat-fill', title: 'Gabriel y Lucía · Gabriel and Lucía', lines: [
            { who: 'Gabriel', text: 'Lucía, leí tu versión. Ahora sí suena a vecina de verdad.' },
            { who: 'Lucía', text: '¿A que sí? Y en la lectura la actriz ___ improvisó un «¡anda que te ofreces!» que no estaba en el guion.', options: ['va y', 'fue y', 'es que'], answer: 1, why: 'Relato en pasado (improvisó): ir también en pretérito, «fue y improvisó».' },
            { who: 'Gabriel', text: 'Me encanta. ___ yo no lo habría escrito nunca: en mi casa no lo he oído jamás.', options: ['Es más', 'Es que', 'Total, que'], answer: 1, why: '«Es que» justifica: explica por qué él no lo habría escrito.' },
            { who: 'Lucía', text: 'Lo sé. ___ poco que se usa fuera de España, mejor que lo diga solo Encarna, que es de Madrid.', options: ['Y eso que', 'De', 'Con lo'], answer: 2, why: '«Con lo poco que se usa» presenta el grado como razón (causal).' },
            { who: 'Gabriel', text: 'Perfecto. ___, te mando la escena dos mañana.', options: ['Encima', 'Pues nada', 'O sea, que'], answer: 1, why: '«Pues nada» cierra la conversación y pasa a la despedida.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica qué diría Gabriel, de Guadalajara, en lugar de «¡anda que te ofreces!» (por ejemplo, «¡Ni me ayudas!» o «¿No me vas a ayudar?»). No hay una única respuesta.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Contar, suspender, marcar, elegir registro. Tell, suspend, mark, choose the register.',
      steps: [
        { title: '¿Qué se sobrentiende? · What is implied?', blocks: [
          { kind: 'classify', title: 'Frases del grupo de vecinos · Lines from the neighbours’ chat', categories: [
            { id: 'excusa', label: 'Excusa o justificación (an excuse)', tone: 'orange' },
            { id: 'aviso', label: 'Aviso o amenaza (a warning)', tone: 'violet' },
            { id: 'intensidad', label: 'Intensidad o intriga: hay tanto que ni te lo imaginas (so much…)', tone: 'teal' },
            { id: 'reproche', label: 'Reproche (a complaint at someone)', tone: 'blue' },
          ], items: [
            { text: '—¿Vienes a la junta de vecinos? —Es que tengo turno de noche…', answer: 'excusa', why: '«Es que» da la razón y deja el «no» sin decir.' },
            { text: 'Como vuelvas a aparcar en mi plaza…', answer: 'aviso', why: 'Como + presente de subjuntivo: condición negativa con la consecuencia callada.' },
            { text: 'Hacía un calor en la azotea…', answer: 'intensidad', why: 'Un + nombre suspendido: tanto calor que no hay palabras.' },
            { text: '¡Con lo que yo te ayudé con la mudanza…!', answer: 'reproche', why: 'Se sobrentiende «…y ahora tú no me ayudas».' },
            { text: 'Si yo te contara lo que pasa en el quinto…', answer: 'intensidad', why: 'Anuncia que hay mucho y muy fuerte que contar.' },
            { text: '¡Anda que me avisas de que venía el fontanero!', answer: 'reproche', why: '¡Anda que + verbo! (España): reproche irónico, «no me avisaste».' },
          ] },
        ] },
        { title: 'Elige la forma · Choose the form', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', items: [
            { context: 'Dani cuenta en pasado lo que pasó con el casero. (Dani tells, in the past, what happened with the landlord.)', prompt: '«Le pedimos que arreglara la caldera y ___ nos subió el alquiler».', options: ['fue y', 'va y', 'iba y'], answer: 0, why: 'Relato en pretérito (pedimos, subió): ir en el mismo tiempo, «fue y».', en: 'In a past-tense story, both verbs go in the preterite.' },
            { prompt: '«Con lo ___ que es Merche, no me esperaba que gritara así».', options: ['tranquilamente', 'tranquila', 'tranquilo'], answer: 1, why: 'El adjetivo concuerda con Merche: tranquila.', en: 'Calm as Merche is, I didn’t expect her to shout like that.' },
            { prompt: '«Suspendí el examen de conducir, y eso que ___ todo el mes».', options: ['practique', 'practiqué', 'practicara'], answer: 1, why: '«Y eso que» + indicativo: es un hecho.', en: 'I failed my driving test, even though I practised all month.' },
            { prompt: 'Una vecina, al del cuarto: «Como no bajes la música…». ¿Qué significa?', options: ['Como la música no te gusta, bájala.', 'Si no bajas la música, voy a hacer algo (protestar, llamar…).', 'Baja la música como yo.'], answer: 1, why: 'Como no + subjuntivo = si no…; la consecuencia queda en el aire.', en: 'If you don’t turn it down… (or else).' },
            { prompt: 'Correo a la administradora de la finca: ¿qué frase encaja?', options: ['O sea, que el ascensor está fatal.', 'Total, que el ascensor sigue roto.', 'En resumen, el ascensor continúa averiado.'], answer: 2, why: 'En un correo formal, «en resumen»; total que y o sea son coloquiales.', en: 'A formal email to the property manager needs a neutral connector.' },
            { prompt: '—¿Me prestas el taladro? —«Pues… ___ se lo dejé a mi cuñado y aún no me lo ha devuelto».', options: ['es más', 'es que', 'o sea'], answer: 1, why: '«Es que» introduce la justificación de la negativa.', en: 'Es que introduces the excuse for saying no.' },
          ] },
        ] },
        { title: 'Antes de grabar · Before the shoot', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Con lo tarde que fuera, va y se pone a cantar.', ok: false, options: ['Con lo tarde que sería, va y se pone a cantar.', 'Con el tarde que era, va y se pone a cantar.', 'Con lo tarde que era, va y se pone a cantar.'], answer: 2, why: '«Con lo… que» presenta un hecho: indicativo.' },
            { sentence: 'Ayer le dije que no y va y se enfadó.', ok: false, options: ['Ayer le dije que no y fue y se enfadó.', 'Ayer le dije que no y fue y se enfada.', 'Ayer le dije que no e iba y se enfadó.'], answer: 0, why: 'Los dos verbos de «ir y» en el mismo tiempo: fue y se enfadó.' },
            { sentence: 'Si yo te contaría lo que vi en la junta…', ok: false, options: ['Si yo te contara lo que vi en la junta…', 'Si yo te contaré lo que vi en la junta…', 'Si yo te cuente lo que vi en la junta…'], answer: 0, why: 'Si + imperfecto de subjuntivo: contara, nunca condicional.' },
            { sentence: 'Es que no he podido venir antes: el metro iba fatal.', ok: true, why: 'Correcta: «es que» justifica el retraso en una conversación.' },
            { sentence: 'De cansado que estaba, Merche se durmió en el sofá.', ok: false, options: ['De cansada que estaba, Merche se durmió en el sofá.', 'De cansadamente que estaba, Merche se durmió en el sofá.', 'De cansada que estuviera, Merche se durmió en el sofá.'], answer: 0, why: 'El adjetivo concuerda con Merche y el verbo va en indicativo.' },
          ] },
        ] },
        { title: 'El grupo «Vecinos Escalera B» · The building chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Escena 2: el grupo de mensajes · Scene 2: the group chat', lines: [
            { who: 'Paco', text: 'Buenos días. Perdón por el ruido de anoche. ___ el chico del cuarto se quedó en la calle sin llaves.', options: ['O sea', 'Es que', 'Pues nada'], answer: 1, why: '«Es que» justifica el ruido.' },
            { who: 'Merche', text: 'Nada que perdonar, Paco. ___ buena persona que eres, no lo ibas a dejar en la calle.', options: ['Es más', 'Total, que', 'Con lo'], answer: 2, why: '«Con lo buena persona que eres»: el grado como razón (causal).' },
            { who: 'Encarna', text: 'Buena persona, sí, pero yo no pegué ojo. ___, que hoy voy a estar de un humor…', options: ['Es que', 'Total', 'Encima'], answer: 1, why: '«Total, que» cierra y salta al resultado; «de un humor…» queda suspendido.' },
            { who: 'Dani', text: 'Encarna, esta tarde le subo yo la compra. ___: se la subo toda la semana.', options: ['Y eso que', 'O sea', 'Es más'], answer: 2, why: '«Es más» sube la oferta con algo más fuerte.' },
            { who: 'Encarna', text: '¡Ay, hijo, gracias! Y eso que esta mañana te fuiste corriendo…' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', items: [
            { tiles: ['Con', 'lo', 'tarde', 'que', 'era,', 'va', 'y', 'se', 'pone', 'a', 'cantar.'], accept: ['Con lo tarde que era, va y se pone a cantar.'], en: 'Late as it was, he goes and starts singing.' },
            { tiles: ['Suspendió', 'el', 'examen,', 'y', 'eso', 'que', 'estudió', 'muchísimo.'], accept: ['Suspendió el examen, y eso que estudió muchísimo.'], en: 'He failed the exam, even though he studied really hard.' },
            { tiles: ['Total,', 'que', 'nos', 'quedamos', 'sin', 'ascensor', 'todo', 'el', 'fin', 'de', 'semana.'], accept: ['Total, que nos quedamos sin ascensor todo el fin de semana.'], en: 'Long story short, we were without a lift all weekend.' },
          ] },
        ] },
        { title: 'Más vida al guion · Bring it to life', blocks: [
          { kind: 'rewrite', title: 'Del guion de Gabriel al de Lucía · From Gabriel’s draft to Lucía’s', items: [
            { prompt: 'Aunque era muy tarde, el vecino empezó a tocar la batería.', instruction: 'Usa «con lo… que» y «va y» (en presente) o «fue y» (en pasado).', accept: ['Con lo tarde que era, el vecino va y se pone a tocar la batería.', 'Con lo tarde que era, el vecino fue y se puso a tocar la batería.', 'Con lo tarde que era, el vecino va y empieza a tocar la batería.', 'Con lo tarde que era, el vecino fue y empezó a tocar la batería.', 'Con lo tarde que era, va y se pone el vecino a tocar la batería.', 'Con lo tarde que era, fue y se puso el vecino a tocar la batería.'] },
            { prompt: 'No me ayudó con la mudanza, aunque yo lo había ayudado con la suya.', instruction: 'Añade el dato como de pasada con «y eso que».', accept: ['No me ayudó con la mudanza, y eso que yo lo había ayudado con la suya.', 'No me ayudó con la mudanza, y eso que yo le había ayudado con la suya.', 'No me ayudó con la mudanza, y eso que lo había ayudado con la suya.'] },
            { prompt: 'En resumen, tuvimos que llamar a un cerrajero.', instruction: 'Cierra el relato de forma coloquial.', accept: ['Total, que tuvimos que llamar a un cerrajero.', 'Total que tuvimos que llamar a un cerrajero.'] },
            { prompt: 'Es muy despistado, por eso se dejó las llaves dentro.', instruction: 'Usa «de + adjetivo + que».', accept: ['De despistado que es, se dejó las llaves dentro.', 'De lo despistado que es, se dejó las llaves dentro.', 'Se dejó las llaves dentro de despistado que es.', 'Se dejó las llaves dentro de lo despistado que es.'] },
            { prompt: 'Además de llegar tarde, vino sin las llaves.', instruction: 'Suma el agravio con «encima».', accept: ['Llegó tarde y encima vino sin las llaves.', 'Llegó tarde y encima sin las llaves.', 'Encima de llegar tarde, vino sin las llaves.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno toma un párrafo neutro de un correo suyo y lo convierte en un audio para un amigo; después dice qué recurso no usaría nunca en el correo original.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Lucía', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'La vida real, mejor que la serie · Real life beats the script', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada recurso coloquial (va y, con lo… que, es que, frases suspendidas, marcadores) y qué aporta. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada recurso coloquial y qué aporta al relato.' } },
          { kind: 'listen', title: 'Audio de Lucía para Gabriel', channel: 'MENSAJE DE VOZ · LUCÍA FERRER · 9:14', src: '/audio/grammar-live/499.mp3',
            before: 'Lucía le manda un audio a Gabriel la mañana después de una noche movida en su propio edificio. ¿Qué crees que le ha pasado? (Lucía sends Gabriel a voice message after a hectic night in her own building. What do you think happened?)',
            gist: { prompt: '¿Para qué le manda Lucía este audio a Gabriel?', options: ['Para contarle una anécdota de anoche que sirve como material para la serie.', 'Para pedirle que la ayude con una mudanza.', 'Para quejarse de él porque no le ha mandado nada.'], answer: 0, why: 'Cuenta lo que pasó con Merche y el vecino del primero: «ahí tienes material para el capítulo cinco».', en: 'Why does Lucía send Gabriel this message?' },
            details: [
              { prompt: '¿Por qué llamó Merche a Lucía?', options: ['Porque el vecino de abajo tenía la música muy alta.', 'Porque se había quedado sin llaves.', 'Porque el agua de su lavadora le estaba cayendo al vecino de abajo.'], answer: 2, why: '«Se le había salido el agua de la lavadora y le estaba cayendo al del primero».', en: 'Why did Merche ring Lucía?' },
              { prompt: '¿Qué dijo el vecino del primero que iba a hacer?', options: ['Mudarse de edificio.', 'Llamar al fontanero.', 'Llamar a la policía.'], answer: 2, why: '«Y encima dice que va a llamar a la policía».', en: 'What did the downstairs neighbour threaten to do?' },
              { prompt: '¿Cómo terminó la noche?', options: ['Los tres fregaron el rellano y acabaron comiendo galletas.', 'Vino la policía a las dos.', 'Cada uno se fue a su casa enfadado.'], answer: 0, why: '«Estuvimos los tres hasta las dos fregando el rellano… y hasta sacó unas galletas».', en: 'How did the night end?' },
              { prompt: '«Y como no me la mandes…». ¿Qué se sobrentiende?', options: ['Que Gabriel ya le ha mandado la escena.', 'Que Lucía no quiere la escena.', 'Un aviso en broma: si no le manda la escena antes del jueves, habrá consecuencias.'], answer: 2, why: 'Como no + subjuntivo, con la consecuencia callada: aviso en tono de broma.', en: 'What is implied by this unfinished sentence?' },
            ],
            transcript: 'Gabriel, soy Lucía. Oye, que no te vas a creer lo que me pasó anoche, y te lo cuento porque es una escena hecha. Las doce y media, yo ya en la cama, y suena el telefonillo. Era Merche, la vecina del segundo, en bata. [[Con lo tímida que es|teal]], [[va y me pide|blue]] que baje a ayudarla. [[Es que|orange]] se le había salido el agua de la lavadora y le estaba cayendo al del primero. Bajamos, y el del primero, que tiene [[un genio…|violet]], empieza a gritar que le estamos inundando el salón, [[y eso que|blue]] eran cuatro gotas. Y [[encima|blue]] dice que va a llamar a la policía. ¡A la policía, por cuatro gotas! [[Si yo te contara|violet]] las cosas que le soltó a la pobre Merche… [[Total, que|blue]] estuvimos los tres hasta las dos fregando el rellano, él incluido, que al final se ablandó y hasta sacó unas galletas. [[O sea, que|orange]] acabamos merendando a las dos de la mañana. [[Pues nada|orange]], ahí tienes material para el capítulo cinco. Mándame tu versión antes del jueves, ¿vale? Y [[como no me la mandes|violet]]… ¡Ya sabes lo que te espera!',
            reply: { teacher: 'Tú eres Lucía. Tu alumno, como Gabriel, contesta con un audio breve: reacciona a la anécdota («¡Con lo tímida que es Merche!»), se justifica con un «es que» por si no llega al jueves y cierra con «pues nada».', self: 'Contesta a Lucía con un audio de 40 segundos, como si fueras Gabriel: reacciona a la anécdota con un «con lo… que», justifícate con un «es que» por si no llegas al jueves y despídete con «pues nada».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar como se habla', coach: 'Contar con gracia, saber cuándo parar. Tell it with flair, know when to stop.',
      steps: [
        { title: 'Tu turno · Your turn', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento, en tono de charla entre amigos. Si tu alumno cuenta en registro de informe («Además… en resumen…»), tú le das una alternativa coloquial y siguen.', self: 'Lee la situación y responde en voz alta, como si hablaras con un amigo. Usa al menos dos recursos de hoy por respuesta.' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta una anécdota con un vecino, un compañero de piso o de trabajo, como si se la contaras a un amigo en un bar. · Tell a story about a neighbour, flatmate or colleague, as you would to a friend.', followUps: ['¿Qué fue lo peor? (What was the worst part?)', '¿Cómo acabó? (How did it end?)', '¿Qué hiciste tú? (What did you do?)'], phrases: ['[[Con lo… que|teal]] es, [[va y|blue]]…', 'Y [[encima|blue]]…', '[[y eso que|blue]]…', '[[Total, que|blue]]…'], hint: 'Presente narrativo con «va y»; cierra con «total, que».', example: 'Mi compañera de piso, con lo ordenada que es, va y se deja el horno encendido toda la tarde. Y encima se va al cine con el móvil apagado. Llego yo y la cocina huele a quemado, y eso que el pollo ni siquiera era suyo. Total, que cenamos pizza.' },
            { q: 'Te invitan a cosas que no te apetecen: ayudar en una mudanza el sábado, la cena de la comunidad, un maratón de series de terror. Rechaza sin decir «no». · Turn down three invitations without saying no.', followUps: ['¿Y el domingo? (What about Sunday?)', '¿Seguro que no puedes? (Are you sure?)'], phrases: ['[[Es que|orange]]…', '[[¡Si yo te contara|violet]] cómo tengo la semana…!', '[[Pues nada|orange]], otra vez será.'], hint: '«Es que» + razón, y deja la frase abierta.', example: '—¿Me ayudas con la mudanza el sábado? —Uf, es que el sábado tengo la comunión de mi sobrino… —¿Y el domingo? —El domingo… ¡si yo te contara cómo tengo la semana! Pues nada, otra vez será, ¿vale?' },
            { q: 'Responde dejando la frase en suspenso: «¿Qué tal el viaje en autobús?», «¿Cómo es tu nuevo jefe?», «¿Hizo frío en la montaña?». · Answer each question with an unfinished sentence.', followUps: ['¿Tanto? (That much?)', '¿Por ejemplo? (For example?)'], phrases: ['Había [[una cola…|violet]]', 'Tiene [[una paciencia…|violet]]', 'Hacía [[un frío…|violet]]'], hint: 'Un(a) + nombre con entonación suspendida; luego, si te preguntan, un ejemplo.', example: '¿El autobús? Había una cola… ¡dos horas en la estación! ¿Mi jefe? Tiene una paciencia… nunca levanta la voz. ¿La montaña? Hacía un frío… se nos congeló hasta el agua de la botella.' },
            { q: 'Discute con un amigo: ¿se deberían prohibir las fiestas en casa después de las doce en tu edificio? Sube el tono poco a poco. · Argue about banning parties after midnight in your building.', followUps: ['¿Y si es un cumpleaños? (What about birthdays?)', '¿Tú nunca has hecho ruido? (Have you never been noisy?)', '¿Qué propones? (What do you suggest?)'], phrases: ['[[Es más|orange]]…', '[[O sea, que|orange]]…', '[[y eso que|blue]]…', '[[Con lo que|teal]]…'], hint: '«Es más» para el argumento más fuerte; «o sea, que» para resumir al otro.', example: 'Yo creo que sí. Con lo que madrugamos todos, una fiesta a las dos es una falta de respeto. Es más, debería haber una multa. —¿O sea, que nunca más un cumpleaños? —Un cumpleaños sí, y eso que a mí no me invitan nunca.' },
            { q: 'Di lo mismo en dos registros: a un amigo por audio y a la administradora de la finca por correo. Tema: el ascensor lleva un mes roto. · Say it to a friend and in a formal email.', followUps: ['¿Qué recursos desaparecen en el correo? (What disappears in the email?)', '¿Qué conectores usas en su lugar? (What connectors replace them?)'], phrases: ['Al amigo: [[Total, que|blue]]… · [[encima|blue]]…', 'En el correo: En definitiva… · Además… · A pesar de que…'], hint: 'Coloquial: va y, encima, total que, suspensión; formal: frases completas y conectores neutros.', example: 'Al amigo: «Un mes sin ascensor, y encima vivo en el sexto. Llamo a la administradora y va y me dice que tenga paciencia. Total, que subo la compra a pie». En el correo: «Le escribo porque el ascensor lleva un mes averiado. A pesar de que lo comunicamos el día 3, aún no se ha reparado. Le ruego que nos indique una fecha».', teacher: 'Aquí se conecta con la clase 198: tú dices qué rasgo coloquial se ha colado en la versión formal, si se cuela alguno.' },
            { q: '¿Qué estructuras coloquiales oyes en el español de tu entorno? ¿Has oído «coge y se va», «agarra y se va» o «¡anda que…!»? · Which colloquial patterns do you hear around you?', followUps: ['¿Dónde lo oíste? (Where did you hear it?)', '¿Cuál te cuesta más entender? (Which is hardest to follow?)', '¿Hay algo parecido en tu lengua? (Anything similar in your language?)'], phrases: ['En … se dice mucho [[agarra y|blue]] / [[coge y|blue]]…', 'Al principio no entendía [[¡anda que…!|orange]]', 'En mi lengua también…'], hint: 'Habla de variedades sin juzgar: «en…, es frecuente…».', example: 'En las series españolas que veo dicen mucho «coge y se va» y «¡anda que…!»; al principio pensaba que «anda» era una orden. Una amiga de Monterrey dice siempre «agarra y se va». En inglés hacemos algo parecido con «he goes and…».', next: 'En la clase 200 verás por qué «va y se pone» habla del pasado en presente: el uso no literal de los tiempos verbales.' },
          ], swap: { teacher: 'Al final cambian los papeles: tú cuentas una anécdota en registro de informe («A pesar de que era tarde…») y tu alumno, como Lucía, la reescribe en voz alta para la serie.', self: 'Ahora eres Lucía: escribe tres frases planas sobre algo que te pasó esta semana y conviértelas en voz alta en frases de conversación, cada una con un recurso distinto.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje que se oye', coach: 'Escribir como se habla, a propósito. Writing the way people talk, on purpose.',
      steps: [
        { title: 'Tu anécdota · Your story', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lo lee en voz alta como un audio, y revisan juntos cada recurso: ¿suena natural?, ¿sobra alguno?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después léelo en voz alta como si fuera un audio: ¿suena natural?, ¿sobra algún recurso?' } },
          { kind: 'write', title: 'Un mensaje largo para un amigo · A long message to a friend', situation: 'Le escribes a un amigo de confianza un mensaje largo (de los que se leen casi como un audio) para contarle algo que te pasó anoche con un vecino, en un hotel o en un viaje. Registro coloquial, a propósito. (A long, chatty message to a close friend about something that happened last night; deliberately colloquial.)', task: [
            'Presenta la acción sorprendente con «va y» o «fue y» + verbo, con los dos verbos en el mismo tiempo. (One va y / fue y.)',
            'Usa un «con lo + adjetivo / adverbio + que» con indicativo, concesivo o causal. (One con lo… que.)',
            'Añade un dato con «y eso que» y otro agravio con «encima» o una excusa con «es que». (y eso que + encima or es que.)',
            'Deja al menos una frase en suspenso (…) y cierra con «total, que». (One unfinished sentence, then total, que.)',
            'Nada de fórmulas de correo formal (estimado, no obstante, asimismo). (No formal-email language.)',
          ], starters: ['¡No te vas a creer lo de anoche!', 'Con lo… que…, va y…', 'Y encima…', 'Si yo te contara…', 'Total, que…'], words: ['va y', 'fue y', 'con lo… que', 'de… que', 'es que', 'encima', 'y eso que', 'total, que', 'o sea, que', 'pues nada', 'es más'],
            model: '¡Marta! Tengo que contarte lo de anoche, porque no te lo vas a creer. Vuelvo del trabajo a las once, muerta de cansancio, y en el portal me encuentro al del tercero sentado en la escalera. Con lo serio que es siempre, va y me pregunta si tengo un sacacorchos. ¡Un sacacorchos, a las once de la noche! Es que había invitado a cenar a una chica y no encontraba el suyo. Y encima quería que le recomendara un vino, a mí, que no distingo un tinto de otro… Total, que acabé subiendo a casa y bajando con el sacacorchos y con una botella que tenía guardada, y eso que con ese hombre no había cruzado ni tres palabras en dos años. O sea, que ahora le he salvado la cita a mi vecino. Si yo te contara la cara que puso la chica cuando me vio aparecer con la botella… Pues nada, ya te contaré cómo acaba la historia. ¡Un beso!',
            minWords: 120,
            checks: [
              { label: 'Un «va y / fue y» + verbo', pattern: '(?<!\\p{L})(?:va|fue|voy|fui|vas|fuiste|van|fueron|vamos|fuimos)\\s+y\\s+\\p{L}+', tip: 'Escribe, por ejemplo: «va y me pregunta si…».' },
              { label: 'Un «con lo + adjetivo / adverbio + que»', pattern: '(?<!\\p{L})con\\s+lo\\s+(?:\\p{L}+\\s+){1,2}que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Con lo serio que es siempre…».' },
              { label: 'Un «y eso que»', pattern: '(?<!\\p{L})y\\s+eso\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «…y eso que casi no lo conozco».' },
              { label: 'Un «total, que» para cerrar', pattern: '(?<!\\p{L})total,?\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Total, que acabé…».' },
              { label: 'Una frase en suspenso (…)', pattern: '(?:…|\\.\\.\\.)', tip: 'Deja una frase abierta: «Si yo te contara…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:no\\s+obstante|asimismo|por\\s+consiguiente|estimad[oa]s?)(?!\\p{L})', why: 'Es lenguaje de correo formal: en un mensaje a un amigo suena raro.' },
              { pattern: '(?<!\\p{L})con\\s+lo\\s+\\p{L}+\\s+que\\s+(?:fuera|fuese|sea|esté|estuviera|estuviese)(?!\\p{L})', why: '«Con lo… que» presenta un hecho: usa indicativo (era, es, está, estaba).' },
              { pattern: '(?<!\\p{L})y\\s+eso\\s+que\\s+(?:\\p{L}+\\s+)?(?:sea|fuera|fuese|esté|estuviera|haya|hubiera|tenga|tuviera)(?!\\p{L})', why: '«Y eso que» va con indicativo: es un hecho.' },
              { pattern: '(?<!\\p{L})si\\s+(?:yo\\s+)?te\\s+contaría(?!\\p{L})', why: 'Tras «si» va imperfecto de subjuntivo: «Si yo te contara…».' },
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
            { tone: 'blue', label: 'RELATO VIVO', formula: 'ir y + verbo (mismo tiempo y persona) · encima · y eso que + indicativo · total, que', example: 'Con todo el ruido, fue y se durmió. Total, que no oyó nada.', caption: 'lo inesperado, el agravio, el cierre', en: 'Ir y + verb makes an action sound sudden; both verbs share tense and person. Encima adds a grievance, y eso que an ironic fact, and total, que jumps to the outcome.' },
            { tone: 'teal', label: 'GRADO EXPRESIVO', formula: 'con lo + adj. concordado / adv. + que + indicativo · con lo que + verbo · de + adj. + que', example: 'Con lo tímida que es, va y protesta. · De despistado que es, llamó a su puerta.', caption: 'el grado como contraste o como razón', en: 'Con lo… que turns a degree into a contrast (despite) or a reason (because); de + adjective + que presents it as the cause.' },
            { tone: 'violet', label: 'SUSPENDER Y SUAVIZAR', formula: '¡Si yo te contara…! · Como no + subj.… · un(a) + nombre… · Con lo que yo… · diminutivo atenuador', example: 'Tiene un genio… · Como no vengas… · ¿Me esperas un momentito?', caption: 'el oyente completa: intriga, aviso, intensidad, reproche', en: 'Unfinished sentences let the listener fill in an intrigue, a warning, an intensity or a reproach; diminutives soften requests.' },
            { tone: 'orange', label: 'MARCADORES Y «QUE»', formula: 'es que · o sea (que) · pues nada · es más · ¡que + subj.! · que si… · ¡anda que…! (España)', example: 'Es que madrugo… · O sea, que no vienes. · ¡Que te calles!', caption: 'justificar, concluir, cerrar, subir, insistir', en: 'Es que justifies, o sea concludes, pues nada closes, es más raises the stakes, and an initial que repeats or relays; ¡anda que…! is typical of Spain.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Dos preguntas antes de usar estos recursos: **¿hablo con alguien de confianza?** (audio, mensaje, charla) y **¿es general o de una zona?** (¡anda que…! y coge y… suenan a España). Y una regla de oro: lo coloquial no es «español incorrecto», tiene su gramática (**fue y se puso**, **con lo tarde que era**, **si yo te contara**); pero en un correo formal, un informe o una reclamación, **no tiene sitio**.', en: 'Ask yourself two things: am I talking to someone close, and is this pattern general or regional? Colloquial Spanish is not incorrect Spanish; it has its own grammar. But it has no place in a formal email, a report or a complaint.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«Le dije que no tocara nada y ___ desenchufó la nevera».', options: ['fue y', 'es más', 'es que'], answer: 0, why: 'Acción inesperada en pasado: fue y + pretérito.', en: 'I told him not to touch anything and he went and unplugged the fridge.' },
            { prompt: '«Con lo ___ que están las calles, mejor nos quedamos en casa».', options: ['mojadas', 'mojado', 'mojadamente'], answer: 0, why: 'Valor causal; el adjetivo concuerda con «las calles».', en: 'Seeing how wet the streets are, we’d better stay in.' },
            { prompt: '—¿No vienes al cine? —«___ mañana madrugo…».', options: ['Y eso que', 'Es que', 'Total, que'], answer: 1, why: 'Excusa: «es que» + razón, con el «no» sobrentendido.', en: 'An excuse that avoids saying no.' },
            { prompt: '«¡Si yo te ___ lo que me dijo el casero!»', options: ['contaré', 'contaría', 'contara'], answer: 2, why: 'Si + imperfecto de subjuntivo en la frase suspendida.', en: 'If only I could tell you what the landlord said!' },
            { prompt: 'Correo formal a la administradora: «___, solicito que se revise la instalación».', options: ['Pues nada', 'Por todo ello', 'Total, que'], answer: 1, why: 'Registro formal: «por todo ello»; los otros dos son coloquiales.', en: 'A formal email needs a formal connector.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Valparaíso, Chile. **Javiera Soto** le graba un audio a su hermana para contarle el día que ha tenido en la oficina. Lo escribió primero como un informe; ayúdala a contarlo como se habla.', en: 'Valparaíso, Chile. Javiera is recording a voice message for her sister about her day at the office. She drafted it like a report; help her say it the way people actually talk.' },
          { kind: 'rewrite', title: 'El audio de Javiera · Javiera’s voice message', items: [
            { prompt: 'Aunque es muy puntual, mi jefe llegó una hora tarde.', instruction: 'Usa «con lo… que» (valor concesivo).', accept: ['Con lo puntual que es, mi jefe llegó una hora tarde.', 'Con lo puntual que es mi jefe, llegó una hora tarde.'] },
            { prompt: 'Le encargué el informe y me lo entregó sin terminar.', instruction: 'Haz que la entrega suene inesperada con «fue y» (o «va y» en presente).', accept: ['Le encargué el informe y fue y me lo entregó sin terminar.', 'Le encargo el informe y va y me lo entrega sin terminar.'] },
            { prompt: 'Tuve que quedarme hasta las nueve, aunque era mi cumpleaños.', instruction: 'Añade el dato con «y eso que».', accept: ['Tuve que quedarme hasta las nueve, y eso que era mi cumpleaños.'] },
          ] },
        ] },
        { title: 'Ampliación: del rellano al correo formal · Extension: from the landing to a formal email', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: cambiar de registro. Optional: switching register.', blocks: [
          { kind: 'lead', text: 'Encarna y Paco deciden escribir a la **administradora de la finca**. Cada recurso coloquial tiene un equivalente formal (clase 198): **es que** → «ya que», «debido a que»; **encima** → «además»; **y eso que** → «a pesar de que»; **total, que** → «en definitiva», «por todo ello»; **con lo + adj. + que** → «dado lo + adj. + que» o «pese a ser tan…»; **va y + verbo** no tiene equivalente: se narra sin más («empezó a…»). Fíjate también en dos estructuras para reconocer: **de + adjetivo + que** («**De harta que estaba**, se mudó») y **con la de + nombre + que** («**Con la de** veces **que** lo hemos dicho…»), muy frecuente en España.', en: 'Each colloquial device has a formal counterpart; va y has none, so a formal text simply narrates the action. Two patterns to recognise: de + adjective + que (“she was so fed up that…”) and con la de + noun + que (“after all the times we’ve said it…”), very common in Spain.' },
          { kind: 'choice', title: 'Elige la versión formal · Choose the formal version', items: [
            { prompt: 'Coloquial: «Y encima el ascensor lleva un mes parado».', options: ['Y para colmo el ascensor lleva un mes parado.', 'Además, el ascensor lleva un mes averiado.', 'O sea, que el ascensor lleva un mes parado.'], answer: 1, why: '«Además» es el equivalente neutro de «encima»; «para colmo» y «o sea» siguen siendo coloquiales.', en: 'Moreover, the lift has been out of order for a month.' },
            { prompt: 'Coloquial: «Total, que nadie nos ha dado una solución».', options: ['Total, que no se nos ha ofrecido ninguna solución.', 'En definitiva, hasta la fecha no se nos ha ofrecido ninguna solución.', 'Pues nada, nadie nos ha dado una solución.'], answer: 1, why: '«En definitiva» cierra en registro formal; «hasta la fecha» y la pasiva refleja lo hacen más impersonal.', en: 'In short, no solution has been offered to us to date.' },
            { prompt: 'Coloquial: «Llamamos tres veces, y eso que nos dijeron que no hacía falta».', options: ['Llamamos tres veces, y eso que se nos indicó que no era necesario.', 'Llamamos tres veces; es más, no hacía falta.', 'Llamamos en tres ocasiones, a pesar de que se nos indicó que no era necesario.'], answer: 2, why: '«A pesar de que» + indicativo es la concesiva neutra; «y eso que» es coloquial.', en: 'We called three times, despite having been told it was not necessary.' },
            { prompt: '«De harta que estaba de las goteras, Merche se mudó». Significa…', options: ['Merche se mudó y después se hartó de las goteras.', 'Merche estaba tan harta de las goteras que se mudó.', 'Merche se mudó a pesar de las goteras.'], answer: 1, why: 'De + adjetivo + que: el grado es la causa, «tan harta que…».', en: 'She was so fed up with the leaks that she moved out.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno toma el audio de Lucía y escribe dos frases del mismo hecho para el informe del seguro de la comunidad, sin un solo rasgo coloquial.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 200 · Uso no literal de tiempos verbales', text: 'Hoy has contado el pasado con «**va y se pone**»: un presente que habla de ayer. El paso natural es entender por qué los tiempos verbales no siempre significan su tiempo: el **presente histórico**, el **imperfecto de cortesía** («**Venía** a preguntarte si…») o el **futuro de conjetura**. Es la otra mitad de la gramática viva de la conversación.', en: 'Today you narrated past events with va y se pone, a present tense about yesterday. The natural next step is seeing why tenses do not always mean their time: the historical present, the polite imperfect (“I was coming to ask you…”) and the future of conjecture. It is the other half of the living grammar of conversation.', href: '/gramatica/uso-no-literal-de-tiempos-verbales', label: 'Ir a la clase 200' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué Lucía dice “va y me pide” y no “va y me pidió”, y por qué Encarna dice “con lo tarde que era” y no “que fuera”?». Respuesta esperada: los dos verbos de «ir y» comparten tiempo; «con lo… que» presenta un hecho, en indicativo.' },
        ] },
      ],
    },
  ],
};
