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
];
