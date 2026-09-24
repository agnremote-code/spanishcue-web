import type { TeachingGuide } from "./types";
import { PREPLY_SOURCES } from "./platform-sources";

const common = {
  pillar: "tutor-business" as const,
  cluster: "preply" as const,
  platform: "Preply" as const,
  publishedAt: "2026-09-24",
  lastReviewed: "2026-09-24",
  containsVolatilePlatformFacts: true,
};

export const preplyGuides: TeachingGuide[] = [
  {
    ...common,
    slug: "teach-spanish-on-preply",
    title: "How to Teach Spanish on Preply: A Practical Guide for Tutors",
    description:
      "A practical guide for Spanish tutors on Preply: profile positioning, availability, trial lessons, recurring lesson systems and a prep workflow that can scale.",
    eyebrow: "PREPLY · SPANISH TUTORS",
    readingTime: "11 min",
    keywords: [
      "teach Spanish on Preply",
      "Preply Spanish tutor",
      "how to teach on Preply",
      "Spanish tutor Preply guide",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse ready-to-teach Spanish resources",
    relatedLessonIds: [15, 14, 18, 108],
    relatedGuideSlugs: [
      "preply-spanish-tutor-profile",
      "preply-trial-lesson-spanish",
      "preply-25-vs-50-minute-trial",
    ],
    officialSources: [
      PREPLY_SOURCES.profile,
      PREPLY_SOURCES.video,
      PREPLY_SOURCES.availability,
      PREPLY_SOURCES.discovery,
    ],
    sections: [
      {
        heading: "Treat Preply as a teaching business, not only a calendar",
        paragraphs: [
          "Teaching Spanish on Preply is easier to manage when you separate three jobs that often get mixed together: being discoverable, converting a first lesson into a clear learning relationship, and delivering lessons efficiently enough that the work remains profitable. A polished profile can create interest, but it cannot compensate for a confusing trial. A strong trial can earn a second lesson, but retention suffers if every later class feels improvised. The useful system connects all three.",
          "Start by defining the student you can help especially well. “Spanish for everyone” sounds broad, but it gives a learner little reason to choose you over another tutor. A clearer offer could be Spanish for adults starting from zero, conversation for B1 learners who freeze when speaking, travel Spanish for an upcoming trip, Rioplatense Spanish, or structured grammar for learners who have studied before but still feel lost. You can still accept other students; the point is to make your strongest fit visible.",
          "Preply currently lets students discover tutors through marketplace search and filters such as specialty, spoken languages and availability. That makes profile clarity and realistic calendar coverage operational choices, not decorative details. Your objective is not to imitate whatever appears popular in search. It is to make the promise of your profile match the experience the student gets once they book.",
        ],
      },
      {
        heading: "Build one coherent message across headline, description and video",
        paragraphs: [
          "Your headline should tell a student what kind of Spanish help you provide, not merely state that you are a native speaker or certified teacher. Your description should expand that promise with the learner you work with, the outcomes you focus on and what lessons feel like. Your video should make the same positioning believable through your voice, presence and teaching style.",
          "For example, a tutor who wants adult beginners could make the profile revolve around structure and early speaking: “Spanish for adult beginners | Clear structure + conversation from lesson one.” The description can explain that lessons combine comprehensible examples, guided practice and short speaking tasks. The video can demonstrate calm, intelligible Spanish and briefly show how the tutor supports a beginner without switching into a lecture.",
          "Consistency matters because a student is making a small prediction: “If I book this tutor, what will an hour actually feel like?” If the headline promises conversation, the description reads like an academic CV and the video focuses only on the tutor’s travel history, the prediction becomes difficult. Make each surface answer the same question from a different angle.",
        ],
      },
      {
        heading: "Open availability you can genuinely sustain",
        paragraphs: [
          "Preply’s current availability tools use a recurring weekly schedule and also allow extra slots. The platform states that availability influences search visibility and shows tutors demand information in the calendar. Use those signals, but do not turn your calendar into a promise you cannot keep. A slot is useful only if you can teach it consistently without creating constant reschedules.",
          "A practical schedule begins with anchor blocks. Instead of scattering one-hour windows across every day, choose teaching blocks that protect your energy and reduce dead time between classes. Then add a smaller number of flexible slots where demand justifies them. If you travel or work across time zones, keep your account time zone accurate and review recurring availability before opening future weeks.",
          "Your calendar should also reflect prep capacity. If you can physically teach eight lessons in a day but need thirty minutes to reinvent material before each one, eight bookings may be unsustainable. A reusable lesson library changes the capacity equation because it moves preparation from “build a class” to “select, adapt and teach.” That is the workflow SpanishCue is designed to support.",
        ],
      },
      {
        heading: "Use the trial to diagnose, demonstrate and design the next step",
        paragraphs: [
          "A first lesson should not attempt to prove everything you know. Its job is narrower: understand the student, demonstrate enough teaching value for them to experience your method, and leave them with a credible next step. Preply’s current student guidance describes trial lessons around introductions, goals, a short level check, a sample activity and a suggested learning plan. That is a useful sequence because each part answers a decision the student is making.",
          "Ask what the learner wants to do in Spanish, not only what level they think they are. “I want B2” is abstract; “I need to speak to my partner’s family without translating everything” gives you material for a plan. Sample one or two skills that matter for that goal. If the learner is a beginner, use a task they can succeed at with support. If they are intermediate, choose an activity that reveals how they organize longer answers, use past tenses or handle follow-up questions.",
          "Finish by naming what you observed and proposing a short sequence. For example: “Your comprehension is already strong, but you pause when you have to narrate. I’d spend the next four lessons on past-time contrast, story structure and repeated speaking.” That is more useful than promising vague fluency.",
        ],
      },
      {
        heading: "Create a recurring lesson system after the trial",
        paragraphs: [
          "Retention is easier when students can feel continuity. That does not mean every class needs the same format. It means the learner can see how today connects to last week and to the goal they originally described. Keep a compact record of target language, recurring errors, completed material and the next logical challenge.",
          "A simple one-to-one lesson system can use five stages: retrieval from a previous lesson, a focused input or contrast, supported practice, a communicative task, and a closing retrieval. Conversation students can use the same architecture with less explicit instruction and more decision-making. Beginners can use more visual support. Advanced learners can spend more time reformulating, defending or revising a position.",
          "The benefit of a library is not merely having more activities. It is reducing the number of decisions you must make between lessons. When a student needs A2 past narration, you should be able to select a relevant resource, adapt the prompts to that student and teach, rather than design a new slide deck from zero.",
        ],
      },
      {
        heading: "Use a weekly operating checklist",
        bullets: [
          "Check that your headline, description and video describe the same learner and teaching experience.",
          "Keep only availability you can reliably teach, and review it when your time zone or workload changes.",
          "Before each trial, write one sentence describing the student’s likely goal and one sample task that can reveal useful information.",
          "After each first lesson, record the student’s goal, current strengths, priority gap and the next three to five lesson themes.",
          "Batch preparation: select and adapt several lessons in one block instead of preparing every class immediately before it starts.",
          "Track which students need review, which need a new challenge and which have not yet established a recurring schedule.",
        ],
        paragraphs: [
          "The marketplace can bring a learner to your calendar, but your teaching system determines whether the work becomes sustainable. The strongest use of Preply is not to optimize one isolated metric. It is to align your profile, first lesson, recurring lesson experience and working hours so the student receives what you promised and you can deliver it repeatedly.",
        ],
      },
    ],
  },
  {
    ...common,
    slug: "preply-spanish-tutor-profile",
    title: "How to Build a Spanish Tutor Profile on Preply",
    description:
      "Build a clearer Preply profile for Spanish tutoring by aligning your niche, headline, description, video, availability and lesson promise.",
    eyebrow: "PREPLY · PROFILE",
    readingTime: "10 min",
    keywords: [
      "Preply Spanish tutor profile",
      "Spanish tutor profile Preply",
      "Preply profile Spanish teacher",
      "how to improve Preply tutor profile",
    ],
    relatedHref: "/resources",
    relatedLabel: "Explore SpanishCue lesson resources",
    relatedLessonIds: [15, 14, 137],
    relatedGuideSlugs: [
      "preply-headline-spanish-tutor",
      "preply-description-spanish-tutor",
      "preply-introduction-video-spanish-tutor",
    ],
    officialSources: [
      PREPLY_SOURCES.profile,
      PREPLY_SOURCES.profileScore,
      PREPLY_SOURCES.discovery,
    ],
    sections: [
      {
        heading: "Design the profile around a student decision",
        paragraphs: [
          "A tutor profile is not a biography page. It is a decision surface for a student who is comparing several people quickly. The student needs to understand who you help, what kind of progress you focus on, how you teach and whether your schedule and style fit their life. Your personal story can build trust, but it should support those questions rather than replace them.",
          "Preply’s current profile guidance emphasizes that students see the headline and only the beginning of the description while browsing. The platform also describes Profile Score as being based on elements such as the photo, video and description. Treat that as a reason to make each component complete and coherent, not as a reason to stuff keywords or imitate another tutor.",
          "Before editing any field, write one positioning sentence privately: “I help [type of learner] do [specific thing] through [teaching approach].” Example: “I help adult beginners build usable Spanish through structured visual lessons and guided conversation.” This sentence does not have to appear verbatim on the profile. It acts as a filter for what belongs there.",
        ],
      },
      {
        heading: "Make the top of the profile immediately specific",
        paragraphs: [
          "The headline and first lines need to carry more information than “native Spanish speaker” or “experienced tutor.” Those statements may be true, but they do not tell a learner what studying with you solves. Add a recognizable learner or outcome: beginners, conversation, travel, business communication, pronunciation, DELE preparation, Rioplatense Spanish, or another area you genuinely teach.",
          "Specificity should remain honest. Do not invent years of experience, certifications, exam results or numbers of students taught. If your proof is smaller, use proof you actually have: formal training, a professional background relevant to a niche, experience teaching adults, knowledge of a regional variety, or a clear instructional system.",
          "The first paragraph of your description can then answer three questions: who the lessons are for, what students will work toward, and what the class experience is like. Save detailed history for later. The reader should not need to reach paragraph four to discover that you specialize in beginners.",
        ],
      },
      {
        heading: "Make the description explain the lesson experience",
        paragraphs: [
          "Many descriptions list qualities without translating them into a class. “Patient, dynamic and passionate” is difficult to evaluate because almost any tutor could write it. Replace adjectives with observable teaching choices: “I use visual examples before grammar explanations,” “we finish each class with a speaking task,” or “I keep a running plan of the language we need to recycle.”",
          "A useful description structure is: learner fit, goal, method, relevant experience, what a lesson looks like, and a clear invitation to book. The order matters because students first need to see themselves in the offer. Credentials have more meaning after the learner understands why they matter.",
          "Preply’s current description guidelines also prohibit certain profile content, including personal contact details and external links. Keep business contact, social links and off-platform promotion out of the profile and use the platform’s own messaging flow.",
        ],
      },
      {
        heading: "Use the video to confirm the written promise",
        paragraphs: [
          "A profile video should not be a spoken copy of the description. Use it to demonstrate the qualities text cannot: clarity, pace, pronunciation, warmth and how you explain yourself. If you teach beginners, let a beginner hear that your Spanish can be slow and comprehensible. If you sell advanced conversation, show that you can formulate precise, interesting questions without dominating the interaction.",
          "Keep production simple and professional. Good sound matters more than cinematic editing. Speak to the camera, use a stable horizontal frame, and give the student an idea of what they can expect in class. The official video requirements should be checked whenever you update the recording because approval rules can change.",
          "The written profile and the video should reinforce one another. If the profile says you specialize in pronunciation but the video never mentions or demonstrates pronunciation, that positioning remains abstract. If the profile promises practical conversation but the video is a two-minute résumé, the experience feels mismatched.",
        ],
      },
      {
        heading: "Align availability and price with the offer",
        paragraphs: [
          "A polished profile cannot convert a student who cannot find a workable time. Preply states that students can filter tutors using availability and other profile information. Open a schedule that overlaps with the learner markets you realistically want to serve, but do not create availability you regularly need to cancel.",
          "Price also communicates positioning. A lower rate can reduce the barrier to trying a newer tutor, but it can create a workload problem if you need too many teaching hours to reach your target income. A higher rate needs a clearer promise and consistent delivery. Treat price as part of the business model, not as a standalone trick for ranking or bookings.",
          "Review profile, price and availability together. If you change your niche from general conversation to business Spanish, for example, the description, sample lessons, available hours and rate may all need reconsideration.",
        ],
      },
      {
        heading: "Audit the profile as if you were the student",
        bullets: [
          "Can you identify the target learner in five seconds?",
          "Does the headline contain a real specialty or outcome rather than generic praise?",
          "Do the first lines explain how the student will benefit?",
          "Does the description explain what lessons actually involve?",
          "Does every factual claim about experience or qualifications remain verifiable?",
          "Does the video demonstrate the same teaching identity as the text?",
          "Is the availability real enough for a student to build a routine?",
          "If a student books today, can your trial lesson deliver the experience the profile promised?",
        ],
        paragraphs: [
          "The best profile is not the one with the most information. It is the one that reduces uncertainty for the right learner. When the profile creates a clear expectation and the lesson fulfills it, optimization stops being cosmetic and becomes part of the student experience.",
        ],
      },
    ],
  },
  {
    ...common,
    slug: "preply-headline-spanish-tutor",
    title: "Preply Headline Ideas for Spanish Tutors",
    description:
      "Write a specific Preply headline for Spanish tutoring using niche, trust and outcome signals, with original examples for different Spanish teaching offers.",
    eyebrow: "PREPLY · HEADLINE",
    readingTime: "9 min",
    keywords: [
      "Preply headline Spanish tutor",
      "Preply tutor headline examples",
      "Spanish tutor headline ideas",
      "Preply profile headline",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse SpanishCue resources by level",
    relatedLessonIds: [15, 14, 16],
    relatedGuideSlugs: [
      "preply-spanish-tutor-profile",
      "preply-description-spanish-tutor",
    ],
    officialSources: [PREPLY_SOURCES.profile],
    sections: [
      {
        heading: "A headline should filter as well as attract",
        paragraphs: [
          "The goal of a headline is not to sound impressive to everybody. It is to help the right student recognize a fit. “Native Spanish tutor” describes thousands of possible profiles. “Spanish for adult beginners | Clear structure + speaking from day one” tells a particular learner why they may want to click.",
          "Preply’s current guidance says the headline is highly visible in search results and recommends making it personalized, attention-grabbing and specific. The help center also reports that headlines in a 50–75 character range receive the most profile views. Treat that range as a platform recommendation to test your copy against, not as a guarantee that a certain character count will increase bookings.",
          "A useful headline combines two or three signals: the learner or niche, a relevant trust signal, and the outcome or teaching difference. You do not need all three if that makes the line crowded. Clarity is more important than squeezing every credential into one sentence.",
        ],
      },
      {
        heading: "Use a simple headline formula",
        bullets: [
          "Niche + outcome: Spanish for beginners | Build real conversations step by step",
          "Learner + method: Spanish for busy adults | Structured lessons without textbook overload",
          "Specialty + proof: Certified Spanish tutor | Pronunciation and confident speaking",
          "Variety + learner: Rioplatense Spanish | Vos, pronunciation and everyday Argentina",
          "Goal + method: Travel Spanish | Roleplays for the situations you will actually face",
        ],
        paragraphs: [
          "The formula is a starting point, not a template to copy mechanically. Choose words that match how you actually teach. If you do not use roleplays, do not promise roleplays. If you are not certified, replace that trust signal with something true. A headline that wins a click by creating the wrong expectation makes the rest of the funnel harder.",
          "Avoid empty intensifiers such as “best,” “amazing,” “perfect,” or “guaranteed fluency.” They consume space without helping the student predict the lesson. Specific nouns and outcomes usually do more work.",
        ],
      },
      {
        heading: "Original headline ideas for different Spanish niches",
        bullets: [
          "Spanish for adult beginners | Start speaking with clear, visual lessons",
          "Beginner Spanish without overwhelm | Structure, practice and conversation",
          "Conversation Spanish for B1 learners | Turn passive knowledge into speech",
          "Spanish for travel | Practical roleplays before your next trip",
          "Rioplatense Spanish | Learn vos, real pronunciation and everyday Argentina",
          "Spanish pronunciation | Clear vowels, rhythm and confident speech",
          "Business Spanish | Meetings, negotiation and professional conversation",
          "Spanish grammar made usable | Understand the contrast, then speak",
          "Spanish for expats | Everyday communication for life in Latin America",
          "Spanish for partners and families | Speak naturally in real conversations",
          "Intermediate Spanish | Stop translating and build longer answers",
          "Advanced Spanish conversation | Precision, nuance and real debate",
          "Spanish storytelling | Past tenses for experiences, stories and memories",
          "DELE-focused Spanish practice | Structured language and exam-task feedback",
          "Latin American Spanish | Practical speaking with regional awareness",
          "Spanish for professionals | Clear communication for work and travel",
        ],
        paragraphs: [
          "Use examples as models of specificity, not as claims you can borrow unchanged. “DELE-focused” only belongs on your profile if you genuinely understand the exam and can support that work. “Business Spanish” should mean you can design tasks around professional communication, not that you plan to teach the same general conversation lesson with office vocabulary.",
        ],
      },
      {
        heading: "Match the headline to the first paragraph",
        paragraphs: [
          "A strong headline creates a question the first paragraph should answer. If the headline says “Spanish for adult beginners,” the description should immediately explain what makes the lessons beginner-friendly. If it says “Conversation Spanish for B1 learners,” the first paragraph should explain how you move students from short answers to sustained speaking.",
          "Do not repeat the headline word for word. Expand it. Example: headline: “Travel Spanish | Practical roleplays before your next trip.” First paragraph: “If you have a trip coming up and want Spanish you can use at airports, hotels, restaurants and everyday interactions, we’ll build your lessons around those situations instead of a generic syllabus.”",
          "This creates continuity from search results to profile. The student sees a promise, clicks, and gets evidence that the promise is real.",
        ],
      },
      {
        heading: "Test the headline against five questions",
        bullets: [
          "Could ten thousand other tutors use this headline unchanged? If yes, make it more specific.",
          "Does it contain any claim you cannot prove?",
          "Would the right student know they are included?",
          "Does it describe a lesson outcome or experience, not only your identity?",
          "Does the description below it immediately support the promise?",
        ],
        paragraphs: [
          "You can revise a headline without constantly changing your whole positioning. Keep a stable niche long enough to learn whether the students you attract are a good fit. If you change it every few days based on anxiety rather than evidence, you make it harder to understand what is actually working.",
        ],
      },
    ],
  },
  {
    ...common,
    slug: "preply-description-spanish-tutor",
    title: "How to Write a Preply Description as a Spanish Tutor",
    description:
      "Write a student-centered Preply description for Spanish tutoring that explains your learner fit, method, lesson experience and next step without generic filler.",
    eyebrow: "PREPLY · DESCRIPTION",
    readingTime: "10 min",
    keywords: [
      "Preply description Spanish tutor",
      "Preply tutor bio Spanish",
      "Preply tutor about me",
      "Spanish tutor description Preply",
    ],
    relatedHref: "/resources",
    relatedLabel: "See ready-to-teach Spanish lesson examples",
    relatedLessonIds: [15, 14, 137],
    relatedGuideSlugs: [
      "preply-spanish-tutor-profile",
      "preply-headline-spanish-tutor",
    ],
    officialSources: [PREPLY_SOURCES.profile, PREPLY_SOURCES.profileScore],
    sections: [
      {
        heading: "Write for the student who is deciding whether to book",
        paragraphs: [
          "A useful tutor description is not a chronological autobiography. The student wants to know whether you understand their goal and whether your lessons seem like a credible way to reach it. You can include personality and background, but the description should keep returning to the learner.",
          "Preply’s current profile guidance recommends a student-centered description and separates the profile into areas such as self-introduction, teaching experience, motivation and headline. The Profile Score guidance also treats the description as one of the profile elements evaluated against platform guidelines. Use those requirements as constraints; within them, make the content specific to Spanish tutoring.",
          "Before writing, identify one primary learner. You can still mention secondary audiences later. Writing for “anyone who wants Spanish” often produces generic sentences because there is no concrete problem to solve.",
        ],
      },
      {
        heading: "Use a six-part description structure",
        bullets: [
          "Opening: name the learner and the problem or outcome.",
          "Approach: explain how you teach, using observable lesson choices.",
          "Experience: include relevant qualifications or background without copying a CV.",
          "Lesson experience: describe what students will actually do.",
          "Fit and boundaries: say who benefits most from your style or specialty.",
          "Call to action: invite the learner to book or message with a clear next step.",
        ],
        paragraphs: [
          "Example opening for beginners: “If you’re starting Spanish from zero and want structure without spending the whole class listening to grammar explanations, I build lessons that move from clear examples to guided speaking.” That sentence says more than “I am a passionate native teacher with personalized classes.”",
          "Example approach paragraph: “We normally work with one communicative target at a time. You’ll see the language in context, practice it with support, then use it in a roleplay or conversation. I keep track of what needs to come back so each class connects to the next.”",
        ],
      },
      {
        heading: "Turn vague qualities into evidence",
        paragraphs: [
          "“Patient” can become: “If you need extra processing time, I won’t rush to complete your sentence; I’ll give you a structure and let you build it.” “Dynamic” can become: “Lessons alternate between visual prompts, short controlled practice and conversation.” “Personalized” can become: “I use your goals and recurring errors to choose which language returns in later lessons.”",
          "Concrete descriptions reduce the need for superlatives. They also make it easier for a student to self-select. Someone who wants a highly structured class may like your system; someone who wants completely free conversation may realize another tutor fits better. That filtering is useful because a poor fit costs both people time.",
          "Keep claims proportional to evidence. If you have taught twenty students, do not imply thousands. If you have professional experience in finance but no formal business-Spanish curriculum, explain how that background informs relevant scenarios instead of presenting yourself as an exam-certified specialist.",
        ],
      },
      {
        heading: "Respect platform boundaries in the description",
        paragraphs: [
          "Preply’s current profile guidelines say tutors should not include personal contact details, external website or social links, surname, copied CV text or reviews inside the description. Keep the page focused on the teaching relationship available through the platform.",
          "The same source says the description should be written clearly, checked for language quality and end with a call to action. For a Spanish tutor, that final action can be specific: “Book a trial and tell me what you want to be able to do in Spanish three months from now.” This creates useful information for the lesson rather than a generic “Book now!”",
          "Do not claim that a trial is free. Preply currently treats trial lessons as paid lessons for students. Keep pricing or platform mechanics out of the description unless they are necessary and current; the platform already provides those details in the booking experience.",
        ],
      },
      {
        heading: "Rewrite a generic description into a useful one",
        paragraphs: [
          "Generic version: “Hello! My name is Ana and I am a native Spanish speaker. I am passionate about languages and love traveling. My classes are fun, dynamic and personalized. I can help you reach your goals. Book a lesson with me!”",
          "More useful version: “If you understand some Spanish but freeze when you have to answer, my lessons are built to turn passive knowledge into speech. We use short visual prompts, guided questions and repeated conversation so you practise the language more than once instead of seeing it and moving on. I work especially well with adults at A2–B1 who want practical conversation for travel, relationships or everyday life. I’ll correct the errors that matter to the lesson without interrupting every sentence. In the first lesson, we’ll identify what you can already do, where you lose confidence and what we should prioritize next.”",
          "The second version is not better because it is longer. It is better because a learner can predict the class, see a target audience and understand the teaching choices behind words such as “personalized.”",
        ],
      },
      {
        heading: "Run a final edit for clarity",
        bullets: [
          "Move the most student-relevant sentence into the first paragraph.",
          "Delete any adjective that is not supported by an example.",
          "Remove duplicated information already obvious from the headline.",
          "Check that qualifications are accurate and relevant to the offer.",
          "Replace long paragraphs with readable blocks where appropriate.",
          "Remove external contact information and promotional links.",
          "End with a next step that gives you useful information for the trial.",
        ],
        paragraphs: [
          "Your description should make the trial easier to teach. If a student arrives because the description clearly promised beginner structure, travel roleplays or advanced conversation, you already know what kind of sample experience should validate that promise.",
        ],
      },
    ],
  },
  {
    ...common,
    slug: "preply-introduction-video-spanish-tutor",
    title: "Preply Introduction Video for Spanish Tutors: What to Say and Show",
    description:
      "Plan a Preply introduction video for Spanish tutoring that follows current platform requirements while showing your voice, learner fit and real teaching approach.",
    eyebrow: "PREPLY · VIDEO",
    readingTime: "10 min",
    keywords: [
      "Preply introduction video Spanish tutor",
      "Preply tutor video script",
      "Spanish teacher intro video Preply",
      "Preply video requirements tutor",
    ],
    relatedHref: "/resources",
    relatedLabel: "Explore Spanish pronunciation and beginner resources",
    relatedLessonIds: [201, 202, 15],
    relatedGuideSlugs: [
      "preply-spanish-tutor-profile",
      "preply-trial-lesson-spanish",
    ],
    officialSources: [PREPLY_SOURCES.video],
    sections: [
      {
        heading: "Use the video to demonstrate, not just describe",
        paragraphs: [
          "Students can read your qualifications. The video can answer a different set of questions: Do you speak clearly? Is your pace comfortable? Does your personality match the kind of class I want? Can I imagine talking to this person every week? For language teaching, those questions matter because the tutor’s voice and interaction style are part of the product.",
          "Preply’s current video guidelines require a horizontal video between 30 seconds and 2 minutes and specify practical approval conditions such as stable framing, clear sound, a visible face and no external contact details or promotional links. The help center also suggests a content progression from introduction to teaching skills and an invitation to book.",
          "Within those boundaries, make the video specific to Spanish. A learner should hear the language, understand your specialization and get one concrete clue about how lessons work.",
        ],
      },
      {
        heading: "Structure the first 15 seconds around relevance",
        paragraphs: [
          "Do not spend the opening on a long life story. Introduce yourself, say what you teach and identify the learner you most want to help. Example: “Hola, soy Laura. Enseño español a adultos que ya estudiaron un poco pero necesitan hablar con más confianza.” Then, if useful for your audience, add a short sentence in another language you genuinely speak.",
          "For beginners, your Spanish itself can demonstrate teaching awareness. Speak naturally but clearly, without exaggerating every syllable. A beginner who hears calm, comprehensible Spanish may learn more about your teaching style from ten seconds of speech than from a claim that you are patient.",
          "If your niche is regional, name it. “I teach Rioplatense Spanish, including vos and everyday pronunciation from Argentina.” If your niche is business communication, name the tasks: meetings, presentations, negotiation or professional conversation.",
        ],
      },
      {
        heading: "Show what the student will do in lessons",
        paragraphs: [
          "The middle of the video should translate your method into actions. Instead of “my methodology is communicative,” say something like: “We’ll start with a clear target, use examples you can understand, then practise through conversation or roleplay. I keep track of the language we need to recycle so we don’t simply move on and forget it.”",
          "Do not turn the profile video into a full demonstration lesson. Preply’s current guidelines explicitly advise against slideshows, presentations or demo lessons in the video. You can still describe one short teaching choice or show your ability to explain something verbally.",
          "If pronunciation is part of your offer, your own sound quality becomes especially important. Record a test first. Background noise or aggressive noise reduction can make consonants and vowels harder to hear. A simple quiet room, stable camera and clear microphone usually communicate professionalism better than heavy editing.",
        ],
      },
      {
        heading: "Use a script framework, not a memorized monologue",
        bullets: [
          "0–15 seconds: first name, Spanish teaching focus and target learner.",
          "15–35 seconds: relevant experience or qualifications.",
          "35–60 seconds: what students actually do in lessons.",
          "60–80 seconds: one specialization or teaching difference.",
          "Final 10–20 seconds: invite the student to book and tell you their goal.",
        ],
        paragraphs: [
          "A possible framework is: “Hola, soy ___. I help ___ learners who want to ___. In my lessons we ___. My background in ___ helps me ___. If your goal is ___, we can build a plan around ___. Book a trial and tell me what you want to be able to do in Spanish.” Replace every blank with something true and specific.",
          "You do not need to fill two minutes. A concise, natural video that gives a clear picture of the lesson is stronger than a longer script padded with hobbies and generic motivation.",
        ],
      },
      {
        heading: "Avoid production choices that weaken trust",
        paragraphs: [
          "Do not use the video to direct students to another website, social account or contact method. Do not include a surname if the platform asks tutors to use first name only. Do not record vertically when the current approval rules require horizontal framing.",
          "Avoid reading from a script placed far from the camera. Students notice when eye contact disappears for every sentence. Use bullet points, rehearse the structure, and record multiple takes. Natural pauses are acceptable; the goal is not television performance.",
          "Keep the background visually quiet. A bookshelf or plain wall can work. The student should focus on your face and voice, not on a virtual background, animated titles or a collection of logos.",
        ],
      },
      {
        heading: "Check the video against the lesson promise",
        bullets: [
          "Can a viewer identify who you teach?",
          "Do they hear Spanish at a level appropriate to your target learner?",
          "Do you explain at least one concrete teaching choice?",
          "Are your credentials or experience described accurately?",
          "Does your pace match the teaching identity you claim?",
          "Does the ending give the student a useful next step?",
          "Does the recording still comply with the latest Preply video requirements?",
        ],
        paragraphs: [
          "The video is successful when it reduces uncertainty. The student should finish it knowing not only who you are, but what kind of Spanish learning relationship you are offering.",
        ],
      },
    ],
  },
  {
    ...common,
    slug: "preply-trial-lesson-spanish",
    title: "How to Structure a Preply Trial Lesson for Spanish Students",
    description:
      "A practical Preply trial lesson structure for Spanish tutors: goals, diagnostic, sample teaching, learning plan and a clear transition into recurring lessons.",
    eyebrow: "PREPLY · TRIAL",
    readingTime: "12 min",
    keywords: [
      "Preply trial lesson Spanish tutor",
      "Preply Spanish trial lesson",
      "how to structure Preply trial lesson",
      "Spanish tutor trial lesson plan",
    ],
    relatedHref: "/resources",
    relatedLabel: "Choose a SpanishCue resource for your sample activity",
    relatedLessonIds: [15, 14, 121, 130],
    relatedGuideSlugs: [
      "preply-25-vs-50-minute-trial",
      "teach-spanish-on-preply",
    ],
    officialSources: [PREPLY_SOURCES.trial],
    sections: [
      {
        heading: "Give the trial three jobs",
        paragraphs: [
          "A trial lesson should diagnose enough to make a plan, demonstrate enough teaching for the student to experience your approach, and create enough clarity that the next lesson has an obvious purpose. Trying to cover an entire grammar unit or deliver a complete placement exam usually works against those goals.",
          "Preply’s current student guidance describes a typical trial as including introductions, discussion of goals, a short level check, a sample learning activity and a suggested learning plan. That sequence is useful because it balances conversation about the student with actual learning. The student should not leave thinking, “We talked about learning Spanish for an hour, but I never actually learned or used anything.”",
          "Before the lesson, choose one sample task that can flex up or down. For a beginner, that might be a visual A1 conversation with sentence support. For an intermediate learner, use a task that requires reasons, past narration or follow-up questions. For an advanced learner, use ambiguity, reformulation or argumentation rather than a generic “tell me about yourself.”",
        ],
      },
      {
        heading: "Open by clarifying the real-world goal",
        paragraphs: [
          "Ask what the student wants to be able to do with Spanish. A target such as “B1” can be part of the answer, but it should not be the whole answer. Travel, a partner’s family, relocation, work, university, DELE, literature or simply conversation confidence imply different priorities.",
          "Useful questions include: “When do you most need Spanish?” “What can you already do comfortably?” “What situation makes you freeze?” “Have you studied grammar before?” “How much time can you realistically use Spanish between lessons?” Keep this short. The trial is not an intake interview.",
          "Reflect the goal back in concrete terms. “So the priority is to follow family conversations and answer without translating every sentence.” That gives both of you a test for whether the learning plan makes sense.",
        ],
      },
      {
        heading: "Use a short diagnostic that produces teaching decisions",
        paragraphs: [
          "A diagnostic should change what you do next. For A1–A2 learners, listen for basic comprehension, sentence formation, high-frequency verbs and whether visual support unlocks more language. For B1–B2, listen for discourse length, tense control, connectors, circumlocution and ability to respond to follow-up questions. For advanced learners, listen for precision, register, reformulation and whether errors are local or systemic.",
          "Do not correct everything during diagnosis. If you interrupt every sentence, you alter the sample you are trying to observe. Take notes and choose two or three patterns that matter for the student’s stated goal.",
          "Avoid giving a false sense of precision. A short conversation can support a working estimate and identify priorities, but it is not always enough to certify an exact CEFR level across listening, reading, writing and speaking.",
        ],
      },
      {
        heading: "Teach one small thing well",
        paragraphs: [
          "The sample activity is where the student should experience your method. Choose a target small enough to improve within the trial: a ser/estar contrast, a pronunciation distinction, a past-tense narrative choice, useful travel chunks, or a strategy for extending answers.",
          "Use a simple sequence: show the language in context, ask the student to notice or interpret something, provide brief support, then require output. If the student improves between the first attempt and the final attempt, name that change. Visible progress in a small area is more credible than promising that the entire level will become easy.",
          "SpanishCue resources can function as that sample without exposing the entire library. Select a lesson that matches the learner and use only the portion needed for the diagnostic or demonstration. The trial should feel tailored even when the underlying resource is reusable.",
        ],
      },
      {
        heading: "Turn observations into a short learning plan",
        paragraphs: [
          "A useful plan should be specific enough to guide the next few lessons but flexible enough to change. Avoid a twenty-topic syllabus created before you have taught the student. Give three to five priorities in sequence.",
          "Example for an A2 learner: “1) make present-tense answers longer, 2) stabilize past narration with preterite/imperfect, 3) build travel roleplays around your trip, 4) recycle pronunciation problems as they appear.” Example for B1 conversation: “1) answer with reason + example, 2) narrate experiences with clearer time framing, 3) use connectors for contrast, 4) practise spontaneous follow-up.”",
          "Explain why the sequence connects to the goal. Students are more likely to perceive structure when they can see the relationship between a lesson and a real communication problem.",
        ],
      },
      {
        heading: "Close with a clear next step, not pressure",
        paragraphs: [
          "Summarize what you observed, name one thing the student did well, identify the highest-priority gap and explain what the next lesson would do. If the platform currently moves students from a trial into a subscription, let the booking interface handle the mechanics while you clarify the learning decision.",
          "A strong close can sound like: “You already understand most questions without translation. The main issue is that your answers collapse to one sentence when you need the past. Next lesson I’d work on a simple story framework and the preterite/imperfect contrast using your own experiences.”",
          "Do not manufacture urgency or guarantee fluency. The value of the trial is that the student should have enough evidence to decide whether your teaching system fits them.",
        ],
      },
      {
        heading: "Trial checklist for the tutor",
        bullets: [
          "One real-world learner goal identified.",
          "One short diagnostic that changes your teaching decision.",
          "One sample activity with visible student output.",
          "Two or three useful observations recorded.",
          "A three-to-five-step provisional plan.",
          "A concrete next-lesson recommendation.",
          "No attempt to teach an entire level inside the trial.",
        ],
      },
    ],
  },
  {
    ...common,
    slug: "preply-25-vs-50-minute-trial",
    title: "25 vs. 50 Minute Preply Trial: How Spanish Tutors Can Use Each Format",
    description:
      "Structure 25- and 50-minute Preply trial lessons differently so Spanish students still receive diagnosis, useful teaching and a credible next-step plan.",
    eyebrow: "PREPLY · TRIAL FORMAT",
    readingTime: "10 min",
    keywords: [
      "Preply 25 minute trial",
      "Preply 50 minute trial",
      "Preply trial lesson length",
      "Spanish tutor Preply trial 25 50",
    ],
    relatedHref: "/resources",
    relatedLabel: "Find short, flexible SpanishCue lesson resources",
    relatedLessonIds: [15, 121, 14],
    relatedGuideSlugs: [
      "preply-trial-lesson-spanish",
      "teach-spanish-on-preply",
    ],
    officialSources: [PREPLY_SOURCES.trial],
    sections: [
      {
        heading: "Treat 25 and 50 minutes as two different products",
        paragraphs: [
          "Preply currently allows students to book a first lesson of 25 or 50 minutes, and the duration is selected during booking. A 25-minute trial is not a 50-minute plan that you rush through. It needs a smaller promise. If you try to fit introductions, full level assessment, grammar instruction, conversation, platform explanation and long-term planning into 25 minutes, the student experiences speed rather than clarity.",
          "Both formats should still answer the same three questions: What does this student need? What is it like to learn with you? What should happen next? The difference is how much evidence you collect and how large the sample activity can be.",
          "Prepare two default structures so you do not redesign the trial after seeing the booking length.",
        ],
      },
      {
        heading: "A practical 25-minute structure",
        bullets: [
          "0–3 minutes: rapport and one-sentence goal.",
          "3–8 minutes: focused diagnostic conversation or comprehension check.",
          "8–17 minutes: one small teaching activity tied to the goal.",
          "17–21 minutes: second attempt or transfer task to show what changed.",
          "21–25 minutes: observations, provisional plan and next-lesson recommendation.",
        ],
        paragraphs: [
          "The diagnostic must be narrow. If the learner wants travel Spanish, do not attempt a general CEFR placement. Sample one or two travel interactions and observe comprehension, sentence building and repair strategies. If the learner wants conversation, ask a prompt with two follow-ups and see what limits the answer.",
          "The sample activity should use a target that can change quickly. Useful options include extending an answer with reason + example, correcting one pronunciation contrast, using a high-frequency travel sequence, or choosing between two past-time forms in a short story.",
        ],
      },
      {
        heading: "A practical 50-minute structure",
        bullets: [
          "0–7 minutes: goals, context and previous learning.",
          "7–17 minutes: broader but still focused diagnostic.",
          "17–34 minutes: sample lesson with input, support and production.",
          "34–40 minutes: transfer task or second speaking round.",
          "40–46 minutes: feedback and priority gaps.",
          "46–50 minutes: learning plan and next lesson.",
        ],
        paragraphs: [
          "The extra time should deepen evidence, not double the amount of teacher talk. You can sample more than one function, compare how the learner performs with and without support, or allow a fuller communicative task.",
          "A 50-minute trial is also long enough to demonstrate your normal class rhythm. If your recurring lessons use retrieval, focused input, speaking and a closing recap, let the student experience a compact version of that sequence.",
        ],
      },
      {
        heading: "What not to squeeze into 25 minutes",
        paragraphs: [
          "Do not deliver a complete grammar lecture because the student mentioned grammar. Choose one contrast and let them use it. Do not administer a long placement test unless the student specifically booked for assessment and the platform flow supports that purpose. Do not spend ten minutes explaining subscriptions, scheduling and policies before the student has experienced teaching.",
          "Avoid asking every intake question you might want to know eventually. The first recurring lesson can continue the diagnosis. The trial only needs enough information to make the next step credible.",
          "Most importantly, do not apologize for the shorter format. A concise trial can feel highly professional when the scope is intentional.",
        ],
      },
      {
        heading: "Choose sample material by transfer value",
        paragraphs: [
          "The best sample material lets you observe and teach at the same time. A visual A1 conversation can reveal comprehension, vocabulary retrieval and willingness to speak. A short past-tense narrative can reveal event/background choices. A pronunciation task can show perception and production. A roleplay can reveal whether the student can repair communication when they lack a word.",
          "Use resources modularly. You do not need to complete a 45-minute lesson during the trial. Select the opening prompt, one explanation or example, and one speaking task that demonstrates the teaching experience.",
          "Keep one A1, one A2 and one B1/B2 sample resource ready so the trial remains fast to prepare without becoming generic.",
        ],
      },
      {
        heading: "End both formats with the same clarity",
        paragraphs: [
          "Whether the trial is 25 or 50 minutes, the student should leave knowing what you observed and what you recommend next. Use evidence from the lesson: “When you had sentence starters, your answer became much longer; I’d gradually remove that support over the next few lessons.”",
          "State the next lesson in concrete terms. “Next time: past narration with your travel stories” is stronger than “We’ll continue improving your Spanish.” A specific next step turns the trial from an isolated sample into the beginning of a sequence.",
          "Review the platform’s current trial rules periodically. Duration and booking mechanics are platform-controlled and can change; your teaching framework should remain adaptable even if those details do.",
        ],
      },
    ],
  },
  {
    ...common,
    slug: "preply-trial-to-subscription-spanish",
    title: "Preply Trial-to-Subscription Conversion for Spanish Tutors",
    description:
      "Understand Preply trial-to-subscription conversion as a teaching funnel: diagnose the learner, demonstrate value, propose a credible plan and follow up without pressure.",
    eyebrow: "PREPLY · CONVERSION",
    readingTime: "12 min",
    keywords: ["Preply trial conversion", "Preply trial to subscription", "Spanish tutor conversion Preply", "Preply trial Spanish teacher"],
    relatedHref: "/resources",
    relatedLabel: "Choose sample lessons that show real teaching",
    relatedLessonIds: [15, 14, 121, 137],
    relatedGuideSlugs: ["preply-trial-lesson-spanish", "preply-super-tutor-spanish-teachers", "preply-post-trial-message-spanish"],
    officialSources: [PREPLY_SOURCES.trial, PREPLY_SOURCES.superTutor, PREPLY_SOURCES.superTutorMetrics],
    sections: [
      {
        heading: "Treat conversion as evidence of fit, not a sales trick",
        paragraphs: [
          "A trial converts when the learner has enough evidence to believe that continuing with you is a sensible next step. That evidence usually comes from three places: you understood the real goal, the student experienced a useful piece of teaching, and the next few lessons feel concrete rather than vague. Pressure can sometimes create a booking, but it does not create a durable teaching relationship.",
          "Preply currently includes trial-to-subscription conversion among the metrics used for Super Tutor assessment, with specific criteria that the platform can change over time. That makes the metric operationally relevant, but the healthiest way to improve it is still to improve the first-lesson experience and attract students who match your offer.",
          "Think of the funnel as profile → pre-trial message → trial → learning plan → follow-up → recurring schedule. A weak link early in the chain creates work later. If your profile promises exam preparation but the trial is casual conversation, no closing script can repair the mismatch."
        ]
      },
      {
        heading: "Improve conversion before the trial begins",
        paragraphs: [
          "Use the pre-trial message to remove uncertainty. Ask for the learner’s main goal, approximate experience with Spanish and one situation where they most want to use the language. Do not send a questionnaire with fifteen questions. You need just enough information to select a sample task that feels relevant.",
          "Review the learner’s stated goal before class and prepare one adaptable resource. For a beginner, choose a visual speaking task with support. For travel, choose a roleplay. For an intermediate conversation student, choose a prompt that reveals how they sustain an answer and handle follow-up. The trial feels personalized because the material serves the goal, not because you created a new deck from scratch.",
          "If the student’s goal does not match your expertise, be clear. Converting the wrong learner can increase short-term bookings while creating cancellations, frustration and poor retention later."
        ]
      },
      {
        heading: "Make the student experience a small improvement",
        paragraphs: [
          "The sample teaching portion should produce a before-and-after moment. That can be as simple as a learner giving a one-sentence answer, receiving a structure such as idea + reason + example, and then producing a longer answer. Or a learner can first confuse preterite and imperfect, see the event/background contrast, then retell a short scene with better choices.",
          "Name the improvement without exaggerating it: “Your second answer was longer because you had a structure to organize it.” This turns the lesson into evidence of method. The student is not being told that you are effective; they are seeing one concrete mechanism.",
          "Avoid choosing material mainly because it looks impressive. The best trial activity reveals something about the learner and gives you a reason to recommend what comes next."
        ]
      },
      {
        heading: "Build the learning plan from what happened in the room",
        paragraphs: [
          "A generic plan such as “grammar, vocabulary, speaking and listening” does not tell the student what you noticed. Use three to five priorities tied to their goal. For example: strengthen past narration, build longer spontaneous answers, recycle high-frequency connectors, and practise listening to regional speech.",
          "Sequence the priorities. If the learner cannot yet build basic present-tense sentences, advanced debate vocabulary is not the next step. If an advanced learner is fluent but imprecise, a beginner grammar sequence is not the right response just because it is easy to plan.",
          "A credible plan also protects you from overpromising. You are not predicting fluency by a date; you are explaining the work that would make progress more likely."
        ]
      },
      {
        heading: "Follow up with a recap, not a generic thank-you",
        paragraphs: [
          "Preply’s current Super Tutor criteria include pre- and post-trial engagement metrics. Beyond the metric, timely follow-up is pedagogically useful because it preserves the connection between the trial and the next lesson. Send a short recap of the learner’s goal, one observation and the next recommended step.",
          "Example pattern: “Thanks for today. Your comprehension is already solid at this level; the main gap is producing longer past-tense answers without stopping. Next time I’d use your travel stories to work on preterite vs. imperfect and then retell them with less support.”",
          "Do not send a wall of text or a hard sell. The message should help the learner make a decision with clear information."
        ]
      },
      {
        heading: "Read the metric without letting it distort your teaching",
        bullets: [
          "Track why a trial did not continue: poor fit, schedule, price, teaching experience, technical problem or unknown.",
          "Do not lower price reflexively after every non-conversion.",
          "Do not change your niche every week to chase a better percentage.",
          "Compare conversion together with retention; a trial that converts and stops after one regular lesson is not a strong long-term result.",
          "Recheck Preply’s current metric definition before using any threshold in business decisions."
        ],
        paragraphs: [
          "Conversion is useful feedback, but it is not a complete measure of teaching quality. Use it to investigate the experience you control: profile fit, preparation, clarity, sample teaching and follow-up."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "preply-super-tutor-spanish-teachers",
    title: "The Preply Super Tutor System for Spanish Teachers",
    description:
      "A current, source-backed guide to the Preply Super Tutor system for Spanish teachers, with practical ways to manage the metrics without teaching to a badge.",
    eyebrow: "PREPLY · SUPER TUTOR",
    readingTime: "12 min",
    keywords: ["Preply Super Tutor Spanish", "Super Tutor requirements Preply", "Preply Super Tutor criteria", "Spanish teacher Super Tutor"],
    relatedHref: "/resources",
    relatedLabel: "Build a consistent lesson system with SpanishCue",
    relatedLessonIds: [15, 14, 137, 138],
    relatedGuideSlugs: ["preply-trial-to-subscription-spanish", "preply-student-retention-spanish", "preply-pre-trial-message-spanish"],
    officialSources: [PREPLY_SOURCES.superTutor, PREPLY_SOURCES.superTutorMetrics],
    sections: [
      {
        heading: "Know what the badge represents before optimizing for it",
        paragraphs: [
          "Preply describes Super Tutor as a status for tutors who consistently meet a set of quality and reliability criteria. The criteria are evaluated over a rolling assessment period and can change. As of the September 2026 review for this guide, the official program documentation lists requirements around lessons taught, rating, attendance, trial conversion, rescheduling or cancellation behavior, messaging engagement and use of Preply Classroom for trials.",
          "Do not memorize these numbers forever. Treat the official Help Center and your Insights dashboard as the source of truth because thresholds and definitions are platform-controlled. SpanishCue’s role here is to help you understand the operational behaviors behind the metrics.",
          "A badge can improve visibility, but teaching only to the badge is a poor business strategy. The underlying behaviors—reliability, clear communication, good trial fit and consistent recurring lessons—matter even if the platform changes the label."
        ]
      },
      {
        heading: "Separate controllable metrics from outcomes",
        paragraphs: [
          "You directly control whether you attend lessons, how quickly you send a message, whether you use the required classroom workflow, and how often you cancel for reasons within your control. You influence but do not fully control trial conversion, ratings or long-term retention because student fit, budget, schedule and personal circumstances also matter.",
          "Build systems around the controllable parts. Use calendar buffers to reduce last-minute reschedules. Keep pre- and post-trial message templates that you personalize. Enter the correct classroom rather than improvising another link. Review your schedule before travel or time-zone changes.",
          "For influenced outcomes, investigate patterns instead of blaming individual students. If many trials fail to continue, compare profile promise with trial experience. If regular students disappear after a month, examine continuity, perceived progress and schedule consistency."
        ]
      },
      {
        heading: "Design trial engagement as useful communication",
        paragraphs: [
          "Current Preply criteria include messaging behavior around trials. The best way to meet that kind of requirement is not to send empty “Hi!” messages for the sake of a metric. Use the message to gather one piece of information that improves the lesson.",
          "Before the trial: welcome the learner, confirm the goal and ask one concise question such as what they most need Spanish for. After the trial: recap the priority you observed and state the next lesson. This makes engagement useful even if the platform later changes the threshold.",
          "Keep the process light enough to maintain at scale. A template should provide structure, not identical copy. Insert the learner’s goal and one real observation so the message still sounds like a teacher wrote it."
        ]
      },
      {
        heading: "Protect reliability with calendar design",
        paragraphs: [
          "Reliability problems often begin before the lesson. If your availability is broader than the life you actually live, you create future cancellations. Build a recurring schedule with enough space for breaks, administration and preparation. Add extra slots only when you know you can teach them.",
          "If you travel frequently, update your time zone and block travel periods early. If you teach long days, avoid placing every possible hour back-to-back. A calendar that looks fully open can produce worse reliability than a smaller schedule you consistently honor.",
          "When a student requests a change, use the platform’s correct reason and confirmation workflow. Metrics can distinguish tutor-driven changes from student-requested changes, so accurate administration matters."
        ]
      },
      {
        heading: "Use lesson consistency to support ratings and retention",
        paragraphs: [
          "A consistent lesson is not a repetitive lesson. Students should recognize a useful rhythm: review something that matters, learn or notice something new, use it in speech, receive focused feedback, and understand what comes next.",
          "A resource library helps because you spend less cognitive energy building visuals and prompts and more attention on adapting them to the student. Keep a short student record with goals, recurring errors, completed resources and next targets. That makes continuity visible.",
          "Do not ask for ratings in a way that pressures the student or suggests a required score. Focus on giving them a coherent experience and let platform review mechanisms work as designed."
        ]
      },
      {
        heading: "Run a monthly Super Tutor audit",
        bullets: [
          "Check the current official criteria before interpreting your dashboard.",
          "Review attendance and tutor-driven cancellation or reschedule patterns.",
          "Check trial engagement and whether your messages contain useful information.",
          "Compare trial conversion with student fit and pricing, not only with your closing language.",
          "Review regular students who have become irregular and identify whether the issue is scheduling, challenge, relevance or progress visibility.",
          "Change one operational variable at a time so you can learn from the result."
        ],
        paragraphs: [
          "The status is most useful when it reinforces a business you would want anyway: reliable scheduling, clear communication, relevant trials and recurring lessons that feel connected."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "preply-pre-trial-message-spanish",
    title: "What to Message a Spanish Student Before a Preply Trial",
    description:
      "Send a useful Preply pre-trial message that welcomes the Spanish student, clarifies one goal and gives you enough information to prepare a relevant sample lesson.",
    eyebrow: "PREPLY · PRE-TRIAL",
    readingTime: "9 min",
    keywords: ["Preply pre trial message", "message before Preply trial", "Spanish tutor Preply message", "Preply trial message template"],
    relatedHref: "/resources",
    relatedLabel: "Prepare a relevant sample resource",
    relatedLessonIds: [15, 14, 130],
    relatedGuideSlugs: ["preply-trial-lesson-spanish", "preply-post-trial-message-spanish", "preply-trial-to-subscription-spanish"],
    officialSources: [PREPLY_SOURCES.trial, PREPLY_SOURCES.superTutorMetrics],
    sections: [
      {
        heading: "Use the message to improve the lesson, not to perform friendliness",
        paragraphs: [
          "A pre-trial message should make the student feel welcomed and give you one or two pieces of information that change your preparation. A long questionnaire creates work for the learner before they know you. A generic “Looking forward to meeting you” is pleasant but does not help you choose a task.",
          "Preply’s current Super Tutor documentation includes trial-engagement messaging criteria, and its trial guidance frames the first lesson around goals, level, a sample activity and a plan. A useful message supports those same functions.",
          "Aim for a message the learner can answer in under a minute."
        ]
      },
      {
        heading: "Ask for the real communication goal",
        paragraphs: [
          "Instead of “What is your level?” ask “What do you most want to be able to do in Spanish?” Level can still be useful, but the real goal tells you what to sample. A person moving to Mexico needs different evidence from a person preparing for a professional presentation.",
          "One optional second question can clarify experience: “Have you studied Spanish before, or are you starting from zero?” That is usually enough to prevent choosing an obviously inappropriate activity.",
          "If the learner already wrote a detailed goal in their booking information, do not ask them to repeat it. Acknowledge it and ask only for the missing piece."
        ]
      },
      {
        heading: "Use short message patterns and personalize them",
        bullets: [
          "Beginner: “Hi, ___! Thanks for booking. Before we meet, what would you most like to be able to do in Spanish in the next few months? And are you starting from zero or have you studied before?”",
          "Conversation: “Hi, ___! I saw that your goal is speaking confidence. What situations feel hardest right now—small talk, telling stories, work, travel or something else?”",
          "Travel: “Hi, ___! I’d like to make the trial useful for your trip. Which situations matter most: airport, hotel, restaurants, transport, meeting people or another situation?”",
          "Advanced: “Hi, ___! For our first lesson, what kind of Spanish do you want to make more precise—professional communication, debate, writing, regional usage or spontaneous conversation?”"
        ],
        paragraphs: [
          "These are structures, not copy-paste scripts. Use the learner’s name and any goal already available. Keep punctuation and tone natural to you. The point is to collect information, not to sound like customer support."
        ]
      },
      {
        heading: "Do not overload the student with logistics",
        paragraphs: [
          "Avoid sending a long list of policies, homework, documents and technical instructions unless something is genuinely required before the trial. The student has not yet experienced your teaching; too much administration makes the relationship feel heavy.",
          "If you need them to bring something, make it simple: “If you have a recent piece of Spanish writing you want feedback on, feel free to bring it.” Do not make optional preparation feel mandatory.",
          "Keep off-platform contact details and links out of messages when platform rules require communication to remain inside the marketplace."
        ]
      },
      {
        heading: "Turn the answer into a preparation decision",
        paragraphs: [
          "If the learner says “I understand a lot but cannot speak,” choose a speaking task with visible scaffolding and removal of support. If they say “I need Spanish for Argentina,” prepare a small Rioplatense sample. If they say “I have an interview,” prepare one roleplay question rather than a general grammar worksheet.",
          "This is where reusable material saves time. You can maintain a small trial kit by level and goal: A1 beginner conversation, A2 travel, B1 storytelling, pronunciation diagnostic and advanced discussion. Personalization happens through selection and follow-up, not by rebuilding the asset.",
          "Write one private note before the lesson: “What do I want to learn about this student?” That keeps the trial diagnostic rather than performative."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "preply-post-trial-message-spanish",
    title: "What to Send After a Preply Trial Lesson",
    description:
      "Write a useful post-trial message for Spanish students that summarizes what you observed, names the next lesson and supports a natural transition into recurring study.",
    eyebrow: "PREPLY · POST-TRIAL",
    readingTime: "9 min",
    keywords: ["Preply post trial message", "message after Preply trial", "Preply follow up student", "Spanish tutor trial follow up"],
    relatedHref: "/resources",
    relatedLabel: "Plan the next Spanish lesson",
    relatedLessonIds: [15, 14, 121],
    relatedGuideSlugs: ["preply-pre-trial-message-spanish", "preply-trial-to-subscription-spanish", "preply-student-retention-spanish"],
    officialSources: [PREPLY_SOURCES.trial, PREPLY_SOURCES.superTutorMetrics],
    sections: [
      {
        heading: "The follow-up should preserve the learning thread",
        paragraphs: [
          "After a trial, the learner has just processed a new tutor, new material, feedback and a decision about whether to continue. A useful follow-up reduces that complexity. It reminds them what the goal was, what you observed and what you would do next.",
          "Preply’s current Super Tutor criteria include post-trial engagement. Even without that metric, a timely message is useful teaching practice because it makes the first lesson feel connected to a sequence rather than an isolated performance.",
          "Do not send the same sales paragraph to every learner. One real observation is enough to make the message specific."
        ]
      },
      {
        heading: "Use a three-part structure",
        bullets: [
          "Recap the goal in the learner’s own terms.",
          "Name one strength and one priority you observed.",
          "State the next lesson or short sequence you recommend."
        ],
        paragraphs: [
          "Example: “Thanks for today, Maya. Your listening is already strong when the topic is familiar. The main difficulty is building longer answers in the past without switching back to English. Next lesson I’d use one of your travel stories to work on preterite vs. imperfect, then retell it with less support.”",
          "That message communicates expertise because the recommendation comes from evidence. It also makes the next lesson easier to imagine."
        ]
      },
      {
        heading: "Keep the tone low-pressure",
        paragraphs: [
          "Avoid artificial scarcity, guilt or guarantees. “Book now before my slots disappear” may create urgency, but it does not help the learner evaluate fit. If availability is genuinely limited, the calendar already communicates much of that information.",
          "A good closing can simply say: “If that plan fits what you want, I’d be happy to continue with it.” The student has enough information to decide.",
          "If you are not the right tutor, say so when appropriate. A learner who needs intensive legal Spanish and a certification you do not have is better served by a specialist. Honest fit protects your time and reputation."
        ]
      },
      {
        heading: "Use the message as your own operational checkpoint",
        paragraphs: [
          "Before sending, make sure you can answer: What is this learner trying to do? What did I observe? What did I promise next? Save those three notes in your student system. They become the preparation brief for the next class.",
          "If the learner subscribes, start the next lesson with retrieval from the trial. Ask them to repeat the improved answer, reuse the target expression or return to the same scenario with less support. This immediately demonstrates continuity.",
          "If they do not continue, do not chase indefinitely. Record the outcome and move on. Your time is better spent improving the funnel or serving active students."
        ]
      },
      {
        heading: "Message patterns for common trial outcomes",
        bullets: [
          "Strong beginner fit: recap one successful supported exchange and name the next basic function.",
          "Intermediate speaker with gaps: identify the discourse problem, such as short answers or unstable past narration.",
          "Pronunciation student: name one sound or rhythm target and one transfer task for next lesson.",
          "Advanced learner: name a precision, register or reformulation target rather than generic “fluency.”",
          "Poor fit: thank the learner and state the mismatch clearly without criticizing them."
        ],
        paragraphs: [
          "The follow-up is short because the real work happened in the trial. Its job is to make that work legible and point to the next step."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "preply-pricing-spanish-tutor",
    title: "How to Price Spanish Lessons on Preply",
    description:
      "Set a Preply Spanish tutoring rate using current commission rules, profile strength, student fit, prep time and sustainable net income rather than copying competitors blindly.",
    eyebrow: "PREPLY · PRICING",
    readingTime: "13 min",
    keywords: ["Preply Spanish tutor price", "Preply tutor rates Spanish", "how much charge Preply Spanish", "Preply commission tutor rate"],
    relatedHref: "/resources",
    relatedLabel: "Reduce unpaid prep with ready-to-teach resources",
    relatedLessonIds: [15, 18, 108],
    relatedGuideSlugs: ["preply-raise-hourly-rate", "teach-spanish-on-preply", "preply-student-retention-spanish"],
    officialSources: [PREPLY_SOURCES.commission, PREPLY_SOURCES.price],
    sections: [
      {
        heading: "Start with net economics, not the visible hourly rate",
        paragraphs: [
          "Your profile price is not the same as your take-home hourly rate. Preply’s current commission model charges 100% commission on a trial lesson with a new student and a percentage on subsequent lessons that currently ranges from 33% down to 18% depending on total completed teaching hours. Recheck the official commission page before using these numbers in a future calculation.",
          "If your visible rate is USD 25 and your current regular-lesson commission were 18%, the simplified net before taxes and payment costs would be USD 20.50. At a 33% commission, it would be USD 16.75. Those are examples using the current published ranges, not promises about your account.",
          "The important number is even lower once you include unpaid preparation and administration. A 50-minute lesson plus twenty minutes of prep and ten minutes of messages is not one hour of work."
        ]
      },
      {
        heading: "Calculate an effective hourly rate",
        paragraphs: [
          "Use an explicit assumption model: effective hourly rate = net teaching revenue ÷ total work time. Total work time includes teaching, preparation, student messages, notes and routine administration. If you teach ten paid hours but spend four additional hours preparing and managing students, divide the net revenue by fourteen, not ten.",
          "Example scenario: assume ten regular lessons at a visible USD 25 rate and, purely for illustration, an 18% regular-lesson commission. Net teaching revenue would be USD 205 before other costs. If total work time is fourteen hours, the effective rate is about USD 14.64 per work hour. Reducing prep from four hours to two raises the effective rate without changing the student’s price.",
          "This is where reusable lesson material has direct business value. Saving fifteen minutes of preparation across twenty weekly lessons saves five hours of unpaid time."
        ]
      },
      {
        heading: "Use your profile strength and niche as pricing context",
        paragraphs: [
          "Preply’s current pricing guidance tells tutors to consider experience, profile strength, student expectations, prices of similar tutors and commission. It also states that the ranking system does not simply prefer low or high prices; conversion at the chosen price matters.",
          "Do not read that as permission to charge any number without consequence. A higher price creates a stronger expectation of fit and teaching quality. A narrow offer can make comparison easier because the student is not evaluating you only as “another Spanish tutor.”",
          "Examples of defensible differentiation include specialist pronunciation work, professional communication, Rioplatense Spanish, structured beginner programs or exam preparation you are genuinely qualified to offer."
        ]
      },
      {
        heading: "Choose a starting rate with a floor and a review point",
        paragraphs: [
          "Define a financial floor: the lowest net effective rate at which the work is worth doing after fees and unpaid time. Then define a market-facing starting price that you believe can attract the learners your current profile supports. Those two numbers may not be identical.",
          "Set a review point instead of changing the rate emotionally. Examples: after twenty regular teaching hours, after five active recurring students, after profile improvements have been live for a month, or when your preferred hours are consistently full.",
          "Do not constantly lower price after individual failed trials. One student may leave for schedule, fit or budget. Look for patterns."
        ]
      },
      {
        heading: "Price trials in your workload model",
        paragraphs: [
          "Because the current published commission model assigns 100% commission to trial lessons, trial volume changes the economics of your week. A new tutor teaching many trials may have substantial teaching time that does not produce direct trial revenue.",
          "That does not automatically make trials “bad.” Their business value depends on whether they produce regular students who fit your schedule and stay long enough for the acquisition work to make sense. Track trial hours alongside regular hours when calculating your real effective rate.",
          "Keep trial preparation lean. Use a diagnostic framework and reusable sample materials rather than spending an unpaid hour designing each first lesson from scratch."
        ]
      },
      {
        heading: "Review price as part of a system",
        bullets: [
          "Current commission and net regular-lesson revenue.",
          "Trial hours versus recurring teaching hours.",
          "Prep and admin time per student.",
          "How full your preferred schedule is.",
          "Profile positioning and student fit.",
          "Retention after the first few lessons.",
          "Whether a rate change would solve the actual bottleneck."
        ],
        paragraphs: [
          "Price is one lever. If your schedule is empty because the profile is vague, reducing prep time will not create demand. If you are fully booked but exhausted by preparation, lowering price is especially unlikely to help. Diagnose the business before changing the number."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "preply-raise-hourly-rate",
    title: "How to Raise Your Preply Price as a Spanish Tutor",
    description:
      "Raise a Preply Spanish tutoring rate deliberately by reviewing capacity, conversion, retention and net economics instead of assuming a higher or lower price improves ranking.",
    eyebrow: "PREPLY · RATE STRATEGY",
    readingTime: "11 min",
    keywords: ["raise Preply price", "increase Preply tutor rate", "Preply hourly rate Spanish tutor", "when raise Preply price"],
    relatedHref: "/resources",
    relatedLabel: "Improve lesson consistency before increasing workload",
    relatedLessonIds: [15, 18, 108],
    relatedGuideSlugs: ["preply-pricing-spanish-tutor", "preply-student-retention-spanish", "teach-spanish-on-preply"],
    officialSources: [PREPLY_SOURCES.price, PREPLY_SOURCES.discovery],
    sections: [
      {
        heading: "Raise price to solve a business problem",
        paragraphs: [
          "A price increase should answer a real problem: your preferred hours are full, your effective hourly rate is too low, your experience and offer have materially improved, or the current price attracts a volume you cannot serve well. “Other tutors charge more” can be useful context, but it is not enough by itself.",
          "Preply’s current pricing guidance states that changing price does not automatically improve search ranking; the system considers how likely students are to book at the selected price. That means a higher price can work, but it can also reduce trial demand if the profile and offer do not support it.",
          "Decide what outcome you want before changing the number. More net income with the same hours is different from reducing total students, repositioning into a niche, or testing whether new students accept a stronger offer."
        ]
      },
      {
        heading: "Check four signals before increasing",
        bullets: [
          "Capacity: are your preferred hours consistently occupied?",
          "Fit: are new students booking because of a clear specialty or mainly because the price is low?",
          "Retention: do students continue long enough to indicate the lesson experience matches the promise?",
          "Economics: after commission, prep and admin, is the current effective rate below your target?"
        ],
        paragraphs: [
          "You do not need every signal to be perfect. The checklist prevents one noisy week from driving the decision. A tutor can be busy because of a temporary surge; a tutor can also have strong retention but still need a better profile before a large increase.",
          "Review the current platform pricing documentation before changing strategy because marketplace behavior and controls can change."
        ]
      },
      {
        heading: "Separate pricing for new demand from existing relationships",
        paragraphs: [
          "Existing students have already made a decision based on a particular price and relationship. New students are evaluating the current offer today. Treat those situations separately according to the tools and policies available in your account.",
          "For any increase affecting an established student, communicate early, briefly and without inventing external justification. Explain the new rate and the date it applies. Do not send a long defense of your worth. Give the learner enough information to decide.",
          "If a student cannot continue at the new price, that is a business consequence to plan for, not a reason to pressure them."
        ]
      },
      {
        heading: "Strengthen the offer before testing a higher rate",
        paragraphs: [
          "A rate is easier to evaluate when the profile communicates a clear service. Tighten the headline, description and video. Make lesson outcomes visible. Keep a coherent learning plan. Reduce preventable scheduling friction.",
          "A stronger offer does not require luxury branding. For Spanish tutoring, specificity is often enough: adult beginners with structured progression, travel roleplays, advanced conversation with systematic feedback, professional Spanish, pronunciation or a regional variety.",
          "Also improve your own operating cost. If the same lesson quality requires half the preparation time because you use a reusable library, your effective rate improves before the student pays anything more."
        ]
      },
      {
        heading: "Test the change over a meaningful window",
        paragraphs: [
          "Do not judge a rate change after one day or one trial. Track a defined period and compare profile views where available, trial bookings, trial-to-regular conversion, active students, teaching hours and effective net income. Consider seasonality and availability changes that happened at the same time.",
          "Change one major variable at a time when possible. If you rewrite the entire profile, double your availability and raise the price on the same day, you will not know which change influenced the result.",
          "If demand falls below what your business needs, reassess the offer and price together. The answer is not automatically to reverse the increase."
        ]
      }
    ]
  },
  {
    ...common,
    slug: "preply-student-retention-spanish",
    title: "How to Retain Spanish Students on Preply",
    description:
      "Improve Spanish student retention on Preply through visible progress, lesson continuity, scheduling habits, relevant challenge and a prep system that stays sustainable.",
    eyebrow: "PREPLY · RETENTION",
    readingTime: "12 min",
    keywords: ["Preply student retention", "keep Preply students", "Spanish tutor retention", "Preply recurring students"],
    relatedHref: "/resources",
    relatedLabel: "Build recurring lesson sequences with SpanishCue",
    relatedLessonIds: [137, 138, 208, 215],
    relatedGuideSlugs: ["preply-trial-to-subscription-spanish", "preply-super-tutor-spanish-teachers", "preply-pricing-spanish-tutor"],
    officialSources: [PREPLY_SOURCES.superTutorMetrics],
    sections: [
      {
        heading: "Retention starts with the promise made before lesson one",
        paragraphs: [
          "Students stay longer when the experience continues to solve the problem they booked you to solve. If the profile promised conversation and every class becomes a grammar lecture, retention is already being damaged. If the trial promised a structured plan but later lessons feel unrelated, the student has to invent the continuity themselves.",
          "Keep the original learner goal visible in your notes. Revisit it periodically because goals change. A learner who initially wanted travel survival may later care more about friendships or work. Retention is not about locking a student into the first syllabus; it is about keeping the work relevant.",
          "Preply’s performance metrics include engagement and trial-related behavior, but long-term retention is broader than any one platform metric. Build the teaching relationship around progress and reliability first."
        ]
      },
      {
        heading: "Make progress visible at the end of ordinary lessons",
        paragraphs: [
          "Students often improve gradually and fail to notice it. Close lessons with retrieval that makes the change observable. Ask the learner to repeat an opening task, retell a story with less support, explain the rule in their own words or reuse three target expressions without looking.",
          "Every few weeks, compare current performance with an earlier task. “A month ago you needed sentence starters for this; now you can answer with a reason and example without them.” This is more credible than saying “You are improving a lot.”",
          "Avoid turning progress tracking into constant testing. The evidence can come from normal speaking tasks."
        ]
      },
      {
        heading: "Build continuity without making every lesson identical",
        paragraphs: [
          "Use recurring structures so the student knows how to participate, but rotate content and challenge. A conversation learner might repeatedly use ranking, story, roleplay and opinion tasks with increasing linguistic demands. A grammar learner can revisit the same contrast in new communicative contexts.",
          "Recycle language intentionally. If the student learned the imperfect last week, bring it back in a two-minute warm-up this week and again in a later story task. Spaced retrieval makes the course feel connected and supports memory.",
          "Keep a simple next-step field after each lesson. Preparation then starts from the previous class instead of from an empty page."
        ]
      },
      {
        heading: "Create a sustainable scheduling habit",
        paragraphs: [
          "Recurring students need predictable access to you. Encourage a regular rhythm that fits the learner’s actual life. A student who repeatedly cancels a twice-weekly plan may do better with one reliable lesson than an aspirational schedule they cannot maintain.",
          "Protect your own consistency too. If you open every hour and later reschedule frequently, you create friction that strong teaching cannot fully compensate for. Design teaching blocks you can keep.",
          "When a student becomes irregular, ask one practical question before assuming dissatisfaction: has their schedule changed? A simple adjustment may restore continuity."
        ]
      },
      {
        heading: "Use challenge and personalization deliberately",
        paragraphs: [
          "Personalization is not mentioning the student’s hobbies in every prompt. It is selecting language, contexts and feedback that match their goals and current constraints. A learner working in hospitality should practise repair, requests and service interactions; a partner-learning Spanish may need family conversation and storytelling.",
          "Challenge should rise as support falls. If the same A2 student can complete every task easily for six weeks, the class may feel pleasant but stagnant. If every lesson is a struggle with unknown vocabulary, they may feel incapable. Adjust one variable at a time: less support, longer output, more ambiguity, faster listening or more precise language.",
          "A broad resource library helps you change topic and task type while preserving a coherent level progression."
        ]
      },
      {
        heading: "Investigate churn without chasing every student",
        bullets: [
          "Did the student reach the short-term goal they originally had?",
          "Was the schedule sustainable for both sides?",
          "Did lesson difficulty stay appropriate?",
          "Was progress visible?",
          "Did the material remain relevant to their life?",
          "Did the tutor create continuity from one lesson to the next?",
          "Was price the likely constraint, or is that only an assumption?"
        ],
        paragraphs: [
          "Some churn is normal. People travel, change jobs, lose budget or finish a specific goal. The useful question is whether multiple students leave for the same controllable reason. Improve the pattern, not the story you invent about one person."
        ]
      }
    ]
  },

];