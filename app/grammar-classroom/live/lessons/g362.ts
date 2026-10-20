import type { LiveLesson } from '../types';

/**
 * Lesson 362 · A2 · Gustar, interesar, doler, faltar: concordancia (course unit G062).
 * One scene runs through the class: a small guided day trip to Guanajuato
 * (Mexico). Elena Duarte, the guide, has a group of three: Rosa and Javier
 * Medina, a retired couple from Puebla, and Marcos Ibarra, a photographer.
 * At two o'clock, after a morning of steps and alleys, they plan the
 * afternoon before the six o'clock bus back to San Miguel de Allende: Rosa
 * wants the art museum, Javier's feet hurt and the sun bothers him, Marcos
 * still needs his photos from the viewpoint and never has enough time.
 * Builds on class 032 (me gusta / me gustan) and class 035 (me duele la
 * cabeza): the same pattern with interesar, doler, faltar and molestar; what
 * decides -a / -an (one thing, uncountable, infinitives vs plural, two
 * things, numbers); faltar without a person (faltan cuatro horas); the same
 * agreement in the indefinido (me dolió / me dolieron); le / les, and
 * a + noun / pronoun for emphasis or clarity, with the clitic always present.
 * Per the coverage audit, me / te / le / nos / les are treated here as a
 * lexical block with these verbs; class 063 systematises the indirect object.
 * Contrast: necesito tiempo (the person is the subject) / me falta tiempo.
 * Elena speaks usted / ustedes to the travellers; they speak tú among them.
 * The voice message is Rosa (Mexican voice) to her daughter Paula.
 */
export const lesson: LiveLesson = {
  id: 362,
  level: 'A2',
  title: 'Gustar, interesar, doler, faltar: concordancia',
  subtitle: 'Decir qué te interesa, qué te duele y qué te falta, y hablar de los gustos de otros con a + persona y le o les.',
  legend: [
    { tone: 'blue', label: 'INTERESA · DUELE · FALTA: una cosa, algo que no se cuenta o un infinitivo (singular)' },
    { tone: 'orange', label: 'INTERESAN · DUELEN · FALTAN: varias cosas (plural)' },
    { tone: 'violet', label: 'A + PERSONA: a mí, a usted, a Javier… para insistir o aclarar (for emphasis or clarity)' },
  ],
  optionNotes: {
    duelo: '«Duelo» es la forma de yo, pero lo que duele no eres tú: es la parte del cuerpo. **Me duele** (una) o **me duelen** (dos o más).',
    falto: '«Falto» es la forma de yo. Lo que falta es la cosa: **me falta** tiempo, **me faltan** dos euros.',
    intereso: '«Intereso» es la forma de yo. Lo que interesa es la cosa o la acción: **me interesa**, **me interesan**.',
    interesas: '«Interesas» va con tú como sujeto (you are interesting to someone). Para preguntar por un interés: ¿te **interesa** + una cosa o un infinitivo?',
    Faltamos: '«Faltamos» significa que nosotros no estamos (we are absent). Para el tiempo que queda: **falta** poco, **faltan** diez minutos.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Una tarde en Guanajuato', coach: 'El verbo mira la cosa. The verb agrees with the thing.',
      steps: [
        { title: 'El grupo de Elena · Elena’s group', blocks: [
          { kind: 'lead', text: 'Elena Duarte es guía en Guanajuato, México. Hoy acompaña a un grupo pequeño: Rosa y Javier Medina, un matrimonio de Puebla, y Marcos Ibarra, un fotógrafo. Son las dos de la tarde y caminaron toda la mañana por calles con muchas escaleras. Javier se sienta y dice: «**Me duelen** los pies y **me falta** tiempo para todo». Hoy aprendes los verbos que funcionan como gustar.', en: 'Elena Duarte is a guide in Guanajuato, Mexico. Today she is with a small group: Rosa and Javier Medina, a married couple from Puebla, and Marcos Ibarra, a photographer. It is two in the afternoon and they walked all morning through streets with lots of steps. Javier sits down and says: “My feet hurt and I don’t have enough time for everything.” Today you learn the verbs that work like gustar.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases del grupo y tu alumno repite. Después tu alumno dice qué cosa interesa, qué cosa duele y qué cosa falta.', self: 'Lee las tres frases en voz alta. ¿Qué cosa interesa, qué cosa duele, qué cosa falta? (What interests, what hurts, what is missing?)' } },
          { kind: 'compare', title: 'Tres viajeros, tres frases · Three travellers, three sentences', columns: [
            { tone: 'orange', label: 'Rosa', sentence: 'Me [[interesan|orange]] los museos.', idea: 'Quiere ver arte esta tarde.', en: 'I’m interested in museums.' },
            { tone: 'orange', label: 'Javier', sentence: 'Me [[duelen|orange]] los pies.', idea: 'Está cansado: quiere sentarse.', en: 'My feet hurt.' },
            { tone: 'blue', label: 'Marcos', sentence: 'Me [[falta|blue]] tiempo.', idea: 'Quiere hacer muchas cosas y no puede.', en: 'I don’t have enough time.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué le pasa a Javier?', options: ['Le duelen los pies.', 'Le interesan los museos.', 'No tiene cámara.'], answer: 0, why: '«Me duelen los pies»: Javier está cansado de caminar.', en: 'What is wrong with Javier?' },
            { prompt: '«Me falta tiempo» significa…', options: ['I’m late.', 'I have a lot of time.', 'I don’t have enough time.'], answer: 2, why: 'Faltar = no tener bastante de algo: el tiempo no es suficiente.', en: '“Me falta tiempo” means…' },
            { prompt: 'En «me duelen los pies», ¿qué duele?', options: ['Javier.', 'Los pies: por eso «duelen», en plural.', 'Nada, es una pregunta.'], answer: 1, why: 'Lo que duele son los pies (dos): el verbo va en plural.', en: 'In “me duelen los pies”, what hurts?' },
          ] },
        ] },
        { title: 'Verbos como gustar · Verbs like gustar', mascot: '/brand/mascot/studying.webp', coach: 'Me interesa, me duele, me falta.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INTERESAR · DOLER · FALTAR · MOLESTAR', question: '¿Qué te interesa? ¿Qué te duele? ¿Qué te falta?', en: 'What are you interested in? What hurts? What do you lack?', formula: ['(a + persona) + me · te · le · nos · os · les + verbo + la cosa', 'interesa · duele · falta · molesta + una cosa / un infinitivo', 'interesan · duelen · faltan · molestan + varias cosas'],
            meaning: 'Ya conoces «me gusta» (clase 032) y «me duele la cabeza» (clase 035). **Interesar, doler, faltar y molestar** funcionan igual: lo que interesa, duele, falta o molesta es el sujeto, y el verbo **concuerda con esa cosa**, no con la persona. La persona va con me, te, le, nos, os, les.',
            examples: [
              { es: 'A Rosa le [[interesa|blue]] el arte mexicano.', en: 'Rosa is interested in Mexican art.' },
              { es: 'A Javier le [[duele|blue]] la rodilla derecha.', en: 'Javier’s right knee hurts.' },
              { es: 'Nos [[faltan|orange]] dos horas para ver todo.', en: 'We need two more hours to see everything.' },
              { es: 'Me [[molestan|orange]] los coches en las calles pequeñas.', en: 'Cars in narrow streets bother me.' },
            ] },
          { kind: 'table', title: 'Cuatro verbos nuevos con el modelo de gustar · Four new verbs, same pattern', head: ['Verbo', 'Significado', '+ una cosa / infinitivo', '+ varias cosas'], rows: [
            ['gustar · encantar (repaso)', 'to like · to love', 'me **gusta** el mercado', 'me **encantan** los dulces'],
            ['interesar', 'to interest, to be interested in', 'me **interesa** la historia', 'me **interesan** los museos'],
            ['doler (o → ue)', 'to hurt', 'me **duele** la espalda', 'me **duelen** los pies'],
            ['faltar', 'to be missing, not to have enough', 'me **falta** tiempo', 'me **faltan** dos fotos'],
            ['molestar', 'to bother', 'me **molesta** el sol', 'me **molestan** los ruidos'],
          ], note: 'Doler cambia la o por **ue**, como poder: d**ue**le, d**ue**len. Nunca «me duelo» ni «yo duelo»: la persona va con **me**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A Marcos le ___ la fotografía de calle.', options: ['interesa', 'interesan', 'intereso'], answer: 0, why: 'La fotografía: una cosa, singular. Interesa.', en: 'Marcos is interested in street photography.' },
            { prompt: 'Después de tantas escaleras, me ___ las piernas.', options: ['duele', 'duelen', 'duelo'], answer: 1, why: 'Las piernas: dos, plural. Duelen.', en: 'After so many steps, my legs hurt.' },
            { prompt: 'A Javier le ___ el calor.', options: ['molesta', 'molestan', 'molesto'], answer: 0, why: 'El calor: una cosa, singular. Molesta.', en: 'The heat bothers Javier.' },
          ] },
        ] },
        { title: '¿-a o -an? · Singular or plural?', mascot: '/brand/mascot/standing.webp', coach: '¿Una cosa o varias? One thing or several?', blocks: [
          { kind: 'table', title: 'Lo que decide la forma del verbo · What decides the verb form', head: ['Lo que interesa, duele o falta', 'Ejemplo', 'Verbo'], rows: [
            ['una cosa (singular)', 'Me interesa **el museo**.', '[[-a|blue]]'],
            ['algo que no se cuenta: tiempo, dinero, paciencia, sal', 'Me falta **tiempo**.', '[[-a|blue]]'],
            ['un infinitivo, o dos', 'Me interesa **visitar** el museo y **comer** en el mercado.', '[[-a|blue]]'],
            ['varias cosas (plural)', 'Me duelen **los pies**.', '[[-an|orange]]'],
            ['dos cosas con «y»', 'Me duelen **la cabeza y la espalda**.', '[[-an|orange]]'],
            ['un número de dos o más: dos euros, diez minutos…', 'Nos faltan **dos euros**.', '[[-an|orange]]'],
          ], note: 'Con un infinitivo, el verbo va en singular aunque después haya un plural: «Me interesa **visitar** las iglesias». Lo que interesa es la acción (visitar), no las iglesias.' },
          { kind: 'decide', title: '¿Interesa o interesan? · Choosing the form', steps: [
            { q: '¿Después viene un infinitivo (ver, visitar, caminar)? (an action)', yes: 'Singular: «Me interesa **ver** las fotos».', no: 'next' },
            { q: '¿Viene un plural, dos cosas con «y» o un número (los pies, la cabeza y la espalda, dos horas)?', yes: 'Plural: «Me **duelen** los pies», «Nos **faltan** dos horas».', no: 'Singular: una cosa o algo que no se cuenta: «Me **falta** tiempo».' },
          ] },
          { kind: 'table', title: 'En el pasado, la misma regla · Same rule in the past', head: ['Presente', 'Indefinido (ayer, el sábado…)'], rows: [
            ['Me interesa el museo.', 'Me [[interesó|blue]] el museo.'],
            ['Me interesan los museos.', 'Me [[interesaron|orange]] los museos.'],
            ['Me duele la rodilla.', 'Me [[dolió|blue]] la rodilla.'],
            ['Me duelen los pies.', 'Me [[dolieron|orange]] los pies.'],
            ['Nos falta tiempo.', 'Nos [[faltó|blue]] tiempo.'],
          ], note: 'Ya conoces el indefinido (clases 047 y 048). Aquí solo cambia la terminación: **-ó** para una cosa, **-aron / -ieron** para varias.' },
          { kind: 'tip', icon: '💡', title: 'Faltar sin persona · Faltar without a person', text: 'Para contar el tiempo que queda hasta un momento, faltar va sin me, te, le: «**Faltan** cuatro horas para el autobús», «**Falta** poco para las seis». La misma regla: cuatro horas, plural; poco, singular.', en: 'To count the time left until a moment, faltar goes without me, te, le: “There are four hours left until the bus”, “It’s nearly six”. The same rule: four hours, plural; poco, singular.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A Rosa le ___ conocer los museos de la ciudad.', options: ['interesas', 'interesan', 'interesa'], answer: 2, why: 'Lo que interesa es «conocer», un infinitivo: singular.', en: 'Rosa is interested in getting to know the city’s museums.' },
            { prompt: 'Nos ___ paciencia con tantos turistas.', options: ['faltamos', 'faltan', 'falta'], answer: 2, why: 'La paciencia no se cuenta: singular. Falta.', en: 'We don’t have enough patience with so many tourists.' },
            { prompt: '___ diez minutos para las seis.', options: ['Faltamos', 'Faltan', 'Falta'], answer: 1, why: 'Diez minutos: un número, plural. Faltan.', en: 'It’s ten minutes to six.' },
            { prompt: 'Ayer me ___ mucho los pies.', options: ['dolió', 'duelen', 'dolieron'], answer: 2, why: 'Ayer: indefinido. Los pies: plural. Dolieron.', en: 'Yesterday my feet hurt a lot.' },
          ] },
        ] },
        { title: 'Le, les y a + persona · Who?', mascot: '/brand/mascot/speaking.webp', coach: 'A Javier le duelen los pies. Javier’s feet hurt.', blocks: [
          { kind: 'table', title: '¿A quién? · Who?', head: ['Persona', 'a + … (opcional)', 'Pronombre (obligatorio)', 'Ejemplo'], rows: [
            ['yo', 'a mí', '**me**', 'A mí me interesa el arte.'],
            ['tú', 'a ti', '**te**', '¿A ti te duele algo?'],
            ['él · ella · usted', 'a él, a ella, a usted, a Javier', '**le**', 'A Javier le molesta el sol.'],
            ['nosotros · nosotras', 'a nosotros, a nosotras', '**nos**', 'A nosotros nos falta tiempo.'],
            ['vosotros · vosotras (España)', 'a vosotros, a vosotras', '**os**', '¿A vosotros os interesa el museo?'],
            ['ellos · ellas · ustedes', 'a ellos, a ustedes, a Rosa y a Marcos', '**les**', 'A Rosa y a Marcos les encanta el arte.'],
          ], note: 'Con «ustedes» el pronombre es **les**: «¿Qué les interesa a ustedes?». Os y vosotros son de España; en América se usa ustedes también con amigos. Hoy usas me, te, le, nos, les como un bloque con estos verbos; en la clase 063 ves el sistema completo (objeto indirecto).' },
          { kind: 'compare', title: '¿Para qué sirve a + persona? · What is a + person for?', columns: [
            { tone: 'violet', label: 'INSISTIR · CONTRASTAR', sentence: '[[A mí|violet]] me interesa el museo; [[a Javier|violet]], no.', idea: 'Cada persona quiere una cosa diferente.', en: 'I’m interested in the museum; Javier isn’t. (contrast)' },
            { tone: 'violet', label: 'ACLARAR', sentence: '[[A Javier|violet]] le duele la rodilla.', idea: '«Le duele»: ¿a él, a ella, a usted? Con «a Javier» queda claro.', en: 'Javier’s knee hurts. (clarity: le can be him, her or you)' },
            { tone: 'violet', label: 'NOMBRAR A VARIAS PERSONAS', sentence: '[[A Rosa y a Marcos|violet]] les encanta el arte.', idea: 'Una «a» delante de cada persona, y les.', en: 'Rosa and Marcos love art.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'El pronombre nunca falta · The pronoun is never left out', text: 'La parte «a + persona» es opcional; el pronombre **no**. Se dice «A mí **me** gusta», «A Javier **le** duele», nunca «A mí gusta». Y «Mí me gusta» no existe: siempre **a mí**.', en: 'The “a + person” part is optional; the pronoun is not. You say “A mí me gusta”, “A Javier le duele”, never “A mí gusta”. And “Mí me gusta” does not exist: always “a mí”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A Rosa y a Javier ___ encanta Guanajuato.', options: ['les', 'los', 'le'], answer: 0, why: 'Dos personas (Rosa y Javier): les.', en: 'Rosa and Javier love Guanajuato.' },
            { prompt: 'Elena, a Javier (usted): «¿___ duele la rodilla?»', options: ['Les', 'Le', 'Te'], answer: 1, why: 'Elena habla con Javier de usted: le.', en: 'Elena to Javier (formal): “Does your knee hurt?”' },
            { prompt: '___ me interesa más el mercado.', options: ['Yo', 'A mí', 'Mí'], answer: 1, why: 'Para insistir en la persona: a mí + me.', en: 'I’m more interested in the market.' },
            { prompt: 'Elena, al grupo: «¿Qué ___ interesa a ustedes?»', options: ['les', 'le', 'os'], answer: 0, why: 'Con ustedes, el pronombre es les.', en: 'Elena to the group: “What are you all interested in?”' },
          ] },
        ] },
        { title: '¿Necesito o me falta? · Two ways to say it', mascot: '/brand/mascot/seated.webp', coach: '¿Quién es el sujeto? Who is the subject?', blocks: [
          { kind: 'table', title: 'La persona o la cosa como sujeto · Person or thing as the subject', head: ['La persona es el sujeto', 'La cosa es el sujeto (hoy)'], rows: [
            ['(Yo) **necesito** más tiempo. (I need more time.)', 'Me [[falta|blue]] tiempo. (I don’t have enough time.)'],
            ['(Yo) **tengo** dolor de espalda. (I have back pain.)', 'Me [[duele|blue]] la espalda. (My back hurts.)'],
            ['El museo **es** muy interesante. (The museum is very interesting.)', 'Me [[interesa|blue]] el museo. (I’m interested in the museum.)'],
          ], note: 'Las dos columnas son correctas. Pero no se mezclan: «yo necesito», «me falta», nunca «yo falto tiempo» ni «yo duelo la espalda».' },
          { kind: 'tip', icon: '🌎', title: 'Me hace falta · I need', text: 'También vas a oír **hacer falta** con el mismo modelo: «Me **hace** falta un mapa», «Nos **hacen** falta dos sillas». Significa «necesitar» y es frecuente en España y en América.', en: 'You will also hear hacer falta with the same pattern: “I need a map”, “We need two chairs”. It means “to need” and is common in Spain and Latin America.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marcos: «Yo ___ una batería nueva para la cámara».', options: ['me falta', 'necesito', 'falto'], answer: 1, why: 'Con «yo» como sujeto, el verbo es necesitar: yo necesito.', en: 'Marcos: “I need a new battery for the camera.”' },
            { prompt: 'Javier: «A mí ___ la espalda».', options: ['duelo', 'tengo', 'me duele'], answer: 2, why: 'Con «a mí», el verbo concuerda con la espalda: me duele.', en: 'Javier: “My back hurts.”' },
            { prompt: 'Rosa: «Este museo ___ muy interesante».', options: ['es', 'me interesa', 'interesa'], answer: 0, why: 'Describes el museo con un adjetivo: es interesante.', en: 'Rosa: “This museum is very interesting.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Qué cosa? ¿Qué persona? What thing? What person?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla: ¿la forma del verbo o el pronombre? Después aparece la corrección.', self: 'Lee cada frase y busca el error: ¿la forma del verbo o el pronombre? Toca para ver la corrección. (Is it the verb form or the pronoun?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Me interesa los museos.', right: 'Me interesan los museos.', why: 'Los museos: plural, interesan. (The verb agrees with museos.)' },
            { wrong: 'Me duelo los pies.', right: 'Me duelen los pies.', why: 'Lo que duele son los pies: duelen. La persona va solo con me. (The feet hurt, not “I”.)' },
            { wrong: 'Nos faltan tiempo.', right: 'Nos falta tiempo.', why: 'El tiempo no se cuenta: singular. (Uncountable: falta.)' },
            { wrong: 'A mí interesa mucho el arte.', right: 'A mí me interesa mucho el arte.', why: 'Con «a mí», el me es obligatorio. (The pronoun is never left out.)' },
            { wrong: 'A Rosa y a Marcos le encanta el museo.', right: 'A Rosa y a Marcos les encanta el museo.', why: 'Dos personas: les. El verbo sigue en singular por el museo. (Two people: les.)' },
            { wrong: 'Me interesan conocer la ciudad.', right: 'Me interesa conocer la ciudad.', why: 'Conocer es un infinitivo: singular. (An infinitive takes the singular.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['A Javier le duele los pies.', 'A Javier duelen los pies.', 'A Javier le duelen los pies.'], answer: 2, why: 'A Javier + le (obligatorio) + duelen (los pies, plural).', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Les interesa visitar las minas.', 'Les interesan visitar las minas.', 'Le interesan visitar las minas.'], answer: 0, why: 'Visitar es un infinitivo: interesa, aunque «las minas» es plural.', en: 'Which one is correct? (They are interested in visiting the mines.)' },
            { prompt: '¿Cuál es correcta?', options: ['A mí me falta dinero.', 'Mí me falta dinero.', 'A mí me faltan dinero.'], answer: 0, why: 'A mí + me; el dinero no se cuenta: falta.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales de hoy: algo que le interesa, algo que le duele o le molesta y algo que le falta. Tú reaccionas con otra persona: «A mi hermano también le…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El plan de la tarde', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la plaza · In the square', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Rosa, Javier y Marcos. Después tu alumno toca cada expresión marcada y dice qué cosa interesa, duele o falta, y a quién.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué cosa es? ¿a quién? (What thing? Who?)' } },
          { kind: 'explore', title: '¿Qué les interesa?', setting: 'Sábado, dos de la tarde, en una plaza de Guanajuato. Elena habla de usted y ustedes con el grupo; Rosa, Javier y Marcos se hablan de tú. (Saturday, 2 p.m., in a square in Guanajuato. Elena uses usted; the travellers use tú.)', lines: [
            { who: 'Elena', text: 'Bueno, son las dos y el autobús a San Miguel sale a las seis. ¿Qué [[les interesa|blue]] hacer esta tarde?', en: 'Right, it’s two o’clock and the bus to San Miguel leaves at six. What would you like to do this afternoon?' },
            { who: 'Rosa', text: '[[A mí|violet]] [[me interesan|orange]] los museos. Hay un museo de arte aquí cerca, ¿verdad?', en: 'I’m interested in museums. There’s an art museum near here, isn’t there?' },
            { who: 'Elena', text: 'Sí, a cinco minutos. ¿Y [[a usted|violet]], señor Medina?', en: 'Yes, five minutes away. And you, Mr Medina?' },
            { who: 'Javier', text: '[[Me interesa|blue]] el mercado, pero hoy no puedo más: [[me duelen|orange]] los pies.', en: 'I’m interested in the market, but I can’t do any more today: my feet hurt.' },
            { who: 'Elena', text: 'Claro, esta mañana subimos muchas escaleras. ¿Y la rodilla? ¿También [[le duele|blue]]?', en: 'Of course, we climbed a lot of steps this morning. And your knee? Does it hurt too?' },
            { who: 'Javier', text: 'Un poco. Y [[me molesta|blue]] mucho este sol. Prefiero esperar en la plaza, a la sombra.', en: 'A little. And this sun really bothers me. I’d rather wait in the square, in the shade.' },
            { who: 'Rosa', text: '¿Y [[a ti|violet]], Marcos? ¿No [[te interesa|blue]] el museo? Tiene una sala de fotografía.', en: 'And you, Marcos? Aren’t you interested in the museum? It has a photography room.' },
            { who: 'Marcos', text: '¡Sí, mucho! Pero también quiero subir al mirador: [[me faltan|orange]] las fotos de la ciudad desde arriba.', en: 'Yes, very! But I also want to go up to the viewpoint: I still need the photos of the city from above.' },
            { who: 'Elena', text: 'Hay tiempo para las dos cosas. [[Faltan|orange]] cuatro horas para el autobús.', en: 'There’s time for both. There are four hours left until the bus.' },
            { who: 'Marcos', text: 'Menos mal. Siempre [[me falta|blue]] tiempo en los viajes.', en: 'Thank goodness. I never have enough time when I travel.' },
            { who: 'Elena', text: 'Entonces, [[a ustedes dos|violet]] [[les interesa|blue]] el museo, y el señor Medina descansa en la plaza. Nos vemos aquí a las seis menos cuarto.', en: 'So the two of you are interested in the museum, and Mr Medina rests in the square. See you here at quarter to six.' },
            { who: 'Javier', text: 'Muy bien. ¡Y un helado para mí, por favor!', en: 'Great. And an ice cream for me, please!' },
          ], notes: {
            'les interesa': 'Les = a ustedes: Elena habla con todo el grupo. **Interesa** en singular porque lo que interesa es un infinitivo (hacer) o una cosa (el museo).',
            'A mí': 'Rosa insiste en su gusto: cada persona quiere algo diferente. Con «a mí», el **me** también va: a mí me interesan.',
            'me interesan': 'Plural: lo que interesa son **los museos**.',
            'a usted': 'Pregunta corta para cambiar de persona. Completa sería: «¿Y a usted qué le interesa?».',
            'Me interesa': 'Singular: **el mercado**, una cosa.',
            'me duelen': 'Plural: **los pies**. Doler cambia o → ue: duele, duelen.',
            'le duele': 'Le = a usted (Elena habla con Javier de usted). Singular: **la rodilla**.',
            'me molesta': 'Molestar (to bother) funciona como gustar. Singular: **este sol**.',
            'a ti': 'Rosa y Marcos se hablan de tú: a ti **te**.',
            'te interesa': 'Te = a ti. Singular: **el museo**.',
            'me faltan': 'Plural: **las fotos**. Me faltan las fotos = todavía no las tengo (I still need them).',
            'Faltan': 'Faltar sin persona: el tiempo que queda hasta un momento. Plural: **cuatro horas**.',
            'me falta': 'Singular: el **tiempo** no se cuenta. I never have enough time.',
            'a ustedes dos': 'Elena aclara a quién habla: a Rosa y a Marcos, no a Javier. Con ustedes, el pronombre es **les**.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Javier no va al mercado?', options: ['Porque no le interesa.', 'Porque le duelen los pies y le molesta el sol.', 'Porque le falta dinero.'], answer: 1, why: '«Me duelen los pies» y «me molesta mucho este sol». El mercado sí le interesa.', en: 'Why doesn’t Javier go to the market?' },
            { prompt: '¿Qué le falta a Marcos?', options: ['Las fotos de la ciudad desde arriba.', 'Una sala de fotografía.', 'Un mapa del museo.'], answer: 0, why: '«Me faltan las fotos de la ciudad desde arriba».', en: 'What does Marcos still need?' },
            { prompt: '¿Cuánto tiempo falta para el autobús?', options: ['Cuatro horas.', 'Cinco minutos.', 'Dos horas.'], answer: 0, why: '«Faltan cuatro horas para el autobús»: son las dos y sale a las seis.', en: 'How long is it until the bus?' },
          ] },
        ] },
        { title: '¿Singular o plural? · In the scene', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Interesa o interesan? ¿Duele o duelen? · Which form?', categories: [
            { id: 'una', label: '-A · una cosa, algo que no se cuenta o un infinitivo', tone: 'blue' },
            { id: 'varias', label: '-AN · varias cosas', tone: 'orange' },
          ], items: [
            { text: 'A Javier le ___ los pies. (doler)', answer: 'varias', why: 'Los pies: plural. Le duelen.' },
            { text: 'A Marcos le ___ tiempo. (faltar)', answer: 'una', why: 'El tiempo no se cuenta: le falta.' },
            { text: 'A Rosa le ___ visitar el museo de arte. (interesar)', answer: 'una', why: 'Visitar: infinitivo. Le interesa.' },
            { text: 'A Javier le ___ el sol. (molestar)', answer: 'una', why: 'El sol: una cosa. Le molesta.' },
            { text: 'A Marcos le ___ tres fotos del mirador. (faltar)', answer: 'varias', why: 'Tres fotos: un número, plural. Le faltan.' },
            { text: 'A Rosa y a Marcos les ___ la sala de fotografía. (interesar)', answer: 'una', why: 'Les es plural (dos personas), pero lo que interesa es una sala: interesa.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra sobre el diálogo: «¿Qué le molesta a Javier? ¿Y qué les interesa a Rosa y a Marcos?». Respuesta esperada con a + persona y le o les.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Mira la cosa: -a o -an. Look at the thing.',
      steps: [
        { title: 'En el museo · At the museum', blocks: [
          { kind: 'choice', items: [
            { context: 'Rosa y Marcos entran en el museo. (Rosa and Marcos go into the museum.)', prompt: 'A Rosa le ___ los cuadros de la sala grande.', options: ['encanto', 'encanta', 'encantan'], answer: 2, why: 'Los cuadros: plural. Encantan.', en: 'Rosa loves the paintings in the big room.' },
            { context: 'En la sala de fotografía. (In the photography room.)', prompt: 'A Marcos le ___ mucho la exposición de fotos antiguas.', options: ['interesan', 'interesa', 'intereso'], answer: 1, why: 'La exposición: una cosa, singular. Interesa.', en: 'Marcos is very interested in the old photo exhibition.' },
            { context: 'Rosa habla con Marcos. (Rosa talks to Marcos.)', prompt: '¿Te ___ ver la sala de arte moderno?', options: ['interesan', 'interesa', 'interesas'], answer: 1, why: 'Lo que interesa es «ver», un infinitivo: singular.', en: 'Are you interested in seeing the modern art room?' },
            { context: 'Marcos mira su cámara. (Marcos checks his camera.)', prompt: 'Para mi proyecto, todavía me ___ diez fotos.', options: ['falto', 'faltan', 'falta'], answer: 1, why: 'Diez fotos: un número, plural. Faltan.', en: 'For my project, I still need ten photos.' },
            { context: 'A la salida, Rosa habla del museo. (On the way out, Rosa talks about the museum.)', prompt: 'Me ___ mucho las salas de arte colonial.', options: ['gusté', 'gustó', 'gustaron'], answer: 2, why: 'Pasado (indefinido) y plural: las salas. Gustaron.', en: 'I really liked the colonial art rooms.' },
          ] },
        ] },
        { title: '¿Le o les? · Le or les?', blocks: [
          { kind: 'classify', title: '¿A una persona o a varias? · One person or several?', categories: [
            { id: 'le', label: 'LE · una persona (él, ella, usted)', tone: 'violet' },
            { id: 'les', label: 'LES · varias personas (ellos, ellas, ustedes)', tone: 'orange' },
          ], items: [
            { text: 'A Javier ___ molesta el sol.', answer: 'le', why: 'Javier: una persona. Le molesta.' },
            { text: 'A Rosa y a Marcos ___ encantan los museos.', answer: 'les', why: 'Dos personas: les encantan.' },
            { text: 'Señor Medina, ¿a usted ___ duele la rodilla?', answer: 'le', why: 'Usted: una persona. Le duele.' },
            { text: 'Señores, ¿a ustedes ___ interesa el mercado?', answer: 'les', why: 'Ustedes: varias personas. Les interesa.' },
            { text: 'A la guía ___ faltan dos personas del grupo.', answer: 'le', why: 'La guía: una persona. Le faltan (dos personas: plural).' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'A mí interesa mucho la historia de la ciudad.', ok: false, options: ['Mí me interesa mucho la historia de la ciudad.', 'A mí me interesa mucho la historia de la ciudad.', 'A mí me interesan mucho la historia de la ciudad.'], answer: 1, why: 'Con «a mí», el pronombre me es obligatorio. La historia: singular.' },
            { sentence: 'A Javier le duelen los pies.', ok: true, why: 'Correcta: a Javier + le + duelen (los pies, plural).' },
            { sentence: 'Nos faltan tiempo para ver el mercado.', ok: false, options: ['Nos falta tiempos para ver el mercado.', 'Faltamos tiempo para ver el mercado.', 'Nos falta tiempo para ver el mercado.'], answer: 2, why: 'El tiempo no se cuenta: nos falta.' },
            { sentence: 'A Rosa y a Marcos le interesa la fotografía.', ok: false, options: ['A Rosa y a Marcos se interesa la fotografía.', 'A Rosa y a Marcos les interesa la fotografía.', 'A Rosa y a Marcos les interesan la fotografía.'], answer: 1, why: 'Dos personas: les. La fotografía es una cosa: interesa.' },
            { sentence: 'Me interesan visitar las minas de plata.', ok: false, options: ['Me interesan visitar la mina de plata.', 'Me interesa visitar las minas de plata.', 'Me intereso visitar las minas de plata.'], answer: 1, why: 'Lo que interesa es «visitar», un infinitivo: singular, aunque «las minas» es plural.' },
            { sentence: 'Yo duelo la espalda después del viaje.', ok: false, options: ['Me duelen la espalda después del viaje.', 'Me duelo la espalda después del viaje.', 'Me duele la espalda después del viaje.'], answer: 2, why: 'Lo que duele es la espalda (singular): me duele. La persona va con me, no con yo.' },
          ] },
        ] },
        { title: 'Mensajes por la tarde · Messages in the afternoon', blocks: [
          { kind: 'chat-fill', title: 'Rosa escribe a Javier desde el museo · Rosa texts Javier from the museum', lines: [
            { who: 'Rosa', text: 'Javier, ¿cómo estás? ¿Todavía te ___ los pies?', options: ['duelen', 'dueles', 'duele'], answer: 0, why: 'Los pies: plural. Te duelen.' },
            { who: 'Javier', text: 'Un poco menos. Aquí hay sombra y ya no me ___ el sol.', options: ['molesta', 'molestan', 'molesto'], answer: 0, why: 'El sol: una cosa. Me molesta.' },
            { who: 'Javier', text: '¿Y el museo? ¿Les ___?', options: ['gustó', 'gustaron', 'gustamos'], answer: 0, why: 'Pasado, y lo que gustó es el museo (singular): les gustó.' },
            { who: 'Rosa', text: '¡Mucho! A mí me ___ los cuadros antiguos, y a Marcos, la sala de fotografía.', options: ['encantaron', 'encantó', 'encanté'], answer: 0, why: 'Los cuadros: plural, en pasado. Me encantaron.' },
            { who: 'Rosa', text: 'Oye, ¿a ___ te interesa ir al mercado mañana temprano?', options: ['te', 'tú', 'ti'], answer: 2, why: 'Después de la preposición «a»: a ti. Y luego, te.' },
            { who: 'Javier', text: '¡Claro! Ahora ven pronto: ya ___ menos de dos horas para el autobús.', options: ['faltamos', 'falta', 'faltan'], answer: 2, why: 'Menos de dos horas: plural. Faltan.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['le', 'A', 'Javier', 'duele', 'la', 'rodilla'], accept: ['A Javier le duele la rodilla', 'Le duele la rodilla a Javier', 'La rodilla le duele a Javier'], en: 'Javier’s knee hurts.' },
            { tiles: ['falta', 'Nos', 'tiempo', 'para', 'el', 'mercado'], accept: ['Nos falta tiempo para el mercado'], en: 'We don’t have enough time for the market.' },
            { tiles: ['me', 'A', 'mí', 'interesan', 'los', 'museos', 'de', 'arte'], accept: ['A mí me interesan los museos de arte', 'Los museos de arte me interesan a mí'], en: 'I’m interested in art museums.' },
            { tiles: ['les', '¿A', 'ustedes', 'molesta', 'el', 'calor?'], accept: ['¿A ustedes les molesta el calor?'], en: 'Does the heat bother you (all)?' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia la frase · Change the sentence', items: [
            { prompt: 'Me duele el pie. (→ los dos pies)', instruction: 'Cambia a plural.', accept: ['Me duelen los dos pies', 'Me duelen los pies'] },
            { prompt: 'A mí me interesa la fotografía. (→ a Rosa y a Marcos)', instruction: 'Cambia la persona. Empieza con «A Rosa».', accept: ['A Rosa y a Marcos les interesa la fotografía'] },
            { prompt: 'Necesito diez minutos más.', instruction: 'Di lo mismo con faltar. Empieza con «Me».', accept: ['Me faltan diez minutos más', 'Me faltan diez minutos'] },
            { prompt: 'Hoy me duelen las piernas. (→ ayer)', instruction: 'Pasa la frase al indefinido. Empieza con «Ayer».', accept: ['Ayer me dolieron las piernas'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno habla de una persona de su familia en tres frases: qué le interesa, qué le molesta y qué le falta. Tú preguntas: «¿Y a ti?».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Rosa', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Rosa le cuenta el día a su hija · Rosa tells her daughter about the day', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿dónde está Rosa y qué cuenta?). Segunda escucha: tu alumno levanta la mano con cada verbo como gustar (encantaron, interesó…) y dice a quién. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca los verbos como gustar y piensa a quién se refieren. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Rosa', channel: 'MENSAJE DE VOZ · DE ROSA PARA SU HIJA PAULA', src: '/audio/grammar-live/362.mp3',
            before: 'Son las seis y media. Rosa está en el autobús y le manda un mensaje de voz a su hija Paula. ¿Qué crees que cuenta: el museo, Javier, el tiempo…? (Rosa sends her daughter a voice message from the bus. What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Rosa invita a Paula al museo.', 'Rosa cuenta cómo fue la tarde en Guanajuato.', 'Rosa pide ayuda porque Javier está enfermo.'], answer: 1, why: 'Rosa cuenta qué hicieron esta tarde, cómo está Javier y qué le compró a Paula.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué le interesó mucho a Marcos?', options: ['Los cuadros antiguos.', 'El mercado.', 'La sala de fotografía.'], answer: 2, why: '«A Marcos le interesó mucho la sala de fotografía». Los cuadros le encantaron a Rosa.', en: 'What was Marcos very interested in?' },
              { prompt: '¿Por qué Javier no fue al museo?', options: ['No le interesan los museos.', 'Le faltaba dinero.', 'Le dolían los pies y le molestaba el sol.'], answer: 2, why: '«Le dolían los pies y le molestaba mucho el sol».', en: 'Why didn’t Javier go to the museum?' },
              { prompt: '¿Para qué les faltó tiempo?', options: ['Para el mirador.', 'Para el museo.', 'Para el mercado.'], answer: 2, why: '«Lo único malo: nos faltó tiempo para el mercado».', en: 'What didn’t they have enough time for?' },
              { prompt: '¿Qué le compró Rosa a Paula?', options: ['Unos dulces típicos.', 'Un cuadro pequeño.', 'Unas fotos de la ciudad.'], answer: 0, why: '«Te compré unos dulces típicos, porque sé que te encantan».', en: 'What did Rosa buy for Paula?' },
            ],
            transcript: 'Hola, Paula, soy mamá. Ya vamos en el autobús de regreso a San Miguel. ¡Qué bonito es Guanajuato! Esta tarde Marcos y yo fuimos al museo de arte. A mí [[me encantaron|orange]] los cuadros antiguos, y a Marcos [[le interesó|blue]] mucho la sala de fotografía. Tu papá no vino con nosotros: [[le dolían|orange]] los pies y [[le molestaba|blue]] mucho el sol, así que nos esperó en la plaza, a la sombra, con un helado. Ahora está dormido aquí a mi lado. Lo único malo: [[nos faltó|blue]] tiempo para el mercado. El lunes te cuento todo con calma. Ah, y te compré unos dulces típicos, porque sé que [[te encantan|orange]]. Un beso grande.',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es Paula y responde al mensaje con tres frases: qué le encanta de los viajes, cómo está su papá («¿todavía le duelen…?») y qué le interesa ver en Guanajuato.', self: 'Responde a Rosa en voz alta como Paula: pregunta por los pies de tu papá, di qué te encanta y qué te interesa ver en Guanajuato. (Answer as Paula: ask about your dad’s feet, say what you love and what interests you.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú también viajas', coach: 'Me interesa, me duele, me falta.',
      steps: [
        { title: 'Tus viajes · Your trips', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como Elena, la guía. Tu alumno responde sobre sus viajes reales o inventados. Tú repites su frase con la forma correcta (-a o -an, le o les) y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Antes de hablar, mira la cosa: ¿una o varias? (Answer aloud; check: one thing or several?)' } },
          { kind: 'talk', cards: [
            { q: 'Estás de viaje en una ciudad nueva. ¿Qué te interesa ver o hacer? · You are travelling in a new city. What are you interested in seeing or doing?', followUps: ['¿Te interesan más los museos o los mercados? (Museums or markets?)', '¿Qué no te interesa nada? (What doesn’t interest you at all?)'], phrases: ['[[Me interesa|blue]] + infinitivo / una cosa…', '[[Me interesan|orange]] los / las…', 'No me interesa nada…'], hint: 'Infinitivo o una cosa: interesa. Varias cosas: interesan.', example: 'Me interesa mucho conocer los barrios antiguos. También me interesan los mercados, pero no me interesan nada las tiendas de recuerdos.', next: 'Ahora, el cansancio.', teacher: 'Cuenta tú también: «A mí me interesan…». Así tu alumno oye a + persona para contrastar.' },
            { q: 'Después de un día largo de viaje, ¿qué te duele? ¿Qué te molesta? · After a long day of travelling, what hurts? What bothers you?', followUps: ['¿Te molesta el calor o el frío? (Heat or cold?)', '¿Te duele algo después de un viaje en autobús? (Does anything hurt after a bus trip?)'], phrases: ['[[Me duele|blue]] la espalda / la cabeza…', '[[Me duelen|orange]] los pies / las piernas…', 'Me molesta(n)…'], hint: 'Con partes del cuerpo, el artículo: me duele **la** espalda, no «mi espalda».', example: 'Después de un día largo me duelen las piernas y a veces me duele la cabeza. Me molestan mucho los ruidos por la noche.', next: 'Ahora, lo que falta.' },
            { q: '¿Qué te falta siempre en los viajes: tiempo, dinero, paciencia…? · What do you never have enough of when you travel?', followUps: ['¿Y en tu vida diaria, qué te falta? (And in your daily life?)', '¿Cuánto falta para tu próximo viaje? (How long until your next trip?)'], phrases: ['Siempre [[me falta|blue]] tiempo / dinero…', '[[Me faltan|orange]] días / horas…', '[[Faltan|orange]] dos meses para…'], hint: 'Tiempo, dinero, paciencia: falta. Días, horas, meses: faltan.', example: 'En los viajes siempre me falta tiempo. Y faltan tres meses para mis vacaciones: ¡me faltan muchos días!', next: 'Ahora, otra persona.' },
            { q: 'Habla de una persona con quien viajas (tu pareja, un amigo, tu familia). ¿Qué le interesa? ¿Qué le molesta? · Talk about someone you travel with. What are they interested in? What bothers them?', followUps: ['¿Y a ti también? (And you too?)', '¿Qué les interesa a los dos? (What are you both interested in?)'], phrases: ['[[A mi pareja|violet]] le interesa(n)…', '[[A mis padres|violet]] les molesta(n)…', '[[A mí|violet]], en cambio, me…'], hint: 'A + persona para aclarar, y siempre le (una persona) o les (varias).', example: 'A mi hermana le interesan las playas, pero a mí me interesan más las ciudades. A mis padres les molesta el calor.', next: 'Ahora, un viaje del pasado.', teacher: 'Si tu alumno dice «a mi hermana le», pregunta «¿y a tus padres?» para practicar les.' },
            { q: 'Piensa en un viaje del pasado. ¿Qué te encantó? ¿Qué no te gustó? ¿Te dolió algo? · Think of a past trip. What did you love? What didn’t you like? Did anything hurt?', followUps: ['¿Te faltó tiempo para algo? (Did you run out of time for something?)', '¿Qué les gustó a las otras personas? (What did the others like?)'], phrases: ['Me [[encantó|blue]] el / la…', 'Me [[encantaron|orange]] los / las…', 'Nos [[faltó|blue]] tiempo para…'], hint: 'Pasado, la misma regla: -ó para una cosa, -aron o -ieron para varias.', example: 'El año pasado fui a Lima. Me encantó la comida y me encantaron los barrios del centro. Me dolieron los pies todos los días, y nos faltó tiempo para el museo.' },
            { q: 'Ahora tú eres Elena, la guía. Pregunta al grupo qué les interesa para mañana y organiza el plan. · Now you are Elena, the guide. Ask the group what they are interested in tomorrow and plan the day.', followUps: ['¿Y a usted, señor Medina? (And you, Mr Medina?)', '¿Cuánto tiempo falta para el autobús? (How long until the bus?)'], phrases: ['¿Qué [[les interesa|blue]] hacer mañana?', '[[A ustedes dos|violet]] les…', '[[Faltan|orange]]… para…'], hint: 'Con el grupo, les (ustedes). Con una persona de usted, le.', example: 'Buenos días. ¿Qué les interesa hacer mañana? A ustedes dos les interesan los museos, ¿verdad? Y a usted, señor Medina, ¿le duelen todavía los pies? Faltan dos horas para el autobús.', teacher: 'Tú eres Javier y respondes con un problema: «Me duele la rodilla». Tu alumno reacciona como guía y cambia el plan.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué te interesa?», «¿Qué te molesta?», «¿Qué les gusta a tus amigos?») y tú respondes con tus viajes.', self: 'Ahora tú haces las preguntas en voz alta y respondes como otra persona: tu madre, un amigo. Usa le y les. (Now ask the questions and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para la guía', coach: 'La cosa decide: -a o -an.',
      steps: [
        { title: 'El plan del domingo · Sunday’s plan', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo: ¿qué cosa interesa, duele o falta?, ¿una o varias?, ¿a quién? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada verbo como gustar: ¿qué cosa?, ¿una o varias?, ¿a quién? (Check each verb: what thing, one or several, who?)' } },
          { kind: 'write', title: 'Preferencias para la excursión · Preferences for the trip', situation: 'Es sábado por la noche. El domingo hay una excursión libre por San Miguel de Allende y Elena, la guía, pide a cada viajero un correo corto con sus preferencias. Escríbele como Javier, como Rosa o como tú. (It is Saturday night. On Sunday there is a free outing in San Miguel de Allende and Elena, the guide, asks each traveller for a short email with their preferences. Write to her as Javier, as Rosa or as yourself.)', task: [
            'Saluda y di qué te gustó o te encantó del sábado. (Say hello and what you liked or loved about Saturday.)',
            'Di qué te interesa hacer el domingo y qué le interesa a otra persona, con a + persona. (What you and someone else are interested in, with a + person.)',
            'Explica un problema con doler o molestar. (Explain a problem with doler or molestar.)',
            'Usa faltar una vez: algo que te faltó o te falta. (Use faltar once.)',
            'Haz una pregunta a Elena y despídete. (Ask Elena a question and say goodbye.)',
          ], starters: ['Hola, Elena:', 'Muchas gracias por…', 'Me encantó… / Me encantaron…', 'El domingo, a mí me interesa…', 'A Rosa le…', 'Todavía me duele(n)…', 'Me molesta(n)…', 'Nos faltó tiempo para…', 'Un saludo,'],
            words: ['me interesa', 'me interesan', 'le interesa', 'me duele', 'me duelen', 'me molesta', 'nos faltó', 'me encantó', 'me encantaron', 'a mí', 'a Rosa', 'les'],
            model: 'Hola, Elena: Muchas gracias por el sábado. [[Me encantó|blue]] la plaza, y [[a Rosa|violet]] [[le encantaron|orange]] los cuadros del museo. Una pena: [[nos faltó|blue]] tiempo para el mercado. Por eso, el domingo [[a mí|violet]] [[me interesa|blue]] mucho ver el mercado de artesanías y probar los dulces típicos. [[A Rosa|violet]] [[le interesan|orange]] más las iglesias del centro. Un problema: todavía [[me duelen|orange]] un poco los pies y [[me molesta|blue]] el sol fuerte. ¿Es posible caminar menos y descansar un rato a la sombra? Un saludo, Javier Medina.',
            minWords: 60,
            checks: [
              { label: 'Interesar, gustar o encantar con me, te, le, nos, les (interests and tastes)', pattern: '(?<!\\p{L})(?:me|te|le|nos|les)\\s+(?:interesa|interesan|interesó|interesaron|gusta|gustan|gustó|gustaron|encanta|encantan|encantó|encantaron)(?!\\p{L})', tip: 'Di qué te interesa o qué te encantó: «Me interesa ver el mercado», «Me encantaron los cuadros».' },
              { label: 'Doler o molestar (a problem)', pattern: '(?<!\\p{L})(?:me|te|le|nos|les)\\s+(?:duele|duelen|dolió|dolieron|molesta|molestan|molestó|molestaron)(?!\\p{L})', tip: 'Explica un problema: «Me duelen los pies», «Me molesta el sol».' },
              { label: 'Faltar (something missing, not enough)', pattern: '(?<!\\p{L})(?:falta|faltan|faltó|faltaron)(?!\\p{L})', tip: 'Usa faltar: «Nos faltó tiempo para el mercado», «Me faltan fotos».' },
              { label: 'A + persona con su pronombre (a mí me…, a Rosa le…)', pattern: '(?<!\\p{L})a\\s+[^.,;:!?¿¡]{1,30}?\\s(?:me|te|le|nos|les)\\s+(?:interesa|interesan|interesó|interesaron|gusta|gustan|gustó|gustaron|encanta|encantan|encantó|encantaron|duele|duelen|dolió|dolieron|molesta|molestan|falta|faltan|faltó)(?!\\p{L})', tip: 'Habla de otra persona o insiste en ti: «A Rosa le interesan las iglesias», «A mí me interesa el mercado».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+(?:mí|mi|ti)\\s+(?:no\\s+)?(?:gusta|gustan|interesa|interesan|encanta|encantan|duele|duelen|falta|faltan|molesta|molestan)(?!\\p{L})', why: 'Con a mí o a ti, el pronombre es obligatorio: **a mí me interesa**, **a ti te duele**.' },
              { pattern: '(?<!\\p{L})(?:me|te|le|nos|les)\\s+(?:interesan|gustan|encantan)\\s+(?:ver|visitar|conocer|caminar|comer|probar|hacer|ir|descansar|subir|comprar)(?!\\p{L})', why: 'Con un infinitivo, el verbo va en singular: **me interesa visitar**, no «me interesan visitar».' },
              { pattern: '(?<!\\p{L})(?:me|yo)\\s+(?:duelo|falto|intereso)(?!\\p{L})', why: 'La persona va con me y el verbo concuerda con la cosa: **me duele(n)**, **me falta(n)**, **me interesa(n)**.' },
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
            { tone: 'blue', label: 'SINGULAR · -A', formula: 'interesa · duele · falta · molesta', example: 'Me falta tiempo. Me interesa visitar las iglesias.', caption: 'una cosa, algo que no se cuenta o un infinitivo', en: 'one thing, something uncountable or an infinitive' },
            { tone: 'orange', label: 'PLURAL · -AN', formula: 'interesan · duelen · faltan · molestan', example: 'Me duelen los pies. Faltan cuatro horas.', caption: 'varias cosas, dos cosas con y, un número', en: 'several things, two things with “y”, a number' },
            { tone: 'violet', label: 'A + PERSONA + PRONOMBRE', formula: 'a mí me · a ti te · a Javier le · a ustedes les', example: 'A Rosa y a Marcos les encanta el arte.', caption: 'a + persona es opcional; el pronombre, nunca', en: 'a + person is optional; the pronoun never is' },
            { tone: 'blue', label: 'PASADO · LA MISMA REGLA', formula: 'me dolió / me dolieron · nos faltó / nos faltaron', example: 'Ayer me dolieron las piernas.', caption: '-ó para una cosa, -aron / -ieron para varias', en: '-ó for one thing, -aron / -ieron for several' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Con gustar, interesar, doler, faltar y molestar, el verbo **mira la cosa**: «Me falta tiempo», «Me duelen los pies». La persona va con **me, te, le, nos, les**, y si quieres insistir o aclarar, añades **a + persona**: «A Javier le duelen los pies». Nunca «yo duelo» ni «a mí gusta».', en: 'With gustar, interesar, doler, faltar and molestar, the verb looks at the thing: “Me falta tiempo”, “Me duelen los pies”. The person goes with me, te, le, nos, les, and to stress or clarify who, you add a + person: “A Javier le duelen los pies”. Never “yo duelo” or “a mí gusta”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'A mi hermana le ___ mucho las películas antiguas.', options: ['interesan', 'intereso', 'interesa'], answer: 0, why: 'Las películas: plural. Interesan.', en: 'My sister is very interested in old films.' },
            { prompt: 'Después del partido, me ___ las piernas.', options: ['duelo', 'duelen', 'duele'], answer: 1, why: 'Las piernas: plural. Duelen.', en: 'After the match, my legs hurt.' },
            { prompt: '___ cinco minutos para las nueve: la clase va a empezar.', options: ['Falta', 'Faltan', 'Faltamos'], answer: 1, why: 'Cinco minutos: un número, plural. Faltan.', en: 'It’s five to nine: the class is about to start.' },
            { prompt: 'A mis padres no ___ molesta el ruido de la calle.', options: ['les', 'le', 'los'], answer: 0, why: 'Mis padres: dos personas. Les molesta.', en: 'The street noise doesn’t bother my parents.' },
            { prompt: 'El verano pasado nos ___ mucho las fiestas del pueblo.', options: ['gustaron', 'gustamos', 'gustó'], answer: 0, why: 'Pasado y plural: las fiestas. Gustaron.', en: 'Last summer we really liked the village festivals.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en el médico.', blocks: [
          { kind: 'lead', text: 'Una semana después, Javier va al médico en Puebla. La doctora lee sus notas sobre Javier. Tú eres Javier: di lo mismo con tus palabras.', en: 'A week later, Javier goes to the doctor in Puebla. The doctor reads her notes about Javier. You are Javier: say the same thing in your own words.' },
          { kind: 'rewrite', title: 'Las notas de la doctora · The doctor’s notes', items: [
            { prompt: 'Al paciente le duelen las rodillas.', instruction: 'Eres Javier: dilo con «me».', accept: ['Me duelen las rodillas'] },
            { prompt: 'Al paciente le molesta la luz fuerte.', instruction: 'Eres Javier: dilo con «me».', accept: ['Me molesta la luz fuerte'] },
            { prompt: 'El paciente necesita más horas de sueño.', instruction: 'Eres Javier: dilo con faltar. Empieza con «Me».', accept: ['Me faltan horas de sueño', 'Me faltan más horas de sueño'] },
            { prompt: 'Al paciente y a su esposa les interesa caminar todos los días.', instruction: 'Eres Javier y hablas de ti y de Rosa. Empieza con «Nos».', accept: ['Nos interesa caminar todos los días'] },
          ] },
        ] },
        { title: 'Ampliación · Reacciones y más verbos', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one more step.', blocks: [
          { kind: 'lead', text: 'Para reaccionar a lo que dice otra persona: «A mí **también**» (sí + sí), «A mí **tampoco**» (no + no), «A mí **sí**» (no + sí), «A mí **no**» (sí + no). Y tres verbos más con el mismo modelo: **quedar** (lo que todavía tienes: me quedan dos días), **importar** (¿le importa…? = would you mind…?) y **preocupar** (me preocupa el tiempo).', en: 'To react to what someone says: “A mí también” (me too), “A mí tampoco” (me neither), “A mí sí” (I do), “A mí no” (I don’t). And three more verbs with the same pattern: quedar (what you still have left: I have two days left), importar (¿le importa…? = would you mind…?) and preocupar (the weather worries me).' },
          { kind: 'choice', title: 'Un paso más · One step further', items: [
            { prompt: '—No me interesa el fútbol. —A mí ___. (me neither)', options: ['tampoco', 'sí', 'también'], answer: 0, why: 'Una frase negativa y tú estás de acuerdo: a mí tampoco.', en: '“I’m not interested in football.” “Me neither.”' },
            { prompt: '—A Javier no le gusta el sol. —A Rosa ___: le encanta.', options: ['también', 'tampoco', 'sí'], answer: 2, why: 'Primero no, después sí: a Rosa sí (le gusta).', en: '“Javier doesn’t like the sun.” “Rosa does: she loves it.”' },
            { prompt: '¡Rápido! Solo nos ___ diez minutos para el autobús.', options: ['queda', 'quedan', 'quedamos'], answer: 1, why: 'Quedar funciona como faltar: diez minutos, plural. Nos quedan.', en: 'Quick! We only have ten minutes left before the bus.' },
            { prompt: 'Elena, en el autobús: «Señora, ¿le ___ cerrar la ventana?»', options: ['importan', 'importo', 'importa'], answer: 2, why: '¿Le importa + infinitivo? (Would you mind…?): una petición amable. Infinitivo: singular.', en: 'Elena, on the bus: “Madam, would you mind closing the window?”' },
            { prompt: 'Por la rodilla de Javier, a Rosa le ___ las escaleras.', options: ['preocupan', 'preocupa', 'preocupo'], answer: 0, why: 'Las escaleras: plural. Le preocupan.', en: 'Because of Javier’s knee, Rosa is worried about the steps.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional para alumnos rápidos o si sobra tiempo. Tú dices una frase real («No me interesa el golf») y tu alumno reacciona con también, tampoco, sí o no. Después, tu alumno hace una petición amable con «¿Le importa + infinitivo?».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 063 · Objeto indirecto: le, les, me, te, nos', text: 'Hoy usaste me, te, le, nos, les con verbos como gustar: «A Javier le duelen los pies». En la clase 063 usas los mismos pronombres con verbos como dar, mandar o decir: «Le mandé el mensaje a Lucía». Es el paso natural: ya sabes elegir entre le y les y usar a + persona; ahora los usas para decir a quién das, mandas o dices algo.', en: 'Today you used me, te, le, nos, les with verbs like gustar: “A Javier le duelen los pies”. In class 063 you use the same pronouns with verbs like give, send or say: “I sent the message to Lucía”. It is the natural next step: you can already choose between le and les and use a + person; now you use them to say who you give, send or tell something to.', href: '/gramatica/objeto-indirecto-le-les-me-te', label: 'Ir a la clase 063' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te interesa, qué te duele y qué te falta hoy? ¿Y a una persona de tu familia?». Respuesta esperada: tres frases con -a o -an y una con a + persona + le o les. Tarea: escribir el correo de Escribir sobre un viaje real.' },
        ] },
      ],
    },
  ],
};
