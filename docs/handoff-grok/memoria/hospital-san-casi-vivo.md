---
name: hospital-san-casi-vivo
description: Hospital San Casi Vivo 3D class (ID 240): structure, audio pipeline, checkers and gotchas for editing it or building the next 3D class
metadata:
  type: project
  modified: 2026-10-15T17:24:50.681Z
---
LIVE 2026-10-15 ~17:30Z (PR #197, main 269b95c, staging + production deploy green). Route /hospital-san-casi-vivo, catalog ID 240, A0–C2, premium (anonymous → /acceso).

- Files: app/hospital-san-casi-vivo/{story.mjs (CAST of 43, one unique Edge voice each; STORY 21 scenes), layout.mjs (4 floors 0–3, sectors, walls, doors, walkers, chatter, announcements), levels/*.mjs, engine.mjs, hospital3d.ts, World3D.tsx, HospitalGame.tsx, ambience.ts (procedural WebAudio, ducks during listening)}.
- Listening: app/escucha-3d/content/hospital/*.json; games.mjs `ownListening: true` (strict, no fallback), `bilingualA0: true`. 147 MP3s built by .github/workflows/escucha-3d-audio.yml, which now also triggers on `claude/hospital-*` branches.
- Checkers: scripts/check-hospital.mjs, scripts/check-escucha-3d.mjs; test tests/hospital-san-casi-vivo.test.mjs (run in scripts/test-worker.mjs).
- Gotchas hit: catalog additions need inversions in tests/helpers/catalog-additions.mjs (240 is first in the undo order), including tests/level-cleanup.test.mjs A0 lists; Ale's voseo tagline «Entrás por una consulta. Salís con una historia.» has exact neutral-guard exemptions; English A0 manifest docs/audits/hospital-a0-english-additions-20261015.json.
- Permanent 3D rule documented in AGENTS.md / CLAUDE.md with this class as reference implementation.
- Round 2 (Ale 17:59Z «más REALISTA GTA», morbid name, screams): PR #200 merged 2026-10-15 (main 305443f). Added tomografia + partos sectors, Rayos X; CROWD people talkable via E (patients.mjs, key `<floor>-<index in CROWD[floor]>`: adding/reordering CROWD shifts keys, the test checks every member has a story); dying ceiling panels (1 in 6), blood trails, grime, palms/lampposts as floor-1 FURNITURE, hearse, façade sign «VIVO» crossed + «MUERTO», «Días sin perder un paciente: 0». English for A0 stories in docs/audits/hospital-patients-english-additions-20261015.json.
- Shared across 3D games (PR #200/#201, main 2ba9453): stepPlayer lands you on any box with `top` (+ `input.jumpSpeed`); app/escucha-3d/bump.mjs (pushOut, createBumpClock, bumpLine) + shout.ts (insultFor, shout, setShoutMuted) + voces.json (16 regional insults + 6 cries, MP3 built by the escucha-3d-audio workflow as /audio/escucha-3d/voces-<id>.mp3). Noche, casino, Reino use it; bosque only jump (no NPCs). LIVE 2026-10-15 ~19:20Z (staging+production deploy of main 2ba9453 green; dispatched Deploy Staging by hand after the CI post-merge health step failed on GitHub but passed locally, logs unreadable from the container). Ale rule 2026-10-15 18:04Z: in every 3D class you jump onto objects, no NPC blocks the way, bumping someone makes them insult you aloud with an angry face.
- Not verified: real GPU/mobile device (only SwiftShader QA, ~1 fps there). Voices are synthetic neural TTS, not human recordings.
