# Noche abierta: two-moment pedagogy

Base main: `2c61cbff2876d40166fd17b357808fe100bcec02` (PR #114), confirmed through GitHub. No open PRs at the overlap check.

Owner brief: preserve the world and all 40 interactions, but require exactly a brief learner-centered scenario with multiple choice, followed by an independent personal speaking question in A1–C2. No fictional continuation in step two.

Implementation:
- `pedagogy.mjs` is the authoritative interaction curriculum: 40 entries, three choice difficulty bands and six independently authored personal questions per entry. Missing IDs or levels throw rather than falling back to unrelated content.
- `contentFor` projects every legacy activity onto that curriculum; old narrative fields are not exposed in the runtime activity.
- Every activity type renders only `choose`, then `talk`; no appended consequences or extra tasks.
- Stable person/object/location IDs and taxi option IDs preserve navigation and journeys. Display order rotates while IDs remain stable.
- Session version v4 rejects obsolete multi-step positions. Both moments are labelled explicitly.
- Supporting mechanics, teacher notes, focus and help now describe the two moments. Advanced distractors were reviewed for plausible pragmatic differences.
- No auth, billing, migration, database, release configuration or 3D movement changes.

Verification at source checkpoint:
- New contract tests failed in all six levels before implementation (the café produced six story beats).
- 57 focused tests now pass, including all 240 combinations, invalid/blocked choices, back/revisit, world/navigation and taxi outcomes.
- Language suite: 39 tests, no unresolved language findings, English copy unchanged. No new linguistic exemptions are required. CI caught a newly introduced ambiguous preterite in a distractor; its wording was corrected and the language test rerun successfully.
- TypeScript and focused lint passed after review. Full lint initially scanned a leftover generated `.sites-safe-dist` directory and exhausted heap; this is generated build output, not a source-code failure.
- Real React DOM controls passed in A1/B2/C1 across café, plaza NPC, bar NPC, museum object and taxi (15 rendered interactions). This validates click/disabled/back behavior, not authenticated browser access.
- Full suite reached build, which encountered the existing premium-media copy race; unchanged official build passed on retry, without weakening artifact guards.

Live QA boundary: production redirected this browser to the premium access page, without a teacher session. The browser also blocked the loopback local component harness. Neither is a successful live lesson QA. Production authentication must be verified separately; do not claim it from source or DOM tests.
