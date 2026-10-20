import type { LiveLesson } from '../types';

/**
 * Lesson 474 · C1 · Probabilidad retrospectiva y condicional compuesto (course unit G174).
 * Builds on G134 (lesson 152: forms of habría + participio, unreal result, si + hubiera,
 * future in the past, reproach), G160 (lesson 153: habrá salido as conjecture), G161
 * (lesson 461: the conjecture system, «Ya habría salido» only previewed) and G173
 * (lesson 473: the journalistic conditional of rumour, only referred to here).
 * C1 step: one form, several values, told apart by context. Content: conjecture about a
 * past before another past (Cuando llegamos, ya se habrían ido = probablemente ya se
 * habían ido); the full map of conjecture by time (estará / habrá estado / estaría /
 * habría estado) with its equivalents (probablemente, seguramente, a lo mejor + ind.,
 * debe de / debía de + inf.) and «Habría unas veinte personas» (simple conditional of
 * impersonal haber); unreal past result (Habría venido, pero…; Yo no lo habría hecho);
 * future-in-the-past anterior in reported speech (Dijo que para las seis habría limpiado);
 * attenuated past wish or complaint (Habríamos preferido que nos avisara); concessive
 * conjecture (Habrían tenido prisa, pero…); habría / hubiera alternation ONLY in the
 * counterfactual value (both accepted; hubiese less frequent in the main clause);
 * no conditional after conditional «si», but yes after «si» = whether (No sé si habría
 * venido); habrá vs habría by reference point. Ampliación: reproaches and regret
 * (¡Me lo hubieras dicho!, ¡Haberlo dicho!, Podrías habérmelo dicho, ¡Quién lo hubiera dicho!).
 * Scene: four friends (Irene Campos, Bruno Lara, Celia Mora, Darío Peña) rent a mountain
 * cabin for the weekend. They arrive at eleven at night in a storm: door open, no key in the
 * key box, embers in the fireplace, two half-drunk coffees, an unfinished note. The owner,
 * Rosario Gil (usted), had promised the house would be clean by six. Explorar: Saturday
 * breakfast, Irene and Bruno reconstruct the night for Darío. Escuchar: Rosario's voice
 * message (es-MX-DaliaNeural). Escribir: Irene's email to Rosario. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 474,
  level: 'C1',
  title: 'Probabilidad retrospectiva y condicional compuesto',
  subtitle: 'Suponer qué había pasado antes, imaginar lo que no ocurrió, citar lo previsto y quejarte con tacto con «habría + participio».',
  legend: [
    { tone: 'orange', label: 'CONJETURA · estará, habrá estado, estaría, habría estado (a guess)' },
    { tone: 'blue', label: 'IRREAL · habría venido / hubiera venido (it did not happen)' },
    { tone: 'teal', label: 'FUTURO DEL PASADO · dijo que para las seis habría limpiado (what was foreseen)' },
    { tone: 'violet', label: 'CORTESÍA Y CONCESIÓN · habríamos preferido que…, habrían tenido prisa, pero… (tact)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Una forma, varios pasados', coach: 'Habría + participio: ¿supones, imaginas o citas? Guess, imagine or quote?',
      steps: [
        { title: 'Una cabaña con la puerta abierta · A cabin with the door open', blocks: [
          { kind: 'lead', text: 'Viernes, once de la noche, en plena tormenta. Irene, Bruno y Celia llegan a la cabaña de montaña que han alquilado para el fin de semana. La puerta está abierta, la caja de la llave, vacía, y en la chimenea todavía quedan brasas. Sobre la mesa hay dos tazas de café a medio tomar y una nota sin terminar. La dueña, Rosario, les había prometido que para las seis la casa estaría limpia. A la mañana siguiente, todos intentan **reconstruir** lo que había pasado antes de que llegaran.', en: 'Friday, 11 p.m., in the middle of a storm. Three friends reach the mountain cabin they have rented: the door is open, the key box is empty, there are still embers in the fireplace, two half-drunk coffees and an unfinished note. The owner had promised the house would be clean by six. Next morning everyone tries to reconstruct what had happened before they arrived: that is today’s grammar.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres columnas. Tu alumno explica qué sabe Irene en cada frase: ¿un hecho, una suposición o algo que no ocurrió?', self: 'Lee las tres frases en voz alta y decide: ¿hecho, suposición o algo que no ocurrió? (Fact, guess or something that didn’t happen?)' } },
          { kind: 'compare', title: 'El mismo momento, tres actitudes · One moment, three attitudes', columns: [
            { tone: 'neutral', label: 'LO SABE', sentence: 'Cuando llegamos, los otros huéspedes ya **se habían ido**.', idea: 'Pluscuamperfecto: un hecho anterior a otro hecho pasado.', en: 'A fact: they had already left. The pluperfect states it as known.' },
            { tone: 'orange', label: 'LO SUPONE', sentence: 'Cuando llegamos, los otros huéspedes ya [[se habrían ido|orange]].', idea: 'Condicional compuesto de conjetura: ‘probablemente ya se habían ido’.', en: 'A guess about that earlier past: “they must have already left”, “they’d probably gone by then”.' },
            { tone: 'blue', label: 'NO OCURRIÓ', sentence: 'Si hubiéramos llegado antes, los [[habríamos visto|blue]].', idea: 'Resultado irreal: no llegamos antes y no los vimos.', en: 'An unreal result: “we would have seen them” (but we didn’t).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Cuando llegamos, la chimenea ya se habría apagado». ¿Qué sabe el hablante?', options: ['Que la chimenea estaba apagada: lo vio.', 'Nada seguro: supone que se había apagado antes de su llegada.', 'Que la chimenea se apagará más tarde.'], answer: 1, why: 'Condicional compuesto de conjetura = probablemente + pluscuamperfecto. Si lo hubiera visto, diría «ya se había apagado».', en: '“When we arrived, the fire must have already gone out.” What does the speaker actually know?' },
            { prompt: '¿Qué frase cuenta algo que NO ocurrió?', options: ['Ya se habrían acostado los vecinos.', 'Con cadenas en las ruedas, habríamos llegado antes.', 'Los vecinos ya se habían acostado.'], answer: 1, why: '«Con cadenas…» es una condición imaginada: no llevaban cadenas y no llegaron antes. Las otras dos hablan de algo que (probablemente) sí pasó.', en: 'Which sentence describes something that did NOT happen?' },
          ] },
        ] },
        { title: 'El mapa de la conjetura · The map of guessing', mascot: '/brand/mascot/studying.webp', coach: 'Un paso adelante en el tiempo. One tense forward.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONJETURA SEGÚN EL TIEMPO', question: '¿Qué dirías si lo supieras? Ahora, súbelo un tiempo.', en: 'To turn a known fact into a guess, Spanish moves the verb one step: present → simple future, present perfect → future perfect, imperfect or preterite → simple conditional, pluperfect → conditional perfect. The new piece at C1 is the last one: “habría + participle” for a guess about something that happened before another past moment.', formula: ['está → estará · ha estado → habrá estado', 'estaba / estuvo → estaría · había estado → habría estado', '= probablemente, seguramente, a lo mejor + el tiempo del dato · debe de / debía de + infinitivo'],
            meaning: 'La conjetura no cambia **de qué momento** hablas, solo **cuánto lo sabes**. El condicional compuesto mira a algo **anterior a otro momento pasado**: el punto de referencia («cuando llegamos», «a las once») está en el pasado.',
            examples: [
              { es: 'A las once, la tienda del pueblo ya [[habría cerrado|orange]].', en: 'By eleven, the village shop would probably have closed already.' },
              { es: 'Cuando encontramos la nota, ¿quién [[habría empezado|orange]] a escribirla?', en: 'When we found the note, who could have started writing it? (wondering about an earlier past)' },
              { es: '[[Habría|orange]] unas veinte personas en el bar del pueblo esa noche.', en: 'There must have been about twenty people in the village bar that night (simple conditional of impersonal “haber”).' },
            ] },
          { kind: 'table', title: 'Dato y conjetura, tiempo por tiempo · Fact and guess, tense by tense', head: ['Si lo sabes', 'Si lo supones', 'Equivale a', 'Momento'], rows: [
            ['Celia **está** dormida.', 'Celia [[estará|orange]] dormida.', 'probablemente está · debe de estar', 'ahora'],
            ['Rosario ya **ha subido**.', 'Rosario ya [[habrá subido|orange]].', 'probablemente ha subido · debe de haber subido', 'antes de ahora'],
            ['**Eran** las nueve. · **Salieron** con prisa.', '[[Serían|orange]] las nueve. · [[Saldrían|orange]] con prisa.', 'probablemente eran / salieron · debían de ser', 'un momento pasado'],
            ['Ya **se habían ido**.', 'Ya [[se habrían ido|orange]].', 'probablemente ya se habían ido · debían de haberse ido', 'antes de un momento pasado'],
          ], note: 'Ojo con «habría» sin participio: «[[Habría|orange]] unas veinte personas» es el condicional simple de «haber» impersonal (= probablemente había), no un tiempo compuesto. Y los adverbios no mueven el tiempo: «**Seguramente** / **A lo mejor** ya se **habían** ido» dice lo mismo que «Ya se **habrían** ido».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Sábado por la mañana. Bruno ve huellas de neumáticos recientes delante de la cabaña.', prompt: 'Alguien ya ___ por aquí en coche esta mañana.', options: ['hubiera pasado', 'habría pasado', 'habrá pasado'], answer: 2, why: 'Supone algo anterior a AHORA, con efecto en el presente: ha pasado → habrá pasado. «Habría» exigiría un punto de referencia pasado.', en: 'Someone must have driven by here this morning already.' },
            { context: 'Irene recuerda la noche anterior.', prompt: 'Cuando llegamos a las once, los otros huéspedes ya ___ hacía un buen rato.', options: ['habrán salido', 'habrían salido', 'hubieran salido'], answer: 1, why: 'El punto de referencia es pasado («cuando llegamos»): ya habían salido → ya habrían salido. La forma en -ra no expresa conjetura.', en: 'When we arrived at eleven, the other guests must have left a good while before.' },
          ] },
        ] },
        { title: 'Los demás valores · The other uses', mascot: '/brand/mascot/speaking.webp', coach: 'El contexto decide. Context decides.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'UNA FORMA, CINCO VALORES', question: '¿Supones, imaginas lo que no pasó, citas lo previsto, suavizas o concedes?', en: 'Besides guessing, the conditional perfect describes a past result that never happened (“I wouldn’t have done it”), what someone said would be finished by a past deadline (reported speech of the future perfect), a polite or softened wish about the past (“we would have preferred…”), and a concession (“they may well have been in a hurry, but…”). In the press it can also mark an unconfirmed report, which you saw in class 173.', formula: ['irreal: (si + hubiera…,) habría + participio', 'futuro del pasado: dijo que + para + fecha + habría + participio', 'cortesía: habría preferido / me habría gustado + que + subj.', 'concesión: habría + participio…, pero…'],
            meaning: 'La forma no basta: miras el **contexto**. ¿Hay un punto pasado y algo que no sabes? Conjetura. ¿Una condición que no se cumplió? Irreal. ¿Alguien anunció una fecha límite? Futuro del pasado. ¿Una queja suave? Cortesía. ¿Un «pero» detrás? Concesión.',
            examples: [
              { es: 'Con un poco más de luz, [[habríamos visto|blue]] el árbol caído. · Yo [[no lo habría hecho|blue]].', en: 'With a little more light we would have seen the fallen tree. · I wouldn’t have done it.' },
              { es: 'Rosario dijo que para las seis [[habría limpiado|teal]] la cabaña.', en: 'Rosario said she would have cleaned the cabin by six (her words: «Para las seis habré limpiado»).' },
              { es: '[[Habríamos preferido|violet]] que nos avisara antes de salir.', en: 'We would have preferred you to let us know before we set off (a polite complaint).' },
              { es: '[[Habrían tenido|violet]] prisa, no lo discuto, pero dejaron la puerta abierta.', en: 'They may well have been in a hurry, I won’t argue with that, but they left the door open.' },
            ] },
          { kind: 'table', title: 'Cómo se entiende cada valor · How each use is understood', head: ['Valor', 'Ejemplo', 'Se entiende como…'], rows: [
            ['[[Conjetura|orange]]', 'Cuando llegamos, ya se habrían ido.', 'probablemente ya se habían ido'],
            ['[[Irreal|blue]]', 'Habría venido, pero tenía fiebre.', 'no vino; imaginamos lo que no pasó'],
            ['[[Futuro del pasado|teal]]', 'Dijo que para junio habría terminado.', '«Para junio habré terminado», contado después'],
            ['[[Cortesía|violet]]', 'Me habría gustado saberlo antes.', 'queja o deseo suavizado sobre el pasado'],
            ['[[Concesión|violet]]', 'Habría estudiado mucho, pero suspendió.', 'admito que quizá estudió, pero no sirvió'],
            ['Rumor (clase 173)', 'Según la radio, el alcalde habría dimitido.', 'información de prensa no confirmada'],
          ], note: 'En el futuro del pasado no sabemos si se cumplió: «Dijo que para las seis **habría limpiado**» cuenta lo previsto. Lo que pasó después lo dice el contexto («…pero no pudo subir»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El fontanero nos aseguró que para el lunes habría cambiado la tubería». ¿Qué valor tiene?', options: ['Futuro del pasado: cita lo que él había previsto.', 'Irreal: nunca pensó cambiarla.', 'Conjetura: suponemos que la cambió.'], answer: 0, why: 'Estilo indirecto de «Para el lunes habré cambiado la tubería»: lo previsto desde un momento pasado.', en: '“The plumber assured us he would have replaced the pipe by Monday.” Which use is this?' },
            { prompt: '«Habría ido a la cena, pero me quedé sin batería y no encontré la dirección». ¿Fue a la cena?', options: ['No: es un resultado irreal.', 'No se sabe.', 'Sí, probablemente.'], answer: 0, why: 'El «pero» explica por qué no ocurrió: valor irreal. «Habría ido» = I would have gone.', en: '“I would have gone to the dinner, but my phone died and I couldn’t find the address.” Did the speaker go?' },
          ] },
        ] },
        { title: 'Habría o hubiera; nunca «si habría» · Habría or hubiera; never «si habría»', mascot: '/autoestudio/mascot/noting.webp', coach: 'La alternancia tiene límites. The swap has limits.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'HUBIERA EN LA ORACIÓN PRINCIPAL', question: '¿Puedes decir «hubiera» donde dices «habría»?', en: 'Only when the meaning is counterfactual (something that did not happen) can “hubiera + participle” replace “habría + participle” in the main clause: both are correct and both are common. With the other uses (guessing, reported future, concession, rumour) only “habría” works. The “-se” form “hubiese” belongs in the if-clause; in the main clause careful usage avoids it.', formula: ['Si hubiéramos salido antes, habríamos / hubiéramos llegado con luz. ✓ ✓', 'Yo no lo habría / hubiera hecho. · Habría / hubiera preferido que me avisaras. ✓ ✓', 'Cuando llegamos, ya se habrían ido. ✓ · *ya se hubieran ido ✗ (conjetura)'],
            meaning: 'La alternancia **habría / hubiera** solo existe con valor **irreal** (y con la cortesía, que también imagina un pasado distinto). Las dos formas son correctas: no corrijas «hubiera» en esa posición. En la conjetura, el futuro del pasado y la concesión, solo **habría**.',
            examples: [
              { es: 'Si hubiéramos sabido lo del árbol, [[habríamos subido|blue]] por la otra carretera.', en: 'If we had known about the tree, we would have driven up the other road.' },
              { es: 'Si hubiéramos sabido lo del árbol, [[hubiéramos subido|blue]] por la otra carretera.', en: 'The same meaning: “hubiera” in the main clause is equally correct and very frequent in speech on both sides of the Atlantic.' },
            ],
            note: 'En la oración con «si», las dos formas del subjuntivo valen: «si **hubiera** / **hubiese** sabido». En la principal lo más frecuente es «habría» o «hubiera»; «hubiese» se oye menos ahí, así que en tus textos usa las dos primeras.' },
          { kind: 'tip', icon: '💡', title: 'Dos «si» distintos · Two different «si»', text: 'Detrás del **si condicional** nunca va condicional: «*Si habría sabido» → «Si **hubiera** sabido». Pero el **si** que introduce una pregunta indirecta (= whether) sí lo admite: «No sé si Rosario **habría subido** con esa tormenta» es correcto. En el habla de algunas zonas, por ejemplo del norte de España, se oye «si habría», pero la norma culta lo rechaza.', en: 'After conditional “si” (if), never a conditional. After “si” meaning “whether” in an indirect question, the conditional is perfectly correct: “I don’t know whether she would have come up.” “Si habría” in an if-clause is heard in some areas, such as northern Spain, but standard usage rejects it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es incorrecta en la norma culta?', options: ['Si me lo hubieras dicho, te habría esperado.', 'Si me lo habrías dicho, te habría esperado.', 'Si me lo hubieras dicho, te hubiera esperado.'], answer: 1, why: 'Detrás del «si» condicional va «hubiera» (o «hubiese»), nunca «habría». La tercera es correcta: «hubiera» alterna con «habría» en la principal.', en: 'Which sentence is wrong in standard Spanish?' },
            { prompt: 'Cuando por fin encontramos la llave de repuesto, alguien ya ___ el agua caliente.', options: ['habría gastado', 'hubiera gastado', 'hubiese gastado'], answer: 0, why: 'Es una conjetura sobre un pasado anterior («cuando encontramos»): solo «habría». Las formas en -ra y -se no tienen valor de conjetura.', en: 'By the time we finally found the spare key, someone must have used up the hot water.' },
          ] },
        ] },
        { title: 'Quejarse con tacto y conceder · Complaining tactfully and conceding', mascot: '/brand/mascot/seated.webp', coach: 'Suaviza y concede. Soften and concede.', blocks: [
          { kind: 'compare', title: 'La misma molestia, tres tonos · Same annoyance, three tones', columns: [
            { tone: 'neutral', label: 'DIRECTO', sentence: 'Usted no nos avisó, y tenía que avisarnos.', idea: 'Reproche abierto: puede sonar duro con alguien a quien tratas de usted.', en: 'An open reproach: “you didn’t tell us and you should have.” Can sound harsh in a formal relationship.' },
            { tone: 'violet', label: 'ATENUADO', sentence: '[[Habríamos preferido|violet]] que nos avisara.', idea: 'El condicional compuesto presenta la queja como un deseo no cumplido.', en: 'A softened complaint framed as an unfulfilled wish: “we would have preferred you to let us know.”' },
            { tone: 'violet', label: 'MUY CORTÉS', sentence: '[[Nos habría gustado|violet]] saberlo antes, aunque entendemos la situación.', idea: 'Añade comprensión: la queja casi desaparece.', en: '“We would have liked to know earlier, though we understand”: the complaint is barely felt.' },
          ] },
          { kind: 'concept', tone: 'violet', label: 'CONJETURA CONCESIVA', question: '¿Admites algo como probable para quitarle importancia?', en: 'Like the future (“Será muy listo, pero…”), the conditional perfect can concede a likely past fact only to say it doesn’t change things: “Habría estudiado mucho, pero suspendió” = granted, he may have studied hard, but he failed. Fixed companions: “no lo discuto”, “no digo que no”, “de acuerdo”, followed by “pero”.', formula: ['habría + participio (, no lo discuto / no digo que no), pero + lo que importa'],
            meaning: 'El hablante **concede** un hecho probable del pasado y lo deja sin fuerza con **pero**. No duda: argumenta.',
            examples: [
              { es: 'El portero [[habría limpiado|violet]] la escalera el lunes, no digo que no, pero el sábado estaba llena de barro.', en: 'The caretaker may well have cleaned the stairs on Monday, I’m not saying he didn’t, but by Saturday they were covered in mud.' },
              { es: 'El conductor [[habría hecho|violet]] ese camino cien veces, pero aquella noche se perdió.', en: 'The driver may have done that road a hundred times, but that night he got lost.' },
            ],
            note: 'Con «habría preferido que…», el subjuntivo va en imperfecto o en pluscuamperfecto: «que nos **avisara**» o «que nos **hubiera avisado**». Nunca en presente: «*habría preferido que nos avise».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Habrían tenido sus motivos, pero dejar la puerta abierta no está bien». ¿Qué hace Bruno?', options: ['Imagina motivos que no tuvieron.', 'Duda de que tuvieran motivos.', 'Admite que quizá tenían motivos, pero los critica igual.'], answer: 2, why: 'Conjetura concesiva: concede algo probable y lo neutraliza con «pero».', en: '“They may have had their reasons, but leaving the door open isn’t right.” What is Bruno doing?' },
            { prompt: 'Me habría gustado que me lo ___ tú, y no tu hermana.', options: ['contaras', 'cuentes', 'contarías'], answer: 0, why: 'Tras «me habría gustado que» va imperfecto (o pluscuamperfecto) de subjuntivo: «que me lo contaras / hubieras contado».', en: 'I would have liked you to tell me yourself, not your sister.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Punto de referencia, valor, modo? Reference point, use, mood?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el punto de referencia, el valor o el modo?', self: 'Lee cada frase y decide qué falla: ¿el punto de referencia (ahora o pasado), el valor o el modo? Después toca para ver la corrección. (Reference point, use or mood?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Si habríamos salido a las cuatro, habríamos llegado con luz.', right: 'Si hubiéramos (o hubiésemos) salido a las cuatro, habríamos llegado con luz.', why: 'Detrás del «si» condicional va subjuntivo, nunca condicional.' },
            { wrong: 'Cuando llegamos, los huéspedes ya se hubieran ido.', right: 'Cuando llegamos, los huéspedes ya se habrían ido.', why: 'Para la conjetura solo sirve «habría». «Hubiera» sustituye a «habría» únicamente cuando el hecho es irreal.' },
            { wrong: 'Rosario no contesta: habría salido.', right: 'Rosario no contesta: habrá salido.', why: 'El punto de referencia es ahora: «ha salido» → «habrá salido». «Habría» necesita un momento pasado.' },
            { wrong: 'Ayer Rosario me dijo que para las seis habrá limpiado.', right: 'Ayer Rosario me dijo que para las seis habría limpiado.', why: 'La fecha límite ya pasó: el futuro compuesto pasa a condicional compuesto. «Habrá» solo se mantiene si el plazo sigue en el futuro («Me dijo que para el lunes habrá terminado», dicho hoy, jueves).' },
            { wrong: 'Habríamos preferido que nos avise.', right: 'Habríamos preferido que nos avisara (o nos hubiera avisado).', why: 'Con el condicional compuesto en la principal, el subjuntivo va en imperfecto o pluscuamperfecto.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Si habría llovido menos, habríamos subido a pie.', 'Si hubiera llovido menos, hubiéramos subido a pie.', 'Si llovería menos, habríamos subido a pie.'], answer: 1, why: 'Condición con «hubiera»; en la principal, «hubiéramos» alterna con «habríamos». «Si habría» y «si llovería» no son de la norma culta.', en: 'Which sentence is correct?' },
            { context: 'Darío llama el domingo por la noche y nadie contesta en la cabaña.', prompt: 'Ya ___ a la ciudad.', options: ['habrían vuelto', 'hubieran vuelto', 'habrán vuelto'], answer: 2, why: 'Supone algo anterior a ahora: han vuelto → habrán vuelto.', en: 'They must have gone back to the city already.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una llegada tarde a algún sitio en tres frases: lo que supone que había pasado («ya habrían…»), lo que no ocurrió («si hubiera…, habría…») y lo que alguien había prometido («dijo que para… habría…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Reconstruir la noche', coach: 'Toca cada marca: ¿qué valor tiene? Tap each mark.',
      steps: [
        { title: 'Desayuno del sábado · Saturday breakfast', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Darío; Bruno lo leen entre los dos. Después tu alumno toca cada expresión marcada y dice qué valor tiene.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿conjetura, irreal, futuro del pasado, cortesía o concesión? (Which use is each one?)' } },
          { kind: 'explore', title: '¿Qué pasó anoche?', setting: 'Sábado, nueve de la mañana. Darío acaba de llegar en el primer autobús. Irene y Bruno le cuentan la noche mientras desayunan; Celia sigue dormida. (The friends tell Darío about the night before.)', lines: [
            { who: 'Darío', text: 'Celia me escribió algo de una puerta abierta. ¿Qué pasó anoche?', en: 'Celia texted me something about an open door. What happened last night?' },
            { who: 'Irene', text: 'Llegamos a las once, con la tormenta, y la puerta estaba abierta. Rosario me había dicho que para las seis [[habría limpiado|teal]] y que dejaría la llave en la caja.', en: 'We got here at eleven, in the storm, and the door was open. Rosario had told me she would have cleaned by six and would leave the key in the box.' },
            { who: 'Bruno', text: 'Pues ni llave ni limpieza. Los de antes ya [[se habrían ido|orange]], pero no hacía mucho: la chimenea todavía tenía brasas.', en: 'Well, no key and no cleaning. The previous guests must have left already, but not long before: there were still embers in the fireplace.' },
            { who: 'Darío', text: '¿Y a qué hora se fueron?', en: 'And what time did they leave?' },
            { who: 'Irene', text: 'Ni idea. [[Serían las nueve|orange]], más o menos. Había dos tazas de café a medio tomar.', en: 'No idea. Around nine, maybe. There were two half-drunk cups of coffee.' },
            { who: 'Bruno', text: 'Y una nota sin terminar: «Gracias por todo, Rosario. Nos vamos antes porque…». [[Habrían recibido|orange]] alguna llamada urgente.', en: 'And an unfinished note: “Thanks for everything, Rosario. We’re leaving early because…” They must have had some urgent call.' },
            { who: 'Darío', text: 'O [[habrían oído|orange]] la previsión del tiempo y no querían quedarse atrapados.', en: 'Or they’d heard the weather forecast and didn’t want to get stuck.' },
            { who: 'Irene', text: 'Puede ser. [[Habrían tenido prisa|violet]], de acuerdo, pero cerrar la puerta cuesta un segundo.', en: 'Could be. They may have been in a hurry, fine, but closing a door takes a second.' },
            { who: 'Darío', text: 'Yo, desde luego, [[no la habría dejado abierta|blue]]. ¿Y Rosario qué dice?', en: 'I certainly wouldn’t have left it open. And what does Rosario say?' },
            { who: 'Irene', text: 'No contesta. Esta mañana le he dejado un mensaje muy educado: «[[Habríamos preferido|violet]] que nos avisara».', en: 'She isn’t answering. This morning I left her a very polite message: “We would have preferred you to let us know.”' },
            { who: 'Bruno', text: 'Y si [[hubiéramos salido|blue]] a las cuatro, como yo decía, [[habríamos llegado|blue]] con luz.', en: 'And if we had left at four, as I kept saying, we would have arrived in daylight.' },
            { who: 'Darío', text: 'Bueno, ya está. Por cierto, ¿quién [[habrá dejado|orange]] estas botas llenas de barro en la entrada?', en: 'Anyway, never mind. By the way, I wonder who left these muddy boots by the door?' },
          ], notes: {
            'habría limpiado': '**Futuro del pasado**: Rosario dijo «Para las seis habré limpiado». Contado después, «habré» pasa a «habría». No dice si lo hizo; el contexto dice que no.',
            'se habrían ido': '**Conjetura** sobre un pasado anterior a otro: cuando llegaron (once), probablemente ya se habían ido. La pista: las brasas.',
            'Serían las nueve': '**Conjetura** con condicional simple: ‘probablemente eran las nueve’. Es el paso anterior del mapa (eran → serían).',
            'Habrían recibido': '**Conjetura**: Bruno explica la nota sin terminar. Antes de irse, probablemente habían recibido una llamada.',
            'habrían oído': '**Conjetura** alternativa: Darío propone otra explicación con la misma forma. Detrás, imperfecto («no querían»).',
            'Habrían tenido prisa': '**Conjetura concesiva**: Irene admite que quizá tenían prisa («de acuerdo») y lo neutraliza con «pero».',
            'no la habría dejado abierta': '**Irreal**: Darío se pone en su lugar. También es correcto «no la hubiera dejado abierta».',
            'Habríamos preferido': '**Cortesía**: la queja se presenta como un deseo no cumplido. Detrás, imperfecto de subjuntivo («que nos avisara»).',
            'hubiéramos salido': 'Condición **irreal** del pasado: después de «si», pluscuamperfecto de subjuntivo, nunca «habríamos».',
            'habríamos llegado': '**Resultado irreal**: no salieron a las cuatro y no llegaron con luz. También vale «hubiéramos llegado».',
            'habrá dejado': '**Conjetura con futuro compuesto**: las botas están ahí ahora; Darío supone algo anterior a este momento, no a otro pasado.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué saben con seguridad los amigos?', options: ['Que la puerta estaba abierta y había brasas en la chimenea.', 'Que los huéspedes recibieron una llamada urgente.', 'Que los huéspedes se fueron a las nueve.'], answer: 0, why: 'Lo cuentan en imperfecto, sin conjetura: «la puerta estaba abierta», «la chimenea todavía tenía brasas». La hora y la llamada son suposiciones.', en: 'What do the friends know for sure?' },
            { prompt: '¿Qué había prometido Rosario?', options: ['Tener la cabaña limpia para las seis y dejar la llave en la caja.', 'Llamar a Irene a las seis.', 'Subir a las once con la llave.'], answer: 0, why: '«Rosario me había dicho que para las seis habría limpiado y que dejaría la llave en la caja».', en: 'What had Rosario promised?' },
            { prompt: '¿Por qué Darío dice «habrá dejado» y no «habría dejado»?', options: ['Porque las botas están ahí ahora: supone algo anterior al presente.', 'Porque habla de algo irreal.', 'Porque es más cortés.'], answer: 0, why: 'Su punto de referencia es el momento actual: alguien ha dejado las botas → alguien habrá dejado las botas.', en: 'Why does Darío say “habrá dejado” rather than “habría dejado”?' },
          ] },
        ] },
        { title: 'Dato, conjetura o irreal · Fact, guess or unreal', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué saben y qué suponen? · What do they know and what do they guess?', categories: [
            { id: 'dato', label: 'DATO · lo saben', tone: 'neutral' },
            { id: 'conjetura', label: 'CONJETURA · lo suponen', tone: 'orange' },
            { id: 'irreal', label: 'IRREAL · no ocurrió', tone: 'blue' },
          ], items: [
            { text: 'La caja de la llave estaba vacía.', answer: 'dato', why: 'Imperfecto descriptivo: lo vieron.' },
            { text: 'Los otros huéspedes ya se habrían llevado la llave.', answer: 'conjetura', why: '«Se habrían llevado» = probablemente se la habían llevado.' },
            { text: 'Rosario había prometido dejar la casa limpia.', answer: 'dato', why: 'Pluscuamperfecto: un hecho anterior que Irene conoce.' },
            { text: 'Con una linterna potente, habríamos visto el camino mucho mejor.', answer: 'irreal', why: 'No tenían esa linterna: resultado imaginado.' },
            { text: 'La tormenta habría empezado arriba bastante antes que en el pueblo.', answer: 'conjetura', why: 'Suposición sobre un momento anterior a su llegada.' },
            { text: 'Celia no habría aceptado nunca dormir con la puerta sin cerrar.', answer: 'irreal', why: 'Se imagina una situación que no se dio: «no habría aceptado nunca».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué crees tú que había pasado antes de que llegaran?». Tu alumno propone otra explicación con dos conjeturas («ya habrían…», «serían…») y una pista que la apoye.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Ahora o antes de otro pasado? Now, or before another past?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Bruno encontró la estufa del baño todavía tibia.', prompt: 'Cuando entramos, alguien la ___ hacía poco.', options: ['hubiera encendido', 'habrá encendido', 'habría encendido'], answer: 2, why: 'Conjetura sobre algo anterior a un momento pasado («cuando entramos»): habría encendido. «Hubiera» no expresa conjetura; «habrá» mira desde ahora.', en: 'When we went in, someone must have switched it on shortly before.' },
            { prompt: 'Ahora mismo Rosario no contesta: ___ en el camino con los operarios.', options: ['estará', 'habría estado', 'estaría'], answer: 0, why: 'Conjetura sobre el presente: está → estará.', en: 'Right now Rosario isn’t answering: she’s probably on the road with the workmen.' },
            { context: 'La empresa de leña prometió el lunes traerla. Hoy es viernes y no ha llegado nada.', prompt: 'Dijeron que para el miércoles ya ___ la leña.', options: ['habrán traído', 'hubieran traído', 'habrían traído'], answer: 2, why: 'Futuro del pasado con un plazo ya vencido (el miércoles): «Para el miércoles habremos traído» → «dijeron que habrían traído».', en: 'They said they would have brought the firewood by Wednesday.' },
            { context: 'Darío ya hizo la reserva de la cabaña sin leer las condiciones.', prompt: 'Celia: «Yo, en tu lugar, no ___ la reserva sin leer la letra pequeña».', options: ['habría hecho', 'haría', 'había hecho'], answer: 0, why: 'Irreal sobre el pasado: la reserva ya está hecha. «Haría» hablaría de ahora; «había hecho» no imagina nada. (También es correcto «hubiera hecho».)', en: 'If I were you, I wouldn’t have booked without reading the small print.' },
            { prompt: '¿Qué frase es correcta?', options: ['Si Rosario habría subido, nos habría avisado.', 'No sé si Rosario habría subido con aquella tormenta.', 'Si Rosario habría tenido señal, nos habría llamado.'], answer: 1, why: 'En la primera, «si» introduce una pregunta indirecta (= whether) y admite condicional. Detrás del «si» condicional va «hubiera».', en: 'Which sentence is correct?' },
          ] },
        ] },
        { title: '¿Qué valor tiene? · Which use is it?', blocks: [
          { kind: 'classify', title: 'Clasifica el condicional compuesto · Classify the conditional perfect', categories: [
            { id: 'conjetura', label: 'CONJETURA', tone: 'orange' },
            { id: 'irreal', label: 'IRREAL', tone: 'blue' },
            { id: 'futuro', label: 'FUTURO DEL PASADO', tone: 'teal' },
            { id: 'tacto', label: 'CORTESÍA O CONCESIÓN', tone: 'violet' },
          ], items: [
            { text: 'Cuando llegó el técnico, la caldera ya se habría apagado sola.', answer: 'conjetura', why: 'Suposición sobre algo anterior a «cuando llegó».' },
            { text: 'Con cadenas en las ruedas, habríamos subido sin problema.', answer: 'irreal', why: 'No llevaban cadenas: resultado imaginado.' },
            { text: 'La empresa aseguró que para el sábado habría reparado la luz del porche.', answer: 'futuro', why: 'Estilo indirecto de «Para el sábado habremos reparado…».' },
            { text: 'Me habría gustado saber lo del árbol antes de salir.', answer: 'tacto', why: 'Deseo no cumplido que suaviza una queja.' },
            { text: 'Habrían hecho limpieza, no lo niego, pero el horno estaba lleno de grasa.', answer: 'tacto', why: 'Concesión: admite algo probable y lo neutraliza con «pero».' },
            { text: 'Rosario prometió que antes de la cena habría cambiado las sábanas.', answer: 'futuro', why: 'Lo previsto, contado desde después: «Antes de la cena habré cambiado…».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si habríamos mirado la previsión, habríamos salido el jueves.', ok: false, options: ['Si miraríamos la previsión, habríamos salido el jueves.', 'Si hubiéramos mirado la previsión, habríamos salido el jueves.', 'Si habíamos mirado la previsión, habríamos salido el jueves.'], answer: 1, why: 'Detrás del «si» condicional, pluscuamperfecto de subjuntivo: si hubiéramos mirado.' },
            { sentence: 'Si nos hubieran avisado, hubiéramos traído velas y linternas.', ok: true, why: 'Correcta: en la oración principal, «hubiéramos traído» alterna con «habríamos traído» porque el valor es irreal.' },
            { sentence: 'Cuando abrimos la nevera, alguien ya se hubiera comido el queso.', ok: false, options: ['Cuando abrimos la nevera, alguien ya se comería el queso.', 'Cuando abrimos la nevera, alguien ya se habría comido el queso.', 'Cuando abrimos la nevera, alguien ya se habrá comido el queso.'], answer: 1, why: 'Conjetura anterior a un momento pasado: solo «habría». «Hubiera» sirve únicamente para lo irreal.' },
            { sentence: 'No sé si Darío habría venido en autobús si no hubiera tenido el coche en el taller.', ok: true, why: 'Correcta: el primer «si» es una pregunta indirecta (= whether) y admite condicional; el segundo es condicional y lleva «hubiera».' },
            { sentence: 'Ayer Rosario me dijo que para las seis habrá limpiado la cabaña.', ok: false, options: ['Ayer Rosario me dijo que para las seis hubiera limpiado la cabaña.', 'Ayer Rosario me dijo que para las seis había limpiado la cabaña.', 'Ayer Rosario me dijo que para las seis habría limpiado la cabaña.'], answer: 2, why: 'El plazo ya pasó: futuro del pasado, «habría limpiado». «Había limpiado» lo daría como hecho cumplido.' },
            { sentence: 'Habría preferido que me lo dijeras a la cara.', ok: true, why: 'Correcta: cortesía con condicional compuesto + imperfecto de subjuntivo. También vale «que me lo hubieras dicho».' },
          ] },
        ] },
        { title: 'Mensajes desde el pueblo · Messages from the village', blocks: [
          { kind: 'chat-fill', title: 'Celia escribe a Irene · Celia texts Irene', lines: [
            { who: 'Celia', text: 'Estoy en la tienda del pueblo. El dueño vio pasar anoche a la pareja de la cabaña; ___ las nueve, dice, pero no está seguro.', options: ['serían', 'hubieran sido', 'serán'], answer: 0, why: 'Conjetura sobre un momento pasado: eran → serían.' },
            { who: 'Irene', text: 'Entonces, cuando llegamos a las once, ya ___ del pueblo hacía rato.', options: ['se habrán ido', 'se hubieran ido', 'se habrían ido'], answer: 2, why: 'Conjetura anterior a otro pasado («cuando llegamos»): habrían ido. «Habrán» miraría desde ahora; «hubieran» no expresa conjetura.' },
            { who: 'Celia', text: 'Y dice que Rosario le contó el jueves que para el viernes a mediodía ya ___ sábanas nuevas.', options: ['hubiera comprado', 'habría comprado', 'habrá comprado'], answer: 1, why: 'Futuro del pasado con un plazo que ya pasó: habría comprado.' },
            { who: 'Irene', text: 'Pues aquí no han llegado. Voy a escribirle otra vez, con tacto: «___ que nos avisara del árbol, aunque fuera con un mensaje».', options: ['Preferiríamos', 'Hemos preferido', 'Habríamos preferido'], answer: 2, why: 'Deseo no cumplido sobre el pasado: «habríamos preferido» (o «hubiéramos preferido») + imperfecto de subjuntivo. «Preferiríamos» hablaría de ahora o del futuro.' },
            { who: 'Celia', text: 'No seas dura con ella. Si ___ señal en esa curva, nos habría llamado, seguro.', options: ['hubiera tenido', 'habría tenido', 'tendría'], answer: 0, why: 'Detrás del «si» condicional, pluscuamperfecto de subjuntivo; nunca condicional.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Cuando', 'llegamos,', 'los', 'huéspedes', 'ya', 'se', 'habrían', 'ido'], accept: ['Cuando llegamos, los huéspedes ya se habrían ido', 'Cuando llegamos, ya se habrían ido los huéspedes'], en: 'When we arrived, the guests must have already left.' },
            { tiles: ['Rosario', 'dijo', 'que', 'para', 'las', 'seis', 'habría', 'limpiado', 'la', 'cabaña'], accept: ['Rosario dijo que para las seis habría limpiado la cabaña', 'Rosario dijo que habría limpiado la cabaña para las seis'], en: 'Rosario said she would have cleaned the cabin by six.' },
            { tiles: ['Los', 'huéspedes', 'habrían', 'tenido', 'prisa,', 'pero', 'no', 'cerraron', 'la', 'puerta'], accept: ['Los huéspedes habrían tenido prisa, pero no cerraron la puerta'], en: 'The guests may have been in a hurry, but they didn’t close the door.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Cambia el valor o la perspectiva · Change the use or the viewpoint', items: [
            { prompt: 'Seguramente los huéspedes ya habían apagado la calefacción cuando llegamos.', instruction: 'Sin «seguramente»: expresa la conjetura con el condicional compuesto.', accept: ['Los huéspedes ya habrían apagado la calefacción cuando llegamos', 'Cuando llegamos, los huéspedes ya habrían apagado la calefacción'] },
            { prompt: 'Rosario: «Para las seis habré dejado la llave en la caja».', instruction: 'Cuéntalo en estilo indirecto: empieza con «Rosario dijo que…».', accept: ['Rosario dijo que para las seis habría dejado la llave en la caja', 'Rosario dijo que habría dejado la llave en la caja para las seis'] },
            { prompt: 'No salimos a las cuatro y llegamos de noche.', instruction: 'Hipótesis irreal: empieza con «Si hubiéramos…».', accept: ['Si hubiéramos salido a las cuatro, no habríamos llegado de noche', 'Si hubiéramos salido a las cuatro, no hubiéramos llegado de noche', 'Si hubiéramos salido a las cuatro, habríamos llegado de día', 'Si hubiéramos salido a las cuatro, hubiéramos llegado de día', 'Si hubiéramos salido a las cuatro, habríamos llegado con luz', 'Si hubiéramos salido a las cuatro, hubiéramos llegado con luz'] },
            { prompt: 'Queríamos que nos dejara una nota y no lo hizo.', instruction: 'Dilo con tacto (usted): empieza con «Habríamos preferido…».', accept: ['Habríamos preferido que nos dejara una nota', 'Habríamos preferido que nos dejase una nota', 'Habríamos preferido que nos hubiera dejado una nota', 'Habríamos preferido que nos hubiese dejado una nota'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta una situación real que salió mal con las cuatro piezas: una conjetura («ya habría…»), una promesa («dijo que para… habría…»), una hipótesis («si hubiera…») y una queja suave («me habría gustado…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de Rosario', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un audio a las nueve y media · A voice message at half past nine', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota qué sabe Rosario, qué supone y qué había prometido. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para separar lo que Rosario sabe, lo que supone y lo que había prometido. Vas a oír «no hay manera» (it’s impossible) y «la llave de repuesto» (the spare key). (Listen for gist, then sort facts, guesses and promises.)' } },
          { kind: 'listen', title: 'Mensaje de voz de Rosario', channel: 'MENSAJE DE VOZ · ROSARIO GIL, DUEÑA DE LA CABAÑA', src: '/audio/grammar-live/474.mp3',
            before: 'Por fin Rosario responde a los mensajes de Irene. ¿Qué crees que va a explicar y qué va a ofrecer? (What will she explain, and what will she offer?)',
            gist: { prompt: '¿Qué hace Rosario en el mensaje? · What does Rosario do in the message?', options: ['Culpa a los amigos por llegar tan tarde.', 'Dice que la cabaña estaba limpia cuando ellos llegaron.', 'Explica lo que cree que pasó, se disculpa y ofrece una compensación.'], answer: 2, why: 'Reconstruye la noche con conjeturas, explica por qué no pudo subir, pide perdón y no les cobra la primera noche.', en: 'She reconstructs the night, apologises and offers something in return.' },
            details: [
              { prompt: '¿A qué hora se fueron, según Rosario, los otros huéspedes?', options: ['A las once, justo antes de que llegaran.', 'A las seis en punto.', 'Hacia las ocho y media, pero no está segura.'], answer: 2, why: '«Serían las ocho y media, más o menos»: conjetura sobre un momento pasado.', en: 'According to Rosario, when did the other guests leave?' },
              { prompt: '¿Qué cree Rosario que pasó con la llave?', options: ['Que se cayó en el camino.', 'Que la tiene Irene.', 'Que los otros huéspedes se la llevaron sin darse cuenta.'], answer: 2, why: '«Con las prisas se habrían llevado la llave sin darse cuenta»: es una suposición.', en: 'What does Rosario think happened to the key?' },
              { prompt: '¿Por qué no limpió la cabaña como había prometido?', options: ['Porque los huéspedes no se habían ido.', 'Porque un árbol cortó el camino y no pudo subir.', 'Porque se le olvidó.'], answer: 1, why: '«A las cinco se cayó un árbol en el camino y no pude subir».', en: 'Why didn’t she clean the cabin as promised?' },
              { prompt: '¿Qué ofrece Rosario?', options: ['No cobrar la primera noche y subir con sábanas y llave.', 'Buscarles otra cabaña.', 'Devolver todo el dinero.'], answer: 0, why: '«Subo a las once con sábanas limpias y la llave de repuesto, y no les cobro la primera noche».', en: 'What does Rosario offer?' },
            ],
            transcript: 'Buenos días, Irene, soy Rosario, la de la cabaña. Acabo de escuchar sus mensajes y lo siento muchísimo. Le cuento lo que sé. Los huéspedes anteriores tenían que irse el jueves, pero con la tormenta se quedaron una noche más. Ayer por la tarde me escribieron que ya se iban; [[serían|orange]] las ocho y media, más o menos. Cuando ustedes llegaron, ya [[habrían bajado|orange]] al pueblo, y con las prisas [[se habrían llevado|orange]] la llave sin darse cuenta: todavía no me contestan. Yo le dije que para las seis [[habría limpiado|teal]] todo, y esa era mi intención, pero a las cinco se cayó un árbol en el camino y no pude subir. Si hubiera tenido señal, la [[habría llamado|blue]] enseguida, pero en esa curva no hay manera. Entiendo que [[habrían preferido|violet]] encontrar la casa preparada, y tienen toda la razón. Los otros huéspedes [[habrían tenido|violet]] prisa, no lo discuto, pero dejar la puerta abierta no está bien. Esta mañana ya despejaron el camino. Subo a las once con sábanas limpias y la llave de repuesto y, por supuesto, no les cobro la primera noche. Otra vez, mil disculpas.',
            reply: { teacher: 'Tú eres Rosario y llamas a Irene. Tu alumno es Irene: acepta la disculpa, resume lo que supone que pasó y te dice con tacto qué habrían preferido.', self: 'Contesta a Rosario con un audio de 30 segundos: acepta la disculpa, di qué crees que pasó («ya se habrían…») y qué habrías preferido. (Reply in 30 seconds: accept, guess, and soften your complaint.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Reconstruir, imaginar, reclamar', coach: 'Supón, imagina y suaviza. Guess, imagine, soften.',
      steps: [
        { title: 'Historias que salieron de otra manera · Stories that turned out differently', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con el condicional compuesto. Si usa «habría» donde va «habrá», o «si habría», tú repites la frase con tono de duda y tu alumno se corrige.', self: 'Lee cada pregunta y responde en voz alta durante un minuto. Usa al menos dos valores distintos de «habría + participio» en cada respuesta. (Use at least two different uses of “habría + participle” in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Llegaste una vez a un sitio y algo raro había pasado antes. ¿Qué crees que había ocurrido? · Reconstruct a past mystery.', followUps: ['¿Qué pistas había?', '¿Llegaste a saber la verdad?', '¿Qué explicación era la menos probable?'], phrases: ['Cuando llegué, ya [[habrían…|orange]]', '[[Serían|orange]] las…', 'A juzgar por…, alguien [[habría…|orange]]'], hint: 'Primero los hechos (imperfecto, pluscuamperfecto); después tus conjeturas, con su pista.', example: 'Una vez volví de vacaciones y encontré todas las plantas de la terraza regadas. Pensé que mi vecina, que tiene llave, las habría regado esa mañana, pero me dijo que no. Entonces supuse que mi hermano habría pasado por casa: el agua todavía estaba en los platos, así que no haría ni una hora. Y acerté: había venido a buscar una maleta.' },
            { q: 'Una decisión del pasado que hoy tomarías de otra manera. ¿Qué habría pasado? · A past decision you would change.', followUps: ['¿Habría sido mejor de verdad?', '¿Qué habrías perdido?'], phrases: ['Si hubiera…, [[habría…|blue]]', '[[Hubiera…|blue]] / [[Habría…|blue]] (las dos valen)', 'Yo no [[lo habría hecho|blue]] así.'], hint: 'Condición con «hubiera»; resultado con «habría» o «hubiera». Nunca «si habría».', example: 'Si hubiera estudiado Medicina, como quería mi madre, habría tenido un trabajo más estable, pero no habría conocido a la gente con la que trabajo ahora. No sé si habría sido más feliz; seguramente no.', next: 'Ahora, una promesa que no se cumplió.' },
            { q: 'Alguien te prometió que para una fecha habría terminado algo, y no fue así. Cuéntalo. · Someone promised to have something done by a date.', followUps: ['¿Qué excusa dio?', '¿Cómo reaccionaste?'], phrases: ['Me dijo que para… [[habría…|teal]]', 'Me aseguró que antes de… [[habría…|teal]]', '[[Habría tenido|violet]] sus problemas, pero…'], hint: 'Cita la promesa con el futuro del pasado y comenta la excusa con una concesión.', example: 'El pintor me aseguró que para el viernes habría terminado el salón. El viernes había pintado una pared. Habría tenido sus problemas, no digo que no, pero podía haberme avisado. Al final tardó dos semanas.' },
            { q: 'Eres Irene: llamas a Rosario (usted) para hablar de lo que pasó. · Call the owner and complain tactfully.', followUps: ['¿Y si se pone a la defensiva?', '¿Qué le pedirías para la próxima vez?'], phrases: ['[[Habríamos preferido|violet]] que…', '[[Nos habría gustado|violet]]…', 'Entendemos que…, pero…'], hint: 'Agradece, suaviza la queja con el condicional compuesto y propón una solución.', example: 'Rosario, muchas gracias por subir esta mañana. Entendemos lo del árbol, pero nos habría gustado saberlo antes: habríamos preferido que nos dejara un mensaje en el pueblo. Para la próxima vez, quizá podría dejar la llave de repuesto en la tienda.', teacher: 'Tú haces de Rosario: al principio te justificas un poco. Tu alumno mantiene el tono cortés.' },
            { q: 'Defiende a alguien que cometió un error en el pasado, pero sin negarlo. · Defend someone without denying the mistake.', followUps: ['¿Qué le dirías a esa persona?', '¿Tú habrías actuado igual?'], phrases: ['[[Habría…|violet]], no lo discuto, pero…', '[[Habría tenido|violet]] sus razones, pero…', 'Yo en su lugar [[habría…|blue]]'], hint: 'Concede con «habría + participio…, pero» y termina con tu valoración.', example: 'Mi compañero envió el informe con errores. Habría trabajado muchas horas, no lo discuto, pero no lo revisó. Yo en su lugar habría pedido un día más. Aun así, no fue para tanto.' },
            { q: 'Encuentras en la cabaña un libro con una dedicatoria de 1985: «Para Elena, que lo terminó antes que nadie». Imagina su historia. · Imagine the story behind an old dedication.', followUps: ['¿Quién sería Elena?', '¿Dónde estará ahora el libro de verdad?', '¿Qué habría pasado antes de esa dedicatoria?'], phrases: ['[[Sería|orange]]…', 'Ya [[habría…|orange]]', 'Ahora [[estará|orange]]…', '[[Habrá estado|orange]]…'], hint: 'Recorre el mapa: presente (estará), antes de ahora (habrá estado), pasado (sería), antes de ese pasado (habría + participio).', example: 'Elena sería una estudiante que pasó aquí unas vacaciones. Cuando le regalaron el libro, ya lo habría leído en la biblioteca, por eso «antes que nadie». Ahora tendrá unos sesenta años, y el libro habrá estado en esta estantería desde entonces.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas una historia con dos errores («si habría…», «habría» en lugar de «habrá») y tu alumno te corrige y explica por qué.', self: 'Ahora cuenta en voz alta el fin de semana de la cabaña como si fueras Darío, que llegó el sábado: lo que sabes, lo que supones y lo que habría pasado si hubieras venido el viernes. (Retell the weekend as Darío.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a Rosario', coach: 'Reconstruye, cita y suaviza. Reconstruct, quote, soften.',
      steps: [
        { title: 'Correo después del fin de semana · Email after the weekend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada «habría»: ¿qué valor tiene? ¿Podría ser «hubiera»? ¿Hay algún «si habría»?', self: 'Escribe el correo y toca «Revisar mi texto». Después repasa cada «habría»: ¿conjetura, irreal, futuro del pasado, cortesía o concesión? (Check the use of each “habría”.)' } },
          { kind: 'write', title: 'Nuestra estancia en la cabaña · Our stay at the cabin', situation: 'Eres Irene (o alguien que vivió algo parecido en un alojamiento). El domingo, ya en casa, escribes a Rosario (usted) para contarle con calma lo que encontraron al llegar, sin perder la cordialidad: quieres volver. (Write to the owner, formally, about what you found and how you would have liked things to go.)', task: [
            'Dos conjeturas sobre lo que había pasado antes de llegar: «ya se habrían…».',
            'Lo que ella había prometido, en estilo indirecto: «Usted me dijo que para… habría…».',
            'Una hipótesis irreal: «si hubiéramos…, habríamos / hubiéramos…».',
            'Una queja atenuada («habríamos preferido que…», «nos habría gustado…») y una concesión («habrían tenido prisa, pero…»).',
            'Un cierre cordial con agradecimiento.',
          ], starters: ['Estimada Rosario:', 'Le escribo para contarle con calma…', 'Cuando llegamos, ya…', 'Usted me había dicho que para…', 'Si hubiéramos sabido…', 'Habríamos preferido que…', 'Un saludo cordial,'],
            words: ['ya se habrían ido', 'se habrían llevado', 'habría limpiado', 'si hubiéramos sabido', 'habríamos salido', 'habríamos preferido', 'nos habría gustado', 'no lo dudo', 'aun así', 'le agradecemos'],
            model: 'Estimada Rosario: le escribo para contarle con calma lo que pasó el viernes. Llegamos hacia las once y la puerta estaba abierta. Los huéspedes anteriores ya [[se habrían ido|orange]] hacía un par de horas, porque la chimenea todavía tenía brasas, y supongo que [[se habrían llevado|orange]] la llave sin darse cuenta. Usted me había dicho que para las seis [[habría limpiado|teal]] la casa, así que nos sorprendió encontrarla tal como la dejaron. Ahora sabemos lo del árbol y entendemos que no pudiera subir. Aun así, [[habríamos preferido|violet]] que nos avisara de alguna manera: si hubiéramos sabido lo del camino, [[habríamos salido|blue]] antes o [[habríamos buscado|blue]] un hotel en el pueblo. Los otros huéspedes [[habrían tenido|violet]] sus motivos para irse con prisa, no lo dudo, pero dejar la puerta abierta en plena tormenta no es aceptable. Le agradecemos mucho que subiera el sábado con todo lo necesario y que no nos cobrara la primera noche. La cabaña es preciosa y nos gustaría volver en primavera. Un saludo cordial, Irene Campos.',
            minWords: 140,
            checks: [
              { label: 'Un condicional compuesto (habría, habríamos, habrían + participio)', pattern: '(?<!\\p{L})habr(?:ía|ías|íamos|íais|ían)\\s+\\p{L}+(?:ado|ido|to|cho)(?!\\p{L})', tip: 'Reconstruye o imagina: «ya se **habrían ido**», «**habríamos salido** antes».' },
              { label: 'Una condición irreal con «si + hubiera / hubiese»', pattern: '(?<!\\p{L})si\\s+(?:\\p{L}+\\s+){0,2}?hubi(?:era|eras|éramos|erais|eran|ese|eses|ésemos|eseis|esen)(?!\\p{L})', tip: 'Imagina lo que no pasó: «Si **hubiéramos sabido** lo del camino, …».' },
              { label: 'Una queja atenuada (habríamos preferido, nos habría gustado…)', pattern: '(?<!\\p{L})(?:habr(?:ía|íamos)\\s+preferido|hubi(?:era|éramos)\\s+preferido|(?:me|nos)\\s+(?:habría|hubiera)\\s+gustado)(?!\\p{L})', tip: 'Suaviza: «**Habríamos preferido** que nos avisara».' },
            ],
            warnings: [
              { pattern: '(?:^|[.;:!?¡¿,]\\s*)si\\s+(?:(?:no|me|te|se|nos|le|les|lo|la|los|las|ya|usted|ustedes)\\s+){0,2}habr(?:ía|ías|íamos|íais|ían)(?!\\p{L})', why: 'Después del **si** condicional no va condicional: «si **hubiéramos** sabido», no «si habríamos sabido». (Si es una pregunta indirecta, «no sé si habría…», está bien.)' },
              { pattern: '(?<!\\p{L})(?:ya\\s+)?se\\s+hubi(?:era|eran)\\s+(?:ido|llevado|marchado)(?!\\p{L})\\s*(?:hac[íi]a|cuando|antes)', why: 'Para suponer sobre el pasado, solo **habría**: «ya se **habrían** ido». «Hubiera» solo alterna con «habría» cuando el hecho es irreal.' },
              { pattern: '(?<!\\p{L})(?:habr(?:ía|íamos)\\s+preferido|(?:me|nos)\\s+habría\\s+gustado)\\s+que\\s+(?:nos\\s+|me\\s+)?(?:avise|llame|diga|deje|escriba)(?!\\p{L})', why: 'Tras «habríamos preferido que», imperfecto o pluscuamperfecto de subjuntivo: «que nos **avisara**», «que nos **hubiera avisado**».' },
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
            { tone: 'orange', label: 'CONJETURA', formula: 'estará · habrá estado · estaría · habría estado', example: 'Cuando llegamos, ya se habrían ido.', caption: '= probablemente + el tiempo del dato', en: 'a guess, one tense “forward”: “habría + participle” for before another past moment' },
            { tone: 'blue', label: 'IRREAL', formula: '(si + hubiera…,) habría / hubiera + participio', example: 'Con cadenas, habríamos subido. · Yo no lo hubiera hecho.', caption: 'aquí, y solo aquí, «hubiera» = «habría»', en: 'something that did not happen; “hubiera” is equally correct in this use only' },
            { tone: 'teal', label: 'FUTURO DEL PASADO', formula: 'dijo que + para + plazo + habría + participio', example: 'Dijo que para junio habría terminado.', caption: '«habré» contado desde después', en: 'what someone said would be done by a deadline, reported later' },
            { tone: 'violet', label: 'CORTESÍA Y CONCESIÓN', formula: 'habría preferido que + subj. imperf. · habría + part., pero…', example: 'Habríamos preferido que nos avisara. · Habría estudiado, pero suspendió.', caption: 'suavizar una queja · conceder sin ceder', en: 'softening a complaint; granting a likely fact and setting it aside' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de decir «habría + participio», busca el **punto de referencia**: si es **ahora**, la conjetura es «habrá»; si es **un momento pasado**, «habría». Después mira el **valor**: solo cuando el hecho es irreal puedes cambiar «habría» por «hubiera». Y detrás del **si** condicional, siempre «hubiera / hubiese», nunca «habría».', en: 'Find the reference point first: now → “habrá”; a past moment → “habría”. Then check the use: only for unreal events can “habría” become “hubiera”. And after conditional “si”, always “hubiera / hubiese”, never “habría”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Cuando el profesor entró, los alumnos ya ___ el examen: estaban todos de pie, con las hojas boca abajo.', options: ['habrían terminado', 'hubieran terminado', 'habrán terminado'], answer: 0, why: 'Conjetura anterior a un momento pasado («cuando entró»): habrían terminado.', en: 'When the teacher came in, the students must have already finished the exam.' },
            { prompt: 'Si me ___ a tiempo, te habría ayudado con la mudanza.', options: ['avisarías', 'habrías avisado', 'hubieras avisado'], answer: 2, why: 'Detrás del «si» condicional, pluscuamperfecto de subjuntivo.', en: 'If you had told me in time, I would have helped you move.' },
            { prompt: 'La constructora prometió que para marzo ___ el puente. Estamos en mayo y sigue cerrado.', options: ['habrá terminado', 'hubiera terminado', 'habría terminado'], answer: 2, why: 'Futuro del pasado con el plazo vencido: habría terminado.', en: 'The construction company promised it would have finished the bridge by March.' },
            { prompt: '«Habría estudiado mucho, pero suspendió». ¿Qué expresa el hablante?', options: ['Que no estudió y por eso suspendió.', 'Que admite que quizá estudió mucho, pero no le sirvió.', 'Que estudiará mucho para el próximo examen.'], answer: 1, why: 'Conjetura concesiva: concede algo probable y lo neutraliza con «pero».', en: '“He may well have studied hard, but he failed.” What does the speaker mean?' },
            { prompt: 'Mi hermana no contesta: ___ el teléfono en el coche.', options: ['se habrá dejado', 'se habría dejado', 'se hubiera dejado'], answer: 0, why: 'Conjetura sobre algo anterior a ahora: se ha dejado → se habrá dejado.', en: 'My sister isn’t answering: she must have left her phone in the car.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una excavación. Now, at a dig.', blocks: [
          { kind: 'lead', text: 'Lidia Navas, arqueóloga, prepara el informe de una excavación junto a un río: una casa de hace dos mil años, abandonada con prisa. Reescribe sus notas con el condicional compuesto adecuado.', en: 'An archaeologist is writing up the dig of a two-thousand-year-old house by a river, abandoned in a hurry. Rewrite her notes with the right use of the conditional perfect.' },
          { kind: 'rewrite', title: 'El informe de la excavación · The dig report', items: [
            { prompt: 'Probablemente los habitantes ya habían abandonado la casa cuando el río se desbordó.', instruction: 'Conjetura sin «probablemente».', accept: ['Los habitantes ya habrían abandonado la casa cuando el río se desbordó', 'Cuando el río se desbordó, los habitantes ya habrían abandonado la casa'] },
            { prompt: 'El director dijo: «Para el verano habremos excavado todo el patio».', instruction: 'Estilo indirecto: empieza con «El director dijo que…».', accept: ['El director dijo que para el verano habrían excavado todo el patio', 'El director dijo que habrían excavado todo el patio para el verano'] },
            { prompt: 'No teníamos un dron y no vimos el trazado completo.', instruction: 'Hipótesis irreal: empieza con «Si hubiéramos…».', accept: ['Si hubiéramos tenido un dron, habríamos visto el trazado completo', 'Si hubiéramos tenido un dron, hubiéramos visto el trazado completo'] },
          ] },
        ] },
        { title: 'Ampliación · Reproches y lamentos · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Hay más formas de mirar con pena o con enfado un pasado que no fue. **¡Me lo hubieras dicho!** es un reproche frecuente en todo el mundo hispánico: ‘debiste decírmelo’. **¡Haberlo dicho!**, con infinitivo, es coloquial y muy frecuente en España. **Podrías habérmelo dicho** o **Me lo habrías podido decir** son más neutros. Y **¡Quién lo hubiera dicho!** no reprocha nada: expresa sorpresa ante algo que nadie esperaba.', en: 'For strong students or spare time. More ways of looking back at a past that didn’t happen. “¡Me lo hubieras dicho!” (you should have told me!) is a common reproach everywhere. “¡Haberlo dicho!” with the infinitive is colloquial and very frequent in Spain. “Podrías habérmelo dicho” is more neutral. “¡Quién lo hubiera dicho!” is no reproach at all: “who would have thought it!”' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: 'Irene a Bruno: «¡Me hubieras despertado!». ¿Qué expresa?', options: ['Que le reprocha no haberla despertado.', 'Que supone que la despertó.', 'Que agradece que la despertara.'], answer: 0, why: 'Pluscuamperfecto de subjuntivo en una exclamación: reproche por algo que no se hizo (‘debiste despertarme’).', en: '“You should have woken me!” What does Irene express?' },
            { prompt: '«¡Quién lo hubiera dicho! Rosario, que nunca sube de noche, apareció a las doce». ¿Qué expresa?', options: ['Sorpresa.', 'Un reproche a Rosario.', 'Una conjetura sobre la hora.'], answer: 0, why: '«¡Quién lo hubiera dicho!» = who would have thought it: sorpresa ante lo inesperado.', en: 'What does “¡Quién lo hubiera dicho!” express here?' },
            { prompt: '¿Qué versión es la más adecuada en un correo formal a Rosario?', options: ['¡Nos lo hubiera dicho!', 'Nos habría podido avisar por algún medio.', '¡Haberlo dicho antes!'], answer: 1, why: '«Habría podido + infinitivo» es un reproche suave y neutro. Las exclamaciones son coloquiales y suenan bruscas en un correo formal.', en: 'Which version suits a formal email best?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno convierte tres reproches coloquiales («¡Haberlo dicho!», «¡Me lo hubieras dicho!») en versiones formales con «habría podido» o «habríamos preferido que…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 175 · Aspecto y perífrasis: duración, fase, reiteración', text: 'Ya sabes situar un hecho en el tiempo y decir cuánto sabes de él: si lo supones, si no ocurrió o si alguien lo había previsto. En la clase 175 miras la acción **desde dentro**: cuánto dura, si empieza, sigue o termina, si se repite («llevaba horas esperando», «acabó por irse», «volvió a llamar»). Es el paso natural para contar el pasado con todos sus matices.', en: 'You can now place an event in time and say how much you know about it: a guess, something that never happened, or what someone had foreseen. Class 175 looks at actions from the inside: how long they last, whether they start, continue, end or repeat. It is the natural next step for telling the past with all its nuances.', href: '/la-accion-vista-desde-dentro', label: 'Ir a la clase 175' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Cuando llegamos, ya se habían ido”, “Cuando llegamos, ya se habrían ido” y “Si hubiéramos llegado antes, no se habrían ido”?». Respuesta esperada: hecho; conjetura; resultado irreal (aquí también vale «no se hubieran ido»). Tarea: el correo de Escribir sobre una experiencia propia.' },
        ] },
      ],
    },
  ],
};
