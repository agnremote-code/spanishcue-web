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
| 7 | G052, G053, G056, G058, G060–G065 | — | en preparación |

Siguiente unidad pendiente después de la tanda 7: G066 (id 366).

## Pendientes transversales

- Ayuda en inglés en las clases existentes de B1 a C2 (todavía solo en español).
- Correcciones de G038 (variantes horarias), G050 (formas verbales no enseñadas) y G051 (afirmaciones regionales): en curso en la tanda 7.
- Auditoría de cobertura PCIC/MCER/DELE: `docs/curriculum/auditoria-cobertura-pcic-mcer-2026-10-20.md` (en curso).

## Límites de verificación

- Los audios se comprueban por texto, hash y duración; nadie los escucha.
- No hay prueba con una cuenta real en spanishcue.com desde el entorno de trabajo; solo el smoke test del despliegue.
