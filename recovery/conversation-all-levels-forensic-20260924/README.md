# Emergency forensic recovery, 2026-09-24

This branch preserves surviving artifacts from the deleted worktree `/workspace/scratch/8fa7e1318252/spanishcue-web`. It is not an integrated or deployable lesson expansion. Do not merge or deploy it.

`raw-tsx-cache/` contains exact surviving cache bytes. `exact-source-snapshots/` contains only literal UTF-8 `sourcesContent` extracted from source maps. Multiple revisions are retained separately; none were reconstructed or rewritten. `cache-provenance.json` records the original locations, hashes, and extracted paths. Compiled-only artifacts remain in their raw cache files and are not represented as recovered TypeScript source.

Base commit `8c86c78a7f6d2408b9d6eebf0247f34056d363ae` preserves the three already-known thumbnails and has parent `c18c90d0a7119b66fbce195adfc04f55cc527e00`. The base was read from the surviving clone; no changes were made to that clone or to main.
