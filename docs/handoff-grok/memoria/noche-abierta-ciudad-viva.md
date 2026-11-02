---
name: noche-abierta-ciudad-viva
description: Noche abierta city expansion (PR #133, merged 2026-10-07 as 0bcf227): 8 districts, 71 street scenes, carried object picker, new people/animals; files, tests, perf numbers and pending items
metadata:
  type: project
  modified: 2026-10-07T10:17:52.041Z
---

On 2026-10-07 the city expansion for Noche abierta (ID 223) was merged to main as PR #133, commit 0bcf227, and deployed to production at ~10:25Z (staging + production workflows green, production smoke passed; the container cannot open spanishcue.com itself). Ale asked for it with "NO empieces de cero… EXPANDÍ EL MUNDO". It builds on [[noche-abierta-v2]].

**What exists**
- The centre and its 10 places are unchanged.
- 8 districts were added: viejo, alto, clinica, mercado, costa, estacion, sur, galpones.
- There is a canal with 3 bridges, a laundromat room and a rooftop room.
- There are 71 street encounters: 36 escenas and 35 rincones.
- Start-of-night picker «¿QUÉ LLEVAS ESTA NOCHE?» offers 7 items: lapiz, libro, gas, granada, pistola, cuchillo, corazon.
  - Q, or tapping the HUD chip, uses the item.
  - Weapons only scare people or make them leave (fiction, no gore).
  - corazon is a power: hearts appear and the person's mood becomes love.
- The level comes from `?level=` or `?nivel=`.

**Files** (all under app/noche-abierta/)
- Data:
  - `city.mjs`: layout, colliders, one-way traffic with CROSSINGS reservation, walkers.
  - `street.mjs` + `street/*.mjs`: the encounters, with text in bands A (A1–A2), B (B1–B2) and C (C1–C2).
- Rendering:
  - `district3d.ts`: streamed sectors, STREAM_RANGE 80.
  - `streetlife.ts`: people LOD (full rig ≤20 m, max 8 desktop / 5 mobile), cars merged by material, emergency vehicles.
  - `people3d.ts`: 26 poses, 11 moods.
  - `animals3d.ts` and `items3d.ts`.
- UI: `ItemPicker`, `ItemStage`, `ItemIcon` (with ItemInventory), `StreetCard`, `street.css`.
- State:
  - Street state lives in sessionStorage `spanishcue:noche-abierta:calle:v1`, separate from NightState.
  - Banned identifier words apply to World3D (e.g. "life"), which is why it's `createStreetCrowd`.

**Tests**
- `tests/noche-ciudad-viva.test.mjs` is new.
- It and `tests/noche-abierta.test.mjs` are now part of `npm test`; before this, noche-abierta.test was NOT in npm test.

**Browser QA**
- QA hook: open with `?na-qa`, then `document.querySelector('.na-world').naWarp(x,z,h)` and `.naCalls()`.
- QA script and report: /mnt/project-files/noche-abierta/v4-qa/ (qa-v4.mjs, INFORME.md).

**Perf** (SwiftShader, no real GPU)
- Draw calls at the desktop start: 756, against 556 before.
- La Estación on desktop peaks around 1070.
- Mobile stays at 64–291.

**Pending:** real-GPU test, street scenes in the 2D map, ambient sound, a focus trap in the picker.

**Phase 2 (2026-10-07, PR #143, main 91fb78b, staging + production deploys green):** the carried object now changes every scene. Each escena has `variants` per object (own start node, opening 3D effect from OPENING_FX, banded closing question); tests require ≥90% coverage with distinct lines. 18 new strong scenes (caos-norte/centro/sur), 54 escenas total, 89 encounters. New people poses (hands-up, knife, scream, kiss, fallen, injured, fight…), wounds, heart eyes, more realistic hero, urban events (events3d.ts: fight, fire, thief, protest, crash, ambulance, helicopter), motos. «Ficción» tag removed; Ale said adults, blood and graphic violence are allowed. Rincones have variants only for cuchillo/pistola/granada/corazon. QA + INFORME in /mnt/project-files/noche-abierta/v5-qa/. Lessons: CI runs `git diff --check` against main (trailing whitespace in content files failed it; check with `git diff --check origin/main...HEAD`); VOSEO test regex is now Unicode-aware. Pending: real-GPU FPS, protest/crash/ambulance events not seen on screen, mobile card covers people in some circles.

**Phase 3 (2026-10-10, PR #147, main d9c6254, production deploy green):** Ale asked to steal/drive cars and motos and to fix characters shown as floating pieces (screenshot: only sleeves + a leg beside a lit slatted door). Added drive.mjs (physics), drive3d.ts (22 drivables: 14 cars, 8 motos), E to board/exit, W/S/A/D, Space brake, Shift boost, owner shout at 1.2 s, police at 14 s, minimap marks, mobile stick + Freno button; tests/noche-conduccion.test.mjs in npm test. Broken-character bug NOT reproduced; likely cause = follow camera inside a body (backface culling), so anyone within 1.2 m of the camera is not drawn that frame (World3D.tsx before renderer.render). Banned identifier words in World3D (economy test): avoid "point", "score" etc. (renamed exitPoint -> dismountSpot). Not verified: real-GPU FPS, police on screen. QA in /mnt/project-files/noche-abierta/v6-qa.
