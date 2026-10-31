---
name: noche-abierta-v2
description: Noche abierta (ID 223): architecture, A1–C2 levels, title screen, mascot, places/mechanics, QA harness notes (as of 2026-10-01)
metadata:
  type: project
  modified: 2026-10-01T09:56:47.190Z
---

Noche abierta, ID 223 at /noche-abierta, is a Conversación lesson in Modo Play, behind PRO. It runs as a 3D game.
- 2026-10-01 05:46Z: second iteration shipped as PR #81.
- 2026-10-01 ~10:00Z: final production pass shipped as PR #82, merged as main 1d0c765.

**Architecture** (in app/noche-abierta/)
- Data:
  - `content.mjs` holds the B1 base texts.
  - `levels/{a1,a2,b2,c1,c2}.mjs` are patches with the same shape as the base.
  - `levels.mjs` provides `contentFor(level)`, which merges a patch over the base, plus `LEVEL_INFO` and `untouched()`. Run `node scripts/check-noche-level.mjs A1` to list B1 text a level leaves untouched.
  - `activities.mjs` holds the activity logic; `engine.mjs` holds the state (`state.level`, default B1). `setLevel` keeps the position and route and only restarts the activity that is open.
- 3D:
  - `world3d.mjs` holds the world data.
  - `hero3d.ts` is the mascot, built from procedural geometry. It has a backpack with an Argentine flag in the side pocket, and the pen in its right fist (his right is -x).
  - `build3d.ts` builds the geometry; `World3D.tsx` is the runtime.
- The level is stored in localStorage under `spanishcue:noche-abierta:nivel`. A `?level=` query in the URL (the library sends one) takes priority.
- The title screen is `Arrival` in NocheAbierta.tsx. It uses the official `/brand/mascot/kneeling.webp` plus `/noche-abierta/mascot-wink.webp`.
- The library shows one card, with `levels` A1–C2 and `displayLevel` "A1–C2". `tests/level-cleanup` expects 32 A1 lessons; that edit is registered in `tests/helpers/catalog-additions.mjs`.

**10 places and their mechanics**
- Café: messages.
- Departamento: observe.
- Restaurante: decisions with consequences.
- Plaza: NPCs.
- Bar: social problems, in a room you can walk into.
- Auto: "si" conditions.
- Museo: narrating the past, in a room you can walk into.
- Taxi: compare.
- Almacén: describe.
- Terraza: agreement.

**Rules**
- No points, coins or levels-as-game: CEFR `level` is allowed in the economy test.
- Lesson texts give no absolute clock times.

**QA**
- Harness in the scratchpad: qa/s3d/{title,levels,mob3,hero,lib}.cjs.
- Screenshots: /mnt/project-files/noche-abierta/v3-qa (v2-qa is older).
- FPS was only measured under SwiftShader.
- The 3D face is stylized and can't match the reference art exactly.

See [[spanishcue-lesson-style]].
