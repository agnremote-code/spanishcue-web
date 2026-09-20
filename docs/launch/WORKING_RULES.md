# SpanishCue Final Recovery Rules

- Work only on `chatgpt/final-recovery`; do not rewrite or force-merge old histories.
- Preserve working code and recover by tree/diff, not by assuming a shared ancestor.
- Keep Firebase authentication server-verified and D1 authorization owner-scoped.
- D1 alone decides PRO. Never trust browser flags, query parameters or callback payloads.
- Keep PayPal Sandbox and Live isolated. Live checkout stays disabled until separately verified.
- Webhooks and conversion events must remain idempotent. Only the first server-confirmed purchase may emit the purchase conversion.
- Keep student records private to their authenticated teacher, including reads, writes, exports and history.
- Use the existing lesson catalog for boards. Do not create a second catalog.
- Analytics requires consent. Ads artifacts remain paused documentation only.
- Do not change DNS, migrate hosting, charge Live PayPal, activate Ads or perform destructive production actions.
- Fix only integration-caused failures. Run tests, TypeScript, lint, build and artifact validation before push or deployment.
- Publish only the exact verified commit through existing Sites project `appgprj_6a83ba10b0c481919060fc089d581233`.
