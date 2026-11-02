---
name: noche-abierta-a0-voces
description: Noche abierta A0 level (bilingual), own A2 cards, bilingual words A0–A2 and browser-voice NPC lines (thread 2026-10-14, branch claude/noche-abierta-a0-voces)
metadata:
  type: project
  modified: 2026-10-14T16:48:07.266Z
---

Ale asked on 2026-10-14 16:23Z (from the «Clase inicial A0» thread) for an A0 level in Noche abierta (ID 223) that is literally A0 and fully bilingual, level realignment, bilingual new words at A0–A2, and NPCs that speak on their own. Thread «Noche abierta: nivel A0 y voces» (cmsg_01Gr5R4j3t2Yet65UcmhcVhAGkWZNQuUKGjkr7UhN9Pv8L), Opus. LIVE 2026-10-14 ~17:45Z: PR #191 merged (main bf75f1e), staging + production deploy green; branch claude/noche-abierta-a0-voces.

**How A0 is built** (all under app/noche-abierta/):
- Bilingual strings are one string `es + "\n" + en` (bilingual.mjs: `bi`, `esOf`, `enOf`); content files keep `{ es, en }` pairs so the English-copy guard sees the `en` keys. `Bi.tsx` renders the English under the Spanish (`.na-en`, lang="en").
- Places: `pedagogy-a0.mjs` (40 rows: situation, prompt, 3 options in band-A order, personal question, 4 words). `pedagogy-a2.mjs` gives A2 its own situations/options (before, A1 and A2 showed the same card; B1/B2 and C1/C2 still share). `pedagogyFor` handles A0/A2; `pedagogySupportFor` adds bilingual `help.vocab` (6 words per place) at A0–A2.
- Arrival/events/final: `levels/a0.mjs` patch. LEVELS now 7 (levels.mjs, engine.d.mts Level type).
- Street: `street/a0.mjs` = 20 short bilingual scenes (2 moments, 2–3 answers, reuse the full scene's `ends` ids with their own bilingual end text, `words`, `speak`). At A0 only those circles open (`isAvailable/openEncounter(…, level)`, `open.a0 = true`, `choicesFor(…, a0)`); the carried object stays out of A0 scenes; ambient Q reactions have an A0 bilingual set.
- Listening mode («Escucha»/ModeSwitch) is hidden at A0 (no A0 listening set for noche).
- Voices: `voice.ts` uses window.speechSynthesis (Spanish voices only, «quoted» parts in the character's voice by cast `body` m/f, narration neutral, rate 0.78 at A0). Spoken: street line + reply + ending, place situation, city event text. Never prompts/personal questions. HUD button «Voces» (localStorage `spanishcue:noche-abierta:voces`). Not tested in a real browser.
- English guard manifest: docs/audits/noche-abierta-a0-english-additions-20261014.json (765 literals) registered in scripts/check-english-copy.mjs; approved by Ale 16:55Z (cmsg_01Gr5R4j3t2Yet65UcmhcVhADwvzg9kA9GinuWu3D7FSfe).
- tests/level-cleanup.test.mjs allowlists lesson 223 for A0.
