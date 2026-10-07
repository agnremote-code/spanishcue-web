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


## Continuation QA — 2026-10-07

Continued from current main `b5e0d3d4fd1a4485f508c7710499b4e022f7e8da`, after PR #129. Content, manifest and all 84 recordings are unchanged.

- The city is the primary navigator; the duplicate scene directory is now an optional disclosure. The map remains visible alongside longer activities on desktop.
- Camera framing adapts to viewport and orbit direction. Projected labels stay within the map and separate when they collide, with leader lines back to the original locations. Added facade windows, promenade lights/railings, balcony speakers and table supports to the existing geometry.
- WebGL failure now shows an illustrated geographic plan of the same six locations. A lost GPU context hides its stale canvas so it cannot obscure that plan.
- Closing a scene restores focus to its actual trigger, including map pins.

Browser QA used a temporary isolated component fixture importing the real page, panels, content and MP3s; no production access controls were modified. Desktop and 390px/320px iframes were inspected, including A0, all six hotspots, scene selection/close, playback and clean-audio switching. Level selection and audio playback were exercised across A0–C2. The mobile scene panel scrolls to its title and has no horizontal overflow.

The cloud browser reports WebGL disabled. A temporary Three.js SVGRenderer fixture was therefore used separately to inspect the same geometry, camera, orbit/zoom and DOM hotspot projection; six hotspot bounds did not overlap after orbit and zoom. This diagnostic does **not** validate WebGL lighting, shadows, GPU performance or final shader appearance. Native-speaker listening review also remains outstanding; playback verification is not a listening-quality endorsement. Neither temporary fixture ships.

All 84 MP3s decoded successfully with ffmpeg. The full local regression suite and full lint passed; targeted tests additionally select all 42 level/scene combinations and verify a single correct audio element after every change.

Regression tests cover explicit pointer/keyboard map-trigger focus return, responsive camera bounds at orbit limits and collision handling in a narrow viewport, alongside the original content/audio/progress tests.

## Immersion and correction upgrade — 2026-10-07

Continued from main `1d3848a25538267e703672fc5b6d3b2b68da95bc` (including PR #135). The six scenes, 42 scripts, audio manifest and all 84 MP3s are unchanged.

- The existing Three.js city now uses a golden-hour palette, cooler contrasting streets/river, district colours, emissive windows/lanterns, additional facade/rooftop details, café tables, flowers, crates and listeners. Shared materials, capped pixel ratio and a single shadow light remain; there are no new dependencies, models or postprocessing passes.
- Selection changes the hotspot, local sound ring/equalizer, small camera focus shift, scene-colour arrival strip and “you are here” map status. Ambient water/resident motion respects reduced motion; rendering pauses offscreen and in hidden documents. The GPU scene is retained between selections.
- The no-WebGL plan is now an isometric layered city with the same places and shared projection for its DOM hotspots. Initial hotspot coordinates also keep controls usable before hydration.
- Incorrect choice answers show the chosen option in red, the correct option in green, and explicitly name the correct answer beside the existing authored explanation. Ordering compares the submitted sequence with the full correct order and marks positions. Submission focuses the correction; retry clears the answer and returns focus to an option. Retrying and editing open responses invalidate current completion. Open responses retain model/rubric self-review rather than pretend automatic grading.
- Scene steps, completed map points and route stamps make progress visible. Desktop keeps the city alongside the activities; mobile uses a compact header and stacked corrections.

Browser QA used temporary fixtures importing the real page and assets: desktop, 390px and 320px; six hotspot bounds without overlap; no horizontal mobile overflow; all seven levels; main/clean audio controls; wrong choice/order feedback; keyboard focus; retry and save/return to the map. The browser remains unable to create a WebGL context. A separate temporary SVGRenderer diagnostic exercised the actual Three geometry, orbit/zoom and projected labels, but does not establish final GPU lighting, shadows or frame rate. Neither fixture ships. No new human listening-quality review is claimed.

Sound Map tests cover all objective activities across all 42 scenes, including explanation/correct-answer disclosure after wrong attempts, sequence corrections, explicit retry, focus and completion invalidation, alongside the existing content/audio/navigation checks. Read-only review also checked camera framing across all six active targets and orbit limits.
