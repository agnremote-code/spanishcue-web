# Auditoría de seguridad y propiedad intelectual — 2026-10-21

Base auditada: `main` 28d852a (PR #250). Rama de correcciones: `claude/seguridad-proteccion-contenido-20261021`.

## Cómo se comprobó

- Build real de producción (`npm run build`, que cifra chunks privados, audios premium y cuerpos de clases en vivo) y el Worker resultante levantado en local con `wrangler dev` y una D1 local con todas las migraciones.
- Rastreo como **visitante anónimo** de 1.462 URLs: las 153 páginas del árbol `app/`, las 314 clases del catálogo (y su variante `.rsc`) y las 428 URLs del sitemap. Resultado: las 303 clases PRO devuelven 302 a `/acceso` (HTML y `.rsc`); las 10 muestras gratis y todas las páginas públicas/SEO devuelven 200.
- Búsqueda de fugas de contenido: se extrajeron los textos largos de los datos de las 97 carpetas de clases PRO y se buscaron en todos los chunks JS públicos. **0 coincidencias** (control: el texto de una clase gratis sí aparece, así que el método detecta fugas).
- Pruebas directas de rutas: barras dobles, `%2F`, mayúsculas, `.rsc`, blobs cifrados, manifiestos internos, audios y chunks privados.
- Lectura de cada ruta de `app/api/**` y de las consultas SQL de alumnos, clases registradas, Homework, clases en vivo, progreso y favoritos.
- **No comprobado en producción**: `spanishcue.com` y el host de staging no son accesibles desde este contenedor. Todo lo de abajo se verificó sobre el Worker construido a partir de `main`, que es el mismo código que corre en producción.

## Vulnerabilidades encontradas

| # | Gravedad | Hallazgo | Evidencia | Estado |
|---|---|---|---|---|
| 1 | **Alta** | Las comprobaciones del Worker comparan prefijos de ruta sin normalizar `//`, pero el router sí trata `//` como `/`. `GET /api//admin/billing` sin sesión devolvía 200 con métricas del negocio (usuarios totales, PRO activos, pendientes, cancelados, fallos de pago, cupo fundador). | `curl /api//admin/billing` → `200 {"totalUsers":…,"activePro":…}`. Las demás rutas admin (`teachers`, `export`, `lesson-reports`, `settings`) tienen su propia comprobación de propietario y devolvían 403. | **Corregido** |
| 2 | Baja | El mismo truco abría `/autoestudio/a1//semana-3` (semanas PRO de Homework). La página tiene un segundo cerrojo en el servidor y solo mostró título y candado, sin contenido. | `200`, cuerpo: «Esta semana es parte de SpanishCue PRO». | **Corregido** (por el mismo cambio) |
| 3 | Media | `POST /api/founder-access` es anónimo y solo comprueba la cabecera `Origin` (falsificable fuera del navegador). Un script podía llenar `founder_leads` con emails falsos hasta agotar el cupo de reservas y ensuciar la lista de interesados. | Código de `app/api/founder-access/route.ts` y `db/founder-leads.ts`. | **Mitigado** (límite por IP) |
| 4 | Media | `POST /api/billing/checkout` y `/api/billing/paddle/checkout` son anónimos (compra antes de crear cuenta, por diseño). Sin límite, cada llamada crea filas y una llamada a la API de PayPal/Paddle. | Código de las rutas. | **Mitigado** (límite por IP) |
| 5 | Info | La única operación "de IA" es el reconocimiento de voz de Azure (`/api/phonetics/speech-attempt`). Hoy **nadie puede usarlo**: esa ruta no está en la lista `identityAware` del Worker, así que nunca recibe la sesión verificada y responde 401 siempre (también a PRO). No hay consumo posible. No hay LLM ni prompts de IA en el código que corre. | `worker/index.ts` (lista `identityAware`), `app/api/phonetics/speech-attempt/route.ts`. | Documentado; ahora además tiene límite por IP |

Sin hallazgos (verificado):

- **Source maps**: ninguno en `dist/client`, ningún `sourceMappingURL` en los 106 chunks públicos. El manifiesto de Vite (mapa de rutas internas) se retira del build.
- **Chunks privados**: 122 módulos JS PRO se sirven cifrados y solo tras autorización (`/assets/Escucha-…js` → 403 anónimo). 131 chunks públicos, todos motores, UI o muestras gratis.
- **Audios premium**: 884 archivos cifrados (AES-GCM, clave por build, solo en el servidor). Anónimo → 403; el blob `.bin` directo → 404. 54 audios públicos (prefijos `hotel`, `latam`, `phonetics`, `grammar-free`).
- **Clases en vivo**: 240 cuerpos cifrados fuera del bundle del Worker.
- **Secretos**: ninguno en el cliente ni en git. Solo valores públicos por diseño (clave web de Firebase, token cliente de Paddle, IDs de PayPal y Google).
- **Aislamiento entre profesores**: todas las consultas de `students`, `class_records`, `live_class_sessions`, `student_homework_links`, `autoestudio_*`, `homework_*` filtran por `owner_id` del usuario verificado; crear/editar registros comprueba que el alumno sea del mismo profesor. Escrituras con control de origen.
- **Caché**: la caché de borde solo guarda HTML anónimo sin cookie ni cabeceras de navegación, con clave por build; todo lo privado sale `private, no-store`. Las clases PRO, `.rsc`, APIs y audios nunca entran en la caché compartida.
- **Webhooks**: PayPal y Paddle verifican firma.
- **Cookies**: `__session` y las de compra son `HttpOnly; Secure; SameSite=Lax`.

## Qué se corrigió (archivos)

- `worker/index.ts`: toda ruta con barras repetidas redirige con **308** a su forma canónica **antes** de cualquier control de acceso. Además aplica el límite por IP antes de verificar la sesión.
- `app/api/admin/billing/route.ts`: comprueba el propietario dentro de la ruta (como las otras rutas admin), por si alguna vez falla el enrutado.
- `worker/rate-limit.ts` (nuevo) + `vite.config.ts`: binding nativo de Cloudflare **Workers Rate Limiting** (`ABUSE_LIMITER`, 10 solicitudes por minuto por IP) para `POST` de `/api/founder-access`, `/api/billing/checkout`, `/api/billing/paddle/checkout` y `/api/phonetics/speech-attempt`. Los contadores viven en Cloudflare (no en D1) y no se guarda ninguna IP. La clave incluye el entorno, así que staging y producción no se mezclan. Si el binding faltara o fallara, **deja pasar** (nunca bloquea un pago por un error de configuración). Webhooks, páginas y GET no se limitan.
- Pruebas nuevas: `tests/security-hardening.test.mjs` (unitarias) y `tests/security-paths-rendered.test.mjs` (contra el Worker construido: `//` → 308, admin 403 sin datos, clases PRO → `/acceso`, páginas SEO y muestras gratis → 200).

No se tocó: diseño, textos, URLs, metadatos, sitemap, robots, redirecciones, auth, Paddle, PayPal, D1 ni secretos.

## Pruebas realizadas

Ver la sección "Resultados" del PR para la salida exacta. Resumen: `npm test` completo (incluye build y las pruebas contra el Worker), `npm run lint` (0 errores), `npx tsc --noEmit` (3 errores previos en `app/estados-unidos-a2-b1/data.ts` y `app/noche-abierta/voice.ts`, idénticos en `main`, ninguno en archivos tocados), `git diff --check`. Manual sobre el Worker local: `/api//admin/billing` → 308 → 403; 11.ª solicitud a `/api/founder-access` en un minuto → 429; checkout con otra IP no afectado.

## Lo que necesariamente sigue visible en el navegador

- Los **motores** (clase en vivo, mundos 3D, Homework, three.js, personajes y física): tienen que ejecutarse en el navegador; ofuscarlos no protege nada.
- Las **10 clases gratis**, las semanas gratis de Homework y el centro gratis de Noche abierta (`/demo/noche-abierta`).
- **Catálogo público y SEO**: títulos, descripciones, 307 páginas `/resources/…`, 63 guías, hubs de gramática y conversación, banco de 150 preguntas. Es intencional para Google.
- **Vistas previas**: miniaturas, 58 vídeos de desplazamiento de clases de gramática (`/grammar-previews`) y clips 3D (`/conversation-previews`). Muestran la clase en vídeo; es un riesgo aceptado por marketing.
- `/autoestudio/clase/<id>`: demostración de 57 clases de gramática para alumnos de Homework, recortada **en el servidor** a apertura, lectura y primera explicación (noindex).
- **Cualquier cuenta PRO** recibe en su navegador el contenido completo de lo que abre (es lo que paga). Una cuenta PRO decidida puede descargarlo todo; ninguna medida técnica lo impide sin dañar la experiencia.

## Riesgos pendientes (no aplicados a propósito)

1. **Cuentas PRO compartidas o usadas para extraer en masa**: no hay límite de sesiones simultáneas ni cuotas por cuenta. Propuesta: registrar en D1 un "dispositivo" por sesión (hash, sin IP) y avisar o cortar con más de N dispositivos activos; cuota alta por cuenta para HTML PRO y audios (por ejemplo 2.000/hora) con alerta al propietario. Requiere migración y decisión de producto.
2. **Spam distribuido** en la lista de fundadores (muchas IPs): añadir Cloudflare Turnstile al formulario (cambio visual mínimo; requiere crear la clave en el panel de Cloudflare).
3. **Sin Content-Security-Policy**: conviene una CSP con GA, Google Ads, Paddle, PayPal y Firebase en modo informe primero. No se aplicó porque un error rompe el checkout.
4. **Reglas WAF/Bot Fight Mode** en el panel de Cloudflare (por ejemplo limitar `/resources/*` y clases a ~300/min por IP): se configura en el panel, no en el código.
5. **Ruta `/api/admin/export`** (solo propietario, verificada 403 también con `//`): borrarla cuando Ale confirme que ya no la necesita.
6. **Reconocimiento de voz**: si se quiere activar para PRO, añadir `/api/phonetics/` a `identityAware` y comprobar que el secreto `AZURE_SPEECH_KEY` exista; el límite por IP ya está puesto. Hoy no funciona para nadie.
7. **Marcas de agua forenses** (por ejemplo, el ID de cuenta oculto en los PDF/exportaciones o en el HTML PRO) para poder demostrar el origen de una copia: útil para licencias a academias.

## Academias: diagnóstico y propuesta

**Lo que ya sirve**: identidad propia (`users.id` interno, Firebase solo como proveedor), acceso por `access_grants` (con `source`, `source_reference`, `expires_at`), y todos los datos de alumnos aislados por `owner_id`. Un profesor de una academia hoy sería una cuenta normal con un grant PRO manual (`/api/admin/teachers`).

**Lo que falta**:

- Tablas `organizations` (academia, plan, cupo de profesores, estado) y `organization_members` (`organization_id`, `user_id`, rol `admin`/`teacher`, alta/baja). Un índice único por usuario activo evita que un profesor pertenezca a dos academias a la vez si así se decide.
- Licencia: un grant por profesor con `source='organization'` y `source_reference=<organization_id>`. Dar de baja al profesor o vencer la licencia de la academia revoca solo esos grants; el acceso sigue calculándose igual que hoy, sin tocar el flujo de PayPal/Paddle de los profesores individuales.
- Facturación institucional: una suscripción Paddle por academia con cantidad = asientos (Paddle admite cantidad por ítem). Es trabajo nuevo de billing.
- Permisos: el admin de la academia gestiona miembros y ve estadísticas agregadas. **No** ve por defecto los alumnos de cada profesor: las tablas siguen filtradas por `owner_id` del profesor, así una academia nunca lee datos de otra ni de profesores ajenos. Si se quiere que el admin vea alumnos, debe ser un permiso explícito por profesor.
- Nota técnica: las tablas de alumnos usan como `owner_id` el UID de Firebase, no `users.id`. Antes de academias conviene migrar esa clave a `users.id` para que un cambio de proveedor de login no desconecte alumnos.
- Consumo de IA por institución: hoy no hay coste de IA. Si se activa voz u otra IA, contar uso por `organization_id` en D1 con un tope mensual por plan y responder 429 al superarlo; el límite por IP actual no basta para eso.
- Cuentas compartidas: con licencias por asiento, el control de dispositivos simultáneos del punto 1 de riesgos pendientes pasa a ser necesario (una academia podría comprar 2 asientos para 20 profesores).
- Acceso amplio a clases: el acceso es binario (free/full); para planes por colección haría falta un `access_level` por colección o un `product_code` por paquete, y el Worker ya centraliza esa decisión.
