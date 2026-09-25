# La ciudad no duerme implementation plan

**Goal:** Implement the supplied SPANISHCUE B1 conversation brief as a playable urban district, inside the existing premium library.
**Architecture:** One isolated client lesson, separate authored content, a small deterministic movement/branch engine and scoped CSS. Original raster city artwork and a mascot sprite sheet provide the world; React and CSS provide camera, input and dialogue. Existing catalog and Worker authorization remain authoritative.
**Tech stack:** Existing React, TypeScript, CSS and Node test runner. No new dependencies.
**Spec:** User attachment `Pasted text(20260925-160624).txt`, sections 1–34. Ten locations, continuous movement, controlled conversation branches, optional teacher support, free exploration and a reflective ending. User explicitly requests implementation without intermediate approvals or agents; execution and review are performed inline.
**Base:** `231acb915e78747b89e4b101038dadb5a587abf0`.

## Global constraints

- CONVERSACIÓN, B1, approximately 45 minutes; Spanish student text and official male mascot identity.
- No scores, correct-answer logic, investigation, missions, agents or new framework.
- No unrelated lesson, auth, billing, D1, environment or release-state changes.
- One `codex/*` task branch, remote checkpoints, non-draft PR, repository auto-merge only. Production publication belongs to the release controller.
- Reduced motion, keyboard/mouse/touch, clear return controls, responsive viewport.

## Review focus

- Held keys must stop on blur, dialogue opening, pointer cancellation and tab hiding.
- Clicking a far destination must visibly walk there before opening; keyboard input cancels that destination.
- Keyboard events on links, buttons, inputs and teacher controls retain native behavior.
- Every choice and ending can return to exploration; revisiting starts an intentional new branch.
- Narrow screens and enlarged text must scroll dialogue without covering its close button or trapping the user.

## Tasks

- [ ] 1. Write failing engine tests for time-based movement, world boundaries, camera bounds, destination arrival and interactive input exclusions. Implement `app/la-ciudad-no-duerme/engine.mjs` and its declarations. Run `node --test tests/urban-city.test.mjs`.
- [ ] 2. Author `content.json`: ten situations, distinct choice consequences, teacher follow-ups, optional second decisions and five closing prompts. Validate every destination and branch; integrate the original city, mascot and interior artwork under `public/la-ciudad-no-duerme/`.
- [ ] 3. Implement `CityGame.tsx`, `city.css`, and the route. Use time-based requestAnimationFrame motion, pointer capture, scene focus, camera follow, accessible native buttons/dialog, optional support and ending. Check in browser at desktop and mobile sizes.
- [ ] 4. Register one premium catalog entry and preview. Add the new engine/content checks to the existing Worker test runner without changing shared package/workflow files. Run the existing suite, lint, artifact validation, typecheck and diff checks; report baseline issues separately.
- [ ] 5. Self-review the diff and scope, commit and push all source/assets, open one non-draft PR, follow CI and verify the merged SHA. Report release state accurately.

## Execution record

- Initial inspection: current main fetched; open PR #65 changes infrastructure and package.json, with no overlap with lesson files. Existing baseline: 14/14 release-policy and Red Flag tests passed.
- Isolation: fresh canonical clone and branch `codex/la-ciudad-no-duerme-20260925`; surviving old worktree was read only.
