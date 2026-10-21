# Oscar private lessons checkout

The private offer is four individual Google Meet lessons for USD 120, with flexible scheduling. Homework is provided separately through the existing teacher/student system.

## Before use

1. Create a **one-time USD 120** checkout link in the owner's PayPal Business dashboard.
2. Configure two runtime variables on the Cloudflare Worker:
   - `PRIVATE_LESSONS_OSCAR_INVITE_TOKEN`: a long, random, private URL token (24–256 characters). Do not commit its value.
   - `PRIVATE_LESSONS_OSCAR_PAYPAL_URL`: the verified HTTPS PayPal checkout link, priced at USD 120.
3. Publish using the project's normal Cloudflare production workflow.
4. Verify that `/private-lessons/oscar` without a matching invite parameter responds with 404 and that the valid private page has noindex. Confirm that the checkout destination and amount are correct.
5. Send the private link in a direct message. After payment is verified in PayPal, issue the student's existing Homework pass using the teacher dashboard (`/cuenta?tab=alumnos`).

There is no automatic activation on payment. Do not grant SpanishCue PRO access from this payment. The page is intentionally unavailable before the invite token is configured and the checkout button is intentionally unavailable before the PayPal link is configured.

Payment and lesson activity occurring outside a marketplace may be subject to that marketplace's contractual restrictions. Verify those terms before sending the link.
