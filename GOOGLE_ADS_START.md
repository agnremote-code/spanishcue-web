# SPANISHCUE · Google Ads Start

**Estado de creación:** `PAUSED`. Este documento no autoriza gasto, activación, partners, Display, PMax, Demand Gen ni expansión automática.
**Fecha:** 19 de septiembre de 2026.

## Precondiciones antes de crear en Google Ads o Ads Editor

- [ ] Checkout real habilitado y recorrido completo de primera compra probado en sandbox.
- [ ] `subscription_complete` validado contra una compra de prueba y sin duplicación.
- [ ] Consentimiento, UTMs y eventos de demo/registro/checkout comprobados.
- [ ] Exportaciones de Keyword Planner archivadas para ES, MX, CO, AR, US y UK con ubicación, idioma, red, período y fecha.
- [ ] México confirmado o sustituido como piloto LATAM según el criterio de `MARKET-TEST.md`.
- [ ] Presupuesto diario por campaña aprobado explícitamente.
- [ ] Límite de gasto mensual y persona responsable de revisión definidos.
- [ ] Páginas finales abiertas en navegador, sin redirección rota, en español e inglés según campaña.

Mientras falte cualquiera de esas condiciones, no generar ni importar un CSV de Ads Editor como si estuviera validado. Un archivo no procesado por Ads Editor es solo una plantilla, no una campaña validada.

## Configuración común de los cuatro borradores

| Campo | Valor de borrador |
|---|---|
| Tipo | Search only |
| Estado | Paused |
| Red | Google Search solamente |
| Search partners | Desactivado |
| Display expansion | Desactivada |
| PMax / Demand Gen / Display | No crear |
| Broad match / AI Max | No usar |
| Ubicación | Presencia: personas en o habitualmente en el país objetivo |
| Idioma | Español para ES/MX; inglés para US/UK |
| Puja | Pendiente de objetivo, presupuesto y conversión validada |
| Presupuesto diario | Pendiente de aprobación, sin valor inventado |
| URL tracking | `{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_campaign}&utm_content={_adgroup}-{_variant}&utm_term={keyword}` |

Definir parámetros personalizados por campaña antes de publicar: `{_campaign}` = nombre de campaña, `{_adgroup}` = `resources` o `conversation`, `{_variant}` = `demo-a` para la primera variante. No probar otra variante de landing hasta que exista evidencia de compra.

## Campañas y rutas de visualización

| Campaña | Grupo | URL final | Path 1 | Path 2 |
|---|---|---|---|---|
| `SC_ES_ES_Search` | Recursos docentes | `https://spanishcue.com/ele-recursos-profesores` | `recursos-ele` | `clases-reales` |
| `SC_ES_ES_Search` | Conversación | `https://spanishcue.com/spanish-conversation-activities` | `conversacion` | `clases-reales` |
| `SC_ES_MX_Search` | Recursos docentes | `https://spanishcue.com/ele-recursos-profesores` | `recursos-ele` | `clases-online` |
| `SC_ES_MX_Search` | Conversación | `https://spanishcue.com/spanish-conversation-activities` | `conversacion` | `para-profes` |
| `SC_EN_US_Search` | Teacher resources | `https://spanishcue.com/online-spanish-teaching-resources` | `teach-spanish` | `real-lessons` |
| `SC_EN_US_Search` | Conversation | `https://spanishcue.com/spanish-conversation-activities` | `conversation` | `real-lessons` |
| `SC_EN_UK_Search` | Teacher resources | `https://spanishcue.com/online-spanish-teaching-resources` | `teach-spanish` | `online-lessons` |
| `SC_EN_UK_Search` | Conversation | `https://spanishcue.com/spanish-conversation-activities` | `conversation` | `for-tutors` |

## Responsive Search Ads

Cada grupo recibe un RSA con 12 títulos y 4 descripciones. Los conteos entre paréntesis incluyen espacios y están por debajo de los límites actuales de 30 caracteres por título y 90 por descripción. No fijar assets salvo una obligación legal futura; los títulos y descripciones deben poder combinarse sin prometer condiciones que no estén activas.

### SC_ES_ES_Search · Recursos docentes

| Título | Caracteres |
|---|---:|
| Recursos ELE para profesores | 28 |
| Clases listas para enseñar | 26 |
| Abre una clase real gratis | 26 |
| Enseña español online | 21 |
| Menos tiempo preparando | 23 |
| Actividades para adultos | 24 |
| Filtra por nivel y objetivo | 27 |
| Comparte pantalla y enseña | 26 |
| Biblioteca visual de ELE | 24 |
| Práctica y conversación juntas | 30 |
| Sin crear diapositivas | 22 |
| Prueba material real | 20 |

| Descripción | Caracteres |
|---|---:|
| Abre una clase completa, compártela y guía la actividad desde el navegador. | 75 |
| Recursos ELE con nivel y objetivo visibles para elegir antes de tu clase. | 73 |
| Prueba clases reales sin tarjeta y decide con el material delante. | 66 |
| Explicación, práctica y conversación en una misma experiencia visual. | 69 |

### SC_ES_ES_Search · Conversación

| Título | Caracteres |
|---|---:|
| Actividades de conversación | 27 |
| Haz que tu alumno hable | 23 |
| Escenarios para hablar español | 30 |
| Roleplays listos para abrir | 27 |
| Menos silencios en clase | 24 |
| Conversación guiada por nivel | 29 |
| Preguntas que hacen avanzar | 27 |
| Clases visuales para conversar | 30 |
| De la consigna al intercambio | 29 |
| Comparte y empieza a hablar | 27 |
| Prueba una actividad real | 25 |
| Para clases con adultos | 23 |

| Descripción | Caracteres |
|---|---:|
| Abre decisiones, escenarios y roleplays para sostener una conversación real. | 76 |
| Cada pantalla ofrece una razón clara para que el alumno responda. | 65 |
| Prueba una actividad completa antes de crear tu cuenta docente gratuita. | 72 |
| Usa apoyos por nivel y sigue la conversación sin inventar todo al momento. | 74 |

### SC_ES_MX_Search · Recursos docentes

| Título | Caracteres |
|---|---:|
| Material para enseñar español | 29 |
| Recursos online para profes | 27 |
| Clase interactiva lista | 23 |
| Abre y comparte tu clase | 24 |
| Recursos para tutores | 21 |
| Enseña sin armar slides | 23 |
| Español para alumnos adultos | 28 |
| Elige por nivel y meta | 22 |
| Una biblioteca para tu clase | 28 |
| Actividades para pantalla | 25 |
| Mira una demo real | 18 |
| Todo en una sola clase | 22 |

| Descripción | Caracteres |
|---|---:|
| Elige una clase interactiva, ábrela en el navegador y comparte pantalla. | 72 |
| Encuentra materiales de español con nivel, objetivo y práctica guiada. | 70 |
| Mira demos reales antes de registrar tu cuenta docente sin tarjeta. | 67 |
| Deja de reconstruir materiales y usa una secuencia lista para enseñar. | 70 |

### SC_ES_MX_Search · Conversación

| Título | Caracteres |
|---|---:|
| Recursos para conversación | 26 |
| Hablar español con propósito | 28 |
| Actividades listas para usar | 28 |
| Preguntas para tu clase | 23 |
| Conversación para adultos | 25 |
| Escenarios que dan ideas | 24 |
| Guía el intercambio oral | 24 |
| Roleplays en el navegador | 25 |
| Clases para compartir pantalla | 30 |
| Empieza con una demo | 20 |
| De respuestas a conversación | 28 |
| Material para tutores | 21 |

| Descripción | Caracteres |
|---|---:|
| Usa escenarios y decisiones para llevar una respuesta a una charla más larga. | 77 |
| La clase muestra consignas y apoyos para seguir hablando con tu alumno. | 71 |
| Abre una actividad real de conversación y comprueba cómo funciona. | 66 |
| Recursos visuales listos para clases online de español con adultos. | 67 |

### SC_EN_US_Search · Teacher resources

| Headline | Characters |
|---|---:|
| Spanish Teacher Resources | 25 |
| Ready To Teach Spanish | 22 |
| Open A Real Free Lesson | 23 |
| Teach From One Screen | 21 |
| Less Time Making Slides | 23 |
| Resources For Adult Classes | 27 |
| Choose By Level And Goal | 24 |
| Share Your Screen And Teach | 27 |
| Interactive Spanish Lessons | 27 |
| Practice And Speaking Together | 30 |
| Plan Less, Teach More | 21 |
| See The Lesson First | 20 |

| Description | Characters |
|---|---:|
| Open a complete lesson, share your screen and guide the class in your browser. | 78 |
| Find Spanish resources with visible level, goal and guided practice. | 68 |
| Try real lessons with no card, then decide with the product in front of you. | 76 |
| Keep explanation, practice and speaking in one visual teaching experience. | 74 |

### SC_EN_US_Search · Conversation

| Headline | Characters |
|---|---:|
| Spanish Speaking Activities | 27 |
| Give Learners More To Say | 25 |
| Ready To Use Role Plays | 23 |
| Start Better Spanish Talks | 26 |
| Less Dead Air In Class | 22 |
| Speaking Support By Level | 25 |
| Prompts That Move Things On | 27 |
| Visual Lessons For Speaking | 27 |
| From Prompt To Conversation | 27 |
| Share, Ask, Build A Talk | 24 |
| Try A Real Activity | 19 |
| For Adult Spanish Lessons | 25 |

| Description | Characters |
|---|---:|
| Open scenarios, decisions and role plays that lead to sustained Spanish talk. | 77 |
| Each screen gives the learner a clear reason to respond and continue. | 69 |
| Try a complete activity before you create your free teacher account. | 68 |
| Use levelled support and follow-ups without inventing every prompt yourself. | 76 |

### SC_EN_UK_Search · Teacher resources

| Headline | Characters |
|---|---:|
| Spanish Resources For Tutors | 28 |
| Spanish Lessons Ready Online | 28 |
| Open A Real Lesson Free | 23 |
| Teach Without Extra Slides | 26 |
| Resources For Adult Learners | 28 |
| Choose A Level And Aim | 22 |
| Screen Share Your Lesson | 24 |
| Interactive Teaching Material | 29 |
| Keep The Lesson Together | 24 |
| Activities Ready To Teach | 25 |
| See A Demo Before You Plan | 26 |
| Your Next Lesson Is Ready | 25 |

| Description | Characters |
|---|---:|
| Open an interactive lesson in your browser and share it with your learner. | 74 |
| Choose Spanish material by level, objective and the skill you want to teach. | 76 |
| Explore real lessons without a card before creating your free teacher account. | 78 |
| Keep prompts, practice and speaking in one clear lesson flow. | 61 |

### SC_EN_UK_Search · Conversation

| Headline | Characters |
|---|---:|
| Spanish Speaking Activities | 27 |
| Adult Spanish Conversation | 26 |
| Role Plays Ready To Share | 25 |
| Help Learners Keep Talking | 26 |
| Clear Prompts For Tutors | 24 |
| Conversation By Spanish Level | 29 |
| Open A Real Speaking Task | 25 |
| Scenarios With A Next Step | 26 |
| Teach Conversation Online | 25 |
| Move Beyond First Answers | 25 |
| Explore A Free Activity | 23 |
| Make Spanish Talk Flow | 22 |

| Description | Characters |
|---|---:|
| Use visual scenarios and choices to develop a short answer into a discussion. | 77 |
| Prepared prompts help adult learners respond, react and keep speaking. | 70 |
| Open a real conversation activity before you create a free teacher account. | 75 |
| Share one browser lesson instead of switching between disconnected materials. | 77 |

## Assets de campaña: usar solo donde la función existe

Sitelinks propuestos:

| Texto | URL | Descripción 1 | Descripción 2 |
|---|---|---|---|
| Ver recursos ELE | `/ele-recursos-profesores` | Clases reales por nivel | Abre y comparte pantalla |
| Ver conversación | `/spanish-conversation-activities` | Escenarios y roleplays | Prueba una actividad real |
| Online teaching resources | `/online-spanish-teaching-resources` | Browser-based lessons | Built for screen sharing |
| View free lessons | `/pricing` | Try complete lessons | No card to start |

Callouts ES: `Clases reales gratis`, `Sin tarjeta para probar`, `A0–C2`, `En el navegador`, `Para compartir pantalla`.
Callouts EN: `Real free lessons`, `No card to try`, `A0–C2`, `Browser-based`, `Screen-share ready`.

No usar logos, nombres, reseñas ni avales de ProfeDeELE, todoELE, Teachers Pay Teachers u otra marca. No usar contador de plazas, disponibilidad inventada, precio, descuento, devolución, resultados o métricas no verificadas.

## Plantilla Ads Editor incompleta: NO IMPORTAR

Faltan presupuesto diario, puja, exportación de Keyword Planner y validación de conversión. Por ello esta es una especificación de campos, no un CSV generado ni procesado por Ads Editor.

| Campaign | Campaign status | Budget | Ad group | Ad group status | Keyword | Match type | Final URL | Headline 1–12 | Description 1–4 |
|---|---|---|---|---|---|---|---|---|---|
| `SC_ES_ES_Search` | Paused | `PENDING_APPROVAL` | Recursos docentes | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA ES España Recursos | RSA ES España Recursos |
| `SC_ES_ES_Search` | Paused | `PENDING_APPROVAL` | Conversación | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA ES España Conversación | RSA ES España Conversación |
| `SC_ES_MX_Search` | Paused | `PENDING_APPROVAL` | Recursos docentes | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA ES México Recursos | RSA ES México Recursos |
| `SC_ES_MX_Search` | Paused | `PENDING_APPROVAL` | Conversación | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA ES México Conversación | RSA ES México Conversación |
| `SC_EN_US_Search` | Paused | `PENDING_APPROVAL` | Teacher resources | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA EN US Resources | RSA EN US Resources |
| `SC_EN_US_Search` | Paused | `PENDING_APPROVAL` | Conversation | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA EN US Conversation | RSA EN US Conversation |
| `SC_EN_UK_Search` | Paused | `PENDING_APPROVAL` | Teacher resources | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA EN UK Resources | RSA EN UK Resources |
| `SC_EN_UK_Search` | Paused | `PENDING_APPROVAL` | Conversation | Paused | Ver `MARKET-TEST.md` | Exact / Phrase | URL de la tabla | RSA EN UK Conversation | RSA EN UK Conversation |

## Fuentes

- [Google Ads: anuncios de búsqueda adaptables](https://support.google.com/google-ads/answer/7684791?hl=en), consultada el 19 de septiembre de 2026.
- [Google Ads: Keyword Planner](https://support.google.com/google-ads/answer/7337243?hl=en), consultada el 19 de septiembre de 2026.
- [Google Ads: sobreentrega y presupuesto diario medio](https://support.google.com/google-ads/answer/1704443?hl=en), consultada el 19 de septiembre de 2026.
