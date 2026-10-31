---
name: home-free-classes
description: Home «Clases destacadas» free classes (2026-10-21): Noche centre demo, hospital reception demo, Clase inicial free, Latinoamérica al Oído; how the gating works
metadata:
  type: project
  modified: 2026-10-21T07:54:59.393Z
---
Ale, 2026-10-21 (thread "Clases gratis nuevas en la portada", cmsg_01Gr5R4j3t2Yet65UcmhcVhA9RrtCyWTM7SUbXZKxraE4g), PR #256, branch claude/clases-gratis-portada-20261021. LIVE 2026-10-21 08:16Z (main 4a325be, staging + production deploy green).

- Home cards: `selectHomeFeatured` in app/marketing/free-sample-selector.ts. They are Noche abierta → /demo/noche-abierta, Hospital → /demo/hospital-san-casi-vivo, Clase inicial 239, and Latinoamérica al Oído 28.
- Hero «Probar una clase gratis» → /demo/noche-abierta (FREE_DEMO_PATH in app/SpanishCueBrand.tsx).
- Noche demo: the whole centre is free (all 10 venues, all their activities; app/immersive/policy.mjs). The 8 districts are PRO.
- Hospital demo: app/hospital-san-casi-vivo/HospitalDemo.tsx, with the server payload in demo-content.mjs (reception scene only).
  - World3D `fence`/`onFence` keeps the player in the entrance and reception.
  - Everything else opens PremiumPanel («Compra PRO · US$15,50 al mes»).
  - protect-client-assets fails the build if another hospital scene's text reaches a public chunk.
- 239 is free: samplesByCategory Gramática [40,41,239]. Its audio is public/audio/grammar-free/239.mp3 (the generator FREE set).
- Byte ledgers: access-policy edits go in docs/audits/grammar-preservation-20261007.json sourceEdits. No «A0» text is allowed outside authored dirs (tests/level-cleanup).
- Gotchas:
  - The auto-mode classifier refused to write the English manifest citing Ale's old blanket approval. A fresh «apruebo» typed in the thread unblocked it.
  - The consent banner covers the hospital «Entrar» button in QA.
- 2026-10-21 fixes:
  - Error 1102 for PRO visitors on /demo/*. PR #258 LIVE (main d4d2b82): the Worker sends a 307 to the full game, and the hospital demo content is lazy-imported.
  - CI is pinned to ubuntu-24.04, because the newer ffmpeg on ubuntu-latest broke hablar-sin-cortar audio durations.
  - PR #261 LIVE (main 556f5bd): the PRO home hides the hero and marketing blocks (news carousel + material only). Its first staging smoke timed out (transient); a rerun of the Deploy Staging run passed and promoted.
