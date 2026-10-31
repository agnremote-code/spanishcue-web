---
name: live-class-per-student
description: Live grammar classes in «Con profesor» mode are saved per student in the teacher's account (live_class_sessions, /api/live-class, StudentBar); «Por mi cuenta» stays in the browser
metadata:
  type: project
  modified: 2026-10-15T03:15:30.597Z
---

Ale asked 2026-10-15 02:14Z (thread «Clase inicial A0», cmsg_01Gr5R4j3t2Yet65UcmhcVhAU6V25WkX4bQmyQe5i7KTga): every session with every student is different, so teacher mode must not ask «¿Quieres continuar?»; instead pick the student at the top, keep progress in her account, resume where that student left off, discreet «Empezar de cero»; student mode («Por mi cuenta») unchanged. Built in PR #196 (branch claude/clase-en-vivo-por-alumno), merged as main 96a9fe7, LIVE in production 2026-10-15 03:42Z (table created by the deploy step, smoke green). Not tested with a real signed-in account; only against a mocked API in Playwright.

**How it works** (app/grammar-classroom/live/):
- `store.tsx`: `LessonStoreProvider` takes `studentId`; with it, reads/writes `/api/live-class` (debounced 800 ms, `sync` state local/loading/saving/saved/error, `reset()` DELETEs); without it, localStorage as before. `usePreference()` keeps `mode` and `student:<lessonId>` as browser prefs (NOT inside a student's saved class).
- `StudentBar.tsx` (teacher mode only): students from `/api/students` («Mis alumnos», archived hidden), «+ Nuevo alumno» POSTs with the lesson level (A0 → 'Sin definir'), «Empezar de cero» confirms inline, «Retomamos en …» + sync line. Hidden when `/api/students` is not 200 (visitor).
- `LiveClassroom.tsx`: resume banner only in self mode; in teacher mode with a student, auto `go(resume)` once loaded.
- Backend: `drizzle/0015_live_class_sessions.sql` (owner_id, student_id, lesson_id, saved JSON, updated_at), `db/live-class.ts`, `app/api/live-class/route.ts` (GET list/one, PUT, DELETE; same-origin writes; 64 KB cap), worker identityAware list includes `/api/live-class`; both deploy workflows have a «Prepare live class sessions table» step + `scripts/verify-live-class-schema.mjs`.
- Tests: tests/live-class-sessions.test.mjs (node:sqlite on the real migration), anonymous-denial test in grammar-classroom-routes, grammar-live test 11 switches to self mode before expecting [data-resume].
- Gotcha: `node scripts/test-worker.mjs` does NOT build; run `npm run build` first or the worker tests use a stale dist (looked like mass edge-cache failures).

See [[clase-inicial-a0]], [[grammar-live-class-230]], [[cuenta-dashboard-2026-10-13]].
