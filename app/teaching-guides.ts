export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TeachingGuide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readingTime: string;
  keywords: string[];
  sections: GuideSection[];
  relatedHref: string;
  relatedLabel: string;
  relatedLessonIds?: number[];
};

export const teachingGuides: TeachingGuide[] = [
  {
    slug: "how-to-teach-spanish-online",
    title: "How to Teach Spanish Online Without Rebuilding Every Lesson",
    description:
      "A practical system for online Spanish teachers: define one outcome, reduce prep, sequence input and speaking, and reuse lesson structures without making classes repetitive.",
    eyebrow: "ONLINE TEACHING",
    readingTime: "7 min",
    keywords: [
      "how to teach Spanish online",
      "online Spanish teacher resources",
      "Spanish lesson planning",
      "teach Spanish online",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse ready-to-teach Spanish resources",
    sections: [
      {
        heading: "Start with one outcome, not a pile of activities",
        paragraphs: [
          "The fastest way to overprepare is to collect activities before deciding what the student should be able to do by the end of the lesson. For a 45-minute class, choose one observable outcome: narrate a past event, compare two options, give advice, sustain a five-minute conversation, distinguish two vowel sounds, or use a target structure in a realistic exchange.",
          "Once the outcome is clear, every task has a job. If an activity does not prepare the student for the final performance, remove it. This keeps the class coherent and makes it much easier to reuse the same lesson architecture with different students.",
        ],
      },
      {
        heading: "Use a repeatable lesson sequence",
        bullets: [
          "Activate: a short prompt that makes the topic personally relevant.",
          "Notice: expose the target language in a compact example, dialogue, visual or listening segment.",
          "Control: give the student a short task where the form or vocabulary is still supported.",
          "Expand: add a decision, contrast, problem or opinion so the student has to choose language rather than copy it.",
          "Perform: finish with a conversation, role-play, explanation or mini-task that proves the lesson objective was reached.",
        ],
        paragraphs: [
          "The content can change while the sequence stays stable. That is the useful kind of repetition: the teacher stops inventing the entire class from zero, while the student still encounters new language and new communicative problems.",
        ],
      },
      {
        heading: "Design for the screen you actually teach on",
        paragraphs: [
          "Online lessons fail when materials depend on tiny text, constant tab switching or instructions that take longer to explain than the activity itself. A screen-share lesson should make the next action obvious. Keep prompts visible, separate teacher notes from student-facing content, and avoid requiring the student to manage multiple windows unless that is part of the task.",
          "Visual hierarchy matters more online than in a printed worksheet. One screen should answer three questions immediately: what are we doing, what language do I need, and what do I do next?",
        ],
      },
      {
        heading: "Reduce prep by reusing structures, not identical lessons",
        paragraphs: [
          "A reusable system is not a script. Keep the instructional skeleton and change the situation, vocabulary, level of support and final task. A ranking activity can become travel choices at A2, workplace priorities at B1 and ethical trade-offs at C1. A role-play frame can work for a restaurant, apartment viewing, job interview or disagreement.",
          "The goal is to spend teacher time on adaptation and feedback, not on rebuilding slides every day. That is also why a searchable lesson library can be more useful than an ever-growing folder of disconnected PDFs.",
        ],
      },
    ],
  },
  {
    slug: "spanish-lesson-planning-45-minutes",
    title: "How to Plan a 45-Minute Spanish Lesson",
    description:
      "A practical 45-minute Spanish lesson plan for online and in-person teachers, with timing, sequencing, speaking time and a clear final task.",
    eyebrow: "LESSON PLANNING",
    readingTime: "6 min",
    keywords: [
      "Spanish lesson plan 45 minutes",
      "Spanish lesson planning",
      "lesson plan for Spanish teachers",
      "online Spanish lesson plan",
    ],
    relatedHref: "/spanish-teacher-resources",
    relatedLabel: "Explore Spanish teacher resources",
    sections: [
      {
        heading: "Minutes 0–5: activate what the student already has",
        paragraphs: [
          "Open with a prompt the student can answer immediately. The purpose is diagnostic as much as conversational: you hear what vocabulary, grammar and pronunciation are already available before adding new material.",
          "Avoid turning the warm-up into a second lesson. One visual, question or quick choice is enough. The warm-up should create a bridge to the target, not consume the target.",
        ],
      },
      {
        heading: "Minutes 5–15: introduce the target in context",
        paragraphs: [
          "Present the language inside a short situation, example set, dialogue, image sequence or listening segment. Give the student something to notice before giving a long explanation. Ask what changes, what repeats, what contrast they see, or what meaning each form seems to create.",
          "Explanation should solve a problem the student has already seen. This makes grammar or vocabulary easier to attach to meaning and keeps teacher talk under control.",
        ],
      },
      {
        heading: "Minutes 15–30: move from supported to flexible practice",
        bullets: [
          "First task: high support, narrow answer range.",
          "Second task: same target, but with a choice or information gap.",
          "Third task: student must personalize, justify or react.",
        ],
        paragraphs: [
          "This middle block is where many lessons become worksheet-heavy. The correction is not necessarily fewer exercises, but more variation in what the learner must do with the language. Recognition can lead to completion, then to choice, then to production.",
        ],
      },
      {
        heading: "Minutes 30–42: make the student perform",
        paragraphs: [
          "End the teaching sequence with a task that would be impossible to complete well without using the lesson target. It can be a role-play, decision, story, explanation, comparison or problem-solving task. The final task should feel like communication, not a disguised grammar test.",
          "During this phase, collect errors selectively. Interrupt only when the error blocks meaning or when immediate correction is necessary for the target. Otherwise, note patterns and debrief afterward.",
        ],
      },
      {
        heading: "Minutes 42–45: retrieve and close",
        paragraphs: [
          "Ask the student to produce two or three examples without looking at the material, summarize the rule in their own words, or answer the opening prompt again with stronger language. The final minutes should show what changed during the class.",
          "If you assign homework, keep it narrow. Repeated retrieval of the same target is usually more useful than sending a large mixed worksheet that the student may never complete.",
        ],
      },
    ],
  },
  {
    slug: "how-to-teach-spanish-grammar-communicatively",
    title: "How to Teach Spanish Grammar Communicatively",
    description:
      "Teach Spanish grammar through meaning, contrast and speaking instead of isolated rule explanation. A practical framework for grammar lessons that still produce real communication.",
    eyebrow: "GRAMMAR",
    readingTime: "8 min",
    keywords: [
      "how to teach Spanish grammar",
      "communicative Spanish grammar",
      "Spanish grammar activities",
      "Spanish teacher grammar resources",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse Spanish grammar lessons",
    sections: [
      {
        heading: "Do not choose between grammar and communication",
        paragraphs: [
          "A grammar lesson becomes non-communicative when the form is practised without a meaningful decision. The solution is not to remove grammar explanations. It is to connect the form to a contrast the learner needs to express.",
          "Instead of teaching a tense as a list of endings, teach what changes when the speaker chooses that tense. Instead of presenting pronouns as a table, show what information can be omitted, repeated or highlighted because the pronoun exists.",
        ],
      },
      {
        heading: "Build the lesson around a contrast",
        bullets: [
          "ser vs. estar: identity or classification versus state, condition or situated description.",
          "pretérito vs. imperfecto: event boundary versus background, habit or unfolding scene.",
          "indicative vs. subjunctive: assertion versus stance, evaluation, uncertainty, desire or non-assertion.",
          "por vs. para: cause, route or exchange versus purpose, destination or intended recipient.",
        ],
        paragraphs: [
          "The exact linguistic explanation can become more sophisticated at higher levels, but the teaching principle remains useful: give students two forms that compete for the same communicative space and make them choose between them.",
        ],
      },
      {
        heading: "Move from recognition to choice to production",
        paragraphs: [
          "Recognition tasks are useful at the beginning because they reduce cognitive load. But a learner who can identify the correct answer may still be unable to produce it in conversation. After recognition, require a choice with a reason. After that, require the student to create an example where the choice matters.",
          "A strong grammar lesson therefore contains a progression: notice the form, interpret it, choose it, manipulate it, then use it for a communicative purpose.",
        ],
      },
      {
        heading: "Correct the target, not every sentence",
        paragraphs: [
          "If the objective is the imperfect, track the imperfect closely. Do not interrupt every article, preposition and pronunciation issue unless it blocks communication. Selective correction makes the lesson more coherent and gives the student a clear signal about what matters today.",
          "At the end, return to two or three recurrent errors and ask the student to repair them. The repair itself becomes retrieval practice.",
        ],
      },
    ],
  },
  {
    slug: "psycholinguistics-for-spanish-teachers",
    title: "Psycholinguistics for Spanish Teachers: Principles You Can Use in Class",
    description:
      "A practical introduction to psycholinguistic ideas that matter in Spanish lessons: retrieval, spacing, attention, cognitive load, output and meaningful repetition.",
    eyebrow: "TEACHING SCIENCE",
    readingTime: "9 min",
    keywords: [
      "psycholinguistics for language teachers",
      "psycholinguistics Spanish teaching",
      "language learning science teachers",
      "Spanish teaching methodology",
    ],
    relatedHref: "/resources",
    relatedLabel: "See the principles applied in ready-to-teach lessons",
    sections: [
      {
        heading: "The useful question is not “what method is best?”",
        paragraphs: [
          "Psycholinguistics is useful to teachers when it helps explain what the learner has to notice, retrieve, process and produce. It is less useful when it becomes a label for one rigid teaching method.",
          "In practice, the teacher controls conditions for learning: how much information appears at once, when a form returns, whether the student only recognizes it or has to retrieve it, and whether the final task creates a real reason to use it.",
        ],
      },
      {
        heading: "Retrieval is different from re-reading",
        paragraphs: [
          "Seeing the answer again can create familiarity without reliable access. A learner needs chances to produce the word, form or distinction without simply copying it from the screen. That can be as small as closing the example and asking for two new sentences.",
          "For teachers, this means the final minutes of a lesson should not be only a summary delivered by the teacher. Make the student retrieve the target: explain it, use it, contrast it or repair an earlier error.",
        ],
      },
      {
        heading: "Spacing means the lesson should come back later",
        paragraphs: [
          "A successful class does not guarantee durable learning. Important language needs to reappear after time has passed. The return does not need to be a full repeat of the original lesson. A two-minute prompt next class, a recycled role-play or a later activity that requires the same structure can reactivate it.",
          "This is one reason reusable lesson systems work well when they are organized by level and target: the teacher can deliberately revisit previous language instead of hoping it returns by accident.",
        ],
      },
      {
        heading: "Manage cognitive load before blaming the student",
        paragraphs: [
          "A learner can know the grammar and still fail in a task because the screen contains too many instructions, new words, exceptions and decisions at once. Reduce unnecessary processing before increasing explanation.",
          "Split complex tasks into stages, keep reference language visible when the goal is meaning, and remove support only when retrieval is the goal. Difficulty should come from the language decision you want to train, not from confusing interface design.",
        ],
      },
      {
        heading: "Output reveals what input alone can hide",
        paragraphs: [
          "Students can understand a form long before they can access it quickly in speech. Production exposes gaps in vocabulary, morphology, word order and pronunciation that remain invisible during passive comprehension.",
          "That is why a lesson should end with some form of output. The task does not need to be theatrical. A comparison, explanation, mini-story, ranking or decision can create enough pressure for the learner to assemble language rather than recognize it.",
        ],
      },
      {
        heading: "Meaningful repetition beats novelty for its own sake",
        paragraphs: [
          "Teachers often feel pressure to make every class completely different. Learners benefit from recurring task structures because fewer instructions are new and more attention can go to language. Repetition becomes boring mainly when the communicative content never changes.",
          "Keep the frame and vary the decision. Keep the role-play structure and change the situation. Keep the target form and revisit it with a different topic. This is repetition with a purpose, not duplication.",
        ],
      },
    ],
  },
  {
    slug: "spanish-conversation-activities-by-level",
    title: "Spanish Conversation Activities by CEFR Level",
    description:
      "Choose Spanish conversation activities by CEFR level, from supported A1 exchanges to B2–C1 discussion tasks that require nuance, justification and spontaneous language.",
    eyebrow: "CONVERSATION",
    readingTime: "7 min",
    keywords: [
      "Spanish conversation activities",
      "Spanish speaking activities",
      "Spanish conversation activities A1 A2 B1 B2",
      "Spanish teacher conversation resources",
    ],
    relatedHref: "/spanish-conversation-activities",
    relatedLabel: "Browse Spanish conversation activities",
    sections: [
      {
        heading: "A1: make speaking possible before making it open-ended",
        paragraphs: [
          "Beginners need a narrow communicative space. Use visible options, sentence starters, pictures and repeated question frames. Good A1 tasks include choosing between two plans, describing a simple routine, ordering from a short menu, identifying a person or asking for basic information.",
          "The activity should still contain a real choice. A learner can communicate meaningfully with limited language if the task is designed around language they actually have.",
        ],
      },
      {
        heading: "A2: add variation and small problems",
        paragraphs: [
          "At A2, keep support but introduce consequences. Ask students to plan a weekend with constraints, solve a travel problem, compare apartments, react to social situations or decide what to do when a plan changes.",
          "The language remains concrete, but the learner now has to combine known forms rather than repeat a single model.",
        ],
      },
      {
        heading: "B1: require reasons and narrative",
        paragraphs: [
          "B1 tasks should push beyond short answers. Use ranking activities, personal stories, dilemmas, recommendations, hypothetical plans and role-plays where each person has different information or priorities.",
          "A useful test is whether the student must connect several sentences to complete the task. If every response can be one sentence, the activity may not be creating enough discourse.",
        ],
      },
      {
        heading: "B2 and above: design for nuance, not just difficult topics",
        paragraphs: [
          "Advanced conversation does not require talking about geopolitics every week. Complexity can come from ambiguity, competing values, register, persuasion, uncertainty or incomplete information.",
          "Ask students to defend a position and then switch sides, negotiate a compromise, distinguish what is probable from what is merely possible, or reformulate the same message for a friend, client and formal audience.",
        ],
      },
      {
        heading: "The level changes the support, not only the topic",
        paragraphs: [
          "The same theme can work across several levels if the linguistic demand changes. Travel at A1 can be choosing a destination from three options. At B1 it can be planning under a budget. At C1 it can be debating tourism policy or negotiating conflicting priorities.",
          "When building a conversation library, tag activities by the language operation they require, not only by topic. That makes it much easier to choose a task that fits what the student can actually do.",
        ],
      },
    ],
  },
  {
    slug: "how-to-teach-ser-vs-estar",
    title: "How to Teach Ser vs. Estar Without Turning It Into a Memorization List",
    description:
      "A practical ser vs. estar lesson framework for Spanish teachers: teach the contrast through meaning, context, adjective changes and communicative choices.",
    eyebrow: "GRAMMAR · A1–A2",
    readingTime: "7 min",
    keywords: [
      "how to teach ser vs estar",
      "ser vs estar lesson plan",
      "ser vs estar activities",
      "Spanish ser estar teacher resources",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse Spanish grammar lessons",
    relatedLessonIds: [48],
    sections: [
      {
        heading: "Teach a decision, not two columns of rules",
        paragraphs: [
          "Students often receive ser and estar as two long lists: permanent versus temporary, identity versus condition, origin versus location, and several exceptions. The problem is not that the rules are useless. The problem is that a learner in conversation does not have time to scan two lists before choosing a verb.",
          "Build the lesson around the decision the speaker is making. Ser classifies or identifies; estar locates or presents a state in a particular situation. That contrast is not perfect in every sentence, but it gives students a usable starting point that can later be refined.",
        ],
      },
      {
        heading: "Start with pairs where the choice clearly changes the message",
        bullets: [
          "Es aburrido / Está aburrido: characteristic versus current state.",
          "Es listo / Está listo: clever versus ready.",
          "Es rico / Está rico: wealthy versus tasting good.",
          "Es seguro / Está seguro: safe or reliable versus certain.",
        ],
        paragraphs: [
          "Pairs force the student to interpret meaning before conjugating. Ask which sentence fits a person, a place, a meal or a situation. Then ask the learner to invent a context where the other option would be correct.",
        ],
      },
      {
        heading: "Move from visible support to a real speaking choice",
        paragraphs: [
          "Begin with images or short descriptions where students choose ser or estar and explain why. Next, remove the labels and give them a situation: describe a new coworker, explain how a neighborhood usually is versus how it is tonight, or compare a restaurant's identity with today's experience.",
          "The final task should require both verbs naturally. A useful prompt is to describe a place twice: first as a general recommendation and then as a live report from today. The language target becomes necessary because the communicative perspective changes.",
        ],
      },
      {
        heading: "Correct the contrast before correcting every conjugation",
        paragraphs: [
          "If the lesson objective is ser versus estar, prioritize whether the learner selected the verb that matches the intended meaning. A missed adjective ending can be noted, but it should not bury the main distinction.",
          "Close by recycling two or three sentences the student produced. Change the context and ask whether the verb should stay the same. That turns correction into another meaning decision instead of a final list of errors.",
        ],
      },
    ],
  },
  {
    slug: "preterite-vs-imperfect-activities",
    title: "Preterite vs. Imperfect Activities That Make Students Choose a Perspective",
    description:
      "Teach Spanish preterite vs. imperfect through event boundaries, background, habits and narrative perspective, with activities that move from contrast to storytelling.",
    eyebrow: "GRAMMAR · A2–B1",
    readingTime: "8 min",
    keywords: [
      "preterite vs imperfect activities",
      "how to teach preterite vs imperfect",
      "preterite imperfect lesson plan",
      "Spanish past tense activities",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse Spanish past-tense lessons",
    relatedLessonIds: [142, 143],
    sections: [
      {
        heading: "Do not teach the contrast as a keyword detector",
        paragraphs: [
          "Signal words can help beginners notice patterns, but they become a trap when students believe ayer automatically means preterite or siempre automatically means imperfect. The more useful question is how the speaker presents the past event.",
          "The preterite presents an event or sequence with a boundary. The imperfect opens the scene from inside: description, background, habit or an action in progress. Students need to see that both forms can appear in the same story because they do different jobs.",
        ],
      },
      {
        heading: "Activity 1: background or event?",
        paragraphs: [
          "Show a simple scene with five facts. Some describe the situation and others move the story forward. Ask students to sort them into background and event before they conjugate anything.",
          "Then turn the same scene into a two-column timeline. Students narrate the background with the imperfect and add completed events with the preterite. Because the conceptual choice comes first, the conjugation has a reason.",
        ],
      },
      {
        heading: "Activity 2: freeze the story and change the camera",
        paragraphs: [
          "Give a sentence such as Cuando llegué, Ana hablaba con el gerente. Ask what the camera is doing with each verb. Then change one form and discuss how the scene changes.",
          "This works especially well with short image sequences. One student describes what was happening; the other introduces the event that interrupted or advanced the story. Swap roles so both students must use both perspectives.",
        ],
      },
      {
        heading: "Activity 3: build a story with two layers",
        bullets: [
          "Layer one: weather, location, age, mood, habits and ongoing actions.",
          "Layer two: arrivals, discoveries, decisions, interruptions and completed actions.",
          "Final round: the student retells the story without seeing the tense labels.",
        ],
        paragraphs: [
          "The last retelling is the useful test. If students can narrate while choosing a perspective, they are doing more than completing a worksheet. Use their own story for correction, then ask them to retell one section after you change a detail.",
        ],
      },
    ],
  },
  {
    slug: "spanish-subjunctive-lesson-plan",
    title: "A Spanish Subjunctive Lesson Plan That Starts With Meaning",
    description:
      "A practical present-subjunctive lesson plan for Spanish teachers: establish the indicative/subjunctive contrast, introduce triggers in context and finish with real choices.",
    eyebrow: "GRAMMAR · B1",
    readingTime: "8 min",
    keywords: [
      "Spanish subjunctive lesson plan",
      "how to teach Spanish subjunctive",
      "subjunctive activities Spanish",
      "present subjunctive lesson",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse Spanish subjunctive resources",
    relatedLessonIds: [148, 149, 150],
    sections: [
      {
        heading: "Begin with the speaker's stance before the trigger list",
        paragraphs: [
          "A trigger list can be useful for review, but it is a poor first mental model. Students need to understand why Spanish sometimes presents information as asserted and sometimes places it inside desire, evaluation, doubt, purpose or another non-assertive frame.",
          "Start with paired meanings rather than acronyms. Compare Creo que viene with No creo que venga, or Sé que está aquí with Es posible que esté aquí. Ask what the speaker commits to in each sentence.",
        ],
      },
      {
        heading: "Make the clause relationship visible",
        paragraphs: [
          "Write the main clause and subordinate clause separately. The first clause creates the stance; que opens the second proposition; the verb form marks how that proposition is being presented.",
          "This visual separation prevents students from treating the subjunctive as a random ending that appears after certain words. They can see which part of the sentence licenses the choice and which verb actually changes.",
        ],
      },
      {
        heading: "Use four communicative zones before expanding",
        bullets: [
          "Wants and influence: quiero que, necesito que, recomiendo que.",
          "Evaluation and reaction: me alegra que, es importante que.",
          "Doubt and possibility: dudo que, es posible que.",
          "Purpose and future reference in dependent clauses: para que, cuando + future event.",
        ],
        paragraphs: [
          "Keep the first lesson narrow. Students do not need every trigger on day one. Give each zone a short situation and make the learner choose what they genuinely want, doubt, recommend or evaluate.",
        ],
      },
      {
        heading: "Finish with a task where indicative and subjunctive compete",
        paragraphs: [
          "A strong final task should not allow the learner to use the subjunctive mechanically in every sentence. Use a planning problem, advice scenario or set of uncertain claims where some information is asserted and some is desired, doubted or evaluated.",
          "During feedback, ask first whether the stance and mood match. Then repair the form. That ordering protects the meaning distinction instead of reducing the lesson to conjugation accuracy.",
        ],
      },
    ],
  },
  {
    slug: "spanish-imperative-activities",
    title: "Spanish Imperative Activities for Commands, Advice and Instructions",
    description:
      "Teach affirmative and negative Spanish commands through instructions, coaching, warnings and real-time tasks instead of isolated conjugation drills.",
    eyebrow: "GRAMMAR + SPEAKING · A2",
    readingTime: "7 min",
    keywords: [
      "Spanish imperative activities",
      "Spanish commands lesson plan",
      "imperative Spanish activities",
      "affirmative negative commands Spanish",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse imperative and speaking lessons",
    relatedLessonIds: [145, 216],
    sections: [
      {
        heading: "Give the imperative a job immediately",
        paragraphs: [
          "Commands make sense when another person can actually follow them. Instead of beginning with a conjugation chart, begin with a task: guide someone through a drawing, direct a workout, explain a recipe, troubleshoot a device or give classroom instructions.",
          "The learner hears and produces forms in a context where precision matters. Abrí la puerta and no abras la puerta create different outcomes, so affirmative and negative forms stop feeling like two disconnected tables.",
        ],
      },
      {
        heading: "Separate the systems before mixing them",
        paragraphs: [
          "Spanish commands vary by person and variety, and negative commands rely on the present subjunctive. Teach one audience at a time. If your students need tú first, keep the first practice there; if they use vos, make that variety explicit rather than treating it as an exception.",
          "Once one system is stable, compare it with usted, ustedes or another relevant form. The goal is not to display every possibility at once but to help students direct a real listener accurately.",
        ],
      },
      {
        heading: "Use information gaps that punish vague instructions",
        bullets: [
          "One student sees a route; the other must reach the destination.",
          "One student sees an image; the other must recreate it.",
          "One student is the trainer; the other follows the routine.",
          "One student knows the safety rules; the other keeps making mistakes.",
        ],
        paragraphs: [
          "These tasks naturally create repetition without requiring identical sentences. They also reveal whether the student can retrieve commands quickly enough to use them in interaction.",
        ],
      },
      {
        heading: "Add pronouns only after the action is clear",
        paragraphs: [
          "Attached and detached pronouns increase the processing load: decime, dámelo, no me digas, no se lo des. Build the command first, then add the object. Students can physically point to what each pronoun replaces before producing the complete form.",
          "End with a rapid coaching round where the student must alternate affirmative and negative instructions. Correct only the command system during the round; debrief other errors afterward.",
        ],
      },
    ],
  },
  {
    slug: "spanish-direct-indirect-object-pronouns",
    title: "How to Teach Spanish Direct and Indirect Object Pronouns Visually",
    description:
      "A visual, communicative way to teach Spanish direct and indirect object pronouns: track who acts, what is affected and who receives the result.",
    eyebrow: "GRAMMAR · A1–A2",
    readingTime: "8 min",
    keywords: [
      "how to teach Spanish object pronouns",
      "direct indirect object pronouns Spanish lesson",
      "Spanish object pronoun activities",
      "OD OI Spanish teaching",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse Spanish pronoun lessons",
    relatedLessonIds: [46, 106],
    sections: [
      {
        heading: "Teach the relationship before the pronoun",
        paragraphs: [
          "Students struggle when pronouns are introduced as a replacement chart before they know what is being replaced. Start with a small scene: Ana sends the photo to Luis. Identify the actor, the thing affected and the recipient.",
          "Only then replace the noun phrases: Ana la envía a Luis; Ana le envía la foto; Ana se la envía. Each pronoun should solve a visible repetition problem, not appear as an abstract grammar code.",
        ],
      },
      {
        heading: "Use three fixed questions",
        bullets: [
          "Who performs the action?",
          "What or whom does the action directly affect?",
          "To whom or for whom is the result directed?",
        ],
        paragraphs: [
          "The wording can be adapted to the learner, but the roles should stay stable. Color, position or icons can help at first, especially when the same person could be either a direct or indirect object depending on the verb.",
        ],
      },
      {
        heading: "Delay double pronouns until single pronouns are automatic enough",
        paragraphs: [
          "Students need separate practice with lo/la/los/las and le/les before combining them. Move from full nouns to one replacement at a time, then ask whether the sentence still contains another repeated element.",
          "When se replaces le or les before a direct-object pronoun, teach it as a form change inside the combination rather than as a new mysterious meaning. Keep the original noun visible during the first few examples.",
        ],
      },
      {
        heading: "Finish with transfer, not substitution",
        paragraphs: [
          "A substitution worksheet checks whether students can transform a sentence they already understand. A speaking task checks whether they can decide what can be omitted in real time.",
          "Use a delivery desk, gift exchange, restaurant order or message relay. Give each participant objects and recipients, then remove the nouns gradually. The pronouns become useful because repetition becomes inconvenient.",
        ],
      },
    ],
  },
  {
    slug: "spanish-possessive-adjectives-lesson",
    title: "Spanish Possessive Adjectives: A Lesson Built Around Who Owns What",
    description:
      "Teach mi, tu, su and nuestro by separating the owner from the thing owned, then move into ambiguity, agreement and communicative practice.",
    eyebrow: "GRAMMAR · A1",
    readingTime: "6 min",
    keywords: [
      "Spanish possessive adjectives lesson",
      "possessive adjectives Spanish activities",
      "how to teach mi tu su nuestro",
      "Spanish possessives lesson plan",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse beginner Spanish grammar lessons",
    relatedLessonIds: [44],
    sections: [
      {
        heading: "Separate the owner from the possessed item",
        paragraphs: [
          "English-speaking learners often try to make the possessive agree with the owner. Spanish short possessives agree with the thing possessed: nuestro coche, nuestra casa, nuestros coches, nuestras casas.",
          "Put the owner on one side of the screen and the object on the other. Ask two questions every time: who owns it, and what is the thing? The first question selects the possessive family; the second controls number and, with nuestro/vuestro, gender.",
        ],
      },
      {
        heading: "Teach su as an ambiguity problem",
        paragraphs: [
          "Su can refer to several possible owners. That is not a mistake in the language; it is a communication problem speakers solve with context or clarification.",
          "Give students deliberately ambiguous examples and ask them to repair them with de + person when needed: su coche can become el coche de Ana. This turns ambiguity into a useful speaking decision.",
        ],
      },
      {
        heading: "Use objects that actually belong to someone",
        paragraphs: [
          "Photos of a room, suitcase, desk or shared apartment work well because ownership can change. Assign objects to several people and ask students to describe them. Then move one object to a new owner and require an immediate reformulation.",
          "For online lessons, a simple drag-and-drop or pointing task can create enough variation to repeat the same forms without turning the activity into a list of disconnected sentences.",
        ],
      },
      {
        heading: "Finish by removing the visual labels",
        paragraphs: [
          "The final task should make students retrieve the possessive without a color key or table. Ask them to describe a shared house, plan what each traveler brings, or solve a lost-and-found problem.",
          "If a learner says su and the owner is unclear, do not immediately correct the grammar. Ask ¿de quién? and make the student repair the message. That is exactly the communicative problem the form can create.",
        ],
      },
    ],
  },
  {
    slug: "spanish-demonstratives-lesson",
    title: "Spanish Demonstratives: How to Teach Este, Ese and Aquel Through Distance",
    description:
      "A visual lesson framework for Spanish demonstratives, including este, ese, aquel, agreement and the neutral forms esto, eso and aquello.",
    eyebrow: "GRAMMAR · A1",
    readingTime: "6 min",
    keywords: [
      "Spanish demonstratives lesson",
      "este ese aquel activities",
      "Spanish demonstrative adjectives",
      "how to teach Spanish demonstratives",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse beginner Spanish grammar lessons",
    relatedLessonIds: [43],
    sections: [
      {
        heading: "Make distance visible before explaining the paradigm",
        paragraphs: [
          "Demonstratives are deictic: their meaning depends on the speaker's point of reference. That makes them ideal for a visual lesson. Put objects in three zones and let students point before they see a complete chart.",
          "Use este for the near zone, ese for an intermediate or addressee-oriented zone, and aquel for a clearly distant zone. Once the spatial contrast is understood, add gender and number.",
        ],
      },
      {
        heading: "Change only one variable at a time",
        paragraphs: [
          "Start with masculine singular objects so distance is the only decision. Then keep distance fixed and change gender. Finally change number. This prevents students from solving three new problems at once.",
          "After the forms are stable, mix everything and make the student explain the choice. A correct answer with a reason is more diagnostic than a fast guess.",
        ],
      },
      {
        heading: "Introduce esto, eso and aquello as noun-free forms",
        paragraphs: [
          "Neutral demonstratives are especially useful when the speaker points to an idea, situation or unidentified thing rather than a named noun. Contrast este problema with esto to show that the neutral form does not accompany a noun.",
          "Use screenshots, strange objects or short scenarios and ask ¿Qué es esto? or ¿Qué pensás de eso? The learner can use the forms before needing a precise noun.",
        ],
      },
      {
        heading: "Move from physical distance to discourse distance",
        paragraphs: [
          "Once students control spatial reference, extend the idea to time and discourse: esta semana, ese día, aquella época, eso que dijiste. The system becomes broader without requiring a new memorized table.",
          "A strong final task is a virtual gallery. The student guides another person through near, medium and distant items, then refers back to comments made earlier in the conversation.",
        ],
      },
    ],
  },
  {
    slug: "spanish-articles-el-la-un-una",
    title: "How to Teach Spanish Articles: El, La, Un, Una and When to Use No Article",
    description:
      "Teach Spanish definite and indefinite articles through reference, introduction, known information and zero-article contexts instead of isolated gender drills.",
    eyebrow: "GRAMMAR · A1",
    readingTime: "7 min",
    keywords: [
      "Spanish articles lesson plan",
      "how to teach el la un una",
      "Spanish definite indefinite articles activities",
      "Spanish articles for beginners",
    ],
    relatedHref: "/spanish-grammar-lessons",
    relatedLabel: "Browse beginner Spanish grammar lessons",
    relatedLessonIds: [42, 40, 41],
    sections: [
      {
        heading: "Teach reference and gender together, but not as the same problem",
        paragraphs: [
          "Students need to make two decisions: which noun class the word belongs to, and whether the speaker is presenting a specific or identifiable referent. If both decisions are introduced as one giant table, article choice becomes a guessing exercise.",
          "Use a small noun set first. Establish el/la and un/una with nouns the learner already knows, then ask what changes in meaning when a new object becomes a known one.",
        ],
      },
      {
        heading: "Use the new-to-known sequence",
        paragraphs: [
          "Mini-stories make article choice visible: Hay un perro en la calle. El perro tiene una mochila. La mochila está abierta. Each first mention introduces something; the following reference treats it as identifiable.",
          "Students can build their own three-sentence chains from pictures. This gives articles a discourse function instead of reducing them to vocabulary decoration.",
        ],
      },
      {
        heading: "Teach absence of article as a real option",
        paragraphs: [
          "Beginner materials sometimes imply that every noun must carry an article. Introduce frequent zero-article patterns only when students have a stable core: professions after ser in basic classification, some fixed expressions and plural or mass nouns used generically in certain structures.",
          "Do not flood the first lesson with exceptions. The goal is for students to notice that article choice carries meaning and that no article can also be a grammatical choice.",
        ],
      },
      {
        heading: "Connect articles to adjective agreement",
        paragraphs: [
          "Articles are an early anchor for noun-phrase agreement. Once the noun and article are stable, add a simple adjective and make the learner track the whole phrase: una casa blanca, las casas blancas.",
          "Finish with a visual description task where students introduce objects, refer back to them and add one adjective. That single activity recycles articles, gender, number and agreement in a coherent context.",
        ],
      },
    ],
  },

];

export const teachingGuideBySlug = new Map(teachingGuides.map((guide) => [guide.slug, guide]));
