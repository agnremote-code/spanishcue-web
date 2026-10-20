import type { LiveLesson } from '../types';

/**
 * Lesson 364 · A2 · Dos pronombres: se lo, me lo, te la (course unit G064).
 * Builds on G042 (lo, la, los, las) and G063 (le, les, me, te, nos).
 * One scene runs through the class: Rosa Medina retires after thirty years at
 * a small travel agency. Her colleagues Lorena (who organises everything) and
 * Hugo prepare a surprise farewell party with a photo album, a signed card,
 * two travel books and flowers; Pilar is the manager. Explorar is the morning
 * of the party; Practicar is the day after; Rosa (Mexican voice, tú with
 * Lorena) leaves the voice message; the learner answers her in writing.
 * Content: order person + thing (me lo, te la, nos los, os las), le / les → se
 * (se lo, se la, se los, se las), lo / la / los / las agree with the THING, not
 * with the person; both pronouns together before a conjugated verb, «no» in
 * front. Anchor: Le di el libro → Se lo di. Mistakes: *le lo, *lo le, *se la
 * (for el álbum because Rosa is a woman), *di se lo. Position with infinitive
 * and imperative is class 065 (only mentioned). The colloquial American «se
 * los dije» (plural person) appears only receptively in Ampliación.
 */
export const lesson: LiveLesson = {
  id: 364,
  level: 'A2',
  title: 'Dos pronombres: se lo, me lo, te la',
  subtitle: 'Decir quién da qué a quién sin repetir nada: «¿El álbum? Se lo di a Rosa», «¿La tarjeta? Te la doy ahora».',
  legend: [
    { tone: 'blue', label: 'ME LO · TE LA · NOS LOS · persona + cosa (to me, to you, to us + it)' },
    { tone: 'violet', label: 'SE LO · SE LA · le / les → se (to him, her, them, you + it)' },
    { tone: 'orange', label: 'LA COSA · el álbum, la tarjeta (lo, la, los, las agree with it)' },
    { tone: 'teal', label: 'LA PERSONA · a Rosa, a ella (who receives it)' },
  ],
  optionNotes: {
    'le lo': '«Le lo» no existe en español: delante de lo, la, los, las, **le** cambia a **se**: se lo.',
    'Le lo': '«Le lo» no existe en español: delante de lo, la, los, las, **le** cambia a **se**: se lo.',
    'Les lo': '«Les lo» no existe: delante de lo, la, los, las, **les** cambia a **se**: se lo.',
    'le las': '«Le las» no existe: delante de lo, la, los, las, **le** cambia a **se**: se las.',
    'Le las': '«Le las» no existe: delante de lo, la, los, las, **le** cambia a **se**: se las.',
    'le los': '«Le los» no existe: delante de lo, la, los, las, **le** cambia a **se**: se los.',
    'lo me': 'El orden es al revés: primero la persona, después la cosa: **me lo**.',
    'Lo me': 'El orden es al revés: primero la persona, después la cosa: **me lo**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos pronombres juntos', coach: 'La persona y la cosa. The person and the thing.',
      steps: [
        { title: 'La despedida de Rosa · Rosa’s farewell', blocks: [
          { kind: 'lead', text: 'Rosa Medina se jubila después de treinta años en una agencia de viajes. Hoy es su fiesta de despedida, y es una sorpresa. Sus compañeros le regalan un álbum de fotos. Por la tarde, Lorena pregunta: «Hugo, ¿le diste el álbum a Rosa?». Y Hugo contesta: «Sí, **se lo di**». Hoy aprendes a usar dos pronombres juntos: uno para la persona y otro para la cosa.', en: 'Rosa Medina is retiring after thirty years at a travel agency. Today is her farewell party, and it is a surprise. Her colleagues give her a photo album. In the afternoon, Lorena asks: “Hugo, did you give Rosa the album?” And Hugo answers: “Yes, I gave it to her.” Today you learn to use two pronouns together: one for the person and one for the thing.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase larga y tu alumno lee la frase corta. Después tu alumno dice qué palabra sustituye a «el álbum» y qué palabra sustituye a «a Rosa».', self: 'Lee las dos frases en voz alta. ¿Qué palabra es «el álbum»? ¿Qué palabra es «a Rosa»? (Which word stands for the album, which for Rosa?)' } },
          { kind: 'compare', title: 'La misma frase, más corta · The same sentence, shorter', columns: [
            { tone: 'orange', label: 'CON NOMBRES · with nouns', sentence: 'Hugo le dio [[el álbum|orange]] [[a Rosa|teal]].', idea: 'La cosa y la persona con su nombre: la primera vez que hablamos de ellas.', en: 'Hugo gave the album to Rosa.' },
            { tone: 'violet', label: 'CON DOS PRONOMBRES · with two pronouns', sentence: 'Hugo [[se lo|violet]] dio.', idea: '**se** = a Rosa · **lo** = el álbum. Ya sabemos de qué hablamos: no repetimos.', en: 'Hugo gave it to her.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Hugo se lo dio», ¿qué es «lo»?', options: ['El álbum.', 'Rosa.', 'Hugo.'], answer: 0, why: '«Lo» es la cosa: el álbum (masculino, singular).', en: 'In “Hugo se lo dio”, what is “lo”?' },
            { prompt: 'En «Hugo se lo dio», ¿qué es «se»?', options: ['Hugo, la persona que da.', 'A Rosa: la persona que recibe.', 'El álbum.'], answer: 1, why: '«Se» es la persona que recibe: a Rosa. Es el «le» de la clase 063 con otra forma.', en: 'In “Hugo se lo dio”, what is “se”?' },
            { prompt: '—¿Le diste el álbum a Rosa? —Sí, ___ di.', options: ['le lo', 'se lo', 'lo se'], answer: 1, why: 'Persona + cosa, antes del verbo: se lo di.', en: '—Did you give Rosa the album? —Yes, I gave it to her.' },
          ] },
        ] },
        { title: 'Primero la persona · Person first', mascot: '/brand/mascot/studying.webp', coach: '¿A quién? ¿Qué? To whom? What?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'EL ORDEN · PERSONA + COSA', question: '¿A quién? ¿Qué?', en: 'To whom? What?', formula: ['me · te · nos · os  +  lo · la · los · las  +  verbo', 'primero la persona (objeto indirecto), después la cosa (objeto directo)'],
            meaning: 'Ya conoces los dos pronombres por separado: **lo, la, los, las** para la cosa (clase 042) y **me, te, le, nos, les** para la persona (clase 063). Cuando van juntos, el orden es fijo: **primero la persona, después la cosa**. Los dos van juntos, delante del verbo conjugado.',
            examples: [
              { es: '¿La tarjeta? Lorena [[me la|blue]] dio esta mañana.', en: 'The card? Lorena gave it to me this morning.' },
              { es: '¿Tu libro de recetas? [[Te lo|blue]] devuelvo el jueves.', en: 'Your recipe book? I’ll give it back to you on Thursday.' },
              { es: '¿Las fotos de la fiesta? Hugo [[nos las|blue]] mandó anoche.', en: 'The party photos? Hugo sent them to us last night.' },
            ],
            note: 'En España, con vosotros: **os lo, os la** («Os lo explico ahora»). En América se usa ustedes: «Se lo explico ahora».' },
          { kind: 'table', title: 'Todas las combinaciones · All the combinations', head: ['A quién · to whom', '+ el álbum', '+ la tarjeta', '+ los libros', '+ las flores'], rows: [
            ['a mí → me', 'me lo', 'me la', 'me los', 'me las'],
            ['a ti → te', 'te lo', 'te la', 'te los', 'te las'],
            ['a él, a ella, a usted → le → **se**', '**se lo**', '**se la**', '**se los**', '**se las**'],
            ['a nosotros, a nosotras → nos', 'nos lo', 'nos la', 'nos los', 'nos las'],
            ['a vosotros, a vosotras → os (España)', 'os lo', 'os la', 'os los', 'os las'],
            ['a ellos, a ellas, a ustedes → les → **se**', '**se lo**', '**se la**', '**se los**', '**se las**'],
          ], note: 'Lee la tabla así: la fila dice **a quién** (the person), la columna dice **qué** (the thing). La primera palabra cambia con la persona; la segunda, con la cosa.' },
          { kind: 'tip', icon: '💡', title: 'Juntos y delante del verbo · Together, before the verb', text: 'Con un verbo conjugado (di, doy, mandó, prestas), los dos pronombres van **juntos y delante**: «Se lo di», «¿Me la prestas?». El «no» va delante de los dos: «**No** se lo di». Con un infinitivo («voy a dárselo») o con el imperativo («dámelo») la posición cambia: eso lo ves en la clase 065.', en: 'With a conjugated verb (di, doy, mandó, prestas), both pronouns go together and in front: “Se lo di”, “¿Me la prestas?”. “No” goes before both: “No se lo di”. With an infinitive (“voy a dárselo”, I’m going to give it to him) or an imperative (“dámelo”, give it to me) the position changes: you will see that in class 065.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Tu cámara? Mañana ___ devuelvo.', options: ['te la', 'la te', 'te lo'], answer: 0, why: 'A ti → te; la cámara → la. Primero la persona: te la.', en: 'Your camera? I’ll give it back to you tomorrow.' },
            { prompt: '¿Las fotos? Hugo ___ mandó a nosotros también.', options: ['nos las', 'las nos', 'nos los'], answer: 0, why: 'A nosotros → nos; las fotos → las. Nos las mandó.', en: 'The photos? Hugo sent them to us too.' },
          ] },
        ] },
        { title: 'Le y les cambian a se · le and les become se', mascot: '/brand/mascot/standing.webp', coach: 'Le lo no existe. “Le lo” does not exist.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'LE / LES → SE', question: '¿Qué pasa con le y les?', en: 'What happens to le and les?', formula: ['le / les  +  lo · la · los · las  →  se lo · se la · se los · se las', 'le lo ✗   les la ✗   →   se lo ✓   se la ✓'],
            meaning: 'Delante de **lo, la, los, las**, los pronombres **le** y **les** cambian a **se**. No es el «se» de los verbos reflexivos (levantarse, ducharse): es el mismo «le» de la clase 063 con otra forma. Por eso «se» puede ser a él, a ella, a usted, a ellos, a ellas o a ustedes.',
            examples: [
              { es: 'Le di el libro a Rosa. → [[Se lo|violet]] di.', en: 'I gave Rosa the book. → I gave it to her.' },
              { es: 'Les mandé las fotos a mis compañeros. → [[Se las|violet]] mandé.', en: 'I sent my colleagues the photos. → I sent them to them.' },
              { es: '¿La sorpresa? Nadie [[se la|violet]] contó [[a Rosa|teal]].', en: 'The surprise? Nobody told Rosa about it.' },
            ] },
          { kind: 'tip', icon: '🔑', title: '¿Quién es «se»? · Who is “se”?', text: '«Se» puede ser muchas personas. Si no está claro por el contexto, añade la persona al final: «Se lo di **a Rosa**», «Se lo di **a ellos**», «Se lo doy **a usted**». Esta repetición es normal y correcta en español.', en: '“Se” can be many people. If the context does not make it clear, add the person at the end: “Se lo di a Rosa”, “Se lo di a ellos”, “Se lo doy a usted”. This repetition is normal and correct in Spanish.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Le presté mi paraguas a Hugo. → ___ presté.', options: ['Le lo', 'Lo le', 'Se lo'], answer: 2, why: 'Le + lo → se lo. «Le lo» no existe.', en: 'I lent Hugo my umbrella. → I lent it to him.' },
            { prompt: 'Les enseñé la oficina a los clientes. → ___ enseñé.', options: ['Les la', 'Se las', 'Se la'], answer: 2, why: 'Les + la → se la. La oficina es singular: la.', en: 'I showed the clients the office. → I showed it to them.' },
          ] },
        ] },
        { title: 'Lo, la, los, las: mira la cosa · Look at the thing', mascot: '/brand/mascot/speaking.webp', coach: 'La cosa decide. The thing decides.', blocks: [
          { kind: 'compare', title: '¿Qué cambia: la persona o la cosa? · What changes: the person or the thing?', columns: [
            { tone: 'violet', label: 'UNA PERSONA · VARIAS COSAS', sentence: 'Le di [[las flores|orange]] a Rosa. → [[Se las|violet]] di.', idea: '**las** = las flores (femenino, plural). Rosa es una persona, pero las flores son varias.', en: 'I gave Rosa the flowers. → I gave them to her.' },
            { tone: 'violet', label: 'VARIAS PERSONAS · UNA COSA', sentence: 'Les di [[el álbum|orange]] a mis hijos. → [[Se lo|violet]] di.', idea: '**se** es igual para una persona o para varias. **lo** = el álbum (masculino, singular).', en: 'I gave my children the album. → I gave it to them.' },
          ] },
          { kind: 'decide', title: '¿Qué dos palabras necesito? · Which two words do I need?', steps: [
            { q: '¿La persona es le o les (a él, a ella, a usted, a ellos, a ellas, a ustedes)?', yes: 'Primera palabra: **se**. Nunca «le lo» ni «les la».', no: 'next' },
            { q: '¿La persona es yo, tú, nosotros o vosotros?', yes: 'Primera palabra: **me**, **te**, **nos** u **os**.', no: 'Quizá no hay persona en la frase: usa solo lo, la, los, las (clase 042).' },
          ] },
          { kind: 'tip', icon: '💡', title: 'La segunda palabra: solo la cosa · The second word: only the thing', text: 'Mira **solo la cosa**: el álbum → **lo**, la tarjeta → **la**, los libros → **los**, las flores → **las**. Rosa es una mujer, pero «¿El álbum? Se **lo** di». Y si la cosa va al principio de la frase, el pronombre la repite: «**La tarjeta** la tengo yo», «**El álbum** se lo dio Hugo».', en: 'Look only at the thing: the album → lo, the card → la, the books → los, the flowers → las. Rosa is a woman, but “¿El álbum? Se lo di”. And if the thing comes at the start of the sentence, the pronoun repeats it: “La tarjeta la tengo yo” (I’ve got the card), “El álbum se lo dio Hugo” (Hugo gave her the album).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿El pastel? Lorena ___ llevó a Rosa a la mesa.', options: ['se lo', 'se la', 'le lo'], answer: 0, why: 'El pastel es masculino: lo. Que Rosa sea mujer no cambia nada: se lo.', en: 'The cake? Lorena took it to Rosa at the table.' },
            { prompt: 'Les mandé la invitación a todos. → ___ mandé.', options: ['Se las', 'Les la', 'Se la'], answer: 2, why: 'Una invitación → la. «Se» no cambia aunque son muchas personas.', en: 'I sent the invitation to everyone. → I sent it to them.' },
            { prompt: '¿Los libros de viajes? Pilar ___ dio a Rosa.', options: ['se los', 'se las', 'le los'], answer: 0, why: 'A Rosa → se; los libros → los: se los dio.', en: 'The travel books? Pilar gave them to Rosa.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Persona, cosa, verbo. Person, thing, verb.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿el orden, el «se» o la cosa? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿falla el orden, el «se» o la cosa? Toca para ver la corrección. (Is it the order, the “se” or the thing?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Le lo di ayer.', right: 'Se lo di ayer.', why: 'Le + lo no existe: le cambia a se. (le + lo → se lo)' },
            { wrong: 'Lo le di a Rosa.', right: 'Se lo di a Rosa.', why: 'Dos problemas: primero va la persona y le cambia a se. (Person first, and le → se.)' },
            { wrong: '¿El álbum para Rosa? Sí, se la di.', right: '¿El álbum para Rosa? Sí, se lo di.', why: 'La segunda palabra es la cosa, no la persona: el álbum → lo. Rosa ya está en «se». (The second pronoun agrees with the thing.)' },
            { wrong: 'Di se lo ayer.', right: 'Se lo di ayer.', why: 'Con un verbo conjugado, los pronombres van delante del verbo. (Before a conjugated verb.)' },
            { wrong: 'Hugo me lo no dio.', right: 'Hugo no me lo dio.', why: '«No» va delante de los dos pronombres; no se separan. (No + me lo + verb.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Las llaves de la oficina? Ayer ___ di a Pilar.', options: ['le las', 'se la', 'se las'], answer: 2, why: 'A Pilar → se; las llaves (plural) → las.', en: 'The office keys? Yesterday I gave them to Pilar.' },
            { prompt: '¿Le dijiste la hora de la fiesta a Rosa? —No, no ___.', options: ['se la no dije', 'se la dije', 'la se dije'], answer: 1, why: 'No + se + la + verbo. La hora → la.', en: '—Did you tell Rosa the time of the party? —No, I didn’t tell her.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno toma un objeto de la mesa (un bolígrafo, una taza, unas llaves) y te lo da. Tú preguntas «¿Qué me diste?» y tu alumno responde con dos pronombres: «Te lo di», «Te las di».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La lista de la fiesta', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Antes de la fiesta · Before the party', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lorena y tu alumno es Hugo. Después tu alumno toca cada pronombre marcado y dice qué persona y qué cosa son.', self: 'Lee el diálogo en voz alta. Después toca cada pronombre marcado y di: ¿qué persona? ¿qué cosa? (Which person? Which thing?)' } },
          { kind: 'explore', title: 'Todo listo para Rosa', setting: 'El día de la fiesta, a las diez de la mañana. Rosa está en una reunión fuera de la oficina. Lorena y Hugo repasan la lista de regalos en voz baja. (The morning of the party. Rosa is at a meeting outside the office. Lorena and Hugo go through the list of presents quietly.)', lines: [
            { who: 'Lorena', text: 'Hugo, la fiesta es a las cinco. ¿Repasamos la lista? Primero, [[el álbum|orange]] de fotos.', en: 'Hugo, the party is at five. Shall we go through the list? First, the photo album.' },
            { who: 'Hugo', text: '¿No lo tienes tú?', en: 'Haven’t you got it?' },
            { who: 'Lorena', text: 'No, [[me lo|blue]] pidió Pilar ayer. Quiere escribir unas palabras en la primera página.', en: 'No, Pilar asked me for it yesterday. She wants to write a few words on the first page.' },
            { who: 'Hugo', text: 'Bien. ¿Y [[la tarjeta|orange]] con las firmas?', en: 'Good. And the card with the signatures?' },
            { who: 'Lorena', text: 'Ya firmó toda la oficina. [[Te la|blue]] doy ahora y tú [[se la|violet]] das [[a Rosa|teal]] en la fiesta.', en: 'The whole office has signed it. I’ll give it to you now and you give it to Rosa at the party.' },
            { who: 'Hugo', text: 'Perfecto. ¿Y [[los libros|orange]] de viajes?', en: 'Perfect. And the travel books?' },
            { who: 'Lorena', text: 'Los compré el lunes, pero todavía no [[se los|violet]] enseñé a Pilar.', en: 'I bought them on Monday, but I haven’t shown them to Pilar yet.' },
            { who: 'Hugo', text: 'Tranquila, [[se los|violet]] enseño yo esta tarde. ¿Y [[las flores|orange]]?', en: 'Don’t worry, I’ll show them to her this afternoon. And the flowers?' },
            { who: 'Lorena', text: '[[Nos las|blue]] trae la floristería a las cuatro. Oye, Rosa no sabe nada, ¿verdad?', en: 'The florist is bringing them to us at four. Hey, Rosa doesn’t know anything, right?' },
            { who: 'Hugo', text: 'No, nadie [[se lo|violet]] dijo. Bueno… ayer su hija me preguntó la hora de la fiesta y [[se la|violet]] dije.', en: 'No, nobody told her. Well… yesterday her daughter asked me the time of the party and I told her.' },
            { who: 'Lorena', text: '¡Hugo! Bueno, su hija sabe guardar un secreto. Pero a Rosa no [[se lo|violet]] cuentas, ¿de acuerdo?', en: 'Hugo! Well, her daughter can keep a secret. But you don’t tell Rosa, OK?' },
          ], notes: {
            'el álbum': 'La cosa principal de la lista: masculino, singular. Con un pronombre es **lo**.',
            'me lo': '**me** = a mí (a Lorena), **lo** = el álbum. Pilar le pidió el álbum a Lorena. Primero la persona, después la cosa.',
            'la tarjeta': 'Femenino, singular: con un pronombre es **la**.',
            'Te la': '**te** = a ti (a Hugo), **la** = la tarjeta. Lorena habla directamente con Hugo.',
            'se la': '**se** = a ella (le → se), **la** = una cosa femenina: la tarjeta («se la das a Rosa») o la hora («se la dije» a la hija).',
            'a Rosa': 'La persona que recibe. Lorena la dice al final para dejar claro quién es «se».',
            'los libros': 'Masculino, plural: con un pronombre es **los**.',
            'se los': '**se** = a Pilar (le → se), **los** = los libros. «Se» es la persona; «los», las cosas.',
            'las flores': 'Femenino, plural: con un pronombre es **las**.',
            'Nos las': '**nos** = a nosotros (a la oficina), **las** = las flores. La floristería las trae para ellos.',
            'se lo': '**se** = a Rosa (le → se). Aquí **lo** no es un objeto: es «eso», la información de la fiesta. Con decir y contar, lo sustituye una información.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no tiene Lorena el álbum?', options: ['Porque lo tiene Hugo en su mesa.', 'Porque se lo pidió Pilar para escribir unas palabras.', 'Porque se lo dio a Rosa esta mañana.'], answer: 1, why: '«Me lo pidió Pilar ayer. Quiere escribir unas palabras en la primera página».', en: 'Why hasn’t Lorena got the album?' },
            { prompt: '¿Quién le da la tarjeta a Rosa en la fiesta?', options: ['Pilar.', 'Hugo.', 'Lorena.'], answer: 1, why: '«Te la doy ahora y tú se la das a Rosa en la fiesta»: Lorena habla con Hugo.', en: 'Who gives Rosa the card at the party?' },
            { prompt: '¿Qué le dijo Hugo a la hija de Rosa?', options: ['La hora de la fiesta.', 'Qué regalos hay.', 'Nada: no la vio.'], answer: 0, why: '«Su hija me preguntó la hora de la fiesta y se la dije».', en: 'What did Hugo tell Rosa’s daughter?' },
          ] },
        ] },
        { title: '¿Se o me, te, nos? · Se or me, te, nos?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Cambia las palabras por pronombres · Replace the words with pronouns', categories: [
            { id: 'se', label: 'SE LO, SE LA… · a él, a ella, a ellos', tone: 'violet' },
            { id: 'yo', label: 'ME LO, TE LA, NOS LAS… · a mí, a ti, a nosotros', tone: 'blue' },
          ], items: [
            { text: 'La floristería nos trae las flores.', answer: 'yo', why: 'A nosotros → nos: nos las trae.' },
            { text: 'Hugo le enseña los libros a Pilar.', answer: 'se', why: 'A Pilar (le) → se: se los enseña.' },
            { text: 'Pilar me pidió el álbum.', answer: 'yo', why: 'A mí → me: me lo pidió.' },
            { text: 'Nadie le dijo la noticia a Rosa.', answer: 'se', why: 'A Rosa (le) → se: nadie se la dijo.' },
            { text: 'Lorena te da la tarjeta.', answer: 'yo', why: 'A ti → te: te la da.' },
            { text: 'Hugo les manda las fotos a sus compañeros.', answer: 'se', why: 'A sus compañeros (les) → se: se las manda.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Quién tiene el álbum? ¿Quién le da la tarjeta a Rosa?». Tu alumno responde con dos pronombres: «Se lo pidió Pilar», «Se la da Hugo».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Persona + cosa + verbo.',
      steps: [
        { title: 'Durante la fiesta · During the party', blocks: [
          { kind: 'choice', items: [
            { context: 'Al final de la fiesta. (At the end of the party.)', prompt: '¿El ramo de flores? Pilar ___ dio a Rosa con un abrazo.', options: ['se lo', 'se la', 'le lo'], answer: 0, why: 'A Rosa (le) → se; el ramo (masculino, singular) → lo.', en: 'The bouquet? Pilar gave it to Rosa with a hug.' },
            { context: 'Al final de la fiesta. (At the end of the party.)', prompt: '¿Las fotos? Hugo ___ manda a todos esta noche.', options: ['les las', 'se las', 'se los'], answer: 1, why: 'A todos (les) → se; las fotos → las. «Se» no cambia en plural.', en: 'The photos? Hugo is sending them to everyone tonight.' },
            { context: 'Rosa habla con Hugo. (Rosa talks to Hugo.)', prompt: '¿Tu número nuevo? ¿___ escribes aquí, en mi agenda?', options: ['Lo me', 'Me la', 'Me lo'], answer: 2, why: 'Para mí → me; tu número → lo. ¿Me lo escribes?', en: 'Your new number? Will you write it down for me here, in my diary?' },
            { context: 'Hugo habla con Lorena. (Hugo talks to Lorena.)', prompt: '¿Tu cámara? Sí, mañana ___ devuelvo.', options: ['me la', 'te la', 'te lo'], answer: 1, why: 'A ti → te; la cámara → la. Te la devuelvo.', en: 'Your camera? Yes, I’ll give it back to you tomorrow.' },
            { context: 'Lorena habla con Pilar. (Lorena talks to Pilar.)', prompt: '¿Los libros de viajes? Hugo ___ dio a Rosa después del pastel.', options: ['le los', 'se las', 'se los'], answer: 2, why: 'A Rosa → se; los libros → los.', en: 'The travel books? Hugo gave them to Rosa after the cake.' },
          ] },
        ] },
        { title: '¿Lo, la, los o las? · Lo, la, los or las?', blocks: [
          { kind: 'classify', title: 'Mira solo la cosa · Look only at the thing', categories: [
            { id: 'lo', label: 'SE LO · el…', tone: 'orange' },
            { id: 'la', label: 'SE LA · la…', tone: 'orange' },
            { id: 'los', label: 'SE LOS · los…', tone: 'violet' },
            { id: 'las', label: 'SE LAS · las…', tone: 'violet' },
          ], items: [
            { text: 'Le presté mi paraguas a Hugo.', answer: 'lo', why: 'El paraguas: masculino, singular → se lo presté.' },
            { text: 'Les enseñé la oficina nueva a los clientes.', answer: 'la', why: 'La oficina: singular. Los clientes son varios, pero eso está en «se» → se la enseñé.' },
            { text: 'Le mandé los documentos a Pilar.', answer: 'los', why: 'Los documentos: masculino, plural → se los mandé.' },
            { text: 'Les di las llaves a los nuevos compañeros.', answer: 'las', why: 'Las llaves: femenino, plural → se las di.' },
            { text: 'Le expliqué el problema a la jefa.', answer: 'lo', why: 'El problema es masculino (aunque termina en -a). La jefa no decide → se lo expliqué.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Le lo regalamos entre todos.', ok: false, options: ['Lo le regalamos entre todos.', 'Le regalamos lo entre todos.', 'Se lo regalamos entre todos.'], answer: 2, why: 'Le + lo → se lo. Los pronombres van delante del verbo conjugado.' },
            { sentence: '¿El pastel? Me lo trajo Hugo.', ok: true, why: 'Correcta: me (a mí) + lo (el pastel), juntos y delante del verbo.' },
            { sentence: '¿Las invitaciones? Se los mandé a todos ayer.', ok: false, options: ['Se las mandé a todos ayer.', 'Les las mandé a todos ayer.', 'Se la mandé a todos ayer.'], answer: 0, why: 'Las invitaciones: femenino, plural → las. «Se» es la persona (a todos).' },
            { sentence: 'Rosa no nos lo dijo.', ok: true, why: 'Correcta: no + nos (a nosotros) + lo (eso) + verbo.' },
            { sentence: 'Hugo lo me prestó.', ok: false, options: ['Hugo se lo prestó.', 'Hugo me lo prestó.', 'Hugo me prestó lo.'], answer: 1, why: 'Primero la persona (me), después la cosa (lo). «Se lo» cambia el sentido: a otra persona, no a mí.' },
          ] },
        ] },
        { title: 'Al día siguiente · The next day', blocks: [
          { kind: 'chat-fill', title: 'Pilar y Lorena en la oficina · Pilar and Lorena at the office', lines: [
            { who: 'Pilar', text: 'Lorena, ¿tienes las fotos de la fiesta?' },
            { who: 'Lorena', text: 'Sí, Hugo ___ mandó anoche.', options: ['me las', 'me los', 'se las'], answer: 0, why: 'A mí → me; las fotos (femenino, plural) → las.' },
            { who: 'Pilar', text: '¿___ reenvías, por favor? Yo no las tengo.', options: ['Me les', 'Me las', 'Las me'], answer: 1, why: 'Para mí → me, las fotos → las. Primero la persona: ¿me las reenvías?' },
            { who: 'Lorena', text: 'Claro. ¿___ mando también a Rosa?', options: ['Se las', 'Le las', 'Se los'], answer: 0, why: 'A Rosa (le) → se; las fotos → las.' },
            { who: 'Pilar', text: 'Sí, por favor. ¿Y el pastel que sobró?' },
            { who: 'Lorena', text: 'Está en la cocina. ¿___ llevo a los compañeros de la segunda planta?', options: ['Se lo', 'Les lo', 'Se la'], answer: 0, why: 'A los compañeros (les) → se; el pastel → lo.' },
            { who: 'Pilar', text: 'Buena idea. ¿Y la llave de la sala? ¿Quién la tiene?' },
            { who: 'Lorena', text: 'Hugo. ___ di yo ayer, después de la fiesta.', options: ['Se la', 'Se lo', 'La le'], answer: 0, why: 'A Hugo → se; la llave → la. Se la di.' },
            { who: 'Pilar', text: 'Perfecto, gracias.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['lo', 'Se', 'di', 'a', 'Rosa', 'ayer'], accept: ['Se lo di a Rosa ayer', 'Ayer se lo di a Rosa'], en: 'I gave it to Rosa yesterday.' },
            { tiles: ['la', '¿Me', 'prestas', 'mañana?'], accept: ['¿Me la prestas mañana?'], en: 'Will you lend it to me tomorrow?' },
            { tiles: ['se', 'No', 'las', 'mandé', 'todavía'], accept: ['No se las mandé todavía', 'Todavía no se las mandé'], en: 'I haven’t sent them to him yet.' },
            { tiles: ['te', 'Rosa', 'lo', 'devuelve', 'el', 'jueves'], accept: ['Rosa te lo devuelve el jueves', 'El jueves Rosa te lo devuelve', 'El jueves te lo devuelve Rosa'], en: 'Rosa is giving it back to you on Thursday.' },
          ] },
        ] },
        { title: 'Dos pronombres · Two pronouns', blocks: [
          { kind: 'rewrite', title: 'Cambia la persona y la cosa por pronombres · Replace the person and the thing with pronouns', items: [
            { prompt: 'Hugo le dio el pastel a Rosa.', instruction: 'Cambia «le» y «el pastel» por dos pronombres. Empieza con «Hugo».', accept: ['Hugo se lo dio', 'Hugo se lo dio a Rosa'] },
            { prompt: 'Pilar les mandó las invitaciones a los clientes.', instruction: 'Cambia «les» y «las invitaciones» por dos pronombres. Empieza con «Pilar».', accept: ['Pilar se las mandó', 'Pilar se las mandó a los clientes'] },
            { prompt: 'Lorena me prestó la cámara.', instruction: 'Cambia «la cámara» por un pronombre. Empieza con «Lorena».', accept: ['Lorena me la prestó'] },
            { prompt: 'Pilar te compró los libros.', instruction: 'Cambia «los libros» por un pronombre. Empieza con «Pilar».', accept: ['Pilar te los compró'] },
            { prompt: 'No le dije la verdad a Hugo.', instruction: 'Cambia «le» y «la verdad» por dos pronombres. Empieza con «No».', accept: ['No se la dije', 'No se la dije a Hugo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta tres regalos reales de su vida con dos pronombres: «¿Mi reloj? Me lo regaló mi padre».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Rosa', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Rosa da las gracias · Rosa says thank you', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿cómo está Rosa? ¿qué necesita?). Segunda escucha: tu alumno levanta la mano con cada pareja de pronombres (me lo, se lo…) y dice qué cosa es. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Con cada pareja de pronombres (me lo, se lo…), di qué cosa es. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Rosa', channel: 'MENSAJE DE VOZ · DE ROSA PARA LORENA', src: '/audio/grammar-live/364.mp3',
            before: 'La noche después de la fiesta, Rosa le manda un mensaje de voz a Lorena. ¿Qué crees que dice: gracias, qué regalos le gustaron, si le falta algo…? (The night after the party, Rosa sends Lorena a voice message. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Rosa da las gracias, habla de los regalos y pregunta por la tarjeta.', 'Rosa está triste porque no quiere dejar la agencia.', 'Rosa invita a toda la oficina a su casa el jueves.'], answer: 0, why: 'Da las gracias por la fiesta, habla del álbum y de las flores, y pregunta: «¿Me la guardaste tú?».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Quién le contó a Rosa que la idea de la fiesta fue de Lorena?', options: ['Su hija.', 'Hugo.', 'Pilar.'], answer: 1, why: '«Hugo me lo contó en el ascensor».', en: 'Who told Rosa that the party was Lorena’s idea?' },
              { prompt: '¿A quién le enseñó Rosa el álbum anoche?', options: ['A su marido.', 'A su hija.', 'A sus vecinos.'], answer: 0, why: '«Anoche se lo enseñé a mi marido y le encantó».', en: 'Who did Rosa show the album to last night?' },
              { prompt: '¿Cómo llegaron las flores a casa de Rosa?', options: ['Las llevó Rosa en el autobús.', 'Se las llevó Pilar en su coche.', 'Se las mandó la floristería.'], answer: 1, why: '«Las flores me las trajo Pilar a casa en su coche».', en: 'How did the flowers get to Rosa’s house?' },
              { prompt: '¿Qué tiene Rosa que es de Lorena?', options: ['Una cámara.', 'La tarjeta con las firmas.', 'Un libro de recetas.'], answer: 2, why: '«Tu libro de recetas: te lo devuelvo pronto». La tarjeta no la tiene: la busca.', en: 'What does Rosa have that belongs to Lorena?' },
            ],
            transcript: 'Hola, Lorena, soy Rosa. Estoy en casa con todos los regalos encima de la mesa. ¡Muchas gracias por la fiesta de ayer! La idea fue tuya, ¿verdad? Hugo [[me lo|blue]] contó en el ascensor. El álbum de fotos es precioso: anoche [[se lo|violet]] enseñé a mi marido y le encantó. Las flores están en la cocina; [[me las|blue]] trajo Pilar a casa en su coche, ¡qué amable! Pero hay un problema: no encuentro la tarjeta con las firmas. ¿[[Me la|blue]] guardaste tú? Si la tienes, ¿[[me la|blue]] das el jueves en el café? Ah, y tu libro de recetas: ya lo sé, [[te lo|blue]] devuelvo pronto. Un abrazo muy fuerte para ti y para todos.',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es Lorena y responde al mensaje con tres frases: quién tiene la tarjeta, cuándo se la da y qué pasa con el libro de recetas.', self: 'Responde a Rosa en voz alta como Lorena: quién tiene la tarjeta, cuándo se la das y qué pasa con el libro de recetas. (Answer as Lorena: the card, when you give it to her, the recipe book.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Regalos, préstamos y noticias', coach: '¿Quién te lo dio? Who gave it to you?',
      steps: [
        { title: '¿Quién te lo dio? · Who gave it to you?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno responde con dos pronombres y sin repetir la cosa. Si dice «le lo» o «lo le», tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con dos pronombres y, si quieres, escribe tu respuesta. (Answer aloud with two pronouns.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué regalo especial recibiste en los últimos años? ¿Quién te lo dio? · What special present did you get in recent years? Who gave it to you?', followUps: ['¿Por qué te lo regaló? (Why did they give it to you?)', '¿Todavía lo tienes? (Do you still have it?)'], phrases: ['[[Me lo|blue]] regaló mi…', '[[Me la|blue]] dio…', 'Todavía lo tengo. / Ya no lo tengo.'], hint: 'La cosa decide: un reloj → me lo; una bufanda → me la; unos libros → me los.', example: 'Mi bufanda azul. Me la regaló mi hermana hace dos años, por mi cumpleaños. Todavía la llevo en invierno.', next: 'Ahora, las cosas que prestas.', teacher: 'Cuenta tú también un regalo: «¿Mi reloj? Me lo regaló mi madre». Así tu alumno oye otra vez el modelo.' },
            { q: '¿Prestas tus cosas? ¿A quién se las prestas? · Do you lend your things? Who do you lend them to?', followUps: ['¿Prestas tu coche? ¿A quién se lo prestas? (Do you lend your car? Who to?)', '¿Qué cosas no le prestas a nadie? (What don’t you lend to anyone?)'], phrases: ['[[Se los|violet]] presto a mis…', 'No [[se la|violet]] presto a nadie.', 'Mis libros sí, mi ropa no.'], hint: 'A mi hermano, a mis amigos → se. «Se» no cambia en plural: se los presto a mis amigos.', example: 'Mis libros sí: se los presto a mis amigos. Mi coche no: no se lo presto a nadie.', next: 'Ahora, las cosas que te prestan a ti.' },
            { q: '¿Qué te prestó alguien la última vez? ¿Ya se lo devolviste? · What did someone lend you last time? Have you given it back?', followUps: ['¿Cuándo se lo devuelves? (When are you giving it back?)', '¿Alguien te devolvió algo muy tarde? (Did anyone give you something back very late?)'], phrases: ['Mi vecina [[me la|blue]] prestó…', 'Ya [[se la|violet]] devolví.', '[[Se lo|violet]] devuelvo el…'], hint: 'Te prestan a ti: me lo, me la. Tú devuelves a esa persona: se lo, se la.', example: 'En mayo mi vecina me prestó su escalera. Se la devolví al día siguiente con una caja de galletas.', next: 'Ahora, las noticias.' },
            { q: 'Tienes una noticia importante. ¿A quién se la cuentas primero? · You have big news. Who do you tell first?', followUps: ['¿Y a quién no se la cuentas? (And who don’t you tell?)', '¿Quién te cuenta a ti sus noticias? (Who tells you their news?)'], phrases: ['Primero [[se la|violet]] cuento a…', 'Mi amiga siempre [[me las|blue]] cuenta.', 'A mi jefe no [[se la|violet]] cuento.'], hint: 'La noticia → la. Las noticias → las. La persona → se, me, te…', example: 'Primero se la cuento a mi madre. Después se la cuento a mi mejor amiga. A mis compañeros de trabajo se la cuento más tarde.', next: 'Ahora, la fiesta de Rosa.' },
            { q: 'Ahora tú eres Hugo. Lorena repasa la lista después de la fiesta: «¿Le diste la tarjeta a Rosa? ¿Y los libros? ¿Y las flores?». · Now you are Hugo. Answer Lorena’s questions.', followUps: ['¿Le dijiste la hora de la fiesta a su hija? (Did you tell her daughter the time?)', '¿Les mandaste las fotos a todos? (Did you send everyone the photos?)'], phrases: ['Sí, ya [[se la|violet]] di.', 'Los libros [[se los|violet]] dio Pilar.', 'Las fotos [[se las|violet]] mando esta noche.'], hint: 'Responde con dos pronombres y sin repetir la cosa: «Sí, se la di».', example: 'Sí, se la di a las cinco y media. Los libros se los dio Pilar. Y las fotos se las mando a todos esta noche.', teacher: 'Tú eres Lorena y reaccionas: «¿Y el álbum? ¿Quién se lo dio?». Si tu alumno se equivoca de cosa (se la para el álbum), repites la pregunta con la palabra «el álbum» marcada.' },
            { q: 'Eres Rosa. Lorena te pregunta: «¿Quién te dio el álbum? ¿Y las flores? ¿Tienes la tarjeta?». · You are Rosa. Say who gave you each present.', followUps: ['¿Qué regalo te gustó más? (Which present did you like most?)', '¿A quién le enseñaste los regalos? (Who did you show the presents to?)'], phrases: ['El álbum [[me lo|blue]] dio toda la oficina.', 'Las flores [[me las|blue]] trajo Pilar.', '¿[[Me la|blue]] guardas tú?'], hint: 'Rosa recibe: me lo, me la, me los, me las. Si la cosa va primero, el pronombre la repite: «El álbum me lo dio…».', example: 'El álbum me lo dio toda la oficina y las flores me las trajo Pilar. La tarjeta no la tengo: ¿me la guardas tú?', teacher: 'Después, cambian los papeles: tú eres Rosa y tu alumno es Lorena.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Quién te lo dio?», «¿A quién se lo prestas?») y tú respondes con dos pronombres.', self: 'Ahora tú haces las preguntas en voz alta («¿Quién te lo dio?», «¿A quién se lo prestas?») y respondes como Rosa. (Now ask the questions and answer as Rosa.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La respuesta de Lorena', coach: 'Persona + cosa, sin repetir. Person + thing, no repeating.',
      steps: [
        { title: 'Un mensaje para Rosa · A message to Rosa', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pareja de pronombres: ¿qué persona? ¿qué cosa? Después tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada pareja de pronombres: ¿qué persona? ¿qué cosa? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Respuesta a Rosa · Reply to Rosa', situation: 'Eres Lorena. Rosa te mandó un mensaje de voz: busca la tarjeta con las firmas y habla de tu libro de recetas. Escribe un mensaje a Rosa para responder a todo y contar quién le dio algunos regalos. (You are Lorena. Rosa sent you a voice message: she is looking for the signed card and mentions your recipe book. Write her a message that answers everything and tells her who gave her some of the presents.)', task: [
            'Agradece su mensaje y di algo de la fiesta. (Thank her for her message and say something about the party.)',
            'Responde sobre la tarjeta: quién la tiene y cuándo se la das, con «te la». (Answer about the card with “te la”.)',
            'Cuenta quién le compró o le eligió dos regalos, con dos pronombres: «Las flores te las eligió Pilar». (Say who chose or bought two presents, with two pronouns.)',
            'Responde sobre el libro de recetas: «Me lo devuelves cuando quieras». (Answer about the recipe book.)',
            'Usa «se lo» o «se la» una vez y despídete. (Use “se lo” or “se la” once and say goodbye.)',
          ], starters: ['Hola, Rosa:', '¡Gracias por tu mensaje!', 'La tarjeta la tengo yo: te la…', 'Las flores te las…', 'Los libros te los…', 'Me lo devuelves cuando…', 'Se lo dije a…', 'Un abrazo,'],
            words: ['me lo', 'me la', 'te lo', 'te la', 'te los', 'te las', 'se lo', 'se la', 'se los', 'dar', 'devolver', 'regalar', 'elegir', 'comprar', 'guardar', 'decir'],
            model: 'Hola, Rosa: ¡Gracias por tu mensaje! Para mí también fue una tarde muy bonita. Tranquila: la tarjeta con las firmas la tengo yo, en mi cajón. [[Te la|blue]] doy el jueves en el café, ¿te parece bien? Una cosa más: las flores [[te las|blue]] eligió Pilar, y los libros de viajes [[te los|blue]] compramos Hugo y yo el lunes. ¡Ahora tienes tiempo para viajar! Y el libro de recetas, [[me lo|blue]] devuelves cuando quieras. Hugo también quiere venir al café del jueves: [[se lo|violet]] dije a Pilar y ella viene también. Un abrazo muy fuerte, Lorena.',
            minWords: 60,
            checks: [
              { label: 'Persona + cosa: me lo, te la, te los… (person + thing)', pattern: '(?<!\\p{L})(?:me|te|nos|os)\\s+(?:lo|la|los|las)(?!\\p{L})', tip: 'Responde a Rosa con dos pronombres: «Te la doy el jueves», «Me lo devuelves cuando quieras».' },
              { label: 'Se lo, se la, se los o se las (le / les → se)', pattern: '(?<!\\p{L})se\\s+(?:lo|la|los|las)(?!\\p{L})', tip: 'Cuenta algo de otra persona: «Se lo dije a Pilar», «Se la doy el jueves».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})les?\\s+(?:lo|la|los|las)(?!\\p{L})', why: 'Delante de lo, la, los, las, **le** y **les** cambian a **se**: «se lo di», no «le lo di».' },
              { pattern: '(?<!\\p{L})(?:lo|los)\\s+(?:me|te|nos|le|les)(?!\\p{L})', why: 'Primero la persona, después la cosa: **me lo**, **se lo**, no «lo me» ni «lo le».' },
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
            { tone: 'blue', label: 'PERSONA + COSA', formula: 'me · te · nos · os + lo · la · los · las', example: '¿La tarjeta? Te la doy el jueves.', caption: 'primero a quién, después qué; juntos, delante del verbo', en: 'first to whom, then what; together, before the verb' },
            { tone: 'violet', label: 'LE / LES → SE', formula: 'le lo ✗ → se lo ✓ · les las ✗ → se las ✓', example: 'Le di el libro a Rosa. → Se lo di.', caption: '«se» = a él, a ella, a usted, a ellos, a ustedes', en: '“se” = to him, to her, to you (usted), to them' },
            { tone: 'orange', label: 'LA COSA DECIDE', formula: 'el álbum → lo · la tarjeta → la · los libros → los · las flores → las', example: '¿El álbum para Rosa? Se lo di.', caption: 'lo, la, los, las van con la cosa, no con la persona', en: 'lo, la, los, las agree with the thing, not the person' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Dos pronombres juntos: **primero la persona, después la cosa**, y los dos delante del verbo conjugado: «Te la doy», «No se lo dije». **Le** y **les** cambian a **se** delante de lo, la, los, las. Y la segunda palabra mira solo la cosa: «¿El álbum? Se **lo** di a Rosa».', en: 'Two pronouns together: first the person, then the thing, both before the conjugated verb: “Te la doy”, “No se lo dije”. Le and les become se before lo, la, los, las. And the second word looks only at the thing: “¿El álbum? Se lo di a Rosa”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '¿El paraguas? Mi vecina ___ prestó ayer.', options: ['me lo', 'me la', 'lo me'], answer: 0, why: 'A mí → me; el paraguas → lo.', en: 'The umbrella? My neighbour lent it to me yesterday.' },
            { prompt: '¿Las llaves del coche? Ya ___ di a tu hermano.', options: ['se los', 'se las', 'le las'], answer: 1, why: 'A tu hermano (le) → se; las llaves → las.', en: 'The car keys? I’ve already given them to your brother.' },
            { prompt: 'Les conté la noticia a mis padres. → ___ conté.', options: ['Les la', 'Se las', 'Se la'], answer: 2, why: 'Una noticia → la. «Se» no cambia aunque son dos personas.', en: 'I told my parents the news. → I told them.' },
            { prompt: '¿El correo de Ana? Ahora mismo ___ reenvío.', options: ['te la', 'te lo', 'lo te'], answer: 1, why: 'A ti → te; el correo → lo. Primero la persona.', en: 'Ana’s email? I’ll forward it to you right now.' },
            { prompt: '—¿Quién les explicó el ejercicio a ustedes? —___ explicó la profesora.', options: ['Se lo', 'Nos la', 'Nos lo'], answer: 2, why: 'La respuesta habla de nosotros: nos; el ejercicio → lo.', en: '—Who explained the exercise to you? —The teacher explained it to us.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la vida de Rosa jubilada.', blocks: [
          { kind: 'lead', text: 'Un mes después, Rosa tiene tiempo para sus vecinos y su familia. Cambia las palabras por dos pronombres.', en: 'A month later, Rosa has time for her neighbours and her family. Replace the words with two pronouns.' },
          { kind: 'rewrite', title: 'Rosa, jubilada · Rosa, retired', items: [
            { prompt: 'Rosa le presta su bicicleta a la vecina.', instruction: 'Cambia «le» y «su bicicleta» por dos pronombres. Empieza con «Rosa».', accept: ['Rosa se la presta', 'Rosa se la presta a la vecina'] },
            { prompt: 'Rosa les manda las fotos del viaje a sus nietos.', instruction: 'Cambia «les» y «las fotos del viaje» por dos pronombres. Empieza con «Rosa».', accept: ['Rosa se las manda', 'Rosa se las manda a sus nietos'] },
            { prompt: 'Su hija le regaló un libro de viajes.', instruction: 'Cambia «le» y «un libro de viajes» por dos pronombres. Empieza con «Su hija».', accept: ['Su hija se lo regaló', 'Su hija se lo regaló a Rosa'] },
          ] },
        ] },
        { title: 'Ampliación · Se con usted y variación', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: '«Se» también es **usted** y **ustedes**: por eso aparece mucho en tiendas y oficinas. Y en muchas zonas de América vas a oír una forma coloquial muy frecuente: «Ya **se los** dije».', en: '“Se” is also usted and ustedes, so you hear it a lot in shops and offices. And in many parts of Latin America you will hear a very common colloquial form: “Ya se los dije”.' },
          { kind: 'choice', title: 'Casos más difíciles · Harder cases', items: [
            { context: 'En una librería. El dependiente habla con Rosa (usted). (In a bookshop.)', prompt: '¿El libro es para regalo? ¿___ envuelvo?', options: ['Le lo', 'Te lo', 'Se lo'], answer: 2, why: 'A usted (le) → se. Con usted no se usa «te».', en: 'Is the book a present? Shall I wrap it for you?' },
            { context: 'Lorena dice «Se lo di», pero Hugo no sabe si habla de Rosa o de Pilar. (Hugo does not know who “se” is.)', prompt: '¿Qué frase es más clara?', options: ['Se lo di Pilar.', 'Se lo di a Pilar.', 'Le lo di a Pilar.'], answer: 1, why: 'Para aclarar «se», se añade la persona con «a»: a Pilar.', en: 'Which sentence is clearer?' },
            { context: 'En México, Hugo le dice a un grupo de amigos: «Ya se los dije: la fiesta es el viernes». (Hugo talks to several friends.)', prompt: '¿Qué significa aquí «se los dije»?', options: ['Se lo dije a una persona.', 'Se lo dije a ustedes: la -s señala que son varias personas.', 'Les dije varias cosas diferentes.'], answer: 1, why: 'En el habla coloquial de México y de otras zonas de América, la -s de «los» marca que la persona es plural. En la norma general: «Ya se lo dije».', en: 'What does “se los dije” mean here?' },
          ] },
          { kind: 'tip', icon: '🌎', title: '«Se los dije» · a colloquial American form', text: 'En la norma general, «lo» va con la cosa: «Ya se **lo** dije (a ustedes)». En el habla coloquial de muchas zonas de América es muy frecuente «Ya se **los** dije» para mostrar que la persona es plural. Si lo oyes, ya sabes qué significa; en tus ejercicios, usa la norma general.', en: 'In general usage, “lo” goes with the thing: “Ya se lo dije (a ustedes)”. In colloquial speech in many parts of Latin America, “Ya se los dije” is very common to show that the person is plural. Understand it when you hear it; in your exercises, use the general rule.' },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Si el alumno vive en América o habla con hispanoamericanos, conviene comentar que «se los dije» es habitual en la conversación informal.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 065 · Posición de pronombres con infinitivo e imperativo', text: 'Ya usas dos pronombres delante de un verbo conjugado: «Se lo di», «Te la doy». En la clase 065 ves qué pasa con un infinitivo y con el imperativo: «Voy a dárselo» o «Se lo voy a dar», «Dámelo». Es el paso natural: ya conoces las parejas (me lo, se la…); ahora aprendes dónde van cuando el verbo no está conjugado o cuando das una instrucción.', en: 'You can now use two pronouns before a conjugated verb: “Se lo di”, “Te la doy”. In class 065 you see what happens with an infinitive and with the imperative: “Voy a dárselo” or “Se lo voy a dar”, “Dámelo”. It is the natural next step: you already know the pairs (me lo, se la…); now you learn where they go when the verb is not conjugated or when you give an instruction.', href: '/gramatica/posicion-de-pronombres-con-infinitivo-e', label: 'Ir a la clase 065' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué es lo último que te prestaron? ¿Ya se lo devolviste?». Respuesta esperada: dos frases con me lo / se lo. Tarea: escribir el mensaje de Escribir con dos regalos reales de su vida.' },
        ] },
      ],
    },
  ],
};
