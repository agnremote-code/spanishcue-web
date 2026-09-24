# Authoring a conversation family

The route ledger (`app/lesson-catalog.ts`) preserves existing IDs, URLs and entitlement checks. The family catalog (`app/conversation-families/catalog.ts`) projects those records into one card per concept. Do not replace the route ledger with the deduplicated catalog: legacy routes still need server authorization.

## Shared world and authored variants

1. Keep one visual engine for the concept. Its map, scene components, images and mechanics belong to the shared engine.
2. Put pedagogical content in a separate module beside that engine. `ConversationLevelVariant<T>` permits the engine's existing activity type instead of forcing unrelated families into one template. `app/choose-conversation/variants.ts` is the complete typed example; country tracks use their existing geographic data structures.
3. Give each level its own communicative objectives, tasks, scaffolding, teacher notes and closing conversation. Add only levels with enough authored content for a roughly 45-minute selection. Never create variants by changing a badge or inserting a generic instruction before the same questions.
4. Wrap the shared engine with `ConversationFamily`. Pass its stable family ID, title, supported levels and route default. Render the selected variant into the same engine. Key disposable answer state by level. Preserve shared assets and any optional saved progress using family **and** level keys.
5. Register the seed ID(s) and actual supported levels. The manifest deliberately contains public summaries and content references, not complete question banks. Existing singleton routes are native seed adapters; extract their content when adding another level, not by copying their JSX.

```tsx
<ConversationFamily id="example" title="Example" levels={["A2", "B1"]} defaultLevel="A2">
  {level => <ExampleWorld key={level} variant={variants[level as "A2" | "B1"]} />}
</ConversationFamily>
```

The selected level lives in `?level=…`. The selector preserves other query parameters and the fragment, updates history without a document reload, listens for back/forward, and falls back to the route default for unsupported values. Opening an old level-specific route retains that route's historical default unless an explicit supported query overrides it. Switching levels starts that variant's disposable interaction state; persisted world decisions remain separated by level.

## Public versus PRO

- Do not import private variant modules from Library, ResourceCatalog, the public manifest, navigation helpers or other public client roots.
- A shared public renderer can receive private content as props only after authorization. For the two Conversation Worlds, the private `ConversationWorldFamily` owns the banks and the reusable `ConversationWorld` imports their types only.
- Keep an entire PRO family's protected variants PRO. Do not group a free sample with a paid seed. The USA A1 experience and the free USA atlas are intentionally separate.
- Every new lesson path must be covered by the route/access ledger before it becomes reachable. Query parameters cannot grant access.
- Build protection must still quarantine premium client chunks. Never add a family content host to `publicRoots` merely to resolve an asset error.

## Catalog and compatibility

Use `catalogLessons` for visible lists/counts and `lessons` for legacy ID/route lookup. Level-aware links use `conversationLessonHref`; the server remains authoritative for access. Keep old resource slugs in the raw slug map, resolve their canonical family, and omit query variants from the sitemap. Saved favorite/plan IDs are mapped to their family card on read; no database migration is needed.

## Verification

Run `npm test`, `npm run lint`, `npm run validate:artifact`, `npx tsc --noEmit` and `git diff --check`. The repository test runner includes schema/inventory, content separation, legacy SEO, unauthorized HTTP requests, forged identity headers, free samples and rendered engine coverage. Review responsive behavior and keyboard operation in an available browser. An unavailable browser is a verification limitation, not a passing visual check.
