# SpanishCue — handoff completo para Grok

Este archivo es la puerta de entrada. Resume todo lo que Claude sabe de SpanishCue al 2026-10-31 y te dice dónde leer el detalle. Leelo entero antes de tocar nada.

## 0. Cómo leer este paquete

1. Este archivo (`GROK.md`).
2. `memoria/MEMORY.md`: índice de la memoria de proyecto de Claude, una línea por hecho, con enlaces `[[nombre]]` que corresponden a `memoria/<nombre>.md`.
3. En el repo `agnremote-code/spanishcue-web`: `CLAUDE.md` (reglas operativas), `AGENTS.md`, `docs/SPANISHCUE_HANDOFF.md` (contexto de producto y arquitectura), `docs/CLAUDE_OPERATIONS.md`, `docs/LANGUAGE_POLICY.md`, `docs/billing-contract.md`, `docs/seo-strategy.md`. El zip trae copia de esos archivos en `repo-docs/`.
4. El código es la fuente de verdad. La memoria puede estar desactualizada: verificá en el código antes de afirmar algo.

Las notas de memoria están en inglés (así las escribía Claude); con Ale se habla en español rioplatense (voseo).

## 1. Qué es SpanishCue

- spanishcue.com: biblioteca de clases visuales de español listas para dar, para profesores de ELE (y una ruta para alumnos). Niveles A0–C2.
- Dueño: Ale (GitHub `agnremote-code`), profesor de español 1:1 online (Preply). Proyecto privado de una sola persona.
- Dos audiencias: profesores (`/para-profesores`) y alumnos (`/aprender-espanol`). También academias (panel B2B con licencias, `/academias`).
- Contenido principal:
  - **Gramática**: curso completo A0–C2 (236 unidades + G237–G240), formato de clase en vivo de 7 secciones, teoría primero («Entender») y después práctica. Clase inicial A0 gratis (ID 239).
  - **Conversación**: «Mundos 3D» (juegos inmersivos con modo Conversación + Comprensión auditiva en el mismo mundo) + «Clásicas» (con portadas tipo póster de película).
  - Mundos 3D destacados: Noche abierta (223), Hospital San Casi Vivo (240), Madrid infectada (242), Más allá: cielo e infierno (243, la «obra maestra» para Ale), Reino de la Rosa Dormida (238), Casino El Gran Meridiano (237), 11 países 3D incluido Estados Unidos (36, gratis).
  - **Autoestudio / Homework** (`/autoestudio`, A1–C2, 20 semanas por nivel), bilingüe hasta B2, solo español en C1/C2.
- Catálogo: `app/lesson-catalog.ts` (una ruta por clase en `app/<slug>/`).

## 2. Modelo de negocio

- PRO: **US$15,50/mes**, sin prueba gratis, botón amarillo «Suscribirse». Pago con Paddle (tarjeta) y PayPal (US$15). Plan anual US$129/año (Paddle). Programa de referidos.
- Hay un suscriptor Founder real de PayPal Live: **nunca romper su suscripción**.
- Nunca ejecutar un cobro Live en pruebas. Nunca se probó un cobro real de punta a punta.
- Gratis: Noche abierta (centro gratis, barrios PRO), Hospital (entrada + recepción), Clase inicial A0 completa, Latinoamérica al Oído, Estados Unidos 3D. Las demos gratis son el mismo juego PRO con zonas bloqueadas; al salir del área gratis aparece «Compra PRO · US$15,50 al mes».
- Google Ads: preparado, **NO activado**. Nunca activar campañas ni gastar.
- Newsletter con Resend (cuenta compartida con otro producto de Ale, LogoCut: usar solo el segmento «SpanishCue · Newsletter profes ELE», nunca «General»).

## 3. Arquitectura

- App estilo Next.js sobre **vinext** (Vite) desplegada como **Cloudflare Worker** + **D1** (SQLite) con **Drizzle** (`drizzle/` migraciones). Auth con **Firebase** (incluye link por email). Billing Paddle + PayPal.
- Hosting en la cuenta de Cloudflare de Ale desde 2026-09-29 (antes OpenAI Sites, ya desactivado).
- Worker en `worker/`, rutas de la app en `app/`, base en `db/`, scripts en `scripts/`, tests en `tests/`.
- Comandos: `npm run dev`, `npm run build` (scripts/build-verified.sh), `npm test` (suite completa, larga), `npm run lint`.
- Gotchas importantes:
  - La auth del lado servidor tiene que cubrir también los pedidos RSC (`/cuenta.rsc`).
  - Los chunks públicos `/assets/*` saltean el Worker (`scripts/worker-first-routes.mjs`); nunca agregar un negativo `!/assets/*`.
  - `scripts/protect-client-assets.mjs` sirve como privados (403) los chunks JS que no estén en `publicRoots`. Todo componente que renderice una página gratis/pública tiene que estar en `publicRoots`, si no la página muestra «Algo salió mal». Probar páginas públicas como anónimo sobre el Worker compilado.
  - El Worker chequea prefijos de path crudos y el router trata `//` como `/` (redirige 308 primero).
  - Clones superficiales rompen tests: `git fetch --depth=2000`.

## 4. Pipeline de deploy

- Repo principal: `agnremote-code/spanishcue-web`. Ramas: Claude usaba `claude/*`, Codex usa `codex/*`. Te conviene una propia (p. ej. `grok/*`).
- Los PR **no borrador** se auto-mergean cuando el CI pasa (workflow «CI + Auto Merge», `ci-automerge.yml`). Los borradores no corren CI.
- Cada merge a `main` despliega staging (spanishcue-staging.agnremote.workers.dev) y después producción, sin aprobación manual. Si falla el smoke de staging se hace rollback y el próximo merge lo lleva.
- El CI **no** corre `npm test` completo: correlo localmente antes de abrir un PR.
- No mergear mientras un deploy de `main` está promoviendo (carrera con el merge-lock).
- Prohibido: force push, `git gc`, `git clean`, `prune`.
- Guardia de textos en inglés: los textos nuevos en inglés necesitan la aprobación de Ale registrada en un manifiesto. Ale ya aprobó en forma permanente (2026-10-14 y 2026-10-22); ver `memoria/MEMORY.md`. Nunca auto-aprobarse.

## 5. Reglas y preferencias de Ale (las más importantes)

- Hablarle en español rioplatense, corto, sin preámbulo. Pedirle solo lo que de verdad no podés hacer vos, en un paso.
- **Autorización permanente**: «hacé todo sin mi autorización… siempre autorizo, para siempre». Abrir/mergear PRs y desplegar sin preguntar, solo informar. **Excepción**: datos de producción, billing, secretos, DNS, Firebase y D1 no se tocan salvo que Ale lo pida.
- Cuida los créditos: trabajo justo y bien hecho.
- Cuando dice «pará», se para en el acto.
- Detesta los dashboards neón genéricos y los HUD de monedas/rankings. Clase rechazada: «El Recadero de Puerto Neón» (ID 222, la ruta queda 404 y el ID no se reutiliza).
- Nunca inventar testimonios, resultados ni cantidad de clientes.
- Logo oficial: SC azul con acento dorado (`SpanishCueBrand` o `/brand/spanishcue-logo.png`).
- Las guías del modo profesor las LEE EL ALUMNO en pantalla compartida: redactarlas descriptivas («Tú lees… y tu alumno repite»), nunca «pide al alumno que…».

## 6. Reglas de contenido permanentes

- Toda clase NUEVA de Conversación/Escucha es un mundo 3D inmersivo con los dos modos (Conversación + Comprensión auditiva) en el mismo mundo.
- Todas las clases de países son 3D como Estados Unidos (`app/mundo-3d`).
- **Sin fantasmas**: la mascota y los NPC nunca dentro de un objeto (`escapeSolids` compartido + `tests/3d-sin-fantasmas.test.mjs`; registrar cada mundo nuevo en WORLDS).
- Todos los juegos 3D: Espacio = saltar, N = nitro, botones táctiles en móvil. Todo mundo con música lleva el slider de volumen compartido (`app/escucha-3d/MusicVolume.tsx`).
- 3D A0/A1: más simple, bilingüe, 4–6 palabras clave por escena.
- Noche abierta: público adulto, sin disclaimers, puede ser gráfico pero pedagógico y accesible para A2; preguntas sobre la vida real, no sobre armas. NPC flotantes = inadmisible.
- Autoestudio: bilingüe (inglés debajo del español) hasta B2, solo español en C1/C2; cada semana cubre lectura, escritura, escucha y habla; mascota en cada pantalla. No reescribir niveles.
- Gramática: teoría primero, después práctica; diseño claro y moderno, sin cajas de relleno ni negritas pesadas; barra lateral numerada a la izquierda; mascota a los costados; imágenes para tiempos verbales. Referencia de estilo: profedeele.es.
- Cada clase nueva necesita: ruta + entrada en `app/lesson-catalog.ts`, miniatura (`public/grammar-thumbnails/<id>.webp` vía `scripts/grammar-thumbnails`) y clip de hover (`app/conversation-preview-videos.ts`); los tests lo exigen. Cambios de copy del catálogo necesitan entrada en `tests/helpers/batch1-preservation.mjs`.

## 7. SEO

- Objetivo: entrar al top 5 de búsquedas en español de material ELE frente a ProfeDeELE.
- Publicado: `/material-ele` (temas), `/alternativa-a-profedeele`, `/recursos` (≈310 páginas con hreflang), IndexNow, landings `/lp/*` (p. ej. `/lp/google-teachers`). Las URLs `?lang=` redirigen 301 a la URL limpia.
- Google Search Console conectado; releer a fines de noviembre 2026 filtrando por spanishcue.com.

## 8. Trabajo abierto (al 2026-10-31)

- **11 clases nuevas de conversación** aprobadas (6 en 3D + 5 clásicas), a hacer de a una y en orden: ver `memoria/once-clases-nuevas-20261031.md`.
- SEO en español: seguir con tandas de `/material-ele` (expresiones de tiempo, comparativos, preposiciones, voz pasiva). Ver `memoria/material-ele-es.md`.
- Antes de lanzar Ads: una compra real desde un clic de anuncio (lo hace Ale). Ver `memoria/google-ads-profes-2026-10-30.md`.
- Límite de dispositivos y contador diario: sin construir, esperando decisión de Ale (`memoria/security-audit-20261021.md`).
- Borrar el archivo privado de exportación cuando Ale confirme; la ruta `/api/admin/export` (solo dueño) sigue existiendo.
- Speech-to-text de voz nunca funcionó. Los 3D solo se probaron con GPU simulada.

## 9. Lo que NO está en este paquete (a propósito)

- Ningún secreto, token, API key ni contraseña. Los secretos están en Cloudflare (Worker secrets) y en GitHub Environments; pedíselos a Ale solo si hace falta, nunca los pegues en un chat ni los commitees.
- Ningún dato personal de usuarios o alumnos, ni el archivo de exportación de producción. Los IDs de usuario de la memoria se reemplazaron por `[id-usuario-omitido]`.

## 10. Accesos que vas a necesitar

- GitHub: acceso al repo privado `agnremote-code/spanishcue-web` (Ale te lo da).
- Cloudflare, Paddle, PayPal, Firebase, Resend, Google Ads/GSC: cuentas de Ale; no las toques sin que te lo pida.
