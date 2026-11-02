---
name: noche-abierta-conversacion-general
description: Noche abierta closing conversation questions (talk/ layer, 5 per scene/level, object ≤1) and the shared app/conversacion-general component + audit for other 3D classes
metadata:
  type: project
  modified: 2026-10-15T18:24:42.514Z
---

PR #198 LIVE 2026-10-15 (main d5134dd). Thread "Noche abierta: preguntas de conversación" (cmsg_01Gr5R4j3t2Yet65UcmhcVhALq1zd4Gycp1ZozyzSdohgt).

Ale's rule (2026-10-15): the carried object changes the STORY (NPC reactions, decisions, endings) but the closing conversation is about the learner's real life: 5 open, varied questions per interaction per level (A0 bilingual), never weapons/safety/procedures, varied topics across the class.

- Narrative: street encounter `variants` hold only `{start, fx}`; no `speak` anywhere.
- Conversation: `app/noche-abierta/talk/` (street-*.mjs, places-1/2.mjs, a0.mjs, objects.mjs). Object replaces slot 5 with one question from its human-theme pool, rotated by turn = scenes closed. Places: `talk[0]` = the place's personal question.
- Shared: `app/conversacion-general/GeneralQuestions.tsx` (teacher picks/goes back, progress kept per page visit) and `audit.mjs` (word limits per level, weapon/risk/procedure regexes, near-duplicate Jaccard ≥0.6, corpus no-repeat, consecutive topic, 15% topic share). Hospital San Casi Vivo ([[hospital-san-casi-vivo]]) can reuse them.
- Check: `node scripts/check-noche-talk.mjs`; tests/noche-talk.test.mjs. English A0 lines approved via docs/audits/noche-abierta-talk-english-additions-20261015.json.
- Not verified on real GPU/browser.

Related: [[noche-abierta-v2]], [[noche-abierta-ciudad-viva]].
