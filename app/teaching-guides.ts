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
];

export const teachingGuideBySlug = new Map(teachingGuides.map((guide) => [guide.slug, guide]));
