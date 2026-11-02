---
name: madrid-infectada
description: Madrid infectada (ID 242, /madrid-infectada), PRO 3D class A0–C2; v1 PR #271, v2 one big city + zombie hordes + 30 survivors, PR #272 LIVE 2026-10-22 (main 373e8b33)
metadata:
  type: project
  modified: 2026-10-22T08:36:23.355Z
---

Madrid infectada: el último brote (ID 242, /madrid-infectada, PRO, A0–C2). Requested by Ale 2026-10-22 06:16Z, thread cmsg_01Gr5R4j3t2Yet65UcmhcVhANJDy42vAMYzKmSc7Hfosis. PR #271, LIVE 2026-10-22 08:56Z (main ae6cee0).

- Code in app/madrid-infectada (layout.mjs = zones as data, madrid3d.ts, gear3d.ts = vaccine/cloud/pistol, levels/a0..c2.mjs). Checker scripts/check-madrid.mjs (word ranges, 2 talk questions with "?", neutral Spanish).
- 10 zones × 2 circles = 20 scenes per level; listening per zone per level in app/escucha-3d/content/madrid (70, audio via escucha-3d-audio workflow, branch pattern claude/madrid-*).
- Zones registered in tests/3d-sin-fantasmas WORLDS (madridZones). catalog-additions has undo steps for 242 incl. level-cleanup/rendered-html counts — a new catalog lesson must update those counts AND add undo steps.
- English manifest docs/audits/madrid-infectada-english-additions-20261022.json.
- Dialogues use browser speech synthesis; neural audio only in listenings. QA only on swiftshader (no real GPU/phone).
- Gotcha: the neutral-Spanish guard flags vosotros forms like «oís»; level-cleanup flags literal "A0" in new app dirs unless allowlisted.

## v2 (Ale 2026-10-22 16:34Z: «es re chiquita… más zombies… muchísimas conversaciones», wants Noche-abierta size, Walking Dead / creepypasta feel)
- One continuous city: app/madrid-infectada/city.mjs (pure data: PLACEMENT of the 9 surface zones, rotated by quarter turns, PLACES incl. Plaza de la Armería, STREETS, MONUMENTS, cityBlocks, RIVER, ENCOUNTERS = 30 survivors, metro entrances, creepy props). 376×324 m. Metro stays a separate scene.
- Horde: horde.mjs (pure logic, states wander/chase/feed/grab/down), test in 3d-sin-fantasmas. city3d.ts renders; CityMap.tsx minimap.
- Survivors: calle/{a0,a,b,c}.mjs (bands A0, A1–A2, B1–B2, C1–C2), checked by check-madrid checkStreet; progress keys `calle/<id>`. English manifest docs/audits/madrid-ciudad-english-additions-20261022.json.
- Gotcha: neutral-Spanish guard flags «Tomás», «bebé» and 1st-person preterites like viví/salí/subí/perdí/descubrí (ambiguous with voseo imperatives): reword.

Related: [[paises-3d]], [[3d-sin-fantasmas]], [[escucha-3d-listening]].
