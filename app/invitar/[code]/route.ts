import { REFERRAL_COOKIE } from "../../referrals-server";

export const dynamic = "force-dynamic";

/** «Invitá a un colega» link: remembers the code for 60 days and opens pricing.
 * The code only reaches Paddle custom_data at checkout; it never grants access. */
export async function GET(request: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const headers = new Headers({ location: new URL("/pricing#invitacion", request.url).toString(), "cache-control": "private, no-store" });
  if (/^[A-HJ-NP-Z2-9]{8}$/.test(code)) {
    headers.append("set-cookie", `${REFERRAL_COOKIE}=${code}; Path=/; Max-Age=${60 * 86400}; SameSite=Lax; Secure; HttpOnly`);
  }
  return new Response(null, { status: 302, headers });
}
