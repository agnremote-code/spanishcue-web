# Fábrica de shorts (YouTube Shorts)

Each Short is a 25–30 s micro-lesson built from content that already lives on a free page,
with that page's URL on screen and a UTM link in the description.

```
pip install edge-tts
TTS_CA_BUNDLE=/root/.ccr/ca-bundle.crt \   # only behind the cloud container's TLS proxy
node scripts/shorts/build.mjs --out build/shorts --clips <dir of 1920x1080 3D-class clips> [--only id,id]
```

- Series: `ser-estar.mjs` (18 adjectives that change meaning, sentences from `app/ser-o-estar/contenido.ts`).
  Add a series as another module that returns the same shape and register it in `build.mjs`.
- Voices: only native Edge voices, es-MX Dalia (female) and Jorge (male); voice gender follows the
  sentence. No English TTS: English is on-screen text only.
- Background: muted, blurred clips of our own 3D classes (`/mnt/project-files/video-promo-v2/clips-3d-hd`).
- Output: `<out>/<id>.mp4` (1080x1920, H.264, ~5 MB, under the 10 MB browser-upload cap) and
  `<out>/manifest.json` (title, description with UTM, tags).
- Hosting for the uploader: MP4s go to the orphan branch `claude/shorts-media` (never merged) and are
  fetched from raw.githubusercontent.com by the YouTube Studio upload step.
- UTM: `utm_source=youtube&utm_medium=shorts&utm_campaign=shorts-<series>&utm_content=<id>`.
