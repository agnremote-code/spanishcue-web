import { env } from "cloudflare:workers";
import { paddleConfig } from "../../../../paddle-config";
import { listPaddleNotificationSettings } from "../../../../paddle-server";
import { summarizeDestinations } from "../../../../paddle-webhook-status";

export const dynamic = "force-dynamic";

type Status = Record<string, unknown>;
// Per isolate: the release smoke and a curious visitor must not hammer the Paddle API.
let cached: { at: number; body: Status } | null = null;

export async function GET() {
  if (cached && Date.now() - cached.at < 600_000) return Response.json(cached.body, { headers: { "cache-control": "no-store" } });
  const config = paddleConfig(env);
  let body: Status;
  if (!config.apiKey) body = { destination: "unavailable", reason: "not_configured" };
  else {
    try {
      body = summarizeDestinations(await listPaddleNotificationSettings(config));
    } catch (error) {
      // paddle_api_403 = the API key lacks the notification settings read permission.
      body = { destination: "unavailable", reason: error instanceof Error ? error.message.slice(0, 40) : "error" };
    }
  }
  const last = await env.DB.prepare(
    "SELECT MAX(received_at) AS at FROM payment_webhook_events WHERE provider = 'paddle' AND environment = 'live'",
  ).first<{ at: number | null }>().catch(() => null);
  body = { ...body, lastEventAt: last?.at ?? null, checkedAt: Math.floor(Date.now() / 1000) };
  cached = { at: Date.now(), body };
  return Response.json(body, { headers: { "cache-control": "no-store" } });
}
