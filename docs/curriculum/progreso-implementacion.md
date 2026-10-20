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
| 11 | G108–G118 (10 B1) | (mismo PR que 12) | lista, con audio |
| 12 | G119–G130 (8 B1, 2 B2) | (mismo PR) | lista, con audio |
| 13 | G135, G136, G138–G141, G143–G145, G147 (B2) | — | en redacción |

Siguiente unidad pendiente después de la tanda 13: G149 (id 449).

## Memoria del Worker

Las clases en vivo ya no viajan como módulos del Worker: el build deja solo un índice (id, título, nivel, secciones) y cada clase va cifrada en `_protected-lessons/` (`scripts/live-lessons.mjs`, `scripts/protect-client-assets.mjs`). Con 108 clases el Worker bajó de 36,4 a 31,6 MiB (presupuesto 36 MiB, PERF-001); cada clase nueva suma unos cientos de bytes. Las páginas usan `loadLiveLesson` y `getLiveLessonInfo`, no `getLiveLesson`.

## Pendientes transversales

- Ayuda en inglés en las clases existentes de B1 a C2 (todavía solo en español).
- Correcciones de G038 (variantes horarias), G050 (formas verbales no enseñadas) y G051 (afirmaciones regionales): hechas en la tanda 7.
- Auditoría de cobertura PCIC/MCER/DELE: `docs/curriculum/auditoria-cobertura-pcic-mcer-2026-10-20.md`. Propone las ampliaciones G237–G240 (ids 537–540), pendientes de decidir su lugar en el orden.

## Límites de verificación

- Los audios se comprueban por texto, hash y duración; nadie los escucha.
- No hay prueba con una cuenta real en spanishcue.com desde el entorno de trabajo; solo el smoke test del despliegue.
