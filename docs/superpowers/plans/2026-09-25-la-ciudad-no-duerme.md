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

- [x] 1. Write failing engine tests for time-based movement, world boundaries, camera bounds, destination arrival and interactive input exclusions. Implement `app/la-ciudad-no-duerme/engine.mjs` and its declarations. Run `node --test tests/urban-city.test.mjs`.
- [x] 2. Author `content.json`: ten situations, distinct choice consequences, teacher follow-ups, optional second decisions and five closing prompts. Validate every destination and branch; integrate the original city, mascot and interior artwork under `public/la-ciudad-no-duerme/`.
- [x] 3. Implement `CityGame.tsx`, `city.css`, and the route. Use time-based requestAnimationFrame motion, pointer capture, scene focus, camera follow, accessible native buttons/dialog, optional support and ending. Check in browser at desktop and mobile sizes.
- [x] 4. Register one premium catalog entry and preview. Add the new engine/content checks to the existing Worker test runner without changing shared package/workflow files. Run the existing suite, lint, artifact validation, typecheck and diff checks; report baseline issues separately.
- [ ] 5. Self-review the diff and scope, commit and push all source/assets, open one non-draft PR, follow CI and verify the merged SHA. Report release state accurately.

## Execution record

- Initial inspection: current main fetched; open PR #65 changes infrastructure and package.json, with no overlap with lesson files. Existing baseline: 14/14 release-policy and Red Flag tests passed.
- Isolation: fresh canonical clone and branch `codex/la-ciudad-no-duerme-20260925`; surviving old worktree was read only.
- Synchronized with merged main `9c9c9d4a110dc46117401d0274c4f8f42b27f197`; no competing open PRs at final review.
- Content: ten locations, twenty decision situations, fifty distinct choice follow-ups plus optional teacher prompts and five reflective closing questions. Branch destinations reconnect to exploration; both rooftop and bar endings return to the city.
- Visuals: nine original optimized WebP assets (about 1.5 MB total), with a transparent animated sprite based on the official male mascot. No new dependencies.
- Browser QA used the actual lesson components in a temporary isolated fixture because the real route correctly requires premium access. Checked arrow taps, mouse/touch controls, automatic walking to selected locations, distinct responses, optional second decisions, teacher support, map, return controls and both endings. Desktop, 768 px tablet and 390 px mobile layouts were inspected; mobile and tablet had no horizontal overflow. Screenshots: `docs/lessons/la-ciudad-no-duerme/`.
- Browser review fixed two concrete issues: movement on very short key/pointer taps and unwanted scroll displacement of the stage when focused. Reduced-motion CSS was inspected; OS-level reduced-motion emulation was not exercised.
- Self-review: catalog/family integration is unique and premium; global interface and unrelated lesson content are unchanged. Shared test changes only add this lesson's checks and increment catalog count expectations. No auth, billing, secret, D1, environment, workflow or release-coordination changes.
- Final local checks: `npm test` passed 235/235 tests, including the verified production build; `npm run lint`, `npm run validate:artifact` and `git diff --check` passed. `npx tsc --noEmit` reports eleven existing diagnostics in billing subscription handling, marketing samples and Mexico map data. A clean archive of current main with the same TypeScript compiler produced the identical eleven diagnostic lines; none concern the new class.
- Delivery: repository CI and merge status, including the verified merged SHA, are recorded in the task PR. Production publication remains exclusively owned by the Sites release controller.
