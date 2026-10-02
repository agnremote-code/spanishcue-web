# La entonación cambia todo

One live-class lesson, catalog ID **225**, route `/la-entonacion-cambia-todo`.
Six complete authored variants: A1, A2, B1, B2, C1, C2. Task base:
`829bfdef46e1b2fdb1fd81eb0836ab3e5155eb13`.

## Engine and journey

Reuses `phonetics-family` and the exact stage/state/level navigation contract
from Hablar sin cortar. No parallel engine, routes or catalog cards. The only
shared UI extension is an optional `MascotGuide` and optional art identity
fields on `WorldDefinition`; existing definitions keep their previous behavior.
Each level has eight central activities, two optional activities, and a final
oral task. Stages: Entrada → Escuchá la intención → ¿Suena igual? → Cambiá el
tono → Decilo de otra manera → Usalo en contexto → Desafío final. Approximately
50 minutes including oral repetition, interaction and feedback.

Audio plays before options, comparison or production. Transcript and explanation
remain hidden until explicitly requested or checked. Help is marked assisted.
Two-take tasks require both recordings to finish. A level change keeps the broad
stage and teacher mode while clearing answers, transcripts and observations;
stale callbacks cannot update the new level. Only a level preference is stored.
No recording, microphone access, speech analysis or automated pronunciation score.

## Levels

| Level | Listening and interaction | Final transfer |
| --- | --- | --- |
| A1 | Familiar phrases, question/confirmation, surprise, gestures | 2–3 short utterances with a clear intention |
| A2 | Plans, invitations, travel requests, doubt and security | Contextual mini dialogue with a changed intention |
| B1 | Prominence, everyday attitude, focus and conversational repair | Repair a misunderstanding; change focus and explain |
| B2 | Reassurance, insistence, negotiation, skeptical readings | Same idea in contrasting deliveries with justification |
| C1 | Stance, attenuation, concessions, parenthetical shifts and contextual irony | Reframe criticism to change interpersonal effect |
| C2 | Rhetorical closure, implicature, deliberate ambiguity and layered stance | Three pragmatic deliveries of identical content |

Interpretations are contextual hypotheses, not universal mappings from pitch to
emotion. The advanced levels explicitly compare plausible alternatives and ask
for auditory evidence and consequences for the interlocutor. The teacher models
fine lexical focus and parenthetical shifts in live interaction rather than
claiming the synthetic clip certifies them.

## Finite audio and provenance

72 committed MP3 clips: 60 activity models and 12 alternate takes. Same-word
pairs retain segment sequence and duration while changing the pitch contour.
Generator: `scripts/generate-entonacion-audio.py`; dependencies edge-tts 7.2.8,
praat-parselmouth 0.4.7, numpy, ffmpeg. Microsoft `es-AR-TomasNeural` input is
synthesized at build time, then Praat PSOLA replaces the pitch tier using
explicit authored Hz anchors over the voiced span. No browser/runtime TTS.

Manifest records exact generation input, hashes, duration, signal level,
service word metadata, pitch anchors, voiced span, measured pitch range and
editing provenance. Tests fully decode all assets, verify audible signal,
references and matching input, and reject orphans and duplicate hashes.
**No human listening audit or natural emotional-performance certification is
claimed.** Models are schematic rehearsal contrasts. Teacher notes say to
compare in-context live models, especially for irony, lexical focus and stance.

## Visual identity and mascot

Grounded daylight voice-coaching room: real fabric panels, piano, oak table,
normal microphone and headphones, paper cue cards, olive curtain and brass lamp.
The hero includes the current official adult SpanishCue character using
headphones and rehearsing a cue card. No holograms, floating UI, sci-fi or neon.
The hero differs from Hablar sin cortar's dark walnut recording studio.

In-workspace mascot poses are existing official `/brand/mascot/` assets. His
pose and prompt respond to listening, checking, oral production, completion and
teacher guidance. He remains present through stages and the final challenge.
The same character is visible in the catalog thumbnail.

Hero prompt (built-in ImageGen, identity reference supplied):
> Physically real voice coaching rehearsal room in cinematic premium editorial
> photography, cream acoustic fabric, olive curtain, brass floor lamp, upright
> piano, oak table, real microphone, headphones and paper cue cards. Real daylight,
> believable shadows and proportions. Left negative space for web title, without
> text. On the right, the same adult SpanishCue man from the reference, preserving
> his face, curly hair, black shirt and trousers, naturally seated with headphones,
> holding a cue card and gesturing as he rehearses. No additional people, floating
> objects, holograms, neon, futuristic technology or interface graphics.

## Verification and release

New data/asset/catalog and rendering tests are included in `npm test` via the
existing Worker test driver. Historical snapshot counts are updated by exactly
one addition, and the existing preservation helper reverses only its bounded
shared-file edits when checking prior lesson fixtures. No auth, billing, D1,
Autoestudio or existing lesson content modifications. CI installs FFmpeg in
both verification jobs so the full audio-decoding checks also run on GitHub.

Local full suite/build and lint succeeded in the first run. Targeted regression
suite: 35 tests passed. Global typecheck has **11 pre-existing errors** in billing
subscription handling, marketing sample keys and Mexico map typing; a separate
clean archive of the task base produces exactly the same TypeScript diagnostics.
New phonetics modules introduce no additional type errors.

Release must use the existing CI + Auto Merge flow and verify the merged SHA.
Staging and production use the owner-authorized Cloudflare workflows against
that exact SHA. No deployment from an unmerged branch and no manual merge.
