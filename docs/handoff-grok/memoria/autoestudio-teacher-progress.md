---
name: autoestudio-teacher-progress
description: 2026-10-13 fix of Autoestudio teacher tracking (Ver progreso modal, real % over 240 sections, Mis alumnos 401), PR #164, plus D1 read access facts
metadata:
  type: project
  modified: 2026-10-13T07:59:12.533Z
---

Thread "Autoestudio: progreso y Ver progreso" (cmsg_01Gr5R4j3t2Yet65UcmhcVhAJCvDSutvAZStYmnHwLXc5C), PR #164, branch claude/autoestudio-progreso-profesor-20261013.
- Causes found: (1) 0% because list % = completed weeks/20 and nobody had finished a week; learners' sections WERE syncing to D1. (2) «Ver progreso» worked but rendered its detail after the whole list (~2,900px below, measured in Chromium). (3) «Mis alumnos» always 401: worker/index.ts identityAware list lacked /api/students and /api/class-records, so the Firebase session was never verified there (prod `students` table had 0 rows).
- SHIPPED 2026-10-13 ~08:20Z: merged main 05f393c, staging + production deploy and smoke green. Pending: Ale to check «Ver progreso» live. Report: /mnt/project-files/autoestudio/progreso-profesor/informe.md.
- Fix: portaled modal; two indicators (weeks 0–20, course % over 240 required sections, 1 decimal); section first-finish timestamps kept (json_patch order); adapter retries; test tests/autoestudio-teacher-progress.test.mjs (run from scripts/test-worker.mjs).
- Two «Cyree» A1 learners are distinct ids (44a1e41d…, 2c4ac93e…), both no progress; never merge.
- Claude has read access to production D1 via the Cloudflare MCP (db spanishcue-production 343ac454-a056-4c40-a893-f8be572665a6, staging 23fe3c11-…). Only SELECTs without an explicit ask from Ale.
See [[autoestudio-course]].
