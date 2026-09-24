import type { TeachingGuide } from "./types";

const operationsCommon = {
  pillar: "tutor-business" as const,
  cluster: "operations-retention" as const,
  publishedAt: "2026-09-24",
};

export const operationsRetentionGuides: TeachingGuide[] = [
  {
    ...operationsCommon,
    slug: "cancellation-policy-spanish-tutor",
    title: "How to Write a Cancellation Policy for Spanish Tutoring",
    description:
      "Create a clear Spanish tutoring cancellation policy with notice windows, no-show rules, exceptions and communication that protects both the student relationship and your schedule.",
    eyebrow: "OPERATIONS · CANCELLATIONS",
    readingTime: "9 min",
    keywords: [
      "Spanish tutor cancellation policy",
      "tutoring cancellation policy",
      "online tutor no show policy",
      "Spanish lesson cancellation rules",
    ],
    relatedHref: "/resources",
    relatedLabel: "Build a repeatable tutoring workflow with SpanishCue",
    relatedLessonIds: [15, 14],
    relatedGuideSlugs: [
      "rescheduling-policy-online-spanish-tutor",
      "availability-online-spanish-tutor",
      "retain-online-spanish-students",
    ],
    sections: [
      {
        heading: "Decide what the policy is trying to protect",
        paragraphs: [
          "A cancellation policy is not primarily a punishment system. It protects time that cannot easily be resold, gives students predictable expectations and reduces case-by-case negotiation. If every late cancellation becomes a personal conversation, the tutor spends emotional and administrative energy on a rule that should already be clear.",
          "Start by identifying the operational problem. Do you lose income because students cancel an hour before class? Do no-shows block prime-time slots? Do you travel and need reliable scheduling? The policy should solve the pattern you actually experience rather than copy someone else's wording.",
          "This is operational guidance, not legal advice. If you sell lessons independently, local consumer law, payment rules or contract requirements may affect what you can enforce. If you teach through a marketplace, its platform policy takes precedence over your personal preference.",
        ],
      },
      {
        heading: "Choose a notice window you can apply consistently",
        paragraphs: [
          "The exact notice period can vary. Some tutors use 12 hours, others 24 hours or a platform-defined rule. The important operational question is whether you can apply the rule consistently without inventing a new exception every week.",
          "A notice window should be easy to state: cancellations before the deadline can be rescheduled; cancellations after the deadline may be charged or treated according to the platform's rules. Avoid vague phrases such as “please give enough notice” because students cannot know what counts as enough.",
          "If you make a first-lesson exception or one emergency exception, define that as a deliberate courtesy rather than silently creating a second policy.",
        ],
      },
      {
        heading: "Separate cancellations, reschedules and no-shows",
        paragraphs: [
          "These events create different operational costs. A student who moves a lesson three days in advance gives you a chance to refill the slot. A student who cancels ten minutes before class usually does not. A no-show also consumes the teaching window because you were present and ready.",
          "Write the policy so the categories are distinguishable. For example: advance reschedule, late cancellation and no-show. If your platform automatically handles one or more of these, match your wording to the platform rather than contradicting it.",
          "Students are more likely to accept a boundary when they understand it before the first conflict.",
        ],
      },
      {
        heading: "Define exceptions before emotions are involved",
        paragraphs: [
          "Emergencies happen. Decide in advance how much discretion you want. You might allow one courtesy exception, treat documented emergencies differently, or simply use the platform policy in every case. Any of those can work if the rule is predictable.",
          "Avoid creating an exception so broad that the policy becomes meaningless. “I understand if something comes up” can turn every late cancellation into a negotiation. A better approach is to state that genuine emergencies can be reviewed individually while routine schedule changes follow the normal rule.",
          "Keep records simple: date, event and whether an exception was used. You do not need a complex disciplinary system.",
        ],
      },
      {
        heading: "Use plain language students can understand",
        paragraphs: [
          "A useful policy can fit in a short paragraph. Example framework: “Lessons can be rescheduled without charge until [notice window] before the start time. Later changes and no-shows follow [platform or tutor rule]. If there is a genuine emergency, message me and I’ll review it case by case.” Adapt the wording to the service you actually use.",
          "Do not hide the policy in a long welcome document if it matters financially. Mention it during onboarding or place it where students can find it easily.",
          "The best policy reduces conversation, not increases it. When a late change happens, refer calmly to the existing rule and move on.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "rescheduling-policy-online-spanish-tutor",
    title: "A Rescheduling Policy That Works for Online Spanish Tutors",
    description:
      "Design a practical rescheduling policy for online Spanish lessons that balances flexibility, student retention and protection from constant calendar disruption.",
    eyebrow: "OPERATIONS · RESCHEDULING",
    readingTime: "9 min",
    keywords: [
      "online tutor rescheduling policy",
      "Spanish tutor reschedule policy",
      "reschedule online lessons",
      "tutoring scheduling rules",
    ],
    relatedHref: "/resources",
    relatedLabel: "Make lesson prep easier with SpanishCue",
    relatedLessonIds: [15, 14],
    relatedGuideSlugs: [
      "cancellation-policy-spanish-tutor",
      "availability-online-spanish-tutor",
      "retain-online-spanish-students",
    ],
    sections: [
      {
        heading: "Decide how much flexibility your calendar can absorb",
        paragraphs: [
          "Flexibility is valuable to students, but unlimited rescheduling can quietly destroy a tutor's week. A lesson moved from Tuesday to Thursday may seem neutral, yet it can create dead gaps, overfill another day and turn your original availability into a permanent negotiation.",
          "Define what you can sustainably offer. For example, changes made before a clear notice window may be moved to any open slot; later changes follow the cancellation rule. If the platform provides self-service rescheduling, direct students to that flow whenever possible.",
          "This is operational guidance, not legal advice. Marketplace terms and local consumer rules may override a private tutor policy.",
        ],
      },
      {
        heading: "Keep rescheduling separate from emergency handling",
        paragraphs: [
          "Routine convenience and genuine emergencies are not the same category. If every schedule conflict becomes an exception, the boundary disappears. A clear policy can still include compassion without making the calendar unpredictable.",
          "One model is to allow normal rescheduling inside the notice window and reserve manual exceptions for rare emergencies. Another is to use the platform's automatic rule with no manual exceptions. Choose the model you can apply without resentment.",
          "Tell students early. Boundaries are easier to accept during onboarding than after a problem occurs.",
        ],
      },
      {
        heading: "Protect high-demand teaching blocks",
        paragraphs: [
          "Prime-time slots have a higher opportunity cost because another student might have booked them. Consider whether frequent moves out of those slots should trigger a conversation about a more realistic recurring time.",
          "If a student reschedules every week, the problem may not be the policy; the recurring slot may simply be wrong. Offer two or three alternatives rather than continuing a pattern of last-minute changes.",
          "A reliable recurring slot is one of the simplest retention tools because it turns studying into a routine rather than a weekly booking decision.",
        ],
      },
      {
        heading: "Use one message pattern instead of rewriting the rule",
        paragraphs: [
          "Create a short response template for common cases. Example: “No problem, you can move the lesson to any open time before [deadline]. If the change is later than that, the normal cancellation rule applies.”",
          "Templates save time and reduce emotional inconsistency. You can still personalize the greeting without changing the underlying rule.",
          "If the student repeatedly asks for exceptions, refer to the policy rather than inventing a new explanation each time.",
        ],
      },
      {
        heading: "Review the policy when the business changes",
        paragraphs: [
          "A tutor with ten weekly lessons can absorb schedule changes differently from a tutor with thirty. Revisit the rule when your calendar becomes fuller, your time zone changes or you begin teaching in larger blocks.",
          "Track repeated reschedules for a month. If the same students or time windows cause most disruptions, solve that specific pattern before making the policy stricter for everyone.",
          "A good rescheduling policy keeps useful flexibility while preserving enough structure for you to plan income, preparation and rest.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "availability-online-spanish-tutor",
    title: "How Much Availability Should an Online Spanish Tutor Open?",
    description:
      "Plan online Spanish tutoring availability using demand windows, teaching energy, schedule fragmentation and realistic capacity instead of opening every possible hour.",
    eyebrow: "OPERATIONS · AVAILABILITY",
    readingTime: "10 min",
    keywords: [
      "online tutor availability",
      "Spanish tutor schedule",
      "how many tutoring hours open",
      "online Spanish tutor calendar",
    ],
    relatedHref: "/resources",
    relatedLabel: "Reduce preparation pressure with SpanishCue",
    relatedLessonIds: [15, 14, 17],
    relatedGuideSlugs: [
      "fill-weekly-schedule-spanish-tutor",
      "cancellation-policy-spanish-tutor",
      "lesson-prep-system-spanish-tutors",
    ],
    sections: [
      {
        heading: "Separate available time from sellable teaching capacity",
        paragraphs: [
          "You may be awake and technically free for ten hours, but that does not mean you should open ten teaching hours. Live one-to-one lessons require attention, social energy and recovery. Your capacity is the amount you can teach consistently while preserving lesson quality.",
          "Start with the weekly number of paid lessons you would be comfortable delivering if every open slot sold. Then add a small buffer of extra availability so students have choices. Avoid opening a calendar that would become impossible if demand actually arrived.",
          "Example scenario: if your sustainable target is 24 lessons per week, you might open 30–34 well-placed slots rather than 60 scattered possibilities.",
        ],
      },
      {
        heading: "Use blocks to reduce schedule fragmentation",
        paragraphs: [
          "Three consecutive lessons with a planned break may consume less of your day than three lessons separated by ninety-minute gaps. Consolidated blocks protect the rest of the day for preparation, administration or personal time.",
          "Choose anchor blocks where demand and your energy overlap. For example, two afternoon blocks for European students and two evening blocks for learners in the Americas. The exact hours depend on your location and market.",
          "Do not copy generic “best teaching hours” without looking at your own bookings. Your historical data is more useful than an internet average.",
        ],
      },
      {
        heading: "Open enough future availability to support a routine",
        paragraphs: [
          "Students are more likely to continue when they can find the same time next week. If your calendar only opens a few days in advance, recurring learners may struggle to build a rhythm.",
          "At the same time, do not publish months of availability if your travel or work plans are uncertain. A smaller reliable horizon is better than frequent future cancellations.",
          "Review recurring slots separately from one-off openings. Regular students should not compete with every new inquiry for the same time if you already know their pattern.",
        ],
      },
      {
        heading: "Treat unused availability as information",
        paragraphs: [
          "An empty slot is not automatically a failure. After several weeks, however, patterns matter. If a block never sells while another is constantly full, shift availability gradually.",
          "Measure paid utilization by block, not only by week. A tutor may be 70% utilized overall but 100% full on evenings and 20% full on mornings. That suggests a scheduling adjustment before a pricing change.",
          "Close low-value fragments if they prevent you from using the day productively.",
        ],
      },
      {
        heading: "Make capacity depend on prep efficiency too",
        paragraphs: [
          "A schedule that looks reasonable can become exhausting if every lesson creates large preparation tasks. Estimate the average prep minutes per recurring student and include that in capacity planning.",
          "Reusable resources make availability more valuable because an additional booking no longer implies creating an additional lesson from scratch. You still adapt the class, but the underlying teaching sequence already exists.",
          "Increase open availability only after the current workload feels stable. Growth that immediately creates rushed lessons and constant rescheduling is not useful capacity.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "first-online-spanish-lesson",
    title: "How to Teach Your First Online Spanish Lesson",
    description:
      "Structure a first online Spanish lesson around goals, diagnosis, a useful sample task and a clear next step without turning the hour into an interview.",
    eyebrow: "TEACHING BUSINESS · FIRST LESSON",
    readingTime: "10 min",
    keywords: [
      "first online Spanish lesson",
      "first Spanish tutoring lesson",
      "how to teach first Spanish class",
      "online Spanish tutor first lesson",
    ],
    relatedHref: "/resources",
    relatedLabel: "Choose a first-lesson resource from SpanishCue",
    relatedLessonIds: [15, 120, 121, 130],
    relatedGuideSlugs: [
      "assess-spanish-student-level-online",
      "spanish-student-learning-plan",
      "retain-online-spanish-students",
    ],
    sections: [
      {
        heading: "Give the first lesson only four jobs",
        paragraphs: [
          "The first lesson does not need to map the student's entire linguistic system. It needs to establish rapport, clarify the real goal, collect enough evidence to choose a direction and let the student experience how you teach.",
          "Trying to do more often creates an interview followed by a rushed mini-lesson. Keep intake questions tied to decisions you will actually make today.",
          "A useful opening question is not merely “Why are you learning Spanish?” but “What situation do you want to handle better in Spanish three months from now?”",
        ],
      },
      {
        heading: "Diagnose through a task, not only through questions",
        paragraphs: [
          "If the learner says they are A2, give them an A2-style task and observe what happens. Ask them to describe a recent event, plan a weekend or solve a travel problem. The language they produce reveals more than a self-reported level.",
          "For a beginner, diagnostic evidence can come from comprehension, pronunciation, cognates, willingness to imitate and the ability to build a simple sentence with support.",
          "Do not correct every error during diagnosis. Record patterns first so you can distinguish a recurring gap from one accidental mistake.",
        ],
      },
      {
        heading: "Teach one thing well enough to create a before-and-after",
        paragraphs: [
          "Choose a target that matters for the student's goal and can change within the lesson. An intermediate learner may turn one-sentence answers into reason + example. A beginner may complete a short invitation or restaurant exchange. A pronunciation student may stabilize one vowel contrast.",
          "The student should have a second attempt after support. That transfer step is what demonstrates your teaching, because they can compare their first performance with the later one.",
          "Avoid selecting a topic just because you have a beautiful slide deck. The sample needs to answer the learner's problem.",
        ],
      },
      {
        heading: "Explain what you observed in plain language",
        paragraphs: [
          "At the end, give a short diagnostic summary: one strength, one priority gap and one implication for future lessons. Example: “You understand questions quickly and have enough vocabulary, but your past stories stay in the present. I would work on past-time framing and narrative structure before adding more advanced vocabulary.”",
          "Avoid pretending that one lesson gives a precise CEFR score. If you are uncertain, say that the level is provisional and will become clearer across the next sessions.",
          "The student should leave with a better understanding of their learning problem, not simply a list of mistakes.",
        ],
      },
      {
        heading: "End with the next three steps",
        paragraphs: [
          "A short plan makes the relationship feel intentional. Give three to five next themes rather than a thirty-lesson curriculum. For example: past narration, follow-up questions, listening to regional voices and a review lesson.",
          "Connect each theme to the student's goal. This shows why the sequence exists.",
          "Keep the plan editable. A good first lesson produces a hypothesis about the learner; recurring lessons test and refine it.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "assess-spanish-student-level-online",
    title: "How to Assess a Spanish Student's Level Online",
    description:
      "Assess a Spanish student's practical level online using comprehension, interaction, production and targeted language samples without pretending one short conversation is a perfect CEFR test.",
    eyebrow: "TEACHING BUSINESS · LEVEL ASSESSMENT",
    readingTime: "11 min",
    keywords: [
      "assess Spanish student level",
      "Spanish placement online tutor",
      "Spanish level assessment lesson",
      "online Spanish tutor assessment",
    ],
    relatedHref: "/resources",
    relatedLabel: "Use level-specific SpanishCue resources",
    relatedLessonIds: [15, 14, 13, 11],
    relatedGuideSlugs: [
      "first-online-spanish-lesson",
      "spanish-student-learning-plan",
      "teach-beginner-spanish-online",
    ],
    sections: [
      {
        heading: "Assess what the student can do, not just what grammar they know",
        paragraphs: [
          "A learner may know the name of the subjunctive and still struggle to order coffee. Another may communicate effectively while making frequent article errors. A useful tutor assessment therefore samples communicative ability as well as formal knowledge.",
          "Use CEFR-style functions as a broad frame: Can the learner exchange basic information? Describe experiences? Narrate events? Explain opinions? Handle unexpected questions? Reformulate when they lack a word?",
          "Do not reduce the assessment to a checklist of tenses. Grammar matters because it supports meaning, not because every level has a magical inventory that must appear on command.",
        ],
      },
      {
        heading: "Sample comprehension and interaction first",
        paragraphs: [
          "Begin with questions the learner can likely understand, then increase complexity gradually. Observe whether they need repetition, translation, slower speech or rephrasing.",
          "Interaction matters separately from monologue. A student may deliver a rehearsed introduction but struggle when the tutor asks an unexpected follow-up. Notice turn-taking, repair strategies and whether they can ask for clarification.",
          "Record patterns without interrupting the flow constantly.",
        ],
      },
      {
        heading: "Use a short production task appropriate to the likely range",
        paragraphs: [
          "For A1–A2, use daily routines, simple descriptions, plans or past events with visible support. For B1–B2, ask for a story, comparison, recommendation or decision with reasons. For C1–C2, add ambiguity, reformulation, register or counterargument.",
          "If the task is too difficult, step down and see where performance stabilizes. If it is too easy, remove support or ask for greater precision.",
          "One task cannot prove a level. Use it to identify the next useful sample.",
        ],
      },
      {
        heading: "Look for control, range and independence",
        paragraphs: [
          "Control means how reliably the learner uses language they already know. Range means how many structures and words they can access. Independence means how much support they need to keep communicating.",
          "These dimensions explain why two students with similar grammar-test scores can need very different tutoring. One may need more vocabulary range; another may need automaticity and confidence.",
          "Pronunciation and listening should also be sampled when they are relevant to the goal rather than treated as optional extras.",
        ],
      },
      {
        heading: "Give a provisional result and a teaching recommendation",
        paragraphs: [
          "Instead of declaring “You are B1.3,” say what the learner can currently do and what is blocking the next step. Example: “You can sustain everyday conversation and narrate basic experiences, but longer past stories lose time reference and connectors.”",
          "If you use a CEFR label, make it provisional unless you have used a sufficiently broad assessment. Explain that ongoing lessons will provide more evidence.",
          "Turn the assessment into a learning plan immediately. The value is not the label; it is knowing what to teach next.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "spanish-student-learning-plan",
    title: "How to Build a Spanish Learning Plan After the First Lesson",
    description:
      "Turn a first Spanish lesson into a practical learning plan with communicative outcomes, lesson sequences, review points and visible progress.",
    eyebrow: "TEACHING BUSINESS · LEARNING PLAN",
    readingTime: "10 min",
    keywords: [
      "Spanish learning plan tutor",
      "Spanish student lesson plan sequence",
      "private Spanish tutor learning plan",
      "online Spanish course plan",
    ],
    relatedHref: "/sistema-verbal",
    relatedLabel: "Explore SpanishCue's structured verbal system",
    relatedLessonIds: [140, 142, 143, 148],
    relatedGuideSlugs: [
      "first-online-spanish-lesson",
      "assess-spanish-student-level-online",
      "retain-online-spanish-students",
    ],
    sections: [
      {
        heading: "Translate the student's goal into observable outcomes",
        paragraphs: [
          "“Become fluent” is too broad to sequence. Ask what fluency would allow the learner to do. A work goal might become “explain a project update for five minutes and answer follow-up questions.” A travel goal might become “handle accommodation, transport and common problems without switching languages.”",
          "Write two or three outcomes for the next block of lessons. They should be specific enough to guide activities and broad enough to allow personalization.",
          "Do not confuse outcomes with grammar topics. “Use the imperfect” is a language target; “describe past habits and set the background of a story” is a communicative outcome.",
        ],
      },
      {
        heading: "Sequence dependencies before variety",
        paragraphs: [
          "Some targets rely on others. A learner cannot use past counterfactuals effectively before they can control the relevant past and conditional forms. A beginner needs sentence building before complex free conversation.",
          "Create a dependency chain where needed, then alternate lesson types so the course does not feel like one long grammar syllabus. A past-tense block can include grammar, storytelling, listening and conversation while reinforcing the same language system.",
          "The plan should make recycling intentional. Important targets need to reappear after time has passed.",
        ],
      },
      {
        heading: "Use short blocks with review points",
        paragraphs: [
          "Plan three to six lessons at a time rather than designing six months in advance. A short block gives enough structure to prepare efficiently while leaving room for new evidence.",
          "At the end of the block, revisit the original outcome. Can the student perform the task more independently? Which errors still affect meaning? Which target is now ready to move into maintenance?",
          "Update the next block from performance rather than automatically continuing the syllabus.",
        ],
      },
      {
        heading: "Make progress visible without turning class into testing",
        paragraphs: [
          "Reuse comparable tasks. If the student struggled to narrate a weekend in lesson one, ask for a new story several weeks later and compare control, length and repair. The repeated task provides evidence without needing a formal exam.",
          "Keep a simple progress note: outcome, evidence, next step. Students often feel they are “not improving” because they remember remaining errors more clearly than earlier limitations.",
          "Show one or two concrete changes during review sessions.",
        ],
      },
      {
        heading: "Let the plan reduce tutor preparation",
        paragraphs: [
          "A clear sequence tells you what to select next. If the next block is past narration, you can prepare a set of related grammar, listening and conversation resources in one batch rather than searching before each class.",
          "SpanishCue's resource structure is useful here because the tutor can move between skill-focused materials while keeping the same communicative goal.",
          "The plan should save decisions, not create paperwork. If maintaining it takes longer than preparing the lesson, simplify it.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "retain-online-spanish-students",
    title: "How to Retain Online Spanish Students for Months, Not Weeks",
    description:
      "Improve Spanish student retention through visible progress, lesson continuity, appropriate challenge and sustainable scheduling rather than tricks or artificial dependency.",
    eyebrow: "RETENTION · ONLINE SPANISH",
    readingTime: "11 min",
    keywords: [
      "retain Spanish students",
      "online tutor student retention",
      "keep Spanish students",
      "Spanish tutor retention",
    ],
    relatedHref: "/resources",
    relatedLabel: "Build continuity with SpanishCue resources",
    relatedLessonIds: [137, 138, 208, 215],
    relatedGuideSlugs: [
      "spanish-student-learning-plan",
      "lesson-prep-system-spanish-tutors",
      "first-online-spanish-lesson",
    ],
    sections: [
      {
        heading: "Retention begins with fit, not persuasion",
        paragraphs: [
          "The easiest student to retain is one whose goal, schedule and learning preferences match what you actually teach. If a student wants intensive exam preparation and you only enjoy casual conversation, no retention tactic fixes the mismatch.",
          "Clarify fit during the first lesson. Explain your method and recommend a realistic frequency. If the learner needs another specialist, saying so can protect your reputation.",
          "Retention should mean continuing because the lessons remain useful, not creating dependence after the student's goal has been achieved.",
        ],
      },
      {
        heading: "Make each lesson connect to the previous one",
        paragraphs: [
          "Students notice when every class feels like a fresh topic with no memory. Start with a short retrieval of something from the previous lesson, then connect the new task to an existing target.",
          "Keep a small record of recurring errors, useful vocabulary and unfinished goals. Mention previous progress explicitly: “Last week you needed sentence starters for this; today we’ll try without them.”",
          "Continuity can exist even in conversation-only lessons if the tutor recycles language and follows themes across sessions.",
        ],
      },
      {
        heading: "Keep challenge in the productive zone",
        paragraphs: [
          "If the material is always easy, the student may enjoy the class but feel no progress. If it is consistently too difficult, the lesson becomes exhausting. Adjust support rather than simply changing topics.",
          "A useful progression is supported production, reduced support, new context and spontaneous use. The same language can remain active across several lessons while the task becomes more independent.",
          "Advanced students need challenge too. Add nuance, register, counterargument, subtext and reformulation rather than assuming free conversation is enough.",
        ],
      },
      {
        heading: "Use scheduling as part of the learning system",
        paragraphs: [
          "A recurring time reduces the number of decisions needed to continue. Encourage a realistic rhythm based on the student's goal and budget, but do not pressure them into more lessons than they can sustain.",
          "If attendance becomes irregular, ask whether the original schedule still fits. The solution may be a new recurring slot rather than motivational advice.",
          "Clear cancellation and rescheduling policies also protect retention because the relationship feels professional and predictable.",
        ],
      },
      {
        heading: "Show progress before the student has to ask",
        paragraphs: [
          "Every few lessons, summarize concrete changes. Compare an earlier task with a current one, revisit an old speaking prompt or show how a recurring error has decreased.",
          "Do not invent quantitative progress. Use observable evidence from the student's own performance.",
          "Visible progress supports motivation and also tells you when a goal is complete. At that point, define a new outcome together or reduce frequency rather than extending the course without purpose.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "lesson-prep-system-spanish-tutors",
    title: "A Lesson Prep System for Spanish Tutors Who Teach All Day",
    description:
      "Reduce Spanish lesson prep time with reusable lesson families, batching, student notes and a clear prep ceiling while keeping lessons personalized.",
    eyebrow: "PRODUCTIVITY · LESSON PREP",
    readingTime: "12 min",
    keywords: [
      "Spanish tutor lesson prep system",
      "reduce lesson preparation time",
      "online Spanish teacher prep",
      "Spanish tutor materials workflow",
    ],
    relatedHref: "/resources",
    relatedLabel: "Use SpanishCue as your reusable lesson library",
    relatedLessonIds: [108, 15, 18, 28],
    relatedGuideSlugs: [
      "real-hourly-rate-online-spanish-tutor",
      "retain-online-spanish-students",
      "spanish-student-learning-plan",
    ],
    sections: [
      {
        heading: "Set a preparation ceiling before optimizing anything",
        paragraphs: [
          "Decide how many unpaid minutes a normal recurring lesson is allowed to consume. Without a ceiling, preparation expands to fill the available time because there is always another image, example or activity you could add.",
          "A practical target depends on your rate and service. A highly specialized professional lesson may justify more prep than general conversation. The point is to make the cost intentional.",
          "Track actual prep for one week. Many tutors underestimate it because they count only slide creation and ignore searching, copying links and switching between files.",
        ],
      },
      {
        heading: "Separate selection, adaptation and creation",
        paragraphs: [
          "Selection means choosing an existing resource. Adaptation means changing examples, prompts or pacing. Creation means building a new resource from zero. These are different kinds of work.",
          "A sustainable system pushes most recurring lessons toward selection + adaptation. Creation should happen when you are building an asset you expect to reuse or serving a genuinely specialized need.",
          "If every lesson is creation, your business is also a custom-content studio and should be priced accordingly.",
        ],
      },
      {
        heading: "Build reusable lesson families around common problems",
        paragraphs: [
          "Organize resources by what students need to do: beginner interaction, present-time communication, past narration, opinions, travel situations, listening, pronunciation, negotiation and advanced discussion.",
          "Within each family, keep easier and harder versions or clear support options. That lets you reuse the teaching structure without giving every learner identical prompts.",
          "SpanishCue is designed around this logic: one library that can be selected by level, skill and teaching goal rather than disconnected one-off files.",
        ],
      },
      {
        heading: "Batch preparation instead of context-switching all day",
        paragraphs: [
          "Choose a weekly block to review upcoming students and select resources in groups. Preparing five lessons in one 45-minute block can be easier than spending ten minutes before each class because you stay in the same planning mode.",
          "Use short student notes to drive selection: current target, recurring error, completed lesson and next likely step. Do not maintain pages of notes that you never reread.",
          "Prepare the difficult or unusual lesson first; routine recurring lessons should take very little decision time.",
        ],
      },
      {
        heading: "Personalize at the high-value points",
        paragraphs: [
          "Personalization matters most in examples, questions, goals, feedback and pacing. Those elements connect the lesson to the student. Rebuilding the visual layout rarely adds equivalent learning value.",
          "Use the student's life for production prompts, choose topics they care about and recycle their own errors. Keep the underlying explanation or activity structure when it already works.",
          "This approach lets a tutor teach many different people without making every class feel generic or every evening disappear into preparation.",
        ],
      },
      {
        heading: "Measure preparation as part of profitability",
        paragraphs: [
          "Add prep and admin to your effective hourly-rate calculation. If your visible rate increases but your preparation time increases faster, the business may not improve.",
          "Review the average prep minutes per lesson monthly. A growing library should reduce that number over time even as lesson quality becomes more consistent.",
          "The best prep system makes good teaching easier to repeat, not merely faster.",
        ],
      },
    ],
  },
  {
    ...operationsCommon,
    slug: "conversation-only-spanish-lesson",
    title: "How to Structure a Conversation-Only Spanish Tutoring Lesson",
    description:
      "Run a conversation-only Spanish lesson with warm-up, depth, correction, recycling and closing retrieval so the class produces learning rather than forty-five minutes of random chat.",
    eyebrow: "TEACHING BUSINESS · CONVERSATION LESSONS",
    readingTime: "10 min",
    keywords: [
      "conversation only Spanish lesson",
      "Spanish conversation tutoring structure",
      "online Spanish conversation class",
      "Spanish speaking tutor lesson plan",
    ],
    relatedHref: "/spanish-conversation-activities",
    relatedLabel: "Browse SpanishCue conversation resources",
    relatedLessonIds: [15, 14, 13, 11],
    relatedGuideSlugs: [
      "retain-online-spanish-students",
      "spanish-student-learning-plan",
      "first-online-spanish-lesson",
    ],
    sections: [
      {
        heading: "Conversation-only should not mean objective-free",
        paragraphs: [
          "A student may not want explicit grammar study and still benefit from a lesson objective. The objective can be communicative: tell a longer story, defend an opinion, use clarification strategies, negotiate disagreement or speak with fewer pauses.",
          "Choose the objective after a short warm-up based on recurring needs. You do not need to announce a formal syllabus, but you should know what improvement you are listening for.",
          "Random topic switching can feel entertaining while producing little continuity. Keep a thread across lessons.",
        ],
      },
      {
        heading: "Warm up with an easy question that can expand",
        paragraphs: [
          "Start with something the student can answer immediately. Then use follow-ups to increase depth. A simple question about the weekend can lead into sequencing, evaluation, unexpected events and comparison.",
          "Avoid spending ten minutes searching for a “perfect” topic. Use a reusable bank of strong prompts organized by level and function.",
          "For beginners, visible options and sentence starters keep the conversation possible without turning it into a worksheet.",
        ],
      },
      {
        heading: "Collect errors selectively while the student speaks",
        paragraphs: [
          "Do not interrupt every sentence. Choose a correction focus: a recurring tense, pronunciation pattern, connector or word-order issue. Note other problems for later if they do not block meaning.",
          "When the student finishes a stretch of speaking, return to one or two examples and ask them to repair the sentence. This keeps correction active rather than becoming a lecture.",
          "If the same error appears across several lessons, make it a future mini-focus and recycle it deliberately.",
        ],
      },
      {
        heading: "Add one pressure change to create new language",
        paragraphs: [
          "Once the student is comfortable, change the task: add a constraint, ask them to defend the opposite position, require a concrete example, introduce a new piece of information or switch register.",
          "The change prevents the conversation from remaining at the student's safest language level. It also reveals whether new vocabulary or structures can transfer under pressure.",
          "At B2–C2, ambiguity and reformulation often create more useful challenge than choosing a more serious topic.",
        ],
      },
      {
        heading: "Close with retrieval and a visible next step",
        paragraphs: [
          "In the final minutes, ask the student to reuse two or three useful expressions from the conversation without looking, summarize their position more precisely or repair an earlier sentence.",
          "Tell them what improved and what you want to recycle next time. A one-sentence note is enough to create continuity.",
          "Conversation students often stay longer when they feel each class builds on the previous one rather than resetting to small talk.",
        ],
      },
    ],
  },
];
