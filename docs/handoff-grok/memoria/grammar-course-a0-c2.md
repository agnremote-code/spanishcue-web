---
name: grammar-course-a0-c2
description: Grammar course G001–G240 (course map, ids 300+seq, extensions, batch workflow for new live classes, audio/branch and deploy gotchas) — read before adding or changing course classes
metadata:
  type: project
---

Ale 2026-10-20 (thread cmsg_01Gr5R4j3t2Yet65UcmhcVhA7uti8pjZgE63fehKQeyYqQ): build every planned unit G001–G236. Done 2026-10-20/21: all 236 live (PRs #232–#248, prod b786edd), English help in the 30 older B1–C2 classes (#249, prod a851c4b), extensions G237–G240 + 7 missing audit topics (#250). Progress doc docs/curriculum/progreso-implementacion.md; audit docs/curriculum/auditoria-cobertura-pcic-mcer-2026-10-20.md §6.

- Curriculum: app/grammar-classroom/curriculum.ts rows [code,id,level,topic,title,path,prereqs,status]; new id = 300+sequence, URL /gramatica/<slug>. Extensions G237+ are appended (no renumbering) and `extensionAfter` places each after its anchor; `courseUnits` is in STUDY order (not sequence order); coursePosition walks that order.
- Per batch: lesson g<ID>.ts + clip in clips.json; catalog row + addedAt; registry; thumbnail data.mjs + render; preview mp4; count tests (a1Lessons only for A1); neutral-spanish exemptions need category+reason; English manifest docs/audits/grammar-course-english-additions-20261020.json. Branch must be claude/gramatica-en-vivo-* for the audio workflow.
- Gotcha: cut the next batch branch only AFTER the previous branch's «Generate grammar live audio» commit lands, else add/add conflicts on mp3s and manifest.json (fix: merge -X theirs, then rebuild manifest clips from both sides with sha256 check).
- Gotcha: merging while main's deploy is promoting fails «Enforce a single production deployer»; open the next PR only after the previous deploy finishes. A failed deploy can't be re-run («Require SHA… CI-verified»); the next merge carries everything.
- Gotcha: CI verifies the PR HEAD, not a merge with main: long-lived branch chains miss main's test fixes; merge main in. Live-class route test 503 was fixed by reading every response body (a91dc59).
- Gotcha: tests/level-cleanup forbids the string «A0» in lesson files except authored A0 surfaces.
- Untested by a human: audio pronunciation, real-account use on spanishcue.com. No official PCIC sub-item check.
