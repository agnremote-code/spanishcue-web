// Read-only check that Paddle sends its events to the production webhook.
const WEBHOOK_URL = "https://spanishcue.com/api/billing/paddle/webhook";
// Every event the webhook handler acts on.
export const PADDLE_WEBHOOK_EVENTS = [
  "transaction.completed", "transaction.payment_failed",
  "subscription.created", "subscription.updated", "subscription.canceled", "subscription.activated",
  "subscription.trialing", "subscription.paused", "subscription.past_due",
];

export function summarizeDestinations(settings: { destination?: string; active?: boolean; api_version?: number; subscribed_events?: { name?: string }[] }[]) {
  const normalize = (url: string) => url.trim().replace(/\/+$/, "").replace("://www.", "://");
  const matches = settings.filter((setting) => typeof setting.destination === "string" && normalize(setting.destination) === WEBHOOK_URL);
  const best = matches.find((setting) => setting.active) || matches[0];
  if (!best) return { destination: "missing", destinations: settings.length };
  const subscribed = new Set((best.subscribed_events || []).map((event) => event.name).filter(Boolean));
  return {
    destination: "found",
    active: best.active === true,
    apiVersion: best.api_version ?? null,
    missingEvents: PADDLE_WEBHOOK_EVENTS.filter((name) => !subscribed.has(name)),
  };
}
