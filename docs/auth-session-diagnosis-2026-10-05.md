# Email/password session investigation — 2026-10-05

Base: `86d56e62296327d5565a792bae6dbcbbdf22f55a` (current main and
successful production run `37285092394` at the start of this investigation).
No overlapping open PR existed at the initial check. This continues the
Autoestudio investigation; no curriculum or student data was changed.

## Confirmed application defects

1. A persisted Firebase user could restore `__session` on `/ingresar`, but
   `syncFirebaseSession` explicitly suppressed its reload there. Since
   `/cuenta` is server rendered and redirects before client restoration, a
   returning user whose server cookie expired could remain on the login form
   despite a successful restoration POST. A new regression failed on this
   exact branch before the fix.
2. The token listener also submitted a session request during an explicit
   AuthForm sign-in. AuthForm already owns that operation, including verified
   email and post-payment routing. It now owns subsequent login-page token
   events; only the initial persisted-user event restores that page.
3. A successful session POST was treated as sufficient to navigate. The
   client never checked that the next request actually carried an accepted
   cookie. A dropped/rejected cookie could therefore look like another login
   failure. Both explicit login and restored anonymous renders now confirm
   the cookie through GET `/api/auth/session` before navigation/reload.

The GET endpoint uses the same Firebase cookie verification helper as the
Worker. It returns only `{authenticated: boolean}`, never account data or a
token, sets `private, no-store`, and neither creates nor clears cookies.
Unverified, disabled, invalid and unreachable identities fail closed.

## Chain inspected

| Boundary | Current implementation / evidence |
| --- | --- |
| Persistence | AuthForm awaits `setPersistence(browserLocalPersistence)` before email/password. A failure maps to `auth/web-storage-unsupported`. No browser storage contents were extracted. |
| Email/password | `signInWithEmailAndPassword`, not a Google popup. The configured Firebase project is `chespanish-32645`. |
| Firebase identity → token | Verified-email check followed by `getIdToken(true)`. New diagnostics distinguish `credentials` from `id-token`. |
| Token → backend | Same-origin POST `/api/auth/session`; exact HTTP status is now retained in a safe `session-post` diagnostic. |
| Backend verification | `verifyFirebaseIdToken` uses Firebase `accounts:lookup`. Failed lookup/network currently returns null and POST rejects with 401; no claim is made that every 401 proves invalid credentials. |
| Cookie creation | `__session`, host-only, Path=/, HttpOnly, Secure, SameSite=Lax, Max-Age=3300. It contains the verified Firebase ID token; it is not an Admin SDK long-lived session cookie. These attributes and lifetime are unchanged. |
| Subsequent request | The new GET probe verifies the cookie server-side. A missing/rejected cookie stops navigation with `session-cookie`; no reload loop and no fake identity. |
| Worker → `/cuenta` | Worker removes supplied identity headers, verifies the cookie, resolves account access, recreates headers, then `signedInFromHeaders()` gates the account page. No gate was relaxed. |
| Firebase Admin | `server/firebase-admin.ts` serves verification delivery; it is not the email/password sign-in or cookie-verification path. |

## Historical Cloud Browser evidence and hard limits

Observed in the existing browser after the user's secure email/password
submissions: the rendered network-error message and a real `/cuenta` →
`/ingresar?modo=entrar&returnTo=%2Fcuenta` redirect. The former maps in the
inspected application to a code containing `network-request-failed`.
The Firebase SDK maps transport, timeout and certain response-parsing failures
to that code. The rendered message alone does not identify the failed HTTP
request or prove that password sign-in completed.

The browser runtime refused console retrieval with:
`Browser observation is unavailable for a document containing native credentials`.
Following the documented canonical-page navigation recovery, console retrieval
remained blocked. No browser credentials, cookies, tokens, localStorage,
IndexedDB, underlying network transport, or hidden application state were
extracted. No further credentials were requested in this investigation.

Consequently the historical Firebase HTTP status/body, token issuance,
session POST execution and cookie before/after values remain **unobserved**.
No evidence establishes an exclusive Cloud Browser domain block, storage loss,
third-party resource failure, or cookie-loss mechanism. The application recovery
defect is reproducible independently; it is **not proof of the cause of the
earlier Firebase network failure**.

An independent HTTP client in the execution environment received `403`,
`server: cloudflare`, body `error code: 1010` from SpanishCue. This demonstrates
a restriction on that client, not the Firebase request in Cloud Browser.
No fingerprint/network workaround was attempted. Production verification uses
the official release workflow and its smoke checks.

No CSP is set by `worker/index.ts`. No production CSP/third-party block was
proven from the restricted client's response. The authDomain was not changed
on speculation. Host persistence is origin-scoped, so a session in a different
browser profile is not evidence of a session in this one.

## Diagnostics and verification

The login UI and console now retain only an allowlisted error code, operation
stage and HTTP status where available. Firebase messages/customData, raw
responses, email, password and tokens are discarded from diagnostics.
Existing English copy is preserved by the language guard.

Regression coverage includes restored login navigation, missing-cookie loop
prevention, token-event ownership, token versus session transport failures,
HTTP rejection/retry limits, mandatory email verification, payment return
routing, forged headers, disabled users, and a no-store anonymous status check
in the official production smoke. All identity fixtures run locally only.

Release-specific test totals, merged SHA and deployment runs are recorded in
the PR after verification. The genuine production Teacher Share Pass flow
must not be reported complete until a real teacher session is observed.

References: Firebase [persistence](https://firebase.google.com/docs/auth/web/auth-state-persistence)
and [REST authentication](https://firebase.google.com/docs/reference/rest/auth),
plus the installed Firebase SDK's `_performFetchWithErrorHandling` implementation.
