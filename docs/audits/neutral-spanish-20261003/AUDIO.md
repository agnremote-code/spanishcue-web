# Audio, listening and phonetics audit — 2026-10-03

## Scope and classification before editing

Reviewed the phonetics, phonetics-family, mouth-lab, hablar-sin-cortar,
la-entonacion-cambia-todo, listening-studio, habitacion-508, ultima-llamada,
radio-despues-de-medianoche, el-edificio-de-las-voces,
la-entrevista-que-no-salio-al-aire, frecuencia-abierta, latinoamerica-al-oido,
el-hotel-de-lo-imposible and la-ciudad-no-duerme application trees.

- **A — independent UI/instruction:** prompts, teacher notes, buttons, navigation,
  feedback, accessibility labels and production scaffolds now address one learner
  with tú. Includes irregular stems, enclitic stress and prepositional ti/contigo.
- **B — exact asset transcript:** `segments[].text`, `hostSegments[].text`,
  `script`, manifest inputs, evidence quotations, and service word timing metadata
  were protected before UI edits. A narrative preterite such as *pedí*, *salí*,
  *sentí* or *recibí* is not an imperative. Tomás is also a proper name.
- **C — intentional regional sample:** retain explicitly identified regional
  listening speakers and their exact scripts; neutralize surrounding UI.
- **D — regenerable source:** ordinary synthetic phonetics phrases and unintended
  voseo in nonregional synthetic listening turns were changed only together with
  replacement finite MP3s and their source/manifest metadata.

No browser/runtime synthesis was introduced. English lesson/UI copy was not
translated or rewritten. Existing regional voice choices are not themselves
claimed to be incorrect, nor treated as proof of a human-verified accent.

## Regeneration outcome

Exactly **12 existing MP3 paths** changed. No existing clip was removed or renamed.

| Asset under public/audio | Source correction |
| --- | --- |
| phonetics/stress-phrase-1.mp3 | ¿Tomás café? → ¿Tomas café? |
| hablar-sin-cortar/a2-bank-boundary.mp3 | Llevá un abrigo, porque a la noche hace frío. → Lleva un abrigo, porque por la noche hace frío. |
| hablar-sin-cortar/b1-bank-listen.mp3 | siempre que vos salgas → siempre que tú salgas |
| la-entonacion-cambia-todo/a1-bank-context.mp3 | Venís mañana. → Vienes mañana. |
| la-entonacion-cambia-todo/a2-context-01.mp3 | Me ayudás con la valija. → Me ayudas con la maleta. |
| la-entonacion-cambia-todo/a2-bank-context.mp3 | Me decís dónde sale el bus. → Me dices dónde sale el bus. |
| la-entonacion-cambia-todo/b2-listen-02.mp3 | podés quedarte → puedes quedarte |
| hotel/la-almohada.mp3 | elegí un recuerdo y dormí → elige un recuerdo y duerme |
| hotel/el-telefono.mp3 | soy vos → soy tú |
| frecuencia-abierta/05-chile-lider.mp3 | abrís el chat → abres el chat |
| ultima-llamada/conductor.mp3 | mandame un mensaje → mándame un mensaje (including the evidence quotation) |
| entrevista-no-salio/04-ironia.mp3 | Spanish interviewer: ¿La considerás un éxito? → ¿La consideras un éxito? |

The interview MP3 is a composite: Nora's changed Spanish turn and León's unchanged
Argentine turn were synthesized at their existing +7%/+8% rates, joined as mono
24 kHz PCM with the authored 190 ms inter-turn pause, then encoded with ffmpeg
libmp3lame at 96 kbps. The latter turn was not rewritten.

### Canonical workflow and reproducibility

Inspected `scripts/generate-hablar-audio.py` and
`scripts/generate-entonacion-audio.py` before changing audio-bound source. Installed
only their pinned build-time dependencies (`edge-tts==7.2.8`,
`praat-parselmouth==0.4.7`, plus numpy) in a temporary dependency directory.
Direct speech-service DNS was unavailable; synthesis succeeded through the
execution environment's existing HTTPS proxy with the system TLS trust store.
No secret value was printed, embedded in a file, or committed.

For Hablar/Entonación the canonical Python generator bodies were executed against
staged output paths, selecting only source rows whose exact text differed from
the old manifest. Hablar retained +0%, the original voice and word-boundary
processing. Entonación retained the original voice, authored Hz anchors and Praat
PSOLA procedure; the resulting manifest contains new signal/pitch measurements.
Only the selected successful output rows/files were copied back. Existing
manifest records for every other clip remain unchanged.

The other finite clips follow the same build-time Edge speech procedure:
collect audio and service `WordBoundary` chunks from each exact authored script,
retain declared voice/rate, write MP3 plus word metadata, probe/hash/decode, and
then replace source and asset together. Phonetics retains its declared −10%;
Frecuencia, Última llamada and the interview retain their declared segment rates.
The old Hotel source has voice identifiers but no generation-rate metadata or
checked-in generator. Its two replacements explicitly record +0% as their new
rate, rather than inventing historical rate provenance. The existing speaker
identities and question/answer meaning remain intact.

New partial manifests for Hotel, Frecuencia and the interview explicitly cover
only the replacement clips. Existing full manifests remain full. Each new clip
has SHA-256, duration, codec, sample rate, channel count and service word metadata.
The original historical provenance fields in old manifests remain historical;
`neutralSpanishRegeneration` identifies the new subset.

There is **no remaining synthesis blocker**. No human listening QA is claimed.
Technical decoding, exact generation inputs and service-returned words verify
asset integrity and intended source concordance, not independent acoustic
transcription or human pronunciation/prosody evaluation.

## Exact preserved exceptions

`audio-exemptions.json` records each preserved scanner finding by exact path,
full string, reason and category. These are narrow string exceptions, not broad
folder exemptions. The registry category `authentic-transcript` means preservation
of the exact recorded script here; these lesson recordings are synthetic and are
not represented as authentic human recordings.

Regional cases include:

- `app/el-hotel-de-lo-imposible/data.ts`, Bruno / `es-UY-MateoNeural`:
  **“no elijas un número, decí adónde querés ir”** in the Uruguayan story.
- `app/la-entrevista-que-no-salio-al-aire/content.json`, León /
  `es-AR-TomasNeural`: **“Mirá, al principio…”** and **“Esperá, esto sí quiero
  dejarlo grabado.”** The Spanish interviewer was separately corrected.
- `app/frecuencia-abierta/content.json`, Damián / Argentina:
  **“Mi jefa dice «contestá cuando puedas»”**.
- The same file, Sara / Medellín, Colombia: **“llevás seis horas sin levantarte”**.
  This explicitly located regional voice is compatible with local voseo; it is
  not a default UI instruction.
- `app/latinoamerica-al-oido/data.ts`, the explicitly Argentine story:
  **“Che, te cuento lo que me pasó ayer”**, together with its local vocabulary.
- First-person past narration, exact evidence quotations, Tomás as a name, and
  **Dale** meaning the standard tú imperative *da + le* remain unchanged.

## Verification

The scoped command below passed **67 tests, 0 failures**:

```sh
node --test tests/neutral-audio.test.mjs tests/audio-deck-wave1.test.mjs tests/wave3-audio.test.mjs tests/hablar-sin-cortar.test.mjs tests/hablar-sin-cortar-assets.test.mjs tests/hablar-sin-cortar-ui.test.mjs tests/entonacion.test.mjs tests/entonacion-ui.test.mjs tests/phonetics-wave1.test.mjs tests/phonetics-wave1-assets.test.mjs tests/wave2-listening.test.mjs
```

The combined checks cover **245 finite MP3s** in the 12 owned audio namespaces:
all exist and fully decode; manifest hashes match; authored source/clip mappings,
word metadata, reconstruction tokens and scoped non-orphan references agree.
The tests exercise hidden transcripts, retry/support isolation, answer checking,
keyboard-accessible controls, manual versus automatic evaluation boundaries,
source-backed evidence and final production flows.

Old UI expectations were updated to the new wording without removing their
behavioral assertions. Older one-task whole-file freezes now pin the exact
reviewed Spanish source hashes in `tests/fixtures/neutral-audio-reviewed.json`;
unchanged access/state/navigation/style files retain their historical freezes.
The historical listening-source comparison allows only the exact conductor
accent correction and pins the reviewed neutral extension questions separately.
`neutral-audio.test.mjs` also guards corrected subject tú, cuentas, mándame and
the Spanish interviewer's consideras against regression.
