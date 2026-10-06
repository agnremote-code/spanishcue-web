# Autoestudio neural audio implementation plan

Goal: Replace browser synthesis with finite native Spanish neural MP3 assets.
Architecture: Export requests through the existing moduleClips/audioKey contract; generate with edge-tts 7.2.8, verify with ffprobe/ffmpeg, publish a complete manifest only after every asset validates. Playback uses static audio exclusively and reports missing/load failures through the existing UI.
Tech stack: TypeScript, esbuild, Python, edge-tts, ffmpeg, Node test runner.
Spec: Owner's explicit 2026-10-06 task in this session.
Base: 677d7f499e5c854477cd643ee9a134220a7d7d26.

## Constraints
No paid API, runtime synthesis, content/auth/billing/D1 changes, manual parallel clip list, or competing implementation. Exact regional neural voices preferred, gender respected, no generic es-US fallback. Existing owner authorization covers implementation through official production release.

## Review focus
Partial manifests must fail closed; interrupted generation must resume safely; corrupt/silent files must fail real decoding; playback cancellation and old events must not stop a new sequence; all curriculum audio controls must have exported keys.

## Tasks
- [ ] Add failing completeness and playback tests; verify failures against empty manifest/browser runtime.
- [ ] Add scripts/export-autoestudio-audio.mjs consuming moduleClips and scripts/generate-autoestudio-audio.py consuming its JSON. Query live provider catalog, select exact locale/gender, generate resumable assets, validate decoding/duration/codec/rate/RMS/peak/hash, atomically publish manifest and provenance.
- [ ] Replace engine/speech.ts browser synthesis with static playback; remove voice warming from ModulePlayer; preserve immediate gesture playback, cancellation, slow rate and error UI. Exercise mixed missing sequences and real buttons.
- [ ] Add independent artifact validator and failure fixtures (empty/missing/orphan/corrupt/silent/hash mismatch); run it in existing artifact validation. Validate every required key and every emitted MP3.
- [ ] Run all tests, lint, typecheck, build and artifact validation. Review changes, commit/push one non-draft PR and resolve CI until auto-merge.
- [ ] Verify merged main, dispatch official staging and production workflows, run production smoke and verify B1 pronunciation/listening plus A1/A2/B2/C1/C2 samples load MP3 without browser speech.
