---
name: autoestudio-course
description: Autoestudio A1–C2 self-study course in spanishcue-web: routes, data layout, rules Ale set (four skills every week), build status
metadata:
  type: project
  modified: 2026-10-05T14:00:00Z
---

Autoestudio (started 2026-10-01, thread "CHESPANISH Homework Adventure → Autoestudio").
- Routes /autoestudio, /autoestudio/<level>, /autoestudio/<level>/semana-N. Data in app/autoestudio/curriculum (objectives/<level>.ts, modules/<level>/wNN.ts, validate.ts). Access in app/autoestudio/access.ts. One Library entry (app/autoestudio/LibraryEntry.tsx). Registered as approved addition in tests/helpers/catalog-additions.mjs.
- Each week has 13 sections. **Ale's rule (2026-10-01): the four skills are mandatory every week**: reading comprehension, writing exercises, listening, speaking.
- State 2026-10-05: main already carries a FULL A1–C2 course (commit 10c5071 "Recover verified Homework A1-C2", 2026-10-02, plus Codex fixes for voices/mobile audio up to PR #119), deployed to production (677d7f4). Claude's own A2 (20 weeks) + partial B1 drafts are superseded; archived on branch claude/autoestudio-a2-b1-drafts (not for merge). Do not re-author levels; work on main's version.
- Audio: browser speechSynthesis (Codex now requires native Spanish voice locales); edge-tts is blocked by the container proxy. spanishcue.com is unreachable from the container (proxy 403), so smoke tests rely on the deploy workflow.
