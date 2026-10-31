---
name: clase-inicial-a0
description: Clase inicial A0 (ID 239, /gramatica/clase-inicial): bilingual first class for zero-level students with Argentine grandparents story; live-only grammar class mechanics (no legacy context), grammar-live audio workflow
metadata:
  type: project
  modified: 2026-10-14T16:50:32.871Z
---

Ale asked on 2026-10-14 16:20Z for a first class («Clase inicial») for brand-new students, A0 trial, bilingual, same live grammar format, grandparents-from-Argentina story, listening identical to the existing pattern, plus a link at the end to Noche abierta A0. Thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAU6V25WkX4bQmyQe5i7KTga, branch claude/clase-inicial-a0-20261014. Report + screenshots: /mnt/project-files/gramatica/clase-inicial-a0/INFORME.md.

- Lesson 239, level 'A0', `app/grammar-classroom/live/lessons/g239.ts`, catalog addition in `app/grammar-classroom/catalog.ts` (slug clase-inicial, curriculumOrder 50, grammarTopic ser-estar). PRO like all grammar classes. Generic learner name «Alex»; grandparents say vos, learner uses tú.
- First **live-only** grammar class: `GrammarPage` renders `getLiveLesson(id)` when there is no legacy classroom context (`new-lessons.json`). The legacy audio manifest/test (57 clips, grammar-classroom prefix) is untouched.
- New live blocks: `link` (next step card) and `write.checks/warnings` (per-lesson regex writing review via `reviewWithRules`). A0 opens with the EN help on (`LiveClassroom`), level colour A0 added.
- Audio for live-only classes: `app/grammar-classroom/live/audio/clips.json` → workflow `.github/workflows/grammar-live-audio.yml` (push to claude/clase-inicial-* or claude/gramatica-en-vivo-*) runs `scripts/generate-grammar-live-audio.py` and commits `public/audio/grammar-live/<id>.mp3` + `live/audio/manifest.json`. Voice es-AR-TomasNeural (the grandfather; Ale rejected the young-sounding abuela voice), rate -14%. Prefix grammar-live is private automatically.
- Catalog guards: new lesson registered in `tests/helpers/catalog-additions.mjs` (id 239, exact inverse edits for catalog.ts and the count tests: grammar 58, lessons 131, teacher-access 58, rendered-html 58 clases / 109 resultados / 124 clases totales). `level-cleanup` authored list extended. Do NOT add A0 to `levelOrder` in lesson-catalog.ts: it shifts every grammar curriculumSequence and breaks the historical ledger hashes (A0 sorts last via `?? 99`, harmless).
- Pre-existing failures on main (not ours): tests/a1-syntax-lessons (2), tests/wave3-preservation (3), wave3-grammar-interaction test 10.
- Neutral-Spanish guard: 44 exact exemptions added (regional-pedagogy / authentic-transcript). English guard: Ale approved («apruebo todo», 2026-10-14 16:55Z); manifest docs/audits/grammar-live-a0-english-additions-20261014.json registered. PR #190 merged (main dc0a3d6), LIVE in production 2026-10-14 17:20Z (staging + production smoke green).
- Visual QA trick: bundle `LiveClassroom` + lesson with esbuild (alias next/link to a stub) into a static page and screenshot with Playwright (`/opt/pw-browsers/chromium`); the built Worker 302s anonymous visitors so it cannot be used for owner screenshots.

- 2026-10-15 02:14Z Ale's rules, applied in PR #193 (main ece1420, LIVE ~02:50Z): (1) teacher-mode guide lines are READ BY THE STUDENT on the shared screen, so never «pide al alumno que…»; write descriptive «Tú lees… y tu alumno repite» (applied to all 58 live classes, 126 strings; `self:` mode and its hidden answers untouched, Ale loves that split); (2) `.gl-en` English helper has margin + dashed rule above it (Ale: glued text looks «enchastrado»); (3) listening = grandfather voice message. Screen-share audio depends on the teacher enabling «compartir sonido» in Zoom/Meet; not verifiable from here.

See [[grammar-live-class-230]], [[noche-abierta-ciudad-viva]].
