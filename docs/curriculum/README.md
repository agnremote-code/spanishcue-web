# Curso de gramática A0–C2 (G001–G236)

- **Registro:** `app/grammar-classroom/curriculum.ts`. Una fila por unidad, en orden pedagógico (`sequence`, `code` G001…). `catalogId` es la clave técnica estable: progreso guardado (`spanishcue:gramatica:<id>:v1`, `live_class_sessions`), URL y audio. Las 58 clases existentes conservan su id y su URL; las unidades nuevas reservan el id `300 + sequence` (G003 → 303).
- **Estado:** `live` (la clase existe y se abre) o `planned` (en el mapa, todavía sin escribir). Una unidad nueva pasa a `live` en el mismo PR que añade su `live/lessons/g<id>.ts`, su entrada en `live/registry.ts` y en `grammar-classroom/catalog.ts`.
- **Prerrequisitos:** informativos y acíclicos (la unidad anterior + los temas de los que depende). El docente abre cualquier clase; el modo autónomo recibe una sugerencia, nunca un bloqueo.
- **Orden:** solo `sequence`. Los filtros de nivel y tema reducen la lista sin reordenarla. La biblioteca conserva su orden histórico (`curriculumSequence`) para no renumerar los ledgers.
- **Progreso:** `live/progress.ts` cuenta las actividades resueltas por sección, igual que la barra lateral de la clase. El mapa del curso (`GrammarCourse`, en `/spanish-grammar-lessons#course`) lee el progreso de este navegador o, para un docente con sesión, el de un alumno (`GET /api/live-class?studentId=…`, solo lectura, sin cambios de esquema).
- **A0:** G001 (clase 239) es A0 en el curso y en la clase. En los filtros de la biblioteca sigue dentro de A1, como se decidió el 2026-10-15.
- **Fuente:** `spanishcue-curriculo-2026-10-20.json` y `mapa-curricular-2026-10-20.md` (plan del 2026-10-20). Las categorías de las unidades nuevas se asignaron con la misma lista de temas de la biblioteca.
