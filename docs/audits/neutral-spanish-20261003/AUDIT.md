# Neutral Spanish audit — reconstruction 2026-10-03

Base: `43e4b3eb1dc76031481d2406a62b9210f0dd97e2`.
Branch: `codex/neutral-spanish-audit-rebuild-20261003`.
No open overlapping PRs at start. Original local `1a5d2b0` was not recovered; this is new work.

## Scope and results

- Scanned 825 eligible source files across app, server, worker, public and supporting content roots; initial narrow inventory flagged 220 files, not 220 confirmed errors.
- 312 changed files, including 247 app/server/worker files, tests, audio assets and audit records.
- UI, home/library, marketing, login/account/report/admin messages; grammar, phonetics, listening, vocabulary, conversation, countries, universes, Modo Play, all 120 Autoestudio modules A1–C2.
- Contextual corrections include present voseo, imperatives, pronoun case, stem changes and attached-pronoun accents. Representative repairs: Escuchá → Escucha; Probá → Prueba; Decilo → Dilo; Ayudanos → Ayúdanos; Contanos → Cuéntanos; para vos → para ti; con vos → contigo.
- Complete reference paradigms added for 17 Sistema Verbal lessons. Tú, usted, nosotros, vosotros/vosotras and ustedes checked; imperative has its appropriate five persons. Conditional/subjunctive/past and Autoestudio tables repaired. No shift to exclusively Peninsular Spanish.
- Preserved explicitly Argentine teaching, authentic regional speakers, quotations, correct first-person past forms, names and plural homographs. 663 exact reviewed registry entries; no wildcard lesson exemptions.
- English copy: 10,882 values across 126 files compared against base with zero additions, deletions or changes. Additional bilingual tuple/factory reviews documented in area reports. ENGLISH COPY: UNCHANGED.
- Audio: 12 finite MP3 replacements; generation scripts, manifests, timings and dependent evidence synchronized. 245 scoped assets verified for existence, decode, checksums and references. Existing regional speech preserved; no human listening validation claimed.
- Billing/auth/permissions/teacher passes/tracking behavior preserved. Some API/server files contain Spanish-message-only changes. No secrets, schema, D1 bindings, migrations or workflows changed.

## Regression protection

`npm run test:language` runs parser/exemption/English tests, area regression tests, zero-finding source scan and base English comparison. Integrated into `npm test`. Complete Unicode word matching distinguishes vos/vosotros; ambiguous first-person forms require contextual exemption. The finite vocabulary is not a complete morphology engine.

Independent review examined approximately 826 unique token transformations and 5,977 changed strings. It found stem/hiatus/clitic errors (comproba, confesas, evalua, insinuas, double-accent sépáralo) and residual instructions; all corrected with regressions. Final reviewer reported no important/critical source findings.

## Verification

- Canonical language gate: 39 tests pass; 0 unresolved scanner findings.
- Conversation: 144 tests pass; Noche Abierta: 33 pass.
- Autoestudio representative integrated verification: 89 pass, 3 conditionally skipped; all 120 modules included in source audit and course validation.
- Grammar: 73 focused tests pass.
- Audio: 67 scoped tests pass; independent asset subset 13 tests pass.
- Lint: pass. Typecheck: pass. Build: pass. Artifact validation: pass. Diff whitespace: pass.
- Full `npm test`: pass in isolated temporary copy; final Worker group 149/149. See QA.md for local synchronizer races and resolution.

## Visual and access QA

Local built Worker started successfully at 127.0.0.1:4173. Generic `vinext start` cannot load cloudflare: modules, so the canonical local Wrangler runtime was used. Playwright Chromium download returned invalid/truncated archives despite retries. Desktop/mobile screenshots could not be completed in this environment. Per the owner's instruction, this is not a release blocker: source review, responsive paradigm styles, server render/component interaction tests and authenticated/protected route tests provide alternate coverage. No production auth relaxation or temporary bypass was introduced.

## Detailed evidence

See GLOBAL.md, GRAMMAR.md, CONVERSATION.md, REGIONAL-CATALOG.md, AUTOESTUDIO.md, AUDIO.md, GUARDS.md and EXEMPTIONS.md. Historical content-hash fixtures were refreshed only for reviewed Spanish changes; behavioral/route/access assertions retained.

## Delivery

Meaningful checkpoints have been saved remotely through the authenticated GitHub connector because command-line Git lacks write credentials. Every remote tree is verified identical to the local committed tree. Latest content checkpoint before final QA: `c329063083c7ecf1bcddad2ec95c3479defb90d3`. PR, merged SHA, staging and production results pending.
