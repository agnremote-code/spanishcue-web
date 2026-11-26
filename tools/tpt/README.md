# TPT export

Builds the TPT products listed in `content/tpt/resources.json` into `dist/tpt/` (git-ignored). Upload to TPT is manual.

```
node tools/tpt/export.mjs   # opens each source class (spanishcue.com or TPT_BASE_URL), prints teacher-guide.pdf + worksheet.pdf
node tools/tpt/covers.mjs   # cover.png 1000x750 + preview-1..3.png 800x600
node tools/tpt/pack.mjs     # terms.pdf, {slug}.zip (verified), dist/tpt/manifest.csv
```

`--only=slug1,slug2` works for export and covers. A source path that is not in the lesson index gives `status=missing`; nothing is invented. Pages are opened one at a time. No audio is bundled (Edge TTS voices have no commercial license).
