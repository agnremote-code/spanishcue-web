// Display-only USD → ARS rate for visitors who arrive from the ChatGPT ad (Ale, 2026-11-04).
// Charges never change: Paddle and PayPal keep billing in USD. Official BCRA reference rate
// (Comunicación A 3500) first, DolarAPI's official quote as fallback; cached about an hour.
// If both fail the client hides the AR$ line.
export const dynamic = "force-dynamic";

type Rate = { rate: number; date: string; source: "BCRA" | "DolarAPI" };
let cached: { value: Rate; at: number } | null = null;
const TTL_MS = 60 * 60 * 1000;

async function fromBcra(): Promise<Rate | null> {
  const response = await fetch("https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?limit=10", { signal: AbortSignal.timeout(4000) });
  if (!response.ok) return null;
  const body = await response.json() as { results?: { fecha?: string; detalle?: { tipoCotizacion?: number }[] }[] };
  const latest = body.results?.[0];
  const rate = latest?.detalle?.[0]?.tipoCotizacion;
  return typeof rate === "number" && rate > 0 && latest?.fecha ? { rate, date: latest.fecha, source: "BCRA" } : null;
}

async function fromDolarApi(): Promise<Rate | null> {
  const response = await fetch("https://dolarapi.com/v1/dolares/oficial", { signal: AbortSignal.timeout(4000) });
  if (!response.ok) return null;
  const body = await response.json() as { venta?: number; fechaActualizacion?: string };
  return typeof body.venta === "number" && body.venta > 0 ? { rate: body.venta, date: String(body.fechaActualizacion ?? "").slice(0, 10), source: "DolarAPI" } : null;
}

export async function GET() {
  if (!cached || Date.now() - cached.at > TTL_MS) {
    const value = await fromBcra().catch(() => null) ?? await fromDolarApi().catch(() => null);
    if (value) cached = { value, at: Date.now() };
  }
  if (!cached) return Response.json({ available: false }, { status: 503, headers: { "cache-control": "no-store" } });
  return Response.json({ available: true, ...cached.value }, { headers: { "cache-control": "public, max-age=3600" } });
}
