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
