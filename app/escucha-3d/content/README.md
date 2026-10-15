# Comprensión auditiva · content

One JSON file per game and level: `content/<game>/<level>.json` (level in lower case, e.g. `b1.json`).
Games, levels and the 8 circle ids (in order) are in `../games.mjs`. Check with
`node scripts/check-escucha-3d.mjs <game> <level>` until it prints OK.

The class flow for each circle copies the reviewed listening classes (El hotel de lo imposible,
Latinoamérica al oído): listen twice → multiple choice → choose one question and answer it aloud →
fill in the gaps → read the transcript.

```json
{
  "game": "casino",
  "level": "A2",
  "items": [
    {
      "id": "portero",
      "title": "La lista de la puerta",
      "place": "La entrada",
      "context": "Valentina espera en la fila y escucha al portero con una clienta.",
      "speakers": [
        { "name": "Rocío", "country": "Colombia", "voice": "es-CO-SalomeNeural" },
        { "name": "Iván", "country": "México", "voice": "es-MX-JorgeNeural" }
      ],
      "lines": [
        { "s": 0, "text": "Buenas noches. Estoy en la lista, me llamo Rocío Díaz." },
        { "s": 1, "text": "A ver... No, aquí no hay ninguna Rocío. ¿Con quién viene?" }
      ],
      "choice": [
        { "q": "¿Qué dice Rocío al principio?", "options": ["Que está en la lista", "Que no tiene dinero", "Que busca a su hermana"], "answer": 0 }
      ],
      "open": [
        { "q": "¿Qué harías tú si no estás en la lista de una fiesta?", "model": "Llamaría a mi amiga para que hable con el portero." }
      ],
      "gaps": "Buenas noches. Estoy en la [lista], me llamo Rocío [Díaz].",
      "glossary": [ { "word": "fila", "meaning": "personas que esperan una detrás de otra" } ]
    }
  ]
}
```

Rules
- 8 items, ids exactly as in `games.mjs`, same order. Each item is a short audio scene that happens at
  that circle of the game world, with its own little story and a clear point to understand.
- Speakers: 1–3, voices from `../voices.json`, `country` copied from there. In each file use at least
  6 different countries, women and men, and at least 4 dialogues. Give speakers names that fit
  their country. A character speaks with one voice.
- Transcript length (all lines together, words): A0 20–50 · A1 40–80 · A2 70–120 · B1 100–160 ·
  B2 140–200 · C1 170–240 · C2 200–280. Language really authored for the level (PCIC): A0/A1 present,
  short sentences, very frequent words; A2 past tenses and everyday connectors; B1 opinions,
  plans, reported speech; B2 hypotheses, nuance, subjunctive; C1 irony, implicit meaning, register;
  C2 idioms, ambiguity, overlapping intentions.
- Write for the ear: natural spoken Spanish with fillers and reactions («bueno», «a ver», «¿en serio?»),
  no stage directions, no names before lines, no brackets. Numbers in words when they matter.
- `choice`: exactly 4 questions, 3 options each, one correct (`answer` 0, 1 or 2). Spread the
  correct answer over A/B/C. Questions follow the order of the audio; first one = general idea,
  the rest = details or (from B1) inference. Wrong options must be plausible.
- `open`: exactly 3 questions that connect the audio with the student's life or opinion; the student
  chooses one and answers aloud. `model` = a short sample answer at the level.
- `gaps`: one or two consecutive sentences copied WORD FOR WORD from the lines, with exactly 4 key
  words (1–3 words each) in [brackets]. Pick words the student can hear clearly.
- `glossary`: 3–5 words or expressions that appear in the transcript, explained in simple Spanish.
- Neutral Spanish with «tú» (never voseo, also for Argentine and Uruguayan voices: the accent comes
  from the voice). The repo's neutral-Spanish guard also rejects first-person preterites that look
  like voseo, e.g. «elegí, decidí, cumplí, viví, salí, pedí, escribí, abrí, subí, recibí, decí»:
  rephrase («tomé la decisión», «hice treinta años»). The checker tells you which word failed.
- No English anywhere.

## Hospital San Casi Vivo (`hospital`)

21 circles (see `games.mjs`), levels A0–C2, `ownListening`: each circle has exactly its own item, no fallback.
Speakers must be cast members of `app/hospital-san-casi-vivo/story.mjs` with their exact `name`, `voice`
and `country`. A0 is bilingual (`bilingualA0`): every item also needs `contextEn`, `en` on every line,
`qEn` on the choice and open questions and `en` on every glossary entry; the English literals are
approved in `docs/audits/hospital-a0-english-additions-20261015.json`.
