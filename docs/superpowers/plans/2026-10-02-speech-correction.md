# Speech correction repair implementation plan

Goal: capture real PCM, show actual input, recognize Spanish and conservatively correct an authored boundary across A1–C2.
Architecture: reusable Web Audio capture → validated mono 16 kHz WAV → private Azure adapter → server-measured silences and timestamp analysis → learner feedback. Recordings remain ephemeral. Open production access/provider configuration limits must be reported truthfully.
Base: fa398130939bd1a5f11a6c1fb1e7a072011bcb60. Follow AGENTS.md; one task branch, CI auto-merge and official release only.

- [x] Add failing regressions for PCM validation/nonzero samples, confidence/timing safety, permission/capture lifecycle and server-derived silence.
- [x] Implement reusable capture with explicit AudioContext resume, real live RMS, resource cleanup and bounded PCM memory; encode once and replay the same WAV sent to Azure.
- [x] Validate WAV headers/lengths, compute signal on server, preserve provider failure reasons and validate real word timing; uncertainty never certifies continuity.
- [x] Render clear recording/silence/analysis states, expected and recognized phrases, boundary pause/join, replay model/voice and immediate retry. Teacher diagnostics optional.
- [x] Run focused tests, full npm test, lint, TypeScript, artifact validation and diff checks. Attempt browser QA without weakening production auth.
- [ ] Commit/push through GitHub connector, open non-draft PR, follow CI and official staging/production workflows to verified result.

Review focus: permission resolving after unmount; retry after request failure; invalid/out-of-order timestamps; missing confidence; mismatched words with fluent timing. Tests must cover these before claiming correction success. No raw audio logging, D1 writes or analytics.

Verification: full npm test exit 0 (607 tests across 15 runs), lint exit 0, TypeScript exit 0, artifact validation exit 0, diff check clean. Independent review corrected overlapping word times, model/capture concurrency and final attempt identity. Production endpoint enforces 401 without PRO session. Cloud browser blocks localhost (ERR_BLOCKED_BY_CLIENT), production lesson is PRO-gated. Physical microphone and real Azure STT/configuration remain unverified.
