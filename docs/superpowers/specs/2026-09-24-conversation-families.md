You are working on the production repository:

`agnremote-code/spanishcue-web`

## MISSION

Perform a major architectural refactor of the SPANISHCUE **CONVERSATION lesson system only**.

The objective is to stop treating every CEFR level as a completely separate lesson and instead introduce a scalable system of:

**Conversation Lesson Family**
→ shared visual world / mechanics / assets / concept
→ multiple genuinely different CEFR level variants
→ one premium catalog entry
→ teacher can instantly switch between available levels inside the lesson.

This is a real implementation task.

Do NOT only write a proposal.

Inspect the current canonical GitHub `main`, understand the existing lesson architecture, implement the new system, migrate the existing conversation catalog where appropriate, run tests, and leave the repository in a production-ready state.

---

# 0. START FROM CURRENT MAIN

Start from the CURRENT canonical GitHub `main`.

Do not assume an old SHA.

Before editing:

1. inspect the repository;
2. identify how lessons, categories, metadata, previews, access control, routing, assets and `/resources` currently work;
3. identify all lessons categorized as Conversation;
4. identify collections/subcategories such as MODO PLAY, Países, etc.;
5. identify any current lessons that are already related versions of the same underlying concept.

Do not overwrite or remove unrelated recent work.

---

# 1. ABSOLUTE SCOPE

This refactor applies ONLY to:

**CONVERSACIÓN**

including conversational lessons that may live inside collections such as:

- MODO PLAY
- Países
- general conversation collections
- other existing conversation-based collections

DO NOT redesign or migrate:

- Gramática
- Escucha / Listening
- Fonética
- other non-conversation categories

Those systems must continue working exactly as they do now.

---

# 2. CORE PRODUCT IDEA

Today, SPANISHCUE tends to treat something like:

- Taxi A1
- Taxi A2
- Taxi B1
- Taxi B2

as independent lessons.

That is inefficient.

The new model should be:

# TAXI POR LA CIUDAD

Conversation Lesson Family

Shared once:

- visual world
- interactive map
- taxi
- characters
- locations
- artwork
- components
- animation
- game mechanics
- overall scenario

Then:

- A1 variant
- A2 variant
- B1 variant
- B2 variant

Each level uses the same premium experience, but the communicative task, prompts, interaction, challenge and expected language evolve substantially.

The teacher must feel that they are selecting the pedagogically appropriate version of the experience, NOT merely selecting easier or harder wording.

---

# 3. IMPORTANT: THIS MUST NOT FEEL LIKE DUPLICATED AI CONTENT

The worst possible implementation would be:

A1:
“¿Te gusta Buenos Aires?”

A2:
“¿Por qué te gusta Buenos Aires?”

B1:
“Explica por qué te gusta Buenos Aires.”

B2:
“Argumenta detalladamente por qué te gusta Buenos Aires.”

That is NOT the system we want.

Difficulty must change primarily through:

- communicative function;
- cognitive demand;
- degree of spontaneity;
- amount of language required;
- interaction pattern;
- negotiation;
- storytelling;
- justification;
- hypothesis;
- problem solving;
- sociocultural interpretation;
- lexical range;
- discourse complexity.

NOT simply by making sentences longer.

---

# 4. CEFR / PCIC PEDAGOGICAL PROGRESSION

Every variant must have clear CEFR-compatible communicative aims and be consistent with the PCIC / Instituto Cervantes progression.

Use this general philosophy.

## A1

Focus on:

- recognition
- naming
- very short interaction
- personal information
- preferences
- basic wants and needs
- choosing between options
- simple locations
- simple descriptions
- formulaic interaction
- short answers that can naturally expand

Examples:

- ¿Adónde quieres ir?
- ¿Qué lugar prefieres?
- ¿Dónde está...?
- Quiero ir a...
- Necesito...
- Me gusta / No me gusta...
- ¿A la derecha o a la izquierda?

Do not turn A1 into grammar drills.

It is still a conversation lesson.

---

## A2

Add:

- simple explanations
- experiences
- comparisons
- simple sequencing
- practical problems
- giving basic reasons
- describing situations
- making plans
- choosing between alternatives
- basic directions
- expressing intention

Example evolution:

The taxi takes the wrong street.

The student must explain:

- where they want to go;
- what the problem is;
- which route seems better;
- what they want the driver to do.

---

## B1

Add:

- storytelling
- justification
- unexpected situations
- problem solving
- recommendations
- explaining advantages/disadvantages
- reacting spontaneously
- hypothetical but accessible situations
- cultural observations
- negotiation

Example:

There is traffic and the student has 30 minutes before a flight.

They need to negotiate a solution.

---

## B2

Add:

- argumentation
- nuanced comparison
- defending choices
- negotiation
- trade-offs
- social issues
- cultural discussion
- interpreting motivations
- complex scenarios
- counterarguments

Example:

Compare taxi, public transportation and rideshare services and defend the best option for different travelers.

Do NOT label one answer as objectively correct.

---

## C1 / C2

Only create these levels when the lesson concept genuinely supports them.

Do not mechanically force every family to A1–C2.

Possible features:

- ambiguity
- sociocultural analysis
- subtle interpretation
- rhetorical positioning
- debate
- discourse strategy
- competing perspectives
- nuanced hypothetical situations

---

# 5. NOT EVERY FAMILY NEEDS EVERY LEVEL

This is important.

Do NOT automatically give every class:

A1 A2 B1 B2 C1 C2

Instead define:

`availableLevels`

based on pedagogical suitability.

Examples:

Taxi por la ciudad:

A1, A2, B1, B2

A complex current-affairs discussion:

B1, B2, C1

A very simple visual identification game:

A1, A2

The catalog must communicate this clearly.

---

# 6. NEW DATA ARCHITECTURE

Create a clean, reusable, data-driven architecture.

Adapt naming to the current repository conventions, but conceptually introduce something equivalent to:

```ts
type ConversationLessonFamily = {
  id: string
  slug: string
  title: string

  category: "conversation"

  collection?: string
  mode?: string

  concept: string

  availableLevels: CEFRLevel[]
  defaultLevel: CEFRLevel

  preview: LessonFamilyPreview

  visualWorld: VisualWorldDefinition

  sharedAssets: SharedAssetDefinition[]

  sharedScenes?: SceneDefinition[]

  variants: Partial<Record<CEFRLevel, ConversationLevelVariant>>
}

```

And:

```ts
type ConversationLevelVariant = {
  level: CEFRLevel

  communicativeObjectives: string[]
  pcicFocus?: string[]
  expectedFunctions: string[]

  intro?: VariantContent

  activities: ActivityDefinition[]

  prompts: PromptDefinition[]

  followUps?: PromptDefinition[]

  challenge?: ChallengeDefinition

  vocabularySupport?: VocabularySupport

  teacherNotes?: TeacherNotes

  closingConversation: ClosingConversationDefinition
}

```

The actual implementation should fit the existing project.

Do NOT introduce unnecessary abstraction if the repository already has good primitives.

But there MUST be a clean separation between:

### SHARED EXPERIENCE

and

### LEVEL-SPECIFIC PEDAGOGICAL CONTENT

---

# 7. SHARED EXPERIENCE

The following should normally belong to the family, not each level:

- major visual assets
- background world
- board
- map
- places
- characters
- overall mechanics
- reusable animations
- reusable UI
- location structure
- shared cultural context
- reusable scene components

This is where the major reduction in production time comes from.

---

# 8. LEVEL VARIANT

The variant should primarily contain lightweight structured content:

- prompts
- tasks
- interaction instructions
- follow-up questions
- choices
- challenges
- expected communicative functions
- optional scaffolding
- teacher cues
- vocabulary support
- closing conversation

Avoid duplicating huge JSX/TSX components for every level.

The lesson renderer should receive the family + selected variant.

---

# 9. CATALOG DESIGN

This refactor must dramatically improve the catalog.

DO NOT show four visually duplicated cards such as:

Taxi A1
Taxi A2
Taxi B1
Taxi B2

Instead show ONE premium family card:

**Taxi por la ciudad**

Conversación · Modo Play

**Disponible en A1 · A2 · B1 · B2**

or, when levels are contiguous and this is visually cleaner:

**Disponible de A1 a B2**

The design must remain elegant.

Do not overcrowd cards.

Use small premium level badges/chips.

Examples:

`A1` `A2` `B1` `B2`

or:

`A1–B2`

depending on what best fits the current visual language.

---

# 10. FILTER BEHAVIOR

Existing level filters must continue to make sense.

Example:

Teacher selects:

`A2`

The catalog should show all families that contain an A2 variant.

If the teacher opens a family from an A2-filtered catalog:

the lesson should automatically open in **A2**.

Do not make the teacher select A2 twice.

Similarly:

filter B1
→ family supports B1
→ opening lesson starts at B1.

---

# 11. LESSON LEVEL SWITCHER

Every multi-level Conversation Lesson Family needs a beautiful, compact level selector.

Example:

**Nivel**

`A1` `A2` `B1` `B2`

or a premium compact dropdown:

**Nivel: A2 ▾**

Choose the implementation that best fits the current design system.

Requirements:

- visually clear;
- premium;
- responsive;
- not childish;
- not bulky;
- accessible;
- keyboard usable where appropriate;
- fast;
- no full page reload required unless current architecture makes that necessary;
- teacher can change levels during class.

Switching:

A1 → A2 → B1

must keep the same shared visual world but immediately load that level's pedagogical experience.

---

# 12. NO UNNECESSARY POPUP FRICTION

Do NOT force a level-selection modal every time the user opens a lesson.

Use context intelligently.

Priority:

1. level selected in URL / navigation state;
2. current catalog filter;
3. family defaultLevel.

A lightweight first-open selector may be used only if there is truly no meaningful default.

Do not introduce friction.

---

# 13. URL / STATE DESIGN

Implement a stable way to represent the selected level.

For example:

`/resources/taxi-por-la-ciudad?level=A2`

or the equivalent best suited to the current router.

Requirements:

- direct links work;
- browser back/forward works;
- refresh preserves selected level;
- invalid levels fall back safely;
- URLs remain shareable;
- a user cannot request a level that the family does not support.

---

# 14. SEO AND LEGACY URL SAFETY

SPANISHCUE already has important SEO/resource work.

DO NOT damage it.

Preserve:

- `/resources`
- existing sitemap behavior
- existing public previews
- structured metadata
- social metadata
- current SEO pages
- canonical URLs where appropriate
- existing indexed content
- search engine accessibility that already exists

If multiple existing lesson URLs are consolidated into one family:

DO NOT simply delete the old URLs.

Create an appropriate compatibility strategy such as:

- redirects;
- legacy aliases;
- canonical mappings;
- route compatibility.

Preserve link equity and avoid creating large numbers of 404s.

Do not create duplicate SEO problems by indexing many identical query-parameter versions.

Use proper canonical behavior.

---

# 15. ACCESS CONTROL / PRO SECURITY

This refactor must NOT weaken access control.

Do not make PRO lesson content anonymously accessible.

Preserve the current distinction between:

- public preview / SEO material;
- free lessons;
- PRO lesson experience.

Do not modify billing logic unless technically necessary for existing route compatibility.

Do NOT alter:

- Paddle products
- PayPal products
- payment verification
- subscription state
- billing secrets
- Firebase secrets
- D1 production data
- authentication security

The level switcher must never bypass entitlement checks.

If a family is PRO:

all protected variants remain PRO.

---

# 16. CURRENT FREE LESSONS

Preserve current free lesson behavior.

If a current free Conversation lesson becomes a family:

its intended free access should continue working.

Do not accidentally make unrelated PRO families free.

---

# 17. PREVIEWS MUST NOT LOOK GENERIC

Even though one family shares a visual world, level variants should feel pedagogically distinctive.

A family may optionally define level-specific preview copy such as:

### TAXI — A1

“¿Adónde quieres ir?”

### TAXI — A2

“El conductor tomó el camino equivocado. Explícale cómo llegar.”

### TAXI — B1

“Tienes 30 minutos antes de tu vuelo. Negocia la mejor ruta.”

### TAXI — B2

“Taxi, transporte público o app: defiende la mejor opción según el viajero.”

These can reuse the same world while highlighting different situations.

Do not require completely new artwork for every variant.

Reuse assets intelligently.

---

# 18. OPTIONAL LEVEL PREVIEW VARIANT

Support something equivalent to:

```ts
previewByLevel?: {
  A1?: {
    hook: string
    image?: string
  }
  A2?: {
    hook: string
    image?: string
  }
}

```

But do not make it mandatory.

If a level-specific preview image does not exist, gracefully reuse the family image.

This prevents unnecessary asset generation.

---

# 19. VISUAL QUALITY

SPANISHCUE Conversation lessons must continue feeling like premium teaching products.

Visual direction:

- modern
- clean
- editorial
- polished
- elegant
- dynamic
- highly visual
- not childish
- not futuristic by default
- not obviously AI-generated

For MODO PLAY:

retain the feeling of:

- interactive miniature world
- premium board game
- interactive diorama
- polished digital teaching experience

Do not flatten existing strong designs into generic cards or forms.

---

# 20. MIGRATE THE CURRENT CONVERSATION CATALOG

After building the architecture, audit EVERY current conversation lesson.

Create an inventory.

For each lesson determine whether it is:

### A. already part of an obvious family

Example:

same concept exists in A1 / A2 / B1.

Consolidate them.

Preserve their strongest existing content.

Do not throw good lesson content away.

---

### B. a unique lesson that could support several levels

Convert it into a family using the existing lesson as the seed variant.

Add additional variants only when pedagogically appropriate.

---

### C. a lesson whose concept only makes sense at one level

Still make it compatible with the family architecture, but:

`availableLevels: ["B2"]`

Do not fabricate pointless variants.

---

# 21. WHEN GENERATING NEW VARIANTS DURING MIGRATION

Be conservative.

The purpose of this system is to save production cost, not create low-quality filler.

When a missing variant is genuinely valuable:

reuse:

- existing visual world
- components
- scenes
- interactions

and create ONLY the pedagogical content required for that level.

Do not rebuild the entire class.

---

# 22. QUALITY RULE FOR LEVEL ADAPTATION

Before accepting a variant, ask:

“If I removed the CEFR badge, would a teacher still notice that this experience demands a different kind of language?”

If the answer is no:

the adaptation is too superficial.

Rewrite it.

---

# 23. 45-MINUTE LESSON TARGET

Conversation variants should generally support approximately:

**45 minutes of teaching**

without forcing the teacher to use every prompt.

Structure enough material for natural expansion.

Avoid:

- hundreds of questions;
- repetitive question banks;
- endless scrolling.

Prefer:

- scenes;
- decisions;
- follow-ups;
- branching discussion;
- changing situations;
- progressive challenge.

---

# 24. CONVERSATION FIRST

These are not worksheets.

Do not convert them into:

- fill-in-the-blank exercises;
- grammar quizzes;
- vocabulary memorization pages;
- generic flashcards.

Everything should ultimately push toward oral interaction.

A student should speak frequently.

---

# 25. LANGUAGE POLICY

The lesson itself should be in Spanish.

Do not add unnecessary English translations to conversation activities.

Use natural, understandable Spanish appropriate to the selected CEFR level.

Scaffolding should be visual and contextual whenever possible.

---

# 26. CLOSING CONVERSATION

Every level variant should end with a natural open-ended conversation section.

This should integrate the lesson rather than feel like a test.

Examples:

A1:
simple personal questions.

A2:
short reflection / comparison.

B1:
personal experience + hypothetical situation.

B2:
discussion / argument / recommendation.

---

# 27. MODO PLAY

MODO PLAY must become one of the strongest examples of this architecture.

A MODO PLAY lesson should be able to define:

`shared game world`

plus:

`level-specific missions`

Example:

Taxi por la ciudad.

Shared:

- taxi
- city
- route map
- locations
- characters

A1 mission:

reach basic destinations and communicate simple needs.

A2 mission:

give directions and solve small misunderstandings.

B1 mission:

solve delays, route changes and unexpected situations.

B2 mission:

negotiate transportation decisions and discuss urban mobility.

Same world.

Different communicative game.

---

# 28. PAÍSES COLLECTION

Use the same family principle for conversational country lessons where appropriate.

Example:

**Japón**

Shared world:

- Tokyo
- Kyoto
- Osaka
- transport
- food
- daily-life scenes
- cultural references

Possible variants:

A1:
identify places, preferences, food, simple travel choices.

A2:
compare places, describe travel plans, explain simple preferences.

B1:
discuss experiences, cultural differences, adaptation.

B2:
discuss social norms, travel choices, intercultural situations.

C1:
only if the concept contains material suitable for deeper sociocultural analysis.

Do not make six visually duplicated Japan cards.

---

# 29. AUTHORING EXPERIENCE / FUTURE SCALABILITY

The codebase should make creating a new family significantly cheaper.

A developer/content agent should be able to:

1. create one visual family;
2. reuse it;
3. add structured level variants.

Not copy an entire lesson component.

Create clear conventions.

If appropriate, add:

- helper functions;
- schema validators;
- type guards;
- content manifests;
- reusable renderers.

Avoid overengineering.

---

# 30. OPTIONAL INTERNAL AUTHORING SCRIPT

If useful and consistent with the repository, create a lightweight development helper such as:

`create-conversation-variant`

or equivalent.

Its purpose should be to scaffold:

A1 / A2 / B1 / etc.

from an existing family.

It should create structured placeholders/content files.

It must NOT duplicate the entire UI implementation.

Do NOT add paid runtime AI dependencies.

Do NOT expose API keys.

This is optional.

Only implement if genuinely useful.

---

# 31. NO RUNTIME AI REQUIREMENT

The product must not depend on generating lesson variants dynamically with an AI API during class.

Variants should be authored/stored deterministically.

Teachers need instant, reliable lesson loading.

No hallucinated lesson content at runtime.

---

# 32. TYPES AND VALIDATION

Add enough validation to prevent broken families.

Examples:

- every `availableLevel` must have a corresponding variant;
- `defaultLevel` must be included in `availableLevels`;
- duplicate levels invalid;
- requested level must exist;
- lesson family must have a title/slug/preview;
- invalid variants should fail clearly during development/build where possible.

---

# 33. BACKWARD COMPATIBILITY

Existing lesson rendering APIs/components may be used by other categories.

Do not destructively refactor shared infrastructure if unnecessary.

Prefer:

new reusable conversation-family layer

over:

rewriting every lesson architecture in the website.

The migration should be targeted.

---

# 34. PERFORMANCE

Do not load all heavy assets for every level unnecessarily.

Shared assets should be cached/reused.

Changing the level should primarily change lightweight content state.

Avoid making the lesson noticeably slower.

Do not multiply bundles by duplicating whole lesson components.

---

# 35. MOBILE / TABLET / DESKTOP

Test the new catalog cards and level selector at:

- desktop
- tablet
- mobile

Cards must remain readable.

Level badges must not wrap into ugly multi-line clutter.

The lesson selector must remain usable while screen sharing or teaching from a laptop.

---

# 36. ACCESSIBILITY

Maintain or improve:

- semantic controls
- keyboard navigation
- focus states
- contrast
- readable labels
- ARIA where necessary

Do not encode CEFR level availability only through color.

---

# 37. ANALYTICS COMPATIBILITY

If existing analytics track lesson opens:

preserve them.

If simple and consistent with current architecture, enrich the event with:

- family slug
- selected level

Example conceptually:

`lesson_opened`
`family: taxi-por-la-ciudad`
`level: A2`

Do not introduce a brand new analytics provider.

---

# 38. SEARCH

Internal lesson search should search the FAMILY.

Searching:

“taxi”

should return one family.

Filtering A1 should show it if A1 exists.

Filtering B2 should show it if B2 exists.

Search results should not duplicate the same family four times.

---

# 39. SORTING / COUNTS

Any lesson counts displayed in the UI should clearly distinguish between:

- families
- level variants

Do not inflate public catalog counts artificially by counting each variant as an independent premium lesson unless the existing wording explicitly means variants.

Prefer transparent product representation.

---

# 40. CATALOG COPY

Use concise UI copy.

Good:

**Disponible en A1 · A2 · B1 · B2**

or:

**Disponible de A1 a B2**

Potential secondary copy:

**4 niveles**

Avoid verbose explanatory text on every card.

The user should understand the feature visually.

---

# 41. LESSON HEADER

A multi-level lesson should make level availability obvious without dominating the screen.

Concept:

**Taxi por la ciudad**

`Conversación` `Modo Play`

Nivel:
`A1 A2 B1 B2`

Then the experience.

Do not make the header excessively tall.

---

# 42. TRANSITIONS

If existing lesson design supports animation, changing level may use a subtle transition.

Examples:

- fade;
- card swap;
- short content transition.

No flashy effects.

No futuristic UI.

---

# 43. PRESERVE STRONG EXISTING LESSONS

Do not unnecessarily redesign existing premium visuals.

The objective is:

**architectural reuse + clearer level system**

not:

“replace every current lesson design.”

If a lesson already looks excellent, retain its experience.

Refactor underneath.

---

# 44. CONTENT DEDUPLICATION

During migration, identify obvious repeated:

- questions
- prompts
- visual components
- scene definitions
- country metadata
- interaction wrappers

Centralize only when doing so improves maintainability.

Do not build a giant abstract universal engine that makes individual lessons impossible to customize.

SPANISHCUE still needs creative variation.

The system must support both:

**reusability**

and

**lesson-specific personality.**

---

# 45. DO NOT TURN EVERYTHING INTO THE SAME TEMPLATE

This is critical.

The architecture should make content reusable.

The PRODUCT must still feel varied.

Taxi can behave like a map journey.

Red Flag o No can behave like binary choices.

A country lesson can behave like travel exploration.

An island game can behave like survival decisions.

A mystery can behave like clue discovery.

Do not flatten all Conversation lessons into one generic question carousel.

---

# 46. FAMILY ≠ TEMPLATE

A family is a shared concept/world across CEFR variants.

Different families may use completely different interaction engines.

Maintain that distinction.

---

# 47. TESTING

Before considering implementation complete, run all relevant:

- install/build
- TypeScript checks
- lint
- unit tests
- route tests
- production build
- existing repository test suite

Also manually/synthetically validate:

### Catalog

- one family card instead of duplicate cards;
- level badges correct;
- filter by level works;
- search works;
- free/PRO badge remains correct.

### Lesson

- default level loads;
- selected URL level loads;
- level change works;
- refresh preserves level;
- invalid level safely falls back;
- protected variants remain protected;
- no console errors.

### Legacy

- old URLs do not become accidental 404s;
- SEO routes still work;
- sitemap still works;
- `/resources` still loads.

---

# 48. MIGRATION REPORT

At the end, provide a concise report containing:

1. architecture introduced;
2. files/components created;
3. conversation lessons migrated;
4. lesson families created;
5. which families support which levels;
6. legacy URLs preserved/redirected;
7. tests run;
8. any conversation lessons intentionally left single-level and why;
9. any remaining opportunities for future level variants.

Do not produce a giant essay.

Use tables where useful.

---

# 49. REPOSITORY SAFETY

Do not modify unrelated systems.

Specifically preserve all current work involving:

- hero
- SEO/resources
- social preview
- authentication persistence
- account creation flow
- legal pages
- Paddle
- PayPal
- billing
- production secrets
- D1
- Firebase
- email verification

Do not revert recent changes.

Do not use an old branch as source of truth.

Current canonical `main` is source of truth.

---

# 50. GIT WORKFLOW

Create a dedicated branch.

Make coherent commits.

Run all checks.

Open a PR with a useful summary.

Do not deploy production from this task.

Do not alter infrastructure/secrets.

The PR must be deploy-ready.

If CI finds issues, fix them before considering the task complete.

Do not stop after merely opening the PR if checks are failing.

---

# 51. DECISION-MAKING RULE

Do not stop to ask me minor implementation questions.

Inspect the repository and make the safest, most maintainable decision consistent with the requirements above.

If current architecture differs from assumptions in this prompt:

adapt the implementation rather than forcing the exact pseudocode.

The product behavior is authoritative, not the suggested type names.

---

# 52. PRIORITY ORDER

When trade-offs exist, prioritize:

1. pedagogical quality;
2. preservation of existing production functionality;
3. teacher UX;
4. reuse of visual/code assets;
5. maintainability;
6. performance;
7. reducing future lesson-production cost;
8. avoiding duplicated-looking catalog content.

---

# 53. DEFINITION OF DONE

This task is NOT complete merely because a `ConversationLessonFamily` interface exists.

It is complete when a real teacher can:

1. open `/resources`;
2. see a Conversation lesson represented once;
3. immediately understand that it supports multiple CEFR levels;
4. filter the catalog by A1/A2/B1/etc.;
5. open the lesson at the appropriate selected level;
6. teach it;
7. switch from A2 to B1 during class;
8. see genuinely different pedagogical tasks;
9. remain inside the same premium visual experience;
10. access only content their account is entitled to.

And when a future developer/content agent can create:

one visual conversation experience

-

several lightweight CEFR variants

without rebuilding the entire lesson multiple times.

---

# FINAL PRODUCT PRINCIPLE

SPANISHCUE should stop thinking:

**“one level = one whole new lesson.”**

For Conversation content, the new default mental model should become:

**ONE GREAT EXPERIENCE**
**MULTIPLE PEDAGOGICALLY DISTINCT LEVELS.**

Reuse the expensive part.

Differentiate the educational part.

Make the catalog look richer, cleaner and more premium, not repetitive.

Implement it now.