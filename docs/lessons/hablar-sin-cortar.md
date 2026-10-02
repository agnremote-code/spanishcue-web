# Hablar sin cortar — entrega y auditoría

## Clase

- **Título:** Hablar sin cortar.
- **ID:** 224, comprobado como libre en el catálogo de la base.
- **Ruta:** `/hablar-sin-cortar`.
- **Niveles:** A1, A2, B1, B2, C1, C2, seleccionables dentro de la misma clase.
- **Acceso:** PRO, mediante la política existente; sin ampliar las muestras gratuitas.
- **Duración:** 45–55 minutos por nivel; presupuesto orientativo de 50 minutos con turnos, repetición, reformulación y devolución docente.
- **Inventario:** una ficha, una ruta, ocho actividades centrales y dos opcionales por nivel, más la producción final. No se exige recorrer seis niveles ni completar el banco opcional.

## Arquitectura

`app/phonetics-family/` contiene el shell, selector accesible, actividad de audio, estilos, contrato y estado. `app/hablar-sin-cortar/` aporta los contenidos, metadatos, manifiesto y página. A1 es la base y A2–C2 son reemplazos completos de contenido con los mismos IDs y mecánicas: nunca se rellena una versión superior con consignas de A1.

Para otra clase: definir sus contenidos/recorridos y niveles con el contrato `WorldDefinition`, aportar audio finito y su procedencia, elegir arte y mascota, crear una página mínima y registrar una ficha. El número de actividades y el tiempo del recorrido se derivan del contenido.

El selector acepta `?level=`, recuerda solamente el nivel localmente y actualiza la URL sin navegar. Una URL inválida usa A1; una URL válida tiene prioridad sobre la preferencia guardada. Las flechas, Home y End operan como grupo de radios. En móvil hay selector compacto con cierre por Escape.

Al cambiar de nivel se conserva la etapa amplia y el modo profe, y se eliminan respuestas, reproducciones registradas, ayudas, marcas de producción y observaciones. Una devolución de audio de otro nivel se ignora. Los intentos se separan por nivel/actividad. Reiniciar borra el recorrido. El nuevo turno de micrófono conserva la toma solo en memoria del navegador durante la visita y revoca el enlace al cambiar de actividad. No se guarda audio en D1 ni se manda a analytics.

## Reparación del turno oral (2026-10-02)

El flujo inicial de cada actividad ahora es escuchar el modelo y decir la frase en un micrófono real. La grabación dura hasta 29 segundos, se puede detener y reproducir, y los ejercicios anteriores quedan disponibles después de la toma en «Explorar esta escucha». El desafío final permite grabar una muestra de hasta 30 segundos y continuar la tarea larga con el profesor. Una denegación del micrófono ofrece reintentar o práctica manual, sin simular una evaluación.

`SpeechAttempt.tsx` captura la toma y convierte el audio decodificado a WAV PCM mono de 16 kHz. `audio-signal.mjs` mide envolvente RMS en tramos de 20 ms y silencios de al menos 180 ms. El endpoint `/api/phonetics/speech-attempt` exige sesión PRO verificada y origen propio, valida el formato y límite de 30 segundos, y consulta Azure Speech Fast Transcription con `es-AR` y tiempos por palabra si están configuradas las variables privadas `AZURE_SPEECH_KEY` y `AZURE_SPEECH_REGION` en el Worker. No se coloca ninguna credencial en el navegador. El resultado síncrono no se conserva en la app.

`speech-analysis.mjs` compara palabras normalizadas antes de juzgar la continuidad. Si falta una palabra, ofrece repetir el modelo; si el audio es corto o silencioso, solicita otro intento. Para una frontera explícita de la actividad, una separación de al menos 300 ms **y** un silencio local coincidente de al menos 180 ms produce una corrección de pausa; una separación de hasta 180 ms sin silencio coincidente permite una devolución positiva. Valores intermedios, tiempos por palabra ausentes o transcripción insegura reciben una respuesta incierta. No hay puntuación de acento ni juicio de variedad. En tareas de habla libre, la transcripción sirve de apoyo y la devolución sigue siendo humana. Los parámetros `analysisTarget` y `analysisBoundary` dejan el objetivo separado de la captura y del proveedor.

Sin las dos variables privadas, la interfaz muestra expresamente que no hay corrección automática y conserva grabar, escuchar y practicar con el profesor. La activación de Azure requiere una cuenta de Speech con Fast Transcription en una región compatible y configurar ambas variables como secreto y variable del Worker de staging y producción, respectivamente; nunca compartir la clave en chat ni en el repositorio. Referencia de formato, locales y autenticación: Microsoft Learn, «Use the fast transcription API».

## Contenido por nivel

| Nivel | Demanda y transferencia |
|---|---|
| A1 | Frases conocidas, reconocer amiga/casa o intención, unir «es una», reconstruir «voy a estudiar», presentación de dos o tres frases. |
| A2 | Planes y rutinas, hora/lugar, enlaces consonante–vocal, reconstrucción por grupos y negociación de una salida. |
| B1 | Causa/decisión/resultado, condición, grupos discursivos, aviso reformulado y respuesta espontánea de 30–45 segundos. |
| B2 | Concesión, condición y conclusión; foco contrastivo, ritmo más ágil sin perder claridad y reparación de malentendidos. |
| C1 | Información compartida/nueva, incisos, fuentes, foco y reformulación del argumento para dos interlocutores. |
| C2 | Alcance, atribución y reservas, ambigüedad contextual, dos entregas de la misma idea con distinto efecto retórico. |

Se revisaron todas las consignas, explicaciones, transferencias y criterios de los seis niveles. No se enseña isocronía absoluta, borrado universal de sonidos ni una variedad única correcta. Las agrupaciones se presentan como propuestas defendibles, no como una única segmentación válida. Los contrastes finos de foco/estilo requieren producción y devolución humana; no se atribuyen matices acústicos no verificados a la voz sintética.

## Audio

- **66 clips:** 60 modelos y 6 contrastes segmentados.
- **Fuente:** Microsoft Edge online speech, `edge-tts 7.2.8`, `es-AR-TomasNeural`, velocidad solicitada `+0%`.
- **Manifiesto:** `app/hablar-sin-cortar/audio-manifest.json`.
- **Procedencia de palabras:** `app/hablar-sin-cortar/audio-words/`, fuera de los medios públicos.
- **Archivos:** `public/audio/hablar-sin-cortar/`; el build los retira del espacio estático público y los protege con el mecanismo existente.
- **Generador reproducible:** `scripts/generate-hablar-audio.py`; sin TTS en navegador.
- Los contrastes segmentados insertan pausas de 320 ms en fronteras de palabras informadas por el servicio. Son ediciones didácticas extremas, no muestras de acentos ni interpretaciones naturales alternativas. Las posiciones A/B varían entre niveles.
- Se verificó decodificación completa de cada archivo, duración, MP3/24 kHz, señal no silenciosa, hashes únicos, correspondencia de todas las referencias, texto de entrada exacto y coincidencia con las palabras informadas por el servicio.
- **No hubo auditoría humana de escucha.** El cotejo de metadatos no certifica pronunciación ni prosodia; la guía docente lo declara. La reproducción de audio en navegador se probó funcionalmente.

## Catálogo y preservación

Una sola ficha A1–C2 aparece al filtrar Fonética por cualquiera de los seis niveles. Los enlaces transportan el nivel seleccionado. La ruta de Fonética conserva `[201,202,38]` y agrega 224 al final. Los alias de búsqueda están en metadatos y no se acumulan en la copia visible.

Los ajustes a las pruebas históricas se limitan a retirar exactamente la incorporación aprobada antes de comparar sus bytes. No se relajaron los hashes anteriores. No se modificaron las clases 201, 202 ni 38, AudioDeck compartido, Noche abierta, Autoestudio/Homework Adventure, auth, billing, D1 ni despliegues.

## Visual y navegador

La dirección inicial futurista se descartó por la corrección explícita del usuario. El único arte incorporado muestra un estudio de grabación físicamente plausible: madera, tela acústica, micrófono, auriculares, consola, papel y lámpara. La mascota es la referencia 3 suministrada por el usuario, convertida a WebP; no se generó otra identidad.

Se inspeccionaron capturas de entrada y actividad a 1440×900, 1366×768, 768×1024 y 390×844; también texto denso de C2 en móvil. No se detectó desbordamiento horizontal. Se corrigió el contraste del control de velocidad seleccionado.

24 comprobaciones en Chromium local pasaron: 19 de rutas de interfaz, tamaños, seis niveles, teclado/URL, reset de estado, ayuda persistente y ausencia de errores; 5 de agrupación, enlaces, reconstrucción, reproducción A/B y reinicio. El harness montó los componentes reales con un adaptador local de Link; esto no se presenta como sesión PRO autenticada en producción. Las defensas del Worker se verifican por separado en la suite del repositorio.

Prompt del arte aceptado (herramienta integrada de imágenes):

> A premium editorial photograph of a physically real professional voice-over recording studio at night, landscape 16:9. The photograph could plausibly be taken today. Beautiful walnut acoustic slat panels, charcoal fabric sound absorbers, a real large diaphragm condenser microphone on a normal boom with round pop filter, black headphones resting on a wooden desk, mixing desk with physical knobs, paper notes and a pencil, warm practical desk lamp, real leather chair, faint cool evening window light. Human-scale proportions, believable shadows, tactile materials and subtle inhabited imperfections. Composition: microphone and desk on right two-thirds; left third darker, simple fabric wall and negative space for web page headline. Premium cinematic photography with natural depth of field and tasteful restrained colors, amber walnut cream charcoal. No people (the official mascot will be overlaid separately), no text or logos. STRICTLY NO holograms, no floating objects, no floating glass blocks, no neon trails, no glowing waveforms in air, no futuristic tech, no cyberpunk, no sci-fi, no illustration of an interface. A real room, real life made interactive.

## Revisión y decisiones

La revisión independiente detectó que las instrucciones de producción revelaban la respuesta al terminar el audio. Se añadió una prueba que falló reproduciendo la fuga; la producción de tareas perceptivas ahora se muestra solo después de comprobar o pedir apoyo explícito. La prueba pasa en los seis niveles. Las actividades exclusivamente orales siguen habilitándose tras escuchar. También se eliminaron los conteos fijos del motor para permitir reutilización fiel.

El voseo sigue la interfaz real inspeccionada. Los contrastes acústicos se etiquetan como sintéticos/editados. La separación entre práctica con apoyo, respuesta revisada y producción marcada se mantiene en todo el recorrido; ninguna marca se presenta como dominio ni nota de pronunciación.

## Entrega y concurrencia

Base inspeccionada: `1d0c76564d664df74918aacccf14f355849f0f75`. Rama: `codex/phonetics-hablar-sin-cortar-a1-c2-20261001`. No había PR abiertos al empezar. Se utilizó una copia aislada; no se editó ninguna rama de otro agente.

No se fusionó ni se desplegó. La revisión automática de aprobaciones bloqueó el intento de `git push` al repositorio solicitado, alegando que publicar código y activos en ese destino externo requería autorización explícita. No se intentó otra vía de publicación. Los commits y este informe quedan localmente para revisión; la subida de la rama está pendiente de autorización del usuario. No se creó PR que pudiera activar auto-merge.

## Resultados de verificación

| Comprobación | Resultado |
|---|---|
| `npm test` completo, copia aislada en `/tmp/hsc-verify`, commit `12036b7` | 422/422 pruebas aprobadas; 0 fallos; 0 omitidas. Incluye build y pruebas del Worker. |
| Suite seleccionada combinada, regresiones + clase nueva | 94/94 aprobadas, 0 fallos, 0 omitidas. Incluye 13 pruebas nuevas. |
| Navegador Chromium, componentes reales | 24 comprobaciones aprobadas; 0 errores de ejecución observados. |
| `npm run lint` | Aprobado, 0 errores y 0 advertencias ESLint. |
| `npx tsc --noEmit --pretty false` | 11 diagnósticos preexistentes; salida final idéntica a la base, 0 diagnósticos nuevos. No se declara typecheck global aprobado. |
| Build de producción y `validate:artifact` | Aprobados en copia aislada; 65 módulos privados y 121 medios premium protegidos en el proyecto total. |
| `git diff --check` | Aprobado. |

Los 11 diagnósticos base están en `app/api/billing/subscription/route.ts` (8), `app/marketing/MarketingSections.tsx` (2) y `app/mexico/map-data.ts` (1). No se tocaron esos archivos.

Se detectó y corrigió un fallo intermedio de la suite completa: los 60 JSON de palabras no debían formar parte del directorio de medios. Se movieron a código/procedencia antes de la ejecución final. Dos intentos posteriores de build en el workspace sincronizado fallaron por reaparición de activos o desaparición de `.rsync-tmp` durante el empaquetado. La copia local aislada verificó el código final y todas las defensas sin modificar scripts de infraestructura.

Los conteos de suites se informan por separado porque algunas pruebas se ejecutaron en ambas; no deben sumarse como pruebas únicas.

## Manifiesto exacto de archivos modificados (158)

```text
app/Library.tsx
app/hablar-sin-cortar/HablarSinCortar.tsx
app/hablar-sin-cortar/audio-manifest.json
app/hablar-sin-cortar/audio-words/a1-bank-boundary.words.json
app/hablar-sin-cortar/audio-words/a1-bank-listen.words.json
app/hablar-sin-cortar/audio-words/a1-boundary-01.words.json
app/hablar-sin-cortar/audio-words/a1-connect-01.words.json
app/hablar-sin-cortar/audio-words/a1-listen-01.words.json
app/hablar-sin-cortar/audio-words/a1-listen-02.words.json
app/hablar-sin-cortar/audio-words/a1-rebuild-01.words.json
app/hablar-sin-cortar/audio-words/a1-repeat-01.words.json
app/hablar-sin-cortar/audio-words/a1-rhythm-01.words.json
app/hablar-sin-cortar/audio-words/a1-speak-01.words.json
app/hablar-sin-cortar/audio-words/a2-bank-boundary.words.json
app/hablar-sin-cortar/audio-words/a2-bank-listen.words.json
app/hablar-sin-cortar/audio-words/a2-boundary-01.words.json
app/hablar-sin-cortar/audio-words/a2-connect-01.words.json
app/hablar-sin-cortar/audio-words/a2-listen-01.words.json
app/hablar-sin-cortar/audio-words/a2-listen-02.words.json
app/hablar-sin-cortar/audio-words/a2-rebuild-01.words.json
app/hablar-sin-cortar/audio-words/a2-repeat-01.words.json
app/hablar-sin-cortar/audio-words/a2-rhythm-01.words.json
app/hablar-sin-cortar/audio-words/a2-speak-01.words.json
app/hablar-sin-cortar/audio-words/b1-bank-boundary.words.json
app/hablar-sin-cortar/audio-words/b1-bank-listen.words.json
app/hablar-sin-cortar/audio-words/b1-boundary-01.words.json
app/hablar-sin-cortar/audio-words/b1-connect-01.words.json
app/hablar-sin-cortar/audio-words/b1-listen-01.words.json
app/hablar-sin-cortar/audio-words/b1-listen-02.words.json
app/hablar-sin-cortar/audio-words/b1-rebuild-01.words.json
app/hablar-sin-cortar/audio-words/b1-repeat-01.words.json
app/hablar-sin-cortar/audio-words/b1-rhythm-01.words.json
app/hablar-sin-cortar/audio-words/b1-speak-01.words.json
app/hablar-sin-cortar/audio-words/b2-bank-boundary.words.json
app/hablar-sin-cortar/audio-words/b2-bank-listen.words.json
app/hablar-sin-cortar/audio-words/b2-boundary-01.words.json
app/hablar-sin-cortar/audio-words/b2-connect-01.words.json
app/hablar-sin-cortar/audio-words/b2-listen-01.words.json
app/hablar-sin-cortar/audio-words/b2-listen-02.words.json
app/hablar-sin-cortar/audio-words/b2-rebuild-01.words.json
app/hablar-sin-cortar/audio-words/b2-repeat-01.words.json
app/hablar-sin-cortar/audio-words/b2-rhythm-01.words.json
app/hablar-sin-cortar/audio-words/b2-speak-01.words.json
app/hablar-sin-cortar/audio-words/c1-bank-boundary.words.json
app/hablar-sin-cortar/audio-words/c1-bank-listen.words.json
app/hablar-sin-cortar/audio-words/c1-boundary-01.words.json
app/hablar-sin-cortar/audio-words/c1-connect-01.words.json
app/hablar-sin-cortar/audio-words/c1-listen-01.words.json
app/hablar-sin-cortar/audio-words/c1-listen-02.words.json
app/hablar-sin-cortar/audio-words/c1-rebuild-01.words.json
app/hablar-sin-cortar/audio-words/c1-repeat-01.words.json
app/hablar-sin-cortar/audio-words/c1-rhythm-01.words.json
app/hablar-sin-cortar/audio-words/c1-speak-01.words.json
app/hablar-sin-cortar/audio-words/c2-bank-boundary.words.json
app/hablar-sin-cortar/audio-words/c2-bank-listen.words.json
app/hablar-sin-cortar/audio-words/c2-boundary-01.words.json
app/hablar-sin-cortar/audio-words/c2-connect-01.words.json
app/hablar-sin-cortar/audio-words/c2-listen-01.words.json
app/hablar-sin-cortar/audio-words/c2-listen-02.words.json
app/hablar-sin-cortar/audio-words/c2-rebuild-01.words.json
app/hablar-sin-cortar/audio-words/c2-repeat-01.words.json
app/hablar-sin-cortar/audio-words/c2-rhythm-01.words.json
app/hablar-sin-cortar/audio-words/c2-speak-01.words.json
app/hablar-sin-cortar/content.mjs
app/hablar-sin-cortar/levels.mjs
app/hablar-sin-cortar/levels/a2.mjs
app/hablar-sin-cortar/levels/b1.mjs
app/hablar-sin-cortar/levels/b2.mjs
app/hablar-sin-cortar/levels/c1.mjs
app/hablar-sin-cortar/levels/c2.mjs
app/hablar-sin-cortar/page.tsx
app/hablar-sin-cortar/schema.mjs
app/lesson-catalog.ts
app/phonetics-family/ActivityCard.tsx
app/phonetics-family/LevelPicker.tsx
app/phonetics-family/PhoneticsWorld.tsx
app/phonetics-family/navigation.ts
app/phonetics-family/phonetics-world.css
app/phonetics-family/state.d.mts
app/phonetics-family/state.mjs
app/phonetics-family/types.ts
docs/lessons/hablar-sin-cortar.md
docs/superpowers/plans/2026-10-01-hablar-sin-cortar.md
public/audio/hablar-sin-cortar/a1-bank-boundary.mp3
public/audio/hablar-sin-cortar/a1-bank-listen.mp3
public/audio/hablar-sin-cortar/a1-boundary-01.mp3
public/audio/hablar-sin-cortar/a1-connect-01.mp3
public/audio/hablar-sin-cortar/a1-listen-01.mp3
public/audio/hablar-sin-cortar/a1-listen-02.mp3
public/audio/hablar-sin-cortar/a1-rebuild-01.mp3
public/audio/hablar-sin-cortar/a1-repeat-01.mp3
public/audio/hablar-sin-cortar/a1-rhythm-01-chopped.mp3
public/audio/hablar-sin-cortar/a1-rhythm-01.mp3
public/audio/hablar-sin-cortar/a1-speak-01.mp3
public/audio/hablar-sin-cortar/a2-bank-boundary.mp3
public/audio/hablar-sin-cortar/a2-bank-listen.mp3
public/audio/hablar-sin-cortar/a2-boundary-01.mp3
public/audio/hablar-sin-cortar/a2-connect-01.mp3
public/audio/hablar-sin-cortar/a2-listen-01.mp3
public/audio/hablar-sin-cortar/a2-listen-02.mp3
public/audio/hablar-sin-cortar/a2-rebuild-01.mp3
public/audio/hablar-sin-cortar/a2-repeat-01.mp3
public/audio/hablar-sin-cortar/a2-rhythm-01-chopped.mp3
public/audio/hablar-sin-cortar/a2-rhythm-01.mp3
public/audio/hablar-sin-cortar/a2-speak-01.mp3
public/audio/hablar-sin-cortar/b1-bank-boundary.mp3
public/audio/hablar-sin-cortar/b1-bank-listen.mp3
public/audio/hablar-sin-cortar/b1-boundary-01.mp3
public/audio/hablar-sin-cortar/b1-connect-01.mp3
public/audio/hablar-sin-cortar/b1-listen-01.mp3
public/audio/hablar-sin-cortar/b1-listen-02.mp3
public/audio/hablar-sin-cortar/b1-rebuild-01.mp3
public/audio/hablar-sin-cortar/b1-repeat-01.mp3
public/audio/hablar-sin-cortar/b1-rhythm-01-chopped.mp3
public/audio/hablar-sin-cortar/b1-rhythm-01.mp3
public/audio/hablar-sin-cortar/b1-speak-01.mp3
public/audio/hablar-sin-cortar/b2-bank-boundary.mp3
public/audio/hablar-sin-cortar/b2-bank-listen.mp3
public/audio/hablar-sin-cortar/b2-boundary-01.mp3
public/audio/hablar-sin-cortar/b2-connect-01.mp3
public/audio/hablar-sin-cortar/b2-listen-01.mp3
public/audio/hablar-sin-cortar/b2-listen-02.mp3
public/audio/hablar-sin-cortar/b2-rebuild-01.mp3
public/audio/hablar-sin-cortar/b2-repeat-01.mp3
public/audio/hablar-sin-cortar/b2-rhythm-01-chopped.mp3
public/audio/hablar-sin-cortar/b2-rhythm-01.mp3
public/audio/hablar-sin-cortar/b2-speak-01.mp3
public/audio/hablar-sin-cortar/c1-bank-boundary.mp3
public/audio/hablar-sin-cortar/c1-bank-listen.mp3
public/audio/hablar-sin-cortar/c1-boundary-01.mp3
public/audio/hablar-sin-cortar/c1-connect-01.mp3
public/audio/hablar-sin-cortar/c1-listen-01.mp3
public/audio/hablar-sin-cortar/c1-listen-02.mp3
public/audio/hablar-sin-cortar/c1-rebuild-01.mp3
public/audio/hablar-sin-cortar/c1-repeat-01.mp3
public/audio/hablar-sin-cortar/c1-rhythm-01-chopped.mp3
public/audio/hablar-sin-cortar/c1-rhythm-01.mp3
public/audio/hablar-sin-cortar/c1-speak-01.mp3
public/audio/hablar-sin-cortar/c2-bank-boundary.mp3
public/audio/hablar-sin-cortar/c2-bank-listen.mp3
public/audio/hablar-sin-cortar/c2-boundary-01.mp3
public/audio/hablar-sin-cortar/c2-connect-01.mp3
public/audio/hablar-sin-cortar/c2-listen-01.mp3
public/audio/hablar-sin-cortar/c2-listen-02.mp3
public/audio/hablar-sin-cortar/c2-rebuild-01.mp3
public/audio/hablar-sin-cortar/c2-repeat-01.mp3
public/audio/hablar-sin-cortar/c2-rhythm-01-chopped.mp3
public/audio/hablar-sin-cortar/c2-rhythm-01.mp3
public/audio/hablar-sin-cortar/c2-speak-01.mp3
public/hablar-sin-cortar/mascot-speaking.webp
public/hablar-sin-cortar/studio.webp
scripts/generate-hablar-audio.py
tests/hablar-sin-cortar-assets.test.mjs
tests/hablar-sin-cortar-ui.test.mjs
tests/hablar-sin-cortar.test.mjs
tests/helpers/catalog-additions.mjs
tests/level-cleanup.test.mjs
tests/rendered-html.test.mjs
```
