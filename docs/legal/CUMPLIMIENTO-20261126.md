# Cumplimiento legal de spanishcue.com · 2026-11-26

Pedido de Ale en el hilo «Poner en regla lo legal del sitio». No es asesoramiento legal. Lo marcado **⚖** conviene que lo revise un abogado de consumo y datos (idealmente uno que conozca Argentina y la UE).

## Punto de partida importante

El titular es una persona física con domicilio en **Argentina** (datos ya publicados en /legal desde el secreto `LEGAL_OPERATOR_JSON`). La LSSI española obliga a prestadores **establecidos en España**, así que no te aplica de forma directa; lo que sí te aplica es:

- Argentina: Ley 24.240 de Defensa del Consumidor (revocación de 10 días, art. 34), Resolución 424/2020 (botón de arrepentimiento), Ley 25.326 de Datos Personales (registro de bases ante la AAIP).
- Unión Europea, porque vendes a consumidores de la UE: Directiva 2011/83 (desistimiento de 14 días y su excepción para contenido digital), Directiva Ómnibus (precios, reseñas, prácticas engañosas), RGPD y ePrivacy (cookies).

## Qué se cambió (rama `claude/cumplimiento-legal`)

| Punto | Antes | Ahora |
| --- | --- | --- |
| Cifras de la home | «Confían en SpanishCue: +100 profesores, +20 academias, +10 años» | Ale confirmó que «+100 profesores» y «+20 academias» no eran reales: eliminadas de todo el sitio. Queda solo «+10 años» (confirmado por Ale como su experiencia dando clases) bajo «La experiencia detrás de SpanishCue» |
| «998 de 1000 lugares» | Contador real (servidor, pagos confirmados) pero sin explicación | Se mantiene; /subscription-terms define el precio fundador y explica que el contador sale de pagos reales y no se reinicia |
| Cuentas atrás | No hay ninguna en la web; la promo no muestra fecha en los botones | Fecha límite real publicada en las condiciones de la oferta |
| Testimonios | Los de Preply ya citan la fuente, la fecha y aclaran que no son reseñas de la plataforma; las fotos de campaña están marcadas como modelos ficticios | Sin cambios |
| Banner de cookies | Aceptar, Rechazar y Configurar ya estaban al mismo nivel en la primera capa | La etiqueta de Google ya no se carga (ni manda ninguna solicitud) antes de aceptar analítica o marketing (Consent Mode básico) |
| Política de cookies | Faltaban `_ga`, el píxel de OpenAI, `spanishcue_ref` y `__Host-sc-regalo` | Añadidos con finalidad y duración |
| Privacidad | Hosting «OpenAI Sites»; faltaban Resend y OpenAI | Cloudflare, Resend y OpenAI listados; autoridades AAIP / AEPD nombradas |
| Desistimiento | Ninguna renuncia en el checkout | Casilla sin marcar antes de cualquier pago (tarjeta o PayPal, mensual, anual, US$0,99, 10 %): pide acceso inmediato y reconoce la pérdida de los 14 días; sin ella no se abre el pago. Dice que la garantía de 30 días sigue |
| Garantía 30 días | Texto corto | Qué es «primer pago» en cada plan, reembolso por el mismo medio, plazo de respuesta |
| Promo US$0,99, 10 %, anual | Los términos todavía hablaban de una «prueba de 1 día por US$2» que ya no se vende | Condiciones reales publicadas (quién califica, cuánto se cobra y cuándo, fecha límite) |
| Precio fundador | Sin definir | Definido: precio fijo mientras la suscripción siga activa; hoy coincide con el precio vigente, no es un descuento |
| Paddle | No se decía que es merchant of record | Aviso legal, términos y reembolsos lo dicen |
| Argentina | Nada | Sección «Botón de arrepentimiento» en /refunds y enlace en el pie de todas las páginas |

## Lo que falta y depende de Ale

1. ~~CUIT y dirección completa~~: Ale los dio el 26/11; quedan en `app/legal/operator.ts` (completan lo que le falta al secreto `LEGAL_OPERATOR_JSON`).
2. ~~Cifras de la home~~: resuelto (ver tabla).
3. **Cumplir la garantía a mano**: no hay reembolso automático. Cuando alguien escriba dentro de los 30 días, el reembolso se hace desde Paddle (Transacciones → Reembolsar) o PayPal, y además se cancela la suscripción para que no haya más cobros. Verificar después que el acceso PRO de esa cuenta se cortó (el aviso de reembolso de PayPal está conectado; el de Paddle no está comprobado).
4. **El email recordatorio de la promo de US$0,99 no puede salir** mientras el Worker no tenga `RESEND_API_KEY`. Por eso las condiciones públicas ya no lo prometen.

## Para revisar con abogado ⚖

- Si la casilla de renuncia alcanza también para el «arrepentimiento» argentino (la ley argentina no tiene una excepción tan clara para contenido digital). Mientras tanto la web ofrece revocar dentro de 10 días: cuesta como mucho un primer pago y ya está cubierto por la garantía de 30 días.
- La Resolución 424/2020 pide el botón «en la primera pantalla» del sitio; está en el pie de página. Un abogado puede decir si hace falta subirlo.
- Registro de la base de datos de usuarios ante la AAIP (Ley 25.326) y registro de actividades de tratamiento (RGPD art. 30; con menos de 250 empleados suele no ser obligatorio salvo tratamiento habitual, como aquí). Se puede armar con la tabla de proveedores de /privacy.
- Si conviene nombrar un representante en la UE (RGPD art. 27) por vender a consumidores europeos desde fuera de la UE.
- Guardar prueba del consentimiento de la casilla en el servidor (hoy solo bloquea el pago en el navegador; Paddle y PayPal guardan su propio registro de la compra).
- Licencias de voz y marca: ver `docs/legal/LICENCIAS-Y-MARCA.md`.
