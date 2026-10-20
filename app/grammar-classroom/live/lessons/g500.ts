import type { LiveLesson } from '../types';

/**
 * Lesson 500 · C1 · Uso no literal de tiempos verbales (course unit G200).
 * Builds on G049-G050 (imperfecto), G057 (futuro), G103 (lesson 146: condicional de
 * cortesía), G161 (lesson 461: future/conditional of probability, «Será listo, pero…»),
 * G164 (lesson 464: register, quería / quisiera, present as an order) and G174 (lesson 474).
 * Probability is NOT the core here: it is only the reference point. C1 step (PCIC C1 §9,
 * NGLE §23-24): a tense can leave its time to express an attitude, and the learner tells the
 * real value from context. Imperfecto: de cortesía (Quería pedirte un favor; Venía a
 * preguntarte si…; Te llamaba para…; ¿Qué deseaba?), lúdico (Yo era el médico y tú venías…),
 * onírico (Soñé que el teatro se inundaba…), citativo (¿Cómo te llamabas?; ¿Tú no eras de…?)
 * and prospectivo (Mañana me iba de viaje, pero se canceló). Presente: histórico (written and
 * conversational: Ayer estoy en la puerta y viene el conserje…), por futuro (Mañana te llamo),
 * de mandato (Tú te sientas y miras). Futuro: de mandato (No matarás; Harás lo que te digo;
 * normative texts), de sorpresa o indignación (¡Será posible!), concesivo (recalled from G161).
 * Condicional: de cortesía (¿Podrías…?), de atenuación (Yo diría que…), de rumor only as
 * preview (G208). No perfect with prospective value. Ampliación: presente and imperfecto in
 * the press and in history (headlines, imperfecto narrativo) + rumour preview.
 * Scene: the amateur theatre group La Buhardilla rehearses at a neighbourhood cultural centre.
 * Olga Reyes directs; Simón Prieto is the veteran actor; Nerea Lozano is new; Ramiro Fuentes
 * runs the lights; Amalia Valverde (usted) manages the centre. Explorar: Nerea's first
 * rehearsal. Escuchar: Olga's audio to the cast (es-CO-SalomeNeural, ustedes). Escribir:
 * Olga's email to Amalia Valverde. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 500,
  level: 'C1',
  title: 'Uso no literal de tiempos verbales',
  subtitle: 'Reconocer y usar tiempos fuera de su tiempo: pedir con tacto, imaginar, citar, contar con viveza, ordenar y mostrar sorpresa.',
  legend: [
    { tone: 'teal', label: 'IMPERFECTO NO LITERAL · quería, venía a, yo era el rey, ¿cómo te llamabas?, mañana me iba' },
    { tone: 'blue', label: 'PRESENTE NO LITERAL · ayer estoy en…, mañana te llamo, tú te callas' },
    { tone: 'orange', label: 'FUTURO NO LITERAL · no matarás, ¡será posible!, será caro, pero…' },
    { tone: 'violet', label: 'CONDICIONAL NO LITERAL · ¿podrías…?, yo diría que…' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tiempos fuera de su tiempo', coach: 'La forma dice un tiempo; el contexto, otro. Form says one time, context another.',
      steps: [
        { title: 'Un grupo de teatro · A theatre group', blocks: [
          { kind: 'lead', text: 'Lunes, siete de la tarde. En la sala del centro cultural del barrio ensaya el grupo de teatro aficionado La Buhardilla. Olga, la directora, prepara el estreno de una comedia, pero le faltan horas de ensayo, un foco y una actriz. En este grupo se pide, se juega, se ordena y se cuentan anécdotas, y casi nunca el verbo está en el tiempo que esperarías: **el tiempo verbal no siempre señala el tiempo real**.', en: 'An amateur theatre group rehearses at a neighbourhood cultural centre. The director needs more rehearsal time, a spotlight and an actress. In this group people ask favours, play, give orders and tell stories, and the verb is rarely in the tense you would expect. That is today’s topic: a tense can step out of its own time to express an attitude.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres columnas. Tu alumno dice en cada caso cuándo ocurre de verdad lo que dice «quería» o «era»: ¿antes, ahora o en un mundo imaginado?', self: 'Lee las tres frases en voz alta y decide: ¿pasado real, ahora o un mundo imaginado? (Real past, now, or an imagined world?)' } },
          { kind: 'compare', title: 'El mismo imperfecto, tres momentos · One imperfect, three moments', columns: [
            { tone: 'neutral', label: 'PASADO REAL', sentence: 'De niña, Olga **quería** ser actriz.', idea: 'Uso literal: un deseo que duró en el pasado.', en: 'Literal use: a wish she had back then.' },
            { tone: 'teal', label: 'AHORA, CON DISTANCIA', sentence: 'Señora Valverde, [[quería|teal]] pedirle un favor.', idea: 'Imperfecto de cortesía: la petición es ahora; el pasado solo pone distancia.', en: 'Polite imperfect: the request is happening now; the past form just adds distance, like “I was wondering if…”.' },
            { tone: 'teal', label: 'MUNDO IMAGINADO', sentence: 'A ver: yo [[era|teal]] la reina y tú [[eras|teal]] mi cocinero.', idea: 'Imperfecto lúdico: crea la ficción de un juego o una improvisación.', en: 'Imperfect of make-believe: it sets up the fiction of a game or an improvisation, “let’s say I’m the queen…”.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Olga, en la puerta del despacho de la señora Valverde.', prompt: '«Venía a pedirle un favor». ¿Cuándo pide Olga el favor?', options: ['Ahora mismo: el imperfecto solo suaviza la petición.', 'Ayer, cuando vino al centro.', 'Mañana, en la próxima visita.'], answer: 0, why: 'Imperfecto de cortesía: el hecho es presente («vengo a pedirle»); el pasado aleja la petición y la hace menos directa.', en: '“I came to ask you a favour.” When is the favour being asked?' },
            { prompt: '«El estreno era el viernes, pero lo hemos pasado al sábado». ¿Cuándo es ahora el estreno?', options: ['El sábado.', 'Ya pasó.', 'El viernes.'], answer: 0, why: 'Imperfecto prospectivo: «era el viernes» presenta el plan tal como estaba previsto; el «pero» anuncia el cambio.', en: '“The premiere was going to be on Friday, but we’ve moved it to Saturday.” When is it now?' },
          ] },
        ] },
        { title: 'Imperfecto: pedir y recordar · Imperfect: asking and recalling', mascot: '/brand/mascot/studying.webp', coach: 'Pasado en la forma, presente en el sentido. Past form, present meaning.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'IMPERFECTO DE CORTESÍA Y CITATIVO', question: '¿Pides algo ahora o recuperas algo que ya se dijo?', en: 'Two present-time uses of the imperfect. Polite: with verbs of wishing, needing, coming or calling (querer, desear, necesitar, venir a, llamar para), the imperfect softens a request made now, like English “I wanted to ask…”, “I was calling to…”. Quoting: “¿Cómo te llamabas?” means “remind me of your name”: you were told before and you are recovering it. The preterite never has these uses.', formula: ['quería / deseaba / necesitaba / venía a / te llamaba para + infinitivo = petición actual con distancia', '¿Cómo te llamabas? · ¿Tú no eras de…? · ¿A qué hora era…? = algo ya dicho que recupero'],
            meaning: 'En los dos casos hablas **de ahora**. La cortesía aleja la petición para no imponer; el **imperfecto citativo** marca que el dato ya se dijo antes: no preguntas desde cero, **pides que te lo recuerden**.',
            examples: [
              { es: '[[Venía a preguntarte|teal]] si podrías ayudarme con el decorado.', en: 'I came to ask whether you could help me with the set (a request now; «si podrías»: “whether”, so the conditional is fine).' },
              { es: 'Ramiro, te [[llamaba|teal]] para confirmar la hora del ensayo.', en: 'Ramiro, I’m calling to confirm the rehearsal time.' },
              { es: 'Perdona, ¿cómo [[te llamabas|teal]]? Me lo dijiste ayer. · ¿Tú no [[eras|teal]] de Cali?', en: 'Sorry, what was your name again? You told me yesterday. · Aren’t you from Cali? (I think you said so)' },
            ] },
          { kind: 'table', title: 'De más directo a más distante · From more direct to more distant', head: ['Directo', 'Con imperfecto', 'Con condicional o subjuntivo'], rows: [
            ['**Quiero** pedirle un favor.', '[[Quería|teal]] pedirle un favor.', '[[Querría|violet]] / **Quisiera** pedirle un favor.'],
            ['**Vengo** a preguntar por el taller.', '[[Venía|teal]] a preguntar por el taller.', '—'],
            ['**Necesito** que me firme esto.', '[[Necesitaba|teal]] que me firmara esto.', '[[Necesitaría|violet]] que me firmara esto.'],
            ['Buenos días, ¿qué **desea**?', 'Buenos días, ¿qué [[deseaba|teal]]?', '—'],
          ], note: 'Solo el **imperfecto** tiene este valor: «Quise pedirle un favor» cuenta un intento pasado y terminado («…, pero no me atreví»). Con el imperfecto de cortesía, lo normal es que la subordinada vaya en imperfecto de subjuntivo: «Necesitaba que me **firmara**».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Nerea entra por primera vez en la sala de ensayo.', prompt: '«Buenas tardes, ___ preguntar por el taller de teatro».', options: ['venía a', 'vendré a', 'fui a'], answer: 0, why: 'Imperfecto de cortesía: Nerea pregunta ahora, al llegar. «Fui a» cuenta una visita a otro lugar en el pasado; «vendré a» habla de otro día.', en: '“Good afternoon, I came to ask about the theatre workshop.”' },
            { context: 'Simón conoció a Nerea hace una hora y ya no se acuerda de su nombre.', prompt: '¿Qué pregunta es la más natural?', options: ['¿Cómo te llamarás?', 'Perdona, ¿cómo te llamabas?', '¿Cómo te llamaste?'], answer: 1, why: 'Imperfecto citativo: Simón ya oyó el nombre y pide que se lo recuerden. «¿Cómo te llamarás?» sería una conjetura, y «te llamaste» no tiene sentido aquí.', en: 'Sorry, what was your name again?' },
          ] },
        ] },
        { title: 'Imperfecto: jugar, soñar y planes que cambian · Imperfect: play, dreams and changed plans', mascot: '/brand/mascot/speaking.webp', coach: 'El imperfecto también saca de la realidad. It can step out of reality.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LÚDICO, ONÍRICO Y PROSPECTIVO', question: '¿Imaginas un juego, cuentas un sueño o recuerdas un plan que ya no vale?', en: 'The imperfect can describe a world that is not real: the make-believe of children’s games and of improvisation (“Yo era el médico y tú venías con fiebre”), and the events of a dream. It can also point to the future from a past viewpoint: “Mañana me iba de viaje” presents a plan as it stood, and usually announces that something got in the way.', formula: ['lúdico: yo era… y tú venías… (reparto de papeles)', 'onírico: soñé que + imperfecto (los hechos del sueño)', 'prospectivo: mañana / el viernes + imperfecto (+ pero…) = el plan previsto'],
            meaning: 'En el **juego** y el **sueño**, el imperfecto crea un mundo aparte, como el «érase una vez» de los cuentos. En el valor **prospectivo**, el plan se mira desde cuando estaba vigente; por eso casi siempre sigue un **pero** o se sobrentiende que algo cambió.',
            examples: [
              { es: 'Hacemos una improvisación: yo [[era|teal]] el médico y tú [[venías|teal]] con fiebre.', en: 'Let’s improvise: I’m the doctor and you come in with a fever.' },
              { es: 'Anoche soñé que el teatro [[se inundaba|teal]] y el público [[seguía|teal]] sentado, tan tranquilo.', en: 'Last night I dreamt the theatre flooded and the audience just stayed in their seats, perfectly calm.' },
              { es: 'Mañana me [[iba|teal]] de viaje, pero se canceló el vuelo. · ¿No [[salías|teal]] hoy para Lima?', en: 'I was supposed to leave tomorrow, but the flight was cancelled. · Weren’t you leaving for Lima today?' },
            ],
            note: 'En el relato de un sueño también puedes usar el indefinido («y de repente se cayó el techo»). El imperfecto da ese tono irreal de escena que se mira desde dentro; no es obligatorio.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ramiro: Yo el sábado me iba a la playa con mi familia…». ¿Qué entiende Olga?', options: ['Que fue a la playa el sábado pasado.', 'Que va a la playa el sábado, sin problema.', 'Que tenía ese plan, pero algo (el ensayo) lo complica.'], answer: 2, why: 'Imperfecto prospectivo: presenta el plan como previsto y deja ver que ya no está claro. Si el plan fuera firme, diría «me voy».', en: '“I was going to the beach with my family on Saturday…” What does Olga understand?' },
            { prompt: 'Dos actores improvisan: «Tú eras un turista perdido y yo te vendía un mapa falso». ¿Qué hace el imperfecto?', options: ['Cuenta un recuerdo real.', 'Reparte los papeles de una ficción.', 'Expresa cortesía.'], answer: 1, why: 'Imperfecto lúdico: crea el mundo imaginado del juego. Nadie habla de algo que pasó.', en: '“You’re a lost tourist and I sell you a fake map.” What is the imperfect doing?' },
          ] },
        ] },
        { title: 'El presente fuera del presente · The present outside the present', mascot: '/autoestudio/mascot/noting.webp', coach: 'Narrar, prometer, ordenar. Narrate, commit, order.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PRESENTE HISTÓRICO, POR FUTURO Y DE MANDATO', question: '¿Acercas un pasado, das algo futuro por seguro o das una orden?', en: 'The present can bring a past event closer, as if it were happening before our eyes (in history writing and in lively anecdotes: “So yesterday I’m at the door and the caretaker comes up and says…”). With a time expression it presents a future event as decided (“Mañana te llamo”). And in the second person it can give an order, neutral in directions and instructions but very firm between people (“Tú te callas y escuchas”).', formula: ['histórico: en 1902 la compañía se instala… · ayer estoy en… y viene…', 'por futuro: mañana / el lunes / esta noche + presente = ya está decidido', 'de mandato: (tú / usted) + presente = orden o instrucción'],
            meaning: 'El presente **acerca**: trae el pasado a escena, da el futuro por seguro y convierte la descripción en orden. El contexto (un marcador de tiempo, la relación entre las personas) decide el valor.',
            examples: [
              { es: 'Ayer [[estoy|blue]] en la puerta del centro, [[viene|blue]] el conserje y me [[dice|blue]] que en agosto cierran.', en: 'Yesterday I’m at the door of the centre, the caretaker comes over and tells me they close in August.' },
              { es: 'Mañana te [[llamo|blue]] y lo hablamos. · El sábado [[ensayamos|blue]] de diez a dos.', en: 'I’ll call you tomorrow and we’ll talk it over. · On Saturday we rehearse from ten to two (it is settled).' },
              { es: 'Tú hoy [[te sientas|blue]] y [[miras|blue]]. · Usted [[sube|blue]] al segundo piso y [[pregunta|blue]] allí.', en: 'Today you sit down and watch (firm). · You go up to the second floor and ask there (neutral directions).' },
            ] },
          { kind: 'table', title: 'Tres presentes, tres efectos · Three presents, three effects', head: ['Valor', 'Ejemplo', 'Dónde se usa'], rows: [
            ['[[Histórico|blue]]', 'En 1902 la compañía se instala en el puerto y estrena su primera obra.', 'historia, biografías, resúmenes de argumentos'],
            ['[[Histórico conversacional|blue]]', 'Ayer estoy en el metro y se me acerca un señor…', 'anécdotas orales: da viveza y suspense'],
            ['[[Por futuro|blue]]', 'Mañana te llamo. · El estreno es el sábado.', 'planes decididos, compromisos, horarios'],
            ['[[De mandato|blue]]', 'Tú te callas y escuchas. · Usted gira a la derecha.', 'órdenes firmes; instrucciones e indicaciones'],
          ], note: 'El presente por futuro es muy frecuente en todo el mundo hispánico y suele necesitar un marcador de tiempo («mañana», «el lunes»). El presente de mandato entre iguales suena tajante: «Tú te callas» es más fuerte que «Cállate».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Olga a Simón: Mañana te paso el guion corregido». ¿Qué expresa el presente?', options: ['Algo que está pasando ahora.', 'Un futuro decidido, casi un compromiso.', 'Un hábito de Olga.'], answer: 1, why: 'Presente por futuro con el marcador «mañana»: Olga da el hecho por seguro.', en: '“I’ll get the corrected script to you tomorrow.” What does the present express?' },
            { prompt: '«Ramiro, tú esta noche no tocas los focos». ¿Qué tono tiene?', options: ['Una orden firme.', 'Una descripción de lo que suele hacer Ramiro.', 'Una pregunta indirecta.'], answer: 0, why: 'Presente de mandato: Olga, que dirige, da una orden tajante sin usar el imperativo.', en: '“Ramiro, you are not touching the lights tonight.” What tone does it have?' },
          ] },
        ] },
        { title: 'Futuro y condicional fuera de su tiempo · Future and conditional out of their time', mascot: '/brand/mascot/seated.webp', coach: 'Mandar, sorprenderse, suavizar. Command, react, soften.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FUTURO DE MANDATO Y DE SORPRESA · CONDICIONAL DE CORTESÍA', question: '¿Impones, te indignas, concedes, pides o suavizas tu opinión?', en: 'The future can command with authority: the old commandments (“No matarás”), rules and regulations (“Los participantes entregarán…”) and a parent or boss who will not be argued with (“Harás lo que te digo”). In exclamations it shows surprise or indignation (“¡Será posible!”: “I can’t believe it!”). You already know the concessive future (“Será caro, pero…”). The conditional softens requests (“¿Podrías…?”) and opinions (“Yo diría que…”). In the press it can mark unconfirmed news, which class 208 studies in depth.', formula: ['mandato: no + futuro · (tú) + futuro · normas: los socios + futuro', 'sorpresa: ¡será posible! · ¡serás…! · concesión: será…, pero…', 'cortesía: ¿podrías…? / querría… · atenuación: yo diría que… · rumor: según…, habría…'],
            meaning: 'El futuro de mandato no predice: **impone** desde una autoridad. El de sorpresa no habla del mañana: **reacciona** ante algo presente. El condicional no imagina nada irreal: **suaviza** una petición o una opinión que sí tienes.',
            examples: [
              { es: 'No [[matarás|orange]]. · Mañana [[estarás|orange]] aquí a las nueve, ¿entendido?', en: 'Thou shalt not kill. · Tomorrow you will be here at nine, understood? (an order, not a prediction)' },
              { es: '¡[[Será posible|orange]]! Otra vez se ha fundido el foco. · [[Será|orange]] caro, no digo que no, pero lo necesitamos.', en: 'I can’t believe it! The spotlight has blown again. · It may be expensive, I’m not saying it isn’t, but we need it.' },
              { es: '¿[[Podrías|violet]] traer el guion impreso? · Yo [[diría|violet]] que la segunda escena es demasiado larga.', en: 'Could you bring the printed script? · I’d say the second scene is too long (a softened opinion).' },
            ] },
          { kind: 'table', title: 'Valor y efecto · Use and effect', head: ['Valor', 'Ejemplo', 'Se entiende como…'], rows: [
            ['[[Futuro de mandato|orange]]', 'Harás lo que te digo.', 'una orden que no admite discusión'],
            ['[[Futuro de mandato|orange]] (normas)', 'Los socios abonarán la cuota antes del día 5.', 'una obligación en un reglamento'],
            ['[[Futuro de sorpresa|orange]]', '¡Será posible! · ¡Serás desconsiderado!', 'indignación o asombro ante algo presente'],
            ['[[Futuro concesivo|orange]] (clase 161)', 'Será listo, pero no estudia nada.', 'lo admito, pero no cambia nada'],
            ['[[Condicional de cortesía|violet]]', '¿Podría dejarnos la sala? · Querría hablar con usted.', 'petición actual, más suave'],
            ['[[Condicional de atenuación|violet]]', 'Yo diría que con dos focos basta.', 'opinión real, dicha con modestia'],
            ['Condicional de rumor (clase 208)', 'Según la radio, el centro cerraría en agosto.', 'noticia no confirmada'],
          ], note: 'El futuro de mandato es muy fuerte: úsalo con cuidado y solo desde una posición de autoridad (o en textos normativos). En una petición a alguien que decide, sustitúyelo por el condicional: «¿Podría…?».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ramiro abre el almacén y lo encuentra todo desordenado: ¡Será posible!». ¿Qué expresa «será»?', options: ['Indignación ante lo que está viendo.', 'Algo que pasará después.', 'Una suposición sobre quién lo desordenó.'], answer: 0, why: 'Futuro de sorpresa en una exclamación: Ramiro reacciona ante algo presente; no hay ni conjetura ni futuro.', en: '“I can’t believe it!” What does «será» express here?' },
            { prompt: '«Yo diría que el final es demasiado triste». ¿Qué hace el condicional?', options: ['Suaviza una opinión que el hablante sí tiene.', 'Presenta una opinión que no tiene.', 'Habla de lo que dirá mañana.'], answer: 0, why: 'Condicional de atenuación: la opinión es real; el condicional la presenta con modestia.', en: '“I’d say the ending is too sad.” What does the conditional do?' },
          ] },
        ] },
        { title: 'Cómo descubrir el valor y errores frecuentes · Finding the use, and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Tiempo real, relación, intención. Real time, relationship, intention.', blocks: [
          { kind: 'decide', title: '¿Uso literal o no literal? · Literal or not?', steps: [
            { q: '¿El tiempo del verbo coincide con el momento real del que hablas?', yes: 'Uso literal: «Ayer quería ir, pero llovía».', no: 'Uso no literal: sigue preguntando.' },
            { q: '¿Pides algo o das una opinión ahora?', yes: 'Cortesía o atenuación: quería, venía a, ¿podrías?, yo diría.', no: 'Sigue.' },
            { q: '¿Hay una relación de autoridad o una norma?', yes: 'Mandato: tú te callas, harás lo que te digo, no matarás.', no: 'Sigue.' },
            { q: '¿Juego, sueño, plan que cambió, dato ya dicho, anécdota o exclamación?', yes: 'Lúdico, onírico, prospectivo, citativo, histórico o de sorpresa.', no: 'Revisa: quizá es una conjetura (estará, estaría).' },
          ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '(Al entrar en el despacho) Quise pedirle la sala también los sábados.', right: 'Quería (o Quisiera) pedirle la sala también los sábados.', why: 'El indefinido no tiene valor de cortesía: «quise pedirle» cuenta un intento pasado y terminado.' },
            { wrong: 'Si sería posible, querríamos ensayar también los sábados.', right: 'Si fuera posible, querríamos ensayar también los sábados.', why: 'La cortesía no cambia la regla: detrás del «si» condicional no va condicional.' },
            { wrong: 'Te lo confirmo: el estreno era el viernes 14.', right: 'Te lo confirmo: el estreno es el viernes 14.', why: 'El imperfecto prospectivo sugiere que el plan cambió o está en duda. Para confirmar, presente.' },
            { wrong: '(A la señora Valverde) Usted nos dejará la sala el sábado.', right: '¿Podría dejarnos la sala el sábado?', why: 'El futuro de mandato impone. Con quien tiene que decidir, pide con el condicional.' },
            { wrong: 'En 1902 la compañía se instala en el puerto y un año después estrenó su primera obra.', right: '…se instala en el puerto y un año después estrena su primera obra.', why: 'En un texto escrito, si eliges el presente histórico, mantenlo: el cambio de tiempo sin motivo desorienta.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase pide un favor con cortesía?', options: ['Quería preguntarte si me prestas el abrigo para la función.', 'Quise preguntarte si me prestas el abrigo para la función.', 'Te preguntaré si me prestas el abrigo para la función.'], answer: 0, why: 'Imperfecto de cortesía: «quería preguntarte». «Quise» cuenta un intento pasado; «te preguntaré» anuncia otra conversación.', en: 'Which sentence asks a favour politely?' },
            { prompt: '¿Qué frase es correcta?', options: ['Si pudieras venir antes, te lo agradecería.', 'Si vendrías antes, te lo agradecería.', 'Si podrías venir antes, te lo agradecería.'], answer: 0, why: 'Detrás del «si» condicional, imperfecto de subjuntivo (o presente de indicativo: «si puedes venir»), nunca condicional.', en: 'If you could come earlier, I’d be grateful.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice la misma petición en tres grados (quiero / quería / querría) y explica en qué situación usaría cada uno; después cuenta en presente histórico algo que le pasó ayer, en cuatro frases.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El primer ensayo de Nerea', coach: 'Toca cada marca: ¿cuál es su tiempo real? Tap each mark.',
      steps: [
        { title: 'En la sala de ensayo · In the rehearsal room', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Olga y Ramiro; tu alumno es Nerea y Simón. Después tu alumno toca cada expresión marcada y dice cuándo ocurre de verdad y qué valor tiene.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿cuándo ocurre de verdad y qué valor tiene? (When does it really happen, and why that tense?)' } },
          { kind: 'explore', title: '¿Todavía hay sitio?', setting: 'Lunes, siete y cuarto. Nerea, que llamó ayer por teléfono, llega a la sala. Olga y Simón improvisan una escena; Ramiro intenta arreglar un foco. (A new actress arrives at the rehearsal.)', lines: [
            { who: 'Nerea', text: 'Buenas tardes. [[Venía a preguntar|teal]] por el taller de teatro. ¿Es aquí?', en: 'Good afternoon. I came to ask about the theatre workshop. Is it here?' },
            { who: 'Olga', text: 'Sí, pasa, pasa. Perdona, ¿cómo [[te llamabas|teal]]? Me lo dijiste ayer por teléfono y se me ha ido.', en: 'Yes, come in. Sorry, what was your name again? You told me on the phone yesterday and it’s gone.' },
            { who: 'Nerea', text: 'Nerea Lozano. [[Quería|teal]] saber si todavía hay sitio en el grupo.', en: 'Nerea Lozano. I wanted to know whether there’s still room in the group.' },
            { who: 'Olga', text: 'Claro que sí. Justo ahora estamos improvisando. Simón, explícale el juego.', en: 'Of course. We’re improvising right now. Simón, explain the game to her.' },
            { who: 'Simón', text: 'Muy fácil: yo [[era|teal]] un taxista perdido y tú [[subías|teal]] al taxi con muchísima prisa.', en: 'Easy: I’m a lost taxi driver and you get into the taxi in a huge hurry.' },
            { who: 'Ramiro', text: '¡[[Será posible|orange]]! Otra vez se ha fundido el foco grande, y el estreno es dentro de dos semanas.', en: 'I can’t believe it! The big spotlight has blown again, and the premiere is in two weeks.' },
            { who: 'Olga', text: 'Ramiro, tú hoy [[te sientas y miras|blue]] la escena. Los focos, otro día.', en: 'Ramiro, today you sit down and watch the scene. The lights can wait.' },
            { who: 'Ramiro', text: 'Mira, yo el sábado [[me iba|teal]] a la playa con mi familia, así que alguien tendrá que comprar ese foco. [[Será|orange]] urgente, no digo que no, pero cuesta un dineral.', en: 'Look, I was going to the beach with my family on Saturday, so someone will have to buy that spotlight. It may be urgent, I’m not saying it isn’t, but it costs a fortune.' },
            { who: 'Olga', text: 'Mañana [[hablo|blue]] con la señora Valverde. Yo [[diría|violet]] que con dos focos nuevos basta.', en: 'I’ll talk to Mrs Valverde tomorrow. I’d say two new spotlights will do.' },
            { who: 'Simón', text: 'Por cierto, ayer [[estoy|blue]] en la puerta del centro, viene el conserje y [[me dice|blue]] que en agosto cierran.', en: 'By the way, yesterday I’m at the door of the centre, the caretaker comes over and tells me they close in August.' },
            { who: 'Nerea', text: 'Perdona, Olga, ¿[[podrías|violet]] decirme a qué hora son los ensayos?', en: 'Sorry, Olga, could you tell me what time rehearsals are?' },
            { who: 'Olga', text: 'Lunes y miércoles, a las siete. Y aquí hay una sola regla: nadie [[llegará|orange]] tarde.', en: 'Mondays and Wednesdays at seven. And there’s only one rule here: nobody will be late.' },
          ], notes: {
            'Venía a preguntar': '**Imperfecto de cortesía**: Nerea pregunta ahora. «Vengo a preguntar» sería correcto, pero más directo.',
            'te llamabas': '**Imperfecto citativo**: Olga ya oyó el nombre («me lo dijiste ayer») y pide que se lo recuerden.',
            'Quería': '**Imperfecto de cortesía** con «querer»: el deseo es actual; el pasado lo hace menos insistente.',
            'era': '**Imperfecto lúdico**: reparte los papeles de la improvisación. No es un recuerdo.',
            'subías': '**Imperfecto lúdico**: la acción imaginada de la escena. Fíjate en que también podría decir «tú subes».',
            'Será posible': '**Futuro de sorpresa o indignación**: Ramiro reacciona ante algo presente. No supone nada.',
            'te sientas y miras': '**Presente de mandato**: Olga, que dirige, da una orden firme sin imperativo.',
            'me iba': '**Imperfecto prospectivo**: el plan del sábado tal como estaba previsto; deja ver que el estreno lo complica.',
            'Será': '**Futuro concesivo** (clase 161): Ramiro admite que es urgente y lo neutraliza con «pero».',
            'hablo': '**Presente por futuro**: «mañana» lo sitúa; Olga lo da por decidido.',
            'diría': '**Condicional de atenuación**: es su opinión real, dicha con modestia.',
            'estoy': '**Presente histórico conversacional**: Simón cuenta algo de ayer como si estuviera pasando, para dar viveza.',
            'me dice': '**Presente histórico**: sigue la anécdota en presente («viene… y me dice»).',
            'podrías': '**Condicional de cortesía**: petición actual, más suave que «dime».',
            'llegará': '**Futuro de mandato**: no predice, impone una norma del grupo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué pregunta Olga «¿cómo te llamabas?»?', options: ['Porque habla de cuando Nerea era niña.', 'Porque cree que Nerea ha cambiado de nombre.', 'Porque ya oyó el nombre por teléfono y se le ha olvidado.'], answer: 2, why: 'Imperfecto citativo: recupera un dato que ya se dijo («me lo dijiste ayer»).', en: 'Why does Olga ask “what was your name”?' },
            { prompt: '¿Qué pasa con el plan de Ramiro para el sábado?', options: ['Va seguro a la playa.', 'Ya fue a la playa.', 'Lo tenía previsto, pero ahora no está claro por el foco y el estreno.'], answer: 2, why: '«Yo el sábado me iba a la playa»: imperfecto prospectivo, un plan que se tambalea.', en: 'What happens to Ramiro’s Saturday plan?' },
            { prompt: '¿Cómo es la regla de la puntualidad?', options: ['Una conjetura sobre los actores.', 'Una norma firme: el futuro impone.', 'Una predicción de Olga.'], answer: 1, why: '«Nadie llegará tarde»: futuro de mandato.', en: 'What kind of statement is the punctuality rule?' },
          ] },
        ] },
        { title: '¿Qué hace el tiempo verbal? · What is the tense doing?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases del grupo · More lines from the group', categories: [
            { id: 'cortesia', label: 'PEDIR CON TACTO', tone: 'violet' },
            { id: 'ficcion', label: 'JUEGO O SUEÑO', tone: 'teal' },
            { id: 'plan', label: 'DATO YA DICHO O PLAN QUE CAMBIÓ', tone: 'neutral' },
            { id: 'orden', label: 'ORDENAR', tone: 'orange' },
          ], items: [
            { text: 'Quería pedirte un favor: ¿me pasas el texto de la escena tres?', answer: 'cortesia', why: 'Imperfecto de cortesía con «querer»: la petición es actual.' },
            { text: 'Ahora tú eras la clienta y yo te vendía un sombrero.', answer: 'ficcion', why: 'Imperfecto lúdico: nuevo reparto de papeles.' },
            { text: '¿A qué hora era el ensayo del miércoles? No me acuerdo.', answer: 'plan', why: 'Imperfecto citativo: un horario que ya se dijo.' },
            { text: 'La reunión con el conserje era hoy, pero la ha aplazado.', answer: 'plan', why: 'Imperfecto prospectivo: el plan previsto y su cambio.' },
            { text: 'Tú te pones aquí, de espaldas al público.', answer: 'orden', why: 'Presente de mandato: indicación de la directora.' },
            { text: 'Esta noche nadie se irá sin recoger su vestuario.', answer: 'orden', why: 'Futuro de mandato: una norma impuesta.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno vuelve a decir tres frases de la clasificación con el tiempo «literal» (quiero, ¿a qué hora es…?, te pones → ponte) y comenta qué se pierde en cada caso.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Cuándo pasa de verdad? When does it really happen?',
      steps: [
        { title: 'Elige y explica · Choose and explain', blocks: [
          { kind: 'choice', items: [
            { context: 'Nerea llama a Ramiro por teléfono.', prompt: '«Hola, Ramiro, te ___ para preguntarte si mañana puedes llevarme al ensayo».', options: ['llamaré', 'llamaba', 'llamé'], answer: 1, why: 'Imperfecto de cortesía con un verbo de comunicación: la llamada es ahora. «Llamé» cuenta otra llamada; «llamaré» anuncia una futura.', en: '“Hi Ramiro, I’m calling to ask if you can take me to rehearsal tomorrow.”' },
            { context: 'Nerea le contó a Simón el primer día de dónde es, pero él no lo recuerda bien.', prompt: '«Oye, ¿tú no ___ de Barranquilla?»', options: ['eras', 'serás', 'fuiste'], answer: 0, why: 'Imperfecto citativo: recupera algo que ya oyó. «¿Serás…?» sería una conjetura sin haberlo oído; «fuiste» no tiene sentido aquí.', en: '“Hey, aren’t you from Barranquilla?” (I think you told me)' },
            { prompt: '«Mañana ___ temprano a Medellín, pero me han cambiado el vuelo a la noche».', options: ['salgo', 'saldré', 'salía'], answer: 2, why: 'Imperfecto prospectivo: el plan tal como estaba previsto, seguido del cambio. «Salgo» o «saldré» presentan el plan como firme, y el «pero» lo contradice.', en: '“I was supposed to leave early for Medellín tomorrow, but they’ve moved my flight to the evening.”' },
            { prompt: '«Ustedes se quedan aquí hasta que salga bien la escena», dice Olga. ¿Qué expresa el presente?', options: ['Una orden firme.', 'Una costumbre de los actores.', 'Una suposición sobre el futuro.'], answer: 0, why: 'Presente de mandato: quien dirige impone lo que van a hacer.', en: '“You are staying here until the scene works.” What does the present express?' },
            { prompt: '«¡Serás desconsiderado! Te has comido mi almuerzo». ¿Qué expresa el futuro?', options: ['Una predicción.', 'Indignación ante algo que acaba de pasar.', 'Una suposición sobre el carácter de alguien.'], answer: 1, why: 'Futuro de sorpresa o indignación en una exclamación: reacciona ante un hecho presente.', en: '“How inconsiderate can you be! You’ve eaten my lunch.” What does the future express?' },
          ] },
        ] },
        { title: '¿Para qué se usa? · What is it for?', blocks: [
          { kind: 'classify', title: 'Clasifica por intención · Classify by intention', categories: [
            { id: 'cortesia', label: 'CORTESÍA O ATENUACIÓN', tone: 'violet' },
            { id: 'mandato', label: 'MANDATO', tone: 'orange' },
            { id: 'contar', label: 'IMAGINAR O CONTAR', tone: 'teal' },
            { id: 'cita', label: 'DATO YA DICHO O PLAN', tone: 'blue' },
          ], items: [
            { text: 'Disculpe, ¿me podría decir dónde está la sala B?', answer: 'cortesia', why: 'Condicional de cortesía en una pregunta a un desconocido.' },
            { text: 'Usted firma aquí y aquí, y me devuelve la copia.', answer: 'mandato', why: 'Presente de mandato con valor de instrucción.' },
            { text: 'Anoche soñé que el público se subía al escenario y cantaba con nosotros.', answer: 'contar', why: 'Imperfecto onírico: los hechos de un sueño.' },
            { text: 'El ensayo general era el jueves, pero lo hemos pasado al miércoles.', answer: 'cita', why: 'Imperfecto prospectivo: plan previsto que cambió.' },
            { text: 'Hoy no sale nadie de esta sala hasta que la escena salga bien.', answer: 'mandato', why: 'Presente de mandato: una orden tajante.' },
            { text: 'Necesitaba que me firmara la hoja de asistencia, por favor.', answer: 'cortesia', why: 'Imperfecto de cortesía con «necesitar» + imperfecto de subjuntivo.' },
            { text: 'Mira: yo era el camarero y tú entrabas a reclamar la cuenta.', answer: 'contar', why: 'Imperfecto lúdico: los papeles del juego.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: '(En el despacho, ahora) Quise preguntarle si nos podría dejar la sala el sábado.', ok: false, options: ['Quería preguntarle si nos podría dejar la sala el sábado.', 'He querido preguntarle si nos podría dejar la sala el sábado.', 'Querré preguntarle si nos podría dejar la sala el sábado.'], answer: 0, why: 'Para pedir ahora, imperfecto de cortesía: «quería preguntarle». El indefinido y el perfecto cuentan un intento ya hecho.' },
            { sentence: 'Venía a preguntarte si podrías ayudarme con el decorado.', ok: true, why: 'Correcta: imperfecto de cortesía y «si» de pregunta indirecta (= whether), que admite condicional.' },
            { sentence: 'Si podrías traer el guion impreso, te lo agradecería mucho.', ok: false, options: ['Si pudieras traer el guion impreso, te lo agradecería mucho.', 'Si podrás traer el guion impreso, te lo agradecería mucho.', 'Si habrías podido traer el guion impreso, te lo agradecería mucho.'], answer: 0, why: 'Detrás del «si» condicional no va condicional ni futuro: «si pudieras» (o «si puedes»). La cortesía ya está en «te lo agradecería».' },
            { sentence: 'Anoche soñé que actuaba en un teatro enorme y de repente se me olvidaba todo el texto.', ok: true, why: 'Correcta: imperfecto onírico. También sería posible «se me olvidó».' },
            { sentence: 'El taller empezaba el lunes que viene; ya está todo confirmado.', ok: false, options: ['El taller empezaría el lunes que viene; ya está todo confirmado.', 'El taller empieza el lunes que viene; ya está todo confirmado.', 'El taller empezó el lunes que viene; ya está todo confirmado.'], answer: 1, why: 'Si todo está confirmado, presente por futuro. El imperfecto prospectivo haría pensar que el plan cambió.' },
          ] },
        ] },
        { title: 'Mensajes con la señora Valverde · Messages with Mrs Valverde', blocks: [
          { kind: 'chat-fill', title: 'Olga escribe a la responsable del centro · Olga texts the centre manager', lines: [
            { who: 'Olga', text: 'Buenos días, señora Valverde. Le ___ para pedirle un pequeño favor.', options: ['escribía', 'escribiré', 'escribiera'], answer: 0, why: 'Imperfecto de cortesía con un verbo de comunicación: escribe ahora. «Escribiré» anuncia otro mensaje; el subjuntivo no cabe aquí.' },
            { who: 'Amalia', text: 'Buenos días, Olga. Dígame.' },
            { who: 'Olga', text: '¿___ dejarnos la sala también el sábado por la mañana?', options: ['Ha podido', 'Podría', 'Pudo'], answer: 1, why: 'Condicional de cortesía para una petición actual a alguien que decide.' },
            { who: 'Amalia', text: 'El sábado ___ el taller de pintura, pero lo han cancelado, así que la sala está libre.', options: ['era', 'fue', 'será'], answer: 0, why: 'Imperfecto prospectivo: el plan previsto y su cancelación. «Fue» diría que ya se hizo; «será» contradice el «pero».' },
            { who: 'Olga', text: '¡Qué buena noticia, muchas gracias! Mañana le ___ la lista de participantes.', options: ['pasé', 'pasaba', 'paso'], answer: 2, why: 'Presente por futuro con «mañana»: un compromiso firme. «Pasaba» haría pensar en un plan que se cancela.' },
            { who: 'Amalia', text: 'Perfecto. Ah, el conserje dice que su técnico se dejó ayer los focos encendidos toda la noche.' },
            { who: 'Olga', text: '¡___ posible! Hoy mismo hablo con él.', options: ['Fue', 'Sería', 'Será'], answer: 2, why: '«¡Será posible!»: futuro de sorpresa o indignación, una fórmula fija.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Venía', 'a', 'preguntarte', 'si', 'podrías', 'ayudarme', 'con', 'el', 'decorado'], accept: ['Venía a preguntarte si podrías ayudarme con el decorado'], en: 'I came to ask whether you could help me with the set.' },
            { tiles: ['Mañana', 'me', 'iba', 'de', 'viaje,', 'pero', 'se', 'canceló', 'el', 'vuelo'], accept: ['Mañana me iba de viaje, pero se canceló el vuelo'], en: 'I was supposed to go on a trip tomorrow, but the flight was cancelled.' },
            { tiles: ['Yo', 'era', 'el', 'director', 'y', 'tú', 'venías', 'a', 'pedirme', 'un', 'papel'], accept: ['Yo era el director y tú venías a pedirme un papel', 'Tú venías a pedirme un papel y yo era el director'], en: 'I’m the director and you come to ask me for a part (a game).' },
          ] },
        ] },
        { title: 'Pide con tacto · Ask tactfully', blocks: [
          { kind: 'rewrite', title: 'Reescribe las peticiones · Rewrite the requests', items: [
            { prompt: '(A la señora Valverde) Quiero pedirle un día más de ensayo.', instruction: 'Suavízalo con el imperfecto de cortesía.', accept: ['Quería pedirle un día más de ensayo'] },
            { prompt: 'Vengo a preguntar si queda sitio en el taller.', instruction: 'Imperfecto de cortesía con «venir a».', accept: ['Venía a preguntar si queda sitio en el taller', 'Venía a preguntar si quedaba sitio en el taller'] },
            { prompt: '(A Simón) Dame el guion de la segunda escena.', instruction: 'Conviértelo en pregunta con el condicional de «poder».', accept: ['¿Podrías darme el guion de la segunda escena?', '¿Me podrías dar el guion de la segunda escena?', '¿Podrías darme el guion de la segunda escena, por favor?', '¿Me podrías dar el guion de la segunda escena, por favor?', 'Por favor, ¿podrías darme el guion de la segunda escena?', 'Por favor, ¿me podrías dar el guion de la segunda escena?'] },
            { prompt: '(A la señora Valverde) Necesito que me firme este permiso.', instruction: 'Imperfecto de cortesía con «necesitar» (ojo con el subjuntivo).', accept: ['Necesitaba que me firmara este permiso', 'Necesitaba que me firmase este permiso'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige una petición real de su vida (al casero, a un compañero, en una tienda) y la dice en tres grados: directa, con imperfecto y con condicional. Después decide cuál usaría y por qué.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Olga', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un audio al grupo · A voice message to the group', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota tres verbos cuyo tiempo no coincide con el momento real y dice qué valor tienen. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para cazar verbos «fuera de su tiempo». Vas a oír «cuesta un dineral» (it costs a fortune) y «sin luz no hay función» (no lights, no show). (Listen for gist, then for tenses used out of their time.)' } },
          { kind: 'listen', title: 'Audio de Olga al grupo', channel: 'MENSAJE DE VOZ · OLGA REYES, DIRECTORA DE LA BUHARDILLA', src: '/audio/grammar-live/500.mp3',
            before: 'Olga ya habló con la señora Valverde. ¿Qué crees que consiguió y qué les va a pedir al grupo? (What did she get, and what will she ask the group?)',
            gist: { prompt: '¿Qué hace Olga en el audio? · What does Olga do in the message?', options: ['Cuenta cómo le fue con la responsable del centro, anuncia cambios y reparte tareas.', 'Cancela el estreno porque no hay sala.', 'Se queja de que nadie llega a tiempo a los ensayos.'], answer: 0, why: 'Narra la visita, informa del nuevo horario y del cambio de fecha y da instrucciones a cada uno.', en: 'She reports on the meeting, announces changes and hands out jobs.' },
            details: [
              { prompt: '¿Qué consiguió Olga?', options: ['Un foco nuevo pagado por el centro.', 'La sala también los sábados.', 'Ensayar en agosto.'], answer: 1, why: '«Se ríe y me dice que sí. Así que el sábado ensayamos de diez a dos».', en: 'What did Olga get?' },
              { prompt: '¿Cuándo es ahora el estreno?', options: ['El viernes 14.', 'El sábado 15.', 'Todavía no se sabe.'], answer: 1, why: '«El estreno era el viernes catorce, pero… lo pasamos al sábado quince»: imperfecto prospectivo.', en: 'When is the premiere now?' },
              { prompt: '¿Qué tiene que hacer Simón?', options: ['Revisar los focos.', 'Traer el guion impreso.', 'Traer el vestuario.'], answer: 2, why: '«Simón, tú te traes el vestuario»: presente de mandato.', en: 'What does Simón have to do?' },
              { prompt: '¿Qué opina Olga del foco nuevo?', options: ['Que no hace falta ninguno.', 'Que es caro, pero necesario.', 'Que es barato.'], answer: 1, why: '«Será caro, no digo que no, pero sin luz no hay función»: futuro concesivo.', en: 'What does Olga think about the new spotlight?' },
            ],
            transcript: 'Hola a todos, soy Olga. Les cuento cómo me fue con la señora Valverde. Ayer [[llego|blue]] al centro cultural a las diez, ella me [[recibe|blue]] en su oficina y me [[dice|blue]], muy seria: «¿Usted no [[era|teal]] la del grupo de teatro?». Y yo, con mi mejor sonrisa: «Sí, señora, [[venía|teal]] a pedirle un favor. ¿[[Podría|violet]] dejarnos la sala también los sábados?». Silencio total. Hasta que de pronto se ríe y me dice que sí. Así que el sábado [[ensayamos|blue]] de diez a dos. Ahora, la mala noticia: el estreno [[era|teal]] el viernes catorce, pero ese día la sala está ocupada, así que lo pasamos al sábado quince. Y las reglas, que ya me conocen: el sábado nadie [[llegará|orange]] tarde. Simón, tú te [[traes|blue]] el vestuario, y Ramiro [[revisa|blue]] los focos antes de las diez. Por cierto, Ramiro me dice que el foco nuevo cuesta un dineral. ¡[[Será|orange]] posible! [[Será|orange]] caro, no digo que no, pero sin luz no hay función. Yo [[diría|violet]] que con dos focos basta. Nerea, ¿me [[podrías|violet]] traer el guion impreso? Mañana les [[mando|blue]] el horario completo. Un abrazo y a descansar.',
            reply: { teacher: 'Tú eres Olga y tu alumno es Nerea: responde al audio, confirma que lleva el guion, pide algo con tacto (quería…, ¿podrías…?) y cuenta en presente histórico algo que le pasó al salir del ensayo.', self: 'Responde a Olga con un audio de 30 segundos: confirma el guion, pide algo con tacto y cuenta en presente una anécdota breve de ayer. (Reply in 30 seconds: confirm, ask politely, tell a short story in the present.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Pedir, contar, imaginar, ordenar', coach: 'Elige el tiempo por su efecto. Choose the tense for its effect.',
      steps: [
        { title: 'Situaciones del día a día · Everyday situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde usando el valor no literal que pide cada tarjeta. Si usa el tiempo literal donde quedaría más natural otro, tú repites su frase con el tiempo no literal y tu alumno la retoma.', self: 'Lee cada tarjeta y responde en voz alta durante un minuto. Usa al menos dos tiempos «fuera de su tiempo» en cada respuesta. (Use at least two non-literal tenses in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Necesitas un favor de alguien con quien no tienes confianza (un vecino, tu jefa, el casero). Pídeselo. · Ask a favour of someone you don’t know well.', followUps: ['¿Y si te dice que no?', '¿Cómo lo pedirías a un amigo?', '¿Qué grado de cortesía es demasiado?'], phrases: ['[[Venía a…|teal]]', '[[Quería pedirle…|teal]]', '¿[[Podría…|violet]]?', '[[Necesitaba que…|teal]] + imperf. subj.'], hint: 'Empieza con imperfecto de cortesía, pide con condicional y agradece.', example: 'Perdone que la moleste, señora Ortega. Venía a pedirle un favor: este fin de semana me voy a casa de mis padres y necesitaba que alguien me regara las plantas. ¿Podría hacerlo usted? Le dejo la llave y le traigo algo del pueblo.' },
            { q: 'Cuenta una anécdota reciente como si estuviera pasando ahora. · Tell a recent anecdote in the historical present.', followUps: ['¿Y cómo terminó?', '¿Qué le dijiste?'], phrases: ['Ayer [[estoy|blue]] en… y [[viene|blue]]…', 'Y me [[dice|blue]]…', 'Y yo, ni corto ni perezoso, le [[digo|blue]]…'], hint: 'Arranca en pasado si quieres («Ayer…») y pasa al presente para la escena; mantenlo hasta el final.', example: 'El viernes estoy en la cola del banco, con prisa, y de repente se me pone delante un señor. Yo le digo, muy amable, que la cola empieza atrás, y él me mira y me dice que solo viene a preguntar una cosa. Media hora después sigue en la ventanilla.', next: 'Ahora, un plan que se torció.' },
            { q: 'Un plan que tenías y que se complicó. · A plan that fell through.', followUps: ['¿Qué hiciste al final?', '¿Lo has vuelto a intentar?'], phrases: ['Este fin de semana [[me iba|teal]] a…, pero…', 'La boda [[era|teal]] en junio, pero…', '[[Salíamos|teal]] el lunes, pero…'], hint: 'El plan, con imperfecto prospectivo; el cambio, con «pero» + indefinido o perfecto.', example: 'Este verano nos íbamos a Cartagena una semana, pero a mi pareja le cambiaron las vacaciones y lo hemos dejado para diciembre. El vuelo salía un sábado a las seis de la mañana, así que, en el fondo, no lo siento tanto.' },
            { q: 'Improvisación: propón un juego de papeles con tu compañero. · Set up a role-play.', followUps: ['¿Y qué pasaba después?', '¿Cómo terminaba la escena?'], phrases: ['Yo [[era|teal]]… y tú [[eras|teal]]…', 'Tú [[venías|teal]] a…', 'Y entonces yo te [[decía|teal]]…'], hint: 'Reparte los papeles y cuenta la escena con imperfecto lúdico.', example: 'Bueno, yo era la dueña de una tienda de antigüedades y tú entrabas a vender un reloj muy raro. Yo no te creía y te hacía muchas preguntas, y al final descubríamos que el reloj era mío.', teacher: 'Tú sigues la improvisación unos minutos dentro del juego, también con imperfecto lúdico.' },
            { q: 'Eres responsable de un grupo (un equipo, una clase, una excursión). Da las normas con firmeza y después suavízalas. · Give rules firmly, then soften them.', followUps: ['¿Con quién usarías la versión firme?', '¿Qué versión prefieres oír tú?'], phrases: ['Nadie [[saldrá|orange]]…', 'Tú [[te encargas|blue]] de…', '¿[[Podrían|violet]]…?', 'Yo [[diría|violet]] que…'], hint: 'Primero futuro y presente de mandato; después, la misma norma con condicional de cortesía o de atenuación.', example: 'Mañana todos estarán en la estación a las siete y nadie se separará del grupo. Tú te encargas de los billetes. Versión suave: ¿podrían estar en la estación a las siete? Yo diría que es mejor no separarse del grupo.' },
            { q: 'Alguien te cuenta algo indignante o sorprendente. Reacciona y concede lo que haga falta. · React with surprise; concede a point.', followUps: ['¿Qué harías tú en su lugar?', '¿Tiene alguna excusa?'], phrases: ['¡[[Será posible|orange]]!', '¡[[Serás|orange]]…!', '[[Será|orange]]…, no digo que no, pero…'], hint: 'Reacción con futuro de sorpresa; después, una concesión con «será…, pero».', example: '¿Que el casero te sube el alquiler otra vez? ¡Será posible! Será su piso, no digo que no, pero hay un contrato, y no puede cambiarlo cuando quiera.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú haces tres peticiones demasiado directas o demasiado autoritarias a «tu jefa», y tu alumno te propone una versión con imperfecto o condicional de cortesía.', self: 'Ahora repasa en voz alta el día de Olga: cómo pidió la sala, qué ordenó al grupo y qué plan cambió. Usa al menos cinco tiempos no literales. (Retell Olga’s day with at least five non-literal tenses.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a la señora Valverde', coach: 'Pide con tacto y cuenta los cambios. Ask tactfully, report changes.',
      steps: [
        { title: 'Correo formal · Formal email', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada verbo «fuera de su tiempo»: ¿qué valor tiene? ¿Suena demasiado directo o demasiado autoritario en algún punto?', self: 'Escribe el correo y toca «Revisar mi texto». Después relee cada petición: ¿podría sonar más suave con imperfecto o condicional? (Check every request for tone.)' } },
          { kind: 'write', title: 'Agradecimiento y dos favores · Thanks and two favours', situation: 'Eres Olga (o diriges un grupo, un club o una asociación). Escribes a la señora Valverde (usted), responsable del centro cultural, para agradecerle la sala de los sábados, explicarle el cambio de fecha del estreno y pedirle dos favores más. (Write formally to the centre manager: thank her, explain the date change and ask two more favours.)', task: [
            'Agradece y pide al menos un favor con imperfecto de cortesía (le escribía, quería, venía a…) · Thank her and ask a favour with the polite imperfect.',
            'Pide otro con el condicional (¿podría…?, nos gustaría…) · Ask another with the conditional.',
            'Explica el plan que cambió con imperfecto prospectivo (el estreno era…, pero…) · Explain the changed plan.',
            'Da una opinión atenuada (yo diría que…) y anuncia algo que harás pronto con presente (el lunes le paso…) · A softened opinion; a near-future step in the present.',
            'Despídete con cordialidad, sin futuro ni presente de mandato · Close warmly, with no commands.',
          ], starters: ['Estimada señora Valverde:', 'Le escribía para…', 'Como usted sabe, el estreno era…', 'Quería pedirle, además,…', '¿Podría…?', 'Yo diría que…', 'El lunes le paso…', 'Un cordial saludo,'],
            words: ['le escribía para', 'quería pedirle', 'venía a', 'era el…, pero', '¿podría…?', 'nos gustaría', 'yo diría que', 'el lunes le paso', 'le agradecemos', 'en nombre de'],
            model: 'Estimada señora Valverde: [[le escribía|teal]] para agradecerle, en nombre de todo el grupo, que nos deje la sala también los sábados. Como usted sabe, el estreno [[era|teal]] el viernes 14, pero ese día la sala está ocupada, así que lo hemos pasado al sábado 15 a las ocho. [[Quería|teal]] pedirle, además, dos pequeños favores. El primero: ¿[[podría|violet]] el conserje abrirnos la puerta a las nueve y media ese día? Así montamos el decorado con calma. El segundo tiene que ver con la luz: el foco grande se fundió la semana pasada y yo [[diría|violet]] que, con dos focos nuevos, el problema queda resuelto. Nos gustaría saber si el centro podría hacerse cargo de una parte del gasto. El lunes le [[paso|blue]] el presupuesto que nos dio la tienda. Por supuesto, la invitamos al estreno y le reservamos un asiento en primera fila. Muchas gracias por su apoyo. Un cordial saludo, Olga Reyes, directora del grupo La Buhardilla.',
            minWords: 120,
            checks: [
              { label: 'Un imperfecto de cortesía (le escribía, quería, venía, necesitaba…)', pattern: '(?<!\\p{L})(?:quería|queríamos|venía|veníamos|necesitaba|necesitábamos|escribía|escribíamos|llamaba|llamábamos)(?!\\p{L})', tip: 'Suaviza la petición: «**Quería** pedirle…», «Le **escribía** para…».' },
              { label: 'Un condicional de cortesía o atenuación (podría, querría, gustaría, diría…)', pattern: '(?<!\\p{L})(?:podría|podríamos|querría|querríamos|gustaría|agradecería|agradeceríamos|diría)(?!\\p{L})', tip: 'Pide o da tu opinión con suavidad: «¿**Podría**…?», «Yo **diría** que…».' },
              { label: 'Un imperfecto seguido de «pero» (un plan que cambió)', pattern: '(?<!\\p{L})(?:era|eran|iba|íbamos|empezaba|empezábamos|salía|salíamos)(?!\\p{L})[^.]{0,60}(?<!\\p{L})pero(?!\\p{L})', tip: 'Cuenta el cambio: «El estreno **era** el viernes, **pero**…».' },
            ],
            warnings: [
              { pattern: '(?:^|[.;:!?¡¿,]\\s*)si\\s+(?:(?:no|me|le|nos|les|lo|la|usted)\\s+){0,2}(?:sería|podría|podríamos|querría|tendría)(?!\\p{L})', why: 'Después del **si** condicional no va condicional: «si **fuera** posible», «si **pudiera**». (Tras «saber si», «preguntarle si», el condicional sí vale.)' },
              { pattern: '(?<!\\p{L})quis(?:e|imos)\\s+(?:pedirle|preguntarle|consultarle|comentarle|saber)(?!\\p{L})', why: 'El indefinido no sirve para la cortesía: «**Quería** pedirle» o «**Quisiera** pedirle».' },
              { pattern: '(?<!\\p{L})usted\\s+(?:nos\\s+|me\\s+)?(?:dejará|abrirá|pagará|firmará|traerá)(?!\\p{L})', why: 'Ese futuro puede sonar a orden. Con quien decide, mejor «¿**Podría** dejarnos…?».' },
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
            { tone: 'teal', label: 'IMPERFECTO', formula: 'quería · venía a · ¿cómo te llamabas? · yo era… y tú… · mañana me iba, pero…', example: 'Venía a preguntarte si podrías ayudarme.', caption: 'cortesía, cita, juego o sueño, plan que cambió', en: 'politeness, recalling what was said, make-believe and dreams, a plan seen as it stood' },
            { tone: 'blue', label: 'PRESENTE', formula: 'ayer estoy en… y viene… · mañana te llamo · tú te callas', example: 'Mañana hablo con la señora Valverde.', caption: 'acerca: viveza, futuro seguro, orden', en: 'brings things closer: vivid past, settled future, firm order' },
            { tone: 'orange', label: 'FUTURO', formula: 'no matarás · harás lo que te digo · ¡será posible! · será…, pero…', example: 'Nadie llegará tarde.', caption: 'impone, se indigna o concede', en: 'commands from authority, reacts with indignation, or concedes' },
            { tone: 'violet', label: 'CONDICIONAL', formula: '¿podrías…? · querría · yo diría que… · (según…, habría…)', example: 'Yo diría que con dos focos basta.', caption: 'suaviza peticiones y opiniones', en: 'softens requests and opinions; in the press, unconfirmed news (class 208)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Ante un verbo, pregúntate primero **cuándo ocurre de verdad**. Si no coincide con su tiempo, busca la **intención**: pedir con distancia, recuperar algo dicho, imaginar, acercar una escena, imponer o reaccionar. Y recuerda los límites: la cortesía es del **imperfecto** (nunca del indefinido) y del **condicional**, y el futuro de mandato es para quien tiene autoridad.', en: 'First ask when the event really happens. If it doesn’t match the tense, look for the intention: distance, recall, make-believe, vividness, authority or reaction. Politeness belongs to the imperfect (never the preterite) and the conditional; the commanding future belongs to whoever is in charge.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { context: 'En una tienda de ropa.', prompt: 'La dependienta: «Buenos días, ¿qué ___?»', options: ['deseó', 'deseaba', 'deseará'], answer: 1, why: 'Imperfecto de cortesía: «¿Qué deseaba?» pregunta por lo que el cliente quiere ahora.', en: '“Good morning, how can I help you?” (what would you like)' },
            { prompt: '«En 1810 la ciudad se levanta contra el gobernador». ¿Cuándo ocurre el hecho?', options: ['Todos los años.', 'Ahora.', 'En el pasado: es un presente histórico.'], answer: 2, why: 'Presente histórico: la fecha sitúa el hecho en el pasado; el presente lo acerca.', en: '“In 1810 the city rises against the governor.” When does it happen?' },
            { context: 'El jefe de obra, a un aprendiz que discute cada orden.', prompt: '«Mañana a las ocho ___ aquí, sin excusas».', options: ['estarás', 'estarías', 'estabas'], answer: 0, why: 'Futuro de mandato: una orden desde la autoridad. El condicional la suavizaría; el imperfecto no encaja.', en: '“Tomorrow at eight you will be here, no excuses.”' },
            { prompt: '«¿A qué hora era la reunión de mañana?». ¿Por qué el imperfecto?', options: ['Porque el hablante pide que le recuerden un dato que ya le dieron.', 'Porque la reunión se ha cancelado.', 'Porque la reunión ya pasó.'], answer: 0, why: 'Imperfecto citativo: «mañana» deja claro que no es pasado; el hablante recupera algo ya dicho.', en: '“What time was tomorrow’s meeting again?” Why the imperfect?' },
            { prompt: 'Dos niños en el parque: «Tú eras el lobo y yo me escondía en la casa». ¿Qué tiempo describe el imperfecto?', options: ['Un mundo imaginado: el del juego.', 'Un recuerdo de la infancia.', 'Algo que pasará después.'], answer: 0, why: 'Imperfecto lúdico: reparte papeles en una ficción.', en: '“You’re the wolf and I hide in the house.” What does the imperfect describe?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en el centro de salud. Now, at the health centre.', blocks: [
          { kind: 'lead', text: 'Rebeca Solís llama a la recepción de su centro de salud para cambiar una cita. Reescribe sus frases para que suenen más corteses o más claras.', en: 'A patient phones her health centre to change an appointment. Rewrite her sentences so they sound more polite or clearer.' },
          { kind: 'rewrite', title: 'Al teléfono con recepción · On the phone with reception', items: [
            { prompt: 'Quiero cambiar la cita del jueves.', instruction: 'Imperfecto de cortesía.', accept: ['Quería cambiar la cita del jueves'] },
            { prompt: 'Cámbieme la cita al viernes.', instruction: 'Pregunta con el condicional de «poder» (usted).', accept: ['¿Podría cambiarme la cita al viernes?', '¿Me podría cambiar la cita al viernes?', '¿Podría cambiarme la cita al viernes, por favor?', '¿Me podría cambiar la cita al viernes, por favor?'] },
            { prompt: 'Mi cita es el jueves, pero la doctora está de vacaciones.', instruction: 'Muestra con el imperfecto que el plan ya no vale.', accept: ['Mi cita era el jueves, pero la doctora está de vacaciones'] },
          ] },
        ] },
        { title: 'Ampliación · Tiempos de la prensa y de la historia · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. La prensa y los libros de historia también sacan los tiempos de su sitio. En los titulares, el **presente** cuenta hechos ya ocurridos: «Fallece a los noventa años el último farero de la isla». En las crónicas aparece el **imperfecto narrativo**, que cuenta un hecho puntual y cerrado como si fuera una escena: «Minutos después, el tren reanudaba la marcha». Y el **condicional de rumor** presenta información sin confirmar: «El director del centro habría presentado su dimisión, según fuentes municipales». Lo estudiarás a fondo en la clase 208.', en: 'For strong students or spare time. Headlines use the present for past events; reports use the “narrative imperfect” for a single, completed event shown as a scene (“Minutes later, the train set off again”); and the conditional of rumour presents unconfirmed information (“The director has reportedly resigned”), which class 208 covers in depth.' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: 'Titular: «Reabre el teatro del barrio tras dos años de obras». ¿Cuándo ocurrió?', options: ['Ocurre todos los años.', 'Ya ha ocurrido o acaba de ocurrir.', 'Ocurrirá el año que viene.'], answer: 1, why: 'Presente periodístico de los titulares: da como actual un hecho reciente.', en: 'Headline: “Neighbourhood theatre reopens after two years of building work.” When did it happen?' },
            { prompt: '«A las diez y cuarto, el árbitro pitaba el final del partido». ¿Qué tipo de hecho cuenta el imperfecto?', options: ['Un plan que no se cumplió.', 'Una costumbre del árbitro.', 'Un hecho puntual y terminado, contado como escena.'], answer: 2, why: 'Imperfecto narrativo: un hecho único (aquí equivale a «pitó») presentado con efecto de escena.', en: '“At a quarter past ten, the referee blew the final whistle.” What kind of event is this?' },
            { prompt: '«Según la radio local, el centro cultural cerraría en agosto». ¿Qué sabe el periodista?', options: ['Que es una hipótesis irreal.', 'Que es una información no confirmada.', 'Que es seguro que cerrará.'], answer: 1, why: 'Condicional de rumor: el hablante no se hace responsable de la información.', en: '“According to local radio, the cultural centre is set to close in August.” How sure is the journalist?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un titular real de hoy y explica qué tiempo usa y por qué; después convierte una noticia segura en rumor con «según…, habría…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 201 · Pretérito anterior: reconocimiento en textos literarios', text: 'Ya sabes que un tiempo verbal puede salir de su tiempo para pedir, imaginar, contar o mandar, y lees el contexto para descubrir su valor real. En la clase 201 sigues leyendo tiempos con atención, ahora en la literatura: el **pretérito anterior** («apenas hubo terminado, se fue»), una forma que casi solo vive en textos escritos y que conviene reconocer.', en: 'You now know that a tense can step out of its time to ask, imagine, narrate or command, and you read the context to find its real value. Class 201 keeps you reading tenses closely, now in literature: the past anterior (“apenas hubo terminado, se fue”), a form that lives almost only in writing and is worth recognising.', href: '/sistema-verbal/preterito-anterior-indicativo', label: 'Ir a la clase 201' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Quería pedirte un favor”, “Quise pedirte un favor” y “Querría pedirte un favor”?». Respuesta esperada: cortesía actual; intento pasado (sin cortesía); cortesía actual, algo más distante. Tarea: el correo de Escribir sobre una situación propia.' },
        ] },
      ],
    },
  ],
};
