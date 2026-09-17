# SpanishCue · Required Owner Actions (Alejandro)

The following actions genuinely require manual intervention by the project owner (Alejandro). All technical agent tasks remain blocked on these external dependencies where specified.

---

## 1. Git Repository Push Authentication

### Action 1.1: Push Audit Branch `antigravity/launch-audit` to GitHub Remote
- **Where to do it**: Terminal / Git CLI in repository `/Users/alejandronunez/Projects/spanishcue-antigravity`.
- **Why it is needed**: The local branch `antigravity/launch-audit` contains commit `76c541d` with all audit documentation. Direct `git push` requires valid GitHub authentication (Personal Access Token or SSH key for `agnremote-code/spanishcue-web.git`).
- **Command**:
  ```bash
  git push -u origin antigravity/launch-audit
  ```

---

## 2. Payment Provider Setup (PayPal Sandbox & Production)

### Action 2.1: Create PayPal Developer Application & Obtain Credentials
- **Where to do it**: PayPal Developer Dashboard ([developer.paypal.com](https://developer.paypal.com)) -> Apps & Credentials.
- **Why it is needed**: To allow the application to process payments, initiate subscriptions, and render the PayPal SDK checkout buttons.
- **Credential Variable Names Needed**:
  - `NEXT_PUBLIC_PAYPAL_CLIENT_ID` (Sandbox & Live)
  - `PAYPAL_CLIENT_SECRET` (Sandbox & Live)

### Action 2.2: Configure Webhook URL in PayPal Dashboard
- **Where to do it**: PayPal Developer Dashboard -> My Apps & Credentials -> App Details -> Webhooks.
- **Why it is needed**: To notify SpanishCue when a subscription payment succeeds, recurs, or fails, so user PRO entitlements stay synced in real time.
- **Credential Variable Name Needed**:
  - `PAYPAL_WEBHOOK_ID`

---

## 3. Environment Variables & Cloudflare Secrets Configuration

### Action 3.1: Bind PayPal Credentials to Sites / Cloudflare Worker Environment
- **Where to do it**: OpenAI Sites / Cloudflare Environment Settings dashboard or CLI secret binding commands.
- **Why it is needed**: To allow server-side API endpoints (`/api/checkout/create-order`, `/api/webhooks/paypal`) to securely authenticate with PayPal APIs without committing credentials to source control.
- **Variables to Bind**:
  - `PAYPAL_ENV` (`sandbox` or `live`)
  - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
  - `PAYPAL_CLIENT_SECRET`
  - `PAYPAL_WEBHOOK_ID`

---

## 4. Product & Commercial Policy Decisions

### Action 4.1: Confirm Brand & Domain Strategy
- **Where to do it**: Decision in project configuration / metadata.
- **Why it is needed**: Codebase currently references `CHESPANISH Teacher Studio` (`biblioteca-espanol.agnremote.chatgpt.site`), whereas prompt specifies `SpanishCue`. Clear alignment is needed before setting up final payment webhooks, transactional communications, and legal terms.

### Action 4.2: Review & Approve Terms of Service and Privacy Policy
- **Where to do it**: Legal documentation review.
- **Why it is needed**: Mandated by payment providers (PayPal) and international consumer privacy laws before accepting live commercial transactions.
