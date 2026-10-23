# One level per grammar class

Base: e92ab948a8e3a6ef577d240421b3aeed1229377e.
User requirement: each grammar class has one level. Conversation is outside this change.

The 240-unit curriculum and the actual guided lessons already specify one CEFR level per class. Seven catalog entries retain old multi-level reference metadata; the initial class also advertises A1 instead of its actual A0 curriculum level.

- [ ] Add regression checks for every grammar catalog entry matching its curriculum/live lesson and having a singleton level array and label. Watch them fail.
- [ ] Normalize grammar discovery metadata in `app/grammar-classroom/catalog.ts` from the existing curriculum. Preserve IDs, URLs, bodies, prices, access and references.
- [ ] Make grammar filters and available levels use only the class's primary level, even if a stale source supplies reference ranges. Keep other categories' multi-level behavior unchanged.
- [ ] Run grammar/course/filter/SEO checks, compare non-grammar catalog output byte-for-byte with the base, and run required build/lint checks.
- [ ] Independent review, non-draft PR, automatic CI merge, existing staging/production deployment and smoke. No database operation is required for this task.
