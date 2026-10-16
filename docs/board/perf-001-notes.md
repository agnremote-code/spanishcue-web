# PERF-001: ~1 s TTFB on every Worker-served URL

Owner: Sofia (implementer). Reviewer: Alejandro. Date: 2026-10-16. Base: main `afe203f`.

## Summary

- **Symptom (VERIFIED):** every Worker invocation costs about 1 s. This includes a 308 that runs no I/O, edge-cache HITs, `/robots.txt`, and staging. A tiny Worker in the same Cloudflare location answers in about 37 ms.
- **Root cause.** VERIFIED locally: the Worker isolate's heap is **133.7 MiB right after startup** and 144 MiB after a few page renders. That is over Cloudflare's **128 MB per-isolate memory limit**. HYPOTHESIS for production, to be confirmed only by the post-deploy result: Cloudflare's limits page says "When an isolate exceeds 128 MB, the Workers runtime lets in-flight requests complete and creates a new isolate for subsequent requests." So every request lands on a freshly started isolate, and every request pays a full cold start of a 42 MB bundle. That is why warm, repeated requests on one connection stay at about 1 s.
- **Largest single cause:** `dist/server/private-client-assets.js`, which holds the 120 paid client chunks (10.5 MB, non-ASCII) as string literals inside the Worker bundle. The runtime keeps every uploaded module resident whether or not it is imported, and this one module costs about 38 MiB of heap.
- **Fix:** paid chunks become AES-GCM-encrypted static blobs under `/_protected-client/`. This is the mechanism premium audio has used in production all along. The Worker keeps only 35 KB of decryption records. After the full-access check, the Worker decrypts the chunk with the existing `servePrivateMedia` path. Isolate heap drops to **95.3 MiB at startup** and about 103 MiB after renders, below the limit.

## Rejected hypothesis: global-scope parse time

The first theory was that parsing about 10 MB in global scope ran against the 1 s startup limit. The evidence does not support it.

| Build | `wrangler check startup`, non-idle CPU | Isolate heap at startup (workerd) |
|---|---|---|
| main `afe203f` | 103 ms | 133.7 MiB |
| lazy `import()` of the chunk bodies (first draft, discarded) | 128 ms | 133.5 MiB |
| this PR (encrypted static blobs) | 59 ms | 95.3 MiB |

Startup CPU is about 0.1 s, nowhere near 1 s. A lazy dynamic import changes nothing in workerd, because the module is still uploaded and stays resident. The draft was therefore discarded.

## Evidence

### Production, before the fix (2026-10-16, client in Vientiane, Cloudflare colo VTE)

**Server time** is `time_starttransfer − time_appconnect`: the time after TLS completes, which is what the Worker controls. It was measured with 10 sequential `curl -s -o /dev/null -w '%{time_connect} %{time_appconnect} %{time_starttransfer}'` requests per URL before the fix:

| URL | Median server time | Median raw TTFB | Server range |
|---|---|---|---|
| `/favicon.ico` (308, no I/O) | 0.963 s | 0.985 s | 0.867–1.081 s |
| `/robots.txt` | 1.029 s | 1.056 s | 0.878–1.115 s |
| staging `…workers.dev/favicon.ico` | 0.961 s | 0.990 s | 0.900–1.025 s |
| `/cdn-cgi/trace` (edge only) | 0.007 s | 0.028 s | 0.006–0.010 s |
| `/assets/*.css` (asset layer) | 0.014 s | 0.032 s | 0.012–0.016 s |
| control Worker `workers.cloudflare.com/cf.json` | 0.012 s | 0.035 s | 0.009–0.016 s |

**Measurement artifact.** Some connections pay a separate ~+1.0 s in the TCP connect phase (a SYN retransmit). It hits `/cdn-cgi/trace` and `/assets/*` too, so it is not the Worker. Alejandro saw it on about a third of connections; there were none in the 10-sample runs above. Raw-TTFB samples of 1.9–2.9 s below mix both effects, so only server time is used for the pass/fail criteria.

Earlier raw `time_starttransfer` samples:

| URL | TTFB samples |
|---|---|
| `/` | 1.31, 1.25, 1.20 s |
| `/robots.txt` | 0.98, 1.04, 1.93 s |
| `/spanish-grammar-lessons` (edge-cache HIT, `x-spanishcue-cache: HIT`) | 1.93, 1.84, 1.03 s; later 2.08, 2.54, 2.88 s |
| `/favicon.ico` (a 308 returned before any I/O) | 15 sequential requests: 0.92–1.11 s |
| `/robots.txt` ×5 reusing one connection | 2.42, 1.91, 2.05, 1.19, 1.14 s |
| `/cdn-cgi/trace` (edge only, no Worker) | 0.027–0.039 s |
| `https://workers.cloudflare.com/cf.json` (control: a small Worker, colo VTE) | 0.035–0.039 s |
| `/assets/*.css` (served by the asset layer, not the Worker) | mostly 0.034–0.072 s |
| staging `spanishcue-staging.agnremote.workers.dev/favicon.ico` | 0.91–1.16 s |

Network, the colo and Workers in general are fast (server time ~10 ms). Only invocations of *our* Worker are slow, by a constant of about 1 s, whatever the code path.

### Local, same runtime (wrangler 4.92 / workerd)

- Warm request time is 3–37 ms for `/`, `/robots.txt`, `/spanish-grammar-lessons`, `/favicon.ico` and a protected chunk, identical before and after the fix. Our request path is not where the second goes.
- Heap was read through the DevTools protocol (`Runtime.getHeapUsage`) after a fresh start, then after 15 page requests. There were three runs per build, and all of them agree within 0.3 MiB:
  - main: 133.7 → 144.3 MiB
  - fix: 95.3 → 101.8–103.7 MiB
  - Control: main with only `private-client-assets.js` emptied gives 95.2 → 103.5 MiB. That isolates the module's cost.
- `wrangler deploy --dry-run`: total upload 42,827 KiB (gzip 10,747) before, 32,604 KiB (gzip 7,721) after.

### What is inferred, not observed (HYPOTHESIS)

We cannot read production isolate memory. The dashboard's Memory Usage chart and Workers Logs need account access that this session does not have. The production mechanism, one new isolate per request, follows from the documented limit plus the measured heap. It would be confirmed by the TTFB after deploy. The owner can also confirm it in Workers → spanishcue → Metrics → Memory usage.

## Security and behaviour

- Gating is unchanged. The entry still runs `hasFullLibraryAccess` before serving any protected path: 403 without full access, and 405 for other methods. The FREE/PRO lesson gate in `worker/index.ts` is untouched.
- The blobs use the same key handling as premium audio: one per-build random key, held only inside the Worker bundle. `/_protected-client/*` is required in `run_worker_first`, and a direct request gets 404 from the app.
- Each paid chunk is verified by decryption at build time. `tests/worker-startup.test.mjs` checks every record against its blob and decrypts every chunk through the Worker's own `servePrivateMedia`, comparing SHA-256. It also enforces a 36 MiB bundle budget, so the bundle cannot quietly grow back over the limit.
- Behaviour change for authorized chunk responses: they now also carry `ETag`, `Accept-Ranges` and `Content-Length`, and use `Referrer-Policy: strict-origin-when-cross-origin`. `Content-Type` stays `text/javascript; charset=utf-8` and `Cache-Control` stays `private, no-store`.

## Risks

1. Production heap accounting may differ from local workerd. If the isolate is still over 128 MB in production, TTFB will not improve. The change does no harm in that case, but the next step would be shrinking `app-worker.js` (13.8 MB) and `ssr/` (23 MB).
2. Authorized delivery of paid chunks can only be exercised with a paid session, and this session has none. It uses the same decrypt path as premium audio, which works in production today, and it is covered by the local decrypt test.
3. Headroom is about 25 MiB, and it is sensitive to transient memory: each authorized chunk request briefly holds its ciphertext and plaintext buffers. That is fine at current traffic. Future content added to the Worker bundle, rather than to static assets, will eat into it. The bundle-budget test is the guard.

## Release plan (pass/fail criteria fixed before merge)

1. **Pre-merge.** Check that the pipeline holds only one PR: no other ready board PR (`gh pr list`), no CI + Auto Merge / Deploy Staging / Deploy Production run in progress (`gh run list`), and `refs/heads/automation/merge-lock` absent (404). PERF-001 goes first, and #220 waits.
2. **Post-deploy smoke.** Run the standard set (`board/smoke.sh`). Also: an anonymous GET of one protected chunk must return 403 `no-store`, and a direct GET of one `/_protected-client/*.bin` blob must not return 200 and must not return the plaintext.
3. **Success.** Median server time over 10 sequential samples for `/favicon.ico` and `/robots.txt` is **< 300 ms** from 2 vantage points: spanishcue.com from VTE, and the staging `workers.dev` hostname, which serves the same build after Deploy Staging. A second client network is unavailable to this session. The `workers.dev` comparison is the second vantage the reviewer accepted.
4. **Outcome rule.**
   - If the smoke regresses, open a revert PR immediately through the normal pipeline (no bypass), and do no further debugging on production.
   - If the smoke passes but TTFB does not improve, KEEP the change (it is neutral and smaller), record the HYPOTHESIS as REJECTED, and move to PERF-001 phase 2 (`app-worker.js` / `ssr/`).
5. **Paid-path blind spot.** An authorized chunk cannot be smoked without a paid session. Any paid-user breakage signal, such as lesson_reports or error logs mentioning chunk or module load failures, triggers the revert.
