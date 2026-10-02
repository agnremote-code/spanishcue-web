# Autoestudio dedicated execution — 2026-10-02

Base / feature merged SHA: `3ca4d076d10293594099c8932364e1bb7003906a` (PR #96).
The owner explicitly replied **“Autorizo TODO”** at 2026-10-02 12:47 +07
to the concrete production command and SQL hash recorded in PR #96.

This follow-up adds only the dedicated migration runner. It does not change
0010, 0011, application code, billing, authentication, or the canonical publisher.
The execution trigger is a push on this one operation's own branch, not a main
push or ordinary deployment. It waits until its code has been merged and the
merge lock is absent. Production and staging use their existing protected
GitHub environments and respective tokens/concurrency groups. Existing gates
and environment approvals remain in force.

The sole production database mutation is:
`npx wrangler d1 execute spanishcue-production --remote --file=drizzle/0011_autoestudio_share.sql`.
This is the verified name of UUID `343ac454-a056-4c40-a893-f8be572665a6`;
the live binding, immutable UUID and name are checked before execution.
SHA-256: `4a040f541101ea47766b1403ad933accd8cc1afb73b4c8dec2f04d30118ca51d`.
The same unchanged 0011 is prepared separately on the isolated staging binding
`23fe3c11-85f7-48e1-9dd0-d508893625c9` as part of the requested staging release.

Before each operation: real binding and canonical reports schema, ledger,
absent 0011, native encrypted provider export and recovery bookmark, disposable
restore, FK/integrity and unchanged-existing-data rehearsal. The backup must
be under five minutes old. Raw customer data and signed export URL never leave
runner memory/provider recovery storage. Only sanitized metadata is retained.

Before SQL: independent server-only signing secret initialization if absent,
using an undeployed secret-only provider version (never deploy an old failed
application version to add a secret). Presence must verify before SQL.
After the operation: exact schema readback, unchanged preexisting schema and
ledger. Existing secrets are never rotated. No blanket migration, retries of SQL,
ledger repair, deletion or database rollback. Old Worker is compatible with
the additive schema. D1 restoration would require a separate authorization.

Finally retry the official staging run for the merged release SHA. It owns
staging smoke and automatic promotion through Deploy Production (Cloudflare,
owner-authorized), mode release. This runner never uploads application code.

Verification ledger: policy tests exercise exact command, wrong hash/approval,
binding isolation, stale backup, reports mismatch, restore failure and repeat
execution refusal. Full suite, lint, typecheck and artifact checks precede push.

Independent review: fixed three important findings before remote execution:
secret initialization now precedes SQL; absent/unrecognized ledger refuses SQL;
only explicit HTTP 404 means a free merge lock (403/429/5xx fail closed), and
controller state is rechecked under the protected deployment concurrency group.

First execution reconciliation: run 36971793520 prepared the secret without a
traffic change and passed export/restore. Wrangler 4.92.0 rejected the UUID as
a database **name** before importing or executing any SQL. Its installed
`getDatabaseByNameOrBinding` implementation accepts a binding or name, not UUID.
The invocation now uses the already verified database name for the same exact
UUID and unchanged SQL/hash. This is a CLI resolution correction, not a new
database operation or a SQL retry. Fresh absent-schema/export preflight is
required again. Policy regression tests failed with the UUID and pass with the
verified name; no other execution logic or application behavior changed.
