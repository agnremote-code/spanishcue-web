# Progreso de implementación del curso G001–G236

Checkpoint para retomar sin repetir trabajo. Se actualiza con cada tanda.

## Convenciones

- Unidad nueva: `catalogId = 300 + sequence`, ruta `/gramatica/<slug>` de `curriculum.ts`, lección en `app/grammar-classroom/live/lessons/g<ID>.ts`, registro en `live/registry.ts`, fila en `catalog.ts`, estado `live` en `curriculum.ts`.
- Cada clase: siete etapas, modos profesor y autónomo, ayuda en inglés en todos los niveles (decisión de Ale, 2026-10-20), un audio (`live/audio/clips.json`, generado por el workflow «Grammar live audio» en ramas `claude/gramatica-en-vivo-*`), miniatura (`scripts/grammar-thumbnails/data.mjs`) y vista previa (`public/grammar-previews/<id>.mp4`).
- Desde G052: unos 60 minutos por clase, con un paso «Ampliación» opcional en Cerrar.
- Una tanda por PR. No fusionar un PR mientras main se está promoviendo a producción: el bloqueo de fusión hace fallar la promoción.

## Estado

| Tanda | Unidades | PR | Estado |
|---|---|---|---|
| 0 | Orden G001–G236, 58 clases existentes | #232 | en producción |
| 1–6 | 30 primeras clases nuevas (G003–G051) | #233–#237 | en producción (`fc2561d`) |
| 7–10 | G052–G106 (40 clases: 27 A2, 13 B1) | #238 | en producción (`8e140da`) |
| 11–12 | G108–G130 (18 B1, 2 B2) | #239 | fusionado (`c87a8e3`) |
| 13 | G135, G136, G138–G141, G143–G145, G147 (B2) | #240 | en producción (`84b0b33`) |
| 14 | G149, G150, G152, G153, G155–G159, G161 (B2) | #241 | en producción (`e7fc161`) |
| 15 | G163–G166 (B2), G168–G173 (C1) | #242 | en producción (`e7fc161`) |
| 16 | G174, G176–G184 (C1) | #243 | en producción (`e7fc161`) |
| 17 | G185, G187–G195 (C1) | #244 | en producción (`5700ed7`) |
| 18 | G196–G200, G203, G204 (C1), G206–G208 (C2) | #245 | lista, con audio |
| 19 | G209–G218 (C2) | — | lista, con audio |
| 20 | G219–G228 (C2) | — | lista, con audio |
| 21 | G229–G236 (C2) | — | lista; audio en el workflow |

No quedan unidades planificadas: las 236 unidades del curso tienen clase.

## Memoria del Worker

Las clases en vivo ya no viajan como módulos del Worker: el build deja solo un índice (id, título, nivel, secciones) y cada clase va cifrada en `_protected-lessons/` (`scripts/live-lessons.mjs`, `scripts/protect-client-assets.mjs`). Con 108 clases el Worker bajó de 36,4 a 31,6 MiB (presupuesto 36 MiB, PERF-001); cada clase nueva suma unos cientos de bytes. Las páginas usan `loadLiveLesson` y `getLiveLessonInfo`, no `getLiveLesson`.

## Pendientes transversales

- Ayuda en inglés en las clases existentes de B1 a C2 (todavía solo en español).
- Correcciones de G038 (variantes horarias), G050 (formas verbales no enseñadas) y G051 (afirmaciones regionales): hechas en la tanda 7.
- Auditoría de cobertura PCIC/MCER/DELE: `docs/curriculum/auditoria-cobertura-pcic-mcer-2026-10-20.md`. Propone las ampliaciones G237–G240 (ids 537–540), pendientes de decidir su lugar en el orden.

## Límites de verificación

- Los audios se comprueban por texto, hash y duración; nadie los escucha.
- No hay prueba con una cuenta real en spanishcue.com desde el entorno de trabajo; solo el smoke test del despliegue.
