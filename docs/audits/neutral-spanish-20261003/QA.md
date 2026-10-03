# Final QA

- Language gate: 39 tests; zero unresolved findings in 825 source files.
- English: 10,882 values in 126 files unchanged against base.
- Lint and TypeScript: exit 0.
- Build and artifact validation: passed, including private client/media protection.
- Full `npm test`: passed (exit 0) in the isolated copy, including language, core, conversation, build/artifact and Worker gates. Final Worker group: 149/149.
- Standalone Worker suite: passed; last group 149/149.
- Noche Abierta: 33/33 after replacing obsolete voseo expectations with neutral-tú expectations; behavior assertions retained.
- Audio: finite asset tests decode and verify hashes/scripts/timings; no human listening claim.

Local HTTP checks returned 200 for home, free grammar, Mexico, Argento, Hotel and Autoestudio A1–C2 landing routes. Modo Play, account and admin correctly redirect to access/login. `/phonetics` is a component directory, not a public route; the public lesson uses `/clase/201`.

Chromium installation failed with invalid/truncated downloads, so desktop/mobile screenshots are unavailable. Source review, server rendering/component interaction and route/access tests provide the owner-authorized fallback.

Two full runs in the synchronized workspace hit packaging races: a `.rsync-tmp` file disappeared during copy, then a protected media file reappeared after removal. No infrastructure changes were made. The same source was copied to `/tmp/spanishcue-neutral-qa`, excluding generated output/runtime; its build and artifact validation passed without the synchronizer race.

Release evidence will be available in the single PR and official CI/staging/production runs. No manual merge, feature-branch deployment, schema change or credential change is authorized or performed.
