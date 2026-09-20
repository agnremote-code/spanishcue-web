# SPANISHCUE · Owner / External-Service Actions

This file lists only actions that cannot be proven or safely completed from repository source alone.

## 1. Production release state

GitHub can verify source and merge safety, but it cannot currently prove which commit OpenAI Sites is serving.

Before calling a release complete, verify through the existing Sites deployment path:

- exact production deployment/version;
- exact deployed Git commit;
- production smoke result after publication;
- rollback target/version.

Do not redeploy a commit merely because its GitHub PR merged.

## 2. Production D1 state

The repository contains the schema and migrations, but source control does not prove production migration state.

Before applying any production migration:

- take/confirm the required production backup;
- inspect which migrations are already applied;
- apply only missing ordered migrations;
- verify application health after the migration.

Never replay migrations blindly.

## 3. PayPal external configuration

The PayPal integration already exists in code. **Do not create duplicate PayPal products, plans, apps, or webhooks merely because an old audit says they are missing.**

External verification is still required for whichever environment is being released:

- client ID / secret binding;
- configured product and plan IDs;
- webhook ID and callback URL;
- required webhook event subscriptions;
- Sandbox vs Live environment;
- explicit approval before enabling Live checkout.

Live charging is not authorized by a GitHub merge.

## 4. Firebase verification-email deliverability

Application-side verification and branded verification flows exist, but sender reputation, custom sender/domain configuration, DNS authentication, and mailbox placement are external to GitHub.

If deliverability work is still incomplete, verify the Firebase/custom-email configuration and required DNS records in the owning dashboards. Do not weaken email verification to work around deliverability.

## 5. Analytics and Ads

GA4 integration exists and requires consent. External configuration still determines whether measurement is actually active.

- Verify the intended GA4 measurement ID in the production environment.
- Keep Google Ads inactive until campaign/landing configuration is intentionally approved.
- Do not infer Ads activation from analytics code or landing-page assets.

## 6. Legal/commercial approval

Legal/privacy/refund pages exist in code. Final commercial/legal approval remains a human decision, especially before Live payments are enabled.

## No longer pending owner decisions

The following old audit items are no longer valid owner blockers:

- choosing between CHESPANISH and SPANISHCUE as the product/domain identity;
- creating the core D1 account/subscription/student schema;
- building the account/student dashboard;
- implementing the PayPal application integration;
- adding baseline legal, SEO, sitemap/robots, and consent-gated analytics code.
