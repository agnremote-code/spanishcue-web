# Speech-to-text and speaker check: ascensor B2

Rule: BOARD-DECISION-003. Models: large-v3-turbo (faster-whisper, int8), large-v3 (second model, findings only), Resemblyzer VoiceEncoder. Speaker margin: 0.02.

## Seeded-defect test

**All seeded defects found: NO: the check is not valid and proves nothing**

- words · estacion line 4: gap word «vuelto» deleted, gap word «caro» → «caros» → found (broken clip verdict HOLD)
- words · estacion line 1: «a ver» repeated twice at the line join → found (broken clip verdict HOLD)
- words · estacion line 2: plain word «ascensor» deleted → found (broken clip verdict HOLD)
- words · estacion line 3: article «la» → «las» → found (broken clip verdict HOLD)
- words · estacion line 5: first word «Y» → «Ya» → found (broken clip verdict HOLD)
- words · estacion line None: gap word «vuelto» reported as not heard → found (broken clip verdict HOLD)
- words · estacion line None: gap word «caro» reported as not heard → MISSED (broken clip verdict HOLD)
- speaker · escalera line 2: line read by es-CL-CatalinaNeural instead of es-VE-PaolaNeural → found, margin -0.208 (broken clip verdict HOLD)
- speaker · cafe line 2: line read by es-AR-TomasNeural instead of es-CO-SalomeNeural → found, margin -0.342 (broken clip verdict HOLD)

## Clips

| Clip | Verdict | Gap words heard | Lines with uncleared word findings | Speaker mismatches or unresolved |
|---|---|---|---|---|
| estacion | **PASS** | 5/5 | none | none |
| escalera | **PASS** | 4/4 | none | none |
| cafe | **HOLD** | 4/4 | 2, 3, 5 | none |
| taller | **PASS** | 5/5 | none | none |
| mirador | **PASS** | 4/4 | none | none |
| asamblea | **PASS** | 5/5 | none | none |

## Findings per line

- estacion line 5 (Lorenzo): authored «valen» / heard «vale» at 57.58 s → second model: «y una cosa mas si la fundacion pone a otra persona en mi caseta yo no me enojo pero que me pregunten al tiro antes de firmar nada treinta y cinco años algo valen nos vemos en la asamblea», cleared
- cafe line 2 (Yaneth): authored «yaneth» / heard «janet» at 17.84 s → second model: «hola ignacio soy janet enfermera trabajo de noche en el plan y vuelvo a casa a las siete de la mañana», NOT cleared
- cafe line 3 (Ignacio): authored «yaneth» / heard «janet» at 26.08 s → second model: «y que propones jeanette», NOT cleared
- cafe line 5 (Ignacio): authored «yaneth» / heard «janet» at 45.14 s → second model: «clarisimo gracias jeanette segunda llamada luis adelante», NOT cleared

**All clips pass: NO.** Tool valid (seeded test): False.
