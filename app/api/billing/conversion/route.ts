import { env } from "cloudflare:workers";
import { accountIdFromHeaders } from "../../../access-policy";
import { billingConfig } from "../../../billing-config";
import { claimFirstPaidConversionForUser } from "../../../../db/billing";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origen no válido." }, { status: 403 });
  const config = billingConfig(env);
  const analyticsEnv = env as unknown as Partial<Record<"ANALYTICS_CONVERSIONS_ENABLED", string>>;
  if (config.paypalEnv !== "live" || analyticsEnv.ANALYTICS_CONVERSIONS_ENABLED !== "true") {
    return new Response(null, { status: 204, headers: { "cache-control": "private, no-store" } });
  }
  const userId = accountIdFromHeaders(request.headers);
  if (!userId) return Response.json({ error: "Iniciá sesión para continuar." }, { status: 401 });
  const raw = await request.text();
  let subscriptionId = "";
  try { subscriptionId = (JSON.parse(raw) as { subscriptionId?: unknown }).subscriptionId as string; } catch { return Response.json({ error: "Solicitud no válida." }, { status: 400 }); }
  if (typeof subscriptionId !== "string" || subscriptionId.length < 1 || subscriptionId.length > 160) return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  const conversion = await claimFirstPaidConversionForUser(env.DB, userId, subscriptionId, config.paypalEnv);
  if (!conversion) return new Response(null, { status: 404, headers: { "cache-control": "private, no-store" } });
  return Response.json({ transactionId: conversion.transactionId }, { headers: { "cache-control": "private, no-store" } });
}
