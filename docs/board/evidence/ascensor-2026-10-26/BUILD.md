# «El ascensor del cerro» B2: build evidence (Sofia, 2026-10-26)

> 2026-11-02: the world was renumbered from catalog id 243 to **246** (243 went to «Más allá» on main). References to 243 below are historical.

Branch `claude/escucha-3d-ascensor-cerro-b2-20261026`. These checks ran in the agent's Linux sandbox on the working tree as it stood when this note was written. They are not CI.

## What was built
- `app/el-ascensor-del-cerro/`:
  - `page.tsx`, `layout.tsx`
  - `AscensorGame.tsx` (the shell): Feria's shell without Busca. It reuses `ModeSwitch`, `ListeningCard`, `ListeningBadge`, `useListeningMode`, `useListeningDone` and `shout` from `app/escucha-3d`.
  - `World3D.tsx`, `cerro3d.ts`, `bake3d.ts`, `layout.mjs` + `.d.mts`, `engine.mjs` + `.d.mts`, `levels.mjs` + `.d.mts`, `ambience.ts`, `ascensor.css`
- People, mascot and movement are imported from `app/noche-abierta`: `people3d`, `hero3d` and `world3d.mjs` `stepPlayer`. The shared kit is unchanged.
- `public/el-ascensor-del-cerro/cover.webp`: the fly-over from the bay, rendered from the real scene. 1200×750, plain lossy `VP8 `, 83 KB.
- `public/conversation-previews/243.mp4`: rendered from the real scene. h264, 640×360, 24 fps, 8.0 s, no audio, 192 KB. It shows 2.5 s of fly-over, then the funicular climbing to the top.
- `scripts/qa-ascensor-browser.mjs`: the G5(a) smoke, draw calls, cover and clip. It is isolated like the Feria script: esbuild bundles the lesson and serves it on 127.0.0.1, and `/api/progress` is answered locally. That is how it gets past `/acceso`.

## How the heights work
- There are three flat terraces: puerto at 0 m, the middle street at 9 m and the top at 18 m.
- The slopes between them are solid, so `stepPlayer` stays 2D and the height comes from the terrace (`groundY`).
- **Funicular «La Gaviota».** It is a scripted ride with no physics (`layout.mjs` `ridePose`).
  - Two cabins on two rails cross mid-hill. The cabin at your station carries you.
  - Input is locked during the ride. The camera follows from the downhill side.
  - The ride lasts 5.2 s of world time.
  - It can be skipped with E, Space, Esc or «Saltar el viaje».
  - Under reduced motion it is an instant cut.
- **Stairway.** Two flights of 70 steps («ciento cuarenta escalones») run port → middle → top. Each flight is a scripted walk of 4–5.5 s with the same skip and cut rules.
- **Starting a ride.** Rides start at the amber markers, in three ways:
  - by walking into a marker,
  - by pressing E or the prompt,
  - from the teacher list («Moverse por el cerro»: lift up or down, stairs, «Ir a: …»).
- Every circle opened from the list, in both modes, puts the mascot at that circle's height.

## Verified (VERIFIED, output from this run)
- `npx tsc --noEmit -p .`: 0 errors in my files. The only errors are the 3 known ones elsewhere (`estados-unidos-a2-b1/data.ts` ×2, `noche-abierta/voice.ts`).
- `npx eslint app/el-ascensor-del-cerro scripts/qa-ascensor-browser.mjs`: 0 problems.
- `node scripts/qa-ascensor-browser.mjs --smoke --calls` under SwiftShader: **Smoke 65/65 passed**, 0 page or console errors, no 404s. It checked:
  - **Canvas:** non-blank at 1280 and 390, with 860+ colours and sd ≈ 50.
  - **HUD:** no control covered, in both modes and during rides.
  - **Teacher list:** reaches all 6 circles in both modes, each at its own terrace.
  - **Funicular up:** ran to the end and arrived at `alto`.
  - **Funicular down:** skipped with the button and arrived at `puerto`.
  - **Stairs:** port → middle and middle → top both arrived.
  - **Other ride starts:** skipping with E works, walking into the station marker starts the funicular, and reduced motion gives an instant cut.
  - **No-WebGL, «Plano sin movimiento» and reduced-motion fallbacks:** the list shows the circles in height order, 1 to 6 (port → middle → top), and the plan shows all 6 circles.
  - **Cards at 390 px:** every card was driven to its last beat in both the plan view and 3D. Nothing clipped, there was no horizontal overflow, each scroll container reaches its last element, and every action button is reachable. The longest card is **asamblea** with all details open: 8390 px of content in a scrolling body, which reaches its end.
  - **Listening cards at 390 px:** all 6 pass. The shared `ol.e3-steps` strip in `app/escucha-3d` scrolls horizontally on purpose (the same in every world). It is recorded but not failed, and it is not in my files.
- **Draw calls, low path** (coarse pointer, DPR 1.25), counted on the GL context:

  | Device | Min | Median | Max | Places |
  |---|---|---|---|---|
  | Tablet | 59 | 87 | 103 | 12 |
  | Phone | 42 | 63 | 74 | 12 |

  The places are the spawn, the 6 circles, the 3 terraces and 2 mid-rides. **Every place is ≤ 120.**
- The facilitator's `tests/el-ascensor-del-cerro.test.mjs` cover test passes, and so does `tests/3d-sin-fantasmas.test.mjs`. The release-gate subtest fails only because `docs/audits/el-ascensor-del-cerro-pedagogy-20261026.md` does not exist yet. That LQG file is not mine.
- **Screenshots** (8-bit, ≤ 71 KB each):
  - `3d-390-title.png`, `3d-390-world.png`, `3d-1280-world.png`
  - `ride-funicular-mid.png` (the cabins crossing, with the mascot inside the red one)
  - `ride-stairs-mid.png`
  - `arrival-medio.png` (the mural)
  - `arrival-alto.png`
  - `fallback-no-webgl.png`
  - `card-390-asamblea-end.png`

## Not verified
- **G5(b) real device.** HYPOTHESIS: fine. SwiftShader is not a phone panel. Under SwiftShader a 5.2 s ride takes 60–75 s of wall-clock time, because it renders about 2 fps and the clock steps at most 1/20 s per frame. Real-device timing and fps were not measured.
- **Audio.** The clips exist (facilitator), but I did not listen to them. The page makes no accent claim. The procedural ambience (wind, harbour hum, gulls) was not checked by ear.
- **Touch.** The joystick and buttons are the same code as Feria's, but no actual touch gestures were driven.
- **Look.** The non-stereotyped look is my judgement from the screenshots, not a cultural review.

## Code review fixes (Alejandro, REQUEST CHANGES B1 and B2), same day
- **B1, unmount leak.**
  - `cerro3d.ts` now returns `dispose()`. It frees the sign-atlas and mural CanvasTextures, every cached low-mode host bake (`hostBakes`, detached and so out of reach of the scene traverse), and the rider figure when he is not in a cabin.
  - `World3D.tsx` cleanup calls `cerro.dispose()` and disposes every texture slot of every material in the traverse. It then calls `renderer.dispose()` and `renderer.forceContextLoss()`. The context-lost listener is removed before that call, so `onFail` does not fire on unmount.
  - Regression test: `tests/el-ascensor-del-cerro.test.mjs`, «unmount frees the GPU…».
- **B2, the empty cabin.**
  - Don Lorenzo (people3d, his host look) now rides in the cabin that carries you during the funicular ride. He stands by the uphill controls on the side the ride camera sees.
  - While he rides, his figure at the lower station is hidden, so he never appears twice. Low mode keeps a separate cached bake for that state.
  - The copy («Don Lorenzo te sube…», «con don Lorenzo», the catalog's «viaje de prueba con el ascensorista») is now true, so I did not change it.
  - VERIFIED visually in a 1600×1000 SwiftShader crop at ride t = 0.5: the mascot and don Lorenzo are both in the red cabin.
  - One extra live figure costs about 30 draw calls, during the ride only. VERIFIED by a re-run of `--calls` in low mode: mid-ride on the funicular is 100 on the tablet and 103 on the phone. The maximum over all 12 places is 103 on both, so the world stays ≤ 120.
- **NB4.** The teacher list («Moverse por el cerro») now says: «El ascensor sigue cerrado por reparación: la cabina de prueba de don Lorenzo solo sirve para recorrer el cerro en clase, no significa que ya funcione.»
- **NB6.** `?debug` now works only when `process.env.NODE_ENV !== 'production'`. The check is guarded by try/catch.
- **Checks after the fixes** (VERIFIED):
  - tsc: 0 errors in my files (3 known errors elsewhere).
  - eslint: 0 problems.
  - `node --test tests/el-ascensor-del-cerro.test.mjs tests/3d-sin-fantasmas.test.mjs tests/noche-abierta.test.mjs`: 61/61 pass.
  - `qa-ascensor-browser.mjs --smoke`: 65/65 passed, 0 page or console errors, no 404s.
