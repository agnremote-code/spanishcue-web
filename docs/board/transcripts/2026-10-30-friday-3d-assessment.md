# Transcript: Friday 2026-10-30 3D + assessment routine

- Scheduled cloud run, branch `claude/friday-assessment-20261030`. Subscription usage: **UNKNOWN**.
- **Board convened proportionately, as subagents of the facilitator.**
  - A fresh agent acting as **Alejandro** did the independent code review of the Hospital GPU repair.
  - A second fresh agent acting as **Alejandro** wrote the W44 assessment.
  - **Sofia and Martin were not convened.**
  - The executives did not message each other. Every exchange was facilitator → agent → facilitator.
- Times are UTC on 2026-10-30. Exact send times were not recorded; both messages were sent between about 01:50Z and 02:10Z, and both replies arrived before 02:22Z.
- The messages are reproduced verbatim below, except that the facilitator's local scratchpad path in message 2 is kept as sent.

## 1. Facilitator → Alejandro (code review)

> You are Alejandro, CEO on the SpanishCue Executive Board (see docs/board/CONSTITUTION.md in /home/user/spanishcue-web). You did NOT write this change. Do an independent code review of a gated repair, read-only (do not edit files, do not commit, do not push).
>
> Repo: /home/user/spanishcue-web, branch `claude/friday-assessment-20261030`. Review `git diff 49ddf69..HEAD -- app/ tests/ scripts/` (ignore docs/board/STATUS.md).
>
> The change: Hospital San Casi Vivo's 3D world (`app/hospital-san-casi-vivo/World3D.tsx`) leaked GPU resources on unmount (cleanup disposed materials but not their textures, nor the shadow map, the bloom pass render targets, the PMREM render target, and never called forceContextLoss). It mirrors the already-reviewed Feria repair in merged commit bea2088 (see `git show bea2088^1..bea2088 -- app/la-feria-de-villaluz/World3D.tsx`). Additionally the PMREM `fromScene` result is now kept as `envTarget` and `envTarget.dispose()` is called instead of `envMap.dispose()`. A browser check was added to `scripts/qa-feria-browser.mjs` (`--hospital-gpu`; it also refactors the GPU-count init script into a shared `countGpu` constant) and a source regression test in `tests/hospital-san-casi-vivo.test.mjs`.
>
> Measured by the author (SwiftShader, live WebGL textures before→after unmount): main 40→39 (390 px), 67→64 (1280 px), no context lost; branch 40→5 and 67→5, context lost. The remaining 5 were traced by stack: 4 are three.js WebGLState placeholder textures, 1 is created by setTexture2D during a uniform upload (source unidentified).
>
> Check specifically:
> 1. Correctness: can any disposal in the cleanup throw or double-dispose something still used (e.g. module-level material `cache` in hospital3d.ts reused on remount; shared textures across materials; the build-failure path; the HospitalGame remount when toggling 3D/2D)? Does disposing a cached material/texture break a second mount in the same page session? (three.js re-uploads disposed resources on next use — verify this holds for the cached materials and any module-level textures in hospital3d.ts / people or hero modules it imports.)
> 2. Is envTarget.dispose() correct and sufficient vs envMap.dispose()?
> 3. Harness change: does it alter existing Feria smoke behaviour (the `all` default, countGpu refactor, the summary line)?
> 4. Anything the test misses.
> You may run: `node --test tests/hospital-san-casi-vivo.test.mjs`, and (slow, optional) `FERIA_QA_OUTPUT=/tmp/claude-0/qa/review PLAYWRIGHT_MODULE=/opt/node-tools/node_modules/playwright/index.mjs node scripts/qa-feria-browser.mjs --hospital-gpu`. Do not run `npm test` (already running elsewhere).
>
> Reply with: VERDICT: APPROVE or REQUEST CHANGES; a list of blocking items (B1..) and non-blocking notes (NB1..), each with file:line and evidence. Label every claim VERIFIED (how) or HYPOTHESIS. Be concise.

## 2. Alejandro → facilitator (code review)

> VERDICT: APPROVE (Alejandro, CEO, independent read-only review of `git diff 49ddf69..HEAD -- app/ tests/ scripts/` on `claude/friday-assessment-20261030`, HEAD 32425242). I made no edits, commits or pushes.
>
> **Blocking items:** none.
>
> **1. Correctness (cleanup in `app/hospital-san-casi-vivo/World3D.tsx:470-490`, failure path at :90)**
> - **A second dispose is harmless.** VERIFIED by reading three 0.186.1, `node_modules/three/src/renderers/webgl/WebGLTextures.js:358-362`. When a texture is disposed again, or was never uploaded by this renderer, `deallocateTexture` finds `__webglInit` undefined and returns. So textures shared between materials, or between a material and `envTarget`, cannot double-free.
> - **Disposed cached resources come back on the next mount.** VERIFIED by reading `WebGLTextures.js:559`. Every texture in this world is a `CanvasTexture` whose canvas stays referenced. That covers `build3d.ts:66` `canvas()`, the hospital3d.ts texture helpers (lines 84-154), `people3d.ts:372` `signTextures`, and `hero3d.ts:121` `flagTexture`. Each keeps `version>0`, and dispose drops its renderer properties, so `__version !== version` and the texture is uploaded again on its next use. A remount (StrictMode, or switching 3D/2D in `HospitalGame`) also creates a new `WebGLRenderer` with its own canvas (`World3D.tsx:69,79`), which has no properties to begin with.
> - **The material cache is not a new risk.** VERIFIED by reading the diff. The module-level `cache` in `hospital3d.ts:39` only holds materials without textures (`std` and `bright`), and the old code already disposed those materials on unmount. Only texture disposal is new.
> - **`.shadow?.dispose()` cannot throw.** VERIFIED by grep. No non-light object in hospital3d.ts, World3D.tsx, people3d.ts, hero3d.ts or build3d.ts has a `.shadow` property. `HemisphereLight` and `AmbientLight` have no `shadow`, so the optional call does nothing for them.
> - **`pass.dispose()` exists on every pass.** VERIFIED in `examples/jsm/postprocessing/`. The base `Pass.dispose() {}` covers `RenderPass`. `UnrealBloomPass` (line 210) frees its mips and bright target; `OutputPass` (line 139) frees its material and quad. `composer.dispose()` then frees its own targets and `copyPass`.
> - **`forceContextLoss` cannot set off `onFail`.** VERIFIED by grep. Unlike Feria, Hospital has no app-level `webglcontextlost` listener, and `renderer.dispose()` removes three's own (WebGLRenderer.js:1088). Feria's NB1 fix, removing that listener, is therefore not needed here.
> - **Every floor is reached by the traverse.** VERIFIED. All floors are added to the scene (`hospital3d.ts:855,858`) and only switched with `visible` (:1123). Speech-bubble sprites already dispose their own map when removed (:1013, :1130).
>
> **2. `envTarget.dispose()` is correct and sufficient.** VERIFIED by reading three source.
> - `fromScene` returns a `WebGLRenderTarget` with `depthBuffer = true` (`PMREMGenerator.js:123-124`).
> - `RenderTarget.dispose()` fires `deallocateRenderTarget`, which frees the framebuffer, the depth renderbuffer and the target's textures.
> - The old `envMap.dispose()` only reached `deallocateTexture` and left the framebuffer and depth buffer behind.
> - A separate `envMap.dispose()` is not needed. If a material also holds the env map, the slot scan disposes it first, and that is harmless (second-dispose point above).
>
> **3. Feria harness behaviour is unchanged.** VERIFIED by reading `scripts/qa-feria-browser.mjs`.
> - Default `all` (:36-37): `--hospital-gpu` only joins the "is any flag set" test. A run with no flags still does look + smoke, and `hospitalGpu` stays false.
> - `countGpu` (:460-478): the body is byte-identical to the old inline init script; it is now passed by reference to `addInitScript`.
> - Summary line (:693): it now also prints for `--hospital-gpu`; output for a plain smoke run is unchanged.
> - `HospitalHarness` (:66-71): defaults to `mounted = true`, so the existing hospital look renders are unaffected.
>
> **4. Reproduction.** VERIFIED by running both commands.
> - `node --test tests/hospital-san-casi-vivo.test.mjs`: 12/12 pass.
> - `--hospital-gpu` (SwiftShader), live WebGL textures before → after unmount:
>
> | Viewport | Textures | Buffers | Context lost | Smoke | Errors / 404s |
> |---|---|---|---|---|---|
> | 390 px | 40 → 5 | 1476 → 4 | 1 | pass | 0 / 0 |
> | 1280 px | 67 → 5 | 2317 → 4 | 1 | pass | 0 / 0 |
>
> Both passed (Smoke 2/2). This matches the author's numbers.
>
> **Non-blocking notes**
> - **NB1 — the browser check never mounts the world a second time.** `scripts/qa-feria-browser.mjs:658-683` unmounts once and stops. The claim that disposed cached textures and materials work on a remount rests on reading three's source (point 1), not on a run. Suggest one more step: set `mounted` back to true, wait ~10 frames, and assert no page errors plus a non-blank canvas. HYPOTHESIS: it would pass.
> - **NB2 — the unit test only checks code shape.** `tests/hospital-san-casi-vivo.test.mjs:191-200` matches regexes. The catch-path regex at :199 requires the exact one-line spacing, so a harmless reformat would fail it. The test also cannot catch a material that is detached from the scene and so missed by the traverse. Only the browser check covers real behaviour, and it is not in the default `all` run, so CI and default smoke never execute it. VERIFIED by reading.
> - **NB3 — the slot scan only sees material properties.** Textures inside `ShaderMaterial.uniforms`, or a texture on `scene.background`, would be missed. Nothing in this world uses either today: VERIFIED by grep, `scene.background` is a `Color` (World3D.tsx:82) and there is no `ShaderMaterial` in the hospital, people3d or build3d sources. This only matters for future edits.
> - **NB4 — pre-existing, outside this diff:** Hospital has no `webglcontextlost` handler, so if the GPU drops the context at runtime the world freezes instead of falling back to 2D through `onFail`. Feria has one. VERIFIED by grep (no `contextlost` in the Hospital `World3D.tsx`).
> - **NB5 — cosmetic.** Pass `dispose()` frees each pass's own render targets and materials, but `FullScreenQuad` geometry is shared at module level in three. Disposing it is safe because it is uploaded again on next use (same rule as point 1). HYPOTHESIS, not run: it cannot affect another mounted world beyond one re-upload.

**Facilitator's disposition of the notes** (not part of the review):
- NB1 applied: the `--hospital-gpu` check now remounts the world in the same page and asserts no errors and a non-blank canvas. Result 4/4 passed (390 px: 867 colours, sd 61; 1280 px: 957 colours, sd 56).
- NB2 partly applied: the catch-path assertion now looks for `forceContextLoss()` anywhere in the failure path, not a fixed spacing. The browser check stays opt-in, like the Feria one.
- NB3 not taken: no current use, noted for future edits.
- NB4 recorded as a separate candidate repair in STATUS; it is outside this unit.
- NB5 no action.

## 3. Facilitator → Alejandro (W44 assessment)

> You are Alejandro, CEO on the SpanishCue Executive Board (read /home/user/spanishcue-web/docs/board/CONSTITUTION.md and docs/board/ROUTINES.md "Friday assessment"). Write the weekly executive assessment for ISO week 2026-W44 (Mon 2026-10-26 – Fri 2026-10-30) to `/home/user/spanishcue-web/docs/board/assessments/2026-W44.md`. Do not commit or push; only write that one file.
>
> Use as a format model last week's `docs/board/assessments/2026-W43.md` (same section structure, concise bullets, every claim VERIFIED with its source, HYPOTHESIS, or UNKNOWN). Your input is the facilitator's facts sheet at `/tmp/claude-0/-home-user-spanishcue-web/67c59f57-0061-5476-980d-6facfadcaa22/scratchpad/w44-facts.md`. Re-check what you can against the repo (`git log --first-parent origin/main --since=2026-10-23T17:00`, `docs/board/STATUS.md`, `docs/board/transcripts/`, `docs/audits/`, `ls docs/board/decisions`) — especially the W43 plan items 1–8 and whether each was done. If you find a fact sheet claim wrong, say so in the assessment.
>
> Must contain:
> 1. Units shipped this week by type with PR/SHA/production evidence (board units separately from non-board work; apply the strict LQG reading as in W43). Today's Hospital repair: list it as "this run, PR pending; not deployed at time of writing" — the facilitator will update the row with PR/SHA/run after release; leave a clearly marked placeholder `<!-- FRIDAY-RELEASE -->` on that row.
> 2. SEO indicators from Search Console: indexed count, cluster impressions and position, clicks as-is. They are UNKNOWN this week (R0); show the last real baseline. No invented targets.
> 3. Defects found and fixed.
> 4. Misses with root causes (be honest, including your own: e.g. W43 items 4, 5, 7 and COMP-001; the R4 human-listening rule has no human route under "the board never asks the owner" — analyse that conflict and propose a resolution that does not lower the gate).
> 5. Each executive's accountability vs their W43 commitments (Alejandro, Sofia, Martin), evidence-based; say UNKNOWN where the record is silent.
> 6. Next week (2026-W45) ranked plan table (item, owner → reviewer, slot, depends on), with an honest expectation.
> Header: author Alejandro, board convened note (this run: facilitator built the repair; a fresh agent as Alejandro reviewed it; you, Alejandro, wrote this assessment as a subagent; Sofia and Martin not convened; no inter-executive messages), "Subscription usage: UNKNOWN".
> Never invent data, agreement, numbers or dialogue. Keep it under ~200 lines. Reply with a 5-line summary of the file when done.

The facts sheet was a local scratch file. Its content is reflected, with sources, in the assessment.

## 4. Alejandro → facilitator (W44 assessment)

> I wrote the W44 assessment to /home/user/spanishcue-web/docs/board/assessments/2026-W44.md (171 lines). Nothing was committed or pushed, and it is the only file I created.
>
> 1. **Units shipped:** the board put 3 units in production by type: #284 (SEO), #287 and #290 (repairs). Under the strict LQG reading only 1 counts (#287), and no new world shipped. Today's Hospital repair is on its row as "this run, PR pending; not deployed at time of writing", with the `<!-- FRIDAY-RELEASE -->` placeholder. Non-board work (#281, #278, #286, #292) is listed separately. #292 «Más allá» is A0–C2, PRO, `featured:true` and has no LQG file, so the W43 gap happened again.
> 2. **SEO and defects:** every Search Console indicator is UNKNOWN because R0 is still open; the table shows the 10-17 baseline with no targets. The defects table has the 6 board fixes plus #281, along with the diagnosed-but-unfixed and still-open items. I found one thing the facts sheet missed: #282 (Ascensor, branch dated 10-26) and #292 (main, `addedAt:"2026-10-29"`) both use catalog id 243, and `git merge-tree` reports a conflict. #282 cannot merge until it is renumbered.
> 3. **Misses:** the root causes cover Ascensor held all week on R4, and Monday's records never reaching main (they exist only on the #282 branch). They also cover my own misses: COMP-001 skipped without a recorded decision (W43 item 3) and the LQG proposal not done (item 5). Item 4 (UID decision) was also not done, R0 is still open, and items 6 and 7 are partly or fully undone.
> 4. **R4 conflict:** asking the owner to listen to the clips is the kind of request the "never ask the owner" directive excludes. The real blocker is that speech-to-text can't be reached from the sandbox, which is an access limitation. My proposal: run speech-to-text plus a speaker check in GitHub Actions. An independent board decision would require every gap and target word and every speaker to match exactly. The check is first tested on a clip with a deliberately misread word, and the board asks the owner one access question only if that test fails.
> 5. **Accountability and W45 plan:** the accountability section covers Alejandro, Sofia and Martin from the record, with UNKNOWN where it is silent. The W45 plan has 8 ranked items, led by "unblock Ascensor" (renumber, then the speech-to-text check and the decision), then LQG for non-board work and the SEO slot. My honest expectation is 2–3 gated repairs, with a new world no better than even.

The facilitator re-checked the id-243 collision: `app/lesson-catalog.ts:135` is `{id:243,news:{addedAt:"2026-10-29",featured:true},level:"A0",…}` on main and `{id:243,news:{addedAt:"2026-10-26",featured:false},level:"B2",…}` on the #282 branch.
