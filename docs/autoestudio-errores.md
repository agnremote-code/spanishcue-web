# Autoestudio: historial de errores, panel docente y clases recomendadas

Qué guarda el sistema, cómo decide qué recomendar y qué parte del cobro reutiliza. Todo lo descrito está cubierto por `tests/homework-errors*.test.mjs`.

## 1. Registro de errores (append-only)

- Tablas (`drizzle/0012_homework_errors.sql`, `CREATE IF NOT EXISTS`, se aplica en ambos workflows de deploy y se verifica con `scripts/verify-homework-errors-schema.mjs`):
  - `homework_errors`: una fila por respuesta incorrecta. Alumno (`learner_id`, `pass_id`, `owner_id`), nivel, semana (`module_id`), sección, ejercicio e ítem, tipo, **pregunta original**, **respuesta dada**, **respuesta correcta**, explicación, categoría gramatical, intento, veredicto (`wrong`/`accent`), `created_at` y `corrected_at`.
  - `homework_teacher_notes`: notas del profesor y marcas «trabajado en clase» por tema.
  - `homework_events`: tarjeta mostrada / clase abierta / demostración vista / bloqueo visto, por alumno y clase.
- Las tablas usan el prefijo `homework_` a propósito: el release gate de Autoestudio cuenta los objetos `autoestudio_%` de 0011 y no debe cambiar.
- Escritura: `POST /api/autoestudio/errors` (`app/autoestudio/errors/server.ts`). Requiere la cookie del pase; el cliente envía solo `moduleId/section/exerciseId/itemIndex/given/verdict/attempt`. El servidor resuelve la pregunta, la respuesta correcta, la explicación y la categoría desde el currículo (`app/autoestudio/curriculum/lookup.ts`), así que el navegador no puede falsificar contenido (409), ni escribir fuera de su nivel (403), ni sobre otro pase (409).
- Una respuesta correcta posterior **no borra nada**: solo marca `corrected_at` en los errores pendientes de ese ítem. Un nuevo fallo añade otra fila.
- Sin pase (semanas gratis), el registro queda en `localStorage` (`spanishcue.autoestudio.errors.v1.*`) y sirve para agrupar las tarjetas; no llega al profesor.

## 2. Categorías y prioridades (reglas verificables, sin IA)

- `app/autoestudio/errors/categorize.ts`: sección → (tildes, pronunciación, escucha, lectura, vocabulario); si es gramática, primero el intercambio ser/estar entre lo respondido y lo esperado, luego la explicación del ejercicio, la forma esperada, el enunciado y los objetivos de la semana.
- `app/autoestudio/errors/model.ts`: por tema, puntuación = Σ (recencia 1.5/1/0.6) × quiz 1.3 × corregido 0.4 × tilde 0.5, ×1.5 si aparece en ≥2 actividades. Estados: `refuerzo`, `atencion`, `leve`, `superado` (todo corregido y sin errores después de trabajarlo en clase).
- `app/autoestudio/errors/plan.ts`: resumen, ejercicios construidos a partir de los errores reales (corrige / completa / elige / transforma) y preguntas de conversación por tema y nivel. Sin errores no inventa nada.

## 3. Recomendaciones de clases reales

- `app/autoestudio/errors/catalog.ts` mapea cada categoría a clases de **Gramática del catálogo real** que tengan aula guiada (`classroomIds`), ordenadas por cercanía de nivel. Vocabulario, lectura y escucha no recomiendan nada.
- En Homework (`Recommendation.tsx` + `useErrorLog.ts`): tras el feedback, una tarjeta por tema por visita, nada si el tema se descartó en las últimas 24 h, nada si el alumno ya tiene acceso completo. La actividad nunca se bloquea.
- Enlace: `/autoestudio/clase/<id>?de=<semana>&tema=<categoría>`; las clases gratis enlazan a su ruta real.

## 4. Demostración de una clase PRO (`/autoestudio/clase/[id]`)

- `app/grammar-classroom/preview.ts` recorta la clase **en el servidor**: apertura, lectura y primera regla completas; práctica, escucha, conversación, escritura y cierre vacíos. El HTML y el payload RSC no llevan la transcripción ni las respuestas.
- `Classroom` en modo `preview` marca etapas con 🔒, muestra el panel de bloqueo y el modal «Sigue aprendiendo con SpanishCue», que incrusta el `CheckoutButton` existente (`app/acceso/CheckoutButton.tsx`) con `returnTo` = la clase real. Muestra solo las opciones que `/api/billing/founder-status` reporta configuradas.
- Quien ya tiene acceso completo, o pide una clase gratis, es redirigido a la ruta real. Ids desconocidos → 404. Cabecera `noindex, nofollow`.

## 5. Pago y acceso

No hay precios nuevos ni flujo paralelo. El modal inicia el mismo `POST /api/billing/checkout` (PayPal) o Paddle; el acceso se concede solo tras la verificación del pago en el servidor (`docs/billing-contract.md`), y la compra anónima se vincula a una cuenta verificada mediante `billing_purchase_claims` / `/pro/claim`. El enlace temporal de Homework nunca identifica al comprador.

## 6. Panel docente

`app/autoestudio/errors/TeacherErrors.tsx`, montado dentro del diálogo de «Mis alumnos» (`TeacherPasses.tsx`) con pestañas Errores y dificultades / Preparar próxima clase / Recomendaciones. Lee `GET /api/autoestudio/learners/:id/errors` (solo el profesor dueño del pase) y escribe `POST …/notes`.
