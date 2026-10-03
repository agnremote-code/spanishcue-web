# Regional lessons and catalog audit

Base: `43e4b3eb1dc76031481d2406a62b9210f0dd97e2`.

Reviewed 28 TypeScript/TSX sources under ARGENTO, Argento Roleplays, Buenos Aires en la calle, Banco de palabras, La estación de los dos destinos, La cámara de presión, Monasterio de las ideas, clase, and the lesson catalog/additional samples. Eighteen content files changed, plus one existing test. Approximately 640 Spanish strings were corrected. No functionality, media asset, audio script, billing, auth or database changes.

## Repairs

- ARGENTO general questions, task cues, teacher notes, feedback, buttons and navigation now address the learner with neutral tú. Argentine slang, regional dialogue and explicit phrase examples remain regional.
- Argento Roleplays scene descriptions and all surrounding instructions are neutral. The 210 dialogue interventions, teacher character's roleplay prompts and Argentine response resources retain their intentional variety.
- Buenos Aires street dialogues/local phrase models remain regional; map instructions, hooks, missions, personal discussion questions and teacher instructions now use neutral tú.
- Catalog metadata and general samples use neutral tú even when linking to a regional lesson. The explicit “Presente con vos” lesson retains its actual paradigm, drills and quoted model, with neutral outer instructions.
- General vocabulary model `doblá` became `dobla`; the separate explicit tú/vos/usted comparison remains. Ordinary requests now use `puedes`.
- OD/OI tables default to tú, retain vosotros/vosotras and ustedes, and use correct `ti`/`contigo` complements. The broad default `tú / vos` row was removed without removing any grammatical person needed by the international paradigm.
- C2 questions and worlds now use neutral imperatives and conjugations.
- Clitics reviewed explicitly: `hacelo → hazlo`, `miralo → míralo`, `contalo → cuéntalo`, `reformulala → reformúlala`, `preparame → prepárame`, `presentate → preséntate`.

## Exact exceptions

`regional-exemptions.json` provides 153 exact path/text entries, rather than directory or lesson exemptions. These cover regional speech examples, explicit comparisons and a few contextual false positives. `Seguí hablando` is a first-person preterite self-assessment, while `Dale indicaciones…` is valid neutral `da + le`.

Examples preserved: `¿Querés una birra o una gaseosa?`, `¿Me cargás la SUBE?`, `Hablás, comés, vivís: el patrón rioplatense`, and the explicitly contrasted `¿Tomás café? / ¿Tomas café?`. Surrounding instructions are neutral.

## English verification

ENGLISH COPY: UNCHANGED within this owned batch.

Compared base and working runtime data for `argento/data.ts`, `argento/practice-data.ts`, `argento-roleplays/data.ts`, and `buenos-aires-en-la-calle/data.ts`: **1,157 English Pair second elements, dialogue third elements and explicit English properties matched exactly**. An AST comparison across all 28 owned sources preserved literal counts; every changed literal was reviewed as Spanish, including the Spanish portion of mixed-language labels. All English portions of mixed-language labels were retained byte-for-byte.

## Checks

- Scoped `scanSource` using the exact fragment: **0 findings**.
- `node --test --test-isolation=none tests/wave2-argento.test.mjs tests/conversation-worlds-c2-content.test.mjs tests/conversation-worlds-c2.test.mjs`: **21/21 pass**.
- Existing ARGENTO content snapshot refreshed for the approved Spanish question/instruction changes. The shared starters/connectors/reactions hash remains unchanged. Feedback expectation now checks `Prueba otra opción`.
- `npx tsc --noEmit`: **pass** (only npm environment warning).
- `git diff --check`: **pass**.

Parent agent owns the remote checkpoint, global registry merge, full-suite QA and delivery. This batch is ready for that checkpoint.
