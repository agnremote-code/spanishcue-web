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
| Player avatar: the SpanishCue mascot. Identity (wavy dark-brown hair with volume, strong dark brows, tanned skin, defined jaw; black shirt with open collar and sleeves rolled below the elbow, belt with silver buckle, tailored black trousers, polished oxfords, black-and-gold fountain pen held in the right fist) follows the official mascot art in `public/brand/mascot/`; back and profile volumes (marked waist, natural hips and glutes, small black backpack with a little Argentine flag in its side pocket) follow the brand turnaround sheet. Run cycle tied to distance with pelvis roll and twist, glutes that follow each thigh, idle pose with the pen near the chin, a settle when he stops, lean and head turn into curves, waving cloth | Original code, drawn from the project's own brand art | `createHero`, `animateHero`, `headGeometry`, `flagTexture` | Project's own | n/a | `app/noche-abierta/hero3d.ts` |
| Title-screen mascot: official cutout `kneeling.webp`, plus a wink frame made from it (one eyelid painted closed) | Project's own brand art | `public/brand/mascot/kneeling.webp`, `public/noche-abierta/mascot-wink.webp` | Project's own | wink frame only | `public/noche-abierta/` |
| Library preview (1280×720 WebP): a still of the 3D street from the title-screen camera with the official mascot | Rendered from this lesson | `preview.webp` | Project's own | resized | `public/noche-abierta/` |
| Street people (articulated adult: hips, torso, head, two-segment arms and legs; idle, walk, talk, seated, hands-up, knife, scream, kiss, fallen, injured, fight, cuffed, sign and bag-run poses, heart-eyes, laugh, terror and furious moods, visible wounds, head turns toward the learner) and their soft ground shadows | Original code | `createPerson`, `animatePerson`, `addBlobShadow` | Project's own | n/a | `app/noche-abierta/people3d.ts` |
| Street events (fight, car fire, thief chase, protest, crash, injured with ambulance, patrol car, helicopter with searchlight), motos, shout bubbles | Original code, built from boxes, cylinders and sprites | `createStreetEvents`, `makeMoto` | Project's own | n/a | `app/noche-abierta/events3d.ts` |
| District layout (streets, sidewalks, buildings, doors, parked and moving vehicles, people, interaction targets, walkable rooms and their hotspots, stages, collisions) | Original data | `BUILDINGS`, `VEHICLES`, `TRAFFIC`, `NPCS`, `TARGETS`, `ROOMS`, `STAGES` | Project's own | n/a | `app/noche-abierta/world3d.mjs` |
| Building facades, windows and lit-window maps | Original canvas drawing | `facadeTextures` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Shop fronts, awnings and signs (CAFÉ MARTINA, EL TOLDO, ALMACÉN 24 H) | Original canvas drawing, invented names | `storefrontTexture`, `stripes`, `signTexture` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Mural "LA NOCHE ES LARGA" (sunset, sea, palms, birds) | Original canvas drawing | `muralTexture` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Cars, taxi, broken-down car (open hood, hazard lights, smoke) | Original box geometry | `makeCar` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Palms, trees, lamps, light pools, utility poles and wires, bus stop, overpass, fountain, benches, vendor cart, bike, string lights | Original geometry | `addPalm`, `addTree`, `addLamp`, `buildCity` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Café, apartment and 24-hour store interiors (furniture, shelves, fridges, menu board, window views) | Original geometry and canvas drawing | `buildInterior` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Museo del Pasado: stone front with columns, banners and lit door; walkable hall with nine pieces (beach photo, public phone, 1969 television, 1985 bedroom, postman's bicycle, suitcase, train ticket, letter, music box), vitrines, light pools and a night guard. Every picture, ticket and poster is drawn on a canvas; the names on them are invented | Original geometry and canvas drawing | `addMuseumFront`, `museumRoom`, `vitrine`, `framed`, `lightPool` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| Bar La Persiana: half-raised roller shutter, outdoor tables; walkable room with counter, glowing bottles, stools, tables, jukebox, invented posters and the people of each situation | Original geometry and canvas drawing | `addBarFront`, `barRoom`, `walkRoom` | Project's own | n/a | `app/noche-abierta/build3d.ts` |
| The wider city (Barrio Viejo, Zona Alta, Clínica, Mercado, Costanera, Estación, Barrio Sur, Los Galpones): streets, canal and bridges, buildings, props, parked cars, one-way traffic with crossings, bikes, walkers and their routes, groups, people on benches and balconies, animals, scene placements, laundromat and rooftop rooms, collisions | Original data | `ROADS`, `CANAL`, `CITY_BUILDINGS`, `CITY_PROPS`, `CITY_TRAFFIC`, `PLACEMENTS`, `stepCityTraffic`, `stepWalkers` | Project's own | n/a | `app/noche-abierta/city.mjs` |
| Street scenes: 70-odd short encounters and corners with recurring characters, written per level band, with the reactions to each carried object | Original writing | `ENCOUNTERS`, `ITEMS`, `ambientReaction` | Project's own | n/a | `app/noche-abierta/street.mjs`, `app/noche-abierta/street/*.mjs` |
| District buildings, facades, signs, canal water, bridges, market stalls, boat, station, warehouses, laundromat and rooftop | Original geometry and canvas drawing, invented names | `buildDistricts`, `buildStreetRoom` | Project's own | n/a | `app/noche-abierta/district3d.ts` |
| Life in the street: scene people, walkers, cyclists, balcony people, ambulance and police car with light bars, heart bursts | Original code | `createStreetCrowd` | Project's own | n/a | `app/noche-abierta/streetlife.ts` |
| The seven carried objects (pencil, book, pepper spray, grenade, pistol, knife, heart) as 3D props, their non-graphic use effects and the picker stage. The weapons are toy-like fiction props with no blood, wounds or damage | Original geometry and SVG | `createItem`, `holdItem`, `createItemUseFx`, `createHeartBurst` | Project's own | n/a | `app/noche-abierta/items3d.ts`, `ItemPicker.tsx`, `ItemStage.tsx`, `ItemIcon.tsx` |
| Cars and motorbikes you can steal and drive (22 on the kerbs): the same car and moto models as the traffic, with their own physics, collisions, owner shout and police call | Original geometry and code | `createDrivables`, `stepVehicle` | Project's own | n/a | `app/noche-abierta/drive3d.ts`, `app/noche-abierta/drive.mjs` |
| Dogs, cats and pigeons | Original geometry | `createAnimal`, `animateAnimal` | Project's own | n/a | `app/noche-abierta/animals3d.ts` |
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
