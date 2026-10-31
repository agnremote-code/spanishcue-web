---
name: uno-o-el-otro-dilemmas
description: Lesson 137 "Uno o el otro" dilemma stage rebuilt 2026-09-30 with exactly two accumulating conditions (PR #78, deployed)
metadata:
  type: project
  modified: 2026-09-30T06:04:34.805Z
---

2026-09-30: Ale asked to fully fix the dilemma activity of lesson 137 «Uno o el otro» (/modo-play-uno-o-el-otro). Shipped in PR #78 (main 0e39c24), deployed to production (deploy run 36675946751, smoke OK).

- Each of the 48 bank items is a full dilemma in app/modo-play-uno-o-el-otro/choices.ts: options, follow, condition1 {text, against, kind}, afterCondition1, condition2, finalPrompt. Flow logic in dilemma-flow.ts (pure).
- Ale's rules: always exactly 2 conditions; condition 2 adds to condition 1 and the final screen shows both; conditions compatible and pressuring different options; vary conflict types (money is not the default); no yes/no prompts like "¿seguís igual?"; labels CONDICIÓN 1 / CONDICIÓN 2 only. Enforced by tests/uno-o-el-otro-dilemmas.test.mjs.
- Catalog/shared-file changes to an existing lesson must be registered in tests/helpers/catalog-additions.mjs (`repairs` list, PR #80); wave2/wave3/batch1 preservation tests pin those bytes and several are NOT in CI, so run all tests/*.test.mjs before merging. Env-only failures that predate #78: firebase-admin-worker, phonetics-wave1-assets, rendered-html, teacher-access, wave2-preservation MP3 decode x2, wave3-audio.
- Deploy gotcha: dispatching deploy-production right after an auto-merge can fail at "Enforce a single production deployer" because automation/merge-lock still exists for a few seconds; just rerun.
- The container cannot reach spanishcue.com (proxy denies it); rely on the deploy workflow's smoke step.
