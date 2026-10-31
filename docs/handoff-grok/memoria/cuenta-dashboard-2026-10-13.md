---
name: cuenta-dashboard-2026-10-13
description: /cuenta blank-page fix (PR #166), dashboard redesign (PR #170) and unified «Mis alumnos» hub (PR #173), all live 2026-10-13
metadata:
  type: project
---
- Blank /cuenta pages FIXED and LIVE (PR #166, main 54f1a46). Causes: client-navigation `.rsc` requests skipped worker session handling; SubscriptionManager chunk was private (403) for free accounts.
- Redesign LIVE 2026-10-13 ~11:50Z (PR #170, main e6e9c54, prod deploy + smoke green): 7-section teacher dashboard under app/cuenta/modules, per-section error boundaries, account favorites in additive table lesson_favorites (drizzle/0013, created by the deploy workflows), /api/favorites, Homework tab mounts TeacherPasses (keeps #168 error tabs).
- «Mis alumnos» hub LIVE ~18:20Z (PR #173, prod main de9b0a9, smoke green): Homework tab removed (?tab=autoestudio maps to alumnos), every Homework learner is auto-imported as a student via additive table student_homework_links (drizzle/0014, owner_id+learner_id → student_id; deleted students are not reimported), /api/roster (sync/link). Student profile tabs: Resumen (alerts), Tarea, Clases y asistencia (Asistió/Faltó/Cancelada), Errores, Próxima clase, Recomendaciones (#168 TeacherErrors).
- 2026-10-16 PR #205 (prod main 9cd89d3): roster sync is one db.batch and the panel shows loading (not «no students») while it runs. Unused Homework links (learner alias NULL = student never opened the link) stay in «sin usar», not imported. Error history only exists from 2026-10-13 (PR #168), so older learners show 0 errors. Brad (Ale asked) is in no D1 table; probably a Reino browser-local profile.
- Production deploy refuses while automation/merge-lock exists; the next main merge redeploys automatically. A failed Production Smoke Monitor check on a SHA (e.g. smoke script expects a page prod lacks yet) also blocks deploying that SHA; re-run the Staging deploy of an earlier main SHA instead.
- English-copy guard: new English literals need an owner-approved manifest in docs/audits plus an entry in scripts/check-english-copy.mjs. The auto-mode classifier refuses Claude self-approving; ask Ale with a decision card (Ale approved this one 11:14Z).
- CI runs full `npm test`. GitHub job logs: fetch with the github MCP get_job_logs tool (the Azure blob is blocked from the container).
