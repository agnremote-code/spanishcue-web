---
name: demo-misma-clase
description: Free 3D demos (/demo/noche-abierta, /demo/hospital-san-casi-vivo) render the SAME PRO game with locked districts/floors/circles; how content is split and gated (2026-10-30)
metadata:
  type: project
  modified: 2026-10-30T14:20:29.173Z
---
Ale 2026-10-30: «la clase de prueba es LA MISMA que PRO, con barrios y algunos círculos bloqueados; adentro se ofrece desbloquear todo pagando». Thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAYXQ2Tr49KhQbx5BnHVZZDv, branch claude/demo-noche-misma-clase.

- Noche: client modules import app/noche-abierta/street-core.mjs (logic + registry) and talk/core.mjs; street.mjs / talk/index.mjs import every district and register them (tests + NocheAbierta.tsx, the PRO wrapper; the game itself is NocheGame.tsx). NocheDemo.tsx fetches public/noche-abierta/demo-calle.json and registers free scenes + locked shells (cast/circle/mood only), then renders `<NocheGame demo>`.
- Policy app/noche-abierta/demo-policy.mjs: free districts centro, viejo, mercado, costa; DEMO_LOCKED_SCENES lists 10 locked circles inside them. Locked = gold ring, E opens PremiumPanel. Escucha (listening) is PRO in the demo.
- Hospital: engine-core.mjs registry (content, patients, locked); engine.mjs registers all (tests + HospitalPro.tsx); HospitalFree.tsx fetches public/hospital-san-casi-vivo/demo.json. Policy hospital demo-policy.mjs: floor 1 free except vip/trauma/facturacion; other floors + their people PRO. Old HospitalDemo/demo-content removed.
- Regenerate JSON after ANY Noche street/talk or hospital levels/patients edit: `node scripts/build-noche-demo.mjs` (tests/noche-demo.test.mjs fails when stale).
- protect-client-assets fails the build if any Noche encounter title or hospital scene line appears in a public chunk. check-english-copy: SPLITS (street→street-core, talk/a0→a0-places) and DERIVED (demo JSONs must only repeat existing English).
- Old CityDemo/DemoScene/api/city-demo still exist for the Google teachers landing tour.

Related: [[home-free-classes]], [[noche-abierta-ciudad-viva]], [[hospital-san-casi-vivo]].
