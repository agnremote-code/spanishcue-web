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

## 2026-10-17 — PERF-001: ~1 s TTFB fixed on every Worker-served URL (repair)
- URL(s): all Worker-served URLs on https://spanishcue.com (pages, `/robots.txt`, `/sitemap.xml`, APIs, redirects).
- Change: the 120 paid client chunks (10.5 MB) moved out of the Worker bundle into AES-GCM-encrypted static blobs under `/_protected-client/`. They are served through the premium-audio decrypt path, after the same full-access check. Isolate heap went from 133.7 to 95.3 MiB (local workerd), below Cloudflare's 128 MB limit, so isolates are reused instead of being replaced after every request. Evidence: [perf-001-notes.md](perf-001-notes.md).
- PR / merged SHA / deploy: PR #221 → `e3c42f18efef335e6549ceb5afc1e61a9e644b78`. CI + Auto Merge 38936733505 success; staging run 38938666820 success; production run 38938998017 success.
- Production smoke evidence (2026-10-17 17:24 UTC, ×3): all 10 smoke URLs gave their expected status. The PRO route `/hospital-san-casi-vivo` gave 302 to `/acceso`, and `/api/progress` gave 401. Raw TTFB was 0.03–0.15 s (before: 0.92–2.97 s). The anonymous protected chunk `/assets/OutputPass-WUcxeEwl.js` gave 403 `private, no-store`, and a direct `/_protected-client/*.bin` request gave 404.
- Server time (TTFB − TLS, median of 10): spanishcue.com `/favicon.ico` 1.040 → 0.011 s and `/robots.txt` 1.085 → 0.012 s; staging workers.dev `/favicon.ico` 0.917 → 0.014 s and `/robots.txt` 0.922 → 0.012 s. The facilitator's independent check measured 12 ms and 7–9 ms.
- Built by / reviewed by: Sofia / Alejandro (CHANGES on e81a7ee; APPROVE on 4badfa1).
- Known limitations: authorized paid-chunk delivery cannot be smoked without a paid session (same decrypt path as premium audio; covered by a local decrypt test). Both vantage points are on the same client network, on different hostnames. Two local test files need ffmpeg, which the dev machine lacks; they passed in CI.

## 2026-10-16 — SEO-001: /argento hreflang fix + `?lang=` regression guard (SEO/page)
- URL(s): https://spanishcue.com/argento
- Change: removed the invalid English hreflang that pointed at the 301-redirecting `/argento?lang=en`, so only the canonical remains. A new test in `tests/seo-architecture.test.mjs` scans `app/` and fails on any `?lang=` in a canonical, hreflang, sitemap or absolute site URL. The language-pair test now compares normalized paths.
- PR / merged SHA / deploy: PR #217 → `6c7379bc832f0e35c95dfd2ec42e776840e77ad8`. Staging run 38926800649 success; production run 38927285596 success.
- Production smoke evidence (2026-10-16): `curl -s https://spanishcue.com/argento` → `<link rel="canonical" href="https://spanishcue.com/argento"/>`, with no alternate links.
- Built by / reviewed by: Alejandro / Sofia (APPROVE on c771c4a; three optional notes applied in b8fbfc7).
- Known limitations: two local test failures, caused by missing ffmpeg on the dev machine, passed in CI. Search impact won't be visible in Search Console for days to weeks.
