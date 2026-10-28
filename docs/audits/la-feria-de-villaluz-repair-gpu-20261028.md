# LQG audit (gated repair): «La feria de Villaluz» frees the GPU on unmount

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). It is not a new world and not a new level, and it changes no lesson content.
- **Date / run:** 2026-10-28, Wednesday 3D routine, branch `claude/board-wed-3d-20261028`.
- **Author:** the facilitator session (code). **Independent reviewer:** Alejandro, a fresh agent that did not write the change.
- **Source of the defect:**
  - the Feria QA note "dispose textures in World3D cleanup" (STATUS.md, 2026-10-21);
  - the same defect, raised for El ascensor del cerro as code review B1 (`docs/audits/el-ascensor-del-cerro-code-review-20261026.md` on PR #282).

## Defect (VERIFIED in a browser, before and after)
When the 3D world unmounts, the cleanup called `material.dispose()`, which in three.js leaves the material's textures alive. The world unmounts when the teacher toggles «Sin movimiento», when the context is lost, and on in-app navigation. Four things leaked:
- the Busca label canvas textures;
- the low-mode host bakes cached off the scene;
- the bloom pass render targets and the shadow maps;
- the WebGL context itself, until garbage collection.

The new check in `scripts/qa-feria-browser.mjs --smoke` counts live WebGL textures and buffers from inside the page, opens two scene cards, then switches the world off:

| Viewport (path) | main `eaf931a`: textures before → after, context lost | This branch: textures before → after, context lost |
|---|---|---|
| 390 px (low path) | 7 → 7, buffers 344 → 11, **no** | 7 → 5, buffers 344 → 5, **yes** |
| 1280 px (full path, bloom + shadows) | 22 → 20, buffers 1586 → 2, **no** | 22 → 5, buffers 1586 → 2, **yes** |

Four of the 5 remaining textures are three.js's per-renderer placeholder textures, created in `WebGLState` and never deleted (the reviewer confirmed this in three 0.186.1). The fifth is UNVERIFIED. The forced context loss releases all of them.

## Fix
- `feria3d.ts`: `Fair.dispose()` clears Busca (its label textures), and disposes every cached host bake, whether attached or not.
- `World3D.tsx`:
  - the unmount calls `fair.dispose()`;
  - it disposes every texture slot of every material, the shadow maps and each composer pass;
  - then it calls `renderer.forceContextLoss()`.
  - The build-failure path also loses its context, after removing the `lost` listener so that `onFail` fires only once.

## Gates
- **G3** (`npm run test:language`): passed, as part of `npm test`. No text changed.
- **G4** (author ≠ reviewer): Alejandro's code review returned **APPROVE** with no blocking items. NB1 and NB2 were applied; NB3 and NB4 were not taken (reasons in the transcript). The delta check of the NB commit `49b13d7a` returned **DELTA VERDICT: APPROVE**. Verbatim: [transcripts/2026-10-28-wednesday-3d-feria-repair.md](../board/transcripts/2026-10-28-wednesday-3d-feria-repair.md).
- **G6 level honesty:** unchanged (A2 only, `featured:false`).
- **Beat labelling:** not applicable, since no beat changed.
- **G5(a)** (SwiftShader smoke, run alone at `49b13d7a`): **78/78 passed**, 0 page or console errors, no 404s. That is 76 existing checks plus the 2 new unmount checks. Two earlier runs timed out on the first `page.screenshot` while `npm test` and lint were running at the same time. Main `eaf931a` run alone passed 76/76.
- **Regression test:** `tests/la-feria-de-villaluz.test.mjs` «unmount frees the GPU…» fails on main and passes on the branch.

## Not verified
- G5(b) real-device check: still outstanding for Feria, so `featured` stays off.
- Memory on a real phone or tablet; the counts above come from SwiftShader.
- Nobody has listened to the Feria clips by ear. This repair does not touch audio.
- The same leak pattern (no texture-slot disposal, no `forceContextLoss`) exists in other 3D worlds. Each was checked by grep only (see STATUS.md), and none of them was changed here.
