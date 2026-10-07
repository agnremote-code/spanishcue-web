# El bosque de los hongos gigantes

One 3D world, six levels. The world is built once; each level only supplies language.

## World (shared by A1–C2)

- `engine.mjs`: stages (`STAGES`, 0 → 56 m), the spiral route, the twelve landmark stations
  (`ZONES`, one per conversation category), every walkable cap (`PLATFORMS`), the physics and the
  clearance rules (`clearOf`, `columnClear`) that keep stems and trunks out of caps.
- `mushrooms3d.ts`: procedural species (bolete, chanterelle, amanita, glow, parasol, bracket, ghost,
  sky, crown…). Cap tops stay on the engine's flat collision disk.
- `forest3d.ts`: the environment, the altitude atmosphere (`atmosphereAt`), station props, and how
  stations react (lantern, halo, spore burst, `¿?` → `✓` bubble, beacon on the next station).
- `hero3d.ts`: the procedural mascot from La Noche Abierta, plus a jump pose and a contact shadow.
- `camera.ts`: collision-aware orbit, presets, zoom limits, follow-behind, look-up.
- `World3D.tsx`: input, camera, HUD, minimap with an altitude bar.

## Level data

- `content/<level>.mjs`: the category banks (72+ prompts per level). Every level uses them.
- `content/stations/<level>.mjs`: optional authored station conversations, one per category id.
  Each station has `scene` (what the world shows), `question` + `choices` + `reactions`
  (a compact choice that starts the talk) and `open` (the spoken question that follows).
- `content/stations/index.ts`: register a level in `STATION_LEVELS`.

With stations, a landmark opens its own conversation first; later visits draw from the category deck.
Without stations, the landmark opens the category deck directly. Only B1 has stations today.

To add a level: write `content/stations/<level>.mjs` with the twelve stations (copy the B1 shape and
re-author the language), register it in `STATION_LEVELS` (the level's bank picks it up) and list its
English glosses in `docs/audits/bosque-vocabulary-additions-20261004.json`.
`tests/bosque-expedition.test.mjs` shows the checks each station must pass.
