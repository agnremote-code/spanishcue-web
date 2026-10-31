---
name: casino-gran-meridiano
description: Class 237 /marketing-de-casinos rebuilt as "El Gran Meridiano", a 3D Las Vegas casino game A1–C2 (C1 = marketing track)
metadata:
  type: project
  modified: 2026-10-13T19:11:28.815Z
---
Ale asked on 2026-10-13 to replace the ugly, one-student B1 casino-marketing class with a "super wow" 3D casino that every student can use. It works like Noche abierta: a sexy blonde heroine, white circles on the floor, one multiple-choice answer, then conversation. C1 stays about marketing because Ale uses that level with that one student only.

What was built (PR #176, merged as main 3343cc2, LIVE in production 2026-10-13 ~19:30Z with production smoke green):
- Same ID 237 and route /marketing-de-casinos. The catalog now says A1–C2, Modo Play, "El Gran Meridiano: una noche en Las Vegas", cover /marketing-de-casinos/cover.webp.
- The heroine is Valentina, in a red dress with long blonde hair. Story «La ficha dorada»: her father Ernesto (renamed from Tomás, because the neutral-Spanish guard flags «Tomás» as voseo), Don Aurelio Montalbán and the password «Escalera real».
- 3 floors, each at y = 0, 7 and 14, with an elevator; 20 scenes:
  - Floor 1, La Planta: portero, recepcion, tragamonedas, ruleta, blackjack, dados, caja, bar.
  - Floor 2, El Bulevar: apuestas, poker, bufe, teatro, capilla, discoteca.
  - Floor 3, Piso VIP (mafia): vip, bacara, puros, anfitrion, terraza, oficina.
- Each scene has 2 choices × 3 options, an ending, 5 talk questions and 4 words.
- Files in app/marketing-de-casinos: layout.mjs, engine.mjs, levels/*.mjs, casino3d.ts, World3D.tsx, CasinoGame.tsx. They reuse the Noche abierta people3d and world3d modules.
- Test: tests/casino-marketing-b1.test.mjs (old filename kept on purpose, since catalog-additions and test-worker reference it). Catalog-additions has a 237 edit pair for the A1 count (41→40 for 238, 40→39 for 237).

Not verified: real GPU and real mobile (only SwiftShader QA). Related: [[noche-abierta-v2]], [[reino-rosa-dormida]].

Round 2 (Ale, 2026-10-14, PR #177, main fafa598, LIVE in production 2026-10-14 ~04:40Z with production smoke green):
- Space jumps and N is a nitro in every 3D game: the casino, Noche abierta (`keyAction` KeyN gives nitro, `NITRO_SPEED` in world3d.mjs) and the Reino (N and Q).
- Before entering, the student picks Valentina's money. Tiers: nada, 100, 500, 1000, 10000, 100000, 1000000. Each scene has `money[tier]` openings that end with the same question as `line`, so the options fit.
- Talk questions are about life, emotions and psychology. A2 and up use colloquial Spanish, with an adult tone and no filters.
- 10 new wild scenes take it to 30:
  - Floor 1: borracho, jackpot, tramposo, perdedor.
  - Floor 2: despedida, pelea, gritona.
  - Floor 3: habano, yate, senador.
- More people around the tables, from the AROUND extras in layout.mjs. Scenes and extras can set a `mood`.
- The content spec is the round-2 SPEC2 in the session scratchpad (temporary). The guard also flags «bebé», «cumplí» and «dale».

Round 3 (2026-10-14, PR #178, main 26844fa, LIVE ~06:15Z, staging + production deploy green): Ale reported «cuando salgo de una conversación no me deja salir». Cause: closing a scene left Valentina in its circle and the used mark had been cleared while the card was open, so the scene reopened ~0.5 s later (bug existed since round 1). Fix: pure `circleStep` in layout.mjs keeps the circle spent until she walks out; tested. QA tip: SwiftShader at 1440×900 runs ~2 fps; use W=480 H=360 for timing checks.

Round 4 (2026-10-14, PR #188 merged as main ee568b9; LIVE ~17:20Z via later main dc0a3d6, staging + production green): Ale asked for C1 to become a normal story level and for Marketing to be its own section. Marketing is level id MARKETING (`track: true` in levels.mjs, levels/marketing.mjs): A2–B1 with casino-marketing terms, one choice per scene (no options2/money); the engine ends a scene after one choice when there is no options2. The new C1 is a general «La ficha dorada» level with money openings. Staging deploy failed twice at the extra curl checks in deploy-staging.yml (noindex header or founder-status "mode":"sandbox"); both smoke scripts passed and staging auto-rolled back to 80120be. Suspected staging env drift. The auto-mode classifier blocked re-dispatching staging with the old SHA; asked Ale. Logs are readable via mcp__github__get_job_logs (gh run view --log is blocked by the proxy).
