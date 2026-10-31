---
name: two-audiences
description: Two audiences, one brand: /para-profesores and /aprender-espanol landings, Teach/Learn header selector, audience analytics (PR #203, #207)
metadata:
  type: project
  modified: 2026-10-16T04:33:29.054Z
---

LIVE 2026-10-16 ~04:50Z (PR #203 + smoke fix #207, main 9cd89d3, production smoke green). Thread "Profesores y estudiantes: dos audiencias" (cmsg_01Gr5R4j3t2Yet65UcmhcVhA9oo3c1gyo3Qst7QGh7PHkF).
- Home `/` stays the teacher home, unchanged hero; only gains `<AudienceSwitch active="teacher" />` in app/Library.tsx.
- /para-profesores reuses SpanishCueHero (kickerInHeading); /aprender-espanol has its own hero; primary CTA goes to /demo/noche-abierta?from=aprender-espanol&level=A1. No student checkout, no prices on the student page.
- Code in app/audience/*; events audience_selected_teacher/student, teacher/student_demo_started; payload carries `audience`. Docs: docs/seo-strategy.md §13. English copy manifest docs/audits/two-audiences-english-additions-20261015.json (Ale «apruebo» 2026-10-16 03:33Z).
- Copy uses tú, not voseo (neutral-Spanish guard).
- Prepared, not active: register GA4 custom dimension `audience`; UTM prefixes teacher_/student_.
- Lesson: production smoke checks for NEW pages must tolerate 404 on spanishcue.com until promoted, because the scheduled Production Smoke Monitor runs main's script against old production and a failed `smoke` check blocks Deploy Production for every later SHA (deadlock seen 2026-10-16).
