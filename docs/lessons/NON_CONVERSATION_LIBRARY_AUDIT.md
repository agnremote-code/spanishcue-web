# SPANISHCUE non-conversation library audit

Inventory checkpoint, 2026-09-28 (Asia/Saigon). Pedagogical review is in progress.

## Source and preservation

Canonical main: `5d6733a9b9404bbc17bf6999530eb48ffb574a3e`. Batch 1 final: `019310604045bcdccf74fe3606e685ec826797f5`. Main is an ancestor of Batch 1; Batch 1 is not integrated into main. This audit branches from Batch 1 final, retaining the latest legitimate source from both histories. No open PRs at startup.

Branch: `codex/quality-v2-nonconversation-audit-20260928`. This is a source inventory, not a claim about deployed production. User instructions require branch-only delivery, no merge or deployment.

## Counting method

One active numeric lesson-ledger ID equals one record. Runtime evaluation of `app/lesson-catalog.ts` and `catalogLessons` yields exactly the same 65 non-conversation IDs. Resource previews, dynamic route adapters, translated labels, curricular hubs and advertised level ranges do not add lessons. All route sources and thumbnail files exist; every resource slug resolves to the original ID.

| Category | Records |
| --- | ---: |
| Gramática | 51 |
| Fonética | 3 |
| Escucha | 8 |
| Vocabulario | 3 |
| **Total** | **65** |

| CEFR | Primary record level | Advertised filter memberships |
| --- | ---: | ---: |
| A1 | 23 | 23 |
| A2 | 13 | 19 |
| B1 | 11 | 14 |
| B2 | 10 | 13 |
| C1 | 6 | 9 |
| C2 | 2 | 2 |

Primary-level total is 65. Advertised memberships overlap and do not establish separately authored level variants. There are 8 FREE and 57 PRO records.

## Active route ledger

| ID | Category | Primary CEFR | Title | Route | Access |
| --- | --- | --- | --- | --- | --- |
| 40 | Gramática | A1 | La Fábrica de los Nombres | `/la-fabrica-de-los-nombres` | FREE |
| 42 | Gramática | A1 | La Galería de los Artículos | `/la-galeria-de-los-articulos` | PRO |
| 41 | Gramática | A1 | El Atelier de la Concordancia | `/el-atelier-de-la-concordancia` | FREE |
| 43 | Gramática | A1 | El Observatorio de las Distancias | `/el-observatorio-de-las-distancias` | PRO |
| 44 | Gramática | A1 | La Casa de las Pertenencias | `/la-casa-de-las-pertenencias` | PRO |
| 45 | Gramática | A1 | El Mercado de las Cantidades | `/el-mercado-de-las-cantidades` | PRO |
| 48 | Gramática | A1 | La Ciudad de los Motores | `/la-ciudad-de-los-motores` | PRO |
| 107 | Gramática | A1 | Modo vs. tiempo verbal | `/modo-vs-tiempo-verbal` | PRO |
| 140 | Gramática | A1 | Presente de indicativo | `/sistema-verbal/presente-de-indicativo` | PRO |
| 3 | Gramática | A1 | Presente con vos | `/clase/3` | PRO |
| 110 | Gramática | A1 | El Taller de las Capas | `/grupos-de-palabras-con-sentido` | PRO |
| 111 | Gramática | A1 | La Mesa de Montaje | `/de-palabras-a-oraciones-completas` | PRO |
| 47 | Gramática | A1 | La Torre de las Coordenadas | `/la-torre-de-las-coordenadas` | PRO |
| 46 | Gramática | A1 | La Central de las Identidades | `/la-central-de-las-identidades` | PRO |
| 106 | Gramática | A1 | La estación de los dos destinos | `/la-estacion-de-los-dos-destinos` | PRO |
| 211 | Gramática | A1 | Conecta la frase | `/conecta-la-frase` | PRO |
| 212 | Gramática | A1 | Ideas dentro de ideas | `/ideas-dentro-de-ideas` | PRO |
| 141 | Gramática | A2 | Pretérito perfecto compuesto de indicativo | `/sistema-verbal/preterito-perfecto-compuesto-indicativo` | PRO |
| 142 | Gramática | A2 | Pretérito perfecto simple de indicativo | `/sistema-verbal/preterito-perfecto-simple-indicativo` | PRO |
| 143 | Gramática | A2 | Pretérito imperfecto de indicativo | `/sistema-verbal/preterito-imperfecto-indicativo` | PRO |
| 144 | Gramática | A2 | Futuro simple de indicativo | `/sistema-verbal/futuro-simple-indicativo` | PRO |
| 145 | Gramática | A2 | Imperativo afirmativo y negativo | `/sistema-verbal/imperativo` | PRO |
| 213 | Gramática | A2 | Antes, después, cuando | `/antes-despues-cuando` | PRO |
| 214 | Gramática | A2 | Si pasa esto… | `/si-pasa-esto` | PRO |
| 112 | Gramática | A2 | El Estudio del Detalle | `/expandir-y-precisar-descripciones` | PRO |
| 113 | Gramática | A2 | La Sala de las Posiciones | `/una-oracion-puede-moverse` | PRO |
| 217 | Gramática | B1 | Pero hay un matiz | `/pero-hay-un-matiz` | PRO |
| 218 | Gramática | B1 | La persona que tengo en mente | `/la-persona-que-tengo-en-mente` | PRO |
| 114 | Gramática | B1 | El Laboratorio de la Segunda Versión | `/decir-mas-sin-repetir` | PRO |
| 18 | Gramática | B1 | El Pasado | `/past-b1` | PRO |
| 146 | Gramática | B1 | Condicional simple de indicativo | `/sistema-verbal/condicional-simple-indicativo` | PRO |
| 147 | Gramática | B1 | Pretérito pluscuamperfecto de indicativo | `/sistema-verbal/preterito-pluscuamperfecto-indicativo` | PRO |
| 115 | Gramática | B1 | La Línea de los Cambios | `/empezar-seguir-repetir-dejar-de-hacer` | PRO |
| 31 | Gramática | B1 | Condicionales paso a paso | `/condicionales-b1` | PRO |
| 148 | Gramática | B1 | Presente de subjuntivo | `/sistema-verbal/presente-de-subjuntivo` | PRO |
| 149 | Gramática | B1 | Pretérito perfecto de subjuntivo | `/sistema-verbal/preterito-perfecto-subjuntivo` | PRO |
| 116 | Gramática | B2 | La Mesa del Editor | `/precision-grupo-nominal-adjetival` | PRO |
| 117 | Gramática | B2 | El Panel de Conexiones | `/verbos-que-piden-una-estructura` | PRO |
| 23 | Gramática | B2 | El Multiverso del ‘Si’ | `/condicionales` | PRO |
| 150 | Gramática | B2 | Pretérito imperfecto de subjuntivo | `/sistema-verbal/preterito-imperfecto-subjuntivo` | PRO |
| 151 | Gramática | B2 | Pretérito pluscuamperfecto de subjuntivo | `/sistema-verbal/preterito-pluscuamperfecto-subjuntivo` | PRO |
| 152 | Gramática | B2 | Condicional compuesto de indicativo | `/sistema-verbal/condicional-compuesto-indicativo` | PRO |
| 153 | Gramática | B2 | Futuro compuesto de indicativo | `/sistema-verbal/futuro-compuesto-indicativo` | PRO |
| 219 | Gramática | B2 | Si fuera distinto… | `/si-fuera-distinto` | PRO |
| 220 | Gramática | B2 | Aunque cambie el dato… | `/aunque-cambie-el-dato` | PRO |
| 118 | Gramática | C1 | El Archivo de las Dos Lecturas | `/cuando-una-frase-puede-significar-dos-cosas` | PRO |
| 119 | Gramática | C1 | La Cámara de la Acción | `/la-accion-vista-desde-dentro` | PRO |
| 37 | Gramática | C1 | El País del Subjuntivo | `/subjuntivo-pais-maravillas` | PRO |
| 154 | Gramática | C1 | Pretérito anterior de indicativo | `/sistema-verbal/preterito-anterior-indicativo` | PRO |
| 155 | Gramática | C1 | Futuro simple de subjuntivo | `/sistema-verbal/futuro-simple-subjuntivo` | PRO |
| 156 | Gramática | C2 | Futuro perfecto de subjuntivo | `/sistema-verbal/futuro-perfecto-subjuntivo` | PRO |
| 201 | Fonética | A1 | Cinco vocales, cinco sonidos | `/clase/201` | FREE |
| 202 | Fonética | A1 | El ritmo de las palabras | `/clase/202` | FREE |
| 38 | Fonética | A1 | Spanish Mouth Lab | `/clase/38` | PRO |
| 130 | Escucha | A1 | El Edificio de las Voces | `/el-edificio-de-las-voces` | PRO |
| 131 | Escucha | A2 | Última Llamada | `/ultima-llamada` | PRO |
| 105 | Escucha | A2 | El hotel de lo imposible | `/el-hotel-de-lo-imposible` | FREE |
| 28 | Escucha | A2 | Latinoamérica al Oído | `/latinoamerica-al-oido` | FREE |
| 132 | Escucha | B1 | Radio Después de Medianoche | `/radio-despues-de-medianoche` | PRO |
| 133 | Escucha | B2 | Habitación 508 | `/habitacion-508` | PRO |
| 134 | Escucha | C1 | La Entrevista que no Salió al Aire | `/la-entrevista-que-no-salio-al-aire` | PRO |
| 135 | Escucha | C2 | Frecuencia Abierta | `/frecuencia-abierta` | PRO |
| 16 | Vocabulario | A1 | ARGENTO | `/argento` | FREE |
| 204 | Vocabulario | A1 | Palabras para resolver el día | `/clase/204` | FREE |
| 108 | Vocabulario | A2 | El Banco de Palabras | `/banco-de-palabras` | PRO |

The final audit will add per-lesson quality evidence, curricular coverage/gaps, reusable engines, historical drift and bounded production batches. Existing source/content/assets/routes remain untouched.
