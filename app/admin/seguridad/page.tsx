import { env } from "cloudflare:workers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ownerFromHeaders, signedInFromHeaders } from "../../access-policy";
import { traceWatermark, WATERMARK_META } from "../../license-watermark";
import "../../teachers.css";

export const dynamic = "force-dynamic";

type TraceResult = { state: "empty" } | { state: "unavailable" } | { state: "unknown" } | { state: "found"; email: string; day: string };

async function trace(token: string): Promise<TraceResult> {
  if (!token) return { state: "empty" };
  const secret = (env as unknown as { AUTOESTUDIO_SHARE_SECRET?: string }).AUTOESTUDIO_SHARE_SECRET;
  if (!secret) return { state: "unavailable" };
  const rows = await env.DB.prepare("SELECT id, email FROM users").all<{ id: string; email: string }>();
  const accounts = rows.results ?? [];
  const found = await traceWatermark(secret, token, accounts.map((row) => row.id));
  if (!found) return { state: "unknown" };
  const day = `${found.day.slice(6, 8)}/${found.day.slice(4, 6)}/${found.day.slice(0, 4)}`;
  return { state: "found", email: accounts.find((row) => row.id === found.accountId)?.email ?? found.accountId, day };
}

export default async function SecurityAdmin({ searchParams }: { searchParams: Promise<{ marca?: string }> }) {
  const requestHeaders = await headers();
  if (!signedInFromHeaders(requestHeaders)) redirect("/ingresar?modo=entrar&returnTo=%2Fadmin%2Fseguridad");
  if (!ownerFromHeaders(requestHeaders)) redirect("/cuenta");
  const token = typeof (await searchParams).marca === "string" ? (await searchParams).marca!.slice(0, 80) : "";
  const result = await trace(token).catch((): TraceResult => ({ state: "unavailable" }));

  return (
    <div className="teacher-app">
      <main className="teacher-main">
        <Link href="/admin">← Administración</Link>
        <section className="teacher-intro" style={{ marginTop: 32 }}>
          <p>SOLO TÚ · SEGURIDAD</p>
          <h1>Rastrear una copia.</h1>
          <div>
            Cada clase PRO que abre una cuenta lleva una marca invisible con la cuenta y el día. Si encuentras una copia,
            busca en su código la etiqueta <code>{WATERMARK_META}</code> y pega aquí su valor (empieza por <code>v1.</code>).
          </div>
        </section>
        <form method="get" style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0" }}>
          <input name="marca" defaultValue={token} placeholder="v1.20261021.…" aria-label="Marca" style={{ flex: "1 1 280px", padding: "10px 12px" }} />
          <button type="submit">Buscar cuenta</button>
        </form>
        {result.state === "found" && <p role="status">Esta copia salió de la cuenta <strong>{result.email}</strong>, abierta el {result.day} (UTC).</p>}
        {result.state === "unknown" && <p role="status">Esta marca no corresponde a ninguna cuenta. Puede estar incompleta o alterada.</p>}
        {result.state === "unavailable" && <p role="status">No pudimos comprobar la marca ahora. Vuelve a intentarlo más tarde.</p>}
      </main>
    </div>
  );
}
