# The Sound Map

Route `/the-sound-map`, catalog ID 236, paid Escucha lesson. One city and one level selector cover A0, A1, A2, B1, B2, C1 and C2. Six scenes per level have independently authored scripts, questions and evidence. A0 supports English instructions, vocabulary and a phrase builder; advanced tasks use explicit self-review criteria rather than fabricated automated grading.

## Reused foundations

- `listening-studio/AudioDeck`: playback, scrubbing, replay and 0.75× mode. Optional bilingual labels retain existing callers' Spanish defaults; a retry now recovers failed loads without reloading the page.
- Existing Three.js dependency and catalog-driven route, premium bundle and audio protection. No new dependencies, auth, billing, D1 or release infrastructure.
- Existing brand component and language/copy audit registries. The A1–C2-only phonetics selector could not support A0 unchanged, so this page uses one native accessible select.

## Authored content and sound

42 scene recordings, each with a clean alternative: 84 MP3 assets. Build script `scripts/generate-sound-map-audio.py` uses Spanish-Mexican Dalia/Jorge neural voices. The singer uses an original PSOLA melody; ambience is synthesized. These are pedagogical synthetic scenes, not human field recordings. Exact generation inputs and hashes are in `audio-manifest.json`. No human listening QA is claimed.

Rebuild requires edge-tts 7.2.8, praat-parselmouth 0.4.7, numpy and ffmpeg. Dependencies are build-time only. Content changes must regenerate corresponding assets before release.

## Experience

A procedural riverside city has balcony, singer, taxi, park, vendor and rooftop hotspots. The same six locations remain ordinary DOM buttons if WebGL fails. Scene/level changes unmount and stop audio. Progress is stored separately for each level in browser localStorage; corrupt/unavailable storage degrades safely. Completing a scene requires both activities plus spoken/written production. It records practice, not certification. A suggested lesson route is 5 minutes of anticipation, six 7-minute scenes and an 8-minute recap.

## Verification and review

Feature tests cover all 42 scripts/assets, independent level progress, retries, ordering, open-response review, audio unmounting, bilingual recovery, catalog/access integration, URL state, no-WebGL selection and focus restoration. They run through `scripts/test-worker.mjs` in the full CI suite.

The fresh read-only review found audio recovery and focus-return problems, both corrected. Additional review fixes: neutral speaker descriptions, varied answer positions, self-review response gate and shadow target disposal.

Browser visual QA was unavailable in this managed session (no supported control-browser skill). SVG preview was rendered and inspected. WebGL visual appearance and native speaker listening review remain verification limits; jsdom tests do not substitute for them.

## Integration notes

The only overlapping file with open SEO PR #126 is `tests/rendered-html.test.mjs`: this change updates the exact existing catalog counts; the inspected SEO patch changes later, separate SEO assertions. No SEO implementation or product decisions are changed.

Integrated main `e0d95602105188769caf108d644ae2f6938e0fa8` after SEO, banner and grammar merges. Catalog ID is 236 because newly merged grammar uses 230–235. Existing IDs, routes, previews and all upstream functionality are preserved.
