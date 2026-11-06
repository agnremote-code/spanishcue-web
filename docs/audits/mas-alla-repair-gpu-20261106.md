# LQG audit (gated repair): «Más allá» frees the GPU on every place swap and on unmount

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). It is not a new world and not a new level, and it changes no lesson content.
- **Date / run:** 2026-11-06, Friday 3D + assessment routine, branch `claude/friday-assessment-20261106`, base main `ca5068a7`.
- **Author:** the facilitator session (code). **Independent reviewer:** Alejandro, a fresh agent that did not write the change.
- **Source of the defect:** STATUS.md 2026-10-28 "Found, not fixed" (the same leak pattern in other 3D cleanups, including #292 «Más allá»), the W45 plan item 5 ("bosque, then #292 «Más allá»"), and STATUS 2026-11-04 next action 3 ("Next leak repair: mas-alla").
- **Why this unit and not another:** R4 (a person's listening of the Ascensor B2 clips) is still unanswered: #282 has had no comment since 10-26 and no push since 11-02, so it was not touched. A new world would hit the same §9.2 listening blocker. Backlog rank 3 still needs Martin's duplicate check.

## Defect (VERIFIED in a browser, before and after)
Más allá is different from the earlier repairs: it builds the Cielo and the Infierno when you cross a gate and frees them on the way out, so the leak shows up **while the lesson runs**, not only on unmount. The cleanup in `app/mas-alla/World3D.tsx` called the kit's `disposeGroup` (geometries, materials, texture slots), `composer.dispose()` and `renderer.dispose()`, but:
1. **Place swaps:** `disposeGroup` never frees an `InstancedMesh`'s instance buffers. The Cielo (cloud puffs, six flower beds, balusters) and the Infierno (far spires) left **9 GL buffers per Cielo + Infierno round**.
2. **The Umbral mirror:** each Umbral visit built a new `Reflector`. Its own render target was never disposed, and three.js keeps a transmission render target **per camera** (`transmissionRenderTarget[camera.id]`, `three.module.js` ~18049) that user code cannot reach. Each new mirror brought a new virtual camera, so each visit left a screen-sized, half-float, multisampled target behind. That cost **2 textures per Umbral visit** at desktop quality (traced from the creation stacks: `Reflector.onBeforeRender → setRenderTarget` and `Reflector.onBeforeRender → render → renderTransmissionPass`).
3. **Unmount:** the WebGL context was never lost, the bloom pass's own render targets were not disposed (`composer.dispose()` frees only its two), and the sun's shadow map stayed.

The new check `node scripts/qa-feria-browser.mjs --masalla-gpu` mounts the world alone in the Umbral (`?harness=masalla`). It then plays two full rounds (Umbral → Cielo → Umbral → Infierno → Umbral), unmounts the world, and counts live WebGL textures and buffers, and lost contexts, from inside the page (SwiftShader, DPR 1.25):

| Viewport (path) | main `ca5068a7` | This branch |
|---|---|---|
| 390 px (low path: no mirror, no bloom, no shadows) | rounds: textures 14 → 14, buffers 339 → **348** (+9). Unmount: 5 textures, **18** buffers, context **not** lost | rounds: 14 → 14, 330 → 330. Unmount: 5 textures, 0 buffers, context lost |
| 1280 px (full path) | rounds: textures 38 → **42** (+4), buffers 567 → **576** (+9). Unmount: **29** textures, **18** buffers, context **not** lost | rounds: 34 → 34, 558 → 558. Unmount: 7 textures, 0 buffers, context lost |

- "Rounds" is the count back in the Umbral after round 1 → after round 2. Round 1 warms every lazily built object, so growth between rounds is the leak.
- The fixed run is `/tmp`-local evidence from the facilitator (folder `fix4`). Main numbers come from the run on main before any edit, with the same harness (two-round version).
- The 5 textures left at 390 px match the Feria, Hospital and Bosque repairs (three.js placeholder textures; HYPOTHESIS, as in those files).
- At 1280 px, 2 more textures stay counted: the transmission targets of the screen camera and the mirror camera, which three.js keeps internally (`renderStates.dispose()` drops the map without disposing them). The forced context loss releases them. The QA threshold is therefore 5 at 390 px and 7 at 1280 px, and the reason is written next to it in the script.
- The fix was measured in steps. Instance buffers alone left +4 textures per round at 1280 px. Disposing each mirror on swap left +2 (the internal transmission target). Only one mirror per mount stopped the growth.

## Fix
- `app/mas-alla/World3D.tsx`: a local `free()` disposes every `InstancedMesh` before `disposeGroup`, and is used for place swaps, the intro and the unmount. The shared `disposeGroup` in `app/mundo-3d/kit3d.ts` is **not** changed, because other worlds use it (one world per PR).
- `app/mas-alla/umbral3d.ts`: the mirror is made by `createMirror()`. `buildUmbral` takes an optional `mirror` and reuses it; with no mirror passed it makes one as before. World3D makes one mirror per mount (desktop quality only, as before), lifts it out before freeing a place, and disposes it on unmount.
- Unmount order: places, the rest of the scene, the mirror, every composer pass and then the composer, the sun's shadow map, `renderer.dispose()`, `renderer.forceContextLoss()`, and finally the canvas is removed.
- Visual check: the screenshots of the first Umbral and of the Umbral after two rounds (1280 px, folder `fix4/smoke`) both show the mirror reflecting the soul and the gate flames, so the reused mirror still works.

## Gates
- **G3** (`npm run test:language`): run as part of `npm test`. No text changed.
- **G4** (author ≠ reviewer): Alejandro (a fresh agent) returned **APPROVE** on `0b151cc7`, with 0 blockers and 5 notes. NB1 (buffers after the unmount must be 0, not ≤ 5, in the Más allá check) and NB2 (the scope note below) were applied. NB3–NB5 need no change (the round-to-round check is enough for per-visit growth; a kit-level `disposeGroup` fix is a follow-up outside this one-world unit; the node test checks dispose calls, while the harness gives the GPU counts).
  - He re-ran the browser check independently: 6/6, with the same numbers as the facilitator's.
  - He showed that the test fails on main, in a `git archive ca5068a` copy.
  - He ran two mutation checks (a new mirror per visit; no `forceContextLoss`); each makes the test fail.
  - He did not run the browser check on main, so the main-side numbers are the facilitator's only.
  - Verbatim: [2026-11-06-friday-3d-assessment.md](../board/transcripts/2026-11-06-friday-3d-assessment.md).
- **Scope of the browser evidence (NB2):** at 390 px the harness runs the low-quality path (no mirror, no bloom), so the mirror path is measured in a browser only at 1280 px.
- **G6 level honesty:** unchanged (no level or catalog change).
- **Beat labelling:** not applicable, since no beat changed.
- **G5(a)** (SwiftShader): `--masalla-gpu` passes **6/6** with 0 page or console errors and no 404s. At 390 and 1280 px: swaps do not grow, unmount frees the GPU and loses the context, and the world remounts in the same page with a non-blank canvas (760 and 1,705 colours).
- **Regression test:** `tests/mas-alla-gpu.test.mjs` (run by `scripts/test-worker.mjs` next to `tests/mas-alla.test.mjs`). It mounts the real World3D in JSDOM at desktop quality with a stub GPU, then plays the two rounds and the unmount. It checks that:
  - leaving the Cielo and the Infierno disposes instanced meshes;
  - exactly one mirror is made for two Umbral visits and survives the swaps;
  - on unmount, the mirror and the bloom pass are disposed, the context is lost once, and the canvas is removed.

  It fails on main (with the `app/mas-alla` changes stashed: «leaving the Cielo frees its instance buffers») and passes on the branch.

## Not verified
- Memory on a real phone or tablet; the counts come from SwiftShader.
- The full Más allá lesson flow (cards, listening, verdict) was not re-run in a browser. This repair touches only the GPU lifecycle, and `tests/mas-alla.test.mjs` covers the lesson.
- Más allá has no `webglcontextlost` handler (the same finding as Hospital NB4): a runtime context loss would freeze the world instead of falling back. Not changed here.
- The same leak pattern remains in the other worlds on the 10-28 list (mundo-3d, marketing-de-casinos, madrid-infectada, noche-abierta World3D + ItemStage, the-sound-map, immersive DemoScene, grammar-classroom duration/studio), and probably in the new non-board worlds of this week (vuelo-cancelado, el-consorcio, el-tren-de-las-2340, la-boda; HYPOTHESIS, not inspected).
