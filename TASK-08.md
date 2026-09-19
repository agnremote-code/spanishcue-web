# TASK-08 — Integración y gate de publicación

Fecha de corte: 2026-09-19. Rama final: `chatgpt/final-recovery`.

Fuente local recuperada e integrada: `b945cacc65990cede4b1213f8cac1f624c0389e3` (`chatgpt/release`).

## Resultado ejecutivo

Se integraron, en el orden requerido, la base R y las tareas 3, 4, 5A/5B, 6 y 7. El release conecta los dos Tableros al catálogo PRO, publica la demo ficticia de `Mis alumnos`, corrige los CTA de suscripción para terminar en `/acceso`, conserva las landings ES/EN y deja Ads inactivo. También se corrigió una carrera del build que podía reponer assets premium después de sanitizar el artefacto.

El código está **implementado e integrado**, pero este commit no está **publicado**. La producción continúa en la versión 148, commit `3342720a5783b602d43211059c109f95430ea521`. No se habilitó checkout Live, no se hizo ningún cargo y no se activó publicidad.

## Gate por área

| Área | Estado | Evidencia y alcance |
|---|---|---|
| Producto | **NO VERIFICADO** | Build y recorridos locales automatizados pasan, incluida separación Profesor A/B, persistencia D1 local, doble envío, refresh y acceso PRO simulado. Falta el recorrido completo con dos cuentas Firebase reales independientes en la plataforma publicada. |
| Cobro | **NO VERIFICADO** | La lógica simulada de USD 15, firma, idempotencia, rechazo, abandono, callback manipulado, pago confirmado, renovación, refund y cancelación pasa. PayPal Sandbox real no fue ejecutado. **COBRO LIVE NO VERIFICADO.** |
| Privacidad | **NO VERIFICADO** | Consentimiento sí/no y retiro pasan en pruebas; analytics no carga sin consentimiento. Faltan identidad/domicilio/políticas reales del operador, revisión jurídica y verificación de configuración en producción. |
| Medición | **NO VERIFICADO** | `subscription_first_paid` sólo nace de pago persistido por servidor y usa outbox idempotente. GA4 real, filtros internos y recepción del evento en producción no fueron comprobados. |
| Contenido | **PASA** | Catálogo 99 clases / 71 resultados principales, Tableros B1/B2 integrados como PRO, Países separado, demo ficticia enlazada, landings/SEO y copy pre-lanzamiento coherentes. No se encontraron colisiones de ID o ruta. |
| Ads | **NO VERIFICADO** | Plan, landings públicas y UTMs están documentados; ninguna campaña está creada o activa. Presupuesto, Keyword Planner por país, medición de primera compra y revisión final de RSA siguen pendientes. |

Un estado **PASA** aquí significa que la evidencia indicada pasó; no significa ausencia garantizada de errores, ventas ni aprobación publicitaria.

## Integración realizada

- Base R integrada mediante merge revisado.
- PayPal PRO: migraciones aditivas `0004`–`0006`, separación Sandbox/Live, locks e idempotencia, verificación de webhook, pago asentado como único grant, founder allocation, paid-through y cancelación.
- `Mis alumnos`: migración aditiva `0007`, propietario derivado de sesión real, CRUD/CSV, registro de clase, persistencia, drafts por docente, aislamiento y demo sin escrituras a APIs de clientes.
- Medición/SEO: canonical y `hreflang` ES/EN, sitemap/robots, Consent Mode v2, GA4 opcional y conversión sólo después de confirmación de servidor.
- Tableros: IDs 205 y 206, `conversationMode: "boards"`, filtro/insignia TABLEROS, rutas PRO y colección Países sin mezclar.
- CTA: oferta activa usa el CTA central de suscripción; visitante vuelve a `/acceso` después del registro y cuenta gratuita va directamente a `/acceso`. Si el checkout no está listo, se mantiene la reserva sin pago.
- Protección: el build termina subprocesos rezagados y el validador rechaza tanto JavaScript premium como audio premium si reaparecen en almacenamiento público.
- Ads: documentos de preparación presentes, sin creación, gasto ni activación.

## Evidencia automatizada

| Control | Resultado |
|---|---:|
| `npm test` | **PASA** — tracker 17/17 + regresión Worker 82/82 |
| `node --test tests/boards-*.test.mjs` | **PASA** — 25/25 |
| `npm run lint` | **PASA** — 0 errores |
| `npm run build` | **PASA** |
| `npm run validate:artifact` | **PASA** |
| `git diff --check` | **PASA** |
| Artefacto privado | **PASA** — 54 módulos, 47 medios premium y 239 rutas privadas excluidos del namespace estático |

Las pruebas incluyen monto/moneda, pago sin duplicación, firma inválida, callbacks manipulados, eventos tardíos, Sandbox/Live separados, fundador concurrente, expiración, reembolso, cancelación con fecha de fin, headers falsificados, 404 local real, acceso anónimo a PRO, teclado/móvil/movimiento reducido de Tableros y aislamiento entre dos profesores sobre D1 local real.

## Recorrido solicitado

| Paso o variante | Estado | Evidencia |
|---|---|---|
| Landing ES/EN, demo libre y enlace directo/refresco | **PASA en producción actual** | `https://spanishcue.com/`, `https://spanishcue.com/?lang=en` y `https://spanishcue.com/el-hotel-de-lo-imposible` se inspeccionaron sobre versión 148. |
| Registro/login, logout y botón atrás con usuario ficticio | **NO VERIFICADO** | La UI y sesión Firebase tienen cobertura local, pero no se creó una cuenta externa real durante esta ejecución. |
| Cuenta → alumno → registro de clase → persistencia | **PASA local / NO VERIFICADO publicado** | D1 local real: create/list/update/delete/export y dos docentes aislados. Producción aún no tiene tablas `students`/`class_records`. |
| Checkout → Sandbox → confirmación servidor → PRO → refresh → cancelación/fecha fin | **PASA simulado / NO VERIFICADO real** | Fixtures cubren el ciclo; faltan credenciales y una sesión autorizada de PayPal Sandbox. |
| Rechazo, abandono, callback manipulado y doble envío | **PASA simulado / NO VERIFICADO real** | Firma, reintento, lock, request-id y outbox cubiertos; no se provocó el flujo remoto real. |
| Profesor A nunca accede a B | **PASA local** | Handlers HTTP y D1 real local con dos identidades; la propiedad siempre se deriva de sesión. |
| Headers simulados no desbloquean PRO/admin | **PASA** | El Worker elimina/recrea headers internos y exige sesión Firebase/verificación D1. |
| Consentimiento sí/no y compra sin duplicación | **PASA automatizado / NO VERIFICADO real** | Sin consentimiento no se carga GA4; una sola primera compra confirmada puede reclamarse. |
| Teclado y móvil | **PASA por contrato automatizado** | No se declara Safari real; no se hizo una prueba física de dispositivos. |

## SEO y URLs

- El release local devuelve 404 HTTP real con página de no encontrado.
- Robots, sitemap, canonical y `hreflang` pasan en build/Worker local.
- En la producción actual se comprobaron robots/canonical/hreflang, pero una ruta desconocida respondió 200 durante la inspección previa: **404 de producción FALLA** hasta desplegar este release y repetir el smoke.
- Las URLs propuestas para Ads son públicas bajo `https://spanishcue.com`; no hay URLs `localhost`.

## Estado de publicación y rollback

- Proyecto Sites: `appgprj_6a83ba10b0c481919060fc089d581233`.
- Producción actual: versión **148**, deployment `appgdep_6aaa2791c1ec8191b6a8460e47eb0bf0`, commit `3342720a5783b602d43211059c109f95430ea521`, URL `https://spanishcue.com`.
- Rollback identificado: versión **147**, deployment `appgdep_6aaa2692a13481919f54541bba1b593d`, commit `0fde7c105cb8cefb6e5eab1ffe173c7d79d94996`.
- La producción sólo contiene tablas previas a este release; faltan las tablas/columnas de `0004`–`0007`.
- El proyecto no tiene credencial de repositorio fuente conectada; merge/push a GitHub no equivale a deploy y no se detectó deploy automático por merge.
- No se desplegó porque la herramienta disponible no ofrece un respaldo D1 verificable y tampoco se completó Sandbox real. Publicar el artefacto podría aplicar migraciones a una base con datos sin el respaldo exigido.

## Decisiones finales del propietario

1. Crear y comprobar un respaldo recuperable de la D1 productiva; después aplicar `0004`, `0005`, `0006` y `0007` en orden en un entorno no productivo equivalente.
2. Completar un recorrido PayPal Sandbox real de aprobación, webhook, pago USD 15, PRO, refresh, cancelación, rechazo, abandono y reintento; conservar `PAYPAL_PUBLIC_CHECKOUT_ENABLED=false`.
3. Proveer y revisar los datos reales del operador y las políticas legales. No inventar domicilio, jurisdicción, fiscalidad, reembolsos o desistimiento.
4. Decidir si se hará una única compra Live supervisada. Requiere autorización específica en ese momento; hasta entonces: **COBRO LIVE NO VERIFICADO**.
5. Configurar/verificar GA4 y filtros internos sólo si se aprueba medición. Mantener Ads pausado hasta primera compra real medible, presupuesto aprobado y revisión de límites de los RSA.

## Siguiente acción de integración

Revisar y fusionar el PR de `chatgpt/final-recovery` sólo después de que sus checks remotos pasen. Luego: backup D1 → migraciones `0004`–`0007` en staging → recorrido Sandbox real → guardar/desplegar la versión Sites exacta del commit aprobado con checkout público deshabilitado → smoke crítico en producción → rollback inmediato a versión 147 si falla auth, privacidad, assets privados, migración o acceso.
