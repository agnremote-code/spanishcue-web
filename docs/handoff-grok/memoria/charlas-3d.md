---
name: charlas-3d
description: Charlas 3D (2026-10-30): extra conversation circles on every anonymous person and landmark in the 3D worlds, shared question bank, how each world wires it
metadata:
  type: project
  modified: 2026-10-30T06:34:34.237Z
---
Ale asked 2026-10-30 06:01Z (in the Más allá thread, cmsg_01Gr5R4j3t2Yet65UcmhcVhA6DbwYKbaxKxKSsoWkiMaBh): every person you see and every striking place in ALL 3D conversation worlds must have a conversation circle, with interesting questions that make the student talk. Más allá itself (flame circles in hell, music volume slider) belongs to the Más allá thread. Worked in thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAPqA4Sfy6P8w8pSy95xzMsu, branch claude/charlas-3d.

- Shared code `app/charlas-3d/`:
  - `banco.mjs`: 34 themes × bands a0 (bilingual es/en), a (A1–A2), b (B1–B2), c (C1–C2) × 5 questions.
  - `mundos.mjs`: role casts for anonymous people (noche, madrid, pais, hospital, casino, reino, feria, bosque).
  - `charlas.mjs`: bandOf(level), questionsFor (two themes interleaved, rotated by key).
  - `charlas3d.ts`: createCharlas({parent, host, world, level, people(), places}) draws cyan rings + a bubble sprite, shows «E · Hablar», opens CharlaCard in its own React root, swallows keys while open. Call update(player, dt, free) from the loop with free = no native target.
  - `lugar.ts` (CharlaPlace, onFreeGround; no React) and `lugares.ts` (thingPlaces for floor-based buildings).
- Wired: mundo-3d (all 11 countries: talkers without spot + walkers; plantilla landmark/plaza centre/shore places; US custom escenas have people only, no places), Noche (crowd.talkable, events.talkable, LIT_SIGNS from district3d, party house, every street event incl. incendio), Madrid (MONUMENTS), Hospital (doors + furniture), Casino, Feria (noria, stage, dance floor, fountain).
- NOT wired: Reino (every person already has a story and PLACE_SPOTS; spells use nearby targets), Bosque (no people).
- Test tests/charlas-3d.test.mjs (in npm test). English manifest docs/audits/charlas-3d-english-additions-20261030.json; the classifier blocked adding it citing the old blanket approval, so a fresh «apruebo» typed in the thread was needed.
- QA harness: esbuild bundle + playwright (stub next/dynamic with React.lazy or World3D never mounts).
