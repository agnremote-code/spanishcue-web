import type { TeachingGuide } from "./types";

const nicheCommon = {
  pillar: "tutor-business" as const,
  cluster: "tutor-niches" as const,
  publishedAt: "2026-09-24",
};

export const tutorNicheGuides: TeachingGuide[] = [
  {
    ...nicheCommon,
    slug: "teach-beginner-spanish-online",
    title: "How to Teach Beginner Spanish Online One-to-One",
    description:
      "Build effective one-to-one beginner Spanish lessons online with clear scaffolding, limited targets, visual support, retrieval and speaking that starts early without overwhelming the learner.",
    eyebrow: "NICHE · BEGINNER SPANISH",
    readingTime: "11 min",
    keywords: [
      "teach beginner Spanish online",
      "beginner Spanish tutoring",
      "A1 Spanish private lessons",
      "how to teach Spanish beginners one to one",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse A1 SpanishCue resources",
    relatedLessonIds: [15, 120, 121, 130],
    relatedGuideSlugs: [
      "first-online-spanish-lesson",
      "spanish-student-learning-plan",
      "spanish-tutor-niche-ideas",
    ],
    sections: [
      {
        heading: "Make the first lessons small enough to succeed",
        paragraphs: [
          "Beginners do not need a compressed version of the entire Spanish language. They need a sequence of small communicative wins. In a one-to-one lesson, the tutor can control the amount of new language more precisely than in a group course, which is an advantage if you resist the temptation to add too much.",
          "Choose one main communicative outcome per lesson: introduce yourself, describe a routine, invite someone, order food, ask basic location questions or talk about a simple plan. Grammar and vocabulary should support that outcome rather than become separate lists.",
          "A beginner who leaves the lesson able to complete one short interaction with less support has made visible progress. That is more useful than covering three verb tables they cannot yet retrieve.",
        ],
      },
      {
        heading: "Use visual support before long explanations",
        paragraphs: [
          "Online teaching becomes harder when the learner must hold too much language in working memory. Keep key words, sentence starters, images and examples visible while the student first attempts the task.",
          "For example, a beginner invitation lesson might display quiero, puedo, vamos, a las…, el sábado and two or three model exchanges. The student uses the support, then the tutor gradually removes parts of it.",
          "Visual support should reduce cognitive load, not decorate the screen. If the page contains ten colors, six boxes and twenty instructions, the learner may spend more attention understanding the interface than the language.",
        ],
      },
      {
        heading: "Teach grammar as a decision the learner needs now",
        paragraphs: [
          "Beginner grammar is most memorable when it solves a communication problem. Ser and estar can be introduced while describing people and states; articles can appear while naming and identifying objects; present tense can support routines and preferences.",
          "Do not hide grammar completely if the learner benefits from explanation. Keep the explanation narrow and immediately return to use. A two-minute contrast followed by speaking is often more useful than twenty minutes of teacher talk.",
          "Recycle the same form across several lessons. Beginners need repeated retrieval more than constant novelty.",
        ],
      },
      {
        heading: "Let the student speak before they feel ready",
        paragraphs: [
          "A1 speaking does not need to be free conversation. Give choices, sentence frames and predictable roles. A student can communicate meaningfully with limited language if the task fits the level.",
          "Use short roleplays, either-or decisions, picture descriptions and personal questions with visible support. The tutor's job is to create a small enough speaking space that the learner can act inside it.",
          "As confidence grows, remove one support at a time. Do not suddenly replace a structured task with “Now talk freely for ten minutes.”",
        ],
      },
      {
        heading: "Build a reusable beginner route",
        paragraphs: [
          "A beginner niche becomes easier to teach when you have a core sequence you can adapt. One possible route is: introductions and identity, noun phrases and articles, present-tense essentials, daily routine, wants and plans, basic directions, survival roleplays and a first past-time introduction.",
          "Students will move through the route at different speeds. Some need pronunciation work earlier; others need more listening. The route is a planning backbone, not a script.",
          "SpanishCue's A1 resources can help a tutor reuse the architecture while personalizing examples, pacing and final speaking tasks.",
        ],
      },
    ],
  },
  {
    ...nicheCommon,
    slug: "teach-spanish-for-travel-online",
    title: "How to Teach Spanish for Travel Online",
    description:
      "Design Spanish-for-travel tutoring around real trip situations, repair strategies, listening and roleplays rather than a generic tourist vocabulary list.",
    eyebrow: "NICHE · TRAVEL SPANISH",
    readingTime: "10 min",
    keywords: [
      "teach Spanish for travel",
      "travel Spanish tutor",
      "Spanish travel lessons online",
      "Spanish for tourists lesson plan",
    ],
    relatedHref: "/resources",
    relatedLabel: "Explore SpanishCue travel-ready resources",
    relatedLessonIds: [39, 17, 131, 204],
    relatedGuideSlugs: [
      "spanish-tutor-niche-ideas",
      "teach-beginner-spanish-online",
      "first-online-spanish-lesson",
    ],
    sections: [
      {
        heading: "Start with the actual trip, not a generic textbook unit",
        paragraphs: [
          "Travel Spanish is strongest when the tutor knows where the learner is going, what kind of trip they are taking and which situations matter most. A backpacker moving through Argentina needs different language from a conference traveler spending three days in Madrid.",
          "Ask about destination, dates, accommodation, transport, food, medical concerns and whether the learner expects social interaction. Then rank situations by probability and consequence.",
          "This makes the course feel practical immediately and prevents spending a full lesson on airport vocabulary when the learner already has private transport arranged.",
        ],
      },
      {
        heading: "Teach functions before long vocabulary lists",
        paragraphs: [
          "The learner needs to request, clarify, reject, confirm, compare and repair misunderstandings. Those functions transfer across many travel situations.",
          "For example, “¿Puede repetir?”, “Más despacio, por favor”, “Quiero…”, “Necesito…”, “¿Dónde está…?” and “No entendí” can solve problems in restaurants, transport, hotels and shops. Build a core repair toolkit early.",
          "Vocabulary still matters, but teach it inside phrases and roleplays so the learner practises retrieval under realistic pressure.",
        ],
      },
      {
        heading: "Use roleplays with changing information",
        paragraphs: [
          "A static restaurant dialogue is easy to memorize and hard to transfer. Add a change: the dish is unavailable, the card does not work, the reservation is missing or the bus leaves from a different platform.",
          "Changing information forces the learner to listen, react and repair. That is closer to the real reason people hire a travel tutor.",
          "Keep the difficulty appropriate. A beginner can choose from visible phrases; an A2 learner can negotiate alternatives more freely.",
        ],
      },
      {
        heading: "Include listening before the trip",
        paragraphs: [
          "Travel stress often comes from understanding other people, not from producing a memorized sentence. Include short messages, announcements, service interactions and regional voices.",
          "The goal is not perfect transcription. Ask the learner to locate the information they need: time, gate, price, direction, change or problem.",
          "SpanishCue listening resources such as terminal messages and regional voice activities can provide controlled practice before the learner faces real-world noise and speed.",
        ],
      },
      {
        heading: "Finish with a personal travel simulation",
        paragraphs: [
          "Build a final lesson that follows one day of the learner's actual trip: leaving accommodation, taking transport, ordering food, asking for help and handling one unexpected problem.",
          "Recycle the core phrases from earlier lessons and remove support gradually. The learner should recognize which tools transfer across situations.",
          "Do not promise “fluency before your vacation.” Promise a realistic increase in independence for the situations you actually practised.",
        ],
      },
    ],
  },
  {
    ...nicheCommon,
    slug: "business-spanish-tutoring",
    title: "How to Build a Business Spanish Tutoring Offer",
    description:
      "Design a Business Spanish tutoring niche around real professional tasks, register, meetings, negotiation and industry context instead of generic office vocabulary.",
    eyebrow: "NICHE · BUSINESS SPANISH",
    readingTime: "11 min",
    keywords: [
      "Business Spanish tutoring",
      "teach Business Spanish online",
      "Business Spanish tutor",
      "Spanish for professionals lessons",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse advanced SpanishCue resources",
    relatedLessonIds: [125, 124, 133, 134],
    relatedGuideSlugs: [
      "spanish-tutor-niche-ideas",
      "online-spanish-tutor-rates",
      "retain-online-spanish-students",
    ],
    sections: [
      {
        heading: "Define the professional task before the language syllabus",
        paragraphs: [
          "Business Spanish is not one subject. A salesperson, healthcare manager, engineer and executive assistant may all need Spanish for work but perform completely different communication tasks.",
          "Ask what the learner must do: lead meetings, negotiate, present updates, write messages, handle clients, manage conflict or understand colleagues. Then identify the linguistic demands of those tasks.",
          "This creates a stronger tutoring offer than “business vocabulary,” because the learner can see how lessons connect to their job.",
        ],
      },
      {
        heading: "Build lessons around authentic professional decisions",
        paragraphs: [
          "Use scenarios where language affects an outcome: choose a supplier, respond to a complaint, explain a delay, negotiate a condition or defend a proposal. Professional communication requires more than correct grammar; it requires prioritization, tone and clarity.",
          "At B2 and above, ask the learner to reformulate the same message for different audiences. A direct message to a colleague may need a different register from a client email or formal presentation.",
          "Keep proprietary company information out of teaching materials unless the learner is authorized to share it.",
        ],
      },
      {
        heading: "Teach register and pragmatics explicitly",
        paragraphs: [
          "Professionals often know enough grammar but sound too abrupt, vague or informal for the situation. Work on mitigation, clarification, disagreement and requests as communicative tools.",
          "Compare formulations such as “Necesito esto hoy” with softer or more collaborative alternatives. Ask what changes in power, urgency and relationship.",
          "Regional variation also matters. The language used in Argentina, Mexico and Spain may differ in pronouns, vocabulary and business conventions. Explain variation without pretending one variety is universally professional.",
        ],
      },
      {
        heading: "Use listening and subtext for advanced learners",
        paragraphs: [
          "Real professional communication includes incomplete answers, hedging, implied disagreement and competing versions of events. Listening tasks with testimonies, interviews and ambiguity prepare learners for this better than scripted textbook dialogues alone.",
          "Ask the learner to distinguish fact, inference and interpretation. Then have them respond professionally rather than merely answer comprehension questions.",
          "SpanishCue's B2–C1 listening and negotiation resources can support this kind of advanced practice.",
        ],
      },
      {
        heading: "Package the offer by role or outcome",
        paragraphs: [
          "A stronger service might be “Spanish for client-facing professionals” or “Spanish for meetings and negotiation” rather than generic Business Spanish. A narrower promise makes sample lessons and marketing clearer.",
          "Create a short diagnostic around the actual task, then build a sequence of four to eight themes. Do not promise that a fixed number of lessons guarantees professional fluency.",
          "Price should reflect the specialization and preparation required, especially if the course uses industry-specific materials or document review.",
        ],
      },
    ],
  },
  {
    ...nicheCommon,
    slug: "dele-preparation-private-tutor",
    title: "How to Plan DELE Preparation Lessons as a Private Spanish Tutor",
    description:
      "Structure private DELE preparation around level diagnosis, exam tasks, language development, timed practice and feedback without implying official affiliation.",
    eyebrow: "NICHE · DELE PREPARATION",
    readingTime: "11 min",
    keywords: [
      "DELE preparation tutor",
      "teach DELE preparation",
      "private DELE lessons",
      "Spanish exam preparation tutor",
    ],
    relatedHref: "/resources",
    relatedLabel: "Use level-specific SpanishCue resources alongside exam practice",
    relatedLessonIds: [140, 142, 143, 148],
    relatedGuideSlugs: [
      "assess-spanish-student-level-online",
      "spanish-student-learning-plan",
      "spanish-tutor-niche-ideas",
    ],
    sections: [
      {
        heading: "Separate exam familiarity from language level",
        paragraphs: [
          "A learner can have strong general Spanish and still perform poorly if they do not understand the exam task. The opposite is also possible: a learner may know the format but lack the language control needed for the target level.",
          "Begin by sampling both. Use a representative speaking or writing task to observe task management, then separately identify grammar, vocabulary, listening or discourse gaps.",
          "SpanishCue is an independent teaching-resource platform and is not affiliated with or endorsed by Instituto Cervantes. Tutors should use current official DELE exam documentation for task formats, timing and administrative rules.",
        ],
      },
      {
        heading: "Map each exam task to the language it requires",
        paragraphs: [
          "Instead of treating practice tests as the entire course, identify what successful performance demands. A picture-based speaking task may require description, comparison and speculation. An opinion task may require structure, connectors, justification and response to follow-up questions.",
          "Build language lessons around those functions, then return to the exam task. This prevents the student from simply repeating mock tests without fixing the underlying weakness.",
          "At lower levels, the gap may be basic tense control or sentence building. At higher levels, it may be register, nuance or discourse organization.",
        ],
      },
      {
        heading: "Use timed practice only after the task is understood",
        paragraphs: [
          "Timing is important, but early timed practice can hide what the learner actually needs. First let them complete the task with enough support to understand the structure. Then reduce support and introduce realistic time limits.",
          "After a timed attempt, review not only errors but strategy: Did the student spend too long planning? Did they ignore part of the prompt? Did they run out of language or simply time?",
          "Use the answer to decide whether the next lesson should target language, task strategy or both.",
        ],
      },
      {
        heading: "Build feedback around repeatable criteria",
        paragraphs: [
          "Choose a small set of feedback categories that match the task: task completion, organization, language range, control, pronunciation or interaction. Avoid giving twenty unrelated corrections after every attempt.",
          "Ask the student to repair examples and repeat part of the task. The second performance should use the feedback immediately.",
          "Track recurring issues across weeks so the learner can see which problems are shrinking and which need targeted work.",
        ],
      },
      {
        heading: "Plan backward from the exam date without guaranteeing the result",
        paragraphs: [
          "Estimate the number of lessons available, identify the highest-risk skills and create short review blocks. Include full or partial mock practice closer to the exam, but preserve time for language development.",
          "A private tutor can adapt intensity based on the learner's baseline and schedule. Do not guarantee a passing score; the exam result depends on the learner's performance and official assessment.",
          "Use current official Instituto Cervantes materials for exam-specific requirements and use SpanishCue resources where broader grammar, listening, speaking or vocabulary development is needed.",
        ],
      },
    ],
  },
  {
    ...nicheCommon,
    slug: "spanish-pronunciation-tutoring-online",
    title: "How to Offer Spanish Pronunciation Tutoring Online",
    description:
      "Build an online Spanish pronunciation tutoring niche using diagnosis, perception, articulation, deliberate practice and transfer into real speech.",
    eyebrow: "NICHE · PRONUNCIATION",
    readingTime: "10 min",
    keywords: [
      "Spanish pronunciation tutor online",
      "teach Spanish pronunciation",
      "Spanish accent coaching",
      "online Spanish phonetics lessons",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse SpanishCue pronunciation resources",
    relatedLessonIds: [38, 201, 202],
    relatedGuideSlugs: [
      "spanish-tutor-niche-ideas",
      "teach-beginner-spanish-online",
      "lesson-prep-system-spanish-tutors",
    ],
    sections: [
      {
        heading: "Diagnose intelligibility before chasing accent reduction",
        paragraphs: [
          "Pronunciation tutoring should begin with what actually affects communication. A student may be worried about one sound while rhythm, vowel quality or stress creates more misunderstanding.",
          "Record a short reading and a spontaneous speaking sample. Listen for recurring patterns rather than isolated slips. Ask the student where listeners have difficulty and what variety of Spanish they use most.",
          "The goal does not have to be sounding native. Clear, comfortable and intelligible speech is a more useful default unless the student has a specific professional or performance goal.",
        ],
      },
      {
        heading: "Train perception before demanding perfect production",
        paragraphs: [
          "Students sometimes cannot reliably hear the contrast they are trying to produce. Use minimal or near-minimal contrasts, identification tasks and focused listening before repeated articulation.",
          "For Spanish vowels, stable vowel quality may matter more than exaggerated mouth movements. For stress, the learner needs to hear the prominent syllable and connect it to meaning.",
          "Perception work should stay brief and feed into speaking, not become an endless listening test.",
        ],
      },
      {
        heading: "Use one articulatory instruction at a time",
        paragraphs: [
          "Overloading the learner with tongue height, lip shape, airflow and voicing simultaneously can make speech worse. Choose the most useful physical cue, test it and add another only if needed.",
          "For difficult sounds such as the Spanish r, build from easier contexts and approximations instead of asking the student to force a trill repeatedly. Avoid creating jaw or tongue tension.",
          "Video can help with visible articulation, while audio recording helps the student compare attempts over time.",
        ],
      },
      {
        heading: "Move from sound to phrase to spontaneous speech",
        paragraphs: [
          "A sound produced correctly in isolation is not yet available in conversation. Progress through words, short phrases, controlled sentences and then a communicative task where attention shifts partly to meaning.",
          "Expect accuracy to drop during transfer. That is normal. Return to the cue briefly, then repeat the speaking task.",
          "Use the student's real vocabulary and recurring situations so the pronunciation target appears in language they actually need.",
        ],
      },
      {
        heading: "Package pronunciation tutoring around measurable targets",
        paragraphs: [
          "A clear offer might focus on Spanish vowels, word stress, r sounds, connected-speech rhythm or intelligibility for presentations. Avoid promising to eliminate an accent in a fixed number of lessons.",
          "Use before-and-after recordings with comparable tasks to show change. The evidence should come from the student's own speech rather than a subjective claim of perfection.",
          "SpanishCue's Mouth Lab, vowel and rhythm resources can provide a reusable visual and oral foundation for this niche.",
        ],
      },
    ],
  },
  {
    ...nicheCommon,
    slug: "rioplatense-spanish-tutoring-niche",
    title: "How to Build a Rioplatense Spanish Tutoring Niche",
    description:
      "Build a Rioplatense Spanish tutoring offer around vos, pronunciation, vocabulary, register and real Argentine contexts without presenting regional Spanish as a novelty gimmick.",
    eyebrow: "NICHE · RIOPLATENSE SPANISH",
    readingTime: "10 min",
    keywords: [
      "Rioplatense Spanish tutor",
      "teach Argentine Spanish",
      "vos Spanish lessons",
      "Argentinian Spanish tutoring",
    ],
    relatedHref: "/resources",
    relatedLabel: "Explore SpanishCue Argentine and Rioplatense resources",
    relatedLessonIds: [16, 39, 3, 19],
    relatedGuideSlugs: [
      "spanish-tutor-niche-ideas",
      "teach-spanish-for-travel-online",
      "spanish-pronunciation-tutoring-online",
    ],
    sections: [
      {
        heading: "Define who actually needs Rioplatense Spanish",
        paragraphs: [
          "The niche can serve learners moving to Argentina or Uruguay, partners of Rioplatense speakers, travelers, professionals working with the region, heritage learners or advanced students interested in regional variation.",
          "Ask what contact the student expects. Someone living in Buenos Aires may need vos, everyday vocabulary and local listening immediately. A learner studying general Latin American Spanish may only need receptive awareness at first.",
          "Do not frame the variety as slang-only Spanish. Rioplatense Spanish is a full regional variety with systematic grammar, pronunciation and register differences.",
        ],
      },
      {
        heading: "Teach vos as a system, not a list of curiosities",
        paragraphs: [
          "Introduce the high-frequency present and imperative patterns in meaningful exchanges: hablás, comés, vivís; hablá, comé, viví. Compare them with the learner's existing tú or usted system when useful.",
          "Keep pronoun and verb choices connected to social context. Learners should understand when vos is natural in the target region and how it interacts with usted.",
          "Use repeated speaking tasks so the forms become available automatically rather than remaining a chart the student recognizes but never uses.",
        ],
      },
      {
        heading: "Include pronunciation and listening early",
        paragraphs: [
          "Many learners recognize Rioplatense Spanish first through pronunciation, especially yeísmo rehilado or related pronunciations of y and ll in parts of the region. Present variation carefully and avoid claiming every speaker sounds identical.",
          "Use authentic or well-designed regional listening so students learn to process the variety at normal conversational speed. Connect pronunciation to words and phrases they actually hear.",
          "Advanced learners can compare speakers and registers rather than imitating one stereotyped accent.",
        ],
      },
      {
        heading: "Teach vocabulary through situations and register",
        paragraphs: [
          "Regional vocabulary is useful when attached to context. Food, transport, housing, social life, work and everyday errands provide natural categories.",
          "Explain whether a word is broadly Argentine, strongly local, informal or potentially generational. Avoid filling lessons with rare slang that makes the learner sound unnatural.",
          "Resources such as ARGENTO, Buenos Aires en la Calle and roleplays can give the vocabulary a communicative setting instead of becoming flashcards without context.",
        ],
      },
      {
        heading: "Position the niche as regional competence plus strong Spanish teaching",
        paragraphs: [
          "A regional specialty does not replace general pedagogy. Beginners still need sentence building, tense development and listening progression. Intermediate learners still need correction, recycling and extended speaking.",
          "Market the variety honestly: “Rioplatense Spanish for learners living in or connected to Argentina” is clearer than promising secret native slang.",
          "The strongest niche combines genuine regional knowledge with a repeatable teaching system so students gain both local competence and transferable Spanish.",
        ],
      },
    ],
  },
];
