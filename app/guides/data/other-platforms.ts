import type { TeachingGuide } from "./types";
import { SUPERPROF_SOURCES, VERBLING_SOURCES } from "./platform-sources";

const platformCommon = {
  pillar: "tutor-business" as const,
  cluster: "other-platforms" as const,
  publishedAt: "2026-09-24",
  lastReviewed: "2026-09-24",
};

export const otherPlatformGuides: TeachingGuide[] = [
  {
    ...platformCommon,
    slug: "teach-spanish-on-verbling",
    title: "How to Teach Spanish on Verbling",
    description:
      "A practical guide for Spanish teachers using Verbling: application positioning, profile clarity, lesson design, trial-to-recurring workflow and sustainable preparation.",
    eyebrow: "VERBLING · SPANISH TEACHERS",
    readingTime: "10 min",
    keywords: [
      "teach Spanish on Verbling",
      "Verbling Spanish teacher",
      "how to teach on Verbling",
      "Spanish tutor Verbling",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse ready-to-teach Spanish resources",
    pillar: "tutor-business",
    cluster: "other-platforms",
    platform: "Verbling",
    publishedAt: "2026-09-24",
    lastReviewed: "2026-09-24",
    containsVolatilePlatformFacts: true,
    officialSources: [VERBLING_SOURCES.teach, VERBLING_SOURCES.overview],
    relatedLessonIds: [15, 14, 18],
    relatedGuideSlugs: [
      "verbling-application-video-spanish-teacher",
      "teach-spanish-on-preply",
      "teach-spanish-on-italki",
      "teach-spanish-on-superprof",
    ],
    sections: [
      {
        heading: "Start with an offer a student can understand quickly",
        paragraphs: [
          "A marketplace profile works best when it answers a concrete student problem. “Native Spanish teacher” describes you, but it does not explain why a learner should choose your lessons. A stronger starting point is a visible fit: adult beginners who need structure, intermediate learners who understand more than they can say, travel Spanish, business communication, pronunciation, Rioplatense Spanish, or another area you genuinely teach.",
          "Verbling’s current teacher materials describe the marketplace as a place where teachers create a profile, set lesson availability and teach through the platform. The useful business question is therefore not only how to get approved. It is whether your profile, sample teaching and recurring lesson system tell the same story. If your application presents you as a pronunciation specialist but your lesson offer is generic conversation, the student experience begins with a mismatch.",
          "Write a one-sentence positioning statement before editing the profile: “I help [learner] achieve [outcome] through [method].” Use that sentence as an internal filter. You can teach more broadly than the sentence suggests, but it keeps the public offer from becoming a list of everything you might possibly teach.",
        ],
      },
      {
        heading: "Treat the application as evidence of teaching readiness",
        paragraphs: [
          "Verbling currently asks prospective teachers to apply rather than simply opening a public profile immediately. That makes the application a professional screening step. Focus on verifiable teaching experience, language competence, relevant education or certification, and your ability to deliver online lessons reliably. Do not inflate experience or invent student results.",
          "If your strongest proof is not a formal certificate, explain the real evidence you do have. That may be sustained one-to-one teaching, adult education experience, subject expertise related to a niche, or a clear record of creating structured lessons. Keep the emphasis on what the learner will experience rather than on prestige alone.",
          "Prepare examples of the kinds of lessons you would teach. A short beginner sequence, a conversation lesson with a clear speaking objective, and a grammar lesson that ends in production show more teaching judgment than a vague claim that every class is completely personalized.",
        ],
      },
      {
        heading: "Build recurring lessons, not isolated appointments",
        paragraphs: [
          "The first booked lesson is only useful to the business if it can become a coherent learning relationship. Begin by diagnosing the learner’s actual communication goal. “I want to improve Spanish” is too broad to guide a sequence; “I need to talk with clients without switching to English” or “I want to travel around Argentina next year” gives you something operational.",
          "Use a compact recurring structure: retrieve one previous target, introduce or clarify one new target, practise it with support, use it in a communicative task, then close with a short retrieval or plan for the next lesson. The exact balance changes by level, but the continuity should be visible.",
          "Keep a lightweight record after each lesson: what was practised, one or two recurring errors, what the student can now do, and the next likely focus. That note should make preparation faster, not become an administrative project of its own.",
        ],
      },
      {
        heading: "Control prep time before your schedule fills",
        paragraphs: [
          "Online tutoring becomes expensive for the teacher when every paid hour creates another unpaid half-hour of slide design. Before opening more availability, set a preparation ceiling. Decide how much unpaid prep a normal recurring lesson is allowed to consume and build a reusable system around that limit.",
          "A resource library changes the preparation task from creation to selection. Instead of asking “What will I invent for Maria tomorrow?”, ask “What is Maria’s next communicative target, and which existing lesson can I adapt?” Personalization can happen in prompts, examples, pacing and feedback without rebuilding the material from zero.",
          "This matters especially on a marketplace because a fuller schedule can create the illusion of growth while your effective hourly rate falls. Track teaching time and prep time together.",
        ],
      },
      {
        heading: "Use a simple Verbling operating checklist",
        bullets: [
          "Keep the profile focused on a real learner and outcome rather than generic enthusiasm.",
          "Make every experience or qualification claim verifiable.",
          "Prepare one beginner, one intermediate and one conversation sample lesson before opening broad availability.",
          "After the first lesson, record a short learning plan rather than starting the next class from scratch.",
          "Batch lesson selection and adaptation into one preparation block.",
          "Review Verbling’s current teacher documentation before relying on any platform rule that may have changed.",
        ],
        paragraphs: [
          "The platform can provide the meeting place, but the product the student experiences is still your teaching system. A sustainable Verbling practice combines a clear public offer, reliable online delivery, a first lesson that produces useful evidence and recurring lessons that do not require you to rebuild the curriculum every week.",
        ],
      },
    ],
  },
  {
    ...platformCommon,
    slug: "verbling-application-video-spanish-teacher",
    title: "Verbling Teacher Application Video for Spanish Teachers",
    description:
      "Plan a clearer Verbling teacher application video as a Spanish teacher: what to demonstrate, how to structure the message and what students should learn about your teaching.",
    eyebrow: "VERBLING · APPLICATION VIDEO",
    readingTime: "9 min",
    keywords: [
      "Verbling teacher application video",
      "Verbling Spanish teacher video",
      "Verbling application Spanish teacher",
      "how to apply Verbling teacher",
    ],
    relatedHref: "/resources",
    relatedLabel: "See SpanishCue teaching resources",
    pillar: "tutor-business",
    cluster: "other-platforms",
    platform: "Verbling",
    publishedAt: "2026-09-24",
    lastReviewed: "2026-09-24",
    containsVolatilePlatformFacts: true,
    officialSources: [VERBLING_SOURCES.applicationVideo, VERBLING_SOURCES.teach],
    relatedLessonIds: [201, 202, 15],
    relatedGuideSlugs: [
      "teach-spanish-on-verbling",
      "preply-introduction-video-spanish-tutor",
      "italki-introduction-video-spanish-teacher",
    ],
    sections: [
      {
        heading: "Use the video to demonstrate, not just introduce",
        paragraphs: [
          "An application video is stronger when it gives evidence of how you communicate as a teacher. A list of qualifications can be useful, but the reviewer and future student can already read text. Video adds pace, pronunciation, presence and the ability to explain something clearly.",
          "Verbling publishes current guidance for teacher application videos, so check those requirements immediately before recording. Treat technical requirements as the floor. Your editorial goal is to make the video answer three questions: Who do you teach best? What does learning with you feel like? Why should a student trust you to guide a lesson online?",
          "Do not script every syllable so tightly that your delivery sounds read. Write a structure, rehearse the sequence, then speak naturally enough that the video resembles the person the student will meet.",
        ],
      },
      {
        heading: "Open with the learner, not your biography",
        paragraphs: [
          "The first seconds should establish teaching relevance. Instead of beginning with a long timeline of where you were born, studied and travelled, say what kind of student you help. For example: “I teach adult beginners who want to speak from the first lessons without feeling lost in grammar.”",
          "You can then introduce your background as proof. Mention teaching experience, education, professional knowledge or regional expertise only when it helps the student understand the offer. A business Spanish tutor may mention corporate experience; a pronunciation tutor may mention phonetics training; a Rioplatense teacher may explain the variety they teach.",
          "Keep claims precise. “I have taught hundreds of successful students” should not appear unless you can support it. Specific, modest truth is more credible than inflated marketing.",
        ],
      },
      {
        heading: "Show a micro-example of your teaching style",
        paragraphs: [
          "A useful video can include a tiny teaching moment without turning into a complete lesson. Demonstrate how you clarify one beginner contrast, how you slow Spanish without sounding unnatural, or how you turn a short answer into a longer one. The objective is not to teach the viewer a grammar unit; it is to make your method observable.",
          "For a beginner-focused profile, you might say a simple Spanish phrase, point out one pattern and invite the viewer to repeat or notice it. For an advanced-conversation profile, demonstrate the kinds of follow-up questions that turn an opinion into a real discussion. For pronunciation, contrast one sound or stress pattern.",
          "Choose an example that matches the profile promise. If your public niche is business Spanish, a random explanation of colors adds little evidence.",
        ],
      },
      {
        heading: "Prioritize sound, framing and intelligibility",
        paragraphs: [
          "Students will spend much of a lesson listening to you through a screen, so audio quality is part of the teaching sample. Record in a quiet room, keep the microphone close enough for clear speech and avoid loud background music. A basic phone or laptop camera with good light is usually more useful than elaborate editing with poor sound.",
          "Keep the frame stable and look at the camera regularly. Use a background that does not compete with your face. Speak at a pace that reflects your actual teaching. If you claim to specialize in beginners but race through the video, the message and experience conflict.",
          "Test the final file on headphones and a phone speaker. If your voice is hard to understand on either, fix that before adding visual effects.",
        ],
      },
      {
        heading: "A practical application-video structure",
        bullets: [
          "Opening: learner + outcome in one sentence.",
          "Teaching identity: the kinds of students and levels you genuinely work with.",
          "Evidence: relevant experience, education or professional background.",
          "Method: two or three observable choices in your lessons.",
          "Micro-example: a very short demonstration of your teaching presence.",
          "Close: what a first lesson with you would help the student clarify or do.",
        ],
        paragraphs: [
          "Record two or three full takes rather than dozens of fragmented clips. Choose the version that sounds clearest and most like your normal teaching voice. Before uploading, recheck Verbling’s current application-video requirements so the production format and the platform’s expectations still align.",
        ],
      },
    ],
  },
  {
    ...platformCommon,
    slug: "teach-spanish-on-superprof",
    title: "How to Teach Spanish on Superprof",
    description:
      "A practical Spanish tutor guide to using Superprof: profile positioning, rate decisions, first-contact workflow, lesson structure and sustainable preparation.",
    eyebrow: "SUPERPROF · SPANISH TUTORS",
    readingTime: "10 min",
    keywords: [
      "teach Spanish on Superprof",
      "Superprof Spanish tutor",
      "Spanish teacher Superprof",
      "how to tutor on Superprof",
    ],
    relatedHref: "/resources",
    relatedLabel: "Browse SpanishCue teaching resources",
    pillar: "tutor-business",
    cluster: "other-platforms",
    platform: "Superprof",
    publishedAt: "2026-09-24",
    lastReviewed: "2026-09-24",
    containsVolatilePlatformFacts: true,
    officialSources: [SUPERPROF_SOURCES.tutor, SUPERPROF_SOURCES.payment],
    relatedLessonIds: [15, 14, 18],
    relatedGuideSlugs: [
      "online-spanish-tutor-rates",
      "first-online-spanish-lesson",
      "teach-spanish-on-verbling",
    ],
    sections: [
      {
        heading: "Treat the listing as a service offer, not a résumé",
        paragraphs: [
          "A Superprof listing should help a prospective learner understand what they can hire you to do. Experience and credentials matter, but they become persuasive only when connected to a clear service: beginner Spanish, school support, conversation, professional communication, travel preparation, pronunciation, exam preparation or another honest specialty.",
          "Superprof operates across multiple markets, and platform details can vary by country. This guide uses the current U.S. tutor and payment documentation linked below for factual platform references. If you teach through another regional Superprof site, verify its current rules before relying on a payment or booking detail.",
          "Write the profile from the student’s perspective. What problem brings them to a tutor now? What would a useful first month look like? What kind of lesson experience can you deliver consistently?",
        ],
      },
      {
        heading: "Make your rate reflect the whole tutoring job",
        paragraphs: [
          "The visible lesson price is only one part of your economics. The real hourly rate also includes unpaid preparation, student messages, rescheduling, notes and platform-related costs. Before choosing a rate, estimate how much non-teaching time a normal student creates.",
          "A lower rate can help a newer tutor reduce the barrier to a first booking, but it can become expensive if every lesson requires custom slides. A higher rate may reduce the number of hours needed for a target income, but it also increases the importance of a clear niche and reliable lesson quality.",
          "Use Superprof’s current regional documentation to understand how payments work in your market. Do not assume that a payment rule visible on one country site applies globally.",
        ],
      },
      {
        heading: "Reply to inquiries with a useful next step",
        paragraphs: [
          "A first message should move the conversation from vague interest to a teachable problem. Ask one or two questions that affect the lesson: current level, immediate goal, deadline, previous study, or a situation where the student needs Spanish. Avoid sending a questionnaire with fifteen fields before the person has even decided to study with you.",
          "A useful response could be: “If your goal is conversation for work, tell me what kinds of meetings or interactions you have. In the first lesson I can check how comfortably you explain past events and opinions, then we’ll build a short plan around the situations you actually face.”",
          "This makes the first lesson concrete without promising a result before you have assessed the learner.",
        ],
      },
      {
        heading: "Use the first lesson to create a visible plan",
        paragraphs: [
          "Begin with the learner’s purpose, sample the language needed for that purpose and teach something small enough that the student can use it during the lesson. A beginner may need a supported exchange. An intermediate learner may need to extend answers. An advanced learner may need precision, register or reformulation.",
          "At the end, summarize the strongest skill, the main bottleneck and a short sequence of next lessons. This transforms the appointment from a standalone tutoring hour into a learning relationship.",
          "Keep the plan flexible. It should be specific enough to guide preparation but light enough to change when the student progresses faster, reveals a new need or misses lessons.",
        ],
      },
      {
        heading: "Build a preparation system before adding more students",
        paragraphs: [
          "Marketplace leads can create sudden schedule growth. Protect quality by creating reusable lesson families before you need them: one beginner starter route, one conversation route, one past-tense route, one pronunciation route and a small set of roleplays or listening tasks.",
          "Reuse the structure, not the student. Personalize examples, questions, pacing and feedback. The expensive mistake is believing that personalization requires a brand-new deck for every person.",
          "Review your effective hourly rate after a month of real teaching. If the visible price looks acceptable but prep and admin double the time you spend, the business model needs adjustment.",
        ],
      },
    ],
  },
  {
    ...platformCommon,
    slug: "teach-spanish-on-amazingtalker",
    title: "How to Teach Spanish on AmazingTalker",
    description:
      "An evergreen guide for Spanish tutors considering AmazingTalker: define a niche, present a clear lesson offer, structure first lessons and control preparation time without relying on unverified platform claims.",
    eyebrow: "AMAZINGTALKER · SPANISH TUTORS",
    readingTime: "9 min",
    keywords: [
      "teach Spanish on AmazingTalker",
      "AmazingTalker Spanish tutor",
      "Spanish teacher AmazingTalker",
      "how to tutor Spanish AmazingTalker",
    ],
    relatedHref: "/resources",
    relatedLabel: "Explore ready-to-teach Spanish resources",
    pillar: "tutor-business",
    cluster: "other-platforms",
    platform: "AmazingTalker",
    publishedAt: "2026-09-24",
    lastReviewed: "2026-09-24",
    containsVolatilePlatformFacts: false,
    officialSources: [],
    relatedLessonIds: [15, 14, 18],
    relatedGuideSlugs: [
      "spanish-tutor-niche-ideas",
      "first-online-spanish-lesson",
      "lesson-prep-system-spanish-tutors",
    ],
    sections: [
      {
        heading: "Build the teaching offer before optimizing the platform profile",
        paragraphs: [
          "The durable part of a tutoring marketplace strategy is the offer you control: who you teach, what problem you solve, what a lesson looks like and how the student progresses. Platform fees, ranking systems, application rules and promotional mechanics can change. At the time this guide was reviewed, we did not have a sufficiently current first-party teacher source to support volatile AmazingTalker claims, so this page deliberately avoids presenting those details as facts.",
          "Start with a student segment you can teach confidently. Examples include adult beginners, conversational Spanish for intermediate learners, travel preparation, business communication, pronunciation, Rioplatense Spanish or grammar repair for learners who already know the basics. A visible specialty does not prevent you from accepting other students; it gives the right learner a reason to understand your value quickly.",
          "Turn the niche into an outcome. “Business Spanish” is still broad; “Spanish for client calls and presentations” is easier to design lessons around.",
        ],
      },
      {
        heading: "Make the public promise match the actual lesson",
        paragraphs: [
          "Whatever profile fields the platform currently offers, keep the same core promise across headline, description, video and lesson titles. If you say lessons are highly structured, the first class should not be forty minutes of unplanned small talk. If you advertise conversation, the student should spend meaningful time speaking rather than listening to a grammar lecture.",
          "Describe teaching choices instead of relying on adjectives. “Dynamic and personalized” is hard to verify. “We use short visual explanations, guided practice and a final speaking task” tells the student what personalization looks like.",
          "Avoid claims about platform ranking. You can improve clarity, responsiveness and lesson quality because those are good business practices, but do not present an unsupported rule such as “the algorithm rewards X.”",
        ],
      },
      {
        heading: "Use the first lesson to reduce uncertainty",
        paragraphs: [
          "The student needs evidence that you understand their goal and can teach toward it. Ask what they need Spanish for, when they need it and what currently breaks down. Then sample one relevant skill rather than administering a generic test.",
          "Teach one small target during the lesson. A beginner can leave able to perform a short exchange; an intermediate learner can improve one recurring tense choice; an advanced learner can reformulate a message more precisely. The sample should demonstrate your method and also reveal how the student responds to support.",
          "Close with a provisional plan of three to five themes. Make it specific enough to feel real and flexible enough to evolve.",
        ],
      },
      {
        heading: "Design lesson packages around outcomes, not arbitrary counts",
        paragraphs: [
          "If the platform currently supports lesson bundles or recurring bookings, use them only after checking the live teacher documentation. Independently of the platform mechanic, you can think in outcome blocks: beginner foundations, travel preparation, past narration, pronunciation repair, presentation practice or another concrete goal.",
          "An outcome block helps preparation because several lessons share a direction. It also helps the student understand why lesson three follows lesson two. Do not promise that a fixed number of lessons guarantees fluency or a CEFR jump.",
          "Review progress at the end of a block and decide whether to continue, recycle or change direction.",
        ],
      },
      {
        heading: "Keep the business sustainable if bookings grow",
        paragraphs: [
          "Track more than booked hours. Include prep, messages, missed slots and administration when evaluating whether the work is sustainable. If a student pays for one hour but the lesson regularly creates forty minutes of unpaid preparation, the nominal rate hides the real economics.",
          "Build reusable materials before your calendar becomes full. SpanishCue can support that by giving you browser-ready grammar, conversation, listening, pronunciation and vocabulary resources that you adapt rather than rebuild.",
          "Recheck AmazingTalker’s current first-party teacher documentation before relying on any fee, ranking, payout or application claim. The teaching framework in this guide is intentionally designed to remain useful even when marketplace mechanics change.",
        ],
      },
    ],
  },
];
