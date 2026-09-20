# Dedicated migration release

The automatic release controller stops if the full diff from the last healthy source includes drizzle/**, db/schema.ts, .openai/hosting.json, wrangler/vite/drizzle configuration, Worker binding declarations, the build/finalization/artifact-validation scripts, or migration/D1 scripts and workflows. Renames and deletions count. A blocked change must never be relabeled as ordinary work.

1. Open a separate migration release PR with exact base/candidate SHAs, schema diff, forward migration SQL, compatibility of both old and new Workers, data impact, backup/export plan, and recovery plan. Get explicit authorization for the proposed production database operation.
2. Use the same release-state lock as ordinary releases; wait for the merge lock to clear. Inspect the actual production migration ledger and bindings read-only. Verify backup/recovery before any database operation.
3. Validate against a disposable local database with representative existing schema/data. Prefer expand/contract changes that preserve the previous Worker.
4. Apply only the authorized forward procedure, recording results. Publish the exact merged SHA through Sites. Run production smoke and relevant schema-specific checks.
5. A failed release does not authorize SQL rollback, data deletion or automatic schema repair. Restore a previous Worker only if its compatibility with the actual schema is established; otherwise stop and escalate with the deployment identifiers.

The v161 reconciliation is a source-only recovery: its migration 0008 and schema are copied from an already deployed version. No migration is applied during reconciliation. The initial release baseline must verify byte equality for all migration-sensitive files against v161 before enabling releases.
