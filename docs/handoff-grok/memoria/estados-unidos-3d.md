---
name: estados-unidos-3d
description: Free US class (ID 36, /estados-unidos-a2-b1) rebuilt as a GTA-style 3D world, A0–B1, six states × five spots, conversation + listening
metadata:
  type: project
  modified: 2026-10-21T06:38:38.419Z
---
Ale asked on 2026-10-21 (thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAMavzfzBZPyAxkKaG3NXdQ6) to turn the FREE US conversation class into a 3D world. Branch claude/escucha-3d-estados-unidos, PR #255.

- **Shared engine:** app/mundo-3d/ (CountryGame, World3D, kit3d, map3d, SpotCard, progress.mjs). It is reusable for other countries.
- **Country data:** app/estados-unidos-a2-b1/mundo/:
  - pais.ts: the regions and spots.
  - contenido/<state>.mjs: 5 spots × A0/A1/A2/B1.
  - escenas/<state>3d.ts.
- **States:** florida, nueva-york, california, texas, hawai, colorado. The 50-state atlas is still at ?vista=atlas (Atlas.tsx).
- **Listening:** game `usa` in app/escucha-3d, with 24 listenings (one per state and level). Because the class is FREE, its audio lives in the public prefix /audio/escucha-3d-libre (freeAudioPrefixes in access-policy, `freeAudio` in games.mjs, FREE_GAMES in scripts/generate-escucha-3d-audio.py).
- **Free chunks:** dynamic chunks of the free page are listed explicitly in scripts/protect-client-assets.mjs publicRoots. The static walk misses dynamic imports.
- **«Con profesor» saves:** they go to /api/live-class through WORLD_LESSON_IDS (36).
- **Catalog change approval:** the catalog change is approved through a `latest: true` repair in tests/helpers/catalog-additions.mjs. The access-policy edit is recorded in docs/audits/grammar-preservation-20261007.json.
- **Gotcha:** public chunks are scanned for paid Noche encounter titles. A common phrase such as «Todos corren» in free content broke the build.
- **Not tested:** only simulated GPU (SwiftShader), no real phone.
