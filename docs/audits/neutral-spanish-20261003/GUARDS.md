# Neutral Spanish and English-copy guards

The language guard uses the installed TypeScript parser rather than scanning raw code. It reads runtime string literals, template literals, JSX text and accessible attributes, JSON values, and public plain text. Identifiers, comments, type annotations, imports and technical JSX attributes do not become copy. Complete URL/path values and machine identifiers are excluded from the Spanish token check.

## Commands and API

- `node scripts/neutral-spanish.mjs`: reports unresolved text with source path, line, token, and classification; fails if any remain.
- `node scripts/neutral-spanish.mjs --json`: machine-readable findings, with the same exit status.
- `node scripts/check-english-copy.mjs`: compares English against base `43e4b3eb1dc76031481d2406a62b9210f0dd97e2`; fails on changes, deletions or additions.
- `node --test tests/neutral-spanish.test.mjs tests/english-copy.test.mjs`: focused regression tests.

The reusable module exports `extractCopy(source, path)`, `scanSource(source, path, registry)`, `scanRepository(root, registry)`, `sourceFiles(root)` and `validateRegistry(registry)`. The English module exports `compareEnglishCopy(beforeFiles, afterFiles)` for Maps of path to source and `checkEnglishCopy(root, base)`.

Covered roots: `app`, `components`, `lib`, `content`, `data`, `public`, `server`, and `worker`, where present. Source extensions are TS/TSX/JS/JSX/MJS/CJS variants, JSON, and plain text. Archives and audit documentation are not served product roots and are not scanned.

## Language classification

English properties/dictionaries (`en`, `english`, `*En`, `*_en`), `t(es, en)`, locally declared factories whose first parameters are `es, en`, explicit language ternaries and recognized boolean aliases are classified separately. Typed `Pair` arrays and locally declared `Pair` fields preserve the second tuple element as English. Dedicated English paths, the English `app/guides` collection and `app/resources/[slug]/page.tsx` public template, and the English `support` field in Autoestudio curriculum modules are protected as English. Ordinary two-element arrays receive no automatic exemption.

The scanner uses Unicode letter/mark tokenization, so `vosotros`, `nuevos`, and larger accented words do not match `vos`. The explicit vocabulary covers voseo pronouns, present forms, imperatives and common attached pronouns. A finite imperative lexicon expands object/reflexive pronoun families, including `corregime`, `reescribilos`, `defendelas`, `mantenelos`, `contámelo` and `explicánoslo`. It does not infer arbitrary accented endings. Non-diagnostic generated homographs (`animales`, `generales`, `formales`, `hablase`, and English `create`/`generate`/`animate`/`participate`/`unite`) are avoided; contextual human review still covers ambiguous forms. It is a regression guard, not a complete Spanish morphology engine; contextual audit remains necessary.

Potential preterites such as `escribí`, `seguí`, `elegí`, `sentí`, `compartí`, and `abrí`, `resumí` and `corregí`, plus contextual `dale`, produce `context-review` findings. They are not blindly rewritten as commands. Correct first-person past examples receive a reviewed `neutral-context` exception.

## Exact exception registry

`docs/audits/neutral-spanish-20261003/exemptions.json` has this shape:

```json
{
  "version": 1,
  "exemptions": [
    {
      "path": "app/example/data.ts",
      "text": "Vos sos de Buenos Aires",
      "category": "regional-pedagogy",
      "reason": "Explicit comparison of Argentine voseo with neutral tú."
    }
  ]
}
```

Allowed categories are `regional-pedagogy`, `authentic-transcript`, and `neutral-context`. Every entry requires an exact path, exact decoded text, category, and reason. Wildcard paths and whole-file exceptions are rejected. A lesson's regional example never exempts its buttons, hints or surrounding instructions. Changing an exempt string forces review again.

## English verification

The English guard inventories the baseline with `git ls-tree`, so deleted files remain checked. Current files are separately inventoried to catch added English copy, including newly created files. Values are compared as multisets per file, preserving occurrence counts and allowing harmless object restructuring. Templates include their interpolation expressions. A changed value reports its removed and added forms. Moving copy across files requires explicit review rather than silently passing.

## Verification checkpoint

The 20 focused tests passed, including negative fixtures for Unicode boundaries, JSX, templates, JSON, typed bilingual tuples, exact exception scope, first-person past review, standalone English dictionaries, English additions/deletions and Autoestudio support. The expanded baseline check found 10,882 English strings across 126 files with zero differences. This is a checkpoint result; rerun after all content edits.

An intermediate concurrent-work scan found 967 unresolved language tokens before the coordinator's final registry pass. This is not a final product pass. The full project suite, final zero-finding scan and delivery verification are performed by the coordinator.
