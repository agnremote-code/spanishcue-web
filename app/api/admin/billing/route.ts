import { env } from "cloudflare:workers";
import { billingConfig } from "../../../billing-config";
import { getFounderOfferStatus } from "../../../../db/billing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [users, subscriptions, founder] = await Promise.all([
      env.DB.prepare(`SELECT COUNT(*) AS total, SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) AS active FROM users`).first<{ total: number; active: number }>(),
      env.DB.prepare(`SELECT
        SUM(CASE WHEN status = 'ACTIVE' THEN 1 ELSE 0 END) AS activePro,
        SUM(CASE WHEN status = 'PENDING' THEN 1 ELSE 0 END) AS pending,
        SUM(CASE WHEN status = 'CANCELLED' THEN 1 ELSE 0 END) AS cancelled,
        SUM(CASE WHEN status = 'SUSPENDED' THEN 1 ELSE 0 END) AS suspended,
        SUM(CASE WHEN last_failure_at IS NOT NULL THEN 1 ELSE 0 END) AS paymentFailures
        FROM billing_subscriptions`).first<Record<string, number | null>>(),
      getFounderOfferStatus(env.DB, billingConfig(env)),
    ]);
    return Response.json({
      totalUsers: users?.total ?? 0,
      freeUsers: Math.max(0, (users?.active ?? 0) - (subscriptions?.activePro ?? 0)),
      activePro: subscriptions?.activePro ?? 0,
      pending: subscriptions?.pending ?? 0,
      cancelled: subscriptions?.cancelled ?? 0,
      suspended: subscriptions?.suspended ?? 0,
      paymentFailures: subscriptions?.paymentFailures ?? 0,
      founder,
    }, { headers: { "cache-control": "private, no-store" } });
  } catch {
    return Response.json({ error: "No pudimos cargar el estado de pagos." }, { status: 503 });
  }
}
