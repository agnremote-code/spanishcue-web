---
name: grammar-live-class-230
description: Redesigned grammar class prototype (ID 230 «Desde, desde hace y hace») — architecture, fixed 7-section sequence, rules for migrating other grammar classes
metadata:
  type: project
  modified: 2026-10-13T12:07:45.973Z
---

Shipped 2026-10-13 via PR #171 (main 46a4f3d). Ale approved it 16:52Z; ALL 57 grammar classes migrated via PR #174 (main 9672c4b): lessons in `live/lessons/g<ID>.ts`, registry maps every grammar id. Classes 40/41/42 keep their old studios (Noun/Adjective/ArticleScene) as an Entender «Taller» step, passed from GrammarPage as server `scenes` props (keeps premium out of the shared chunk). 43's observatory scene was dropped. /autoestudio/clase/<id> preview still renders the OLD Classroom (not migrated). English for A1–A2 only (manifest docs/audits/grammar-live-english-all-20261013.json); g3 voseo and g142 transcript are neutral-Spanish exemptions.

- Route /gramatica/desde-hace-duracion → GrammarPage → `getLiveLesson(230)` → `app/grammar-classroom/live/LiveClassroom.tsx`. Lesson data: `live/lessons/desde-hace.ts`; registry `live/registry.ts`.
- Fixed sequence (Ale's brief 2026-10-13 11:25Z): 01 Entender, 02 Explorar, 03 Practicar, 04 Escuchar, 05 Conversar, 06 Escribir, 07 Cerrar. Always opens on Entender at top (no hash, manual scrollRestoration); «Continuar donde quedé» offered, never automatic. Sidebar is the only navigation (mobile: sticky bar opening the same list).
- «Con profesor / Por mi cuenta» selector changes only guidance (guide blocks, teacher notes, reveal-all buttons, follow-ups shown at once vs one by one).
- Persistence: localStorage `spanishcue:gramatica:230:v1` {values, results(first-try kept), pos} via `live/store.tsx`; sidebar progress = solved/targets.
- Blocks: explore (tappable marks), choice w/ optionNotes, classify, fix, chat-fill, build, rewrite, listen (Listening AudioDeck, questions unlock on end), talk cards (+ browser dictation only if supported), write + rule-based `live/writing.ts`, review of real mistakes, restart. Visuals: timeline (`time-compare`), 3D barrio mission (opt-in, reuses duration/world.ts).
- Tests: tests/grammar-live.test.mjs (11). English translations need entries in docs/audits/grammar-live-english-additions-20261013.json; preterite «Viví» lines in neutral-spanish exemptions.
- Limits told to Ale: no new mascot poses; listening = the single real mp3; writing review is rule-based.

See [[spanishcue-lesson-style]].
