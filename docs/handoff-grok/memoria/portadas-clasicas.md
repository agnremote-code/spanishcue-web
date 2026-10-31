---
name: portadas-clasicas
description: Covers of classic (non-3D) conversation lessons and the Más allá cover (2026-10-30): film-poster style from Canva AI art (PR #305); how to add one
metadata:
  type: project
  modified: 2026-10-30T15:34:25.918Z
---
Ale, 2026-10-30 (thread cmsg_01Gr5R4j3t2Yet65UcmhcVhA2taovwsQF1tpskz3VE4qcY): the old classic conversation previews "looked futuristic, made with AI"; Más allá's carousel preview was "horrible", wanted something llamativo and well framed. Don't touch grammar previews. Country classes are another thread. PR #302 LIVE 2026-10-30 (deployed with main 4827f7f after a merge-lock race on 3e28386).

- app/conversation-classic-covers.ts maps id → cover (generated from clasicas.mjs); withPreview in app/lesson-catalog.ts reads it first. Family level previews (red flag, lets-talk, máquina, regla) point to them in app/conversation-families/authored-levels.ts.
- New classic lesson: add art + entry in clasicas.mjs, `node scripts/covers/render.mjs clasicas [slug]` (Playwright + Pillow), regenerate the map. Más allá cover must stay 1200×750 lossy <120 KB (tests/mas-alla.test.mjs).
- Gotcha: historical preservation tests hash lesson-catalog.ts and family previews; tests/helpers/classic-covers.mjs undoes the 2 catalog lines and restores old image paths (OLD_CLASSIC_IMAGES). Old image files stay in public/ (byte-hashed by tests).
- 2026-10-30 17:46Z Ale: book covers "horrible", wants Disney/Pixar/Netflix key art. REDONE in PR #305 (thread cmsg_01Gr5R4j3t2Yet65UcmhcVhA8Pmhm2xpVWNGVGGjJ9s1Jh): scene art made with Canva generate-image stored in scripts/covers/art/<art>.webp (1600×900); clasicas.html = poster template (Lilita One title bottom-left, dark left fade, level badge for families); clasicas.mjs entries c(slug, ids, title, kicker, art). render.mjs mas-alla just crops art/mas-alla.webp.
- Canva tips: generate-image returns only a media id; full-size download = insert_fill on pages of scratch design DAHZgSN-I_s, commit, export-design png 1920×1080 (export-download.canva.com reachable). Prompts naming Pixar/Disney or "young woman on beach" got safety-flagged; "3D animated movie poster art, no text" works. Canva allows ~1–2 concurrent jobs and ran out of AI credits after ~36 images.
- Máquina + Regla absurda art made by Ale with ChatGPT (2026-10-31), covers in PR #315. Fallback when Canva credits run out: give Ale a ChatGPT prompt with full style history and complaints. Cine cover screens vaguely evoke famous films.
