# Mecanismos de ingreso alternativos · SpanishCue (2026-11-26)

Encargo de Ale (PROJECT OMEGA). Todas las cifras propias salen de D1 de producción (solo SELECT), de Search Console vía Windsor o del Gmail de envíos, y llevan su fuente. Las proyecciones son escenarios con el método escrito al lado, no pronósticos.

## 1. Economía real

| Variable | Valor | Método / fuente |
|---|---|---|
| Ingreso cobrado desde el lanzamiento | **US$34,90** (2 cobros Live por PayPal: US$15 el 23-sep, US$19,90 el 9-nov) | D1 `billing_payments` |
| Clientes que pagan hoy | **1** (precio bloqueado 2 años) | D1 `access_grants`, memoria del proyecto |
| Ingreso mensual recurrente | **≈US$20** | 1 × US$19,90 |
| Frecuencia de compra | Mensual; 0 anuales vendidos | D1 `billing_subscriptions` (6 filas, 1 activa con cobro) |
| Cuentas creadas | 25 en total, 15 en los últimos 30 días | D1 `users` |
| Checkouts iniciados | 24 (17 llegaron a la pasarela, 7 solo empezaron), el último el 30-oct. **0 desde la promo US$0,99 del 17-nov** | D1 `billing_purchase_claims` |
| Conversión checkout → pago | 2 de 24 (8 %) | ídem |
| Tráfico orgánico | ≈180 clics de Google en 28 días; consulta con más impresiones: «spanish tutor cost» (76 impresiones, posición 8, 0 clics) | Search Console vía Windsor |
| Costo de adquisición en dinero | US$0 en orgánico. Google Ads y ChatGPT Ads (nov) produjeron 0 ventas atribuibles; Google Ads sigue pausado | Memoria del proyecto; D1 sin pagos en esas fechas |
| Costo de adquisición real | Tiempo de Ale + créditos de agentes. 1 clienta en ~2 meses de esfuerzo de captación | Inferencia, no medido en horas |
| Uso que retiene | La única clienta usa alumnos (16), clases en vivo (82 sesiones en total en la base) y Homework. 0 de 14 profes gratis crearon un alumno | D1 `students`, `live_class_sessions` |
| Venta a instituciones | Panel de academias construido, **0 academias registradas, 0 pedidos de demo**, sin precio público. ~39 mails a academias y agencias enviados desde el 10-nov, «sin precio» | D1 `institutions`, `academy_demo_requests`; Gmail enviados |
| Activos vendibles | 138 clases en catálogo (15+ mundos 3D), 24 PDF imprimibles, fichas y temas en /material-ele, conjugador embebible, Homework/autoestudio A1–C2 con audio grabado | Repo `app/lesson-catalog.ts`, `public/` |

**Lectura.** El negocio no tiene hoy un problema de precio por unidad sino de comprador: un profe autónomo que factura poco por hora no paga US$19,90 por algo que todavía no usó con un alumno. Los dos únicos compradores con presupuesto propio que tocamos (academias y el alumno que ya le paga a un profe) nunca recibieron una oferta con precio.

## 2. Hipótesis y prueba adversarial

Preguntas de la prueba: (P) ¿el comprador tiene presupuesto propio? (C) ¿el ciclo de compra cabe en 30 días? (T) ¿se puede probar con 100 € o menos esta semana? (M) ¿qué la mata?

| # | Hipótesis | Comprador | Precio propuesto | P | C | T | Qué la mata | Veredicto |
|---|---|---|---|---|---|---|---|---|
| H1 | Licencia de equipo para academias de ELE con precio público y prueba autoservicio en el panel ya construido | Director de academia privada / centro acreditado Cervantes / centro DELE | US$79/mes hasta 5 profes; US$149/mes hasta 15; anual ×10 | Sí | Sí, en academias chicas decide el director | Sí, 0 € | Plataformas gratis de las editoriales que vienen con el libro (Campus Difusión, Edelsa); 39 mails sin precio dieron 0 altas | **Sobrevive** |
| H2 | Pase del alumno: el alumno paga el Homework, el profe no paga y cobra comisión | Alumno adulto que ya le paga a un profe (US$15–30/h) | US$4,99/mes por alumno; 30 % al profe como crédito o pago | Sí | Sí, compra inmediata | Sí, 0 € (requiere precio nuevo en Paddle, lo crea Ale) | Profes que no quieren pedirle más plata al alumno; pocos profes activados hoy | **Sobrevive** |
| H3 | Licencia para departamentos de español de secundaria en EE. UU. (uso en pantalla, sin cuentas de alumnos) | Jefe de departamento con tarjeta de compra | US$390/año por escuela, hasta 4 profes | Sí | Solo si entra en tarjeta de compra; con orden de compra, no | Sí, 0 € | Contenido pensado para adultos (Noche abierta, Más allá) sin filtro «apto escuela»; vendor forms y W-9; presupuestos se cierran en primavera | **Sobrevive condicionada** |
| H4 | Packs por unidad en Teachers Pay Teachers y tienda propia (PDF imprimible + enlace a la versión interactiva) | Profe de español de EE. UU. que compra PDF | US$4,50 por pack de clase; US$18 bundle de 5 | Bajo, pero compra por impulso | Sí | Sí, 0 € con cuenta básica | La cuenta de vendedor exige identidad y datos fiscales de Ale; el público de TpT quiere imprimibles para adolescentes | **Sobrevive** |
| H5 | Licencia no exclusiva del runtime 3D a editoriales de ELE | Editorial (Difusión, Edelsa, SGEL, enClave) | Desde 6.000 €/año por colección de mundos | Sí | No (3–9 meses) | Sí, 0 € | Credibilidad de empresa chica; derechos de los activos (voces, modelos 3D) sin verificar para reventa | **Sobrevive como apuesta**, con umbral corto |
| H6 | App de pago para el alumno que estudia solo (sin profe) | Estudiante adulto | US$7,99/mes | Sí | Sí | No: sin anuncios no hay canal; competencia gratuita (Duolingo) | Costo de adquisición sin ads; 76 impresiones al mes no alcanzan | Descartada |
| H7 | Alianza con Preply para recursos de tutores | Preply | Licencia | Sí | No | Sí | Regla de Ale: nada en Preply | Descartada |
| H8 | Formación pagada para profes («dar clase con mundos 3D», con certificado) | Profe autónomo | US$49 | Bajo | Sí | Sí | Depende de que el profe autónomo pague más (prohibido por el encargo) | Descartada |
| H9 | Plan de por vida o pago único por nivel para profes | Profe autónomo | US$39 por nivel | Bajo | Sí | Sí | Mismo comprador sin presupuesto; canibaliza la suscripción sin abrir comprador nuevo | Descartada (se absorbe en H4) |
| H10 | Afiliados: mandar el tráfico «spanish tutor cost» a plataformas de tutores | Plataforma de tutores | Comisión por alta | Sí | Sí | Sí | Volumen: 76 impresiones y 0 clics al mes; aunque todo funcionara, son centavos | Descartada |
| H11 | Conjugador embebible de pago (sin marca, para academias y blogs) | Academia / blog | US$9/mes | Bajo | Sí | Sí | Mata el mecanismo de enlaces gratis (E3), que vale más como distribución | Descartada |
| H12 | Formación corporativa (HR Crisis, español de negocios) vía proveedores de capacitación | Proveedor de idiomas corporativo | Licencia por curso | Sí | No | Sí | Ya cubierto por el canal de agencias con 30 % de comisión del hilo de ventas en frío | Descartada (duplicado) |
| H13 | Subvenciones (Erasmus+, fondos de educación digital) | Organismo público | 10–60 k€ | Sí | No (6–12 meses) | No | Ciclo y datos de persona jurídica que solo tiene Ale | Descartada |
| H14 | Planes de suplente («sub plans») de español para las vacantes de aulas bilingües en EE. UU. | Escuela o profe que deja la clase a un suplente | US$6 por plan | Medio | Sí | Sí | Nuestras clases las tiene que dar alguien que hable español; el suplente típico no lo habla | Descartada (sirve solo como ángulo de listado en H4) |
| H15 | Marketplace de clases 3D hechas por profes, con reparto de ingresos | Profes compradores | Comisión | Bajo | No | No | Es «más contenido» con más pasos; exige herramienta de autoría | Descartada |
| H16 | Venderle la plataforma a los propios centros Cervantes | Instituto Cervantes | Licencia | Sí | No | Sí | Tienen su propia plataforma (AVE Global): son competencia | Descartada |

## 3. Supervivientes, ordenadas por potencial económico a 12 meses

Método del potencial: contactos alcanzables en 12 meses × tasa de cierre supuesta (declarada) × precio, contando el arranque gradual. Las tasas son supuestos a validar, no datos.

| Orden | Mecanismo | Precio exacto | Comprador concreto | Canal concreto | Primer paso en 48 h | Métrica de éxito | Umbral de abandono | Potencial 12 meses (método) | Canibalización |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **H1 Licencia academia** | US$79/mes (hasta 5 profes), US$149/mes (hasta 15); anual US$790 / US$1.490. Prueba de 14 días en el panel | Academias privadas de ELE en España y Latinoamérica; centros acreditados Cervantes (233, directorio público); centros de examen DELE | Mail 1 a 1 desde agnremote@ (máx. 12 por día), con precio y enlace al panel; seguimiento a los 4 días | Lista de centros acreditados con contacto público; precio publicado en /academias; mail v8 con precio para el hilo de academias | ≥3 pruebas de panel cada 100 contactados; 1 academia pagando en 45 días | 150 contactados con <2 pruebas, o 0 pagos a los 60 días | ~US$6.000 (400 contactos × 2,5 % de cierre = 10 academias × ~US$100/mes, con alta escalonada ≈ 6 meses promedio) | Baja: hoy ninguna academia paga y sus profes no compran solos |
| 2 | **H2 Pase del alumno** | US$4,99/mes por alumno; 30 % (US$1,50) al profe | Alumnos de profes que ya mandan Homework (65 alumnos de autoestudio en la base) | Dentro del producto: botón en la tarjeta de Homework «Seguir con tu profe»; el profe lo ofrece porque cobra comisión | Tarjeta para Ale: crear precio en Paddle. Mientras: pantalla de semana 3 con «Seguí por US$4,99/mes» en modo lista de espera honesta | ≥10 pases pagos en 60 días desde el lanzamiento | <3 profes lo ofrecen en 30 días, o <5 pases en 60 | ~US$2.500 (30 profes activos × 4 alumnos pagando × US$3,49 neto, alcanzado hacia el mes 9) | Media: un profe cuyos alumnos pagan puede no pasar a PRO. Se acota dejando alumnos ilimitados y registros de clase en PRO |
| 3 | **H3 Secundaria EE. UU.** | US$390/año por escuela, hasta 4 profes, uso en pantalla | Jefes de departamento de World Languages en secundarias públicas y privadas | Mail 1 a 1 a contactos públicos de las webs escolares; listado en TpT como puerta de entrada | Filtrar el catálogo «apto escuela» (sin Noche abierta, Más allá, La casa) y armar la lista de 50 departamentos | ≥5 respuestas de 200 contactos; 1 compra con tarjeta antes del 31-mar-2027 | 200 contactos con 0 pruebas al 15-feb-2027 | ~US$2.000 (500 contactos × 1 % = 5 escuelas × US$390) | Nula |
| 4 | **H4 Packs por unidad (TpT + tienda propia)** | US$4,50 por pack; US$18 por 5 | Profes de español de EE. UU. que compran imprimibles | Teachers Pay Teachers (cuenta básica, 0 €) y página propia de packs | Ale crea la cuenta de vendedor (identidad y datos fiscales). Mientras, preparo 15 packs con las 24 fichas en PDF y portada | ≥20 ventas en 60 días o 1 PRO atribuido a TpT | <5 ventas en 60 días con 15 packs publicados | ~US$1.500 (15 packs × 2 ventas/mes × US$4,50 × payout ~55 % en cuenta básica + bundles) | Baja: compra otra cosa (PDF) y lleva tráfico a la versión interactiva |
| 5 | **H5 Licencia a editoriales** | 6.000 €/año no exclusiva por colección de 5 mundos | Responsables digitales de 5 editoriales ELE | Mail personal de Ale con video de 60 s de un mundo | Verificar derechos de voces y modelos 3D para sublicenciar; redactar 5 mails | 1 reunión en 30 días | 0 respuestas positivas de 5 en 30 días | Esperado ~1.000 € (≤10 % × 6.000–15.000 €); techo 15.000 € | Alta si la editorial lo regala con el libro y los profes dejan de suscribirse. Se acota con licencia por colección cerrada, sin Homework |

## 4. Competidor hostil

Con nuestros mismos activos, alguien haría esto:

1. **Rompe la unidad de compra.** Vende cada mundo 3D como producto suelto en TpT a US$5–8 para secundaria de EE. UU., con versión «apta escuela». Toma el público de imprimibles que nosotros no atendemos.
   - Bloqueo: publicamos primero con nuestra marca (H4 + H3), y cada pack enlaza a spanishcue.com.
2. **Se lleva al comprador institucional.** Va a las editoriales y empaqueta los mundos con un libro de texto. Así la academia los recibe gratis y nunca nos compra.
   - Bloqueo: licencia a editoriales solo no exclusiva y por colección cerrada (H5). Precio de academia por debajo del costo de cambiar de libro (H1).
3. **Copia el runtime.** Raspa el contenido y lo clona.
   - Bloqueo: el contenido PRO ya se sirve cifrado y autorizado en el servidor, y los bots de IA están bloqueados.
   - El foso real es otro: los datos de progreso de los alumnos (Homework, errores, registros de clase) viven en nuestra base. Cada alumno activo es costo de cambio para su profe. Por eso H2 y E1 empujan alumnos dentro del producto.
4. **Compite en precio con el profe autónomo.** No es una amenaza: ese comprador hoy no paga a nadie.

## 5. Accesos para operar comercialmente sin supervisión

| Acceso | Estado | Para qué |
|---|---|---|
| Repo (GitHub) | Tengo | Precios públicos, páginas, flujo de producto |
| D1 de producción (lectura) | Tengo | Medir pruebas, pases, pagos |
| Search Console (vía Windsor) | Tengo, con caídas intermitentes del servicio | Demanda |
| Gmail agnremote@ | Tengo (máx. 12 mails en frío por día) | Contacto con academias y escuelas |
| Resend | Tengo | Mails de producto |
| Paddle (crear precios, facturas, cupones) | **Falta**, solo Ale | Precio del pase del alumno, facturar a academias y escuelas |
| PayPal | **Falta**: el conector venció | Facturas a quien pague por PayPal |
| Analítica de eventos (clics de CTA, funnel) | **Falta**: los eventos `cta_click` no son consultables desde D1 ni desde una herramienta de analítica conectada | Saber qué página trae checkouts |
| Datos fiscales de Ale (W-8BEN para escuelas de EE. UU., datos de factura) | **Falta**, solo Ale | Formularios de proveedor de escuelas y facturas a academias |
| Cuenta de vendedor en Teachers Pay Teachers | **Falta**, la tiene que crear Ale (identidad y datos fiscales) | H4 |
| Licencias de activos (voces TTS, modelos 3D escaneados) | **Sin verificar** para reventa o sublicencia | H4 y H5; es condición antes de licenciar a terceros |
