---
name: 3d-a0-a1-simplificacion
description: 2026-10-16 simplification of A0/A1 in all five 3D conversation games, bilingual keywords, new A0 for casino (237) and bosque (226); PR #211
metadata:
  type: project
  modified: 2026-10-16T06:13:13.966Z
---
LIVE 2026-10-16 ~06:40Z (main a7efb5f, staging+production deploy green). Ale asked 2026-10-16 04:51Z (thread cmsg_01Gr5R4j3t2Yet65UcmhcVhASVaoY975PfgXwL4pE5sFGm) to lower A0/A1 in the 3D games, add bilingual keywords and A0 where missing. PR #211 (branch claude/3d-a0-a1-simple).

- New A0: casino levels/a0.mjs (30 scenes, money optional at A0, money picker + listening hidden), bosque content/a0.mjs (72 prompts, Prompt.en parallel English arrays, listening hidden).
- A1: casino + hospital A1 rewritten; Reino got its own `a1` band (A2 'base' untouched) + `keywords {a0,a1}`; Noche got pedagogy-a1.mjs + street/words-a1.mjs keywords. Hospital patients.mjs 'basic' band is shared A0–A2 (now A0-level).
- GAP: Noche abierta A1 street text still shared with A2 (band A, ~122k words); only keywords added. Offered Ale a follow-up.
- Catalog 226/237 list A0; undo steps prepended to the 240 entry in tests/helpers/catalog-additions.mjs; level-cleanup authored list includes them.
- English manifest docs/audits/3d-a0-a1-english-additions-20261016.json. The auto-mode classifier BLOCKED citing Ale's old blanket «apruebo» (10-14) for a new manifest; needed a fresh «apruebo» typed in the thread.
- Neutral guard false positive: «bebé» flagged as voseo.
