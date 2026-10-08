/**
 * Editorial data for the Spanish conversation cluster:
 *   /spanish-conversation-activities           (hub)
 *   /spanish-conversation-activities/[level]   (A1 … C2)
 *
 * Everything here is original teaching content written for SpanishCue. Lesson
 * ids point at the real catalog (app/lesson-catalog.ts); the pages resolve
 * titles, images, access and URLs from it at render time, so nothing about a
 * lesson is duplicated or invented here. Spanish examples use the neutral
 * `tú` register the product uses everywhere.
 */
export type ConversationLevelCode = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type ConversationLevelSlug = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type ConversationActivity = {
  name: string;
  minutes: number;
  format: string;
  goal: string;
  steps: string[];
  language: string;
  teacherTip: string;
};

export type ConversationLevel = {
  code: ConversationLevelCode;
  slug: ConversationLevelSlug;
  name: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  summary: string;
  intro: string[];
  canDo: string[];
  design: string[];
  activities: ConversationActivity[];
  scaffolds: { es: string; en: string }[];
  pitfalls: string[];
  sampleQuestions: { es: string; en: string }[];
  lessonIds: number[];
  companionLessonIds: number[];
  guideSlugs: string[];
  faq: { question: string; answer: string }[];
};

export const CONVERSATION_HUB_PATH = "/spanish-conversation-activities";
export const CONVERSATION_QUESTIONS_PATH = "/spanish-conversation-questions";

export const conversationLevels: ConversationLevel[] = [
  {
    code: "A1",
    slug: "a1",
    name: "Beginner",
    path: `${CONVERSATION_HUB_PATH}/a1`,
    title: "A1 Spanish Conversation Activities for Beginners | SPANISHCUE",
    description:
      "Four ready-to-use A1 Spanish conversation activities for beginners, with steps, sentence frames, 12 tú-form questions and interactive SpanishCue lessons.",
    h1: "A1 Spanish Conversation Activities: Get Beginners Speaking From the First Lesson",
    eyebrow: "A1 · BEGINNER",
    summary: "Narrow choices, visible options and repeated question frames so a beginner can hold a real exchange with very little language.",
    intro: [
      "A beginner can have a real conversation in Spanish during the first weeks, as long as the task is built around language the learner already has. The mistake is not asking A1 students to speak; it is asking open questions that need grammar they have never met. At A1 a good conversation activity gives the learner a concrete choice, shows the options on screen and repeats the same question frame until the structure becomes automatic.",
      "The activities below are designed for one-to-one lessons and small groups, online or in person. Each one lasts between eight and fifteen minutes, so you can combine two of them with a short vocabulary warm-up and still close the class with personalised speaking.",
    ],
    canDo: [
      "Introduce themselves and ask simple personal questions: name, origin, work, languages.",
      "Say what they like and do not like, with a one-word or one-phrase reason.",
      "Describe their daily routine with times and basic sequencers (primero, después, luego).",
      "Ask and answer about prices, places and schedules using set phrases.",
    ],
    design: [
      "Keep the communicative space narrow: two or three visible options beat an open question.",
      "Recycle one question frame across the whole activity so attention goes to meaning, not form.",
      "Model the complete answer out loud once, then let the learner reuse it with new content.",
      "Accept short answers first and expand them yourself; the learner hears the longer version before producing it.",
    ],
    activities: [
      {
        name: "Two options, one reason",
        minutes: 10,
        format: "One-to-one or pairs · pictures or a shared screen",
        goal: "Express a preference and give a simple reason.",
        steps: [
          "Show two pictures of the same kind of thing: two cafés, two cities, two breakfasts, two jobs.",
          "Ask the frame question every time: «¿Cuál prefieres?». The learner answers with «Prefiero…».",
          "Add the reason chips on screen: es barato, es bonito, es tranquilo, es grande, está cerca. The learner picks one: «Prefiero este café porque es tranquilo».",
          "After five pairs, swap roles: the learner shows two options and asks you.",
        ],
        language: "prefiero / me gusta más; porque + ser/estar + adjective; este / esta.",
        teacherTip: "Accept a one-word reason in round one («barato») and say the full sentence back. By round three most learners produce the whole frame on their own.",
      },
      {
        name: "Yo también / Yo no",
        minutes: 8,
        format: "One-to-one or small group · no materials",
        goal: "React to simple statements and give a personal version.",
        steps: [
          "Say a true sentence about yourself in the present tense: «Tomo café por la mañana».",
          "The learner answers «Yo también» or «Yo no» and adds a personal version: «Yo no. Tomo té».",
          "Continue with eight to ten statements about routine, food, free time and family.",
          "Reverse roles: the learner makes statements and you react, deliberately disagreeing sometimes so the learner has to listen.",
        ],
        language: "Present tense, first person; también / tampoco; frequency words (siempre, a veces, nunca).",
        teacherTip: "Write the two reaction phrases on screen for the whole activity. Removing that support too early turns a speaking task into a memory test.",
      },
      {
        name: "Build a day",
        minutes: 12,
        format: "One-to-one · six activity cards with clock times",
        goal: "Describe a daily routine in order.",
        steps: [
          "Give the learner six cards: me levanto, desayuno, trabajo, como, vuelvo a casa, me acuesto, each with a clock.",
          "The learner orders the cards for a normal weekday and narrates: «Primero me levanto a las siete. Después desayuno…».",
          "Change the scenario: a Sunday, a holiday, the day of an exam. The learner reorders and narrates again.",
          "Finish with two questions about your routine so the learner practises the second person: «¿A qué hora te levantas?».",
        ],
        language: "Reflexive verbs in the present; a las + time; primero, después, luego, por último.",
        teacherTip: "The reordering step is where the real speaking happens: the same six verbs produce a different narrative each time without new vocabulary.",
      },
      {
        name: "The three-question chain",
        minutes: 10,
        format: "One-to-one or pairs · a photo of a person",
        goal: "Ask basic personal questions, not only answer them.",
        steps: [
          "Show a photo of a person and invent an identity card with three facts: name, city, favourite food.",
          "The learner has to ask three questions to find the facts: «¿Cómo se llama? ¿Dónde vive? ¿Qué le gusta comer?».",
          "Answer in full sentences and let the learner repeat the fact back: «Se llama Ana y vive en Lima».",
          "Swap: the learner invents the identity and you ask the questions, making one mistake the learner must correct.",
        ],
        language: "Question words (cómo, dónde, qué, cuántos); third-person present; gustar.",
        teacherTip: "Beginners rarely get to ask questions in class. Making the learner the interviewer doubles their speaking time without adding grammar.",
      },
    ],
    scaffolds: [
      { es: "Prefiero … porque es …", en: "I prefer … because it is …" },
      { es: "Yo también. / Yo no, yo …", en: "Me too. / Not me, I …" },
      { es: "Primero …, después …, luego …", en: "First …, then …, after that …" },
    ],
    pitfalls: [
      "Asking «¿Qué hiciste el fin de semana?» before the learner has any past tense: the question is natural, the task is impossible.",
      "Correcting every article and ending during the activity. Note two patterns and work on them afterwards.",
      "Letting a silence become English. Point at the options on screen instead of translating.",
    ],
    sampleQuestions: [
      { es: "¿Cómo te llamas y de dónde eres?", en: "What is your name and where are you from?" },
      { es: "¿Dónde vives? ¿Te gusta tu ciudad?", en: "Where do you live? Do you like your city?" },
      { es: "¿Qué desayunas normalmente?", en: "What do you usually have for breakfast?" },
      { es: "¿A qué hora te levantas los lunes?", en: "What time do you get up on Mondays?" },
      { es: "¿Qué haces en tu tiempo libre?", en: "What do you do in your free time?" },
      { es: "¿Prefieres el café o el té? ¿Por qué?", en: "Do you prefer coffee or tea? Why?" },
      { es: "¿Cuántas personas hay en tu familia?", en: "How many people are there in your family?" },
      { es: "¿Qué lenguas hablas?", en: "Which languages do you speak?" },
      { es: "¿Trabajas o estudias? ¿Dónde?", en: "Do you work or study? Where?" },
      { es: "¿Cuál es tu comida favorita?", en: "What is your favourite food?" },
      { es: "¿Hay un parque cerca de tu casa?", en: "Is there a park near your home?" },
      { es: "¿Qué día de la semana te gusta más?", en: "Which day of the week do you like best?" },
    ],
    lessonIds: [121, 120, 27, 24, 19, 15, 207, 226, 223],
    companionLessonIds: [40, 41, 16, 204, 201],
    guideSlugs: ["spanish-conversation-activities-by-level", "teach-beginner-spanish-online", "spanish-lesson-planning-45-minutes"],
    faq: [
      {
        question: "How long should an A1 conversation activity last?",
        answer: "Eight to fifteen minutes. Beginners tire quickly when every sentence costs effort, so two short activities with a change of topic work better than one long discussion.",
      },
      {
        question: "Should I let A1 students use English during speaking tasks?",
        answer: "Allow a quick gloss of a single word when it keeps the exchange alive, then return to Spanish immediately. The options on screen are your main tool for avoiding translation.",
      },
      {
        question: "Can complete beginners use SpanishCue conversation lessons?",
        answer: "Yes. Several conversation worlds in the library have an authored A1 version with its own objectives, scaffolding and closing production, not just a difficulty label.",
      },
    ],
  },
  {
    code: "A2",
    slug: "a2",
    name: "Elementary",
    path: `${CONVERSATION_HUB_PATH}/a2`,
    title: "A2 Spanish Conversation Activities (Elementary) | SPANISHCUE",
    description:
      "A2 Spanish conversation activities with steps: plans with constraints, past-tense photo stories, comparisons and roleplays, plus 12 questions and real lessons.",
    h1: "A2 Spanish Conversation Activities: Add Problems, Plans and the Past",
    eyebrow: "A2 · ELEMENTARY",
    summary: "Keep the support, introduce consequences: plans with constraints, small problems to solve and the first past-tense stories.",
    intro: [
      "At A2 the learner can combine known forms instead of repeating one model, so the conversation activity can finally contain a problem. Plans with constraints, a weekend that went wrong, two flats to compare, a hotel complaint: the language stays concrete, but there is now something to work out, and that is what produces sustained speaking.",
      "The activities on this page assume the learner has met the present tense well, has some past-tense forms (at least the pretérito indefinido of common verbs) and can use comparatives. Each activity includes the language it recycles so you can pick the one that matches your current syllabus.",
    ],
    canDo: [
      "Talk about past events and weekends with common verbs in the pretérito indefinido.",
      "Make plans and arrangements, accept and reject suggestions politely.",
      "Compare two places, products or people with más / menos / tan … como.",
      "Handle simple transactions and small problems: a shop, a hotel, a train station.",
    ],
    design: [
      "Add one constraint to every task: a budget, a time limit, a person who disagrees.",
      "Give both speakers something to decide, not only something to describe.",
      "Let the past tense arrive through a story the learner wants to tell, not a drill.",
      "Keep scaffolds visible but shorter than at A1: starters, not full sentences.",
    ],
    activities: [
      {
        name: "Plan the weekend with three constraints",
        minutes: 12,
        format: "One-to-one or pairs · list of six possible activities",
        goal: "Make and negotiate plans with limits.",
        steps: [
          "Show six activities with prices and times: cine, museo, excursión, concierto, cena, mercado.",
          "Set three constraints: a budget of 40 euros, no activities before eleven on Saturday, and one thing that has to be free.",
          "The learner proposes a plan: «El sábado podemos ir al mercado por la mañana y por la tarde…». You object to one item and the learner adjusts.",
          "Finish with the agreed plan said out loud in order, using the future with ir a.",
        ],
        language: "podemos / ¿qué tal si…?; ir a + infinitive; prices and times; porque / pero.",
        teacherTip: "Constraints do the teaching. Without them the learner lists activities; with them the learner has to argue, reject and reorder.",
      },
      {
        name: "What happened? Photo story in the past",
        minutes: 12,
        format: "One-to-one · four pictures of a sequence",
        goal: "Narrate a short past-tense sequence.",
        steps: [
          "Show four pictures of a mini-story: someone misses a train, waits, meets a friend, arrives late to a party.",
          "Ask «¿Qué pasó?» and give the learner the verbs in the infinitive on screen: perder, esperar, encontrar, llegar.",
          "The learner narrates in the pretérito indefinido, one picture at a time. You ask one detail question per picture: «¿A qué hora llegó?».",
          "Hide the pictures and ask the learner to tell the story again from memory, this time adding how the person felt.",
        ],
        language: "Pretérito indefinido of regular verbs and ir / tener / hacer; time markers (primero, luego, al final).",
        teacherTip: "Showing the infinitives on screen removes the vocabulary problem so the learner can concentrate on the past-tense forms.",
      },
      {
        name: "Two flats, one decision",
        minutes: 10,
        format: "One-to-one or pairs · two short apartment listings",
        goal: "Compare and justify a choice.",
        steps: [
          "Show two listings with price, size, location and one drawback each (no light, noisy street, fifth floor without elevator).",
          "The learner compares them: «El piso A es más barato que el B, pero está más lejos del centro».",
          "Introduce a persona: a student, a family with a baby, a musician. The learner decides for that person and explains.",
          "Change the persona twice; the same two flats produce three different decisions.",
        ],
        language: "Comparatives (más / menos … que, tan … como); hay / está; housing vocabulary.",
        teacherTip: "The persona step turns a description task into a reasoning task. Ask «¿Y para un músico?» and watch the argument change.",
      },
      {
        name: "Problem at the hotel",
        minutes: 10,
        format: "Roleplay · one-to-one",
        goal: "Explain a problem and ask for a solution politely.",
        steps: [
          "The learner is a guest; you are the receptionist. Give the learner a card with the problem: the room is cold, the wifi does not work, there is noise at night.",
          "The learner explains the problem and asks for something: «Perdone, la habitación está muy fría. ¿Puede…?».",
          "Offer a bad solution first so the learner has to insist or propose an alternative.",
          "Swap roles with a new problem; the learner now has to understand the complaint and offer options.",
        ],
        language: "Polite requests (¿puede…?, ¿sería posible…?); estar + adjective; hay un problema con….",
        teacherTip: "Your first solution should be unhelpful on purpose. Insisting politely is a skill A2 learners need and almost never practise.",
      },
    ],
    scaffolds: [
      { es: "¿Qué tal si … el sábado?", en: "How about … on Saturday?" },
      { es: "Primero …, luego … y al final …", en: "First …, then … and in the end …" },
      { es: "Es más … que …, pero …", en: "It is more … than …, but …" },
    ],
    pitfalls: [
      "Asking for the past tense of irregular verbs the learner has not met. Pre-teach three and keep them on screen.",
      "Comparison tasks without a decision at the end: the learner describes and stops.",
      "Roleplays where the teacher solves the problem immediately. Make the learner insist at least once.",
    ],
    sampleQuestions: [
      { es: "¿Qué hiciste el fin de semana pasado?", en: "What did you do last weekend?" },
      { es: "¿Cuándo fue la última vez que viajaste? ¿Adónde fuiste?", en: "When was the last time you travelled? Where did you go?" },
      { es: "¿Qué vas a hacer el próximo verano?", en: "What are you going to do next summer?" },
      { es: "¿Prefieres vivir en el centro o en las afueras? ¿Por qué?", en: "Do you prefer living downtown or in the suburbs? Why?" },
      { es: "¿Qué plato sabes cocinar bien?", en: "Which dish can you cook well?" },
      { es: "¿Cómo era tu escuela primaria?", en: "What was your primary school like?" },
      { es: "¿Qué haces cuando llueve todo el día?", en: "What do you do when it rains all day?" },
      { es: "¿Qué es más importante en un trabajo: el salario o el horario?", en: "What matters more in a job: salary or schedule?" },
      { es: "¿Has estado alguna vez en un país donde se habla español?", en: "Have you ever been to a Spanish-speaking country?" },
      { es: "¿Qué regalo le hiciste a alguien recientemente?", en: "What gift did you give someone recently?" },
      { es: "¿Qué te gusta hacer con tus amigos?", en: "What do you like doing with your friends?" },
      { es: "¿Cuál fue tu mejor cumpleaños? ¿Qué pasó?", en: "What was your best birthday? What happened?" },
    ],
    lessonIds: [36, 123, 122, 39, 30, 17, 20, 207, 15, 223],
    companionLessonIds: [105, 28, 108, 131, 213],
    guideSlugs: ["spanish-conversation-activities-by-level", "preterite-vs-imperfect-activities", "how-to-teach-ser-vs-estar"],
    faq: [
      {
        question: "Which past tense should A2 conversation activities use?",
        answer: "Start with the pretérito indefinido of frequent verbs in short, finished stories. Bring in the imperfect for background only when learners can already tell a simple sequence of events.",
      },
      {
        question: "How do I stop A2 learners from giving one-sentence answers?",
        answer: "Build a decision into the task. Comparing two flats produces one sentence; choosing one for a specific person and defending it produces a paragraph.",
      },
      {
        question: "Is there a free A2 conversation lesson I can try?",
        answer: "Yes. ESTADOS UNIDOS is a free SpanishCue conversation world with an A2 version, so you can teach a complete interactive lesson before deciding on PRO.",
      },
    ],
  },
  {
    code: "B1",
    slug: "b1",
    name: "Intermediate",
    path: `${CONVERSATION_HUB_PATH}/b1`,
    title: "B1 Spanish Conversation Activities (Intermediate) | SPANISHCUE",
    description:
      "B1 Spanish conversation activities: ranking tasks, stories with a twist, dilemma cards and an advice clinic, plus 12 discussion questions and real lessons.",
    h1: "B1 Spanish Conversation Activities: Require Reasons, Stories and Decisions",
    eyebrow: "B1 · INTERMEDIATE",
    summary: "Push past short answers with ranking, narrative, dilemmas and advice: tasks that need several connected sentences to finish.",
    intro: [
      "B1 is where conversation classes either take off or stall. The learner can now narrate, give opinions and talk about plans, but will happily answer in one sentence if the task allows it. A useful test for any B1 conversation activity is simple: can the student complete it with a single sentence? If yes, the activity is not creating enough discourse.",
      "The four activities below are built so that finishing them requires connected speech: a ranking that must be defended, a story that needs background and a turning point, a dilemma with consequences, and advice that has to fit a specific person. They work especially well in online one-to-one lessons, where the learner holds the floor for most of the hour.",
    ],
    canDo: [
      "Tell a story in the past using both the indefinido and the imperfect, with a clear turning point.",
      "Give an opinion and justify it with two or three connected reasons.",
      "Give advice and make recommendations (deberías, yo que tú, te recomiendo que).",
      "Talk about hypothetical situations in the present and near future (si + present).",
    ],
    design: [
      "Require several sentences to finish the task: rank, narrate, decide, recommend.",
      "Make the learner commit to a position and then defend it against one objection.",
      "Vary the decision, not the frame: the same ranking format works with ten different topics.",
      "Record one longer answer per class and use it for delayed correction, not live interruption.",
    ],
    activities: [
      {
        name: "Rank and defend",
        minutes: 12,
        format: "One-to-one or small group · list of six items",
        goal: "Order items by a criterion and justify the order.",
        steps: [
          "Give six items to rank: inventions of the last century, qualities of a good boss, things to take to a desert island, reasons to learn Spanish.",
          "The learner orders them from most to least important and explains the first and last choice: «Para mí lo más importante es… porque…».",
          "Challenge one position: «¿De verdad el teléfono es más importante que la electricidad?». The learner defends or moves it.",
          "Change the criterion (most important for a student, for a grandparent, for a city) and ask for a second ranking.",
        ],
        language: "Lo más / lo menos + adjective; superlatives; opinion verbs (creo que, me parece que); connectors (además, en cambio, aunque).",
        teacherTip: "Always challenge one item. A ranking the teacher simply accepts is a list; a ranking the learner has to defend is an argument.",
      },
      {
        name: "Story with a twist",
        minutes: 15,
        format: "One-to-one · story skeleton with a blank turning point",
        goal: "Narrate in the past combining background and events.",
        steps: [
          "Give a skeleton: where the person was, what the day was like, what they were doing. The learner sets the scene in the imperfect: «Era un día normal. Estaba en la oficina y…».",
          "Show the turning-point card: «De repente…». The learner invents the event in the indefinido.",
          "Ask three follow-up questions about consequences and feelings: «¿Y qué hizo después? ¿Cómo se sintió?».",
          "Let the learner tell the whole story once more without stops, then give two pieces of feedback on tense choice.",
        ],
        language: "Imperfect for background and habits; indefinido for events; de repente, entonces, al final; feelings in the past.",
        teacherTip: "The blank turning point makes the imperfect / indefinido contrast meaningful: scene first, event second. Learners feel the difference before they can explain it.",
      },
      {
        name: "Dilemma cards",
        minutes: 12,
        format: "One-to-one or pairs · six dilemma cards",
        goal: "Decide between two options with consequences and explain the decision.",
        steps: [
          "Read a dilemma with two options and a consequence each: a well-paid job far from your family or a modest one in your city; telling a friend an uncomfortable truth or staying quiet.",
          "The learner chooses and explains: «Yo elegiría el trabajo en mi ciudad porque…».",
          "Add a complication that changes the balance: the modest job has no contract. Does the decision change?",
          "Ask the learner to predict what a specific person (a parent, a twenty-year-old, you) would choose and why.",
        ],
        language: "Conditional (elegiría, preferiría); si + present + future; expressing consequences (entonces, así que); depende de.",
        teacherTip: "The added complication is the heart of the task. It forces the learner to revisit an argument already made, which is exactly what real conversation does.",
      },
      {
        name: "Advice clinic",
        minutes: 10,
        format: "Roleplay · one-to-one",
        goal: "Give advice that fits a specific situation.",
        steps: [
          "Present a short case: someone cannot sleep before exams, wants to change careers at forty, has a noisy neighbour.",
          "The learner gives three pieces of advice with different structures: «Deberías…», «Yo que tú…», «Te recomiendo que…».",
          "Respond as the person with an objection to each piece of advice so the learner has to adapt: «Ya lo intenté y no funcionó».",
          "Close with the learner summarising the best plan in two or three sentences.",
        ],
        language: "Deberías + infinitive; yo que tú + conditional; te recomiendo / aconsejo que + present subjunctive.",
        teacherTip: "Objecting to the advice does more than any drill to make the subjunctive forms appear a second and third time in the same exchange.",
      },
    ],
    scaffolds: [
      { es: "Para mí lo más importante es … porque …", en: "For me the most important thing is … because …" },
      { es: "Estaba … cuando de repente …", en: "I was … when suddenly …" },
      { es: "Yo que tú, … / Te recomiendo que …", en: "If I were you, … / I recommend that you …" },
    ],
    pitfalls: [
      "Accepting the first sentence as the answer. Ask «¿Por qué?» and «¿Y qué más?» before moving on.",
      "Debating abstract topics too early. B1 learners argue well about concrete dilemmas and badly about politics.",
      "Correcting every subjunctive live. Collect three examples and work on them at the end of the activity.",
    ],
    sampleQuestions: [
      { es: "¿Qué consejo le darías a alguien que quiere aprender español?", en: "What advice would you give someone who wants to learn Spanish?" },
      { es: "Cuéntame algo que te pasó y que todavía recuerdas con detalle.", en: "Tell me about something that happened to you that you still remember in detail." },
      { es: "¿Qué cambiarías de tu ciudad si pudieras decidir tú?", en: "What would you change about your city if you could decide?" },
      { es: "¿Crees que es mejor viajar en grupo o solo? ¿Por qué?", en: "Do you think it is better to travel in a group or alone? Why?" },
      { es: "¿Qué harías si encontraras una cartera llena de dinero en la calle?", en: "What would you do if you found a wallet full of money in the street?" },
      { es: "¿Qué es lo más difícil de tu trabajo o de tus estudios?", en: "What is the hardest part of your job or your studies?" },
      { es: "¿Cómo era tu vida hace diez años? ¿Qué ha cambiado?", en: "What was your life like ten years ago? What has changed?" },
      { es: "¿Prefieres un trabajo seguro o un proyecto arriesgado que te apasione?", en: "Do you prefer a secure job or a risky project you feel passionate about?" },
      { es: "¿Qué tradición de tu país explicarías a un extranjero?", en: "Which tradition from your country would you explain to a foreigner?" },
      { es: "¿Hay alguna decisión que tomaste y que ahora harías diferente?", en: "Is there a decision you made that you would now make differently?" },
      { es: "¿Qué opinas de trabajar desde casa? ¿Tiene más ventajas o desventajas?", en: "What do you think about working from home? Are there more pros or cons?" },
      { es: "Si pudieras aprender una habilidad nueva en un mes, ¿cuál elegirías?", en: "If you could learn a new skill in a month, which would you choose?" },
    ],
    lessonIds: [210, 36, 221, 223, 137, 138, 139, 109, 126, 205, 215, 216],
    companionLessonIds: [18, 31, 132, 115, 114],
    guideSlugs: ["spanish-conversation-activities-by-level", "preterite-vs-imperfect-activities", "spanish-subjunctive-lesson-plan"],
    faq: [
      {
        question: "What makes a conversation activity genuinely B1 rather than A2?",
        answer: "The task should be impossible to complete in one sentence. Narration with background, a defended ranking or advice adapted to objections all require connected discourse, which is the defining B1 skill.",
      },
      {
        question: "Which free SpanishCue lessons work for B1 conversation?",
        answer: "MÉXICO and ESTADOS UNIDOS are free conversation worlds with B1 versions. Both are complete interactive lessons you can open in the browser and teach immediately.",
      },
      {
        question: "How do I introduce the subjunctive in conversation without a grammar lecture?",
        answer: "Use the advice clinic: te recomiendo que, es mejor que and quiero que appear naturally when the learner has to help someone. Notice the form after the activity, not before.",
      },
    ],
  },
  {
    code: "B2",
    slug: "b2",
    name: "Upper intermediate",
    path: `${CONVERSATION_HUB_PATH}/b2`,
    title: "B2 Spanish Conversation Activities: Debate & Nuance | SPANISHCUE",
    description:
      "B2 Spanish conversation activities: switch-sides debates, negotiations with hidden priorities, register shifts and speculation tasks, plus questions and lessons.",
    h1: "B2 Spanish Conversation Activities: Design for Nuance, Not Just Harder Topics",
    eyebrow: "B2 · UPPER INTERMEDIATE",
    summary: "Complexity from ambiguity, competing values and register rather than from difficult subjects: debates, negotiations and speculation.",
    intro: [
      "The temptation at B2 is to make topics heavier: climate policy, the economy, geopolitics. Harder topics do not produce better conversation; they produce vocabulary gaps. Complexity at B2 should come from the task itself: having to argue a position you disagree with, negotiating with someone whose priorities you cannot see, saying the same thing to a friend and to a client, or distinguishing what is probable from what is merely possible.",
      "These activities keep the subject matter familiar and raise the linguistic demand instead. They recycle the subjunctive, conditional sentences, hedging language and discourse markers that B2 learners know on paper but rarely use under pressure.",
    ],
    canDo: [
      "Defend a point of view with developed arguments and respond to counterarguments.",
      "Negotiate, concede and reach a compromise in a semi-formal context.",
      "Adjust register and tone for different listeners: friend, colleague, client, official.",
      "Speculate about causes and consequences with appropriate degrees of certainty.",
    ],
    design: [
      "Separate opinion from performance: the learner should argue positions they do not hold.",
      "Use information gaps so the learner has to ask, infer and adjust rather than recite.",
      "Make register the variable: same message, different audience, different Spanish.",
      "Ask for degrees of certainty, not yes or no: probable, posible, seguro, improbable.",
    ],
    activities: [
      {
        name: "Switch sides",
        minutes: 15,
        format: "One-to-one or pairs · one everyday controversy",
        goal: "Argue a position, then argue the opposite with equal conviction.",
        steps: [
          "Choose a familiar controversy: four-day working week, phones in the classroom, tourists in the historic centre.",
          "The learner argues for two minutes. You take notes of the three strongest points and object once.",
          "Say «Cambio» and the learner argues the opposite side for two minutes, without repeating the first arguments inverted.",
          "Debrief: which side was easier, and which structures appeared on each side?",
        ],
        language: "Concession (aunque, si bien, a pesar de que); counterargument (sin embargo, no obstante, en realidad); opinion with subjunctive (no creo que + subj.).",
        teacherTip: "Switching sides removes the fear of being judged for an opinion and makes the learner reach for concessive structures they would otherwise avoid.",
      },
      {
        name: "Negotiate with hidden priorities",
        minutes: 15,
        format: "Roleplay · two role cards with secret priorities",
        goal: "Reach a compromise while discovering what the other person wants.",
        steps: [
          "Scenario: two flatmates deciding how to spend a shared budget, or a client and a freelancer agreeing on a deadline and a price.",
          "Each card lists three priorities in secret order. Neither side may read the card aloud.",
          "Negotiate for eight minutes. Both must concede at least one priority and end with an explicit agreement.",
          "Reveal the cards and compare the result with each person's real priorities.",
        ],
        language: "Proposals and conditions (si aceptas…, estaría dispuesto a… siempre que…); conceding (de acuerdo, puedo aceptar que…); formal requests.",
        teacherTip: "The secret order of priorities turns a polite exchange into a real negotiation: the learner has to ask questions to find out what matters.",
      },
      {
        name: "Same message, three audiences",
        minutes: 10,
        format: "One-to-one · one message, three recipients",
        goal: "Control register and tone.",
        steps: [
          "Give one message: you cannot attend tomorrow's meeting; the delivery arrived damaged; you need a deadline moved.",
          "The learner says it to a close friend, then to a colleague, then to a client or official, out loud each time.",
          "Compare the three versions: which verbs, forms of address and softeners changed?",
          "Repeat with a new message, this time asking the learner to predict the changes before speaking.",
        ],
        language: "Tú / usted; indirect and softened requests (me preguntaba si…, ¿le sería posible…?); formal and informal connectors.",
        teacherTip: "Learners often know usted forms but never switch between registers in one breath. Three versions in a row make the contrast audible.",
      },
      {
        name: "Probable or merely possible?",
        minutes: 10,
        format: "One-to-one or small group · a photo of a puzzling situation",
        goal: "Speculate with calibrated certainty.",
        steps: [
          "Show an ambiguous picture: a suitcase left in a square, a lit office at three in the morning, two people arguing silently in a café.",
          "Ask what happened. The learner must give three explanations labelled by certainty: «Seguro que…», «Es probable que…», «Puede que…».",
          "Give one new clue and ask which explanation becomes more or less likely.",
          "Finish with the learner telling the most likely version as a short narrative in the past.",
        ],
        language: "Certainty scale with indicative and subjunctive (seguro que + ind., es probable que + subj., puede que + subj.); future and conditional of conjecture.",
        teacherTip: "Labelling the certainty is what produces the indicative / subjunctive contrast. Without the labels learners default to «creo que».",
      },
    ],
    scaffolds: [
      { es: "Aunque es cierto que …, en realidad …", en: "Although it is true that …, in reality …" },
      { es: "Estaría dispuesto a … siempre que …", en: "I would be willing to … as long as …" },
      { es: "Seguro que … / Es probable que … / Puede que …", en: "It is certainly … / It is probably … / It may be …" },
    ],
    pitfalls: [
      "Choosing topics the learner would struggle to discuss in their first language.",
      "Letting the teacher negotiate harder than the learner. Concede when the learner argues well.",
      "Treating register as a grammar point about usted. It is a listening and adjusting skill; practise the switch.",
    ],
    sampleQuestions: [
      { es: "¿Hasta qué punto crees que las redes sociales han cambiado la forma en que nos relacionamos?", en: "To what extent do you think social media has changed how we relate to each other?" },
      { es: "¿Deberían las ciudades limitar el número de turistas? Defiende las dos posturas.", en: "Should cities limit the number of tourists? Defend both positions." },
      { es: "¿Qué harías si tu mejor amigo te pidiera un consejo que no quieres dar?", en: "What would you do if your best friend asked you for advice you do not want to give?" },
      { es: "¿Es posible mantener una amistad a distancia durante años? ¿De qué depende?", en: "Is it possible to keep a friendship going at a distance for years? What does it depend on?" },
      { es: "¿Qué papel debería tener la tecnología en la educación de los niños?", en: "What role should technology play in children's education?" },
      { es: "¿Crees que el éxito profesional y la vida personal son compatibles? ¿Por qué?", en: "Do you think professional success and personal life are compatible? Why?" },
      { es: "¿Qué cambiaría en tu país si todos trabajaran cuatro días a la semana?", en: "What would change in your country if everyone worked four days a week?" },
      { es: "¿Cómo le explicarías a un cliente que un proyecto va a retrasarse?", en: "How would you explain to a client that a project is going to be delayed?" },
      { es: "¿Hay algo de lo que estabas convencido hace cinco años y que ahora ves de otra manera?", en: "Is there something you were convinced of five years ago that you now see differently?" },
      { es: "¿Qué es más valioso en un equipo: alguien brillante y difícil o alguien normal y fiable?", en: "What is more valuable in a team: someone brilliant and difficult or someone average and reliable?" },
      { es: "¿Hasta dónde llega la responsabilidad individual frente al cambio climático?", en: "How far does individual responsibility go when it comes to climate change?" },
      { es: "¿Qué consecuencias tendría que desapareciera el dinero en efectivo?", en: "What would the consequences be if cash disappeared?" },
    ],
    lessonIds: [206, 127, 125, 124, 207, 102, 101, 223, 226, 15],
    companionLessonIds: [133, 23, 219, 220, 117],
    guideSlugs: ["spanish-conversation-activities-by-level", "spanish-subjunctive-lesson-plan", "conversation-only-spanish-lesson"],
    faq: [
      {
        question: "How do I make B2 conversation harder without choosing heavier topics?",
        answer: "Change the task, not the subject. Arguing the opposite side, negotiating with hidden information or switching register all raise the linguistic demand while keeping vocabulary familiar.",
      },
      {
        question: "Should B2 learners prepare before speaking?",
        answer: "Give one minute of silent planning for debates and negotiations, then no notes while speaking. Preparation improves content; the no-notes rule keeps the language spontaneous.",
      },
      {
        question: "Which SpanishCue lessons suit B2 conversation classes?",
        answer: "Negotiation and dilemma worlds such as La Mesa de las Tres Ofertas or El Protocolo Aurora give B2 learners competing interests and consequences inside one visual scenario.",
      },
    ],
  },
  {
    code: "C1",
    slug: "c1",
    name: "Advanced",
    path: `${CONVERSATION_HUB_PATH}/c1`,
    title: "C1 Spanish Conversation Activities (Advanced) | SPANISHCUE",
    description:
      "C1 Spanish conversation activities: timed positions with cross-examination, reframing, hypotheses about the past and moderated panels, plus questions and lessons.",
    h1: "C1 Spanish Conversation Activities: Precision, Implicit Meaning and Extended Talk",
    eyebrow: "C1 · ADVANCED",
    summary: "Extended monologue under pressure, implicit meaning, hypotheses about the past and moderating other people's arguments.",
    intro: [
      "Advanced learners can talk about almost anything, which makes conversation classes deceptively easy to run and hard to make useful. The C1 learner needs tasks that expose the remaining gaps: sustaining a structured two-minute position, understanding and producing implicit meaning, handling hypotheses about the past, and managing other people's talk rather than only their own.",
      "The activities below put the learner under mild time pressure and ask for precision instead of fluency alone. Feedback at this level works best when it is delayed and specific: one lexical upgrade, one structural fix and one note about register per activity.",
    ],
    canDo: [
      "Hold a clear, well-structured position for two minutes and answer hostile questions.",
      "Recognise and produce implicit meaning, irony and understatement.",
      "Discuss hypothetical pasts and their consequences (si hubiera…, habría…).",
      "Moderate a discussion, summarise positions and reformulate what others say.",
    ],
    design: [
      "Add time limits and roles so fluency alone cannot carry the task.",
      "Ask for reformulation: the same content with a different stance, audience or tone.",
      "Make the learner responsible for other speakers' meaning, not only their own.",
      "Give feedback on precision and range, one upgrade at a time.",
    ],
    activities: [
      {
        name: "Two-minute position and cross-examination",
        minutes: 15,
        format: "One-to-one or small group · one proposition",
        goal: "Sustain a structured position under questioning.",
        steps: [
          "Give a proposition one minute in advance: universities should be free; remote work harms cities; translation apps make language learning unnecessary.",
          "The learner speaks for two timed minutes with an introduction, two arguments and a conclusion.",
          "Cross-examine for three minutes with questions designed to find contradictions, not to agree.",
          "Ask for a thirty-second revised position that absorbs the best objection.",
        ],
        language: "Discourse structure (en primer lugar, por otra parte, en definitiva); hedging and emphasis (cabe señalar, no cabe duda de que); handling interruptions (déjame terminar la idea).",
        teacherTip: "The revised position at the end is where advanced learners show real control: integrating an objection is harder than rebutting it.",
      },
      {
        name: "Reframe the headline",
        minutes: 10,
        format: "One-to-one · three short real or invented headlines",
        goal: "Express the same fact with a different stance and tone.",
        steps: [
          "Show a neutral headline: «El ayuntamiento cierra el centro al tráfico los domingos».",
          "The learner reports the news three times: as an enthusiastic supporter, as an angry shop owner, as an ironic columnist.",
          "Identify the words that carried the stance in each version: verbs, adjectives, intensifiers, word order.",
          "Repeat with a headline from the learner's own field or interests.",
        ],
        language: "Evaluative vocabulary; irony markers; nominalisation; emphasis and understatement.",
        teacherTip: "The ironic version is the hard one. If the learner cannot do it yet, model one line and let them continue; irony is learned by imitation.",
      },
      {
        name: "If things had gone differently",
        minutes: 12,
        format: "One-to-one · a personal or historical turning point",
        goal: "Hypothesise about the past and trace consequences.",
        steps: [
          "Choose a turning point: a career change, a city move, a historical decision the learner knows well.",
          "The learner describes what really happened in two or three sentences.",
          "Ask «¿Y si no hubiera pasado?». The learner traces three consequences with pluperfect subjunctive and conditional perfect.",
          "Push one consequence further: «¿Y eso qué habría cambiado a largo plazo?».",
        ],
        language: "Si + pluperfect subjunctive + conditional perfect (si hubiera sabido, habría…); de haber + participle; probability in the past (habrá sido, debió de ser).",
        teacherTip: "Historical turning points work better than personal ones for shy learners; personal ones produce more emotion and more language for the rest.",
      },
      {
        name: "Moderate the panel",
        minutes: 15,
        format: "One-to-one · teacher voices two opposing guests",
        goal: "Manage a discussion, summarise and reformulate.",
        steps: [
          "You play two panellists with opposite views on a topic; the learner is the moderator.",
          "The moderator introduces the topic, gives each guest the floor, interrupts politely when they go on too long and asks follow-up questions.",
          "Every few turns the moderator summarises: «Si te he entendido bien, lo que planteas es que…».",
          "Close with a one-minute wrap-up that represents both positions fairly.",
        ],
        language: "Turn management (perdona que te interrumpa, volvamos a…); reformulation (es decir, dicho de otro modo); reported speech and summarising.",
        teacherTip: "Moderating forces the learner to process other people's Spanish in real time and respond to it, the skill most advanced learners practise least.",
      },
    ],
    scaffolds: [
      { es: "Si te he entendido bien, lo que planteas es que …", en: "If I have understood you correctly, what you are suggesting is that …" },
      { es: "De haber sabido eso, habría …", en: "Had I known that, I would have …" },
      { es: "No cabe duda de que …, ahora bien, …", en: "There is no doubt that …; that said, …" },
    ],
    pitfalls: [
      "Mistaking fluency for accuracy. Record two minutes and listen together for range and precision.",
      "Agreeing with the learner during cross-examination. Your job for three minutes is to find the weak point.",
      "Correcting small slips live. Save feedback for three specific upgrades at the end.",
    ],
    sampleQuestions: [
      { es: "Si hubieras nacido en otra época, ¿cuál habrías elegido y por qué?", en: "If you had been born in another era, which would you have chosen and why?" },
      { es: "¿Qué decisión colectiva de tu país te parece más difícil de explicar a alguien de fuera?", en: "Which collective decision of your country is hardest to explain to an outsider?" },
      { es: "¿En qué medida el lenguaje que usamos condiciona lo que pensamos?", en: "To what extent does the language we use shape what we think?" },
      { es: "¿Qué argumento en contra de tu opinión te parece más sólido?", en: "Which argument against your own opinion seems strongest to you?" },
      { es: "¿Cómo distinguirías entre una tradición que merece conservarse y una que no?", en: "How would you distinguish between a tradition worth keeping and one that is not?" },
      { es: "¿Qué papel debería tener la ironía en el debate público?", en: "What role should irony play in public debate?" },
      { es: "¿Se puede ser objetivo al hablar del propio país?", en: "Can you be objective when talking about your own country?" },
      { es: "¿Qué aspecto de tu profesión suele malinterpretar la gente?", en: "Which aspect of your profession do people usually misunderstand?" },
      { es: "¿Qué habría pasado en tu vida si hubieras dicho no en un momento clave?", en: "What would have happened in your life if you had said no at a key moment?" },
      { es: "¿Hasta qué punto deberían las empresas opinar sobre temas sociales?", en: "To what extent should companies take positions on social issues?" },
      { es: "¿Qué palabra o expresión del español te parece imposible de traducir a tu lengua?", en: "Which Spanish word or expression seems impossible to translate into your language?" },
      { es: "Resume la postura de alguien con quien no estás de acuerdo sin caricaturizarla.", en: "Summarise the position of someone you disagree with without caricaturing it." },
    ],
    lessonIds: [128, 11, 207, 101, 102, 223, 226, 15],
    companionLessonIds: [134, 37, 119, 118],
    guideSlugs: ["spanish-conversation-activities-by-level", "conversation-only-spanish-lesson", "dele-preparation-private-tutor"],
    faq: [
      {
        question: "What should feedback look like in a C1 conversation class?",
        answer: "Delayed and specific. After each activity give one lexical upgrade, one structural fix and one register note. Live interruption at this level costs more fluency than it fixes.",
      },
      {
        question: "Are C1 conversation activities useful for DELE or SIELE preparation?",
        answer: "Yes. Timed positions, reformulation and moderated discussion mirror the oral tasks of those exams, without turning the lesson into exam drilling.",
      },
      {
        question: "Does SpanishCue have C1 conversation lessons?",
        answer: "Yes. La Agencia de Vidas Paralelas is a C1 conversation world, and several multi-level worlds have an authored C1 version with its own objectives and closing production.",
      },
    ],
  },
  {
    code: "C2",
    slug: "c2",
    name: "Mastery",
    path: `${CONVERSATION_HUB_PATH}/c2`,
    title: "C2 Spanish Conversation Activities: Style & Nuance | SPANISHCUE",
    description:
      "C2 Spanish conversation activities for near-native learners: untranslatable words, steelmanning, live register rewriting and editorial argument, plus questions.",
    h1: "C2 Spanish Conversation Activities: Work on Style, Nuance and Cultural Precision",
    eyebrow: "C2 · MASTERY",
    summary: "Style, humour, cultural precision and metalinguistic awareness: the conversation work that remains when grammar is no longer the problem.",
    intro: [
      "At C2 the question is no longer whether the learner can say something but whether they can say it the way an educated native speaker would choose to: with the right word, the right amount of irony, the right cultural reference. Conversation classes at this level are about style, nuance and awareness of the language itself.",
      "These activities treat the learner as a near-peer. They ask for definitions, steelmanning, live rewriting of register and sustained editorial argument, and they reward precision over volume. Many also work well as preparation for C2 exams and for professionals who already work in Spanish.",
    ],
    canDo: [
      "Explain subtle differences between near-synonyms and defend lexical choices.",
      "Present the strongest version of a position they reject.",
      "Shift register and style mid-sentence for effect, including humour and understatement.",
      "Sustain a long argumentative turn with cultural references and precise vocabulary.",
    ],
    design: [
      "Make language itself the topic: definitions, connotation, idiom, register.",
      "Reward the better word, not the longer answer.",
      "Ask for performance under constraint: a limit on words, a forbidden structure, a required tone.",
      "Treat the learner as a colleague; argue back as you would with a native speaker.",
    ],
    activities: [
      {
        name: "Untranslatable words",
        minutes: 12,
        format: "One-to-one or small group · five Spanish words with no direct equivalent",
        goal: "Define, exemplify and compare words with cultural weight.",
        steps: [
          "Present five words: sobremesa, estrenar, madrugar, empalagoso, tocayo.",
          "The learner explains each one to an imaginary speaker of their first language with a definition, a situation and a near-equivalent that fails.",
          "Challenge the definitions with edge cases: «¿Una sobremesa de diez minutos sigue siendo sobremesa?».",
          "Reverse: the learner proposes an untranslatable word from their own language and explains it in Spanish.",
        ],
        language: "Defining and exemplifying (se refiere a, consiste en, viene a ser); approximation (algo así como, una especie de); connotation vocabulary.",
        teacherTip: "The edge cases are the point. Defining a word is C1; defending its boundaries is C2.",
      },
      {
        name: "Steelman the position you reject",
        minutes: 15,
        format: "One-to-one · a view the learner disagrees with",
        goal: "Build the strongest honest version of an opposing argument.",
        steps: [
          "The learner names a view they reject, in or outside their professional field.",
          "They present that view in its strongest form for two minutes, as its most intelligent defender would, with no sarcasm.",
          "You respond as a sceptic of that view; the learner continues to defend it.",
          "Debrief: what did the exercise change in how the learner would argue their own view?",
        ],
        language: "Attributing without endorsing (desde esa perspectiva, quienes sostienen que…); precise concession; avoiding caricature.",
        teacherTip: "Ban irony for the first two minutes. Near-native learners use humour to escape positions they dislike; the task is to inhabit them.",
      },
      {
        name: "Rewrite the register live",
        minutes: 10,
        format: "One-to-one · a short spoken paragraph",
        goal: "Transform style on the fly while preserving meaning.",
        steps: [
          "The learner describes a recent experience in neutral, everyday Spanish for one minute.",
          "You name a style and the learner retells the same minute: a legal report, a stand-up routine, a nineteenth-century novel, a text message to a sibling.",
          "Change the style twice more without pause.",
          "Discuss which transformations needed new vocabulary and which only needed syntax and rhythm.",
        ],
        language: "Register markers across the spectrum; sentence length and rhythm; fixed expressions by genre.",
        teacherTip: "Call the next style while the learner is still talking. The lack of pause is what tests real command.",
      },
      {
        name: "The editorial",
        minutes: 15,
        format: "One-to-one · a cultural or professional topic",
        goal: "Deliver a sustained, stylish argumentative turn.",
        steps: [
          "Give a topic and a constraint: a three-minute spoken editorial that must include one cultural reference, one concession and one deliberate understatement.",
          "The learner prepares for two minutes with notes of five words maximum.",
          "They deliver it; you note range, precision and the three required elements.",
          "Feedback focuses on three lexical or stylistic upgrades, then the learner delivers the conclusion again with them.",
        ],
        language: "Argumentative structure at discourse level; cultural reference; understatement and emphasis; stylistic cohesion.",
        teacherTip: "The five-word note limit forces the learner to compose live rather than read, which is where style shows.",
      },
    ],
    scaffolds: [
      { es: "Viene a ser algo así como …, aunque no exactamente.", en: "It is something along the lines of …, though not exactly." },
      { es: "Quienes sostienen que … suelen argumentar que …", en: "Those who maintain that … usually argue that …" },
      { es: "Dicho con cierta ironía, …", en: "To put it with some irony, …" },
    ],
    pitfalls: [
      "Running the class as a chat between equals with no task. Pleasant, but it changes nothing.",
      "Praising fluency. At C2 the only useful feedback is about the better word or the sharper structure.",
      "Avoiding humour and irony because they are hard to teach. They are exactly what remains to learn.",
    ],
    sampleQuestions: [
      { es: "¿Qué palabra del español te parece intraducible y cómo se la explicarías a alguien que no la conoce?", en: "Which Spanish word seems untranslatable to you and how would you explain it to someone who does not know it?" },
      { es: "¿Qué diferencia hay entre ser educado y ser cortés? Da ejemplos.", en: "What is the difference between being polite and being courteous? Give examples." },
      { es: "Defiende con seriedad una opinión que te parece equivocada.", en: "Seriously defend an opinion you consider wrong." },
      { es: "¿Qué estilo de humor funciona en tu idioma y no funciona en español, o al revés?", en: "Which kind of humour works in your language but not in Spanish, or the other way round?" },
      { es: "¿Hay algún refrán o expresión cuya lógica te parezca discutible?", en: "Is there a saying or expression whose logic you find questionable?" },
      { es: "¿Cómo cambia un argumento cuando lo expresas con ironía en vez de con indignación?", en: "How does an argument change when you express it with irony instead of indignation?" },
      { es: "¿Qué texto, canción o película te enseñó más sobre la cultura hispanohablante que cualquier clase?", en: "Which text, song or film taught you more about Hispanic culture than any lesson?" },
      { es: "¿Qué matiz pierde una idea cuando se simplifica para el gran público?", en: "What nuance does an idea lose when it is simplified for a general audience?" },
      { es: "¿Qué registro usas peor en español: el muy formal o el muy coloquial? ¿Cómo lo notas?", en: "Which register do you handle worse in Spanish: very formal or very colloquial? How do you notice?" },
      { es: "¿Hasta qué punto una lengua puede pertenecer a quienes la aprendieron de adultos?", en: "To what extent can a language belong to those who learned it as adults?" },
      { es: "Describe el mismo hecho como lo contaría un abogado, un poeta y un adolescente.", en: "Describe the same event as a lawyer, a poet and a teenager would tell it." },
      { es: "¿Qué convención social de un país hispanohablante te costó más entender?", en: "Which social convention of a Spanish-speaking country was hardest for you to understand?" },
    ],
    lessonIds: [136, 129, 34, 203, 207, 101, 102, 223, 226, 15],
    companionLessonIds: [135, 156],
    guideSlugs: ["spanish-conversation-activities-by-level", "conversation-only-spanish-lesson", "rioplatense-spanish-tutoring-niche"],
    faq: [
      {
        question: "What do C2 learners still need from a conversation class?",
        answer: "Style, nuance and cultural precision. Grammar is rarely the problem; choosing the better word, controlling irony and shifting register deliberately are the remaining skills.",
      },
      {
        question: "How is a C2 conversation activity different from a native-speaker chat?",
        answer: "It has a constraint and a target: a required tone, a word limit, a position to defend honestly. The constraint is what turns pleasant conversation into practice.",
      },
      {
        question: "Which SpanishCue lessons are designed for C2?",
        answer: "La Cámara de Presión, El Ministerio de las Versiones, El Monasterio de las Ideas and El museo de las decisiones are C2 conversation worlds built around precision, versions of the truth and high-stakes decisions.",
      },
    ],
  },
];

export const conversationLevelBySlug = new Map(conversationLevels.map((level) => [level.slug, level]));
export const conversationLevelByCode = new Map(conversationLevels.map((level) => [level.code, level]));

export function adjacentLevels(level: ConversationLevel): { previous?: ConversationLevel; next?: ConversationLevel } {
  const index = conversationLevels.indexOf(level);
  return { previous: conversationLevels[index - 1], next: conversationLevels[index + 1] };
}
