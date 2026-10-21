# Oscar private lessons checkout

This private checkout is for 4 individually scheduled, 60-minute Google Meet Spanish lessons at USD 30 each (USD 120 total). Personalized homework is issued separately through the existing SpanishCue teacher/student system.

## Live PayPal link

The owner created the one-time payment link:
`https://www.paypal.com/ncp/payment/WL9D4V7W3H6F2`

The private page uses this link unless the server environment explicitly overrides it with `PRIVATE_LESSONS_OSCAR_PAYPAL_URL`. PayPal is the source of truth for payment amount and merchant identity. Before sharing, manually open the hosted PayPal checkout to confirm it displays **USD 120, one-time payment**, and that its merchant is SPANISHCUE.

## Private invitation

Private route: `/private-lessons/oscar?invite=<random-private-token>`.
The source code contains only the SHA-256 **digest** of a random 256-bit invite token. No raw token is stored in GitHub. The owner receives the full invite URL privately. The runtime may replace the token with the existing optional secret `PRIVATE_LESSONS_OSCAR_INVITE_TOKEN`, if needed.

Missing or incorrect invite = 404. The route is noindex/no-store and deliberately excluded from global analytics. Do not paste the full invite into public comments or issues.

## Release and homework

1. Wait for the CI + Auto Merge workflow to merge the implementation into main and verify the final SHA.
2. Deploy using the project's canonical Cloudflare production workflow. Do not bypass release controls.
3. Smoke-test the private link and confirm the checkout is USD 120 and no subscription.
4. After PayPal shows the payment settled, issue a Homework pass using the existing dashboard (`/cuenta?tab=alumnos`) and privately share that separate learner link.

This page doesn't process card details, change the existing PayPal/Paddle subscription integration, or automatically grant Homework or PRO access. Do not infer payment settlement from clicking a link or returning to SpanishCue.

External billing may be restricted for students sourced from a third-party tutoring marketplace. Check applicable terms before using the link in that circumstance.
