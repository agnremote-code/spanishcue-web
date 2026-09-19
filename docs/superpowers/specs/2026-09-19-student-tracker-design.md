# Mis alumnos: diseño

## Objetivo

Agregar a la cuenta existente de SpanishCue un registro privado de alumnos y clases para cada profesor autenticado. El módulo no incluye CRM, agenda, videollamadas, cuentas de alumnos ni mensajería.

## Arquitectura

- D1 conserva `students` y `class_records`. Cada fila incluye `owner_id`, tomado exclusivamente de los headers de identidad verificados por el servidor.
- Una capa de servicio recibe el propietario autenticado y un repositorio. Todas las lecturas, escrituras, exportaciones y borrados exigen ese propietario; los IDs enviados por el cliente nunca deciden la identidad.
- Las rutas `/api/students` y `/api/class-records` validan sesión, origen, tamaño y formato antes de delegar.
- `/cuenta` reutiliza su navegación e identidad. Un componente cliente carga y modifica únicamente a través de las rutas autenticadas y conserva borradores localmente cuando una petición falla o una edición se cancela.
- `/demo/mis-alumnos` reutiliza la interfaz con datos ficticios en memoria y nunca invoca las rutas ni D1.

## Modelo

`students`: ID UUID, propietario, alias requerido, apellidos/email opcionales, nivel, objetivo breve, estado activo/archivado y timestamps.

`class_records`: ID UUID, propietario, alumno, ID estable de SpanishCue o título libre, fecha ISO y zona IANA, duración opcional, estado planificada/impartida, nota pedagógica, próximo paso, clave idempotente y timestamps.

La relación alumno/clase usa propietario e ID para impedir referencias cruzadas. Índices cubren listados por propietario/estado y el historial por alumno/fecha. La clave idempotente es única por propietario; la detección pedagógica de repetidos es una advertencia que puede anularse conscientemente.

## Flujos

1. El profesor crea o edita una ficha mínima.
2. Para registrar una clase elige alumno, clase/título, fecha, zona y estado; abrir una clase nunca escribe un registro.
3. El servidor devuelve conflicto si encuentra una repetición probable. El profesor puede reenviar con `allowDuplicate` y una nueva clave idempotente.
4. Cada alumno muestra última clase e historial. Los registros propios pueden editarse, borrarse o exportarse a CSV.
5. Archivar conserva historial. Cancelar PRO no elimina datos porque la política de conservación aún no está confirmada.

## Seguridad y privacidad

- Acceso anónimo: 401.
- ID cruzado entre profesores: 404 para no revelar existencia.
- Operaciones mutables exigen origen del mismo sitio.
- Validación central con límites explícitos y enums cerrados.
- React escapa texto al renderizar. CSV neutraliza celdas que comienzan con caracteres de fórmula.
- No se emiten nombres, emails ni notas a analítica.

## Pruebas

La capa de servicio se prueba con dos profesores, sesiones separadas, IDs cruzados, acceso anónimo, borrado, exportación, repetición e idempotencia. La interfaz se valida estáticamente y mediante build para borradores, cancelación, errores de red, doble envío, demo aislada y ausencia de escritura automática al abrir una clase.
