# Code review: «El ascensor del cerro» B2 (Sofia's build and the facilitator's wiring)

- **Reviewer:** Alejandro (CEO), the independent code reviewer for Sofia's work under the CONSTITUTION. I did not write any of the code reviewed here.
- **Date:** 2026-10-26
- **Branch / HEAD:** `claude/escucha-3d-ascensor-cerro-b2-20261026` @ `ea1aa203` (draft PR #282). Diff base: main `25b9253`.
- **Scope:**
  - `app/el-ascensor-del-cerro/*`, except `levels/b2.mjs`, which is content and covered by G4.
  - `scripts/qa-ascensor-browser.mjs`, `scripts/check-ascensor.mjs`, `scripts/test-worker.mjs`.
  - `app/lesson-catalog.ts` row 243, `app/resource-seo.ts`, `app/conversation-preview-videos.ts`.
  - `app/escucha-3d/{games.mjs,games.d.mts,loaders.ts,types.ts}`.
  - Tests: `tests/el-ascensor-del-cerro.test.mjs`, `tests/3d-sin-fantasmas.test.mjs`, `tests/noche-abierta.test.mjs`, `tests/level-cleanup.test.mjs`, `tests/rendered-html.test.mjs`, `tests/helpers/catalog-additions.mjs`.
  - Evidence read: `docs/board/evidence/ascensor-2026-10-26/BUILD.md` and its screenshots.
- **Method:**
  - Read every file in scope and `git diff 25b9253..HEAD`.
  - Ran: `npx tsc --noEmit -p .` (0 errors in scope; only the 3 known errors elsewhere: `estados-unidos-a2-b1/data.ts` ×2, `noche-abierta/voice.ts`), `npx eslint app/el-ascensor-del-cerro scripts/qa-ascensor-browser.mjs scripts/check-ascensor.mjs` (0 problems), and the node tests listed under «Tests run».
  - I did not run the browser QA. I rely on Sofia's evidence for G5(a).

## Summary

The build is sound and keeps the world PRO:
- Access policy, Worker and asset protection are unchanged.
- three.js loads lazily.
- The shared kits are reused as AGENTS.md requires.
- The funicular and stairs state machine holds together: the cabin bookkeeping is correct, every exit path ends the ride, and skip and reduced motion work.

Two items block:
1. Unmount cleanup leaks GPU resources: textures, and the cached low-mode bakes. This is the same class of defect QA raised on Feria, and the fix is small.
2. The catalog and ride copy say don Lorenzo rides with you, but nobody is rendered in the cabin.

## Security and access (priority 1): PASS

- **No access-policy change.** `git diff 25b9253..HEAD -- app/access-policy.ts worker/` is empty, and `scripts/protect-client-assets.mjs` is untouched.
- **PRO by default.**
  - Id 243 is not in `samplesByCategory` (VERIFIED `app/access-policy.ts:2`).
  - The Worker resolves the page by catalog path and redirects non-full-access users to `/acceso` (VERIFIED `worker/index.ts:283, 330, 338`).
  - `/audio/escucha-3d/…` is premium because `escucha-3d` is not in `freeAudioPrefixes` (VERIFIED `app/access-policy.ts:6`, `worker/index.ts:288-289`).
- **Client chunks.** `protect-client-assets.mjs` treats everything outside its explicit `publicRoots` as private. The ascensor modules and `content/ascensor/b2.json` were not added to `publicRoots`, so they are encrypted like Feria's (VERIFIED by reading `protect-client-assets.mjs:57-172` and the empty diff).
- **No query-param or client-side access.**
  - The only query parameter read is `?debug` (`AscensorGame.tsx:156`). It shows a draw-call and fps line and nothing else.
  - The only network call is the E1 `PUT /api/progress` (`AscensorGame.tsx:194`), which the server already refuses for non-PRO users.
- **No premium content in a public import.**
  - Outside the world's own directory, ascensor is referenced only by: the catalog row (strings and paths), `resource-seo.ts:154` (lesson id → game id string), `games.mjs` (metadata: title, levels, spots), and `loaders.ts:119-121` (a *dynamic* import of `b2.json`, reached only from `ListeningCard` inside gated pages, as for Feria). VERIFIED by grep.
  - `app/page.tsx` uses only `isImmersiveWorld()` (a boolean).
- **How the QA script gets past `/acceso`.** `scripts/qa-ascensor-browser.mjs:3-7, 85-116`:
  - esbuild bundles `AscensorGame` into a temporary directory;
  - a throwaway `node:http` server serves it on `127.0.0.1` at a random port;
  - it answers `/api/progress` with 204;
  - it has no Worker, no auth and no production URL, and refuses paths containing `..`.
  - **It bypasses nothing in the app.** It mounts the component outside the Worker. It is not imported by any app module, is not in any build entry, and is referenced only by its own usage comment and by `tests/helpers/catalog-additions.mjs`, which uses a file-ownership regex. It writes only to its output and evidence directories. **Test-only, not shipped.** VERIFIED.

## Kit reuse (AGENTS.md 3D rule): PASS

- **Listening.** `ModeSwitch`, `ListeningCard`, `ListeningBadge`, `useListeningMode`, `useListeningDone`, the loaders and `content/ascensor/b2.json` come from `app/escucha-3d` (`AscensorGame.tsx:22-23`). The game is registered with `ownListening: true` (`games.mjs`).
- **People, mascot and movement.** These come from `app/noche-abierta` (`World3D.tsx:22-23`; `people3d` in `cerro3d.ts`). `bump.mjs` and `shout` come from `app/escucha-3d`. `stepPlayer` stays 2D, and height is taken from the terrace, so no physics was added to the shared kit.
- **Both modes in one world.** `switchMode` (`AscensorGame.tsx:212`) closes the card. The World3D instance persists, so the mascot keeps its position.
- **Same controls.** WASD/arrows via `keyAction`, Space, Shift, N, touch joystick and buttons (`World3D.tsx:234-244, 497-529`).
- **Teacher list and fallback.** The teacher list includes routes, circles by height and ways to move between heights. The no-WebGL fallback is shown for missing WebGL, context loss (`onFail`), «Plano sin movimiento» and reduced motion (`AscensorGame.tsx:154-155, 174`).
- **Copying (non-blocking, NB1).** `engine.mjs` is mostly Feria's engine: a sed-normalised diff against `la-feria-de-villaluz/engine.mjs` is 96 lines out of 244. The World3D runtime follows Feria's structure. The board scoped the World Kit to «extract as Feria is built», so this is allowed, but it is now a second copy.

## Memory and bundle: PASS, except B1

- **three.js is lazy.** `next/dynamic(() => import('./World3D'), { ssr: false })` (`AscensorGame.tsx:48-51`). The shell imports only `layout.mjs` (plain data and maths) and type-only `World3D` types. `cerro3d.ts` and `bake3d.ts` are imported only by `World3D.tsx`. The `noche-abierta` test allowlist was extended for exactly these three modules (`tests/noche-abierta.test.mjs:600`).
- **Server bundle.** The content (`levels/b2.mjs`, ~76 KB of text) is in the route's client component, as for every authored world. There is no large binary or generated data. The cover is 83 KB, the hover clip 192 KB, and the six MP3s 307–453 KB under premium `/audio`.
- **Draw calls** (from BUILD.md, not re-run): low path ≤ 103 on tablet and ≤ 74 on phone, against the 120 budget.

## Funicular, stairs, skip, reduced motion: PASS

I traced `World3D.tsx` against `layout.mjs`:
- **Cabin bookkeeping.**
  - `startRide` (`World3D.tsx:214-215`) picks the cabin currently at the departure station.
  - `finishRide` (`:194`) leaves cabin A at the top exactly when A rode up or B rode down.
  - During the ride, `sA` follows `ridePose(...).cabin` (`:346`).
  - The two cabins stay complementary (`cerro3d.ts:555-559`).
- **Every exit path ends the ride.**
  - The ride ends on `t >= 1` (`:350`), on skip by button, E, Space, Enter or Esc (`:236, :519`), on pause or an opened card (`:335`), on a teacher-list travel (`:322`), and on a circle opened from the list (`:312`).
  - Input is locked while riding (`:237, :338`), and touch controls are hidden (`free`, `:511`).
  - Exits stand outside every marker, and `linkSpent` prevents an immediate re-trigger (`layout.mjs` LINKS comment, `World3D.tsx:387-389`).
- **Reduced motion.** It defaults to the plan view (`AscensorGame.tsx:155`). If the user turns 3D on anyway, `startRide` cuts straight to the arrival (`World3D.tsx:220`), the intro camera barely moves, and NPC animation is frozen (`:407, :413`).
- **Pose restore.** Restore rejects positions that are not clear ground, are inside a circle, or are on a link marker (`:60`). The pose is not saved during a ride (`:392`).
- **E1.** `routeProgress` caps at 99 until «Terminar» (`engine.mjs:192-198`). It is sent only after entering, and only when it changes.

## Findings

### BLOCKING

**B1. Unmount cleanup leaves GPU textures and the cached low-mode bakes alive. This is the Feria QA note again.**
- **Where:**
  - `World3D.tsx:484-489`: the cleanup traverses the scene and calls `geometry.dispose()` and `material.dispose()`.
  - In three.js, `Material.dispose()` does **not** dispose the material's textures. The two `CanvasTexture`s created by `cerro3d.ts:543` (`signAtlas()`, 1024×512) and `cerro3d.ts:546` (`muralTexture()`, 1024×512) are never released.
  - In low mode, `cerro3d.ts:621-628` caches one baked group per focus key in `hostBakes`. `focus()` detaches the previous one (`:647`), so at unmount only the attached bake is reachable through `scene.traverse`. Every other cached bake keeps its merged geometry, which was uploaded once it rendered.
  - Nothing calls `renderer.forceContextLoss()`.
- **Why it matters:** World3D is unmounted and remounted whenever the teacher toggles «Sin movimiento» / «3D», on context loss, and on in-app navigation. Each cycle leaks about 4 MB of textures, plus the bakes, plus a WebGL context that lives until garbage collection. The phones and tablets targeted by G5(b) are the devices where this matters.
- **Fix:**
  1. In `cerro3d.ts`, keep references to the two textures and add `dispose()` to the `Cerro` type and object. It disposes `signMesh.material.map` and `mural.material.map`, and traverses every group in `hostBakes` to dispose its geometries and materials, then calls `hostBakes.clear()`.
  2. In `World3D.tsx`, call `cerro.dispose()` in the cleanup. Also dispose texture slots in the traverse: `for (const k of ['map','emissiveMap','alphaMap','normalMap','roughnessMap']) (mat as any)[k]?.dispose?.()`.
  3. After `renderer.dispose()`, call `renderer.forceContextLoss()`.
  4. Add a node test that `Cerro` exposes `dispose`, or a QA assertion that `renderer.info.memory.textures` returns to 0 after unmount.

**B2. Catalog and ride copy say the operator rides with you; the world renders an empty cabin.**
- **Where:**
  - `app/lesson-catalog.ts:135` explanation: «Se sube en el ascensor, en un viaje de prueba con el ascensorista».
  - `World3D.tsx:52-55` `RIDE_TEXT`: «Don Lorenzo te sube / te baja en la cabina de prueba».
  - `AscensorGame.tsx:331`: «Del puerto a lo alto, con don Lorenzo».
  - The cabin (`cerro3d.ts:266-291`) contains no person. Only the mascot is moved during a ride (`World3D.tsx:340-347`). don Lorenzo stays at his circle at the port the whole time. VERIFIED, and visible in `ride-funicular-mid.png`.
- **Why it matters:** this is a catalogue claim the world does not do. The board treats catalogue truthfulness as non-negotiable.
- **Fix, either of:**
  - (a) Remove the claim from all three strings: catalog «Se sube en el ascensor, en la cabina de prueba, o por la escalera»; `RIDE_TEXT` «Subes / Bajas en la cabina de prueba»; list «Del puerto a lo alto, en la cabina de prueba».
  - (b) Seat a Lorenzo-look person in the riding cabin for the ride's duration, and hide his circle host meanwhile.
- (a) is the 3-line fix. Re-run the ascensor test and `tests/rendered-html.test.mjs` if the catalog text changes.

### NON-BLOCKING

- **NB1. Second copy of the world engine.** `engine.mjs` and the World3D structure duplicate Feria's. Record them as the first two consumers when the World Kit is next scoped. No action in this PR.
- **NB2. Ride time is frame-clamped.** `dt` is clamped to 0.05 s (`World3D.tsx:289`), so below 20 fps the 5.2 s ride stretches: about 10 s at 10 fps, and 60–75 s under SwiftShader per BUILD.md. Consider driving `t` from wall-clock time during rides only. Check the real-device ride time in G5(b).
- **NB3. Shared caches disposed on unmount.** The cleanup also disposes `people3d`'s module-level cached geometries and materials, as Feria does. three.js re-uploads disposed resources on next use, so this is safe. A one-line comment would stop someone «fixing» it later.
- **NB4. Story coherence.** A working cabin runs while the station says «Cerrado por reparación», and the scene text says the old carro is on trestles in the taller with all cables to be replaced. The «cabina de prueba» framing is acceptable and the concept §8 asked for a funicular transition. A teacher-note line («el viaje de prueba es solo para recorrer el cerro») would stop students asking.
- **NB5. Look (§9.1).** The screenshots show rows of multi-coloured façades, which is the «colourful houses» postcard risk the concept named. It is mitigated because the mural is a negotiable point and the port reads as working, not poor. This needs Martin's cultural look-pass during G5(b), as BUILD.md itself says («Look: my judgement, not a cultural review»).
- **NB6. `?debug`.** It is harmless and only shows stats. It could be gated on `process.env.NODE_ENV !== 'production'` if the board prefers no visible debug switch in PRO pages.
- **NB7. Test helper.** `catalog-additions.mjs` hard-codes the 295/310 and 317 counts that the next world will have to bump again. This is the existing pattern; noted only.

## Tests run (reviewer, at `ea1aa203`)

```
$ node --test tests/el-ascensor-del-cerro.test.mjs tests/3d-sin-fantasmas.test.mjs tests/level-cleanup.test.mjs
# tests 29  # pass 29  # fail 0     (run after the LQG file existed; before it, only the release-gate subtest failed, as BUILD.md says)
$ node --test --test-name-pattern="three.js stays inside" tests/noche-abierta.test.mjs
# pass 1  # fail 0
$ npx tsc --noEmit -p .   → 3 errors, all pre-existing, none in scope
$ npx eslint app/el-ascensor-del-cerro scripts/qa-ascensor-browser.mjs scripts/check-ascensor.mjs   → 0 problems
```

I did not run `tests/rendered-html.test.mjs`, which needs a built Worker, or the browser QA. Those are CI and Sofia's G5(a) evidence.

## Verdict

B1 is a small cleanup patch in two files. B2 is a three-string copy change, or a seated figure. Neither touches access, content or audio. Once both are in and the ascensor test passes, no further code review round is needed: a diff check of the two items is enough.

CODE REVIEW VERDICT: REQUEST CHANGES (B1, B2)

---

## Delta check 2026-10-26

- **Reviewer:** Alejandro (same independent reviewer; author Sofia).
- **Delta reviewed:** `git diff fbdd843c 0774a67d -- app/el-ascensor-del-cerro tests/el-ascensor-del-cerro.test.mjs` (`AscensorGame.tsx` +7/−1, `World3D.tsx` +10/−1, `cerro3d.ts` +53/−6, test +13), plus the BUILD.md addendum and `ride-lorenzo-in-cabin.png`. No uncommitted changes.
- **Checks (re-run by the reviewer at `0774a67d`):**
  - `node --test tests/el-ascensor-del-cerro.test.mjs tests/3d-sin-fantasmas.test.mjs`: 26/26 pass, including the new «unmount frees the GPU…» test.
  - `node scripts/check-ascensor.mjs`: 615/615.
  - `npx eslint app/el-ascensor-del-cerro`: 0 problems.
  - `npx tsc --noEmit -p .`: the 3 known errors outside scope, none in scope.
  - Not re-run, cited from Sofia's addendum: draw calls, mid-ride max 103 against ≤ 120, and the browser smoke, 65/65.

**B1: CLOSED.**
- `cerro3d.ts` `dispose()` frees `signTexture` and `muralMap`, every group in `hostBakes` (then clears the map), and the rider when he is not in a cabin.
- `World3D.tsx` cleanup calls `cerro.dispose()` and disposes every `isTexture` value on every material before `material.dispose()`. It then calls `renderer.dispose()` and `renderer.forceContextLoss()`.
- `forceContextLoss()` fires `webglcontextlost`, but that listener is removed earlier in the same cleanup, so `onFail` cannot run on unmount (VERIFIED by ordering).
- The attached bake and shared people3d caches can be disposed twice. That is harmless in three.js, and NB3 already covers why.
- The regression test is source-level (string matches), not a GPU-memory measurement. That is acceptable for this item.

**B2: CLOSED.**
- `setRider(rail)` (`cerro3d.ts`) puts a people3d don Lorenzo, with his host look, into the cabin that carries the player. `startRide` calls it for funicular links and `finishRide` clears it, so every exit path (end, skip, pause, travel, reduced-motion cut) removes him.
- While he rides, `visibleHosts(..., riding)` hides his station figure, unless the estación circle itself is open, which cannot happen during a ride. He is also removed from the collision bodies, so he never appears twice.
- `ride-lorenzo-in-cabin.png` shows him in the red cabin next to the mascot.
- The catalog, `RIDE_TEXT` and the teacher-list copy are now true as written.

**NB4: done.** The teacher list adds: «El ascensor sigue cerrado por reparación: la cabina de prueba de don Lorenzo solo sirve para recorrer el cerro en clase, no significa que ya funcione.» The Spanish is correct and the tone is neutral.

**NB6: done.** `?debug` requires `process.env.NODE_ENV !== 'production'`. The check is guarded by try/catch, so it fails closed: debug stays off.

**New observations (non-blocking):**
- During a funicular ride the live rider costs about 30 draw calls in low mode, giving the reported mid-ride maximum of 103. This should be confirmed in the G5(b) real-device run.
- NB1, NB2, NB3, NB5 and NB7 remain as recorded above. None of them blocks.

**Still open outside code review:**
- §9.2: nobody has listened to the 6 clips, which blocks release (see the LQG file).
- G5(b): not done, which blocks `featured`.

CODE REVIEW VERDICT (final): APPROVE
