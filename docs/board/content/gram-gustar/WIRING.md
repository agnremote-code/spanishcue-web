# Gustar A1 (id 242): wiring spec for the implementer (Sofia or a fresh agent)

Content: `242.lesson.json` (Martin, house format of `app/grammar-classroom/content/new-lessons.json`, no new engine). G4: Alejandro.

1. Merge the `"242"` object into `app/grammar-classroom/content/new-lessons.json`.
2. `app/grammar-classroom/catalog.ts` `additions`, one row (curriculum order 1405 = right after 106 «La estación de los dos destinos», which introduces the indirect-object pronouns gustar needs):
   `[242, 'A1', 'pronombres', 'gustar-y-verbos-como-gustar', 'Gustar y verbos como gustar: hablar de lo que te gusta', 'Usa gusta o gustan, reacciona con también o tampoco y cuenta qué te encanta.', 1405, [106]],`
   plus `addedAt[242]` = release date.
3. `tests/grammar-classroom-content.test.mjs`: add 242 to the id list; readings/scripts 57 → 58.
4. Audio: generate `public/audio/grammar-classroom/242.mp3` from `listening.transcript` with `es-CO-SalomeNeural` through the repo pipeline and add the manifest clip (`app/grammar-classroom/audio-manifest.json`).
5. Assets the existing tests require: `/grammar-thumbnails/242.webp`, `/grammar-classroom/previews/gustar-y-verbos-como-gustar.webp`, the card hover recording, and the route list in `tests/grammar-classroom.test.mjs`.
6. Access: PRO by default (no `access-policy.ts` change).

Verified locally (simulation of steps 1–3 only, not committed): `tests/grammar-classroom-content.test.mjs` and `tests/neutral-grammar.test.mjs` pass; `tests/grammar-classroom.test.mjs` fails only on the missing step-5 assets.
