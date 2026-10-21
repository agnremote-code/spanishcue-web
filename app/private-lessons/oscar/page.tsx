import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { env } from "cloudflare:workers";
import "./style.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Private Spanish lessons | SpanishCue",
  description: "Private Spanish lesson package, shared directly with the invited student.",
  robots: { index: false, follow: false, noarchive: true },
};

type InviteParams = { invite?: string | string[] };
type InviteEnvironment = {
  PRIVATE_LESSONS_OSCAR_INVITE_TOKEN?: string;
  PRIVATE_LESSONS_OSCAR_PAYPAL_URL?: string;
};

async function matchesInvite(candidate: string | string[] | undefined, expected: string | undefined): Promise<boolean> {
  if (typeof candidate !== "string" || candidate.length < 24 || candidate.length > 256 ||
      !expected || expected.length < 24 || expected.length > 256) return false;

  // Equal work for matching or non-matching tokens of any valid length.
  const encoder = new TextEncoder();
  const [actualHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(candidate)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  const a = new Uint8Array(actualHash);
  const b = new Uint8Array(expectedHash);
  let difference = 0;
  for (let index = 0; index < a.length; index++) difference |= a[index] ^ b[index];
  return difference === 0;
}

function validPayPalPaymentLink(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    const trusted = hostname === "paypal.com" || hostname === "www.paypal.com" || hostname === "paypal.me" || hostname === "www.paypal.me";
    if (url.protocol !== "https:" || !trusted || url.username || url.password || !url.pathname || url.pathname === "/") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export default async function OscarPrivateLessons({
  searchParams,
}: {
  searchParams: Promise<InviteParams>;
}) {
  const configuration = env as unknown as InviteEnvironment;
  const { invite } = await searchParams;
  if (!(await matchesInvite(invite, configuration.PRIVATE_LESSONS_OSCAR_INVITE_TOKEN))) notFound();

  const paymentUrl = validPayPalPaymentLink(configuration.PRIVATE_LESSONS_OSCAR_PAYPAL_URL);

  return (
    <main className="spc-private-lessons">
      <div className="spc-private-shell">
        <header className="spc-private-top">
          <Link href="/" className="spc-private-brand" aria-label="SpanishCue home">SPANISH<span>CUE</span></Link>
          <span className="spc-private-chip">PERSONAL INVITATION</span>
        </header>

        <div className="spc-private-eyebrow">PRIVATE SPANISH LESSONS</div>
        <h1>Welcome back, Oscar.</h1>
        <p className="spc-private-intro">
          Keep your Spanish moving forward, wherever your travels take you.
          We can choose lesson dates together around your schedule.
        </p>

        <section className="spc-private-card" aria-labelledby="oscar-package-title">
          <div className="spc-private-card-head">
            <div>
              <p className="spc-private-label">YOUR LESSON PACKAGE</p>
              <h2 id="oscar-package-title">4 private lessons</h2>
            </div>
            <div className="spc-private-total"><span>USD</span> $120</div>
          </div>

          <div className="spc-private-breakdown">
            <span>$30 per lesson</span>
            <span>One-time payment</span>
          </div>
          <ul className="spc-private-benefits">
            <li>Live 1-to-1 lessons via Google Meet</li>
            <li>Flexible scheduling while you're travelling</li>
            <li>Personalized interactive homework through SpanishCue</li>
          </ul>

          {paymentUrl ? (
            <>
              <a className="spc-private-pay" href={paymentUrl} target="_blank" rel="noopener noreferrer">
                Pay $120 securely with PayPal <span aria-hidden="true">↗</span>
              </a>
              <p className="spc-private-note">
                PayPal will show the final amount before you confirm. The link opens a separate secure checkout.
              </p>
            </>
          ) : (
            <div className="spc-private-pending" role="status">
              Payment link being prepared. Your teacher will send you the checkout once it's ready.
            </div>
          )}
        </section>

        <section className="spc-private-homework" aria-labelledby="oscar-homework-title">
          <p className="spc-private-label">AFTER PAYMENT</p>
          <h2 id="oscar-homework-title">Your own practice space</h2>
          <p>
            You'll receive a personal homework invitation after payment is confirmed.
            It includes activities and progress tracking between lessons.
          </p>
          <p className="spc-private-note">
            Payment does not automatically activate an account or unlock the full SpanishCue PRO library.
          </p>
        </section>
        <footer className="spc-private-footer">
          SpanishCue · Private classes with your teacher · Questions? Reply in our existing conversation.
        </footer>
      </div>
    </main>
  );
}
