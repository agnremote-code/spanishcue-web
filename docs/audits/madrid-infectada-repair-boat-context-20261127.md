# LQG audit (gated repair): «Madrid infectada» frees the replayed finale boat and falls back to 2D on context loss

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). It is not a new world or a new level, and it changes no lesson content.
- **Date / run:** 2026-11-27, Friday 3D + assessment routine, branch `claude/friday-assessment-20261127`, base main `db25cc2a`. Code commit `36a6b16b`.
- **Author:** the facilitator session (code). **Independent reviewer:** a fresh agent acting as Alejandro, who did not write the change (see Gates).
- **Source of the defects:** the two open follow-ups of the 11-11 Madrid GPU repair ([madrid-infectada-repair-gpu-20261111.md](madrid-infectada-repair-gpu-20261111.md), "Deliberately not changed"; STATUS 11-11 "Follow-ups from this repair"), queued as W48 plan item 7 (the leak-repair queue) and named as the Friday fallback unit in STATUS 11-25.
- **Why this unit and not another:**
  - «El taller de la greda» (#510) cannot ship: R5 is open (Codex #209 and board draft #282 still hold `.github/workflows/**`, so the STT workflow cannot land and no VALID run is possible), its cover (B4) is missing, B1 is not applied, and its 8 clips are unheard. Non-board #529 also regenerated every escucha-3d clip with new voices on main after the Taller build, so the branch's clips are stale.
  - The other item-7 entry, the kit `disposeGroup` InstancedMesh gap, was checked first. No world that relies on the kit's `disposeGroup` builds an `InstancedMesh` without its own local free (grep over the kit3d importers; Más allá, Madrid and El mundo en blanco free them locally). It has no live effect today, so it was not counted as a unit.

## Defects (VERIFIED in code and by test)
1. **Replayed finale boat only detached.** When the finale ended (or was replayed), `World3D.tsx` called `finaleBoat.removeFromParent()`. The boat's four geometries and the flag's material stayed allocated until the unmount's context loss. Each replay built a new boat.
2. **No `webglcontextlost` handler.** A runtime context loss (GPU reset, driver, memory pressure on a phone) left the world frozen on its last frame. Bosque and Feria already fall back to 2D in that case; Madrid did not.

## Fix
- `app/madrid-infectada/madrid3d.ts`: the boat's flag is tagged `userData.ownMaterial`, and a new `disposeBoat()` frees every boat geometry plus the flag's own material, then detaches the boat. The hull, deck and mast materials come from the shared `solid()` cache in `app/noche-abierta/build3d.ts`, which the city also draws with, so they are left alive (freeing them would only force a recompile, but there is no reason to).
- `app/madrid-infectada/World3D.tsx`:
  - the "back on the pier" branch calls `disposeBoat(finaleBoat)` instead of `removeFromParent()`;
  - a `webglcontextlost` listener calls `preventDefault()`, sets `disposed`, cancels the frame and calls `onFail()` once (MadridGame then shows the 2D map, as when WebGL is missing at start). The loop already returns when `disposed` is set;
  - cleanup removes that listener **before** its own `renderer.forceContextLoss()`, so an ordinary unmount is never reported as a failure.

## Evidence
- **Regression tests** (`tests/madrid-infectada-gpu.test.mjs`, run by `scripts/test-worker.mjs` inside `npm test`):
  - "frees the finale boat when the finale ends": two finale rounds; each end must free ≥ 4 geometries and exactly one material, the double-sided flag. On main's `World3D.tsx`: **FAIL** («freed 0»).
  - "falls back to 2D when the WebGL context is lost": the loss is claimed (`defaultPrevented`), `onFail` is called once, a second loss does not report twice, and a loss after unmount reports nothing. On main's `World3D.tsx`: **FAIL**.
  - The 11-11 test still passes.
- **Mutations** (facilitator): boat only detached again → test 2 fails; every boat material freed → test 2 fails; the listener removal deleted → **not caught**, because the `disposed` guard also blocks a report after unmount (defence in depth; the browser check below covers it from the other side).
- **Real browser** (`node scripts/qa-feria-browser.mjs --madrid-gpu`, SwiftShader, playwright from `/opt/node-tools`): on this branch 5/6. The unmount checks pass at both widths (5 textures, 0 buffers, context lost, `failed: false`, so the forced loss on unmount did **not** trigger the 2D fallback), and the remount is non-blank at both widths. The one failure is the 1280 px Metro-trip guard: textures 84 → 85 between rounds (the guard allows no texture slack). **The same failure reproduces twice on main's code** (84 → 85, buffers 2,524 → 2,578 and 2,514 → 2,584), so it predates this change; the 11-11 file already recorded 85 → 85 in its reviewer's run. Not caused by this repair; recorded as a harness flake to look at. Evidence folders are facilitator-local (`/tmp/claude-0/qa-madrid*`), not published.
- **Not verified:** the boat freeing in a real browser (the harness does not drive a finale), and a real-device context loss. The 2D fallback path itself is the existing `onFail` path that WebGL-less devices already use.

## Gates
- **G1–G3:** no lesson text, objective or audio changed. `test:language` runs inside `npm test`.
- **G4** (author ≠ reviewer): a fresh agent acting as Alejandro, in its own worktree at `36a6b16b`: **APPROVE**, 0 blockers.
  - VERIFIED by the reviewer: the pier boat and pier use the same `solid()` keys as the finale boat, so keeping those materials alive is right; `boat()` has one caller and one release; an unmount during the finale still frees the boat through `free(scene)`; `disposed` is read only by the loop guard and the beam timeout, World3D has no async loader, and the cleanup does not depend on `disposed`, so onFail → unmount still frees everything; the listener is removed before `forceContextLoss()`.
  - Ran: `node --test tests/madrid-infectada-gpu.test.mjs` 3/3 on the branch; tests 2 and 3 fail with main's `World3D.tsx` and `madrid3d.ts`; eslint clean. Mutations caught: every boat material freed; `disposed` guard removed; `disposed = true` removed; `removeFromParent()` restored. Survived: removing `cancelAnimationFrame` (NB1), removing `removeEventListener` (NB2).
  - **NB1 applied:** the stub renderer now counts draws, and test 3 asserts that nothing is drawn in 10 frames after the loss. A handler without the `disposed` set fails it (facilitator mutation). Removing only `cancelAnimationFrame` still passes, because `disposed` ends the loop on its next callback.
  - NB2 (listener removal not caught): accepted, covered by the `disposed` guard and the browser check (`failed: false` on unmount).
  - NB3 (a new untagged material added to `boat()` would leak, not be caught): accepted for a function this small.
  - NB4 (HYPOTHESIS: `forceContextLoss()` on an already-lost context only warns): not tested; no change.
  - No inter-executive messages; the facilitator briefed the reviewer and read its report.
- **G5:** SwiftShader only; no real device.
- **Checks (local, Linux):** eslint on the three changed files clean; `tsc --noEmit` shows only the 3 errors already on main (`app/estados-unidos-a2-b1/data.ts` ×2, `app/noche-abierta/voice.ts`); `git diff --check` clean; full `npm test` at `36a6b16b` (plus the docs-only facts sheet): exit 0, **2,053 pass, 0 fail** (pinned baseline commits fetched, `SPANISHCUE_TEST_WORKER_TIMEOUT_MS=180000`). After NB1 (test file only): `node --test tests/madrid-infectada-gpu.test.mjs` 3/3.
