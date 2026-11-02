---
name: spanishcue-lesson-style
description: How existing SpanishCue premium lessons are built (structure, pedagogy, code layout) so new lessons match
metadata:
  type: reference
  modified: 2026-09-29T13:42:20.243Z
---

Surveyed 2026-09-29 in spanishcue-web (see [[spanishcue-overview]]).

- Each premium lesson is its own route folder `app/<slug>/` with page.tsx ("use client", a single component holding all content as const arrays), style.css and layout.tsx. Example: app/el-protocolo-aurora/page.tsx (B2 conversation, id 127).
- It is registered in app/lesson-catalog.ts with: id, level, category (Gramática/Conversación/Escucha/Fonética/Vocabulario), title, subtitle, duration "≈ 45 min", a TAG in caps ("B2 · ARGUMENTAR · ESPECULAR · REVISAR"), special:true, path, image (webp under public/), 3 goals, a warmup question, and a one-line explanation.
- Pedagogy (docs/SPANISHCUE_HANDOFF.md §6): about 45 minutes, CEFR/PCIC-referenced, moves from activation to free production, Spanish only (bilingual help only for A1–A2 grammar), one tense at a time.
- UX pattern: a cinematic hero with a quick instinct choice; 5–7 timed stages with a progress ribbon; staged reveals (data or telemetry opened step by step); options A/B/C with consequences; a teacher-only role card; rotating follow-up questions; a floating level resource panel with phrase banks; a final open conversation grid; the mascot (/brand/mascot/*.webp) at the close.
- Tone: a narrative "world" (mission, terminal, city), voseo in some lessons and tú in others, plus teacher prompts written as roleplay instructions.
- The art is custom raster webp illustrations per lesson. Claude cannot paint these, so reuse existing art or ask Ale for an image.
