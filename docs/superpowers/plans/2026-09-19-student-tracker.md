# Mis alumnos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar fichas de alumnos y registros de clase privados, persistentes y exportables dentro de `/cuenta`.

**Architecture:** D1 guarda datos con `owner_id`; una capa de servicio independiente impone aislamiento y validación; rutas API autenticadas conectan esa capa con un componente cliente reutilizable. La demo usa el mismo contrato visual pero sólo estado ficticio local.

**Tech Stack:** Next.js 16, React 19, TypeScript, Cloudflare D1, Drizzle, Node test runner.

**Spec:** `docs/superpowers/specs/2026-09-19-student-tracker-design.md`

## Global Constraints

- No CRM, agenda, videollamadas, cuentas de alumnos ni mensajería.
- El profesor se deriva de la sesión del servidor, nunca del cliente.
- No migración remota, deploy ni merge.
- Demo ficticia separada sin acceso a tablas de clientes.
- No borrar datos al cancelar PRO sin política confirmada.

## Review Focus

- IDs válidos pertenecientes a otro profesor deben devolver no encontrado.
- Un reintento con la misma clave debe devolver el resultado original, no duplicar.
- Una repetición pedagógica debe advertirse pero permitir confirmación intencional.
- CSV debe impedir fórmulas y contener sólo datos del propietario.
- Un fallo de red o cancelación no debe borrar silenciosamente notas no guardadas.

---

### Task 1: Contrato, validación y servicio

**Files:**
- Create: `app/student-tracker/contracts.ts`
- Create: `app/student-tracker/service.ts`
- Create: `tests/student-tracker.test.mjs`

**Interfaces:**
- Produces: `StudentTrackerService`, validadores de ficha/registro y errores tipados.

- [ ] Escribir tests fallidos para sesión, dos propietarios, cruces, validación, duplicados, borrado y exportación.
- [ ] Ejecutar `node --test tests/student-tracker.test.mjs` y confirmar fallos por módulos ausentes.
- [ ] Implementar el contrato y servicio mínimos.
- [ ] Repetir los tests hasta dejarlos verdes.

### Task 2: Persistencia y API

**Files:**
- Modify: `db/schema.ts`
- Create: `db/student-tracker.ts`
- Create: `app/api/students/route.ts`
- Create: `app/api/students/[id]/route.ts`
- Create: `app/api/students/export/route.ts`
- Create: `app/api/class-records/route.ts`
- Create: `app/api/class-records/[id]/route.ts`
- Create: `drizzle/0007_tan_selene.sql` (renumerada durante la integración de release)

**Interfaces:**
- Consumes: contratos y servicio de Task 1.
- Produces: CRUD y exportación autenticados.

- [ ] Añadir tests de forma/rutas y hacerlos fallar.
- [ ] Implementar repositorio D1 con filtros de propietario en cada SQL.
- [ ] Implementar rutas con 401, origen seguro, validación y conflictos.
- [ ] Generar/verificar migración e índices localmente.

### Task 3: UI y recuperación de borradores

**Files:**
- Create: `app/student-tracker/StudentTracker.tsx`
- Create: `app/student-tracker/client.ts`
- Modify: `app/cuenta/page.tsx`
- Modify: `app/teachers.css`

**Interfaces:**
- Consumes: rutas de Task 2.
- Produces: fichas, registrar clase, historial, edición, archivado, borrado y exportación.

- [ ] Añadir assertions fallidas para integración y seguridad de render.
- [ ] Implementar carga, CRUD y flujo elegir alumno → confirmar fecha/estado → guardar.
- [ ] Conservar borradores en `sessionStorage`; cancelar restaura valores persistidos y un fallo mantiene el formulario.
- [ ] Bloquear doble envío y resolver conflicto de repetición mediante confirmación explícita.

### Task 4: Demo y documentación

**Files:**
- Create: `app/demo/mis-alumnos/page.tsx`
- Modify: `app/student-tracker/StudentTracker.tsx`
- Create: `docs/launch/TASK-04.md`

**Interfaces:**
- Produces: recorrido ficticio aislado y documentación de integración.

- [ ] Crear modo demo con rótulo visible y sin fetch.
- [ ] Documentar modelo, rutas, permisos, pruebas, conservación pendiente y puntos de integración.

### Task 5: Verificación y entrega

**Files:**
- Modify: pruebas/documentación sólo si la evidencia descubre fallos.

- [ ] Ejecutar tests relevantes y suite completa.
- [ ] Ejecutar lint y build.
- [ ] Revisar requisitos y diff; corregir hallazgos importantes.
- [ ] Commit, push y PR a `main`, sin merge ni deploy.
