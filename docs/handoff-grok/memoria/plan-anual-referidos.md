---
name: plan-anual-referidos
description: Annual plan US$129/yr (Paddle price pri_01m684zshhms5kzznb7s3kjfss, PR #316) and pending referral program «Invitá a un colega» (needs Paddle dsc_ id)
metadata:
  type: project
---
Ale 2026-10-31 asked for an annual plan and referrals (part of [[google-ads-profes-2026-10-30]]). Guarantee PR #311 LIVE (prod deploy 05:00Z).

Annual: Ale created Paddle Live price pri_01m684zshhms5kzznb7s3kjfss (US$129/yr, Includes tax = tax_mode internal, no trial, qty 1–1, product pro_01m38sbhv4c8756pat80kfhda0). Pinned in app/paddle-config.ts (PADDLE_ANNUAL_PRICE_ID, paddleAnnualReady); 12900 cents added to every amount allow-list; PR #316.

Referrals LIVE 2026-10-31 06:37Z (prod 9b043e9; annual too, via PR #317 which carried #316; /invitar/CODE → cookie spanishcue_ref → Paddle custom_data; tables drizzle/0019; app/referrals-server.ts + db/referrals.ts; account panel in tab Suscripción): referred teacher pays month 1, gets month 2 free; referrer gets next month free after the referred's first settled payment. Apply a Paddle one-time 100% discount via PATCH subscription (effective next billing period); webhook must accept $0 renewal only with that discount id. Needs D1 tables + prepare steps in both deploy workflows. Ale created discount dsc_01m686383k32zpnm3t5geedqss (100%, one period, only pri_01m38sk06dtyhga2d4h36rt5dc, no checkout code) 2026-10-31 05:15Z.
