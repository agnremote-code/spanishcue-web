# SPANISHCUE · Estado de lanzamiento

Actualizado: 16 de septiembre de 2026.

## Producto y acceso

- El sitio público ofrece una biblioteca visual A0–C2 con cinco rutas de contenido.
- Hay diez clases gratuitas fijas: dos por categoría. El resto se autoriza en el servidor para propietario o cuentas con acceso completo.
- El registro usa email/contraseña o Google mediante Firebase. Apple permanece oculto mientras no esté configurado.
- El build retira del almacenamiento público los módulos de clases PRO y cifra el audio premium. `npm test` valida las rutas, permisos y artefactos protegidos.

## Oferta y pagos

- FREE: US$0, diez clases completas, sin tarjeta.
- PRO previsto: US$15 mensuales mediante PayPal, con renovación automática hasta la cancelación.
- Founder Price: primeras 1.000 suscripciones activadas; se mantiene mientras esa misma suscripción continúe activa.
- La integración de checkout, callback, webhook, activación y cancelación está implementada en modo sandbox.
- El checkout público real permanece bloqueado hasta configurar PayPal Live y todos los datos legales del operador. La reserva actual no inicia una suscripción ni un cobro.
- La disponibilidad Founder proviene de D1 y la asignación es atómica; no se simulan cupos ni ventas.

## Adquisición y medición

- La home, pricing, paywall y landings de búsqueda están conectados al mismo funnel de producto.
- El consentimiento opcional empieza denegado y permite aceptar, rechazar o configurar analítica y marketing.
- El código admite una única configuración de GTM, GA4 o Google Ads y registra eventos del funnel con atribución UTM consentida.
- No hay identificadores de Google configurados en producción. Las conversiones externas no estarán operativas hasta que el propietario facilite los IDs y etiquetas correspondientes.

## Antes de activar campañas de conversión a pago

1. Completar los datos reales del operador en las variables `LEGAL_*`.
2. Configurar PayPal Live y validar una compra autorizada de extremo a extremo.
3. Configurar GTM, GA4 o Google Ads con las etiquetas de conversión definidas para el funnel.
4. Publicar una nueva versión y comprobar consentimiento, compra, webhook, acceso PRO y cancelación en producción.

No se deben habilitar cobros reales ni inventar información legal, ventas, testimonios o escasez para completar estas tareas.
