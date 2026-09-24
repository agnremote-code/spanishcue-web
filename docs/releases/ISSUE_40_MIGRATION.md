# Issue 40: additive purchase-claim migration handoff

This source change adds `drizzle/0009_glossy_mariko_yashida.sql`. It creates one empty `billing_purchase_claims` table and three indexes. It makes no changes to existing tables, rows, prices, provider resources, environment variables, or bindings. The previous Worker ignores the new table. The new checkout Worker requires it, so apply the migration through `MIGRATION_RELEASE.md` **before** publishing that Worker.

Local validation: `npm test` applies all migrations to a disposable D1 database. `tests/purchase-claims.test.mjs` also seeds an existing user, PayPal subscription, completed payment and PRO grant under migration 0008, applies 0009 and verifies that those records remain intact.

Production release is intentionally outside this PR. At release time, inspect the real production D1 migration ledger and binding read-only; acquire the established release-state lock after the merge lock is idle; export and verify a recoverable database backup; obtain explicit authorization for applying only the forward SQL in 0009; record its ledger result and schema; then publish the exact merged source SHA via Sites and run smoke checks. If migration or publication fails, stop and use the recovery procedure in `MIGRATION_RELEASE.md`. Do not automatically roll back schema or rewrite paid records.
