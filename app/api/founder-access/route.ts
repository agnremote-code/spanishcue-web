import { accountIdFromHeaders } from "../../access-policy";
import { reserveFounderLead } from "../../../db/founder-leads";
import { readOffer } from "../../../db/offer";
import { discountedCents } from "../../offer";

export const dynamic = "force-dynamic";

function safePath(value: unknown) {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//") && value.length <= 300
    ? value
    : "/";
}

function validEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json({ message: "Origen no válido." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ message: "Formato no válido." }, { status: 415 });
  }

  try {
    const raw = await request.text();
    if (raw.length > 2048) return Response.json({ message: "Solicitud demasiado grande." }, { status: 413 });
    let body: Record<string, unknown>;
    try {
      body = JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return Response.json({ message: "Formato no válido." }, { status: 400 });
    }
    if (typeof body.website === "string" && body.website.trim()) {
      return Response.json({ message: "Tu precio fundador quedó reservado." });
    }

    const email = typeof body.email === "string" ? body.email.trim() : "";
    const normalizedEmail = email.toLowerCase();
    const displayName = typeof body.name === "string" && body.name.trim()
      ? body.name.trim().slice(0, 80)
      : null;
    if (!validEmail(normalizedEmail)) {
      return Response.json({ message: "Ingresá un email válido." }, { status: 400 });
    }

    const offer = await readOffer();
    const result = await reserveFounderLead({
      email,
      normalizedEmail,
      displayName,
      accountId: accountIdFromHeaders(request.headers),
      sourcePath: safePath(body.returnTo),
      offerPriceCents: discountedCents(offer),
      offerRevision: offer.revision,
      maxTeachers: offer.maxTeachers,
    });

    if (!result.reserved) {
      return Response.json({ message: "Los lugares de fundador ya están completos." }, { status: 409 });
    }
    return Response.json(
      {
        message: result.alreadyReserved
          ? "Este email ya tenía reservado el precio fundador."
          : "Guardamos tu lugar. Te avisaremos antes de activar la suscripción.",
      },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  } catch {
    return Response.json(
      { message: "No pudimos reservar tu lugar. Intentá nuevamente." },
      { status: 503 },
    );
  }
}
