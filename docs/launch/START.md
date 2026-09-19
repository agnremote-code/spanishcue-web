# SpanishCue Final Recovery

- Canonical repository: `agnremote-code/spanishcue-web`.
- Verified GitHub `main`: `ba8c09ece88f1cfc97c985849b506ff28dc40935`.
- Recovery branch: `chatgpt/final-recovery`.
- Recovered integrated source: `b945cacc65990cede4b1213f8cac1f624c0389e3` (`chatgpt/release`).
- Preserved PR #4 source: `dc952533f67e4747943c913bc985825ae0d656a3`; its hardened follow-up is already represented in the recovery branch.
- Recovered feature refs include billing, students, landings, SEO/measurement, boards and paused Ads documentation. Histories rooted at the former Sites line were transferred through normal commits; no unrelated history was force-merged.
- Current migration chain: `drizzle/0000` through `drizzle/0007`, with one ordered journal and no duplicate migration IDs.
- PayPal Live checkout remains disabled. No Live charge or Ads activation is authorized.
- Existing Sites project: `appgprj_6a83ba10b0c481919060fc089d581233`.

Final sequence: verify the recovered tree, fix only integration regressions, run the complete release gates once, push `chatgpt/final-recovery`, open a PR to `main`, merge only if protections allow, then publish the verified commit through the existing Sites project.
