# LQG audit (gated repair): «Hospital San Casi Vivo» frees the GPU on unmount

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). It is not a new world and not a new level, and it changes no lesson content.
- **Date / run:** 2026-10-30, Friday 3D + assessment routine, branch `claude/friday-assessment-20261030`.
- **Author:** the facilitator session (code). **Independent reviewer:** Alejandro, a fresh agent that did not write the change.
- **Source of the defect:** STATUS.md 2026-10-28, "Found, not fixed": 11 other 3D cleanups call `renderer.dispose()` without texture-slot disposal or `forceContextLoss`; the hospital world was named first (most traffic risk on PRO devices).

## Defect (VERIFIED in a browser, before and after)
The cleanup in `app/hospital-san-casi-vivo/World3D.tsx` called `material.dispose()`, which in three.js leaves the material's textures alive. It also left the directional light's shadow map, the bloom pass render targets and the PMREM render target alive (only its texture was disposed), and never lost the WebGL context. The world unmounts when the teacher switches to the 2D view, on a lost context and on in-app navigation.

The new check `node scripts/qa-feria-browser.mjs --hospital-gpu` mounts the hospital world alone (`?harness=hospital`), opens two scenes, unmounts it and counts live WebGL textures and buffers, and lost contexts, from inside the page (SwiftShader, DPR 1.25):

| Viewport (path) | main `49ddf69`: textures before → after, context lost | This branch: textures before → after, context lost |
|---|---|---|
| 390 px (low path) | 40 → **39**, buffers 1476 → 4, **no** | 40 → 5, buffers 1476 → 4, **yes** |
| 1280 px (full path, bloom + shadows) | 67 → **64**, buffers 2317 → 4, **no** | 67 → 5, buffers 2317 → 4, **yes** |

The hospital leaked more than the Feria did (39 and 64 textures, against 7 and 20).

A stack trace of each surviving texture, taken once at 1280 px, showed:
- 4 are three.js's per-renderer placeholder textures created in `WebGLState`;
- 1 is created by `setTexture2D` during a uniform upload; its owner is UNVERIFIED (not reachable from the scene traverse);
- after the first fix, a 6th survived: it came from `PMREMGenerator.fromScene` (`setupRenderTarget`). Disposing the whole render target instead of only its texture removed it.

The forced context loss releases all remaining GPU memory.

## Fix (`app/hospital-san-casi-vivo/World3D.tsx`)
- The unmount disposes every texture slot of every material, each shadow map and each composer pass, then the composer.
- It keeps the PMREM result as `envTarget` and disposes the target, not only `envTarget.texture`.
- Then it calls `renderer.forceContextLoss()`.
- The build-failure path also loses its context. It has no `webglcontextlost` listener, so `onFail` still fires once.

## Gates
- **G3** (`npm run test:language`): run as part of `npm test`. No text changed.
- **G4** (author ≠ reviewer): Alejandro's code review returned **APPROVE** with no blocking items. He reproduced the browser numbers independently. NB1 (check a remount) and NB2 (a less brittle catch-path assertion) were applied; NB3–NB5 need no change in this unit. Verbatim: [transcripts/2026-10-30-friday-3d-assessment.md](../board/transcripts/2026-10-30-friday-3d-assessment.md).
- **G6 level honesty:** unchanged (no level or catalog change).
- **Beat labelling:** not applicable, since no beat changed.
- **G5(a)** (SwiftShader): the `--hospital-gpu` check passes **4/4** with 0 page or console errors and no 404s: unmount frees the GPU at 390 and 1280 px, and the world then remounts in the same page with a non-blank canvas (867 and 957 colours).
- **Full checks** at `32425242`: `npm test` exit 0 (1,365 pass, 0 fail; run with `SPANISHCUE_TEST_WORKER_TIMEOUT_MS=180000`), `validate:artifact` OK, lint clean on the changed files, `tsc` only the 3 errors already on main, `git diff --check` clean. The NB commit changes only the test and the QA script; the hospital test file passes 12/12 after it.
- **Regression test:** `tests/hospital-san-casi-vivo.test.mjs` «unmount frees the GPU…» fails on main (verified with the World3D change stashed) and passes on the branch.

## Not verified
- Memory on a real phone or tablet; the counts above come from SwiftShader.
- The full hospital G5 smoke (cards, HUD) was not re-run: there is no hospital smoke harness, and this repair touches only the unmount path.
- Hospital has no `webglcontextlost` handler (review NB4, pre-existing): a runtime context loss freezes the world instead of falling back to 2D. A separate candidate repair.
- The same leak pattern remains in 10 other 3D cleanups (bosque, mundo-3d, marketing-de-casinos, madrid-infectada, noche-abierta World3D + ItemStage, the-sound-map, immersive DemoScene, grammar-classroom duration/studio) and in the new `mas-alla` world (#292, grep only).
