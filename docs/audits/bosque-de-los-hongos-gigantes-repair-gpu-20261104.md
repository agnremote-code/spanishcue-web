# LQG audit (gated repair): «El bosque de los hongos gigantes» frees the GPU on unmount

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). It is not a new world and not a new level, and it changes no lesson content.
- **Date / run:** 2026-11-04, Wednesday 3D routine, branch `claude/board-wed-3d-20261104`, base main `5eed8ab4`.
- **Author:** the facilitator session (code). **Independent reviewer:** Alejandro, a fresh agent that did not write the change.
- **Source of the defect:** STATUS.md 2026-10-28, "Found, not fixed" (the 3D cleanups that call `renderer.dispose()` without texture-slot disposal or `forceContextLoss`), and the W45 plan: "the next leak repair (bosque, then mas-alla), one world per PR".
- **Why this unit and not another:** R4 (a person's listening of the Ascensor B2 clips) is still unanswered, so #282 was not touched. A new world would hit the same §9.2 listening blocker. Backlog rank 3 still needs Martin's duplicate check.

## Defect (VERIFIED in a browser, before and after)
The cleanup in `app/bosque-de-los-hongos-gigantes/World3D.tsx` already called the module disposers (`forest.dispose()`, `hero.dispose()`, the sky and the shadow map), but:
- it never lost the WebGL context;
- `InstancedMesh` instance buffers were never released (`geometry.dispose()` does not free `instanceMatrix`/`instanceColor`);
- some geometries and textures outside the disposers' lists stayed alive. `forest.dispose()` ends with `root.clear()`, so nothing could reach them afterwards.

The world unmounts when the teacher leaves it, on a lost context and on in-app navigation.

The new check `node scripts/qa-feria-browser.mjs --bosque-gpu` mounts the forest world alone (`?harness=bosque`), walks forward for 20 frames, unmounts it and counts live WebGL textures and buffers, and lost contexts, from inside the page (SwiftShader, DPR 1.25):

| Viewport (path) | main `5eed8ab4`: textures, buffers before → after; context lost | This branch: textures, buffers before → after; context lost |
|---|---|---|
| 390 px (low path) | 24 → **7**, 491 → **37**; **no** | 24 → 5, 491 → 0; **yes** |
| 1280 px (full path, shadows) | 26 → **7**, 534 → **37**; **no** | 26 → 5, 534 → 0; **yes** |

The 5 surviving textures are three.js's per-renderer placeholders, the same as after the Feria and Hospital repairs, and the forced context loss releases them.

An intermediate version that traversed the scene *after* `forest.dispose()` left 6 textures and 37 buffers (it lost the context but found nothing to dispose). That is why the traverse now runs first.

## Fix (`app/bosque-de-los-hongos-gigantes/World3D.tsx`)
- After removing the listeners (including `webglcontextlost`, so a normal unmount never calls `onFail`), the unmount traverses the scene. For each `InstancedMesh` it calls `dispose()`; for each object it disposes the geometry, every texture slot of every material, then the material.
- Then the existing module disposers run as before (dispose is idempotent in three.js).
- Then it calls `renderer.dispose()`, `renderer.forceContextLoss()`, and removes the canvas.

## Gates
- **G3** (`npm run test:language`): run as part of `npm test`. No text changed.
- **G4** (author ≠ reviewer): Alejandro's code review. Verdict and notes: see the transcript [2026-11-04-wednesday-3d-bosque-repair.md](../board/transcripts/2026-11-04-wednesday-3d-bosque-repair.md).
- **G6 level honesty:** unchanged (no level or catalog change).
- **Beat labelling:** not applicable, since no beat changed.
- **G5(a)** (SwiftShader): the `--bosque-gpu` check passes **4/4** with 0 page or console errors and no 404s: unmount frees the GPU at 390 and 1280 px, and the world then remounts in the same page with a non-blank canvas (838 and 1,683 colours).
- **Regression test:** `tests/bosque-world-controls.test.mjs` «unmount frees the GPU…» fails on main (verified with the World3D change stashed: 6 pass, 1 fail) and passes on the branch (7/7). It mounts the real World3D in JSDOM, then checks that the context is lost once, the canvas is removed, instanced meshes and texture slots are disposed, and the traverse runs before `forest.dispose()`.
- **Full checks:** recorded in STATUS.md and the PR body.

## Not verified
- Memory on a real phone or tablet; the counts above come from SwiftShader.
- The full bosque G5 smoke (zones, cards, HUD) was not re-run in a browser. This repair touches only the unmount path, and the existing JSDOM suite (`npm run test:bosque`) covers the mounted world.
- The same leak pattern remains in the other worlds on the 10-28 list (mas-alla next, then mundo-3d, marketing-de-casinos, madrid-infectada, noche-abierta World3D + ItemStage, the-sound-map, immersive DemoScene, grammar-classroom duration/studio).
