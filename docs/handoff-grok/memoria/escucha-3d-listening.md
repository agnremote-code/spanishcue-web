---
name: escucha-3d-listening
description: «Comprensión auditiva» mode in the 4 3D games (Noche abierta, casino, bosque, Reino): 200 listenings, Edge TTS audio built in GitHub Actions
metadata:
  type: project
  modified: 2026-10-14T09:41:35.533Z
---
Ale asked on 2026-10-14 for listening classes inside the 3D conversation games ("los hongos" = El bosque de los hongos gigantes, ID 226). Thread "Listening en las clases 3D" (cmsg_01Gr5R4j3t2Yet65UcmhcVhANQK6q29n5HtVtZoL99NTcS), branch claude/escucha-3d-20261014.

- Shared module app/escucha-3d/: games.mjs (levels + 8 circle ids per game), Escucha.tsx (ModeSwitch «Conversación / Comprensión auditiva», ListeningCard rendered via portal on document.body, ListeningBadge, hooks storing mode/progress in localStorage), loaders.ts (one chunk per level), content/<game>/<level>.json (8 items × levels: noche/casino/bosque A1–C2, reino A0–C2 = 200).
- Flow copies the reviewed listening classes: listen twice → 4 multiple choice → choose 1 of 3 questions and answer aloud (model answer) → fill 4 gaps (typed, accents ignored) → transcript + glossary. A circle without its own listening opens the next unfinished one. Casino C1 listenings follow the marketing track.
- Checker: `node scripts/check-escucha-3d.mjs [game] [level]` (shape, word counts per level, ≥6 countries/file, neutral-Spanish guard). Test tests/escucha-3d.test.mjs is in npm test.
- AUDIO: edge-tts is blocked from the container (proxy 403), so .github/workflows/escucha-3d-audio.yml runs scripts/generate-escucha-3d-audio.py on push to claude/escucha-3d-* branches (needs latest edge-tts; 7.2.8 gets WS 403) and commits public/audio/escucha-3d + app/escucha-3d/audio-manifest.json (hash skip). 40 kbps mono, ~64 MB for 200 clips. Premium audio is encrypted automatically (prefix not in freeAudioPrefixes).
- LIVE 2026-10-14 ~10:30Z: PR #180 (merge 1add831), deployed in main f6fc1e6, prod smoke green. Not tested on real GPU/phone.
- To edit content later: push the JSON change on a claude/escucha-3d-* branch and let the workflow rebuild only the changed clips.
