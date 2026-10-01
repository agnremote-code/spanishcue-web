# Noche abierta · B1 · Conversación · Modo Play (ID 223)

Route `/noche-abierta`, PRO. New lesson built on the reconciled Quality v2 line (Waves 1–3 merged onto main `9309626`). ID 222 (the rejected Recadero) is not reused.

## Authoring brief (Quality Standard v2 §2)

| Decision | Record |
| --- | --- |
| Learner and context | B1, one-to-one or small group with a teacher. Rioplatense voseo, everyday register, no slang that blocks comprehension. Prerequisites: past tenses for narration, basic conditional. |
| Outcome | The learner narrates a night they actually chose, in order, with reasons, reacts to a change of plan, and answers a hypothetical (*Si la noche empezara de nuevo, ¿qué cambiarías?*). |
| Curricular boundary | Recycles narration (pretérito/imperfecto), proposals, comparison, justification, polite requests. Does not teach grammar explicitly; the hypothetical is exposure plus supported use, not a si-clause lesson. Close to 221 *La ciudad no duerme* in setting but different in structure: no single street, one mechanic per place, a city-wide change and a recap built from the learner's route. |
| Experience | A Saturday night in one neighbourhood drawn as an explorable isometric city. The city is the menu: eight places, any order, four or five visits are enough. |
| Progression | Llegada 4 min → exploración 24 min (4–5 encounters) → algo cambia 8 min → resumen 9 min = 45 min. Support is opt-in per screen (*Necesito ayuda*); the final stage keeps only starters and chunks. |
| Evidence | No right answers: every choice opens its own follow-up. The teacher listens for four qualitative criteria (relato conectado, razones, repreguntas, comprensible); no score. |
| Content contract | 8 places × 2–3 variants = 18 situations; each has situation, cue, 3 choices with distinct follow-ups, 2 prompts, twist, teacher role, 2 teacher follow-ups. 3 city events × 3 prompts. Final: 5 prompts + hypothetical + 4 criteria. |
| Architecture | New lesson module: `engine.mjs` (content + pure state transitions), `scene.mjs` (city geometry), `CityScene.tsx` (SVG renderer), `NocheAbierta.tsx`. State in `sessionStorage` only; no D1, no auth changes. The client module is private through the existing protected build (62 private modules). |
| Visual contract | Warm night palette, sodium street light, lit windows, awnings, rooftop string lights. Pseudo-3D: an isometric SVG drawn from data, with a camera push-in on the chosen place. It is not WebGL. Catalog thumbnail rendered from the same scene (`public/noche-abierta/preview.webp`, 1280×720). Mobile: the city pans sideways and encounters open as bottom sheets; a *Lugares* list is the non-spatial alternative. |
| Verification | See the gate table and the QA record below. |

Mechanics by place: Café (confusing message), Departamento (inspect the room), Esquina (someone recognises you), Taxi (compare routes), Restaurante (conflicting proposals), Plaza (two versions of an incident), Almacén 24 h (choose under constraints), Terraza (group decision). City events: rain, transport cut, lost phone; the default event is the one touching most places the learner completed, and the teacher can bring any of them forward.

Not used, by design: coins, XP, stars, respect meters, health, lives, mission scores, rankings, leaderboards, countdowns, delivery premise, neon/HUD styling, fake audio.

## Pre-publication gate (§8)

| Gate | Result | Evidence |
| --- | --- | --- |
| Pedagogy | pass | Choice → personal follow-up → prompts per encounter; change of plan tied to earlier decisions; oral recap of the learner's own route. |
| CEFR / PCIC | pass (self-review) | B1 demands: narrate, justify, propose, react to the unexpected, simple hypothesis. |
| Originality | pass | All 18 situations and 54 follow-ups authored for this lesson; test checks follow-ups are unique. |
| Visual design | pass | Desktop and mobile screenshots of entry, city, encounter, help, event and final were inspected. |
| Interaction | pass | Real handlers exercised in Chromium (choices, inspect, next, leave, list, teacher tools, event, final, reset). |
| Mobile | pass | 390×844 and 320×640: no document overflow, all targets ≥ 44 px, sheets scroll, city pans. |
| Accessibility | pass (partial evidence) | Keyboard: places are focusable buttons with names, Enter opens, focus moves to the heading, Escape returns focus to the place. Reduced-motion run has no errors. Contrast not measured with a tool. |
| Content correctness | pass (self-review) | Every variant rendered and read in context during QA. |
| Language / register | pass (self-review) | Voseo throughout; no native-speaker review recorded. |
| Audio | not applicable | The lesson has no audio. |
| State / routing | pass | Visited order, encounters, event and final persist in sessionStorage; reset restores the initial state; route resolves once; Recadero route stays absent. |
| Tests | pass | `tests/noche-abierta.test.mjs` (13 tests) plus the consolidated regression. |
| Thumbnail | pass | Rendered from the lesson scene, 16:9, 45 KB. |
| Teacher usability | pass | *Profe* toggle: plan with timings, role card, twist, variant switch, generic moves, event trigger, qualitative criteria, reset. |
| Duration | pass (heuristic) | 4 + 24 + 8 + 9 min; 4–5 encounters of 4–6 min. Not timed with a real class. |
| Final production | pass | Recap from actual visits and choices, five prompts plus the hypothetical, four observation criteria. |

## Browser QA record (2026-09-29)

Chromium (Playwright) on a local fixture that renders the real lesson component, because the production route correctly requires PRO access. Desktop 1440×900: entry, city, café/departamento/esquina/taxi encounters, help drawer, automatic city event after the fourth encounter, event prompts, final recap with teacher criteria, reset. Mobile 390×844 and 320×640: entry, *Lugares* list, restaurant encounter, help, final. No page or console errors. Fixed during QA: header overflow at 320 px, overlapping place labels, camera framing for tall buildings, labels dimmed while a place is open.

## 3D upgrade (2026-09-30)

The isometric SVG city is now the fallback. When the browser has WebGL, the lesson opens a real 3D street built with three.js. The learner walks an adult avatar in third person and walks into the places. Content, route, ID, level, category, PRO access and the 45-minute structure are unchanged. Asset provenance is recorded in `noche-abierta-3d-assets.md`.

| Area | Record |
| --- | --- |
| Places | Nine. The original eight plus *Auto roto* (`auto`, kind `roadside`): a car broken down on the avenue, with the hood open and hazard lights. It has 2 variants and the same contract as the other places. The rain event now also touches it. |
| Encounter rhythm | Situation → speak → decision → new information (*¿Cambia tu respuesta?*) → react → support → leave. The twist step (`TWIST_STEP`) comes before the prompts. |
| Interiors | The café, the apartment and the 24-hour store are real interiors, each with its own lighting, furniture and window views. The corner, restaurant, plaza, taxi, broken car and rooftop use cinematic street framing, with no separate room. |
| Taxi | Pressing F next to the taxi gets in, and the taxi drives down the avenue while the encounter runs. *Bajar del taxi* (F or Esc) gets out at the destination. |
| Controls | Movement: WASD or arrows, Shift to run. Actions: E or Enter to interact, F for the taxi, Esc to leave. View: V changes the camera, M toggles the minimap. Keys only work while the 3D view has focus and the learner is not typing. A contextual prompt (for example *E · ENTRAR Café Martina*) appears only within the target's radius, and nothing opens automatically. |
| Mobile | A virtual joystick and a large action button replace the keys. Quality is lower: reduced pixel ratio, no shadows, no ambient walkers. |
| Accessibility | A 2D/3D toggle, the *Lugares* list and the SVG map all work without WebGL. Reduced motion shortens the camera transitions. Focus returns to the 3D view after each encounter. |
| Teacher tools | Hidden by default: *Ver el giro*, change variant, *Dar por terminado*, trigger event, support and skip. |
| Loading | three.js and the 3D modules sit in a lazily imported, protected chunk: `World3D` is about 620 KB raw and 161 KB gzip. The lesson module itself is 37 KB. There are no binary assets. |

### Browser QA record (2026-09-30)

Tested in Chromium (Playwright with SwiftShader) on the same local fixture.

- **Desktop, 1440×900.** Every key was exercised:
  - movement: W, A, S, D, all four arrows, Shift+W;
  - actions: E, Enter, F, Esc;
  - view: V, M.
- **Places.** All nine were visited, followed by the city event and the final rooftop scene.
- **Collisions.** Walls, cars, the bus shelter, the restaurant table and standing people all block the avatar.
- **Reduced motion.** The same run passed with reduced motion enabled.
- **Mobile.** At 390×844 and 320×640, the joystick moves the avatar and the action button reads *ENTRAR*. There is no document overflow and every target is at least 44 px.
- **No WebGL.** The map view shows nine places and the broken-car encounter opens.
- **Errors.** No page or console errors in any run.
- **Frame rate.** Software rendering gives 1–6 FPS, so real-GPU frame rate was not measured. Adaptive quality lowers the resolution, then turns shadows off, when a device stays under 30 FPS.

## Second iteration (2026-10-01)

Same lesson, same ID 223, route, level, category, Modo Play collection and PRO gate. The concept stays (a Saturday night, a city to explore, one city-wide change, an oral recap); the content, the cards, the avatar and the 3D world were rebuilt.

**Story.** Tonight is Vale's 30th birthday: the previa is at her flat, the party ends on the rooftop terrace. Every place belongs to that one evening, so situations no longer contradict each other.

**Places and mechanics (ten, one game each).**

| Place | Mechanic | What the learner does |
| --- | --- | --- |
| Café Martina | Mensajes | Reads a chat thread, interprets it, a new message changes the reading, answers in role. |
| Departamento de Vale | Observar | Looks at at least two things in the room before guessing what happened; then learns the truth. |
| Restaurante El Toldo | Decisiones | Three situations at the table. Each option has its own consequence and its own follow-up question. |
| Plaza de la Fuente | Charla | Seven people with their own story (Pablo, Inés, Ana y Diego, Ramiro, Marta, Kenji, Sofía); a question and two follow-ups each, no options. |
| Bar La Persiana | Problemas sociales | Seven small conflicts: ask, convince, say no without sounding aggressive, reach an agreement. The other person pushes back once. |
| El auto con el capó abierto | Condiciones con «si» | One situation; rain, 4 % battery, a stranger offering a ride and the workshop closing pile up one by one. Optional grammar help (si + presente → presente / futuro / imperativo). |
| Museo del Pasado | Contar el pasado | Nine pieces; the learner narrates with imperfecto, pretérito and pluscuamperfecto, then a detail changes the story. Optional grammar help. No gap-filling. |
| Taxi | Comparar | Two routes or options with facts; the choice has consequences. |
| Almacén 24 horas | Describir | Explain an object without its name; the clerk brings the wrong thing; try again. |
| La terraza de las luces | Acuerdo | Everyone wants something different; find a plan; a change forces a new one. |

**Architecture.** Content is data (`content.mjs`); `activities.mjs` turns each activity type into beats (choose, result, talk, change, inspect, task) and is reusable for other worlds; `engine.mjs` keeps the lesson state (places, activities, progress per activity, the city change, the recap). `world3d.mjs` is the 3D world as data plus movement, camera, traffic and interaction logic; `hero3d.ts` is the avatar; `build3d.ts` builds the city and rooms; `World3D.tsx` renders.

**Cards.** One card system for every place: small place title and mechanic, the situation, the question as the main element, compact lettered options (A/B/C or 1–3 on the keyboard), the consequence as its own highlighted block, step marks, help folded behind a small *Necesito ayuda* (or *Ayuda y gramática*), a small *Volver a la calle* with its key, an X, and Esc. Cards size to their content up to a maximum height. Steps change with a short fade and slide; nothing moves under reduced motion. On phones the card is a bottom sheet.

**3D.** The avatar runs by default (6.6 m/s, Shift 9.2, Alt walks), accelerates and slows down, turns smoothly toward the input relative to the camera, and the camera drifts back behind him while he runs. The museum and the bar are rooms you walk around; each piece or person has its own prompt (*MIRAR*, *HABLAR*, *AYUDAR*, *ATENDER*…). The plaza has seven people to talk to. Cars drive along the avenue and stop for the learner.

**Progress.** *x / 10 lugares* with dots in the header; done places get a lantern in 3D and a mark in the list. Exploration stays free and non-linear.
