---
name: paises-3d
description: Country classes rebuilt as 3D worlds (Ale 2026-10-21) + flags/guide/«Países» shelf (2026-10-30): plan, template, per-country checklist, gotchas
metadata:
  type: project
  modified: 2026-10-21T16:13:07.892Z
---
Ale (2026-10-21, thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAMavzfzBZPyAxkKaG3NXdQ6) asked for EVERY country class to become a 3D world like [[estados-unidos-3d]]: the same plane intro, 4 main regions × 5 places, levels A0–B1, both modes. The old class stays at `?vista=atlas`.

All 11 country classes are 3D worlds and LIVE (2026-10-21 21:40Z, main 4d2c680): México+Argentina #262, España/Suecia/Reino Unido #263 (UK game key `uk`), Irlanda 33/Australia 30/Suiza 29 #264, Israel 25 (game `israel`)/Indonesia 24 (game `indonesia`) #265. Untested: real GPU/mobile, audio by ear, real PRO account.

2026-10-30 (thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAEMuiw2ngmr8WEhYjD1wSio, branch claude/paises-3d-categoria): Ale found landing confusing. Shared engine now has app/mundo-3d/banderas.mjs (canvas flags of all 11, FLAG_COLORS) + banderas3d.ts (waving poles, bunting); welcome sign uses the country flag (was US stars) and sits higher (SIGN_Y) so portal boards show; «¿Adónde vas?» panel + yellow guide arrow/beam (World3D `guide` prop) + «Sigue la flecha» HUD line; CountryInfo.regionWord. Library: mode `countries3d` = «Países» shelf inside Mundos 3D (worlds3d grid excludes countryCollection); covers = public/catalog-thumbnails/banderas/*.webp from scripts/flag-previews.mjs, approved in tests/helpers/catalog-additions.mjs FLAG_COVERS. Non-3D country-ish classes 19, 26, 27, 39 stay in Clásicas.

Per country:
- `app/<c>/mundo/{pais.ts,zonas.ts,contenido/*.mjs}` built on app/mundo-3d/plantilla.ts.
- `page.tsx` uses MundoPais; `rings={{}}` gives blob islands when there is no geodata.
- Listening goes in app/escucha-3d/content/<game>, registered in games.mjs, loaders, types and games.d.mts. Audio is built by a workflow on pushes to claude/escucha-3d-*.
- Also add the lesson to resource-seo immersiveWorldGameByLessonId, to WORLD_LESSON_IDS in api/live-class, and to COUNTRIES in tests/paises-3d.test.mjs.
- Append the English to docs/audits/paises-3d-english-additions-20261021.json. Ale typed «apruebo» for it in that thread at 15:40Z (cmsg_01Gr5R4j3t2Yet65UcmhcVhASr6wzCDDk4vHAEyB6VfveQ). The classifier blocks citing the 10-14 blanket approval.

Gotchas:
- level-cleanup flags the literal "A0" outside `/mundo/`.
- A FREE country also needs freeAudio, FREE_GAMES and its zonas in publicRoots; do not list plantilla.ts there, since it is not a manifest entry.
- QA of PRO pages in dev hits the paywall: render the page from a temporary untracked route and delete it afterwards.
- A country whose catalog row changes (levels to A0–B1, e.g. México 210, Reino Unido 32) needs a repair in tests/helpers/catalog-additions.mjs that undoes the catalog and test edits. When the old page moves to `Atlas.tsx`, add the move in scripts/check-english-copy.mjs and point tests that read the old page.tsx at Atlas.tsx.
- Worker memory budget (36 MiB, tests/worker-startup): region content and listenings load only in the browser via an `import.meta.env?.SSR` guard in each pais.ts and escucha-3d/loaders.ts (use `?.`: CJS test bundles have an empty import.meta).
- A changed displayLevel changes the resource slug: add a lessonBySlug alias for the old slug in app/resource-seo.ts.
- Indonesia (24) was in level-cleanup movedLessonIds (former fake A0); removed now that A0 is authored.
- tests/autoestudio-share rate-limit test was flaky (shared hash buckets); fixed on #264 by clearing the table first.
- Merge-lock race: a deploy fails if another PR is merging; the next merge to main carries it.
- grammar-classroom-routes DELETE /api/live-class once got a one-off 503 in CI (passes locally 5/5); a real follow-up commit reran CI green.
- tests/wave3-preservation.test.mjs already fails on main (app/Library.tsx) and is not part of npm test.
