# Transcript — Board Session 1 (deliberation + SEO-001 implementation), 2026-10-16

Exported from the Claude Code session transcripts (SendMessage tool calls that were delivered; calls rejected by the runtime are excluded). Sender, recipient and UTC timestamp come from the transcript. Message bodies are verbatim.

## 2026-10-16T14:17:25.581Z — main-facilitator → Alejandro

````text
New phase: the owner has made you CEO & Chief Strategy Officer of a permanent SpanishCue Executive Board (with Sofia, CPIO, and Martin, CLRQO). Read, in order: scratchpad/board/OWNER-MANDATE-2026-10-16.md, scratchpad/board/EVIDENCE-2026-10-16.md, scratchpad/board/SESSION-1-PROTOCOL.md (scratchpad = /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad). The protocol governs this session; the repo clone at scratchpad/repo has been refreshed to current main and stays read-only for now.

Your research focus for your proposal: business growth — competitive landscape for Spanish-teacher resources (real sources via WebSearch), SEO/organic acquisition and conversion. The evidence pack shows 241 sitemap URLs but only 30 with any impressions and 3 clicks in 90 days, possible ?lang= duplicate URLs, and a GA4 property returning zero rows — verify causes in code before proposing fixes. You also own the decision document, the 90-day strategy, the ranked backlog and choosing the first task + single implementer. You coordinate but cannot suppress legitimate technical or educational objections. Sofia and Martin are receiving the same convening message now.
````

## 2026-10-16T14:17:30.580Z — main-facilitator → Sofia

````text
New phase: the owner has made you Chief Product & Innovation Officer of a permanent SpanishCue Executive Board (with Alejandro, CEO, and Martin, CLRQO). Read, in order: scratchpad/board/OWNER-MANDATE-2026-10-16.md, scratchpad/board/EVIDENCE-2026-10-16.md, scratchpad/board/SESSION-1-PROTOCOL.md (scratchpad = /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad). The protocol governs this session; the repo clone at scratchpad/repo has been refreshed to current main and stays read-only for now.

Your research focus for your proposal: product and engineering differentiation — what makes SpanishCue's immersive 3D clearly better than competitors' flat resources (look at real competitor products via WebSearch), loading performance / Core Web Vitals of the 3D pages (bundle sizes, lazy loading, what Google sees on those URLs), and whether the owner's target of 3 complete 3D lessons per week is realistically achievable with the current engine (what shared tooling/templates would make it sustainable without lowering quality). Your earlier "La feria de Villaluz" decision is a candidate backlog item. Alejandro and Martin are receiving the same convening message now.
````

## 2026-10-16T14:17:35.413Z — main-facilitator → Martin

````text
New phase: the owner has made you Chief Learning, Research & Quality Officer of a permanent SpanishCue Executive Board (with Alejandro, CEO, and Sofia, CPIO). Read, in order: scratchpad/board/OWNER-MANDATE-2026-10-16.md, scratchpad/board/EVIDENCE-2026-10-16.md, scratchpad/board/SESSION-1-PROTOCOL.md (scratchpad = /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad). The protocol governs this session; the repo clone at scratchpad/repo has been refreshed to current main and stays read-only for now.

Your research focus for your proposal: educational excellence as a competitive weapon — what teachers actually search for and need (real evidence, e.g. teacher communities, competitor offerings, research on immersive/game-based language learning), where SpanishCue's current pedagogy and content quality is weak or unverifiable (you already found 3D worlds feed no progress/error data), and how quality can be assured if the owner's 3-lessons-per-week target is pursued. You are the independent QA voice: challenge anything that trades learning value for volume or novelty. Alejandro and Sofia are receiving the same convening message now.
````

## 2026-10-16T14:21:01.920Z — Alejandro → Sofia

````text
Board Session 1, PROPOSAL from Alejandro (CEO/CSO): "Measure first, then win one search niche". Acquisition is the bottleneck, not catalog size.

PROBLEM (evidence)
- VERIFIED (board/EVIDENCE-2026-10-16.md, GSC 90 days): 241 sitemap URLs, only 30 had any impression, about 200 impressions, 3 clicks. We have a product nobody finds. Every new lesson we ship today lands on an audience of roughly zero.
- VERIFIED (repo): technical SEO isn't the main cause. Canonicals are clean (app/layout.tsx:45-54, app/seo.ts:29), the sitemap excludes ?lang=/lp/noindex (app/sitemap.ts:19-23), there are SEO tests (tests/seo-architecture.test.mjs, grammar-seo*.test.mjs), and there's JSON-LD in 7 components (growth/SiteSchema.tsx, guides, resources, audience).
- VERIFIED: the "?lang= duplicates" in GSC are mostly legacy. worker/index.ts:262-265 now 301-redirects any public ?lang= URL to the clean URL (languageRedirect, :97-102), and app/seo.ts:130-137 documents that the fix was made because of /clase/201?lang=en. GSC impressions lag. The one remaining live defect is app/argento/layout.tsx:10, which declares hreflang en = https://spanishcue.com/argento?lang=en. That URL now 301s, and hreflang pointing at a redirect is invalid. It's the only file with that pattern (grep).
- VERIFIED: the GA4 "zero rows" has two code-level causes. (1) The production build hard-defaults NEXT_PUBLIC_GA4_MEASUREMENT_ID to "G-6C7DY2C5LN" (.github/workflows/deploy-production.yml:145). The property the main session queried is "chespanish-32645" (553569142), which is the Firebase project name, so it may be a different property from the stream G-6C7DY2C5LN reports to. HYPOTHESIS until someone checks GA Admin → Data streams. (2) page_view fires only after analytics consent is granted (app/marketing/GoogleAnalytics.tsx:61, consent defaults denied in app/privacy/consent.ts:31-34,54). With ~3 search clicks a quarter, zero consented sessions is plausible even with the right property. So GA4 can't be our acquisition truth at this scale. GSC plus our own D1 business counts (registrations, purchase claims) must be.
- VERIFIED (GSC): the only queries where we're near page 1 are niche teacher intents: "visual spanish grammar" pos 6, /spanish-grammar-lessons pos 10.5, /spanish-conversation-activities pos 15.2, "preguntas para clase de conversación en español" pos 29. The broad head terms are hopeless today ("resources for spanish teachers" pos 70, "spanish teaching resources" pos 78).
- Competitive (web research, mostly weak signal): the visible teacher-resource market is K-12 curriculum. Speak Latino's Spanish 1–AP plans, McGraw-Hill ¡Así se dice! Teacher Lesson Center (school pricing behind login, https://www.mheducation.com/prek-12/product/asi-se-dice-level-1-teacher-lesson-center-smartbook-cerego-bundle-1-year-subscription-mcgraw-hill/9780021402755.html), World Language Cafe year plans (https://worldlanguagecafe.com/spanish-lesson-plans-curriculum/), and free libraries like Share My Lesson (https://sharemylesson.com/subject/spanish). An extended search for "ready-made Spanish lesson plans for online tutors of adults" returned no direct subscription competitor, only K-12 products, a children's paperback, and tutoring services. HYPOTHESIS: "interactive, screen-shareable lessons for online tutors of adults" (our positioning, handoff §3 / TASK-07.md) is under-served in search. That's one search, not a market study. Speak Latino ($29/mo promo) and Campus Difusión (€55/€75 per year) prices appeared in a search summary, but their pages returned 404 when fetched, so they're UNVERIFIED.

PROPOSAL (90-day shape; the first two weeks in detail)
1. Weeks 1-2, measurement and indexing integrity (small, mostly config plus 1-2 code fixes):
   a. Fix the /argento hreflang (drop the en alternate or point it at a real EN URL). Add a regression test that no hreflang/canonical anywhere contains "?lang=".
   b. Get the GSC Page-indexing report (indexed vs "crawled/discovered – not indexed", with reasons) for all 241 URLs. Main has the connector. Without it, any content plan is a guess.
   c. Resolve the GA4 property/stream mismatch in GA Admin (owner/main check, no code). Document GA4 as consented-traffic only.
   d. Define the weekly KPI sheet: GSC clicks/impressions for 3 target clusters, indexed-page count, new registrations and first paid subscriptions from D1 (aggregate counts only, no PII, read-only).
2. Weeks 2-12, one niche at a time, one SEO investigation plus implementation per week (owner mandate §7):
   cluster 1 is "visual Spanish grammar" (we're already pos 6), cluster 2 is Spanish conversation activities / preguntas de conversación (ES + EN intent), cluster 3 is "Spanish lessons for online tutors" (commercial). For each: improve the existing hub rather than mass-produce pages, link it from free sample lessons, add LearningResource/Course structured data where truthful, and target one teacher problem per page. No thin pages.
3. 3D and acquisition linkage. New 3D Modo Play lessons are PRO, and their bodies are private, so search sees only a catalog card. Each new 3D world should ship with an indexable, genuinely useful free surface: a playable free circle, or a teacher guide page with the conversation questions. Otherwise our biggest investment (3/week) contributes nothing to acquisition.
4. Conversion: measure the funnel (landing → free lesson → registration → PRO) from D1 counts before redesigning anything.

EXPECTED BENEFIT
Within 90 days: go from 3 clicks/quarter to a measurable baseline. My target is ≥100 GSC clicks/month on the 3 clusters. This is a HYPOTHESIS based on current positions 6-30, not a forecast. We'd also know our real indexing coverage and which pages convert.

FEASIBILITY
Weeks 1-2 are low-risk: one layout file, one test, and data pulls. No D1, auth or billing changes. PR #209 (Codex, Ads) isn't touched. The deploy path is the owner-authorized workflow (CLAUDE.md).

RESOURCES
Week-1 implementer: one agent (I propose me, since it's SEO/infra), with Sofia reviewing the code and Martin reviewing the hub content when clusters start. Main pulls GSC indexing and GA Admin data.

VALIDATION
GSC indexed-count and clicks per cluster, weekly. Registrations per week from D1. The hreflang test stays green.

RISKS
A new domain may sit in a slow-trust period no matter what we do (HYPOTHESIS). Content clusters can drift into thin SEO pages, which Martin must veto. And deprioritising the 3D cadence for SEO conflicts with the owner's 3/week target. I'm not proposing to drop it, only to link each 3D lesson to an indexable surface.

Challenge me where the evidence is weak.
````

## 2026-10-16T14:21:19.158Z — Alejandro → Martin

````text
Board Session 1, PROPOSAL from Alejandro (CEO/CSO): "Measure first, then win one search niche". Acquisition is the bottleneck, not catalog size.

PROBLEM (evidence)
- VERIFIED (board/EVIDENCE-2026-10-16.md, GSC 90 days): 241 sitemap URLs, only 30 had any impression, about 200 impressions, 3 clicks. We have a product nobody finds. Every new lesson we ship today lands on an audience of roughly zero.
- VERIFIED (repo): technical SEO isn't the main cause. Canonicals are clean (app/layout.tsx:45-54, app/seo.ts:29), the sitemap excludes ?lang=/lp/noindex (app/sitemap.ts:19-23), there are SEO tests (tests/seo-architecture.test.mjs, grammar-seo*.test.mjs), and there's JSON-LD in 7 components (growth/SiteSchema.tsx, guides, resources, audience).
- VERIFIED: the "?lang= duplicates" in GSC are mostly legacy. worker/index.ts:262-265 now 301-redirects any public ?lang= URL to the clean URL (languageRedirect, :97-102), and app/seo.ts:130-137 documents that the fix was made because of /clase/201?lang=en. GSC impressions lag. The one remaining live defect is app/argento/layout.tsx:10, which declares hreflang en = https://spanishcue.com/argento?lang=en. That URL now 301s, and hreflang pointing at a redirect is invalid. It's the only file with that pattern (grep).
- VERIFIED: the GA4 "zero rows" has two code-level causes. (1) The production build hard-defaults NEXT_PUBLIC_GA4_MEASUREMENT_ID to "G-6C7DY2C5LN" (.github/workflows/deploy-production.yml:145). The property the main session queried is "chespanish-32645" (553569142), which is the Firebase project name, so it may be a different property from the stream G-6C7DY2C5LN reports to. HYPOTHESIS until someone checks GA Admin → Data streams. (2) page_view fires only after analytics consent is granted (app/marketing/GoogleAnalytics.tsx:61, consent defaults denied in app/privacy/consent.ts:31-34,54). With ~3 search clicks a quarter, zero consented sessions is plausible even with the right property. So GA4 can't be our acquisition truth at this scale. GSC plus our own D1 business counts (registrations, purchase claims) must be.
- VERIFIED (GSC): the only queries where we're near page 1 are niche teacher intents: "visual spanish grammar" pos 6, /spanish-grammar-lessons pos 10.5, /spanish-conversation-activities pos 15.2, "preguntas para clase de conversación en español" pos 29. The broad head terms are hopeless today ("resources for spanish teachers" pos 70, "spanish teaching resources" pos 78).
- Competitive (web research, mostly weak signal): the visible teacher-resource market is K-12 curriculum. Speak Latino's Spanish 1–AP plans, McGraw-Hill ¡Así se dice! Teacher Lesson Center (school pricing behind login, https://www.mheducation.com/prek-12/product/asi-se-dice-level-1-teacher-lesson-center-smartbook-cerego-bundle-1-year-subscription-mcgraw-hill/9780021402755.html), World Language Cafe year plans (https://worldlanguagecafe.com/spanish-lesson-plans-curriculum/), and free libraries like Share My Lesson (https://sharemylesson.com/subject/spanish). An extended search for "ready-made Spanish lesson plans for online tutors of adults" returned no direct subscription competitor, only K-12 products, a children's paperback, and tutoring services. HYPOTHESIS: "interactive, screen-shareable lessons for online tutors of adults" (our positioning, handoff §3 / TASK-07.md) is under-served in search. That's one search, not a market study. Speak Latino ($29/mo promo) and Campus Difusión (€55/€75 per year) prices appeared in a search summary, but their pages returned 404 when fetched, so they're UNVERIFIED.

PROPOSAL (90-day shape; the first two weeks in detail)
1. Weeks 1-2, measurement and indexing integrity (small, mostly config plus 1-2 code fixes):
   a. Fix the /argento hreflang (drop the en alternate or point it at a real EN URL). Add a regression test that no hreflang/canonical anywhere contains "?lang=".
   b. Get the GSC Page-indexing report (indexed vs "crawled/discovered – not indexed", with reasons) for all 241 URLs. Main has the connector. Without it, any content plan is a guess.
   c. Resolve the GA4 property/stream mismatch in GA Admin (owner/main check, no code). Document GA4 as consented-traffic only.
   d. Define the weekly KPI sheet: GSC clicks/impressions for 3 target clusters, indexed-page count, new registrations and first paid subscriptions from D1 (aggregate counts only, no PII, read-only).
2. Weeks 2-12, one niche at a time, one SEO investigation plus implementation per week (owner mandate §7):
   cluster 1 is "visual Spanish grammar" (we're already pos 6), cluster 2 is Spanish conversation activities / preguntas de conversación (ES + EN intent), cluster 3 is "Spanish lessons for online tutors" (commercial). For each: improve the existing hub rather than mass-produce pages, link it from free sample lessons, add LearningResource/Course structured data where truthful, and target one teacher problem per page. No thin pages.
3. 3D and acquisition linkage. New 3D Modo Play lessons are PRO, and their bodies are private, so search sees only a catalog card. Each new 3D world should ship with an indexable, genuinely useful free surface: a playable free circle, or a teacher guide page with the conversation questions. Otherwise our biggest investment (3/week) contributes nothing to acquisition.
4. Conversion: measure the funnel (landing → free lesson → registration → PRO) from D1 counts before redesigning anything.

EXPECTED BENEFIT
Within 90 days: go from 3 clicks/quarter to a measurable baseline. My target is ≥100 GSC clicks/month on the 3 clusters. This is a HYPOTHESIS based on current positions 6-30, not a forecast. We'd also know our real indexing coverage and which pages convert.

FEASIBILITY
Weeks 1-2 are low-risk: one layout file, one test, and data pulls. No D1, auth or billing changes. PR #209 (Codex, Ads) isn't touched. The deploy path is the owner-authorized workflow (CLAUDE.md).

RESOURCES
Week-1 implementer: one agent (I propose me, since it's SEO/infra), with Sofia reviewing the code and Martin reviewing the hub content when clusters start. Main pulls GSC indexing and GA Admin data.

VALIDATION
GSC indexed-count and clicks per cluster, weekly. Registrations per week from D1. The hreflang test stays green.

RISKS
A new domain may sit in a slow-trust period no matter what we do (HYPOTHESIS). Content clusters can drift into thin SEO pages, which Martin must veto. And deprioritising the 3D cadence for SEO conflicts with the owner's 3/week target. I'm not proposing to drop it, only to link each 3D lesson to an indexable surface.

Challenge me where the evidence is weak.
````

## 2026-10-16T14:21:48.797Z — Martin → Alejandro

````text
PROPOSAL (Martin, CLRQO), Board Session 1: "Proof before volume". A Learning Quality Gate plus a no-migration evidence loop, with the 3-lessons/week target pursued only through the gate.

Labels: VERIFIED means checked, with a path or URL. HYPOTHESIS means not yet checked.

1. PROBLEM, WITH EVIDENCE
P1. We can't currently show that any lesson is used to the end, let alone that anyone learns from it.
 - GA4 returned 0 rows for 30 days (board/EVIDENCE-2026-10-16.md). VERIFIED that the query was empty; the cause is unknown.
 - lesson_progress (db/schema.ts:329) has progressPercent and completedAt, but the only writer is Library.tsx:837-845, which sends progressPercent: 0 when a lesson opens. The 3D worlds never report progress or completion, and they don't write to the autoestudio error model (app/autoestudio/errors/*) either. VERIFIED by grep.
 - The rich learning model (objectives, error categories, a class plan built from real errors) exists only inside Autoestudio (app/autoestudio/errors/model.ts, plan.ts). VERIFIED.
P2. 3D lessons ship without a visual check, a device check or an independent pedagogical review.
 - docs/audits/bosque-qa-20261004.md says: "rendered 3D quality, moving-cape appearance, real-device joystick behavior and viewport layout inspection remain unverified." VERIFIED.
 - Its 432 prompts were authored and QA'd by the same agent (Codex). No human pedagogical sign-off is recorded. VERIFIED that none is recorded in that file.
 - Hospital A2 choice beats offer funny consequences, not a language contrast (app/hospital-san-casi-vivo/levels/a2.mjs, "recepcion" options). So the choice beat checks nothing linguistic. VERIFIED.
P3. Breadth is outrunning verification.
 - 5 catalog entries claim A0–C2 in a single world (app/lesson-catalog.ts). Hospital shipped 2026-10-15 with 7 levels × 21 scenes. VERIFIED.
 - 7 featured additions landed between 2026-09-29 and 2026-10-15, about 2.9 a week (addedAt in lesson-catalog.ts). So we're ALREADY near the owner's 3/week. What's missing is evidence of quality, not volume. VERIFIED count; the interpretation is mine.
P4. What teachers search for is practical class material, not novelty.
 - Our only non-noise queries are "visual spanish grammar" (position 6) and "preguntas para clase de conversacion en español" (position 29). Our only lesson-intent click went to /spanish-conversation-activities (EVIDENCE). VERIFIED.
 - Teacher-market offers sell no-prep, ready-made class material and CEFR-organised libraries:
   - Campus Difusión: a 12-month resource bank of short films, phonetics and self-correcting exercises (klettwl.com/store/premium-digital-resources).
   - "Actividades para Enseñar Español": a membership with a weekly-updated library of ready classes (payhip.com/EnsenarEspanolOnline).
   - TPT-style "no prep" CI story packs (comprehensibleclassroom.com).
   VERIFIED from search snippets; I haven't audited them in depth.
 - Paid teacher platforms compete on teacher-visible evidence:
   - Señor Wooly: about $150/yr per teacher, 160 student accounts, progress export by class/story/student (senorwooly.com/faq, /store/product/1-year-pro, blog "12 major changes").
   - Lingco: automated grading, analytics, "recommendations to instructors on what students should learn next" (cls.yale.edu/faculty-support-overview/lingco-support; g2.com/sellers/lingco-language-labs).
   VERIFIED from search snippets. Prices may be dated.
P5. The research supports 3D only when the mechanic IS the language task.
 - Makransky, Terkildsen & Mayer 2019 (Learning and Instruction 60): immersive VR gave more presence (d=1.30) but LESS learning (d=0.80) and higher cognitive load (d=0.59).
 - VR for L2 shows small positive effects, strongest for vocabulary, listening and retention: g=0.445 across 23 EFL studies (Qiu et al. 2024, via research.dial.uclouvain.be/handle/2078.5/271613), and a 2026 K-12 RCT review (ncbi.nlm.nih.gov/pmc/articles/PMC12816172), which finds mixed immediate gains and high risk of bias.
 - Game-based L2 vocabulary: large effects versus alternative activities and medium versus base versions (Tsai & Tsai 2018, Computers & Education 125). Dixon et al. 2022 (LLT) report d=0.50 between groups.
 - These come from abstracts and summaries; I haven't read the full texts. The direction is VERIFIED. The transfer to our screen-shared desktop 3D is a HYPOTHESIS: desktop 3D is less immersive than an HMD, so the overload risk is plausibly lower, but it hasn't been tested.

2. PROPOSAL (three parts)
A. LEARNING QUALITY GATE (LQG): mandatory before any lesson merge. Under the mandate this is a "verified educational standard", so it isn't votable away. It is negotiable in detail.
 G1 Objectives. Each scene/circle declares ONE primary objective id from app/autoestudio/curriculum/objectives/<level>.ts plus 3–6 target exponents. Machine-checked, generalising feria AC1.
 G2 Language in the mechanic. Every interactive beat names the exponent it practises. Beats whose options differ only in narrative consequence are labelled "conversation stimulus" and must not be the ONLY interaction in a scene; at least one beat per scene carries a linguistic contrast (form, function or meaning). Machine-checkable: a field plus a checker.
 G3 Neutral Spanish and exemptions: the existing `npm run test:language`. No change.
 G4 Independent pedagogical review. A reviewer who is NOT the author walks one full scene per level, plus every closing task and the 45-minute teacher route, and writes docs/audits/<lesson>-pedagogy-YYYYMMDD.md with PASS/FAIL per G1–G6. When I author (feria), Alejandro or a second agent reviews the sample against the checklist, so I'm never sole author and sole reviewer.
 G5 Rendered verification. The release note records a real-browser and real-device check of legibility and controls. Sofia owns the tooling; I sign off pedagogical legibility (can a learner see the described feature?). That closes the Bosque gap above. "Unverified" stays an allowed status, but it blocks the "featured" flag.
 G6 Level honesty. A new lesson ships with only the levels that passed G1–G5. Typically 1–2 levels at launch, never 7 in one week. The catalog `levels` array lists only passed levels (as feria AM-9).
B. EVIDENCE LOOP WITHOUT A MIGRATION
 E1 Every 3D world reports teacher-route progress to the EXISTING PUT /api/progress: integer 0–100, state set by saveLessonProgress, db/progress.ts:14-22, "completed" at 100. VERIFIED that the route accepts values above 0. No new table, no student PII; it's the signed-in teacher's own account.
    This gives the board its first real metric: of opened 3D lessons, how many reach the route's end.
 E2 A "Registrar esta clase" handoff from the 3D recap into the EXISTING teacher tracker (class_records.pedagogicalNote / nextStep, db/schema.ts:374), prefilled with the session's can-do ticks as text. It's teacher-initiated and uses an existing feature; we need to check it doesn't change data rules (HYPOTHESIS until Alejandro and Sofia check app/api/class-records).
    This connects 3D sessions to what the teacher already tracks, and it's our nearest answer to Wooly/Lingco's teacher evidence without building an LMS.
 E3 Analytics: GA4 returns 0 rows. Alejandro owns diagnosing it (app/privacy/consent.ts has gtag consent code; whether a tag fires is UNVERIFIED). Without it, E1 is our only usage signal.
C. THE 3/WEEK TARGET, THROUGH THE GATE
 - Mon/Wed/Fri stay release slots. A slot is filled by a NEW lesson that passes the LQG. If none passes that week, the slot goes to a gated repair or to adding a level to an existing world, which also passes the LQG, and the report states this honestly. The owner's own rule: "Never publish incomplete or broken material merely to meet a numerical target."
 - Every new 3D lesson gets a PUBLIC, indexable teacher guide (objectives, 45-minute plan, sample prompts) built on the existing guides infrastructure (app/guides/[slug], app/teaching-guides.ts). That targets the intents we actually see ("preguntas para clase de conversación", "spanish conversation activities") without exposing PRO content. Alejandro decides the SEO specifics.

3. EXPECTED BENEFIT
 - We stop shipping unverifiable claims ("A0–C2", "3D helps").
 - The first real usage metric, without a migration.
 - A teacher-visible evidence story that rivals Wooly/Lingco.
 - Lessons that match the search intent we can actually win.
4. FEASIBILITY IN THIS REPO
 - The checkers follow the existing pattern (scripts/check-hospital.mjs, check-escucha-3d.mjs).
 - E1 is one fetch in the shared 3D shells (the pattern is Library.tsx:837).
 - E2 reuses class_records.
 - The guides reuse app/guides.
 - No D1 migration, no new dependency, no new API route for E1.
5. RESOURCES
 - Me: G4 reviews, about 2–3 h per lesson (HYPOTHESIS, to be measured on feria), plus the LQG checklist.
 - Sofia: G2/G5 checker fields, plus the E1 hook in the shared shells (estimate: small; she judges).
 - Alejandro: E3, plus the guide/SEO pattern.
6. VALIDATION METRICS
 - 100% of new lessons carry an LQG audit file before merge (checked in CI by file presence).
 - lesson_reports (existing table, db/schema.ts:424): pedagogical defect reports per new lesson within 14 days; baseline to be established.
 - E1 route-completion rate for 3D lessons: baseline in 2 weeks. No target until we have the baseline (I won't invent one).
 - Search Console impressions and clicks on teacher-guide URLs versus today's ~200 impressions / 3 clicks in 90 days.
 - Feria AC12/AM-8 pilot (3D vs 2D) as the first controlled test of the 3D claim.
7. RISKS
 - Review bottleneck (me). Mitigated by sampling (one full scene per level) and machine checks for G1/G2/G6.
 - Fewer "new lesson" headlines. Mitigated by gated level extensions and repairs counting as releases.
 - E1 measures the teacher's completion, not student learning. I'll label it so and never report it as learning.
 - The research transfer to desktop 3D is unproven, hence the pilot.

MY RANKING FOR THE BACKLOG (to be challenged):
 (1) The LQG checklist plus the E1 hook in existing worlds: small, foundational, it makes everything after it measurable.
 (2) Feria A2 as the first lesson through the LQG.
 (3) A public teacher guide per 3D lesson.
 If Alejandro shows an indexing/canonical defect is real (the ?lang= duplicates in EVIDENCE), it goes ABOVE (2), per the mandate's §7.
````

## 2026-10-16T14:22:14.525Z — Sofia → Alejandro

````text
PROPOSAL (Sofia, CPIO): "Make the 3D visible, fast and repeatable": an indexable 3D preview per world, a shared World Kit, and a CI performance budget.

PROBLEM (with evidence)
P1. Our main differentiator is invisible to Google and to anonymous prospects.
 - VERIFIED: every 3D world is PRO. worker/index.ts:314 redirects non-PRO visitors to /acceso. A curl with a Googlebot UA: /hospital-san-casi-vivo → 302 to /acceso?returnTo=…, and /noche-abierta → 302.
 - VERIFIED: the only free playable 3D, /demo/noche-abierta (app/demo/noche-abierta/page.tsx), sends "x-robots-tag: noindex, nofollow" (search-private per app/seo.ts:92-93) and is only linked from campaign landings (PaidLanding.tsx, GoogleTeachersLanding.tsx, ImmersiveLanding.tsx, audiences.ts).
 - VERIFIED: what Google can index is /resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo (200, index,follow, canonical, 1 JSON-LD block, ~1,470 words). It has ONE static cover image and no video and nothing playable. The same pattern applies to all 6 3D resource URLs in the live sitemap.
 - VERIFIED (evidence pack): 30 URLs with impressions in 90 days, 3 clicks, and no 3D page among the top impressions.
P2. Performance is acceptable in architecture, unmeasured in the field.
 - VERIFIED (production GETs, compressed sizes): the demo's initial JS is about 155 KB: framework 59 KB, firebase-client 35 KB, index 33 KB, messages 11 KB.
 - The lazy 3D bundle is about 232 KB: three.module 184 KB br (737 KB raw), build3d 18, people3d 18, hero3d 6, DemoScene 4. It's served with "public, max-age=31536000, immutable", and three is a shared chunk across worlds. three.js is correctly kept out of the initial chunk.
 - TTFB is about 1.3 s for both the demo (private, no-store) and the resource page. That's one sample from this machine, so it's a weak sample.
 - UNKNOWN: Core Web Vitals. The PageSpeed API refused us ("Queries per day" quota exceeded for anonymous use), and I haven't seen CrUX or the GSC CWV report.
 - HYPOTHESES: (a) firebase-client (35 KB) loads for anonymous demo visitors who never sign in; (b) three.module ships nearly whole (737 KB raw), and named imports or tree-shaking could cut it; (c) the repo has no build-size gate (Alejandro already found none in build-verified.sh / validate-artifact.sh / vite.config.ts).
P3. Three per week at current quality means rebuilding the shell every time.
 - VERIFIED cadence (lesson-catalog addedAt): Noche 09-30, Bosque 10-04, Reino 10-11, Casino 10-13, Hospital 10-15. That's 5 worlds in 16 days, about 2.2/week, already close to the target.
 - VERIFIED duplication: 10 files under app/ construct their own WebGLRenderer, and the coarse-pointer low-power check is copy-pasted in 5. World3D.tsx alone runs 359-1,528 lines per world. World directories run 2.6k-11.4k lines (Noche 71.7k), and Hospital is 6.9k.
 - The renderer, input, touch joystick, camera, fallback routing, dispose/context loss, ambience ducking, teacher list and checkers are re-implemented per world. Every new world multiplies regression and QA surface.
 - HYPOTHESIS: 3 brand-new worlds per week at Hospital-grade depth (7 levels × 21 circles) isn't sustainable, and pushing for it will produce shallow worlds. That's exactly what the mandate forbids ("Never publish incomplete or broken material merely to meet a numerical target").

COMPETITORS (4 searches, so limited; treat as a first pass)
 - VERIFIED (vendor pages): Señor Wooly runs a music-video curriculum. Essentials is about $16.58/month billed annually (1 teacher, 160 student accounts, 1,000+ activities), and a Premium tier added teacher controls and differentiation tools (blog, 12 Aug 2026). Sources: senorwooly.com/store/product/1-year-pro, senorwooly.com/blog/introducing-wooly-premium.
 - VERIFIED (third-party page): ImmerseMe advertises 3,000+ interactive scenarios across 12 languages, VR/AI-chatbot modes and a teacher dashboard (bestpractices.teslontario.org/en/all-resources/immerseme/).
 - VERIFIED (press): Immerse runs live social-VR classes on Quest, launched at $45/month for consumers (roadtovr.com/immerse-vr-language-learning-quest-2/).
 - VERIFIED: university VR lessons use Quest headsets (news.uark.edu/articles/63843).
 - HYPOTHESIS, not proven by my search: nobody offers what we have, which is browser-based, headset-free, teacher-led, screen-shareable 3D worlds with separately authored CEFR levels and conversation + multi-accent listening in the same world. That positioning is defensible, but only if people can SEE it.

PROPOSAL (in priority order)
A. "See it before you pay": an indexable 3D preview per flagship world.
 - First, Noche Abierta, because a free subset already exists in app/immersive (demoContent, CityDemo).
 - Make one demo route per world indexable: canonical, real metadata, VideoObject/LearningResource JSON-LD.
 - Server-render the circle's real Spanish content (situation, dialogue, the 5 questions) so crawlers and the LCP get text plus a poster image. WebGL starts only after "Entrar en 3D", so the canvas never blocks LCP.
 - Add a 15-25 s silent gameplay loop (webm/mp4, ≤1.5 MB, lazy, poster first) to each 3D /resources page, with internal links from the conversation hubs.
 - The paid content boundary doesn't move: the demo serves only the subset already public in demo-content.mjs, and the FREE/PRO ledger and tests stay authoritative.
B. World Kit: one shared runtime under app/world-kit/, extracted incrementally from the hospital and Noche code.
 - renderer + low-power + DPR + dispose + context loss
 - input/touch/camera, including the Busca snap
 - the fallback router (no WebGL / reduced motion / onFail / 2D map)
 - circle + ModeSwitch/ListeningCard wiring
 - the ambience-ducking pure function
 - teacher list + 45' routes as data
 - a checker library (scene shape, routes, banned-word list, Look-attribute contract)
 A new world becomes layout data + set-piece geometry + content. "La feria de Villaluz" (DECISION.md v5) is the first world built on the kit. Existing worlds migrate only when touched, never in a big-bang, because they are shipped PRO lessons.
C. A CI performance gate (no new infrastructure).
 - Record initial- and lazy-chunk sizes from the CI build output, then fail any PR that grows a 3D route's initial JS by more than 10%.
 - Test the hypotheses: no firebase-client for anonymous visitors on demo pages; three named imports.
 - Field CWV: either the GSC Core Web Vitals report via the existing Windsor connector, or a free PSI API key. A key needs the owner to create it, so it's not mine to do.
D. A definition for the "3 per week" target. This is a board decision, and it's ultimately the owner's word. I propose 3 SHIPPING UNITS per week, each passing its acceptance criteria. A unit is a new world at ≥1 fully authored level, or a genuinely authored new level of an existing world. On the kit I estimate (HYPOTHESIS) 1-2 new worlds/week plus level units is sustainable; 3 new worlds every week isn't. Martin must rule on whether a level unit counts as a "complete lesson" pedagogically.

EXPECTED BENEFIT
 - A: the differentiator becomes indexable and demo-able. Impressions and clicks on 3D demo/resource URLs (today about 0), plus demo → signup → checkout conversion.
 - B: lower cost and risk per world. Target: shell code per new world ≤300 lines vs about 500-1,500 today, and new-world total ≤40% of Hospital's 6.9k lines before content.
 - C: no silent performance regressions, and the first real CWV numbers.

FEASIBILITY IN THIS REPO
 - A reuses CityDemo/demo-content (exists) and the resource page (exists). It touches app/seo.ts (search-private list), app/demo/*, app/resources/[slug], and the sitemap. No D1, no API, no new dependencies.
 - B is pure refactor/extraction plus new code. It touches no billing, auth or migration-sensitive file.
 - C is a node script over CI build output plus a test.
 All of it can ship through branch → PR → CI + Auto Merge.

RESOURCES
 - Me as the single implementer for A, then B (with Feria), then C.
 - Martin reviews the free-subset pedagogy and the demo's on-page Spanish (A), and the definition in D.
 - Alejandro reviews the conversion/cannibalization risk, the ledger and seo.ts changes, and owns the SEO measurement.

VALIDATION
 - A: GSC impressions and clicks on the demo and the 6 3D resource URLs at 28 and 56 days after indexing; demo→/acceso and demo→checkout click-through in the existing PII-free analytics. Note that GA4 returns 0 rows today, which is UNVERIFIED and has to be fixed first. That's Alejandro's area.
 - A: LCP element = poster/text, not canvas, verified in a Lighthouse run once we have quota.
 - B: lines and defects per new world; the Feria build hits the kit targets.
 - C: the gate exists and fails a seeded regression.

RISKS
 1. A free indexable demo could cannibalize PRO. Mitigation: one circle per world, and the paid depth (levels, routes, listenings) stays PRO.
 2. Thin or duplicate pages (SEO). Mitigation: one demo per world, with real authored content, not mass pages.
 3. Video weight could hurt LCP. Mitigation: poster-first, lazy, ≤1.5 MB.
 4. Kit extraction could regress shipped worlds. Mitigation: incremental extraction only, plus the existing world tests.
 5. Changing the definition of the target is the owner's call, so we propose it and don't impose it.
 6. My competitor scan is thin. A deeper competitive pass is Alejandro's CI remit.
````

## 2026-10-16T14:22:15.458Z — Martin → Sofia

````text
PROPOSAL (Martin, CLRQO), Board Session 1: "Proof before volume". A Learning Quality Gate plus a no-migration evidence loop, with the 3-lessons/week target pursued only through the gate.

Labels: VERIFIED means checked, with a path or URL. HYPOTHESIS means not yet checked.

1. PROBLEM, WITH EVIDENCE
P1. We can't currently show that any lesson is used to the end, let alone that anyone learns from it.
 - GA4 returned 0 rows for 30 days (board/EVIDENCE-2026-10-16.md). VERIFIED that the query was empty; the cause is unknown.
 - lesson_progress (db/schema.ts:329) has progressPercent and completedAt, but the only writer is Library.tsx:837-845, which sends progressPercent: 0 when a lesson opens. The 3D worlds never report progress or completion, and they don't write to the autoestudio error model (app/autoestudio/errors/*) either. VERIFIED by grep.
 - The rich learning model (objectives, error categories, a class plan built from real errors) exists only inside Autoestudio (app/autoestudio/errors/model.ts, plan.ts). VERIFIED.
P2. 3D lessons ship without a visual check, a device check or an independent pedagogical review.
 - docs/audits/bosque-qa-20261004.md says: "rendered 3D quality, moving-cape appearance, real-device joystick behavior and viewport layout inspection remain unverified." VERIFIED.
 - Its 432 prompts were authored and QA'd by the same agent (Codex). No human pedagogical sign-off is recorded. VERIFIED that none is recorded in that file.
 - Hospital A2 choice beats offer funny consequences, not a language contrast (app/hospital-san-casi-vivo/levels/a2.mjs, "recepcion" options). So the choice beat checks nothing linguistic. VERIFIED.
P3. Breadth is outrunning verification.
 - 5 catalog entries claim A0–C2 in a single world (app/lesson-catalog.ts). Hospital shipped 2026-10-15 with 7 levels × 21 scenes. VERIFIED.
 - 7 featured additions landed between 2026-09-29 and 2026-10-15, about 2.9 a week (addedAt in lesson-catalog.ts). So we're ALREADY near the owner's 3/week. What's missing is evidence of quality, not volume. VERIFIED count; the interpretation is mine.
P4. What teachers search for is practical class material, not novelty.
 - Our only non-noise queries are "visual spanish grammar" (position 6) and "preguntas para clase de conversacion en español" (position 29). Our only lesson-intent click went to /spanish-conversation-activities (EVIDENCE). VERIFIED.
 - Teacher-market offers sell no-prep, ready-made class material and CEFR-organised libraries:
   - Campus Difusión: a 12-month resource bank of short films, phonetics and self-correcting exercises (klettwl.com/store/premium-digital-resources).
   - "Actividades para Enseñar Español": a membership with a weekly-updated library of ready classes (payhip.com/EnsenarEspanolOnline).
   - TPT-style "no prep" CI story packs (comprehensibleclassroom.com).
   VERIFIED from search snippets; I haven't audited them in depth.
 - Paid teacher platforms compete on teacher-visible evidence:
   - Señor Wooly: about $150/yr per teacher, 160 student accounts, progress export by class/story/student (senorwooly.com/faq, /store/product/1-year-pro, blog "12 major changes").
   - Lingco: automated grading, analytics, "recommendations to instructors on what students should learn next" (cls.yale.edu/faculty-support-overview/lingco-support; g2.com/sellers/lingco-language-labs).
   VERIFIED from search snippets. Prices may be dated.
P5. The research supports 3D only when the mechanic IS the language task.
 - Makransky, Terkildsen & Mayer 2019 (Learning and Instruction 60): immersive VR gave more presence (d=1.30) but LESS learning (d=0.80) and higher cognitive load (d=0.59).
 - VR for L2 shows small positive effects, strongest for vocabulary, listening and retention: g=0.445 across 23 EFL studies (Qiu et al. 2024, via research.dial.uclouvain.be/handle/2078.5/271613), and a 2026 K-12 RCT review (ncbi.nlm.nih.gov/pmc/articles/PMC12816172), which finds mixed immediate gains and high risk of bias.
 - Game-based L2 vocabulary: large effects versus alternative activities and medium versus base versions (Tsai & Tsai 2018, Computers & Education 125). Dixon et al. 2022 (LLT) report d=0.50 between groups.
 - These come from abstracts and summaries; I haven't read the full texts. The direction is VERIFIED. The transfer to our screen-shared desktop 3D is a HYPOTHESIS: desktop 3D is less immersive than an HMD, so the overload risk is plausibly lower, but it hasn't been tested.

2. PROPOSAL (three parts)
A. LEARNING QUALITY GATE (LQG): mandatory before any lesson merge. Under the mandate this is a "verified educational standard", so it isn't votable away. It is negotiable in detail.
 G1 Objectives. Each scene/circle declares ONE primary objective id from app/autoestudio/curriculum/objectives/<level>.ts plus 3–6 target exponents. Machine-checked, generalising feria AC1.
 G2 Language in the mechanic. Every interactive beat names the exponent it practises. Beats whose options differ only in narrative consequence are labelled "conversation stimulus" and must not be the ONLY interaction in a scene; at least one beat per scene carries a linguistic contrast (form, function or meaning). Machine-checkable: a field plus a checker.
 G3 Neutral Spanish and exemptions: the existing `npm run test:language`. No change.
 G4 Independent pedagogical review. A reviewer who is NOT the author walks one full scene per level, plus every closing task and the 45-minute teacher route, and writes docs/audits/<lesson>-pedagogy-YYYYMMDD.md with PASS/FAIL per G1–G6. When I author (feria), Alejandro or a second agent reviews the sample against the checklist, so I'm never sole author and sole reviewer.
 G5 Rendered verification. The release note records a real-browser and real-device check of legibility and controls. Sofia owns the tooling; I sign off pedagogical legibility (can a learner see the described feature?). That closes the Bosque gap above. "Unverified" stays an allowed status, but it blocks the "featured" flag.
 G6 Level honesty. A new lesson ships with only the levels that passed G1–G5. Typically 1–2 levels at launch, never 7 in one week. The catalog `levels` array lists only passed levels (as feria AM-9).
B. EVIDENCE LOOP WITHOUT A MIGRATION
 E1 Every 3D world reports teacher-route progress to the EXISTING PUT /api/progress: integer 0–100, state set by saveLessonProgress, db/progress.ts:14-22, "completed" at 100. VERIFIED that the route accepts values above 0. No new table, no student PII; it's the signed-in teacher's own account.
    This gives the board its first real metric: of opened 3D lessons, how many reach the route's end.
 E2 A "Registrar esta clase" handoff from the 3D recap into the EXISTING teacher tracker (class_records.pedagogicalNote / nextStep, db/schema.ts:374), prefilled with the session's can-do ticks as text. It's teacher-initiated and uses an existing feature; we need to check it doesn't change data rules (HYPOTHESIS until Alejandro and Sofia check app/api/class-records).
    This connects 3D sessions to what the teacher already tracks, and it's our nearest answer to Wooly/Lingco's teacher evidence without building an LMS.
 E3 Analytics: GA4 returns 0 rows. Alejandro owns diagnosing it (app/privacy/consent.ts has gtag consent code; whether a tag fires is UNVERIFIED). Without it, E1 is our only usage signal.
C. THE 3/WEEK TARGET, THROUGH THE GATE
 - Mon/Wed/Fri stay release slots. A slot is filled by a NEW lesson that passes the LQG. If none passes that week, the slot goes to a gated repair or to adding a level to an existing world, which also passes the LQG, and the report states this honestly. The owner's own rule: "Never publish incomplete or broken material merely to meet a numerical target."
 - Every new 3D lesson gets a PUBLIC, indexable teacher guide (objectives, 45-minute plan, sample prompts) built on the existing guides infrastructure (app/guides/[slug], app/teaching-guides.ts). That targets the intents we actually see ("preguntas para clase de conversación", "spanish conversation activities") without exposing PRO content. Alejandro decides the SEO specifics.

3. EXPECTED BENEFIT
 - We stop shipping unverifiable claims ("A0–C2", "3D helps").
 - The first real usage metric, without a migration.
 - A teacher-visible evidence story that rivals Wooly/Lingco.
 - Lessons that match the search intent we can actually win.
4. FEASIBILITY IN THIS REPO
 - The checkers follow the existing pattern (scripts/check-hospital.mjs, check-escucha-3d.mjs).
 - E1 is one fetch in the shared 3D shells (the pattern is Library.tsx:837).
 - E2 reuses class_records.
 - The guides reuse app/guides.
 - No D1 migration, no new dependency, no new API route for E1.
5. RESOURCES
 - Me: G4 reviews, about 2–3 h per lesson (HYPOTHESIS, to be measured on feria), plus the LQG checklist.
 - Sofia: G2/G5 checker fields, plus the E1 hook in the shared shells (estimate: small; she judges).
 - Alejandro: E3, plus the guide/SEO pattern.
6. VALIDATION METRICS
 - 100% of new lessons carry an LQG audit file before merge (checked in CI by file presence).
 - lesson_reports (existing table, db/schema.ts:424): pedagogical defect reports per new lesson within 14 days; baseline to be established.
 - E1 route-completion rate for 3D lessons: baseline in 2 weeks. No target until we have the baseline (I won't invent one).
 - Search Console impressions and clicks on teacher-guide URLs versus today's ~200 impressions / 3 clicks in 90 days.
 - Feria AC12/AM-8 pilot (3D vs 2D) as the first controlled test of the 3D claim.
7. RISKS
 - Review bottleneck (me). Mitigated by sampling (one full scene per level) and machine checks for G1/G2/G6.
 - Fewer "new lesson" headlines. Mitigated by gated level extensions and repairs counting as releases.
 - E1 measures the teacher's completion, not student learning. I'll label it so and never report it as learning.
 - The research transfer to desktop 3D is unproven, hence the pilot.

MY RANKING FOR THE BACKLOG (to be challenged):
 (1) The LQG checklist plus the E1 hook in existing worlds: small, foundational, it makes everything after it measurable.
 (2) Feria A2 as the first lesson through the LQG.
 (3) A public teacher guide per 3D lesson.
 If Alejandro shows an indexing/canonical defect is real (the ?lang= duplicates in EVIDENCE), it goes ABOVE (2), per the mandate's §7.
````

## 2026-10-16T14:22:38.997Z — Sofia → Martin

````text
PROPOSAL (Sofia, CPIO): "Make the 3D visible, fast and repeatable": an indexable 3D preview per world, a shared World Kit, and a CI performance budget.

PROBLEM (with evidence)
P1. Our main differentiator is invisible to Google and to anonymous prospects.
 - VERIFIED: every 3D world is PRO. worker/index.ts:314 redirects non-PRO visitors to /acceso. A curl with a Googlebot UA: /hospital-san-casi-vivo → 302 to /acceso?returnTo=…, and /noche-abierta → 302.
 - VERIFIED: the only free playable 3D, /demo/noche-abierta (app/demo/noche-abierta/page.tsx), sends "x-robots-tag: noindex, nofollow" (search-private per app/seo.ts:92-93) and is only linked from campaign landings (PaidLanding.tsx, GoogleTeachersLanding.tsx, ImmersiveLanding.tsx, audiences.ts).
 - VERIFIED: what Google can index is /resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo (200, index,follow, canonical, 1 JSON-LD block, ~1,470 words). It has ONE static cover image and no video and nothing playable. The same pattern applies to all 6 3D resource URLs in the live sitemap.
 - VERIFIED (evidence pack): 30 URLs with impressions in 90 days, 3 clicks, and no 3D page among the top impressions.
P2. Performance is acceptable in architecture, unmeasured in the field.
 - VERIFIED (production GETs, compressed sizes): the demo's initial JS is about 155 KB: framework 59 KB, firebase-client 35 KB, index 33 KB, messages 11 KB.
 - The lazy 3D bundle is about 232 KB: three.module 184 KB br (737 KB raw), build3d 18, people3d 18, hero3d 6, DemoScene 4. It's served with "public, max-age=31536000, immutable", and three is a shared chunk across worlds. three.js is correctly kept out of the initial chunk.
 - TTFB is about 1.3 s for both the demo (private, no-store) and the resource page. That's one sample from this machine, so it's a weak sample.
 - UNKNOWN: Core Web Vitals. The PageSpeed API refused us ("Queries per day" quota exceeded for anonymous use), and I haven't seen CrUX or the GSC CWV report.
 - HYPOTHESES: (a) firebase-client (35 KB) loads for anonymous demo visitors who never sign in; (b) three.module ships nearly whole (737 KB raw), and named imports or tree-shaking could cut it; (c) the repo has no build-size gate (Alejandro already found none in build-verified.sh / validate-artifact.sh / vite.config.ts).
P3. Three per week at current quality means rebuilding the shell every time.
 - VERIFIED cadence (lesson-catalog addedAt): Noche 09-30, Bosque 10-04, Reino 10-11, Casino 10-13, Hospital 10-15. That's 5 worlds in 16 days, about 2.2/week, already close to the target.
 - VERIFIED duplication: 10 files under app/ construct their own WebGLRenderer, and the coarse-pointer low-power check is copy-pasted in 5. World3D.tsx alone runs 359-1,528 lines per world. World directories run 2.6k-11.4k lines (Noche 71.7k), and Hospital is 6.9k.
 - The renderer, input, touch joystick, camera, fallback routing, dispose/context loss, ambience ducking, teacher list and checkers are re-implemented per world. Every new world multiplies regression and QA surface.
 - HYPOTHESIS: 3 brand-new worlds per week at Hospital-grade depth (7 levels × 21 circles) isn't sustainable, and pushing for it will produce shallow worlds. That's exactly what the mandate forbids ("Never publish incomplete or broken material merely to meet a numerical target").

COMPETITORS (4 searches, so limited; treat as a first pass)
 - VERIFIED (vendor pages): Señor Wooly runs a music-video curriculum. Essentials is about $16.58/month billed annually (1 teacher, 160 student accounts, 1,000+ activities), and a Premium tier added teacher controls and differentiation tools (blog, 12 Aug 2026). Sources: senorwooly.com/store/product/1-year-pro, senorwooly.com/blog/introducing-wooly-premium.
 - VERIFIED (third-party page): ImmerseMe advertises 3,000+ interactive scenarios across 12 languages, VR/AI-chatbot modes and a teacher dashboard (bestpractices.teslontario.org/en/all-resources/immerseme/).
 - VERIFIED (press): Immerse runs live social-VR classes on Quest, launched at $45/month for consumers (roadtovr.com/immerse-vr-language-learning-quest-2/).
 - VERIFIED: university VR lessons use Quest headsets (news.uark.edu/articles/63843).
 - HYPOTHESIS, not proven by my search: nobody offers what we have, which is browser-based, headset-free, teacher-led, screen-shareable 3D worlds with separately authored CEFR levels and conversation + multi-accent listening in the same world. That positioning is defensible, but only if people can SEE it.

PROPOSAL (in priority order)
A. "See it before you pay": an indexable 3D preview per flagship world.
 - First, Noche Abierta, because a free subset already exists in app/immersive (demoContent, CityDemo).
 - Make one demo route per world indexable: canonical, real metadata, VideoObject/LearningResource JSON-LD.
 - Server-render the circle's real Spanish content (situation, dialogue, the 5 questions) so crawlers and the LCP get text plus a poster image. WebGL starts only after "Entrar en 3D", so the canvas never blocks LCP.
 - Add a 15-25 s silent gameplay loop (webm/mp4, ≤1.5 MB, lazy, poster first) to each 3D /resources page, with internal links from the conversation hubs.
 - The paid content boundary doesn't move: the demo serves only the subset already public in demo-content.mjs, and the FREE/PRO ledger and tests stay authoritative.
B. World Kit: one shared runtime under app/world-kit/, extracted incrementally from the hospital and Noche code.
 - renderer + low-power + DPR + dispose + context loss
 - input/touch/camera, including the Busca snap
 - the fallback router (no WebGL / reduced motion / onFail / 2D map)
 - circle + ModeSwitch/ListeningCard wiring
 - the ambience-ducking pure function
 - teacher list + 45' routes as data
 - a checker library (scene shape, routes, banned-word list, Look-attribute contract)
 A new world becomes layout data + set-piece geometry + content. "La feria de Villaluz" (DECISION.md v5) is the first world built on the kit. Existing worlds migrate only when touched, never in a big-bang, because they are shipped PRO lessons.
C. A CI performance gate (no new infrastructure).
 - Record initial- and lazy-chunk sizes from the CI build output, then fail any PR that grows a 3D route's initial JS by more than 10%.
 - Test the hypotheses: no firebase-client for anonymous visitors on demo pages; three named imports.
 - Field CWV: either the GSC Core Web Vitals report via the existing Windsor connector, or a free PSI API key. A key needs the owner to create it, so it's not mine to do.
D. A definition for the "3 per week" target. This is a board decision, and it's ultimately the owner's word. I propose 3 SHIPPING UNITS per week, each passing its acceptance criteria. A unit is a new world at ≥1 fully authored level, or a genuinely authored new level of an existing world. On the kit I estimate (HYPOTHESIS) 1-2 new worlds/week plus level units is sustainable; 3 new worlds every week isn't. Martin must rule on whether a level unit counts as a "complete lesson" pedagogically.

EXPECTED BENEFIT
 - A: the differentiator becomes indexable and demo-able. Impressions and clicks on 3D demo/resource URLs (today about 0), plus demo → signup → checkout conversion.
 - B: lower cost and risk per world. Target: shell code per new world ≤300 lines vs about 500-1,500 today, and new-world total ≤40% of Hospital's 6.9k lines before content.
 - C: no silent performance regressions, and the first real CWV numbers.

FEASIBILITY IN THIS REPO
 - A reuses CityDemo/demo-content (exists) and the resource page (exists). It touches app/seo.ts (search-private list), app/demo/*, app/resources/[slug], and the sitemap. No D1, no API, no new dependencies.
 - B is pure refactor/extraction plus new code. It touches no billing, auth or migration-sensitive file.
 - C is a node script over CI build output plus a test.
 All of it can ship through branch → PR → CI + Auto Merge.

RESOURCES
 - Me as the single implementer for A, then B (with Feria), then C.
 - Martin reviews the free-subset pedagogy and the demo's on-page Spanish (A), and the definition in D.
 - Alejandro reviews the conversion/cannibalization risk, the ledger and seo.ts changes, and owns the SEO measurement.

VALIDATION
 - A: GSC impressions and clicks on the demo and the 6 3D resource URLs at 28 and 56 days after indexing; demo→/acceso and demo→checkout click-through in the existing PII-free analytics. Note that GA4 returns 0 rows today, which is UNVERIFIED and has to be fixed first. That's Alejandro's area.
 - A: LCP element = poster/text, not canvas, verified in a Lighthouse run once we have quota.
 - B: lines and defects per new world; the Feria build hits the kit targets.
 - C: the gate exists and fails a seeded regression.

RISKS
 1. A free indexable demo could cannibalize PRO. Mitigation: one circle per world, and the paid depth (levels, routes, listenings) stays PRO.
 2. Thin or duplicate pages (SEO). Mitigation: one demo per world, with real authored content, not mass pages.
 3. Video weight could hurt LCP. Mitigation: poster-first, lazy, ≤1.5 MB.
 4. Kit extraction could regress shipped worlds. Mitigation: incremental extraction only, plus the existing world tests.
 5. Changing the definition of the target is the owner's call, so we propose it and don't impose it.
 6. My competitor scan is thin. A deeper competitive pass is Alejandro's CI remit.
````

## 2026-10-16T14:23:56.814Z — Alejandro → Sofia

````text
CHALLENGE from Alejandro on "Make the 3D visible, fast and repeatable". Your P1 diagnosis (every 3D world 302s to /acceso; the only playable demo is noindex) is the strongest new fact this session, and I'm adopting it. These are the points where I think the reasoning is weak:

1. (A) What intent does an indexable 3D demo rank for? There's no search evidence that teachers look for "3D Spanish lesson". The GSC queries we have are "preguntas para clase de conversación" (pos 29), "spanish conversation activities" (pos 15.2) and "visual spanish grammar" (pos 6). A canvas page plus a video doesn't answer any of them. My counter: the indexable unit is a teacher-intent page, a conversation-question set for a situation, with the playable circle embedded as proof. That's essentially Martin's public guide combined with your preview. Do you accept that the page's title, H1 and content are chosen by query intent (my call as SEO owner) and the 3D is the conversion asset on it, not the ranking asset? If not, give me evidence of demand for the 3D framing.
2. (A) Your validation depends on GA4 funnel data. As I sent you, GA4 page_view fires only after analytics consent (app/marketing/GoogleAnalytics.tsx:61), so demo→/acceso CTR won't be measurable at our volume even after the property check. Rewrite the A validation so it uses GSC (impressions and clicks on those URLs) plus D1 counts (registrations and /acceso claims within N days), with no GA4 dependency. Is that acceptable?
3. (A) The video asset. A 1.5 MB gameplay loop per world on 6 resource pages is new binary weight in a repo that's already at 239 MB public/. Who records it, how is it reproducible when a world changes, and is the poster alone enough for MVP?
4. (B) World Kit sequencing. It's the right long-term call, but it's an engineering-efficiency investment with no acquisition return, and it's proposed while we have 3 clicks a quarter. I'd accept it only scoped as "extract what Feria needs, as Feria is built", with no standalone kit milestone and no migration of shipped worlds. Will you commit to that scope, with the ≤300-line shell target measured on Feria?
5. (P2) TTFB. One 1.3 s sample on /resources/... is suspicious, because resource pages are edge-cacheable (app/seo.ts isEdgeCacheablePath, worker/index.ts:296-303,371, tests/edge-cache-policy.test.mjs). Your sample was probably a cold miss. Before TTFB goes in any strategy doc, give me warm vs. cold numbers (3 requests each). Also note "/" is deliberately NOT edge-cacheable (identity-aware, same test), and it's our homepage landing. If home TTFB is ~1.3 s warm, that's an SEO/CWV item worth a slot.
6. (D) I agree on "3 shipping units". Martin owns whether a level unit counts pedagogically. The board can't redefine the owner's target unilaterally, so it goes to the owner as a proposal in the decision doc.
````

## 2026-10-16T14:24:09.994Z — Alejandro → Martin

````text
CHALLENGE from Alejandro on "Proof before volume". I verified your E1 claim: PUT /api/progress (app/api/progress/route.ts) accepts integer 0–100 for signed-in, same-origin requests, db/progress.ts:14-22 sets "completed" at 100, and the only writer is Library.tsx:842 with 0. That's correct and cheap. My challenges:

1. LQG votability. You call the whole LQG a "verified educational standard", so it can't be voted on. I accept that for G3 (an existing policy and test), G6 (level honesty is a truthfulness rule) and the substance of G4 (author ≠ reviewer). I don't accept it for G2 as written. "At least one beat per scene carries a linguistic contrast (form, function or meaning)" is a new design rule you've just authored, and the citations you gave (Makransky 2019, Qiu 2024, Tsai & Tsai 2018) support "3D/game helps when the mechanic is the language task", not that specific per-scene rule. The house principle for conversation scenes is choose → talk aloud, sin puntuación (BosqueHongos.tsx:53, tests/noche-pedagogy.test.mjs). Under G2, every existing conversation world fails. Either cite evidence for the per-scene rule, or reframe G2 as a design guideline that's votable, scoped to NEW lessons, and checked by labelling (stimulus vs. contrast beats) rather than mandated as a blocker.
2. E1 definition. "Route completion = 100" needs a definition that can't be gamed and works with free-roam worlds. Is it "the closing task of the 45' route opened", "all route circles visited", or "teacher pressed Finish"? Who is counted? Only signed-in accounts, and the 3D worlds are PRO-only (worker/index.ts:314, per Sofia), so the denominator is paying or owner accounts, which today is roughly us. Say plainly that E1's sample will be near-zero until acquisition works. That's why I rank measurement of acquisition above measurement of completion. Do you agree with that ordering, or do you have a reason E1 should come first?
3. E2 privacy scope. class_records belongs to the named-student tracker (db/schema.ts:374, "Mis alumnos"). Prefilling it from a 3D session moves data from the session-only, no-names design you yourself specified (DECISION.md AM-7: "Notas de esta sesión: no se guardan por alumno") into a per-student record. Even teacher-initiated, that reverses AM-7. I propose E2 be deferred out of the 90-day plan unless you can show it keeps AM-7 intact.
4. G4 reviewer load. You name me as the reviewer when you author. At 3 units/week with one full scene per level, plus closings, plus the 45' route, your own estimate is 2–3 h per lesson. Who reviews Sofia-authored content when you're the author of the other two that week? Give me a concrete rotation, or accept that the review sample is one level per unit, not every level.
5. Ranking. You put "LQG + E1" at #1. My view is that an LQG doc plus checker fields is a process artifact. It doesn't change what any user sees this week, while 241 URLs go unfound. Make the case for why it beats fixing acquisition measurement and the first indexable teacher-intent page, beyond "it's foundational".
````

## 2026-10-16T14:24:11.015Z — Martin → Alejandro

````text
CHALLENGE (Martin → Alejandro), on "Measure first, then win one search niche". I agree with weeks 1-2: the argento hreflang is VERIFIED by me at app/argento/layout.tsx:10, plus the GSC indexing pull and the GA4 stream check. I'm challenging three things.

C1. The ≥100 clicks/month target has no evidential basis, even labelled as a hypothesis.
- Arithmetic: the whole site had about 200 impressions in 90 days (~67/month). Even at position 1 with an optimistic 25-30% CTR, 100 clicks/month needs roughly 350-400 impressions/month on the three clusters alone, which is 5-6× today's site-wide total.
- We don't know the query volumes. "visual spanish grammar" at position 6 could be 5 impressions or 500 (EVIDENCE gives positions, not per-query impressions).
- Please either (a) pull per-query impressions for the cluster terms and size the target from them, or (b) replace it with leading indicators we can honestly commit to: indexed-page count, cluster impressions, and an average position moving from 15-30 into the top 10. An invented outcome target becomes the thing we "inflate" later (mandate §11).

C2. The KPI sheet measures acquisition only, with nothing on whether the product is worth finding.
- Clicks, indexed pages, registrations and first payments say nothing about whether teachers actually teach with the lessons. Retention depends on that, and the paid competitors sell exactly that: Señor Wooly exports progress by class/story/student (senorwooly.com/faq); Lingco gives instructors analytics and recommendations (cls.yale.edu/faculty-support-overview/lingco-support).
- Add two existing, no-migration, PII-free signals to the same weekly sheet:
  (i) lesson_progress completion for 3D worlds, once my E1 hook exists (PUT /api/progress accepts 0-100; db/progress.ts:14-22; today only Library.tsx:837 writes it, at 0%);
  (ii) lesson_reports per lesson per 14 days (db/schema.ts:424).
- An SEO win that lands teachers on lessons they abandon at circle 2 is a conversion and churn problem we wouldn't see.

C3. "No thin pages" needs a written bar, not my case-by-case veto.
- For a veto to be fair and fast, it has to be a standard. I propose this definition for every cluster hub or 3D guide page. It must contain a classroom-usable activity:
  - a stated CEFR level, matching the content (PCIC as reference only, no certification claim);
  - one communicative objective;
  - ≥8 authored prompts or items graded for that level, not templated or reworded variants;
  - a 45-minute (or stated-length) teaching sequence;
  - neutral Spanish passing test:language.
- One page per teacher problem, as you said. Pages without that are NOINDEX until they meet it.
- Also, your cluster 3 positioning, "online tutors of adults", rests on one search. Before we build commercial pages for it, can we check it against our own audience signal? app/account-types.ts and app/audience exist, so a D1 aggregate of account types or declared audience, if it's recorded, would do it. If it isn't recorded, label it UNVERIFIED in the decision.

I'd support your weeks 1-2 as the FIRST implemented task if you accept C1(b) and add C2 to the KPI definition. C3 can come with cluster work in week 2+.
````

## 2026-10-16T14:24:25.121Z — Martin → Sofia

````text
CHALLENGE (Martin → Sofia), on "Make the 3D visible, fast and repeatable". I support A, B and C in principle, and your P3 matches my own finding about breadth outrunning verification. Three challenges, plus the ruling you asked me for on D.

C1. The free indexable demo must be a complete teachable unit, not a teaser, and its metadata must be honest.
 - What demo-content.mjs serves today is a level-filtered slice of Noche's centre locations, with DEMO_FREE_ACTIVITIES_PER_LOCATION activities each (app/immersive/demo-content.mjs:5-20). That was built for paid-campaign landings, not as a standalone lesson, and it was never pedagogically reviewed as one.
 - Before it's indexed, the public circle must pass my gate (sent to you as LQG G1-G6): one objective id, a choice beat with a linguistic contrast (not only a narrative consequence), the talk prompts, and a short teacher route. Otherwise a teacher's FIRST impression of us from search is a fragment.
 - Metadata: LearningResource/VideoObject JSON-LD may declare educationalLevel only for levels actually authored AND reviewed in that circle. No "A0–C2" in structured data unless all seven pass. Today five catalog entries claim A0–C2 (lesson-catalog.ts), and structured data would amplify an unverified claim to Google.
 - The gameplay video must show language in use: captions with the actual Spanish lines. A silent montage of camera moves sells novelty, the exact thing the mandate warns about.

C2. The World Kit before Feria couples two risks. Build Feria on the minimum kit, and make the kit carry quality and evidence hooks.
 - Extracting 7 subsystems while building the first gated lesson means a Feria delay or defect can't be attributed to either one. I'd extract only what Feria needs to ship (renderer/low-power/dispose, the fallback router, the ducking function, teacher routes as data), and extract the rest when the second world needs it.
 - What the kit MUST include from day one, because that's what makes quality structural instead of per-world goodwill:
  (i) the E1 hook: route progress → existing PUT /api/progress (0-100, db/progress.ts:14-22);
  (ii) checker fields for G1 (objective id + exponents per circle) and G2 (each beat flagged "linguistic contrast" or "conversation stimulus");
  (iii) the 45-minute route as data that the checker validates.
 - Your line-count targets are fine as engineering metrics. Please don't use "lines per world" as a proxy for quality in board reports.

C3. CI perf gate: agreed. One addition: keep your three HYPOTHESES (firebase-client on anonymous demo, three tree-shaking, no size gate) labelled until the CI numbers exist, and report them as measured, not estimated.

RULING ON D (pedagogy is my remit; the owner keeps the final word on the target itself):
 - A NEW LEVEL of an existing world counts as a "complete lesson" only if it's genuinely authored for that level: its own objective map (G1), its own task demands and scaffolding, its own 45-minute route and closing production, separately authored listening, and it passes the full gate including independent review (G4). That's the handoff §7.1 rule: "Changing only a CEFR badge or generic instruction is not a legitimate variant." A re-levelled translation or reworded copy does NOT count.
 - A REPAIR or quality upgrade of an existing world may fill a release slot, but it's reported as a repair, never as a new lesson.
 - So "3 shipping units/week" is acceptable to me only with those two definitions written into the board decision, and only if the weekly report lists each unit with its type (new world / new level / repair) and its gate audit file. I agree that 3 brand-new worlds a week at Hospital depth isn't sustainable, and I'd add that it isn't reviewable either.
````

## 2026-10-16T14:24:48.529Z — Alejandro → Martin

````text
RESPONSE from Alejandro to your C1–C3.

C1, conceded. Your arithmetic is right. 100 clicks/month needs roughly 5–6× today's site-wide impressions on three clusters whose volumes we don't know. I'm withdrawing the ≥100 clicks target. The KPI sheet uses leading indicators only:
(a) indexed-page count (from the GSC indexing pull);
(b) impressions per cluster;
(c) average position per cluster query, moving from 15–30 into the top 10;
(d) clicks, reported as-is with no target.
I'm also asking main for per-query impressions for the cluster terms. If they show real volume, we set an outcome target in the week-4 review from that data, not before.

C2, accepted, with labels. The weekly sheet adds:
(i) lesson_progress completion for 3D worlds, once E1 exists, labelled "teacher route completion, signed-in PRO accounts, not learning";
(ii) lesson_reports per lesson per 14 days (db/schema.ts:424).
I'll state in the decision doc that (i) has a near-zero denominator until acquisition works, since 3D worlds are PRO-only (worker/index.ts:314). I agree a click that dies at circle 2 is a churn problem we'd otherwise miss.

C3, accepted as the written bar, with two precisions.
1. It applies to NEW cluster/guide pages, and to existing hubs when we touch them. Untouched existing pages aren't noindexed retroactively without an audit, because a mass noindex could cost us the few impressions we have (/spanish-grammar-lessons is pos 10.5).
2. "≥8 authored prompts" counts items a teacher can use as-is in class. Templated level variants don't count, as you wrote. The bar goes into BOARD-DECISION-001 as the "Indexable Teacher Page standard". You own the pedagogical judgement, and the SEO structure (title, H1, schema, internal links) is mine.

Cluster 3 audience: checked, and it isn't recorded. app/account-types.ts stores role (owner/teacher), status and access level. There's no adult/K-12 or tutor/school field, and db/schema.ts has no audience column. So "online tutors of adults" stays UNVERIFIED (one web search plus TASK-07.md positioning). Cluster 3 goes last of the three, and it's gated on a cheap signal: GSC queries mentioning tutor/online/adults after clusters 1–2 have shipped. No commercial pages for it before that.

That means I accept your condition: weeks 1-2 as the first task, with C1(b) and C2 in the KPI definition.
````

## 2026-10-16T14:24:53.378Z — Sofia → Alejandro

````text
CHALLENGE (Sofia → Alejandro) on "Measure first, then win one niche". I agree with your diagnosis that acquisition is the bottleneck, and your point 3 is the same as my proposal A. I challenge four things, the last one on sequencing.

C1. "Technical SEO isn't the main cause" is concluded before the evidence that would decide it. Your own step 1b says that without the GSC Page-indexing report "any content plan is a guess", and the same holds for that conclusion. Clean canonicals and a clean sitemap are necessary, not sufficient. With 211 of 241 sitemap URLs at zero impressions, the leading explanation could just as well be "crawled/discovered – not indexed" (quality or thin-duplicate classification across ~200 near-template /resources/* pages) as low ranking. Those call for opposite fixes: consolidation vs more content. Please restate it as a HYPOTHESIS until 1b lands, and make 1b's result decide whether cluster work or consolidation comes first.

C2. Production D1 counts aren't free to read. Your KPI sheet (1d) and point 4 rely on "registrations and first paid subscriptions from D1 (aggregate counts only, read-only)". CLAUDE.md:66 lists "D1 production writes, migrations, exports or imports" as owner-only, and CLAUDE.md §1a says Claude can't read Worker logs on Sites. An aggregate SELECT is arguably not an export, but no runbook I've found authorizes agent reads of production D1. That needs an explicit owner authorization (or an owner-run query), not an assumption. Until then the funnel metric is UNKNOWN, as the mandate requires us to say.

C3. Correcting my own evidence, since it touches yours: TTFB isn't a defect. I re-fetched the hospital resource page. It's an edge HIT (cf-cache-status: HIT, x-spanishcue-cache: HIT) and still showed a TTFB of about 1.08 s from this machine, so the ~1.1-1.3 s I reported is this machine's network distance, not origin latency. Field CWV stays UNKNOWN. I'm withdrawing TTFB from my problem list.

C4. Sequencing: your weeks 1-2 put the only implementation on a one-line hreflang fix. Steps 1b/1c/1d are data pulls by main or the owner, not board implementation. Under "one implementer" that leaves our biggest structural SEO gap idle for 2 weeks: zero indexable surface for the 3D product. It's VERIFIED that every 3D route 302s to Googlebot and that /demo/noche-abierta is noindex,nofollow. Your point 3 agrees the gap exists. I propose this ranking:
  (1) the /argento hreflang fix + a no-"?lang=" regression test: a ~1-hour quick win, you implement, I review;
  (2) the indexable Noche Abierta preview (my A: SSR text + poster, WebGL on click, VideoObject/LearningResource JSON-LD, linked from the conversation hub, the free subset already in app/immersive/demo-content.mjs): I implement, you review SEO, Martin reviews the Spanish/pedagogy;
  (3) then cluster work, gated by 1b's indexing result.
  Your point 3's "teacher guide page" alternative and Martin's guides proposal fit as the text half of (2), not a competitor to it.
Where would you disagree? Specifically: is there evidence the demo's free circle would cannibalize PRO more than the current zero-visibility costs us?
````

## 2026-10-16T14:25:00.318Z — Sofia → Martin

````text
CHALLENGE (Sofia → Martin) on "Proof before volume". I support the LQG in principle, and G1/G2/G6 are cheap to machine-check, so I'll build them. I challenge three points, with evidence.

C1. E2 ("Registrar esta clase" → class_records) contradicts the storage rule you won in DECISION.md (AM-7 / D2), and it changes data scope. VERIFIED: class_records.studentId is NOT NULL (db/schema.ts:379), and app/api/class-records/route.ts filters by studentId. So every handoff must attach the GROUP's session ticks to ONE named student record. That's wrong for group classes, and it turns "Notas de esta sesión: no se guardan por alumno" into per-student stored evaluations, which is exactly what AM-7 ruled out. I propose dropping E2 from the MVP. A later version could let the teacher copy a plain-text summary to the clipboard and paste it wherever they choose, with no new data flow. If you want E2 kept, it needs Alejandro's data-scope review first, not a "HYPOTHESIS until checked".

C2. G5 as written ("a real-browser and real-device check" on every release) would block the Mon/Wed/Fri slots. We have no device lab, and an agent can't hold a phone. A realistic split that still closes the Bosque gap:
  (a) an automated per-PR rendered smoke: headless Chromium with software WebGL (SwiftShader) loads each circle in low mode at DPR 1.25, saves screenshots as CI artifacts, and asserts the canvas isn't blank, there are no console errors and the 2D fallback renders. I own this; it's new tooling with no new infrastructure.
  (b) ONE real-device check per NEW WORLD (not per level or release) on the device you name (D6), plus whenever the Look contract changes.
  (c) as you said, "unverified" blocks the featured flag.
  Does this split meet your standard? If not, which risk does (b) leave open?

C3. P1 is partly inaccurate, and that changes E1's design. Library.tsx isn't the only progress writer. VERIFIED: worker/index.ts:326 calls saveLessonProgress(env.DB, accountId, lesson.id) on every signed-in GET of a lesson route, including all 3D worlds. So "opened" is already recorded server-side for every 3D world. E1 then only has to add the completion signal: PUT /api/progress = 100 when the teacher reaches the route's closing (db/progress.ts:14-22 maps ≥100 to "completed"). I agree that's small; it's one call in the shared shell. But note what it measures: a teacher-led class jumps around, so "reached closing" ≠ "taught the route". I'd label the metric "sessions reaching the closing", per your own caveat.

On G2: agreed for NEW lessons. Please state that it doesn't force a retrofit of Hospital's 147 scenes. That would be a multi-week content job, and it needs its own backlog line if you want it.
````

## 2026-10-16T14:25:29.838Z — Alejandro → Sofia

````text
RESPONSE from Alejandro to your C1–C4.

C1, conceded. "Technical SEO isn't the main cause" is restated as a HYPOTHESIS. Your alternative (crawled/discovered–not-indexed across ~200 near-template /resources/* pages, app/resources/[slug] + app/resource-seo.ts) is at least as plausible as low ranking, and the two call for opposite fixes. The decision doc will say: the GSC indexing pull (1b) decides whether week-2+ SEO work is consolidation (noindex/merge thin resource variants) or cluster deepening. Neither starts before 1b lands.

C2, conceded, and verified. CLAUDE.md:66 lists "D1 production writes, migrations, exports or imports" as owner-only, and nothing authorizes agent reads. I won't argue that an aggregate SELECT is "not an export". Registrations and first-paid counts are UNKNOWN until the owner either runs a defined aggregate query or authorizes a read-only one. The decision doc puts that as an explicit owner request. Until then the funnel KPI is GSC-only plus whatever the owner reports.

C3: noted, with thanks for correcting your own evidence. TTFB comes out of the problem list, and field CWV stays UNKNOWN (the GSC CWV report goes in the main session's data pull alongside 1b).

C4, accepted, with conditions. Your ranking is better than mine because it keeps one implementer productive while main pulls the data.
 (1) /argento hreflang fix + a no-"?lang=" regression test. I implement, you review.
 (2) Indexable Noche Abierta preview, you implement, under three conditions. (a) The title, H1 and primary text follow teacher intent ("preguntas/actividades de conversación…" for the free circle's situation), set by me as SEO owner, with the 3D as the conversion asset (my challenge point 1). (b) It meets Martin's Indexable Teacher Page standard (stated level, one objective, ≥8 authored prompts, a teaching sequence, test:language), and Martin reviews the Spanish and pedagogy. (c) The poster-only MVP gets no video until we know how it's produced and kept reproducible (my challenge point 3).
 (3) Cluster or consolidation work, decided by 1b.

On cannibalization, your question: I have no evidence either way, and neither do you. But the incremental risk is close to nil, because the free subset is ALREADY public. /demo/noche-abierta is reachable without login, just noindex (app/seo.ts:92-93), and the content comes from the existing public demo-content.mjs. Indexing doesn't move the paid boundary, so I agree that zero visibility costs more. The condition is that the FREE/PRO ledger and its tests stay untouched, and the preview serves only demo-content.mjs.

I still need your answers to my challenge points 4 (Kit scoped to "only what Feria needs") and the validation rewrite in point 2, which (2) above now also needs (GSC + owner-reported counts, no GA4).
````

## 2026-10-16T14:25:42.876Z — Martin → Alejandro

````text
RESPONSE (Martin → Alejandro) to your 5 challenges on "Proof before volume". I concede three, revise one and partly rebut one. I also accept your C1-C3 response as written, including the C3 precisions (not retroactive; the SEO structure is yours).

1. G2 votability: CONCEDED and REFRAMED. You're right. My citations support "the game helps when the mechanic is the language task" in general. They don't support a per-scene rule I authored, and choose → talk aloud is a legitimate house pedagogy (BosqueHongos.tsx:53).
 Revised split:
 - NON-VOTABLE (truthfulness, like G6): every interactive beat in a NEW lesson is LABELLED, as either "linguistic contrast" (it names the exponent it checks) or "conversation stimulus". A lesson may not claim to practise or teach exponent X in goals, metadata or the guide page unless at least one labelled beat targets X. That's a rule against unverifiable claims, not a design mandate.
 - VOTABLE design guideline (G2-guideline): new lessons SHOULD include at least one contrast beat per scene. It applies to new lessons only, it isn't a merge blocker, and the board can vote to change it.
 - Existing worlds aren't retro-failed. They're audited only when touched.

2. E1 definition and ordering: DEFINED, and ordering CONCEDED.
 - progressPercent = round(100 × route circles marked done ÷ circles in the selected 45' route).
 - 100 is sent only when the teacher presses the closing task's own "Terminar" button (the Bosque pattern, "He compartido mi respuesta · Terminar").
 - Free-roam visits outside the route don't count.
 - Monotonic per session (never decreases).
 - It's teacher self-report: gameable in principle, with no incentive to game it, and labelled as such.
 - Counted: signed-in accounts only, and since the 3D worlds are PRO, the denominator is near zero today. I'll say that plainly in the decision.
 - Ordering: you're right that acquisition measurement comes first. E1 isn't a separate task. It ships inside Sofia's minimal World Kit with Feria (one fetch), so it costs no slot of its own.

3. E2: CONCEDED, deferred out of the 90-day plan. You're right that it reverses my own AM-7 ("Notas de esta sesión: no se guardan por alumno"). It comes back only with an explicit privacy design and a fresh board decision.

4. G4 rotation: CONCRETE, and I accept "one level per unit".
 - Rule: author ≠ reviewer, always.
  - Martin-authored content → reviewed by Alejandro against the written checklist, or by a fresh strongest-model agent with only the checklist and the diff (mandate §4).
  - Sofia- or agent-authored content → Martin reviews.
  - Alejandro-authored content (e.g. the cluster hubs) → Martin reviews the pedagogy, Sofia the code.
 - Sample per unit:
  - ONE level reviewed in full: the lead level, its closing and its 45' route;
  - machine checks (G1 objective ids, labels, test:language) on ALL levels;
  - one spot-check scene in a second level whenever the unit ships ≥3 levels.
 - Budget: ≤3 h review per unit, with a weekly report of actual review hours, so we measure the bottleneck instead of guessing it.

5. Ranking: PARTLY CONCEDED.
 - Your weeks 1-2 (hreflang fix + test, GSC indexing pull, GA4 stream, KPI sheet) is #1. I'd already said I'd support it as the first task.
 - My counter-case is narrower than "foundational". The gate has to exist BEFORE THE NEXT LESSON MERGES, not before your SEO fix. The owner's Mon/Wed/Fri cadence starts next week, and every ungated release adds more unverifiable claims (five A0–C2 entries today) that structured data and teacher pages would then amplify.
 - The LQG itself is a short board document, not repo code. I can write it during deliberation, so it competes with no implementation slot.
 - Proposed order:
   1. your weeks 1-2;
   2. Feria A2 on the minimal kit, with the LQG checker fields + E1 inside it (Sofia implements; first unit through the gate);
   3. Sofia's indexable demo, once its circle passes the LQG and the Indexable Teacher Page standard;
   4. cluster 1-2 hubs (you implement; I review);
   5. the CI perf gate.
 - Non-votable condition for the decision doc: no new lesson, level or indexable teacher page merges without its LQG audit file (G3 + the G4 substance + G6 + the beat labelling).
````

## 2026-10-16T14:26:46.399Z — Martin → Sofia

````text
RESPONSE (Martin → Sofia) to your C1-C3 and the G2 note. I concede C1 and C3 and accept your G5 split with one addition. There's also a correction to E1's metric, which your C3 led me to check.

C1 E2: CONCEDED. I'd already dropped it from the 90-day plan in my reply to Alejandro, for the same reason: it reverses my own AM-7. Your schema evidence (class_records.studentId NOT NULL, db/schema.ts:379) makes it worse than I'd seen, because a group's ticks would land on ONE named student. Your later idea, a plain-text summary copied to the clipboard with no data flow, is acceptable to me as a post-MVP option. The summary contains only the group's can-do ticks and the route, never names.

C2 G5: your split MEETS my standard: (a) a per-PR SwiftShader rendered smoke with screenshots as CI artifacts, a non-blank canvas, no console errors and the 2D fallback rendering; (b) one real-device check per NEW WORLD on the D6 device, plus whenever the Look contract changes; (c) "unverified" blocks the featured flag.
 The risk (b) leaves open: level-specific text legibility. C1/C2 cards are much longer than A2 cards, and a new LEVEL of an existing world wouldn't trigger (b). So (a) should also screenshot, per level, the longest card (situation + dialogue + questions) at 390 px width and assert no overflow or clipping (scrollHeight within the card container). With that, I'm satisfied. G5 is rewritten as (a)+(b)+(c) in my revised LQG.

C3 progress writers: CONCEDED, and P1 is CORRECTED. I verified worker/index.ts:325-326. Every signed-in GET of a lesson route calls saveLessonProgress(env.DB, accountId, lesson.id), so "opened" is already recorded for every 3D world. I was wrong that Library.tsx is the only writer, and I'll say so in the decision record.
 There's one more thing your finding led me to check, and it changes the label. db/progress.ts:29-40 upserts with progress_percent = MAX(old, new), and completed_at stays set once written. So completion is STICKY per account × lesson: a teacher who reaches the closing once stays "completed" forever, and later sessions can't be counted. lesson_progress can't measure "sessions reaching the closing".
 The honest metric is: "accounts that have reached the closing of lesson X at least once ÷ accounts that opened X". I'll use exactly that label, plus your caveat that reaching the closing ≠ teaching the route. Counting sessions would need a new table or column, which means a migration, so it's out of scope.

G2: CONFIRMED. The beat labelling rule and the G2 guideline apply to NEW lessons only. There's no retrofit of Hospital's 147 scenes, or of any existing world. They're audited only when touched for another reason. If the board ever wants a retro audit, it gets its own sampled backlog line, not a hidden obligation.
````

## 2026-10-16T14:26:54.452Z — Martin → Alejandro

````text
Martin → Alejandro: two corrections to record in BOARD-DECISION-001, from Sofia's challenge, which I've conceded. Both change how E1 is described.

1. P1 was partly WRONG. Library.tsx isn't the only progress writer. worker/index.ts:325-326 calls saveLessonProgress(env.DB, accountId, lesson.id) on every signed-in GET of a lesson route, so "opened" is already recorded for every 3D world. E1 only adds the completion PUT (100) at the closing's "Terminar". (VERIFIED by me.)
2. The E1 label changes. db/progress.ts:29-40 upserts with progress_percent = MAX(old, new), and completed_at stays set once written, so completion is sticky per account × lesson and sessions can't be counted. The weekly KPI line becomes: "accounts that have reached the closing of lesson X at least once ÷ accounts that opened X; signed-in PRO only; not learning; reaching the closing ≠ teaching the route". Counting sessions would need a migration, so it's out of scope.

Also settled with Sofia:
- G5 = (a) a per-PR SwiftShader rendered smoke with screenshots, a non-blank canvas, no console errors and the 2D fallback rendering, plus a per-level screenshot of the longest card at 390 px with no overflow; (b) one real-device check per NEW world on the D6 device, plus whenever the Look contract changes; (c) "unverified" blocks the featured flag.
- E2 is dropped. A clipboard-only text summary is a possible post-MVP option.
- G2 means no retrofit of existing worlds.
````

## 2026-10-16T14:27:22.023Z — Sofia → Alejandro

````text
RESPONSE (Sofia → Alejandro) to your 6 challenges. I concede 1, 2, 3, 4 and 6 with the revisions below. On 5 I have new measurements, and they REVERSE the correction I sent you in my challenge (C3). TTFB IS a real defect, and it affects the homepage.

5. TTFB, measured as you asked (3 requests each, from this machine, curl):
 - /resources/…hospital…: edge HIT ×3 (cf-cache-status: HIT, x-spanishcue-cache: HIT) → TTFB 1.19 / 1.08 / 1.00 s.
 - Cache-busted (?cb=…) → 1.27 / 1.15 / 1.27 s.
 - /spanish-conversation-activities: MISS 1.16 s, then HIT 1.04 / 1.02 s.
 - "/" (not edge-cacheable) → 1.18 / 1.20 / 1.21 s.
 - /robots.txt → 1.27 / 1.22 / 0.97 s.
 Controls from the same machine:
 - TCP connect to spanishcue.com is 8-17 ms and TLS is about 20 ms;
 - a static /assets/framework-*.js is 33-41 ms TTFB;
 - www.cloudflare.com/cdn-cgi/trace is 34 ms.
 So my earlier claim ("it's network distance") was WRONG, and I retract it. The edge is close and fast for static assets. What's slow is every request that goes through the Worker's HTML/route path, at about 1 s even on an edge-cache HIT and even for robots.txt. A cache HIT that costs about as much as a MISS points to the time going BEFORE the edge-cache lookup in worker/index.ts (the lookup is at :296-303).
 - VERIFIED: for anonymous non-identity-aware paths, the Firebase/D1 identity awaits at :278-283 are skipped (identityAware is false), so they're not the cause for /resources/*.
 - CAUSE: HYPOTHESIS. Candidates are module or bootstrap cost per request/isolate in the vinext worker, an await earlier in the handler, or Sites hosting overhead. I can't read Worker logs (CLAUDE.md §1a).
 - Impact: Google's "good" TTFB guideline is ≤0.8 s, and TTFB is a component of LCP, so every indexable page, the homepage included, starts at about 1 s before any HTML arrives. That's an SEO/CWV item, and I agree it's worth a slot. I'd rank it with your measurement work, because it affects all 241 URLs.
 - Caveat: this is one vantage point. The next step is to repeat from a second region (e.g. the Cloudflare/PSI lab once we have quota) and to profile locally with `vite dev` / `vinext start` timing, once implementation is authorized.

1. Intent. Conceded. Your title/H1/content selection by query intent is your call as SEO owner. The page is a teacher-intent page (a conversation-question set for a situation, Martin's guide format), and the playable circle is the conversion asset embedded on it, not the ranking asset. I have no evidence of demand for "3D Spanish lesson" queries, so I won't claim any.
2. Validation without GA4. Accepted:
 - GSC impressions and clicks on those URLs at 28 and 56 days;
 - plus server-side counts: the worker already records "opened" for signed-in lesson GETs (worker/index.ts:326, saveLessonProgress), and /acceso claims or registrations within N days.
 Caveat (my challenge C2): reading production D1 needs explicit owner authorization or an owner-run query. Until then the funnel side is UNKNOWN, and GSC is the only metric we can read ourselves.
3. Video. Conceded for MVP: poster image + server-rendered text + the playable circle only. No video in MVP and no new binary weight beyond one poster per world. Video becomes a later item, with the conditions Martin set (Spanish captions with the real lines). It must be reproducible: scripted capture from the same headless-render tooling I proposed for G5, regenerated when a world changes, never hand-recorded.
4. World Kit. I commit to your scope: "extract what Feria needs, as Feria is built". There's no standalone kit milestone and no migration of shipped worlds; shipped worlds move only if a later task touches them, each under its own review. The ≤300-line shell target is measured on Feria. Per Martin, the minimal kit also carries the E1 completion hook, the G1/G2 checker fields and the routes-as-data validator from day one.
6. D. Agreed: it goes to the owner as a proposal, using Martin's definitions (new world / genuinely authored new level / repair, each with its gate audit file, reported by type).

Net revision of my proposal:
 - A = an intent-led teacher page per world + an embedded, LQG-passed free circle (poster first, WebGL on click), with honest educationalLevel.
 - B = the Feria-scoped minimal kit with the quality hooks.
 - C = the CI size gate + the TTFB investigation (new, evidence above).
 - D = an owner proposal.
````

## 2026-10-16T14:27:28.671Z — Sofia → Martin

````text
RESPONSE (Sofia → Martin) to C1-C3 and your ruling on D. I accept all three challenges and the ruling, with one scope note on C1.

C1. Accepted.
 - The public circle passes the LQG (G1 objective id, G2 at least one linguistic-contrast beat, talk prompts, a short teacher route, G4 independent review) before it's indexed.
 - Structured data declares educationalLevel only for levels that circle actually authors and that you review. Never "A0–C2" unless all seven pass.
 - Video: Alejandro and I agreed to drop it from the MVP (poster + server-rendered text + playable circle). When it comes, it carries Spanish captions with the real lines, and it's regenerated by scripted capture, not hand-recorded.
 Scope note: demo-content.mjs (:5-20) was built for paid landings, as you say. So the indexable circle is a NEW authored unit, ONE circle at ONE level that you pick and review, not a promotion of the existing campaign slice. The /demo/noche-abierta campaign route stays as it is (noindex). This needs content authoring time from you, and I'll ask Alejandro to put it in the plan.
C2. Accepted.
 - Feria is built on the minimum kit only: renderer/low-power/dispose, the fallback router, the ducking function, routes as data. The rest is extracted when a second world needs it. Alejandro required the same scope.
 - From day one the kit carries (i) the E1 completion hook (PUT /api/progress = 100 at the closing; "opened" is already recorded server-side at worker/index.ts:326), (ii) the G1/G2 checker fields, and (iii) the route-as-data validator.
 - Line counts stay engineering-only metrics, never quality proxies in board reports.
C3. Accepted. The three hypotheses stay labelled HYPOTHESIS until CI build output measures them, and they're reported as measured only after that.
 New evidence (sent to Alejandro too): every HTML response through the Worker takes about 1 s TTFB even on an edge-cache HIT, while static assets take about 35 ms from the same machine. That's VERIFIED as a symptom (3 samples per URL, one vantage point); the cause is a HYPOTHESIS. It's a CWV/SEO item, not a pedagogy one, but it affects the pages teachers land on.
D. Accepted as you ruled:
 - a new level counts only if genuinely authored and gated (G1-G6, including G4), never a re-levelled copy;
 - a repair fills a slot but is reported as a repair;
 - the weekly report lists each unit with its type and its gate audit file.
 It goes to the owner as a proposal.
Still open from my challenge to you: E2 (class_records needs a studentId), and the G5 split (automated per-PR render smoke + one real-device check per new world). I'm waiting for your response on those.
````

## 2026-10-16T14:28:04.445Z — main-facilitator → Alejandro

````text
Facilitator note (evidence only, not a vote): I independently re-measured Sofia's TTFB finding from the main session, 3 tries each. Results: / ttfb 1.17–1.19 s; /robots.txt 1.04–1.11 s; /spanish-grammar-lessons 1.04–1.26 s, including two cf-cache-status HIT responses at about 1.04 s. TCP connect was about 8–10 ms on all of them. So her measurement reproduces: about 1 s of server-side work even on cache hits and on robots.txt. Cause is unverified (no Worker logs available). It's the same machine and network as hers, so it is not an independent geography. Use it as you see fit in BOARD-DECISION-001.
````

## 2026-10-16T14:28:14.289Z — Sofia → Alejandro

````text
Sofia → Alejandro: your C3 note ("TTFB comes out of the problem list") crossed with my RESPONSE and is superseded by it. Please re-read that message before drafting: I measured warm/cold as you asked, and TTFB IS real. Edge-cache HITs take 1.00-1.19 s, "/" takes 1.18-1.21 s and /robots.txt about 1.1 s, against 33-41 ms for static /assets/* and 8-17 ms TCP connect from the same machine. So about 1 s is spent in the Worker's HTML path before the cache lookup. The symptom is VERIFIED from one vantage point; the cause is a HYPOTHESIS. Please keep it in the decision doc as an investigation item.
Your two open points are also answered in that RESPONSE:
 - point 4, I COMMIT to "extract only what Feria needs, as Feria is built": no standalone kit milestone, no migration of shipped worlds, the ≤300-line shell measured on Feria, and Martin's hooks included;
 - point 2, validation = GSC impressions/clicks at 28/56 days + owner-reported counts (worker-recorded opens, /acceso claims, registrations), with no GA4 dependency.
I accept your (2) conditions (a) intent-led title/H1/text set by you, (b) Martin's Indexable Teacher Page standard + his review, (c) poster-only MVP. One alignment so the doc isn't contradictory: you write "the preview serves only demo-content.mjs", while Martin's C1 to me requires the indexable circle to be a NEW, LQG-passed authored unit (one circle, one level, chosen and reviewed by him), because the campaign slice was never reviewed as a standalone lesson. I accepted Martin's version. The paid boundary still doesn't move, since a single free circle at one level is no more than the existing public slice exposes. Please record his version, or settle it with him.
````

## 2026-10-16T14:28:16.157Z — Sofia → Martin

````text
Sofia → Martin: I accept your G5 addition and will implement it as part of (a). Per level, the render smoke opens the longest card (situation + dialogue + questions) at a 390×844 viewport, DPR 1.25, and asserts that no text node overflows its card (scrollHeight ≤ clientHeight of the scroll container, plus no horizontally clipped element). A screenshot goes to the CI artifacts. A new level then always triggers the legibility check, even without a real-device run. Your sticky-completion label ("accounts that reached the closing at least once ÷ accounts that opened") is the right one; I'll name the hook's metric exactly that.
````

## 2026-10-16T14:28:33.185Z — Martin → Sofia

````text
Martin → Sofia: one precision on the legibility assertion, so it doesn't push us to cut content.

As written ("scrollHeight ≤ clientHeight of the scroll container"), it would fail any card that legitimately scrolls. Long C1/C2 situations and dialogues SHOULD be allowed to scroll inside the card on a 390 px phone. Otherwise the cheapest way to pass the test is to shorten level-appropriate input, which is a pedagogical regression.

What the test should catch is content a learner can't reach:
 1. no text node clipped by an ancestor with overflow:hidden/clip (horizontal or vertical);
 2. if the card body overflows, it's a scroll container (overflow-y auto/scroll) and its last element can be scrolled into view;
 3. no horizontal overflow at all at 390 px;
 4. the action buttons (choices, "Terminar") stay visible or reachable without leaving the card.

Everything else (viewport, DPR, longest card per level, screenshot artifact) is fine as you described. This doesn't need a reply unless you disagree.
````

## 2026-10-16T14:29:46.241Z — Alejandro → Sofia

````text
BOARD-DECISION-001 DRAFT v1 is written at /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/board/BOARD-DECISION-001.md. Please read the file, not just this summary, and reply with VOTE: APPROVE, or VOTE: OBJECT <section> <reason>. There's one objection round, and then it's LOCKED.

Summary:
- Decision (§1): discoverability is the binding constraint. We fix measurement and known SEO/perf defects, make the 3D visible through intent-led indexable teacher pages with an embedded free circle, and ship 3D only through the LQG on a Feria-scoped kit.
- Findings (§2): F6 records your TTFB measurements as VERIFIED, with the cause as a HYPOTHESIS. F3 records your C1 (technical SEO cause unknown until the GSC indexing pull). F8 records your C2 (no agent reads of production D1).
- Rules (§3): N1–N4 are non-votable: the LQG audit file, no D1 reads, the FREE/PRO ledger, and the E1 label. The votable rules are the Indexable Teacher Page standard, G1, G2-guideline, the G4 rotation, your G5 spec, E1, E2 dropped, the kit scope, and poster-first with no video in MVP. §3.3 puts "3 shipping units" to the owner as a proposal. §3.4 lists R1–R3 data requests.
- Backlog (§5), with scores:
  1. SEO-001 (Alejandro; you review)
  2. PERF-001, the TTFB root cause, time-boxed to 1 day (you; I review)
  3. GROW-001, the Noche teacher page plus free circle (you; I review SEO, Martin reviews pedagogy)
  4. LES-001, Feria A2 on the minimal kit
  5. SEO-002, consolidation vs. clusters as R1 dictates
  6. PERF-002, the CI size gate
  7. Cluster 3
  8. Feria pilot
  The ordering note explains the majority call (preview before Feria) and why PERF-001 comes before GROW-001 despite its lower total.
- First task (§6): SEO-001. Implementer: Alejandro. Reviewer: you. Branch claude/seo-001-hreflang-lang-guard. The acceptance criteria are in the file, and include "not reported as deployed until production HTML is verified".

The implementer is idle-gated: nothing starts until this is LOCKED and the facilitator authorizes Phase B.
````

## 2026-10-16T14:29:54.176Z — Alejandro → Martin

````text
BOARD-DECISION-001 DRAFT v1 is written at /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/board/BOARD-DECISION-001.md. Please read the file, not just this summary, and reply with VOTE: APPROVE, or VOTE: OBJECT <section> <reason>. There's one objection round, and then it's LOCKED.

Summary:
- Decision (§1): discoverability first, then 3D made visible through intent-led indexable teacher pages with an embedded free circle, and 3D shipped only through the LQG.
- Your corrections are in F7 ("opened" is already written at worker/index.ts:325-326; completion is sticky, so no session counts) and N4 (the E1 label).
- Rules (§3):
  - N1 (non-votable) is your condition verbatim in substance: no new lesson, level or indexable teacher page merges without the LQG audit file (G3, G4 substance, G6, beat labelling).
  - The votable rules include your Indexable Teacher Page standard with my two precisions, G1, G2-guideline, your G4 rotation (≤3 h per unit, hours reported), the G5 spec you agreed with Sofia, E1 as you defined it, and E2 dropped.
  - §3.3 puts "3 shipping units" to the owner, using your unit definitions.
- Backlog (§5):
  1. SEO-001
  2. PERF-001, the TTFB root cause (new evidence from Sofia: ~1 s on every Worker-routed HTML response even on a cache HIT, vs 33-41 ms for static assets)
  3. GROW-001, the Noche teacher page plus free circle
  4. LES-001, Feria
  5. SEO-002
  6. PERF-002
  7. Cluster 3
  8. The Feria pilot (you implement)
  I recorded your dissent in §9: you'd put Feria before the preview. The majority (Sofia and I) put the preview first, because Feria adds PRO content nobody can find yet. Your concern is fully kept as N1, which also gates the preview's circle. If you think that misreads your position, OBJECT on §5 with the reason.
- First task (§6): SEO-001. Implementer: Alejandro. Reviewer: Sofia. Branch claude/seo-001-hreflang-lang-guard.
````

## 2026-10-16T14:30:21.532Z — Martin → Alejandro

````text
VOTE: OBJECT §3.1 (N3 and N4), with consequential edits to §5 GROW-001 and §7 risk 4. Everything else I APPROVE as written, including the §5 order. My dissent stays recorded as in §9, and I accept the majority ranking with N1 in force.

Reason 1, N3 contradicts what Sofia and I agreed about the preview circle, and it would force an unreviewed teaser onto the indexable page.
 - N3 says "Indexable previews serve only already-public content (app/immersive/demo-content.mjs)". But Sofia accepted my C1 with this scope note: "the indexable circle is a NEW authored unit, ONE circle at ONE level that [Martin] pick[s] and review[s], not a promotion of the existing campaign slice. The /demo/noche-abierta campaign route stays as it is (noindex)." (Sofia → Martin, logged.)
 - demo-content.mjs was built for paid landings and was never pedagogically reviewed as a standalone lesson.
 - Proposed N3 text: "The FREE/PRO ledger and its tests decide access. An indexable preview serves only content the ledger marks FREE. The GROW-001 circle is a NEW authored unit (one circle, one level), added to the ledger as FREE through the normal ledger change and tests, and it passes N1 (LQG) and the Indexable Teacher Page standard before it's indexed. The /demo/noche-abierta campaign route stays noindex and unchanged."
 - Consequences:
  - §7 risk 4: replace "content is already public" with "one new circle is made free; PRO depth (levels, routes, listenings) stays PRO; cannibalization unmeasured (H)".
  - §5 GROW-001 roles, which must follow your own G4 rotation: Martin AUTHORS the circle content (Spanish, objective, beats, teacher route); Sofia implements the page and embed; the content REVIEW (G4) is by Alejandro or a fresh agent working from the checklist, not Martin; Martin does the G5 legibility check; Alejandro reviews SEO. As drafted, it names me as the reviewer of content that Sofia's scope note says I author, which breaks author ≠ reviewer (N1, the G4 substance).

Reason 2, N4's label predates the correction F7 records, and N4 is a truthfulness rule, so it has to be exact.
 - Since completion is sticky per account × lesson (db/progress.ts:29-40, F7), "teacher route completion" invites a per-session reading the data can't support.
 - Proposed N4 text: "E1 and any KPI built on it is reported only as 'accounts that have reached the closing of lesson X at least once ÷ accounts that opened lesson X; signed-in PRO accounts only; not learning; reaching the closing ≠ teaching the route'. It is never reported as learning or as a session count."
 - Sofia has already confirmed she'll name the hook's metric exactly that (Sofia → Martin, logged).

With those two text changes I vote APPROVE. Neither touches the ranking, the first task, or SEO-001's scope or acceptance criteria.
````

## 2026-10-16T14:30:38.802Z — Sofia → Alejandro

````text
VOTE: OBJECT §3.1 N3 + §5 GROW-001, and §3.2 G5(a) wording. Two narrow text fixes, nothing else. I APPROVE the rest as written: §1, §2, §4, the ranking and ordering in §5, §6 SEO-001 with its ACs, and §7-§9.

1. §3.1 N3 vs Martin's C1 (internal contradiction). N3 says "Indexable previews serve only already-public content (app/immersive/demo-content.mjs)". Martin's C1, which I accepted in writing, requires the indexed circle to pass the LQG as a standalone teachable unit, because the campaign slice "was never pedagogically reviewed as one". If the chosen circle fails the gate, N3 as written forbids the fix: revised content isn't "already-public". Proposed wording, which keeps both your boundary and Martin's gate:
   "N3. The FREE/PRO ledger and its tests decide access. An indexable preview serves one circle at one level, selected from the public demo subset (app/immersive/demo-content.mjs). If it fails the LQG, it is revised in place in that public file (authored by Martin, reviewed per G4). No content is moved from a PRO module to the free side, and no ledger or access-policy file changes."
   And GROW-001's row: "Implementer: Sofia (page, engine, SEO wiring per Alejandro); circle content/revision: Martin; reviewers: Alejandro (SEO), G4 reviewer for Martin's content (Alejandro or fresh agent), Martin (LQG sign-off of the page)". As written, Martin would review his own revision.
2. §3.2 G5(a) "the longest card fits at 390 px". Martin corrected me afterwards (in his message "One precision on the legibility assertion"), and I agree: "fits" would fail legitimately scrolling C1/C2 cards and push authors to cut level-appropriate input. Replace it with: "the longest card per level is fully reachable at 390 px: no text clipped by overflow:hidden/clip, overflowing bodies are scroll containers whose last element scrolls into view, no horizontal overflow, action buttons reachable inside the card".

If both edits go in as worded, treat this as APPROVE with no further round needed from me.
````

## 2026-10-16T14:30:44.191Z — Sofia → Martin

````text
VOTE: OBJECT §3.1 N3 + §5 GROW-001, and §3.2 G5(a) wording. Two narrow text fixes, nothing else. I APPROVE the rest as written: §1, §2, §4, the ranking and ordering in §5, §6 SEO-001 with its ACs, and §7-§9.

1. §3.1 N3 vs Martin's C1 (internal contradiction). N3 says "Indexable previews serve only already-public content (app/immersive/demo-content.mjs)". Martin's C1, which I accepted in writing, requires the indexed circle to pass the LQG as a standalone teachable unit, because the campaign slice "was never pedagogically reviewed as one". If the chosen circle fails the gate, N3 as written forbids the fix: revised content isn't "already-public". Proposed wording, which keeps both your boundary and Martin's gate:
   "N3. The FREE/PRO ledger and its tests decide access. An indexable preview serves one circle at one level, selected from the public demo subset (app/immersive/demo-content.mjs). If it fails the LQG, it is revised in place in that public file (authored by Martin, reviewed per G4). No content is moved from a PRO module to the free side, and no ledger or access-policy file changes."
   And GROW-001's row: "Implementer: Sofia (page, engine, SEO wiring per Alejandro); circle content/revision: Martin; reviewers: Alejandro (SEO), G4 reviewer for Martin's content (Alejandro or fresh agent), Martin (LQG sign-off of the page)". As written, Martin would review his own revision.
2. §3.2 G5(a) "the longest card fits at 390 px". Martin corrected me afterwards (in his message "One precision on the legibility assertion"), and I agree: "fits" would fail legitimately scrolling C1/C2 cards and push authors to cut level-appropriate input. Replace it with: "the longest card per level is fully reachable at 390 px: no text clipped by overflow:hidden/clip, overflowing bodies are scroll containers whose last element scrolls into view, no horizontal overflow, action buttons reachable inside the card".

If both edits go in as worded, treat this as APPROVE with no further round needed from me.
````

## 2026-10-16T14:30:45.075Z — Alejandro → Sofia

````text
Sofia, your TTFB RESPONSE did reach me before the draft. F6 in BOARD-DECISION-001 records it as VERIFIED (symptom) / HYPOTHESIS (cause), and PERF-001 is backlog rank 2. My "TTFB comes out" note referred only to your earlier C3 retraction. Since then the facilitator reproduced your numbers from the same network, which is noted in F6 as not an independent geography.

Alignment done in DRAFT v2. N3 and GROW-001 now record Martin's version: the indexable circle is a NEW, LQG-passed, one-circle, one-level unit authored by Martin, added explicitly to the FREE ledger with tests, with no PRO content moving to free. GROW-001's complexity and dependency scores were lowered to reflect that his authoring comes first (total now 16). Please vote on v2 (re-read the file).
````

## 2026-10-16T14:30:47.876Z — Alejandro → Martin

````text
Martin, BOARD-DECISION-001 is now DRAFT v2. Sofia told me you required the preview's indexable circle to be a NEW, LQG-passed one-circle, one-level unit chosen and authored by you, not the unreviewed campaign slice, and that she accepted it. v2 records that in N3 and GROW-001. It's added explicitly to the FREE ledger with tests, no PRO content moves to free, and the G4 review of your circle goes to me or a fresh agent. F6 also adds the facilitator's reproduction of the TTFB measurements. If that matches your requirement, please vote on v2 (re-read the file). If your vote on v1 is already in flight, tell me whether it stands for v2.
````

## 2026-10-16T14:30:50.749Z — Martin → Alejandro

````text
Martin → Alejandro: I'm NARROWING my objection after re-reading the file, as §9 asks. My vote was written against v1; v2 is now on disk.

 - N3 and the §5 GROW-001 roles: SATISFIED by v2. Reason 1 of my objection is withdrawn. The v2 N3 (a new LQG-passed unit, authored by me, content review per G4 by Alejandro or a fresh agent, added to the FREE ledger with tests) is what I asked for.
 - Still open: N4 ONLY, Reason 2, unchanged. v2 still reads "teacher route completion, signed-in PRO accounts, not learning". Please replace it with: "E1 and any KPI built on it is reported only as 'accounts that have reached the closing of lesson X at least once ÷ accounts that opened lesson X; signed-in PRO accounts only; not learning; reaching the closing ≠ teaching the route'. It is never reported as learning or as a session count." Reason: F7, completion is sticky per account × lesson (db/progress.ts:29-40).
 - Editorial, not an objection: §7 risk 4 still says "content is already public". Under v2's N3 it's a new free circle, so "one new authored circle is made free, no PRO content moves; cannibalization unmeasured (H)" would be consistent.

With the N4 text changed: VOTE: APPROVE.
````

## 2026-10-16T14:31:10.307Z — Sofia → Alejandro

````text
Sofia, vote correction after re-reading the file: my OBJECT was written against DRAFT v1. DRAFT v2 on disk already resolves objection 1. N3 now adopts Martin's "new, LQG-passed authored unit", added explicitly to the FREE ledger with tests, and the GROW-001 row routes Martin's content to a G4 reviewer other than Martin. I withdraw objection 1.
My vote on v2 is VOTE: OBJECT §3.2 G5(a), wording only. "the longest card fits at 390 px" → "the longest card per level is fully reachable at 390 px: no text clipped by overflow:hidden/clip, overflowing bodies are scroll containers whose last element scrolls into view, no horizontal overflow, action buttons reachable inside the card". Reason: Martin's later precision, which I agree with, is that "fits" would fail legitimately scrolling C1/C2 cards and push authors to cut level-appropriate input. If that one sentence changes, count my vote as APPROVE for v2 with no further round from me.
````

## 2026-10-16T14:31:13.056Z — Sofia → Martin

````text
Sofia, vote correction after re-reading the file: my OBJECT was written against DRAFT v1. DRAFT v2 on disk already resolves objection 1. N3 now adopts Martin's "new, LQG-passed authored unit", added explicitly to the FREE ledger with tests, and the GROW-001 row routes Martin's content to a G4 reviewer other than Martin. I withdraw objection 1.
My vote on v2 is VOTE: OBJECT §3.2 G5(a), wording only. "the longest card fits at 390 px" → "the longest card per level is fully reachable at 390 px: no text clipped by overflow:hidden/clip, overflowing bodies are scroll containers whose last element scrolls into view, no horizontal overflow, action buttons reachable inside the card". Reason: Martin's later precision, which I agree with, is that "fits" would fail legitimately scrolling C1/C2 cards and push authors to cut level-appropriate input. If that one sentence changes, count my vote as APPROVE for v2 with no further round from me.
````

## 2026-10-16T14:31:35.596Z — Martin → Alejandro

````text
Martin → Alejandro: my FINAL vote on v2, answering your question. It's the one in my "Narrowing my OBJECT" message.

VOTE on v2: OBJECT §3.1 N4 (wording only). Replace the label with: "accounts that have reached the closing of lesson X at least once ÷ accounts that opened lesson X; signed-in PRO accounts only; not learning; reaching the closing ≠ teaching the route. Never reported as learning or as a session count." Reason: completion is sticky per account × lesson (F7; db/progress.ts:29-40).

I also SUPPORT Sofia's §3.2 G5(a) wording fix ("fully reachable at 390 px …" in place of "fits"), since it's my own precision.

N3 and GROW-001 in v2 satisfy me (that part of my objection is withdrawn). With the N4 and G5(a) sentences changed, count my vote as APPROVE with no further round from me. That's my last word on this document; I'll treat the file as authoritative once you LOCK it.
````

## 2026-10-16T14:32:09.831Z — Alejandro → Sofia

````text
BOARD-DECISION-001 v3 is LOCKED. Your G5(a) wording is applied verbatim, and so is your GROW-001 role split: you implement the page, embed and engine; Martin authors the circle; Alejandro or a fresh agent does the G4 content review; Martin does G5 legibility only. On N3, your objection quoted v1's text. v2 had already adopted Martin's version (a new LQG-passed one-circle unit added to the FREE ledger with tests, with /demo/noche-abierta unchanged), which you asked me to record in your earlier message. v3 keeps it rather than introduce a third variant. §9 explains this. Martin's exact N4 wording is in. The first task is SEO-001 (implementer Alejandro, reviewer you), and it waits for Phase B authorization from the facilitator. You're next in the queue with PERF-001. No reply needed.
````

## 2026-10-16T14:32:12.621Z — Alejandro → Martin

````text
BOARD-DECISION-001 v3 is LOCKED. Your N4 text is applied verbatim, and §7 risk 4 now reads "one new authored circle is made free; no PRO content moves; PRO depth stays PRO; cannibalization unmeasured (H)". N3 stays as in v2, as you confirmed. GROW-001 roles: you author the circle, the G4 content review goes to Alejandro or a fresh agent, and you do the G5 legibility check only. Sofia's G5(a) "fully reachable at 390 px" wording, which you originated, is in. Your Feria-first dissent is recorded in §9, with N1 in force. The first task is SEO-001 (Alejandro; Sofia reviews), awaiting Phase B. Your next work item is authoring the GROW-001 circle once PERF-001 is through. No reply needed.
````

## 2026-10-16T14:33:35.100Z — main-facilitator → Alejandro

````text
Phase B is authorized. Implement SEO-001 exactly as §6 of BOARD-DECISION-001 v3 specifies, up to a VERIFIED MERGED SHA ON MAIN. You are the single implementer; Sofia and Martin stay idle until you ask Sofia for the code review.

Workspace: do NOT use scratchpad/repo (shallow, read-only reference) or ~/Projects/spanishcue-web (the owner's working copy, which is on another branch with local changes; never touch it). Make a fresh full clone at /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/work-seo-001, branch `claude/seo-001-hreflang-lang-guard` from fresh origin/main, and record the base SHA. `npm ci` is allowed there.

Delivery per AGENTS.md: run the checks the change needs, locally. Open a non-draft PR whose body states the authoring agent, checks, production/billing/auth/D1 impact (none expected), the KPI-sheet definition and R1–R3. Let CI + Auto Merge merge it, never merge manually, and verify the merged SHA on main.

PRODUCTION DEPLOY IS OUT OF SCOPE for you. Do NOT dispatch any deploy workflow. In this session the production deploy is held for the owner's explicit go-ahead, which the main session handles. You may read docs/releases/* and the deploy workflow to report its preconditions.

Never touch automation/* refs, PR #209's files, secrets, D1, billing or auth.

Commit messages end with: Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>. PR bodies end with: 🤖 Generated with [Claude Code](https://claude.com/claude-code)

When the code and tests are pushed, send Sofia ONE review request with the PR link and the diff summary. Fix what she raises. Keep logging messages to team-logs/Alejandro.md. Final output: PR number, CI result, merged SHA, the deploy preconditions you found, and anything unfinished.
````

## 2026-10-16T14:40:19.630Z — Alejandro → main

````text
Alejandro to facilitator. Your Phase B instructions conflict: under the current repo config, letting CI + Auto Merge merge SEO-001 IS a production deploy. I'm holding before anything can merge. I haven't opened a PR yet, so nothing has been triggered.

Evidence, all read-only:
1. .github/workflows/ci-automerge.yml:236. After a successful merge, the "Publish merged main to staging" step runs `gh workflow run deploy-staging.yml -f sha=$MERGE_SHA`.
2. .github/workflows/deploy-staging.yml:3-5 ("after staging smoke passes, this workflow automatically dispatches the owner-authorized production release for the exact same SHA") and :221. On staging success it runs `gh workflow run deploy-production.yml -f action=deploy -f mode=release -f sha=$SHA -f confirm="deploy $SHA"`.
3. deploy-production.yml:61 gates on vars.OWNER_CLOUDFLARE_PRODUCTION_ENABLED. `gh variable list` shows it as `true` (set 2026-09-28).
4. The `production` environment has protection_rules: [] (gh api .../environments/production). There's no required reviewer to stop it.
5. History confirms the chain fires: today's production runs succeeded for 3dd0ac4, 5cd4408, 39c4ed0 and a7efb5f, all workflow_dispatch.
6. CI jobs only run when the PR is non-draft (ci-automerge.yml:21, :60), and opening a non-draft PR is enough to start test → merge → staging → production with no further action.

My plan, which stays within your instructions, unless you say otherwise:
- Finish local checks, commit, and push branch claude/seo-001-hreflang-lang-guard. Pushing a non-main branch triggers nothing (deploy-staging fires only on push to main).
- Open the PR as a DRAFT, which runs no CI/merge job. Send Sofia the review request against it.
- Do NOT mark it ready-for-review. Marking it non-draft is the action that leads to a production deploy, so it needs the owner's go-ahead, which you said the main session handles.

Decision needed from you or the owner: either (a) authorize marking the PR ready, knowing it auto-deploys to production for that SHA, or (b) the owner temporarily changes the gate (variable or environment reviewer). That's a repo-settings change, which is owner-only under CLAUDE.md, so I won't touch it. I'll report "merged SHA" only once this is resolved.
````

## 2026-10-16T14:40:36.605Z — main-facilitator → Alejandro

````text
Confirmed, and good catch. I verified ci-automerge.yml (the "Publish merged main to staging" step) and deploy-staging.yml (its header and the production dispatch step): merging is a production deploy. Your plan is approved as you stated it. Finish the local checks, push claude/seo-001-hreflang-lang-guard, open the PR as a DRAFT, and send Sofia the review request. Do NOT mark it ready and do NOT touch the gate variable or the environment settings. I'm asking the owner now whether merges may auto-deploy. Final output: the draft PR number, the local check results, Sofia's review outcome and the fixes you applied. Please also add this finding to BOARD-DECISION-001 §7 open risks: "merge = production deploy; owner gate required".
````

## 2026-10-16T14:42:50.024Z — Alejandro → Sofia

````text
SEO-001 code review request (BOARD-DECISION-001 v3 §6). You're the reviewer: https://github.com/agnremote-code/spanishcue-web/pull/217. Head is c771c4a and the base is origin/main 3dd0ac41cfbe11413c1ba9c83ec893f4c5adac41. It's a DRAFT on purpose, see below.

Diff (2 files, +27/−9):
1. app/argento/layout.tsx: removed alternates.languages {es, en: "https://spanishcue.com/argento?lang=en", x-default}, keeping only the canonical "https://spanishcue.com/argento", plus a one-line comment. The reason is that ?lang= 301s (worker/index.ts languageRedirect) and /argento isn't a real pair (app/seo.ts languagePairs is empty).
2. tests/seo-architecture.test.mjs: added readdirSync to the fs import, an appSources() walker over app/**/*.{ts,tsx,mjs,js}, and a new test "no canonical, hreflang or absolute site URL anywhere under app/ carries ?lang=". It (a) fails on any absolute /spanishcue\.com\/[^"'`\s)]*[?&]lang=/ and (b) for every `alternates:` occurrence, fails if the next 400 chars contain [?&]lang= (this catches relative values). There's also a sanity assert that the walk found >100 files. Relative UI links (VerificationAction /ingresar?lang=…, the lp switcher) aren't affected.

Local checks:
- seeded fail on the old argento file, pass with the fix;
- test:seo 31/31;
- the rest of npm test incl. build + test-worker: 699 pass / 1 fail, where the failure is ffprobe ENOENT, since this machine has no ffmpeg and CI installs it;
- language tests and scripts pass;
- lint shows 0 errors and no warnings in the changed files;
- validate:artifact passes;
- diff --check is clean.

Please check in particular:
(i) whether the 400-char window after `alternates:` can false-positive on any current file (it passes on main today) or miss a realistic case;
(ii) whether dropping hreflang is right for /argento, versus an EN pair, given the A1 bilingual UI;
(iii) anything in the walker that's fragile (symlinks, generated files).

Why it's a draft: I found that marking it ready makes CI + Auto Merge merge it, and then deploy-staging.yml auto-dispatches deploy-production.yml (mode release). OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true and the production environment has no reviewer. Production deploys are held for the owner in this session, so I've escalated to the facilitator. It stays a draft until that's resolved. Reply with APPROVE or a list of changes.
````

## 2026-10-16T14:45:22.726Z — Sofia → Alejandro

````text
REVIEW (Sofia → Alejandro) PR #217 @ c771c4a (base 3dd0ac4): APPROVE. There are no blocking changes, only three optional hardening notes.
Method: I read the diff (gh pr diff 217) and the surrounding code in the clone. I didn't run the tests; your local run plus CI cover that.

(ii) Dropping hreflang for /argento is correct. It's one URL that serves both UI languages through a toggle/cookie. hreflang needs a distinct URL per language, and app/seo.ts languagePairs is empty on purpose (:37-42: "Add a pair only when both URLs carry the same content in two languages"). An EN pair would need a real separate EN document, which is out of scope. The new comment states this correctly.

(i) The 400-char window:
 - False positives today: none (it passes on main, as you said). The realistic future false positive is PROSE: a comment explaining the toggle (as at app/layout.tsx:45, app/marketing-landing/metadata.ts:20, written `?lang=` in backticks) placed within 400 chars after an `alternates:` would fail the test. That's loud and trivial to fix, so I accept it. Optional: strip `//…` and `/*…*/` before scanning.
 - Misses: (a) alternates built in a variable or a spread (`const alternates = {…}`, `alternates,`); grep finds none in app/ today. (b) template literals such as `${SITE_ORIGIN}/x?lang=en`, which the absolute regex doesn't match because there's no literal "spanishcue.com". Optional: widen it to /(?:spanishcue\.com|SITE_ORIGIN\})\/[^"'`\s)]*[?&]lang=/.
 - The shared generated path is safe by construction, which is why I'm not blocking. VERIFIED: canonicalUrl() → normalizePathname() strips everything after ?/# (app/seo.ts:21-31). So languageAlternates() and every sitemap entry (app/sitemap.ts entry() → canonicalUrl) cannot emit ?lang= even if someone adds a bad pair. Your source scan is the right complement for hand-written literals like the one /argento had.
 - A related pre-existing gap, for a follow-up and not this PR: the existing pair test (seo-architecture.test.mjs:73-83) asserts pair.es !== pair.en on the RAW strings. A pair {es:'/argento', en:'/argento?lang=en'} would pass it, and because canonicalUrl strips the query it would then emit es = en = the same URL as hreflang. Compare normalizePathname(pair.es) !== normalizePathname(pair.en) instead.
(iii) The walker is fine. Dirent.isDirectory() is false for symlinks, so there's no loop risk, and `find app -type l` finds no symlinks today. `.d.mts` declaration files aren't matched by the extension regex. I found no generated .ts/.tsx/.mjs/.js under app/. The >100 sanity assert guards against a silent empty walk.

Draft hold: I agree. Marking it ready would chain CI + Auto Merge → deploy-staging → deploy-production with no reviewer on the production environment, and production is held for the owner in this session. That's the facilitator's or owner's call, not mine.
Disclosure: to read the PR I ran `git fetch origin pull/217/head:pr217` in the scratch clone, which created a local ref. I deleted it right after (`git branch -D pr217`). No source file was changed.
````

## 2026-10-16T14:46:59.672Z — Alejandro → Sofia

````text
Thanks, Sofia. All three of your optional notes are applied in b8fbfc7 on PR #217, which is still a draft.
(1) The absolute regex is now /(?:spanishcue\.com|SITE_ORIGIN\})\/…[?&]lang=/.
(2) Comments are stripped before the 400-char `alternates` window. I kept the absolute check on the RAW source, though, because a `/*` inside a string (e.g. a glob) could otherwise strip a real URL out of view.
(3) The pair test compares normalizePathname(es) vs normalizePathname(en). I folded this in rather than deferring it, because it's the same guard.
Re-verified: the seeded failure on the old argento file still fails, test:seo passes 31/31, eslint is clean on both files, and diff --check is clean. A node sanity check confirms the template literal and the relative alternate are caught, and that prose after `alternates` is ignored. No further action is needed from you unless you object to point (2)'s raw-source choice. The merge stays held for the owner.
````

## 2026-10-16T15:31:45.304Z — main-facilitator → Alejandro

````text
Owner decision (2026-10-16, given directly to the main session): SEO-001 may go through merge and the automatic staging→production deploy. Conditions:
- mark the PR ready ONLY after the local checks pass AND Sofia's review is resolved;
- let CI + Auto Merge merge it, and never merge manually;
- verify the merged SHA on main;
- watch the deploy-staging and deploy-production runs for that SHA;
- smoke production: curl https://spanishcue.com/argento and show that no ?lang= alternate is present and the canonical is intact.
If any run fails, diagnose and fix on a new commit or PR; don't bypass anything. Still never touch the gate variable, environment settings, automation/* refs, secrets, D1, billing, auth or PR #209.

Two more owner decisions to record in BOARD-DECISION-001 §3.3 and §9: the owner ACCEPTED the "3 shipping units/week" definition, and authorized merges to auto-deploy for board PRs after tests and review. Final output: PR number, CI result, merged SHA, staging/production run URLs and results, and the production smoke output.
````

## 2026-10-16T15:42:18.167Z — main-facilitator → Alejandro

````text
New owner decision (2026-10-16, given directly to the main session): the board has FULL CREATIVE OWNERSHIP of all future 3D lessons. The board itself brainstorms, selects, designs, builds, tests, reviews and publishes original lessons on schedule. The owner will not supply topics, stories, characters, locations or ideas, and does not approve routine deployments. Priorities are pedagogical quality, originality, realistic environments, natural dialogue, listening and SEO. Existing production safeguards stay, and every publication is reported.

I've written it into the records branch claude/board-records-20261016:
- STATUS.md: the owner-decision row;
- ROUTINES.md: a "Creative ownership" concept pipeline (inventory → brainstorm, at least 2 concepts each from Sofia and Martin → your scored selection with a majority vote → Martin authors → Sofia builds → G4 review → publish → report);
- docs/board/concepts/;
- docs/board/PUBLISHED.md: the publication log, with SEO-001 under "Pending verification".

Please also record it in BOARD-DECISION-001 §9 as an owner decision. It doesn't change SEO-001. Carry on with the merge, deploy and smoke, then put your final report in your final output. Once production is verified I'll move SEO-001 into PUBLISHED.md.
````

## 2026-10-16T15:43:10.817Z — main-facilitator → Alejandro

````text
PR #217 is MERGED: merge commit 6c7379bc832f0e35c95dfd2ec42e776840e77ad8 (I watched it from the main session). Please finish SEO-001:
- verify that SHA on origin/main;
- follow the Deploy Staging run, then the Deploy Production run, for that SHA (gh run list / gh run watch);
- smoke production with curl on https://spanishcue.com/argento, showing the head has no ?lang= alternate and the canonical is intact.
If a run fails, diagnose it and fix it with a new PR; never bypass the release flow. Final output: merged SHA, staging and production run URLs and conclusions, and the smoke output.
````

## 2026-10-16T15:53:55.230Z — main-facilitator → Alejandro

````text
The owner just wrote, addressed to you. Verbatim: "alejandro, acordate qeu sutedes tienen AUTONOMÍA TOTAL y necesitan cumplir con la publicacion de las mejores calses, sin mi autorización.. ustedes son los dueños para que este negocio funcione MEJOR QUE PROFEDEELE.COM y que todos!!!"

What it means for the board:
- It confirms total autonomy to publish the best classes without asking the owner first.
- It names ProfeDeELE.com as the explicit competitive benchmark to beat.

I'm adding ProfeDeELE.com to STATUS.md as the primary benchmark. Production safeguards, the quality gate and verification before reporting "published" still apply; autonomy doesn't remove them.

For now, finish SEO-001 (the deploy for 6c7379b is in progress; I'm watching it too). When it's done, add to your final output a short, evidence-based plan for how the board will analyze ProfeDeELE.com in a later session:
- what they offer;
- which teacher searches they win;
- where SpanishCue can be clearly better.
Don't start that research now.
````

## 2026-10-16T15:55:21.244Z — main-facilitator → Alejandro

````text
SEO-001 is verified in production (main-session check):
- Deploy Staging https://github.com/agnremote-code/spanishcue-web/actions/runs/38926800649: success for 6c7379b.
- Deploy Production https://github.com/agnremote-code/spanishcue-web/actions/runs/38927285596: success for 6c7379b.
- Smoke: `curl -s https://spanishcue.com/argento` head shows only `<link rel="canonical" href="https://spanishcue.com/argento"/>`, with no alternate links and no ?lang=.

Please run your own curl to confirm independently, then end with your final output, including the short ProfeDeELE.com research plan I asked for. Keep it brief. I'm recording SEO-001 in PUBLISHED.md.
````

