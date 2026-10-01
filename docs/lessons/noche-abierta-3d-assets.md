# Noche abierta · 3D asset provenance

Lesson 223, route `/noche-abierta`. This file records where every visual in the 3D street comes from.

## Summary

- **All 3D content is original.** It is procedural geometry and canvas-drawn textures, written in this repository for this lesson.
- **No third-party files.** No model, texture, HDRI, font file or image was downloaded, bundled or loaded at runtime. The only runtime dependency is the `three` library (MIT license, pinned to 0.186.1).
- **Binary asset size: 0 bytes.** The scene is generated in the browser when the lesson opens. The one image is the existing catalog thumbnail, `public/noche-abierta/preview.webp`, rendered earlier from the lesson's own SVG scene.
- **Preferred source was unreachable.** CC0 packs from Kenney were the first choice. When this work was done, the build environment's network policy blocked kenney.nl, opengameart.org, poly.pizza, quaternius.com, itch.io and cdn.jsdelivr.net, so nothing was downloaded from them. Replacing the procedural people or cars with Kenney CC0 models later would need a new entry in the table below.
- **Nothing from any commercial game.** No GTA or other game assets, logos, characters, maps, weapons, HUD elements or missions. The three reference images Ale shared were used only for atmosphere: sunset-to-night light, palms, overhead wires, a mural wall, parked cars and a warm street.
- **Controls research.** Rockstar's PC control documentation could not be reached from the build environment. The key layout follows the lesson brief (WASD or arrows, Shift, E, F, V, M, Esc), which is the common PC convention for third-person games.

## Asset table

| Asset | Source | Pack / file | License | Modifications | Repo path |
| --- | --- | --- | --- | --- | --- |
| Player avatar: the SpanishCue mascot as a young man (black shirt with rolled sleeves, belt with silver buckle, black trousers, polished oxfords, messy dark hair), with his fountain pen and a small Argentine hand flag; run cycle tied to distance, idle pose with the pen near the chin, lean into turns, waving cloth | Original code, drawn from the project's own mascot art (`public/brand/mascot/`) | `createHero`, `animateHero`, `flagTexture` | Project's own | n/a | `app/noche-abierta/hero3d.ts` |
| Street people (articulated adult: hips, torso, head, two-segment arms and legs; idle, walk, talk and seated poses, head turns toward the learner) and their soft ground shadows | Original code | `createPerson`, `animatePerson`, `addBlobShadow` | Project's own | n/a | `app/noche-abierta/people3d.ts` |
| District layout (streets, sidewalks, buildings, doors, parked and moving vehicles, people, interaction targets, walkable rooms and their hotspots, stages, collisions) | Original data | `BUILDINGS`, `VEHICLES`, `TRAFFIC`, `NPCS`, `TARGETS`, `ROOMS`, `STAGES` | Project's own | n/a | `app/noche-abierta/world3d.mjs` |
| Building facades, windows and lit-window maps | Original canvas drawing | `facadeTextures` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Shop fronts, awnings and signs (CAFÉ MARTINA, EL TOLDO, ALMACÉN 24 H) | Original canvas drawing, invented names | `storefrontTexture`, `stripes`, `signTexture` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Mural "LA NOCHE ES LARGA" (sunset, sea, palms, birds) | Original canvas drawing | `muralTexture` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Cars, taxi, broken-down car (open hood, hazard lights, smoke) | Original box geometry | `makeCar` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Palms, trees, lamps, light pools, utility poles and wires, bus stop, overpass, fountain, benches, vendor cart, bike, string lights | Original geometry | `addPalm`, `addTree`, `addLamp`, `buildCity` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Café, apartment and 24-hour store interiors (furniture, shelves, fridges, menu board, window views) | Original geometry and canvas drawing | `buildInterior` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Museo del Pasado: stone front with columns, banners and lit door; walkable hall with nine pieces (beach photo, public phone, 1969 television, 1985 bedroom, postman's bicycle, suitcase, train ticket, letter, music box), vitrines, light pools and a night guard. Every picture, ticket and poster is drawn on a canvas; the names on them are invented | Original geometry and canvas drawing | `addMuseumFront`, `museumRoom`, `vitrine`, `framed`, `lightPool` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Bar La Persiana: half-raised roller shutter, outdoor tables; walkable room with counter, glowing bottles, stools, tables, jukebox, invented posters and the people of each situation | Original geometry and canvas drawing | `addBarFront`, `barRoom`, `walkRoom` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Sky dome, stars and rain | Original shader and geometry | inline in `World3D` | Project's own | n/a | `app/noche-abierta/World3D.tsx` |
| Ground tiles, parquet and wood floors | Original canvas drawing | `tiles`, interior floors | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Rendering library | three.js | npm `three@0.186.1` | MIT | none | `package.json` |

## Loading and performance

- **Loading.** three.js and the 3D files load on demand. The page renders the SVG map first; the browser then checks for WebGL and imports `World3D.tsx`. Without WebGL, or when the learner picks *Ver mapa*, the SVG map is the lesson.
- **Draw calls.** Static geometry is merged by material, which brings the street to about 250–450 draw calls including the shadow pass. People, the taxi and the markers stay separate so they can move.
- **Interiors.** They are built the first time the learner walks into each one.
- **Shadows.** Only the learner's avatar and the buildings cast real shadows; everyone else gets a soft disc on the ground, which costs one transparent quad each.
- **Night colours.** Sky, fog and light colours are repainted only when the night value actually changes, not every frame.
- **Small screens and touch.** Narrow or touch screens use a lower pixel ratio, no antialiasing, no shadows and no ambient walkers.
- **Adaptive quality.** On any screen, if the frame rate stays under 30 FPS, the resolution drops first and shadows go next.
