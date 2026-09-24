import type { TeachingGuide } from "./types";

const businessCommon = {
  pillar: "tutor-business" as const,
  cluster: "pricing-business" as const,
  publishedAt: "2026-09-24",
};

export const pricingBusinessGuides: TeachingGuide[] = [
  {
    ...businessCommon,
    slug: "online-spanish-tutor-rates",
    title: "How Much Should an Online Spanish Tutor Charge?",
    description:
      "A practical pricing framework for online Spanish tutors using demand, experience, niche, preparation time and capacity instead of copying another teacher's rate.",
    eyebrow: "PRICING · ONLINE SPANISH TUTORS",
    readingTime: "11 min",
    keywords: [
      "online Spanish tutor rates",
      "how much should Spanish tutor charge",
      "Spanish tutor hourly rate",
      "price online Spanish lessons",
    ],
    relatedHref: "/resources",
    relatedLabel: "Reduce prep time with ready-to-teach resources",
    relatedLessonIds: [15, 18, 108],
    relatedGuideSlugs: [
      "real-hourly-rate-online-spanish-tutor",
      "raise-spanish-tutoring-rates",
      "price-spanish-lesson-packages",
    ],
    sections: [
      {
        heading: "Price the whole job, not only the teaching minute",
        paragraphs: [
          "The price of an online Spanish lesson has to cover more than the time when the camera is on. Tutoring creates preparation, student messages, rescheduling, notes, payment friction, marketing and empty calendar gaps. If a fifty-minute lesson requires twenty-five minutes of unpaid work around it, a nominal hourly rate can look much healthier than the real rate.",
          "Start with a simple assumption set rather than a market average. Example scenario: you want to teach 20 paid lessons per week, expect 5 hours of preparation and administration, and want a target weekly net teaching revenue of USD 600. Your pricing problem is not “what do other tutors charge?” It is “what average net rate and utilization make this workload viable for me?”",
          "Your answer will differ by geography, experience, niche, platform fees, demand and the kind of student you serve. That is why copying one successful tutor's visible rate is weak evidence.",
        ],
      },
      {
        heading: "Build a floor, target and stretch rate",
        paragraphs: [
          "Your floor is the lowest net rate that still makes the work worth accepting after unpaid time and costs. Your target is the rate you want most new students to pay. Your stretch rate is a higher level you may test when demand, specialization or capacity justifies it.",
          "For an example only, imagine your floor is USD 20 net, your target is USD 28 and your stretch rate is USD 35. Those numbers are not recommendations or industry averages. They show the decision structure. If you are regularly full at your target rate, a higher new-student rate may be worth testing. If you are underbooked, the problem may be price, but it may also be profile positioning, availability or a weak offer.",
          "Think in net revenue. If a platform charges a fee, subtract that before comparing rates. If you work independently, include payment fees and the time you spend generating your own leads.",
        ],
      },
      {
        heading: "Let specialization affect price only when it changes value",
        paragraphs: [
          "A niche can support a stronger rate when it solves a more specific problem or requires expertise. Business Spanish for executives, pronunciation coaching, DELE preparation or a regional variety may justify different pricing from general conversation, but only when your lesson design and experience support the promise.",
          "Do not raise the rate simply because you add a niche word to the profile. A business Spanish offer should include realistic professional tasks, register and feedback. A pronunciation offer should include diagnosis and deliberate practice. A DELE offer should understand exam tasks and level requirements.",
          "Specificity can also improve conversion without a higher price because the learner sees a better fit. Pricing and positioning work together.",
        ],
      },
      {
        heading: "Use preparation efficiency as a pricing lever",
        paragraphs: [
          "You can improve income in two ways: earn more per paid lesson or spend less unpaid time delivering the same quality. Many tutors focus only on the first. A reusable lesson library can increase the effective hourly rate even when the visible student price does not change.",
          "Example assumption: a USD 30 net lesson plus 30 minutes of prep produces USD 20 per hour of total work before admin. If reusable materials reduce prep to 10 minutes, the same lesson produces roughly USD 25.70 per hour of teaching-plus-prep time. The exact number changes with lesson length and admin time, but the principle is stable.",
          "Efficiency should not mean generic teaching. Personalize goals, examples, pacing and feedback; reuse the underlying instructional structure.",
        ],
      },
      {
        heading: "Review the rate when evidence changes",
        bullets: [
          "You are consistently near capacity and turning away suitable students.",
          "Your niche or qualifications have materially improved.",
          "Your preparation system is stable enough to support more students without quality loss.",
          "Your costs, platform fees or available teaching hours changed.",
          "The current rate attracts students but leaves the workload financially unsustainable.",
        ],
        paragraphs: [
          "Do not change price every week in response to one quiet day. Choose a review interval, track inquiries, bookings, retention, paid hours and unpaid work, then make one change at a time. Pricing is an operating decision, not a daily mood.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "raise-spanish-tutoring-rates",
    title: "When and How to Raise Your Spanish Tutoring Rates",
    description:
      "A practical rate-increase framework for Spanish tutors: decide when a higher price is justified, test it safely and communicate changes without inventing urgency.",
    eyebrow: "PRICING · RATE INCREASES",
    readingTime: "10 min",
    keywords: [
      "raise Spanish tutoring rates",
      "increase tutoring price",
      "when to raise tutor rates",
      "Spanish tutor price increase",
    ],
    relatedHref: "/resources",
    relatedLabel: "Support a stronger lesson experience with SpanishCue",
    relatedLessonIds: [15, 18, 108],
    relatedGuideSlugs: [
      "online-spanish-tutor-rates",
      "real-hourly-rate-online-spanish-tutor",
      "fill-weekly-schedule-spanish-tutor",
    ],
    sections: [
      {
        heading: "Raise rates because the business changed, not because of a random benchmark",
        paragraphs: [
          "A useful rate increase has a reason you can defend operationally. You may be consistently full, have stronger qualifications, have developed a valuable niche, be receiving more inquiries than you can serve, or discover that the current price does not cover preparation and administration.",
          "Avoid using someone else's visible rate as the sole trigger. Their location, platform history, fees, demand, niche and unpaid workload may be completely different. Instead, review your own evidence over several weeks.",
          "A simple scenario: if you can sustainably teach 20 lessons per week and regularly have 24 suitable students competing for those slots, raising the new-student price can be a rational capacity decision. If you have six empty slots and few inquiries, raising the price may still be correct for positioning, but the evidence is weaker and should be tested carefully.",
        ],
      },
      {
        heading: "Separate new-student pricing from existing-student decisions",
        paragraphs: [
          "You do not always need to change every student's rate at the same moment. A common business approach is to test a higher rate with new students first. This gives you information about demand without immediately disrupting established relationships.",
          "Existing students involve a different decision because continuity has value. If you raise their rate, give clear notice, explain the change briefly and avoid a long defensive justification. You can acknowledge their history while still treating tutoring as professional work.",
          "The exact communication and any platform-specific mechanics should follow the rules of the service you use. Do not promise a grandfathered rate indefinitely unless you genuinely intend to maintain it.",
        ],
      },
      {
        heading: "Make the lesson experience support the new price",
        paragraphs: [
          "A higher rate is easier to sustain when the student experience is consistent. That does not mean adding more slides or homework. It means clearer goals, better continuity, faster feedback and lessons that feel intentionally selected rather than improvised.",
          "Review the first four lessons a new student receives. Can they see progression? Do you remember previous targets? Is there a useful mix of challenge and recycling? Does preparation depend on last-minute searching?",
          "If your delivery system is chaotic, raising the rate may increase pressure without solving the underlying problem. Fix the operating system at the same time.",
        ],
      },
      {
        heading: "Test one change and watch the right signals",
        paragraphs: [
          "Use an explicit example window. Suppose you raise the new-student rate by 15% for four weeks. Track suitable inquiries, first bookings, recurring bookings and how many available slots remain. The goal is not to maximize one conversion percentage; it is to find a price that balances demand, quality and sustainable capacity.",
          "Do not overreact to a tiny sample. One lost inquiry does not prove the rate is too high, and one enthusiastic student does not prove it is too low. Look for a pattern.",
          "If demand drops sharply, decide whether the issue is price, profile clarity, availability or seasonality before reversing the change.",
        ],
      },
      {
        heading: "Use simple, professional communication",
        paragraphs: [
          "A rate-change message should be short. State the new rate, the effective date and any relevant transition. Avoid manufacturing scarcity or guilt. Students do not need a personal financial essay.",
          "A useful pattern is: “From [date], my lesson rate will be [new amount]. I’m giving you advance notice so you can plan your schedule. Our current learning plan will continue as usual.” Adapt it to the platform and relationship.",
          "If a student cannot continue at the new rate, treat that as a business outcome rather than a conflict. A sustainable tutoring practice cannot require every current student to remain forever.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "real-hourly-rate-online-spanish-tutor",
    title: "Your Real Hourly Rate as an Online Spanish Tutor",
    description:
      "Calculate your effective hourly rate as a Spanish tutor by including preparation, admin, platform fees and unused availability rather than looking only at lesson price.",
    eyebrow: "BUSINESS · EFFECTIVE HOURLY RATE",
    readingTime: "10 min",
    keywords: [
      "real hourly rate online tutor",
      "Spanish tutor effective hourly rate",
      "tutor prep time hourly rate",
      "online tutoring profit per hour",
    ],
    relatedHref: "/resources",
    relatedLabel: "Cut unpaid preparation with reusable resources",
    relatedLessonIds: [108, 15],
    relatedGuideSlugs: [
      "online-spanish-tutor-rates",
      "lesson-prep-system-spanish-tutors",
      "spanish-tutor-income-calculator",
    ],
    sections: [
      {
        heading: "The visible lesson price is not your hourly rate",
        paragraphs: [
          "If a student pays USD 30 for a lesson, you are not automatically earning USD 30 per hour. You may pay a platform fee, spend time preparing, answer messages, write notes and lose small blocks of the day between bookings. The effective rate measures revenue against the time required to produce it.",
          "Use this formula: effective hourly rate = net teaching revenue ÷ (teaching hours + prep hours + admin hours). The formula is simple, but it forces you to count work that often disappears from the mental calculation.",
          "Example scenario only: 10 lessons produce USD 250 net revenue. Teaching takes 8.3 hours, preparation takes 3 hours and admin takes 1 hour. Total work is 12.3 hours, so the effective rate is about USD 20.33 per hour. Those numbers are illustrative, not a claim about typical tutors.",
        ],
      },
      {
        heading: "Calculate net revenue before time",
        paragraphs: [
          "Start with what actually reaches you after platform commissions, payment fees, refunds or other direct teaching-related costs. If you teach on several platforms, calculate them separately before combining the totals because the fee structures may differ.",
          "Do not subtract personal taxes unless you are building a broader take-home-income model. The purpose here is to compare teaching models on the same basis.",
          "Keep assumptions visible. If a platform's fee changes by experience level or transaction type, use the exact current rule for your account or leave the platform-specific example out.",
        ],
      },
      {
        heading: "Track prep in categories instead of guessing",
        paragraphs: [
          "For one week, label preparation as selection, adaptation and creation. Selection means choosing an existing lesson. Adaptation means changing prompts or examples. Creation means building material from zero. The categories reveal where time is going.",
          "If most prep is creation, the tutoring business is effectively also a content-production business. That may be intentional, but it should be priced accordingly. If creation is not part of the service you want to sell, build a reusable library and reduce it.",
          "A ten-minute adaptation can be highly personalized if you already know the student's goal and have a strong underlying activity.",
        ],
      },
      {
        heading: "Include fragmented time when it is caused by the schedule",
        paragraphs: [
          "A 45-minute gap between two lessons is not always fully usable. If your calendar has many small gaps, total paid hours can look healthy while the day remains unavailable for other work. Track this separately as schedule inefficiency rather than hiding it inside preparation.",
          "Example assumption: six paid hours scattered across a ten-hour window can feel very different from six paid hours inside two compact teaching blocks. The revenue is identical, but the opportunity cost is not.",
          "Use this information when deciding availability, minimum lesson spacing and whether to close low-demand fragments.",
        ],
      },
      {
        heading: "Improve the effective rate without automatically charging more",
        bullets: [
          "Reduce custom material creation by reusing high-quality lesson structures.",
          "Batch student notes and lesson selection instead of switching context after every class.",
          "Consolidate availability into stronger teaching blocks where possible.",
          "Use templates for common pre-lesson and post-lesson messages.",
          "Raise price only when the broader business evidence supports it.",
        ],
        paragraphs: [
          "The effective rate is a diagnostic, not a score. A lower rate may be acceptable while you build experience or serve a market you value. The important part is knowing the trade-off rather than accidentally donating hours of invisible labor.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "price-spanish-lesson-packages",
    title: "How to Price Spanish Lesson Packages",
    description:
      "Design Spanish tutoring packages around outcomes, commitment and cash flow without using discounts that make the tutoring business unsustainable.",
    eyebrow: "BUSINESS · LESSON PACKAGES",
    readingTime: "9 min",
    keywords: [
      "Spanish lesson packages pricing",
      "tutoring package price",
      "Spanish tutor package rates",
      "online Spanish lesson package",
    ],
    relatedHref: "/resources",
    relatedLabel: "Build package sequences with SpanishCue resources",
    relatedLessonIds: [15, 14, 18],
    relatedGuideSlugs: [
      "online-spanish-tutor-rates",
      "spanish-student-learning-plan",
      "spanish-tutor-niche-ideas",
    ],
    sections: [
      {
        heading: "Package an outcome, not just a number of hours",
        paragraphs: [
          "A package is easier to understand when the student knows what the sequence is designed to accomplish. “10 Spanish lessons” describes inventory. “Travel Spanish foundations before your trip” or “Past-tense storytelling reset” describes a learning direction.",
          "The outcome must remain realistic. Do not promise fluency, a CEFR jump or exam success after a fixed number of lessons. Describe the skills and content the package will cover, then explain that pace depends on the learner.",
          "A package can also help the tutor plan resources in advance because several lessons share a coherent goal.",
        ],
      },
      {
        heading: "Start from the normal rate before considering a discount",
        paragraphs: [
          "Calculate the package at your standard rate first. If ten lessons at USD 30 equal USD 300, that is the baseline. A discount is a business choice, not a requirement. Ask what you receive in exchange: earlier cash, stronger commitment, lower acquisition cost or simpler scheduling.",
          "Example scenario: a 5% discount reduces a USD 300 package to USD 285. If the student would have booked all ten lessons anyway, you gave up USD 15 without changing behavior. If the package improves commitment enough to reduce empty slots, the trade may be worthwhile.",
          "Keep the example hypothetical and adapt it to the payment rules of the platform or independent system you use.",
        ],
      },
      {
        heading: "Protect yourself from over-customization",
        paragraphs: [
          "A package should not quietly promise ten completely bespoke curricula. Define the service: personalized goals and feedback delivered through a reusable teaching system. That distinction protects quality and prep time.",
          "Create a base route for common offers. A beginner block can move through survival interaction, sentence building, present tense and guided conversation. A travel block can cover transport, accommodation, food, problems and social interaction. Adapt examples to the student's trip rather than rebuilding each theme.",
          "If a student needs a truly specialized professional course, price the extra preparation explicitly.",
        ],
      },
      {
        heading: "Set rules for expiry, rescheduling and unused lessons",
        paragraphs: [
          "Packages create operational questions. Decide whether lessons expire, how cancellations work, whether the package is transferable and what happens if the student pauses for months. Follow any mandatory platform rules first.",
          "Independent tutors should write these policies clearly before selling the package. This is operational guidance, not legal advice; local consumer rules may apply.",
          "Avoid hiding restrictive terms. A package that creates surprise later damages trust and produces more admin than it saves.",
        ],
      },
      {
        heading: "Review the package after real delivery",
        paragraphs: [
          "Track completion rate, preparation time, lesson spacing and whether the promised learning sequence actually fits the number of sessions. The first version of a package is an assumption.",
          "If almost every student needs two more lessons for the core outcome, the package scope may be too large. If students finish early and spend the final sessions on unrelated topics, the offer may be too narrow.",
          "Use completed packages to improve the structure, not to create fake success statistics.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "spanish-tutor-income-calculator",
    title: "Spanish Tutor Income Calculator: Students, Hours and Net Revenue",
    description:
      "Model Spanish tutoring income with transparent assumptions for lessons per week, net rate, cancellations, prep time and active-student load.",
    eyebrow: "BUSINESS · INCOME MODEL",
    readingTime: "11 min",
    keywords: [
      "Spanish tutor income calculator",
      "online tutor income calculator",
      "Spanish tutoring monthly income",
      "tutor students hours revenue",
    ],
    relatedHref: "/resources",
    relatedLabel: "Reduce prep hours with SpanishCue",
    relatedLessonIds: [15, 14, 108],
    relatedGuideSlugs: [
      "monthly-income-plan-spanish-tutor",
      "how-many-students-full-time-spanish-tutor",
      "real-hourly-rate-online-spanish-tutor",
    ],
    sections: [
      {
        heading: "Use a model, not an income promise",
        paragraphs: [
          "No calculator can tell you what a Spanish tutor will earn without assumptions. Rates, platform fees, booked hours, cancellations, student frequency and unpaid work vary widely. The useful calculator is therefore a scenario model where every input is visible.",
          "Start with: estimated monthly teaching revenue = average paid lessons per week × average net lesson rate × 4.33. The factor 4.33 converts a weekly average into an approximate monthly average. It is not a guarantee that every month contains the same number of teaching days.",
          "Example scenario: 25 paid lessons per week at USD 24 net gives roughly USD 2,598 monthly teaching revenue before taxes and non-teaching business costs. This is an illustration, not a typical-income claim.",
        ],
      },
      {
        heading: "Model cancellations separately from capacity",
        paragraphs: [
          "If you open 30 weekly slots but average 25 paid lessons, your utilization is about 83%. Do not calculate income as if every theoretical slot is always sold.",
          "Use an assumption for paid utilization based on your own data. New tutors may not have enough history, so create a conservative, base and strong scenario rather than pretending one number is accurate.",
          "If your cancellation policy means some cancelled lessons remain paid, model paid lessons rather than attendance. The exact treatment depends on your platform and policy.",
        ],
      },
      {
        heading: "Convert lessons into active students",
        paragraphs: [
          "Student count depends on frequency. If the average active student takes one lesson per week, 25 weekly lessons require roughly 25 active students. If the average is 1.5 lessons per week, the same teaching load needs about 17 students.",
          "Use: active students ≈ paid lessons per week ÷ average lessons per active student per week. The result is a planning estimate because students pause, travel, change frequency and leave.",
          "This calculation is especially useful when deciding whether your problem is lead generation or retention. If you need 18 active students and already have 17, acquiring 30 more leads is not the priority.",
        ],
      },
      {
        heading: "Add prep and admin to understand workload",
        paragraphs: [
          "Revenue alone does not show whether the scenario is livable. Add teaching hours, preparation hours and administrative hours. A tutor with 25 lessons and 12 extra unpaid hours has a different business from a tutor with the same revenue and 4 unpaid hours.",
          "Example assumption: 25 fifty-minute lessons equal about 20.8 teaching hours. Add 5 hours of prep and 3 hours of admin and the business requires roughly 28.8 hours before marketing or professional development.",
          "Use the workload to decide whether the target income should come from more lessons, a higher net rate, lower prep time or a combination.",
        ],
      },
      {
        heading: "Build three scenarios instead of one forecast",
        bullets: [
          "Conservative: lower utilization, current net rate, higher prep estimate.",
          "Base: recent average utilization, current rate, normal prep.",
          "Strong: realistic higher utilization or tested higher rate, not a fantasy 100% calendar.",
        ],
        paragraphs: [
          "Compare the scenarios monthly and replace assumptions with real averages as your data improves. The purpose is to see which variable matters most, not to predict the future perfectly.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "how-many-students-full-time-spanish-tutor",
    title: "How Many Students Do You Need to Tutor Spanish Full-Time?",
    description:
      "Estimate the active-student load needed for full-time Spanish tutoring using lesson frequency, weekly teaching capacity, net rate and retention assumptions.",
    eyebrow: "BUSINESS · STUDENT LOAD",
    readingTime: "10 min",
    keywords: [
      "how many students full time tutor",
      "Spanish tutor full time students",
      "online tutor student load",
      "Spanish tutoring full time",
    ],
    relatedHref: "/resources",
    relatedLabel: "Plan repeatable lessons with SpanishCue",
    relatedLessonIds: [15, 14, 18],
    relatedGuideSlugs: [
      "spanish-tutor-income-calculator",
      "fill-weekly-schedule-spanish-tutor",
      "retain-online-spanish-students",
    ],
    sections: [
      {
        heading: "Start with paid lessons, not student count",
        paragraphs: [
          "A student is not a unit of income because frequency varies. One learner may study twice a week, another every two weeks and another pause for a month. Start by deciding how many paid lessons per week your business needs and can sustainably deliver.",
          "Example assumption: you want 24 paid lessons per week. If the average active student books 1.2 lessons per week, the planning estimate is 24 ÷ 1.2 = 20 active students. That is not a universal number; it is a scenario.",
          "If your average student studies more frequently, you need fewer active students for the same lesson load. If students are irregular, you need a larger active pool.",
        ],
      },
      {
        heading: "Define full-time by total workload",
        paragraphs: [
          "Twenty-five teaching hours can become a much larger workweek when preparation, messages and schedule gaps are included. Decide what full-time means to you in total working hours, not only camera time.",
          "A tutor who wants a 35-hour workweek might reserve 22–25 hours for teaching and the rest for preparation, admin, marketing and professional development. Another tutor may prefer fewer teaching hours at a higher rate.",
          "Your personal energy matters. Six consecutive live lessons can be more demanding than six hours of asynchronous work.",
        ],
      },
      {
        heading: "Use retention to stabilize the required student pool",
        paragraphs: [
          "If students stay longer, you need fewer new students each month to maintain the same active load. Retention is therefore part of acquisition planning.",
          "Suppose you need 20 active students and an average of two students leave each month. You need roughly two replacements per month just to stay level. If six students leave, marketing pressure increases dramatically.",
          "Do not try to retain students who have achieved their goals by creating dependence. Good retention means the right students continue because the learning relationship remains useful.",
        ],
      },
      {
        heading: "Account for seasonal and schedule risk",
        paragraphs: [
          "Students travel, take holidays and change jobs. A full-time model should not depend on every person attending every week of the year. Use a utilization buffer.",
          "Example scenario: if your comfortable capacity is 30 lesson slots, planning for an average of 24–26 paid lessons gives some room for variation. Opening exactly 24 slots and assuming all will sell can make the model fragile.",
          "Keep financial reserves outside this teaching-load calculation; revenue stability and personal cash management are related but separate decisions.",
        ],
      },
      {
        heading: "Reduce the number of students you need by improving leverage",
        paragraphs: [
          "There are only a few variables: average net rate, lessons per student, number of paid lessons and unpaid work. A higher rate can reduce the lesson count required for a target income. Better retention can reduce acquisition pressure. Lower prep time can reduce total workload without changing revenue.",
          "This is why teaching systems matter to the business. If every student needs a completely new curriculum, adding students creates disproportionate unpaid work. A reusable resource library lets the active-student pool grow without multiplying preparation at the same rate.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "fill-weekly-schedule-spanish-tutor",
    title: "How to Fill Your Weekly Schedule as a Spanish Tutor",
    description:
      "Diagnose empty tutoring slots using positioning, availability, first-lesson conversion, retention and referrals instead of assuming the only answer is a lower price.",
    eyebrow: "GROWTH · WEEKLY SCHEDULE",
    readingTime: "10 min",
    keywords: [
      "fill tutoring schedule",
      "get more Spanish students",
      "Spanish tutor bookings",
      "online Spanish tutor schedule",
    ],
    relatedHref: "/resources",
    relatedLabel: "Create a stronger lesson experience with SpanishCue",
    relatedLessonIds: [15, 14, 137],
    relatedGuideSlugs: [
      "spanish-tutor-niche-ideas",
      "retain-online-spanish-students",
      "availability-online-spanish-tutor",
      "independent-spanish-tutor-referrals",
    ],
    sections: [
      {
        heading: "Find the broken stage before changing price",
        paragraphs: [
          "An empty schedule can come from several different problems: few profile views, views but no inquiries, inquiries but no first lessons, first lessons but no recurring bookings, or students who leave too quickly. Each stage needs a different fix.",
          "If people never find you, work on visibility, niche and availability. If they view you but do not contact you, work on the offer. If they book a first lesson but do not continue, inspect the first-lesson experience and follow-up. If recurring students leave, inspect progression, scheduling and lesson quality.",
          "Lowering price affects only some of these problems and can make the economics worse if the real bottleneck is retention.",
        ],
      },
      {
        heading: "Concentrate availability where it can actually sell",
        paragraphs: [
          "A calendar with many scattered slots can look open but still be inconvenient. Identify the time zones and learner groups you serve, then create dependable blocks that overlap with them.",
          "Use your own booking history when possible. If Tuesday evening consistently fills and Tuesday morning never does, that evidence is stronger than a generic claim about “peak hours.”",
          "Avoid opening unsustainable times just to appear available. Frequent rescheduling damages the product.",
        ],
      },
      {
        heading: "Make the offer specific enough to attract the right student",
        paragraphs: [
          "A strong niche can improve the quality of inquiries because the learner understands why you may fit. Beginner structure, travel Spanish, business communication, conversation confidence, DELE preparation, pronunciation or Rioplatense Spanish are examples of offers that can be made concrete.",
          "The niche should change the lesson design. If your profile says travel Spanish, prepare realistic travel roleplays and listening. If it says business Spanish, use professional situations and register. Otherwise the niche is just a marketing label.",
          "A clear offer can also support referrals because students know who to recommend you to.",
        ],
      },
      {
        heading: "Improve the first-to-recurring lesson transition",
        paragraphs: [
          "The first lesson should end with evidence and a next step. Tell the student what you observed, what priority you recommend and what the next few lessons would address.",
          "Do not overwhelm them with a twelve-month curriculum. A three-to-five-lesson provisional route is enough to show structure.",
          "Follow up with a concise recap when appropriate. On platforms, respect the platform messaging and booking rules.",
        ],
      },
      {
        heading: "Use retention and referrals before chasing endless new leads",
        paragraphs: [
          "A weekly schedule becomes easier to fill when current students maintain a rhythm. Encourage consistent scheduling through clear planning, not pressure. Make progress visible and adjust lessons as goals change.",
          "Referrals are most natural after a student has experienced a clear result or expresses satisfaction. Ask simply, and do not create fake incentives or spam communities.",
          "Track which stage improved after each change. Growth becomes manageable when you know whether the bottleneck is discovery, conversion or retention.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "monthly-income-plan-spanish-tutor",
    title: "How to Plan Monthly Income as an Online Spanish Tutor",
    description:
      "Build a monthly Spanish-tutoring revenue plan using net rate, utilization, lesson frequency, cancellations and a realistic range of scenarios.",
    eyebrow: "BUSINESS · MONTHLY PLANNING",
    readingTime: "10 min",
    keywords: [
      "Spanish tutor monthly income",
      "online tutor income plan",
      "tutoring monthly revenue",
      "plan Spanish tutoring income",
    ],
    relatedHref: "/resources",
    relatedLabel: "Make lesson delivery more efficient with SpanishCue",
    relatedLessonIds: [15, 14, 108],
    relatedGuideSlugs: [
      "spanish-tutor-income-calculator",
      "real-hourly-rate-online-spanish-tutor",
      "fill-weekly-schedule-spanish-tutor",
    ],
    sections: [
      {
        heading: "Plan with a range, not one perfect number",
        paragraphs: [
          "Tutoring revenue changes with holidays, cancellations, student turnover and new bookings. A single monthly target can create false precision. Build a conservative, base and strong scenario instead.",
          "Example assumption: your current net rate is USD 24 and you expect 20, 25 or 30 paid lessons per week. Using 4.33 weeks per month, the teaching-revenue scenarios are approximately USD 2,078, USD 2,598 and USD 3,118 before taxes and broader business costs.",
          "These figures are examples only. Replace them with your own net rate and real lesson averages.",
        ],
      },
      {
        heading: "Separate capacity from expected utilization",
        paragraphs: [
          "If you can teach 30 lessons per week, do not automatically budget for 30 paid lessons. Capacity is the maximum you are willing to deliver; utilization is what actually sells and remains paid.",
          "Use your recent history when available. If 24 of 30 slots are typically paid, the utilization assumption is 80%. A new tutor without history can model several utilization scenarios rather than guessing one.",
          "This prevents financial planning from depending on a permanently full calendar.",
        ],
      },
      {
        heading: "Model student turnover as a normal business variable",
        paragraphs: [
          "Some students will leave because they reach a goal, move, change budget or simply stop studying. Monthly planning should include replacement needs.",
          "Track active students at the beginning and end of each month, new starts and departures. The data shows whether revenue growth is coming from acquisition, higher frequency, higher rate or better retention.",
          "Do not interpret every departure as failure. The useful metric is whether suitable students are staying long enough to make progress and the business can replace normal churn.",
        ],
      },
      {
        heading: "Include unpaid work in the workload plan",
        paragraphs: [
          "A revenue scenario is incomplete if the strong month requires an impossible number of preparation hours. Estimate prep and admin alongside paid lessons.",
          "Example scenario: 30 lessons at ten minutes of prep each require five prep hours. At thirty minutes each, they require fifteen. The revenue is identical, but the workweek is not.",
          "Investing in reusable resources can make a higher utilization scenario physically sustainable without lowering lesson quality.",
        ],
      },
      {
        heading: "Review monthly and change one operating variable at a time",
        paragraphs: [
          "At month end, compare paid lessons, average net rate, utilization, active students and total prep/admin hours. Identify the constraint with the largest effect.",
          "If you are full, rate or capacity may be the next lever. If you are underbooked, investigate acquisition and availability. If revenue is acceptable but the workload is exhausting, prep efficiency or schedule fragmentation may matter more than adding students.",
          "A monthly plan should help you make decisions, not punish you for missing an exact forecast.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "spanish-tutor-niche-ideas",
    title: "Spanish Tutor Niche Ideas: How to Stop Competing With Everyone",
    description:
      "Choose a Spanish tutoring niche by combining learner type, problem, outcome and genuine expertise instead of adding a specialty label that does not change your lessons.",
    eyebrow: "POSITIONING · TUTOR NICHES",
    readingTime: "11 min",
    keywords: [
      "Spanish tutor niche ideas",
      "Spanish teaching niche",
      "online Spanish tutor specialization",
      "Spanish tutor target students",
    ],
    relatedHref: "/resources",
    relatedLabel: "Explore SpanishCue resources by teaching goal",
    relatedLessonIds: [16, 39, 38, 37],
    relatedGuideSlugs: [
      "teach-beginner-spanish-online",
      "teach-spanish-for-travel-online",
      "business-spanish-tutoring",
      "rioplatense-spanish-tutoring-niche",
    ],
    sections: [
      {
        heading: "A niche is a teaching decision, not a keyword",
        paragraphs: [
          "A useful niche changes who the lesson is for, what the student needs and how you teach. “Conversation” is only a niche if you can explain what kind of conversation problem you solve. “B1 professionals who understand Spanish but freeze in meetings” is much more actionable.",
          "You do not need to reject every student outside the niche. The niche helps the right person recognize fit and helps you build reusable lesson sequences.",
          "Avoid choosing a niche only because you heard it pays more. If you lack the expertise or interest to teach it well, the positioning will be hard to sustain.",
        ],
      },
      {
        heading: "Combine four variables to generate niche ideas",
        bullets: [
          "Learner: adults, beginners, professionals, travelers, heritage learners, exam candidates.",
          "Problem: cannot start speaking, weak past narration, pronunciation barrier, work-specific communication, regional variety.",
          "Outcome: travel independently, participate in meetings, pass an exam, speak with family, understand Rioplatense Spanish.",
          "Evidence: teaching experience, professional background, training, regional knowledge, curriculum strength.",
        ],
        paragraphs: [
          "Combine one item from each category. “Adult beginners preparing to travel through Latin America” is clearer than “Spanish for travel.” “English-speaking professionals who need Spanish client calls” is clearer than “business Spanish.”",
          "The result should be narrow enough to design material but broad enough that real students exist. You do not need a statistical market report to test it; you can observe inquiry quality over time.",
        ],
      },
      {
        heading: "Examples of niches that create different lessons",
        paragraphs: [
          "Beginner Spanish requires strong scaffolding and confidence-building. Travel Spanish prioritizes functional situations, listening and repair language. Business Spanish needs professional tasks and register. DELE preparation needs exam-task familiarity. Pronunciation work needs perception, articulation and transfer to connected speech. Rioplatense Spanish includes vos, regional pronunciation, vocabulary and cultural context.",
          "These niches are not interchangeable labels. If your resources and lesson progression do not change, the niche is probably too superficial.",
          "Start with one primary niche and one or two secondary offers rather than presenting eight specialties with equal emphasis.",
        ],
      },
      {
        heading: "Test positioning without rebuilding the entire business",
        paragraphs: [
          "Change the headline, first profile paragraph and a small set of sample lessons together. Keep the rest of the business stable for several weeks. Track whether inquiries become more relevant and whether first lessons are easier to plan.",
          "Do not declare success from one booking. Look for a pattern in the questions students ask and the problems they bring.",
          "If the niche attracts the wrong expectations, refine the promise rather than adding more buzzwords.",
        ],
      },
      {
        heading: "Use a niche to reduce preparation time",
        paragraphs: [
          "Specialization creates repetition in a useful way. If many students have similar goals, you can build a high-quality resource sequence once and personalize examples, pacing and feedback.",
          "That leverage is one of the economic benefits of a niche. You are not giving every student the same class; you are avoiding the cost of inventing unrelated curricula for every student.",
          "SpanishCue can support multiple niches through reusable conversation, grammar, listening, pronunciation and region-specific materials.",
        ],
      },
    ],
  },
  {
    ...businessCommon,
    slug: "independent-spanish-tutor-referrals",
    title: "Referral Strategies for Independent Spanish Tutors",
    description:
      "Build a low-pressure referral system for independent Spanish tutoring using timing, clear positioning and a professional student experience rather than spam.",
    eyebrow: "GROWTH · REFERRALS",
    readingTime: "9 min",
    keywords: [
      "Spanish tutor referrals",
      "get tutoring referrals",
      "independent Spanish tutor marketing",
      "Spanish teacher word of mouth",
    ],
    relatedHref: "/resources",
    relatedLabel: "Strengthen the lesson experience students refer",
    relatedLessonIds: [15, 14, 137],
    relatedGuideSlugs: [
      "spanish-tutor-niche-ideas",
      "fill-weekly-schedule-spanish-tutor",
      "retain-online-spanish-students",
    ],
    sections: [
      {
        heading: "Make the service easy to describe before asking for referrals",
        paragraphs: [
          "Students refer services they can explain. “My Spanish tutor is nice” is positive but vague. “My tutor helps adult beginners start speaking with structured visual lessons” gives the friend a reason to recognize fit.",
          "A clear niche therefore supports referrals even when you never ask. Make sure the student understands what you specialize in and what kinds of learners you are accepting.",
          "Do not manufacture a niche solely for marketing. The lesson experience must support the description.",
        ],
      },
      {
        heading: "Ask after evidence of value, not immediately after payment",
        paragraphs: [
          "Natural moments include when a student explicitly says the lessons are helping, achieves a meaningful milestone or finishes a course block. The request should be optional and brief.",
          "A simple pattern is: “I’m glad this has been useful. If you know someone looking for structured beginner Spanish, feel free to send them my details.” There is no need to pressure the student or ask repeatedly.",
          "If you use a platform, follow its rules about off-platform contact and referrals. Independent tutors can direct people to their own booking page or contact method.",
        ],
      },
      {
        heading: "Use referral incentives carefully",
        paragraphs: [
          "A discount or bonus can encourage action, but it is not automatically necessary. Calculate the cost before offering it. If a referral credit equals half a lesson, compare that acquisition cost with what you normally spend in time or platform fees to find a new student.",
          "Avoid incentives that create fake reviews, spam or pressure. A referral should still be based on a genuine relationship and a suitable learner.",
          "If you do offer a credit, define when it applies and whether the new student needs to complete a paid lesson first.",
        ],
      },
      {
        heading: "Create materials people naturally share",
        paragraphs: [
          "Useful public content can generate referrals indirectly. A short pronunciation guide, travel checklist, grammar explanation or sample conversation activity can be sent to a friend without the student feeling like a salesperson.",
          "The content should stand on its own and lead back to a clear tutoring offer. Avoid publishing thin promotional posts that exist only to capture an email address.",
          "SpanishCue editorial guides can play the same role for a teaching-resource business: useful first, commercial second.",
        ],
      },
      {
        heading: "Track referrals without turning relationships into a funnel dashboard",
        paragraphs: [
          "Record how each new student heard about you. Over several months, you can see whether referrals are meaningful enough to justify a formal program.",
          "Also track fit. Ten referrals who want a service you do not offer are less useful than two who match your niche. Clear positioning improves referral quality.",
          "The strongest referral strategy is still the product: reliable scheduling, visible progress, thoughtful teaching and an experience worth describing to another person.",
        ],
      },
    ],
  },
];
