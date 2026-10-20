import type { LiveLesson } from '../types';

/**
 * Lesson 523 · C2 · Ironía, litotes y negación pragmática (course unit G223).
 * Builds on G072 (lesson 372: double negation nadie / nada / nunca), G191 (lesson 491: litotes
 * as softening, «no es precisamente barato»), G196 (lesson 496: rhetorical questions) and G218
 * (lesson 518: ironic periphrases), which are not retaught. Content (NGLE §48, DPD «hasta»):
 * litotes as a system (no + contrary: No es tonto; with nada / ningún: No está nada mal, No es
 * ningún secreto; ironic with precisamente / lo que se dice / que digamos; no + muy + positive
 * quality as attenuated criticism; No es tonto ≠ No es muy listo); expletive no (hasta que no +
 * subj., both forms accepted, most natural with a negative main clause; ¡Cuántas veces no te lo
 * habré dicho!) vs real negation after verbs of fear (Temo que no lleguen); negative polarity
 * items (ni + noun, en absoluto, para nada with a usage hedge, lo más mínimo, en mi vida;
 * preverbal without no); scope (No todos vs ambiguous Todos no, No siempre, no… porque + subj.
 * denies only the cause); no… sino / sino que vs no… pero; verbal irony markers (¡Qué bien!,
 * Muy bonito, encima, ¡Lo que faltaba!), how to recognise irony (context, exaggeration,
 * intonation) and when to avoid it in writing. Ampliación: por poco (no), ¡Qué no haría yo…!,
 * ironic quotation marks. Scene: the small theatre company Bambalina, dress rehearsal of the
 * comedy «Una boda tranquila». Director Marisa Quintero, actors Joaquín Lara (Fermín, the
 * groom's ironic father) and Nerea Salcedo (the madrina), press officer Lidia Ferrer, who must
 * answer the autumn festival's poor offer. Escuchar: radio critic Adela Montoya reviews the
 * premiere (es-MX-DaliaNeural). Escribir: Lidia's email to the festival programmer, no irony.
 */
export const lesson: LiveLesson = {
  id: 523,
  level: 'C2',
  title: 'Ironía, litotes y negación pragmática',
  subtitle: 'Interpretar y usar lítotes, ironía y negaciones con matiz, y decidir cuándo la ironía funciona y cuándo conviene evitarla.',
  legend: [
    { tone: 'teal', label: 'LÍTOTE · no está nada mal, no es precisamente…, no es tonto (saying more by denying the opposite)' },
    { tone: 'violet', label: 'NO EXPLETIVO Y POLARIDAD · hasta que no, ni una, en absoluto, para nada (a “no” that doesn’t negate; words that need a negation)' },
    { tone: 'blue', label: 'ALCANCE Y CORRECCIÓN · no todos, no siempre, no… sino (what exactly is negated)' },
    { tone: 'orange', label: 'IRONÍA VERBAL · ¡Qué bien!, Muy bonito, encima, ¡Lo que faltaba! (meaning the opposite)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Decir menos, decir lo contrario, negar sin negar', coach: 'No siempre «no» significa no. “No” doesn’t always mean no.',
      steps: [
        { title: 'Una boda nada tranquila · A wedding that’s anything but calm', blocks: [
          { kind: 'lead', text: 'Ensayo general de la compañía Bambalina. Mañana estrenan «Una boda tranquila», una comedia en la que nada es tranquilo. Joaquín Lara hace de Fermín, el padre del novio, un hombre que nunca dice lo que piensa de forma directa: de su hijo, que llega una hora tarde a su propia boda, dice que [[no es precisamente un genio de la puntualidad|teal]]. El problema es que Joaquín dice la frase como si fuera un elogio. Marisa Quintero, la directora, tiene que explicarle por qué no funciona. Y Lidia Ferrer, que lleva la comunicación, debe contestar por escrito a un festival que les ofrece un horario malísimo: allí la ironía es un riesgo.', en: 'Dress rehearsal of a small theatre company. The groom’s father in the comedy never says what he thinks directly: of his son, who is an hour late to his own wedding, he says he “isn’t exactly a genius of punctuality”. The actor says it as if it were praise. Meanwhile the press officer must answer a festival in writing, where irony is risky.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones en voz alta, cada una con su entonación. Tu alumno dice qué piensa de verdad Fermín en cada una.', self: 'Lee las tres versiones en voz alta, cada una con su entonación. ¿Qué piensa de verdad Fermín? (What does he really think in each one?)' } },
          { kind: 'compare', title: 'Una idea, tres maneras · One idea, three ways', columns: [
            { tone: 'neutral', label: 'DIRECTO', sentence: 'Mi hijo llega siempre tarde.', idea: 'Se dice lo que se piensa, sin matiz.', en: 'Plain statement: what is said is what is meant.' },
            { tone: 'teal', label: 'LÍTOTE IRÓNICA', sentence: 'Mi hijo [[no es precisamente un genio de la puntualidad|teal]].', idea: 'Niega lo contrario y exagera («genio»): se entiende «es muy impuntual», con humor.', en: 'Denying the opposite, with an exaggeration: it means “he is hopelessly unpunctual”, said with humour.' },
            { tone: 'orange', label: 'IRONÍA VERBAL', sentence: '(Una hora tarde) [[¡Qué puntual|orange]] es mi hijo!', idea: 'Dice lo contrario de lo que piensa; el contexto lo delata.', en: 'Saying the opposite of what is meant; the context gives it away.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mi hijo no es precisamente un genio de la puntualidad». ¿Qué piensa Fermín?', options: ['Que no sabe si su hijo es puntual.', 'Que su hijo llega tarde a menudo, y lo dice con humor.', 'Que su hijo es muy puntual.'], answer: 1, why: 'Es una lítote irónica: niega lo contrario («un genio de la puntualidad») y con «precisamente» deja claro que piensa lo opuesto.', en: 'An ironic understatement: he means his son is always late.' },
            { prompt: '¿Cuándo es irónico «¡Qué puntual es mi hijo!»?', options: ['Cuando el hijo llega a la hora.', 'Siempre: es una frase irónica.', 'Cuando el hijo llega una hora tarde.'], answer: 2, why: 'La ironía nace del choque con el contexto. Si el hijo llega a la hora, la misma frase es un elogio sincero.', en: 'Irony depends on the clash with the facts, not on the words themselves.' },
          ] },
        ] },
        { title: 'La lítote · Understatement', mascot: '/brand/mascot/speaking.webp', coach: 'Menos palabras, más sentido. Say less, mean more.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LÍTOTE · NEGAR LO CONTRARIO', question: '¿Quieres afirmar algo negando su contrario, para suavizarlo, reforzarlo o ironizar?', en: 'A litotes affirms something by denying its opposite. “No es tonto” means he is sharp (often: he knows what is good for him); “No me desagrada” means I rather like it. With “nada” or “ningún” it becomes emphatic: “No está nada mal” is warm, natural praise, often warmer than “está bien”; “No es ningún secreto” means everybody knows. With “precisamente”, “lo que se dice” or “… que digamos” it turns ironic and criticises without saying so: “No es precisamente barato” = it is expensive. “No + muy + positive quality” softens a criticism: “No es muy simpático” = he is rather unfriendly. In class 191 you used litotes to soften criticism; here you learn to read it and dose it.', formula: ['no + lo contrario: No es tonto = es listo · No me desagrada = me gusta', 'no + nada / ningún: refuerzo: No está nada mal = está muy bien · No es ningún secreto', 'no + precisamente / lo que se dice / … que digamos: ironía: No es precisamente barato = es caro', 'no + muy + cualidad positiva: crítica atenuada: No es muy simpático = es más bien antipático'],
            meaning: 'La lítote dice **menos** para que se entienda **más**. Con **nada** o **ningún** refuerza un elogio; con **precisamente**, **lo que se dice** o **que digamos** se vuelve **irónica** y critica sin decirlo de frente; con **muy** atenúa una crítica. Lo que decide la lectura es el contexto y, en la voz, la entonación.',
            examples: [
              { es: 'El segundo acto [[no está nada mal|teal]]: el público se ha reído de principio a fin.', en: 'The second act is really good: “nada” turns the understatement into warm praise.' },
              { es: 'Joaquín [[no es tonto|teal]]: sabe que la escena funciona gracias a él.', en: 'Joaquín is no fool: he is sharp and knows the scene works because of him.' },
              { es: '[[No es ningún secreto|teal]] que el estreno va con retraso.', en: 'It’s no secret that the premiere is behind schedule: everybody knows.' },
              { es: 'El decorado [[no es muy discreto que digamos|teal]]: tiene tres lámparas de cristal.', en: 'The set isn’t exactly understated: “que digamos” adds a wry, ironic tone.' },
              { es: 'La sala [[no es lo que se dice|teal]] grande: caben ochenta personas.', en: 'The venue isn’t what you’d call big: it seats eighty. Colloquial, ironic.' },
            ],
            note: 'Ojo con el matiz: **No es tonto** (= es listo; a veces, ‘sabe lo que le conviene’) no equivale a **No es muy listo** (= es más bien torpe). Y **No está mal**, a secas, puede ser un elogio tibio; **No está nada mal** suele ser uno claro.' },
          { kind: 'table', title: 'Lo que se dice y lo que se entiende · What is said and what is meant', head: ['Lítote', 'Se entiende', 'Efecto'], rows: [
            ['No me desagrada la idea.', 'Me gusta bastante.', 'aprobación prudente'],
            ['No es poca cosa.', 'Es mucho, es importante.', 'valoración positiva'],
            ['No es **precisamente** barato.', 'Es caro.', 'crítica irónica y suave'],
            ['No es **lo que se dice** un genio.', 'Es poco listo.', 'crítica irónica, coloquial'],
            ['No es **muy** amable.', 'Es más bien antipático.', 'crítica atenuada'],
          ], note: 'La lítote atenuadora (**no es muy…**, **no es del todo…**) cabe en un correo profesional. La irónica (**precisamente**, **lo que se dice**, **que digamos**) es más arriesgada fuera de la conversación.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lidia, sobre el camerino: «No es lo que se dice espacioso».', options: ['Es pequeño, y lo dice con ironía suave.', 'Es enorme.', 'No sabe cuánto mide.'], answer: 0, why: '«No es lo que se dice + cualidad» niega con ironía esa cualidad: el camerino es pequeño.', en: 'The dressing room isn’t what you’d call roomy: it is small.' },
            { prompt: 'Marisa a Nerea, después de su monólogo: «Lo de hoy no es poca cosa».', options: ['Un comentario indiferente.', 'Una crítica: ha hecho muy poco.', 'Un elogio: ha hecho algo importante.'], answer: 2, why: 'Negar «poca cosa» afirma lo contrario: es mucho. Es una lítote de valoración positiva.', en: 'Praise by understatement: what you did today is no small thing.' },
          ] },
        ] },
        { title: 'Un «no» que no niega · A “no” that doesn’t negate', mascot: '/autoestudio/mascot/noting.webp', coach: 'Quita el «no»: ¿cambia algo? Remove the “no”: does anything change?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NO EXPLETIVO · POLARIDAD NEGATIVA', question: '¿Hay un «no» que no niega nada, o una palabra que solo funciona con negación?', en: 'Some “no”s do not negate: they are expletive. “Hasta que no llegue, no empezamos” means exactly the same as “Hasta que llegue, no empezamos”; the DPD accepts both, and the extra “no” sounds most natural when the main clause is already negative. In exclamations such as “¡Cuántas veces no te lo habré dicho!” the “no” only adds emphasis: I have told you countless times. Verbs of fear are different: in “Temo que no lleguen” the “no” is real, because what I fear is that they will NOT come. Negative polarity items (“ni + noun”, “en absoluto”, “para nada”, “lo más mínimo”, “en mi vida”) need a negative context: after the verb they require “no”; before the verb they carry the negation themselves.', formula: ['hasta que no + subjuntivo = hasta que + subjuntivo: Hasta que no llegue Marisa, no empezamos', '¡Cuántas veces no te lo habré dicho! = te lo he dicho muchísimas veces', 'temer que no + subjuntivo: negación real: Temo que no lleguen ≠ Temo que lleguen', 'ni + sustantivo · en absoluto · para nada · lo más mínimo: necesitan un contexto negativo'],
            meaning: 'Para saber si un «no» es **expletivo**, quítalo: si el sentido no cambia, lo es. «Hasta que **no** llegue» = «hasta que llegue». En cambio, «Temo que **no** lleguen» y «Temo que lleguen» expresan miedos opuestos: ahí el «no» niega de verdad.',
            examples: [
              { es: '[[Hasta que no|violet]] llegue Marisa, no empezamos el ensayo.', en: 'We won’t start rehearsing until Marisa arrives; “Hasta que llegue” means exactly the same.' },
              { es: '[[¡Cuántas veces no|violet]] te lo habré dicho, Joaquín!', en: 'How many times have I told you, Joaquín! The “no” and the future perfect express exasperation, not doubt.' },
              { es: 'Temo que los focos **no** lleguen a tiempo para el estreno.', en: 'I’m afraid the lights won’t arrive in time: here “no” is a real negation.' },
              { es: 'El crítico no dijo [[ni una palabra|violet]] durante la función.', en: 'The critic didn’t say a single word during the show: emphatic negation.' },
              { es: '—¿Te molesta repetir la escena? —[[En absoluto|violet]].', en: 'Not at all: a firm, polite “no”, neutral or formal.' },
            ],
            note: '**Para nada** es coloquial y muy frecuente como respuesta negativa («—¿Estás cansada? —Para nada»). Algunos hablantes la usan también para reforzar una afirmación; el uso varía, así que, si puede haber malentendido, «No, para nada» o «En absoluto» no dejan dudas. Con «hasta que» y una principal **afirmativa**, usa la forma sin «no»: «Ensayamos hasta que salga bien».' },
          { kind: 'table', title: 'Palabras que piden negación · Negative polarity items', head: ['Forma', 'Ejemplo', 'Registro y posición'], rows: [
            ['ni + sustantivo', 'No queda **ni una** entrada. · **Ni una** entrada queda.', 'enfático; delante del verbo, sin «no»'],
            ['en absoluto', 'No estoy **en absoluto** de acuerdo. · —¿Te molesta? —**En absoluto**.', 'neutro o formal; sola, significa ‘no’'],
            ['para nada', 'No me gustó **para nada**. · —¿Enfadada? —**Para nada**.', 'coloquial; mira la nota de arriba'],
            ['lo más mínimo', 'No me importa **lo más mínimo**.', 'enfático; detrás del verbo, con «no»'],
            ['en mi vida', '**En mi vida** he visto un ensayo así. (= nunca)', 'enfático, coloquial; delante del verbo, sin «no»'],
          ], note: 'Es el mismo mecanismo que ya conoces con **nadie, nada, nunca**: detrás del verbo, «no» delante («No dijo ni una palabra»; nunca «*Dijo ni una palabra»); delante del verbo, sin «no» («Ni una palabra dijo»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Hasta que no firmen el contrato, no anunciamos la gira». ¿Qué significa?', options: ['Anunciarán la gira cuando firmen.', 'Anunciarán la gira si no firman.', 'No anunciarán la gira aunque firmen.'], answer: 0, why: 'El «no» de «hasta que no» es expletivo: equivale a «hasta que firmen». La firma marca el momento del anuncio.', en: 'Until they sign, no announcement: they will announce it once they sign.' },
            { prompt: '«Temo que el teatro no nos dé la sala del sábado». ¿Qué teme Lidia?', options: ['Nada: el «no» es expletivo.', 'Que no se la den.', 'Que el teatro les dé la sala.'], answer: 1, why: 'Tras «temer que», el «no» niega de verdad: lo que teme es quedarse sin la sala.', en: 'With verbs of fear, “no” is a real negation.' },
          ] },
        ] },
        { title: '¿Qué niega el «no»? · What does the “no” negate?', mascot: '/brand/mascot/studying.webp', coach: 'Todo, una parte o solo la razón. All, part, or just the reason.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ALCANCE · NO TODOS · NO SIEMPRE · NO… PORQUE', question: '¿Qué niega exactamente tu «no»: toda la frase, una parte o solo una razón?', en: 'Negation has scope: it can affect the whole sentence or just one part. “No todos vinieron” denies “all”: some came and some didn’t. “Todos no vinieron” is ambiguous: it can mean “nobody came” or “not everyone came”, and only intonation or context decides; in writing, say “No todos…” or “Ninguno…”. “No siempre” works the same way. With a cause, the indicative denies the event, while the subjunctive denies only the reason: “No lo hace porque le paguen” = he does it, but not for the money.', formula: ['no todos / no todo / no siempre: negación parcial (algunos sí, otros no)', 'todos no + verbo: ambigua (¿ninguno o no todos?) · por escrito: No todos… / Ninguno…', 'no + verbo + porque + subjuntivo: se niega solo la causa (el hecho ocurre)', 'no + verbo + porque + indicativo: se niega el hecho y se da su causa'],
            meaning: 'La negación tiene **alcance**: afecta a lo que viene detrás o a lo que la entonación destaca. En la voz, la entonación resuelve muchas ambigüedades; en el papel no. Por eso, por escrito, **No todos** es más claro que **Todos no**.',
            examples: [
              { es: '[[No todos|blue]] los actores vinieron al ensayo: faltaron dos.', en: 'Not all the actors came: two were missing. Partial negation.' },
              { es: '[[Todos no|blue]] vinieron. (¿No vino nadie? ¿Faltaron algunos?)', en: 'Ambiguous: did nobody come, or were some missing? Only intonation or context tells.' },
              { es: 'Joaquín [[no siempre|blue]] llega tarde: los jueves es el primero.', en: 'Joaquín isn’t always late: on Thursdays he’s the first to arrive.' },
              { es: 'Marisa [[no repite la escena porque le guste|blue]]: la repite porque todavía no sale.', en: 'Marisa doesn’t repeat the scene because she enjoys it: she repeats it because it still isn’t working. The subjunctive denies only the reason.' },
            ] },
          { kind: 'compare', title: 'No… sino o no… pero · Correction or contrast', columns: [
            { tone: 'blue', label: 'NO… SINO · CORRECCIÓN', sentence: 'Nerea [[no es la protagonista, sino|blue]] la narradora.', idea: 'Lo primero se rechaza y lo segundo lo sustituye. Con verbo conjugado: «sino que».', en: 'The first element is rejected and replaced by the second. Before a conjugated verb: “sino que” (“No lo critica, sino que lo defiende”).' },
            { tone: 'neutral', label: 'NO… PERO · CONTRASTE', sentence: 'Nerea no es la protagonista, pero tiene la mejor escena.', idea: 'Las dos ideas son verdad; «pero» añade algo que contrasta.', en: 'Both ideas are true; “pero” adds a contrasting point.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No todos los críticos aplaudieron». ¿Qué pasó?', options: ['Ningún crítico aplaudió.', 'Todos aplaudieron.', 'Algunos aplaudieron y otros no.'], answer: 2, why: '«No todos» es una negación parcial: niega «todos», no el aplauso.', en: 'Partial negation: some did, some didn’t.' },
            { prompt: 'Lidia escribe: «La función no es para niños, ___ para adolescentes».', options: ['sino', 'pero', 'si no'], answer: 0, why: 'Corrección: «para adolescentes» sustituye a «para niños». «Si no» (dos palabras) es condicional.', en: 'Correction needs “sino”.' },
            { prompt: '«Joaquín no acepta el papel porque le paguen bien». ¿Acepta el papel?', options: ['No, porque le pagan mal.', 'No se sabe.', 'Sí, pero no por el dinero.'], answer: 2, why: 'Con «porque» + subjuntivo, la negación afecta solo a la causa: acepta, pero por otra razón.', en: 'The subjunctive denies only the reason: he accepts, but not for the money.' },
          ] },
        ] },
        { title: 'Ironía verbal · Verbal irony', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lo que dices choca con lo que pasa. Words clash with facts.', blocks: [
          { kind: 'concept', tone: 'orange', label: '¡QUÉ BIEN! · MUY BONITO · ENCIMA · ¡LO QUE FALTABA!', question: '¿Dices lo contrario de lo que piensas, o una queja disfrazada de comentario?', en: 'Verbal irony says one thing and means the opposite, and the listener has to notice the clash. “¡Qué bien!”, “¡Estupendo!” or “¡Genial!” after bad news mean “how awful”. “Muy bonito” (alone, or followed by an infinitive) is a reproach: “Muy bonito, llegar a estas horas.” “Encima” piles a new grievance on top of the first: “Llega tarde y encima se queja.” “¡Lo que faltaba!” greets the last straw. You recognise irony through context (the facts contradict the words), exaggeration (“un genio de la puntualidad”) and intonation (lengthened, over-enthusiastic or very flat). In writing, most of these cues disappear.', formula: ['¡Qué bien! / ¡Estupendo! / ¡Genial! ante una mala noticia = ¡qué mal!', 'Muy bonito (+ infinitivo): reproche', 'encima: añade un agravio al anterior (= y además, por si fuera poco)', '¡Lo que faltaba!: la gota que colma el vaso'],
            meaning: 'La ironía funciona porque el oyente nota un **choque** entre lo que se dice y lo que sabe. Las pistas son tres: el **contexto** (los hechos contradicen las palabras), la **exageración** («un genio de la puntualidad») y la **entonación** (alargada, demasiado entusiasta o muy plana). Sin esas pistas, la ironía se entiende al pie de la letra.',
            examples: [
              { es: 'Se ha fundido el foco principal a una hora del estreno. —[[¡Qué bien!|orange]] Justo lo que necesitábamos.', en: 'The main spotlight has blown an hour before the premiere. “Great! Just what we needed.” Meaning: disaster.' },
              { es: '[[Muy bonito|orange]], Joaquín: llegar media hora tarde al ensayo general.', en: 'Very nice, Joaquín: turning up half an hour late to the dress rehearsal. A reproach.' },
              { es: 'El técnico no ha traído los cables y [[encima|orange]] dice que es culpa nuestra.', en: 'The technician hasn’t brought the cables and, on top of that, says it’s our fault.' },
              { es: 'Y ahora se va la luz en todo el barrio. [[¡Lo que faltaba!|orange]]', en: 'And now there’s a power cut in the whole neighbourhood. That’s all we needed!' },
            ],
            note: '**Encima** también tiene su uso literal de lugar («Déjalo encima de la mesa»). Y **¡Qué bien!** es sincero cuando la noticia es buena: «—¡Hemos vendido todas las entradas! —¡Qué bien!». La forma no decide: decide el contexto.' },
          { kind: 'decide', title: '¿Es irónico? · Is it ironic?', steps: [
            { q: '¿Las palabras chocan con hechos que los dos conocen?', yes: 'Probable **ironía**: entiende lo contrario de lo que se dice.', no: 'Sigue con la siguiente pregunta.' },
            { q: '¿Hay exageración o una marca como «encima», «muy bonito», «precisamente» o «que digamos»?', yes: 'La ironía es casi segura.', no: 'Sigue.' },
            { q: '¿La entonación es alargada, demasiado entusiasta o muy plana?', yes: 'En la voz, esa suele ser la pista definitiva.', no: 'Probablemente es una frase **literal**.' },
          ] },
          { kind: 'tip', icon: '✍', title: 'Ironía por escrito · Irony in writing', text: 'En un correo profesional, una reclamación o un mensaje a alguien que no te conoce, la ironía es arriesgada: sin voz ni gesto, el lector puede entenderla al pie de la letra o sentirse despreciado. Para criticar con suavidad, la **lítote atenuadora** («no nos parece del todo adecuado») suele funcionar mejor. Si usas ironía, que el contexto la haga evidente.', en: 'In a work email, a complaint or a message to someone who doesn’t know you, irony is risky: without voice or gesture it may be read literally or as contempt. A softening understatement usually works better.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nerea pierde el tren y dice: «¡Estupendo! Hoy todo me sale de maravilla».', options: ['Habla del tren siguiente.', 'Está contenta con su día.', 'Está fastidiada: el contexto y la exageración lo dicen.'], answer: 2, why: 'Acaba de perder el tren: «¡Estupendo!» y «de maravilla» chocan con los hechos. Es ironía.', en: 'The words clash with what has just happened.' },
            { prompt: 'Lidia reclama a la empresa de iluminación. ¿Qué frase es más adecuada?', options: ['«Muy bonito: los focos llegaron rotos».', '«¡Qué bien! Los focos llegaron rotos».', '«Lamentablemente, el material no llegó en las condiciones acordadas: dos focos estaban rotos».'], answer: 2, why: 'En una reclamación escrita, la ironía puede leerse como desprecio. Mejor una crítica clara y cortés.', en: 'A written complaint needs a clear, polite criticism, not sarcasm.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Forma, alcance o registro? Form, scope or register?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: la forma, el alcance o el registro.', self: 'Lee cada frase y decide qué falla: ¿la forma, el alcance o el registro? Después mira la corrección. (Form, scope or register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La obra no es un drama, pero una comedia.', right: 'La obra no es un drama, sino una comedia.', why: 'Cuando lo segundo sustituye a lo primero, se usa «sino». «Pero» añade un contraste y exige que las dos ideas sean verdad.' },
            { wrong: 'La directora no lo critica, sino lo defiende.', right: 'La directora no lo critica, sino que lo defiende.', why: 'Ante un verbo conjugado, «sino que».' },
            { wrong: 'El crítico dijo ni una palabra en toda la función.', right: 'El crítico no dijo ni una palabra en toda la función (o: Ni una palabra dijo el crítico…).', why: '«Ni + sustantivo» detrás del verbo necesita «no». Delante del verbo, niega por sí solo.' },
            { wrong: 'Informe: «Todos los actores no se saben el texto» (para decir que algunos sí).', right: 'Informe: «No todos los actores se saben el texto».', why: '«Todos no» es ambiguo: puede entenderse «ninguno». Por escrito, la negación parcial es «No todos».' },
            { wrong: 'Me quedo en el teatro hasta que no termine el ensayo.', right: 'Me quedo en el teatro hasta que termine el ensayo.', why: 'Con la principal afirmativa, el «no» expletivo se desaconseja: puede entenderse como negación real. Con la principal negativa sí es habitual: «No me voy hasta que (no) termine».' },
            { wrong: '—¿Te molesta esperar? —Absolutamente. (queriendo decir que no)', right: '—¿Te molesta esperar? —En absoluto.', why: '«Absolutamente» refuerza una afirmación. Para un «no» rotundo y cortés, «En absoluto».' },
            { wrong: 'Correo al festival: «Muy bonito que nos ofrezcan el lunes a las cuatro».', right: 'Correo al festival: «El horario del lunes a las cuatro no nos parece el más adecuado para nuestro público».', why: 'Error de registro: la ironía en un correo profesional puede leerse como desprecio. La lítote atenuadora critica sin ofender.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mi cuñado no es tonto» y «Mi cuñado no es muy listo». ¿Qué diferencia hay?', options: ['La primera dice que es listo; la segunda, que es más bien torpe.', 'Las dos son elogios.', 'Significan lo mismo.'], answer: 0, why: '«No es tonto» niega lo contrario y afirma que es listo. «No es muy listo» atenúa una crítica.', en: 'Two litotes, opposite meanings.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre un lugar que conoce bien: una directa, una lítote y una irónica. Tú dices qué ha entendido en cada una.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Después del ensayo general', coach: 'Toca cada marca: ¿qué hace? Tap each mark: what does it do?',
      steps: [
        { title: 'Notas de la directora · The director’s notes', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marisa y Lidia; tu alumno es Joaquín y Nerea. Después tu alumno toca cada expresión marcada y explica qué hace.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿lítote, no expletivo, alcance o ironía? (What does each one do?)' } },
          { kind: 'explore', title: '«Una boda tranquila»', setting: 'Teatro de la compañía Bambalina, diez de la noche. Acaba el ensayo general. Marisa Quintero da notas a Joaquín Lara y a Nerea Salcedo en el patio de butacas. Al rato llega Lidia Ferrer con el móvil en la mano.', lines: [
            { who: 'Marisa', text: 'Joaquín, la frase de Fermín es «Mi hijo [[no es precisamente un genio de la puntualidad|teal]]». Y tú la dices como si fuera un elogio.', en: 'Joaquín, Fermín’s line is “My son isn’t exactly a genius of punctuality.” And you say it as if it were a compliment.' },
            { who: 'Joaquín', text: 'Es que en el guion no pone que sea irónica. ¿Cómo lo va a saber el público?', en: 'But the script doesn’t say it’s ironic. How is the audience supposed to know?' },
            { who: 'Marisa', text: 'Por el contexto: el chico llega una hora tarde a su propia boda. Y por tu tono: alarga el «precisamente», saboréalo. La exageración de «genio» hace el resto.', en: 'From the context: the boy is an hour late to his own wedding. And from your tone: stretch out “precisamente”, savour it. The exaggeration in “genius” does the rest.' },
            { who: 'Nerea', text: 'Y luego mi madrina contesta: «[[¡Qué bien!|orange]] Así nos da tiempo a comer algo». Eso lo entiende todo el mundo.', en: 'And then my godmother replies: “Great! That gives us time to grab a bite.” Everybody gets that.' },
            { who: 'Joaquín', text: 'Ya, ya. [[¡Cuántas veces no me lo habrás dicho|violet]] esta semana!', en: 'Yes, yes. How many times have you told me this week!' },
            { who: 'Marisa', text: 'Unas cuantas. Pero el segundo acto [[no está nada mal|teal]], ¿eh? [[No todos|blue]] los actores consiguen ese ritmo.', en: 'Quite a few. But the second act is really good, you know. Not every actor can pull off that pace.' },
            { who: 'Lidia', text: 'Siento interrumpir. El festival de otoño nos ofrece el lunes a las cuatro de la tarde. Y a mitad de caché.', en: 'Sorry to interrupt. The autumn festival is offering us Monday at four in the afternoon. And at half our fee.' },
            { who: 'Joaquín', text: '[[Muy bonito|orange]]. Y [[encima|orange]] querrán que llenemos la sala.', en: 'Lovely. And on top of that they’ll expect us to fill the house.' },
            { who: 'Nerea', text: 'Un lunes a las cuatro. [[Lo que faltaba|orange]]. ¿Y qué les vas a contestar, Lidia?', en: 'A Monday at four. That’s all we needed. So what are you going to tell them, Lidia?' },
            { who: 'Lidia', text: 'Nada de ironía, que por escrito se malinterpreta. Diré que el horario [[no es el más adecuado|teal]] para nuestro público, [[no porque|blue]] el lunes sea mal día, [[sino porque|blue]] la obra es para adultos que trabajan.', en: 'No irony: in writing it gets misread. I’ll say the slot isn’t the most suitable for our audience, not because Monday is a bad day, but because the play is for working adults.' },
            { who: 'Marisa', text: 'Perfecto. Y [[hasta que no|violet]] contesten, no publicamos las fechas.', en: 'Perfect. And until they reply, we don’t publish the dates.' },
            { who: 'Joaquín', text: 'Tranquila, Marisa: mañana Fermín no dice [[ni una palabra|violet]] sin ironía.', en: 'Don’t worry, Marisa: tomorrow Fermín won’t say a single word without irony.' },
          ], notes: {
            'no es precisamente un genio de la puntualidad': '**Lítote irónica**: niega lo contrario («genio de la puntualidad») con «precisamente» y una exageración. Se entiende «es muy impuntual». Sin entonación irónica, el público la toma al pie de la letra.',
            '¡Qué bien!': '**Ironía verbal**: elogio ante una mala noticia (el novio llega tarde). El contexto lo hace evidente, por eso «lo entiende todo el mundo».',
            '¡Cuántas veces no me lo habrás dicho': '**No expletivo** en una exclamación con «cuántas veces» y futuro perfecto: no niega nada; subraya que Marisa lo ha repetido muchísimas veces.',
            'no está nada mal': '**Lítote de refuerzo**: con «nada», es un elogio claro y cálido (= está muy bien), más natural que un elogio directo.',
            'No todos': '**Negación parcial**: algunos actores consiguen ese ritmo y otros no. Marisa destaca que Joaquín sí.',
            'Muy bonito': '**Reproche irónico**: «muy bonito» ante algo que parece injusto. Joaquín no lo encuentra bonito en absoluto.',
            'encima': '**Encima** añade un agravio al anterior: además del mal horario y del caché, la exigencia de llenar la sala.',
            'Lo que faltaba': '**¡Lo que faltaba!**: la gota que colma el vaso. Nerea lo dice sin exclamar, con resignación.',
            'no es el más adecuado': '**Lítote atenuadora**: niega el grado máximo en lugar de decir «es inadecuado». Es la crítica cortés que cabe en un correo profesional.',
            'no porque': '**Alcance**: «no porque» + subjuntivo (sea) niega una posible causa, la que Lidia quiere descartar.',
            'sino porque': '**Corrección**: «sino porque» + indicativo (es) da la causa verdadera, que sustituye a la descartada.',
            'hasta que no': '**No expletivo**: «hasta que no contesten» = «hasta que contesten». Encaja de forma natural porque la principal es negativa (no publicamos).',
            'ni una palabra': '**Término de polaridad negativa**: detrás del verbo, «ni una palabra» va con «no». Refuerza la negación: ninguna palabra.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: 'Según Marisa, ¿qué le falta a Joaquín para que la ironía funcione?', options: ['Decir la frase más deprisa.', 'Cambiar el texto del guion.', 'La entonación: alargar «precisamente» y jugar con la exageración.'], answer: 2, why: 'Marisa dice que el contexto ya está («llega una hora tarde»); falta el tono que delata la ironía.', en: 'What is Joaquín missing for the irony to land?' },
            { prompt: '¿Qué opina Marisa del segundo acto?', options: ['Que no lo ha visto.', 'Que es muy bueno.', 'Que es flojo.'], answer: 1, why: '«No está nada mal» es una lítote de refuerzo: un elogio claro.', en: 'What does Marisa think of the second act?' },
            { prompt: '¿Por qué Lidia no quiere ironía en su respuesta al festival?', options: ['Porque por escrito se malinterpreta.', 'Porque el festival tiene razón.', 'Porque prefiere no responder.'], answer: 0, why: 'Ella lo dice: «por escrito se malinterpreta». Elige una lítote atenuadora en su lugar.', en: 'Why does Lidia avoid irony in writing?' },
          ] },
        ] },
        { title: 'El borrador de Lidia · Lidia’s draft', mascot: '/brand/mascot/seated.webp', coach: 'Crítica clara, sin ironía. Clear criticism, no sarcasm.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Marisa y tu alumno es Lidia. En cada hueco, tu alumno elige y explica por qué esa forma sirve en un correo profesional.', self: 'Completa la conversación. En cada hueco, decide qué forma sirve en un correo profesional. (Which option suits a professional email?)' } },
          { kind: 'chat-fill', title: 'Redactando el correo · Drafting the email', lines: [
            { who: 'Marisa', text: '¿Empiezas diciendo que el horario es malo?' },
            { who: 'Lidia', text: 'Mejor así: «El horario propuesto ___ para el público de la obra».', options: ['es estupendo, la verdad', 'es muy bonito', 'no nos parece el más adecuado'], answer: 2, why: 'Lítote atenuadora: crítica clara y cortés. Las otras dos son ironía, arriesgada por escrito.' },
            { who: 'Lidia', text: '«No pedimos un trato especial, ___ un horario coherente con el tipo de espectáculo».', options: ['sino que', 'pero', 'sino'], answer: 2, why: 'Corrección entre dos sustantivos: «sino». «Sino que» exigiría un verbo conjugado.' },
            { who: 'Marisa', text: 'Recuérdales que a otras compañías les han dado el fin de semana.' },
            { who: 'Lidia', text: '«Entendemos que ___ las compañías pueden actuar el sábado».', options: ['todas no', 'no todas', 'ningunas'], answer: 1, why: 'Negación parcial clara: «no todas». «Todas no» sería ambiguo por escrito.' },
            { who: 'Lidia', text: '«___ recibamos su respuesta, no confirmaremos nuestra participación».', options: ['Hasta que no', 'Aunque no', 'Porque no'], answer: 0, why: '«Hasta que no» + subjuntivo marca el límite; el «no» es expletivo y encaja con la principal negativa. «Hasta que recibamos» también valdría.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Interpretar, juzgar y reformular', coach: 'Lee lo que se quiere decir. Read what is meant.',
      steps: [
        { title: '¿Qué hace el «no»? · What does the “no” do?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase en voz alta y la clasifica. Tú preguntas: «¿Y si quitamos el no?».', self: 'Lee cada frase y clasifícala. Prueba a quitar el «no»: ¿cambia el sentido? (Try removing the “no”.)' } },
          { kind: 'classify', title: 'Cuatro «no» distintos · Four different “no”s', categories: [
            { id: 'litote', label: 'LÍTOTE: niega lo contrario', tone: 'teal' },
            { id: 'expletivo', label: 'NO EXPLETIVO: no niega', tone: 'violet' },
            { id: 'parcial', label: 'NEGACIÓN PARCIAL: niega una parte', tone: 'blue' },
            { id: 'real', label: 'NEGACIÓN REAL: niega el hecho', tone: 'neutral' },
          ], items: [
            { text: 'El autor no es ningún principiante.', answer: 'litote', why: 'Niega lo contrario para afirmar: tiene mucha experiencia.' },
            { text: 'La escenografía no me disgusta nada.', answer: 'litote', why: '«No me disgusta nada» = me gusta, y «nada» refuerza la aprobación.' },
            { text: '¡Qué no habré hecho yo por esta compañía!', answer: 'expletivo', why: 'Exclamación: el «no» no niega; significa «lo he hecho todo».' },
            { text: 'Hasta que no se apaguen las luces, nadie sale a escena.', answer: 'expletivo', why: '«Hasta que no se apaguen» = «hasta que se apaguen». La principal ya es negativa (nadie).' },
            { text: 'No todas las funciones se han agotado.', answer: 'parcial', why: 'Algunas se han agotado y otras no: se niega «todas».' },
            { text: 'No siempre ensayamos los lunes.', answer: 'parcial', why: 'A veces sí y a veces no: se niega «siempre».' },
            { text: 'Temo que el decorado no quepa en la furgoneta.', answer: 'real', why: 'Tras «temer que», el «no» niega de verdad: el miedo es que no quepa.' },
          ] },
        ] },
        { title: '¿Qué quiere decir? · What does it mean?', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Interpreta · Interpret', items: [
            { prompt: 'Tras cuatro horas de ensayo, el técnico dice: «Bueno, hoy no ha sido lo que se dice un ensayo rápido».', options: ['Que el ensayo ha sido muy largo.', 'Que el ensayo ha sido rápido.', 'Que no sabe cuánto ha durado.'], answer: 0, why: '«No ha sido lo que se dice + cualidad» niega con ironía: fue larguísimo.', en: 'Ironic understatement: it went on forever.' },
            { prompt: '«La propuesta del autor no me desagrada», dice la productora.', options: ['La rechaza con cortesía.', 'Le gusta, y lo dice con prudencia.', 'No la ha leído.'], answer: 1, why: 'Lítote prudente: «no me desagrada» = me gusta, sin comprometerse del todo.', en: 'Cautious approval.' },
            { prompt: 'Nerea descubre que han cortado su escena favorita: «Muy bonito. Y nadie me ha avisado».', options: ['Le parece bien el cambio.', 'Elogia el nuevo montaje.', 'Reprocha el cambio y que no la avisaran.'], answer: 2, why: '«Muy bonito» ante algo que la perjudica es un reproche irónico.', en: 'An ironic reproach.' },
            { prompt: 'Joaquín olvida el texto, falla un foco y entra el crítico en la sala. Marisa: «¡Lo que faltaba!».', options: ['Se alegra de que llegue el crítico.', 'La llegada del crítico es la gota que colma el vaso.', 'Pregunta qué falta.'], answer: 1, why: '«¡Lo que faltaba!» presenta lo último como el colmo de una serie de problemas.', en: 'The last straw.' },
          ] },
        ] },
        { title: '¿Qué alcance tiene? · What is the scope?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'choice', title: 'Juzga el alcance · Judge the scope', items: [
            { prompt: 'En la asamblea de la compañía, un actor escribe en el acta: «Todos los técnicos no han cobrado». ¿Qué problema hay?', options: ['Falta un «ni».', 'Ninguno: está claro.', 'Es ambigua: puede que no haya cobrado ninguno o que no hayan cobrado todos.'], answer: 2, why: '«Todos no» es ambiguo por escrito. Mejor «Ningún técnico ha cobrado» o «No todos los técnicos han cobrado».', en: 'Written “todos no” is ambiguous.' },
            { prompt: '«El público no siempre entiende la ironía». ¿Qué significa?', options: ['Que siempre la entiende.', 'Que a veces la entiende y a veces no.', 'Que nunca la entiende.'], answer: 1, why: '«No siempre» es negación parcial: niega «siempre», no el hecho de entender.', en: 'Partial negation of “always”.' },
            { prompt: '«No vamos al festival porque nos paguen». ¿Van al festival?', options: ['Sí, pero no por el dinero.', 'No, porque no les pagan.', 'No se sabe si van.'], answer: 0, why: 'Con «porque» + subjuntivo, la negación afecta solo a la causa: van, por otros motivos.', en: 'The subjunctive denies only the reason.' },
            { prompt: '«No vamos al festival porque no nos pagan». ¿Van al festival?', options: ['Sí, pero no por el dinero.', 'Sí, aunque no les pagan.', 'No; la causa es que no les pagan.'], answer: 2, why: 'Con indicativo, se niega el hecho (no van) y «porque» da la causa.', en: 'The indicative denies the event and gives its cause.' },
          ] },
        ] },
        { title: 'Revisa el programa de mano · Check the programme', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases del programa de mano y de los correos de la compañía. Tu alumno decide si cada una está bien y, si no, elige la corrección y explica por qué.', self: 'Son frases del programa de mano y de los correos de la compañía. ¿Están bien? Si no, elige la corrección. (Is each sentence right? If not, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'Nerea Salcedo no es la directora, pero la ayudante de dirección.', ok: false, options: ['Nerea Salcedo no es la directora, si no la ayudante de dirección.', 'Nerea Salcedo no es la directora, sino que la ayudante de dirección.', 'Nerea Salcedo no es la directora, sino la ayudante de dirección.'], answer: 2, why: 'Corrección entre dos sustantivos: «sino», en una palabra. «Sino que» va ante un verbo conjugado y «si no» es condicional.' },
            { sentence: 'El público se rió en ningún momento del primer acto.', ok: false, options: ['El público no se rió en algún momento del primer acto.', 'El público no se rió en ningún momento del primer acto.', 'En ningún momento no se rió el público del primer acto.'], answer: 1, why: '«En ningún momento» detrás del verbo necesita «no». Delante del verbo niega solo, sin «no»: «En ningún momento se rió».' },
            { sentence: 'Hasta que no termine la función, no se permite la entrada en la sala.', ok: true, why: 'Correcta: «no» expletivo con la principal negativa, aceptado por la norma. «Hasta que termine» también vale.' },
            { sentence: 'La crítica no decía que la obra fuera mala, sino recomendaba verla.', ok: false, options: ['…, pero recomendaba verla.', '…, si no que recomendaba verla.', '…, sino que recomendaba verla.'], answer: 2, why: 'Corrección con verbo conjugado (recomendaba): «sino que». «Pero» no corrige, y «si no» es condicional.' },
          ] },
        ] },
        { title: 'Entre bastidores · Backstage', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Nerea y Joaquín, en el descanso · During the interval', lines: [
            { who: 'Nerea', text: 'El crítico se ha ido en el descanso. Y ___ ha tenido el móvil sonando media función.', options: ['en absoluto', 'encima', 'sino'], answer: 1, why: '«Encima» añade un segundo agravio al primero (irse en el descanso).' },
            { who: 'Joaquín', text: '¿Te ha molestado que me equivocara en la segunda escena?' },
            { who: 'Nerea', text: '___. Nadie se ha dado cuenta.', options: ['Por supuesto', 'Absolutamente', 'En absoluto'], answer: 2, why: '«En absoluto», sola, es un «no» rotundo. «Absolutamente» y «Por supuesto» se entenderían como un «sí, me ha molestado».' },
            { who: 'Joaquín', text: 'Menos mal. ¿Y el público?' },
            { who: 'Nerea', text: 'Encantado. No he visto ___ bostezo en toda la sala.', options: ['ni un solo', 'ningún no', 'algún'], answer: 0, why: '«Ni un solo» + sustantivo refuerza la negación del verbo. «No he visto algún bostezo» no es natural en español.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['No', 'todos', 'los', 'actores', 'saben', 'improvisar.'], accept: ['No todos los actores saben improvisar.'], en: 'Not all actors can improvise.' },
            { tiles: ['El', 'problema', 'no', 'es', 'el', 'texto,', 'sino', 'el', 'ritmo.'], accept: ['El problema no es el texto, sino el ritmo.'], en: 'The problem isn’t the script, it’s the pace.' },
            { tiles: ['Hasta', 'que', 'no', 'llegue', 'el', 'técnico,', 'no', 'encendemos', 'los', 'focos.'], accept: ['Hasta que no llegue el técnico, no encendemos los focos.'], en: 'We won’t switch the lights on until the technician arrives.' },
          ] },
        ] },
        { title: 'Dilo con una lítote · Say it with litotes', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno convierte cada afirmación en una lítote y la lee en voz alta dos veces: una con tono neutro y otra con tono irónico. Tú dices cuál suena mejor.', self: 'Convierte cada afirmación en una lítote y léela en voz alta con la entonación adecuada. (Turn each statement into an understatement.)' } },
          { kind: 'rewrite', title: 'De la afirmación a la lítote · From statement to litotes', items: [
            { prompt: 'El vestuario es caro.', instruction: 'Lítote irónica con «precisamente»: empieza por «El vestuario no es».', accept: ['El vestuario no es precisamente barato', 'El vestuario no es precisamente económico'] },
            { prompt: 'La adaptación es muy buena.', instruction: 'Elogio cálido con «nada»: empieza por «La adaptación no».', accept: ['La adaptación no está nada mal', 'La adaptación no es nada mala'] },
            { prompt: 'El productor es muy listo.', instruction: 'Lítote con «tonto».', accept: ['El productor no es tonto', 'El productor no es nada tonto', 'El productor no tiene un pelo de tonto'] },
            { prompt: 'Todo el mundo sabe que la sala necesita una reforma.', instruction: 'Lítote con «ningún secreto».', accept: ['No es ningún secreto que la sala necesita una reforma', 'Que la sala necesita una reforma no es ningún secreto', 'Que la sala necesite una reforma no es ningún secreto'] },
            { prompt: 'El ensayo fue larguísimo.', instruction: 'Lítote irónica con «que digamos»: empieza por «El ensayo no fue».', accept: ['El ensayo no fue corto que digamos', 'El ensayo no fue muy corto que digamos', 'El ensayo no fue breve que digamos', 'El ensayo no fue muy breve que digamos'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno describe con tres lítotes (una de refuerzo, una irónica y una atenuadora) un espectáculo, un partido o una película que ha visto hace poco.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La crítica en la radio', coach: 'Escucha lo que dice y lo que quiere decir. Hear what is said and what is meant.',
      steps: [
        { title: '«Butaca de primera fila» · Front-row seat', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada lítote e ironía y dice qué piensa de verdad la crítica.', self: 'Escucha una vez para la idea general. En la segunda, anota cada lítote e ironía. Vas a oír «patio de butacas» (stalls) y «cambios de escena» (scene changes).' } },
          { kind: 'listen', title: 'Crítica de «Una boda tranquila»', channel: 'RADIO · BUTACA DE PRIMERA FILA', src: '/audio/grammar-live/523.mp3',
            before: 'Adela Montoya, crítica de teatro, comenta en la radio el estreno de «Una boda tranquila». ¿Crees que le ha gustado? ¿Cómo lo dirá sin decirlo directamente? (Did she like it? How will she say so indirectly?)',
            gist: { prompt: '¿Qué opina Adela de la obra? · What does Adela think of the play?', options: ['No le ha gustado y recomienda no verla.', 'No ha visto la obra entera.', 'Le ha gustado mucho, con algún defecto menor, y critica el horario del festival.'], answer: 2, why: 'Termina con «no está nada mal» y «lo mejor que he visto esta temporada»; los defectos son de ritmo, y la ironía va contra el horario.', en: 'Positive with minor reservations, and ironic about the festival slot.' },
            details: [
              { prompt: '¿Por qué dice que el título no es fiel a la obra?', options: ['Porque en la boda pasa de todo.', 'Porque el título es demasiado largo.', 'Porque la obra no trata de una boda.'], answer: 0, why: '«El título no es precisamente fiel a la obra: en esa boda pasa de todo».', en: 'Why isn’t the title faithful?' },
              { prompt: '¿Qué defecto señala?', options: ['La interpretación de Joaquín Lara.', 'El ritmo de algunos cambios de escena, no el texto.', 'El texto del autor.'], answer: 1, why: '«El problema no es el texto, sino el ritmo de las transiciones».', en: 'What weakness does she point out?' },
              { prompt: '¿Cómo reaccionó el público?', options: ['Se aburrió en el segundo acto.', 'Se fue en el descanso.', 'No se aburrió en ningún momento.'], answer: 2, why: '«No vi ni un solo bostezo en el patio de butacas».', en: 'How did the audience react?' },
              { prompt: '¿Qué piensa del horario del festival?', options: ['Que no encaja con un público adulto que trabaja.', 'Que no le importa.', 'Que es ideal.'], answer: 0, why: '«Muy bonito: una comedia para adultos que trabajan, programada en horario de oficina». Es un reproche irónico.', en: 'What does she think of the festival slot?' },
            ],
            transcript: 'Buenas noches y bienvenidos a «Butaca de primera fila». Anoche se estrenó «Una boda tranquila», de la compañía Bambalina, y ya les adelanto que el título [[no es precisamente|teal]] fiel a la obra: en esa boda pasa de todo. El novio llega una hora tarde y [[encima|orange]] sin los anillos. «[[¡Qué bien!|orange]]», dice la madrina, y la sala entera se ríe, porque todos entendemos lo contrario. Joaquín Lara, el padre del novio, [[no es ningún principiante|teal]], y se nota: cada frase irónica la alarga lo justo. ¿Defectos? [[No todos|blue]] los cambios de escena funcionan, y el segundo acto se alarga un poco. Pero el problema [[no es el texto, sino|blue]] el ritmo de las transiciones, y eso se corrige con funciones. En hora y media no vi [[ni un solo|violet]] bostezo en el patio de butacas. Eso sí: el festival de otoño les ofrece un lunes a las cuatro de la tarde. [[Muy bonito|orange]]: una comedia para adultos que trabajan, programada en horario de oficina. [[Hasta que no|violet]] cambien ese horario, no cuenten conmigo en el festival; volveré a verla en su sala, un sábado. En resumen: [[no está nada mal|teal]]. De hecho, es lo mejor que he visto esta temporada. Buenas noches.',
            reply: { teacher: 'Tú eres el programador del festival y llamas a la radio para defender el horario. Tu alumno es Adela y te responde con firmeza, sin ironía.', self: 'Resume la crítica en voz alta en tres frases directas, sin lítotes ni ironía. Después dila otra vez con dos lítotes. (Direct first, then with understatement.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decir sin decir', coach: 'Matiza, corrige, ironiza con cuidado. Nuance, correct, ironise with care.',
      steps: [
        { title: 'Elogios, críticas e ironía · Praise, criticism and irony', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde durante uno o dos minutos. Si dice algo de forma demasiado directa, tú preguntas «¿Y con una lítote?» y tu alumno lo reformula.', self: 'Responde a cada tarjeta en voz alta durante uno o dos minutos. Usa al menos dos formas de colores distintos en cada respuesta. (Use at least two forms of different colours.)' } },
          { kind: 'talk', cards: [
            { q: 'Elogia sin exagerar algo que te ha gustado mucho: una película, un restaurante, un libro. · Praise something through understatement.', followUps: ['¿Qué tiene de especial?', '¿Se lo recomendarías a cualquiera?', '¿Tiene algún defecto?'], phrases: ['[[No está nada mal|teal]]…', '[[No es ningún|teal]]…', '[[No es poca cosa|teal]]…', 'De hecho,…'], hint: 'Empieza con una lítote de refuerzo y después da datos concretos que la justifiquen.', example: 'El restaurante nuevo de mi barrio no está nada mal. El cocinero no es ningún principiante: trabajó diez años en hoteles. Y que mantenga los precios con la calidad que ofrece no es poca cosa. De hecho, ya he ido tres veces.' },
            { q: 'Critica con una lítote irónica un lugar o un servicio que conoces bien. · Criticise something with ironic understatement.', followUps: ['¿Cómo lo dirías a quien lo dirige?', '¿Hay algo bueno que reconocer?'], phrases: ['[[No es precisamente|teal]]…', '[[… que digamos|teal]]', '[[No es lo que se dice|teal]]…', '[[No es muy|teal]]…'], hint: 'Usa dos lítotes irónicas y después cambia a una lítote atenuadora, como si hablaras con el responsable.', example: 'El gimnasio de mi trabajo no es precisamente moderno: las máquinas son de otra época. Y el vestuario no es lo que se dice limpio. Si hablara con el encargado, le diría que el mantenimiento no me parece del todo suficiente.' },
            { q: 'Eres Nerea: cuenta, con ironía, un día en que todo salió mal. · Tell the story of a disastrous day, ironically.', followUps: ['¿Qué fue lo peor?', '¿Cómo acabó el día?'], phrases: ['[[¡Qué bien!|orange]]…', '[[Encima|orange]]…', '[[¡Lo que faltaba!|orange]]', '[[Muy bonito|orange]]…'], hint: 'Narra los hechos con claridad para que la ironía se entienda: sin contexto, no funciona.', example: 'Me levanto tarde, pierdo el tren y, al llegar al teatro, me dicen que han cambiado mi escena. ¡Qué bien!, pensé. Encima, el vestuario no estaba listo. Y cuando por fin salgo a ensayar, se va la luz. ¡Lo que faltaba! Al final nos fuimos todos a cenar, que era lo único sensato.' },
            { q: 'Alguien tiene ideas equivocadas sobre ti o sobre tu trabajo. Corrígelas y matízalas. · Correct and qualify misconceptions.', followUps: ['¿Qué es lo que más se malinterpreta?', '¿Hay algo de verdad en esas ideas?'], phrases: ['No…, [[sino|blue]]…', 'No…, [[sino que|blue]]…', 'No…, [[pero|blue]]…', '[[No porque|blue]]…, sino porque…'], hint: 'Usa «sino» para corregir y «pero» para añadir un contraste; con verbo conjugado, «sino que».', example: 'Mucha gente cree que soy profesora. No soy profesora, sino traductora. Y no paso el día leyendo novelas, sino que traduzco contratos. No es un trabajo emocionante, pero me gusta. Me dedico a esto no porque sea fácil, sino porque me permite trabajar desde casa.' },
            { q: 'Habla de un grupo que conoces bien (tu equipo, tu familia, tus vecinos) con precisión: ¿qué hacen todos, algunos y nadie? · Generalise carefully about a group.', followUps: ['¿Qué generalización injusta se oye a menudo sobre ese grupo?', '¿Cómo la matizarías?'], phrases: ['[[No todos|blue]]…', '[[No siempre|blue]]…', 'Ninguno…', 'No… [[ni un|violet]]…'], hint: 'Distingue la negación parcial (no todos) de la total (ninguno, nadie) y evita «todos no».', example: 'En mi equipo no todos trabajamos desde la oficina: tres compañeros viven en otra ciudad. No siempre coincidimos en las reuniones, pero ninguno ha faltado a una entrega. Eso sí, en dos años no he oído ni una queja del cliente.' },
            { q: '¿Cuándo es mejor evitar la ironía? ¿Se usa más o menos en tu lengua que en español? · When should irony be avoided?', followUps: ['¿Te ha pasado que alguien no entendiera tu ironía?', '¿Usarías ironía en un correo de trabajo?', '¿Qué haces cuando no sabes si te hablan en serio?'], phrases: ['[[En absoluto|violet]]…', '[[Para nada|violet]]…', 'No es que…, [[sino|blue]]…', '[[Hasta que no|violet]]…, no…'], hint: 'Da tu opinión, pon un ejemplo propio y distingue entre la conversación y lo escrito.', example: 'Yo no usaría ironía en un correo de trabajo, en absoluto. No es que no tenga sentido del humor, sino que por escrito no hay entonación. Una vez le mandé «¡Qué bien!» a un cliente que había cancelado un pedido y se lo tomó como una burla. Hasta que no conozco bien a alguien, no me arriesgo.', next: 'Ahora, el cambio de papeles.', teacher: 'Tú cuentas una anécdota con ironía y tu alumno, sin preguntarte, dice qué piensas de verdad y qué pista se lo ha indicado.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú dices tres frases (una lítote, una ironía y una literal) y tu alumno decide cuál es cuál y por qué.', self: 'Graba tus respuestas a dos tarjetas y escúchalas: ¿se entiende la ironía solo por tu entonación? (Can the irony be heard in your intonation?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La respuesta al festival', coach: 'Firme, claro y sin ironía. Firm, clear and irony-free.',
      steps: [
        { title: 'El correo de Lidia · Lidia’s email', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el correo en voz alta y tú dices si alguna frase podría leerse como ironía.', self: 'Escribe el correo y toca «Revisar mi texto». Después léelo como si fueras el programador: ¿alguna frase podría ofenderte? (Could any sentence be read as sarcasm?)' } },
          { kind: 'write', title: 'Correo profesional · Professional email', situation: 'Eres Lidia Ferrer, responsable de comunicación de la compañía Bambalina. Escribes a Ernesto Vidal, programador del Festival de Otoño, que les ofrece el lunes a las cuatro de la tarde y la mitad del caché habitual. Quieres ir al festival, pero con otro horario. (Write to the festival programmer: you want to take part, but in a different slot.)', task: [
            'Agradece la invitación y expresa tu desacuerdo con al menos dos lítotes atenuadoras (no nos parece del todo…, no es el más…, no es un detalle menor).',
            'Explica la razón con «no porque…, sino porque…» o con «no…, sino…».',
            'Usa una negación parcial precisa (no todas, no siempre) y evita «todas… no».',
            'Pon una condición con «hasta que (no)…» y una principal negativa.',
            'Evita la ironía: nada de «¡Qué bien!», «Muy bonito», «Lo que faltaba» ni «encima».',
          ], starters: ['Estimado señor Vidal:', 'Muchas gracias por…', 'Sin embargo, el horario propuesto no nos parece…', 'No lo decimos porque…, sino porque…', 'Hasta que no…, no…'],
            words: ['no del todo', 'no es el más', 'no es un detalle menor', 'no porque', 'sino', 'no todas', 'hasta que no', 'le proponemos', 'un cordial saludo'],
            model: 'Estimado señor Vidal: Muchas gracias por invitar a «Una boda tranquila» al Festival de Otoño; es una noticia que nos alegra mucho. Sin embargo, el horario propuesto, el lunes a las cuatro de la tarde, no nos parece del todo adecuado. No lo decimos porque el lunes sea un mal día, sino porque la obra está pensada para un público adulto que, a esa hora, está trabajando. Por otra parte, la reducción del caché no es un detalle menor para una compañía pequeña como la nuestra. Sabemos que no todas las compañías pueden actuar el fin de semana, y no pedimos un trato especial, sino un horario coherente con el tipo de espectáculo. Le proponemos el jueves o el viernes, a partir de las ocho de la tarde, con las condiciones económicas de la edición anterior. Hasta que no tengamos su respuesta, no anunciaremos nuestra participación, aunque nos encantaría llegar a un acuerdo. Quedo a su disposición para hablarlo por teléfono. Un cordial saludo, Lidia Ferrer, responsable de comunicación de la compañía Bambalina.',
            minWords: 150,
            checks: [
              { label: 'Una lítote atenuadora (no nos parece del todo…, no es el más…, no es un detalle menor…)', pattern: '(?<!\\p{L})no\\s+(?:nos\\s+|me\\s+)?(?:es|son|parece|parecen|resulta|resultan)\\s+(?:del\\s+todo|el\\s+más|la\\s+más|muy|ningún|ninguna|un\\s+detalle\\s+menor|poca\\s+cosa)(?!\\p{L})', tip: 'Critica con suavidad: «el horario no nos parece del todo adecuado».' },
              { label: 'Una corrección con «sino»', pattern: '(?<!\\p{L})sino(?!\\p{L})', tip: 'Corrige: «no pedimos un trato especial, sino un horario coherente».' },
              { label: 'Una negación parcial (no todos, no todas, no siempre)', pattern: '(?<!\\p{L})no\\s+(?:todos|todas|todo|toda|siempre)(?!\\p{L})', tip: 'Matiza con precisión: «no todas las compañías pueden…».' },
              { label: 'Una condición con «hasta que»', pattern: '(?<!\\p{L})hasta\\s+que(?!\\p{L})', tip: 'Pon un límite: «Hasta que no tengamos su respuesta, no anunciaremos…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:muy\\s+bonito|lo\\s+que\\s+faltaba)(?!\\p{L})', why: '«Muy bonito» y «Lo que faltaba» son ironía: en un correo profesional pueden leerse como desprecio.' },
              { pattern: '¡\\s*(?:qué\\s+bien|estupendo|genial)', why: 'Una exclamación de alegría ante una mala oferta se leerá como ironía. Di lo que piensas con una lítote.' },
              { pattern: '(?<!\\p{L})encima(?!\\p{L})(?!\\s+de(?!\\p{L}))', why: '«Encima» acumula quejas y suena a reproche. En un correo profesional, mejor «por otra parte» o «además».' },
              { pattern: '(?<!\\p{L})(?:todos|todas)\\s+(?:los|las)\\s+\\p{L}+\\s+no(?!\\p{L})', why: '«Todos/as los/las… no» es ambiguo por escrito. Si quieres decir que algunos sí, escribe «No todos/as…».' },
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
            { tone: 'teal', label: 'LÍTOTE', formula: 'no + lo contrario · no + nada / ningún · no + precisamente / lo que se dice / que digamos · no + muy', example: 'No está nada mal. · No es precisamente barato.', caption: 'Refuerza, ironiza o atenúa según la forma y el contexto.', en: 'Denying the opposite: emphatic with “nada”, ironic with “precisamente”, softening with “muy”.' },
            { tone: 'violet', label: 'NO EXPLETIVO Y POLARIDAD', formula: 'hasta que (no) + subj. · ¡Cuántas veces no…! · ni + sust. · en absoluto · para nada', example: 'Hasta que no contesten, no publicamos nada.', caption: 'Quita el «no»: si nada cambia, es expletivo. Tras «temer que», niega de verdad.', en: 'An expletive “no” can be removed with no change in meaning; after verbs of fear it is a real negation.' },
            { tone: 'blue', label: 'ALCANCE Y CORRECCIÓN', formula: 'no todos / no siempre · no… porque + subj. · no… sino (que) ≠ no… pero', example: 'No todos los actores vinieron. · No es actor, sino director.', caption: 'Niega solo una parte o solo la causa; «sino» sustituye, «pero» contrasta.', en: 'Scope: deny a part or just the reason. “Sino” replaces; “pero” contrasts.' },
            { tone: 'orange', label: 'IRONÍA VERBAL', formula: '¡Qué bien! · Muy bonito · encima · ¡Lo que faltaba!', example: 'Llega tarde y encima se queja. ¡Lo que faltaba!', caption: 'Se reconoce por el contexto, la exageración y la entonación; por escrito, con cuidado.', en: 'Recognised through context, exaggeration and intonation; risky in writing.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Ante cada «no», pregunta: **¿qué niega de verdad?** Lo contrario (lítote), nada (expletivo), una parte (alcance) o el hecho entero. Y ante cada elogio: **¿encaja con los hechos?** Si no encaja, es ironía. Por escrito, elige la lítote atenuadora antes que la ironía.', en: 'For every “no”, ask what it really negates; for every compliment, ask whether it fits the facts. In writing, prefer softening understatement to irony.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: '«La conferencia no fue precisamente amena». ¿Cómo fue?', options: ['Muy entretenida.', 'Bastante aburrida.', 'No se sabe.'], answer: 1, why: 'Lítote irónica: niega «amena» con «precisamente» para decir lo contrario.', en: 'The talk wasn’t exactly entertaining.' },
            { prompt: 'Hasta que no ___ el contrato, no empezamos.', options: ['firmen', 'firman', 'firmarán'], answer: 0, why: '«Hasta que» referido al futuro va con subjuntivo; el «no» es expletivo.', en: 'We won’t start until they sign the contract.' },
            { prompt: '«No todos aprobaron el examen». ¿Cuántos aprobaron?', options: ['Todos.', 'Algunos, pero no todos.', 'Ninguno.'], answer: 1, why: 'Negación parcial: se niega «todos», no el aprobado.', en: 'Not everybody passed.' },
            { prompt: 'No es mi jefa, ___ mi socia.', options: ['sino', 'si no', 'pero'], answer: 0, why: 'Corrección entre dos sustantivos: «sino».', en: 'She isn’t my boss but my business partner.' },
            { prompt: '—¿Te importa esperar cinco minutos? —___ (= no me importa).', options: ['Absolutamente.', 'Por supuesto.', 'En absoluto.'], answer: 2, why: '«En absoluto», sola, es un «no» rotundo. «Absolutamente» y «Por supuesto» afirman: se entendería que sí te importa.', en: 'Not at all.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro escenario, el mismo matiz. New setting, same nuance.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: tu alumno escribe la reseña de un hotel en una web de viajes. Reescribe cada frase y explica qué ha cambiado.', self: 'Ahora escribes la reseña de un hotel en una web de viajes. Reescribe cada frase según la instrucción. (A hotel review.)' } },
          { kind: 'rewrite', title: 'Una reseña con matiz · A nuanced review', items: [
            { prompt: 'El hotel es ruidoso.', instruction: 'Lítote irónica con «precisamente»: empieza por «El hotel no es».', accept: ['El hotel no es precisamente silencioso', 'El hotel no es precisamente tranquilo'] },
            { prompt: 'Todas las habitaciones no tienen vistas al mar. (Quieres decir que algunas sí.)', instruction: 'Quita la ambigüedad con una negación parcial.', accept: ['No todas las habitaciones tienen vistas al mar'] },
            { prompt: 'El desayuno no es un bufé. Es un menú servido en la mesa.', instruction: 'Une las dos frases con «no… sino».', accept: ['El desayuno no es un bufé, sino un menú servido en la mesa', 'El desayuno no es un bufé sino un menú servido en la mesa'] },
          ] },
        ] },
        { title: 'Ampliación · Más «no» sin negación y la ironía entre comillas', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** Con **por poco**, el «no» también puede ser expletivo: «**Por poco no** me caigo» = «Por poco me caigo» (casi me caí; el presente aquí cuenta un hecho pasado). **2.** En exclamaciones con **qué**, **cuánto** o **cuántas veces**, el «no» enfatiza: «¡**Qué no** haría yo por ti!» = haría cualquier cosa. **3.** Por escrito, las **comillas** pueden señalar ironía: «Nos ofrecieron un horario “ideal”: el lunes a las cuatro». Es una marca clara, pero también muy agresiva; en un texto profesional, evítala. **4.** «**Todos no**» es natural con un contraste explícito, porque la entonación queda clara: «Todos no, solo algunos».', en: 'For strong students or spare time. With “por poco”, “no” can be expletive: “Por poco no me caigo” = I nearly fell. In exclamations with “qué”, “cuánto” or “cuántas veces”, “no” adds emphasis: “¡Qué no haría yo por ti!” = I’d do anything for you. In writing, quotation marks can flag irony, but they sound aggressive in professional texts. “Todos no” is natural with an explicit contrast: “Not all of them, only some.”' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«Por poco no me caigo del escenario». ¿Se cayó?', options: ['Sí, se cayó.', 'No, pero estuvo a punto.', 'No se sabe.'], answer: 1, why: 'Con «por poco», el «no» puede ser expletivo: «Por poco no me caigo» = «Por poco me caigo»: casi se cae, pero no se cayó. El presente cuenta aquí un hecho pasado.', en: 'I nearly fell off the stage.' },
            { prompt: '«¡Qué no habrá oído este teatro en cien años!». ¿Qué significa?', options: ['Que nadie sabe qué ha oído.', 'Que el teatro no ha oído nada.', 'Que el teatro lo ha oído todo.'], answer: 2, why: 'Exclamación con «qué» y futuro perfecto: el «no» es expletivo y enfático. Ha oído de todo.', en: 'What hasn’t this theatre heard in a hundred years! = It has heard everything.' },
            { prompt: 'En un informe para el ayuntamiento, Lidia quiere criticar el horario. ¿Qué frase es adecuada?', options: ['El horario ofrecido, el lunes a las cuatro, no se ajusta al público de la obra.', 'Nos ofrecieron el lunes a las cuatro. ¡Genial!', 'Nos ofrecieron un horario «ideal»: el lunes a las cuatro.'], answer: 0, why: 'En un informe, crítica directa o atenuada. Las comillas irónicas y «¡Genial!» son ironía, demasiado agresiva para ese registro.', en: 'Which wording suits an official report?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca en un periódico una columna de opinión con ironía, subraya dos lítotes o ironías y las reescribe en estilo neutro para un informe.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 224 · Marcadores conversacionales de negociación fina', text: 'Hoy has visto cómo decir más de lo que dicen las palabras: lítotes, ironía y negaciones con matiz. En la clase 224 llevas ese control a la conversación: los marcadores con los que se negocia en tiempo real, para conceder, matizar, ganar tiempo o rechazar sin romper el acuerdo.', en: 'Today you saw how to mean more than the words say: litotes, irony and nuanced negation. Class 224 takes that control into live conversation: the discourse markers used to negotiate in real time, conceding, qualifying, buying time or declining without breaking the deal.', href: '/gramatica/marcadores-conversacionales-de-negociacion-fina', label: 'Ir a la clase 224' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “No es tonto”, “No es muy listo” y “No es precisamente un genio”?». Respuesta esperada: es listo; es más bien torpe (crítica atenuada); es poco listo (crítica irónica). Tarea: el correo de Escribir.' },
        ] },
      ],
    },
  ],
};
