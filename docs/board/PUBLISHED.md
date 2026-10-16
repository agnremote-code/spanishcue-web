# Publication log

Every change the board publishes to production that a learner or teacher can see: lessons, levels, repairs and SEO pages. Newest first. An entry is added **only after production verification**. A PR that merged but whose deploy wasn't verified is listed under "Pending verification", never as published.

Entry format:

```
## YYYY-MM-DD — <title> (<unit type: new world | new level | repair | SEO/page>)
- URL(s): https://spanishcue.com/...
- Level(s) / objectives: ...
- PR / merged SHA / production deploy run: ...
- Production smoke evidence: ...
- Concept file / LQG review file: ...
- Built by / reviewed by: ...
- Known limitations: ...
```

## Pending verification
_(none)_

## Published

## 2026-10-16 — SEO-001: /argento hreflang fix + `?lang=` regression guard (SEO/page)
- URL(s): https://spanishcue.com/argento
- Change: removed the invalid English hreflang that pointed at the 301-redirecting `/argento?lang=en`, so only the canonical remains. A new test in `tests/seo-architecture.test.mjs` scans `app/` and fails on any `?lang=` in a canonical, hreflang, sitemap or absolute site URL. The language-pair test now compares normalized paths.
- PR / merged SHA / deploy: PR #217 → `6c7379bc832f0e35c95dfd2ec42e776840e77ad8`. Staging run 38926800649 success; production run 38927285596 success.
- Production smoke evidence (2026-10-16): `curl -s https://spanishcue.com/argento` → `<link rel="canonical" href="https://spanishcue.com/argento"/>`, with no alternate links.
- Built by / reviewed by: Alejandro / Sofia (APPROVE on c771c4a; three optional notes applied in b8fbfc7).
- Known limitations: two local test failures, caused by missing ffmpeg on the dev machine, passed in CI. Search impact won't be visible in Search Console for days to weeks.
