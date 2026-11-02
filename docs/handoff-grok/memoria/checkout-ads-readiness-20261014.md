---
name: checkout-ads-readiness-20261014
description: 2026-10-14 checkout/Google Ads readiness thread: conversion contract, PR #181/#cuenta panel, prod billing facts found
metadata:
  type: project
  modified: 2026-10-14T10:32:39.082Z
---
Thread "SpanishCue production & checkout release ready" (cmsg_01Gr5R4j3t2Yet65UcmhcVhAPE6XWXHFFtnX5XXr9xY6tp), started 2026-10-14.

Prod D1 facts read 2026-10-14 ~09:40Z:
- The one real PayPal Live founder subscription was CANCELLED at PayPal on 2026-10-02 02:57Z (BILLING.SUBSCRIPTION.CANCELLED webhook). Access stays until paid_through 2026-10-23; it will NOT renew.
- Zero Paddle webhook events have ever reached production, and 0 Paddle payments; 15 Paddle claims stopped at checkout/started. Whether Paddle's notification destination is configured cannot be checked from the container (no Paddle connector).

Conversion contract (PR #181, branch claude/checkout-ads-ready-20261014):
- Google Ads purchase label fires only for the first server-verified paid transaction per subscription: US$2 trial (plan=trial) or first US$15.50 month. /api/billing/conversion returns {transactionId,value,currency,plan}. Before this, trial buyers never produced a conversion.
- GA4: trial_purchase / first_subscription_payment + verified_purchase alias; one checkout_start with plan trial|monthly|paypal.
- Post-trial first month and renewals: server-side GA4 Measurement Protocol only if Worker secret GA4_API_SECRET exists (not set) and a consented GA client id was captured; else stays in billing_outbox_events.
- gclid/gbraid/wbraid + UTMs stored in Paddle custom_data as spanishcue_*.
- POST /api/billing/refresh with no id reconciles the user's Paddle subscription from the API (lost-webhook backup); /cuenta calls it when access looks lapsed.
- production-smoke.mjs now checks Live Paddle offers and webhook readiness (forged signature → 401).
State 2026-10-14 10:35Z: #181 + #183 merged, LIVE at f6fc1e6, production smoke green (incl. new billing checks; Live-only checks run only on spanishcue.com). Still pending on Ale's side: confirming the Paddle notification destination (transaction.completed, transaction.payment_failed, subscription.*); optionally setting GA4_API_SECRET. No real charge has ever been tested end to end.
Panel fixes PR #182 (load errors, trial state, declined payment, Paddle portal /api/billing/portal, resubscribe) LIVE 2026-10-14 ~11:55Z, main 0e9f3fe, prod deploy + smoke green; Ale approved the 11 English strings 11:10Z (manifest docs/audits/subscription-panel-english-additions-20261014.json).
