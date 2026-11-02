---
name: mas-alla
description: Más allá (ID 243, /mas-alla): 3D class on death, Cielo and Infierno, A0–C2, built 2026-10-29
metadata:
  type: project
  modified: 2026-10-29T19:38:29.454Z
---
Más allá: cielo e infierno (ID 243, /mas-alla, PRO, A0–C2, both modes). LIVE 2026-10-29 20:1xZ (PR #292, main 49ddf69). Ale asked 2026-10-29 17:53Z (thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAUCdLveWHdt7vSwzqpkmRs3) and wanted it to be "nuestra obra maestra".

- Flow: a 10 s hospital intro (grandma dies with her family, the monitor goes flat, the soul rises), then the Umbral (choose Cielo or Infierno first), two worlds with 3 zones × 2 encounters each.
- Each encounter: a brief dialogue, «Saltear directo a la pregunta», ONE deep psychological question with its own visual form, then «Más hondo» (2 open questions).
- The 12 forms, never a vertical list: balanza, velas, libros, rio, estrellas, cartas, puertas, espejo, matriz, monedas, cadenas, reloj.
- Code: app/mas-alla/ (story.mjs, layout.mjs, engine.mjs, levels/*.mjs, *3d.ts).
- Checker: scripts/check-mas-alla.mjs. Test: tests/mas-alla.test.mjs.
- Listening: app/escucha-3d/content/masalla/ (game id `masalla`), 6 zones × 7 levels.
- Registered in WORLDS of [[3d-sin-fantasmas]].
- English manifest: docs/audits/mas-alla-english-additions-20261029.json, which cites Ale's standing approvals.
- Gotchas:
  - neutral-spanish flags names like Tomás as voseo, and 1st-person -er/-ir preterites (aprendí, perdí, construí, bebí, escribí). Avoid them in content.
  - Swiftshader QA runs at ~2 fps, so screen fades must use wall-clock time.
- 2026-10-30 (PR #295, main 4319e62): 41 «voces» circles (every walker/extra + 9 landmarks) in voces.mjs + voces/<level>.mjs (line + 3 personal questions, A0 bilingual, VOICE_MIN_WORDS, no repeats across levels); walker rings follow and pause; Infierno circles are flames (talkCircle {flames}). English manifest docs/audits/mas-alla-voces-english-additions-20261030.json.
- Music volume slider shared: app/escucha-3d/MusicVolume.tsx (localStorage spanishcue:musica-3d:volumen) + ambience setVolume in mas-alla, hospital, madrid, la-feria, mundo-3d. Reino had its own; noche/casino/bosque have no music. New 3D worlds with music must use it.
- Only tested on a simulated GPU.
