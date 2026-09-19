# Task 04 · Mis alumnos y registro de clases

## Estado

- Rama: `chatgpt/students`
- Base: `ba8c09e` (release con PR #3 integrado)
- Alcance: módulo privado de alumnos y clases dentro de `/cuenta`
- Fuera de alcance: CRM, agenda, videollamadas, cuentas de alumnos y mensajería
- Entrega: código y migración local; sin migración remota, merge ni deploy

## Modelo persistente

### `students`

| Campo | Uso |
| --- | --- |
| `id` | UUID estable generado por el servidor |
| `owner_id` | ID del profesor tomado de la sesión verificada |
| `alias` | Nombre de uso obligatorio, máximo 80 caracteres |
| `last_name`, `email` | Datos opcionales; email validado |
| `level` | A0-C2 o `Sin definir` |
| `goal` | Objetivo breve, máximo 300 caracteres |
| `status` | `active` o `archived` |
| timestamps | Creación y última modificación |

### `class_records`

| Campo | Uso |
| --- | --- |
| `id`, `owner_id`, `student_id` | Identidad estable y relación aislada por profesor |
| `lesson_id` / `free_title` | ID estable de SpanishCue o título libre |
| `starts_at`, `timezone` | Fecha UTC y zona IANA usada por el profesor |
| `duration_minutes` | Opcional, 1 a 480 minutos |
| `status` | `planned` o `taught` |
| `pedagogical_note`, `next_step` | Texto escapado por React; límites 4000/1000 |
| `request_key` | Idempotencia de doble envío por propietario |
| timestamps | Creación y última modificación |

La clave foránea compuesta `(student_id, owner_id)` impide asociar una clase con el alumno de otro profesor. Los índices cubren alumno/estado, historial por alumno/fecha y listados por propietario/fecha. La restricción única `(owner_id, request_key)` evita dobles inserciones incluso ante solicitudes simultáneas.

## Rutas

| Método y ruta | Operación | Permiso |
| --- | --- | --- |
| `GET /api/students` | Lista fichas y última clase | Profesor autenticado, sólo propias |
| `POST /api/students` | Crea ficha | Mismo origen, propietario desde sesión |
| `PATCH /api/students/:id` | Edita o archiva | Mismo origen, `owner_id + id` |
| `DELETE /api/students/:id` | Elimina ficha e historial en cascada | Mismo origen, `owner_id + id` |
| `GET /api/students/export` | CSV de fichas e historial | Profesor autenticado, sólo propios |
| `GET /api/class-records` | Historial global o por `studentId` | Profesor autenticado, sólo propio |
| `POST /api/class-records` | Registra clase | Mismo origen, alumno propio |
| `PATCH /api/class-records/:id` | Edita registro | Mismo origen, `owner_id + id` |
| `DELETE /api/class-records/:id` | Elimina registro | Mismo origen, `owner_id + id` |

Un ID enviado por cliente nunca identifica al profesor. La sesión debe incluir ID y email verificados. Los IDs cruzados responden como no encontrados para no revelar existencia. El cuerpo JSON se limita a 16 KiB y las entradas tienen límites y formatos cerrados.

## Interfaz y comportamiento

- `/cuenta?tab=alumnos` reutiliza el panel e identidad existentes.
- `/cuenta?tab=historial` reutiliza el historial del mismo módulo.
- Registrar clase exige: elegir alumno, elegir ID de SpanishCue o título libre, confirmar fecha/zona/estado y guardar.
- Abrir una clase del catálogo no ejecuta ninguna escritura.
- La misma clave de envío devuelve el registro ya creado. Una coincidencia pedagógica con otra clave muestra advertencia y ofrece “Guardar repetición intencional”.
- El botón se desactiva durante el envío.
- El borrador de clase queda en `sessionStorage`; un fallo de red mantiene el formulario y cancelar una edición recupera el borrador previo.
- La clave del borrador incluye el ID del profesor autenticado, por lo que una sesión posterior en la misma pestaña no puede restaurar notas de otro profesor.
- La hora local se convierte con la zona IANA elegida, no con la zona del navegador; horas inexistentes o repetidas durante cambios estacionales se rechazan para evitar guardar una hora equivocada.
- `lesson_id` se valida contra el catálogo del servidor y es exclusivo con `free_title` tanto al crear como al editar.
- React renderiza notas como texto, sin `dangerouslySetInnerHTML`.
- El CSV antepone apóstrofo a celdas que podrían ejecutarse como fórmulas.
- No se envían nombres, emails ni notas a analítica.

## Demo

`/demo/mis-alumnos` muestra el rótulo `DEMO · DATOS FICTICIOS` y permite el recorrido seleccionar alumno → registrar clase → ver historial. El modo demo usa estado React local, retorna antes de cargar datos reales y no llama a ninguna ruta de clientes.

## Pruebas

`npm run test:tracker` cubre 17 casos, incluyendo:

- dos profesores y sesiones separadas;
- IDs cruzados en fichas, historial, edición y borrado;
- acceso anónimo y origen cruzado;
- idempotencia, doble envío y repetición intencional;
- handlers HTTP reales sobre SQLite con la migración D1, dos identidades y filtros cruzados;
- conversión entre hora local/UTC con zonas distintas y límites DST;
- borradores separados por ID de profesor;
- validación de campos, fechas, zona horaria y tamaños;
- eliminación y exportación limitada al propietario;
- neutralización de fórmulas CSV;
- integración en `/cuenta`, borradores, recuperación, demo aislada;
- ausencia de escritura al abrir una clase;
- forma de migración, índices, claves y alcance de las rutas.

La suite histórica `npm test` incluye estas pruebas, build y las pruebas integradas del Worker. En este entorno, Wrangler puede fallar al iniciar por `uv_interface_addresses`; las pruebas unitarias, TypeScript, lint específico y build no dependen de esa interfaz.

## Puntos de integración

- Panel existente: `app/cuenta/page.tsx` monta `StudentTracker` en los tabs `alumnos` e `historial`.
- Estilos existentes: `app/teachers.css` contiene las extensiones `.student-tracker`.
- Catálogo: el servidor pasa únicamente `{id, title}`; abrir una clase permanece desacoplado del registro.
- Protección de assets: `scripts/protect-client-assets.mjs` publica el chunk de UI del tracker. Los datos siguen protegidos por sesión y filtros de propietario en el servidor.
- Migración integrada: `drizzle/0007_tan_selene.sql`, posterior a las migraciones de cobro `0004`–`0006`. Aplicar remotamente queda expresamente fuera de esta entrega.

## Política pendiente

- Cancelar PRO no borra alumnos ni clases. La conservación tras cancelación requiere una política de producto confirmada.
- La ventana de retención, exportación antes de baja y plazo de eliminación de cuenta siguen pendientes.
- El borrado manual actual es inmediato y explícito: eliminar un alumno elimina su historial en cascada; eliminar una clase sólo elimina ese registro.
- No se presentan garantías legales ni se inventan cuotas o diferencias Free/PRO.
