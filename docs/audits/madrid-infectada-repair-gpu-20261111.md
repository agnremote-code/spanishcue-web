# LQG audit (gated repair): «Madrid infectada» frees the GPU on unmount

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). It is not a new world and not a new level, and it changes no lesson content.
- **Date / run:** 2026-11-11, Wednesday 3D routine, branch `claude/board-wed-3d-20261111`, base main `301306c`.
- **Author:** the facilitator session (code). **Independent reviewer:** Alejandro, a fresh agent that did not write the change (see Gates).
- **Source of the defect:** STATUS.md 2026-10-28 "Found, not fixed" (the same leak pattern in other 3D cleanups, madrid-infectada on the list), the 11-06 Más allá LQG file ("Not verified": madrid-infectada still on the list), and W45 assessment §6 item 3 ("Otherwise: the next GPU-leak repair, one world per PR (madrid-infectada or one of the four new worlds)").
- **Why this unit and not another:**
  - R4 (a person's listening of the Ascensor B2 clips) is still unanswered: #282 has had no comment since 10-26 and no push since 11-02, so it was not touched.
  - The W46 Monday item (STT check v3) has no branch or PR on GitHub, so it gives no VALID result for Ascensor.
  - A new world would need the scoped BOARD-DECISION-003 §3.1 amendment first, and that amendment does not exist.

## Defect (VERIFIED in a browser, before and after)
The cleanup in `app/madrid-infectada/World3D.tsx` called the kit's `disposeGroup` on the station and the scene, then `composer.dispose()` and `renderer.dispose()`. It missed five things:
1. **No `forceContextLoss()`.** The WebGL context outlived the component.
2. **Bloom targets.** `composer.dispose()` frees only the composer's own two render targets, so the bloom pass's targets stayed.
3. **Shadow map.** The sun's shadow map was never disposed.
4. **Tree instance buffers.** `disposeGroup` does not free an `InstancedMesh`'s instance buffers, so the three tree `InstancedMesh`es in `city3d.ts` (trunks, crowns, branches) stayed. That is the 3 buffers left at both widths.
5. **Particle stock.** The sparks, crows and dust share geometries, materials and a texture that live outside the scene once no particle is alive, so `disposeGroup(scene)` never reaches them.

The new check `node scripts/qa-feria-browser.mjs --madrid-gpu` works like this:
- It mounts the world alone at Sol (`?harness=madrid`, desktop or low path by viewport).
- It plays two rounds of Sol → Metro (the ghost station is built) → Sol (the station is freed). It waits on each trip until the world's own pose reports the new place.
- It then unmounts the world and counts live WebGL textures and buffers, and lost contexts, from inside the page (SwiftShader, DPR 1.25).

| Viewport (path) | main `301306c` | This branch |
|---|---|---|
| 390 px (low path: no bloom, no shadows) | rounds at Sol: textures 42 → 42, buffers 1,181 → 1,227. Unmount: 5 textures, **3** buffers, context **not** lost | rounds: 42 → 42, 1,181 → 1,227. Unmount: 5 textures, 0 buffers, context lost |
| 1280 px (full path) | rounds: textures 84 → 84, buffers 2,526 → 2,538. Unmount: **18** textures, **3** buffers, context **not** lost | rounds: 84 → 84, 2,522 → 2,534. Unmount: 5 textures, 0 buffers, context lost |

- "Rounds" is the count back at Sol after round 1 → after round 2.
- **The Metro trip itself does not leak on main.** The station is already freed with `disposeGroup`, and the metro scene has no `InstancedMesh`. This repair is therefore unmount-only. The trip check is kept as a guard.
- **The round count drifts on main and on the branch alike.** Zombies spawn at random, and culled streets upload when they are first drawn.
  - Six rounds on the branch at 390 px gave 1,181, 1,219, 1,225, 1,249, 1,253 and 1,235 buffers: up and down, with no steady growth.
  - From round 1 to round 2: +46 (main, 390 px), +42 (reviewer, 390 px), +12 to +14 (1280 px).
  - The trip check first allowed 5% slack on buffers. Review NB5 found that leaves only 14–18 buffers of headroom at 390 px, so it now allows **10%**. Textures, flat in every run, get no slack.
- **Mutation check (the trip guard):** with the station only detached instead of freed, each round added about 410–435 buffers and 15 textures at both widths. The check failed at 390 and 1280 px. It also fails if a trip does not complete, because it counts exactly 2 Metro entries.
- **The 5 textures left at both widths** match the Feria, Hospital, Bosque and Más allá repairs (three.js placeholder textures; HYPOTHESIS, as in those files).
- **Evidence location:** `/tmp`-local folders of the facilitator: `qa-main2` (main), `qa-final` (branch), `qa-mut2` (mutation). They are not published, so nobody else can check them (review NB6). The reviewer's independent branch run is summarised under G4.
- **The counts drift by a few between runs:** for example, 1280 px textures were 84 → 84 here and 85 → 85 in the reviewer's run.

## Fix
- `app/madrid-infectada/World3D.tsx`:
  - A local `free()` disposes every `InstancedMesh` and then calls `disposeGroup`. It is used for the station on the way up and on unmount. The shared `disposeGroup` in `app/mundo-3d/kit3d.ts` is **not** changed (one world per PR; kit follow-up NB4 from 11-06 stays open).
  - Unmount order: station, scene, particle stock (spark/crow geometries and materials, dust material and texture, speech-mark texture), every composer pass and then the composer, the sun's shadow map, `renderer.dispose()`, `renderer.forceContextLoss()`, and finally the canvas is removed.
- **Deliberately not changed (follow-up):** when the finale is replayed, the old finale boat is still only detached (`World3D.tsx` near the `boatModel()` call and the "back on the pier" branch).
  - It is detached, not in the scene, so `free(scene)` does not reach it. Its geometries stay on the GPU until the unmount's context loss reclaims them.
  - Only the *current* boat is inside the scene and freed by `free(scene)`.
  - The facilitator's first reason for not freeing it ("it would dispose live cached `solid()` materials") does not hold, as review NB4 showed: `leaveMetro` already frees `solid()` materials mid-lesson, and in three.js that only forces a recompile and re-upload.
  - It is left for a follow-up because it needs a finale replay to reproduce, and this harness does not drive one.

## Gates
- **G3** (`npm run test:language`): run as part of `npm test`. No text changed.
- **G4** (author ≠ reviewer): Alejandro (a fresh agent) returned **APPROVE** on `2df3b8b9`, with 0 blockers and 7 notes. Verbatim: [the transcript](../board/transcripts/2026-11-11-wednesday-3d-madrid-repair.md).
  - **Applied:**
    - NB2: the canvas assertion now checks `parentNode`. It could not fail before, because React's unmount detaches the mount div; with the cleanup's `remove()` deleted, the new assertion fails.
    - NB5: the slack is now 10%.
    - NB1, NB4 and NB6: the wording in this file.
  - **No change:** NB3 (the `leaveMetro` switch to `free()` is a future guard, which this file already says), NB7 (`sun.shadow.dispose()`, which would make no difference with PCF shadows and matches Más allá).
  - **What he ran:**
    - The regression test: FAIL on main, PASS on the branch.
    - Seven mutations: forceContextLoss, the InstancedMesh traverse, the composer passes and the shadow map are caught; the particle stock, the `leaveMetro` switch and the canvas removal were not (the last one is now caught).
    - The browser check on the branch: 6/6, with numbers close to the facilitator's (390 px: 1,181 → 1,223 buffers; 1280 px: 85 → 85 textures, 2,562 → 2,574 buffers; unmount 5 textures / 0 buffers / context lost at both).
    - He did not run the browser check on main, so the main-side numbers and the mutation figures are the facilitator's only.
- **G6 level honesty:** unchanged (no level or catalog change).
- **Beat labelling:** not applicable, since no beat changed.
- **G5(a)** (SwiftShader): `--madrid-gpu` passes **6/6** with 0 page or console errors and no 404s. At 390 and 1280 px:
  - the trips do not grow beyond the slack (5% at the time of that run; now 10%);
  - the unmount frees the GPU and loses the context;
  - the world remounts in the same page with a non-blank canvas (286 and 533 colours).
  - On main it is 4/6: both unmount checks fail.
- **Regression test:** `tests/madrid-infectada-gpu.test.mjs` (run by `scripts/test-worker.mjs` next to `tests/madrid-infectada.test.mjs`). It mounts the real World3D in JSDOM at desktop quality with a stub GPU, whose renderer makes the shadow map on the first shadowed render as three.js does. It plays one Metro trip and then unmounts, and checks that:
  - the city's instanced meshes are not freed while you walk;
  - on unmount they are freed (at least 3);
  - the bloom pass and the shadow map are disposed;
  - the context is lost once, and the canvas is removed.

  On main it fails with «the city's tree trunks, crowns and branches free their instance buffers (freed 0)»; on the branch it passes.
- **Not covered by either check (review NB1):** the particle-stock disposal (defect 5). That stock reaches the GPU only after a spark, crow or dust event, and neither the harness nor the test fires one. The fix is in the code but untested; G5(a) does not cover it.

## Not verified
- Memory on a real phone or tablet; the counts come from SwiftShader.
- The full Madrid lesson flow (cards, vaccination, listening, finale) was not re-run in a browser. This repair touches only the GPU lifecycle, and `tests/madrid-infectada.test.mjs` covers the lesson.
- Madrid has no `webglcontextlost` handler (the same finding as Hospital NB4): a runtime context loss would freeze the world instead of falling back. Not changed here.
- The same leak pattern remains in the other worlds on the 10-28 list (mundo-3d, marketing-de-casinos, noche-abierta World3D + ItemStage, the-sound-map, immersive DemoScene, grammar-classroom duration/studio) and probably in the new non-board worlds (vuelo-cancelado, el-consorcio, el-tren-de-las-2340, la-boda, and hr-crisis in #404; HYPOTHESIS, not inspected).
