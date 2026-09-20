# v161 recovery evidence

Production: v161, saved version appgprj_6a83ba10b0c481919060fc089d581233~appgver_352bdaa65914819183acb184e0efb9f8, deployment appgdep_6aafcfd6a1648191aa7ce0aa8309af4e, source c49bd604aef109324f0bb7181182603322598e11.

Original GitHub main: 7b937f76ddb4e3db55c776a048549cfd87085663. Production had 44 changed files and 24 additional files. Five GitHub-only automation files were preserved, plus its smoke:production package command.

PR #17 restored all 759 production tracked files, with no runtime edits. Reconciled tree: b794ede4ef45a1ba7ca3677166c59434b7162aa7. CI automatically merged it as 8dab48bf84c86b9924c4408c181731898743f6f3. The only differences from v161 are GitHub automation files and the additional package script. All migration-sensitive files are byte-identical to v161. No production migration or deployment occurred.

## Bootstrap blocker

Sites' configured source branch is main at c49bd604aef109324f0bb7181182603322598e11. GitHub main contains the production tree, but not that original commit in its ancestry. A normal push of the verified merged GitHub SHA to Sites was rejected as non-fast-forward. Sites save_site_version requires the exact HEAD of its configured source branch, so publishing from another branch or inventing a substitute SHA is not a solution.

The repository safety rule `.agents/rules/spanishcue-safety.md` prohibits force-push. No forced source update was attempted. Release state remains enabled=false and the merge-event automation must remain paused until one supported bootstrap is completed:

- Import the original production Git history into GitHub using an authorized Git write transport, then merge a PR that includes the production commit as an ancestor; or
- Explicitly authorize a one-time, backed-up, lease-protected alignment of the Sites source branch to verified GitHub main. This changes the source reference only, not production, and must preserve the v161 source and saved deployment before alignment.

After bootstrap, verify main contains every v161 runtime file, sensitive-file equality, CI success, source SHA equality, and production smoke. Publish only merged main, record the healthy baseline, then enable release state and resume the automation. A live rollback has not been exercised by the policy unit tests.
