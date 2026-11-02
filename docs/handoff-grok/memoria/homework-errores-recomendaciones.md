---
name: homework-errores-recomendaciones
description: Homework error history, teacher «Errores y dificultades»/«Preparar próxima clase», class recommendations and premium demo (PR #168, 2026-10-13)
metadata:
  type: project
  modified: 2026-10-13T09:51:51.771Z
---

Thread "Homework: errores y clases premium" (cmsg_01Gr5R4j3t2Yet65UcmhcVhAKmESsvzZcWT2aUruCZpUpD) delivered PR #168 (branch claude/homework-errores-recomendaciones-20261013, commits bf0e06b + 650c02b), merged; deploy fix PR #169 (main caeed9d) deployed to staging and production on 2026-10-13. Report: /mnt/project-files/autoestudio/errores/informe.md. Doc in repo: docs/autoestudio-errores.md.

Design facts a new Claude would otherwise rediscover:
- New D1 tables use prefix `homework_` (errors, teacher_notes, events) on purpose: scripts/autoestudio-release-gate.mjs counts `autoestudio_%` objects from 0011 and must not change. Migration drizzle/0012 is CREATE IF NOT EXISTS, applied by both deploy workflows and checked by scripts/verify-homework-errors-schema.mjs. tests/production-export-import.test.mjs lists every table (count 25) and needs a fixture row per new table.
- Error log is append-only; the client sends only ids/given/verdict and the server resolves question/correct/category from the curriculum (app/autoestudio/curriculum/lookup.ts). A later correct answer only sets corrected_at.
- Teacher views live in app/autoestudio/errors/TeacherErrors.tsx, mounted in the «Mis alumnos» dialog (TeacherPasses.tsx), not in /cuenta layout.
- Recommendations only map to Gramática lessons with a guided classroom (classroomIds); demo route /autoestudio/clase/[id] serves previewOf() truncated server-side; the modal embeds the existing CheckoutButton (no new prices). No PayPal Live checkout was ever executed.
- Repo guards: scripts/neutral-spanish.mjs rejects rioplatense forms like «Dale» in app copy (use «Da»); tests/level-cleanup.test.mjs (runs only inside scripts/test-worker.mjs, last batch) forbids the literal `A0` in any app/ file outside the authored list, so never write that level name in new code. CI (ci-automerge.yml) runs the full `npm test`.
- Deploy workflows must apply D1 migrations with `wrangler d1 execute DB --remote --file <sql>`: `--command "$(cat …)"` breaks when the SQL starts with a `-- comment` (wrangler parses it as CLI args; staging deploy of 2238e93 failed that way, fixed in PR #169).

- Upsell (PR #172, main 914860a, LIVE 2026-10-13): app/autoestudio/errors/upsell.ts + StudentUpsell.tsx render a «NUEVO · SpanishCue para alumnos» card at the end of every Autoestudio section, topic by exercise majority → section text → week objectives, class from recommendationCatalog(level); hidden for fullAccess. Ale asked for it visible-but-subtle in every section, tied to the matching grammar class. Copy stays Spanish-only (the English-copy guard rejects new English strings).

**Why:** Ale wants errors never overwritten, real catalog classes only, and billing untouched.
**How to apply:** extend categories in app/autoestudio/errors/categorize.ts + catalog.ts; keep tests/homework-errors*.test.mjs green (they run inside scripts/test-worker.mjs). See [[autoestudio-course]], [[autoestudio-teacher-progress]].
