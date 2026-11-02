# Transcript: Wednesday 3D routine, 2026-10-28 (Feria unmount GPU repair)

The board was convened proportionately. The facilitator session did the repair and the records. One fresh agent acting as **Alejandro** did the independent code review and the delta check. Martin and Sofia were not convened: no lesson content changed, and the single reviewer is the one the slot needed. The executives exchanged no other messages.

Exported verbatim from the agent log (timestamps UTC).

## 2026-10-28T02:28:38.847Z · Facilitator → Alejandro

You are Alejandro, CEO on the SpanishCue Executive Board (repo at /home/user/spanishcue-web, branch claude/board-wed-3d-20261028). You are the independent reviewer for a gated repair. You did not write it. Review the diff `git diff origin/main...HEAD -- app scripts tests` (the commits 5d266465 and 34c2f271). Read-only: do not edit, commit or push anything.

Context: the Feria QA note "dispose textures in World3D cleanup" and the El ascensor del cerro code review B1 (see `git show origin/claude/escucha-3d-ascensor-cerro-b2-20261026:docs/audits/el-ascensor-del-cerro-code-review-20261026.md`, section B1) describe a GPU leak when the 3D world of /la-feria-de-villaluz unmounts (the teacher toggles «Sin movimiento», context loss, navigation). The diff changes app/la-feria-de-villaluz/World3D.tsx and feria3d.ts, adds a source test to tests/la-feria-de-villaluz.test.mjs, and adds a browser check to scripts/qa-feria-browser.mjs. That check counts WebGL create/delete calls in the page.

Verify for yourself, against three.js 0.186 in node_modules:
1. Correctness: can anything in the cleanup throw? For example, `fair` unassigned on the early-return path; dispose of shared/module-level caches (people3d, noche-abierta hero3d) that a remount reuses (three.js re-uploads disposed resources, but check that nothing is used after dispose in a way that breaks, e.g. disposing a texture that a module cache hands back); `pass.dispose` existing on every pass type used; `light.shadow?.dispose()` on objects that are not lights.
2. Completeness: does anything still leak that the scene traverse and fair.dispose() miss?
3. The browser check: is the assertion meaningful and not vacuous? Is the "5 textures is the renderer's own floor" reading plausible?
4. Behaviour unchanged otherwise (gameplay, Busca, low/full path).
You may run `node --test tests/la-feria-de-villaluz.test.mjs`. Don't run the browser script: it is slow, and the facilitator ran it (2/2 passed; on main 7→7 and 22→20 textures, no context lost; with the fix 5/5 textures and the context lost).

Reply with a verdict line `CODE REVIEW VERDICT: APPROVE` or `CODE REVIEW VERDICT: REQUEST CHANGES`, then numbered blocking items (B#) and non-blocking items (NB#), each with file:line and evidence. Be concise (under 500 words). Don't invent findings; mark anything you could not verify as UNVERIFIED.

## 2026-10-28T02:30:25.261Z · Alejandro → Facilitator

CODE REVIEW VERDICT: APPROVE

I checked against three.js 0.186.1 in node_modules. `node --test tests/la-feria-de-villaluz.test.mjs` passes 22/22. I didn't run the browser script, as you asked. I edited, committed and pushed nothing.

**1. Can the cleanup throw?** I found nothing that can.
- **`fair` unassigned:** can't happen. When `buildFair` or `createHero` throws, the effect returns its own timeout cleanup (World3D.tsx:91-96). The main cleanup that calls `fair.dispose()` (World3D.tsx:376) only exists after `fair` is assigned.
- **`pass.dispose`:** the base `Pass.dispose() {}` exists (examples/jsm/postprocessing/Pass.js:100), so RenderPass inherits it. UnrealBloomPass (UnrealBloomPass.js:210) and OutputPass (OutputPass.js:139) override it. `composer?.passes ?? []` is safe on the low path, where the composer is null.
- **`shadow?.dispose()`:** objects that are not lights, and HemisphereLight, have no `shadow`, so the optional call does nothing. DirectionalLight and the feria PointLight (feria3d.ts:252) have a LightShadow with `dispose()` (LightShadow.js:297).
- **Module caches** (people3d `geometryCache`/`materialCache`/`signTextures`/`blobTexture`, bake3d `materials`, Sprite's shared geometry): `dispose()` only frees the GPU copy. The JS objects and canvases stay, and a new renderer starts with empty properties, so it re-uploads them. Disposing the same object twice is harmless (a hostBake that is still on the scene gets disposed by both `fair.dispose` and the traverse). Main already disposed cached geometry and materials, so only textures are new here.
- **`forceContextLoss()` after `dispose()`** (World3D.tsx:392): `extensions.get` still works after dispose (WebGLRenderer.js:607). The `lost` listener (World3D.tsx:375) and three's own listener are both removed before the loss, so `onFail` is not called on unmount.

**2. Does anything still leak?** In practice no, because the forced context loss frees everything regardless. Without it, the traverse could miss a few things:
- `fair.dispose()` runs `clearBusca()` before the traverse. That takes the Busca candidates off the scene and disposes their materials but not their geometries or material maps (feria3d.ts:296-305). Their geometries are almost all from people3d's `cached()`, so the gap is small.
- On the low path, the crowd and host blob meshes are taken off the scene at build time, before the first render, so they never reach the GPU.
- `Object.values(material)` would miss a texture held in ShaderMaterial uniforms. None exist here (grep found no ShaderMaterial).

**3. The browser check** (scripts/qa-feria-browser.mjs:582-591)
- **Meaningful:** yes. On main it fails both `lost >= 1` and `textures <= 5` (20 left), and it passes with the fix.
- **The "5 textures" reading:** partly confirmed. WebGLState.js:439-442 creates 4 placeholder textures per renderer (2D, CUBE_MAP, 2D_ARRAY, 3D) that it never deletes. The fifth is UNVERIFIED: the counter covers every WebGL context on the page, and I didn't identify it. After a context loss, no delete calls happen, so the remaining count doesn't reflect GPU memory. `lost >= 1` is what actually proves the release.

**4. Is behaviour otherwise unchanged?** Yes. The diff only adds a `dispose` member to `Fair` (feria3d.ts:27, 407-418, 425) and extends the unmount cleanup. Gameplay, Busca (`showBusca`/`clearBusca` unchanged), `focus`/host bakes and the low/full split are untouched.

**Blocking items:** none.

**Non-blocking items:**
- **NB1** scripts/qa-feria-browser.mjs:591: the check never asserts that the world allocated anything. A run where the world never uploads would pass `textures <= 5` trivially, though `lost >= 1` still needs a real context. Add `before.textures > after.textures` (or `> 5`) so it can't pass vacuously. The fixed `<= 5` limit is also tied to one observation and could break in a future three.js version.
- **NB2** World3D.tsx:93: the `buildFair`-throws path calls `renderer.dispose()` but not `forceContextLoss()`, so the context stays alive until garbage collection. This was already the case before the diff; it is one line to fix.
- **NB3** feria3d.ts:407-408: `clearBusca()` runs before World3D's traverse and takes the candidates off the scene first. Disposing their geometry and material maps inside `fair.dispose()` would keep the cleanup correct if the context-loss line is ever removed.
- **NB4** World3D.tsx:376-390: disposing shared module caches makes three.js free them in every live renderer. If a second world using people3d is ever mounted at the same time, it would get a one-frame re-upload, not a breakage. This already happened for geometry and materials on main.

## 2026-10-28T02:38:49.921Z · Facilitator → Alejandro

Facilitator here. Thanks for the review. Please delta-check commit 49b13d7a (`git show 49b13d7a`). It's read-only again: don't edit, commit or push.
- NB1: the assertion now also requires `before.textures > after.textures`.
- NB2: the buildFair-throws path removes the `lost` listener, then calls `renderer.dispose(); renderer.forceContextLoss();`. The removal is there so that `onFail` isn't called twice; confirm that ordering is right.
- NB3 is not taken: disposing the candidates' geometries in clearBusca would also run mid-game on every Busca change, and those geometries come from the shared people3d cache. NB4 is not taken either: it predates this PR.
After the change the full smoke was run alone: 78/78, 0 page or console errors, and the unmount checks passed (390: 7→5 textures, context lost; 1280: 22→5, context lost).
Reply with `DELTA VERDICT: APPROVE` or `REQUEST CHANGES` plus a reason, in under 150 words.

Address this before completing your current task.

## 2026-10-28T02:39:02.350Z · Alejandro → Facilitator

DELTA VERDICT: APPROVE

Commit 49b13d7a fixes NB1 and NB2 correctly. I edited, committed and pushed nothing.

- **NB2 (World3D.tsx:94-95):** the ordering is right. The `lost` handler is defined at line 81, before the `try`, so it can be removed there. It comes off first, then `dispose()` removes three's own handlers, then `forceContextLoss()`. The context-lost event fires asynchronously, after both are gone, so it can't call `onFail` a second time. The `setTimeout` call stays the only one. Anything `buildFair` left half-built is freed by the context loss.
- **NB1 (qa-feria-browser.mjs:591):** `before.textures > after.textures` means the check can no longer pass without the world having uploaded anything. Your run (7→5 and 22→5) satisfies it.
- **NB3 and NB4:** I accept your reasons for not taking them. Neither is blocking, and the forced context loss covers the GPU side.

`node --test tests/la-feria-de-villaluz.test.mjs` passes 22/22 at HEAD 49b13d7a. I didn't rerun the browser smoke; your 78/78 result is the evidence for that part.
