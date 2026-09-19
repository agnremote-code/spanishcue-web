# SPANISHCUE · Market Test de Search

**Estado:** borrador de investigación y creación pausada. No crear, importar ni activar campañas.
**Fecha:** 19 de septiembre de 2026.

## Regla de evidencia

No hay en este documento volumen, CPC, competencia, previsión, CPA, ROAS ni conversión inventados. Keyword Planner no está disponible mediante una conexión autorizada en este entorno, por lo que todos esos valores siguen siendo **desconocidos**. La tabla siguiente especifica la consulta que se debe ejecutar antes de crear las campañas.

## Consulta obligatoria de Keyword Planner

Ejecutar *Discover new keywords* y después *Get search volume and forecasts* con las listas semilla de cada mercado. Guardar el CSV/export de cada resultado junto a la fecha, cuenta y moneda mostradas por Google Ads.

| Mercado | Ubicación | Idioma | Red | Período de ideas | Previsión | Estado |
|---|---|---|---|---|---|---|
| ES-España | España | Español | Google | Últimos 12 meses cerrados | 30 días desde la fecha de creación, sin presupuesto fijado | Pendiente |
| ES-pilotoLATAM | México | Español | Google | Últimos 12 meses cerrados | 30 días desde la fecha de creación, sin presupuesto fijado | Pendiente |
| Comparación LATAM | Colombia | Español | Google | Últimos 12 meses cerrados | Mismo período y lista que México | Pendiente |
| Comparación LATAM | Argentina | Español | Google | Últimos 12 meses cerrados | Mismo período y lista que México | Pendiente |
| EN-US | Estados Unidos | Inglés | Google | Últimos 12 meses cerrados | 30 días desde la fecha de creación, sin presupuesto fijado | Pendiente |
| EN-UK | Reino Unido | Inglés | Google | Últimos 12 meses cerrados | 30 días desde la fecha de creación, sin presupuesto fijado | Pendiente |

Configuración a confirmar en cada exportación: ubicaciones de **presencia** (personas en o que se encuentran habitualmente en la ubicación), idioma indicado, red Google únicamente y fecha exacta de extracción. No activar Google Search Partners, Display, PMax, Demand Gen, AI Max, broad match ni expansión automática.

### Criterio de selección del piloto LATAM

México queda preseleccionado para una prueba controlada. Antes de lanzar, comparar México, Colombia y Argentina con la misma semilla y registrar por cada país: elegibilidad de las keywords, rangos de volumen, rangos de puja/CPC que Google muestre, competencia y previsión bajo el mismo presupuesto de borrador. Elegir el país con el conjunto más utilizable para intención docente y compatible con el presupuesto aprobado. Si la información no distingue claramente un candidato, mantener México por simplicidad operativa y documentar que no hubo evidencia concluyente. No inferir demanda de estudiantes desde Instituto Cervantes.

## Arquitectura de campaña

| Campaña | Geografía de presencia | Idioma | Grupo 1 | URL | Grupo 2 | URL |
|---|---|---|---|---|---|---|
| `SC_ES_ES_Search` | España | Español | Recursos docentes | `/ele-recursos-profesores` | Conversación | `/spanish-conversation-activities` |
| `SC_ES_MX_Search` | México | Español | Recursos docentes | `/ele-recursos-profesores` | Conversación | `/spanish-conversation-activities` |
| `SC_EN_US_Search` | Estados Unidos | Inglés | Teacher resources | `/online-spanish-teaching-resources` | Conversation | `/spanish-conversation-activities` |
| `SC_EN_UK_Search` | Reino Unido | Inglés | Teacher resources | `/online-spanish-teaching-resources` | Conversation | `/spanish-conversation-activities` |

Gramática queda en reserva: existe una URL de producto, pero no entra en este primer test para no fragmentar presupuesto, aprendizaje ni lectura de intención.

## Palabras clave iniciales

Usar exacta y frase únicamente. `[corchetes]` indican exacta; `"comillas"`, frase. La concordancia exacta puede cubrir variantes cercanas del mismo significado/intención, y la de frase puede incluir consultas más específicas que conserven el significado. Por eso se requiere revisión semanal de términos de búsqueda y negativas precisas; no se asume una coincidencia textual literal.

### ES-España

**Recursos docentes**

- `[recursos ele]`
- `"recursos para profesores de español"`
- `"materiales para profesores de ele"`
- `"recursos para enseñar español online"`
- `[actividades ele]`
- `"clases de español para profesores"`
- `"materiales de español para adultos"`

**Conversación**

- `[actividades conversación español]`
- `"actividades de conversación ele"`
- `"clases de conversación español"`
- `"recursos conversación español"`
- `"actividades para hablar español"`
- `"roleplays para clase de español"`
- `"material para conversación ele"`

### ES-pilotoLATAM: México

**Recursos docentes**

- `[recursos para profesores de español]`
- `"material para enseñar español"`
- `"recursos ele online"`
- `"clases de español para adultos"`
- `"actividades para enseñar español"`
- `"materiales de español online"`
- `"recursos para tutor de español"`

**Conversación**

- `[actividades de conversación español]`
- `"actividades para hablar español"`
- `"recursos de conversación español"`
- `"clases de conversación para adultos"`
- `"roleplays para español"`
- `"preguntas para conversación español"`
- `"material de conversación ele"`

### EN-US

**Teacher resources**

- `[spanish teacher resources]`
- `"spanish teaching resources"`
- `"online spanish teaching resources"`
- `"spanish lessons for teachers"`
- `"spanish resources for adults"`
- `"spanish tutor resources"`
- `"interactive spanish lessons"`

**Conversation**

- `[spanish conversation activities]`
- `"spanish speaking activities"`
- `"spanish conversation lessons"`
- `"spanish conversation resources"`
- `"adult spanish speaking activities"`
- `"spanish role play activities"`
- `"online spanish conversation lessons"`

### EN-UK

**Teacher resources**

- `[spanish teacher resources uk]`
- `"spanish teaching resources"`
- `"online spanish teaching resources"`
- `"spanish lessons for tutors"`
- `"spanish resources for adult learners"`
- `"interactive spanish lessons"`
- `"spanish teaching materials"`

**Conversation**

- `[spanish conversation activities]`
- `"spanish speaking activities"`
- `"spanish conversation lessons"`
- `"spanish conversation resources"`
- `"spanish role play activities"`
- `"adult spanish conversation activities"`
- `"online spanish speaking lessons"`

## Negativas iniciales y control de intención

Aplicar estas negativas como frase cuando aparezcan entre comillas. Añadir una negativa exacta solo después de revisar un término de búsqueda concreto; no bloquear términos aislados que podrían pertenecer a una intención docente válida.

| Intención a excluir | Negativas iniciales en español | Negativas iniciales en inglés |
|---|---|---|
| Alumno que busca clases/tutor | `"clases de español online"`, `"aprender español"`, `"profesor de español online"`, `"tutor de español"`, `"curso de español"` | `"learn spanish"`, `"spanish classes online"`, `"spanish tutor online"`, `"spanish teacher near me"`, `"spanish course"` |
| Traducción / herramienta lingüística | `"traductor español"`, `"traducir al español"`, `"traducción español"`, `"diccionario español"` | `"spanish translator"`, `"translate to spanish"`, `"spanish translation"`, `"spanish dictionary"` |
| Empleo | `"empleo profesor español"`, `"trabajo profesor español"`, `"vacantes profesor español"`, `"salario profesor español"` | `"spanish teacher jobs"`, `"spanish tutor jobs"`, `"spanish teacher salary"`, `"spanish teacher vacancies"` |

No añadir de forma ciega `gratis/free`, `plan de clase/lesson plan`, `actividades/activities`, `worksheet`, `curriculum`, `AP` o `GCSE`. Algunos pueden contener intención de profesor y deben decidirse con el informe de términos de búsqueda. Si llega tráfico escolar o de exámenes que el producto no cubre, añadir la frase o consulta exacta observada, no una palabra amplia que bloquee una búsqueda docente legítima.

## Seguimiento y revisión

Eventos ya definidos en el producto: `landing_view`, `lesson_preview_open`, `free_lesson_start`, `signup_start`, `signup_complete`, `pricing_view`, `paywall_view`, `checkout_start` y `subscription_complete`. Antes de gasto real, verificar en un entorno de prueba que la primera suscripción pagada produzca `subscription_complete` una sola vez y que la atribución UTM se conserve con consentimiento válido.

Cadencia de lectura propuesta, sin automatización:

1. **Cada semana:** revisar términos de búsqueda, estado de anuncios, gasto facturado, demos, registros y errores de URL. Añadir negativas precisas; no cambiar puja, copy y URL en el mismo corte.
2. **Tras acumular suficiente retraso de conversión:** comprobar primeras compras y reembolsos por campaña/grupo. La ventana exacta se fija cuando se conozca el ciclo real de compra.
3. **Decisión:** pausar una consulta claramente ajena al producto; mantener una variante sin declararla ganadora si hay pocas primeras compras; evaluar cambios de una sola variable cuando haya datos de compra y margen neto.

No existe un ejecutor de monitoreo autónomo. Este documento define el reporte y el ritual de revisión; una persona debe extraer los datos y tomar las decisiones.

## Reporte editable de cohorte

Completar una fila por fecha, campaña, grupo de anuncios y variante. Dejar en blanco cualquier dato que la plataforma o el pago aún no entregue.

| Fecha | Campaña | Grupo | Variante | Gasto facturado USD | Demos | Registros | Checkout | Primeras compras | Ingresos cobrados USD | Reembolsos USD | Comisiones USD | Ingreso neto antes de Ads USD | Coste por comprador USD | Notas / decisión |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
|  |  |  |  |  |  |  |  |  |  |  |  | `ingresos - reembolsos - comisiones` | `gasto / primeras compras` si compras > 0 |  |

## Fuentes

- [Keyword Planner](https://support.google.com/google-ads/answer/7337243?hl=en), consultada el 19 de septiembre de 2026.
- [Tipos de concordancia](https://support.google.com/google-ads/answer/7478529?hl=en), consultada el 19 de septiembre de 2026.
- [Biblioteca del profesor de español, Instituto Cervantes](https://cvc.cervantes.es/ensenanza/biblioteca_ele/), consultada el 19 de septiembre de 2026. Contexto docente solamente.
