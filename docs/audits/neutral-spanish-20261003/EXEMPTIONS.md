# Reviewed exact exceptions

Canonical registry: `exemptions.json`. It combines reviewed fragments for global, grammar, conversation, regional lessons, Autoestudio and audio. Every entry is an exact source path + decoded string with category and reason; no wildcard file or whole-lesson exemption exists.

- Regional teaching: ARGENTO/roleplays, Buenos Aires local dialogue, explicit tú/vos contrasts and vocabulary/phonetic variation.
- Authentic regional transcripts: speaker-variety models retained with existing audio. Ordinary voseo leaks in nonregional voices were regenerated (see AUDIO.md).
- Neutral context: first-person preterites (elegí, seguí, pedí, etc.), vosotros homographs (vivís), names such as Tomás, intentional wrong answers, da + le, ordinary nouns and technical identifiers.

Regional content never exempts surrounding UI. English is classified separately by the parser and preserved by the baseline comparison. Fragment reports document the reviewed pedagogical context and audio references. The registry is a regression aid, not a substitute for contextual linguistic review.
