import type { TeachingGuide } from "./types";

const common = {
  pillar: "tutor-business" as const,
  cluster: "italki" as const,
  platform: "italki" as const,
  publishedAt: "2026-09-24",
  lastReviewed: "2026-09-24",
  containsVolatilePlatformFacts: false,
  officialSources: [],
};

export const italkiGuides: TeachingGuide[] = [
  {
    ...common,
    slug: "teach-spanish-on-italki",
    title: "How to Teach Spanish on italki: A Practical Tutor Guide",
    description:
      "A practical, evergreen guide for Spanish teachers using italki: define your offer, build a coherent profile, run strong first lessons and create a sustainable prep system.",
    eyebrow: "ITALKI · SPANISH TUTORS",
    readingTime: "11 min",
    keywords: ["teach Spanish on italki", "italki Spanish teacher", "how to teach on italki", "Spanish tutor italki"],
    relatedHref: "/resources",
    relatedLabel: "Browse ready-to-teach Spanish resources",
    relatedLessonIds: [15, 14, 18, 108],
    relatedGuideSlugs: ["italki-spanish-teacher-profile", "italki-trial-lesson-spanish", "teach-spanish-on-preply"],
    sections: [
      {
        heading: "Build a teaching offer before optimizing a marketplace profile",
        paragraphs: [
          "A marketplace profile works better when it expresses a real teaching offer instead of trying to appeal to every possible Spanish learner. Decide which students you help especially well, what they need to do in Spanish, and what your lessons consistently provide. This can be adult beginners, conversation-focused intermediates, travel learners, pronunciation work, professional communication, Rioplatense Spanish or another area you genuinely teach.",
          "This guide intentionally avoids quoting current italki commissions, ranking factors, application rules or lesson-package mechanics because those platform details can change and a current first-party source has not been verified for this article. Use your account and italki’s own current documentation for operational rules. The teaching and business framework below remains useful regardless of those mechanics.",
          "A clear offer gives you better decisions everywhere else: what to write in the profile, what to show in an introduction video, what sample material to prepare, which learners are a good fit and how to structure recurring lessons."
        ]
      },
      {
        heading: "Make the profile predict the lesson",
        paragraphs: [
          "A learner should be able to read your profile and predict what an hour with you will feel like. Replace generic adjectives such as “patient,” “fun” and “personalized” with visible teaching choices. Explain whether you use visual prompts, guided conversation, roleplays, structured grammar contrasts, pronunciation practice or recurring review.",
          "Keep the top of the profile focused on the student. Your biography and interests can build rapport later, but the first job is to answer: “Can this teacher help with my goal?” Mention the audience, outcome and method early.",
          "Do not invent credentials, results or student counts to look competitive. A smaller but specific claim—such as experience with adult beginners or knowledge of Argentine Spanish—is more useful than a large unsupported promise."
        ]
      },
      {
        heading: "Prepare first lessons as diagnostic teaching",
        paragraphs: [
          "A first lesson should gather enough information to guide the next step while still letting the student experience actual teaching. Ask about the real communication goal, sample the relevant skill, teach one small thing and end with a short plan.",
          "If the learner says they want “conversation,” find out what breaks down: short answers, vocabulary retrieval, fear of mistakes, past narration, pronunciation or comprehension. If they want travel Spanish, choose one or two travel situations. If they are a beginner, give support quickly enough that they can produce language instead of spending the entire lesson explaining that they know nothing.",
          "Keep one adaptable sample resource for several common levels. Personalization should come from choosing and adapting intelligently, not from rebuilding material every time a new student appears."
        ]
      },
      {
        heading: "Create continuity after the first lesson",
        paragraphs: [
          "Record four things after class: the learner’s goal, strongest current skill, priority gap and next target. That note becomes the preparation brief for the next lesson. Without it, tutors often prepare based on what looks interesting that day rather than what the student actually needs.",
          "A recurring lesson system can use a stable architecture—retrieval, focused input, supported practice, communication and closing review—while changing content. Students benefit from knowing how to participate even when the topic is new.",
          "Recycle important language across weeks. A resource learned once is not finished merely because the slide deck ended. Bring the target back in warm-ups, stories, roleplays or new contexts."
        ]
      },
      {
        heading: "Protect your effective hourly rate",
        paragraphs: [
          "Marketplace tutoring can become financially weak when a nominal teaching hour creates large amounts of unpaid preparation and administration. Track total work time, not only time on camera. If a 50-minute lesson regularly needs thirty minutes of prep, your real hourly rate is much lower than the profile rate suggests.",
          "Batch preparation and reusable materials change that equation. Choose a bank of lessons by level and goal, adapt examples to the student, and keep notes so you know what comes next. The objective is not to teach identical classes; it is to stop rebuilding the infrastructure of every class.",
          "Review price, schedule and prep time together. A busy calendar is not automatically a healthy business if it requires unsustainable unpaid work."
        ]
      },
      {
        heading: "Run a simple weekly tutor review",
        bullets: [
          "Which new students clearly match your teaching offer?",
          "Which active students need a new challenge rather than another similar lesson?",
          "Which language targets should return through retrieval this week?",
          "Which time blocks are creating unnecessary gaps in your day?",
          "Which lessons took too long to prepare, and can that material become reusable?",
          "Does your profile still describe the lesson experience you are actually delivering?"
        ],
        paragraphs: [
          "The platform can facilitate discovery and scheduling, but the sustainable part of tutoring comes from your own system: positioning, diagnostic teaching, continuity, resource reuse and realistic working hours."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "italki-spanish-teacher-profile",
    title: "How to Build an italki Spanish Teacher Profile",
    description:
      "Build an italki Spanish teaching profile around a clear learner, outcome and lesson experience instead of generic claims that could describe any tutor.",
    eyebrow: "ITALKI · PROFILE",
    readingTime: "10 min",
    keywords: ["italki Spanish teacher profile", "italki tutor profile Spanish", "Spanish teacher profile italki", "italki profile tips teacher"],
    relatedHref: "/resources",
    relatedLabel: "Show a clearer lesson experience with SpanishCue",
    relatedLessonIds: [15, 14, 137],
    relatedGuideSlugs: ["italki-introduction-video-spanish-teacher", "teach-spanish-on-italki", "preply-spanish-tutor-profile"],
    sections: [
      {
        heading: "Choose the learner before you choose the wording",
        paragraphs: [
          "Profiles become vague when the tutor starts with “What can I say about myself?” Start instead with “Who is deciding whether to study with me?” An adult beginner needs evidence of structure and support. An advanced speaker needs evidence of precision, challenge and interesting interaction. A travel learner needs practical relevance.",
          "Write a private positioning sentence: “I help [learner] do [outcome] through [approach].” For example: “I help B1 adults turn passive Spanish into longer spontaneous answers through guided conversation and repeated speaking.” That sentence can guide the whole profile even if it never appears verbatim.",
          "This page does not state current italki ranking or profile-field rules because those platform mechanics should be verified in first-party documentation before publication. Use the profile fields currently available in your account to express the same core information."
        ]
      },
      {
        heading: "Make the opening student-centered",
        paragraphs: [
          "The first lines should help a learner identify themselves. “If you understand Spanish but freeze when people ask follow-up questions…” is more useful than “I have loved languages since I was a child.” Personal history can appear later when it supports trust.",
          "Name a specific problem and describe the lesson response. Example: “We’ll practise short real-life situations, then repeat them with less support so the language becomes easier to retrieve.” This shows a method rather than a personality adjective.",
          "Keep the promise honest. If you primarily teach conversation, do not imply specialized exam preparation just because that keyword appears valuable."
        ]
      },
      {
        heading: "Explain what happens during a normal lesson",
        paragraphs: [
          "Students often see many tutor profiles using the same words: customized, interactive, dynamic, engaging. Translate those words into a class sequence. You might begin with retrieval from last time, introduce one target through examples, practise it with support and finish with a roleplay or conversation.",
          "Mention how you correct. Some students fear constant interruption; others actively want detailed feedback. A sentence such as “I collect recurring errors and correct the ones most relevant to today’s target” gives them a clearer expectation.",
          "If you use prepared resources, frame them as a way to create structure, not as a rigid curriculum. Explain that you select materials according to level and goals."
        ]
      },
      {
        heading: "Use proof that is relevant to the teaching offer",
        paragraphs: [
          "Relevant proof can include teaching qualifications, language education, professional experience connected to a niche, years teaching a specific audience or expertise in a regional variety. Do not list every job you have had just because it is on your résumé.",
          "For business Spanish, a professional background may help you understand meetings or client communication. For pronunciation, phonetics training matters. For Rioplatense Spanish, lived linguistic knowledge matters. Make the connection explicit.",
          "Avoid promising outcomes such as guaranteed fluency or guaranteed exam scores. You can describe the process and the kind of progress you work toward without controlling the learner’s time, consistency or prior knowledge."
        ]
      },
      {
        heading: "Audit the profile for coherence",
        bullets: [
          "The target learner is identifiable quickly.",
          "The outcome is practical rather than only a CEFR label.",
          "The teaching method is described through actions.",
          "Credentials support the offer instead of replacing it.",
          "The profile and video communicate the same teaching identity.",
          "The first lesson you actually deliver can fulfill the profile promise."
        ],
        paragraphs: [
          "The purpose of a profile is not maximum appeal. It is reducing uncertainty for the right learner so the first lesson starts with a realistic expectation."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "italki-introduction-video-spanish-teacher",
    title: "italki Introduction Video Ideas for Spanish Teachers",
    description:
      "Plan an italki introduction video that demonstrates clear Spanish, teaching presence and learner fit without relying on unverified current platform rules.",
    eyebrow: "ITALKI · VIDEO",
    readingTime: "9 min",
    keywords: ["italki introduction video Spanish teacher", "italki teacher video Spanish", "Spanish tutor intro video italki", "italki video ideas"],
    relatedHref: "/resources",
    relatedLabel: "Explore Spanish pronunciation and speaking resources",
    relatedLessonIds: [201, 202, 15],
    relatedGuideSlugs: ["italki-spanish-teacher-profile", "teach-spanish-on-italki", "preply-introduction-video-spanish-tutor"],
    sections: [
      {
        heading: "Use video to answer questions text cannot answer",
        paragraphs: [
          "An introduction video can show pace, pronunciation, warmth and how comfortable you are speaking to a learner. Those are especially important in language tutoring because your voice and interaction style are part of every lesson.",
          "This guide intentionally avoids claiming a current italki video length, approval format or technical requirement without verified first-party documentation. Check the current teacher interface before recording. The editorial framework here focuses on content that remains useful.",
          "The viewer should finish knowing who you help, what lessons feel like and why your teaching approach may fit their goal."
        ]
      },
      {
        heading: "Open with the learner, not a long biography",
        paragraphs: [
          "Introduce your name and teaching focus quickly. Then identify the learner: “I teach Spanish to adults who understand a lot but need to speak more confidently,” or “I work with complete beginners who want a clear path from first phrases to conversation.”",
          "If you teach a regional variety, let the student hear it. If you teach pronunciation, your audio quality and articulation become evidence. If you teach advanced conversation, use language that shows precision without making the video inaccessible.",
          "Personal details can humanize you, but one relevant hobby is enough. The learner is evaluating a teaching relationship, not watching a travel vlog."
        ]
      },
      {
        heading: "Describe the lesson through observable actions",
        paragraphs: [
          "Instead of saying “my classes are interactive,” explain what interaction means: “You’ll use the target language in a roleplay,” “we revisit vocabulary from previous lessons,” or “I give you a structure for longer answers, then remove the support.”",
          "Show that you have a system while leaving room for adaptation. A student should feel that lessons will be prepared and purposeful, not scripted regardless of their needs.",
          "If you use visual material, mention it briefly rather than turning the introduction into a slideshow unless the current platform specifically permits that format."
        ]
      },
      {
        heading: "Use a flexible script framework",
        bullets: [
          "Who you are and what Spanish you teach.",
          "The learner you work with especially well.",
          "One or two relevant experience signals.",
          "What students actually do during lessons.",
          "A specific invitation to tell you their goal."
        ],
        paragraphs: [
          "A framework prevents rambling without making you sound memorized. Record several takes and choose the one where you sound like a real tutor rather than the one with the fewest tiny mistakes.",
          "Keep eye contact close to the camera, prioritize clear sound and avoid excessive editing. Professional does not require cinematic."
        ]
      },
      {
        heading: "Check the video against the profile promise",
        paragraphs: [
          "If the profile says beginner-friendly but the video is fast and full of unexplained idioms, the surfaces contradict each other. If the profile promises conversation but the video is entirely about certifications, the student still does not know what conversation lessons involve.",
          "Use the final review to ask: Can the right learner recognize themselves? Can they imagine speaking with me? Did I describe teaching rather than only credentials? Is every factual claim true?",
          "Then recheck the current italki submission requirements before publishing because platform-controlled technical rules can change independently of your content strategy."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "italki-trial-lesson-spanish",
    title: "How to Structure a First Spanish Lesson for an italki Student",
    description:
      "Structure a first italki Spanish lesson around goals, diagnostic teaching, one useful sample task and a concrete next-step plan without assuming unverified trial mechanics.",
    eyebrow: "ITALKI · FIRST LESSON",
    readingTime: "11 min",
    keywords: ["italki Spanish trial lesson", "first italki Spanish lesson", "italki lesson plan Spanish tutor", "Spanish first lesson italki"],
    relatedHref: "/resources",
    relatedLabel: "Choose a flexible first-lesson resource",
    relatedLessonIds: [15, 14, 121],
    relatedGuideSlugs: ["teach-spanish-on-italki", "retain-italki-spanish-students", "preply-trial-lesson-spanish"],
    sections: [
      {
        heading: "Design the first lesson around decisions you need to make",
        paragraphs: [
          "The first lesson should tell you enough to choose what to teach next. Ask what the learner wants to do in Spanish, observe a relevant skill, teach one small thing and finish with a provisional sequence.",
          "This article does not state a current italki trial duration, package rule or first-lesson policy because those mechanics have not been verified in a current first-party source for this guide. Adapt the timing to the lesson format actually booked in your teacher account.",
          "The structure works whether the first meeting is short or full-length because you can scale the diagnostic and teaching sample."
        ]
      },
      {
        heading: "Translate the learner’s goal into a performance",
        paragraphs: [
          "“Improve conversation” is not yet a teaching target. Ask where conversation breaks: meeting new people, telling stories, speaking at work, following native-speed speech or responding without translating. “Travel Spanish” becomes a set of situations such as hotel, transport or restaurants.",
          "A concrete performance lets you choose a diagnostic. If the learner wants to tell stories, ask for one short experience. If they need work Spanish, simulate one professional exchange. If they are starting from zero, see how quickly they can use supported chunks.",
          "Do not spend half the first lesson interrogating the learner about goals. Learn enough, then teach."
        ]
      },
      {
        heading: "Diagnose through a task instead of a quiz alone",
        paragraphs: [
          "A communicative task shows comprehension, vocabulary retrieval, grammar, pronunciation and interaction at once. For A2–B1, ask the learner to choose between options and justify the choice. For past narration, ask for a story. For advanced learners, introduce ambiguity or ask them to reformulate a position.",
          "Take notes without correcting every error. Select the patterns most relevant to the goal. A student can have many small errors while still being blocked mainly by one issue such as tense choice or answer length.",
          "If you use a formal placement tool separately, combine it with observed performance rather than treating a score as the entire learner."
        ]
      },
      {
        heading: "Teach one target and create a second attempt",
        paragraphs: [
          "Choose a target small enough to change in the lesson. Give the learner a structure for extending answers, clarify one grammar contrast, teach a set of travel chunks or work on one pronunciation distinction. Then repeat or transfer the task.",
          "The second attempt matters because it demonstrates learning. “You used three past-time contrasts correctly after the explanation” is better evidence than finishing ten slides.",
          "Use prepared materials as modular components. Select only the sections relevant to the learner rather than forcing a complete resource into a first meeting."
        ]
      },
      {
        heading: "End with a plan that can change",
        paragraphs: [
          "Name the learner’s strength, priority gap and next three or four targets. Explain why the order makes sense. The plan should be specific enough to create confidence and flexible enough to adjust after you learn more.",
          "Example: “You understand B1 questions easily, but your stories lose chronology. I’d work first on past-time framing, then connectors, then longer narrative tasks with less support.”",
          "Save the plan in your own notes so the next lesson begins with continuity rather than another fresh diagnosis."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "italki-pricing-spanish-lessons",
    title: "How to Price Spanish Lessons on italki",
    description:
      "Price Spanish lessons on italki using a sustainable floor, prep time, niche, capacity and student value without relying on unverified current platform fees.",
    eyebrow: "ITALKI · PRICING",
    readingTime: "11 min",
    keywords: ["italki Spanish lesson price", "italki tutor rates Spanish", "how much charge italki Spanish", "italki Spanish teacher pricing"],
    relatedHref: "/resources",
    relatedLabel: "Reduce preparation time with SpanishCue resources",
    relatedLessonIds: [15, 18, 108],
    relatedGuideSlugs: ["teach-spanish-on-italki", "get-more-italki-spanish-students", "preply-pricing-spanish-tutor"],
    sections: [
      {
        heading: "Define a financial floor before looking at competitor prices",
        paragraphs: [
          "Your minimum sustainable rate depends on the money you keep and the total time the work consumes. This guide does not state a current italki commission or payout fee because those platform mechanics should be checked in current first-party documentation or your account.",
          "Calculate backward from a target effective hourly rate. Include teaching time, preparation, messages, notes and administration. If a lesson needs thirty minutes of unpaid preparation, the visible lesson rate overstates what the hour is worth to you.",
          "A useful starting equation is: required net teaching revenue = target effective hourly rate × total work hours. Then work out the visible price required under the actual fee structure shown in your current account."
        ]
      },
      {
        heading: "Use niche and proof to interpret the market",
        paragraphs: [
          "Competitor prices are context, not instructions. Compare tutors who offer something genuinely similar: adult beginners, conversation, business Spanish, exam work, regional Spanish or pronunciation. A generalist with no reviews and a specialist with established proof are not identical products.",
          "Your profile needs to support the price. If the rate rises but the offer remains “fun personalized Spanish for everyone,” the learner has little reason to understand the difference.",
          "Relevant proof can be training, teaching experience, professional background, a clear curriculum or a distinctive variety. Never invent proof to justify a price."
        ]
      },
      {
        heading: "Account for unpaid prep",
        paragraphs: [
          "Track preparation for two weeks. Record how long you spend selecting material, creating slides, writing exercises and reviewing notes. Tutors often estimate this time poorly because it is fragmented across the day.",
          "Then identify what can become reusable. A strong conversation board, grammar contrast or listening sequence can serve multiple students with different prompts. The aim is not identical lessons; it is shared infrastructure.",
          "If you cut average prep from twenty minutes to ten across fifteen weekly lessons, you recover 2.5 hours. That may improve your real hourly rate more than a small price increase."
        ]
      },
      {
        heading: "Set a review rule instead of changing price emotionally",
        paragraphs: [
          "Choose a trigger: schedule utilization, number of recurring students, effective hourly rate or a major improvement in the offer. Review price at that point rather than after every quiet week.",
          "If you change price, measure over a meaningful period. Track new inquiries or bookings, conversion, active students and net income. Consider changes in availability or seasonality at the same time.",
          "Do not assume a lower price always creates more demand or a higher price automatically signals quality. Test the complete offer."
        ]
      },
      {
        heading: "Use scenarios, not promises",
        paragraphs: [
          "Example scenario: suppose you want an effective USD 25 per work hour and a paid lesson requires 50 minutes teaching plus 15 minutes combined prep/admin. That is 65 minutes of work. Before platform fees or taxes, you need more than USD 25 of net lesson revenue to hit the target.",
          "Change the assumptions for your own business. A pronunciation specialist may need more diagnostic review; a conversation tutor with a strong reusable library may need less prep. The calculation is a decision tool, not an industry benchmark.",
          "Recheck the platform’s current fee and pricing controls in your account before finalizing the visible rate."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "get-more-italki-spanish-students",
    title: "How Spanish Teachers Can Attract More Students on italki",
    description:
      "Improve your chances of attracting italki Spanish students through niche clarity, profile coherence, realistic availability and a stronger first-lesson experience without pretending to know hidden ranking factors.",
    eyebrow: "ITALKI · STUDENT ACQUISITION",
    readingTime: "10 min",
    keywords: ["get more italki students", "italki Spanish students", "attract students italki", "grow italki Spanish teacher"],
    relatedHref: "/resources",
    relatedLabel: "Strengthen the lesson experience with SpanishCue",
    relatedLessonIds: [15, 14, 137],
    relatedGuideSlugs: ["italki-spanish-teacher-profile", "italki-pricing-spanish-lessons", "teach-spanish-on-italki"],
    sections: [
      {
        heading: "Do not build a strategy around an imaginary algorithm",
        paragraphs: [
          "Without verified first-party documentation, do not treat forum theories about ranking as facts. Focus first on inputs a prospective student can actually see and evaluate: your offer, profile, video, price, availability and lesson description.",
          "If the profile is vague, more visibility may simply create more low-fit views. Clarify who you help and what lessons accomplish before trying to maximize traffic.",
          "Track changes in your own account over time rather than borrowing another tutor’s explanation of why they rank where they do."
        ]
      },
      {
        heading: "Create a reason to choose you beyond native-speaker status",
        paragraphs: [
          "Native-speaker status can matter to some learners, but it is rarely a complete offer. Add a specific problem you solve: beginner structure, confident conversation, workplace communication, travel, pronunciation, Rioplatense Spanish or another genuine strength.",
          "Describe what the student does during class. “We use repeated roleplays with decreasing support” is easier to evaluate than “dynamic methodology.” Specific methods create trust because they sound like something a teacher has actually done.",
          "Keep the offer narrow enough to be memorable without refusing every student outside it."
        ]
      },
      {
        heading: "Align profile, availability and price",
        paragraphs: [
          "A strong profile with no usable times cannot convert. A wide-open schedule that you frequently change can damage reliability. Open teaching blocks you can sustain and make sure they overlap with the students you want to serve.",
          "Price should match the strength of the current profile and your financial floor. If you compete only by being cheap, you may fill hours that are difficult to make profitable after preparation.",
          "Review these variables together. Changing all of them at once makes it hard to learn which adjustment mattered."
        ]
      },
      {
        heading: "Make the first lesson validate the profile",
        paragraphs: [
          "If the profile promises structured beginner teaching, the first lesson should create a successful beginner interaction. If it promises advanced discussion, use a task that requires nuance and follow-up rather than basic small talk.",
          "A strong first lesson gives the learner a small improvement and a specific plan. That experience can convert marketplace visibility into a recurring teaching relationship.",
          "Prepare a small sample library so you can personalize by selection rather than by building every first lesson from nothing."
        ]
      },
      {
        heading: "Measure acquisition through a simple funnel",
        bullets: [
          "Profile views or inquiries where available.",
          "First lessons booked.",
          "Students who continue.",
          "Students still active after several weeks.",
          "Effective revenue after prep and administration."
        ],
        paragraphs: [
          "A tactic that increases first lessons but produces poor fit and rapid churn may not be growth. Use the full funnel to decide what to improve next.",
          "If few people reach the first lesson, inspect positioning and discoverability. If first lessons happen but few continue, inspect fit and teaching. If students continue but your workload is unsustainable, inspect price and preparation."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "retain-italki-spanish-students",
    title: "How to Keep italki Spanish Students Coming Back",
    description:
      "Retain italki Spanish students through continuity, visible progress, appropriate challenge and a sustainable lesson-prep workflow rather than novelty for its own sake.",
    eyebrow: "ITALKI · RETENTION",
    readingTime: "11 min",
    keywords: ["italki student retention", "keep italki students", "Spanish tutor retention italki", "italki recurring students"],
    relatedHref: "/resources",
    relatedLabel: "Create recurring lesson sequences with SpanishCue",
    relatedLessonIds: [137, 138, 208, 215],
    relatedGuideSlugs: ["italki-trial-lesson-spanish", "teach-spanish-on-italki", "preply-student-retention-spanish"],
    sections: [
      {
        heading: "Retention is mostly a continuity problem",
        paragraphs: [
          "Students are more likely to keep studying when they can see how one lesson connects to the next. A collection of entertaining classes can still feel directionless if every week resets the course.",
          "After each lesson, record what the student used successfully, what still breaks down and what should return. Start the next class with retrieval or a short reuse of previous language. That creates a thread.",
          "This advice does not depend on a current italki retention metric. It is a teaching-system principle that applies regardless of the platform’s current analytics."
        ]
      },
      {
        heading: "Make progress visible without constant tests",
        paragraphs: [
          "Repeat comparable tasks over time. A learner can answer the same type of question with less support, retell a story more coherently, hear a contrast they previously missed or use target vocabulary without prompts.",
          "Name the evidence: “You did that roleplay today without the sentence starters we used two weeks ago.” Students often underestimate gradual progress unless the teacher points to a concrete change.",
          "Use ordinary lesson artifacts as evidence rather than turning every few weeks into a formal exam."
        ]
      },
      {
        heading: "Keep challenge in the productive zone",
        paragraphs: [
          "If the student succeeds effortlessly at the same task type for weeks, increase one demand: less support, longer answers, faster listening, more precise grammar or more ambiguous situations. If they are consistently overwhelmed, restore support before adding content.",
          "Personalization means choosing the right challenge for the goal. It does not require every prompt to mention the student’s favorite hobby.",
          "A reusable library makes challenge easier to vary because you can choose another level, mode or task without designing a whole new class."
        ]
      },
      {
        heading: "Build a schedule the student can repeat",
        paragraphs: [
          "A recurring rhythm reduces friction. If the learner can realistically study once a week, a dependable weekly slot may be more valuable than repeatedly attempting a twice-weekly schedule that collapses.",
          "Protect your own consistency. Avoid opening times you often need to move. Students experience scheduling reliability as part of teaching quality even when it is not pedagogical.",
          "If a student starts disappearing, ask whether the schedule or goal changed before assuming the lesson itself failed."
        ]
      },
      {
        heading: "Use variety with a stable learning architecture",
        paragraphs: [
          "Rotate topics and activity formats, but preserve a recognizable learning cycle. For example: retrieval, one focused target, supported task, open speaking, feedback and next step. A conversation course can use debates one week and storytelling the next while still recycling the same language.",
          "Novelty should serve attention, not erase repetition. Important grammar, vocabulary and pronunciation need to return after time has passed.",
          "When lesson prep is sustainable, you are more likely to maintain this continuity for many students rather than improvising under time pressure."
        ]
      },
      {
        heading: "Review retention patterns, not individual stories",
        bullets: [
          "Students leave after the first lesson: inspect fit and first-lesson clarity.",
          "Students leave after a few weeks: inspect continuity and visible progress.",
          "Students become irregular: inspect schedule realism and current goals.",
          "Students enjoy lessons but plateau: inspect challenge and retrieval.",
          "You retain students but feel overloaded: inspect prep time, price and weekly capacity."
        ],
        paragraphs: [
          "Some students stop for reasons outside your control. Use repeated patterns to improve the system without turning every departure into a personal verdict."
        ]
      }
    ]
  }
];
