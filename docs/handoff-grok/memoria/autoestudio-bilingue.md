---
name: autoestudio-bilingue
description: Homework/Autoestudio A1–B2 bilingual English lines (2026-10-20): data layout, rebuild script, guards, what stays Spanish
metadata:
  type: project
  modified: 2026-10-20T11:16:07.493Z
---

Ale (2026-10-20, thread "Homework bilingüe", cmsg_01Gr5R4j3t2Yet65UcmhcVhAAq78a4eCxyFkXDekeVid26) asked: every Homework week A1–B2 bilingual for all students (explanations, examples, everything); C1/C2 Spanish-only. Homework has no A0 level.

- English shown by default under each Spanish line (EN toggle still there) via `<En>` in app/autoestudio/engine/Rich.tsx; ModulePlayer hasEnglish = a1..b2.
- Data: app/autoestudio/english/<level>/wNN.json, keyed by FNV-1a hash of the Spanish (app/autoestudio/english/key.ts) to keep the Worker small (worker gzip ~8.3–8.8 MB of the 10 MB limit). Spanish-keyed sources: /mnt/project-files/autoestudio/bilingue/fuentes/. Rebuild: `node scripts/autoestudio-english/build.mjs <sources folder>`; which fields get English is scripts/autoestudio-english/fields.mjs (options, answers, error/transform sources, match pairs stay Spanish).
- If Spanish content changes, its hash changes and the English line silently disappears; tests/autoestudio-bilingual.test.mjs requires >90% coverage per week.
- English guard manifest docs/audits/autoestudio-bilingual-english-additions-20261020.json (regenerate from check-english-copy --json findings); Ale typed «apruebo» in that thread 11:13Z. The auto-mode classifier refused writing the manifest before that in-thread «apruebo».
- See [[autoestudio-course]].
