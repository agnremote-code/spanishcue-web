# PROJECT OMEGA · registro comercial acumulativo

Fuente persistente de la inteligencia comercial de SpanishCue (mandato del dueño, 2026-11-26).
Cada ejecución empieza leyendo este archivo y termina actualizándolo. Sin datos personales: solo conteos.
Hilos dueños de otras piezas (no duplicar): SEO páginas, búsqueda IA/indexación, conversión on-page (PR #547),
ventas en frío, newsletter. Este registro cubre: origen de la demanda, autopsia de ventas perdidas,
ofertas nuevas desde activos existentes, distribución autopropagable y medición de ingresos.

## Estado al 2026-11-26 (línea base)

| Métrica | Valor | Fuente |
|---|---|---|
| Clientes PRO pagando | 1 (precio bloqueado, no tocar) | D1 `access_grants` / billing |
| Ventas nuevas desde 2026-11-09 | 0 | D1 `billing_payments` (2 filas en total) |
| Intentos de checkout desde la promo US$0,99 (17-nov) | 0 | D1 `billing_purchase_claims`, `billing_checkout_locks` |
| Cuentas de profes reales gratis | 14 desde sep (≈1 cada 2–3 días) | D1 `users` sin dueño/pruebas |
| Profes gratis que crearon un alumno | 0 de 14 | D1 `students.owner_id` |
| Profes gratis que dieron Homework | 0 de 14 (era solo PRO) | D1 `autoestudio_passes` |
| Clases abiertas por profe gratis | mediana 1 (casi siempre la 105 «Hotel de lo imposible») | D1 `lesson_progress` |
| Suscriptores newsletter | 19 (9 en 7 días) | D1 `newsletter_subscribers` |
| Clics orgánicos Google | ≈180 / 28 días, 366 páginas | GSC vía Windsor |

## Descubrimiento 1 · El eslabón fantasma: la activación del profe

**Evidencia.** La única clienta que paga es también la única cuenta no-dueña que usó el «sistema operativo
del profe»: 16 alumnos, 14 sesiones de clase en vivo, 5 alumnos con Homework, 1 registro de clase, 12 clases
abiertas en 7 días distintos. Ninguno de los 14 profes gratis creó un alumno ni registró una clase; 9 abrieron
una sola clase y no volvieron.

**Mecanismo que lo mantenía invisible.** Todas las métricas que mirábamos eran de arriba del embudo
(impresiones, clics, altas, newsletter). El valor que retiene (alumnos + tareas + progreso) vivía detrás de PRO
(Homework) o detrás de un panel (/cuenta) al que el alta no lleva (después de registrarse el profe vuelve a «/»).
Ninguna métrica medía «¿el profe usó SpanishCue con un alumno real?», así que su ausencia no se veía.

**Otros problemas escondidos por el mismo mecanismo (a revisar):**
- El alta no lleva al panel ni propone un primer paso con un alumno.
- El mail de bienvenida/nutrición nunca salió hasta el 26-nov (falta `RESEND_API_KEY` en el Worker; lo lleva el hilo newsletter).
- El Homework es el único activo que pone SpanishCue frente a un **alumno** (canal de distribución gratis) y estaba cerrado
  para quienes más necesitaban probarlo.

**Hipótesis causal.** Un profe gratis que manda Homework a un alumno real (1) vive el valor central,
(2) expone SpanishCue a un tercero, (3) llega a un límite natural (semana 3) con un alumno esperando. Eso
conecta tres cadenas que estaban desconectadas: activación, distribución y monetización.

**Refutaciones consideradas.**
- «El problema es tráfico, no activación»: cierto que el tráfico es bajo, pero con 14 altas y 0 activaciones,
  duplicar el tráfico duplica ceros. Ambos frentes; el tráfico ya tiene 3 hilos.
- «Dar Homework gratis canibaliza PRO»: las semanas que abre un pase gratis ya son públicas
  (`app/autoestudio/access.ts`); lo nuevo es el seguimiento por alumno. El límite (2 alumnos, semanas de prueba) deja
  el uso real con varios alumnos en PRO.
- «Los profes no tienen alumnos fuera de Preply»: posible; el experimento lo mide (pases creados por cuentas gratis).

## Experimento E1 · Homework gratis (PR de 2026-11-26, rama `claude/omega-homework-gratis`)

- Profes gratis: hasta 2 alumnos con enlace de Homework (`FREE_HOMEWORK_LEARNERS`).
- El pase de un profe sin PRO abre solo las semanas de prueba (A1 1–2, resto semana 1). En la semana 3 el alumno ve
  «Esta semana la desbloquea tu profe» y vuelve a sus semanas; el profe ve en la ficha del alumno
  «terminó las semanas de prueba, con PRO sigue» con enlace a /pricing?utm_campaign=homework_free.
- Los temas sueltos y su audio también exigen profe con acceso completo (igual que los mundos 3D del hub).
- Efecto lateral: si un profe deja de ser PRO, sus alumnos conservan solo las semanas de prueba (antes conservaban todo).

**Medición (D1, solo SELECT).**
```sql
-- Profes gratis activados (crearon al menos un pase de Homework)
SELECT COUNT(DISTINCT p.owner_id) FROM autoestudio_passes p
JOIN auth_identities a ON a.provider_subject=p.owner_id
LEFT JOIN access_grants g ON g.user_id=a.user_id
WHERE g.user_id IS NULL AND p.created_at>='2026-11-26';
-- Alumnos de profes gratis que estudiaron (progreso guardado)
SELECT COUNT(DISTINCT g.learner_id) FROM autoestudio_progress g JOIN autoestudio_learners l ON l.id=g.learner_id
WHERE l.created_at>='2026-11-26';
-- Checkouts iniciados (cualquier origen)
SELECT COUNT(*) FROM billing_purchase_claims WHERE created_at>=CAST(strftime('%s','2026-11-26') AS INTEGER);
```
Criterio: éxito intermedio si ≥2 de las próximas 10 altas crean un pase en 14 días; éxito comercial solo con un checkout
atribuible (utm_campaign=homework_free o cuenta con pases). Revisar 2026-12-03 y 2026-12-10.

## Otros descubrimientos del ciclo 1 (sin intervenir todavía)

- **Demanda de alumnos que no atendemos.** «spanish tutor cost» tiene 76 impresiones en posición 8 con 0 clics
  (más «how much do spanish tutors charge», «spanish tutor pricing»). Es gente que va a pagar un profe, no profes.
  Hoy SpanishCue vende solo a profes. Opción a investigar: que esas páginas lleven a profes que usan SpanishCue
  (directorio/opt-in de profes), lo que además le da al profe una razón para pagar PRO. No actuar sin evidencia de
  que los profes lo quieran.
- **Matemática inversa.** US$1.000/mes ≈ 50 suscripciones a US$19,90. Con conversión gratis→pago típica de 2–5 %
  harían falta 1.000–2.500 altas: al ritmo actual (≈12/mes) son años. Conclusión: sin activación + un canal que crezca
  con el uso (alumnos, colegas, academias) el SEO solo no llega. Prioridad: mecanismos donde cada profe trae terceros.
- **Activos subusados.** Conjugador embebible (`/embed/conjugador`) y Homework son los únicos activos que viven fuera
  de spanishcue.com o frente a terceros. Ambos son candidatos a distribución autopropagable.

## Experimento E2 · Primeros pasos + invitar colega para gratis (2026-11-26, rama `claude/omega-activacion`)

- Sin destino explícito, el login/alta lleva a /cuenta (antes «/»): el panel es donde viven alumnos, Homework y clases.
- /cuenta muestra a profes gratis «Primeros pasos con tus alumnos» (crear alumno, Homework, registrar clase, invitar colega)
  con cada paso tildado según sus datos reales.
- El enlace «Invita a un colega» ahora también para profes gratis (pestaña Suscripción + paso en inicio). La regla de
  pago no cambia: el colega recibe su segundo mes gratis; el mes del profe gratis queda en `referral_rewards` como
  `queued` y se aplica solo cuando ese profe paga su primera mensualidad (`applyQueuedReward` en app/referrals-server.ts).
  Eso convierte cada invitación en un motivo más para que el propio profe active PRO.

**Medición.** `SELECT COUNT(*) FROM referral_codes WHERE created_at>=CAST(strftime('%s','2026-11-26') AS INTEGER)`
(códigos creados por profes que abrieron su panel) y altas con `spanishcue_ref` que terminan en `referrals`.
Alumnos creados por profes gratis: `SELECT COUNT(DISTINCT owner_id) FROM students WHERE created_at>='2026-11-26'` menos dueño y clienta PRO.

## Descubrimiento 2 · Pedir enlaces no rinde; el enlace tiene que ser un efecto del uso (2026-11-26)

Ale: «nadie quiere enlazar». Los mails pidiendo enlaces (hilo de 500 enlaces) rinden casi cero. Ya existían
mecanismos de enlace por uso (conjugador embebible con crédito fuera del iframe, bloque «Compartir en tu aula
virtual» en fichas), pero el conjugador embebible solo se ofrecía en una página (/material-ele/conjugador-para-tu-web)
que casi nadie visita. Las ~1.200 páginas de verbos, que son las que reciben profes buscando un verbo, no lo ofrecían.

**E3 (rama `claude/omega-enlaces`).** Cada /conjugacion/[verbo] ofrece «Pon el conjugador de X en tu web» con el código
listo (iframe + enlace de crédito visible). Medir: dominios que cargan /embed/conjugador (Referer en logs del Worker o
Links de GSC) antes/después; hoy línea base sin medir (GSC Links no está en Windsor).

**Carril periodistas (pendiente de Ale).** Source of Sources, Qwoted, Help a B2B Writer: Ale como fuente experta.
El filtro automático no deja registrar su mail sin su sí explícito; tarjeta de decisión enviada 2026-11-26.

**Descartado por ahora:** estudio de «errores frecuentes de alumnos» con datos propios: `homework_errors` tiene 255
errores de 15 alumnos de 2 profes. Muestra demasiado chica para un dato citable honesto. Reevaluar con >2.000 errores
y >10 profes (E1 puede hacerlo crecer).

## Hipótesis descartadas

- 2026-11-26: 11 hipótesis de ingreso descartadas con motivo en `docs/omega/MECANISMOS-INGRESO.md` §2 (app B2C sin canal, Preply, formación pagada, plan de por vida, afiliados, embed pago, corporativo duplicado, subvenciones, sub plans, marketplace UGC, Cervantes como cliente).

## Cola de próximos ciclos (ordenada por evidencia × impacto ÷ esfuerzo)

1. Medir E1 y E2 (3 y 10 de diciembre).
4. Investigar demanda de alumnos «tutor cost» → ¿directorio de profes SpanishCue?
5. Instrumentar origen (utm / source_path) en `users` para conversión por intención y canal.

## Bitácora

- 2026-11-26 · Ciclo 1: línea base, descubrimiento de la activación, E1 programado (PR #548).
- 2026-11-26 · Ciclo 3: E3 conjugador embebible en cada página de verbo; carril periodistas pedido a Ale.
- 2026-11-26 · Encargo «mecanismos de ingreso»: economía real (US$34,90 cobrados en total, 1 clienta, 0 checkouts desde la promo, 0 academias en el panel tras ~39 mails sin precio); 5 supervivientes en MECANISMOS-INGRESO.md. Primer paso: lista de centros acreditados Cervantes + precio de academia (tarjeta a Ale).
- 2026-11-26 · Ciclo 2: E2 (alta → panel con primeros pasos, invitar colega para gratis).
