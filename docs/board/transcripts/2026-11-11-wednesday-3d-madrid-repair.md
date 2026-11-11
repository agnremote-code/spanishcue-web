# Transcript: Wednesday 2026-11-11 3D routine (Madrid infectada GPU repair)

- Scheduled cloud run, branch `claude/board-wed-3d-20261111`, PR #406. Subscription usage: **UNKNOWN**.
- **Board convened proportionately, as subagents of the facilitator.**
  - The facilitator built the repair, the browser check and the regression test.
  - A fresh agent acting as **Alejandro** did the independent code review.
  - **Sofia and Martin were not convened**: no content changed, and the reviewer only had to be someone other than the author.
  - No executive messaged another. The only exchange was facilitator → Alejandro → facilitator.
- Times are UTC on 2026-11-11. Exact send times were not recorded. The request went out at about 02:38Z, and the report came back before 02:45Z, when the facilitator read the clock.
- The messages are reproduced verbatim below. The facilitator's local scratchpad paths are kept as sent.

## 1. Facilitator → Alejandro (code review request)

> You are **Alejandro**, an executive on the SpanishCue board (see docs/board/CONSTITUTION.md in /home/user/spanishcue-web). You are the independent code reviewer for a gated repair you did NOT write. Be adversarial: your job is to find what is wrong, not to confirm.
>
> ## What to review
> Branch `claude/board-wed-3d-20261111` (already pushed; base main = `301306c`). Diff: `git -C /home/user/spanishcue-web diff 301306c..origin/claude/board-wed-3d-20261111`. Files:
> - `app/madrid-infectada/World3D.tsx` (the unmount cleanup and the Metro "leave" path)
> - `scripts/qa-feria-browser.mjs` (new `--madrid-gpu` SwiftShader browser check + MadridHarness)
> - `tests/madrid-infectada-gpu.test.mjs` (new JSDOM regression test), wired in `scripts/test-worker.mjs`
> - `docs/audits/madrid-infectada-repair-gpu-20261111.md` (the LQG audit file with the claims; may be uncommitted in the main tree — read it from /home/user/spanishcue-web/docs/audits/)
> Precedent repairs to compare with: `app/mas-alla/World3D.tsx` (its `free()` and cleanup), `docs/audits/mas-alla-repair-gpu-20261106.md`, `tests/mas-alla-gpu.test.mjs`.
>
> ## Isolation rules (important)
> - Do NOT edit, stash, checkout or run mutations in /home/user/spanishcue-web: another process is running the full test suite there.
> - Make your own worktree: `git -C /home/user/spanishcue-web worktree add /tmp/claude-0/review-wt origin/claude/board-wed-3d-20261111` and symlink node_modules: `ln -s /home/user/spanishcue-web/node_modules /tmp/claude-0/review-wt/node_modules`. Do mutations only there. For a main copy use another worktree at 301306c (`/tmp/claude-0/review-main`).
> - Never commit, push, comment on GitHub, or touch any PR. Read-only on GitHub.
> - When you are done, remove your worktrees with `git worktree remove --force <path>`.
>
> ## What to check (at minimum)
> 1. Correctness of the cleanup: anything disposed that is still used after (e.g. shared/cached materials, module-level textures reused on remount: `canvas()` from kit3d, people3d caches, `solid()` cache in noche-abierta/build3d.ts), double-dispose hazards, ordering, exceptions in cleanup that would skip `forceContextLoss` or canvas removal, behaviour on the low path (no composer, no shadows), and the remount path.
> 2. Whether anything still leaks on unmount that the fix missed.
> 3. The regression test: does it fail on main and pass on the branch (run `node --test tests/madrid-infectada-gpu.test.mjs` in both worktrees)? Run at least one mutation (e.g. remove `renderer.forceContextLoss()` or the InstancedMesh traverse) in your worktree and confirm the test catches it.
> 4. The browser check: run it once in your worktree on the branch: `PLAYWRIGHT_MODULE=/opt/node-tools/node_modules/playwright/index.mjs FERIA_QA_OUTPUT=/tmp/claude-0/review-qa node scripts/qa-feria-browser.mjs --madrid-gpu` (takes ~10–20 minutes on SwiftShader; run it with a long timeout or in the background). Report the numbers. Judge whether the 5% buffer slack on the trip check is justified or hides a leak.
> 5. Whether the LQG audit file's claims match the code and your measurements; flag any overclaim.
>
> ## Output
> Return: verdict **APPROVE** or **CHANGES REQUESTED**; a numbered list of blockers (must fix) and notes (NB1, NB2, ...), each with file:line and a concrete reason; and exactly what you ran with its results (commands, pass/fail, numbers). Never claim you ran something you did not.

## 2. Alejandro → facilitator (code review report)

> **Verdict: APPROVE, with no blockers.** Branch `claude/board-wed-3d-20261111` at `2df3b8b9`, base `301306c`.
>
> The cleanup is correct and in the right order. The regression test fails on main and passes on the branch. The browser check passes 6/6 in my own run. The notes below are about test coverage and wording in the audit file. None of them makes the fix wrong.
>
> ## Correctness checks (no defects found)
> - **Shared and cached objects.**
>   - These caches get disposed on unmount: `solid()` in `noche-abierta/build3d.ts:51`, the people3d material, geometry and sign caches, `gear3d.ts:184 puffTexture`, and the `madrid3d.ts:43 once()` texture cache.
>   - This already happened on main, because `disposeGroup(scene)` was already called there.
>   - In three 0.186, disposing a geometry, material or canvas texture only frees its GPU copy. The object stays usable and is uploaded again on the next render, so the next mount with a new renderer works.
>   - The browser check's remount step confirms this: 301 colours at 390 px and 532 at 1280 px, with 0 errors.
> - **Double dispose.** `markTex` is freed twice: once through the speech-mark sprites in `free(scene)` and again in the stock loop. The same happens to `puffTex`, `dustMat`, `sparkGeo` and the others when particles are alive at unmount. A second dispose only fires an event with no listener, so it is harmless.
>   - `EffectComposer.dispose()` (0.186) does not dispose the passes, so the pass loop does not double-dispose. The test's `bloom === 1` confirms this.
> - **Exceptions and order.** Nothing new in the cleanup can throw. `sun.shadow.map?.dispose()` handles a null map on the low path, and `if (composer)` guards the composer. `renderer.dispose()`, then `forceContextLoss()`, then removing the canvas matches the Más allá precedent (`app/mas-alla/World3D.tsx:472-480`).
>   - A throw in `charlas.dispose()` would still skip everything after it, but that was already true on main.
> - **Low path.** No composer and no shadow map; both are handled. The browser check at 390 px exercises this path.
> - **Leaks still left.** On unmount I found none: the browser counts every texture and buffer the code deletes explicitly (context loss does not reset them), and it showed 0 buffers and 5 textures. During play, see NB4.
>
> ## Notes
> - **NB1: the test does not cover the particle cleanup.** With the stock loop removed (`World3D.tsx:912`), `tests/madrid-infectada-gpu.test.mjs` still passes.
>   - The browser check probably misses it too: the stock only reaches the GPU if a spark, crow or dust event fired, and the harness does not force one.
>   - So defect 5 in the audit is fixed in code but checked by neither test. The audit does not claim it is tested, but G5(a) reads as if it covers everything.
> - **NB2: the "canvas is removed" assertion cannot fail.** With `renderer.domElement.remove()` (line 917) deleted, the test still passes. React's unmount already detaches the parent `.mi-canvas` div, so `isConnected` is false either way.
>   - To make it real, check `renderer.domElement.parentNode === null`.
> - **NB3: the Metro-exit change does nothing new and is untested.**
>   - Switching `leaveMetro` (line 315) from `disposeGroup` to `free()` changes nothing today, because the station has no `InstancedMesh`. The test's `freed.instanced === 0` after the trip proves this.
>   - Reverting it still passes both tests. The audit says this honestly ("unmount-only"). It is a reasonable guard for the future.
> - **NB4: the audit's reason for leaving the boat alone does not hold.**
>   - The audit says freeing the finale boat mid-lesson "would dispose live materials" because `boat()` uses cached `solid()` materials. But `leaveMetro` already frees the station mid-lesson, and the station uses `solid()` about 71 times plus the cached `metro-logo` texture, on main and on the branch.
>   - Disposing a live material in three only forces a recompile and upload, not breakage. So the boat could be freed the same way.
>   - The real remaining issue is `World3D.tsx:778/807`: each replay of the finale builds a new `boatModel()` and only detaches the old one. Its geometries and textures stay on the GPU until unmount. A detached boat is not in the scene, so `free(scene)` never reaches it; only the context loss reclaims that memory.
>   - Because of that, the audit sentence "On unmount, the boat is inside the scene and is freed there" is only true for the current boat. It is an overclaim to correct in the file; it does not need a code fix in this PR.
> - **NB5: the 5% buffer slack on the trip check is thin.**
>   - Drift from round 1 to round 2: +46 on main at 390 px (audit), +42 in my run at 390 px (slack 60), +12 at 1280 px (slack 129). At 390 px that leaves only 14–18 buffers of headroom, so the check could fail intermittently on random zombie spawns.
>   - It does not hide a leak. A station left behind adds about 410 buffers and 15 textures per round, far beyond the slack. The textures also get zero slack and stayed flat in my run (42→42, 85→85), so they are the stronger guard.
>   - Suggestion: allow 10%, or rely mainly on textures.
> - **NB6: the audit's numbers and evidence.**
>   - The 1280 px texture counts in the audit table are 84→84; mine were 83 at first load and 85→85 after the trips. That is ordinary drift, not a problem. The other numbers broadly match.
>   - The evidence folders (`qa-main2`, `qa-final`, `qa-mut2`) are local `/tmp` folders, so nobody else can check them.
>   - I did not re-run the check on main, so the "4/6 on main" figure, the main unmount counts (18 textures / 3 buffers) and the trip-guard mutation figures (410–435 buffers, 15 textures) are not verified by me.
> - **NB7 (optional):** `sun.shadow.dispose()` would be more complete than `sun.shadow.map?.dispose()`, because it also frees `mapPass`. With PCF shadows nothing is lost, and Más allá does the same as this branch.
>
> ## What I ran
> - **Worktrees:** created `/tmp/claude-0/review-wt` (branch) and `/tmp/claude-0/review-main` (`301306c`), with `node_modules` symlinked; both removed at the end. I made no changes to the main tree and nothing on GitHub.
> - **`node --test tests/madrid-infectada-gpu.test.mjs`:**
>   - On main (test file copied in): **FAIL**, with "the city's tree trunks, crowns and branches free their instance buffers (freed 0)".
>   - On the branch: **PASS**, 1/1.
> - **Mutations in the branch worktree** (original file restored after each; the worktree was clean before removal):
>
> | Mutation | Test result |
> |---|---|
> | M1: remove `renderer.forceContextLoss()` | caught (FAIL) |
> | M2: remove the `InstancedMesh` dispose traverse | caught (FAIL, "freed 0") |
> | M3: remove the particle stock loop | **not caught** (NB1) |
> | M4: remove the composer pass loop | caught (FAIL) |
> | M5: remove `sun.shadow.map?.dispose()` | caught (FAIL) |
> | M6: `leaveMetro` back to `disposeGroup` | not caught (NB3; changes nothing today) |
> | M7: remove `renderer.domElement.remove()` in the cleanup | **not caught** (NB2) |
>
> - **Browser check on the branch:** `PLAYWRIGHT_MODULE=/opt/node-tools/node_modules/playwright/index.mjs FERIA_QA_OUTPUT=/tmp/claude-0/review-qa node scripts/qa-feria-browser.mjs --madrid-gpu` exited 0 with **Smoke 6/6**, 0 page or console errors and no 404s. Log and screenshots are in `/tmp/claude-0/review-qa`.
>
> | Viewport | Trips (2 Metro entries) | Unmount | Remount |
> |---|---|---|---|
> | 390 px | textures 42→42, buffers 1181→1223 (+42, slack 60) | 5 textures, 0 buffers, context lost once | 301 colours, sd 34 |
> | 1280 px | textures 85→85, buffers 2562→2574 (+12, slack 129) | 5 textures, 0 buffers, context lost once | 532 colours, sd 26 |
>
> - **Not run:** the browser check on main, `npm test`, lint and `tsc`.

## 3. What the facilitator did with it
- **Applied:**
  - NB2: the test now asserts `renderer.domElement.parentNode === null`. A mutation that deletes the cleanup's `remove()` now fails the test; it passed before.
  - NB5: the trip-check slack is now 10% on buffers, still 0 on textures.
  - NB1, NB4 and NB6: corrected wording in the LQG file. NB1: the particle stock is untested. NB4: the boat reason was wrong, and the replayed-boat leak is a follow-up. NB6: the evidence is local and not reproduced on main.
- **No change:** NB3 (already described as a future guard) and NB7 (optional; same as the Más allá precedent).
