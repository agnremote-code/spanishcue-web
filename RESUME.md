# SPANISHCUE — Resumen de release

Fecha: 2026-09-19 · Rama final: `chatgpt/final-recovery`

Fuente local recuperada e integrada: `b945cacc65990cede4b1213f8cac1f624c0389e3` (`chatgpt/release`).

## Estado

| Área | Gate |
|---|---|
| Producto | **NO VERIFICADO** — integrado y probado localmente; falta E2E publicado con cuentas reales independientes. |
| Cobro | **NO VERIFICADO** — simulación completa pasa; Sandbox real pendiente; **COBRO LIVE NO VERIFICADO**. |
| Privacidad | **NO VERIFICADO** — controles técnicos pasan; operador, políticas y revisión jurídica pendientes. |
| Medición | **NO VERIFICADO** — consentimiento/outbox pasan; GA4 y conversión productiva pendientes. |
| Contenido | **PASA** — landings, 99 clases, Tableros, demo de alumnos y CTA integrados. |
| Ads | **NO VERIFICADO** — documentación preparada; campañas inactivas y sin presupuesto. |

## Entregado

- Integración R → 3 → 4 más 5A/5B, 6 y 7.
- PayPal PRO USD 15 con límites Sandbox/Live, firma, idempotencia, confirmación de servidor, paid-through y cancelación.
- Gestión privada de alumnos y clases, con demo ficticia y aislamiento por docente.
- Dos Tableros PRO conectados al catálogo sin mezclar la colección Países.
- SEO ES/EN, consentimiento opcional, conversión de primera compra confirmada y Ads pausado.
- CTA de suscripción corregido y promesas Live reemplazadas por copy pre-lanzamiento cuando el checkout está cerrado.
- Build protegido contra reposición tardía de chunks/audio premium.

## Evidencia

- `npm test`: **PASA**, 17/17 tracker + 82/82 Worker/regresión.
- Tableros: **PASA**, 25/25.
- Lint, build, artefacto y whitespace: **PASA**.
- Protección: 54 módulos y 47 medios premium fuera del almacenamiento público.
- D1 local: persistencia y Profesor A/B aislados; headers falsificados no sustituyen sesión real.
- Producción actual: `https://spanishcue.com`, Sites v148, commit `3342720a5783b602d43211059c109f95430ea521`.
- Rollback disponible: Sites v147, commit `0fde7c105cb8cefb6e5eab1ffe173c7d79d94996`.

## Bloqueo de publicación

El release añade migraciones aditivas `0004`–`0007`, pero producción todavía no tiene esas tablas y la conexión disponible no permite crear/verificar un backup D1 recuperable. Tampoco se ejecutó PayPal Sandbox real ni el recorrido Firebase con cuentas ficticias externas. Por eso el release está implementado e integrado, no publicado.

## Acciones del propietario

1. Backup D1 verificable.
2. Migraciones `0004`–`0007` y E2E en staging.
3. PayPal Sandbox real; mantener Live/público deshabilitado.
4. Datos legales reales y revisión correspondiente.
5. Después de aprobar el PR: deploy explícito de Sites, smoke productivo y rollback a v147 ante cualquier gate crítico.

No se promete cero errores, ventas ni aprobación publicitaria. Un push o merge en GitHub no es un deploy.
