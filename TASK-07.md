> **Historical record (last edited 2026-09-20).** This file describes project state at that time and is kept unmodified below for traceability. It is not current status: for current source read GitHub `main`, for production read `state.json` on `automation/sites-release-state`, and for context read `docs/SPANISHCUE_HANDOFF.md`.

# TASK-07 · Preparación de adquisición SPANISHCUE

**Estado:** preparado para revisión; creación y publicación de campañas en pausa.
**Fecha de investigación:** 19 de septiembre de 2026.
**Alcance:** investigación, copy y documentación. Sin backend, sin cambios de pago, sin gasto publicitario y sin creación de campañas reales.

## Decisión de alcance

SPANISHCUE se dirige inicialmente a profesores y tutores de español que trabajan con adultos, sobre todo online, y necesitan recursos ya preparados para abrir y compartir en clase. No se dirigirá a personas que buscan un profesor de español, ni prometerá adaptación para escuela, AP, GCSE o currículos que el producto no ofrece.

La propuesta que se puede sostener con el producto actual es concreta: una biblioteca de clases interactivas que se abren en el navegador, se pueden compartir en pantalla, cubren A0–C2 y combinan explicación, práctica y conversación. Hay muestras reales, registro sin tarjeta y páginas de recursos verificadas. Los cobros reales no están habilitados, por lo que la adquisición de pago no debe activarse hasta que el flujo de primera suscripción pagada exista y se compruebe en modo de prueba.

## Estado del producto y URLs verificadas

| Uso | URL final | Verificado en repositorio | Uso en esta preparación |
|---|---|---|---|
| Recursos ELE en español | `https://spanishcue.com/ele-recursos-profesores` | Landing con recursos ELE, niveles y clases reales | ES-España y ES-pilotoLATAM, grupo Recursos docentes |
| Recursos para enseñanza online | `https://spanishcue.com/online-spanish-teaching-resources` | Landing en inglés, navegador, pantalla compartida y sin descargas | EN-US y EN-UK, grupo Recursos docentes |
| Actividades de conversación | `https://spanishcue.com/spanish-conversation-activities` | Landing bilingüe con escenarios, decisiones y roleplays | Los cuatro grupos Conversación |
| Precios y acceso | `https://spanishcue.com/pricing` | Página de prueba gratuita y acceso PRO; cobro real no habilitado | Solo sitelink informativo cuando la campaña se active |

No se usarán URLs de checkout, `/acceso`, ni la oferta Founder Price como anuncio o sitelink hasta que el checkout real esté habilitado y se haya probado el evento de compra. El repositorio indica que el checkout real sigue desactivado; por tanto, tampoco se afirma que haya plazas disponibles, precio actual, pago con PayPal o renovación activa en los anuncios.

## Mercados y secuencia

| Fase | Mercado | Idioma de campaña | Decisión |
|---|---|---|---|
| Preparación | España | Español | Primera campaña ES, limitada a España. |
| Piloto LATAM | México | Español | País piloto preseleccionado para aislar un mercado LATAM. No es una declaración de mayor demanda. Solo se confirma tras Keyword Planner. |
| Investigación comparativa | Colombia | Español | Reserva: comparar con México antes de mover o duplicar el piloto. |
| Investigación comparativa | Argentina | Español | Reserva: comparar con México antes de mover o duplicar el piloto. |
| Preparación | Estados Unidos | Inglés | Campaña independiente, con copy y consultas docentes en inglés. |
| Preparación | Reino Unido | Inglés | Campaña independiente, con copy británico y sin mezclar datos con EE. UU. |
| Expansión futura | Brasil | Portugués | Investigación y localización pendientes; no incluir en las campañas actuales. |
| Expansión futura | Francia | Francés | Investigación y localización pendientes; no incluir en las campañas actuales. |

La elección de México es operativa, no una inferencia de CPC, volumen, competencia, capacidad de pago ni conversión. Esos datos permanecen **desconocidos** hasta completar la misma consulta de Keyword Planner para México, Colombia y Argentina con la misma lista semilla, configuración y período. El Instituto Cervantes se usa únicamente como contexto pedagógico y de ELE, no como prueba de compradores ni de demanda publicitaria.

## Investigación competitiva: diferenciación comprobable

| Alternativa | Lo que muestra su página oficial | Diferenciación que SPANISHCUE puede comunicar sin decir «único» |
|---|---|---|
| ProfeDeELE | Actividades y recursos gratuitos, membresías y cientos de recursos para mejorar clases y ahorrar planificación. | SPANISHCUE no debe negar ese valor. Puede concentrar su mensaje en una clase visual e interactiva que se abre y comparte desde el navegador, con explicación, práctica y producción oral dentro de la misma experiencia. |
| todoELE | Portal de materiales y recursos para profesores de ELE. | Posicionarse como una biblioteca de clases preparadas para abrir en pantalla, no como directorio o repositorio de enlaces. |
| Teachers Pay Teachers | Marketplace por niveles y tipos de recurso, desde infantil hasta educación adulta. | Precisar que SPANISHCUE no es un marketplace ni está orientado al currículo escolar: ofrece una biblioteca propia para profesores/tutores de español con adultos, especialmente para clases online y conversación guiada. |

La comparación no reproduce copy de otras marcas ni afirma superioridad universal. La diferencia se limita a formato, audiencia declarada y flujo de uso comprobable en SPANISHCUE.

## Hipótesis y decisión experimental

**Hipótesis:** permitir que un profesor abra una demo real antes de registrarse le ayuda a evaluar el producto y aumenta la probabilidad de una primera suscripción pagada cuando el checkout esté disponible.

**Métrica comercial primaria:** primera suscripción pagada.
**Señales secundarias:** apertura de demo, registro, inicio de checkout y visita de precios.
**No son conversiones de éxito:** clics, impresiones, CTR, Ad Strength, visitas o registros por sí solos.

Primer experimento propuesto:

1. Mantener constantes mercado, intención, tipo de concordancia, anuncio y URL final dentro de cada grupo.
2. Comparar una sola variable: landing con demo real visible frente a la variante equivalente sin el bloque de demo visible. No construir ni lanzar la variante hasta que exista el checkout real y una aprobación específica de producto.
3. Atribuir con UTMs estables: `utm_source=google`, `utm_medium=cpc`, `utm_campaign={campaign}`, `utm_content={ad_group}-{variant}`, `utm_term={keyword}`.
4. Revisar la métrica primaria después de una ventana suficiente para el retraso real desde clic hasta compra. Si no hay compras, registrar el resultado como **sin evidencia suficiente**, no como ganador.

No se cambian a la vez geografía, URL, intención, concordancia, presupuesto, puja, oferta y copy. No se asignan CPA, ROAS, CPC, volumen, tasa de conversión ni ingresos previstos sin datos.

## Presupuesto y control de gasto

El presupuesto es **pendiente de aprobación**. Esta tarea propone reparto, no importes:

| Nivel | Reparto propuesto del presupuesto de prueba | Condición |
|---|---:|---|
| Campañas de recursos docentes | 60% en conjunto | Mayor ajuste con la necesidad explícita de material listo. |
| Campañas de conversación | 40% en conjunto | Prueba la propuesta de valor específica de conversación. |
| España | Parte del bloque ES | No abrir más de un mercado español a la vez además del piloto LATAM. |
| México | Parte del bloque ES | Activar únicamente cuando supere el filtro de Keyword Planner frente a Colombia y Argentina. |
| Estados Unidos / Reino Unido | Parte del bloque EN | Mantener presupuestos independientes para no mezclar aprendizaje ni copy. |

Antes de fijar un presupuesto diario, confirmar el límite de exposición: Google Ads puede servir hasta el doble del presupuesto diario medio en un día, aunque el gasto mensual facturado no supera 30,4 veces ese presupuesto diario medio. El margen neto debe calcularse por cohorte: **ingresos cobrados menos reembolsos, comisiones de pago, gasto publicitario y cualquier coste variable aplicable**. No se autoescalará por clics o registros; cualquier subida exige revisión humana de primeras compras, reembolsos y margen neto.

## Fuentes consultadas

Accedidas el 19 de septiembre de 2026:

- [Google Ads: Keyword Planner](https://support.google.com/google-ads/answer/7337243?hl=en): explica ideas, volumen y previsiones; no sustituye resultados por país que aún no se han extraído.
- [Google Ads: anuncios de búsqueda adaptables](https://support.google.com/google-ads/answer/7684791?hl=en): límite de hasta 15 títulos, 4 descripciones, 30 caracteres por título y 90 por descripción.
- [Google Ads: tipos de concordancia](https://support.google.com/google-ads/answer/7478529?hl=en): exacta y de frase alcanzan variaciones de mismo significado/intención; no son coincidencia literal estricta.
- [Google Ads: sobreentrega y presupuesto diario medio](https://support.google.com/google-ads/answer/1704443?hl=en): exposición potencial de hasta 2× en un día y 30,4× en el mes.
- [Instituto Cervantes, Biblioteca del profesor de español](https://cvc.cervantes.es/ensenanza/biblioteca_ele/): contexto de recursos y didáctica ELE; no se usa como dato de demanda ni de compradores.
- [ProfeDeELE](https://www.profedeele.es/), [todoELE](https://todoele.net/) y [Teachers Pay Teachers](https://www.teacherspayteachers.com/): comparación de alternativas docentes desde sus páginas oficiales.

## Entregables de esta tarea

- `MARKET-TEST.md`: mercados, procedimiento de Keyword Planner, palabras clave, negativas, campañas, experimento y reporte editable.
- `GOOGLE_ADS_START.md`: configuración pausada, anuncios RSA, assets, control de gasto y plantilla de importación claramente incompleta.
