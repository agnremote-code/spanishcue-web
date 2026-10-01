# Hablar sin cortar — implementation and verification plan

Base: 1d0c76564d664df74918aacccf14f355849f0f75. User-supplied specification is authoritative: implement all six levels now; no merge or deployment. Fresh isolated clone, task branch codex/phonetics-hablar-sin-cortar-a1-c2-20261001; open PR search returned none.

## Design
One catalog entry (224, next unused after 223), route and configurable PhoneticsWorld. A1 is base; complete A2–C2 content patches retain stage/activity IDs. Auth and premium media use existing Worker/build policy. Separate /audio/hablar-sin-cortar namespace; do not extend free phonetics namespace. Existing UI uses voseo, retained. Existing level link helper only adds query for familyId; add a narrowly scoped phonetics-family href resolver at Library call sites instead of changing other classes.

## Tasks
1. Tests first: state isolation, URL validation, keyboard movement, curriculum shape and catalog preservation. Expected red before new modules exist. Implement pure state controller and typed reusable shell contracts.
2. Author complete A1–C2: eight core trials, two optional trials, final oral transfer and teacher rubric per level. Audio-first choices, meaningful grouping, liaison, rebuilding, A/B, repeat/change and spontaneous transfer. Route budgets total 50 min including teacher interaction. Advanced grouping has suggested analyses, not one mandatory prosodic answer. Test IDs, non-fallback copy and authored distinctions.
3. Build accessible responsive shell, title screen, official mascot and original sound-lab image. Reuse AudioDeck, key audio/task state by level and item. Reset attempts on level change, retain broad stage. Support is permanently assisted for the visit. Store only level locally, no voice or responses.
4. Generate finite synthetic audio with existing Edge TTS convention, preserve exact input/provenance. Decode/hash/silence audit. Never invent clips if generation fails; expose explicit unavailable state and report blocker. No claim of human listening QA. Keep PRO media protected.
5. Register one card, append route ID, add precise preservation-normalization rules. Test all six filters and links, prior 201/202/38, baseline diagnostics, lint/build, diff and browser layouts at 1440×900,1366×768,768×1024,390×844.
6. Review and commit/push coherent checkpoints. Draft PR only if needed to avoid automatic merge (user overrides AGENTS delivery rule). No release workflow. Final handoff must distinguish implemented code from missing audio or validation.

## Ledger
- Inspected Noche abierta, phonetics, AudioDeck, catalog, filters, access and protected build.
- Baseline TypeScript has pre-existing diagnostics in billing, marketing and other modules; compare exact final diagnostics.
- No changes authorized to Autoestudio, Homework Adventure, billing, auth, D1 or deployment.

- Visual correction from user: physically real contemporary recording studio, grounded editorial photography; no holograms/neon/floating blocks. Original rejected image is not in project. Accepted new studio photograph and supplied mascot reference 3 are lesson-local assets.
- Audio: system trust store resolved initial TLS error without disabling verification. 66 finite clips generated and decoded, word metadata retained; human listening QA remains false.
- Tasks 1–2: authored all six bundles (8 core + 2 optional each), pure state tests green; catalog integration in progress.

- Final review: independent reviewer found one important answer-leak issue. Focused rendered test failed before fix, passed after fix; all perception tasks now defer oral-transfer copy until check or explicit support. Progress/time counts now derive from content.
- Final verification: 94/94 selected tests; 422/422 full npm tests in unsynchronized local clone; 24 browser checks; lint clean; tsc exact same 11 baseline diagnostics. Full source and premium-media preservation intact.
- Delivery ruling: user prohibits merge/deploy, overriding repository auto-merge handoff. Automatic approval review also rejected git push as unverified external publication; no alternate push attempted. Local commits and reviewable handoff complete, explicit user authorization needed for remote branch upload.
