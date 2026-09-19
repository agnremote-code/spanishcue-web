# Task 02 Review · Login and Account

## Resultado

Revisión completada sobre la fuente combinada. PR #3 no se descartó, pero tampoco se aplicó literalmente sobre una arquitectura distinta. Se conservaron sus mejoras válidas y se corrigieron sus supuestos obsoletos usando como autoridad la fuente que realmente estaba desplegada.

## Conservado

- Navegación que reconoce a un usuario autenticado y mantiene acceso a `/cuenta` después de un request completo.
- Panel `/cuenta` con seis secciones direccionables por URL: Inicio, Mis alumnos, Historial, Favoritos, Suscripción y Ajustes.
- Estados honestos en Mis alumnos, Historial y Favoritos; no muestran registros simulados ni prometen persistencia inexistente.
- Preservación del destino solicitado al pasar por el paywall.
- Firebase logout, cambio de contraseña, selector de idioma, panel owner y `SubscriptionManager` real.
- Protección de rutas, APIs, chunks cliente, WebP y audio PRO.
- Cobertura anterior de catálogo, muestras gratuitas, billing, backend, SEO, marca y sistema verbal.

## Corregido

- **Identidad y sesión:** PR #3 asumía `oai-authenticated-user-*`. Producción ya usaba Firebase. La rama combinada conserva Firebase y el Worker elimina cualquier `x-chespanish-*` recibido antes de recrear identidad y permisos verificados.
- **Authenticated vs owner/PRO:** iniciar sesión no concede PRO. `authenticated_free`, `pro` y `owner` son estados separados; owner exige identidad exacta y PRO deriva de `access_grants` en D1.
- **Entitlement:** `checkSubscriptionEntitlement()` era un placeholder que siempre devolvía `false`. No se conserva como si fuera billing real porque la fuente desplegada ya tiene D1 + PayPal y headers internos derivados de ese resultado.
- **Return path:** un único helper acepta rutas relativas same-origin y rechaza URL absolutas, protocol-relative, barras invertidas y variantes codificadas.
- **Cuenta:** la suscripción no dice “próxima fase”. Usa el componente real que consulta `/api/billing/subscription`; owner o acceso manual se muestran como acceso administrado cuando no existe una suscripción PayPal.
- **ESLint:** se eliminó la desactivación global de enlaces. La excepción de `<img>` quedó limitada a `app/**/*.{ts,tsx}` y documentada porque Vinext/Sites requiere el enrutamiento Worker de WebP.
- **Build protegido:** se corrigió una carrera del filesystem sincronizado que podía recrear un WebP después de moverlo; el finalizador y el validador siguen comprobando que ningún WebP público quede fuera del Worker.
- **Tests:** los tests de producción, más amplios que los de PR #3, se conservaron. Se agregaron casos para separación de roles, identidad falsificada, return paths y estados honestos. Resultado: 64/64.

## No verificado

- Login, refresh y logout reales de esta rama en `spanishcue.com`. La rama no fue desplegada y una prueba con headers simulados no demuestra una sesión real.
- Flujos PayPal Live, cargos reales, reembolsos o cancelaciones reales. Solo se preservó y probó la arquitectura Sandbox/local existente.
- Estado real de credenciales o variables secretas de producción; no se leyeron ni modificaron.
- Publicación automática desde GitHub; no hay evidencia de que exista.

## Evidencia

- GitHub al inicio: `ba8c09ece88f1cfc97c985849b506ff28dc40935`.
- Fuente de Sites desplegada: `3342720a5783b602d43211059c109f95430ea521`, versión 148, estado `succeeded`.
- Merge que conserva ambas: `0fb6652`.
- Revisión auth/cuenta/lint: `d0f1b54`.
- `npm test`: 64 tests aprobados, build y validación de artifact incluidos.
- `npm run lint`: 0 errores, 0 warnings.

## Siguiente acción

Integrar el PR de `chatgpt/review-launch` cuando sus checks remotos estén verdes. Después iniciar la tarea 3 desde ese `main`: revisar schema/migraciones y consolidar billing/entitlements usando D1 y PayPal Sandbox existentes, sin crear sesiones propias, activar Live ni desplegar.
